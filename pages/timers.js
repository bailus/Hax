import Page from '../js/page'
import Filter from '../js/xbmcFilter'

export default (new Page({
	'id': 'Timers',
	'view': 'list',
	'icon': state => state['media'] === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => ({ 'page': 'Menu', 'media': state['media'] }),
	'data': function (state) {

		return xbmc.get({
			method: 'PVR.GetTimers',
			cache: true,
			params: {
				'properties': [ 'channelid', 'isradio', 'state', 'summary', 'title' ]
			}
		})
		.then(x => { console.log(x); return x })
		.then(({ timers: timers } = { timers: [] }) => ({
			title: 'Timers',
			items: timers.map(timer => ({
				label: timer.label,
				details: timer.summary,
				link: '#page=Timer&id='+timer.timerid+'&media='+state.media
			}))
		}))

	}
}));