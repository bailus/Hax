import Page from '../js/page'
import { seconds2string, makeJsLink } from '../js/util'
import moment from 'moment'

export default (new Page({
	'id': 'Season',
	'view': 'list',
	'parent': 'TV Shows',
	'sortgroup': 'season',
	'icon': state => 'img/icons/default/DefaultTVShowTitle.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'TV Shows' }),
	'data': state => {
		const tvshowid = +state['tvshowid']
		const season = state['season'] === undefined ? 1 : +state['season']

		const getEpisodes = state['season'] !== undefined && xbmc.get({
			'method': 'VideoLibrary.GetEpisodes',
			'params': {
				'properties': [ 'tvshowid', 'title', 'episode', 'runtime', 'lastplayed', 'art', 'resume' ],
				'tvshowid': tvshowid,
				'season': +state['season']
			},
			'cache': true
		})

		getEpisodes.then(console.log)

		const getSeasons = xbmc.get({
			'method': 'VideoLibrary.GetSeasons',
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Video.Fields.Season
					"season", "showtitle", "playcount", "episode", "fanart", "thumbnail", "tvshowid", "watchedepisodes", "art"
				],
				'tvshowid': tvshowid
			},
			'cache': true
		})

		const getShowDetails = xbmc.get({
			'method': 'VideoLibrary.GetTVShowDetails',
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Video.Fields.TVShow
					"title", "episode", "originaltitle"
				],
				'tvshowid': tvshowid
			},
			'cache': true
		})
		.then(({ tvshowdetails={} }) => tvshowdetails)

		const getSeasonDetails = getSeasons.then(({ seasons=[] }) => seasons.filter(s => (s.season == season))[0])

		const getPrevNext = getSeasons.then(({ seasons=[] }) => {
			let o = {}

			seasons.forEach((curr, s) => {
				const prev = seasons[s-1]
				const next = seasons[s+1]
				if (curr.season == season) {
					o = {
						'previous': prev === undefined ? undefined : {
							'label': prev.label,
							'details': [ prev.episode + ' episodes', prev.watchedepisodes + ' watched' ],
							'link': `#page=Season&tvshowid=${ tvshowid }&season=${ prev.season }`,
							'thumbnail': prev.thumbnail ? xbmc.vfs2uri(prev.thumbnail) : 'img/icons/default/DefaultVideo.png'
						},
						'next': next === undefined ? undefined : {
							'label': next.label,
							'details': [ next.episode + ' episodes', next.watchedepisodes + ' watched' ],
							'link': `#page=Season&tvshowid=${ tvshowid }&season=${ next.season }`,
							'thumbnail': next.thumbnail ? xbmc.vfs2uri(next.thumbnail) : 'img/icons/default/DefaultVideo.png'
						}
					}
				}
			})

			return o
		})

		function makeDetail(page, name, key, value) {
			return value !== undefined && value.length > 0 && {
				'class': key,
				'name': name,
				'links': (Array.isArray(value) ? value : [  ])
						.map(v => ({
							'label': v,
							'link': `#page=${page}&${key}=${v}`
						}))
			}
		}

		const formatDetails = Promise.all([ getShowDetails, getSeasonDetails, getPrevNext ])
		.then(([ show, season, prevNext ]) => ({
			'previous': prevNext.previous,
			'next': prevNext.next,
			'title': season.showtitle,
			'bannerLink': `#page=TV Show&tvshowid=${ tvshowid }`,
			'titleLink': `#page=TV Show&tvshowid=${ tvshowid }`,
			'label': season.label,
			'banner': season.art && xbmc.vfs2uri(season.art['tvshow.banner']),
			'thumbnail': season.thumbnail && xbmc.vfs2uri(season.thumbnail),
			'fanart': xbmc.vfs2uri(season.art['tvshow.fanart']),
			'progress': Math.round(season.watchedepisodes / season.episode * 100) + '%'
		}))


		const formatEpisodes = getEpisodes
		.then(({ episodes=[] }) => episodes.map(({
			episodeid, title, runtime, lastplayed, episode, art={}, resume
		}) => ({
			'link': `#page=Episode&episodeid=${ episodeid }`,
			'label': title,
			'thumbnail': xbmc.vfs2uri(art.thumb) || 'img/icons/default/DefaultVideo.png',
			'season': `Season ${ season }`,
			'details': [
				lastplayed ? 'Last played '+moment(lastplayed).calendar() : undefined,
				seconds2string(runtime)
			],
			'number': episode,
			'actions': [
				{
					'label': '▶',
					'link': makeJsLink(`xbmc.Play({ 'episodeid': ${ episodeid } }, 1)`)
				}
			],
			'progress': resume !== undefined && resume.position > 0 && Math.round(resume.position / resume.total * 100)+'%'
		})))

		return Promise.all([ formatDetails, formatEpisodes ])
		.then(([ page, episodes ]) => {
			page.details = {
				'class': 'items',
				'items': [ {
					'label': 'Episodes',
					'items': episodes
				} ]
			}
			return page
		})

	}
}));
