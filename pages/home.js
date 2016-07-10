import Page from '../js/page'

export default (new Page({
	'id': 'Home',
	'name': 'Kodi',
	'view': 'list',
	'icon': state => 'img/buttons/mainmenu.png',
	'data': function (state) {

		const infoBooleans = xbmc.get({
			method: 'XBMC.GetInfoBooleans',
			params: {
				booleans: [
					'PVR.HasTVChannels',
					'PVR.HasRadioChannels'
				]
			}
		})


		return Promise.all([ infoBooleans ])
		.then(([ infoBooleans ]) => {

			const items = []

			if (!advancedSettings.home.hideVideos)
				items.push({ 'label': 'Videos', 'link': '#page=Menu&media=Videos', 'thumbnail': 'img/icons/home/videos.png' })

			if (!advancedSettings.home.hideMovies)
				items.push({ 'label': 'Movies', 'link': '#page=Menu&media=Movies', 'thumbnail': 'img/icons/home/movies.png' })

			if (!advancedSettings.home.hideTvShows)
				items.push({ 'label': 'TV Shows', 'link': '#page=Menu&media=TV Shows', 'thumbnail': 'img/icons/home/tv.png' })

			if (!advancedSettings.home.hideMusicVideos)
				items.push({ 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail':'img/icons/home/musicvideos.png' })

			if (!advancedSettings.home.hideMusic)
				items.push({ 'label': 'Music', 'link': '#page=Menu&media=Music', 'thumbnail': 'img/icons/home/music.png' })

			if (!advancedSettings.home.hidePictures)
				items.push({ 'label': 'Pictures', 'link': '#page=Menu&media=Pictures', 'thumbnail': 'img/icons/home/pictures.png' })

			if (!advancedSettings.home.hidePlaylists)
				items.push({ 'label': 'Playlists', 'link': '#page=Playlists', 'thumbnail':'img/icons/home/playlists.png' })

			if (!advancedSettings.home.hideRadio && infoBooleans[ 'PVR.HasRadioChannels' ])
				items.push({ 'label': 'Radio', 'link': '#page=Menu&media=Radio', 'thumbnail': 'img/icons/home/radio.png' })

			if (!advancedSettings.home.hideLiveTv && infoBooleans[ 'PVR.HasTVChannels' ])
				items.push({ 'label': 'Live TV', 'link': '#page=Menu&media=TV', 'thumbnail': 'img/icons/home/livetv.png' })

			if (!advancedSettings.home.hideAddons)
				items.push({ 'label': 'Addons', 'link':'#page=Addons', 'thumbnail':'img/icons/home/addons.png' })

			return {
				'items': items,
				'hideNavigation': true
			}

		})

	}
}))