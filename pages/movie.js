import Page from '../js/page'
import { seconds2string, ymd2string, makeJsLink, flatMap } from '../js/util'
import moment from 'moment'

export default (new Page({
	'id': 'Movie',
	'view': 'list',
	'parent': 'Movies',
	'icon': state => 'img/icons/default/DefaultVideoCover.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Movies' }),
	'data': state => {

		let movieid = +state['movieid']

		const getMovieDetails = xbmc.get({
			'method': 'VideoLibrary.GetMovieDetails',
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Video.Fields.Movie
					"title", 
					"genre", 
					"year", 
					"rating", 
					"director", 
					"trailer", 
					"tagline", 
					"plot", 
					"plotoutline", 
					"originaltitle", 
					"lastplayed", 
					"playcount", 
					"writer", 
					"studio", 
					"mpaa", 
					"cast", 
					"country", 
					"imdbnumber", 
					"runtime", 
					"set", 
					"showlink", 
					"streamdetails", 
					"top250", 
					"votes", 
					"fanart", 
					"thumbnail", 
					"file", 
					"sorttitle", 
					"resume", 
					"setid", 
					"dateadded", 
					"tag", 
					"art"
				],
				'movieid': movieid
			}
		})
		//.then(x => {console.log(x);return x})
		.then(({ moviedetails={} }) => moviedetails)

		const getMovieSetDetails = getMovieDetails.then(({ setid }) => {
			if (!setid) return Promise.resolve({})
			return xbmc.get({
					'method': 'VideoLibrary.GetMovieSetDetails', //http://kodi.wiki/view/JSON-RPC_API/#VideoLibrary.GetMovieSetDetails
					'params': {
						'setid': +setid,
						'properties': [ ],
						'movies': {
							'properties': [ //http://kodi.wiki/view/JSON-RPC_API/#Video.Fields.Movie
								"title", 
								"year", 
								"thumbnail"
							],
							'sort': {
								'method': 'date'
							}
						}
					},
					cache: true
			})
		})

		const getPrevNext = getMovieSetDetails
		.then(({ setdetails={} }) => {
			const movies = setdetails.movies || []
			let o = {}

			console.log(movies)

			movies.forEach((curr, s) => {
				const prev = movies[s-1]
				const next = movies[s+1]
				if (curr.movieid == movieid) {
					o = {
						'previous': prev === undefined ? undefined : {
							'label': `(${prev.year}) ${prev.title}`,
							'link': `#page=Movie&movieid=${ prev.movieid }`,
							'thumbnail': prev.thumbnail ? xbmc.vfs2uri(prev.thumbnail) : 'img/icons/default/DefaultVideo.png'
						},
						'next': next === undefined ? undefined : {
							'label': `(${next.year}) ${next.title}`,
							'link': `#page=Movie&movieid=${ next.movieid }`,
							'thumbnail': next.thumbnail ? xbmc.vfs2uri(next.thumbnail) : 'img/icons/default/DefaultVideo.png'
						}
					}
				}
			})

			return o
		})


		function makeDetail(page, name, key, value) {
			return value !== undefined && value.length > 0 && {
				'class': key,
				'name': name,
				'links': (Array.isArray(value) ? value : [  ])
						.map(v => ({
							'label': v,
							'link': `#page=${page}&${key}=${v}`
						}))
			}
		}

		return Promise.all([ getMovieDetails, getPrevNext, getMovieSetDetails ])
		.then(([ {
			title,
			genre,
			year,
			rating,
			director,
			trailer,
			tagline,
			plot,
			plotoutline,
			originaltitle,
			lastplayed,
			playcount,
			writer,
			studio,
			mpaa,
			cast,
			country,
			imdbnumber,
			runtime,
			set,
			showlink,
			streamdetails,
			top250,
			votes,
			fanart,
			thumbnail,
			file,
			sorttitle,
			resume,
			setid,
			dateadded,
			tag,
			art
		}, prevNext, { setdetails={} } ] = {}) => ({
			'previous': prevNext.previous,
			'next': prevNext.next,
			'title': setdetails.label,
			'titleLink': setdetails.setid && `#page=Movie Set&setid=${setdetails.setid}`,
			'label': `(${year}) ${title}` + ((originaltitle && originaltitle != title) ? ` [${originaltitle}]` : ''),
			'thumbnail': xbmc.vfs2uri(thumbnail),
			'fanart': xbmc.vfs2uri(fanart),
			'details': [
				tagline !== undefined && tagline.length > 0 && {
					'class': 'tagline',
					'name': 'Tagline',
					'value': tagline
				},
				rating !== undefined && votes > 0 && {
					'class': 'rating',
					'name': 'Rating',
					'flags': [
						{
							'class': 'starrating',
							'value': Math.round(rating),
							'caption': `(${votes} votes)`
						}
					]
				},
				mpaa !== undefined && mpaa.length > 0 && {
					'class': 'mpaa',
					'name': 'MPAA Rating',
					'value': mpaa
				},
				plot !== undefined && plot.length > 0 && {
					'class': 'plot',
					'name': 'Plot',
					'value': plot
				},
				runtime !== undefined && runtime.length > 0 && {
					'class': 'runtime',
					'name': 'Runtime',
					'value': moment.duration(runtime, 'seconds').humanize()
				},
				makeDetail('Videos', 'Studio', 'studio', studio),
				makeDetail('Movies', 'Genre', 'genre', genre),
				makeDetail('Movies', 'Tag', 'tag', tag),
				makeDetail('Movies', 'Country', 'country', country),
				{
					'class': '',
					'name': 'Statistics',
					'links': [
						{ 'label': `Played ${ playcount } times` },
						{ 'label': lastplayed instanceof String && lastplayed.length > 0 ? `Last Played ${ moment(lastplayed).format('LL') }` : undefined },
						{ 'label': `Added ${ moment(dateadded).format('LL') }` }
					]
				},
				file !== undefined && file.length > 0 && {
					'class': '',
					'name': 'File',
					'links': [
						{
							'label': file,
							'link': `${ xbmc.vfs2uri(file) }`
						}
					]
				},
				{
					'class': '',
					'name': 'Links',
					'links': [
						{
							'label': 'IMDB',
							'link': ( (imdbnumber instanceof String) && (imdbnumber.length > 0) ) ? 
									`http://www.imdb.com/title/${ imdbnumber }/` : 
									`http://www.imdb.com/search/title?release_date=${ encodeURIComponent(year) },&title=${ encodeURIComponent(title) }&title_type=feature,tv_movie,documentary,short`
						},
						{
							'label': 'themoviedb.org',
							'link': `https://www.themoviedb.org/search?query=${ encodeURIComponent(title) }`
						}
					]
				}
			],
			'actions': [
				{	'label': 'Play',
					'thumbnail': 'img/icons/infodialogs/play.png',
					'link': makeJsLink(`xbmc.Play({ "movieid": ${ movieid } }, 1)`)
				},
				{	'label': 'Add to Playlist',
					'thumbnail': 'img/buttons/add.png',
					'link': makeJsLink("xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'movieid': "+movieid+" } })")
				},
				{	'label': 'Play Trailer',
					'thumbnail': 'img/icons/infodialogs/youtube.png',
					'link': makeJsLink(`xbmc.Play({ "file": "${ trailer }" }, 1)`)
				}
			],
			'cast': (function () {
				let out = (Array.isArray(director) ? director : [ director ])
					.map(director => ({
						'label': director,
						'details': 'Director',
						'thumbnail': director.thumbnail ? xbmc.vfs2uri(director.thumbnail) : 'img/icons/default/DefaultDirector.png',
						'link': '#page=Videos&director='+director
					}))
				out = out.concat((Array.isArray(writer) ? writer : [ writer ])
					.map(writer => ({
						'link': '#page=Videos&writers='+writer,
						'thumbnail': writer.thumbnail ? xbmc.vfs2uri(writer.thumbnail) : 'img/icons/default/DefaultWriter.png',
						'label': writer,
						'details': 'Writer'
					})))
				out = out.concat(cast.map(actor => ({
					'label': actor.name,
					'details': actor.role || '',
					'thumbnail': actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
					'link': '#page=Videos&actor='+actor.name
				})))
				return out
			})()
		}))
	}
}));