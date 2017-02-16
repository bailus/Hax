import Page from '../js/page'
import { makeJsLink, parseYear } from '../js/util'
import Filter from '../js/xbmcFilter'

export default (new Page({
	'id': 'Albums',
	'view': 'list',
	'groupby': 'title',
	'icon': state => 
			state['group'] === 'genre' || state['genre'] ? 'img/icons/default/DefaultMusicGenres.png' :
			state['group'] === 'year' || state['year'] ? 'img/icons/default/DefaultYear.png' :
			'img/icons/default/DefaultMusicAlbums.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Music' }),
	'data': function (state) {

		const fields = [
			{ name: 'Genre', key: 'genre', type: 'string' },
			{ name: 'Artist', key: 'artist', type: 'string' }
		]
		const filter = Filter.fromState(state, fields)

		let group = state['group'] || this.groupby

		return xbmc.get({
			method: 'AudioLibrary.GetAlbums',
			params: {
				'properties': [ 'title', 'artist', 'year', 'thumbnail' ],
				'filter': filter.out()
			},
			cache: true
		})
		.then(result => ({
			title: filter.toString(),
			items: (result.albums || []).map((album, i) => ({
					label: album.label,
					title: album.label.at(0).toUpperCase(),
					details: album.artist,
					year: parseYear(album.year),
					link: '#page=Album&albumid='+album.albumid,
					thumbnail: album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/icons/default/DefaultAlbumCover.png',
					actions: [
						{ label: '▶', link: makeJsLink(`xbmc.Play({ 'albumid': ${album.albumid} }, 0)`) }
					]
				}))
		}))
	}
}));