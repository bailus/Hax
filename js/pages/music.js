"use strict";

pages.add(new Page({
	'id': 'Artists',
	'view': 'list',
	'groupby': 'alpha',
	'data': (resolve, reject) => {
		const filter = xbmc.makeFilter([
			{ name: 'Genre', key: 'genre', type: String }
		])

		xbmc.get({
			'method': 'AudioLibrary.GetArtists',
			'params': { 
				'properties': [ 'thumbnail' ],
				'albumartistsonly': true,
				'filter': filter.filter
			}
		})
		.then(result => ({
			title: 'Artists',
			items: result.artists.map(artist => ({
				alpha: artist.label[0].toUpperCase(),
				label: artist.label,
				link: '#page=Artist&artistid='+artist.artistid,
				thumbnail: artist.thumbnail ? xbmc.vfs2uri(artist.thumbnail) : 'img/icons/default/DefaultArtist.png'
			}))
		}))
		.then(resolve)
	}
}));

pages.add(new Page({
	'id': 'Albums',
	'view': 'list',
	'groupby': 'alpha',
	'data': (resolve, reject) => {

		let filter = xbmc.makeFilter([
			{ name: 'Genre', key: 'genre', type: String },
			{ name: 'Artist', key: 'artist', type: String }
		])

		let group = getHash('group')

		xbmc.get({
			method: 'AudioLibrary.GetAlbums',
			params: {
				'properties': [ 'title', 'artist', 'year', 'thumbnail' ],
				'filter': filter.filter
			}
		})
		.then(result => ({
			title: 'Albums',
			subtitle: filter ? filter.name + ': ' + filter.value : 
				group ? 'By '+group :
				'By Title',
			items: result.albums.map((album, i) => ({
					alpha: album.label[0].toUpperCase(),
					label: album.label,
					details: album.artist,
					year: album.year,
					link: '#page=Album&albumid='+album.albumid,
					thumbnail: album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/icons/default/DefaultArtist.png'
				}))
		}))
		.then(resolve)
	}
}));

pages.add(new Page({
	'id': 'Artist',
	'view': 'list',
	'groupby': 'year',
	'data': (resolve, reject) => {
		let artistid = +getHash('artistid')

		//let getArtistDetails = xbmc.GetArtistDetails({ 'artistid': artistid })
		let getArtistDetails = xbmc.get({
			'method': 'AudioLibrary.GetArtistDetails',
			'params': {
				'properties': [ 'thumbnail', 'genre', 'born', 'formed', 'died', 'disbanded' ],
				'artistid': artistid
			},
			'cache': true
		})
		.then(result => { //format artist details
			const artistdetails = result.artistdetails

			if (artistdetails.thumbnail) artistdetails.thumbnail = xbmc.vfs2uri(artistdetails.thumbnail)
			artistdetails.title = artistdetails.label || 'Artist ' + artistid

			return artistdetails
		})

		let getAlbums = xbmc.get({
			'params': {
				'properties': [ 'title', 'artist', 'year', 'thumbnail' ]
			},
			'method': 'AudioLibrary.GetAlbums',
			'cache': true,
			'filter': { 'artistid': artistid }
		})
		.then(result => result.albums.map(album => {
			album.link = '#page=Album&albumid=' + album.albumid
			album.thumbnail = album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/icons/default/DefaultAudio.png'
			album.thumbnailWidth = '50px'

			album.play = function () {
				xbmc.Play({ 'albumid': album.albumid }, 0)
			}

			return album;
		}))

		Promise.all([ getArtistDetails, getAlbums ])      //wait for the above to finish
		.then( ( [ page, items ] ) => { //create the page
			page.items = items
			return page
		})
		.then(resolve)
	}
}));

pages.add(new Page({
	'id': 'Album',
	'view': 'list',
	'parent': 'Music',
	'data': function (resolve, reject) {

		let albumid = +getHash('albumid')

		let getAlbumDetails = xbmc.get({
			'method': 'AudioLibrary.GetAlbumDetails',
			'params': {
				'properties': [ 'title', 'artist', 'genre', 'albumlabel', 'year', 'fanart', 'thumbnail' ],
				'albumid': albumid
			}
		})
		.then(result => result.albumdetails)
		.then(albumdetails => { //format album details
			if (albumdetails.thumbnail) albumdetails.thumbnail = xbmc.vfs2uri(albumdetails.thumbnail)
			if (albumdetails.fanart) albumdetails.fanart = xbmc.vfs2uri(albumdetails.fanart)
			albumdetails.title = albumdetails.artist.join(', ') || ''
			albumdetails.link = '#page=Artist&artistid='+albumdetails.artistid
			albumdetails.subtitle = albumdetails.label || ''
			albumdetails.play = () => xbmc.Play({ 'albumid': albumid }, 0)
			return albumdetails
		})

		let getSongs = xbmc.get({
			'method': 'AudioLibrary.GetSongs',
			'params': {
				'properties': [ 'file', 'title', 'track', 'duration' ],
				'filter': { 'albumid': albumid }
			}
		})
		.then(result => result.songs.map(song => {
			song.thumbnail = undefined
			song.thumbnailWidth = '50px'
			if (song.track <= 10000) song.number = song.track
			if (song.duration) song.details = seconds2shortstring(song.duration)
			if (song.file) song.play = () => xbmc.Play({ 'albumid': albumid }, 0, song.track-1)
			return song
		}));

		Promise.all([ getAlbumDetails, getSongs ])      //wait for the above to finish
		.then( ( [ page, items ] ) => { //create the page
			page.items = items
			return page
		})
		.then(resolve)

	}
}));
