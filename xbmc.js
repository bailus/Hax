var xbmcFactory = (function ($) { //create the xbmc global object
	"use strict";

	//globals
	var URL, VFSURL, pub = {},
	  DEBUG = false;

	var rpc = {
		'Introspect': {
			'method': 'JSONRPC.Introspect'
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
		'GetMovies': {
			'method': 'VideoLibrary.GetMovies',
			'params': { "properties": [ "genre", "director", "trailer", "tagline", "plot", "plotoutline", "title", "originaltitle", "lastplayed", "runtime", "year", "playcount", "rating", "thumbnail", "fanart", "file" ], "sort": { "method": "sorttitle", "ignorearticle": true } }
		},
		'GetMovieDetails': {
			'method': 'VideoLibrary.GetMovieDetails',
			'params': { 'properties': [ 'title', 'genre', 'year', 'rating', 'director', 'tagline', 'plot', 'runtime', 'fanart', 'thumbnail', 'writer', 'file' ] }
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
				if (!players.length) { if (DEBUG) console.log('xbmc: No Active Players'); return; } //do nothing if there is nothing playing
				callback(players[0].playerid); //run callback with the id of the active player
			}
		},
		'GetPlayerProperties': {
			'method': 'Player.GetProperties',
			'params': { 'properties': [ 'type', 'partymode', 'speed', 'time', 'percentage', 'totaltime', 'playlistid', 'position' ] }
		},
		'GetActivePlayerProperties': function (callback) {
			pub.GetActivePlayer(function (player) {
				if (!player) { callback(); if (DEBUG) console.log('xbmc: No Active Players'); return; }
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
		}
	};

	//public functions
	var pub = {
		'vfs2uri': function (vfs) {
			return VFSURL + encodeURIComponent(vfs);
		}
	};

	var load = function (name, params, callback) { //loads data from the JSON-RPC server using HTTP
		var data, dataString, success, error, ajax;
		data = {'jsonrpc': '2.0', 'method': rpc[name].method, 'params': params };
		data.id = +new Date();
		dataString = JSON.stringify(data);
		if (DEBUG) console.log('xbmc: loading '+name+': '+dataString);
		success = function (result) {
			//console.dir(result); //output all received data to the console
		  	if (result.error) {
			  	if (DEBUG) console.log('ERROR: '+result.error.message+' '+dataString);
			  	result.result = result.error;
			  	//return;
		  	};
		  	if (callback) {
			  	//if (DEBUG) console.log('data received');
		  		if (rpc[name].wrapper) rpc[name].wrapper( result.result, callback );
		  		else callback(result.result);
		  	};
		};
		error = function (result) {
			if (callback) callback();
		};
		ajax = {
			'type': 'POST',
			'dataType': 'json',
			'contentType': 'application/json',
			'url': URL+name,
			'data': dataString,
			'success': success,
			'error': error
		};
		return $.ajax(ajax);
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

	return function (address) {
		//TODO: sanitize address
		URL = address+'jsonrpc?';
		VFSURL = address+'vfs/';
		
		$.each(rpc, makeFunction);
		
		if (DEBUG) load('Introspect', {}, function (o) { window.console.log('xbmc: Loaded Introspect'); window.console.dir(o); });
		
		return pub;
	};
})(jQuery);
