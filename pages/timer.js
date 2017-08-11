import Page from '../js/page'
import Filter from '../js/xbmcFilter'

export default (new Page({
	'id': 'Timer',
	'view': 'list',
	'icon': state => state['media'] === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => ({ 'page': 'Timers', 'media': state['media'] }),
	'data': function (state) {

		return xbmc.get({
			method: 'PVR.GetTimerDetails',
			params: {
				'timerid': +state.id,
				'properties': [ 'channelid', 'directory', 'endanytime', 'endmargin', 'endtime', 'epgsearchstring', 'epguid', 'file', 'firstday', 'fulltextepgsearch', 'ismanual', 'isradio', 'isreadonly', 'istimerrule', 'lifetime', 'maxrecordings', 'preventduplicateepisodes', 'priority', 'recordinggroup', 'runtime', 'startanytime', 'startmargin', 'starttime', 'state', 'summary', 'title', 'weekdays' ]
			},
			cache: true
		})
		.then(x => { console.log(x); return x })
		.then(({ timerdetails: timerdetails } = { timerdetails: {} }) => ({
			title: timerdetails.title || 'Timer',
			subtitle: timerdetails.summary,
			details: [
				{ 'name': 'State', 'value': timerdetails.state },
				{ 'name': 'Start Time', 'value': timerdetails.starttime },
				{ 'name': 'End Time', 'value': timerdetails.endtime },
				{
					'name': 'Channel',
					'value': timerdetails.channelid,
					'link': '#page=Channel&channelid='+timerdetails.channelid+'&media='+state.media,
				}
			]
		}))

	}
}));