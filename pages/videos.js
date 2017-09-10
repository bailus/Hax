import Page from '../js/page.js'
import Filter from '../js/xbmcFilter.js'
import episodesPage from './episodes.js'
import tvshowsPage from './tvshows.js'
import moviesPage from './movies.js'
import musicvideosPage from './musicvideos.js'
import { state2uri } from '../js/util.js'

export default (new Page({
	'id': 'Videos',
	'view': 'list',
	'groupby': 'alpha',
	'icon': () => 'img/icons/home/videos.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Videos' }),
	'data': function (state) {

		//http://kodi.wiki/view/JSON-RPC_API/v6#List.Filter.Fields.Episodes
		const fields = [
			{ name: 'Title', key: 'title', 'type': 'string' },
			{ name: 'Tvshow', key: 'tvshow', 'type': 'string' },
			{ name: 'Writers', key: 'writers', 'type': 'string' },
			{ name: 'Genre', key: 'genre', 'type': 'string' },
			{ name: 'Year', key: 'year', 'type': 'integer' },
			{ name: 'Director', key: 'director', 'type': 'string' },
			{ name: 'Actor', key: 'actor', 'type': 'string' },
			{ name: 'Studio', key: 'studio', 'type': 'string' },
			{ name: 'Mpaarating', key: 'mpaarating', 'type': 'string' },
			{ name: 'Tag', key: 'tag', 'type': 'string' }
		]

		const filter = Filter.fromState(state, fields)

		state['limit'] = (state['limit'] === undefined) ? 10 : +state['limit']
		return Promise.all([
			moviesPage.data(state),
			state['writers'] ? Promise.resolve() : tvshowsPage.data(state),
			episodesPage.data(state),
			state['actor'] || state['writers'] ? Promise.resolve() : musicvideosPage.data(state)
		])
		.then(([
			movies={},
			tvshows={},
			episodes={},
			musicvideos={}
		]) => ({
			title: filter.toString(),
			details: [
				movies.items !== undefined && movies.items.length > 0 && {
					'name': `Movies`,
					'class': `items`,
					'items': movies.items,
					'more': (function () {
						const s = {}
						Object.assign(s, state) // create a shallow clone of the state object
						s['page'] = 'Movies'
						s['limit'] = undefined
						return state2uri(s)
					})()
				},
				tvshows.items !== undefined && tvshows.items.length > 0 && {
					'name': `TV Shows`,
					'class': `items`,
					'items': tvshows.items,
					'more': (function () {
						const s = {}
						Object.assign(s, state) // create a shallow clone of the state object
						s['page'] = 'TV Shows'
						s['limit'] = undefined
						return state2uri(s)
					})()
				},
				episodes.items !== undefined && episodes.items.length > 0 && {
					'name': `Episodes`,
					'class': `items`,
					'items': episodes.items,
					'more': (function () {
						const s = {}
						Object.assign(s, state) // create a shallow clone of the state object
						s['page'] = 'Episodes'
						s['limit'] = undefined
						return state2uri(s)
					})()
				},
				musicvideos.items !== undefined && musicvideos.items.length > 0 && {
					'name': `Music Videos`,
					'class': `items`,
					'items': musicvideos.items,
					'more': (function () {
						const s = {}
						Object.assign(s, state) // create a shallow clone of the state object
						s['page'] = 'Music Videos'
						s['limit'] = undefined
						return state2uri(s)
					})()
				}
			]
		}))

	}
}));
