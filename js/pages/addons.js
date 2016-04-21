pages.add(new Page({
	'id': 'Addons',
	'view': 'list',
	'groupby': 'type',
	'data': (resolve, reject) => {

		xbmc.GetAddons()
		.then(data => data.addons || [])
		.then(addons => {
			return Promise.all(addons.map(addon => {
				return xbmc.GetAddonDetails({ 'addonid': addon.addonid })
					.then(data => data.addon || {})
					.then(addon => ({
						'label': addon.name+' '+addon.version,
						'thumbnail': xbmc.vfs2uri(addon.thumbnail),
						'details': addon.summary,
						'type': addon.type
					}))
			}))
		})
		.then(items => ({
			title: 'Add-ons',
			items: items
		}))
		.then(resolve)
			
	}
}));
