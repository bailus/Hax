"use strict";

var player = (function () {

	let progress = undefined

	function timeObjToSeconds (o) {
		return ((((o.hours*60) + o.minutes)*60) + o.seconds)+(o.milliseconds/1e3);
	}

	function seconds2string(t) {
		var str = function (n) {
			return (n < 10 && n > -10 ? '0' : '')+Math.floor(n)
		}
		if (t > 3600) return str(t/3600) +':'+ str((t%3600)/60) +':'+ str(t%60)
		else return str(t/60) +':'+ str(t%60)
	}

	function renderPlayer(player) {
		var slider, volume, data
		
		const actionHref = action => "javascript: (() => { xbmc.get({ 'method': 'Input.ExecuteAction', 'params': { 'action': '"+action+"' } }) } )()"

		//construct data
		data = {
			'buttons': [
				{ 'text': 'Previous', 'class':'GoPrevious', 'href': actionHref('skipprevious') },
				{ 'text': 'Next', 'class':'GoNext', 	'href': actionHref('skipnext') },
				{ 'text': 'Play / Pause', 'class': 'PlayPause', 'href': actionHref('playpause') },
				{ 'text': 'Stop', 'class':'Stop', 		'href': actionHref('stop') },
				{ 'text': 'Up', 'class':'up', 			'href': actionHref('up') },
				{ 'text': 'Down', 'class':'down', 		'href': actionHref('down') },
				{ 'text': 'Left', 'class':'left', 		'href': actionHref('left') },
				{ 'text': 'Right', 'class':'right', 	'href': actionHref('right') },
				{ 'text': 'Select', 'class':'select', 	'href': actionHref('select') },
				{ 'text': 'Back', 'class':'back', 		'href': actionHref('back') },
				{ 'text': 'Information', 'class':'info','href': actionHref('info') },
				{ 'text': 'Menu', 'class':'menu', 		'href': actionHref('contextmenu') },
				{ 'text': 'Home', 'class':'home', 		'href': actionHref('home') },
			],
			'hideNavigation': true
		}
		
		//render the data to the DOM via the player template
		while (player.firstChild) player.removeChild(player.firstChild) //remove child elements
		player.appendChild(template.player.bind(data))
		
		//make the progress bar work
		var oldString

		let progressElem = document.getElementById('progress')
		let statusElem = progressElem.querySelector('.status')
		let timeElem = progressElem.querySelector('.time')
		let barElem = progressElem.querySelector('.bar')

		progress = Progress(function (position, time, duration) {
			var value = Math.round(position*10000)
			var string = seconds2string(time)+'/'+seconds2string(duration)
			if (string !== oldString) {
				timeElem.innerHTML = string
				barElem.setAttribute('style', 'width: ' + (value/100) + '%;')
			}
			oldString = string
		})
		progressElem.addEventListener('mouseup', function (e) { //enable seeking
			let boundingRect = progressElem.getBoundingClientRect()
			let value = (e.pageX - boundingRect.left - 10) / boundingRect.width
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
			player.className = player.className ? '' : 'visible'
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
			xbmc.GetPlayerProperties({ 'playerid': data.data.player.playerid }, function (player) {
				progress.update(timeObjToSeconds(player.totaltime), timeObjToSeconds(data.data.player.time))
			})
		}
	}
	
	function tick() {
		let progressElem = document.getElementById('progress')
		let statusElem = progressElem.querySelector('.status')

		let player = {}

		new Promise((resolve, reject) => {
			var cancel = false
			xbmc.GetActivePlayerProperties()
			.then(p => {
				if (cancel) return
				player = p
				if (player) {
					progress.update(timeObjToSeconds(player.totaltime), timeObjToSeconds(player.time))
					if (player.speed > 0) {
						progress.unpause()
						document.body.setAttribute('data-status','playing')
					} else if (player.speed === 0) {
						progress.pause()
						document.body.setAttribute('data-status','paused')
					}
				} else {
					document.body.setAttribute('data-status','stopped')
					statusElem.innerHTML = ''
					progress.stop()
				}
				window.setTimeout(resolve, 1e3)
			})
			window.setTimeout(resolve, 3e3)
		})
		.then(() => new Promise((resolve, reject) => {
			var cancel = false
			if (player && player.playlistid !== undefined && player.position !== undefined) {
				if (!player.playlistid) player.playlistid = 0
				xbmc.get({
					'method': 'Playlist.GetItems',
					'params': {
						'properties': [ 'title', 'showtitle', 'artist', 'season', 'episode', 'file', 'thumbnail', 'runtime', 'duration' ],
						'playlistid': player.playlistid
					}
				})
				.then(function (playlist) {
					if (!playlist.items) return
					var item = playlist.items[player.position]
					//console.log('Current Playlist Item: ', item)
					if (item) statusElem.innerHTML = ''+
						(item.showtitle ? item.showtitle+' ' : '')+
						(item.season>=0 && item.episode>=0 ? item.season+'x'+item.episode+' ' : '')+
						(item.artist && item.artist.length ? item.artist.join(', ')+' - ' : '')+
						(item.title||item.label)
					else statusElem.innerHTML = ''

					window.setTimeout(resolve, 1e3)
				})
			} else {
				resolve()
			}
			window.setTimeout(resolve, 3e3)
		}))
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
