pages.add(new Page({
	'id': 'Artists',
	'view': 'list',
	'groupby': 'alpha',
	'data': (resolve, reject) => {
		let genre = getHash('genre')
		let alpha = getHash('alpha')
		
		let params = {}
		if (genre) params.filter = { genre: genre }

		xbmc.GetArtists(params)
		.then(data => data.artists || [])
		.then(artists => artists.map((artist, i) => {
			artist.alpha = artist.label[0].toUpperCase()
			artist.link = '#page=Artist&artistid='+artist.artistid
			artist.thumbnail = artist.thumbnail ? xbmc.vfs2uri(artist.thumbnail) : 'img/icons/default/DefaultArtist.png'
			artist.thumbnailWidth = '50px'
			if (artist.genre instanceof Array)
				artist.genre.map(genre => genre.charAt(0).toUpperCase() + genre.substr(1) )

			return artist
		}))
		.then(artists => ({
			title: 'Artists',
			items: artists
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

		let getArtistDetails = xbmc.GetArtistDetails({ 'artistid': artistid })
		.then(artistdetails => { //format artist details
			if (artistdetails.thumbnail) artistdetails.thumbnail = xbmc.vfs2uri(artistdetails.thumbnail)
			artistdetails.title = artistdetails.label || 'Artist ' + artistid

			return artistdetails
		})

		let getAlbums = xbmc.GetAlbums({ 'filter': { 'artistid': artistid } })
		.then(data => data.albums || [])
		.then(albums => { //format albums
			return albums.map((album) => {
				album.link = '#page=Album&albumid=' + album.albumid
				album.thumbnail = album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/icons/default/DefaultAudio.png'
				album.thumbnailWidth = '50px'

				album.play = function () {
					xbmc.Play({ 'albumid': album.albumid }, 0)
				}

				return album;
			})
		})

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

		let getAlbumDetails = xbmc.GetAlbumDetails({ 'albumid': albumid })
		.then(data => data.albumdetails || {})
		.then(albumdetails => { //format album details
			if (albumdetails.thumbnail) albumdetails.thumbnail = xbmc.vfs2uri(albumdetails.thumbnail)
			if (albumdetails.fanart) albumdetails.fanart = xbmc.vfs2uri(albumdetails.fanart)
			albumdetails.title = albumdetails.artist.join(', ') || ''
			albumdetails.link = '#page=Artist&artistid='+albumdetails.artistid
			albumdetails.subtitle = albumdetails.label || ''
			albumdetails.play = () => xbmc.Play({ 'albumid': albumid }, 0)
			return albumdetails
		})

		let getSongs = xbmc.GetSongs({ 'filter': { 'albumid': albumid } })
		.then(data => data.songs || [])
		.then(songs => { //format songs

			return songs.map(song => {
				song.thumbnail = undefined
				song.thumbnailWidth = '50px'
				if (song.track <= 10000) song.number = song.track
				if (song.duration) song.details = seconds2shortstring(song.duration)
				if (song.file) song.play = () => xbmc.Play({ 'albumid': albumid }, 0, song.track-1)
				return song
			})

		});

		Promise.all([ getAlbumDetails, getSongs ])      //wait for the above to finish
			.then( ( [ page, items ] ) => { //create the page
				page.items = items
				return page
			})
			.then(resolve)

	}
}));
