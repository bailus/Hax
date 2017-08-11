import Page from '../js/page'
import { seconds2string, makeJsLink, flatMap } from '../js/util'
import moment from 'moment'

export default (new Page({
	'id': 'Episode',
	'view': 'list',
	'parent': 'TV Shows',
	'icon': state => 'img/icons/default/DefaultVideo.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'TV Shows' }),
	'data': state => {
		let episodeid = +state['episodeid']

		const getEpisodeDetails = xbmc.get({
			'method': 'VideoLibrary.GetEpisodeDetails',
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Video.Fields.Episode
					"title", 
					"plot", 
					"votes", 
					"rating", 
					"writer", 
					"firstaired", 
					"playcount", 
					"runtime", 
					"director", 
					"productioncode", 
					"season", 
					"episode", 
					"originaltitle", 
					"showtitle", 
					"cast", 
					"streamdetails", 
					"lastplayed", 
					"file", 
					"resume", 
					"tvshowid", 
					"dateadded", 
					"uniqueid", 
					"art"
				],
				'episodeid': episodeid
			}
		})
		.then(({ episodedetails={} }) => episodedetails)

		const getPrevNext = getEpisodeDetails.then(({ tvshowid, season, episodeid }) => {

			return xbmc.get({
				'method': 'VideoLibrary.GetEpisodes',
				'params': {
					'properties': [ 'tvshowid', 'title', 'episode', 'art' ],
					'tvshowid': tvshowid
				},
				'cache': true
			})
			.then(({ episodes=[] }) => {
				let o = {}

				episodes.forEach((curr, s) => {
					const prev = episodes[s-1]
					const next = episodes[s+1]
					if (curr.episodeid == episodeid) {
						o = {
							'previous': prev === undefined ? undefined : {
								'label': prev.label,
								'link': `#page=Episode&episodeid=${ prev.episodeid }`,
								'thumbnail': prev.art.thumb ? xbmc.vfs2uri(prev.art.thumb) : 'img/icons/default/DefaultVideo.png'
							},
							'next': next === undefined ? undefined : {
								'label': next.label,
								'link': `#page=Episode&episodeid=${ next.episodeid }`,
								'thumbnail': next.art.thumb ? xbmc.vfs2uri(next.art.thumb) : 'img/icons/default/DefaultVideo.png'
							}
						}
					}
				})

				return o
			})
		})

		function makeDetail(page, name, key, value) {
			return value !== undefined && value.length > 0 && {
				'class': key,
				'name': name,
				'links': (Array.isArray(value) ? value : [  ])
						.map(v => ({
							'label': v,
							'link': `#page=${page}&${key}=${v}`
						}))
			}
		}

		return Promise.all([ getEpisodeDetails, getPrevNext ])
		.then(([ {
			title,
			plot,
			votes,
			rating,
			writer=[],
			firstaired,
			playcount,
			runtime,
			director=[],
			productioncode,
			season,
			episode,
			originaltitle,
			showtitle,
			cast,
			streamdetails={},
			lastplayed,
			file,
			resume,
			tvshowid,
			dateadded,
			uniqueid,
			art,
			label
		}, prevNext ]) => ({
			'previous': prevNext.previous,
			'next': prevNext.next,
			'titleLink': `#page=TV Show&tvshowid=${ tvshowid }`,
			'title': showtitle,
			'subtitleLink': `#page=Season&tvshowid=${ tvshowid }&season=${ season }`,
			'bannerLink': `#page=Season&tvshowid=${ tvshowid }&season=${ season }`,
			'subtitle': `Season ${season}`,
			'label': `${season}x${ (episode < 10 ? '0' : '') + episode }. ${label}`,
			'thumbnail': xbmc.vfs2uri(art['thumb'] || art['season.poster'] || art['tvshow.poster']),
			'banner': xbmc.vfs2uri(art['season.banner'] || art['tvshow.banner']),
			'fanart': xbmc.vfs2uri(art['tvshow.fanart']),
			'progress': resume !== undefined && resume.position > 0 && (Math.round(resume.position / resume.total * 100)+'%'),
			'details': [
				rating !== undefined && votes > 0 && {
					'class': 'rating',
					'name': 'Rating',
					'flags': [
						{
							'class': 'starrating',
							'value': Math.round(rating),
							'caption': `(${votes} votes)`
						}
					]
				},
				runtime !== undefined && runtime.length > 0 && {
					'class': 'runtime',
					'name': 'Runtime',
					'value': moment.duration(runtime, 'seconds').humanize()
				},
				lastplayed instanceof String && lastplayed.length > 0 && {
					'class': 'lastplayed',
					'name': 'Last Played',
					'value': moment(lastplayed).format('LL')
				},
				dateadded instanceof String && dateadded.length > 0 && {
					'class': 'dateadded',
					'name': 'Added',
					'value': moment(dateadded).format('LL')
				},
				plot !== undefined && plot.length > 0 && {
					'class': 'plot',
					'name': 'Plot',
					'value': plot
				},
				file !== undefined && file.length > 0 && {
					'class': '',
					'name': 'File',
					'links': [
						{
							'label': file,
							'link': `${ xbmc.vfs2uri(file) }`
						}
					]
				}
			],
			'actions': [
				{	'label': 'Play',
					'thumbnail': 'img/icons/infodialogs/play.png',
					'link': makeJsLink(`xbmc.Play({ 'episodeid': (${ episodeid }) }, 1)`)
				},
				{	'label': 'Add to Playlist',
					'thumbnail': 'img/buttons/add.png',
					'link': makeJsLink(`xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'episodeid': (${ episodeid }) } })`)
				}
			],
			'cast': (function () {
				let out = (Array.isArray(director) ? director : [ director ])
					.map(director => ({
						'label': director,
						'details': 'Director',
						'thumbnail': director.thumbnail ? xbmc.vfs2uri(director.thumbnail) : 'img/icons/default/DefaultDirector.png',
						'link': '#page=Videos&director='+director
					}))
				out = out.concat((Array.isArray(writer) ? writer : [ writer ])
					.map(writer => ({
						'link': '#page=Videos&writers='+writer,
						'thumbnail': writer.thumbnail ? xbmc.vfs2uri(writer.thumbnail) : 'img/icons/default/DefaultWriter.png',
						'label': writer,
						'details': 'Writer'
					})))
				out = out.concat(cast.map(actor => ({
					'label': actor.name,
					'details': actor.role || '',
					'thumbnail': actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
					'link': '#page=Videos&actor='+actor.name
				})))
				return out
			})()
		}))

	}
}));