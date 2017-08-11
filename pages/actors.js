import Page from '../js/page'

export default (new Page({
	'id': 'Actors',
	'view': 'list',
	'groupby': 'alpha',
	'icon': () => 'img/icons/default/DefaultActor.png',
	'parentState': state => ({ 'page': 'Menu', 'media': state['media'] || 'Videos' }),
	'data': function (state) {

		//higher order map functions (for use in promise api .then() calls)
		const map_ = func => array => Array.prototype.map.call(array, func)
		const flatMap_ = func => array => Array.prototype.concat.apply([], Array.prototype.map.call(array, func))

		const flatten = array => Array.prototype.concat.apply([], array)
		
		const mediaTypes = {
			'TV Shows': {
				'name': 'TV Shows',
				'page': 'TV Shows',
				'resultProperty': 'tvshows',
				'method': 'VideoLibrary.GetTVShows'
			},
			'Movies': {
				'name': 'Movies',
				'page': 'Movies',
				'resultProperty': 'movies',
				'method': 'VideoLibrary.GetMovies'
			}
		}

		const mediaType = mediaTypes[state['media']]
		const m = mediaType ? [mediaType] :
			Object.keys(mediaTypes).map(key => mediaTypes[key]) //mediaTypes.toArray()

		return Promise.all(m.map(({ name, page, resultProperty, method }) => {
			return xbmc.get({
				'method': method,
				'params': {
					'properties': [ 'cast' ]
				}
			})
			.then(x => {console.log(x); return x})
			.then(result => result[resultProperty] || [])
			.then(flatMap_(mediaInfo => mediaInfo.cast))
			.then(map_(({ name="", thumbnail }) => ({
				'label': name,
				'alpha': name.at(0).toUpperCase(),
				'link': '#page='+(mediaType === undefined ? 'Videos' : page)+'&actor='+encodeURIComponent(name),
				'thumbnail': thumbnail ? xbmc.vfs2uri(thumbnail) : 'img/icons/default/DefaultActor.png'
			})))
		}))
		.then(flatten)
		.then(actors => ({
			'items': actors
		}))

	}
}));
