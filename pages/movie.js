import Page from '../js/page'
import { seconds2string, ymd2string, makeJsLink } from '../js/util'
import moment from 'moment'

export default (new Page({
	'id': 'Movie',
	'view': 'list',
	'parent': 'Movies',
	'icon': state => 'img/icons/default/DefaultVideoCover.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Movies' }),
	'data': state => {

		let movieid = +state['movieid']

		return xbmc.get({
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
		.then(({
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
		} = {}) => ({
			title: title + ((originaltitle && originaltitle != title) ? ' [' + originaltitle + ']' : ''),
			subtitle: tagline,
			thumbnail: xbmc.vfs2uri(thumbnail),
			fanart: xbmc.vfs2uri(fanart),
			details: [
				{
					name: 'Tag',
					links: (Array.isArray(tag) ? tag : [ tag ])
								.map(tag => ({
									label: tag,
									link: '#page=Movies&tag='+tag
								}))
				},
				{ 'name': 'Rating', 'value': `${ Math.round(rating*10)/10 }/10 (${ votes } votes)` + (top250 ? ' #'+top250 : '') },
				{ 'name': 'MPAA Rating', 'value': mpaa },
				{
					name: 'Year',
					links: [{
						label: year,
						link: '#page=Movies&year='+year
					}]
				},
				{
					name: 'Country',
					links: (Array.isArray(country) ? country : [  ])
								.map(country => ({
									label: country,
									link: '#page=Movies&country='+country
								}))
				},
				!set ? undefined : {
					name: 'Set',
					links: [{
						label: set,
						link: '#page=Movie Set&setid='+setid
					}]
				},
				{
					name: 'Genre',
					links: (Array.isArray(genre) ? genre : [ genre ])
								.map(genre => ({
									label: genre,
									link: '#page=Movies&genre='+genre
								}))
				},
				{ 'name': 'Plot', 'value': plot },
				{
					name: 'Director',
					links: (Array.isArray(director) ? director : [ director ])
								.map(director => ({
									label: director,
									link: '#page=Movies&director='+director
								}))
				},
				{
					name: 'Writer',
					links: (Array.isArray(writer) ? writer : [ writer ])
								.map(writer => ({
									link: '#page=Movies&writers='+writer,
									label: writer
								}))
				},
				{
					name: 'Studio',
					links: (Array.isArray(studio) ? studio : [ studio ])
								.map(studio => ({
									label: studio,
									link: '#page=Movies&studio='+studio
								}))
				},
				{ 'name': 'Statistics', 'links': [
					{ 'label': `Runtime ${ seconds2string(runtime) }` },
					{ 'label': `Played ${ playcount } times` },
					{ 'label': lastplayed instanceof String && lastplayed.length > 0 ? `Last Played ${ moment(lastplayed).format('LL') }` : undefined },
					{ 'label': `Added ${ moment(dateadded).format('LL') }` }
				] },
				{
					name: 'Audio',
					links: (Array.isArray(streamdetails.audio) ? streamdetails.audio : [ streamdetails.audio ])
								.map(({ language, channels, codec }) => ({
									label: (language ? `${ language }: ` : '') + `${ channels } channels (${ codec })`
								}))
				},
				{
					name: 'Video',
					links: (Array.isArray(streamdetails.video) ? streamdetails.video : [ streamdetails.video ])
								.map(({ width, height, codec, stereomode }) => ({
									label: `${ width }×${ height } (${ codec })` + (stereomode ? `, ${ stereomode }` : '')
								}))
				},
				{
					name: 'File',
					links: [
						{
							label: file,
							actions: [ {
								label: 'Download',
								thumbnail: 'img/buttons/download.png',
								link: `${ xbmc.vfs2uri(file) }`
							} ]
						}
					]
				},
				{
					name: 'Links',
					links: [
						{
							label: 'IMDB',
							link: ( (imdbnumber instanceof String) && (imdbnumber.length > 0) ) ? 
									`http://www.imdb.com/title/${ imdbnumber }/` : 
									`http://www.imdb.com/search/title?release_date=${ encodeURIComponent(year) },&title=${ encodeURIComponent(title) }&title_type=feature,tv_movie,documentary,short`
						},
						{
							label: 'themoviedb.org',
							link: `https://www.themoviedb.org/search?query=${ encodeURIComponent(title) }`
						}
					]
				}
			],
			actions: [
				{	label: 'Play Trailer',
					thumbnail: 'img/buttons/play.png',
					link: makeJsLink(`xbmc.Play({ "file": "${ trailer }" }, 1)`)
				},
				{	label: 'Add to Playlist',
					thumbnail: 'img/buttons/add.png',
					link: makeJsLink("xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'movieid': "+movieid+" } })")
				},
				{	label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: makeJsLink(`xbmc.Play({ "movieid": ${ movieid } }, 1)`)
				}
			],
			cast: cast.map(actor => ({
				label: actor.name,
				details: actor.role,
				thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
				link: '#page=Movies&actor='+actor.name
			}))
		}))
	}
}));