import Page from '../js/page'
import { makeJsLink } from '../js/util'
import { getSlash, trimFilename, joinFilenameComponents, joinDirectoryComponents } from '../js/filename'

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

		const root = state['root']
		const path = state['path']
		const filename = state['filename']
		const slash = getSlash([ root, path ])

		const getFileDetails = xbmc.get({
			method: 'Files.GetFileDetails',
			params: {
				'file': joinFilenameComponents([ root, path, filename ], slash),
				'media': media,
				'properties': [ 'thumbnail', 'file', 'size', 'mimetype', 'lastmodified' ]
			}
		})

		const getDownloadLink = xbmc.get({
			method: 'Files.PrepareDownload',
			params: {
				'path': joinFilenameComponents([ root, path, filename ], slash)
			}
		})
		.then(({ details: { path } }) => '/'+path)

		return Promise.all([ getFileDetails, getDownloadLink ])
		.then(([ { filedetails: {
			label, file, thumbnail='', mimetype, size, lastmodified
		} }, downloadLink ]) => ({
			title: label,
			thumbnail: (thumbnail == '' && media === 'pictures') ? downloadLink : xbmc.vfs2uri(thumbnail),
			details: [
				{
					'name': 'File',
					'value': file
				},
				{ 'name': 'Type', 'value': mimetype },
				{ 'name': 'Size', 'value': ((size > 0 ? size : 0) / 1024 / 1024).toFixed(2) + ' MB' },
				{ 'name': 'Last Modified', 'value': lastmodified }
			],
			actions: [
				{
					label: 'Download',
					thumbnail: 'img/buttons/download.png',
					link: downloadLink
				},
				playlistid < 0 ? undefined : {
					label: 'Play',
					thumbnail: 'img/buttons/play.png',
					link: makeJsLink(`xbmc.Open({ 'item': { 'file': '${xbmc.vfs2uri(file)}'  } })`)
				},
				playlistid < 0 ? undefined : {
					label: 'Add to Playlist',
					thumbnail: 'img/buttons/add.png',
					link: makeJsLink(`xbmc.sendMessage('Playlist.Add',{ 'playlistid': ${ playlistid }, 'item': { 'file': '${xbmc.vfs2uri(file)}'  } })`)
				}
			]
		}))

	}
}));