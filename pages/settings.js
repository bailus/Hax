import Page from '../js/page'

const SETTINGS = new Map();

export default (new Page({
	'id': 'Settings',
	'view': 'settings',
	'data': state => {

		return Promise.resolve({
			title: 'Settings',
			items: [
				{
					label: 'Main Menu',
					details: 'Show Icons',
					key: 'main.icons',
					items: [
						{
							label: 'TV Shows',
							key: 'tvshows'
						},
						{
							label: 'Movies',
							key: 'movies'
						},
						{
							label: 'TV',
							key: 'movies'
						},
						{
							label: 'Radio',
							key: 'radio'
						}
					]
				}
			]
		})

	}
})