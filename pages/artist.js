import Page from '../js/page'
import { makeJsLink } from '../js/util'

export default (new Page({
	'id': 'Artist',
	'view': 'list',
	'groupby': 'year',
	'icon': state => 'img/icons/default/DefaultMusicAlbums.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Music' ]]),
	'data': state => {
		const artistid = +state.get('artistid')

		let getArtistDetails = xbmc.get({
			'method': 'AudioLibrary.GetArtistDetails',
			'params': {
				'properties': [ "instrument", "style", "mood", "born", "formed", "description", "genre",
								"died", "disbanded", "yearsactive", "fanart", "thumbnail" ],
				'artistid': artistid
			},
			cache: true
		})
		.then(result => result.artistdetails || {})
		.then(x => ({
			title: x.label || 'Artist ' + x.artistid,
			thumbnail: x.thumbnail ? xbmc.vfs2uri(x.thumbnail) : undefined,
			details: [
				{ 'name': 'Instrument', 'value': x.instrument },
				{ 'name': 'Style', 'value': x.style },
				{ 'name': 'Mood', 'value': x.mood },
				{ 'name': 'Born', 'value': x.born },
				{ 'name': 'Formed', 'value': x.formed },
				{ 'name': 'Description', 'value': x.description },
				{ 'name': 'Genre', 'value': x.genre },
				{ 'name': 'Died', 'value': x.died },
				{ 'name': 'Disbanded', 'value': x.disbanded },
				{ 'name': 'Years Active', 'value': x.yearsactive }
			],
			actions: [
				{
					label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: makeJsLink(`xbmc.Play({ 'artistid': (${ x.artistid }) }, 0)`)
				},
				{
					label: 'Add to playlist',
					thumbnail: 'img/buttons/add.png',
					link: makeJsLink(`xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'artistid': (${ x.artistid }) } })`)
				}
			]
		}))

		let getAlbums = xbmc.get({
			'method': 'AudioLibrary.GetAlbums',
			'params': {
				'properties': [ 'title', 'artist', 'year', 'thumbnail' ],
				'filter': { 'artistid': artistid }
			},
			'cache': true
		})
		.then(result => (result.albums || []).map(album => ({
			label: album.label,
			link: '#page=Album&albumid=' + album.albumid + '&artistid=' + artistid,
			thumbnail: album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/icons/default/DefaultAudio.png',
			thumbnailWidth: '50px',
			year: album.year,
			actions: [
				{
					label: '▶',
					link: makeJsLink(`xbmc.Play({ 'albumid': ${album.albumid} }, 0)`)
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