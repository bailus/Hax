import Page from '../js/page'
import Filter from '../js/xbmcFilter'
import episodesPage from './episodes'
import tvshowsPage from './tvshows'
import moviesPage from './movies'
import musicvideosPage from './musicvideos'

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
					name: `Movies`,
					items: movies.items
				},
				tvshows.items !== undefined && tvshows.items.length > 0 && {
					name: `TV Shows`,
					items: tvshows.items
				},
				episodes.items !== undefined && episodes.items.length > 0 && {
					name: `Episodes`,
					items: episodes.items
				},
				musicvideos.items !== undefined && musicvideos.items.length > 0 && {
					name: `Music Videos`,
					items: musicvideos.items
				}
			]
		}))

	}
}));
