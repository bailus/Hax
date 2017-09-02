import JSONRPC from './jsonrpc.js'

export default (function () {
	"use strict";

	let DEBUG = !!(window.advancedSettings && window.advancedSettings.xbmc && window.advancedSettings.xbmc.debug)

	const socket = { 'q': {} }
	const events = {}
	let server = undefined

	const extend = (object, modification) => {
		Object.keys(modification).forEach(key => {
			object[key] = modification[key]
		})
		return object
	}

	//the map below describes the xbmc.* functions
	//objects are passed to makeFunction() before being added
	const rpc = {
		'Open': {
			'method': 'Player.Open'
		},
		'GetActivePlayerID': function () {
			return xbmc.get({ 'method': 'Player.GetActivePlayers' })
			.then((players={}) => (!players.length > 0 ? undefined : players[0].playerid))
		},
		'GoTo': {
			'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
			'method': 'Player.GoTo'
		},
		'Seek': {
			'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
			'method': 'Player.Seek'
		},
		'Play': (o, playlistid, position) => 
			pub.get({
				method: 'Playlist.Clear',
				params: { 'playlistid': playlistid }
			})
			.then(result => pub.get({
				method: 'Playlist.Add',
				params: {
					'playlistid': playlistid,
					'item': typeof o === 'string' ? { 'file': o } : o
				}
			}))
			.then(result => pub.get({
				'method': 'Player.Open',
				'params': {
					'item': { 'playlistid': playlistid, 'position': position||0 }
				}
			}))

	};
	
	
	//Modifies parts of an url
	//parseURL( '/' );
	//parseURL( '/', { 'protocol': 'https', 'port': 8080 } );
	//parseURL( '/', function () { this.protocol = 'https'; this.port = 8080; } );
	//parseURL( '/', [ { 'protocol': 'https' }, function () { this.port = '8080'; } ] );
	
	const parseURL = function (url, m) {
		let temp = document.createElement('a');
		temp.href = url || '/';
		const modifyObject = function (object, modifications) {
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
	const first_ = func => array => {
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
	const pub = {
		'vfs2uri': (function () { //converts xbmc virtual filesystem paths to URIs
			let self, vfsurl = parseURL('/',{'protocol':'http'});
			self = function (vfs) {
				if (!vfs) return;
				//if (vfs.substring(0,21) === 'image://http%3a%2f%2f') return decodeURIComponent( vfs.substring(8) ); //get image directly from the internet, bypassing the xbmc cache
				return vfsurl + encodeURIComponent(vfs.replace(/\\/g,'/'));
			};
			self.set = function (url) {
				vfsurl = parseURL(url || '/');
			};
			return self;
		})(),
		'makeFilter': (state, filter) => (first_((filter) => {
					let value = state[filter.key]
					if (!value) return
		
					let out = {
						'filter': {},
						'name': filter.name,
						'value': new filter.type(value)
					}
					out.filter[filter.key] = out.value
					return out
				}))(filter),
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
		'sendMessageCached': (() => {
			const messageCache = new Map()
			return o => {
				const cacheResult = messageCache.get(JSON.stringify(o.params))
				if (cacheResult)
					return Promise.resolve(cacheResult)
				return server.sendMessage(o.method, o.params).then(data => {
					messageCache.set(JSON.stringify(o.params), data)
					return data
				})
			}
		})(),
		'sendMessage': ((method, params) => server.sendMessage(method, params)), //simple version of the above without caching,
		// get({ method: String, params: Object, cache: Boolean })
		// returns Promise<Object>
		'get': (o => {
			return ( (o.cache === true) ? pub.sendMessageCached(o) : pub.sendMessage(o.method, o.params) )
			.then(data => {
				if (data.result === undefined) {
					console.error(data.error)
					return Promise.reject(data.error)
				}
				return data.result
			})
		})
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
					if (pub.version() >= 5 && advancedSettings.upgradeToSocket) upgradeToSocket(wsURL)
					resolve(pub)
				} else {
					if (DEBUG) console.log('XBMC: Connection failure: Invalid version received', data.error)
					reject()
				}
			})
		})
	})

})()
