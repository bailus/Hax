pages.add(new Page({
	'id': 'Playlists',
	'view': 'list',
	'data': function (resolve, reject) {
		
		xbmc.GetPlaylists()
		.then(data => data || [])
		.then(playlists => playlists.map(playlist => {
			return xbmc.GetPlaylistItems({ 'playlistid': playlist.playlistid })
			.then(data => data.items || [])
			.then(playlistItems => playlistItems.map(item => {  //format playlist items
				item.details = ''
				if (item.file) item.label = item.file.split('/')[--item.file.split('/').length]
				//if (player.playlistid === playlistid && player.position === i) item.playing = true //TODO: get the item that's currently playing
				if (item.thumbnail) item.thumbnail = xbmc.vfs2uri(item.thumbnail)
				if (item.runtime) item.details = minutes2string(item.runtime)
				if (item.duration) item.details = seconds2string(item.duration)

				if (!item.playing) {

					item.play = function () {
						xbmc.Open({ 'item': { 'playlistid': playlistid, 'position': i } })
						.then(renderPage)  //refresh the playlist
					}

					item.remove = function () {
						xbmc.RemoveFromPlaylist({ 'playlistid': playlistid, 'position': i })
						.then(renderPage)  //refresh the playlist
					}

				}

				return item
			}))
			.then(playlistItems => ({
				label: 'Playlist',
				items: playlistItems
			}))
		})).
		then(playlistItems => Promise.all(playlistItems)).  //wait for the playlists to finish loading
		then(playlists => ({
			label: 'Playlists',
			items: playlists
		})).
		then(resolve)

			
	}
}));
