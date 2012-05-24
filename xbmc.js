var xbmcFactory = (function ($) { //create the xbmc global object
	"use strict";

	//globals
	var URL, VFSURL, WSURL, VERSION, pub = {},
	  DEBUG = true, INTROSPECT = true, socket = { 'q': {} }, events = {};

	var rpc = {
		'Introspect': {
			'method': 'JSONRPC.Introspect'
		},
		'Version': {
			'method': 'JSONRPC.Version'
		},
		'GetTVShows': {
			'method': 'VideoLibrary.GetTVShows',
			'params': { 'properties': [ 'thumbnail', 'year', 'studio', 'genre', 'lastplayed', 'playcount', 'premiered' ] }
		},
		'GetTVShowDetails': {
			'method': 'VideoLibrary.GetTVShowDetails',
			'params': { 'properties': [ 'title', 'fanart', 'thumbnail' ] }
		},
		'GetTVEpisodes': {
			'method': 'VideoLibrary.GetEpisodes',
			'params': { 'properties': [ 'tvshowid', 'title', 'thumbnail', 'episode', 'season', 'file', 'showtitle' ] }
		},
		'GetEpisodeDetails': {
			'method': 'VideoLibrary.GetEpisodeDetails',
			'params': { 'properties': [ 'title', 'plot', 'rating', 'director', 'showtitle', 'thumbnail', 'fanart', 'episode', 'season', 'runtime', 'file', 'tvshowid' ] }
		},
		'GetRecentlyAddedEpisodes': {
			'method': 'VideoLibrary.GetRecentlyAddedEpisodes',
			'params': { 'properties': [ 'tvshowid', 'title', 'thumbnail', 'episode', 'season', 'file', 'showtitle' ], 'limits': { 'end': 5 } }
		},
		'GetMovies': {
			'method': 'VideoLibrary.GetMovies',
			'params': { "properties": [ "title", "originaltitle", "runtime", "year", "thumbnail", "file" ], "sort": { "method": "sorttitle", "ignorearticle": true } }
		},
		'GetRecentlyAddedMovies': {
			'method': 'VideoLibrary.GetRecentlyAddedMovies',
			'params': { "properties": [ "title", "originaltitle", "runtime", "year", "thumbnail", "file" ], 'limits': { 'end': 5 } }
		},
		'GetMovieDetails': {
			'method': 'VideoLibrary.GetMovieDetails',
			'params': { 'properties': [ 'title', 'genre', 'year', 'rating', 'director', 'tagline', 'plot', 'runtime', 'fanart', 'thumbnail', 'writer', 'file' ] }
		},
		'GetArtists': {
			'params': { 'properties': [ 'thumbnail' ], 'albumartistsonly': true },
			'method': 'AudioLibrary.GetArtists'
		},
		'GetArtistDetails': {
			'params': { 'properties': [ 'thumbnail', 'instrument', 'style', 'born', 'formed', 'description', 'genre', 'died', 'disbanded', 'yearsactive', 'fanart' ] },
			'method': 'AudioLibrary.GetArtistDetails'
		},
		'GetSongs': {
			'params': { 'properties': [ 'artist', 'album', 'albumid', 'year', 'thumbnail', 'file', 'title', 'track', 'duration' ] },
			'method': 'AudioLibrary.GetSongs'
		},
		'GetRecentlyAddedAlbums': {
			'params': { 'properties': [ 'title', 'description', 'artist', 'albumlabel', 'rating', 'year', 'thumbnail' ], 'limits': { 'end': 5 } },
			'method': 'AudioLibrary.GetRecentlyAddedAlbums'
		},
		'GetAlbums': {
			'params': {
				'properties': [ 'title', 'description', 'artist', 'albumlabel', 'rating', 'year', 'thumbnail' ],
				'sort': { 'method': 'year', 'order': 'ascending' }
			},
			'method': 'AudioLibrary.GetAlbums'
		},
		'GetAlbumDetails': {
			'params': { 'properties': [ 'title', 'description', 'artist', 'genre', 'type', 'albumlabel', 'rating', 'year', 'fanart', 'thumbnail', 'artistid' ] },
			'method': 'AudioLibrary.GetAlbumDetails'
		},
		'GetMusicVideos': {
			'params': { 'properties': [ 'title', 'runtime', 'year', 'album', 'artist', 'track', 'thumbnail', 'file' ] },
			'method': 'VideoLibrary.GetMusicVideos'
		},
		'GetSources': {
			'method': 'Files.GetSources'
		},
		'GetDirectory': {
			'params': {
				'properties': [ 'title', 'duration', 'originaltitle', 'thumbnail', 'file' ],
				'sort': { 'method': 'file', 'order': 'ascending' }
			},
			'method': 'Files.GetDirectory'
		},
		'Open': {
			'method': 'Player.Open'
		},
		'GetPlaylists': {
			'method': 'Playlist.GetPlaylists'
		},
		'GetPlaylistItems': {
			'method': 'Playlist.GetItems',
			'params': { 'properties': [ 'title', 'file', 'thumbnail' ] }
		},
		'AddToPlaylist': {
			'method': 'Playlist.Add'
		},
		'RemoveFromPlaylist': {
			'method': 'Playlist.Remove'
		},
		'ClearPlaylist': {
			'method': 'Playlist.Clear'
		},
		'GetActivePlayer': {
			'method': 'Player.GetActivePlayers',
			'wrapper': function (players, callback) {
				if (!players.length) { callback(); return; };
				callback(players[0]); //run callback with the active player
			}
		},
		'GetActivePlayerID': {
			'method': 'Player.GetActivePlayers',
			'wrapper': function (players, callback) {
				if (!players.length) return; //do nothing if there is nothing playing
				callback(players[0].playerid); //run callback with the id of the active player
			}
		},
		'GetPlayerProperties': {
			'method': 'Player.GetProperties',
			'params': { 'properties': [ 'speed', 'time', 'percentage', 'totaltime', 'playlistid', 'position' ] }
		},
		'GetActivePlayerProperties': function (callback) {
			pub.GetActivePlayer(function (player) {
				if (!player) { callback(); return; }
				else pub.GetPlayerProperties({ 'playerid': player.playerid },
					function (properties) {
						callback(properties);
					}
				);
			});
		},
		'PlayPause': {
			'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
			'method': 'Player.PlayPause'
		},
		'Stop': {
			'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
			'method': 'Player.Stop'
		},
		'GoNext': {
			'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
			'method': 'Player.GoNext'
		},
		'GoPrevious': {
			'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
			'method': 'Player.GoPrevious'
		},
		'Play': function (file, playlistid, callback) {
			pub.ClearPlaylist({ 'playlistid': playlistid }, function () {
				pub.AddToPlaylist({ 'playlistid': playlistid, 'item': { 'file': file } }, function () {
					pub.Open({ 'item': { 'playlistid': playlistid } }, callback);
				});
			});				
		},
		'Seek': {
			'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
			'method': 'Player.Seek'
		},
		'Volume': {
			'method': 'Application.SetVolume'
		},
		'GetApplicationProperties': {
			'params': { 'properties': [ 'volume', 'muted', 'name' ] },
			'method': 'Application.GetProperties'
		},
		'Down': {
			'method': 'Input.Down'
		},
		'Up': {
			'method': 'Input.Up'
		},
		'Left': {
			'method': 'Input.Left'
		},
		'Right': {
			'method': 'Input.Right'
		},
		'Back': {
			'method': 'Input.Back'
		},
		'Home': {
			'method': 'Input.Home'
		},
		'Select': {
			'method': 'Input.Select'
		},
		'Info': {
			'method': 'Input.Info'
		},
		'ContextMenu': {
			'method': 'Input.ContextMenu'
		},
		'GetGUIProperties': {
			'params': { 'properties': [ "currentwindow", "currentcontrol", "skin", "fullscreen" ] },
			'method': 'GUI.GetProperties'
		},
		'GetGUIPropertiesFullscreen': {
			'params': { 'properties': [ "fullscreen" ] },
			'method': 'GUI.GetProperties'
		},
		'ToggleFullscreen': function (callback) {
			pub.GetGUIPropertiesFullscreen(function (properties) {
				pub.Fullscreen( { 'fullscreen': !properties.fullscreen }, callback );
			});
		},
		'Fullscreen': {
			'method': 'GUI.SetFullscreen'
		},
		'Eject': {
			'method': 'System.EjectOpticalDrive'
		}
	};

	//public functions
	var pub = {
		'vfs2uri': function (vfs) {
			//if (vfs.substring(0,21) === 'image://http%3a%2f%2f') return decodeURIComponent( vfs.substring(8) ); //get image directly from the internet, bypassing the xbmc cache
			return VFSURL + encodeURIComponent(vfs);
		},
		'onnotification': function (method, callback) {
			if (callback instanceof Function) events[method] = callback;
		},
		'version': function () {
			return VERSION;
		}
	};
	
	var sendMessage = function (message) {
		if (socket.readyState === 1) { //try to use websocket
			if (message.data.id) socket.q[message.data.id] = message;
			socket.send(JSON.stringify(message.data));
			return 'websocket';
		} else { //ajax fallback
			$.ajax({
				'type': 'POST',
				'dataType': 'json',
				'contentType': 'application/json',
				'url': message.url,
				'data': JSON.stringify(message.data),
				'success': message.success,
				'error': message.error
			});
			return 'ajax';
		}
	};

	var load = function (name, params, callback) { //loads data from the JSON-RPC server using HTTP
		var data, dataString, success, error, transport;
		data = {'jsonrpc': '2.0', 'method': rpc[name].method, 'params': params };
		data.id = +new Date();
		dataString = JSON.stringify(data);
		success = function (result) {
		  	if (result.error) {
				if (DEBUG) console.log(transport+': ERROR RECEIVED: '+name+': '+JSON.stringify(data));
			  	result.result = result.error;
			  	//return;
		  	};
		  	if (callback) {
				if (DEBUG) console.log(transport+': MESSAGE RECEIVED: '+name/*+': '+JSON.stringify(result.result)*/);
		  		if (rpc[name].wrapper) rpc[name].wrapper( result.result, callback );
		  		else callback(result.result);
		  	};
		};
		error = function (result) {
			if (DEBUG) console.log(transport+': ERROR SENDING MESSAGE: '+name+': '+JSON.stringify(data));
			if (callback) callback();
		};
		transport = sendMessage({
			'url': URL+name,
			'data': data,
			'success': success,
			'error': error
		});
		if (DEBUG) console.log(transport+': MESSAGE SENT: '+name/*+': '+JSON.stringify(data)*/);
	};
	
	
	var makeFunction = function (index, item) { //make public functions from the rpc array
		var template = function (params, callback) { //template for all the xbmc.* functions
			if (params && params instanceof Function) {
					callback = params;
					params = {};
			}
			if (!params) params = {};
			if (item.params) $.extend(true, params, item.params);
			load(index, params, callback);
		};
		if (item instanceof Function) { //if item is a function, just use that
			pub[index] = item;
			return;
		}
		if (item.requires) pub[index] = function (params, callback) { //wrap the template if there is a dependency
			if (params instanceof Function) { callback = params; params = {}; }
			if (!params) params = {};
			//return the required function with the template as a callback
			pub[item.requires.value]( {}, function (result) {
				var newparams = {};
				if (result && item.requires.name) newparams[item.requires.name] = result;
				$.extend(newparams, params);
				template(newparams, callback);
			});
		};
		else pub[index] = template; //just use the bare template if there is no dependency
	};
	$.each(rpc, makeFunction); //make public functions from the rpc array
	
	var connectSocket = function (url) {
		socket = new WebSocket(url);
		socket.q = {};
		socket.onmessage = function (message) {
			var data = JSON.parse(message.data);
			
			if (data.id) { //json-rpc message
				if (socket.q[data.id] && socket.q[data.id].success) socket.q[data.id].success(data);
			}
			else { //json-rpc notification
				if (DEBUG) console.log('websocket: NOTIFICATION RECEIVED: '+JSON.stringify(data));
				if (events[data.method]) {
					events[data.method](data);
				};
			}
		};
		socket.onclose = function (close) {
			if (DEBUG) console.log('websocket: DISCONNECTED');
			window.setTimeout(function () {
				if (socket.readyState === 3) connectSocket(url);
			}, 1000); //retry after 1 second
		};
		socket.onopen = function () {
			if (DEBUG) console.log('websocket: CONNECTED');
		};
	};
	
	var parseURL = function (url, o) {
		var temp = document.createElement('a');
		temp.href = url;
		$.extend(temp,o);
		return temp.href;
	};
	
	var connect = function (address, success, fail) {
		URL =    parseURL(address, { 'pathname': 'jsonrpc', 'search': '' });
		VFSURL = parseURL(address, { 'pathname': 'vfs/' });
		WSURL =  parseURL(address, { 'pathname': 'jsonrpc', 'port': 9090, 'protocol': 'ws' });
		
		pub.Version(function (version) {
			if (version.version) {
				VERSION = version.version;
				if (success instanceof Function) success();
		
				if (VERSION >= 5) connectSocket(WSURL); //xbmc json-rpc api version 5 and above support websocket transport.
			}
			else {
				if (fail instanceof Function) fail();
			}
		});
	};

	return function (address, success, fail) {
		connect(address, success, fail);
		
		return pub;
	};
})(jQuery);
