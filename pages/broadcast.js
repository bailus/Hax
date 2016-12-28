import Page from '../js/page'
import { makeJsLink } from '../js/util'

export default (new Page({
	'id': 'Broadcast',
	'view': 'list',
	'icon': state => state['media'] === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png',
	'parentState': state => ({ 'page': 'Channels', 'media': state['media'] }),
	'data': state => {
console.log(+state.broadcastid)
		return xbmc.get({
			method: 'PVR.GetBroadcastDetails',
			params: {
				"broadcastid": +state.broadcastid,
				"properties": [ "title" ]
			}
		})
		.then(({ broadcastdetails }) => ({
			pageName: [ state['media'], 'Broadcast' ].join(' '),
			title: broadcastdetails.label,
			actions: [ {
				label: 'Play',
				thumbnail: 'img/buttons/play.png',
				link: makeJsLink(`xbmc.Open({ 'item': { 'channelid': ${ +state.broadcastid } } })`)
			} ]
		}))

	}
}))