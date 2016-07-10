import Page from '../js/page'
import { makeJsLink } from '../js/util'

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
				'properties': [ "thumbnail", "channeltype", "hidden", "locked", "channel", "lastplayed" ],
				'channelid': channelid
			}
		})
		.then(result => result.channeldetails || {})
		.then(details => ({
			thumbnail: details.thumbnail === undefined ? 'img/icons/default/DefaultAddonNone.png' : xbmc.vfs2uri(details.thumbnail),
			pageName: { 'radio': 'Radio ', 'tv': 'TV ' }[details.channeltype] + 'Channel',
			title: details.label,
			actions: [ {
				label: 'Play',
				thumbnail: 'img/buttons/play.png',
				link: makeJsLink(`xbmc.Open({ 'item': { 'channelid': ${ channelid } } })`)
			} ]
		}))

	}
}));