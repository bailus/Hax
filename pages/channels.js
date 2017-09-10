import Page from '../js/page.js'
import { makeJsLink } from '../js/util.js'
import moment from 'moment'

const mediaToLower = { 'Radio': 'radio', 'TV': 'tv' }

export default (new Page({
	'id': 'Channels',
	'view': 'list',
	'icon': state => state['media'] === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => ({ 'page': 'Home' }),
	'data': state => {

		const getChannelGroups =
		xbmc.get({
			'method': 'PVR.GetChannelGroups',
			'params': {
				'channeltype': mediaToLower[state['media']] || 'TV'
			}
		})

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

		return Promise.all([ getChannelGroups, getChannelGroupDetails, getGroupId ])
		.then(([ { channelgroups=[] }, { channelgroupdetails={} }, groupid ]) => ({
			'pageName': { 'radio': 'Radio ', 'tv': 'TV ' }[channelgroupdetails.channeltype] + 'Channels',
			'groups': channelgroups.map((channelgroup={}) => ({
				'label': channelgroup.label,
				'link': '#page=Channels&media=' + state['media'] + '&groupid=' + channelgroup.channelgroupid,
				'selected': channelgroup.channelgroupid == groupid
			})),
			'items': channelgroupdetails.channels.map(channel => ({
				'label': channel.label,
				'details': [
					channel.broadcastnow === undefined ? undefined : channel.broadcastnow.title,
					channel.broadcastnext === undefined ? undefined : moment.utc(channel.broadcastnext.starttime).fromNow() + ': ' + channel.broadcastnext.title
				],
				'class': [
					channel.hidden ? 'hidden' : undefined,
					channel.locked ? 'locked' : undefined,
					channel.isrecording ? 'recording' : undefined,
					channel.isrecording ? 'selected' : undefined
				].filter(x => x !== undefined).join(', '),
				'thumbnail': xbmc.vfs2uri(channel.thumbnail) || 'img/icons/default/DefaultTVShows.png',
				'link': '#page=Channel&media='+state['media']+'&channelid='+channel.channelid + '&groupid=' + channelgroupdetails.channelgroupid,
				'actions': [
					{
						label: '▶',
						link: makeJsLink(`xbmc.Open({ 'item': { 'channelid': ${ channel.channelid } }})`)
					}
				]

			}))
		}))

	}
}));
