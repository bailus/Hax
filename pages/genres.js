import Page from '../js/page'

export default (new Page({
	'id': 'Genres',
	'view': 'list',
	'icon': state => state.get('type') === 'Albums' || state.get('type') === 'Artists' ? 'img/icons/default/DefaultMusicGenres.png' : 'img/icons/default/DefaultGenre.png',
	'parentState': state => {
		const type = {
			'Movies': 'Movies',
			'TV Shows': 'TV Shows',
			'Music Videos': 'Music Videos',
			'Artists': 'Music',
			'Albums': 'Music'
		}[state.get('type')]
		if (type)
			return new Map([[ 'page', 'Menu' ],[ 'media', type ]])
		else
			return new Map([[ 'page', 'Home' ]])
	},
	'data': state => {
		let page = {}

		let type = state.get('type')
		let videoType = { 'Movies': 'movie', 'TV Shows': 'tvshow', 'Music Videos': 'musicvideo' }[type]
		let audioType = { 'Artists': 'artists', 'Albums': 'albums' }[type]

		let getGenres = undefined
		if (videoType !== undefined)
			getGenres = xbmc.get({
				method: 'VideoLibrary.GetGenres',
				params: { 'type': videoType }
			})
		if (audioType !== undefined)
			getGenres = xbmc.get({
				method: 'AudioLibrary.GetGenres'
			})
		
		if (getGenres === undefined) throw "Page: Menu: invalid type"
		return getGenres
		.then(result => (result.genres || []).map(genre => ({
			'label': genre.label,
			'link': '#page=' + type + '&genre=' + encodeURIComponent(genre.label)
		})))
		.then(items => ({
			pageName: type+' by Genre',
			groups: items
		}))

	}
}));