import Page from '../js/page'
import { makeJsLink, parseYear } from '../js/util'
import Filter from '../js/xbmcFilter'
import icons from './icons'

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
	'id': 'Artist',
	'view': 'list',
	'icon': state => 'img/icons/default/DefaultMusicAlbums.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Music' }),
	'data': state => {

		const fields = [
			{ name: 'Artist', key: 'artist', type: 'string' }
		]
		const filter = Filter.fromState(state, fields)

		const getArtistId = state['artistid'] > 0 ? Promise.resolve(+state['artistid']) :
			xbmc.get({
				'method': 'AudioLibrary.GetArtists',
				'params': { 
					'properties': [ 'thumbnail' ],
					'albumartistsonly': false,
					'filter': filter.out()
				}
			})
			.then(({ artists=[] }) => artists.length > 0 ? +artists[0].artistid : undefined)

		const getArtistDetails = getArtistId.then(artistid => {
			if (artistid === undefined) return { 'artistdetails': { 'label': state['artist'] } }
			return xbmc.get({
				'method': 'AudioLibrary.GetArtistDetails',
				'params': {
					'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Artist
						"instrument", 
						"style", 
						"mood", 
						"born", 
						"formed", 
						"description", 
						"genre", 
						"died", 
						"disbanded", 
						"yearsactive", 
						"musicbrainzartistid", 
						"fanart", 
						"thumbnail"
					],
					'artistid': artistid
				}
			})
		})

		const getArtist = state['artist'] ? Promise.resolve(state['artist']) :
			getArtistDetails.then(({ artistdetails: { artist } }) => artist)
		
		const formatArtistDetails = getArtistDetails.then(({
			artistdetails: {
				label, instrument, style, mood, born, formed,
				description, genre, died, disbanded, yearsactive,
				musicbrainzartistid, fanart, thumbnail, artistid
			}
		}) => ({
			'title': label,
			'thumbnail': thumbnail ? xbmc.vfs2uri(thumbnail) : undefined,
			'fanart': xbmc.vfs2uri(fanart),
			'details': [
				born !== undefined && born.length > 0 && {
					'class': 'born',
					'name': 'Born',
					'value': born
				},
				formed !== undefined && formed.length > 0 && {
					'class': 'formed',
					'name': 'Formed',
					'value': formed
				},
				disbanded !== undefined && disbanded.length > 0 && {
					'class': 'disbanded',
					'name': 'Disbanded',
					'value': disbanded
				},
				died !== undefined && died.length > 0 && {
					'class': 'died',
					'name': 'Died',
					'value': died
				},
				makeDetail('Artists', 'Mood', 'mood', mood),
				makeDetail('Artists', 'Style', 'style', style),
				makeDetail('Artists', 'Instrument', 'instrument', instrument),
				makeDetail('Artists', 'Genre', 'genre', genre),
				description !== undefined && description.length > 0 && {
					'class': 'description',
					'name': 'Description',
					'value': description
				}
			],
			'actions': [
				{
					'label': 'Play',
					'thumbnail': icons.actions['Play'],
					'link': makeJsLink(`xbmc.Play({ 'artistid': (${ artistid }) }, 0)`)
				},
				{
					'label': 'Add to playlist',
					'thumbnail': icons.actions['Add'],
					'link': makeJsLink(`xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'artistid': (${ artistid }) } })`)
				}
			]
		})).catch(x => ({})) //Can't get artist details for "Various Artists"

		const getAlbums = getArtistId.then(artistid => {
			if (artistid === undefined) return { 'albums': [] }
			return xbmc.get({
				'method': 'AudioLibrary.GetAlbums',
				'params': {
					'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Album
					'title', 'artist', 'year', 'thumbnail', 'artistid', 'displayartist', 'playcount' ],
					'filter': { 'artistid': artistid }
				}
			})
		})

		const getArtistAlbums = Promise.all([ getArtistId, getAlbums ])
			.then(([ artistid, { albums=[] } ]) => albums.filter((album={}) => (+album.artistid === +artistid)))

		const formatArtistAlbums = getArtistAlbums.then((albums=[]) => {
			return albums.map(({
				label, albumid, thumbnail, year, playcount, artistid
			}) => ({
				'label': label,
				'details': [ year, playcount > 0 ? `played ${playcount} times` : '' ],
				'link': '#page=Album&albumid=' + albumid + '&artistid=' + artistid,
				'thumbnail': xbmc.vfs2uri(thumbnail) || icons.media['Album'],
				'year': year||undefined, //sometimes year is 0
				'actions': [
					{
						'label': '▶',
						'link': makeJsLink(`xbmc.Play({ 'albumid': ${albumid} }, 0)`)
					}
				]
			}))
		})

		const getFeaturedAlbums = Promise.all([ getArtistId, getAlbums ])
			.then(([ artistid, { albums=[] } ]) => albums.filter((album={}) => (+album.artistid !== +artistid)))
		
		const formatFeaturedAlbums = getFeaturedAlbums.then((albums=[]) => {
			return albums.map(({
				title, label, albumid, thumbnail, year, displayartist, artist, artistid
			}) => ({
				'details': `${ displayartist || artist.join(', ')}`,
				'link': '#page=Album&albumid=' + albumid + '&artistid=' + artistid,
				'thumbnail': xbmc.vfs2uri(thumbnail) || icons.media['Album'],
				'label': (year ? `(${parseYear(year)}) ` : '') + title
			}))
		})

		const getMusicVideos = getArtist
		.then(artist => xbmc.get({
			'method': 'VideoLibrary.GetMusicVideos',
			'params': {
				'properties': [ 'title', 'genre', 'runtime', 'year', 'album', 'artist', 'track', 'thumbnail' ],
				'filter': {
					'field': 'artist',
					'operator': 'is',
					'value': artist
				}
			}
		})
		.then(({ musicvideos=[] }) => musicvideos.map(({
			title, album, year, thumbnail, musicvideoid
		}) => ({
			'label': title,
			'details': (album ? album+(year ? ' ('+parseYear(year)+')' : '') : ''),
			'thumbnail': xbmc.vfs2uri(thumbnail) || icons.media['Music Video'],
			'link': '#page=Music Video&musicvideoid='+musicvideoid
		}))))

		return Promise.all([ formatArtistDetails, formatArtistAlbums, formatFeaturedAlbums, getMusicVideos ])      //wait for the above to finish
		.then( ( [ page, items, featuredAlbums, musicVideos ] ) => { //create the page
			page.items = items
			if (featuredAlbums.length > 0) page.details.push({
				'name': 'Featured on',
				'iconList': featuredAlbums
			})
			if (musicVideos.length > 0) page.details.push({
				'name': 'Music Videos',
				'iconList': musicVideos
			})
			return page
		})
	}
}));