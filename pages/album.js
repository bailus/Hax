import Page from '../js/page'
import { seconds2shortstring, makeJsLink, parseYear } from '../js/util'

export default (new Page({
	'id': 'Album',
	'view': 'list',
	'parent': 'Music',
	'icon': state => 'img/icons/default/DefaultMusicAlbums.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Music' }),
	'data': function (state) {

		const albumid = +state['albumid']

		const getAlbumDetails = xbmc.get({
			'method': 'AudioLibrary.GetAlbumDetails',
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Album
					"title", "description", "artist", "genre", "theme", "mood", "style", "type", "albumlabel", "rating", "year", "musicbrainzalbumid",
					"musicbrainzalbumartistid", "fanart", "thumbnail", "playcount", "genreid", "artistid", "displayartist"
				],
				'albumid': albumid
			},
			cache: true
		})
		.then(({ albumdetails={} }) => albumdetails)
		//.then(x => {console.log(x);return x})

		const getPage = getAlbumDetails
		.then(({
			label,
			title,
			description,
			artist,
			genre=[],
			theme,
			mood=[],
			style=[],
			type,
			albumlabel,
			rating,
			votes,
			year,
			fanart,
			thumbnail,
			playcount,
			genreid,
			artistid,
			displayartist
		}) => { //format album details
			const page = {
				'title': `${ displayartist || artist.join(', ')}`,
				'titleLink': `#page=Artist&artistid=${ artistid }`,
				'label': `(${parseYear(year)}) ${title}`,
				'thumbnail': thumbnail ? xbmc.vfs2uri(thumbnail) : 'img/icons/default/DefaultAlbumCover.png',
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
					mood !== undefined && mood.length > 0 && {
						'name': 'Mood',
						'links': mood.map(mood => ({
									label: mood,
									link: '#page=Albums&mood='+mood
								}))
					},
					style !== undefined && style.length > 0 && {
						'name': 'Style',
						'links': style.map(style => ({
									label: style,
									link: '#page=Albums&style='+style
								}))
					},
					genre !== undefined && genre.length > 0 && {
						'name': 'Genre',
						'links': genre.map(genre => ({
									label: genre,
									link: '#page=Albums&genre='+genre
								}))
					},
					description !== undefined && description.length > 0 && {
						'name': 'Description',
						'value': description
					}
				],
				'actions': [
					{
						'label': 'Play',
						'thumbnail': 'img/icons/infodialogs/play.png',
						'link': makeJsLink(`xbmc.Play({ 'albumid': (${ albumid }) }, 0)`)
					},
					{
						'label': 'Add to playlist',
						'thumbnail': 'img/buttons/add.png',
						'link': makeJsLink(`xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'albumid': (${ albumid }) } })`)
					}
				]
			}

			if (thumbnail) page.thumbnail = xbmc.vfs2uri(thumbnail)

			return page
		})

		const getSongs = xbmc.get({
			'method': 'AudioLibrary.GetSongs',
			'params': {
				'properties': [
					'artist', 'artistid', 'file', 'title', 'track', 'duration', 'displayartist',
					'albumartist', 'albumartistid'
				],
				'filter': { 'albumid': albumid }
			},
			cache: true
		})

		const formatSongs = getSongs
		.then(({songs=[]}) => songs.map(({
			label,
			title,
			track,
			duration,
			artist,
			displayartist,
			albumartist,
			songid
		}) => ({
			//thumbnail: 'img/icons/default/DefaultAudio.png',
			'label': title,
			'number': track,
			'link': `#page=Song&songid=${ songid }&albumid=${ albumid }`,
			'details': [
				(displayartist != albumartist ? displayartist : ''),
				seconds2shortstring(duration)
			],
			'actions': [
				{
					'label': '▶',
					'link': makeJsLink(`xbmc.Play({ 'albumid': ${albumid} }, 0, ${track-1})`)
				}
			]
		})))

		const getOtherArtists = getSongs
		.then(({ songs=[] }) => {
			console.log(songs)
			const artists = {}
			songs.forEach(({
				artistid =[], artist =[]
			}) => {
				for (let i = 0; i < artistid .length; i++) {
					artists[artistid[i]] = {
						'artistid': artistid[i],
						'label': artist[i],
						'link': `#page=Artist&artistid=${artistid[i]}`,
						'thumbnail': 'img/icons/default/DefaultArtist.png'
					}
				}
			})
			console.log(artists)
			return Object.keys(artists).map(artistid => artists[artistid]) //convert the object to an array
		})

		const getPrevNext = getAlbumDetails
		.then(({ artistid, artist }) => {
			return xbmc.get({
				'method': 'AudioLibrary.GetAlbums',
				'params': {
					'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Album
					'title', 'artist', 'year', 'thumbnail' ],
					'filter': { 'operator': 'is', 'field': 'albumartist', 'value': artist } //the 'artist' filter ensures that we exclude albums by other artists that feature this one (eg. albums by 'Various Artists'). TODO: find a better way to do this.
				},
				'cache': true
			})
			.then(({ albums={} }) => {
				let o = {}

				albums.forEach((curr, s) => {
					const prev = albums[s-1]
					const next = albums[s+1]
					if (curr.albumid == albumid) {
						o = {
							'previous': prev === undefined ? undefined : {
								'label': `(${parseYear(prev.year)}) ${prev.title}`,
								'link': `#page=Album&albumid=${ prev.albumid }`,
								'thumbnail': prev.thumbnail ? xbmc.vfs2uri(prev.thumbnail) : 'img/icons/default/DefaultAlbumCover.png'
							},
							'next': next === undefined ? undefined : {
								'label': `(${parseYear(next.year)}) ${next.title}`,
								'link': `#page=Album&albumid=${ next.albumid }`,
								'thumbnail': next.thumbnail ? xbmc.vfs2uri(next.thumbnail) : 'img/icons/default/DefaultAlbumCover.png'
							}
						}
					}
				})

				return o
			})
		})


		const getMusicVideos = getAlbumDetails
		.then(({ artist, title }) => xbmc.get({
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


		return Promise.all([ getPage, formatSongs, getPrevNext, getOtherArtists, getMusicVideos ])      //wait for the above to finish
		.then( ( [ page, items, prevNext, otherArtists, musicVideos ] ) => { //create the page
			page.items = items
			page.previous = prevNext.previous
			page.next = prevNext.next
			if (otherArtists.length > 1) page.details.push({
				'name': 'Artists',
				'iconList': otherArtists
			})
			if (musicVideos.length > 0) page.details.push({
				'name': 'Music Videos',
				'iconList': musicVideos
			})
			return page
		})

	}
}));