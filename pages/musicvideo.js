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
					"art"
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
			label
		}) => ({
			'title': artist,
			'titleLink': `#page=Music Videos&artist=${ artist }`,
			'subtitle': label,
			'thumbnail': xbmc.vfs2uri(thumbnail),
			'fanart': xbmc.vfs2uri(fanart),
			'details': [
				{
					'name': 'Tag',
					'links': (Array.isArray(tag) ? tag : [ tag ])
								.map(tag => ({
									'label': tag,
									'link': '#page=Music Videos&tag='+tag
								}))
				},
				{
					'name': 'Album',
					'links': [{
						'label': `${album} (Track ${ track })`
						//'link': '#page=Album&albumid='+albumid
					}]
				},
				{
					'name': 'Year',
					'links': [{
						'label': year,
						'link': '#page=Music Videos&year='+year
					}]
				},
				{
					'name': 'Genre',
					'links': (Array.isArray(genre) ? genre : [ genre ])
								.map(genre => ({
									'label': genre,
									'link': '#page=Music Videos&genre='+genre
								}))
				},
				{ 'name': 'Plot', 'value': plot },
				{
					'name': 'Director',
					'links': (Array.isArray(director) ? director : [ director ])
								.map(director => ({
									'label': director,
									'link': '#page=Videos&director='+director
								}))
				},
				{
					'name': 'Studio',
					'links': (Array.isArray(studio) ? studio : [ studio ])
								.map(studio => ({
									'label': studio,
									'link': '#page=Videos&studio='+studio
								}))
				},
				{ 'name': 'Statistics', 'links': [
					{ 'label': `Runtime ${ seconds2string(runtime) }` },
					{ 'label': `Played ${ playcount } times` },
					{ 'label': lastplayed instanceof String && lastplayed.length > 0 ? `Last Played ${ moment(lastplayed).format('LL') }` : undefined },
					{ 'label': `Added ${ moment(dateadded).format('LL') }` }
				] },
				{
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