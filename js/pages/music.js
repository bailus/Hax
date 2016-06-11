"use strict";

pages.add(new Page({
	'id': 'Artists',
	'view': 'list',
	'groupby': 'alpha',
	'icon': () => 'img/icons/default/DefaultMusicArtists.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Music' ]]),
	'data': state => {
		const filter = xbmc.makeFilter([
			{ name: 'Genre', key: 'genre', type: String }
		])

		let group = state.get('group') || this.groupby

		return xbmc.get({
			'method': 'AudioLibrary.GetArtists',
			'params': { 
				'properties': [ 'thumbnail' ],
				'albumartistsonly': true,
				'filter': filter ? filter.filter : undefined
			},
			'cache': true
		})
		.then(result => ({
			pageName: 'Artists' + (
				filter ? ' by ' + filter.name : 
				group ? ' by '+group :
				''),
			title: filter ? ''+filter.value : undefined,
			items: (result.artists || []).map(artist => ({
				alpha: artist.label[0].toUpperCase(),
				label: artist.label,
				link: '#page=Artist&artistid='+artist.artistid,
				thumbnail: artist.thumbnail ? xbmc.vfs2uri(artist.thumbnail) : 'img/icons/default/DefaultArtist.png',
				play: () => xbmc.Play({ 'artistid': "+x.artistid+" }, 0)
			}))
		}))
	}
}));

pages.add(new Page({
	'id': 'Albums',
	'view': 'list',
	'groupby': 'title',
	'icon': state => 'img/icons/default/DefaultMusicAlbums.png',
	'icon': state => 
			state.get('group') === 'genre' || state.get('genre') ? 'img/icons/default/DefaultMusicGenres.png' :
			state.get('group') === 'year' || state.get('year') ? 'img/icons/default/DefaultYear.png' :
			'img/icons/default/DefaultMusicAlbums.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Music' ]]),
	'data': function (state) {

		let filter = xbmc.makeFilter([
			{ name: 'Genre', key: 'genre', type: String },
			{ name: 'Artist', key: 'artist', type: String }
		])

		let group = state.get('group') || this.groupby

		return xbmc.get({
			method: 'AudioLibrary.GetAlbums',
			params: {
				'properties': [ 'title', 'artist', 'year', 'thumbnail' ],
				'filter': (filter || {}).filter
			},
			cache: true
		})
		.then(result => ({
			pageName: 'Albums' + (
				filter ? ' by ' + filter.name : 
				group ? ' by '+group :
				''),
			title: filter ? ''+filter.value : undefined,
			items: (result.albums || []).map((album, i) => ({
					title: album.label[0].toUpperCase(),
					label: album.label,
					details: album.artist,
					year: album.year,
					link: '#page=Album&albumid='+album.albumid,
					thumbnail: album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/icons/default/DefaultAlbumCover.png',
					actions: [
						{ label: '▶', link: `javascript: xbmc.Play({ 'albumid': ${album.albumid} }, 0)` }
					]
				}))
		}))
	}
}));

