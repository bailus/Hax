import Page from '../js/page'
import { makeJsLink } from '../js/util'

export default (new Page({
	'id': 'File',
	'view': 'list',
	'icon': state => 'img/icons/default/DefaultFile.png',
	'parentState': state => ({
				'page': 'Directory',
				'media': state['media'],
				'sortby': state['sortby'],
				'root': state['root'],
				'path': state['path']
			}),
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
		console.log(fullPath)

		return xbmc.get({
			method: 'Files.GetFileDetails',
			params: {
				'file': fullPath,
				'media': media,
				'properties': [ 'thumbnail', 'file', 'size', 'mimetype', 'lastmodified' ]
			}
		})
		//.then(x => { console.log(x); return x })
		.then(({ filedetails }) => ({
			title: filedetails.label,
			thumbnail: xbmc.vfs2uri(media === 'pictures' ? filedetails.file : filedetails.thumbnail),
			details: [
				{
					'name': 'File',
					'value': filedetails.file
				},
				{ 'name': 'Type', 'value': filedetails.mimetype },
				{ 'name': 'Size', 'value': filedetails.size/1024 },
				{ 'name': 'Last Modified', 'value': filedetails.lastmodified }
			],
			actions: [
				{
					label: 'Download',
					thumbnail: 'img/buttons/download.png',
					link: xbmc.vfs2uri(filedetails.file)
				},
				playlistid < 0 ? undefined : {
					label: 'Play',
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

	}
}));