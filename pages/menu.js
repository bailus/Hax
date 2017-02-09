import Page from '../js/page'
import { seconds2string, makeJsLink } from '../js/util'
import moment from 'moment'

export default (new Page({
	'id': 'Menu',
	'view': 'list',
	'icon': state => ({
		'Default': 'img/icons/home/menu.png',
		'Videos': 'img/icons/home/videos.png',
		'Movies': 'img/icons/home/movies.png',
		'TV Shows': 'img/icons/home/tv.png',
		'Music Videos': 'img/icons/home/musicvideos.png',
		'Music': 'img/icons/home/music.png',
		'Pictures': 'img/icons/home/pictures.png',
		'TV': 'img/icons/home/livetv.png',
		'Radio': 'img/icons/home/radio.png',
		'Addons': 'img/icons/home/addons.png'
	}[state ? state['media'] : 'Default']),
	'parentState': state => {
		const m = new Map()
		const parent = {
			'Movies': 'Videos',
			'TV Shows': 'Videos',
			'Music Videos': 'Videos'
		}[state['media']]
		if (parent) {
			m['page'] = 'Menu'
			m['media'] = parent
		}
		else {
			m['page'] = 'Home'
		}
		return m
	},
	'data': function (state) {
		let media = state['media']
		let m = ({'Videos':'video','Music':'music','Pictures':'pictures'})[media]

		let getPage = Promise.resolve({
			'pageName': media || 'Menu',
			'items': ({
				'Videos': [
					{ 'label': 'Library', 'items': [
						{ 'label': 'Movies', 'link': '#page=Menu&media=Movies', 'thumbnail': 'img/icons/home/movies.png' },
						{ 'label': 'TV Shows', 'link': '#page=Menu&media=TV Shows', 'thumbnail': 'img/icons/home/tv.png' },
						{ 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail': 'img/icons/home/musicvideos.png' }
					] },
					{ 'label': 'More', 'items': [
						{ 'label': 'Files', 'link': '#page=Files&media=Videos', 'thumbnail': 'img/icons/default/DefaultFolder.png' },
						{ 'label': 'Addons', 'link': '#page=Addons&content=video', 'thumbnail': 'img/icons/home/addons.png' }
					] }
				],
				'Movies': [
					{ 'label': 'Movies', 'items': [
						{ 'label': 'By Year', 'link': '#page=Movies&group=year', 'thumbnail': 'img/icons/default/DefaultMovieYears.png' },
						{ 'label': 'By Title', 'link': '#page=Movies&group=alpha', 'thumbnail': 'img/icons/default/DefaultMovieTitle.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Movies', 'thumbnail': 'img/icons/default/DefaultGenre.png' },
						{ 'label': 'By Actor', 'link': '#page=Actors&media=Movies', 'thumbnail': 'img/icons/default/DefaultActor.png' }
					] },
					{ 'label': 'Movie Sets', 'items': [
						{ 'label': 'By Title', 'link': '#page=Movie Sets', 'thumbnail': 'img/icons/default/DefaultMovieTitle.png' }
					] }
				],
				'TV Shows': [
					{ 'label': 'TV Shows', 'items': [
						{ 'label': 'By Title', 'link': '#page=TV Shows', 'thumbnail': 'img/icons/default/DefaultTVShows.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=TV Shows', 'thumbnail': 'img/icons/default/DefaultGenre.png' },
						{ 'label': 'By Actor', 'link': '#page=Actors&media=TV Shows', 'thumbnail': 'img/icons/default/DefaultActor.png' }
					] }
				],
				'Music Videos': [
					{ 'label': 'Music Videos', 'items': [
						{ 'label': 'By Year', 'link': '#page=Music Videos&group=year', 'thumbnail': 'img/icons/default/DefaultYear.png' },
						{ 'label': 'By Artist', 'link': '#page=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' },
						{ 'label': 'By Genre', 'link': '#page=Music Videos&group=genre', 'thumbnail': 'img/icons/default/DefaultGenre.png' }
					] }
				],
				'Music': [
					{ 'label': 'Artists', 'items': [
						{ 'label': 'By Name', 'link': '#page=Artists', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Artists', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }
					] },
					{ 'label': 'Albums', 'items': [
						{ 'label': 'By Year', 'link': '#page=Albums&group=year', 'thumbnail': 'img/icons/default/DefaultMusicYears.png' },
						{ 'label': 'By Title', 'link': '#page=Albums', 'thumbnail': 'img/icons/default/DefaultMusicAlbums.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Albums', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }
					] },
					{ 'label': 'More', 'items': [
						{ 'label': 'Files', 'link': '#page=Files&media=Music', 'thumbnail': 'img/icons/default/DefaultFolder.png' },
						{ 'label': 'Addons', 'link': '#page=Addons&content=audio', 'thumbnail': 'img/icons/home/addons.png' },
						{ 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail': 'img/icons/home/musicvideos.png' }
					] }
				],
				'Pictures': [ ],
				'TV': [
					{ 'label': '', 'items': [
						{ 'label': 'Channels', 'link': '#page=Channels&media=TV', 'thumbnail': 'img/icons/home/livetv.png' },
						{ 'label': 'Guide', 'link': '#page=Channels&media=TV&nextpage=Guide', 'thumbnail': 'img/icons/home/livetv.png' },
						{ 'label': 'Recordings', 'link': '#page=Recordings&media=TV', 'thumbnail': 'img/icons/home/livetv.png' },
						{ 'label': 'Timers', 'link': '#page=Timers&media=TV', 'thumbnail': 'img/icons/home/livetv.png' }
					] }
				],
				'Radio': [
					{ 'label': '', 'items': [
						{ 'label': 'Channels', 'link': '#page=Channels&media=Radio', 'thumbnail': 'img/icons/home/radio.png' },
						{ 'label': 'Guide', 'link': '#page=Channels&media=Radio&nextpage=Guide', 'thumbnail': 'img/icons/home/radio.png' },
						{ 'label': 'Recordings', 'link': '#page=Recordings&media=Radio', 'thumbnail': 'img/icons/home/radio.png' },
						{ 'label': 'Timers', 'link': '#page=Timers&media=Radio', 'thumbnail': 'img/icons/home/radio.png' }
					] }
				],
				'Addons': [
					{ 'label': 'My Addons', 'items': [
						{ 'label': 'Video Addons', 'link': '#page=Addons&content=video', 'thumbnail': 'img/icons/home/videos.png' },
						{ 'label': 'Music Addons', 'link': '#page=Addons&content=audio', 'thumbnail': 'img/icons/home/music.png' },
						{ 'label': 'Picture Addons', 'link': '#page=Addons&content=image', 'thumbnail': 'img/icons/home/pictures.png' },
						{ 'label': 'Program Addons', 'link': '#page=Addons&content=executable', 'thumbnail': 'img/icons/home/addons.png' },
					]},
					{ 'label': 'More', 'items': [
						{ 'label': 'Installed Addons', 'link': '#page=Addons&group=type', 'thumbnail': 'img/icons/home/addons.png' }
					]}
				]
			})[media]
		})

		let iconLists = ({
			'TV Shows': [
				{
					'name': 'In Progress',
					'method': 'VideoLibrary.GetTVShows',
					'params': {
						'properties': [
							'title', 'originaltitle', 'sorttitle', 'thumbnail', 'lastplayed', 'watchedepisodes'
						],
						'limits': {
							'end': 10
						},
						'sort': {
							'method': 'lastplayed',
							'order': 'descending'
						},
						'filter': {
							'field': 'inprogress',
							'operator': 'is',
							'value': 'true'
						}
					},
					'key': 'tvshows',
					'defaultThumbnail': 'img/icons/default/DefaultVideo.png',
					'transformItem': ({
						tvshowid, title, lastplayed, watchedepisodes
					}) => ({
						'link': '#page=TV Show&tvshowid='+tvshowid,
						'label': title,
						'details': `${watchedepisodes} watched`
					})
				},
				{
					'name': 'Recently Added',
					'method': 'VideoLibrary.GetRecentlyAddedEpisodes',
					'params': { 'properties': [ 'tvshowid', 'title', 'thumbnail', 'episode', 'season', 'file', 'showtitle', 'dateadded' ], 'limits': { 'end': 10 } },
					'key': 'episodes',
					'defaultThumbnail': 'img/icons/default/DefaultVideo.png',
					'transformItem': ({
						episodeid, showtitle, dateadded, title, season, episode
					}) => ({
						'link': '#page=Episode&episodeid='+episodeid,
						'label': `${showtitle} - ${season}x${episode} ${title}`,
						'details': `Added ${moment(dateadded).calendar()}`
					})
				},
				{
					'name': 'Unwatched',
					'method': 'VideoLibrary.GetTVShows',
					'params': {
						'properties': [
							'title', 'originaltitle', 'sorttitle', 'thumbnail', 'rating', 'votes'
						],
						'limits': {
							'end': 10
						},
						'sort': {
							'method': 'random'
						},
						'filter': {
							'field': 'numwatched',
							'operator': 'is',
							'value': '0'
						}
					},
					'key': 'tvshows',
					'defaultThumbnail': 'img/icons/default/DefaultVideo.png',
					'transformItem': ({
						tvshowid, title, rating, votes
					}) => ({
						'link': '#page=TV Show&tvshowid='+tvshowid,
						'label': title,
						'details': `${Math.round(rating*10)/10}/10 (${votes} votes)`
					})
				},
				{
					'name': 'Highest Rating',
					'method': 'VideoLibrary.GetTVShows',
					'params': {
						'properties': [
							'title', 'originaltitle', 'sorttitle', 'thumbnail', 'rating', 'votes'
						],
						'limits': {
							'end': 10
						},
						'sort': {
							'method': 'rating',
							'order': 'descending'
						},
						'filter': {
							'field': 'votes',
							'operator': 'greaterthan',
							'value': '99'
						}
					},
					'key': 'tvshows',
					'defaultThumbnail': 'img/icons/default/DefaultVideo.png',
					'transformItem': ({
						tvshowid, title, rating, votes
					}) => ({
						'link': '#page=TV Show&tvshowid='+tvshowid,
						'label': title,
						'details': `${Math.round(rating*10)/10}/10 (${votes} votes)`
					})
				}
			],
			'Movies': [
				{
					'name': 'In Progress',
					'method': 'VideoLibrary.GetMovies',
					'params': {
						"properties": [
							"title", "originaltitle", "runtime", "year", "thumbnail", "tagline", "rating", "votes", "top250"
						],
						'limits': {
							'end': 10
						},
						'sort': {
							'method': 'lastplayed',
							'order': 'descending'
						},
						'filter': {
							'field': 'inprogress',
							'operator': 'is',
							'value': 'true'
						}
					},
					'key': 'movies',
					'defaultThumbnail': 'img/icons/default/DefaultVideo.png',
					'transformItem': ({
						movieid, label, year, dateadded, rating, votes, top250
					}) => ({
						'link': `#page=Movie&movieid=${movieid}`,
						'label': `(${year}) ${label}`,
						'details': (top250 ? `#${top250} ` : '')+`${Math.round(rating*10)/10}/10 (${votes} votes)`
					})
				},
				{
					'name': 'Recently Added',
					'method': 'VideoLibrary.GetRecentlyAddedMovies',
					'params': {
						"properties": [
							"title", "originaltitle", "runtime", "year", "thumbnail", "tagline", "dateadded"
						],
						'limits': {
							'end': 10
						}
					},
					'key': 'movies',
					'defaultThumbnail': 'img/icons/default/DefaultVideo.png',
					'transformItem': ({
						movieid, label, year, dateadded
					}) => ({
						'link': `#page=Movie&movieid=${movieid}`,
						'label': `(${year}) ${label}`,
						'details': `Added ${moment(dateadded).calendar()}`,
					})
				},
				{
					'name': 'Unwatched',
					'method': 'VideoLibrary.GetMovies',
					'params': {
						"properties": [
							"title", "originaltitle", "runtime", "year", "thumbnail", "tagline", "rating", "votes", "top250"
						],
						'limits': {
							'end': 10
						},
						'sort': {
							'method': 'random'
						},
						'filter': {
							'field': 'playcount',
							'operator': 'is',
							'value': '0'
						}
					},
					'key': 'movies',
					'defaultThumbnail': 'img/icons/default/DefaultVideo.png',
					'transformItem': ({
						movieid, label, year, dateadded, rating, votes, top250
					}) => ({
						'link': `#page=Movie&movieid=${movieid}`,
						'label': `(${year}) ${label}`,
						'details': (top250 ? `#${top250} ` : '')+`${Math.round(rating*10)/10}/10 (${votes} votes)`
					})
				},
				{
					'name': 'Highest Rating',
					'method': 'VideoLibrary.GetMovies',
					'params': {
						"properties": [
							"title", "originaltitle", "runtime", "year", "thumbnail", "tagline", "rating", "votes", "top250"
						],
						'limits': {
							'end': 10
						},
						'sort': {
							'method': 'rating',
							'order': 'descending'
						},
						'filter': {
							'field': 'votes',
							'operator': 'greaterthan',
							'value': '99'
						}
					},
					'key': 'movies',
					'defaultThumbnail': 'img/icons/default/DefaultVideo.png',
					'transformItem': ({
						movieid, label, year, dateadded, rating, votes, top250
					}) => ({
						'link': `#page=Movie&movieid=${movieid}`,
						'label': `(${year}) ${label}`,
						'details': (top250 ? `#${top250} ` : '')+`${Math.round(rating*10)/10}/10 (${votes} votes)`
					})
				}
			],
			'Music Videos': [
				{
					'name': 'Recently Added',
					'method': 'VideoLibrary.GetRecentlyAddedMusicVideos',
					'params': {
						"properties": [
							"title", "runtime", "album", "artist", "year", "thumbnail", "dateadded"
						],
						'limits': {
							'end': 10
						}
					},
					'key': 'musicvideos',
					'defaultThumbnail': 'img/icons/default/DefaultVideo.png',
					'transformItem': ({
						musicvideoid, artist, title, album, year, dateadded
					}) => ({
						'link': '#page=Music Video&musicvideoid='+musicvideoid,
						'label': title,
						'details': artist
					})
				}
			],
			'Music': [
				{
					'name': 'Recently Played',
					'method': 'AudioLibrary.GetAlbums',
					'params': {
						"properties": [ // http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Album
							"title", 
							"artist",
							"thumbnail"
						],
						'limits': {
							'end': 10
						},
						'sort': {
							'method': 'lastplayed',
							'order': 'descending'
						}
					},
					'key': 'albums',
					'defaultThumbnail': 'img/icons/default/DefaultAlbumCover.png',
					'transformItem': ({
						albumid, label, artist
					}) => ({
						'link': '#page=Album&albumid='+albumid,
						'label': label,
						'details': artist
					})
				},
				{
					'name': 'Recently Added',
					'method': 'AudioLibrary.GetRecentlyAddedAlbums',
					'params': {
						"properties": [ // http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Album
							"title", 
							"artist",
							"thumbnail"
						],
						'limits': {
							'end': 10
						}
					},
					'key': 'albums',
					'defaultThumbnail': 'img/icons/default/DefaultAlbumCover.png',
					'transformItem': ({
						albumid, label, artist
					}) => ({
						'link': '#page=Album&albumid='+albumid,
						'label': label,
						'details': artist
					})
				},
				{
					'name': 'Random Albums',
					'method': 'AudioLibrary.GetAlbums',
					'params': {
						"properties": [ // http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Album
							"title", 
							"artist",
							"thumbnail"
						],
						'limits': {
							'end': 10
						},
						'sort': {
							'method': 'random'
						}
					},
					'key': 'albums',
					'defaultThumbnail': 'img/icons/default/DefaultAlbumCover.png',
					'transformItem': ({
						albumid, label, artist
					}) => ({
						'link': '#page=Album&albumid='+albumid,
						'label': label,
						'details': artist
					})
				},
				{
					'name': 'Random Artists',
					'method': 'AudioLibrary.GetArtists',
					'params': {
						"properties": [ // http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Album
							"thumbnail"
						],
						'limits': {
							'end': 10
						},
						'sort': {
							'method': 'random'
						}
					},
					'key': 'artists',
					'defaultThumbnail': 'img/icons/default/DefaultMusicArtists.png',
					'transformItem': ({
						label, artistid
					}) => ({
						'link': `#page=Artist&artistid=${artistid}`,
						'label': label
					})
				},
				{
					'name': 'Unplayed Albums',
					'method': 'AudioLibrary.GetAlbums',
					'params': {
						"properties": [ // http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Album
							"title", 
							"artist",
							"thumbnail"
						],
						'limits': {
							'end': 10
						},
						'sort': {
							'method': 'random'
						},
						'filter': {
							'field': 'playcount',
							'operator': 'is',
							'value': '0'
						}
					},
					'key': 'albums',
					'defaultThumbnail': 'img/icons/default/DefaultAlbumCover.png',
					'transformItem': ({
						albumid, label, artist
					}) => ({
						'link': '#page=Album&albumid='+albumid,
						'label': label,
						'details': artist
					})
				},
				{
					'name': 'Most Played',
					'method': 'AudioLibrary.GetAlbums',
					'params': {
						"properties": [ // http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Album
							"title", 
							"artist",
							"thumbnail"
						],
						'limits': {
							'end': 10
						},
						'sort': {
							'method': 'playcount',
							'order': 'descending'
						}
					},
					'key': 'albums',
					'defaultThumbnail': 'img/icons/default/DefaultAlbumCover.png',
					'transformItem': ({
						albumid, label, artist
					}) => ({
						'link': '#page=Album&albumid='+albumid,
						'label': label,
						'details': artist
					})
				}
			]
		})[media]

		if (iconLists !== undefined) {
			getPage = getPage.then(page => {
				return Promise.all(iconLists.map(({
					method, params, key, transformItem, defaultThumbnail, name
				}) => {
					return xbmc.get({
						'method': method,
						'params': params
					})
					.then(result => result[key] || [])
					.then(items => items.map(item => {
						let out = transformItem(item)
						out.thumbnail = item.thumbnail ? xbmc.vfs2uri(item.thumbnail) : defaultThumbnail
						return out
					}))
					.then(items => ({
						'name': name,
						'iconList': items
					}))
				}))
				.then(iconLists => {
					console.log(iconLists)
					if (page.details)
						page.details = page.details.concat(iconLists)
					else
						page.details = iconLists
					return page
				})
			})
		}

		return getPage

	}
}));