pages.add(new Page({
	'id': 'Artist',
	'view': 'list',
	'groupby': 'year',
	'icon': state => 'img/icons/default/DefaultMusicAlbums.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Music' ]]),
	'data': state => {
		const artistid = +state.get('artistid')

		let getArtistDetails = xbmc.get({
			'method': 'AudioLibrary.GetArtistDetails',
			'params': {
				'properties': [ "instrument", "style", "mood", "born", "formed", "description", "genre",
								"died", "disbanded", "yearsactive", "fanart", "thumbnail" ],
				'artistid': artistid
			},
			cache: true
		})
		.then(result => result.artistdetails || {})
		.then(x => ({
			title: x.label || 'Artist ' + x.artistid,
			thumbnail: x.thumbnail ? xbmc.vfs2uri(x.thumbnail) : undefined,
			details: [
				{ 'name': 'Instrument', 'value': x.instrument },
				{ 'name': 'Style', 'value': x.style },
				{ 'name': 'Mood', 'value': x.mood },
				{ 'name': 'Born', 'value': x.born },
				{ 'name': 'Formed', 'value': x.formed },
				{ 'name': 'Description', 'value': x.description },
				{ 'name': 'Genre', 'value': x.genre },
				{ 'name': 'Died', 'value': x.died },
				{ 'name': 'Disbanded', 'value': x.disbanded },
				{ 'name': 'Years Active', 'value': x.yearsactive }
			],
			actions: [
				{
					label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: "javascript:(() => { xbmc.Play({ 'artistid': "+x.artistid+" }, 0) })()"
				},
				{
					label: 'Add to playlist',
					thumbnail: 'img/buttons/add.png',
					link: "javascript:(() => { xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'artistid': "+x.artistid+" } }) })()"
				}
			]
		}))

		let getAlbums = xbmc.get({
			'method': 'AudioLibrary.GetAlbums',
			'params': {
				'properties': [ 'title', 'artist', 'year', 'thumbnail' ],
				'filter': { 'artistid': artistid }
			},
			'cache': true
		})
		.then(result => (result.albums || []).map(album => ({
			label: album.label,
			link: '#page=Album&albumid=' + album.albumid + '&artistid=' + artistid,
			thumbnail: album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/icons/default/DefaultAudio.png',
			thumbnailWidth: '50px',
			year: album.year,
			actions: [
				{ label: '▶', link: `javascript: xbmc.Play({ 'albumid': ${album.albumid} }, 0)` }
			]
		})))

		return Promise.all([ getArtistDetails, getAlbums ])      //wait for the above to finish
		.then( ( [ page, items ] ) => { //create the page
			page.items = items
			return page
		})
	}
}));

pages.add(new Page({
	'id': 'Album',
	'view': 'list',
	'parent': 'Music',
	'icon': state => 'img/icons/default/DefaultMusicAlbums.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Music' ]]),
	'data': function (state) {

		let albumid = +state.get('albumid')

		let getAlbumDetails = xbmc.get({
			'method': 'AudioLibrary.GetAlbumDetails',
			'params': {
				'properties': [ "title", "description", "artist", "genre", "theme", "mood", "style", "type", "albumlabel", "year",
								"fanart", "thumbnail", "genreid", "artistid", "displayartist" ],
				'albumid': albumid
			},
			cache: true
		})
		.then(result => result.albumdetails)
		.then(albumdetails => { //format album details
			const page = {
				title: albumdetails.displayartist || albumdetails.artist.join(', ') || '',
				subtitle: (albumdetails.label || '') + (albumdetails.year ? ' (' + albumdetails.year + ')' : ''),
				thumbnail: albumdetails.thumbnail && xbmc.vfs2uri(albumdetails.thumbnail),
				fanart: xbmc.vfs2uri(albumdetails.fanart),
				details: [
					{ name: 'Genre', value: albumdetails.genre },
					{ name: 'Description', value: albumdetails.description },
					{ name: 'Theme', value: albumdetails.theme },
					{ name: 'Mood', value: albumdetails.mood },
					{ name: 'Style', value: albumdetails.style },
					{ name: 'Type', value: albumdetails.type },
					{ name: 'Album Label', value: albumdetails.albumlabel }
				],
				actions: [
					{
						label: 'Play',
						thumbnail: 'img/buttons/play.png',
						link: "javascript:(() => { xbmc.Play({ 'albumid': "+albumid+" }, 0) })()"
					},
					{
						label: 'Add to playlist',
						thumbnail: 'img/buttons/add.png',
						link: "javascript:(() => { xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'albumid': "+albumid+" } }) })()"
					}
				]
			}

			if (albumdetails.thumbnail) page.thumbnail = xbmc.vfs2uri(albumdetails.thumbnail)

			return page
		})

		let getSongs = xbmc.get({
			'method': 'AudioLibrary.GetSongs',
			'params': {
				'properties': [ 'file', 'title', 'track', 'duration' ],
				'filter': { 'albumid': albumid }
			},
			cache: true
		})
		.then(result => result.songs.map(song => ({
			thumbnail: 'img/icons/default/DefaultAudio.png',
			label: song.label,
			number: song.track,
			details: seconds2shortstring(song.duration),
			actions: [
				{ label: '▶', link: `javascript: xbmc.Play({ 'albumid': ${albumid} }, 0, ${song.track-1})` }
			]
		})));

		return Promise.all([ getAlbumDetails, getSongs ])      //wait for the above to finish
		.then( ( [ page, items ] ) => { //create the page
			page.items = items
			return page
		})

	}
}));
