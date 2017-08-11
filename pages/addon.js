import Page from '../js/page'
import { makeJsLink, makeDetail } from '../js/util'

export default (new Page({
	'id': 'Addon',
	'view': 'list',
	'icon': state => 'img/icons/home/addons.png',
	'parentState': state => ({ 'page': 'Home' }),
	'data': state => {

			const addonid = state['addonid']

			const getAddonDetails = xbmc.get({
				'method': 'Addons.GetAddonDetails',
				'params': {
					'properties': [
						"name", 
						"version", 
						"summary", 
						"description", 
						"path", 
						"author", 
						"thumbnail", 
						"disclaimer", 
						"fanart", 
						"dependencies", 
						"broken", 
						"extrainfo", 
						"rating", 
						"enabled"
					],
					'addonid': addonid
				},
				'cache': false
			})

getAddonDetails.then(console.log)
			const formatAddonDetails = getAddonDetails.then(x => {console.log(x); return x})
			.then(({ addon: {
				addonid,
				label,
				name,
				version, 
				summary, 
				description, 
				path, 
				author, 
				thumbnail, 
				disclaimer, 
				fanart, 
				dependencies, 
				broken, 
				extrainfo, 
				rating, 
				votes,
				enabled,
				type
			} }) => ({
				'thumbnail': thumbnail ? xbmc.vfs2uri(thumbnail) : 'img/icons/default/DefaultAddon.png',
				'title': name + ' v' + version,
				'subtitle': author,
				'actions': [
					enabled && {
						'label': 'Run',
						'link': makeJsLink(`xbmc.sendMessage('Addons.ExecuteAddon', { 'addonid': '${ addonid }' })`)
					}
				],
				'details': [
					{
						'class': 'status',
						'name': 'Status',
						'value': [
							broken ? 'Marked as broken' : 'Marked as working' ,
							enabled ? 'Enabled' : 'Disabled'
						]
					},
					rating !== undefined && votes > 0 && {
						'class': 'rating',
						'name': 'Rating',
						'flags': [
							{
								'class': 'starrating',
								'value': Math.round(rating),
								'caption': `(${votes} votes)`
							}
						]
					},
					summary !== undefined && summary.length > 0 && {
						'class': 'summary',
						'name': 'Summary',
						'value': summary
					},
					description !== undefined && description.length > 0 && {
						'class': 'description',
						'name': 'Description',
						'value': description
					},
					type !== undefined && type.length > 0 && {
						'class': 'type',
						'name': 'Type',
						'links': [{
							'label': type,
							'link': '#page=Addons&type='+type
						}]
					},
					extrainfo !== undefined && extrainfo.length > 0 && {
						'class': 'extrainfo',
						'name': 'More Information',
						'value': extrainfo.map(({key,value}) => `${key}: ${value}`)
					},
					disclaimer !== undefined && disclaimer.length > 0 && {
						'class': 'disclaimer',
						'name': 'Disclaimer',
						'value': disclaimer
					},
					dependencies !== undefined && dependencies.length > 0 && {
						'class': 'dependencies',
						'name': 'Dependencies',
						'items': dependencies.map(({
							addonid, optional, version
						}) => ({
							'label': addonid,
							'link': `#page=Addon&addonid=${addonid}`,
							'details': [ version, optional ? 'Optional' : 'Required' ]
						}))
					}
				]
			}))

			return formatAddonDetails
	}
}));