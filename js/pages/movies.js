"use strict";

pages.add(new Page({
	'id': 'Movies',
	'view': 'list',
	'groupby': 'year',
	'icon': state => 
			state.get('group') === 'actor' || state.get('actor') ? 'img/icons/default/DefaultActor.png' :
			state.get('group') === 'year' || state.get('year') ? 'img/icons/default/DefaultMovieYears.png' :
			state.get('group') === 'genre' || state.get('genre') ? 'img/icons/default/DefaultGenre.png' :
			'img/icons/default/DefaultMovieTitle.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Movies' ]]),
	'data': state => {

		let filter = xbmc.makeFilter([
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
					play: () => xbmc.Play({ 'movieid': movie.movieid }, 1),
					thumbnail: movie.thumbnail ? xbmc.vfs2uri(movie.thumbnail) : 'img/icons/default/DefaultVideo.png'
				}
			})
		}))

	}
}));

pages.add(new Page({
	'id': 'Movie',
	'view': 'list',
	'parent': 'Movies',
	'icon': state => 'img/icons/default/DefaultVideoCover.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Movies' ]]),
	'data': state => {

		let movieid = +state.get('movieid')

		return xbmc.get({
			'method': 'VideoLibrary.GetMovieDetails',
			'params': {
				'properties': [ 'title', 'originaltitle', 'tagline', 'year', 'runtime', 'lastplayed', 'genre', 'writer', 'director', 'plot', 'fanart', 'thumbnail', 'cast' ],
				'movieid': movieid
			}
		})
		.then(result => result.moviedetails)
		.then(moviedetails => ({
			title: moviedetails.title + ((moviedetails.originaltitle && moviedetails.originaltitle != moviedetails.title) ? ' [' + moviedetails.originaltitle + ']' : ''),
			subtitle: moviedetails.tagline,
			thumbnail: xbmc.vfs2uri(moviedetails.thumbnail),
			fanart: xbmc.vfs2uri(moviedetails.fanart),
			details: [
				{ 'name': 'Year', 'value': moviedetails.year },
				{ 'name': 'Runtime', 'value': seconds2string(moviedetails.runtime) },
				{ 'name': 'Last Played', 'value': moviedetails.lastplayed ? ymd2string(moviedetails.lastplayed) : undefined },
				{ 'name': 'Director', 'value': moviedetails.director },
				{ 'name': 'Writer', 'value': moviedetails.writer },
				{ 'name': 'Genre', 'value': moviedetails.genre },
				{ 'name': 'Plot', 'value': moviedetails.plot }
			],
			actions: [
				{	label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: "javascript:(() => { xbmc.Play({ 'movieid': "+moviedetails.movieid+" }, 1) })()"
				},
				{	label: 'Add to Playlist',
					thumbnail: 'img/buttons/add.png',
					link: "javascript:(() => { xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'movieid': "+moviedetails.movieid+" } }) })()"
				}
			],
			items: [
				{	label: 'Cast',
					items: moviedetails.cast.map(actor => ({
						label: actor.name,
						details: actor.role,
						thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
						link: '#page=Movies&actor='+actor.name
					}))
				}
			]
		}))
	}
}));
