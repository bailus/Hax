pages.add(new Page({
	'id': 'Live',
	'view': 'list',
	'data': (resolve, reject) => {

		let media = getHash('media')
		if (media !== 'TV' && media !== 'Radio')
			media = [ 'TV', 'Radio' ]
		else media = [ media ]

		Promise.all(media.map(type => {

			return xbmc.GetChannelGroups({ 'channeltype': type.toLowerCase() })
			.then(result => result.channelgroups || [])
			.then(channelgroups => channelgroups.map(g => {
				g.link = '#page=Channels&id='+g.channelgroupid
				return g
			}))
			.then(items => ({
				label: type,
				items: items
			}))

		}))
		.then(items => (media.length == 1 ? {
			title: items[0].label,
			items: items[0].items
		} : {
			title: 'Live',
			items: items
		}))
		.then(resolve)

	}
}));

pages.add(new Page({
	'id': 'Channels',
	'view': 'list',
	'data': (resolve, reject) => {

		let groupid =  +getHash('id')

		let channelgroupdetails = 
		xbmc.GetChannelGroupDetails({ 'channelgroupid': groupid })
		.then(data => data.channelgroupdetails || {})

		let channels =
		xbmc.GetChannels({ 'channelgroupid': groupid })
		.then(data => data.channels || {})

		Promise.all([ channelgroupdetails, channels ])
		.then(([ channelgroupdetails, channels ]) => ({
			title: channelgroupdetails.label || 'Channels',
			items: channels.map(channel => ({
				label: channel.label,
				hidden: channel.hidden,
				locked: channel.locked,
				thumbnail: xbmc.vfs2uri(channel.thumbnail),
				play: () => xbmc.Open({ 'item': { 'channelid': channel.channelid }})
			}))
		}))
		.then(resolve)

	}
}));
