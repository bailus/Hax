import Page from '../js/page'
import { makeJsLink } from '../js/util'

export default (new Page({
	'id': 'Addon',
	'view': 'list',
	'icon': state => 'img/icons/home/addons.png',
	'parentState': state => ({ 'page': 'Home' }),
	'data': state => {

			const addonid = state['addonid']

			return xbmc.get({
				'method': 'Addons.GetAddonDetails',
				'params': {
					'properties': [ "name", "version", "summary", "description", "author", "thumbnail", "broken", "enabled" ],
					'addonid': addonid
				},
				'cache': false
			})
			.then(result => result.addon || {})
			.then(addon => ({
				'thumbnail': addon.thumbnail ? xbmc.vfs2uri(addon.thumbnail) : 'img/icons/default/DefaultAddon.png',
				'title': addon.name + ' v' + addon.version,
				'subtitle': addon.summary,
				'author': addon.author,
				'description': addon.description,
				'actions': [
					addon.enabled && {
						'label': 'Run',
						'link': makeJsLink(`xbmc.sendMessage('Addons.ExecuteAddon', { 'addonid': '${ addonid }' })`)
					},
					{
						'label': addon.enabled ? 'Disable' : 'Enable',
						'link': makeJsLink(`xbmc.sendMessage('Addons.SetAddonEnabled', { 'addonid': '${ addonid }', 'enabled': 'toggle' }); pages.renderPage()`)
					}
				]
			}))
	}
}));