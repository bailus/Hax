import Page from '../js/page'
import { makeJsLink } from '../js/util'
import moment from 'moment'

import Filter from '../js/xbmcFilter'

export default (new Page({
	'id': 'Movie Set',
	'view': 'list',
	'groupby': 'year',
	'icon': state => 'img.estuary/default/DefaultSets.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Movies' }),
	'data': function ({ setid }) {
		
		return xbmc.get({
			'method': 'VideoLibrary.GetMovieSetDetails', //http://kodi.wiki/view/JSON-RPC_API/#VideoLibrary.GetMovieSetDetails
			'params': {
				'setid': +setid,
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/#Video.Fields.MovieSet
					"title", 
					"playcount", 
					"fanart", 
					"thumbnail", 
					"art"
				],
				'movies': {
					'properties': [ //http://kodi.wiki/view/JSON-RPC_API/#Video.Fields.Movie
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
					]
				}
			}
		})
		.then(({ setdetails={} }) => setdetails)
		.then(({
			label='',
			playcount=0,
			fanart='',
			thumbnail='',
			art={},
			movies=[]
		}) => ({
			title: label,
			items: movies.map(({
				movieid, label, title,  genre,  year,  rating,  director,  trailer,  tagline,  plot,  plotoutline,
				originaltitle,  lastplayed,  playcount,  writer,  studio,  mpaa,  cast,  country,  imdbnumber,  runtime,
				set,  showlink,  streamdetails,  top250,  votes,  fanart,  thumbnail,  file,  sorttitle,  resume,
				setid,  dateadded,  tag,  art
			}) => ({
				label: label,
				thumbnail: xbmc.vfs2uri(thumbnail),
				link: `#page=Movie&movieid=${ movieid }`,
				year: year,
				detailList: [
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
					runtime !== undefined && runtime > 0 && {
						'class': 'runtime',
						'name': 'Runtime',
						'value': moment.duration(runtime, 'seconds').humanize()
					}
				],
					actions: [
						{	label: 'Play',
							thumbnail: 'img/buttons/play.png',
							link: makeJsLink(`xbmc.Play({ "movieid": ${ movieid } }, 1)`)
						}
					]
			}))
		}))

	}
}));
