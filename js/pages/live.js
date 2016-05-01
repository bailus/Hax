"use strict";

pages.add(new Page({
	'id': 'Live',
	'view': 'list',
	'icon': state => state.get('media') === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => new Map([[ 'page', 'Home' ]]),
	'data': state => {

		const m = state.get('media')
		const mediaToName = { 'radio': 'Radio', 'tv': 'Live TV' }
		const media = mediaToName[m] === undefined ? [ 'tv', 'radio' ] : [ m ]

		return Promise.all(media.map(type => {
			return xbmc.get({
				'method': 'PVR.GetChannelGroups',
				'params': {
					'channeltype': type.toLowerCase()
				}
			})
			.then(result => result.channelgroups.map(g => {
				g.link = '#page=Channels' + '&media=' + state.get('media') + '&groupid=' + g.channelgroupid
				return g
			}))
			.catch(() => [])
			.then(items => ({
				label: mediaToName[type],
				items: items
			}))

		}))
		.then(items => (media.length == 1 ? {
			pageName: items[0].label,
			items: items[0].items
		} : {
			items: items
		}))

	}
}));

pages.add(new Page({
	'id': 'Channels',
	'view': 'list',
	'icon': state => state.get('media') === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => new Map([[ 'page', 'Live' ],[ 'media', state.get('media') ]]),
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
			pageName: { 'radio': 'Radio ', 'tv': 'TV ' }[channelgroupdetails.channeltype] + 'Channels',
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
	'parentState': state => new Map([[ 'page', 'Live' ],[ 'media', state.get('media') ]]),
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
