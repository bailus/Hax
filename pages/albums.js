import Page from '../js/page'
import { makeJsLink } from '../js/util'

export default (new Page({
	'id': 'Albums',
	'view': 'list',
	'groupby': 'title',
	'icon': state => 
			state.get('group') === 'genre' || state.get('genre') ? 'img/icons/default/DefaultMusicGenres.png' :
			state.get('group') === 'year' || state.get('year') ? 'img/icons/default/DefaultYear.png' :
			'img/icons/default/DefaultMusicAlbums.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Music' ]]),
	'data': function (state) {

		let filter = xbmc.makeFilter(state, [
			{ name: 'Genre', key: 'genre', type: String },
			{ name: 'Artist', key: 'artist', type: String }
		])

		let group = state.get('group') || this.groupby

		return xbmc.get({
			method: 'AudioLibrary.GetAlbums',
			params: {
				'properties': [ 'title', 'artist', 'year', 'thumbnail' ],
				'filter': (filter || {}).filter
			},
			cache: true
		})
		.then(result => ({
			pageName: 'Albums' + (
				filter ? ' by ' + filter.name : 
				group ? ' by '+group :
				''),
			title: filter ? ''+filter.value : undefined,
			items: (result.albums || []).map((album, i) => ({
					title: album.label[0].toUpperCase(),
					label: album.label,
					details: album.artist,
					year: album.year,
					link: '#page=Album&albumid='+album.albumid,
					thumbnail: album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/icons/default/DefaultAlbumCover.png',
					actions: [
						{ label: '▶', link: makeJsLink(`xbmc.Play({ 'albumid': ${album.albumid} }, 0)`) }
					]
				}))
		}))
	}
}));