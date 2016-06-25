import Page from '../js/page'
import { seconds2string, ymd2string, makeJsLink } from '../js/util'

export default (new Page({
	'id': 'Movie',
	'view': 'list',
	'parent': 'Movies',
	'icon': state => 'img/icons/default/DefaultVideoCover.png',
	'parentState': state => new Map([[ 'page', 'Menu' ],[ 'media', 'Movies' ]]),
	'data': state => {

		let movieid = +state.get('movieid')

		return xbmc.get({
			'method': 'VideoLibrary.GetMovieDetails',
			'params': {
				'properties': [ 'title', 'originaltitle', 'tagline', 'year', 'runtime', 'lastplayed', 'genre', 'writer', 'director', 'plot', 'fanart', 'thumbnail', 'cast' ],
				'movieid': movieid
			}
		})
		.then(result => result.moviedetails)
		.then(moviedetails => ({
			title: moviedetails.title + ((moviedetails.originaltitle && moviedetails.originaltitle != moviedetails.title) ? ' [' + moviedetails.originaltitle + ']' : ''),
			subtitle: moviedetails.tagline,
			thumbnail: xbmc.vfs2uri(moviedetails.thumbnail),
			fanart: xbmc.vfs2uri(moviedetails.fanart),
			details: [
				{ 'name': 'Year', 'value': moviedetails.year },
				{ 'name': 'Runtime', 'value': seconds2string(moviedetails.runtime) },
				{ 'name': 'Last Played', 'value': moviedetails.lastplayed ? ymd2string(moviedetails.lastplayed) : undefined },
				{ 'name': 'Director', 'value': moviedetails.director },
				{ 'name': 'Writer', 'value': moviedetails.writer },
				{ 'name': 'Genre', 'value': moviedetails.genre },
				{ 'name': 'Plot', 'value': moviedetails.plot }
			],
			actions: [
				{	label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: makeJsLink("xbmc.Play({ 'movieid': "+moviedetails.movieid+" }, 1)")
				},
				{	label: 'Add to Playlist',
					thumbnail: 'img/buttons/add.png',
					link: makeJsLink("xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'movieid': "+moviedetails.movieid+" } })")
				}
			],
			items: [
				{	label: 'Cast',
					items: moviedetails.cast.map(actor => ({
						label: actor.name,
						details: actor.role,
						thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
						link: '#page=Movies&actor='+actor.name
					}))
				}
			]
		}))
	}
}));