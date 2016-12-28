import Page from '../js/page'
import { makeJsLink } from '../js/util'
import moment from 'moment'

export default (new Page({
	'id': 'Channel',
	'view': 'list',
	'icon': state => state['media'] === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => ({ 'page': 'Channels', 'media': state['media'] }),
	'data': state => {

		let channelid =  +state['channelid']

		return xbmc.get({
			method: 'PVR.GetChannelDetails',
			params: {
				'properties': [ "thumbnail", "channeltype", "hidden", "locked", "lastplayed", "broadcastnow", "broadcastnext", "uniqueid", "icon", "channelnumber", "subchannelnumber", "isrecording" ],
				'channelid': channelid
			}
		})
		.then(x => { console.log(x); return x })
		.then(({ channeldetails: channeldetails } = { channeldetails: {} }) => ({
			thumbnail: channeldetails.thumbnail === undefined ? channeldetails.icon === undefined ? 'img/icons/default/DefaultAddonNone.png' : xbmc.vfs2uri(channeldetails.icon) : xbmc.vfs2uri(channeldetails.thumbnail),
			pageName: { 'radio': 'Radio ', 'tv': 'TV ' }[channeldetails.channeltype] + 'Channel',
			title: channeldetails.label,
			subtitle: channeldetails.channeltype + ' ' + channeldetails.channelnumber/* + ' [' + (channeldetails.subchannelnumber <= 0 ? '' : 'subchannel: ' + channeldetails.subchannelnumber + ' ') + 'id: ' + channeldetails.uniqueid + ']'*/,
			actions: [ {
				label: 'Play',
				thumbnail: 'img/buttons/play.png',
				link: makeJsLink(`xbmc.Open({ 'item': { 'channelid': ${ channelid } } })`)
			} ],
			details: [
				{ 'name': 'Status', 'value': [ channeldetails.hidden ? 'Hidden' : undefined, channeldetails.locked ? 'Locked' : undefined, channeldetails.isrecording ? 'Recording' : undefined ].filter(x => x !== undefined).join(', ') },
				{ 'name': 'Last Played', 'value': moment.utc(channeldetails.lastplayed).fromNow() },
				channeldetails.broadcastnow === undefined ? undefined : { 'name': 'Now (started ' + moment.utc(channeldetails.broadcastnow.starttime).fromNow() + ')', 'value': channeldetails.broadcastnow.title },
				channeldetails.broadcastnext === undefined ? undefined : { 'name': 'Next (starts ' + moment.utc(channeldetails.broadcastnext.starttime).fromNow() + ')', 'value': channeldetails.broadcastnext.title }
			]
		}))

	}
}));