"use strict";

const mediaToLower = { 'Radio': 'radio', 'TV': 'tv' }

pages.add(new Page({
	'id': 'Channels',
	'view': 'list',
	'icon': state => state.get('media') === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => new Map([[ 'page', 'Menu' ], [ 'media', state.get('media') ]]),
	'data': state => {

		const m = state.get('media')
		const media = mediaToLower[m] === undefined ? [ 'TV', 'Radio' ] : [ m ]

		let nextpage = ({ 'Channel Group': 'Channel Group', 'Guide': 'Guide' })[state.get('nextpage')]
		if (nextpage === undefined) nextpage = 'Channel Group'

		return Promise.all(media.map(type => {
			return xbmc.get({
				'method': 'PVR.GetChannelGroups',
				'params': {
					'channeltype': mediaToLower[type]
				}
			})
			.then(result => result.channelgroups.map(g => {
				g.link = '#page=' + nextpage + '&media=' + state.get('media') + '&groupid=' + g.channelgroupid
				return g
			}))
			.catch(() => [])
			.then(items => ({
				label: type+' '+({ 'Channel Group': 'Channels', 'Guide': 'Guide' })[nextpage],
				items: items
			}))

		}))
		.then(items => (media.length == 1 ? {
			pageName: items[0].label,
			items: items[0].items
		} : {
			items: items
		}))
		.catch(e => { title: e })

	}
}));

pages.add(new Page({
	'id': 'Channel Group',
	'view': 'list',
	'icon': state => state.get('media') === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => new Map([[ 'page', 'Channels' ],[ 'media', state.get('media') ]]),
	'data': state => {

		let groupid =  +state.get('groupid')

		let channelgroupdetails = 
		xbmc.get({
			method: 'PVR.GetChannelGroupDetails',
			params: {
				'channelgroupid': groupid
			}
		})
		.then(data => data.channelgroupdetails || {})

		let channels =
		xbmc.get({
			method: 'PVR.GetChannels',
			params: {
				'properties': [ 'hidden', 'locked', 'thumbnail' ],
				'channelgroupid': groupid
			}
		})
		.then(data => data.channels || {})

		return Promise.all([ channelgroupdetails, channels ])
		.then(([ channelgroupdetails, channels ]) => ({
			title: channelgroupdetails.label || 'Channels',
			items: channels.map(channel => ({
				label: channel.label,
				hidden: channel.hidden,
				locked: channel.locked,
				thumbnail: channel.thumbnail === undefined ? 'img/icons/default/DefaultAddonNone.png' : xbmc.vfs2uri(channel.thumbnail),
				link: '#page=Channel&media='+state.get('media')+'&channelid='+channel.channelid,
				play: () => xbmc.Open({ 'item': { 'channelid': channel.channelid }})
			}))
		}))

	}
}));

pages.add(new Page({
	'id': 'Channel',
	'view': 'list',
	'icon': state => state.get('media') === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => new Map([[ 'page', 'Channels' ],[ 'media', state.get('media') ]]),
	'data': state => {

		let channelid =  +state.get('channelid')

		return xbmc.get({
			method: 'PVR.GetChannelDetails',
			params: {
				'properties': [ "thumbnail", "channeltype", "hidden", "locked", "channel", "lastplayed" ],
				'channelid': channelid
			}
		})
		.then(result => result.channeldetails || {})
		.then(details => ({
			thumbnail: details.thumbnail === undefined ? 'img/icons/default/DefaultAddonNone.png' : xbmc.vfs2uri(details.thumbnail),
			pageName: { 'radio': 'Radio ', 'tv': 'TV ' }[details.channeltype] + 'Channel',
			title: details.label,
			actions: [ {
				label: 'Play',
				thumbnail: 'img/buttons/play.png',
				link: "javascript:(() => { xbmc.Open({ 'item': { 'channelid': "+channelid+" } }) })()"
			} ]
		}))

	}
}));


