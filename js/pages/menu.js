"use strict";

pages.add(new Page({
	'id': 'Home',
	'view': 'list',
	'data': function (resolve) {
		var items = [
			{ 'label': 'Videos', 'link': '#page=Menu&media=Videos', 'thumbnail': 'img/icons/home/videos.png' },
			{ 'label': 'Movies', 'link': '#page=Menu&media=Movies', 'thumbnail': 'img/icons/home/movies.png' },
			{ 'label': 'TV Shows', 'link': '#page=Menu&media=TV Shows', 'thumbnail': 'img/icons/home/tvshows.png' },
			{ 'label': 'Music', 'link': '#page=Menu&media=Music', 'thumbnail': 'img/icons/home/music.png' },
			{ 'label': 'Radio', 'link': '#page=Live&media=Radio', 'thumbnail':'img/icons/home/radio.png' },
			{ 'label': 'Live TV', 'link': '#page=Live&media=TV', 'thumbnail':'img/icons/home/livetv.png' },
			{ 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail':'img/icons/default/DefaultMusicVideos.png' },
			{ 'label': 'Pictures', 'link': '#page=Menu&media=Pictures', 'thumbnail': 'img/icons/home/pictures.png' },
			{ 'label': 'Playlists', 'link': '#page=Playlists', 'thumbnail':'img/icons/home/playlists.png' },
			{ 'label': 'Addons', 'link':'#page=Addons', 'thumbnail':'img/icons/home/addons.png' }
		];
		resolve({ 'items': items, 'hideNavigation': true });
	}
}));

pages.add(new Page({
	'id': 'Menu',
	'view': 'list',
	'data': function (resolve) {
		let media = getHash('media')
		let m = ({'Videos':'video','Music':'music','Pictures':'pictures'})[media]

		let getPage = Promise.resolve({
			'title': media || 'Menu',
			'items': ({
				'Videos': [
					{ 'label': 'Library', 'items': [
						{ 'label': 'Movies', 'link': '#page=Menu&media=Movies', 'thumbnail': 'img/icons/default/DefaultMovies.png' },
						{ 'label': 'TV Shows', 'link': '#page=Menu&media=TV Shows', 'thumbnail': 'img/icons/default/DefaultTVShows.png' },
						{ 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicVideos.png' }
					] }
				],
				'Movies': [
					{ 'label': 'Library', 'items': [
						{ 'label': 'By Year', 'link': '#page=Movies&group=year', 'thumbnail': 'img/icons/default/DefaultMovieYears.png' },
						{ 'label': 'By Title', 'link': '#page=Movies&group=alpha', 'thumbnail': 'img/icons/default/DefaultMovies.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Movies', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' },
						{ 'label': 'By Actor', 'link': '#page=Actors&media=Movies', 'thumbnail': 'img/icons/default/DefaultActor.png' }
					] }
				],
				'TV Shows': [
					{ 'label': 'Library', 'items': [
						{ 'label': 'By Title', 'link': '#page=TV Shows', 'thumbnail': 'img/icons/default/DefaultTVShows.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=TV Shows', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' },
						{ 'label': 'By Actor', 'link': '#page=Actors&media=TV Shows', 'thumbnail': 'img/icons/default/DefaultActor.png' }
					] }
				],
				'Music Videos': [
					{ 'label': 'Library', 'items': [
						{ 'label': 'By Artist', 'link': '#page=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }
					] }
				],
				'Music': [
					{ 'label': 'Artists', 'items': [
						{ 'label': 'By Name', 'link': '#page=Artists', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Artists', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }
					] },
					{ 'label': 'Albums', 'items': [
						{ 'label': 'By Year', 'link': '#page=Albums&group=year', 'thumbnail': 'img/icons/default/DefaultMusicYears.png' },
						{ 'label': 'By Name', 'link': '#page=Albums', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Albums', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }
					] },
					{ 'label': 'Music Videos', 'items': [
						{ 'label': 'By Artist', 'link': '#page=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }
					] }
				],
				'Pictures': [ ]
			})[media]
		})

		let recentlyAdded = ({
			'TV Shows': {
				method: 'VideoLibrary.GetRecentlyAddedEpisodes',
				params: { 'properties': [ 'tvshowid', 'title', 'thumbnail', 'episode', 'season', 'file', 'showtitle' ], 'limits': { 'end': 5 } },
				key: 'episodes',
				defaultThumbnail: 'img/icons/default/DefaultVideo.png',
				transformItem: item => ({
					link: '#page=TV Shows&tvshowid='+item.tvshowid,
					play: () => xbmc.Play({ 'tvshowid': item.tvshowid }, 1),
					label: item.showtitle + ' - ' + item.title,
					details: [ 'Season '+item.season, 'Episdoe '+item.episode ]
				})
			},
			'Movies': {
				method: 'VideoLibrary.GetRecentlyAddedMovies',
				params: { "properties": [ "title", "originaltitle", "runtime", "year", "thumbnail" ], 'limits': { 'end': 5 } },
				key: 'movies',
				defaultThumbnail: 'img/icons/default/DefaultVideo.png',
				transformItem: item => ({
					link: '#page=Movie&movieid='+item.movieid,
					play: () => xbmc.Play({ 'movieid': item.movieid }, 1),
					label: item.title + (item.originaltitle && item.originaltitle != item.title ? ' ['+item.originaltitle+']' : ''),
					details: [ '('+item.year+')', seconds2string(item.runtime) ]
				})
			},
			'Music Videos': {
				method: 'VideoLibrary.GetRecentlyAddedMusicVideos',
				params: { "properties": [ "title", "runtime", "album", "artist", "year", "thumbnail" ], 'limits': { 'end': 5 } },
				key: 'musicvideos',
				defaultThumbnail: 'img/icons/default/DefaultVideo.png',
				transformItem: item => ({
					link: '#page=Music Video&musicvideoid='+item.musicvideoid,
					play: () => xbmc.Play({ 'musicvideoid': item.musicvideoid }, 1),
					label: item.artist + ' - ' + item.title,
					details: [ item.album + ' (' + item.year + ')', seconds2string(item.runtime) ]
				})
			},
		})[media]

		if (recentlyAdded !== undefined)
			getPage = getPage.then(page => {
				return xbmc.sendMessage(recentlyAdded.method, recentlyAdded.params)
				.then(data => data.result)
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
		if (m === undefined) {
			getPage = getPage.then(resolve)
			return;
		}

		let getSources = xbmc.sendMessage('Files.GetSources', { 'media': m })
		.then(data => (data.result || {}).sources || [])
		.then(sources => sources.map(source => ({ //format sources
			label: source.label,
			link: '#page=Directory&directory=' + encodeURIComponent(source.file) + '&media=' + m,
			thumbnail: 'img/icons/default/DefaultFolder.png',
			thumbnailWidth: '50px'
		})))

		Promise.all([ getPage, getSources ])
		.then(([page, sources]) => {
			page.items.push({
				'label': 'Files',
				'items': sources
			})
			return page
		})
		.then(resolve)

	}
}));

pages.add(new Page({
	'id': 'Genres',
	'view': 'list',
	'data': (resolve, reject) => {
		let page = {}

		let type = getHash('type')
		let videoType = { 'Movies': 'movie', 'TV Shows': 'tvshow', 'Music Videos': 'musicvideo' }[type]
		let audioType = { 'Artists': 'artists', 'Albums': 'albums' }[type]

		let getGenres = undefined
		if (videoType !== undefined)
			getGenres = xbmc.sendMessage('VideoLibrary.GetGenres', { 'type': videoType })
			//getGenres = xbmc.GetVideoGenres({ 'type': videoType })
		if (audioType !== undefined)
			getGenres = xbmc.sendMessage('AudioLibrary.GetGenres')
			//getGenres = xbmc.GetAudioGenres()
		
		if (getGenres !== undefined) getGenres
		.then(data => (data.result || {}).genres || [])
		.then(genres => genres.map(genre => ({ 'label': genre.label, 'link': '#page=' + type + '&genre=' + genre.label })))
		.then(items => ({
			title: type,
			subtitle: 'by genre',
			items: items
		}))
		.then(resolve)

	}
}));
