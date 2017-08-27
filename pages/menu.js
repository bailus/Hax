import Page from '../js/page'
import { seconds2string, makeJsLink } from '../js/util'
import moment from 'moment'
import icons from './icons'

export default (new Page({
	'id': 'Menu',
	'view': 'list',
	'icon': state => (icons.menu[(state && state['media']) || 'Default']),
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
						{ 'label': 'Movies', 'link': '#page=Menu&media=Movies', 'thumbnail': icons.menu['Movies'] },
						{ 'label': 'TV Shows', 'link': '#page=Menu&media=TV Shows', 'thumbnail': icons.menu['TV Shows'] },
						{ 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail': icons.menu['Music Videos'] },
						{ 'label': 'Actors', 'link': '#page=Actors', 'thumbnail': 'img.estuary/default/DefaultActor.png' }
					] },
					{ 'label': 'More', 'items': [
						{ 'label': 'Files', 'link': '#page=Files&media=Videos', 'thumbnail': icons.menu['Files'] },
						{ 'label': 'Addons', 'link': '#page=Addons&content=video', 'thumbnail': icons.menu['Addons'] }
					] }
				],
				'Movies': [
					{ 'label': 'Movies', 'items': [
						{ 'label': 'By Year', 'link': '#page=Movies&group=year', 'thumbnail': 'img.estuary/default/DefaultMovieYears.png' },
						{ 'label': 'By Title', 'link': '#page=Movies&group=alpha', 'thumbnail': 'img.estuary/default/DefaultMovieTitle.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Movies', 'thumbnail': 'img.estuary/default/DefaultGenre.png' },
						{ 'label': 'By Actor', 'link': '#page=Actors&media=Movies', 'thumbnail': 'img.estuary/default/DefaultActor.png' }
					] },
					{ 'label': 'Movie Sets', 'items': [
						{ 'label': 'By Title', 'link': '#page=Movie Sets', 'thumbnail': 'img.estuary/default/DefaultSets.png' }
					] }
				],
				'TV Shows': [
					{ 'label': 'TV Shows', 'items': [
						{ 'label': 'By Title', 'link': '#page=TV Shows', 'thumbnail': 'img.estuary/default/DefaultTVShowTitle.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=TV Shows', 'thumbnail': 'img.estuary/default/DefaultGenre.png' },
						{ 'label': 'By Actor', 'link': '#page=Actors&media=TV Shows', 'thumbnail': 'img.estuary/default/DefaultActor.png' }
					] }
				],
				'Music Videos': [
					{ 'label': 'Music Videos', 'items': [
						{ 'label': 'By Year', 'link': '#page=Music Videos&group=year', 'thumbnail': 'img.estuary/default/DefaultMusicYears.png' },
						{ 'label': 'By Artist', 'link': '#page=Music Videos', 'thumbnail': 'img.estuary/default/DefaultMusicArtists.png' },
						{ 'label': 'By Genre', 'link': '#page=Music Videos&group=genre', 'thumbnail': 'img.estuary/default/DefaultMusicGenres.png' }
					] }
				],
				'Music': [
					{ 'label': 'Artists', 'items': [
						{ 'label': 'By Name', 'link': '#page=Artists', 'thumbnail': 'img.estuary/default/DefaultMusicArtists.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Artists', 'thumbnail': 'img.estuary/default/DefaultMusicGenres.png' }
					] },
					{ 'label': 'Albums', 'items': [
						{ 'label': 'By Year', 'link': '#page=Albums&group=year', 'thumbnail': 'img.estuary/default/DefaultMusicYears.png' },
						{ 'label': 'By Title', 'link': '#page=Albums', 'thumbnail': 'img.estuary/default/DefaultMusicAlbums.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Albums', 'thumbnail': 'img.estuary/default/DefaultMusicGenres.png' }
					] },
					{ 'label': 'More', 'items': [
						{ 'label': 'Files', 'link': '#page=Files&media=Music', 'thumbnail': icons.menu['Files'] },
						{ 'label': 'Addons', 'link': '#page=Addons&content=audio', 'thumbnail': icons.menu['Addons'] },
						{ 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail': icons.menu['Music Videos'] }
					] }
				],
				'Addons': [
					{ 'label': 'My Addons', 'items': [
						{ 'label': 'Video Addons', 'link': '#page=Addons&content=video', 'thumbnail': icons.menu['Videos'] },
						{ 'label': 'Music Addons', 'link': '#page=Addons&content=audio', 'thumbnail': icons.menu['Music'] },
						{ 'label': 'Picture Addons', 'link': '#page=Addons&content=image', 'thumbnail': icons.menu['Pictures'] },
						{ 'label': 'Program Addons', 'link': '#page=Addons&content=executable', 'thumbnail': icons.menu['Addons'] },
					]},
					{ 'label': 'More', 'items': [
						{ 'label': 'Installed Addons', 'link': '#page=Addons&group=type', 'thumbnail': icons.menu['Addons'] }
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
					'cache': false,
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
					'cache': false,
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
				},
				{
					'name': 'Unwatched',
					'cache': false,
					'method': 'VideoLibrary.GetMusicVideos',
					'params': {
						"properties": [
							"title", "runtime", "album", "artist", "year", "thumbnail", "dateadded"
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
					'key': 'musicvideos',
					'defaultThumbnail': 'img/icons/default/DefaultVideo.png',
					'transformItem': ({
						musicvideoid, artist, title, album, year, dateadded
					}) => ({
						'link': '#page=Music Video&musicvideoid='+musicvideoid,
						'label': title,
						'details': artist
					})
				},
				{
					'name': 'Random',
					'cache': false,
					'method': 'VideoLibrary.GetMusicVideos',
					'params': {
						"properties": [
							"title", "runtime", "album", "artist", "year", "thumbnail", "dateadded"
						],
						'limits': {
							'end': 10
						},
						'sort': {
							'method': 'random'
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
					'cache': false,
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
					'cache': false,
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

		const actions = ({
				'Videos': [ 
						{ 'label': 'Update Video Library', 'link': makeJsLink(`xbmc.get({ 'method': 'VideoLibrary.Scan' })`),  'thumbnail': icons.actions['Update'] },
						{ 'label': 'Clean Video Library',  'link': makeJsLink(`xbmc.get({ 'method': 'VideoLibrary.Clean' })`) }
					],
				'Music': [ 
						{ 'label': 'Update Music Library', 'link': makeJsLink(`xbmc.get({ 'method': 'AudioLibrary.Scan' })`),  'thumbnail': icons.actions['Update'] },
						{ 'label': 'Clean Music Library',  'link': makeJsLink(`xbmc.get({ 'method': 'AudioLibrary.Clean' })`) }
					]
		})[media]

		if (iconLists !== undefined) {
			getPage = getPage.then(page => {
				return Promise.all(iconLists.map(({
					method, params, key, transformItem, defaultThumbnail, name, cache=true
				}) => {
					return xbmc.get({
						'method': method,
						'params': params,
						'cache': cache
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
					if (page.details)
						page.details = page.details.concat(iconLists)
					else
						page.details = iconLists

					return page
				})
			})
		}

		if (actions !== undefined) getPage = getPage.then(page => {
			page.actions = actions
			return page
		})

		return getPage

	}
}));
