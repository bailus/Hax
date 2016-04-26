"use strict";

pages.add(new Page({
	'id': 'Music Videos',
	'view': 'list',
	'groupby': 'artist',
	'data': (resolve, reject) => {

		xbmc.get({
			'params': {
				'properties': [ 'title', 'runtime', 'year', 'album', 'artist', 'track', 'thumbnail', 'file' ]
			},
			'method': 'VideoLibrary.GetMusicVideos',
			'cache': true
		})
		.then(result => ({
			title: 'Music Videos',
			items: result.musicvideos.map((mv) => {
				mv.artist = mv.artist.join(', ')
				mv.label = mv.title
				mv.details = (mv.album ? mv.album+(mv.year ? ' ('+mv.year+')' : '') : '')
				if (mv.thumbnail) mv.thumbnail = xbmc.vfs2uri(mv.thumbnail)
				mv.play = function () {
					xbmc.Open({ 'item': { 'file': xbmc.vfs2uri(mv.file) } })
				}
				return mv
			})
		}))
		.then(resolve)

	}
}));
