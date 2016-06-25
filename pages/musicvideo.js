import Page from '../js/page'
import { seconds2string, ymd2string, makeJsLink } from '../js/util'

export default (new Page({
	'id': 'Music Video',
	'view': 'list',
	'parent': 'Music Videos',
	'icon': state => 'img/icons/default/DefaultVideo.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Music Videos' ]]),
	'data': state => {

		let musicvideoid = +state.get('musicvideoid')

		return xbmc.get({
			'method': 'VideoLibrary.GetMusicVideoDetails',
			'params': {
				'properties': [ "title", "playcount", "runtime", "director", "studio", "year", "plot", "album",
								"artist", "genre", "track", "lastplayed", "fanart", "thumbnail" ],
				'musicvideoid': musicvideoid
			}
		})
		.then(result => result.musicvideodetails || {})
		.then(details => ({
			title: details.artist + ' - ' + details.title,
			subtitle: details.album + (details.year ? ' ('+details.year+')' : ''),
			thumbnail: xbmc.vfs2uri(details.thumbnail),
			fanart: xbmc.vfs2uri(details.fanart),
			details: [
				{ 'name': 'Track', 'value': details.track > 0 ? details.track : undefined },
				{ 'name': 'Runtime', 'value': details.runtime ? seconds2string(details.runtime) : undefined },
				{ 'name': 'Last Played', 'value': details.lastplayed ? ymd2string(details.lastplayed) : undefined },
				{ 'name': 'Director', 'value': details.director },
				{ 'name': 'Studio', 'value': details.studio },
				{ 'name': 'Genre', 'value': details.genre },
				{ 'name': 'Plot', 'value': details.plot }
			],
			actions: [
				{	label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: makeJsLink(`xbmc.Play({ 'musicvideoid': ${ details.musicvideoid } }, 1)`)
				},
				{	label: 'Add to Playlist',
					thumbnail: 'img/buttons/add.png',
					link: makeJsLink(`xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'musicvideoid': ${ details.musicvideoid } } })`)
				}
			]
		}))
	}
}));