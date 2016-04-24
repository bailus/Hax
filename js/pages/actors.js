pages.add(new Page({
	'id': 'Actors',
	'view': 'list',
	'groupby': 'alpha',
	'data': (resolve, reject) => {

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

		const mediaType = mediaTypes[getHash('media')]
		const m = mediaType ? [mediaType] :
			Object.keys(mediaTypes).map(key => mediaTypes[key]) //mediaTypes.toArray()

		Promise.all(m.map(media => {
			return xbmc.sendMessage(media.method, {
				'properties': [ 'cast' ]
			})
			.then(data => data.result || {})
			.then(result => result[media.resultProperty] || [])
			.then(flatMap_(mediaInfo => mediaInfo.cast))
			.then(map_(actor => ({
				label: actor.name,
				alpha: actor.name[0].toUpperCase(),
				link: '#page='+media.page+'&actor='+actor.name,
				thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png'
			})))
		}))
		.then(flatten)
		.then(actors => ({
			title: (mediaType && mediaType.name) || 'Actors',
			subtitle: mediaType ? 'By Actor' : undefined,
			items: actors
		}))
		.then(resolve)

	}
}));
