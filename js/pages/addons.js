"use strict";

pages.add(new Page({
	'id': 'Addons',
	'name': 'Add-ons',
	'view': 'list',
	'groupby': 'type',
	'icon': state => 'img/icons/home/addons.png',
	'parentState': state => new Map([[ 'page', 'Home' ]]),
	'data': state => {

		return xbmc.get({
			method: 'Addons.GetAddons',
			params: {
				'properties': [ 'name', 'version', 'summary', 'thumbnail', 'enabled' ]
			},
			cache: true
		})
		.then(result => ({
			items: (result.addons || []).map(addon => ({
				label: addon.name,
				details: [ 'v'+addon.version, addon.enabled ? 'enabled' : 'disabled' ],
				thumbnail: addon.thumbnail ? xbmc.vfs2uri(addon.thumbnail) : 'img/icons/default/DefaultAddon.png',
				link: '#page=Addon&addonid='+addon.addonid,
				type: addon.type
			}))
		}))
			
	}
}));

pages.add(new Page({
	'id': 'Addon',
	'view': 'list',
	'icon': state => 'img/icons/home/addons.png',
	'parentState': state => new Map([[ 'page', 'Home' ]]),
	'data': state => {

			const addonid = state.get('addonid')

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
						'link': "javascript:( () => { xbmc.sendMessage('Addons.ExecuteAddon', { 'addonid': '"+addonid+"' }) } )()"
					},
					{
						'label': addon.enabled ? 'Disable' : 'Enable',
						'link': "javascript:( () => { xbmc.sendMessage('Addons.SetAddonEnabled', { 'addonid': '"+addonid+"', 'enabled': 'toggle' }); pages.renderPage() } )()"
					}
				]
			}))
	}
}));
