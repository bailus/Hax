import Page from '../js/page'
import { seconds2shortstring } from '../js/util'

export default (new Page({
	'id': 'Album',
	'view': 'list',
	'parent': 'Music',
	'icon': state => 'img/icons/default/DefaultMusicAlbums.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Music' ]]),
	'data': function (state) {

		let albumid = +state.get('albumid')

		let getAlbumDetails = xbmc.get({
			'method': 'AudioLibrary.GetAlbumDetails',
			'params': {
				'properties': [ "title", "description", "artist", "genre", "theme", "mood", "style", "type", "albumlabel", "year",
								"fanart", "thumbnail", "genreid", "artistid", "displayartist" ],
				'albumid': albumid
			},
			cache: true
		})
		.then(result => result.albumdetails)
		.then(albumdetails => { //format album details
			const page = {
				title: albumdetails.displayartist || albumdetails.artist.join(', ') || '',
				subtitle: (albumdetails.label || '') + (albumdetails.year ? ' (' + albumdetails.year + ')' : ''),
				thumbnail: albumdetails.thumbnail && xbmc.vfs2uri(albumdetails.thumbnail),
				fanart: xbmc.vfs2uri(albumdetails.fanart),
				details: [
					{ name: 'Genre', value: albumdetails.genre },
					{ name: 'Description', value: albumdetails.description },
					{ name: 'Theme', value: albumdetails.theme },
					{ name: 'Mood', value: albumdetails.mood },
					{ name: 'Style', value: albumdetails.style },
					{ name: 'Type', value: albumdetails.type },
					{ name: 'Album Label', value: albumdetails.albumlabel }
				],
				actions: [
					{
						label: 'Play',
						thumbnail: 'img/buttons/play.png',
						link: "javascript:(() => { xbmc.Play({ 'albumid': "+albumid+" }, 0) })()"
					},
					{
						label: 'Add to playlist',
						thumbnail: 'img/buttons/add.png',
						link: "javascript:(() => { xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'albumid': "+albumid+" } }) })()"
					}
				]
			}

			if (albumdetails.thumbnail) page.thumbnail = xbmc.vfs2uri(albumdetails.thumbnail)

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
		.then(result => result.songs.map(song => ({
			thumbnail: 'img/icons/default/DefaultAudio.png',
			label: song.label,
			number: song.track,
			details: seconds2shortstring(song.duration),
			actions: [
				{ label: '▶', link: `javascript: xbmc.Play({ 'albumid': ${albumid} }, 0, ${song.track-1})` }
			]
		})));

		return Promise.all([ getAlbumDetails, getSongs ])      //wait for the above to finish
		.then( ( [ page, items ] ) => { //create the page
			page.items = items
			return page
		})

	}
}));