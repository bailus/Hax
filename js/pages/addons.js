"use strict";

pages.add(new Page({
	'id': 'Addons',
	'view': 'list',
	'groupby': 'type',
	'data': (resolve, reject) => {

		xbmc.get({
			method: 'Addons.GetAddons',
			params: {
				'properties': [ 'name', 'version', 'summary', 'thumbnail', 'enabled' ]
			},
			cache: true
		})
		.then(result => ({
			title: 'Add-ons',
			items: (result.addons || []).map(addon => ({
				label: addon.name,
				details: [ 'v'+addon.version, addon.enabled ? 'enabled' : 'disabled' ],
				thumbnail: xbmc.vfs2uri(addon.thumbnail),
				link: '#page=Addon&addonid='+addon.addonid,
				type: addon.type
			}))
		}))
		.then(resolve)

		/*.then(result => {
			return Promise.all(result.addons.map(addon => {
				return xbmc.get({
					'method': 'Addons.GetAddonDetails',
					'params': {
						'properties': [ 'name', 'version', 'summary', 'thumbnail' ],
						'addonid': addon.addonid
					},
					'cache': false
				})
				.then(result => result.addon || {})
				.then(addon => ({
					'label': addon.name+' '+addon.version,
					'thumbnail': xbmc.vfs2uri(addon.thumbnail),
					'details': addon.summary,
					'type': addon.type
				}))
			}))
		})*/
			
	}
}));

pages.add(new Page({
	'id': 'Addon',
	'view': 'list',
	'data': (resolve, reject) => {

			const addonid = getHash('addonid')

			xbmc.get({
				'method': 'Addons.GetAddonDetails',
				'params': {
					'properties': [ "name", "version", "summary", "description", "author", "thumbnail", "broken", "enabled" ],
					'addonid': addonid
				},
				'cache': false
			})
			.then(result => result.addon || {})
			.then(addon => ({
				'thumbnail': xbmc.vfs2uri(addon.thumbnail),
				'title': addon.name + ' v' + addon.version,
				'subtitle': addon.summary,
				'author': addon.author,
				'description': addon.description
			}))
		.then(resolve)
	}
}));
