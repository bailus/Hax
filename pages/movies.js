import Page from '../js/page'
import { seconds2string, makeJsLink, parseYear } from '../js/util'
import moment from 'moment'


import Filter from '../js/xbmcFilter'

export default (new Page({
	'id': 'Movies',
	'view': 'list',
	'groupby': 'year',
	'icon': state => 
			state['group'] === 'actor' || state['actor'] ? 'img.estuary/default/DefaultActor.png' :
			state['group'] === 'year' || state['year'] ? 'img.estuary/default/DefaultMovieYears.png' :
			state['group'] === 'genre' || state['genre'] ? 'img.estuary/default/DefaultGenre.png' :
			state['group'] === 'alpha' || state['alpha'] ? 'img.estuary/default/DefaultMovieTitle.png' :
			'img.estuary/default/DefaultMovieYears.png',
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
		

		const getMovies = xbmc.get({
			'method': 'VideoLibrary.GetMovies', 
			'params': {
				'properties': [
					'title', 'originaltitle', 'runtime', 'year', 'thumbnail', 'file', 'genre', 'lastplayed', 'resume'
				],
				'sort': { method: 'sorttitle', ignorearticle: true },
				'filter': filter.out(),
				'limits': state['limit'] === undefined ? undefined : {
					'end': state['limit']
				}
			},
			'cache': true
		})

		getMovies.then(console.log)

		const formatMovies = getMovies
		.then(({ movies=[] }) => ({
			'title': filter.toString(),
			'items': movies.map(({
				runtime, title, label, originaltitle, movieid, thumbnail, year, lastplayed, resume
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
				'thumbnail': thumbnail ? xbmc.vfs2uri(thumbnail) : 'img.estuary/default/DefaultVideo.png',
				'actions': [
					{
						'label': '▶',
						'link': makeJsLink(`xbmc.Play({ 'movieid': ${movieid} }, 1)`)
					}
				],
				'progress': resume !== undefined && resume.position > 0 && (Math.round(resume.position / resume.total * 100)+'%')
			}))
		}))

		return formatMovies

	}
}));