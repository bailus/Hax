pages.add(new Page({
	'id': 'Playlists',
	'view': 'list',
	'data': function (resolve, reject) {
		
		xbmc.GetPlaylists()
		.then(data => data || [])
		.then(playlists => playlists.map(playlist => {
			let label = playlist.playlistid + (playlist.type ? ': ' + playlist.type : '')
			return xbmc.GetPlaylistItems({ 'playlistid': playlist.playlistid })
			.then(data => data.items || [])
			.then(playlistItems => ({
				label: label,
				items: playlistItems.map((item, i) => {  //format playlist items
					item.details = ''
					if (item.file) item.label = item.file.split('/')[--item.file.split('/').length]
					//if (player.playlistid === playlistid && player.position === i) item.playing = true //TODO: get the item that's currently playing
					if (item.thumbnail) item.thumbnail = xbmc.vfs2uri(item.thumbnail)
					if (item.runtime) item.details = minutes2string(item.runtime)
					if (item.duration) item.details = seconds2string(item.duration)

					if (!item.playing) {

						let playlistid = playlist.playlistid

						item.play = function () {
							xbmc.Open({ 'item': { 'playlistid': playlistid, 'position': i } })
							.then(pages.renderPage)  //refresh the playlist
						}

						item.remove = function () { //TODO: should be disabled on the currently playing item
							xbmc.RemoveFromPlaylist({ 'playlistid': playlistid, 'position': i })
							.then(pages.renderPage)  //refresh the playlist
						}

					}

					return item
				})
			}))
		})).
		then(playlistItems => Promise.all(playlistItems)).  //wait for the playlists to finish loading
		then(playlists => ({
			title: 'Playlists',
			items: playlists
		})).
		then(resolve)

			
	}
}));
