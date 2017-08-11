import Page from '../js/page'
import { seconds2string, ymd2string, makeJsLink } from '../js/util'
import Filter from '../js/xbmcFilter'

export default (new Page({
	'id': 'Episodes',
	'view': 'list',
	'groupby': 'show',
	'parent': 'TV Shows',
	'icon': state => 'img/icons/default/DefaultTVShowTitle.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'TV Shows' }),
	'data': state => {
		
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
		let getEpisodes = xbmc.get({
			method: 'VideoLibrary.GetEpisodes',
			params: {
				'properties': [
					'tvshowid',
					'showtitle',
					'title',
					'thumbnail',
					'episode',
					'season',
					'runtime',
					'lastplayed',
					'cast'
				],
				'filter': filter.out(),
				'limits': state['limit'] === undefined ? undefined : {
					end: state['limit']
				}
			},
			cache: true
		})
		.then(({ episodes=[] }) => episodes.map(episode => ({
			'link': '#page=Episode&episodeid='+episode.episodeid,
			'label': `${episode.season}x${episode.episode < 10 ? '0' : ''}${episode.episode}. ${episode.title}`,
			'thumbnail': episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : 'img/icons/default/DefaultVideo.png',
			'details': [ episode.showtitle, episode.runtime ? seconds2string(episode.runtime) : undefined ],
			'actions': [
				{
					'label': '▶',
					'link': makeJsLink(`xbmc.Play({ 'episodeid': ${episode.episodeid} }, 1)`)
				}
			]
		})))

		return getEpisodes.then(items => ({
			'title': filter.toString(),
			'items': items
		}))

	}
}));