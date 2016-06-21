import Page from '../js/page'
import { seconds2string, ymd2string } from '../js/util'

export default (new Page({
	'id': 'TV Show',
	'view': 'list',
	'parent': 'TV Shows',
	'groupby': 'season',
	'sortgroup': 'season',
	'icon': state => 'img/icons/default/DefaultTVShowTitle.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'TV Shows' ]]),
	'data': state => {
		let tvshowid = +state.get('tvshowid')

		let getShowDetails = xbmc.get({
			'method': 'VideoLibrary.GetTVShowDetails',
			'params': {
				'properties': [ 'title', 'art', 'thumbnail' ],
				'tvshowid': tvshowid
			},
			cache: true
		})
		.then(data => data.tvshowdetails || {})
		.then(details => ({
			title: details.title,
			banner: details.art && details.art.banner ? xbmc.vfs2uri(details.art.banner) : undefined,
			/*actions: [ {  //doesn't work? is playing a tvshowid possible?
				label: 'Play',
				thumbnail: 'img/buttons/play.png',
				link: "javascript:(() => { xbmc.Play({ 'tvshowid': "+tvshowid+" }, 1) })()"
			} ]*/
		}))
		.then(details => {  //format show details
			if (details.art) details.banner = xbmc.vfs2uri(details.art.banner);
			delete details.thumbnail;
			return details
		})
		

		let getEpisodes = xbmc.get({
			method: 'VideoLibrary.GetEpisodes',
			params: {
				'properties': [ 'tvshowid', 'title', 'thumbnail', 'episode', 'season', 'runtime', 'lastplayed' ],
				'tvshowid': tvshowid
			},
			cache: true
		})
		.then(result => result.episodes || {})
		.then(episodes => episodes.map(episode => ({
			link: '#page=Episode&episodeid='+episode.episodeid,
			label: episode.title || '',
			thumbnail: episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : 'img/icons/default/DefaultVideo.png',
			season: 'Season ' + episode.season,
			thumbnailWidth: '89px',
			details: [ seconds2string(episode.runtime), episode.lastplayed ? 'Last played '+ymd2string(episode.lastplayed) : undefined ],
			number: episode.episode,
			actions: [
				{ label: '▶', link: `javascript: xbmc.Play({ 'episodeid': ${episode.episodeid} }, 1)` }
			]
		})))

		return Promise.all([ getShowDetails, getEpisodes ])
		.then(([ page, items ]) => {
			page.items = items
			return page
		})

	}
}));