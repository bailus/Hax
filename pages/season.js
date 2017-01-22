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
		let tvshowid = +state['tvshowid']
		const season = +state['season']

		let getShowDetails = xbmc.get({
			'method': 'VideoLibrary.GetTVShowDetails',
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Video.Fields.TVShow
					"title", 
					"genre", 
					"rating", 
					"studio", 
					"mpaa", 
					"cast", 
					"episode", 
					"votes", 
					"lastplayed", 
					"file", 
					"originaltitle", 
					"sorttitle", 
					"episodeguide", 
					"dateadded", 
					"tag"
				],
				'tvshowid': tvshowid
			},
			cache: true
		})
		.then(({ tvshowdetails={} }) => tvshowdetails)

		const getSeasons = xbmc.get({
			method: 'VideoLibrary.GetSeasons',
			params: {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Video.Fields.Season
					"season", 
					"showtitle", 
					"episode", 
					"watchedepisodes", 
					"thumbnail",
					"art"
				],
				'tvshowid': tvshowid
			},
			cache: true
		})

		const getSeasonDetails = getSeasons.then(({ seasons=[] }) => seasons.filter(s => (s.season == season))[0])

		const getPrevNext = getSeasons.then(({ seasons=[] }) => {
			let o = {}

			seasons.forEach((curr, s) => {
				const prev = seasons[s-1]
				const next = seasons[s+1]
				if (curr.season == season) {
					o = {
						previous: prev === undefined ? undefined : {
							label: prev.label,
							details: [ prev.episode + ' episodes', prev.watchedepisodes + ' watched' ],
							link: `#page=Season&tvshowid=${ tvshowid }&season=${ prev.season }`,
							thumbnail: prev.thumbnail ? xbmc.vfs2uri(prev.thumbnail) : 'img/icons/default/DefaultVideo.png'
						},
						next: next === undefined ? undefined : {
							label: next.label,
							details: [ next.episode + ' episodes', next.watchedepisodes + ' watched' ],
							link: `#page=Season&tvshowid=${ tvshowid }&season=${ next.season }`,
							thumbnail: next.thumbnail ? xbmc.vfs2uri(next.thumbnail) : 'img/icons/default/DefaultVideo.png'
						}
					}
				}
			})

			return o
		})

		let getDetails = Promise.all([ getShowDetails, getSeasonDetails, getPrevNext ])
		.then(([ show, season, prevNext ]) => ({
			previous: prevNext.previous,
			next: prevNext.next,
			title: season.showtitle,
			titleLink: `#page=TV Show&tvshowid=${ tvshowid }`,
			subtitle: season.label,
			banner: season.art && xbmc.vfs2uri(season.art['season.banner'] || season.art['tvshow.banner']),
			fanart: xbmc.vfs2uri(season.art['tvshow.fanart']),
			details: [
				{
					name: 'Tag',
					links: (Array.isArray(show.tag) ? show.tag : [ show.tag ])
								.map(tag => ({
									label: tag,
									link: '#page=TV Shows&tag='+tag
								}))
				},
				{ 'name': 'Rating', 'value': `${ Math.round(show.rating*10)/10 }/10 (${ show.votes } votes)` },
				{ 'name': 'MPAA Rating', 'value': show.mpaa },
				{
					name: 'Genre',
					links: (Array.isArray(show.genre) ? show.genre : [ ])
								.map(genre => ({
									label: genre,
									link: '#page=TV Shows&genre='+genre
								}))
				},
				{
					name: 'Studio',
					links: (Array.isArray(show.studio) ? show.studio : [ ])
								.map(studio => ({
									label: studio,
									link: '#page=TV Shows&studio='+studio
								}))
				},
				{ 'name': 'Statistics', 'links': [
					{ 'label': `Episodes: ${ season.episode } (${ season.watchedepisodes } watched)` },
					{ 'label': `Added ${ moment(show.dateadded).format('LL') }` }
				] }
			],
			cast: show.cast.map(actor => ({
				label: actor.name,
				details: actor.role,
				thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
				link: '#page=TV Shows&actor='+actor.name
			}))
		}))
		

		let getEpisodes = state['season'] !== undefined && xbmc.get({
			method: 'VideoLibrary.GetEpisodes',
			params: {
				'properties': [ 'tvshowid', 'title', 'episode', 'runtime', 'lastplayed', 'art' ],
				'tvshowid': tvshowid,
				'season': +state['season']
			},
			cache: true
		})
		.then(({ episodes=[] }) => episodes)
		.then(episodes => episodes.map(({
			episodeid,
			title,
			runtime,
			lastplayed,
			episode,
			art={}
		}) => ({
			link: `#page=Episode&episodeid=${ episodeid }`,
			label: title,
			thumbnail: xbmc.vfs2uri(art.thumb) || 'img/icons/default/DefaultVideo.png',
			season: `Season ${ season }`,
			details: [ seconds2string(runtime), lastplayed ? 'Last played '+moment(lastplayed).format('LL') : undefined ],
			number: episode,
			actions: [
				{
					label: '▶',
					link: makeJsLink(`xbmc.Play({ 'episodeid': ${ episodeid } }, 1)`)
				}
			]
		})))

		return Promise.all([ getDetails, getEpisodes ])
		.then(([ page, episodes ]) => {
			page.items = [ {
				label: 'Episodes',
				items: episodes
			} ]
			return page
		})

	}
}));