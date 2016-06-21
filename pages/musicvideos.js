import Page from '../js/page'

export default (new Page({
	'id': 'Music Videos',
	'view': 'list',
	'groupby': 'artist',
	'icon': state => 
			state.get('group') === 'year' ? 'img/icons/default/DefaultYear.png' :
			state.get('group') === 'genre' ? 'img/icons/default/DefaultGenre.png' :
			'img/icons/default/DefaultMusicArtists.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Music Videos' ]]),
	'data': function (state) {

		let groupby = state.get('group') || this.groupby

		return xbmc.get({
			'params': {
				'properties': [ 'title', 'genre', 'runtime', 'year', 'album', 'artist', 'track', 'thumbnail', 'file' ]
			},
			'method': 'VideoLibrary.GetMusicVideos',
			'cache': true
		})
		.then(result => ({
			pageName: 'Music Videos by '+groupby,
			items: (result.musicvideos || []).map((mv) => ({
				artist: (mv.artist instanceof Array ? mv.artist : [mv.artist]).join(', '),
				label: mv.title,
				details: (mv.album ? mv.album+(mv.year ? ' ('+mv.year+')' : '') : ''),
				thumbnail: mv.thumbnail ? xbmc.vfs2uri(mv.thumbnail) : undefined,
				play: () => { xbmc.Open({ 'item': { 'file': xbmc.vfs2uri(mv.file) } }) },
				year: mv.year,
				genre: mv.genre,
				link: '#page=Music Video&musicvideoid='+mv.musicvideoid
			}))
		}))

	}
}));