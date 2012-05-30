xbmcPlayerFactory = (function ($) { //create the xbmcPlayer global object
	"use strict";

	//constants
	var REFRESH = 1000, //polling interval in ms
	  pub = {},
	  xbmc,
	  DEBUG = false;
	

	//html helper functions
	var html = {
		'time': function (player) {
			return $('<div class="time">'+timeToString(player.time)+' / '+timeToString(player.totaltime)+'</div>');
		},
		'playing': function (label) {
			return $('<div class="playing">'+label+'</div>');
		}
	};
	
	var timeToString = function (time) {
		var string = '';
		if (time) {
			if (time.hours) string += time.hours + ':';
			string += (time.minutes < 10 ? '0'+time.minutes : time.minutes);
			string += ':';
			string += (time.seconds < 10 ? '0'+time.seconds : time.seconds);
		}
		return string;
	};
	
	var renderPlayer = function (player) {
		var slider, volume, data;
		
		//construct data
		data = {
			'buttons': [
			            { 'text': 'Play / Pause', 'class': 'PlayPause', 'onclick': function () { xbmc.PlayPause(); } },
			            { 'text': 'Remote', 'class': 'Remote', 'href': '#page=Remote' }
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
	
	var startTimer = function () {
		var body = $('body'),
		volume = $('#volume'),
		progress = $('#progress'),
		nowPlaying = $('#nowPlaying'),
		GetActivePlayerProperties = function (callback) {
			xbmc.GetActivePlayerProperties(function (player) {
				if (!player) {
					body.attr('data-status','stopped');
					progress.slider('value',0);
					nowPlaying.html('');
					callback();
				} else {
					if (player.speed) body.attr('data-status','playing');
					else body.attr('data-status','paused');
					progress.slider('value',player.percentage);
					if (player.playlistid !== undefined) xbmc.GetPlaylistItems({ 'playlistid': player.playlistid || 0 }, function (playlist) {
						if (playlist.items) $.extend(player, playlist.items[player.position || 0]);
						if (player.file) player.label = player.file.split('/')[--player.file.split('/').length];
						nowPlaying.html('');
						html.time(player).appendTo(nowPlaying);
						html.playing(player.label).appendTo(nowPlaying);
						callback();
					});
					else {
						nowPlaying.html('');
						callback();
					}
				}
			});
			return {
				'timeout': 30000, //30 seconds
			};
		},
		GetApplicationProperties = function (callback) {
			xbmc.GetApplicationProperties(function (app) {
				if (app) {
					volume.slider('value',app.volume);
					document.title = app.name;
				}
				callback();
			});
			return {
				'timeout': 30000, //30 seconds
			};
		},
		sleep  = function (callback) {
			window.setTimeout(callback, REFRESH);
		},
		timer = function () {
			Q([
			   GetApplicationProperties,
			   sleep,
			   GetActivePlayerProperties,
			   sleep,
			   timer
			])();
		}/*,
		timer = function () {
			GetApplicationProperties(function () {
				timeout(function () {
					GetActivePlayerProperties(function () {
						timeout(function () {
							timer();
						});
					});
				});
			});
		}*/;
		timer();
	};
	
	return function (x) {
		xbmc = x;
		//render the player
		renderPlayer($('#player'));
		
		//start polling
		startTimer();
		
		return pub;
	};
	
})(jQuery);
