import Page from '../js/page'
import { makeJsLink } from '../js/util'

import Filter from '../js/xbmcFilter'

export default (new Page({
	'id': 'Movie Set',
	'view': 'list',
	'groupby': 'year',
	'icon': state => 'img/icons/default/DefaultMovieTitle.png',
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
		//.then(x => {console.log(x);return x})
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
				movieid,
				label='',
				thumbnail='',
				year='',
				rating='',
				votes='',
				top250='',
				plot=''
			}) => ({
				label: label,
				thumbnail: xbmc.vfs2uri(thumbnail),
				link: `#page=Movie&movieid=${ movieid }`,
				year: year,
				detailList: [
					{ 'name': 'Rating', 'value': `${ Math.round(rating*10)/10 }/10 (${ votes } votes)` + (top250 ? ' #'+top250 : '') },
					{ 'name': 'Plot', 'value': plot }
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