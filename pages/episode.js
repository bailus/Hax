import Page from '../js/page'
import { seconds2string, ymd2string, makeJsLink } from '../js/util'

export default (new Page({
	'id': 'Episode',
	'view': 'list',
	'parent': 'TV Shows',
	'icon': state => 'img/icons/default/DefaultVideo.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'TV Shows' ]]),
	'data': state => {
		let episodeid = +state.get('episodeid')

		return xbmc.get({
			'method': 'VideoLibrary.GetEpisodeDetails',
			'params': {
				'properties': [
					"title", "plot", "writer", "firstaired", "runtime", "director",
					"productioncode", "season", "episode", "originaltitle", "showtitle",
					"lastplayed", "fanart", "thumbnail", "tvshowid", "cast"
				],
				'episodeid': episodeid
			}
		})
		.then(result => result.episodedetails)
		.then(x => ({
			title: x.title + ((x.originaltitle && x.originaltitle != x.title) ? ' [' + x.originaltitle + ']' : ''),
			subtitle: x.showtitle,
			thumbnail: xbmc.vfs2uri(x.thumbnail),
			fanart: xbmc.vfs2uri(x.fanart),
			details: [
				(x.productioncode || x.season && x.episode) ? { 'name': 'Production Code', 'value': (x.productioncode || x.season + 'x' + x.episode) } : undefined,
				x.lastplayed ? { 'name': 'Last Played', 'value': ymd2string(x.lastplayed) } : undefined,
				x.firstaired ? { 'name': 'First Aired', 'value': ymd2string(x.firstaired) } : undefined,
				x.runtime ? { 'name': 'Runtime', 'value': seconds2string(x.runtime) } : undefined,
				{ 'name': 'Plot', 'value': x.plot },
				{ 'name': 'Director', 'value': x.director },
				{ 'name': 'Writer', 'value': x.writer },
				{ 'name': 'Genre', 'value': x.genre }
			],
			actions: [
				{	label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: makeJsLink(`xbmc.Play({ 'episodeid': (${ x.episodeid }) }, 1)`)
				},
				{	label: 'Add to Playlist',
					thumbnail: 'img/buttons/add.png',
					link: makeJsLink(`xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'episodeid': (${ x.episodeid }) } })`)
				}
			],
			items: [
				{	label: 'Cast',
					items: x.cast.map(actor => ({
						label: actor.name,
						details: actor.role,
						thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
						link: '#page=TV Shows&actor='+actor.name
					}))
				}
			]
		}))

	}
}));