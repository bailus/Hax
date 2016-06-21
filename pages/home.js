import Page from '../js/page'

export default (new Page({
	'id': 'Home',
	'name': 'Kodi',
	'view': 'list',
	'icon': state => 'img/buttons/mainmenu.png',
	'data': function (state) {
		var items = [
			{ 'label': 'Videos', 'link': '#page=Menu&media=Videos', 'thumbnail': 'img/icons/home/videos.png' },
			{ 'label': 'Movies', 'link': '#page=Menu&media=Movies', 'thumbnail': 'img/icons/home/movies.png' },
			{ 'label': 'TV Shows', 'link': '#page=Menu&media=TV Shows', 'thumbnail': 'img/icons/home/tv.png' },
			{ 'label': 'Music', 'link': '#page=Menu&media=Music', 'thumbnail': 'img/icons/home/music.png' },
			{ 'label': 'Radio', 'link': '#page=Menu&media=Radio', 'thumbnail': 'img/icons/home/radio.png' },
			{ 'label': 'TV', 'link': '#page=Menu&media=TV', 'thumbnail': 'img/icons/home/livetv.png' },
			{ 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail':'img/icons/home/musicvideos.png' },
			{ 'label': 'Pictures', 'link': '#page=Menu&media=Pictures', 'thumbnail': 'img/icons/home/pictures.png' },
			{ 'label': 'Playlists', 'link': '#page=Playlists', 'thumbnail':'img/icons/home/playlists.png' },
			{ 'label': 'Addons', 'link':'#page=Addons', 'thumbnail':'img/icons/home/addons.png' }
		];
		return Promise.resolve({ 'items': items, 'hideNavigation': true })
	}
}))