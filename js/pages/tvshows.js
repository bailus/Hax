

pages.add(new Page({
	'id': 'TV Shows',
	'view': 'list',
	'groupby': 'alpha',
	'data': function (resolve) {

		let filter = xbmc.makeFilter([{ name: 'Year', key: 'year', type: Number }, { name: 'Genre', key: 'genre', type: String }, { name: 'Actor', key: 'actor', type: String }])

		xbmc.sendMessage('VideoLibrary.GetTVShows', {
			'properties': [ 'title', 'originaltitle', 'sorttitle', 'thumbnail', 'episode' ],
			'filter': (filter || {}).filter
		})
		.then(data => (data.result || {}).tvshows || [])
		.then(tvshows => tvshows.map(tvshow => ({ //format items
			label: tvshow.title + (tvshow.originaltitle && tvshow.originaltitle != tvshow.title ? ' ['+tvshow.originaltitle+']' : ''),
			details: [ tvshow.episode + ' episodes' ],
			link: '#page=TV Show&tvshowid=' + tvshow.tvshowid,
			thumbnail: tvshow.thumbnail ? xbmc.vfs2uri(tvshow.thumbnail) : 'img/icons/default/DefaultVideo.png',
			alpha: (tvshow.sorttitle || tvshow.title)[0].toUpperCase()
		})))
		.then(items => ({
			title: 'TV Shows',
			subtitle: filter ? filter.name + ': ' + filter.value : '',
			items: items
		}))
		.then(resolve)

	}
}));

pages.add(new Page({
	'id': 'TV Show',
	'view': 'list',
	'parent': 'TV Shows',
	'groupby': 'season',
	'sortgroup': 'season',
	'data': (resolve, reject) => {
		let tvshowid = +getHash('tvshowid')

		let getShowDetails = xbmc.GetTVShowDetails({ 'tvshowid': tvshowid })
		.then(data => data.tvshowdetails || {})
		.then(details => {  //format show details
			if (details.art) details.banner = xbmc.vfs2uri(details.art.banner);
			delete details.thumbnail;
			return details
		})
		

		let getEpisodes = xbmc.sendMessage('VideoLibrary.GetEpisodes', {
			'properties': [ 'tvshowid', 'title', 'thumbnail', 'episode', 'season', 'runtime', 'lastplayed' ],
			'tvshowid': tvshowid
		})
		.then(data => data.result || {})
		.then(result => result.episodes || {})
		.then(episodes => episodes.map(episode => ({
			link: '#page=Episode&episodeid='+episode.episodeid+'&tvshowid='+tvshowid,
			label: episode.title || '',
			thumbnail: episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : 'img/icons/default/DefaultVideo.png',
			season: 'Season ' + episode.season,
			thumbnailWidth: '89px',
			details: [ seconds2string(episode.runtime), episode.lastplayed ? 'Last played '+ymd2string(episode.lastplayed) : undefined ],
			number: episode.episode,
			play: () => xbmc.Play({ 'episodeid': episode.episodeid }, 1)
		})))

		Promise.all([ getShowDetails, getEpisodes ])
		.then(([ page, items ]) => {
			page.items = items
			return page
		})
		.then(resolve)

	}
}));

pages.add(new Page({
	'id': 'Episode',
	'view': 'list',
	'parent': 'TV Shows',
	'data': (resolve, reject) => {
		let tvshowid = +getHash('tvshowid')
		let episodeid = +getHash('episodeid')

		xbmc.sendMessage('VideoLibrary.GetEpisodeDetails', {
			'properties': [ 'title', 'plot', 'writer', 'firstaired', 'playcount', 'runtime', 'director', 'season', 'episode', 'showtitle', 'cast', 'lastplayed', 'thumbnail', 'fanart', 'file', 'tvshowid' ],
			'episodeid': episodeid
		})
		.then(data => data.result || {})
		.then(result => result.episodedetails || {})
		.then(page => {

			page.subtitle = (page.season>0 && page.episode>0 ? page.season+'x'+(page.episode<10 ? '0' : '') + page.episode + ' ' : '') + 
							(page.title || page.showtitle || '')

			if (tvshowid) page.link = '#page=TV Show&tvshowid='+tvshowid
			if (page.showtitle) page.title = page.showtitle
			if (page.thumbnail) page.thumbnail = xbmc.vfs2uri(page.thumbnail)
			if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart)
			if (page.runtime) page.runtime = seconds2string(page.runtime)

			if (episodeid !== undefined) {
				page.play = () => xbmc.Play({ 'episodeid': episodeid }, 1)
				page.add = () => xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'episodeid': episodeid } })
			}
	
			return page		
		})
		.then(resolve)

	}
}));
