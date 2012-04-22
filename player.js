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
		}
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
		'Stop': {
			'text': 'Stop',
			'click': function () { xbmc.Stop(); },
			'class': 'wide'
		},
		/*'GoNext': {
			'text': 'Next',
			'click': function () { xbmc.GoNext(); },
			'class': 'wide'
		},*/
		'Remote': {
			'text': 'Remote',
			'link': '#page=Remote'
		},
		'Playlist': {
			'text': 'Playlist',
			'link': '#page=Playlist'
		}
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
		var body, volume, progress, GetActivePlayerProperties, GetApplicationProperties, timeout, timer;
		body = $('body'),
		volume = $('#volume'),
		progress = $('#progress');
		GetActivePlayerProperties = function (callback) {
			xbmc.GetActivePlayerProperties(function (player) {
				if (!player) {
					body.attr('data-status','stopped');
					progress.slider('value',0);
				} else {
					if (player.speed) body.attr('data-status','playing');
					else body.attr('data-status','paused');
					progress.slider('value',player.percentage);
				}
				callback();
			});
		};
		GetApplicationProperties = function (callback) {
			xbmc.GetApplicationProperties(function (app) {
				if (app) {
					volume.slider('value',app.volume);
					document.title = app.name;
				}
				callback();
			});
		};
		timeout  = function (callback) {
			window.setTimeout(callback, REFRESH);
		};
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
