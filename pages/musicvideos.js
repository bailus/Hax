import Page from '../js/page'
import Filter from '../js/xbmcFilter'
import { parseYear, makeJsLink, seconds2string } from '../js/util'
import icons from './icons'

export default (new Page({
	'id': 'Music Videos',
	'view': 'list',
	'groupby': 'artist',
	'icon': state => 
			state['group'] === 'year' ? 'img/icons/default/DefaultYear.png' :
			state['group'] === 'genre' ? 'img/icons/default/DefaultGenre.png' :
			'img/icons/default/DefaultMusicArtists.png',
	'parentState': state => ({ 'page': 'Menu', 'media': 'Music Videos' }),
	'data': function (state) {

		let groupby = state['group'] || this.groupby

		
		const fields = [ //http://kodi.wiki/view/JSON-RPC_API/v6#List.Filter.Fields.MusicVideos
			{ name: 'Title', key: 'title', type: 'string' },
			{ name: 'Genre', key: 'genre', type: 'string' },
			{ name: 'Genre', key: 'genreid', type: 'integer' },
			{ name: 'Album', key: 'album', type: 'string' },
			{ name: 'Year', key: 'year', type: 'integer' },
			{ name: 'Artist', key: 'artist', type: 'string' },
			{ name: 'Filename', key: 'filename', type: 'string' },
			{ name: 'Path', key: 'path', type: 'string' },
			{ name: 'Director', key: 'director', type: 'string' },
			{ name: 'Studio', key: 'studio', type: 'string' },
			{ name: 'Plot', key: 'plot', type: 'string' },
			{ name: 'Video Resolution', key: 'videoresolution', type: 'string' },
			{ name: 'Audio Channels', key: 'audiochannels', type: 'string' },
			{ name: 'Video Codec', key: 'videocodec', type: 'string' },
			{ name: 'Audio Codec', key: 'audiocodec', type: 'string' },
			{ name: 'Audio Language', key: 'audiolanguage', type: 'string' },
			{ name: 'Subtitle Language', key: 'subtitlelanguage', type: 'string' },
			{ name: 'Video Aspect', key: 'videoaspect', type: 'string' },
			{ name: 'Playlist', key: 'playlist', type: 'string' }
		]
		const filter = Filter.fromState(state, fields)


		return xbmc.get({
			'params': {
				'properties': [ 'title', 'genre', 'runtime', 'year', 'album', 'artist', 'track', 'thumbnail', 'file' ],
				'filter': filter.out()
			},
			'method': 'VideoLibrary.GetMusicVideos',
			'cache': true
		})
		.then(result => ({
			'title': filter.toString(),
			'items': (result.musicvideos || []).map((mv) => ({
				'artist': (mv.artist instanceof Array ? mv.artist : [mv.artist]).join(', '),
				'label': mv.title,
				'details': [
					mv.artist,
					(mv.album ? mv.album+(mv.year ? ' ('+mv.year+')' : '') : ''),
					seconds2string(mv.runtime)
				],
				'thumbnail': xbmc.vfs2uri(mv.thumbnail) || icons.media['Music Video'],
				'play': () => { xbmc.Open({ 'item': { 'file': xbmc.vfs2uri(mv.file) } }) },
				'year': parseYear(mv.year),
				'genre': mv.genre,
				'actions': [
					{
						'label': '▶',
						'link': makeJsLink(`xbmc.Play({ 'musicvideoid': ${mv.musicvideoid} }, 1)`)
					}
				],
				'link': '#page=Music Video&musicvideoid='+mv.musicvideoid
			}))
		}))

	}
}));
