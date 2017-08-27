import Page from '../js/page'
import { makeJsLink } from '../js/util'

export default (new Page({
	'id': 'Power',
	'name': 'Power',
	'view': 'list',
	'icon': state => 'img.hax/power.png',
	'parentState': state => ({ 'page': 'Home' }),
	'data': function (state) {

		return xbmc.get({
			'method': 'System.GetProperties',
			'params': {
				'properties': [ 'canshutdown', 'cansuspend', 'canhibernate', 'canreboot' ]
			},
			'cache': true
		})
		.then(properties => ({
			'items': ([
				properties.canshutdown  && {
					'label': 'Shut down',
					'link': makeJsLink(`
						xbmc.get({
							'method': 'System.Shut down',
							'params': {}
						})
					`)
				},
				properties.cansuspend && {
					'label': 'Suspend',
					'link': makeJsLink(`
						xbmc.get({
							'method': 'System.Suspend',
							'params': {}
						})
					`)
				},
				properties.canhibernate && {
					'label': 'Hibernate',
					'link': makeJsLink(`
						xbmc.get({
							'method': 'System.Hibernate',
							'params': {}
						})
					`)
				},
				properties.canreboot && {
					'label': 'Reboot',
					'link': makeJsLink(`
						xbmc.get({
							'method': 'System.Reboot',
							'params': {}
						})
					`)
				},
				{
					'label': 'Eject Optical Drive',
					'link': makeJsLink(`
						xbmc.get({
							'method': 'System.EjectOpticalDrive',
							'params': {}
						})
					`)
				}
			]).filter(x => x !== false)
		}))
			
	}
}));
