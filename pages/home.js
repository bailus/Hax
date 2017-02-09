import Page from '../js/page'
import { makeJsLink } from '../js/util'

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
				items.push({ 'label': 'Pictures', 'link': '#page=Files&media=Pictures', 'thumbnail': 'img/icons/home/pictures.png' })

			if (!advancedSettings.home.hideRadio && infoBooleans[ 'PVR.HasRadioChannels' ])
				items.push({ 'label': 'Radio', 'link': '#page=Channels&media=Radio', 'thumbnail': 'img/icons/home/radio.png' })

			if (!advancedSettings.home.hideLiveTv && infoBooleans[ 'PVR.HasTVChannels' ])
				items.push({ 'label': 'Live TV', 'link': '#page=Channels&media=TV', 'thumbnail': 'img/icons/home/livetv.png' })

			return {
				'items': items,
				'hideNavigation': true,
				'actions': [
					/*{	'label': 'Power',
						'thumbnail': 'img/icons/power.png',
						'link': '#page=Power'
					},
					{	'label': 'Settings',
						'thumbnail': 'img/icons/settings.png',
						'link': '#page=Settings'
					},*/
					advancedSettings.home.hidePlaylists ? undefined : {
						'label': 'Playlists',
						'thumbnail': 'img/icons/home/playlists.png',
						'link': '#page=Playlists'
					},
					advancedSettings.home.hideAddons ? undefined : {
						'label': 'Addons',
						'thumbnail': 'img/icons/home/addons.png',
						'link': '#page=Menu&media=Addons'
					},
					advancedSettings.home.hideFiles ? undefined : {
						'label': 'Files',
						'thumbnail': 'img/icons/default/DefaultFolder.png',
						'link': '#page=Files'
					}
				]
			}

		})

	}
}))