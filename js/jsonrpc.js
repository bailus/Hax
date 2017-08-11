/*
JSON-RPC v2.0 javascript client. (es2015 module)
Supports websocket and ajax (http) transports.

author: Samuel Bailey (sam@bailey.geek.nz)
licence: To the extent possible under law, Samuel Bailey has waived all copyright and related or neighboring rights to this work. This work is published from: New Zealand.

usage:
	import JSONRPC from 'jsonrpc.js';
	let server = JSONRPC( 'ws://localhost:9090/jsonrpc' );
	server.sendMessage('JSONRPC.Introspect', function (data) {
		console.log('JSONRPC Introspect: ', data);
	});
	server.onNotification('Player.OnPlay', function (data) {
		console.log('Playing', data);
	});
	
methods:
	sendMessage( method[, data], function (data) {  } );
		Returns true if the message was sent immediately, false if it was buffered.
	
	sendNotification( method[, data] );
		Returns true if the notification was sent immediately, false if it was buffered.

events: (websocket only)
	onNotification( method, function (data) {  } );
		Runs the function when a notification with a matching method is received.
	
	onConnect( function () {  } );
		Runs the function when the websocket is ready.
	
	onDisconnect( function () {  } );
		Runs the function when the websocket disconnects.
	
*/
export default ((window, undefined) => {
"use strict";

	const $ = {  //dummy jQuery object TODO: get rid of this
		extend: (a, b) => {
			Object.getOwnPropertyNames(b).forEach(key => {
				a[key] = b[key]
			})
			return a
		},
		each: (o, callback) => {
			Object.keys(o).forEach(key => callback(key, o[key]))
		}
	}
	
	let DEBUG = !!(window.advancedSettings && window.advancedSettings.jsonRPC && window.advancedSettings.jsonRPC.debug)
	const WEBSOCKET_TIMEOUT = 3000 //3 seconds
	const MAX_SOCKET_CONNECTION_ATTEMPTS = 3
	let notifications = {}
	let onopen = []
	let onclose = []
	let address
	let transport
	
	function parseURL (url, func) {

		let temp = document.createElement('a')
		temp.href = url
		if (func instanceof Function) func.apply(temp)

		return temp.href
	}
	
	function connect (url) {

		address = parseURL(url, function () {
			if ((this.protocol === 'ws:') || (this.protocol === 'wss:')) transport = 'websocket'
			if ((this.protocol === 'http:') || (this.protocol === 'https:')) transport = 'ajax'
		})

		if (transport) return $.extend({
			'transport': transport,
			'address': address,
			'connect': connect,
			'onNotification': function (method, callback) {
				if (!notifications[method]) notifications[method] = []
				notifications[method].push(callback)
			},
			'onConnect': function (callback) {
				if (callback instanceof Function) onopen.push(callback)
			},
			'onDisconnect': function (callback) {
				if (callback instanceof Function) onclose.push(callback)
			},
			'notifications': function (n) {
				if (n) notifications = n
				return notifications
			}
		}, JSONRPC[transport](address))
	}

	function JSONRPC (url, debug) {
		if (debug && window.console) DEBUG = true
		if (url) return connect(url)
	}

	let nextId = 0
	function sendMessage (method, params) {
		if (DEBUG) console.log('JSONRPC.ajax: SENDING MESSAGE: '+method, params)

		return this.send({
			'data': {
				'jsonrpc': '2.0',
				'method': method,
				'params': params || {},
				'id': nextId++
			}
		})
		.catch(error => {
			if (DEBUG) console.log('JSONRPC.ajax: MESSAGE ERROR: '+method, error)
			return error
		})
		.then(data => {
			if (DEBUG) console.log('JSONRPC.ajax: RECEIVING MESSAGE: '+method, data)
			return data
		})
	}


	function sendNotification (method, params) {

		if (DEBUG) console.log('JSONRPC.ajax: NOTIFICATION SENT: '+method, params);

		return this.send({
			'data': {
				'jsonrpc': '2.0',
				'method': method,
				'params': params || {}
			}
		})

	}

	JSONRPC.ajax = function (url) {

		function send (message) {
			return fetch(new Request(url, {
				method: 'POST',
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify(message.data)
			}))
			.then(response => response.json())

		}

		return {
			'send': send,
			'sendMessage': sendMessage,
			'sendNotification': sendNotification
		}
	}

	JSONRPC.websocket = function (url) {
		let socket = {},
			messages = {},
			buffer = [],
			socketConnectionAttempts = 0

		function socketReady () {
			return socket.readyState === 1
		}

		function send (message) {
			return new Promise((resolve, reject) => {
				let id = message.data.id
				message.success = resolve
				if (socketReady()) {

					if (id && (message.success instanceof Function)) {
						message.timeout = window.setTimeout(function () {

							if (DEBUG) console.log('JSONRPC.websocket: MESSAGE TIMEOUT: RE-SENDING: '+message.data.method, message)

							if (messages[id]) {
								delete messages[id]
								send(message)
							}

						}, WEBSOCKET_TIMEOUT)
						messages[id] = message //if its a message, save it in the message callback buffer
					}

					try {
						socket.send(JSON.stringify(message.data))
					} catch(e) {
						console.error('JSONRPC.websocket: ERROR SENDING DATA: '+e, message.data)
						throw e
					}
					return true

				} else {
					buffer.push(message)
					return false
				}
			})
		}

		function sendNext () {
		  	if (buffer.length) send(buffer.shift())
		}

		function connectSocket () {
			socket = new WebSocket(url)
			socket.q = {}
			socket.onmessage = function (message) {
				let data = JSON.parse(message.data)
				let m
			
				if (data.id) { //json-rpc message
					if (messages[data.id]) {
						m = messages[data.id]
						if (DEBUG) console.log('JSONRPC.websocket: MESSAGE RECEIVED: '+m.data.method, data)
						if (m.success instanceof Function) m.success(data)
						window.clearTimeout(m.timeout)
						delete messages[data.id]
					}
				}
				else { //json-rpc notification
					if (DEBUG) console.log('JSONRPC.websocket: NOTIFICATION RECEIVED: '+data.method, data)
					if (notifications[data.method]) {
						$.each(notifications[data.method], function (i, o) { if (o instanceof Function) o(data.params); })
					}
				}
				sendNext()
			}
			socket.onclose = function (close) {
				if (DEBUG) console.log('JSONRPC.websocket: DISCONNECTED')
				if (socketConnectionAttempts < MAX_SOCKET_CONNECTION_ATTEMPTS) { //reconnect socket
					window.setTimeout(function () {
						if (socket.readyState === 3) connectSocket()
					}, 1000) //retry after 1 second
				}
				else $.each(onclose, function (i, o) { if (o instanceof Function) o() }) //too many connection attempts
			}
			socket.onopen = function () {
				if (DEBUG) console.log('JSONRPC.websocket: CONNECTED')
				socketConnectionAttempts = 0
				sendNext(); //re-start the buffer when the socket reconnects
				$.each(onopen, function (i, o) { if (o instanceof Function) o() })
			}
		}

		if (!('WebSocket' in window)) return

		connectSocket()

		return {
			'send': send,
			'sendMessage': sendMessage,
			'sendNotification': sendNotification
		}
	}
	
	return JSONRPC;

})(window);
