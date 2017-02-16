import Page from '../js/page'
import { makeJsLink, minutes2string, seconds2shortstring } from '../js/util'
import moment from 'moment'

export default (new Page({
	'id': 'Broadcast',
	'view': 'list',
	'icon': state => state['media'] === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => ({ 'page': 'Channels', 'media': state['media'] }),
	'data': state => {
		const channelid =  +state['channelid']
		const broadcastid =  +state['broadcastid']
		const media = state['media']

		const getBroadcasts = xbmc.get({
			'method': 'PVR.GetBroadcasts',
			'params': {
				'channelid': channelid,
				'properties': [ 'starttime', 'runtime', 'endtime', 'isactive' ]
			}
		})
		.then(({ broadcasts=[] }) => {
			const now = moment()
			return {
				'broadcasts': broadcasts.map((broadcast) => {
					broadcast.inPast = moment.utc(broadcast.starttime).isBefore(now)
					broadcast.isSelected = +broadcast.broadcastid == broadcastid
					return broadcast
				})
			}
		})

		const getBroadcastDetails = getBroadcasts
		.then(({ broadcasts=[] }) => broadcasts.filter((broadcast={}) => parseInt(broadcast.broadcastid) === parseInt(broadcastid)))
		.then(([ broadcastdetails={} ]) => ({ 'broadcastdetails': broadcastdetails }))

		const getMoreBroadcasts = Promise.all([ getBroadcasts, getBroadcastDetails ])
		.then(([ { broadcasts=[] }, { broadcastdetails={} } ]) => broadcasts.filter((broadcast={}) => (broadcast.label == broadcastdetails.label && !broadcast.inPast)))

		return Promise.all([ getBroadcastDetails, getMoreBroadcasts ])
		.then(([ { broadcastdetails: {
					label, starttime, runtime, endtime, isactive
				} }, moreBroadcasts ]) => ({
			'pageName': [ media, 'Broadcast' ].join(' '),
			'title': label,
			'actions': [ isactive && {
				'label': 'Play',
				'thumbnail': 'img/buttons/play.png',
				'link': makeJsLink(`xbmc.Open({ 'item': { 'channelid': ${ +state.broadcastid } } })`)
			} ],
			'details': [
				{ 'name': 'Starts', 'value': moment.utc(starttime).format('LLLL') + ` (${ moment.utc(starttime).fromNow() })` },
				{ 'name': 'Ends', 'value': moment.utc(endtime).format('LLLL') + (isactive ? ` (${ moment.utc(endtime).fromNow() })` : '') },
				{ 'name': 'Runtime', 'value': minutes2string(runtime) },
				moreBroadcasts !== undefined && moreBroadcasts.length > 0 && {
					'name': 'Broadcasts',
					'items': moreBroadcasts.map(({
						label, broadcastid, starttime, runtime, endtime, isactive, isSelected
					}) => ({
						'label': moment.utc(starttime).format('LLLL'),
						'link': `#page=Broadcast&channelid=${ channelid }&broadcastid=${ broadcastid }&media=${ media }`,
						'details': [ moment.utc(starttime).fromNow(), seconds2shortstring(60*runtime) ],
						'class': (isSelected ? 'selected ' : '') + (moment.utc(endtime).isBefore(moment()) ? 'isbefore ' : '') + (isactive ? 'isactive' : '')
					}))
				}
			]
		}))

	}
}))