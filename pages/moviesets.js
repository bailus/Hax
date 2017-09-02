import Page from '../js/page.js'
import { makeJsLink } from '../js/util.js'

import Filter from '../js/xbmcFilter.js'

export default (new Page({
	'id': 'Movie Sets',
	'view': 'list',
	'icon': state => 'img.estuary/default/DefaultSets.png',
	'groupby': 'alpha',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Movies' }),
	'data': function (state) {
		
		
		const getMovieSets = xbmc.get({
			'method': 'VideoLibrary.GetMovieSets', //http://kodi.wiki/view/JSON-RPC_API/#VideoLibrary.GetMovieSetDetails
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/#Video.Fields.MovieSet
					"thumbnail"
				]
			}
		})
		.then(({ sets=[] }) => (sets.map(({
			label="", thumbnail, setid
		}) => ({
			'label': label,
			'alpha': label.at(0).toUpperCase(),
			'thumbnail': xbmc.vfs2uri(thumbnail) || 'img.estuary/default/DefaultSets.png',
			'link': `#page=Movie Set&setid=${ setid }`
		}))))


		return Promise.all([ getMovieSets ])
		.then(( [ sets ] = [ [] ] ) => ({
			'title': 'Movie Sets',
			'items': sets
		}))


	}
}));
