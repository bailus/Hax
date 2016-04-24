

pages.add(new Page({
	'id': 'Files',
	'view': 'list',
	'data': (resolve, reject) => {
		let media = getHash('media')
		
		let types = [
			{ 'media': 'video', 'label': 'Video' },
			{ 'media': 'music', 'label': 'Music' },
			{ 'media': 'pictures', 'label': 'Pictures' },
			{ 'media': 'files', 'label': 'Files' }
		]

		if (media) types = types.filter(type => type.label == media);

		Promise.all(types.map(type => xbmc.GetSources({ 'media': type.media })))
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
		.then(resolve)

	}
}));

pages.add(new Page({
	'id': 'Directory',
	'view': 'list',
	'parent': 'Files',
	'data': (resolve, reject) => {

		let directory = getHash('directory')
		//TODO: reject if no directory
		let media = getHash('media') || ''
		let pathSplit = path => path.split(new RegExp('[\\\\/]'))
		
		xbmc.sendMessage('Files.GetDirectory', {
			'properties': [ 'duration', 'thumbnail', 'file', 'size', 'mimetype' ],
			'sort': { 'method': 'file', 'order': 'ascending' },
			'directory': directory,
			'media': media
		})
		//xbmc.GetDirectory({ 'directory': directory, 'media': media })
		.then(data => (data.result || {}).files || [])
		.then(files => files.map(file => {
			var f = pathSplit(file.file),
			  filename = f.pop()

			if (file.filetype === 'directory') {
				file.link = '#page=Directory&directory='+encodeURIComponent(file.file)+'&media='+getHash('media')
				file.thumbnail = file.thumbnail ? xbmc.vfs2uri(file.thumbnail) : 'img/icons/default/DefaultFolder.png'
			}
			else {
				var playlistid = file.type === 'audio' ? 0 : file.type === 'video' ? 1 : 2
				file.play = function () {
					if (file.type === 'unknown' || !file.type) file.type = getHash('media')
					xbmc.Open({ 'item': { 'file': xbmc.vfs2uri(file.file) } })
				}
				file.thumbnail = file.thumbnail ? xbmc.vfs2uri(file.thumbnail) : 'img/icons/default/DefaultFile.png'
			}

			if (!filename) filename = f.pop()
			file.label = filename

			file.details = []
			if (file.size) file.details.push((file.size/1024/1024).toFixed(2) + 'MB')
			if (file.mimetype) file.details.push(file.mimetype)


			file.thumbnailWidth = '50px'

			return file
		}))
		.then(items => { //add back button

			//TODO: don't put a back button on top level directories

			let path = pathSplit(directory)
			if (!path.pop()) path.pop() //remove the last part of the current directory
			let back = path.join('/')

			if (path.length > 2) items.unshift({
				'link': '#page=Directory&directory='+back+'&media='+getHash('media'),
				'label': ' . . ',
				'thumbnail': 'img/icons/default/DefaultFolderBack.png',
				'thumbnailWidth': '50px'
			})

			return items
		})
		.then(items => ({
				title: 'Files',
				subtitle: directory.substring(0,12) === 'multipath://' ? decodeURIComponent(directory.substring(12, directory.length-1)) : directory,
				items: items
		}))
		.then(resolve)
		
	}
}));
