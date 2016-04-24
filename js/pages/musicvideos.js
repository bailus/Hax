pages.add(new Page({
	'id': 'Music Videos',
	'view': 'list',
	'groupby': 'artist',
	'data': (resolve, reject) => {

		let page = { title: 'Music Videos' }
		
		xbmc.GetMusicVideos()
		.then(data => data.musicvideos || [])
		.then(musicvideos => ({
			title: 'Music Videos',
			items: musicvideos.map((mv) => {
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
