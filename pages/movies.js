import Page from '../js/page'
import { seconds2string, makeJsLink } from '../js/util'

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
			{ name: 'Year', key: 'year', type: 'integer' },
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
			method: 'VideoLibrary.GetMovies', 
			params: {
				'properties': [ 'title', 'originaltitle', 'runtime', 'year', 'thumbnail', 'file', 'genre' ],
				'sort': { method: 'sorttitle', ignorearticle: true },
				'filter': filter.out()
			},
			cache: true
		})
		.then(result => ({ //format movies
			title: 'Movies' + (group ? ' by '+group : ''),
			subtitle: filter.toString(),
			items: (result.movies || []).map((movie, i) => {

				movie.details = []
				if (movie.runtime) movie.details.push(seconds2string(movie.runtime))

				return {
					label: (movie.title || movie.label || '') +
							(movie.originaltitle && movie.originaltitle != movie.title ? ' [' + movie.originaltitle + ']' : ''),
					year: movie.year,
					link: '#page=Movie&movieid='+movie.movieid,
					alpha: movie.label[0].toUpperCase(),
					thumbnail: movie.thumbnail ? xbmc.vfs2uri(movie.thumbnail) : 'img/icons/default/DefaultVideo.png',
					actions: [
						{
							label: '▶',
							link: makeJsLink(`xbmc.Play({ 'movieid': ${movie.movieid} }, 1)`)
						}
					]
				}
			})
		}))

	}
}));