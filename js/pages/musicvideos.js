"use strict";

pages.add(new Page({
	'id': 'Music Videos',
	'view': 'list',
	'groupby': 'artist',
	'icon': state => 
			state.get('group') === 'year' ? 'img/icons/default/DefaultYear.png' :
			state.get('group') === 'genre' ? 'img/icons/default/DefaultGenre.png' :
			'img/icons/default/DefaultMusicArtists.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Music Videos' ]]),
	'data': function (state) {

		let groupby = state.get('group') || this.groupby

		return xbmc.get({
			'params': {
				'properties': [ 'title', 'genre', 'runtime', 'year', 'album', 'artist', 'track', 'thumbnail', 'file' ]
			},
			'method': 'VideoLibrary.GetMusicVideos',
			'cache': true
		})
		.then(result => ({
			pageName: 'Music Videos by '+groupby,
			items: (result.musicvideos || []).map((mv) => ({
				artist: (mv.artist instanceof Array ? mv.artist : [mv.artist]).join(', '),
				label: mv.title,
				details: (mv.album ? mv.album+(mv.year ? ' ('+mv.year+')' : '') : ''),
				thumbnail: mv.thumbnail ? xbmc.vfs2uri(mv.thumbnail) : undefined,
				play: () => { xbmc.Open({ 'item': { 'file': xbmc.vfs2uri(mv.file) } }) },
				year: mv.year,
				genre: mv.genre,
				link: '#page=Music Video&musicvideoid='+mv.musicvideoid
			}))
		}))

	}
}));


pages.add(new Page({
	'id': 'Music Video',
	'view': 'list',
	'parent': 'Music Videos',
	'icon': state => 'img/icons/default/DefaultVideo.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Music Videos' ]]),
	'data': state => {

		let musicvideoid = +state.get('musicvideoid')

		return xbmc.get({
			'method': 'VideoLibrary.GetMusicVideoDetails',
			'params': {
				'properties': [ "title", "playcount", "runtime", "director", "studio", "year", "plot", "album",
								"artist", "genre", "track", "lastplayed", "fanart", "thumbnail" ],
				'musicvideoid': musicvideoid
			}
		})
		.then(result => result.musicvideodetails || {})
		.then(details => ({
			title: details.artist + ' - ' + details.title,
			subtitle: details.album + (details.year ? ' ('+details.year+')' : ''),
			thumbnail: xbmc.vfs2uri(details.thumbnail),
			fanart: xbmc.vfs2uri(details.fanart),
			details: [
				{ 'name': 'Track', 'value': details.track > 0 ? details.track : undefined },
				{ 'name': 'Runtime', 'value': details.runtime ? seconds2string(details.runtime) : undefined },
				{ 'name': 'Last Played', 'value': details.lastplayed ? ymd2string(details.lastplayed) : undefined },
				{ 'name': 'Director', 'value': details.director },
				{ 'name': 'Studio', 'value': details.studio },
				{ 'name': 'Genre', 'value': details.genre },
				{ 'name': 'Plot', 'value': details.plot }
			],
			actions: [
				{	label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: "javascript:(() => { xbmc.Play({ 'musicvideoid': "+details.musicvideoid+" }, 1) })()"
				},
				{	label: 'Add to Playlist',
					thumbnail: 'img/buttons/add.png',
					link: "javascript:(() => { xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'musicvideoid': "+details.musicvideoid+" } }) })()"
				}
			]
		}))
	}
}));

