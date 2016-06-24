import Page from '../js/page'
import { seconds2string } from '../js/util'

export default (new Page({
	'id': 'Movies',
	'view': 'list',
	'groupby': 'year',
	'icon': state => 
			state.get('group') === 'actor' || state.get('actor') ? 'img/icons/default/DefaultActor.png' :
			state.get('group') === 'year' || state.get('year') ? 'img/icons/default/DefaultMovieYears.png' :
			state.get('group') === 'genre' || state.get('genre') ? 'img/icons/default/DefaultGenre.png' :
			'img/icons/default/DefaultMovieTitle.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Movies' ]]),
	'data': function (state) {

		let filter = xbmc.makeFilter(state, [
			{ name: 'Genre', key: 'genre', type: String },
			{ name: 'Actor', key: 'actor', type: String }
		])

		let group = state.get('group') || this.groupby
		
		return xbmc.get({
			method: 'VideoLibrary.GetMovies', 
			params: {
				'properties': [ 'title', 'originaltitle', 'runtime', 'year', 'thumbnail', 'file', 'genre' ],
				'sort': { method: 'sorttitle', ignorearticle: true },
				'filter': (filter || {}).filter
			},
			cache: true
		})
		.then(result => ({ //format movies
			pageName: 'Movies' + (
				filter ? ' by ' + filter.name : 
				group ? ' by '+group :
				''),
			title: filter ? ''+filter.value : undefined,
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
						{ label: '▶', link: `javascript: xbmc.Play({ 'movieid': ${movie.movieid} }, 1)` }
					]
				}
			})
		}))

	}
}));