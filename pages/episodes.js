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
					'lastplayed'
				],
				'filter': filter.out()
			},
			cache: true
		})
		.then(({ episodes=[] }) => episodes.map(episode => ({
			show: episode.showtitle,
			link: '#page=Episode&episodeid='+episode.episodeid,
			label: episode.title || '',
			thumbnail: episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : 'img/icons/default/DefaultVideo.png',
			season: 'Season ' + episode.season,
			thumbnailWidth: '89px',
			details: [ seconds2string(episode.runtime), episode.lastplayed ? 'Last played '+ymd2string(episode.lastplayed) : undefined ],
			number: episode.episode,
			actions: [
				{
					label: '▶',
					link: makeJsLink(`xbmc.Play({ 'episodeid': ${episode.episodeid} }, 1)`)
				}
			]
		})))

		return getEpisodes.then(items => ({
			title: 'Episodes',
			subtitle: filter.toString(),
			items: items
		}))

	}
}));