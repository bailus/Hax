import Page from '../js/page'

export default (new Page({
	'id': 'Files',
	'view': 'list',
	'icon': state => 'img/icons/default/DefaultFolder.png',
	'parentState': state => ({ 'page': 'Home' }),
	'data': state => {
		const media = state['media']
		
		let types = [
			{ 'media': 'video', 'label': 'Videos' },
			{ 'media': 'music', 'label': 'Music' },
			{ 'media': 'pictures', 'label': 'Pictures' },
			{ 'media': 'files', 'label': 'Files' },
			{ 'media': 'programs', 'label': 'Programs' }
		]

		const filteredTypes = types.filter(type => type.label == media)
		if (filteredTypes.length > 0)
			types = filteredTypes

		return Promise.all(types.map(type => {
			return xbmc.get({
				'method': 'Files.GetSources',
				'params': { 'media': type.media },
				'cache': true
			})
			.then(({sources=[]}) => ({
				'label': type.label,
				'items': sources.map(source => ({ //format sources
					'label': source.label,
					'link': '#page=Directory&root=' + encodeURIComponent(source.file) + '&media=' + type.media,
					'thumbnail': 'img/icons/default/DefaultFolder.png',
					'thumbnailWidth': '50px'
				}))
			}))
		}))
		.then((items=[]) => ({
			'title': 'Files',
			'items': items
		}))

	}
}));
