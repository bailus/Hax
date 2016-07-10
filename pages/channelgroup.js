import Page from '../js/page'

export default (new Page({
	'id': 'Channel Group',
	'view': 'list',
	'icon': state => state['media'] === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => ({ 'page': 'Channels', 'media': state['media'] }),
	'data': state => {

		let groupid =  +state['groupid']

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
				link: '#page=Channel&media='+state['media']+'&channelid='+channel.channelid,
				play: () => xbmc.Open({ 'item': { 'channelid': channel.channelid }})
			}))
		}))

	}
}));