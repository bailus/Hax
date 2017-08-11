import Page from '../js/page'
import { makeJsLink, minutes2string, seconds2shortstring } from '../js/util'
import moment from 'moment'

function makeDetail(page, name, key, value) {
	return value !== undefined && value.length > 0 && {
		'class': key,
		'name': name,
		'links': (Array.isArray(value) ? value : [  ])
				.map(v => ({
					'label': v,
					'link': `#page=${page}&${key}=${v}`
				}))
	}
}

export default (new Page({
	'id': 'Broadcast',
	'view': 'list',
	'icon': state => state['media'] === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => ({ 'page': 'Channels', 'media': state['media'] }),
	'data': state => {
		const channelid =  +state['channelid']
		const broadcastid =  +state['broadcastid']
		const groupid = +state['groupid'] || 1
		const media = state['media']

		const getBroadcasts = xbmc.get({
			'method': 'PVR.GetBroadcasts',
			'params': {
				'channelid': channelid,
				'properties': ["title","plot","plotoutline","starttime","endtime","runtime","progress","progresspercentage","genre","episodename","episodenum","episodepart","firstaired","hastimer","isactive","parentalrating","wasactive","thumbnail","rating","originaltitle","cast","director","writer","year","imdbnumber","hastimerrule","hasrecording","recording","isseries"]
			}
		})
		.then(({ broadcasts=[] }) => {
			const now = moment()
			return {
				'broadcasts': broadcasts.map((broadcast) => {
					broadcast.isSelected = +broadcast.broadcastid == broadcastid
					return broadcast
				})
			}
		})

		const getChannel = xbmc.get({
			'method': 'PVR.GetChannelDetails',
			'params': {
				'properties': [ "thumbnail", "channeltype", "hidden", "locked", "lastplayed", "broadcastnow", "broadcastnext", "uniqueid", "icon", "channelnumber", "subchannelnumber", "isrecording" ],
				'channelid': channelid
			}
		})

		const getChannelGroupDetails = xbmc.get({
			'method': 'PVR.GetChannelGroupDetails',
			'params': {
				'channelgroupid': groupid
			}
		})

		const getBroadcastDetails = getBroadcasts
		.then(({ broadcasts=[] }) => broadcasts.filter((broadcast={}) => parseInt(broadcast.broadcastid) === parseInt(broadcastid)))
		.then(([ broadcastdetails={} ]) => ({ 'broadcastdetails': broadcastdetails }))

		const getMoreBroadcasts = Promise.all([ getBroadcasts, getBroadcastDetails ])
		.then(([ { broadcasts=[] }, { broadcastdetails={} } ]) => broadcasts.filter((broadcast={}) => (broadcast.label == broadcastdetails.label && !broadcast.wasactive)))

		return Promise.all([ getBroadcastDetails, getMoreBroadcasts, getChannel, getChannelGroupDetails ])
		.then(([ { broadcastdetails: {
					label,title,plot,plotoutline,starttime,endtime,runtime,progress,progresspercentage,genre,episodename,episodenum,episodepart,firstaired,hastimer,isactive,parentalrating,wasactive,thumbnail,rating,originaltitle,cast,director,writer,year,imdbnumber,hastimerrule,hasrecording,recording,isseries
				} }, moreBroadcasts, { channeldetails }, { channelgroupdetails } ]) => ({
			'pageName': [ media, 'Broadcast' ].join(' '),
			'title': channelgroupdetails.label,
			'titleLink': `#page=Channels&media=${ media }&groupid=${ groupid }`,
			'subtitle': channeldetails.label,
			'subtitleLink': `#page=Channel&media=TV&channelid=${channelid}&groupid=${groupid}`,
			'label': label,
			'subLabel': (isactive || wasactive ? 'Started' : 'Starts') + ' ' + moment.utc(starttime).fromNow(),
			'thumbnail': xbmc.vfs2uri(thumbnail) || xbmc.vfs2uri(channeldetails.thumbnail) || 'img/icons/default/DefaultTVShows.png',
			'actions': [ isactive && {
				'label': 'Play',
				'thumbnail': 'img/buttons/play.png',
				'link': makeJsLink(`xbmc.Open({ 'item': { 'channelid': ${ +state.broadcastid } } })`)
			} ],
			'details': [
				{ 'name': 'Status', 'value': [
					isactive ? 'Active' : undefined,
					hasrecording ? 'Has Recording' : undefined,
					hastimer ? 'Has Timer' : undefined,
					hastimerrule ? 'Has Timer Rule' : undefined
				].filter(x => x !== undefined).join(', ') },
				isseries && {
					'name': 'Episode',
					'label': `${episodenum}.${episodepart} ${episodename}`
				},
				plotoutline !== undefined && plotoutline.length > 0 && plotoutline != label && {
					'class': 'tagline',
					'name': 'Plot Outline',
					'value': plotoutline
				},
				rating !== undefined && rating >= 0 && {
					'class': 'rating',
					'name': 'Rating',
					'flags': [
						{
							'class': 'starrating',
							'value': Math.round(rating)
						}
					]
				},
				parentalrating !== undefined && parentalrating.length > 0 && {
					'class': 'mpaa',
					'name': 'Parental Rating',
					'value': parentalrating
				},
				plot !== undefined && plot.length > 0 && {
					'class': 'plot',
					'name': 'Plot',
					'value': plot
				},
				{ 'name': 'Starts', 'value': moment.utc(starttime).format('LLLL') },
				runtime !== undefined && runtime > 0 && {
					'class': 'runtime',
					'name': 'Runtime',
					'value': moment.duration(runtime, 'minutes').humanize()
				},
				makeDetail(undefined, 'Genre', 'genre', genre),
				moreBroadcasts !== undefined && moreBroadcasts.length > 0 && {
					'name': 'Broadcasts',
					'items': moreBroadcasts.map(({
						label, broadcastid, starttime, runtime, endtime, isactive, isSelected
					}) => ({
						'label': moment.utc(starttime).fromNow(),
						'link': `#page=Broadcast&channelid=${ channelid }&broadcastid=${ broadcastid }&media=${ media }`,
						'details': [ moment.utc(starttime).format('LLLL'), seconds2shortstring(60*runtime) ],
						'class': (isSelected ? 'selected ' : '') + (moment.utc(endtime).isBefore(moment()) ? 'isbefore ' : '') + (isactive ? 'isactive' : '')
					}))
				}
			]
		}))

	}
}))