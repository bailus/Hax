import Page from '../js/page'
import { seconds2shortstring, makeJsLink } from '../js/util'

export default (new Page({
	'id': 'Album',
	'view': 'list',
	'parent': 'Music',
	'icon': state => 'img/icons/default/DefaultMusicAlbums.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Music' }),
	'data': function (state) {

		let albumid = +state['albumid']

		let getAlbumDetails = xbmc.get({
			'method': 'AudioLibrary.GetAlbumDetails',
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Album
					"title", 
					"description", 
					"artist", 
					"genre", 
					"theme", 
					"mood", 
					"style", 
					"type", 
					"albumlabel", 
					"rating", 
					"year", 
					"musicbrainzalbumid", 
					"musicbrainzalbumartistid", 
					"fanart", 
					"thumbnail", 
					"playcount", 
					"genreid", 
					"artistid", 
					"displayartist"
				],
				'albumid': albumid
			},
			cache: true
		})
		.then(({ albumdetails={} }) => albumdetails)
		//.then(x => {console.log(x);return x})
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
			year,
			fanart,
			thumbnail,
			playcount,
			genreid,
			artistid,
			displayartist
		}) => { //format album details
			const page = {
				title: displayartist || artist.join(', '),
				titleLink: `#page=Artist&artistid=${ artistid }`,
				subtitle: label,
				thumbnail: thumbnail && xbmc.vfs2uri(thumbnail),
				fanart: xbmc.vfs2uri(fanart),
				details: [
					{
						name: 'Year',
						links: [{
							label: year,
							link: '#page=Albums&year='+year
						}]
					},
					{ 'name': 'Rating', 'value': rating },
					{
						name: 'Mood',
						links: mood.map(mood => ({
									label: mood,
									link: '#page=Albums&mood='+mood
								}))
					},
					{
						name: 'Style',
						links: style.map(style => ({
									label: style,
									link: '#page=Albums&style='+style
								}))
					},
					{
						name: 'Type',
						links: [{
							label: type,
							link: '#page=Albums&type='+type
						}]
					},
					{
						name: 'Genre',
						links: genre.map(genre => ({
									label: genre,
									link: '#page=Albums&genre='+genre
								}))
					},
					{ 'name': 'Description', 'value': description }
				],
				actions: [
					{
						label: 'Play',
						thumbnail: 'img/buttons/play.png',
						link: makeJsLink(`xbmc.Play({ 'albumid': (${ albumid }) }, 0)`)
					},
					{
						label: 'Add to playlist',
						thumbnail: 'img/buttons/add.png',
						link: makeJsLink(`xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'albumid': (${ albumid }) } })`)
					}
				]
			}

			if (thumbnail) page.thumbnail = xbmc.vfs2uri(thumbnail)

			return page
		})

		let getSongs = xbmc.get({
			'method': 'AudioLibrary.GetSongs',
			'params': {
				'properties': [ 'file', 'title', 'track', 'duration' ],
				'filter': { 'albumid': albumid }
			},
			cache: true
		})
		.then(result => result.songs.map(({
			label,
			title,
			track,
			duration
		}) => ({
			thumbnail: 'img/icons/default/DefaultAudio.png',
			label: label,
			number: track,
			details: seconds2shortstring(duration),
			actions: [
				{
					label: '▶',
					link: makeJsLink(`xbmc.Play({ 'albumid': ${albumid} }, 0, ${track-1})`)
				}
			]
		})));

		return Promise.all([ getAlbumDetails, getSongs ])      //wait for the above to finish
		.then( ( [ page, items ] ) => { //create the page
			page.items = items
			return page
		})

	}
}));