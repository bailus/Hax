pages.add(new Page({
	'id': 'Movies',
	'view': 'list',
	//'groupby': 'year',
	'data': (resolve, reject) => {

		let filter = xbmc.makeFilter([{ name: 'Year', key: 'year', type: Number }, { name: 'Genre', key: 'genre', type: String }, { name: 'Actor', key: 'actor', type: String }])

		let showYear = (getHash('group') !== 'year') && (getHash('year') === undefined)
		
		xbmc.sendMessage('VideoLibrary.GetMovies', {
			'properties': [ 'title', 'originaltitle', 'runtime', 'year', 'thumbnail', 'file', 'genre' ],
			'sort': { method: 'sorttitle', ignorearticle: true },
			'filter': (filter || {}).filter
		})
		.then(data => data.result || {})
		.then(result => result.movies || [])
		.then(movies => ({ //format movies
			title: 'Movies',
			subtitle: filter ? filter.name + ': ' + filter.value : '',
			items: movies.map((movie, i) => {

				movie.details = []
				if (showYear) movie.details.push('('+movie.year+')')
				if (movie.runtime) movie.details.push(seconds2string(movie.runtime))

				movie.label = movie.title || movie.label || ''
				if (movie.originaltitle && movie.originaltitle != movie.title)
					movie.label += ' [' + movie.originaltitle + ']'

				movie.link = '#page=Movie&movieid='+movie.movieid
				movie.alpha = movie.label[0].toUpperCase()

				if (movie.movieid)
					movie.play = () => xbmc.Play({ 'movieid': movie.movieid }, 1)

				movie.thumbnail = movie.thumbnail ? xbmc.vfs2uri(movie.thumbnail) : 'img/icons/default/DefaultVideo.png'

				return movie
			})
		}))
		.then(resolve)

	}
}));

pages.add(new Page({
	'id': 'Movie',
	'view': 'list',
	'parent': 'Movies',
	'data': function (resolve, reject) {

		let movieid = +getHash('movieid')

		xbmc.GetMovieDetails({ 'movieid': movieid })
		.then(data => data.moviedetails || {})
		.then(page => { //format movie details

			if (page.year)
				page.title += ' ('+page.year+')'

			if (page.tagline)
				page.subtitle = page.tagline

			if (page.runtime)
				page.runtime = seconds2string(page.runtime)

			if (page.thumbnail)
				page.thumbnail = xbmc.vfs2uri(page.thumbnail)

			if (page.fanart)
				page.fanart = xbmc.vfs2uri(page.fanart)

			if (page.trailer)
				page.trailer = () => xbmc.Play(page.trailer, 1)

			if (page.movieid) {

				page.play = () => xbmc.Play({ 'movieid': page.movieid }, 1)

				page.add = () => xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'movieid': page.movieid } })

			}

			return page

		})
		.then(resolve)
	}
}));
