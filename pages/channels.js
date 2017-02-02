import Page from '../js/page'
import { makeJsLink } from '../js/util'
import moment from 'moment'

const mediaToLower = { 'Radio': 'radio', 'TV': 'tv' }

export default (new Page({
	'id': 'Channels',
	'view': 'list',
	'icon': state => state['media'] === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	//'parentState': state => ({ 'page': 'Menu', 'media': state['media'] }),
	'parentState': state => ({ 'page': 'Home' }),
	'data': state => {

		const getChannelGroups =
		xbmc.get({
			'method': 'PVR.GetChannelGroups',
			'params': {
				'channeltype': mediaToLower[state['media']] || 'TV'
			}
		})
		.then(x => {console.log(x); return x})

		let getGroupId = Promise.resolve(+state['groupid'])
		if (state['groupid'] === undefined)  //if there was no groupid specified, display the first group (of the correct type) to the user. (This should be the 'all channels' group?)
			getGroupId = getChannelGroups.then(({ channelgroups=[] }) => {
				if (channelgroups.length < 1) return;  //TODO: there are no channel groups! display a message to the user
				else return channelgroups[0].channelgroupid
			})

		const getChannelGroupDetails = getGroupId.then((groupid) => {

			return xbmc.get({
				'method': 'PVR.GetChannelGroupDetails',
				'params': {
					'channelgroupid': groupid,
					'channels': {
						'properties': [
							"thumbnail", 
							"channeltype", 
							"hidden", 
							"locked", 
							"channel", 
							"lastplayed",
							"broadcastnow",
							"broadcastnext",
							"icon",
							"channelnumber",
							"subchannelnumber",
							"isrecording"
						]
					}
				}
			})

		})
		.then(x => {console.log(x); return x})


		return Promise.all([ getChannelGroups, getChannelGroupDetails ])
		.then(([ { channelgroups=[] }, { channelgroupdetails={} } ]) => ({
			'pageName': { 'radio': 'Radio ', 'tv': 'TV ' }[channelgroupdetails.channeltype] + 'Channels',
			'groups': channelgroups.map((channelgroup={}) => ({
				'label': channelgroup.label,
				'link': '#page=Channel Group&media=' + state['media'] + '&groupid=' + channelgroup.channelgroupid
			})),
			'items': channelgroupdetails.channels.map(channel => ({
				'label': channel.label,
				'details': [
					channel.broadcastnow === undefined ? undefined : channel.broadcastnow.title,
					channel.broadcastnext === undefined ? undefined : moment.utc(channel.broadcastnext.starttime).fromNow() + ': ' + channel.broadcastnext.title
				],
				'class': (channel.locked ? 'locked ' : '') + (channel.hidden ? 'hidden ' : '') + (channel.isrecording ? 'isrecording ' : ''),
				'thumbnail': channel.thumbnail === undefined ? 'img/icons/default/DefaultAddonNone.png' : xbmc.vfs2uri(channel.thumbnail),
				'link': '#page=Channel&media='+state['media']+'&channelid='+channel.channelid + '&groupid=' + channelgroupdetails.channelgroupid,
				'actions': [
					{
						label: '▶',
						link: makeJsLink(`xbmc.Open({ 'item': { 'channelid': ${ channel.channelid } }})`)
					}
				]

			}))
		}))
		.then(x => {console.log(x); return x})

	}
}));