import Page from '../js/page'
import { seconds2string, ymd2string, makeJsLink } from '../js/util'
import moment from 'moment'

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
				mpaa !== undefined && mpaa.length > 0 && {
					'class': 'mpaa',
					'name': 'MPAA Rating',
					'value': mpaa
				},
				plot !== undefined && plot.length > 0 && {
					'class': 'plot',
					'name': 'Plot',
					'value': plot
				},
				makeDetail('Videos', 'Studio', 'studio', studio),
				makeDetail('TV Shows', 'Genre', 'genre', genre),
				makeDetail('TV Shows', 'Tag', 'tag', tag),
				{
					'class': '',
					'name': 'Statistics',
					'links': [
						{ 'label': `Played ${ playcount } times` },
						{ 'label': lastplayed instanceof String && lastplayed.length > 0 ? `Last Played ${ moment(lastplayed).format('LL') }` : undefined },
						{ 'label': `Added ${ moment(dateadded).format('LL') }` },
						{ 'label': `Premiered ${ moment(premiered).format('LL') }` }
					]
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
				},
				{
					'name': 'Links',
					'links': imdbnumber instanceof String && imdbnumber.length > 0 ? [
						{
							'label': 'IMDB',
							'link': ( (imdbnumber instanceof String) && (imdbnumber.length > 0) ) ? 
									`http://www.imdb.com/title/${ imdbnumber }/` : 
									`http://www.imdb.com/search/title?release_date=${ encodeURIComponent(year) },&title=${ encodeURIComponent(title) }&title_type=feature,tv_movie,documentary,short`

						}
					] : undefined
				}
			],
			cast: cast.map(actor => ({
				label: actor.name,
				details: actor.role || '',
				thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
				link: '#page=Videos&actor='+actor.name
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