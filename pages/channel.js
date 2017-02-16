import Page from '../js/page'
import { makeJsLink, minutes2string, sortItems, groupItems } from '../js/util'
import moment from 'moment'

export default (new Page({
	'id': 'Channel',
	'view': 'list',
	'groupby': 'date',
	'icon': state => state['media'] === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => ({ 'page': 'Channels', 'media': state['media'], 'groupid': state['groupid'] }),
	'data': state => {

		const now = moment()

		const channelid = +state['channelid']
		const groupid = +state['groupid'] || 1
		const media = state['media'] || 'TV'

		const getChannelGroupDetails = xbmc.get({
			'method': 'PVR.GetChannelGroupDetails',
			'params': {
				'channelgroupid': groupid
			}
		})

		const getChannel = xbmc.get({
			'method': 'PVR.GetChannelDetails',
			'params': {
				'properties': [ "thumbnail", "channeltype", "hidden", "locked", "lastplayed", "broadcastnow", "broadcastnext", "uniqueid", "icon", "channelnumber", "subchannelnumber", "isrecording" ],
				'channelid': channelid
			}
		})

		const getPrevNext = xbmc.get({
			'method': 'PVR.GetChannels',
			'params': {
				'properties': [ 'hidden', 'locked', 'thumbnail', 'channeltype', 'channelnumber' ],
				'channelgroupid': groupid
			},
			'cache': true
		})
		.then(({ channels={} }) => {
			let o = {}

			channels.forEach((curr, s) => {
				const prev = channels[s-1]
				const next = channels[s+1]
				if (curr.channelid == channelid) {
					o = {
						'previous': prev === undefined ? undefined : {
							'label': `${prev.channelnumber}. ${prev.label}`,
							'link': `#page=Channel&media=${ media }&channelid=${ prev.channelid }&groupid=${ groupid }`,
							'thumbnail': prev.thumbnail ? xbmc.vfs2uri(prev.thumbnail) : 'img/icons/default/DefaultAddonNone.png'
						},
						'next': next === undefined ? undefined : {
							'label': `${next.channelnumber}. ${next.label}`,
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
				'properties': [ 'starttime', 'runtime', 'endtime', 'isactive' ]
			}
		})

		getBroadcasts.then(console.log)

		const nextBroadcasts = getBroadcasts.then(({ broadcasts=[] }) => ({
			'broadcasts': broadcasts.filter(({ endtime }) => moment.utc(endtime).isAfter(now))
		}))

		function displayTime(starttime, index) {
			const x = {
				0: `Started at ${ moment.utc(starttime).format('LT') } (${ moment.utc(starttime).fromNow() })`,
				1: `Starts at ${ moment.utc(starttime).format('LT') }`,
				'default': moment.utc(starttime).format('LT')
			}
			return x[index] || x['default']
		}

		function displayDate(starttime, index) {
			const x = {
				0: `Now`,
				1: `Next (${ moment.utc(starttime).fromNow() })`,
				'default': moment.utc(starttime).calendar(null, {
				    sameDay: '[Today]',
				    nextDay: '[Tomorrow (]dddd[)]',
				    nextWeek: 'dddd',
				    lastDay: '[Yesterday]',
				    lastWeek: '[Last] dddd',
				    sameElse: 'L'
				})
			}
			return x[index] || x['default']
		}

		return Promise.all([ getChannel, getPrevNext, nextBroadcasts, getChannelGroupDetails ])
		.then(([ { channeldetails }, prevNext, { broadcasts=[] }, { channelgroupdetails={} } ]) => ({
			'previous': prevNext.previous,
			'next': prevNext.next,
			'thumbnail': channeldetails.thumbnail ? xbmc.vfs2uri(channeldetails.thumbnail) : 'img/icons/default/DefaultTVShows.png',
			'pageName': { 'radio': 'Radio ', 'tv': 'TV ' }[channeldetails.channeltype] + 'Channel',
			'title': channelgroupdetails.label,
			'titleLink': `#page=Channels&media=${ media }&groupid=${ groupid }`,
			'label': `${channeldetails.channelnumber}. ${channeldetails.label}`,
			'actions': [ {
				'label': 'Play',
				'thumbnail': 'img/buttons/play.png',
				'link': makeJsLink(`xbmc.Open({ 'item': { 'channelid': ${ channelid } } })`)
			} ],
			'details': [
				{ 'name': 'Status', 'value': [
					channeldetails.hidden ? 'Hidden' : undefined,
					channeldetails.locked ? 'Locked' : undefined,
					channeldetails.isrecording ? 'Recording' : 'Not Recording'
				].filter(x => x !== undefined).join(', ') },
				moment.utc(channeldetails.lastplayed) > 0 && { 'name': 'Last Played', 'value': moment.utc(channeldetails.lastplayed).fromNow() },
				{
					'name': 'Broadcasts',
					'items': groupItems(broadcasts.map(({
						label, broadcastid, starttime, runtime, endtime, isactive
					}, index) => ({
						'label': label,
						'link': `#page=Broadcast&channelid=${ channelid }&broadcastid=${ broadcastid }&media=${ media }`,
						'details': [ displayTime(starttime, index), minutes2string(runtime) ],
						'class': (moment.utc(endtime).isBefore(moment()) ? 'isbefore ' : '') + (isactive ? 'isactive' : ''),
						'displayDate': displayDate(starttime, index)
					})), 'displayDate')
				}
			]
		}))

	}
}));