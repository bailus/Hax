let Kodi = (function () {
	"use strict";

	let extend = (object, modification) => {
		Object.keys(modification).forEach(key => {
			object[key] = modification[key]
		})
		return object
	}


	let socket = { 'q': {} },
		events = {},
		server = undefined

	//the map below describes the XBMC.* functions
	//functions are added to the XBMC object
	//objects are passed to makeFunction() before being added
	let rpc = {
		'Introspect': {
			'method': 'JSONRPC.Introspect'
		},
		'Version': {
			'method': 'JSONRPC.Version'
		},
		'GetAddons': {
			'method': 'Addons.GetAddons',
			'cache': true
		},
		'GetAddonDetails': {
			'method': 'Addons.GetAddonDetails',
			'params': { 'properties': [ 'name', 'version', 'summary', 'author', 'thumbnail', 'broken', 'enabled' ] },
			'cache': true
		},
		'GetChannelGroups': {
			'method': 'PVR.GetChannelGroups',
			'cache': true
		},
		'GetChannelGroupDetails': {
			'method': 'PVR.GetChannelGroupDetails',
			'cache': true
		},
		'GetChannels': {
			'method': 'PVR.GetChannels',
			'params': { 'properties': [ 'thumbnail', 'hidden', 'locked', 'channel' ] },
			'cache': true
		},
		'GetChannel': {
			'method': 'PVR.GetChannelDetails',
			'params': { 'properties': [ 'thumbnail', 'hidden', 'locked', 'channel' ] },
			'cache': true
		},
		'GetTVShows': {
			'method': 'VideoLibrary.GetTVShows',
			'params': { 'properties': [ 'thumbnail', 'art', 'year', 'studio', 'genre' ] },
			'cache': true
		},
		'GetTVShowDetails': {
			'method': 'VideoLibrary.GetTVShowDetails',
			'params': { 'properties': [ 'title', 'art', 'thumbnail' ] },
			'cache': true
		},
		'GetTVEpisodes': {
			'method': 'VideoLibrary.GetEpisodes',
			'params': { 'properties': [ 'tvshowid', 'title', 'thumbnail', 'episode', 'season', 'file', 'showtitle', 'runtime', 'lastplayed' ] },
			'cache': true
		},
		'GetEpisodeDetails': {
			'method': 'VideoLibrary.GetEpisodeDetails',
			'params': { 'properties': [ 'title', 'plot', 'writer', 'firstaired', 'playcount', 'runtime', 'director', 'season', 'episode', 'showtitle', 'cast', 'streamdetails', 'lastplayed', 'thumbnail', 'fanart', 'file', 'tvshowid' ] }
		},
		'GetRecentlyAddedEpisodes': {
			'method': 'VideoLibrary.GetRecentlyAddedEpisodes',
			'params': { 'properties': [ 'tvshowid', 'title', 'thumbnail', 'episode', 'season', 'file', 'showtitle' ], 'limits': { 'end': 5 } }
		},
		'GetMovies': {
			'method': 'VideoLibrary.GetMovies',
			'params': { "properties": [ "title", "originaltitle", "runtime", "year", "thumbnail", "file", "genre" ], "sort": { "method": "sorttitle", "ignorearticle": true } },
			'cache': true
		},
		'GetMovieYears': {
			'method': 'VideoLibrary.GetMovies',
			'params': { "properties": [ "year" ] },
			'cache': true
		},
		'GetVideoGenres': {
			'method': 'VideoLibrary.GetGenres',
			'cache': true
		},
		'GetAudioGenres': {
			'method': 'AudioLibrary.GetGenres',
			'cache': true
		},
		'GetRecentlyAddedMovies': {
			'method': 'VideoLibrary.GetRecentlyAddedMovies',
			'params': { "properties": [ "title", "originaltitle", "runtime", "year", "thumbnail" ], 'limits': { 'end': 5 } }
		},
		'GetRecentlyAddedMusicVideos': {
			'method': 'VideoLibrary.GetRecentlyAddedMusicVideos',
			'params': { "properties": [ "title", "runtime", "artist", "year", "thumbnail" ], 'limits': { 'end': 5 } }
		},
		'GetMovieDetails': {
			'method': 'VideoLibrary.GetMovieDetails',
			'params': { 'properties': [ 'title', 'genre', 'year', 'director', 'tagline', 'plot', 'runtime', 'fanart', 'thumbnail', 'writer', 'file' ] }
		},
		'GetArtists': {
			'params': { 'properties': [ 'thumbnail', 'genre' ], 'albumartistsonly': true },
			'method': 'AudioLibrary.GetArtists',
			'cache': true
		},
		'GetArtistDetails': {
			'params': { 'properties': [ 'thumbnail', 'genre', 'born', 'formed', 'died', 'disbanded' ] },
			'method': 'AudioLibrary.GetArtistDetails',
			'cache': true
		},
		'GetSongs': {
			'params': { 'properties': [ 'file', 'title', 'track', 'duration' ] },
			'method': 'AudioLibrary.GetSongs'
		},
		'GetRecentlyAddedAlbums': {
			'params': { 'properties': [ 'title', 'artist', 'albumlabel', 'year', 'thumbnail' ], 'limits': { 'end': 5 } },
			'method': 'AudioLibrary.GetRecentlyAddedAlbums'
		},
		'GetAlbums': {
			'params': {
				'properties': [ 'title', 'artist', 'year', 'thumbnail' ]
			},
			'method': 'AudioLibrary.GetAlbums',
			'cache': true
		},
		'GetAlbumDetails': {
			'params': { 'properties': [ 'title', 'artist', 'genre', 'albumlabel', 'year', 'fanart', 'thumbnail' ] },
			'method': 'AudioLibrary.GetAlbumDetails'
		},
		'GetMusicVideos': {
			'params': { 'properties': [ 'title', 'runtime', 'year', 'album', 'artist', 'track', 'thumbnail', 'file' ] },
			'method': 'VideoLibrary.GetMusicVideos',
			'cache': true
		},
		'GetMusicVideo': {
			'params': { 'properties': [ 'title', 'runtime', 'year', 'album', 'artist', 'track', 'thumbnail', 'file' ] },
			'method': 'VideoLibrary.GetMusicVideo'
		},
		'GetSources': {
			'method': 'Files.GetSources',
			'cache': true
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
			'params': { 'properties': [ 'title', 'showtitle', 'artist', 'season', 'episode', 'file', 'thumbnail', 'runtime', 'duration' ] }
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
			'params': { 'properties': [ 'time', 'totaltime', 'speed', 'playlistid', 'position', 'repeat', 'type', 'partymode', 'shuffled', 'live' ] }
		},
		'GetActivePlayerProperties': () => new Promise((resolve, reject) => {
			pub.GetActivePlayer()
			.then(player => {
				if (!player)
					resolve()
				else
					pub.GetPlayerProperties({ 'playerid': player.playerid })
					.then(resolve).catch(reject)
			})
		}),
		'PlayPause': {
			'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
			'method': 'Player.PlayPause'
		},
		'Stop': {
			'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
			'method': 'Player.Stop'
		},
		'GoTo': {
			'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
			'method': 'Player.GoTo'
		},
		'GoNext': function (callback) {
			pub.GoTo({ 'to': 'next' }, callback);
		},
		'GoPrevious': function (callback) {
			pub.GoTo({ 'to': 'previous' }, callback);
		},
		'Play': (o, playlistid, position) => 
			pub.ClearPlaylist({ 'playlistid': playlistid })
			.then(data => pub.AddToPlaylist({ 'playlistid': playlistid, 'item': typeof o === 'string' ? { 'file': o } : o }))
			.then(data => pub.Open({ 'item': { 'playlistid': playlistid, 'position': position||0 } })),
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
		'SendText': {
			'method': 'Input.SendText'
		},
		'ExecuteAction': {
			'method': 'Input.ExecuteAction'
		},
		'Action': function (action, callback) {
			pub.ExecuteAction({ 'action': action }, callback);
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
	
	
	//Modifies parts of an url
	//parseURL( '/' );
	//parseURL( '/', { 'protocol': 'https', 'port': 8080 } );
	//parseURL( '/', function () { this.protocol = 'https'; this.port = 8080; } );
	//parseURL( '/', [ { 'protocol': 'https' }, function () { this.port = '8080'; } ] );
	
	let parseURL = function (url, m) {
		let temp = document.createElement('a');
		temp.href = url || '/';
		let modifyObject = function (object, modifications) {
			if (!(modifications instanceof Array)) modifications = [modifications];
			modifications.forEach(modification => {
				if (modification instanceof Function) modification.apply(object);
				else if (modification instanceof Array) object = modifyObject(object, modification);
				else Object.keys(modification).forEach(key => {
					object[key] = modification[key]
				})

			});
			return object;
		};
		if (m) temp = modifyObject(temp, m);
		return temp.href;
	};

	//like Array.some but returns the value of the function instead of true/false
	let first_ = func => array => {
		let out = undefined
		Array.prototype.some.call(array, (elem, i) => {
			const value = func(elem, i)
			if (value) {
				out = value
				return true
			}
		})
		return out
	}

	//public functions
	let pub = {
		'vfs2uri': (function () { //converts xbmc virtual filesystem paths to URIs
			let self, vfsurl = parseURL('/',{'protocol':'http'});
			self = function (vfs) {
				//if (vfs.substring(0,21) === 'image://http%3a%2f%2f') return decodeURIComponent( vfs.substring(8) ); //get image directly from the internet, bypassing the xbmc cache
				return vfsurl + encodeURIComponent(vfs);
			};
			self.set = function (url) {
				vfsurl = parseURL(url || '/');
			};
			return self;
		})(),
		'makeFilter': first_(filter => {
			let value = getHash(filter.key)
			if (value === undefined) return

			let out = {
				'filter': {},
				'name': filter.name,
				'value': new filter.type(value)
			}
			out.filter[filter.key] = out.value
			return out
		}),
		'onNotification': function (method, callback) {
			server.onNotification(method, callback);
		},
		'version': (function () {
			let version = undefined
			let self = function () { return version }
			self.set = function (v) { if (v >= 0) version = v }
			return self
		})(),
		'transport': (function () {
			let transport = 'ajax'
			let self = function () { return transport }
			self.set = function (t) { transport = t }
			return self
		})(),
		'sendMessage': ((method, params) => server.sendMessage(method, params))
	};



	let cache = new Map();
	function load (name, params, callback) { //loads data from the JSON-RPC server
		let r = rpc[name]
		let cb = undefined
		//let hash = r.method+'_'+JSON.stringify(params).replace(/\W/g,'')
		//let cached = cache[hash]
		let cached = cache.get(params)
		if (cached) callback(cached)
		else {
			if (r && r.method)
				server.sendMessage(r.method, params)
				.then(function (result) {
				  	if (callback instanceof Function) {
				  		cb = r.cache ? function (x) { cache.set(params, x); return callback(x); } : callback;
						if (result.result) result = result.result;
				  		if (r.wrapper) r.wrapper(result, cb);
				  		else cb(result);
					}
				})
		}
	}
	
	
	function makeFunction (item, index) { //make public functions from the rpc array
		let template = params => new Promise((resolve, reject) => {
			if (!params) params = {}
			if (item.params) extend(params, item.params)
			load(index, params, resolve)
		})
		if (item instanceof Function) { //if item is a function, just use that
			pub[index] = item
			return
		}
		if (item.requires) pub[index] = params => { //wrap the template if there is a dependency
			return new Promise((resolve, reject) => {
					//return the required function with the template as a callback
					return pub[item.requires.value]().then(result => {
						if (!params) params = {}
						if (result !== undefined)
							params[item.requires.name] = result
						return template(params)
					})
			})
		}
		else pub[index] = template //just use the bare template if there is no dependency
	}
	Object.getOwnPropertyNames(rpc).forEach(key => makeFunction(rpc[key], key))  //make public functions from the rpc array
	

	function upgradeToSocket (address, callback) { //upgrade from ajax to websocket
		let ws = JSONRPC(address)
		let ajax = server
		if (DEBUG) console.log('XBMC: Attempting to upgrade transport to websocket', address)
		if (!ws) { //ws is undefined if the browser has no websocket support
			if (DEBUG) console.log('XBMC: No websocket support in this browser', navigator.userAgent)
			return
		}
		ws.notifications(ajax.notifications())
		ws.onConnect(function () {
			if (DEBUG) console.log('XBMC: Transport upgraded to websocket')
			server = ws //replace ajax transport with websocket
			pub.transport.set('websocket')
			if (callback instanceof Function) callback()
		})
		ws.onDisconnect(function () { //replace websocket transport with ajax
			if (DEBUG) console.log('XBMC: Upgrading transport to websocket failed')
			if (pub.transport() === 'websocket') server = ajax
			pub.transport.set('ajax')
		})
	}

	return (addr => {
		let address = parseURL('/', { 'host': addr })

		return new Promise((resolve, reject) => {

			//set URL variables
			let ajaxURL = parseURL(address, { 'protocol': 'http', 'pathname': 'jsonrpc', 'search': '' })
			let wsURL = parseURL(address, { 'protocol': 'ws', 'pathname': 'jsonrpc', 'port': 9090 })
			pub.vfs2uri.set(parseURL(address, [
				{ 'protocol': 'http', 'pathname': 'vfs/' }//,
				//function () { if (this.port === 9090) this.port = 80 }
			]))
			
			if (DEBUG) console.log('XBMC: Connecting to ', ajaxURL)
		 
		 	//create an ajax transport
			server = JSONRPC(ajaxURL)
			pub.transport.set('ajax')
		
			//get the version from the server, if it is over 5 the server supports websockets so we should upgrade the connection
			server.sendMessage('JSONRPC.Version')
			.catch(error => {
				if (DEBUG) console.log('XBMC: Connection failure: ', error)
				reject()
			})
			.then(data => {
				if (data.result && data.result.version) {
					if (DEBUG) console.log('XBMC: Connected: API Version ', data.result.version)
					pub.version.set(data.result.version.major || data.result.version || undefined)
					if (pub.version() >= 5) upgradeToSocket(wsURL)
					resolve(pub)
				} else {
					if (DEBUG) console.log('XBMC: Connection failure: Invalid version received', data.error)
					reject()
				}
			})
		})
	})

})()
