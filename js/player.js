xbmcPlayerFactory = (function ($) { //create the xbmcPlayer global object
	"use strict";

	//constants
	var REFRESH = 1000, //ajax polling interval in ms
	  REFRESHWS = 300, //websocket polling interval in ms
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
	
	var renderPlayer = function (player) {
		var slider, volume, data;
		
		//construct data
		data = {
			'buttons': [
			            { 'text': 'Play / Pause', 'class': 'PlayPause', 'onclick': function () { xbmc.PlayPause(); } },
			            //{ 'text': 'Remote', 'class': 'Remote', 'href': '#page=Remote' }
			]
		};
		
		//render the data to the DOM via the player template
		player.
		  html(''). //remove child elements
		  append(template.player.bind(data));
		
		//apply javascript UI hacks
		player.find('#volume').slider({
			'orientation': 'horizontal',
			'stop': function (event, ui) {  //set the xbmc volume when the slider is changed by the user
				xbmc.Volume({'volume':ui.value});
			}
		});
		player.find('#progress').slider({
			'stop': function (event, ui) {  //seek when the slider is changed by the user
				xbmc.Seek({'value':ui.value});
			},
			'step': 0.001
		});
	};
	
	var on = function () {
		var body = $('body'),
		  volume = $('#volume'),
		  progress = $('#progress'),
		  nowPlaying = $('#nowPlaying');
		return {
			'Player.OnPlay': function () {
				body.attr('data-status','playing');
			},
			'Player.OnPause': function () {
				body.attr('data-status','paused');
			},
			'Player.OnStop': function () {
				body.attr('data-status','stopped');
			},
			'Player.OnSeek': function (data) {
				progress.slider('value', 0);
			}
		};
	};
	
	var startTimer = function () {
		var body = $('body'),
		volume = $('#volume'),
		progress = $('#progress'),
		nowPlaying = $('#nowPlaying'),
		player = {},
		sleep  = function (callback) {
			window.setTimeout(callback, xbmc.transport() === 'websocket' ? REFRESHWS : REFRESH);
		},
		q = Q();
		q.add(function (callback) {
			xbmc.GetApplicationProperties(function (app) {
				if (app) {
					volume.slider('value',app.volume);
					document.title = app.name;
				}
				callback();
			});
		});
		q.add(sleep);
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
						$.extend(player, properties);
						if (player.speed) body.attr('data-status','playing');
						else body.attr('data-status','paused');
						progress.slider('value',player.percentage);
						c();
					});
				});
				q.add(sleep);
				q.add(function (c) {
					if (player.playlistid !== undefined) {
						xbmc.GetPlaylistItems({ 'playlistid': player.playlistid || 0 }, function (playlist) {
							if (playlist.items) $.extend(player, playlist.items[player.position || 0]);
							if (player.file) player.label = player.file.split('/')[--player.file.split('/').length];
							nowPlaying.html('');
							html.time(player).appendTo(nowPlaying);
							html.playing(player.label).appendTo(nowPlaying);
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
					progress.slider('value',0);
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
	
	return function (x) {
		//xbmc = x;
		//render the player
		renderPlayer($('#player'));
		
		//start polling
		startTimer();
		
		//bind event handlers to the xbmc websocket api
		$.each(on(), xbmc.onNotification);
		
		return pub;
	};
	
})(jQuery);
