import Page from '../js/page'
import { makeJsLink } from '../js/util'

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
	'groupby': 'year',
	'sortby': 'label',
	'icon': state => 'img/icons/default/DefaultMusicAlbums.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Music' }),
	'data': state => {
		const artistid = +state['artistid']

		let getArtistDetails = xbmc.get({
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
			},
			cache: true
		})
		.then(({ artistdetails={} }) => artistdetails)
		.then(x => {console.log(x);return x})
		.then(({
			label,
			instrument,
			style,
			mood,
			born,
			formed,
			description,
			genre,
			died,
			disbanded,
			yearsactive,
			musicbrainzartistid,
			fanart,
			thumbnail
		}) => ({
			title: label || 'Artist ' + artistid,
			thumbnail: thumbnail ? xbmc.vfs2uri(thumbnail) : undefined,
			fanart: xbmc.vfs2uri(fanart),
			details: [
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
			actions: [
				{
					label: 'Play',
					thumbnail: 'img/icons/infodialogs/play.png',
					link: makeJsLink(`xbmc.Play({ 'artistid': (${ artistid }) }, 0)`)
				},
				{
					label: 'Add to playlist',
					thumbnail: 'img/buttons/add.png',
					link: makeJsLink(`xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'artistid': (${ artistid }) } })`)
				}
			]
		}))

		let getAlbums = xbmc.get({
			'method': 'AudioLibrary.GetAlbums',
			'params': {
				'properties': [ //http://kodi.wiki/view/JSON-RPC_API/v6#Audio.Fields.Album
				'title', 'artist', 'year', 'thumbnail', 'artistid', 'displayartist' ],
				'filter': { 'artistid': artistid }
			},
			'cache': true
		})

		const getArtists = getAlbums.then(({  }))

		const getArtistAlbums = getAlbums.then(({ albums=[] }) => albums.filter((album={}) => (+album.artistid === +artistid)))

		const formatArtistAlbums = getArtistAlbums.then((albums=[]) => {
			return albums.map(({
				label,
				albumid,
				thumbnail,
				year
			}) => ({
				label: label,
				link: '#page=Album&albumid=' + albumid + '&artistid=' + artistid,
				thumbnail: thumbnail ? xbmc.vfs2uri(thumbnail) : 'img/icons/default/DefaultAudio.png',
				year: year,
				actions: [
					{
						label: '▶',
						link: makeJsLink(`xbmc.Play({ 'albumid': ${albumid} }, 0)`)
					}
				]
			}))
		})

		const getFeaturedAlbums = getAlbums.then(({ albums=[] }) => albums.filter((album={}) => (+album.artistid !== +artistid)))
		
		const formatFeaturedAlbums = getFeaturedAlbums.then((albums=[]) => {
			return albums.map(({
				title,
				label,
				albumid,
				thumbnail,
				year,
				displayartist,
				artist
			}) => ({
				label: `${ displayartist || artist.join(', ')}`,
				link: '#page=Album&albumid=' + albumid + '&artistid=' + artistid,
				thumbnail: thumbnail ? xbmc.vfs2uri(thumbnail) : 'img/icons/default/DefaultAudio.png',
				details: `(${year}) ${title}`
			}))
		})

		const getOtherArtists = getAlbums.then(({ albums=[] }) => {
			const artists = {}
			albums.forEach((album) => {
				for (let i = 0; i < album.artistid.length; i++) {
					artists[album.artistid[i]] = {
						'artistid': album.artistid[i],
						'label': album.artist[i]
					}
				}
			})
			return Object.keys(artists).map(artistid => artists[artistid]) //convert the object to an array
		})

		return Promise.all([ getArtistDetails, formatArtistAlbums, formatFeaturedAlbums, getOtherArtists ])      //wait for the above to finish
		.then( ( [ page, items, featuredAlbums, otherArtists ] ) => { //create the page
			page.items = items
			if (featuredAlbums.length > 0) page.details.push({
				'name': 'Featured on',
				'iconList': featuredAlbums
			})
			/*if (otherArtists.length > 0) page.details.push({
				'name': 'See Also',
				'iconList': otherArtists
			})*/
			return page
		})
	}
}));