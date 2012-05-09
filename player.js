xbmcPlayerFactory = (function ($) { //create the xbmcPlayer global object
	"use strict";

	//constants
	var REFRESH = 1000, //polling interval in ms
	  pub = {},
	  xbmc,
	  DEBUG = true;
	

	//html helper functions
	var html = {
		'controls': function (appendTo) {
			return $('<div class="controls"></div>').appendTo(appendTo);
		},
		'controlButton': function (name, text, appendTo) {
			return $('<div class="controlButton '+name+'" tabindex="0" title="'+text+'"></div>').appendTo(appendTo);
		},
		'controlButtonLink': function (name, text, href, appendTo) {
			return $('<a class="controlButton '+name+'" href="'+href+'" title="'+text+'"></a>').appendTo(appendTo);
		},
		'controlSlider': function (appendTo) {
			return $('<div id="progress"></div>').appendTo(appendTo);
		},
		'volume': function (appendTo) {
			return $('<div id="volume"></div>').appendTo(appendTo);
		},
		'nowPlaying': function (appendTo) {
			return $('<div id="nowPlaying"></div>').appendTo(appendTo);
		},
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
	
	var controlButtons = {
		/*'GoPrevious': {
			'text': 'Previous',
			'click': function () { xbmc.GoPrevious(); },
			'class': 'wide'
		},*/
		'PlayPause': {
			'text': 'Play / Pause',
			'click': function () { xbmc.PlayPause(); }
		},
		/*'Stop': {
			'text': 'Stop',
			'click': function () { xbmc.Stop(); },
			'class': 'wide'
		},
		'GoNext': {
			'text': 'Next',
			'click': function () { xbmc.GoNext(); },
			'class': 'wide'
		},*/
		'Remote': {
			'text': 'Remote',
			'link': '#page=Remote'
		}/*,
		'Playlist': {
			'text': 'Playlist',
			'link': '#page=Playlist'
		}*/
	};
	
	var renderPlayer = function (player) {
		var slider, volume;
		$.each(controlButtons, function (index, button) {
			var name = index;
			if (button['class']) name = index+' '+button['class'];
			if (button.click) html.controlButton(name, button.text, player).click(button.click);
			else if (button.link) html.controlButtonLink(name, button.text, button.link, player);
		});
		slider = html.controlSlider(player);
		$(slider).slider({
			'stop': function (event, ui) {
				xbmc.Seek({'value':ui.value});
			},
			'step': 0.001
		});
		html.nowPlaying(player);
		volume = html.volume(player);
		$(volume).slider({
			//set the xbmc volume when the slider is changed
			'stop': function (event, ui) {
				xbmc.Volume({'volume':ui.value});
			},
			//set the xbmc volume continuously while the slider is changing
			//this creates a metric fuckton of connections... it probably needs websockets to work properly
			/*'slide': function (event, ui) {
				xbmc.Volume({'volume':ui.value});
			},*/
			'orientation': 'horizontal'
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
					if (player.playlistid >= 0 && player.position >= 0) xbmc.GetPlaylistItems({ 'playlistid': player.playlistid }, function (playlist) {
						$.extend(player, playlist.items[player.position]);
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
		},
		GetApplicationProperties = function (callback) {
			xbmc.GetApplicationProperties(function (app) {
				if (app) {
					volume.slider('value',app.volume);
					document.title = app.name;
				}
				callback();
			});
		},
		timeout  = function (callback) {
			window.setTimeout(callback, REFRESH);
		},
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
		};
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
