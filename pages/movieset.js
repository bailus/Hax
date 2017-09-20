import Page from '../js/page.js'
import { makeJsLink, seconds2string } from '../js/util.js'
import moment from 'moment'

import Filter from '../js/xbmcFilter.js'

export default (new Page({
	'id': 'Movie Set',
	'view': 'list',
	'icon': state => 'img.estuary/default/DefaultSets.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Movies' }),
	'data': function ({ setid }) {
		
		return xbmc.get({
			'method': 'VideoLibrary.GetMovieSetDetails', //http://kodi.wiki/view/JSON-RPC_API/#VideoLibrary.GetMovieSetDetails
			'params': {
				'setid': +setid,
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/#Video.Fields.MovieSet
					"title", 
					"art",
					"plot"
				],
				'movies': {
					'properties': [ //http://kodi.wiki/view/JSON-RPC_API/#Video.Fields.Movie
						"title", 
						"year", 
						"originaltitle", 
						"runtime", 
						"thumbnail" 
					],
					'sort': {
						'method': 'year'
					}
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
			movies=[],
			plot=''
		}) => ({
			title: label,
			details: [
				plot !== '' && {
					'class': 'plot',
					'name': 'Plot',
					'value': plot
				}
			],
			items: movies.map(({
				movieid, label, thumbnail, year, runtime
			}) => ({
				label: label,
				thumbnail: xbmc.vfs2uri(thumbnail),
				link: `#page=Movie&movieid=${ movieid }`,
				year: year,
				details: [
					`(${year})`,
					seconds2string(runtime)
				],
				actions: [
					{
						label: '▶',
						link: makeJsLink(`xbmc.Play({ "movieid": ${ movieid } }, 1)`)
					}
				]
			}))
		}))

	}
}));
