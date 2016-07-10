import Progress from './progress'
import { seconds2string, makeJsLink } from './util'

export default (function () {
"use strict";


	let progress = undefined

	function timeObjToSeconds (o) {
		return ((((o.hours*60) + o.minutes)*60) + o.seconds)+(o.milliseconds/1e3);
	}

	function renderPlayer(player) {
		var slider, volume, data

		function makeButton(o) {
			return {
				'label': o.text,
				'class': o.action,
				'link': makeJsLink(`
					xbmc.get({
						'method': 'Input.ExecuteAction',
						'params': {
							'action': '${ o.action }'
						}
					})
				`)
			}
		}

		//construct data
		data = {
			'buttons': ([
				{ 'text': 'Previous',		'action': 'skipprevious' },
				{ 'text': 'Play / Pause',	'action': 'playpause' },
				{ 'text': 'Stop', 			'action':'stop' },
				{ 'text': 'Next',			'action':'skipnext' }
			]).map(makeButton),
			'navbuttons': ([
				{ 'text': 'Up',				'action':'up' },
				{ 'text': 'Down',			'action':'down' },
				{ 'text': 'Left',			'action':'left' },
				{ 'text': 'Right',			'action':'right' },
				{ 'text': 'Select',			'action':'select' },
				{ 'text': 'Back',			'action':'back' },
				{ 'text': 'Information',	'action':'info' },
				//{ 'text': 'Menu',			'action':'contextmenu' },
				{ 'text': 'Home',			'action':'previousmenu' }
			]).map(makeButton),
			'rightbuttons': ([
				//{ 'text': 'Mute',			'action':'mute' },
				{ 'text': 'Volume Up',		'action':'volumeup' },
				{ 'text': 'Volume Down',	'action':'volumedown' }
			]).map(makeButton),
			'hideNavigation': true
		}
		data.navbuttons.push({ //the context menu button is a bit more complicated, since it does different things depending on the state of kodi
			'label': 'Menu',
			'class': 'contextmenu',
			'link': makeJsLink(`
				xbmc.get({
					method: 'GUI.GetProperties',
					params: {
						properties: [ 'fullscreen' ] 
					}
				})
				.then(result => xbmc.sendMessage('Input.ExecuteAction', {
					action: result.fullscreen ? 'osd' : 'contextmenu'
				}))
			`)
		})
		
		//render the data to the DOM via the player template
		while (player.firstChild) player.removeChild(player.firstChild) //remove child elements
		player.innerHTML = templates.player(data)
		
		//make the progress bar work
		var oldString

		let progressElem = document.getElementById('progress')
		let statusElem = progressElem.querySelector('.status')
		let timeElem = progressElem.querySelector('.time')
		let barElem = progressElem.querySelector('.bar')
		let backgroundElem = progressElem.querySelector('.background')

		progress = Progress(function (position, time, duration) {
			var value = Math.round(position*10000)
			var string = (time ? seconds2string(time)+'/' : '')+seconds2string(duration)
			if (string !== oldString) {
				timeElem.innerHTML = string
				barElem.setAttribute('style', 'width: ' + (value/100) + '%;')
			}
			oldString = string
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
		player.querySelector('.show').addEventListener('click', () => {
			player.className = player.className ? '' : 'minimize'
		}, false)

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
	
	function tick() {
		let progressElem = document.getElementById('progress')
		let statusElem = progressElem.querySelector('.status')

		let player = {}

		new Promise((resolve, reject) => {
			var cancel = false
			xbmc.GetActivePlayerProperties()
			.then(x =>  new Promise(resolve => window.requestAnimationFrame(() => resolve(x))))
			.then(p => {
				
				if (cancel) return
				player = p
				if (player) {
					progress.update(timeObjToSeconds(player.totaltime), timeObjToSeconds(player.time))
					if (player.speed > 0) {
						if (playerStatus !== 'playing') {
							progress.unpause()
							playerStatus = 'playing'
							document.body.setAttribute('data-status','playing')
						}
					} else {
						if (playerStatus !== 'paused') {
							progress.pause('paused')
							playerStatus = 'paused'
							document.body.setAttribute('data-status','paused')
						}
					}
				} else {
					if (playerStatus !== 'stopped') {
						progress.stop()
						playerStatus = 'stopped'
						document.body.setAttribute('data-status','stopped')
						
						statusElem.innerHTML = ''
					}
				}
				window.setTimeout(resolve, 1e3)
			})
			window.setTimeout(resolve, 3e3)
		})
		.then(() => new Promise((resolve, reject) => {
			var cancel = false
			if (player && player.playlistid !== undefined && player.position !== undefined) {
				xbmc.get({
					'method': 'Playlist.GetItems',
					'params': {
						'properties': [ 'title', 'art', 'tagline', 'showtitle', 'album', 'artist', 'season', 'episode', 'file', 'thumbnail', 'runtime', 'duration' ],
						'playlistid': player.playlistid
					}
				})
				.then(x =>  new Promise(resolve => window.requestAnimationFrame(() => resolve(x))))
				.then(function (playlist) {

					if (!playlist.items) return

					var item = playlist.items[player.position]
					if (item) {
						statusElem.innerHTML = ''+
							(item.showtitle ? item.showtitle+' ' : '')+
							(item.season>=0 ? item.episode>=0 && item.season+'x'+item.episode+' ' : '')+
							(item.artist && item.artist.length ? item.artist.join(', ')+' - '+(item.album || '') : '')+
							(item.label||item.title||item.file)
					}
					else statusElem.innerHTML = ''

					window.setTimeout(resolve, 1e3)
				})
			} else {
				resolve()
			}
			window.setTimeout(resolve, 3e3)
		}))
		.catch(tick)
		.then(tick)
	}
	
	function init() {
		//render the player
		renderPlayer(document.querySelector('#player'))
		
		//start polling
		tick()
		
		//bind event handlers to the xbmc websocket api
		Object.getOwnPropertyNames(onNotification).forEach(name => xbmc.onNotification(name, onNotification[name]))
		
		return this
	}

	return {
		init: init
	}
	
})()
