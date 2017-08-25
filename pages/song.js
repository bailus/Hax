import Page from '../js/page'
import { seconds2shortstring, makeJsLink, parseYear } from '../js/util'

export default (new Page({
	'id': 'Song',
	'view': 'list',
	'icon': state => 'img/icons/default/DefaultMusicSongs.png',
	'parentState': ({ albumid }) => ({ 'page': 'Album', 'albumid': albumid }),
	'data': function (state) {

		const songid = +state['songid']

		const getSongDetails = xbmc.get({
			'method': 'AudioLibrary.GetSongDetails',
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Song
					"title", "artist", "albumartist", "genre", "year", "rating", "album", "track", "duration", "comment", "lyrics", "musicbrainztrackid",
					"musicbrainzartistid", "musicbrainzalbumid", "musicbrainzalbumartistid", "playcount", "fanart", "thumbnail", "file", "albumid",
					"lastplayed", "disc", "genreid", "artistid", "displayartist", "albumartistid"
				],
				'songid': songid
			},
			cache: true
		})

		const formatSongDetails = getSongDetails
		.then(({ songdetails: {
			title, artist, albumartist, genre, year, rating, votes, album, track, duration, comment, lyrics, musicbrainztrackid,
			musicbrainzartistid, musicbrainzalbumid, musicbrainzalbumartistid, playcount, fanart, thumbnail, file, albumid,
			lastplayed, disc, genreid, artistid, displayartist, albumartistid
		} }) => { //format album details
			const page = {
				'title': `${ displayartist || artist.join(', ')}`,
				'titleLink': `#page=Artist&artistid=${ artistid }`,
				'subtitle': `(${parseYear(year)}) ${album}`,
				'subtitleLink': `#page=Album&artistid=${ albumartistid }&albumid=${ albumid }`,
				'label': (track > 0 ? `${ track }. ` : '') + title,
				'thumbnail': thumbnail ? xbmc.vfs2uri(thumbnail) : 'img/icons/default/DefaultMusicSongs.png',
				'fanart': xbmc.vfs2uri(fanart),
				'details': [
					votes !== undefined && votes > 0 && {
						'name': 'Rating',
						'flags': [
							{
								'class': 'starrating',
								'value': Math.round(rating),
								'caption': `(${votes} votes)`
							}
						]
					},
					duration !== undefined && duration > 0 && {
						'class': 'runtime',
						'name': 'Runtime',
						'value': seconds2shortstring(duration)
					},
					displayartist != albumartist && {
						'class': 'artist',
						'name': 'Artist',
						'links': artist.map(artist => ({
							'label': artist
						}))
					},
					comment !== undefined && comment.length > 0 && {
						'class': 'comment',
						'name': 'Comment',
						'value': comment
					},
					genre !== undefined && genre.length > 0 && {
						'class': 'genre',
						'name': 'Genre',
						'links': genre.map(genre => ({
									label: genre,
									link: '#page=Albums&genre='+genre
								}))
					},
					lyrics !== undefined && lyrics.length > 0 && {
						'class': 'lyrics',
						'name': 'Lyrics',
						'value': lyrics
					},
					file !== undefined && file.length > 0 && {
						'class': 'file',
						'name': 'File',
						'links': [
							{
								'label': file,
								'link': `${ xbmc.vfs2uri(file) }`
							}
						]
					}
				],
				'actions': [
					{
						'label': 'Play',
						'thumbnail': 'img/icons/infodialogs/play.png',
						'link': makeJsLink(`xbmc.Play({ 'songid': (${ songid }) }, 0)`)
					},
					{
						'label': 'Add to playlist',
						'thumbnail': 'img/buttons/add.png',
						'link': makeJsLink(`xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'songid': (${ songid }) } })`)
					}
				]
			}

			if (thumbnail) page.thumbnail = xbmc.vfs2uri(thumbnail)

			return page
		})


		const getMusicVideos = getSongDetails
		.then(({ songdetails: { artist, album, title } }) => xbmc.get({
			'method': 'VideoLibrary.GetMusicVideos',
			'params': {
				'properties': [ 'title', 'genre', 'runtime', 'year', 'album', 'artist', 'track', 'thumbnail' ],
				'filter': { 'and': [{
					'field': 'artist',
					'operator': 'contains',
					'value': artist
				},{
					'field': 'album',
					'operator': 'is',
					'value': album
				},{
					'field': 'title',
					'operator': 'is',
					'value': title
				}]}
			}
		})
		.then(({ musicvideos=[] }) => musicvideos.map(({
			title, album, year, thumbnail, musicvideoid, track
		}) => ({
			'label': title,
			'details': track > 0 ? `Track ${track}` : '',
			'thumbnail': thumbnail ? xbmc.vfs2uri(thumbnail) : undefined,
			'link': '#page=Music Video&musicvideoid='+musicvideoid
		}))))


		return Promise.all([ formatSongDetails, getMusicVideos ])      //wait for the above to finish
		.then( ( [ page, musicVideos ] ) => { //create the page
			if (musicVideos.length > 0) page.details.push({
				'name': 'Music Videos',
				'iconList': musicVideos
			})
			return page
		})

	}
}));
