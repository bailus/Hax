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
				{ 'class': 'spacer' },
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

		const thumbnailContainerElems = document.body.querySelectorAll('.nowPlayingThumbnail')
		Array.prototype.forEach.call(thumbnailContainerElems, elem => { elem.innerHTML = `<img>` })
		const thumbnailElems = document.body.querySelectorAll('.nowPlayingThumbnail img')

		const elems = {
			setBar: runIfChanged(string => { Array.prototype.forEach.call(barElems, elem => { elem.setAttribute('style', `transform: scaleX(${ string });`) }) })({}),
			setThumbnail: runIfChanged(string => { Array.prototype.forEach.call(thumbnailElems, elem => { elem.src = xbmc.vfs2uri(string) }) })({}),
			setTime: setTextIfChanged(document.body.querySelectorAll('.time'))({}),
			setStatus: setTextIfChanged(document.body.querySelectorAll('.status'))({}),
			setStatusBody: runIfChanged(string => { document.body.setAttribute('data-status',string) })({})
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
		'Player.MOnPause': function (data) {
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

		new Promise((resolve, reject) => {

			xbmc.get({ 'method': 'Player.GetActivePlayers' })
			.then((players={}) => (!players.length ? undefined : players[0]))
			.then(player => {
				if (!player)
					return Promise.resolve()
				else
					return xbmc.get({
						'method': 'Player.GetProperties',
						'params': {
							'properties': [ 'time', 'totaltime', 'speed', 'playlistid', 'position', 'repeat', 'type', 'partymode', 'shuffled', 'live' ],
							'playerid': player.playerid
						}
					})
			})
			.then(x =>  new Promise(resolve => window.requestAnimationFrame(() => resolve(x))))
			.then(p => {
				player = p
				if (player) {
					progress.update(timeObjToSeconds(player.totaltime), timeObjToSeconds(player.time))
					if (player.speed > 0) {
						if (playerStatus !== 'playing') {
							progress.unpause()
							playerStatus = 'playing'
							elems.setStatusBody('playing')
						}
					} else {
						if (playerStatus !== 'paused') {
							progress.pause('paused')
							playerStatus = 'paused'
							elems.setStatusBody('paused')
						}
					}
				} else {
					if (playerStatus !== 'stopped') {
						progress.stop()
						playerStatus = 'stopped'

						elems.setStatusBody('stopped')
						elems.setStatus('')
					}
				}
				window.setTimeout(resolve, 1e2)
			})
			window.setTimeout(resolve, 3e2)
		})
		.then(() => new Promise((resolve, reject) => {
			if (player && player.playlistid !== undefined && player.position !== undefined) {
				xbmc.get({
					'method': 'Playlist.GetItems',
					'params': {
						'properties': [ 'channel', 'title', 'art', 'tagline', 'showtitle', 'album', 'year', 'artist', 'season', 'episode', 'file', 'thumbnail', 'runtime', 'duration' ],
						'playlistid': player.playlistid
					}
				})
				.then(x =>  new Promise(resolve => window.requestAnimationFrame(() => resolve(x))))
				.then(function (playlist) {

					if (!playlist.items) return

					var item = playlist.items[player.position]
					if (item) {
						elems.setStatus([
							(item.channel),
							(item.showtitle),
							(item.season>=0 && item.episode>=0 && `${item.season}x${item.episode}`),
							(item.artist && item.artist.length && item.artist.join(', ')),
							[
								(item.year && `(${item.year})`),
								(item.album)
							].filter(x => !!x).join(' '),
							(item.label||item.title||item.file)
						].filter(x => !!x).join(' - '))
						elems.setThumbnail(item.thumbnail)
					}
					else elems.setStatus('')

					window.setTimeout(resolve, 1e2)
				})
			} else {
				resolve()
			}
			window.setTimeout(resolve, 3e2)
		}))
		.catch(x => tick(elems))
		.then(x => tick(elems))
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
