import Page from '../js/page'
import { seconds2string, makeJsLink } from '../js/util'
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

		const getPrevNext = getEpisodeDetails.then(({ tvshowid, season, episode }) => {

			return xbmc.get({
				method: 'VideoLibrary.GetEpisodes',
				params: {
					'properties': [ 'tvshowid', 'title', 'episode', 'art' ],
					'tvshowid': tvshowid,
					'season': season
				},
				cache: true
			})
			.then(({ episodes=[] }) => {
				let o = {}

				episodes.forEach((curr, s) => {
					const prev = episodes[s-1]
					const next = episodes[s+1]
					if (curr.episode == episode) {
						o = {
							previous: prev === undefined ? undefined : {
								label: prev.label,
								link: `#page=Episode&episodeid=${ prev.episodeid }`,
								thumbnail: prev.art.thumb ? xbmc.vfs2uri(prev.art.thumb) : 'img/icons/default/DefaultVideo.png'
							},
							next: next === undefined ? undefined : {
								label: next.label,
								link: `#page=Episode&episodeid=${ next.episodeid }`,
								thumbnail: next.art.thumb ? xbmc.vfs2uri(next.art.thumb) : 'img/icons/default/DefaultVideo.png'
							}
						}
					}
				})

				return o
			})
		})

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
			previous: prevNext.previous,
			next: prevNext.next,
			title: showtitle,
			titleLink: `#page=TV Show&tvshowid=${ tvshowid }`,
			subtitle: label,
			thumbnail: xbmc.vfs2uri(art['thumb'] || art['season.poster'] || art['tvshow.poster']),
			//banner: xbmc.vfs2uri(art['tvshow.banner']),
			fanart: xbmc.vfs2uri(art['tvshow.fanart']),
			details: [
				{
					'name': 'Production Code',
					'links': [
						{ label: `Season ${ season }`, link: `#page=Season&tvshowid=${ tvshowid }&season=${ season }` },
						{ label: `Episode ${ episode }` }
					]
				},
				{ 'name': 'Rating', 'value': `${ Math.round(rating*10)/10 }/10 (${ votes } votes)` },
				{ 'name': 'Plot', 'value': plot },
				{
					name: 'Director',
					links: director.map(director => ({
								label: director,
								link: '#page=Episodes&director='+director
							}))
				},
				{
					name: 'Writer',
					links: writer.map(writer => ({
								label: writer,
								link: '#page=Episodes&writers='+writer
							}))
				},
				{ 'name': 'Statistics', 'links': [
					{ 'label': `Runtime ${ seconds2string(runtime) }` },
					{ 'label': `Played ${ playcount } times` },
					{ 'label': lastplayed instanceof String && lastplayed.length > 0 ? `Last Played ${ moment(lastplayed).format('LL') }` : undefined },
					{ 'label': `Added ${ moment(dateadded).format('LL') }` }
				] },
				{
					name: 'Audio',
					links: streamdetails.audio
								.map(({ language, channels, codec }) => ({
									label: (language ? `${ language }: ` : '') + `${ channels } channels (${ codec })`
								}))
				},
				{
					name: 'Video',
					links: streamdetails.video
								.map(({ width, height, codec, stereomode }) => ({
									label: `${ width }×${ height } (${ codec })` + (stereomode ? `, ${ stereomode }` : '')
								}))
				},
				{
					name: 'File',
					links: [
						{
							label: file,
							link: `${ xbmc.vfs2uri(file) }`
						}
					]
				}
			],
			actions: [
				{	label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: makeJsLink(`xbmc.Play({ 'episodeid': (${ episodeid }) }, 1)`)
				},
				{	label: 'Add to Playlist',
					thumbnail: 'img/buttons/add.png',
					link: makeJsLink(`xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'episodeid': (${ episodeid }) } })`)
				}
			],
			cast: cast.map(({
				name,
				role,
				thumbnail
			}) => ({
				label: name,
				details: role,
				thumbnail: thumbnail ? xbmc.vfs2uri(thumbnail) : 'img/icons/default/DefaultActor.png',
				link: `#page=Episodes&actor=${ name }`
			}))
		}))

	}
}));