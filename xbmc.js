var xbmcFactory = (function ($) { //create the xbmc global object
	"use strict";

	//globals
	var VERSION, pub = {},
	  DEBUG = true, socket = { 'q': {} }, events = {}, server;

	var rpc = {
		'Introspect': {
			'method': 'JSONRPC.Introspect'
		},
		'Version': {
			'method': 'JSONRPC.Version'
		},
		'GetTVShows': {
			'method': 'VideoLibrary.GetTVShows',
			'params': { 'properties': [ 'thumbnail', 'year', 'studio' ] }
		},
		'GetTVShowDetails': {
			'method': 'VideoLibrary.GetTVShowDetails',
			'params': { 'properties': [ 'title', 'fanart', 'thumbnail' ] }
		},
		'GetTVEpisodes': {
			'method': 'VideoLibrary.GetEpisodes',
			'params': { 'properties': [ 'tvshowid', 'title', 'thumbnail', 'episode', 'season', 'file', 'showtitle', 'runtime', 'lastplayed' ] }
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
			'params': { "properties": [ "title", "originaltitle", "runtime", "year", "thumbnail", "file", "genre" ], "sort": { "method": "sorttitle", "ignorearticle": true } }
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
			'params': { 'properties': [ 'thumbnail', 'genre' ], 'albumartistsonly': true },
			'method': 'AudioLibrary.GetArtists'
		},
		'GetArtistDetails': {
			'params': { 'properties': [ 'thumbnail', 'instrument', 'style', 'born', 'formed', 'genre', 'died', 'disbanded', 'yearsactive', 'fanart' ] },
			'method': 'AudioLibrary.GetArtistDetails'
		},
		'GetSongs': {
			'params': { 'properties': [ 'artist', 'album', 'albumid', 'year', 'thumbnail', 'file', 'title', 'track', 'duration' ] },
			'method': 'AudioLibrary.GetSongs'
		},
		'GetRecentlyAddedAlbums': {
			'params': { 'properties': [ 'title', 'artist', 'albumlabel', 'rating', 'year', 'thumbnail' ], 'limits': { 'end': 5 } },
			'method': 'AudioLibrary.GetRecentlyAddedAlbums'
		},
		'GetAlbums': {
			'params': {
				'properties': [ 'title', 'artist', 'year', 'thumbnail' ],
				'sort': { 'method': 'year', 'order': 'ascending' }
			},
			'method': 'AudioLibrary.GetAlbums'
		},
		'GetAlbumDetails': {
			'params': { 'properties': [ 'title', 'artist', 'genre', 'type', 'albumlabel', 'rating', 'year', 'fanart', 'thumbnail', 'artistid' ] },
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
				'properties': [ 'title', 'duration', 'originaltitle', 'thumbnail', 'file', 'size', 'mimetype' ],
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
			'params': { 'properties': [ 'title', 'file', 'thumbnail', 'runtime', 'duration' ] }
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
	
	var parseURL = function (url, m) {
		var temp = document.createElement('a');
		temp.href = url;
		var modifyObject = function (object, modifications) {
			if (!(modifications instanceof Array)) modifications = [modifications];
			$.each(modifications, function (i, modification) {
				if (modification instanceof Function) modification.apply(object);
				else if (modification instanceof Array) object = modifyObject(object, modification);
				else $.extend(object, modification);
			});
			return object;
		};
		if (m) temp = modifyObject(temp, m);
		return temp.href;
	};

	//public functions
	var pub = {
		'vfs2uri': (function () { //converts xbmc virtual filesystem paths to URIs
			var self, vfsurl = parseURL('/',{'protocol':'http'});
			self = function (vfs) {
				//if (vfs.substring(0,21) === 'image://http%3a%2f%2f') return decodeURIComponent( vfs.substring(8) ); //get image directly from the internet, bypassing the xbmc cache
				return vfsurl + encodeURIComponent(vfs);
			};
			self.set = function (url) {
				vfsurl = parseURL(url || '/');
			};
			return self;
		})(),
		'onNotification': function (method, callback) {
			server.onNotification(method, callback);
		},
		'version': (function () {
			var self, version;
			self = function () { return version; }
			self.set = function (v) { if (v >= 0) version = v; }
			return self;
		})(),
		'transport': (function () {
			var self, transport = 'ajax';
			self = function () { return transport; }
			self.set = function (t) { transport = t; }
			return self;
		})()
	};

	var load = function (name, params, callback) { //loads data from the JSON-RPC server using HTTP
		var r = rpc[name];
		if (r && r.method) server.sendMessage(r.method, params, callback ? function (result) {
		  	if (callback instanceof Function) {
				if (result.result) result = result.result;
		  		if (r.wrapper) r.wrapper( result, callback );
		  		else callback(result);
			}
		} : undefined);
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
	
	var upgradeToSocket = function (address, callback) { //upgrade from ajax to websocket
		var ws = JSONRPC(address), ajax = server;
		$.each(ajax.notifications(), function (method, func) { //transfer onNotification events to the websocket transport
			ws.onNotification(method, func);
		});
		if (DEBUG) console.log('XBMC: Attempting to upgrade transport to websocket '+address);
		ws.onConnect(function () {
			if (DEBUG) console.log('XBMC: Transport upgraded to websocket');
			server = ws; //replace ajax transport with websocket
			pub.transport.set('websocket');
			if (callback instanceof Function) callback();
		});
		ws.onDisconnect(function () { //replace websocket transport with ajax
			if (DEBUG) console.log('XBMC: Upgrading transport to websocket failed');
			if (pub.transport() === 'websocket') server = ajax;
			pub.transport.set('ajax');
		});
	};

	return function (address, success, fail) {
		
		//set URL variables
		var ajaxURL = parseURL(address, { 'protocol': 'http', 'pathname': 'jsonrpc', 'search': '' });
		var wsURL = parseURL(address, { 'protocol': 'ws',   'pathname': 'jsonrpc', 'port': 9090 });
		pub.vfs2uri.set(parseURL(address, [
			{ 'protocol': 'http', 'pathname': 'vfs/' },
			function () { if (this.port === 9090) this.port = 80 }
		]));
		
		if (DEBUG) console.log('XBMC: Connecting to '+ajaxURL);
	 
	 	//create an ajax transport
		server = JSONRPC(ajaxURL);
		pub.transport.set('ajax');
	
		//get the version from the server, if it is over 5 the server supports websockets so we should upgrade the connection
		server.sendMessage('JSONRPC.Version',
		  function (data) { //success
			if (data.result && data.result.version) {
				if (DEBUG) console.log('XBMC: Connected: API Version '+data.result.version);
				pub.version.set(data.result.version);
				if (data.result.version >= 5) upgradeToSocket(wsURL);
				if (success instanceof Function) success();
			} else {
				if (DEBUG) console.log('XBMC: Connection failure: Invalid version received', data);
				if (fail instanceof Function) fail();
			}
		  },
		  function (data, error) { //failure
			if (DEBUG) console.log('XBMC: Connection failure: '+error, data);
			if (fail instanceof Function) fail();
		  });

		
		return pub;
	};
})(jQuery);
