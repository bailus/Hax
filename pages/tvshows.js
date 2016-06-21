import Page from '../js/page'

export default (new Page({
	'id': 'TV Shows',
	'view': 'list',
	'groupby': 'title',
	'icon': state => 
			state.get('group') === 'actor' || state.get('actor') ? 'img/icons/default/DefaultActor.png' :
			state.get('group') === 'year' || state.get('year') ? 'img/icons/default/DefaultYear.png' :
			state.get('group') === 'genre' || state.get('genre') ? 'img/icons/default/DefaultGenre.png' :
			'img/icons/default/DefaultTVShows.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'TV Shows' ]]),
	'data': function (state) {

		let filter = xbmc.makeFilter([
			{ name: 'Genre', key: 'genre', type: String },
			{ name: 'Year', key: 'year', type: Number },
			{ name: 'Actor', key: 'actor', type: String }
		])

		let group = state.get('group') || this.groupby

		return xbmc.get({
			method: 'VideoLibrary.GetTVShows',
			params: {
				'properties': [ 'title', 'originaltitle', 'sorttitle', 'thumbnail', 'episode' ],
				'filter': (filter || {}).filter
			},
			cache: true
		})
		.then(result => result.tvshows || [])
		.then(tvshows => tvshows.map(tvshow => ({ //format items
			label: tvshow.title + (tvshow.originaltitle && tvshow.originaltitle != tvshow.title ? ' ['+tvshow.originaltitle+']' : ''),
			details: [ tvshow.episode + ' episodes' ],
			link: '#page=TV Show&tvshowid=' + tvshow.tvshowid,
			thumbnail: tvshow.thumbnail ? xbmc.vfs2uri(tvshow.thumbnail) : 'img/icons/default/DefaultVideo.png',
			title: (tvshow.sorttitle || tvshow.title || tvshow.originaltitle)[0].toUpperCase()
		})))
		.then(items => ({
			pageName: 'TV Shows' + (
				filter ? ' by ' + filter.name : 
				group ? ' by '+group :
				''),
			title: filter ? ''+filter.value : undefined,
			items: items
		}))

	}
}));