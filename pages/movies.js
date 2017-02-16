import Page from '../js/page'
import { seconds2string, makeJsLink, parseYear } from '../js/util'
import moment from 'moment'


import Filter from '../js/xbmcFilter'

export default (new Page({
	'id': 'Movies',
	'view': 'list',
	'groupby': 'year',
	'icon': state => 
			state['group'] === 'actor' || state['actor'] ? 'img/icons/default/DefaultActor.png' :
			state['group'] === 'year' || state['year'] ? 'img/icons/default/DefaultMovieYears.png' :
			state['group'] === 'genre' || state['genre'] ? 'img/icons/default/DefaultGenre.png' :
			'img/icons/default/DefaultMovieTitle.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Movies' }),
	'data': function (state) {

		const fields = [
			{ name: 'Genre', key: 'genreid', type: 'integer' },
			{ name: 'Genre', key: 'genre', type: 'string' },
			{ name: 'Actor', key: 'actor', type: 'string' },
			{ name: 'Writer', key: 'writers', type: 'string' },
			{ name: 'Director', key: 'director', type: 'string' },
			{ name: 'Studio', key: 'studio', type: 'string' },
			{ name: 'Country', key: 'country', type: 'string' },
			{ name: 'Set', key: 'setid', type: 'integer' },
			{ name: 'Set', key: 'set', type: 'string' },
			{ name: 'Tag', key: 'tag', type: 'string' }
		]
		const filter = Filter.fromState(state, fields)

		let group = state['group'] || this.groupby
		
		return xbmc.get({
			'method': 'VideoLibrary.GetMovies', 
			'params': {
				'properties': [
					'title', 'originaltitle', 'runtime', 'year', 'thumbnail', 'file', 'genre', 'lastplayed'
				],
				'sort': { method: 'sorttitle', ignorearticle: true },
				'filter': filter.out(),
				'limits': state['limit'] === undefined ? undefined : {
					'end': state['limit']
				}
			},
			'cache': true
		})
		.then(({ movies=[] }) => ({ //format movies
			'title': filter.toString(),
			'items': movies.map(({
				runtime, title, label, originaltitle, movieid, thumbnail, year, lastplayed
			}) => ({
				'label': (title || label || '') +
						(originaltitle && originaltitle != title ? ' [' + originaltitle + ']' : ''),
				'details': [
					`(${year})`,
					seconds2string(runtime)
				],
				'year': parseYear(year),
				'link': '#page=Movie&movieid='+movieid,
				'alpha': label.at(0).toUpperCase(),
				'thumbnail': thumbnail ? xbmc.vfs2uri(thumbnail) : 'img/icons/default/DefaultVideo.png',
				'actions': [
					{
						'label': '▶',
						'link': makeJsLink(`xbmc.Play({ 'movieid': ${movieid} }, 1)`)
					}
				]
			}))
		}))

	}
}));