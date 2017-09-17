import Progress from './progress.js'
import { seconds2string, makeJsLink, seconds2shortstring } from './util.js'
import _ from 'lodash'

const zip = _.zip

export default (function () {
"use strict";


	let progress = undefined

	function timeObjToSeconds (o) {
		return ((((o.hours*60) + o.minutes)*60) + o.seconds)+(o.milliseconds/1e3);
	}

	const runIfChanged = func => cache => string => {
		if (cache.string != string) { //check javascript cache to avoid unnecessary dom calls
			func(string)
			cache.string = string
		}
	}
	const setTextIfChanged = elems => runIfChanged(string => { 
		Array.prototype.forEach.call(elems, elem => { elem.innerHTML = string })
	})

	function renderPlayer(player) {
		var slider, volume, data

		function makeButton(o) {
			return {
				'label': o.text,
				'class': o.action,
				'link': makeJsLink(`xbmc.get({ 'method': 'Input.ExecuteAction', 'params': { 'action': '${ o.action }' } })`)
			}
		}

		//construct data
		data = {
			'buttons': [
				{ 'label': 'Info', class: 'expand infoButtons', 'buttons': [
					//makeButton({ 'text': '', 'action':'' }),
					makeButton({ 'text': 'Rotate Counter-clockwise', 'action':'rotateccw' }),
					makeButton({ 'text': 'Rotate Clockwise', 'action':'rotate' }),
					{ 'class': 'spacer' },
					makeButton({ 'text': 'Aspect Ratio', 'action':'aspectratio' }),
					makeButton({ 'text': 'Stereo Mode', 'action':'togglestereomode' }),
					makeButton({ 'text': 'Subtitle', 'action':'cyclesubtitle' }),
					{ 'class': 'break-after' },
					makeButton({ 'text': 'Previous',		'action': 'skipprevious' }),
					makeButton({ 'text': 'Play / Pause',	'action': 'playpause' }),
					makeButton({ 'text': 'Stop', 			'action':'stop' }),
					makeButton({ 'text': 'Next',			'action':'skipnext' }),
					{ 'label': 'Progress', 'id': 'progress' },
				]},
				{ 'label': 'Volume', class: 'expand volume expandRight', 'buttons': [
					makeButton({ 'text': 'Up', 'action': 'volumeup' }),
					makeButton({ 'text': 'Down', 'action': 'volumedown' }),
					{ 'label': 'Mute', 'class': 'mute', 'link': makeJsLink(`xbmc.get({ method: 'Application.setMute', params: { mute: 'toggle' } })`) }
				]},
				{ 'label': 'Navigation', class: 'expand navigation expandRight', 'buttons': [
					makeButton({ 'text': 'Up',			'action':'up' }),
					makeButton({ 'text': 'Down',			'action':'down' }),
					makeButton({ 'text': 'Left',			'action':'left' }),
					makeButton({ 'text': 'Right',			'action':'right' }),
					makeButton({ 'text': 'Select',			'action':'select' }),
					makeButton({ 'text': 'Back',			'action':'back' }),
					makeButton({ 'text': 'Information',		'action':'info' }),
					makeButton({ 'text': 'Home',			'action':'previousmenu' }),
					{ //the context menu button is a bit more complicated, since it does different things depending on the state of kodi
						'label': 'Menu', 'class': 'contextmenu',
						'link': makeJsLink(`
							xbmc.get({
								method: 'GUI.GetProperties',
								params: { properties: [ 'fullscreen' ] }
							})
							.then(result => xbmc.sendMessage('Input.ExecuteAction', {
								action: result.fullscreen ? 'osd' : 'contextmenu'
							}))
						`)
					}
				]}
			],
			'hideNavigation': true
		}
		
		//render the data to the DOM via the player template
		while (player.firstChild) player.removeChild(player.firstChild) //remove child elements
		player.innerHTML = templates.player(data)
		
		//make the progress bar work
		const progressElem = document.getElementById('progress')
		progressElem.innerHTML = `
				<div class="background"><div class="bar"></div></div>
				<div class="time"></div>`

		const barElems = document.body.querySelectorAll('.bar')
		const cacheBarElems = document.body.querySelectorAll('.cacheBar')
		const backgroundElem = progressElem.querySelector('.background')
		
		const infoElem = document.createElement('div')
		infoElem.id = 'info'
		player.querySelector('.infoButtons').append(infoElem)
		infoElem.innerHTML = `
				<div class="nowPlayingThumbnail"><img></img></div>
				<div class="infoText">
					<div class="status"></div>
					<div class="time"></div>
				</div>`

		//make the volume control work
		const volumeContainerElems = document.body.querySelectorAll('.volume > .expandable > .buttons')
		Array.prototype.forEach.call(volumeContainerElems, elem => {
			const volumeBar = document.createElement('li')
			const background = document.createElement('div')
			const bar = document.createElement('div')
			volumeBar.classList.add('volumeBar')
			background.classList.add('background')
			bar.classList.add('bar')
			background.append(bar)
			volumeBar.append(background)
			elem.append(volumeBar)
		})
		const volumeElems = document.body.querySelectorAll('.volumeBar')
		const volumeBarElems = document.body.querySelectorAll('.volumeBar .bar')


		const thumbnailContainerElems = document.body.querySelectorAll('.nowPlayingThumbnail')
		Array.prototype.forEach.call(thumbnailContainerElems, elem => { elem.innerHTML = `<img>` })
		const thumbnailElems = document.body.querySelectorAll('.nowPlayingThumbnail img')

		const setBodyData = key => value => document.body.setAttribute(`data-${ key }`, value)

		const elems = {
			setBar: runIfChanged(string => { Array.prototype.forEach.call(barElems, elem => { elem.setAttribute('style', `transform: scaleX(${ string });`) }) })({}),
			setVolume: runIfChanged(string => { Array.prototype.forEach.call(volumeBarElems, elem => { elem.setAttribute('style', `transform: scaleY(${ string });`) }) })({}),
			setThumbnail: runIfChanged(string => { Array.prototype.forEach.call(thumbnailElems, elem => { elem.src = xbmc.vfs2uri(string) }) })({}),
			setTime: setTextIfChanged(document.body.querySelectorAll('.time'))({}),
			setStatus: setTextIfChanged(document.body.querySelectorAll('.status'))({}),
			setBodyStatus: runIfChanged(setBodyData('status'))({})
		}

		progress = Progress(function (position, time, duration) {
			const timeString = seconds2shortstring(time)
			const durationString = seconds2shortstring(duration)
			const string = timeString + ' / ' + durationString
			elems.setTime(string)
			elems.setBar(''+position)
		})
		progressElem.addEventListener('mouseup', function (e) { //enable seeking
			let boundingRect = backgroundElem.getBoundingClientRect()
			let value = (e.pageX - boundingRect.left) / boundingRect.width
			if (value > 1) value = 1
			if (value < 0) value = 0
			value = Math.round(value*100)

			//update the local progress bar
			progress.updateFraction(value/100)

			//send the command to kodi
			xbmc.Seek({ 'value': value })
		})
		Array.prototype.forEach.call(volumeElems, elem => elem.addEventListener('mouseup', function (e) { //enable volume control
			let boundingRect = elem.querySelector('.background').getBoundingClientRect()
			let value = 1 - ((e.pageY - boundingRect.top) / boundingRect.height)
			if (value > 1) value = 1
			if (value < 0) value = 0
			value = Math.round(value*100)

			//send the command to kodi
			xbmc.get({
				'method': 'Application.SetVolume',
				'params': {
					'volume': value
				}
			})
		}))


		//toggle the player.visible class when the player.show button is clicked
		const expandElems = Array.from(player.querySelectorAll('.expand'))
		const collapseOthers = (selected) => {
			expandElems.
				filter(expandElem => expandElem !== selected).
				forEach(expandElem => expandElem.dataset.expand = '')
		}
		const onclicks = expandElems.map(expandElem => {
			return () => {
				expandElem.dataset.expand = (expandElem.dataset.expand === 'expand') ? '' : 'expand'
				collapseOthers(expandElem);
			}
		})
		expandElems.map(expandElem => expandElem.querySelector('.close').addEventListener('click', collapseOthers, false))
		zip(expandElems, onclicks).map(([ expandElem, onclick ]) => expandElem.querySelector('.label').addEventListener('click', onclick, false) )

		return elems

	}

	
	let onNotification = {
		'Player.OnPlay': function (data) {
			document.body.setAttribute('data-status','playing');
			xbmc.get({
				'method': 'Player.GetProperties',
				'params': {
					'properties': [ 'time', 'totaltime', 'speed', 'playlistid', 'position', 'repeat', 'type', 'partymode', 'shuffled', 'live' ],
					'playerid': data.data.player.playerid
				}
			})
			.then(player => {
				progress.start(timeObjToSeconds(player.totaltime), timeObjToSeconds(player.time))
			})
		},
		'Player.OnPause': function (data) {
			document.body.setAttribute('data-status','paused')
			progress.pause()
		},
		'Player.OnStop': function (data) {
			document.body.setAttribute('data-status','stopped')
			progress.stop()
		},
		'Player.OnSeek': function (data) {
			const player = data.data.player
			progress.update(progress.getTotaltime(), timeObjToSeconds(player.time))
		}
	}

	let playerStatus = 'stopped'
	
	function tick(elems) {
		let player = {}

		const promiseLog = x => { console.log(x); return x }

		const waitSeconds = t => x => new Promise(resolve => { window.setTimeout(() => resolve(x), 1000*t) })
		const waitAnimationFrame = x =>  new Promise(resolve => { window.requestAnimationFrame(() => resolve(x)) })

		const prefix = a => b => [ a, b ].join('')
		const prefixPlayer = prefix('Player.')

		const getLabels = () => xbmc.get({
			'method': 'XBMC.GetInfoLabels',
			'params': {
				'labels': ([  //  http://kodi.wiki/view/InfoLabels
					'Title',
					'Folderpath', 'Filename',
					'Duration(hh)', 'Duration(mm)', 'Duration(ss)', 
					'Time(hh)', 'Time(mm)', 'Time(ss)',
					'Time',
					'FinishTime(hh)', 'FinishTime(mm)', 'FinishTime(ss)',
					//'Progress', 'ProgressCache', //how much of the file is cached above current play percentage (doesn't work?)
					'Art(thumb)',
					'Volume' //the current player volume with the format '%2.1f dB'
				]).map(prefixPlayer)
			}
		})

		const formatLabels = labels => {
			const toSeconds = (label) => {
				const hh = parseInt(labels[`${ label }(hh)`])
				const mm = 60*hh + parseInt(labels[`${ label }(mm)`])
				const ss = 60*mm + parseInt(labels[`${ label }(ss)`])
				return ss
			};

			([ 'Duration', 'Time' ]).forEach(x => { const y = prefixPlayer(x); labels[y] = toSeconds(y) });

			([ 'Volume' ]).forEach(x => { const y = prefixPlayer(x); labels[y] = parseFloat(labels[y]) });

			return labels;
		}

		const getBooleans = () => xbmc.get({
			'method': 'XBMC.GetInfoBooleans',
			'params': {
				'booleans': ([  //  https://github.com/xbmc/xbmc/blob/master/xbmc/GUIInfoManager.cpp
					'HasMedia',
					'Playing', 'Paused', 'Rewinding', 'Forwarding',
					'Muted',
					'HasAudio', 'HasVideo', 
					'IsInternetStream',
					'CanRecord', 'Recording'
				]).map(prefixPlayer)
			}
		})

		const formatBooleans = booleans => {
			booleans['Player.Status'] =
					booleans['Player.Paused'] ? 'paused' :
					booleans['Player.Playing'] ? 'playing' :
					'stopped'
			return booleans
		}

		const prefixImage = prefix('image://')
		const update = ([ labels, booleans ]) => {
			elems.setStatus(labels['Player.Title'])
			elems.setBodyStatus(booleans['Player.Status'])
			elems.setVolume((labels['Player.Volume'] + 60)/60)

			progress.update(labels['Player.Duration'], labels['Player.Time'])

			const thumb = labels['Player.Art(thumb)']
			if (thumb)
				elems.setThumbnail(prefixImage(encodeURIComponent(thumb)))
			else
				elems.setThumbnail()
		}

		const loop = () => {
			Promise.all([
				getLabels().then(formatLabels),
				getBooleans().then(formatBooleans)
			]).
			then(waitAnimationFrame).
			then(update).
			catch(e => { console.error(e); waitSeconds(1)().then(loop) }).
			then(waitSeconds(0.1)).then(loop)
		}
		loop()

	}
	
	function init() {
		//render the player
		const elems = renderPlayer(document.querySelector('#player'))
		
		//start polling
		tick(elems)
		
		//bind event handlers to the xbmc websocket api
		Object.getOwnPropertyNames(onNotification).forEach(name => xbmc.onNotification(name, onNotification[name]))
		
		return this
	}

	return {
		init: init
	}
	
})()
