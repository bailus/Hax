
pages.add(new Page({
	'id': 'Home',
	'view': 'list',
	'data': function (resolve) {
		var items = [
			{ 'label': 'Videos', 'link': '#page=Menu&media=Videos', 'thumbnail': 'img/icons/home/videos.png' },
			{ 'label': 'Music', 'link': '#page=Menu&media=Music', 'thumbnail': 'img/icons/home/music.png' },
			{ 'label': 'Pictures', 'link': '#page=Menu&media=Pictures', 'thumbnail': 'img/icons/home/pictures.png' },
			{ 'label': 'Live', 'link': '#page=Live', 'thumbnail':'img/icons/home/live.png' },
			{ 'label': 'Playlists', 'link': '#page=Playlists', 'thumbnail':'img/icons/home/playlists.png' },
			//{ 'label': 'Addons', 'link':'#page=Addons', 'thumbnail':'img/icons/home/addons.png' }
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
					{ 'label': 'Movies', 'items': [
						{ 'label': 'By Year', 'link': '#page=Movies', 'thumbnail': 'img/icons/default/DefaultMusicYears.png' },
						{ 'label': 'By Title', 'link': '#page=Movies&group=alpha', 'thumbnail': 'img/icons/default/DefaultMovies.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Movies', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }
					] },
					{ 'label': 'TV Shows', 'items': [
						{ 'label': 'By Title', 'link': '#page=TV Shows', 'thumbnail': 'img/icons/default/DefaultTVShows.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=TV Shows', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }
					] },
					{ 'label': 'Music Videos', 'items': [
						{ 'label': 'By Artist', 'link': '#page=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' }
					] }
				],
				'Music': [
					{ 'label': 'Artists', 'items': [
						{ 'label': 'By Name', 'link': '#page=Artists', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' },
						{ 'label': 'By Genre', 'link': '#page=Genres&type=Artists', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }
					] },
					{ 'label': 'Music Videos', 'items': [
						{ 'label': 'By Artist', 'link': '#page=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' }
					] }
				],
				'Pictures': [ ]
			})[media]
		})


		let getSources = xbmc.GetSources({ 'media': m })
		.then(data => data.sources || [])
		.then(sources => sources.map(source => { //format sources
			source.link = '#page=Directory&directory=' + encodeURIComponent(source.file) + '&media=' + m
			source.thumbnail = 'img/icons/default/DefaultFolder.png'
			source.thumbnailWidth = '50px'
			return source
		}))

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

		let type = getHash('type'),
			t = { 'Movies': 'movie', 'TV Shows': 'tvshow', 'Music Videos': 'musicvideo' }[type],
			getGenres = type === 'Artists' ?
						xbmc.GetAudioGenres :
						() => xbmc.GetVideoGenres({ 'type': t })

		getGenres()
		.then(data => data.genres || [])
		.then(genres => genres.map(genre => ({ 'label': genre.label, 'link': '#page=' + type + '&genre=' + genre.label })))
		.then(items => ({
			title: type,
			subtitle: 'by genre',
			items: items
		}))
		.then(resolve)

	}
}));
