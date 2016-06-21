import Page from '../js/page'

export default (new Page({
	'id': 'Addons',
	'name': 'Add-ons',
	'view': 'list',
	'groupby': 'type',
	'icon': state => 'img/icons/home/addons.png',
	'parentState': state => new Map([[ 'page', 'Home' ]]),
	'data': function (state) {

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