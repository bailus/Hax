"use strict";

pages.add(new Page({
	'id': 'Files',
	'view': 'list',
	'icon': state => 'img/icons/default/DefaultFolder.png',
	'data': state => {
		const media = state.get('media')
		
		const types = [
			{ 'media': 'video', 'label': 'Video' },
			{ 'media': 'music', 'label': 'Music' },
			{ 'media': 'pictures', 'label': 'Pictures' },
			{ 'media': 'files', 'label': 'Files' }
		]

		if (media) types = types.filter(type => type.label == media);

		return Promise.all(types.map(type => xbmc.get({
			'method': 'Files.GetSources',
			'params': { 'media': type.media },
			'cache': true
		})))
		.then(datas => datas.map(data => data.sources || []))
		.then(datas => datas.map(sources => sources.map(source => {
			source.link = '#page=Directory&directory=' + encodeURIComponent(source.file) + '&media=' + source.media
			source.thumbnail = 'img/icons/default/DefaultFolder.png'
			source.thumbnailWidth = '50px'
			return source
		})))
		.then(datas => types.map((type, i) => {
			type.items = datas[i]
			return type
		}))
		.then(items => ({
			title: 'Files',
			items: items
		}))

	}
}));

pages.add(new Page({
	'id': 'Directory',
	'view': 'list',
	'parent': 'Files',
	//'groupby': 'filetype',
	'icon': state => 'img/icons/default/DefaultFolder.png',
	'parentState': state => {
		const m = {
			'video': 'Videos',
			'music': 'Music',
			'pictures': 'Pictures'
		}[state.get('media')]
		return m ? 
			new Map([[ 'page', 'Menu' ],[ 'media', m ]]) :
			new Map([[ 'page', 'Home' ]])
	},
	'data': state => {

		const root = state.get('root')
		const path = state.get('path')
		const media = state.get('media') || ''
		const sortby = state.get('sortby') || 'date'

		let order = state.get('order')
		let inverseOrder = {
			'ascending': 'descending',
			'descending': 'ascending'
		}[order]
		if (inverseOrder === undefined) {
			order = 'descending'
			inverseOrder = 'ascending'
		}


		const pathSplit = path => path.split(new RegExp('[\\\\/]'))
		return xbmc.get({
			method: 'Files.GetDirectory',
			params: {
				'properties': [ 'duration', 'thumbnail', 'file', 'size', 'mimetype', 'lastmodified' ],
				'sort': { 'method': sortby, 'order': order },
				'directory': root + (path || ''),
				'media': media
			}
		})
		.then(result => result.files || [])
		.then(files => files.map(file => {
			let f = pathSplit(file.file)
			let filename = f.pop()

			if (!filename) filename = f.pop()

			if (file.filetype === 'directory') {
				file.link = '#page=Directory&media='+media+'&sortby='+sortby+'&order='+order+'&root='+encodeURIComponent(root)+'&path='+encodeURIComponent((path || '') + '/' + filename)
				file.thumbnail = file.thumbnail ? xbmc.vfs2uri(file.thumbnail) : 'img/icons/default/DefaultFolder.png'
			}
			else {
				var playlistid = file.type === 'audio' ? 0 : file.type === 'video' ? 1 : 2
				file.play = function () {
					if (file.type === 'unknown' || !file.type) file.type = media
					xbmc.Open({ 'item': { 'file': xbmc.vfs2uri(file.file) } })
				}

				if (media === 'pictures')
					file.thumbnail = file.thumbnail || file.file
				file.thumbnail = file.thumbnail ? xbmc.vfs2uri(file.thumbnail) : 'img/icons/default/DefaultFile.png'
			}

			file.label = filename

			file.details = []
			if (file.size) file.details.push((file.size/1024/1024).toFixed(2) + 'MB')
			if (file.mimetype) file.details.push(file.mimetype)
			if (file.lastmodified) file.details.push(file.lastmodified)


			file.thumbnailWidth = '50px'

			return file
		}))
		/*.then(items => { //add back button

			//don't put a back button on top level directories
			if (!path) return items
			
			let parentPath = pathSplit(path)
			parentPath.pop()
			parentPath = parentPath.join('/')

			items.unshift({
				'link': '#page=Directory&media='+media+'&sortby='+sortby+'&order='+order+'&root='+encodeURIComponent(root)+'&path='+encodeURIComponent(parentPath),
				'label': ' . . ',
				'thumbnail': 'img/icons/default/DefaultFolderBack.png',
				'thumbnailWidth': '50px'
			})

			return items
		})*/
		.then(items => {

			let splitPath = (path ? pathSplit(path) : [])			
			let p = []
			let pathString = ''
			while (splitPath.length > 0) {
				let label = splitPath.shift()
				pathString += label + '/'
				if (label)
					p.push({
						'link': '#page=Directory&media='+media+'&sortby='+sortby+'&order='+order+'&root='+encodeURIComponent(root)+'&path='+encodeURIComponent(pathString),
						'label': label
					})
			}
			p.unshift({
				'link': '#page=Directory&media='+media+'&sortby='+sortby+'&order='+order+'&root='+encodeURIComponent(root),
				'label': ''+root
			})
			p[p.length-1].selected = true


			return {
				items: items,
				options: [
					{
						id: 'sort',
						label: 'Sort By',
						items: [
							{ label: 'Name', sortby: 'label', order: 'ascending' },
							{ label: 'Size', sortby: 'size', order: 'descending' },
							{ label: 'Date', sortby: 'date', order: 'descending' },
							{ label: 'File', sortby: 'type', order: 'ascending' }
						].map(item => ({
								label: item.label + (sortby === item.sortby ? { 'ascending': ' ↑', 'descending': ' ↓' }[order] : ''),
								selected: sortby === item.sortby,
								link: sortby === item.sortby ?
										'#page=Directory&media='+media+'&sortby='+item.sortby+'&order='+inverseOrder+'&root='+encodeURIComponent(root)+'&path='+encodeURIComponent(pathString) :
										'#page=Directory&media='+media+'&sortby='+item.sortby+'&order='+item.order+'&root='+encodeURIComponent(root)+'&path='+encodeURIComponent(pathString)
						}))
					},
					{
						id: 'path',
						label: 'Path',
						items: p
					}
				]
			}
		})
		
	}
}));
