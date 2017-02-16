import Page from '../js/page'
import Filter from '../js/xbmcFilter'

export default (new Page({
	'id': 'Artists',
	'view': 'list',
	'groupby': 'alpha',
	'sortby': 'label',
	'icon': () => 'img/icons/default/DefaultMusicArtists.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Music' }),
	'data': function (state) {
		const fields = [
			{ name: 'Genre', key: 'genre', type: 'string' },
			{ name: 'Artist', key: 'artist', type: 'string' }
		]
		const filter = Filter.fromState(state, fields)

		let group = state['group'] || this.groupby

		return xbmc.get({
			'method': 'AudioLibrary.GetArtists',
			'params': { 
				'properties': [ 'thumbnail' ],
				'albumartistsonly': false,
				'filter': filter.out()
			},
			'cache': true
		})
		.then(result => ({
			title: filter.toString(),
			items: (result.artists || []).map(artist => ({
				alpha: artist.label.at(0).toUpperCase(),
				label: artist.label,
				link: '#page=Artist&artistid='+artist.artistid,
				thumbnail: artist.thumbnail ? xbmc.vfs2uri(artist.thumbnail) : 'img/icons/default/DefaultArtist.png',
				play: () => xbmc.Play({ 'artistid': "+x.artistid+" }, 0)
			}))
		}))
	}
}));