pages.add(new Page({
	'id': 'Guide',
	'view': 'list',
	'icon': state => state.get('media') === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => new Map([[ 'page', 'Menu' ], [ 'media', state.get('media') ]]),
	'data': state => {
		const now = moment()
		const nowUnix = now.unix()

		let groupid =  +state.get('groupid')


		return xbmc.get({
			method: 'PVR.GetChannels',
			params: {
				'properties': [ 'hidden', 'locked', 'thumbnail' ],
				'channelgroupid': groupid
			},
			cache: true
		})
		.then(({ channels }) => channels.map(channel => ({
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
				.then(({broadcasts}) => broadcasts.map(broadcast => ({
					label: broadcast.label,
					link: '#page=Broadcast&broadcastid=' + broadcast.broadcastid + '&media=' + state.get('media'),
					details: moment(broadcast.endtime).isBefore(now) ?
							[ minutes2string(broadcast.runtime) ] :
							[ moment(broadcast.starttime).format('LT'), minutes2string(broadcast.runtime) ],
					runtime: broadcast.runtime,
					starttime: moment(broadcast.starttime),
					endtime: moment(broadcast.endtime),
					isfinished: moment(broadcast.endtime).isBefore(moment()),
					isactive: broadcast.isactive
				})))
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
						link: "javascript:(() => { xbmc.Open({ 'item': { 'channelid': "+channel.channelid+" } }) })()"
					} ],
					items: items
				}))
			}))
		})
		.then(channels => {
			const startOfToday = moment().startOf('day')
			const endOfToday = moment().endOf('day')

			const day = state.get('day')
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
					link: '#page=Guide&media='+state.get('media')+'&groupid='+state.get('groupid')+'&day='+dUnix,
					timestamp: +dUnix
				}
			})
			groups.unshift({
					label: 'now',
					selected: day === undefined,
					link: '#page=Guide&media='+state.get('media')+'&groupid='+state.get('groupid'),
					timestamp: +nowUnix
			})
			groups.sort((a, b) => (a.timestamp - b.timestamp))

			//filter channels from days that aren't selected
			channels = channels.map(channel => {
				const c = Object.create(channel)
			 	c.items = channel.items.filter(item => (item.endtime.isBetween(startOfDay, endOfDay) || item.starttime.isBetween(startOfDay, endOfDay)))
			 	return c
			})

			//find the first and last episode times
			let starttime = undefined
			let endtime = undefined
			channels.forEach(channel => channel.items.forEach(item => {
				starttime = starttime === undefined ? item.starttime : moment.min(item.starttime, starttime)
				endtime = endtime === undefined ? item.endtime : moment.max(item.endtime, endtime)
			}))

			//calculate the position of each episode
			channels = channels.map(channel => {
				channel.items = channel.items.map(item => {
					item.style = `left: ${(item.starttime.unix() - starttime.unix()) / EPG_WIDTH}px; width: ${((item.endtime.unix() - item.starttime.unix()) / EPG_WIDTH) - EPG_PADDING}px;`
					return item
				})
				return channel
			})

			//create timeline (the list of times at the top of page)
			const start = moment(starttime).startOf('hour')
			const end = moment(endtime).endOf('hour').add(1, 'minutes')
			const timeline = []
			for (let date = moment(start); date.isSameOrBefore(endtime); date.add(15, 'minutes'))
				if (date.isSameOrAfter(starttime))
					timeline.push({
						'label': date.minutes()%60 === 0 ? date.format('hA' + (date.hours()%4 === 0 ? ' dddd' : '')) : ' ',
						'class': [ date.isBefore(now) ? 'past' : 'future', date.minutes()%60 === 0 ? 'major' : 'minor' ].join(', '),
						'style': `left: ${((date.unix() - starttime.unix()) / EPG_WIDTH)}px;`
					})

			if (now.isBetween(starttime, endtime))
				timeline.push({
					'label': ' ',
					'class': 'present',
					'style': `left: ${((now.unix() - starttime.unix()) / EPG_WIDTH)}px;`
				})

			return {
				items: channels,
				options: [{
					'id': 'Day',
					'items': groups
				}],
				timeline: timeline
			}
		})

	}
}))


pages.add(new Page({
	'id': 'Broadcast',
	'view': 'list',
	'icon': state => state.get('media') === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => new Map([[ 'page', 'Channels' ],[ 'media', state.get('media') ]]),
	'data': state => {

		let broadcastid =  +state.get('broadcastid')

		return xbmc.get({
			method: 'PVR.GetBroadcastDetails',
			params: {
				"broadcastid": broadcastid//,
				//"properties": ["thumbnail"]//["title", "plot", "plotoutline", "starttime", "endtime", "runtime", "progress", "progresspercentage", "genre", "episodename", "episodenum", "episodepart", "firstaired", "hastimer", "isactive", "parentalrating", "wasactive", "thumbnail", "rating"]
			}
		})
		.then(({ broadcastdetails }) => ({
			thumbnail: broadcastdetails.thumbnail === undefined ? 'img/icons/default/DefaultAddonNone.png' : xbmc.vfs2uri(broadcastdetails.thumbnail),
			pageName: [ state.get('media'), 'Broadcast' ].join(' '),
			title: broadcastdetails.label,
			actions: [ {
				label: 'Play',
				thumbnail: 'img/buttons/play.png',
				link: "javascript:(() => { xbmc.Open({ 'item': { 'channelid': "+broadcastid+" } }) })()"
			} ]
		}))

	}
}))