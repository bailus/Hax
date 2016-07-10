import Page from '../js/page'
import { makeJsLink } from '../js/util'

export default (new Page({
	'id': 'File Album',
	'view': 'list',
	'icon': state => 'img/icons/default/DefaultFile.png',
	'data': state => {

		const media = '' + (state['media'] || 'files')
		const playlistid = {
			'files': -1,
			'music': 0,
			'video': 1,
			'pictures': 2
		}[media]

		const root = state['root'] || ''
		const path = state['path'] || ''
		const filename = state['filename'] || ''
		const fullPath = [ root, path, filename ].join('')



		const directoryDetails = xbmc.get({
			method: 'Files.GetDirectory',
			params: {
				'properties': [ 'duration', 'thumbnail', 'file', 'size', 'mimetype', 'lastmodified' ],
				'sort': { 'method': sortby, 'order': order },
				'directory': root + path,
				'media': media
			}
		})
		.then(x => { console.log(x); return x })
		.then(({ files }) => files.map(file => ({
			label: file.label,
			link: ''
		})))


		const fileDetails = xbmc.get({
			method: 'Files.GetFileDetails',
			params: {
				'file': fullPath,
				'media': media,
				'properties': [ 'thumbnail', 'file', 'size', 'mimetype', 'lastmodified' ]
			}
		})
		.then(x => { console.log(x); return x })
		.then(({ filedetails }) => ({
			title: filedetails.label,
			thumbnail: xbmc.vfs2uri(media === 'pictures' ? filedetails.file : filedetails.thumbnail),
			details: [
				{ 'name': 'File', 'value': filedetails.file },
				{ 'name': 'Type', 'value': filedetails.mimetype },
				{ 'name': 'Size', 'value': filedetails.size },
				{ 'name': 'Last Modified', 'value': filedetails.lastmodified }
			],
			actions: [
				{	label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: makeJsLink(`xbmc.Open({ 'item': { 'file': '${xbmc.vfs2uri(filedetails.file)}'  } })`)
				},
				playlistid < 0 ? undefined : {
					label: 'Add to Playlist',
					thumbnail: 'img/buttons/add.png',
					link: makeJsLink(`xbmc.sendMessage('Playlist.Add',{ 'playlistid': ${ playlistid }, 'item': { 'file': '${xbmc.vfs2uri(filedetails.file)}'  } })`)
				}
			]
		}))


		return Promise.all([ fileDetails, directoryDetails ])
		.then(([ fileDetails, directoryDetails ]) => ({

		}))

	}
}));