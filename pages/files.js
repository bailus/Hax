import Page from '../js/page'

export default (new Page({
	'id': 'Files',
	'view': 'list',
	'icon': state => 'img/icons/default/DefaultFolder.png',
	'data': state => {
		const media = state['media']
		
		let types = [
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