import Page from '../js/page'
import { seconds2string, ymd2string, makeJsLink, makeDetail, parseYear } from '../js/util'
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
			'subtitle': `(${parseYear(year)}) ${album}`,
			'label': (track > 0 ? `${ track }. ` : '') + title,
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
				runtime !== undefined && runtime > 0 && {
					'class': 'runtime',
					'name': 'Runtime',
					'value': moment.duration(runtime, 'seconds').humanize()
				},
				lastplayed instanceof String && lastplayed.length > 0 && {
					'class': 'lastplayed',
					'name': 'Last Played',
					'value': moment(lastplayed).format('LL')
				},
				dateadded instanceof String && dateadded.length > 0 && {
					'class': 'dateadded',
					'name': 'Added',
					'value': moment(dateadded).format('LL')
				},
				plot !== undefined && plot.length > 0 && {
					'class': 'plot',
					'name': 'Plot',
					'value': plot
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
