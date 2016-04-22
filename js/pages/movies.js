pages.add(new Page({
	'id': 'Movies',
	'view': 'list',
	'groupby': 'year',
	'data': (resolve, reject) => {

		let year = getHash('year')
		let genre = getHash('genre')

		let filter = year ? movie => year == movie.year :
			genre ? movie => movie.genre.indexOf(genre) >= 0 :
			() => true
		
		xbmc.GetMovies()
		.then(data => data.movies || [])
		.then(movies => movies.filter(filter))
		.then(movies => ({ //format movies
			title: 'Movies',
			items: movies.map((movie, i) => {

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
