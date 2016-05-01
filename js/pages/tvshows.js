"use strict";

pages.add(new Page({
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
			title: (tvshow.sorttitle || tvshow.title || tvshow.originaltitle)[0].toUpperCase(),
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

pages.add(new Page({
	'id': 'TV Show',
	'view': 'list',
	'parent': 'TV Shows',
	'groupby': 'season',
	'sortgroup': 'season',
	'icon': state => 'img/icons/default/DefaultTVShowTitle.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'TV Shows' ]]),
	'data': state => {
		let tvshowid = +state.get('tvshowid')

		let getShowDetails = xbmc.get({
			'method': 'VideoLibrary.GetTVShowDetails',
			'params': {
				'properties': [ 'title', 'art', 'thumbnail' ],
				'tvshowid': tvshowid
			},
			cache: true
		})
		.then(data => data.tvshowdetails || {})
		.then(details => ({
			title: details.title,
			banner: details.art && details.art.banner ? xbmc.vfs2uri(details.art.banner) : undefined,
			/*actions: [ {  //doesn't work? is playing a tvshowid possible?
				label: 'Play',
				thumbnail: 'img/buttons/play.png',
				link: "javascript:(() => { xbmc.Play({ 'tvshowid': "+tvshowid+" }, 1) })()"
			} ]*/
		}))
		.then(details => {  //format show details
			if (details.art) details.banner = xbmc.vfs2uri(details.art.banner);
			delete details.thumbnail;
			return details
		})
		

		let getEpisodes = xbmc.get({
			method: 'VideoLibrary.GetEpisodes',
			params: {
				'properties': [ 'tvshowid', 'title', 'thumbnail', 'episode', 'season', 'runtime', 'lastplayed' ],
				'tvshowid': tvshowid
			},
			cache: true
		})
		.then(result => result.episodes || {})
		.then(episodes => episodes.map(episode => ({
			link: '#page=Episode&episodeid='+episode.episodeid,
			label: episode.title || '',
			thumbnail: episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : 'img/icons/default/DefaultVideo.png',
			season: 'Season ' + episode.season,
			thumbnailWidth: '89px',
			details: [ seconds2string(episode.runtime), episode.lastplayed ? 'Last played '+ymd2string(episode.lastplayed) : undefined ],
			number: episode.episode,
			play: () => xbmc.Play({ 'episodeid': episode.episodeid }, 1)
		})))

		return Promise.all([ getShowDetails, getEpisodes ])
		.then(([ page, items ]) => {
			page.items = items
			return page
		})

	}
}));

pages.add(new Page({
	'id': 'Episode',
	'view': 'list',
	'parent': 'TV Shows',
	'icon': state => 'img/icons/default/DefaultVideo.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'TV Shows' ]]),
	'data': state => {
		let episodeid = +state.get('episodeid')

		return xbmc.get({
			'method': 'VideoLibrary.GetEpisodeDetails',
			'params': {
				'properties': [
					"title", "plot", "writer", "firstaired", "runtime", "director",
					"productioncode", "season", "episode", "originaltitle", "showtitle",
					"lastplayed", "fanart", "thumbnail", "tvshowid", "cast"
				],
				'episodeid': episodeid
			}
		})
		.then(result => result.episodedetails)
		.then(x => ({
			title: x.title + ((x.originaltitle && x.originaltitle != x.title) ? ' [' + x.originaltitle + ']' : ''),
			subtitle: x.showtitle,
			thumbnail: xbmc.vfs2uri(x.thumbnail),
			fanart: xbmc.vfs2uri(x.fanart),
			details: [
				(x.productioncode || x.season && x.episode) ? { 'name': 'Production Code', 'value': (x.productioncode || x.season + 'x' + x.episode) } : undefined,
				x.lastplayed ? { 'name': 'Last Played', 'value': ymd2string(x.lastplayed) } : undefined,
				x.firstaired ? { 'name': 'First Aired', 'value': ymd2string(x.firstaired) } : undefined,
				x.runtime ? { 'name': 'Runtime', 'value': seconds2string(x.runtime) } : undefined,
				{ 'name': 'Plot', 'value': x.plot },
				{ 'name': 'Director', 'value': x.director },
				{ 'name': 'Writer', 'value': x.writer },
				{ 'name': 'Genre', 'value': x.genre }
			],
			actions: [
				{	label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: "javascript:(() => { xbmc.Play({ 'episodeid': "+x.episodeid+" }, 1) })()"
				},
				{	label: 'Add to Playlist',
					thumbnail: 'img/buttons/add.png',
					link: "javascript:(() => { xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'episodeid': "+x.episodeid+" } }) })()"
				}
			],
			items: [
				{	label: 'Cast',
					items: x.cast.map(actor => ({
						label: actor.name,
						details: actor.role,
						thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
						link: '#page=TV Shows&actor='+actor.name
					}))
				}
			]
		}))

	}
}));
