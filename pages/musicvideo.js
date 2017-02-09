import Page from '../js/page'
import { seconds2string, ymd2string, makeJsLink, makeDetail } from '../js/util'
import moment from 'moment'

export default (new Page({
	'id': 'Music Video',
	'view': 'list',
	'parent': 'Music Videos',
	'icon': state => 'img/icons/default/DefaultVideo.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Music Videos' }),
	'data': state => {

		let musicvideoid = +state['musicvideoid']

		return xbmc.get({
			'method': 'VideoLibrary.GetMusicVideoDetails', //http://kodi.wiki/view/JSON-RPC_API/v6#VideoLibrary.GetMusicVideoDetails
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Video.Fields.MusicVideo
					"title", 
					"playcount", 
					"runtime", 
					"director", 
					"studio", 
					"year", 
					"plot", 
					"album", 
					"artist", 
					"genre", 
					"track", 
					"streamdetails", 
					"lastplayed", 
					"fanart", 
					"thumbnail", 
					"file", 
					"resume", 
					"dateadded", 
					"tag", 
					"art",
					"rating"
				],
				'musicvideoid': musicvideoid
			}
		})
		.then(({ musicvideodetails={} }) => musicvideodetails)
		//.then(x => {console.log(x);return x})
		.then(({
			title,
			playcount,
			runtime,
			director,
			studio,
			year,
			plot,
			album,
			//albumid,
			artist,
			genre,
			track,
			streamdetails,
			lastplayed,
			fanart,
			thumbnail,
			file,
			resume,
			dateadded,
			tag,
			art,
			label,
			rating,
			votes
		}) => ({
			'title': artist,
			'titleLink': `#page=Artist&artist=${ artist }`,
			'subtitle': album + (track > 0 ? `(Track ${ track })` : ''),
			'label': label,
			'thumbnail': xbmc.vfs2uri(thumbnail),
			'fanart': xbmc.vfs2uri(fanart),
			'details': [
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
				makeDetail('Music Videos', 'Genre', 'genre', genre),
				makeDetail('Music Videos', 'Tag', 'tag', tag),
				{
					'name': 'Director',
					'links': (Array.isArray(director) ? director : [ director ])
								.map(director => ({
									'label': director,
									'link': '#page=Videos&director='+director
								}))
				},
				{ 'name': 'Statistics', 'links': [
					{ 'label': `Runtime ${ seconds2string(runtime) }` },
					{ 'label': `Played ${ playcount } times` },
					{ 'label': lastplayed instanceof String && lastplayed.length > 0 ? `Last Played ${ moment(lastplayed).format('LL') }` : undefined },
					{ 'label': `Added ${ moment(dateadded).format('LL') }` }
				] },
				file !== undefined && file.length > 0 && {
					'name': 'File',
					'links': [
						{
							'label': file,
							'link': `${ xbmc.vfs2uri(file) }`
						}
					]
				}
			],
			actions: [
				{	'label': 'Play',
					'thumbnail': 'img/buttons/play.png',
					'link': makeJsLink(`xbmc.Play({ 'musicvideoid': ${ musicvideoid } }, 1)`)
				},
				{	'label': 'Add to Playlist',
					'thumbnail': 'img/buttons/add.png',
					'link': makeJsLink(`xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'musicvideoid': ${ musicvideoid } } })`)
				}
			]
		}))
	}
}));