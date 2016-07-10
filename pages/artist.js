import Page from '../js/page'
import { makeJsLink } from '../js/util'

export default (new Page({
	'id': 'Artist',
	'view': 'list',
	'groupby': 'year',
	'icon': state => 'img/icons/default/DefaultMusicAlbums.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Music' }),
	'data': state => {
		const artistid = +state['artistid']

		let getArtistDetails = xbmc.get({
			'method': 'AudioLibrary.GetArtistDetails',
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Artist
					"instrument", 
					"style", 
					"mood", 
					"born", 
					"formed", 
					"description", 
					"genre", 
					"died", 
					"disbanded", 
					"yearsactive", 
					"musicbrainzartistid", 
					"fanart", 
					"thumbnail"
				],
				'artistid': artistid
			},
			cache: true
		})
		.then(({ artistdetails={} }) => artistdetails)
		.then(x => {console.log(x);return x})
		.then(({
			label='',
			instrument=[],
			style=[],
			mood=[],
			born='',
			formed='',
			description='',
			genre=[],
			died='',
			disbanded='',
			yearsactive=[],
			musicbrainzartistid=[],
			fanart,
			thumbnail=''
		}) => ({
			title: label || 'Artist ' + artistid,
			thumbnail: thumbnail ? xbmc.vfs2uri(thumbnail) : undefined,
			fanart: xbmc.vfs2uri(fanart),
			details: [
				{ 'name': 'Born', 'value': born },
				{ 'name': 'Formed', 'value': formed },
				{ 'name': 'Disbanded', 'value': disbanded },
				{ 'name': 'Died', 'value': died },
				{
					name: 'Years Active',
					links: yearsactive.map(year => ({
								label: year,
								link: '#page=Albums&year='+year
							}))
				},
				{
					name: 'Mood',
					links: mood.map(mood => ({
								label: mood,
								link: '#page=Artists&mood='+mood
							}))
				},
				{
					name: 'Style',
					links: style.map(style => ({
								label: style,
								link: '#page=Artists&style='+style
							}))
				},
				{
					name: 'Instrument',
					links: instrument.map(instrument => ({
								label: instrument,
								link: '#page=Artists&instrument='+instrument
							}))
				},
				{
					name: 'Genre',
					links: genre.map(genre => ({
								label: genre,
								link: '#page=Movies&genre='+genre
							}))
				},
				{ 'name': 'Description', 'value': description }
			],
			actions: [
				{
					label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: makeJsLink(`xbmc.Play({ 'artistid': (${ artistid }) }, 0)`)
				},
				{
					label: 'Add to playlist',
					thumbnail: 'img/buttons/add.png',
					link: makeJsLink(`xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'artistid': (${ artistid }) } })`)
				}
			]
		}))

		let getAlbums = xbmc.get({
			'method': 'AudioLibrary.GetAlbums',
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Album
				'title', 'artist', 'year', 'thumbnail' ],
				'filter': { 'artistid': artistid }
			},
			'cache': true
		})
		.then(result => (result.albums || []).map(({
			label,
			albumid,
			thumbnail,
			year
		}) => ({
			label: label,
			link: '#page=Album&albumid=' + albumid + '&artistid=' + artistid,
			thumbnail: thumbnail ? xbmc.vfs2uri(thumbnail) : 'img/icons/default/DefaultAudio.png',
			thumbnailWidth: '50px',
			year: year,
			actions: [
				{
					label: '▶',
					link: makeJsLink(`xbmc.Play({ 'albumid': ${albumid} }, 0)`)
				}
			]
		})))

		return Promise.all([ getArtistDetails, getAlbums ])      //wait for the above to finish
		.then( ( [ page, items ] ) => { //create the page
			page.items = items
			return page
		})
	}
}));