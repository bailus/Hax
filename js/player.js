xbmcPlayerFactory = (function ($) {
	"use strict";

	//constants
	var REFRESH = 3e3, //ajax polling interval in ms
	  REFRESHWS = 1e3, //websocket polling interval in ms
	  pub = {},
	  DEBUG = window.DEBUG || false;
	

	//html helper functions
	var html = {
		'time': function (player) {
			return $('<div class="time">'+time.tostring(player.time)+' / '+time.tostring(player.totaltime)+'</div>');
		},
		'playing': function (label) {
			return $('<div class="playing">'+label+'</div>');
		}
	};
	
	var progress;

	var timeObjToSeconds = function (o) {
		return ((((o.hours*60) + o.minutes)*60) + o.seconds)+(o.milliseconds/1e3);
	};
	var seconds2string = function (t) {
		var str = function (n) {
			return (n < 10 && n > -10 ? '0' : '')+Math.floor(n);
		};
		if (t > 3600) return str(t/3600) +':'+ str((t%3600)/60) +':'+ str(t%60);
		else return str(t/60) +':'+ str(t%60);
	};

	var renderPlayer = function (player) {
		var slider, volume, data;
		
		//construct data
		data = {
			'buttons': [
                { 'text': 'Previous', 'class':'GoPrevious', 'onclick':function () { xbmc.GoPrevious(); } },
	            { 'text': 'Play / Pause', 'class': 'PlayPause', 'onclick': function () { xbmc.PlayPause(); } },
                { 'text': 'Stop', 'class':'Stop', 'onclick':function () { xbmc.Stop(); } },
                { 'text': 'Next', 'class':'GoNext', 'onclick':function () { xbmc.GoNext(); } }
			],
			'hideNavigation': true
		};
		
		//render the data to the DOM via the player template
		player.
		  html(''). //remove child elements
		  append(template.player.bind(data));
		
		//make the progress bar work
		var progressElem = player.find('progress').get(0);
		var timeElem = player.find('.time').get(0);
		progress = Progress(function (position, time, duration) {
			progressElem.value = Math.floor(position*10000);
			timeElem.innerText = seconds2string(time)+'/'+seconds2string(duration);
		});
		progressElem.addEventListener('mouseup', function (e) { //enable seeking
			//progress.updateFraction(e.offsetX/e.target.clientWidth);
			xbmc.GetActivePlayer(function (player) {
 				xbmc.Seek({ 'playerid': player.playerid, 'value': (e.offsetX/e.target.clientWidth)*100 });
			});
		});

		player.find('.show').on('click', function () {
			player.toggleClass('visible');
		});
	};

	
	var on = function () {
		var body = $('body');
		return {
			'Player.OnPlay': function (data) {
				body.attr('data-status','playing');
				xbmc.GetPlayerProperties({ 'playerid': data.data.player.playerid }, function (player) {
					progress.start(timeObjToSeconds(player.totaltime), timeObjToSeconds(player.time));
				});
			},
			'Player.OnPause': function (data) {
				body.attr('data-status','paused');
				progress.pause();
			},
			'Player.OnStop': function (data) {
				body.attr('data-status','stopped');
				progress.stop();
			},
			'Player.OnSeek': function (data) {
				xbmc.GetPlayerProperties({ 'playerid': data.data.player.playerid }, function (player) {
					progress.update(timeObjToSeconds(player.totaltime), timeObjToSeconds(data.data.player.time));
				});
			}
		};
	};
	
	var startTimer = function () {
		var body = $('body'),
		//volume = $('#volume'),
		//progress = $('#progress'),
		nowPlaying = $('#nowPlaying'),
		player = {},
		sleep  = function (callback) {
			window.setTimeout(callback, xbmc.transport() === 'websocket' ? REFRESHWS : REFRESH);
		},
		q = Q();
		/*q.add(function (callback) {
			xbmc.GetApplicationProperties(function (app) {
				if (app) {
					//volume.slider('value',app.volume);
					document.title = app.name;
				}
				callback();
			});
		});
		q.add(sleep);*/
		q.add(function (callback) {
			xbmc.GetActivePlayer(function (p) {
				player = p;
				callback();
			});
		});
		q.add(sleep);
		q.add(function (callback) {
			var q = Q().onfinish(callback);
			if (player) {
				q.add(function (c) {
					xbmc.GetPlayerProperties({ 'playerid': player.playerid }, function (properties) {
						progress.update(timeObjToSeconds(properties.totaltime), timeObjToSeconds(properties.time));
						$.extend(player, properties);
						if (player.speed) body.attr('data-status','playing');
						else body.attr('data-status','paused');
						c();
					});
				});
				q.add(sleep);
				q.add(function (c) {
					if (player.playlistid !== undefined) {
						xbmc.GetPlaylistItems({ 'playlistid': player.playlistid || 0 }, function (playlist) {
							if (playlist.items) $.extend(player, playlist.items[player.position || 0]);
							if (player.file) player.label = player.file.split('/')[--player.file.split('/').length];
							nowPlaying.text(player.label);
							c();
						});
					} else {
						nowPlaying.html('');
						c();
					}
				});
				q.add(sleep);
			} else {
				q.add(function (c) {
					body.attr('data-status','stopped');
					progress.stop();
					nowPlaying.html('');
					c();
				});
				q.add(sleep);
			}
			q.start();
		});
		q.onfinish(q.start); //re-start the queue when it finishes
		q.start(); //start the queue
	};
	
	return function () {
		//render the player
		renderPlayer($('#player'));
		
		//start polling
		startTimer();
		
		//bind event handlers to the xbmc websocket api
		$.each(on(), xbmc.onNotification);
		
		return pub;
	};
	
})(jQuery);
