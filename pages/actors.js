import Page from '../js/page'

export default (new Page({
	'id': 'Actors',
	'view': 'list',
	'groupby': 'alpha',
	'icon': () => 'img/icons/default/DefaultActor.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', state.get('media') ]]),
	'data': function (state) {

		//higher order map functions (for use in promise api .then() calls)
		const map_ = func => array => Array.prototype.map.call(array, func)
		const flatMap_ = func => array => Array.prototype.concat.apply([], Array.prototype.map.call(array, func))

		const flatten = array => Array.prototype.concat.apply([], array)
		
		const mediaTypes = {
			'TV Shows': {
				name: 'TV Shows',
				page: 'TV Shows',
				resultProperty: 'tvshows',
				method: 'VideoLibrary.GetTVShows'
			},
			'Movies': {
				name: 'Movies',
				page: 'Movies',
				resultProperty: 'movies',
				method: 'VideoLibrary.GetMovies'
			}
		}

		const mediaType = mediaTypes[state.get('media')]
		const m = mediaType ? [mediaType] :
			Object.keys(mediaTypes).map(key => mediaTypes[key]) //mediaTypes.toArray()

		return Promise.all(m.map(media => {
			return xbmc.get({
				method: media.method,
				params: {
					'properties': [ 'cast' ]
				},
				cache: true
			})
			.then(result => result[media.resultProperty] || [])
			.then(flatMap_(mediaInfo => mediaInfo.cast))
			.then(map_(actor => ({
				label: actor.name,
				alpha: actor.name[0].toUpperCase(),
				link: '#page='+media.page+'&actor='+encodeURIComponent(actor.name),
				thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png'
			})))
		}))
		.then(flatten)
		.then(actors => ({
			pageName: !(mediaType && mediaType.name) ? 'Actors' :
					mediaType.name + ' by Actor',
			items: actors
		}))

	}
}));
