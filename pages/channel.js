import Page from '../js/page'
import { makeJsLink } from '../js/util'
import moment from 'moment'

export default (new Page({
	'id': 'Channel',
	'view': 'list',
	'icon': state => state['media'] === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => ({ 'page': 'Channels', 'media': state['media'], 'groupid': state['groupid'] }),
	'data': state => {

		const channelid =  +state['channelid']
		const groupid =  +state['groupid'] || 1
		const media = state['media'] || 'TV'

		const getChannel = xbmc.get({
			method: 'PVR.GetChannelDetails',
			params: {
				'properties': [ "thumbnail", "channeltype", "hidden", "locked", "lastplayed", "broadcastnow", "broadcastnext", "uniqueid", "icon", "channelnumber", "subchannelnumber", "isrecording" ],
				'channelid': channelid
			}
		})

		const getPrevNext = xbmc.get({
			method: 'PVR.GetChannels',
			params: {
				'properties': [ 'hidden', 'locked', 'thumbnail', 'channeltype', 'channelnumber' ],
				'channelgroupid': groupid
			}
		})
		.then(({ channels={} }) => {
			let o = {}

			channels.forEach((curr, s) => {
				const prev = channels[s-1]
				const next = channels[s+1]
				if (curr.channelid == channelid) {
					o = {
						'previous': prev === undefined ? undefined : {
							'label': `${prev.label} (${prev.channeltype + ' ' + prev.channelnumber})`,
							'link': `#page=Channel&media=${ media }&channelid=${ prev.channelid }&groupid=${ groupid }`,
							'thumbnail': prev.thumbnail ? xbmc.vfs2uri(prev.thumbnail) : 'img/icons/default/DefaultAddonNone.png'
						},
						'next': next === undefined ? undefined : {
							'label': `${next.label} (${next.channeltype + ' ' + next.channelnumber})`,
							'link': `#page=Channel&media=${ media }&channelid=${ next.channelid }&groupid=${ groupid }`,
							'thumbnail': next.thumbnail ? xbmc.vfs2uri(next.thumbnail) : 'img/icons/default/DefaultAddonNone.png'
						}
					}
				}
			})

			return o
		})

		const getBroadcasts = xbmc.get({
			'method': 'PVR.GetBroadcasts',
			'params': {
				'channelid': channelid,
				'properties': [ 'starttime', 'runtime', 'endtime', 'isactive' ],
				'limits': {
					'end': 10
				}
			},
			'cache': true
		})

		return Promise.all([ getChannel, getPrevNext, getBroadcasts ])
		.then(([ { channeldetails }, prevNext, { broadcasts=[] } ]) => ({
			'previous': prevNext.previous,
			'next': prevNext.next,
			'thumbnail': channeldetails.thumbnail ? xbmc.vfs2uri(channeldetails.thumbnail) : 'img/icons/default/DefaultAddonNone.png',
			'pageName': { 'radio': 'Radio ', 'tv': 'TV ' }[channeldetails.channeltype] + 'Channel',
			'title': channeldetails.label,
			'subtitle': channeldetails.channeltype + ' ' + channeldetails.channelnumber/* + ' [' + (channeldetails.subchannelnumber <= 0 ? '' : 'subchannel: ' + channeldetails.subchannelnumber + ' ') + 'id: ' + channeldetails.uniqueid + ']'*/,
			'actions': [ {
				'label': 'Play',
				'thumbnail': 'img/buttons/play.png',
				'link': makeJsLink(`xbmc.Open({ 'item': { 'channelid': ${ channelid } } })`)
			} ],
			'details': [
				{ 'name': 'Status', 'value': [ channeldetails.hidden ? 'Hidden' : undefined, channeldetails.locked ? 'Locked' : undefined, channeldetails.isrecording ? 'Recording' : undefined ].filter(x => x !== undefined).join(', ') },
				{ 'name': 'Last Played', 'value': moment.utc(channeldetails.lastplayed).fromNow() },
				'channeldetails'.broadcastnow === undefined ? undefined : {
					'name': 'Now (started ' + moment.utc(channeldetails.broadcastnow.starttime).fromNow() + ')',
					'value': channeldetails.broadcastnow.title
				},
				'channeldetails'.broadcastnext === undefined ? undefined : {
					'name': 'Next (starts ' + moment.utc(channeldetails.broadcastnext.starttime).fromNow() + ')',
					'value': channeldetails.broadcastnext.title
				},
				{
					'name': 'Broadcasts',
					'items': broadcasts.map(broadcast => ({
						'label': broadcast.label,
						'link': '#page=Broadcast&broadcastid=' + broadcast.broadcastid + '&media=' + state['media'],
						'details': [ moment.utc(broadcast.starttime).calendar(), moment.duration(broadcast.runtime, 'minutes').humanize() ],
						'class': (moment.utc(broadcast.endtime).isBefore(moment()) ? 'isbefore ' : '') + (broadcast.isactive ? 'isactive' : '')
					}))
				}
			]
		}))

	}
}));