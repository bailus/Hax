import Page from '../js/page.js'
import { makeJsLink } from '../js/util.js'
import moment from 'moment'
import { getSlash, trimFilename, joinFilenameComponents, joinDirectoryComponents } from '../js/filename.js'

export default (new Page({
	'id': 'Directory',
	'view': 'list',
	'parent': 'Files',
	'icon': state => 'img/icons/default/DefaultFolder.png',
	'parentState': state => {
		const m = {
			'video': { 'page': 'Menu', 'media': 'Videos' },
			'music': { 'page': 'Menu', 'media': 'Music' },
			'pictures': { 'page': 'Files', 'media': 'Pictures' }
		}[state['media']]
		return m ? m : { 'page': 'Home' }
	},
	'data': state => {

		const root = state['root']
		const path = state['path']
		const media = state['media'] || ''
		const sortby = state['sortby'] || 'date'

		let order = state['order']
		let inverseOrder = {
			'ascending': 'descending',
			'descending': 'ascending'
		}[order]
		if (inverseOrder === undefined) {
			order = 'descending'
			inverseOrder = 'ascending'
		}


		const slash = getSlash([ root, path ])
		const directory = joinDirectoryComponents([ root, path ], slash)

		console.log({
			method: 'Files.GetDirectory',
			params: {
				'properties': [ 'duration', 'thumbnail', 'file', 'size', 'mimetype', 'lastmodified', 'art' ],
				'sort': { 'method': sortby, 'order': order },
				'directory': directory,
				'media': media
			}
		})

		return xbmc.get({
			method: 'Files.GetDirectory',
			params: {
				'properties': [ 'duration', 'thumbnail', 'file', 'size', 'mimetype', 'lastmodified', 'art' ],
				'sort': { 'method': sortby, 'order': order },
				'directory': directory,
				'media': 'files'
			}
		})
		.then(result => result.files || [])
		.then(files => files.map(file => {
			let filename = trimFilename(decodeURIComponent(file.file)).split(slash).pop()

			if (file.filetype === 'directory') {

				file.link = '#page=Directory&media='+media+'&sortby='+sortby+'&order='+order+'&root='+encodeURIComponent(root)+'&path='+encodeURIComponent(joinDirectoryComponents([ path, filename ], slash))
				file.thumbnail = file.thumbnail ? xbmc.vfs2uri(file.thumbnail) : 'img/icons/default/DefaultFolder.png'
			}
			else {
				var playlistid = file.type === 'audio' ? 0 : file.type === 'video' ? 1 : 2
				file.actions = [
					{
						label: '▶',
						link: makeJsLink(`xbmc.Open({ 'item': { 'file': '${file.file}'  } })`)
					}
				]
				file.link = `#page=File&media=${ media }&sortby=${ sortby }&order=${ order }&root=${ encodeURIComponent(root) }&path=${ encodeURIComponent(path || '') }&filename=${ encodeURIComponent(filename) }`

				if (media === 'pictures')
					file.thumbnail = file.thumbnail || file.file
				file.thumbnail = file.thumbnail ? xbmc.vfs2uri(file.thumbnail) : 'img/icons/default/DefaultFile.png'
			}

			file.label = filename

			file.details = []
			if (file.lastmodified) file.details.push(moment(file.lastmodified).calendar())
			if (file.mimetype) file.details.push(file.mimetype)
			if (file.size) file.details.push((file.size/1024/1024).toFixed(2) + 'MB')


			file.thumbnailWidth = '50px'

			return file
		}))
		.then(items => { //add up button

			const path = trimFilename(state['path'])

			//don't put an up button on top level directories
			if (path.length <= 0) return items
			
			const splitPath = path.split(slash)
			splitPath.pop()
			const parentPath = joinDirectoryComponents(splitPath, slash)

			items.unshift({
				'link': '#page=Directory&media='+media+'&sortby='+sortby+'&order='+order+'&root='+encodeURIComponent(root)+'&path='+encodeURIComponent(parentPath),
				'label': ' . . ',
				'thumbnail': 'img/icons/default/DefaultFolderBack.png',
				'thumbnailWidth': '50px'
			})

			return items
		})
		.then(items => {

			let splitPath = (path ? path.split(slash) : [])			
			let p = []
			let pathString = ''
			while (splitPath.length > 0) {
				let label = splitPath.shift()
				pathString += label + slash
				if (label)
					p.push({
						'link': '#page=Directory&media='+media+'&sortby='+sortby+'&order='+order+'&root='+encodeURIComponent(root)+'&path='+encodeURIComponent(pathString),
						'label': label
					})
			}
			p.unshift({
				'link': '#page=Directory&media='+media+'&sortby='+sortby+'&order='+order+'&root='+encodeURIComponent(root),
				'label': ''+root,
				'class': 'root'
			})
			p[p.length-1].selected = true


			return {
				'items': items,
				'options': [
					{
						'id': 'path',
						'label': 'Path',
						'items': p
					},
					{
						'id': 'sort',
						'label': 'Sort By',
						'items': [
							{ 'label': 'Name', 'sortby': 'label', 'order': 'ascending' },
							{ 'label': 'Size', 'sortby': 'size', 'order': 'descending' },
							{ 'label': 'Date', 'sortby': 'date', 'order': 'descending' }
						].map(item => ({
								'label': item.label + (sortby === item.sortby ? { 'ascending': ' ↑', 'descending': ' ↓' }[order] : ''),
								'class': sortby === item.sortby ? 'selected' : undefined,
								'link': sortby === item.sortby ?
										'#page=Directory&media='+media+'&sortby='+item.sortby+'&order='+inverseOrder+'&root='+encodeURIComponent(root)+'&path='+encodeURIComponent(pathString) :
										'#page=Directory&media='+media+'&sortby='+item.sortby+'&order='+item.order+'&root='+encodeURIComponent(root)+'&path='+encodeURIComponent(pathString)
						}))
					}
				]
			}
		})
		
	}
}));
