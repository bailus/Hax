import Page from '../js/page'
import { makeJsLink } from '../js/util'
import icons from './icons'

export default (new Page({
	'id': 'Home',
	'name': 'Kodi',
	'view': 'list',
	'icon': state => icons.menu['Home'],
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
				items.push({ 'label': 'Videos', 'link': '#page=Menu&media=Videos', 'thumbnail': icons.menu['Videos'] })

			if (!advancedSettings.home.hideMovies)
				items.push({ 'label': 'Movies', 'link': '#page=Menu&media=Movies', 'thumbnail': icons.menu['Movies'] })

			if (!advancedSettings.home.hideTvShows)
				items.push({ 'label': 'TV Shows', 'link': '#page=Menu&media=TV Shows', 'thumbnail': icons.menu['TV Shows'] })

			if (!advancedSettings.home.hideMusicVideos)
				items.push({ 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail': icons.menu['Music Videos'] })

			if (!advancedSettings.home.hideMusic)
				items.push({ 'label': 'Music', 'link': '#page=Menu&media=Music', 'thumbnail': icons.menu['Music'] })

			if (!advancedSettings.home.hidePictures)
				items.push({ 'label': 'Pictures', 'link': '#page=Files&media=Pictures', 'thumbnail': icons.menu['Pictures'] })

			if (!advancedSettings.home.hideRadio && infoBooleans[ 'PVR.HasRadioChannels' ])
				items.push({ 'label': 'Radio', 'link': '#page=Channels&media=Radio', 'thumbnail': icons.menu['Radio'] })

			if (!advancedSettings.home.hideLiveTv && infoBooleans[ 'PVR.HasTVChannels' ])
				items.push({ 'label': 'Live TV', 'link': '#page=Channels&media=TV', 'thumbnail': icons.menu['Live TV'] })

//TODO: features supported by estuary but not hax?  android.png  disc.png  download.png  favourites.png  games.png  manage.png  programs.png

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
						'thumbnail': icons.menu['Playlists'],
						'link': '#page=Playlists'
					},
					advancedSettings.home.hideAddons ? undefined : {
						'label': 'Addons',
						'thumbnail': icons.menu['Addons'],
						'link': '#page=Menu&media=Addons'
					},
					advancedSettings.home.hideFiles ? undefined : {
						'label': 'Files',
						'thumbnail': icons.menu['Files'],
						'link': '#page=Files'
					}
				]
			}

		})

	}
}))