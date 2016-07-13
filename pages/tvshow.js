import Page from '../js/page'
import { seconds2string, ymd2string, makeJsLink } from '../js/util'
import moment from 'moment'

export default (new Page({
	'id': 'TV Show',
	'view': 'list',
	'parent': 'TV Shows',
	'sortgroup': 'season',
	'icon': state => 'img/icons/default/DefaultTVShowTitle.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'TV Shows' }),
	'data': state => {
		let tvshowid = +state['tvshowid']

		let getShowDetails = xbmc.get({ //http://kodi.wiki/view/JSON-RPC_API/v6#Video.Fields.TVShow
			'method': 'VideoLibrary.GetTVShowDetails',
			'params': {
				'properties': [
					"title", 
					"genre", 
					"year", 
					"rating", 
					"plot", 
					"studio", 
					"mpaa", 
					"cast", 
					"playcount", 
					"episode", 
					"imdbnumber", 
					"premiered", 
					"votes", 
					"lastplayed", 
					"fanart", 
					"thumbnail", 
					"file", 
					"originaltitle", 
					"sorttitle", 
					"episodeguide", 
					"season", 
					"watchedepisodes", 
					"dateadded", 
					"tag", 
					"art"
				],
				'tvshowid': tvshowid
			},
			cache: true
		})
		//.then(x => {console.log(x);return x})
		.then(({ tvshowdetails={} }) => tvshowdetails)
		.then(({
			title,
			genre,
			year,
			rating,
			plot,
			studio,
			mpaa,
			cast,
			playcount,
			episode,
			imdbnumber,
			premiered,
			votes,
			lastplayed,
			fanart,
			thumbnail,
			file,
			originaltitle,
			sorttitle,
			episodeguide,
			season,
			watchedepisodes,
			dateadded,
			tag,
			art
		}) => ({
			title: title,
			subtitle: title === originaltitle ? undefined : originaltitle,
			banner: art && art.banner ? xbmc.vfs2uri(art.banner) : undefined,
			fanart: xbmc.vfs2uri(art['fanart']),
			details: [
				{
					name: 'Tag',
					links: (Array.isArray(tag) ? tag : [ tag ])
								.map(tag => ({
									label: tag,
									link: '#page=Movies&tag='+tag
								}))
				},
				{ 'name': 'Rating', 'value': `${ Math.round(rating*10)/10 }/10 (${ votes } votes)` },
				{ 'name': 'MPAA Rating', 'value': mpaa },
				{
					name: 'Year',
					links: [
						{ label: year, link: '#page=Movies&year='+year },
						{ 'label': premiered instanceof String && premiered.length > 0 ? `Premiered: ${ moment(premiered).format('LL') }` : undefined }
					]
				},
				{
					name: 'Genre',
					links: (Array.isArray(genre) ? genre : [ genre ])
								.map(genre => ({
									label: genre,
									link: '#page=Movies&genre='+genre
								}))
				},
				{ 'name': 'Plot', 'value': plot },
				{
					name: 'Studio',
					links: (Array.isArray(studio) ? studio : [ studio ])
								.map(studio => ({
									label: studio,
									link: '#page=Movies&studio='+studio
								}))
				},
				{ 'name': 'Statistics', 'links': [
					{ 'label': `Seasons: ${ season }` },
					{ 'label': `Episodes: ${ episode } (${ watchedepisodes } watched)` },
					{ 'label': lastplayed instanceof String && lastplayed.length > 0 ? `Last Played: ${ moment(lastplayed).format('LL') }` : undefined },
					{ 'label': `Added: ${ moment(dateadded).format('LL') }` }
				] },
				{
					name: 'Links',
					links: imdbnumber instanceof String && imdbnumber.length > 0 ? [
						{
							label: 'IMDB',
							link: `http://www.imdb.com/title/${ imdbnumber }/`
						}
					] : undefined
				}
			],
			cast: cast.map(actor => ({
				label: actor.name,
				details: actor.role,
				thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
				link: '#page=TV Shows&actor='+actor.name
			}))
		}))

		const getSeasons = xbmc.get({
			method: 'VideoLibrary.GetSeasons',
			params: {
				'properties': [
					"season", 
					"showtitle", 
					"episode", 
					"thumbnail", 
					"tvshowid", 
					"watchedepisodes", 
				],
				'tvshowid': tvshowid
			},
			cache: true
		})
		//.then(x => {console.log(x);return x})
		.then(({ seasons=[] }) => seasons.map(season => ({
			label: season.label,
			details: [ season.episode + ' episodes', season.watchedepisodes + ' watched' ],
			link: `#page=Season&tvshowid=${ season.tvshowid }&season=${ season.season }`,
			thumbnail: season.thumbnail ? xbmc.vfs2uri(season.thumbnail) : 'img/icons/default/DefaultVideo.png'
		})))

		return Promise.all([ getShowDetails, getSeasons ])
		.then(([ page, seasons ]) => {
			page.seasons = seasons
			return page
		})

	}
}));