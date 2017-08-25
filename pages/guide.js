import Page from '../js/page'
import { minutes2string, makeJsLink } from '../js/util'
import moment from 'moment'

export default (new Page({
	'id': 'Guide',
	'view': 'list',
	'icon': state => state['media'] === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => ({ 'page': 'Menu', 'media': state['media'] }),
	'data': state => {
		const now = moment.utc()
		const nowUnix = now.unix()

		let groupid =  +state['groupid']


		return xbmc.get({
			method: 'PVR.GetChannels',
			params: {
				'properties': [ 'hidden', 'locked', 'thumbnail' ],
				'channelgroupid': groupid
			},
			cache: true
		})
		.then(({ channels: channels } = { channels: [] }) => channels.map(channel => ({
			channelid: channel.channelid,
			label: channel.label,
			thumbnail: xbmc.vfs2uri(channel.thumbnail),
			itemsP: xbmc.get({
					method: 'PVR.GetBroadcasts',
					params: {
						channelid: channel.channelid,
						properties: [ 'starttime', 'runtime', 'endtime', 'isactive' ]
					},
					cache: true
				})
				.then(({ broadcasts: broadcasts } = { broadcasts: [] }) => broadcasts.map(broadcast => ({
					label: broadcast.label,
					link: '#page=Broadcast&broadcastid=' + broadcast.broadcastid + '&media=' + state['media'],
					details: [ moment.utc(broadcast.starttime).local().format('LT') ],
					runtime: broadcast.runtime,
					starttime: moment.utc(broadcast.starttime),
					stime: moment.utc(broadcast.starttime),
					endtime: moment.utc(broadcast.endtime),
					isfinished: moment.utc(broadcast.endtime).isBefore(moment()),
					isactive: broadcast.isactive
				})))
				.catch(x => ([]))
		})))
		.then(channels => {
			return Promise.all(channels.map(channel => {
				return channel.itemsP
				.then(items => ({
					label: channel.label,
					thumbnail: channel.thumbnail === undefined ? 'img/icons/default/DefaultTVShows.png' : channel.thumbnail,
					actions: [ {
						label: 'Play '+channel.label,
						thumbnail: 'img/buttons/play.png',
						link: makeJsLink(`xbmc.Open({ 'item': { 'channelid': (${ channel.channelid }) } })`)
					} ],
					items: items
				}))
			}))
		})
		.then(channels => {
			const startOfToday = moment().startOf('day')
			const endOfToday = moment().endOf('day')

			const day = state['day']
			let startOfDay = undefined
			let endOfDay = undefined
			if (day === undefined) {
				startOfDay = moment(now).subtract(2, 'hours')
				endOfDay = startOfDay.clone().add(1, 'days')
			}
			else {
				startOfDay = moment.unix(day).startOf('day')
				endOfDay = startOfDay.clone().endOf('day')
			}
			
			//create the list of groups
			const groupSet = new Set()
			channels.forEach(({ items }) => items.forEach(broadcast => {
				const startday = moment(broadcast.starttime).startOf('day')
				const endday = moment(broadcast.endtime).startOf('day')
				groupSet.add(startday.unix())
				groupSet.add(endday.unix())
			}))
			const groups = Array.from(groupSet).map(dUnix => {
				const d = moment.unix(dUnix)
				d.startOf('day')
				return {
					label:  d.isSame(startOfToday) ? 'today' : d.from(startOfToday),
					selected: +day === +dUnix,
					link: '#page=Guide&media='+state['media']+'&groupid='+state['groupid']+'&day='+dUnix,
					timestamp: +dUnix
				}
			})
			groups.unshift({
					label: 'now',
					selected: day === undefined,
					link: '#page=Guide&media='+state['media']+'&groupid='+state['groupid'],
					timestamp: +nowUnix
			})
			groups.sort((a, b) => (a.timestamp - b.timestamp))

			//filter channels from days that aren't selected
			channels = channels.map(channel => {
				const c = Object.create(channel)
				if (Array.isArray(channel.items))
			 		c.items = channel.items.filter(item => (item.endtime.isBetween(startOfDay, endOfDay) || item.starttime.isBetween(startOfDay, endOfDay)))
			 	else
			 		c.items = []
			 	return c
			})

			//find the first and last episode times
			/*let starttime = undefined
			let endtime = undefined
			channels.forEach(channel => channel.items.forEach(item => {
				starttime = starttime === undefined ? item.starttime : moment.min(item.starttime, starttime)
				endtime = endtime === undefined ? item.endtime : moment.max(item.endtime, endtime)
			}))*/
			const starttime = startOfDay
			const endtime = endOfDay

			//calculate the position of each episode
			channels = channels.map(channel => {
				if (Array.isArray(channel.items)) channel.items = channel.items.map(item => {
					const stime = moment.max(starttime, item.starttime)
					item.style = `left: ${(stime.unix() - starttime.unix()) / advancedSettings.epg.width}px; width: ${((item.endtime.unix() - stime.unix()) / advancedSettings.epg.width) - advancedSettings.epg.padding}px;`
					return item
				})
				return channel
			})

			//create timeline (the list of times at the top of page)
			const start = moment.utc(starttime).local().startOf('hour')
			const end = moment.utc(endtime).local().endOf('hour').add(1, 'minutes')
			const timeline = []
			for (let date = moment(start); date.isSameOrBefore(endtime); date.add(15, 'minutes'))
				if (date.isSameOrAfter(starttime))
					timeline.push({
						'label': date.minutes()%60 === 0 ? date.format('hA' + (date.hours()%4 === 0 ? ' dddd' : '')) : ' ',
						'class': [ date.isBefore(now) ? 'past' : 'future', date.minutes()%60 === 0 ? 'major' : 'minor' ].join(' '),
						'style': `left: ${((date.unix() - starttime.unix()) / advancedSettings.epg.width)}px;`
					})

			if (now.isBetween(starttime, endtime))
				timeline.push({
					'label': ' ',
					'class': 'present',
					'style': `left: ${((now.unix() - starttime.unix()) / advancedSettings.epg.width)}px;`
				})

			return {
				items: channels,
				/*options: [{
					'id': 'Day',
					'items': groups
				}],*/
				groups: groups,
				timeline: timeline
			}
		})

	}
}))
