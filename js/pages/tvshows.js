

pages.add(new Page({
	'id': 'TV Shows',
	'view': 'list',
	'groupby': 'alpha',
	'data': function (resolve) {
		let year = getHash('year')
		let genre = getHash('genre')
		let filter = year ? show => (year == show.year) :
					genre ? show => (show.genre.indexOf(genre) >= 0) :
					() => true

		xbmc.GetTVShows()
		.then(data => data.tvshows || [])
		.then(tvshows => tvshows.filter(filter)) //filter items
		.then(tvshows => tvshows.map(tvshow => { //format items

			tvshow.link = '#page=TV Show&tvshowid=' + tvshow.tvshowid
			if (tvshow.thumbnail) tvshow.thumbnail = xbmc.vfs2uri(tvshow.thumbnail)
			tvshow.alpha = tvshow.label[0].toUpperCase()

			return tvshow
		}))
		.then(items => ({
			title: 'TV Shows',
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
		

		let getEpisodes = xbmc.GetTVEpisodes({ 'tvshowid': tvshowid })
		.then(data => data.episodes || {})
		.then(episodes => episodes.map(episode => {

			episode.link = '#page=Episode&episodeid='+episode.episodeid+'&tvshowid='+tvshowid;
			episode.label = episode.title || '';
			episode.thumbnail = episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : 'img/icons/default/DefaultVideo.png';
			episode.season = 'Season '+episode.season;
			episode.thumbnailWidth = '89px';
			episode.details = [];

			if (episode.episode) episode.number = episode.episode;
			if (episode.lastplayed) episode.details.push( 'Last played '+ymd2string(episode.lastplayed) );

			episode.play = () => xbmc.Play({ 'episodeid': episode.episodeid }, 1);

			return episode
		}))

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

		xbmc.GetEpisodeDetails({ 'episodeid': episodeid })
		.then(data => data.episodedetails || {})
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
