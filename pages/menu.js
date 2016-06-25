import Page from '../js/page'
import { seconds2string, makeJsLink } from '../js/util'

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
		'Radio': 'img/icons/home/radio.png'
	}[state ? state.get('media') : 'Default']),
	'parentState': state => {
		const m = new Map()
		const parent = {
			'Movies': 'Videos',
			'TV Shows': 'Videos',
			'Music Videos': 'Videos'
		}[state.get('media')]
		if (parent) {
			m.set('page', 'Menu')
			m.set('media', parent)
		}
		else {
			m.set('page', 'Home')
		}
		return m
	},
	'data': function (state) {
		let media = state.get('media')
		let m = ({'Videos':'video','Music':'music','Pictures':'pictures'})[media]

		let getPage = Promise.resolve({
			'pageName': media || 'Menu',
			'items': ({
				'Videos': [
					{ 'label': 'Library', 'items': [
						{ 'label': 'Movies', 'link': '#page=Menu&media=Movies', 'thumbnail': 'img/icons/home/movies.png' },
						{ 'label': 'TV Shows', 'link': '#page=Menu&media=TV Shows', 'thumbnail': 'img/icons/home/tv.png' },
						{ 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail': 'img/icons/home/musicvideos.png' }
					] }
				],
				'Movies': [
					{ 'label': 'Library', 'items': [
						{ 'label': 'By Year', 'link': '#page=Movies&group=year', 'thumbnail': 'img/icons/default/DefaultMovieYears.png' },
						{ 'label': 'By Title', 'link': '#page=Movies&group=alpha', 'thumbnail': 'img/icons/default/DefaultMovieTitle.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Movies', 'thumbnail': 'img/icons/default/DefaultGenre.png' },
						{ 'label': 'By Actor', 'link': '#page=Actors&media=Movies', 'thumbnail': 'img/icons/default/DefaultActor.png' }
					] }
				],
				'TV Shows': [
					{ 'label': 'Library', 'items': [
						{ 'label': 'By Title', 'link': '#page=TV Shows', 'thumbnail': 'img/icons/default/DefaultTVShows.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=TV Shows', 'thumbnail': 'img/icons/default/DefaultGenre.png' },
						{ 'label': 'By Actor', 'link': '#page=Actors&media=TV Shows', 'thumbnail': 'img/icons/default/DefaultActor.png' }
					] }
				],
				'Music Videos': [
					{ 'label': 'Library', 'items': [
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
					] }/*,
					{ 'label': 'Music Videos', 'items': [
						{ 'label': 'By Artist', 'link': '#page=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Music Videos', 'thumbnail': 'img/icons/default/DefaultGenre.png' }
					] }*/
				],
				'Pictures': [ ],
				'TV': [
					{ 'label': '', 'items': [
						{ 'label': 'Channels', 'link': '#page=Channels&media=TV', 'thumbnail': 'img/icons/home/livetv.png' },
						{ 'label': 'Guide', 'link': '#page=Channels&media=TV&nextpage=Guide', 'thumbnail': 'img/icons/home/livetv.png' }/*,
						{ 'label': 'Recordings', 'link': '#', 'thumbnail': 'img/icons/home/livetv.png' },
						{ 'label': 'Timers', 'link': '#page=Timers&media=TV', 'thumbnail': 'img/icons/home/livetv.png' }*/
					] }
				],
				'Radio': [
					{ 'label': '', 'items': [
						{ 'label': 'Channels', 'link': '#page=Channels&media=Radio', 'thumbnail': 'img/icons/home/radio.png' },
						{ 'label': 'Guide', 'link': '#page=Channels&media=Radio&nextpage=Guide', 'thumbnail': 'img/icons/home/radio.png' }/*,
						{ 'label': 'Recordings', 'link': '#', 'thumbnail': 'img/icons/home/radio.png' },
						{ 'label': 'Timers', 'link': '#page=Timers&media=Radio', 'thumbnail': 'img/icons/home/radio.png' }*/
					] }
				]
			})[media]
		})

		let recentlyAdded = ({
			'TV Shows': {
				method: 'VideoLibrary.GetRecentlyAddedEpisodes',
				params: { 'properties': [ 'tvshowid', 'title', 'thumbnail', 'episode', 'season', 'file', 'showtitle' ], 'limits': { 'end': 5 } },
				key: 'episodes',
				defaultThumbnail: 'img/icons/default/DefaultVideo.png',
				transformItem: item => ({
					link: '#page=Episode&episodeid='+item.episodeid,
					label: item.showtitle + ' - ' + item.title,
					details: [ 'Season '+item.season, 'Episode '+item.episode ],
					actions: [
						{ label: '▶', link: makeJsLink(`xbmc.Play({ 'episodeid': ${item.episodeid} }, 1)`) }
					]
				})
			},
			'Movies': {
				method: 'VideoLibrary.GetRecentlyAddedMovies',
				params: { "properties": [ "title", "originaltitle", "runtime", "year", "thumbnail" ], 'limits': { 'end': 5 } },
				key: 'movies',
				defaultThumbnail: 'img/icons/default/DefaultVideo.png',
				transformItem: item => ({
					link: '#page=Movie&movieid='+item.movieid,
					label: item.title + (item.originaltitle && item.originaltitle != item.title ? ' ['+item.originaltitle+']' : ''),
					details: [ '('+item.year+')', seconds2string(item.runtime) ],
					actions: [
						{ label: '▶', link: makeJsLink(`xbmc.Play({ 'movieid': ${item.movieid} }, 1)`) }
					]
				})
			},
			'Music Videos': {
				method: 'VideoLibrary.GetRecentlyAddedMusicVideos',
				params: { "properties": [ "title", "runtime", "album", "artist", "year", "thumbnail" ], 'limits': { 'end': 5 } },
				key: 'musicvideos',
				defaultThumbnail: 'img/icons/default/DefaultVideo.png',
				transformItem: item => ({
					link: '#page=Music Video&musicvideoid='+item.musicvideoid,
					label: item.artist + ' - ' + item.title,
					details: [ item.album + ' (' + item.year + ')', seconds2string(item.runtime) ],
					actions: [
						{ label: '▶', link: makeJsLink(`xbmc.Play({ 'musicvideoid': ${item.musicvideoid} }, 1)`) }
					]
				})
			},
		})[media]

		if (recentlyAdded !== undefined)
			getPage = getPage.then(page => {
				return xbmc.get({
					method: recentlyAdded.method,
					params: recentlyAdded.params
				})
				.then(result => result[recentlyAdded.key] || [])
				.then(items => items.map(item => {
					let out = recentlyAdded.transformItem(item)
					out.thumbnail = item.thumbnail ? xbmc.vfs2uri(item.thumbnail) : recentlyAdded.defaultThumbnail
					return out
				}))
				.then(items => ({
					label: 'Recently Added',
					items: items
				}))
				.then(item => {
					page.items.push(item)
					return page
				})
			})

		//add a list of file sources to the Videos, Music... pages
		if (m === undefined)
			return getPage

		let getSources = xbmc.get({
			method: 'Files.GetSources',
			params: { 'media': m },
			cache: true
		})
		.then(result => result.sources || [])
		.then(sources => sources.map(source => ({ //format sources
			label: source.label,
			link: '#page=Directory&root=' + encodeURIComponent(source.file) + '&media=' + m,
			thumbnail: 'img/icons/default/DefaultFolder.png',
			thumbnailWidth: '50px'
		})))

		return Promise.all([ getPage, getSources ])
		.then(([page, sources]) => {
			page.items.push({
				'label': 'Files',
				'items': sources
			})
			return page
		})

	}
}));