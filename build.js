!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},r.name);t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return D(e.substr(6));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.register("2", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
            exports_1("default",(function (window, undefined) {
                "use strict";
                var $ = {
                    extend: function (a, b) {
                        Object.getOwnPropertyNames(b).forEach(function (key) {
                            a[key] = b[key];
                        });
                        return a;
                    },
                    each: function (o, callback) {
                        Object.keys(o).forEach(function (key) { return callback(key, o[key]); });
                    }
                };
                var DEBUG = !!(window.advancedSettings && window.advancedSettings.jsonRPC && window.advancedSettings.jsonRPC.debug);
                var WEBSOCKET_TIMEOUT = 3000; //3 seconds
                var MAX_SOCKET_CONNECTION_ATTEMPTS = 3;
                var notifications = {};
                var onopen = [];
                var onclose = [];
                var address;
                var transport;
                function parseURL(url, func) {
                    var temp = document.createElement('a');
                    temp.href = url;
                    if (func instanceof Function)
                        func.apply(temp);
                    return temp.href;
                }
                function connect(url) {
                    address = parseURL(url, function () {
                        if ((this.protocol === 'ws:') || (this.protocol === 'wss:'))
                            transport = 'websocket';
                        if ((this.protocol === 'http:') || (this.protocol === 'https:'))
                            transport = 'ajax';
                    });
                    if (transport)
                        return $.extend({
                            'transport': transport,
                            'address': address,
                            'connect': connect,
                            'onNotification': function (method, callback) {
                                if (!notifications[method])
                                    notifications[method] = [];
                                notifications[method].push(callback);
                            },
                            'onConnect': function (callback) {
                                if (callback instanceof Function)
                                    onopen.push(callback);
                            },
                            'onDisconnect': function (callback) {
                                if (callback instanceof Function)
                                    onclose.push(callback);
                            },
                            'notifications': function (n) {
                                if (n)
                                    notifications = n;
                                return notifications;
                            }
                        }, JSONRPC[transport](address));
                }
                function JSONRPC(url, debug) {
                    if (debug && window.console)
                        DEBUG = true;
                    if (url)
                        return connect(url);
                }
                var nextId = 0;
                function sendMessage(method, params) {
                    if (DEBUG)
                        console.log('JSONRPC.ajax: SENDING MESSAGE: ' + method, params);
                    return this.send({
                        'data': {
                            'jsonrpc': '2.0',
                            'method': method,
                            'params': params || {},
                            'id': nextId++
                        }
                    })
                        .catch(function (error) {
                        if (DEBUG)
                            console.log('JSONRPC.ajax: MESSAGE ERROR: ' + method, error);
                        return error;
                    })
                        .then(function (data) {
                        if (DEBUG)
                            console.log('JSONRPC.ajax: RECEIVING MESSAGE: ' + method, data);
                        return data;
                    });
                }
                function sendNotification(method, params) {
                    if (DEBUG)
                        console.log('JSONRPC.ajax: NOTIFICATION SENT: ' + method, params);
                    return this.send({
                        'data': {
                            'jsonrpc': '2.0',
                            'method': method,
                            'params': params || {}
                        }
                    });
                }
                JSONRPC.ajax = function (url) {
                    function send(message) {
                        return fetch(new Request(url, {
                            method: 'POST',
                            headers: new Headers({
                                'Content-Type': 'application/json'
                            }),
                            body: JSON.stringify(message.data)
                        }))
                            .then(function (response) { return response.json(); });
                    }
                    return {
                        'send': send,
                        'sendMessage': sendMessage,
                        'sendNotification': sendNotification
                    };
                };
                JSONRPC.websocket = function (url) {
                    var socket = {}, messages = {}, buffer = [], socketConnectionAttempts = 0;
                    function socketReady() {
                        return socket.readyState === 1;
                    }
                    function send(message) {
                        return new Promise(function (resolve, reject) {
                            var id = message.data.id;
                            message.success = resolve;
                            if (socketReady()) {
                                if (id && (message.success instanceof Function)) {
                                    message.timeout = window.setTimeout(function () {
                                        if (DEBUG)
                                            console.log('JSONRPC.websocket: MESSAGE TIMEOUT: RE-SENDING: ' + message.data.method, message);
                                        if (messages[id]) {
                                            delete messages[id];
                                            send(message);
                                        }
                                    }, WEBSOCKET_TIMEOUT);
                                    messages[id] = message; //if its a message, save it in the message callback buffer
                                }
                                try {
                                    socket.send(JSON.stringify(message.data));
                                }
                                catch (e) {
                                    console.error('JSONRPC.websocket: ERROR SENDING DATA: ' + e, message.data);
                                    throw e;
                                }
                                return true;
                            }
                            else {
                                buffer.push(message);
                                return false;
                            }
                        });
                    }
                    function sendNext() {
                        if (buffer.length)
                            send(buffer.shift());
                    }
                    function connectSocket() {
                        socket = new WebSocket(url);
                        socket.q = {};
                        socket.onmessage = function (message) {
                            var data = JSON.parse(message.data);
                            var m;
                            if (data.id) {
                                if (messages[data.id]) {
                                    m = messages[data.id];
                                    if (DEBUG)
                                        console.log('JSONRPC.websocket: MESSAGE RECEIVED: ' + m.data.method, data);
                                    if (m.success instanceof Function)
                                        m.success(data);
                                    window.clearTimeout(m.timeout);
                                    delete messages[data.id];
                                }
                            }
                            else {
                                if (DEBUG)
                                    console.log('JSONRPC.websocket: NOTIFICATION RECEIVED: ' + data.method, data);
                                if (notifications[data.method]) {
                                    $.each(notifications[data.method], function (i, o) { if (o instanceof Function)
                                        o(data.params); });
                                }
                            }
                            sendNext();
                        };
                        socket.onclose = function (close) {
                            if (DEBUG)
                                console.log('JSONRPC.websocket: DISCONNECTED');
                            if (socketConnectionAttempts < MAX_SOCKET_CONNECTION_ATTEMPTS) {
                                window.setTimeout(function () {
                                    if (socket.readyState === 3)
                                        connectSocket();
                                }, 1000); //retry after 1 second
                            }
                            else
                                $.each(onclose, function (i, o) { if (o instanceof Function)
                                    o(); }); //too many connection attempts
                        };
                        socket.onopen = function () {
                            if (DEBUG)
                                console.log('JSONRPC.websocket: CONNECTED');
                            socketConnectionAttempts = 0;
                            sendNext(); //re-start the buffer when the socket reconnects
                            $.each(onopen, function (i, o) { if (o instanceof Function)
                                o(); });
                        };
                    }
                    if (!('WebSocket' in window))
                        return;
                    connectSocket();
                    return {
                        'send': send,
                        'sendMessage': sendMessage,
                        'sendNotification': sendNotification
                    };
                };
                return JSONRPC;
            })(window));
        }
    }
});

$__System.register("3", ["2"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var jsonrpc_1;
    return {
        setters:[
            function (jsonrpc_1_1) {
                jsonrpc_1 = jsonrpc_1_1;
            }],
        execute: function() {
            exports_1("default",(function () {
                "use strict";
                var DEBUG = !!(window.advancedSettings && window.advancedSettings.xbmc && window.advancedSettings.xbmc.debug);
                var socket = { 'q': {} };
                var events = {};
                var server = undefined;
                var extend = function (object, modification) {
                    Object.keys(modification).forEach(function (key) {
                        object[key] = modification[key];
                    });
                    return object;
                };
                //the map below describes the xbmc.* functions
                //objects are passed to makeFunction() before being added
                var rpc = {
                    'Open': {
                        'method': 'Player.Open'
                    },
                    'GetActivePlayer': {
                        'method': 'Player.GetActivePlayers',
                        'wrapper': function (players, callback) {
                            if (!players.length) {
                                callback();
                                return;
                            }
                            ;
                            callback(players[0]); //run callback with the active player
                        }
                    },
                    'GetActivePlayerID': {
                        'method': 'Player.GetActivePlayers',
                        'wrapper': function (players, callback) {
                            if (!players.length)
                                return; //do nothing if there is nothing playing
                            callback(players[0].playerid); //run callback with the id of the active player
                        }
                    },
                    'GetActivePlayerProperties': function () { return new Promise(function (resolve, reject) {
                        pub.GetActivePlayer()
                            .then(function (player) {
                            if (!player)
                                resolve();
                            else
                                pub.get({
                                    'method': 'Player.GetProperties',
                                    'params': {
                                        'properties': ['time', 'totaltime', 'speed', 'playlistid', 'position', 'repeat', 'type', 'partymode', 'shuffled', 'live'],
                                        'playerid': player.playerid
                                    }
                                })
                                    .then(resolve).catch(reject);
                        });
                    }); },
                    'GoTo': {
                        'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
                        'method': 'Player.GoTo'
                    },
                    'Seek': {
                        'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
                        'method': 'Player.Seek'
                    },
                    'Play': function (o, playlistid, position) {
                        return pub.get({
                            method: 'Playlist.Clear',
                            params: { 'playlistid': playlistid }
                        })
                            .then(function (result) { return pub.get({
                            method: 'Playlist.Add',
                            params: {
                                'playlistid': playlistid,
                                'item': typeof o === 'string' ? { 'file': o } : o
                            }
                        }); })
                            .then(function (result) { return pub.get({
                            'method': 'Player.Open',
                            'params': {
                                'item': { 'playlistid': playlistid, 'position': position || 0 }
                            }
                        }); });
                    }
                };
                //Modifies parts of an url
                //parseURL( '/' );
                //parseURL( '/', { 'protocol': 'https', 'port': 8080 } );
                //parseURL( '/', function () { this.protocol = 'https'; this.port = 8080; } );
                //parseURL( '/', [ { 'protocol': 'https' }, function () { this.port = '8080'; } ] );
                var parseURL = function (url, m) {
                    var temp = document.createElement('a');
                    temp.href = url || '/';
                    var modifyObject = function (object, modifications) {
                        if (!(modifications instanceof Array))
                            modifications = [modifications];
                        modifications.forEach(function (modification) {
                            if (modification instanceof Function)
                                modification.apply(object);
                            else if (modification instanceof Array)
                                object = modifyObject(object, modification);
                            else
                                Object.keys(modification).forEach(function (key) {
                                    object[key] = modification[key];
                                });
                        });
                        return object;
                    };
                    if (m)
                        temp = modifyObject(temp, m);
                    return temp.href;
                };
                //like Array.some but returns the value of the function instead of true/false
                var first_ = function (func) { return function (array) {
                    var out = undefined;
                    Array.prototype.some.call(array, function (elem, i) {
                        var value = func(elem, i);
                        if (value) {
                            out = value;
                            return true;
                        }
                    });
                    return out;
                }; };
                //public functions
                var pub = {
                    'vfs2uri': (function () {
                        var self, vfsurl = parseURL('/', { 'protocol': 'http' });
                        self = function (vfs) {
                            //if (vfs.substring(0,21) === 'image://http%3a%2f%2f') return decodeURIComponent( vfs.substring(8) ); //get image directly from the internet, bypassing the xbmc cache
                            return vfsurl + encodeURIComponent(vfs);
                        };
                        self.set = function (url) {
                            vfsurl = parseURL(url || '/');
                        };
                        return self;
                    })(),
                    'makeFilter': first_(function (filter) {
                        var value = getHash(filter.key);
                        if (!value)
                            return;
                        var out = {
                            'filter': {},
                            'name': filter.name,
                            'value': new filter.type(value)
                        };
                        out.filter[filter.key] = out.value;
                        return out;
                    }),
                    'onNotification': function (method, callback) {
                        server.onNotification(method, callback);
                    },
                    'version': (function () {
                        var version = undefined;
                        var self = function () { return version; };
                        self.set = function (v) { if (v >= 0)
                            version = v; };
                        return self;
                    })(),
                    'transport': (function () {
                        var transport = 'ajax';
                        var self = function () { return transport; };
                        self.set = function (t) { transport = t; };
                        return self;
                    })(),
                    'sendMessageCached': (function () {
                        var messageCache = new Map();
                        return function (o) {
                            var cacheResult = messageCache.get(JSON.stringify(o.params));
                            if (cacheResult)
                                return Promise.resolve(cacheResult);
                            return server.sendMessage(o.method, o.params).then(function (data) {
                                messageCache.set(JSON.stringify(o.params), data);
                                return data;
                            });
                        };
                    })(),
                    'sendMessage': (function (method, params) { return server.sendMessage(method, params); }),
                    // get({ method: String, params: Object, cache: Boolean })
                    // returns Promise<Object>
                    'get': (function (o) {
                        return ((o.cache === true) ? pub.sendMessageCached(o) : pub.sendMessage(o.method, o.params))
                            .then(function (data) {
                            if (data.result === undefined) {
                                console.error(data.error);
                                return Promise.reject(data.error);
                            }
                            return data.result;
                        });
                    })
                };
                var cache = new Map();
                function load(name, params, callback) {
                    var r = rpc[name];
                    var cb = undefined;
                    //let hash = r.method+'_'+JSON.stringify(params).replace(/\W/g,'')
                    //let cached = cache[hash]
                    var cached = cache.get(params);
                    if (cached)
                        callback(cached);
                    else {
                        if (r && r.method)
                            server.sendMessage(r.method, params)
                                .then(function (result) {
                                if (callback instanceof Function) {
                                    cb = r.cache ? function (x) { cache.set(params, x); return callback(x); } : callback;
                                    if (result.result)
                                        result = result.result;
                                    if (r.wrapper)
                                        r.wrapper(result, cb);
                                    else
                                        cb(result);
                                }
                            });
                    }
                }
                function makeFunction(item, index) {
                    var template = function (params) { return new Promise(function (resolve, reject) {
                        if (!params)
                            params = {};
                        if (item.params)
                            extend(params, item.params);
                        load(index, params, resolve);
                    }); };
                    if (item instanceof Function) {
                        pub[index] = item;
                        return;
                    }
                    if (item.requires)
                        pub[index] = function (params) {
                            return new Promise(function (resolve, reject) {
                                //return the required function with the template as a callback
                                return pub[item.requires.value]().then(function (result) {
                                    if (!params)
                                        params = {};
                                    if (result !== undefined)
                                        params[item.requires.name] = result;
                                    return template(params);
                                });
                            });
                        };
                    else
                        pub[index] = template; //just use the bare template if there is no dependency
                }
                Object.getOwnPropertyNames(rpc).forEach(function (key) { return makeFunction(rpc[key], key); }); //make public functions from the rpc array
                function upgradeToSocket(address, callback) {
                    var ws = jsonrpc_1.default(address);
                    var ajax = server;
                    if (DEBUG)
                        console.log('XBMC: Attempting to upgrade transport to websocket', address);
                    if (!ws) {
                        if (DEBUG)
                            console.log('XBMC: No websocket support in this browser', navigator.userAgent);
                        return;
                    }
                    ws.notifications(ajax.notifications());
                    ws.onConnect(function () {
                        if (DEBUG)
                            console.log('XBMC: Transport upgraded to websocket');
                        server = ws; //replace ajax transport with websocket
                        pub.transport.set('websocket');
                        if (callback instanceof Function)
                            callback();
                    });
                    ws.onDisconnect(function () {
                        if (DEBUG)
                            console.log('XBMC: Upgrading transport to websocket failed');
                        if (pub.transport() === 'websocket')
                            server = ajax;
                        pub.transport.set('ajax');
                    });
                }
                return (function (addr) {
                    var address = parseURL('/', { 'host': addr });
                    return new Promise(function (resolve, reject) {
                        //set URL variables
                        var ajaxURL = parseURL(address, { 'protocol': 'http', 'pathname': 'jsonrpc', 'search': '' });
                        var wsURL = parseURL(address, { 'protocol': 'ws', 'pathname': 'jsonrpc', 'port': 9090 });
                        pub.vfs2uri.set(parseURL(address, [
                            { 'protocol': 'http', 'pathname': 'vfs/' } //,
                        ]));
                        if (DEBUG)
                            console.log('XBMC: Connecting to ', ajaxURL);
                        //create an ajax transport
                        server = jsonrpc_1.default(ajaxURL);
                        pub.transport.set('ajax');
                        //get the version from the server, if it is over 5 the server supports websockets so we should upgrade the connection
                        server.sendMessage('JSONRPC.Version')
                            .catch(function (error) {
                            if (DEBUG)
                                console.log('XBMC: Connection failure: ', error);
                            reject();
                        })
                            .then(function (data) {
                            if (data.result && data.result.version) {
                                if (DEBUG)
                                    console.log('XBMC: Connected: API Version ', data.result.version);
                                pub.version.set(data.result.version.major || data.result.version || undefined);
                                if (pub.version() >= 5 && advancedSettings.upgradeToSocket)
                                    upgradeToSocket(wsURL);
                                resolve(pub);
                            }
                            else {
                                if (DEBUG)
                                    console.log('XBMC: Connection failure: Invalid version received', data.error);
                                reject();
                            }
                        });
                    });
                });
            })());
        }
    }
});

$__System.registerDynamic("4", [], false, function($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, "Handlebars", null);
  (function() {
    "format global";
    "exports Handlebars";
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === 'object' && typeof module === 'object')
        module.exports = factory();
      else if (typeof define === 'function' && define.amd)
        define([], factory);
      else if (typeof exports === 'object')
        exports["Handlebars"] = factory();
      else
        root["Handlebars"] = factory();
    })(this, function() {
      return (function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId])
            return installedModules[moduleId].exports;
          var module = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: false
          };
          modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
          module.loaded = true;
          return module.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
      })([function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _handlebarsRuntime = __webpack_require__(2);
        var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);
        var _handlebarsCompilerAst = __webpack_require__(21);
        var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);
        var _handlebarsCompilerBase = __webpack_require__(22);
        var _handlebarsCompilerCompiler = __webpack_require__(27);
        var _handlebarsCompilerJavascriptCompiler = __webpack_require__(28);
        var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);
        var _handlebarsCompilerVisitor = __webpack_require__(25);
        var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);
        var _handlebarsNoConflict = __webpack_require__(20);
        var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
        var _create = _handlebarsRuntime2['default'].create;
        function create() {
          var hb = _create();
          hb.compile = function(input, options) {
            return _handlebarsCompilerCompiler.compile(input, options, hb);
          };
          hb.precompile = function(input, options) {
            return _handlebarsCompilerCompiler.precompile(input, options, hb);
          };
          hb.AST = _handlebarsCompilerAst2['default'];
          hb.Compiler = _handlebarsCompilerCompiler.Compiler;
          hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
          hb.Parser = _handlebarsCompilerBase.parser;
          hb.parse = _handlebarsCompilerBase.parse;
          return hb;
        }
        var inst = create();
        inst.create = create;
        _handlebarsNoConflict2['default'](inst);
        inst.Visitor = _handlebarsCompilerVisitor2['default'];
        inst['default'] = inst;
        exports['default'] = inst;
        module.exports = exports['default'];
      }, function(module, exports) {
        "use strict";
        exports["default"] = function(obj) {
          return obj && obj.__esModule ? obj : {"default": obj};
        };
        exports.__esModule = true;
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireWildcard = __webpack_require__(3)['default'];
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _handlebarsBase = __webpack_require__(4);
        var base = _interopRequireWildcard(_handlebarsBase);
        var _handlebarsSafeString = __webpack_require__(18);
        var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);
        var _handlebarsException = __webpack_require__(6);
        var _handlebarsException2 = _interopRequireDefault(_handlebarsException);
        var _handlebarsUtils = __webpack_require__(5);
        var Utils = _interopRequireWildcard(_handlebarsUtils);
        var _handlebarsRuntime = __webpack_require__(19);
        var runtime = _interopRequireWildcard(_handlebarsRuntime);
        var _handlebarsNoConflict = __webpack_require__(20);
        var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);
        function create() {
          var hb = new base.HandlebarsEnvironment();
          Utils.extend(hb, base);
          hb.SafeString = _handlebarsSafeString2['default'];
          hb.Exception = _handlebarsException2['default'];
          hb.Utils = Utils;
          hb.escapeExpression = Utils.escapeExpression;
          hb.VM = runtime;
          hb.template = function(spec) {
            return runtime.template(spec, hb);
          };
          return hb;
        }
        var inst = create();
        inst.create = create;
        _handlebarsNoConflict2['default'](inst);
        inst['default'] = inst;
        exports['default'] = inst;
        module.exports = exports['default'];
      }, function(module, exports) {
        "use strict";
        exports["default"] = function(obj) {
          if (obj && obj.__esModule) {
            return obj;
          } else {
            var newObj = {};
            if (obj != null) {
              for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key))
                  newObj[key] = obj[key];
              }
            }
            newObj["default"] = obj;
            return newObj;
          }
        };
        exports.__esModule = true;
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        exports.HandlebarsEnvironment = HandlebarsEnvironment;
        var _utils = __webpack_require__(5);
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        var _helpers = __webpack_require__(7);
        var _decorators = __webpack_require__(15);
        var _logger = __webpack_require__(17);
        var _logger2 = _interopRequireDefault(_logger);
        var VERSION = '4.0.5';
        exports.VERSION = VERSION;
        var COMPILER_REVISION = 7;
        exports.COMPILER_REVISION = COMPILER_REVISION;
        var REVISION_CHANGES = {
          1: '<= 1.0.rc.2',
          2: '== 1.0.0-rc.3',
          3: '== 1.0.0-rc.4',
          4: '== 1.x.x',
          5: '== 2.0.0-alpha.x',
          6: '>= 2.0.0-beta.1',
          7: '>= 4.0.0'
        };
        exports.REVISION_CHANGES = REVISION_CHANGES;
        var objectType = '[object Object]';
        function HandlebarsEnvironment(helpers, partials, decorators) {
          this.helpers = helpers || {};
          this.partials = partials || {};
          this.decorators = decorators || {};
          _helpers.registerDefaultHelpers(this);
          _decorators.registerDefaultDecorators(this);
        }
        HandlebarsEnvironment.prototype = {
          constructor: HandlebarsEnvironment,
          logger: _logger2['default'],
          log: _logger2['default'].log,
          registerHelper: function registerHelper(name, fn) {
            if (_utils.toString.call(name) === objectType) {
              if (fn) {
                throw new _exception2['default']('Arg not supported with multiple helpers');
              }
              _utils.extend(this.helpers, name);
            } else {
              this.helpers[name] = fn;
            }
          },
          unregisterHelper: function unregisterHelper(name) {
            delete this.helpers[name];
          },
          registerPartial: function registerPartial(name, partial) {
            if (_utils.toString.call(name) === objectType) {
              _utils.extend(this.partials, name);
            } else {
              if (typeof partial === 'undefined') {
                throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
              }
              this.partials[name] = partial;
            }
          },
          unregisterPartial: function unregisterPartial(name) {
            delete this.partials[name];
          },
          registerDecorator: function registerDecorator(name, fn) {
            if (_utils.toString.call(name) === objectType) {
              if (fn) {
                throw new _exception2['default']('Arg not supported with multiple decorators');
              }
              _utils.extend(this.decorators, name);
            } else {
              this.decorators[name] = fn;
            }
          },
          unregisterDecorator: function unregisterDecorator(name) {
            delete this.decorators[name];
          }
        };
        var log = _logger2['default'].log;
        exports.log = log;
        exports.createFrame = _utils.createFrame;
        exports.logger = _logger2['default'];
      }, function(module, exports) {
        'use strict';
        exports.__esModule = true;
        exports.extend = extend;
        exports.indexOf = indexOf;
        exports.escapeExpression = escapeExpression;
        exports.isEmpty = isEmpty;
        exports.createFrame = createFrame;
        exports.blockParams = blockParams;
        exports.appendContextPath = appendContextPath;
        var escape = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#x27;',
          '`': '&#x60;',
          '=': '&#x3D;'
        };
        var badChars = /[&<>"'`=]/g,
            possible = /[&<>"'`=]/;
        function escapeChar(chr) {
          return escape[chr];
        }
        function extend(obj) {
          for (var i = 1; i < arguments.length; i++) {
            for (var key in arguments[i]) {
              if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
                obj[key] = arguments[i][key];
              }
            }
          }
          return obj;
        }
        var toString = Object.prototype.toString;
        exports.toString = toString;
        var isFunction = function isFunction(value) {
          return typeof value === 'function';
        };
        if (isFunction(/x/)) {
          exports.isFunction = isFunction = function(value) {
            return typeof value === 'function' && toString.call(value) === '[object Function]';
          };
        }
        exports.isFunction = isFunction;
        var isArray = Array.isArray || function(value) {
          return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
        };
        exports.isArray = isArray;
        function indexOf(array, value) {
          for (var i = 0,
              len = array.length; i < len; i++) {
            if (array[i] === value) {
              return i;
            }
          }
          return -1;
        }
        function escapeExpression(string) {
          if (typeof string !== 'string') {
            if (string && string.toHTML) {
              return string.toHTML();
            } else if (string == null) {
              return '';
            } else if (!string) {
              return string + '';
            }
            string = '' + string;
          }
          if (!possible.test(string)) {
            return string;
          }
          return string.replace(badChars, escapeChar);
        }
        function isEmpty(value) {
          if (!value && value !== 0) {
            return true;
          } else if (isArray(value) && value.length === 0) {
            return true;
          } else {
            return false;
          }
        }
        function createFrame(object) {
          var frame = extend({}, object);
          frame._parent = object;
          return frame;
        }
        function blockParams(params, ids) {
          params.path = ids;
          return params;
        }
        function appendContextPath(contextPath, id) {
          return (contextPath ? contextPath + '.' : '') + id;
        }
      }, function(module, exports) {
        'use strict';
        exports.__esModule = true;
        var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
        function Exception(message, node) {
          var loc = node && node.loc,
              line = undefined,
              column = undefined;
          if (loc) {
            line = loc.start.line;
            column = loc.start.column;
            message += ' - ' + line + ':' + column;
          }
          var tmp = Error.prototype.constructor.call(this, message);
          for (var idx = 0; idx < errorProps.length; idx++) {
            this[errorProps[idx]] = tmp[errorProps[idx]];
          }
          if (Error.captureStackTrace) {
            Error.captureStackTrace(this, Exception);
          }
          if (loc) {
            this.lineNumber = line;
            this.column = column;
          }
        }
        Exception.prototype = new Error();
        exports['default'] = Exception;
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        exports.registerDefaultHelpers = registerDefaultHelpers;
        var _helpersBlockHelperMissing = __webpack_require__(8);
        var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);
        var _helpersEach = __webpack_require__(9);
        var _helpersEach2 = _interopRequireDefault(_helpersEach);
        var _helpersHelperMissing = __webpack_require__(10);
        var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);
        var _helpersIf = __webpack_require__(11);
        var _helpersIf2 = _interopRequireDefault(_helpersIf);
        var _helpersLog = __webpack_require__(12);
        var _helpersLog2 = _interopRequireDefault(_helpersLog);
        var _helpersLookup = __webpack_require__(13);
        var _helpersLookup2 = _interopRequireDefault(_helpersLookup);
        var _helpersWith = __webpack_require__(14);
        var _helpersWith2 = _interopRequireDefault(_helpersWith);
        function registerDefaultHelpers(instance) {
          _helpersBlockHelperMissing2['default'](instance);
          _helpersEach2['default'](instance);
          _helpersHelperMissing2['default'](instance);
          _helpersIf2['default'](instance);
          _helpersLog2['default'](instance);
          _helpersLookup2['default'](instance);
          _helpersWith2['default'](instance);
        }
      }, function(module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        exports['default'] = function(instance) {
          instance.registerHelper('blockHelperMissing', function(context, options) {
            var inverse = options.inverse,
                fn = options.fn;
            if (context === true) {
              return fn(this);
            } else if (context === false || context == null) {
              return inverse(this);
            } else if (_utils.isArray(context)) {
              if (context.length > 0) {
                if (options.ids) {
                  options.ids = [options.name];
                }
                return instance.helpers.each(context, options);
              } else {
                return inverse(this);
              }
            } else {
              if (options.data && options.ids) {
                var data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
                options = {data: data};
              }
              return fn(context, options);
            }
          });
        };
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        exports['default'] = function(instance) {
          instance.registerHelper('each', function(context, options) {
            if (!options) {
              throw new _exception2['default']('Must pass iterator to #each');
            }
            var fn = options.fn,
                inverse = options.inverse,
                i = 0,
                ret = '',
                data = undefined,
                contextPath = undefined;
            if (options.data && options.ids) {
              contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
            }
            if (_utils.isFunction(context)) {
              context = context.call(this);
            }
            if (options.data) {
              data = _utils.createFrame(options.data);
            }
            function execIteration(field, index, last) {
              if (data) {
                data.key = field;
                data.index = index;
                data.first = index === 0;
                data.last = !!last;
                if (contextPath) {
                  data.contextPath = contextPath + field;
                }
              }
              ret = ret + fn(context[field], {
                data: data,
                blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
              });
            }
            if (context && typeof context === 'object') {
              if (_utils.isArray(context)) {
                for (var j = context.length; i < j; i++) {
                  if (i in context) {
                    execIteration(i, i, i === context.length - 1);
                  }
                }
              } else {
                var priorKey = undefined;
                for (var key in context) {
                  if (context.hasOwnProperty(key)) {
                    if (priorKey !== undefined) {
                      execIteration(priorKey, i - 1);
                    }
                    priorKey = key;
                    i++;
                  }
                }
                if (priorKey !== undefined) {
                  execIteration(priorKey, i - 1, true);
                }
              }
            }
            if (i === 0) {
              ret = inverse(this);
            }
            return ret;
          });
        };
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        exports['default'] = function(instance) {
          instance.registerHelper('helperMissing', function() {
            if (arguments.length === 1) {
              return undefined;
            } else {
              throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
            }
          });
        };
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        exports['default'] = function(instance) {
          instance.registerHelper('if', function(conditional, options) {
            if (_utils.isFunction(conditional)) {
              conditional = conditional.call(this);
            }
            if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
              return options.inverse(this);
            } else {
              return options.fn(this);
            }
          });
          instance.registerHelper('unless', function(conditional, options) {
            return instance.helpers['if'].call(this, conditional, {
              fn: options.inverse,
              inverse: options.fn,
              hash: options.hash
            });
          });
        };
        module.exports = exports['default'];
      }, function(module, exports) {
        'use strict';
        exports.__esModule = true;
        exports['default'] = function(instance) {
          instance.registerHelper('log', function() {
            var args = [undefined],
                options = arguments[arguments.length - 1];
            for (var i = 0; i < arguments.length - 1; i++) {
              args.push(arguments[i]);
            }
            var level = 1;
            if (options.hash.level != null) {
              level = options.hash.level;
            } else if (options.data && options.data.level != null) {
              level = options.data.level;
            }
            args[0] = level;
            instance.log.apply(instance, args);
          });
        };
        module.exports = exports['default'];
      }, function(module, exports) {
        'use strict';
        exports.__esModule = true;
        exports['default'] = function(instance) {
          instance.registerHelper('lookup', function(obj, field) {
            return obj && obj[field];
          });
        };
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        exports['default'] = function(instance) {
          instance.registerHelper('with', function(context, options) {
            if (_utils.isFunction(context)) {
              context = context.call(this);
            }
            var fn = options.fn;
            if (!_utils.isEmpty(context)) {
              var data = options.data;
              if (options.data && options.ids) {
                data = _utils.createFrame(options.data);
                data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
              }
              return fn(context, {
                data: data,
                blockParams: _utils.blockParams([context], [data && data.contextPath])
              });
            } else {
              return options.inverse(this);
            }
          });
        };
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        exports.registerDefaultDecorators = registerDefaultDecorators;
        var _decoratorsInline = __webpack_require__(16);
        var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);
        function registerDefaultDecorators(instance) {
          _decoratorsInline2['default'](instance);
        }
      }, function(module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        exports['default'] = function(instance) {
          instance.registerDecorator('inline', function(fn, props, container, options) {
            var ret = fn;
            if (!props.partials) {
              props.partials = {};
              ret = function(context, options) {
                var original = container.partials;
                container.partials = _utils.extend({}, original, props.partials);
                var ret = fn(context, options);
                container.partials = original;
                return ret;
              };
            }
            props.partials[options.args[0]] = options.fn;
            return ret;
          });
        };
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        var logger = {
          methodMap: ['debug', 'info', 'warn', 'error'],
          level: 'info',
          lookupLevel: function lookupLevel(level) {
            if (typeof level === 'string') {
              var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
              if (levelMap >= 0) {
                level = levelMap;
              } else {
                level = parseInt(level, 10);
              }
            }
            return level;
          },
          log: function log(level) {
            level = logger.lookupLevel(level);
            if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
              var method = logger.methodMap[level];
              if (!console[method]) {
                method = 'log';
              }
              for (var _len = arguments.length,
                  message = Array(_len > 1 ? _len - 1 : 0),
                  _key = 1; _key < _len; _key++) {
                message[_key - 1] = arguments[_key];
              }
              console[method].apply(console, message);
            }
          }
        };
        exports['default'] = logger;
        module.exports = exports['default'];
      }, function(module, exports) {
        'use strict';
        exports.__esModule = true;
        function SafeString(string) {
          this.string = string;
        }
        SafeString.prototype.toString = SafeString.prototype.toHTML = function() {
          return '' + this.string;
        };
        exports['default'] = SafeString;
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireWildcard = __webpack_require__(3)['default'];
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        exports.checkRevision = checkRevision;
        exports.template = template;
        exports.wrapProgram = wrapProgram;
        exports.resolvePartial = resolvePartial;
        exports.invokePartial = invokePartial;
        exports.noop = noop;
        var _utils = __webpack_require__(5);
        var Utils = _interopRequireWildcard(_utils);
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        var _base = __webpack_require__(4);
        function checkRevision(compilerInfo) {
          var compilerRevision = compilerInfo && compilerInfo[0] || 1,
              currentRevision = _base.COMPILER_REVISION;
          if (compilerRevision !== currentRevision) {
            if (compilerRevision < currentRevision) {
              var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
                  compilerVersions = _base.REVISION_CHANGES[compilerRevision];
              throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
            } else {
              throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
            }
          }
        }
        function template(templateSpec, env) {
          if (!env) {
            throw new _exception2['default']('No environment passed to template');
          }
          if (!templateSpec || !templateSpec.main) {
            throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
          }
          templateSpec.main.decorator = templateSpec.main_d;
          env.VM.checkRevision(templateSpec.compiler);
          function invokePartialWrapper(partial, context, options) {
            if (options.hash) {
              context = Utils.extend({}, context, options.hash);
              if (options.ids) {
                options.ids[0] = true;
              }
            }
            partial = env.VM.resolvePartial.call(this, partial, context, options);
            var result = env.VM.invokePartial.call(this, partial, context, options);
            if (result == null && env.compile) {
              options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
              result = options.partials[options.name](context, options);
            }
            if (result != null) {
              if (options.indent) {
                var lines = result.split('\n');
                for (var i = 0,
                    l = lines.length; i < l; i++) {
                  if (!lines[i] && i + 1 === l) {
                    break;
                  }
                  lines[i] = options.indent + lines[i];
                }
                result = lines.join('\n');
              }
              return result;
            } else {
              throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
            }
          }
          var container = {
            strict: function strict(obj, name) {
              if (!(name in obj)) {
                throw new _exception2['default']('"' + name + '" not defined in ' + obj);
              }
              return obj[name];
            },
            lookup: function lookup(depths, name) {
              var len = depths.length;
              for (var i = 0; i < len; i++) {
                if (depths[i] && depths[i][name] != null) {
                  return depths[i][name];
                }
              }
            },
            lambda: function lambda(current, context) {
              return typeof current === 'function' ? current.call(context) : current;
            },
            escapeExpression: Utils.escapeExpression,
            invokePartial: invokePartialWrapper,
            fn: function fn(i) {
              var ret = templateSpec[i];
              ret.decorator = templateSpec[i + '_d'];
              return ret;
            },
            programs: [],
            program: function program(i, data, declaredBlockParams, blockParams, depths) {
              var programWrapper = this.programs[i],
                  fn = this.fn(i);
              if (data || depths || blockParams || declaredBlockParams) {
                programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
              } else if (!programWrapper) {
                programWrapper = this.programs[i] = wrapProgram(this, i, fn);
              }
              return programWrapper;
            },
            data: function data(value, depth) {
              while (value && depth--) {
                value = value._parent;
              }
              return value;
            },
            merge: function merge(param, common) {
              var obj = param || common;
              if (param && common && param !== common) {
                obj = Utils.extend({}, common, param);
              }
              return obj;
            },
            noop: env.VM.noop,
            compilerInfo: templateSpec.compiler
          };
          function ret(context) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var data = options.data;
            ret._setup(options);
            if (!options.partial && templateSpec.useData) {
              data = initData(context, data);
            }
            var depths = undefined,
                blockParams = templateSpec.useBlockParams ? [] : undefined;
            if (templateSpec.useDepths) {
              if (options.depths) {
                depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
              } else {
                depths = [context];
              }
            }
            function main(context) {
              return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
            }
            main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
            return main(context, options);
          }
          ret.isTop = true;
          ret._setup = function(options) {
            if (!options.partial) {
              container.helpers = container.merge(options.helpers, env.helpers);
              if (templateSpec.usePartial) {
                container.partials = container.merge(options.partials, env.partials);
              }
              if (templateSpec.usePartial || templateSpec.useDecorators) {
                container.decorators = container.merge(options.decorators, env.decorators);
              }
            } else {
              container.helpers = options.helpers;
              container.partials = options.partials;
              container.decorators = options.decorators;
            }
          };
          ret._child = function(i, data, blockParams, depths) {
            if (templateSpec.useBlockParams && !blockParams) {
              throw new _exception2['default']('must pass block params');
            }
            if (templateSpec.useDepths && !depths) {
              throw new _exception2['default']('must pass parent depths');
            }
            return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
          };
          return ret;
        }
        function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
          function prog(context) {
            var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
            var currentDepths = depths;
            if (depths && context !== depths[0]) {
              currentDepths = [context].concat(depths);
            }
            return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
          }
          prog = executeDecorators(fn, prog, container, depths, data, blockParams);
          prog.program = i;
          prog.depth = depths ? depths.length : 0;
          prog.blockParams = declaredBlockParams || 0;
          return prog;
        }
        function resolvePartial(partial, context, options) {
          if (!partial) {
            if (options.name === '@partial-block') {
              partial = options.data['partial-block'];
            } else {
              partial = options.partials[options.name];
            }
          } else if (!partial.call && !options.name) {
            options.name = partial;
            partial = options.partials[partial];
          }
          return partial;
        }
        function invokePartial(partial, context, options) {
          options.partial = true;
          if (options.ids) {
            options.data.contextPath = options.ids[0] || options.data.contextPath;
          }
          var partialBlock = undefined;
          if (options.fn && options.fn !== noop) {
            options.data = _base.createFrame(options.data);
            partialBlock = options.data['partial-block'] = options.fn;
            if (partialBlock.partials) {
              options.partials = Utils.extend({}, options.partials, partialBlock.partials);
            }
          }
          if (partial === undefined && partialBlock) {
            partial = partialBlock;
          }
          if (partial === undefined) {
            throw new _exception2['default']('The partial ' + options.name + ' could not be found');
          } else if (partial instanceof Function) {
            return partial(context, options);
          }
        }
        function noop() {
          return '';
        }
        function initData(context, data) {
          if (!data || !('root' in data)) {
            data = data ? _base.createFrame(data) : {};
            data.root = context;
          }
          return data;
        }
        function executeDecorators(fn, prog, container, depths, data, blockParams) {
          if (fn.decorator) {
            var props = {};
            prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
            Utils.extend(prog, props);
          }
          return prog;
        }
      }, function(module, exports) {
        (function(global) {
          'use strict';
          exports.__esModule = true;
          exports['default'] = function(Handlebars) {
            var root = typeof global !== 'undefined' ? global : window,
                $Handlebars = root.Handlebars;
            Handlebars.noConflict = function() {
              if (root.Handlebars === Handlebars) {
                root.Handlebars = $Handlebars;
              }
              return Handlebars;
            };
          };
          module.exports = exports['default'];
        }.call(exports, (function() {
          return this;
        }())));
      }, function(module, exports) {
        'use strict';
        exports.__esModule = true;
        var AST = {helpers: {
            helperExpression: function helperExpression(node) {
              return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
            },
            scopedId: function scopedId(path) {
              return (/^\.|this\b/.test(path.original));
            },
            simpleId: function simpleId(path) {
              return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
            }
          }};
        exports['default'] = AST;
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        var _interopRequireWildcard = __webpack_require__(3)['default'];
        exports.__esModule = true;
        exports.parse = parse;
        var _parser = __webpack_require__(23);
        var _parser2 = _interopRequireDefault(_parser);
        var _whitespaceControl = __webpack_require__(24);
        var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);
        var _helpers = __webpack_require__(26);
        var Helpers = _interopRequireWildcard(_helpers);
        var _utils = __webpack_require__(5);
        exports.parser = _parser2['default'];
        var yy = {};
        _utils.extend(yy, Helpers);
        function parse(input, options) {
          if (input.type === 'Program') {
            return input;
          }
          _parser2['default'].yy = yy;
          yy.locInfo = function(locInfo) {
            return new yy.SourceLocation(options && options.srcName, locInfo);
          };
          var strip = new _whitespaceControl2['default'](options);
          return strip.accept(_parser2['default'].parse(input));
        }
      }, function(module, exports) {
        "use strict";
        var handlebars = (function() {
          var parser = {
            trace: function trace() {},
            yy: {},
            symbols_: {
              "error": 2,
              "root": 3,
              "program": 4,
              "EOF": 5,
              "program_repetition0": 6,
              "statement": 7,
              "mustache": 8,
              "block": 9,
              "rawBlock": 10,
              "partial": 11,
              "partialBlock": 12,
              "content": 13,
              "COMMENT": 14,
              "CONTENT": 15,
              "openRawBlock": 16,
              "rawBlock_repetition_plus0": 17,
              "END_RAW_BLOCK": 18,
              "OPEN_RAW_BLOCK": 19,
              "helperName": 20,
              "openRawBlock_repetition0": 21,
              "openRawBlock_option0": 22,
              "CLOSE_RAW_BLOCK": 23,
              "openBlock": 24,
              "block_option0": 25,
              "closeBlock": 26,
              "openInverse": 27,
              "block_option1": 28,
              "OPEN_BLOCK": 29,
              "openBlock_repetition0": 30,
              "openBlock_option0": 31,
              "openBlock_option1": 32,
              "CLOSE": 33,
              "OPEN_INVERSE": 34,
              "openInverse_repetition0": 35,
              "openInverse_option0": 36,
              "openInverse_option1": 37,
              "openInverseChain": 38,
              "OPEN_INVERSE_CHAIN": 39,
              "openInverseChain_repetition0": 40,
              "openInverseChain_option0": 41,
              "openInverseChain_option1": 42,
              "inverseAndProgram": 43,
              "INVERSE": 44,
              "inverseChain": 45,
              "inverseChain_option0": 46,
              "OPEN_ENDBLOCK": 47,
              "OPEN": 48,
              "mustache_repetition0": 49,
              "mustache_option0": 50,
              "OPEN_UNESCAPED": 51,
              "mustache_repetition1": 52,
              "mustache_option1": 53,
              "CLOSE_UNESCAPED": 54,
              "OPEN_PARTIAL": 55,
              "partialName": 56,
              "partial_repetition0": 57,
              "partial_option0": 58,
              "openPartialBlock": 59,
              "OPEN_PARTIAL_BLOCK": 60,
              "openPartialBlock_repetition0": 61,
              "openPartialBlock_option0": 62,
              "param": 63,
              "sexpr": 64,
              "OPEN_SEXPR": 65,
              "sexpr_repetition0": 66,
              "sexpr_option0": 67,
              "CLOSE_SEXPR": 68,
              "hash": 69,
              "hash_repetition_plus0": 70,
              "hashSegment": 71,
              "ID": 72,
              "EQUALS": 73,
              "blockParams": 74,
              "OPEN_BLOCK_PARAMS": 75,
              "blockParams_repetition_plus0": 76,
              "CLOSE_BLOCK_PARAMS": 77,
              "path": 78,
              "dataName": 79,
              "STRING": 80,
              "NUMBER": 81,
              "BOOLEAN": 82,
              "UNDEFINED": 83,
              "NULL": 84,
              "DATA": 85,
              "pathSegments": 86,
              "SEP": 87,
              "$accept": 0,
              "$end": 1
            },
            terminals_: {
              2: "error",
              5: "EOF",
              14: "COMMENT",
              15: "CONTENT",
              18: "END_RAW_BLOCK",
              19: "OPEN_RAW_BLOCK",
              23: "CLOSE_RAW_BLOCK",
              29: "OPEN_BLOCK",
              33: "CLOSE",
              34: "OPEN_INVERSE",
              39: "OPEN_INVERSE_CHAIN",
              44: "INVERSE",
              47: "OPEN_ENDBLOCK",
              48: "OPEN",
              51: "OPEN_UNESCAPED",
              54: "CLOSE_UNESCAPED",
              55: "OPEN_PARTIAL",
              60: "OPEN_PARTIAL_BLOCK",
              65: "OPEN_SEXPR",
              68: "CLOSE_SEXPR",
              72: "ID",
              73: "EQUALS",
              75: "OPEN_BLOCK_PARAMS",
              77: "CLOSE_BLOCK_PARAMS",
              80: "STRING",
              81: "NUMBER",
              82: "BOOLEAN",
              83: "UNDEFINED",
              84: "NULL",
              85: "DATA",
              87: "SEP"
            },
            productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
            performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) {
              var $0 = $$.length - 1;
              switch (yystate) {
                case 1:
                  return $$[$0 - 1];
                  break;
                case 2:
                  this.$ = yy.prepareProgram($$[$0]);
                  break;
                case 3:
                  this.$ = $$[$0];
                  break;
                case 4:
                  this.$ = $$[$0];
                  break;
                case 5:
                  this.$ = $$[$0];
                  break;
                case 6:
                  this.$ = $$[$0];
                  break;
                case 7:
                  this.$ = $$[$0];
                  break;
                case 8:
                  this.$ = $$[$0];
                  break;
                case 9:
                  this.$ = {
                    type: 'CommentStatement',
                    value: yy.stripComment($$[$0]),
                    strip: yy.stripFlags($$[$0], $$[$0]),
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 10:
                  this.$ = {
                    type: 'ContentStatement',
                    original: $$[$0],
                    value: $$[$0],
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 11:
                  this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                  break;
                case 12:
                  this.$ = {
                    path: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1]
                  };
                  break;
                case 13:
                  this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
                  break;
                case 14:
                  this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
                  break;
                case 15:
                  this.$ = {
                    open: $$[$0 - 5],
                    path: $$[$0 - 4],
                    params: $$[$0 - 3],
                    hash: $$[$0 - 2],
                    blockParams: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 5], $$[$0])
                  };
                  break;
                case 16:
                  this.$ = {
                    path: $$[$0 - 4],
                    params: $$[$0 - 3],
                    hash: $$[$0 - 2],
                    blockParams: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 5], $$[$0])
                  };
                  break;
                case 17:
                  this.$ = {
                    path: $$[$0 - 4],
                    params: $$[$0 - 3],
                    hash: $$[$0 - 2],
                    blockParams: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 5], $$[$0])
                  };
                  break;
                case 18:
                  this.$ = {
                    strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]),
                    program: $$[$0]
                  };
                  break;
                case 19:
                  var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
                      program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
                  program.chained = true;
                  this.$ = {
                    strip: $$[$0 - 2].strip,
                    program: program,
                    chain: true
                  };
                  break;
                case 20:
                  this.$ = $$[$0];
                  break;
                case 21:
                  this.$ = {
                    path: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 2], $$[$0])
                  };
                  break;
                case 22:
                  this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                  break;
                case 23:
                  this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
                  break;
                case 24:
                  this.$ = {
                    type: 'PartialStatement',
                    name: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1],
                    indent: '',
                    strip: yy.stripFlags($$[$0 - 4], $$[$0]),
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 25:
                  this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
                  break;
                case 26:
                  this.$ = {
                    path: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1],
                    strip: yy.stripFlags($$[$0 - 4], $$[$0])
                  };
                  break;
                case 27:
                  this.$ = $$[$0];
                  break;
                case 28:
                  this.$ = $$[$0];
                  break;
                case 29:
                  this.$ = {
                    type: 'SubExpression',
                    path: $$[$0 - 3],
                    params: $$[$0 - 2],
                    hash: $$[$0 - 1],
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 30:
                  this.$ = {
                    type: 'Hash',
                    pairs: $$[$0],
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 31:
                  this.$ = {
                    type: 'HashPair',
                    key: yy.id($$[$0 - 2]),
                    value: $$[$0],
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 32:
                  this.$ = yy.id($$[$0 - 1]);
                  break;
                case 33:
                  this.$ = $$[$0];
                  break;
                case 34:
                  this.$ = $$[$0];
                  break;
                case 35:
                  this.$ = {
                    type: 'StringLiteral',
                    value: $$[$0],
                    original: $$[$0],
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 36:
                  this.$ = {
                    type: 'NumberLiteral',
                    value: Number($$[$0]),
                    original: Number($$[$0]),
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 37:
                  this.$ = {
                    type: 'BooleanLiteral',
                    value: $$[$0] === 'true',
                    original: $$[$0] === 'true',
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 38:
                  this.$ = {
                    type: 'UndefinedLiteral',
                    original: undefined,
                    value: undefined,
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 39:
                  this.$ = {
                    type: 'NullLiteral',
                    original: null,
                    value: null,
                    loc: yy.locInfo(this._$)
                  };
                  break;
                case 40:
                  this.$ = $$[$0];
                  break;
                case 41:
                  this.$ = $$[$0];
                  break;
                case 42:
                  this.$ = yy.preparePath(true, $$[$0], this._$);
                  break;
                case 43:
                  this.$ = yy.preparePath(false, $$[$0], this._$);
                  break;
                case 44:
                  $$[$0 - 2].push({
                    part: yy.id($$[$0]),
                    original: $$[$0],
                    separator: $$[$0 - 1]
                  });
                  this.$ = $$[$0 - 2];
                  break;
                case 45:
                  this.$ = [{
                    part: yy.id($$[$0]),
                    original: $$[$0]
                  }];
                  break;
                case 46:
                  this.$ = [];
                  break;
                case 47:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 48:
                  this.$ = [$$[$0]];
                  break;
                case 49:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 50:
                  this.$ = [];
                  break;
                case 51:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 58:
                  this.$ = [];
                  break;
                case 59:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 64:
                  this.$ = [];
                  break;
                case 65:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 70:
                  this.$ = [];
                  break;
                case 71:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 78:
                  this.$ = [];
                  break;
                case 79:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 82:
                  this.$ = [];
                  break;
                case 83:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 86:
                  this.$ = [];
                  break;
                case 87:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 90:
                  this.$ = [];
                  break;
                case 91:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 94:
                  this.$ = [];
                  break;
                case 95:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 98:
                  this.$ = [$$[$0]];
                  break;
                case 99:
                  $$[$0 - 1].push($$[$0]);
                  break;
                case 100:
                  this.$ = [$$[$0]];
                  break;
                case 101:
                  $$[$0 - 1].push($$[$0]);
                  break;
              }
            },
            table: [{
              3: 1,
              4: 2,
              5: [2, 46],
              6: 3,
              14: [2, 46],
              15: [2, 46],
              19: [2, 46],
              29: [2, 46],
              34: [2, 46],
              48: [2, 46],
              51: [2, 46],
              55: [2, 46],
              60: [2, 46]
            }, {1: [3]}, {5: [1, 4]}, {
              5: [2, 2],
              7: 5,
              8: 6,
              9: 7,
              10: 8,
              11: 9,
              12: 10,
              13: 11,
              14: [1, 12],
              15: [1, 20],
              16: 17,
              19: [1, 23],
              24: 15,
              27: 16,
              29: [1, 21],
              34: [1, 22],
              39: [2, 2],
              44: [2, 2],
              47: [2, 2],
              48: [1, 13],
              51: [1, 14],
              55: [1, 18],
              59: 19,
              60: [1, 24]
            }, {1: [2, 1]}, {
              5: [2, 47],
              14: [2, 47],
              15: [2, 47],
              19: [2, 47],
              29: [2, 47],
              34: [2, 47],
              39: [2, 47],
              44: [2, 47],
              47: [2, 47],
              48: [2, 47],
              51: [2, 47],
              55: [2, 47],
              60: [2, 47]
            }, {
              5: [2, 3],
              14: [2, 3],
              15: [2, 3],
              19: [2, 3],
              29: [2, 3],
              34: [2, 3],
              39: [2, 3],
              44: [2, 3],
              47: [2, 3],
              48: [2, 3],
              51: [2, 3],
              55: [2, 3],
              60: [2, 3]
            }, {
              5: [2, 4],
              14: [2, 4],
              15: [2, 4],
              19: [2, 4],
              29: [2, 4],
              34: [2, 4],
              39: [2, 4],
              44: [2, 4],
              47: [2, 4],
              48: [2, 4],
              51: [2, 4],
              55: [2, 4],
              60: [2, 4]
            }, {
              5: [2, 5],
              14: [2, 5],
              15: [2, 5],
              19: [2, 5],
              29: [2, 5],
              34: [2, 5],
              39: [2, 5],
              44: [2, 5],
              47: [2, 5],
              48: [2, 5],
              51: [2, 5],
              55: [2, 5],
              60: [2, 5]
            }, {
              5: [2, 6],
              14: [2, 6],
              15: [2, 6],
              19: [2, 6],
              29: [2, 6],
              34: [2, 6],
              39: [2, 6],
              44: [2, 6],
              47: [2, 6],
              48: [2, 6],
              51: [2, 6],
              55: [2, 6],
              60: [2, 6]
            }, {
              5: [2, 7],
              14: [2, 7],
              15: [2, 7],
              19: [2, 7],
              29: [2, 7],
              34: [2, 7],
              39: [2, 7],
              44: [2, 7],
              47: [2, 7],
              48: [2, 7],
              51: [2, 7],
              55: [2, 7],
              60: [2, 7]
            }, {
              5: [2, 8],
              14: [2, 8],
              15: [2, 8],
              19: [2, 8],
              29: [2, 8],
              34: [2, 8],
              39: [2, 8],
              44: [2, 8],
              47: [2, 8],
              48: [2, 8],
              51: [2, 8],
              55: [2, 8],
              60: [2, 8]
            }, {
              5: [2, 9],
              14: [2, 9],
              15: [2, 9],
              19: [2, 9],
              29: [2, 9],
              34: [2, 9],
              39: [2, 9],
              44: [2, 9],
              47: [2, 9],
              48: [2, 9],
              51: [2, 9],
              55: [2, 9],
              60: [2, 9]
            }, {
              20: 25,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 36,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              4: 37,
              6: 3,
              14: [2, 46],
              15: [2, 46],
              19: [2, 46],
              29: [2, 46],
              34: [2, 46],
              39: [2, 46],
              44: [2, 46],
              47: [2, 46],
              48: [2, 46],
              51: [2, 46],
              55: [2, 46],
              60: [2, 46]
            }, {
              4: 38,
              6: 3,
              14: [2, 46],
              15: [2, 46],
              19: [2, 46],
              29: [2, 46],
              34: [2, 46],
              44: [2, 46],
              47: [2, 46],
              48: [2, 46],
              51: [2, 46],
              55: [2, 46],
              60: [2, 46]
            }, {
              13: 40,
              15: [1, 20],
              17: 39
            }, {
              20: 42,
              56: 41,
              64: 43,
              65: [1, 44],
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              4: 45,
              6: 3,
              14: [2, 46],
              15: [2, 46],
              19: [2, 46],
              29: [2, 46],
              34: [2, 46],
              47: [2, 46],
              48: [2, 46],
              51: [2, 46],
              55: [2, 46],
              60: [2, 46]
            }, {
              5: [2, 10],
              14: [2, 10],
              15: [2, 10],
              18: [2, 10],
              19: [2, 10],
              29: [2, 10],
              34: [2, 10],
              39: [2, 10],
              44: [2, 10],
              47: [2, 10],
              48: [2, 10],
              51: [2, 10],
              55: [2, 10],
              60: [2, 10]
            }, {
              20: 46,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 47,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 48,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 42,
              56: 49,
              64: 43,
              65: [1, 44],
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              33: [2, 78],
              49: 50,
              65: [2, 78],
              72: [2, 78],
              80: [2, 78],
              81: [2, 78],
              82: [2, 78],
              83: [2, 78],
              84: [2, 78],
              85: [2, 78]
            }, {
              23: [2, 33],
              33: [2, 33],
              54: [2, 33],
              65: [2, 33],
              68: [2, 33],
              72: [2, 33],
              75: [2, 33],
              80: [2, 33],
              81: [2, 33],
              82: [2, 33],
              83: [2, 33],
              84: [2, 33],
              85: [2, 33]
            }, {
              23: [2, 34],
              33: [2, 34],
              54: [2, 34],
              65: [2, 34],
              68: [2, 34],
              72: [2, 34],
              75: [2, 34],
              80: [2, 34],
              81: [2, 34],
              82: [2, 34],
              83: [2, 34],
              84: [2, 34],
              85: [2, 34]
            }, {
              23: [2, 35],
              33: [2, 35],
              54: [2, 35],
              65: [2, 35],
              68: [2, 35],
              72: [2, 35],
              75: [2, 35],
              80: [2, 35],
              81: [2, 35],
              82: [2, 35],
              83: [2, 35],
              84: [2, 35],
              85: [2, 35]
            }, {
              23: [2, 36],
              33: [2, 36],
              54: [2, 36],
              65: [2, 36],
              68: [2, 36],
              72: [2, 36],
              75: [2, 36],
              80: [2, 36],
              81: [2, 36],
              82: [2, 36],
              83: [2, 36],
              84: [2, 36],
              85: [2, 36]
            }, {
              23: [2, 37],
              33: [2, 37],
              54: [2, 37],
              65: [2, 37],
              68: [2, 37],
              72: [2, 37],
              75: [2, 37],
              80: [2, 37],
              81: [2, 37],
              82: [2, 37],
              83: [2, 37],
              84: [2, 37],
              85: [2, 37]
            }, {
              23: [2, 38],
              33: [2, 38],
              54: [2, 38],
              65: [2, 38],
              68: [2, 38],
              72: [2, 38],
              75: [2, 38],
              80: [2, 38],
              81: [2, 38],
              82: [2, 38],
              83: [2, 38],
              84: [2, 38],
              85: [2, 38]
            }, {
              23: [2, 39],
              33: [2, 39],
              54: [2, 39],
              65: [2, 39],
              68: [2, 39],
              72: [2, 39],
              75: [2, 39],
              80: [2, 39],
              81: [2, 39],
              82: [2, 39],
              83: [2, 39],
              84: [2, 39],
              85: [2, 39]
            }, {
              23: [2, 43],
              33: [2, 43],
              54: [2, 43],
              65: [2, 43],
              68: [2, 43],
              72: [2, 43],
              75: [2, 43],
              80: [2, 43],
              81: [2, 43],
              82: [2, 43],
              83: [2, 43],
              84: [2, 43],
              85: [2, 43],
              87: [1, 51]
            }, {
              72: [1, 35],
              86: 52
            }, {
              23: [2, 45],
              33: [2, 45],
              54: [2, 45],
              65: [2, 45],
              68: [2, 45],
              72: [2, 45],
              75: [2, 45],
              80: [2, 45],
              81: [2, 45],
              82: [2, 45],
              83: [2, 45],
              84: [2, 45],
              85: [2, 45],
              87: [2, 45]
            }, {
              52: 53,
              54: [2, 82],
              65: [2, 82],
              72: [2, 82],
              80: [2, 82],
              81: [2, 82],
              82: [2, 82],
              83: [2, 82],
              84: [2, 82],
              85: [2, 82]
            }, {
              25: 54,
              38: 56,
              39: [1, 58],
              43: 57,
              44: [1, 59],
              45: 55,
              47: [2, 54]
            }, {
              28: 60,
              43: 61,
              44: [1, 59],
              47: [2, 56]
            }, {
              13: 63,
              15: [1, 20],
              18: [1, 62]
            }, {
              15: [2, 48],
              18: [2, 48]
            }, {
              33: [2, 86],
              57: 64,
              65: [2, 86],
              72: [2, 86],
              80: [2, 86],
              81: [2, 86],
              82: [2, 86],
              83: [2, 86],
              84: [2, 86],
              85: [2, 86]
            }, {
              33: [2, 40],
              65: [2, 40],
              72: [2, 40],
              80: [2, 40],
              81: [2, 40],
              82: [2, 40],
              83: [2, 40],
              84: [2, 40],
              85: [2, 40]
            }, {
              33: [2, 41],
              65: [2, 41],
              72: [2, 41],
              80: [2, 41],
              81: [2, 41],
              82: [2, 41],
              83: [2, 41],
              84: [2, 41],
              85: [2, 41]
            }, {
              20: 65,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              26: 66,
              47: [1, 67]
            }, {
              30: 68,
              33: [2, 58],
              65: [2, 58],
              72: [2, 58],
              75: [2, 58],
              80: [2, 58],
              81: [2, 58],
              82: [2, 58],
              83: [2, 58],
              84: [2, 58],
              85: [2, 58]
            }, {
              33: [2, 64],
              35: 69,
              65: [2, 64],
              72: [2, 64],
              75: [2, 64],
              80: [2, 64],
              81: [2, 64],
              82: [2, 64],
              83: [2, 64],
              84: [2, 64],
              85: [2, 64]
            }, {
              21: 70,
              23: [2, 50],
              65: [2, 50],
              72: [2, 50],
              80: [2, 50],
              81: [2, 50],
              82: [2, 50],
              83: [2, 50],
              84: [2, 50],
              85: [2, 50]
            }, {
              33: [2, 90],
              61: 71,
              65: [2, 90],
              72: [2, 90],
              80: [2, 90],
              81: [2, 90],
              82: [2, 90],
              83: [2, 90],
              84: [2, 90],
              85: [2, 90]
            }, {
              20: 75,
              33: [2, 80],
              50: 72,
              63: 73,
              64: 76,
              65: [1, 44],
              69: 74,
              70: 77,
              71: 78,
              72: [1, 79],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {72: [1, 80]}, {
              23: [2, 42],
              33: [2, 42],
              54: [2, 42],
              65: [2, 42],
              68: [2, 42],
              72: [2, 42],
              75: [2, 42],
              80: [2, 42],
              81: [2, 42],
              82: [2, 42],
              83: [2, 42],
              84: [2, 42],
              85: [2, 42],
              87: [1, 51]
            }, {
              20: 75,
              53: 81,
              54: [2, 84],
              63: 82,
              64: 76,
              65: [1, 44],
              69: 83,
              70: 77,
              71: 78,
              72: [1, 79],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              26: 84,
              47: [1, 67]
            }, {47: [2, 55]}, {
              4: 85,
              6: 3,
              14: [2, 46],
              15: [2, 46],
              19: [2, 46],
              29: [2, 46],
              34: [2, 46],
              39: [2, 46],
              44: [2, 46],
              47: [2, 46],
              48: [2, 46],
              51: [2, 46],
              55: [2, 46],
              60: [2, 46]
            }, {47: [2, 20]}, {
              20: 86,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              4: 87,
              6: 3,
              14: [2, 46],
              15: [2, 46],
              19: [2, 46],
              29: [2, 46],
              34: [2, 46],
              47: [2, 46],
              48: [2, 46],
              51: [2, 46],
              55: [2, 46],
              60: [2, 46]
            }, {
              26: 88,
              47: [1, 67]
            }, {47: [2, 57]}, {
              5: [2, 11],
              14: [2, 11],
              15: [2, 11],
              19: [2, 11],
              29: [2, 11],
              34: [2, 11],
              39: [2, 11],
              44: [2, 11],
              47: [2, 11],
              48: [2, 11],
              51: [2, 11],
              55: [2, 11],
              60: [2, 11]
            }, {
              15: [2, 49],
              18: [2, 49]
            }, {
              20: 75,
              33: [2, 88],
              58: 89,
              63: 90,
              64: 76,
              65: [1, 44],
              69: 91,
              70: 77,
              71: 78,
              72: [1, 79],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              65: [2, 94],
              66: 92,
              68: [2, 94],
              72: [2, 94],
              80: [2, 94],
              81: [2, 94],
              82: [2, 94],
              83: [2, 94],
              84: [2, 94],
              85: [2, 94]
            }, {
              5: [2, 25],
              14: [2, 25],
              15: [2, 25],
              19: [2, 25],
              29: [2, 25],
              34: [2, 25],
              39: [2, 25],
              44: [2, 25],
              47: [2, 25],
              48: [2, 25],
              51: [2, 25],
              55: [2, 25],
              60: [2, 25]
            }, {
              20: 93,
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 75,
              31: 94,
              33: [2, 60],
              63: 95,
              64: 76,
              65: [1, 44],
              69: 96,
              70: 77,
              71: 78,
              72: [1, 79],
              75: [2, 60],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 75,
              33: [2, 66],
              36: 97,
              63: 98,
              64: 76,
              65: [1, 44],
              69: 99,
              70: 77,
              71: 78,
              72: [1, 79],
              75: [2, 66],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 75,
              22: 100,
              23: [2, 52],
              63: 101,
              64: 76,
              65: [1, 44],
              69: 102,
              70: 77,
              71: 78,
              72: [1, 79],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              20: 75,
              33: [2, 92],
              62: 103,
              63: 104,
              64: 76,
              65: [1, 44],
              69: 105,
              70: 77,
              71: 78,
              72: [1, 79],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {33: [1, 106]}, {
              33: [2, 79],
              65: [2, 79],
              72: [2, 79],
              80: [2, 79],
              81: [2, 79],
              82: [2, 79],
              83: [2, 79],
              84: [2, 79],
              85: [2, 79]
            }, {33: [2, 81]}, {
              23: [2, 27],
              33: [2, 27],
              54: [2, 27],
              65: [2, 27],
              68: [2, 27],
              72: [2, 27],
              75: [2, 27],
              80: [2, 27],
              81: [2, 27],
              82: [2, 27],
              83: [2, 27],
              84: [2, 27],
              85: [2, 27]
            }, {
              23: [2, 28],
              33: [2, 28],
              54: [2, 28],
              65: [2, 28],
              68: [2, 28],
              72: [2, 28],
              75: [2, 28],
              80: [2, 28],
              81: [2, 28],
              82: [2, 28],
              83: [2, 28],
              84: [2, 28],
              85: [2, 28]
            }, {
              23: [2, 30],
              33: [2, 30],
              54: [2, 30],
              68: [2, 30],
              71: 107,
              72: [1, 108],
              75: [2, 30]
            }, {
              23: [2, 98],
              33: [2, 98],
              54: [2, 98],
              68: [2, 98],
              72: [2, 98],
              75: [2, 98]
            }, {
              23: [2, 45],
              33: [2, 45],
              54: [2, 45],
              65: [2, 45],
              68: [2, 45],
              72: [2, 45],
              73: [1, 109],
              75: [2, 45],
              80: [2, 45],
              81: [2, 45],
              82: [2, 45],
              83: [2, 45],
              84: [2, 45],
              85: [2, 45],
              87: [2, 45]
            }, {
              23: [2, 44],
              33: [2, 44],
              54: [2, 44],
              65: [2, 44],
              68: [2, 44],
              72: [2, 44],
              75: [2, 44],
              80: [2, 44],
              81: [2, 44],
              82: [2, 44],
              83: [2, 44],
              84: [2, 44],
              85: [2, 44],
              87: [2, 44]
            }, {54: [1, 110]}, {
              54: [2, 83],
              65: [2, 83],
              72: [2, 83],
              80: [2, 83],
              81: [2, 83],
              82: [2, 83],
              83: [2, 83],
              84: [2, 83],
              85: [2, 83]
            }, {54: [2, 85]}, {
              5: [2, 13],
              14: [2, 13],
              15: [2, 13],
              19: [2, 13],
              29: [2, 13],
              34: [2, 13],
              39: [2, 13],
              44: [2, 13],
              47: [2, 13],
              48: [2, 13],
              51: [2, 13],
              55: [2, 13],
              60: [2, 13]
            }, {
              38: 56,
              39: [1, 58],
              43: 57,
              44: [1, 59],
              45: 112,
              46: 111,
              47: [2, 76]
            }, {
              33: [2, 70],
              40: 113,
              65: [2, 70],
              72: [2, 70],
              75: [2, 70],
              80: [2, 70],
              81: [2, 70],
              82: [2, 70],
              83: [2, 70],
              84: [2, 70],
              85: [2, 70]
            }, {47: [2, 18]}, {
              5: [2, 14],
              14: [2, 14],
              15: [2, 14],
              19: [2, 14],
              29: [2, 14],
              34: [2, 14],
              39: [2, 14],
              44: [2, 14],
              47: [2, 14],
              48: [2, 14],
              51: [2, 14],
              55: [2, 14],
              60: [2, 14]
            }, {33: [1, 114]}, {
              33: [2, 87],
              65: [2, 87],
              72: [2, 87],
              80: [2, 87],
              81: [2, 87],
              82: [2, 87],
              83: [2, 87],
              84: [2, 87],
              85: [2, 87]
            }, {33: [2, 89]}, {
              20: 75,
              63: 116,
              64: 76,
              65: [1, 44],
              67: 115,
              68: [2, 96],
              69: 117,
              70: 77,
              71: 78,
              72: [1, 79],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {33: [1, 118]}, {
              32: 119,
              33: [2, 62],
              74: 120,
              75: [1, 121]
            }, {
              33: [2, 59],
              65: [2, 59],
              72: [2, 59],
              75: [2, 59],
              80: [2, 59],
              81: [2, 59],
              82: [2, 59],
              83: [2, 59],
              84: [2, 59],
              85: [2, 59]
            }, {
              33: [2, 61],
              75: [2, 61]
            }, {
              33: [2, 68],
              37: 122,
              74: 123,
              75: [1, 121]
            }, {
              33: [2, 65],
              65: [2, 65],
              72: [2, 65],
              75: [2, 65],
              80: [2, 65],
              81: [2, 65],
              82: [2, 65],
              83: [2, 65],
              84: [2, 65],
              85: [2, 65]
            }, {
              33: [2, 67],
              75: [2, 67]
            }, {23: [1, 124]}, {
              23: [2, 51],
              65: [2, 51],
              72: [2, 51],
              80: [2, 51],
              81: [2, 51],
              82: [2, 51],
              83: [2, 51],
              84: [2, 51],
              85: [2, 51]
            }, {23: [2, 53]}, {33: [1, 125]}, {
              33: [2, 91],
              65: [2, 91],
              72: [2, 91],
              80: [2, 91],
              81: [2, 91],
              82: [2, 91],
              83: [2, 91],
              84: [2, 91],
              85: [2, 91]
            }, {33: [2, 93]}, {
              5: [2, 22],
              14: [2, 22],
              15: [2, 22],
              19: [2, 22],
              29: [2, 22],
              34: [2, 22],
              39: [2, 22],
              44: [2, 22],
              47: [2, 22],
              48: [2, 22],
              51: [2, 22],
              55: [2, 22],
              60: [2, 22]
            }, {
              23: [2, 99],
              33: [2, 99],
              54: [2, 99],
              68: [2, 99],
              72: [2, 99],
              75: [2, 99]
            }, {73: [1, 109]}, {
              20: 75,
              63: 126,
              64: 76,
              65: [1, 44],
              72: [1, 35],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              5: [2, 23],
              14: [2, 23],
              15: [2, 23],
              19: [2, 23],
              29: [2, 23],
              34: [2, 23],
              39: [2, 23],
              44: [2, 23],
              47: [2, 23],
              48: [2, 23],
              51: [2, 23],
              55: [2, 23],
              60: [2, 23]
            }, {47: [2, 19]}, {47: [2, 77]}, {
              20: 75,
              33: [2, 72],
              41: 127,
              63: 128,
              64: 76,
              65: [1, 44],
              69: 129,
              70: 77,
              71: 78,
              72: [1, 79],
              75: [2, 72],
              78: 26,
              79: 27,
              80: [1, 28],
              81: [1, 29],
              82: [1, 30],
              83: [1, 31],
              84: [1, 32],
              85: [1, 34],
              86: 33
            }, {
              5: [2, 24],
              14: [2, 24],
              15: [2, 24],
              19: [2, 24],
              29: [2, 24],
              34: [2, 24],
              39: [2, 24],
              44: [2, 24],
              47: [2, 24],
              48: [2, 24],
              51: [2, 24],
              55: [2, 24],
              60: [2, 24]
            }, {68: [1, 130]}, {
              65: [2, 95],
              68: [2, 95],
              72: [2, 95],
              80: [2, 95],
              81: [2, 95],
              82: [2, 95],
              83: [2, 95],
              84: [2, 95],
              85: [2, 95]
            }, {68: [2, 97]}, {
              5: [2, 21],
              14: [2, 21],
              15: [2, 21],
              19: [2, 21],
              29: [2, 21],
              34: [2, 21],
              39: [2, 21],
              44: [2, 21],
              47: [2, 21],
              48: [2, 21],
              51: [2, 21],
              55: [2, 21],
              60: [2, 21]
            }, {33: [1, 131]}, {33: [2, 63]}, {
              72: [1, 133],
              76: 132
            }, {33: [1, 134]}, {33: [2, 69]}, {15: [2, 12]}, {
              14: [2, 26],
              15: [2, 26],
              19: [2, 26],
              29: [2, 26],
              34: [2, 26],
              47: [2, 26],
              48: [2, 26],
              51: [2, 26],
              55: [2, 26],
              60: [2, 26]
            }, {
              23: [2, 31],
              33: [2, 31],
              54: [2, 31],
              68: [2, 31],
              72: [2, 31],
              75: [2, 31]
            }, {
              33: [2, 74],
              42: 135,
              74: 136,
              75: [1, 121]
            }, {
              33: [2, 71],
              65: [2, 71],
              72: [2, 71],
              75: [2, 71],
              80: [2, 71],
              81: [2, 71],
              82: [2, 71],
              83: [2, 71],
              84: [2, 71],
              85: [2, 71]
            }, {
              33: [2, 73],
              75: [2, 73]
            }, {
              23: [2, 29],
              33: [2, 29],
              54: [2, 29],
              65: [2, 29],
              68: [2, 29],
              72: [2, 29],
              75: [2, 29],
              80: [2, 29],
              81: [2, 29],
              82: [2, 29],
              83: [2, 29],
              84: [2, 29],
              85: [2, 29]
            }, {
              14: [2, 15],
              15: [2, 15],
              19: [2, 15],
              29: [2, 15],
              34: [2, 15],
              39: [2, 15],
              44: [2, 15],
              47: [2, 15],
              48: [2, 15],
              51: [2, 15],
              55: [2, 15],
              60: [2, 15]
            }, {
              72: [1, 138],
              77: [1, 137]
            }, {
              72: [2, 100],
              77: [2, 100]
            }, {
              14: [2, 16],
              15: [2, 16],
              19: [2, 16],
              29: [2, 16],
              34: [2, 16],
              44: [2, 16],
              47: [2, 16],
              48: [2, 16],
              51: [2, 16],
              55: [2, 16],
              60: [2, 16]
            }, {33: [1, 139]}, {33: [2, 75]}, {33: [2, 32]}, {
              72: [2, 101],
              77: [2, 101]
            }, {
              14: [2, 17],
              15: [2, 17],
              19: [2, 17],
              29: [2, 17],
              34: [2, 17],
              39: [2, 17],
              44: [2, 17],
              47: [2, 17],
              48: [2, 17],
              51: [2, 17],
              55: [2, 17],
              60: [2, 17]
            }],
            defaultActions: {
              4: [2, 1],
              55: [2, 55],
              57: [2, 20],
              61: [2, 57],
              74: [2, 81],
              83: [2, 85],
              87: [2, 18],
              91: [2, 89],
              102: [2, 53],
              105: [2, 93],
              111: [2, 19],
              112: [2, 77],
              117: [2, 97],
              120: [2, 63],
              123: [2, 69],
              124: [2, 12],
              136: [2, 75],
              137: [2, 32]
            },
            parseError: function parseError(str, hash) {
              throw new Error(str);
            },
            parse: function parse(input) {
              var self = this,
                  stack = [0],
                  vstack = [null],
                  lstack = [],
                  table = this.table,
                  yytext = "",
                  yylineno = 0,
                  yyleng = 0,
                  recovering = 0,
                  TERROR = 2,
                  EOF = 1;
              this.lexer.setInput(input);
              this.lexer.yy = this.yy;
              this.yy.lexer = this.lexer;
              this.yy.parser = this;
              if (typeof this.lexer.yylloc == "undefined")
                this.lexer.yylloc = {};
              var yyloc = this.lexer.yylloc;
              lstack.push(yyloc);
              var ranges = this.lexer.options && this.lexer.options.ranges;
              if (typeof this.yy.parseError === "function")
                this.parseError = this.yy.parseError;
              function popStack(n) {
                stack.length = stack.length - 2 * n;
                vstack.length = vstack.length - n;
                lstack.length = lstack.length - n;
              }
              function lex() {
                var token;
                token = self.lexer.lex() || 1;
                if (typeof token !== "number") {
                  token = self.symbols_[token] || token;
                }
                return token;
              }
              var symbol,
                  preErrorSymbol,
                  state,
                  action,
                  a,
                  r,
                  yyval = {},
                  p,
                  len,
                  newState,
                  expected;
              while (true) {
                state = stack[stack.length - 1];
                if (this.defaultActions[state]) {
                  action = this.defaultActions[state];
                } else {
                  if (symbol === null || typeof symbol == "undefined") {
                    symbol = lex();
                  }
                  action = table[state] && table[state][symbol];
                }
                if (typeof action === "undefined" || !action.length || !action[0]) {
                  var errStr = "";
                  if (!recovering) {
                    expected = [];
                    for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                        expected.push("'" + this.terminals_[p] + "'");
                      }
                    if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                    } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
                    }
                    this.parseError(errStr, {
                      text: this.lexer.match,
                      token: this.terminals_[symbol] || symbol,
                      line: this.lexer.yylineno,
                      loc: yyloc,
                      expected: expected
                    });
                  }
                }
                if (action[0] instanceof Array && action.length > 1) {
                  throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
                }
                switch (action[0]) {
                  case 1:
                    stack.push(symbol);
                    vstack.push(this.lexer.yytext);
                    lstack.push(this.lexer.yylloc);
                    stack.push(action[1]);
                    symbol = null;
                    if (!preErrorSymbol) {
                      yyleng = this.lexer.yyleng;
                      yytext = this.lexer.yytext;
                      yylineno = this.lexer.yylineno;
                      yyloc = this.lexer.yylloc;
                      if (recovering > 0)
                        recovering--;
                    } else {
                      symbol = preErrorSymbol;
                      preErrorSymbol = null;
                    }
                    break;
                  case 2:
                    len = this.productions_[action[1]][1];
                    yyval.$ = vstack[vstack.length - len];
                    yyval._$ = {
                      first_line: lstack[lstack.length - (len || 1)].first_line,
                      last_line: lstack[lstack.length - 1].last_line,
                      first_column: lstack[lstack.length - (len || 1)].first_column,
                      last_column: lstack[lstack.length - 1].last_column
                    };
                    if (ranges) {
                      yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
                    }
                    r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
                    if (typeof r !== "undefined") {
                      return r;
                    }
                    if (len) {
                      stack = stack.slice(0, -1 * len * 2);
                      vstack = vstack.slice(0, -1 * len);
                      lstack = lstack.slice(0, -1 * len);
                    }
                    stack.push(this.productions_[action[1]][0]);
                    vstack.push(yyval.$);
                    lstack.push(yyval._$);
                    newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
                    stack.push(newState);
                    break;
                  case 3:
                    return true;
                }
              }
              return true;
            }
          };
          var lexer = (function() {
            var lexer = {
              EOF: 1,
              parseError: function parseError(str, hash) {
                if (this.yy.parser) {
                  this.yy.parser.parseError(str, hash);
                } else {
                  throw new Error(str);
                }
              },
              setInput: function setInput(input) {
                this._input = input;
                this._more = this._less = this.done = false;
                this.yylineno = this.yyleng = 0;
                this.yytext = this.matched = this.match = '';
                this.conditionStack = ['INITIAL'];
                this.yylloc = {
                  first_line: 1,
                  first_column: 0,
                  last_line: 1,
                  last_column: 0
                };
                if (this.options.ranges)
                  this.yylloc.range = [0, 0];
                this.offset = 0;
                return this;
              },
              input: function input() {
                var ch = this._input[0];
                this.yytext += ch;
                this.yyleng++;
                this.offset++;
                this.match += ch;
                this.matched += ch;
                var lines = ch.match(/(?:\r\n?|\n).*/g);
                if (lines) {
                  this.yylineno++;
                  this.yylloc.last_line++;
                } else {
                  this.yylloc.last_column++;
                }
                if (this.options.ranges)
                  this.yylloc.range[1]++;
                this._input = this._input.slice(1);
                return ch;
              },
              unput: function unput(ch) {
                var len = ch.length;
                var lines = ch.split(/(?:\r\n?|\n)/g);
                this._input = ch + this._input;
                this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
                this.offset -= len;
                var oldLines = this.match.split(/(?:\r\n?|\n)/g);
                this.match = this.match.substr(0, this.match.length - 1);
                this.matched = this.matched.substr(0, this.matched.length - 1);
                if (lines.length - 1)
                  this.yylineno -= lines.length - 1;
                var r = this.yylloc.range;
                this.yylloc = {
                  first_line: this.yylloc.first_line,
                  last_line: this.yylineno + 1,
                  first_column: this.yylloc.first_column,
                  last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
                };
                if (this.options.ranges) {
                  this.yylloc.range = [r[0], r[0] + this.yyleng - len];
                }
                return this;
              },
              more: function more() {
                this._more = true;
                return this;
              },
              less: function less(n) {
                this.unput(this.match.slice(n));
              },
              pastInput: function pastInput() {
                var past = this.matched.substr(0, this.matched.length - this.match.length);
                return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
              },
              upcomingInput: function upcomingInput() {
                var next = this.match;
                if (next.length < 20) {
                  next += this._input.substr(0, 20 - next.length);
                }
                return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
              },
              showPosition: function showPosition() {
                var pre = this.pastInput();
                var c = new Array(pre.length + 1).join("-");
                return pre + this.upcomingInput() + "\n" + c + "^";
              },
              next: function next() {
                if (this.done) {
                  return this.EOF;
                }
                if (!this._input)
                  this.done = true;
                var token,
                    match,
                    tempMatch,
                    index,
                    col,
                    lines;
                if (!this._more) {
                  this.yytext = '';
                  this.match = '';
                }
                var rules = this._currentRules();
                for (var i = 0; i < rules.length; i++) {
                  tempMatch = this._input.match(this.rules[rules[i]]);
                  if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                    match = tempMatch;
                    index = i;
                    if (!this.options.flex)
                      break;
                  }
                }
                if (match) {
                  lines = match[0].match(/(?:\r\n?|\n).*/g);
                  if (lines)
                    this.yylineno += lines.length;
                  this.yylloc = {
                    first_line: this.yylloc.last_line,
                    last_line: this.yylineno + 1,
                    first_column: this.yylloc.last_column,
                    last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
                  };
                  this.yytext += match[0];
                  this.match += match[0];
                  this.matches = match;
                  this.yyleng = this.yytext.length;
                  if (this.options.ranges) {
                    this.yylloc.range = [this.offset, this.offset += this.yyleng];
                  }
                  this._more = false;
                  this._input = this._input.slice(match[0].length);
                  this.matched += match[0];
                  token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
                  if (this.done && this._input)
                    this.done = false;
                  if (token)
                    return token;
                  else
                    return;
                }
                if (this._input === "") {
                  return this.EOF;
                } else {
                  return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                    text: "",
                    token: null,
                    line: this.yylineno
                  });
                }
              },
              lex: function lex() {
                var r = this.next();
                if (typeof r !== 'undefined') {
                  return r;
                } else {
                  return this.lex();
                }
              },
              begin: function begin(condition) {
                this.conditionStack.push(condition);
              },
              popState: function popState() {
                return this.conditionStack.pop();
              },
              _currentRules: function _currentRules() {
                return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
              },
              topState: function topState() {
                return this.conditionStack[this.conditionStack.length - 2];
              },
              pushState: function begin(condition) {
                this.begin(condition);
              }
            };
            lexer.options = {};
            lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
              function strip(start, end) {
                return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
              }
              var YYSTATE = YY_START;
              switch ($avoiding_name_collisions) {
                case 0:
                  if (yy_.yytext.slice(-2) === "\\\\") {
                    strip(0, 1);
                    this.begin("mu");
                  } else if (yy_.yytext.slice(-1) === "\\") {
                    strip(0, 1);
                    this.begin("emu");
                  } else {
                    this.begin("mu");
                  }
                  if (yy_.yytext)
                    return 15;
                  break;
                case 1:
                  return 15;
                  break;
                case 2:
                  this.popState();
                  return 15;
                  break;
                case 3:
                  this.begin('raw');
                  return 15;
                  break;
                case 4:
                  this.popState();
                  if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
                    return 15;
                  } else {
                    yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
                    return 'END_RAW_BLOCK';
                  }
                  break;
                case 5:
                  return 15;
                  break;
                case 6:
                  this.popState();
                  return 14;
                  break;
                case 7:
                  return 65;
                  break;
                case 8:
                  return 68;
                  break;
                case 9:
                  return 19;
                  break;
                case 10:
                  this.popState();
                  this.begin('raw');
                  return 23;
                  break;
                case 11:
                  return 55;
                  break;
                case 12:
                  return 60;
                  break;
                case 13:
                  return 29;
                  break;
                case 14:
                  return 47;
                  break;
                case 15:
                  this.popState();
                  return 44;
                  break;
                case 16:
                  this.popState();
                  return 44;
                  break;
                case 17:
                  return 34;
                  break;
                case 18:
                  return 39;
                  break;
                case 19:
                  return 51;
                  break;
                case 20:
                  return 48;
                  break;
                case 21:
                  this.unput(yy_.yytext);
                  this.popState();
                  this.begin('com');
                  break;
                case 22:
                  this.popState();
                  return 14;
                  break;
                case 23:
                  return 48;
                  break;
                case 24:
                  return 73;
                  break;
                case 25:
                  return 72;
                  break;
                case 26:
                  return 72;
                  break;
                case 27:
                  return 87;
                  break;
                case 28:
                  break;
                case 29:
                  this.popState();
                  return 54;
                  break;
                case 30:
                  this.popState();
                  return 33;
                  break;
                case 31:
                  yy_.yytext = strip(1, 2).replace(/\\"/g, '"');
                  return 80;
                  break;
                case 32:
                  yy_.yytext = strip(1, 2).replace(/\\'/g, "'");
                  return 80;
                  break;
                case 33:
                  return 85;
                  break;
                case 34:
                  return 82;
                  break;
                case 35:
                  return 82;
                  break;
                case 36:
                  return 83;
                  break;
                case 37:
                  return 84;
                  break;
                case 38:
                  return 81;
                  break;
                case 39:
                  return 75;
                  break;
                case 40:
                  return 77;
                  break;
                case 41:
                  return 72;
                  break;
                case 42:
                  yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');
                  return 72;
                  break;
                case 43:
                  return 'INVALID';
                  break;
                case 44:
                  return 5;
                  break;
              }
            };
            lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
            lexer.conditions = {
              "mu": {
                "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44],
                "inclusive": false
              },
              "emu": {
                "rules": [2],
                "inclusive": false
              },
              "com": {
                "rules": [6],
                "inclusive": false
              },
              "raw": {
                "rules": [3, 4, 5],
                "inclusive": false
              },
              "INITIAL": {
                "rules": [0, 1, 44],
                "inclusive": true
              }
            };
            return lexer;
          })();
          parser.lexer = lexer;
          function Parser() {
            this.yy = {};
          }
          Parser.prototype = parser;
          parser.Parser = Parser;
          return new Parser();
        })();
        exports.__esModule = true;
        exports['default'] = handlebars;
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _visitor = __webpack_require__(25);
        var _visitor2 = _interopRequireDefault(_visitor);
        function WhitespaceControl() {
          var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
          this.options = options;
        }
        WhitespaceControl.prototype = new _visitor2['default']();
        WhitespaceControl.prototype.Program = function(program) {
          var doStandalone = !this.options.ignoreStandalone;
          var isRoot = !this.isRootSeen;
          this.isRootSeen = true;
          var body = program.body;
          for (var i = 0,
              l = body.length; i < l; i++) {
            var current = body[i],
                strip = this.accept(current);
            if (!strip) {
              continue;
            }
            var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
                _isNextWhitespace = isNextWhitespace(body, i, isRoot),
                openStandalone = strip.openStandalone && _isPrevWhitespace,
                closeStandalone = strip.closeStandalone && _isNextWhitespace,
                inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;
            if (strip.close) {
              omitRight(body, i, true);
            }
            if (strip.open) {
              omitLeft(body, i, true);
            }
            if (doStandalone && inlineStandalone) {
              omitRight(body, i);
              if (omitLeft(body, i)) {
                if (current.type === 'PartialStatement') {
                  current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
                }
              }
            }
            if (doStandalone && openStandalone) {
              omitRight((current.program || current.inverse).body);
              omitLeft(body, i);
            }
            if (doStandalone && closeStandalone) {
              omitRight(body, i);
              omitLeft((current.inverse || current.program).body);
            }
          }
          return program;
        };
        WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function(block) {
          this.accept(block.program);
          this.accept(block.inverse);
          var program = block.program || block.inverse,
              inverse = block.program && block.inverse,
              firstInverse = inverse,
              lastInverse = inverse;
          if (inverse && inverse.chained) {
            firstInverse = inverse.body[0].program;
            while (lastInverse.chained) {
              lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
            }
          }
          var strip = {
            open: block.openStrip.open,
            close: block.closeStrip.close,
            openStandalone: isNextWhitespace(program.body),
            closeStandalone: isPrevWhitespace((firstInverse || program).body)
          };
          if (block.openStrip.close) {
            omitRight(program.body, null, true);
          }
          if (inverse) {
            var inverseStrip = block.inverseStrip;
            if (inverseStrip.open) {
              omitLeft(program.body, null, true);
            }
            if (inverseStrip.close) {
              omitRight(firstInverse.body, null, true);
            }
            if (block.closeStrip.open) {
              omitLeft(lastInverse.body, null, true);
            }
            if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
              omitLeft(program.body);
              omitRight(firstInverse.body);
            }
          } else if (block.closeStrip.open) {
            omitLeft(program.body, null, true);
          }
          return strip;
        };
        WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function(mustache) {
          return mustache.strip;
        };
        WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function(node) {
          var strip = node.strip || {};
          return {
            inlineStandalone: true,
            open: strip.open,
            close: strip.close
          };
        };
        function isPrevWhitespace(body, i, isRoot) {
          if (i === undefined) {
            i = body.length;
          }
          var prev = body[i - 1],
              sibling = body[i - 2];
          if (!prev) {
            return isRoot;
          }
          if (prev.type === 'ContentStatement') {
            return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
          }
        }
        function isNextWhitespace(body, i, isRoot) {
          if (i === undefined) {
            i = -1;
          }
          var next = body[i + 1],
              sibling = body[i + 2];
          if (!next) {
            return isRoot;
          }
          if (next.type === 'ContentStatement') {
            return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
          }
        }
        function omitRight(body, i, multiple) {
          var current = body[i == null ? 0 : i + 1];
          if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
            return;
          }
          var original = current.value;
          current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
          current.rightStripped = current.value !== original;
        }
        function omitLeft(body, i, multiple) {
          var current = body[i == null ? body.length - 1 : i - 1];
          if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
            return;
          }
          var original = current.value;
          current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
          current.leftStripped = current.value !== original;
          return current.leftStripped;
        }
        exports['default'] = WhitespaceControl;
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        function Visitor() {
          this.parents = [];
        }
        Visitor.prototype = {
          constructor: Visitor,
          mutating: false,
          acceptKey: function acceptKey(node, name) {
            var value = this.accept(node[name]);
            if (this.mutating) {
              if (value && !Visitor.prototype[value.type]) {
                throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
              }
              node[name] = value;
            }
          },
          acceptRequired: function acceptRequired(node, name) {
            this.acceptKey(node, name);
            if (!node[name]) {
              throw new _exception2['default'](node.type + ' requires ' + name);
            }
          },
          acceptArray: function acceptArray(array) {
            for (var i = 0,
                l = array.length; i < l; i++) {
              this.acceptKey(array, i);
              if (!array[i]) {
                array.splice(i, 1);
                i--;
                l--;
              }
            }
          },
          accept: function accept(object) {
            if (!object) {
              return;
            }
            if (!this[object.type]) {
              throw new _exception2['default']('Unknown type: ' + object.type, object);
            }
            if (this.current) {
              this.parents.unshift(this.current);
            }
            this.current = object;
            var ret = this[object.type](object);
            this.current = this.parents.shift();
            if (!this.mutating || ret) {
              return ret;
            } else if (ret !== false) {
              return object;
            }
          },
          Program: function Program(program) {
            this.acceptArray(program.body);
          },
          MustacheStatement: visitSubExpression,
          Decorator: visitSubExpression,
          BlockStatement: visitBlock,
          DecoratorBlock: visitBlock,
          PartialStatement: visitPartial,
          PartialBlockStatement: function PartialBlockStatement(partial) {
            visitPartial.call(this, partial);
            this.acceptKey(partial, 'program');
          },
          ContentStatement: function ContentStatement() {},
          CommentStatement: function CommentStatement() {},
          SubExpression: visitSubExpression,
          PathExpression: function PathExpression() {},
          StringLiteral: function StringLiteral() {},
          NumberLiteral: function NumberLiteral() {},
          BooleanLiteral: function BooleanLiteral() {},
          UndefinedLiteral: function UndefinedLiteral() {},
          NullLiteral: function NullLiteral() {},
          Hash: function Hash(hash) {
            this.acceptArray(hash.pairs);
          },
          HashPair: function HashPair(pair) {
            this.acceptRequired(pair, 'value');
          }
        };
        function visitSubExpression(mustache) {
          this.acceptRequired(mustache, 'path');
          this.acceptArray(mustache.params);
          this.acceptKey(mustache, 'hash');
        }
        function visitBlock(block) {
          visitSubExpression.call(this, block);
          this.acceptKey(block, 'program');
          this.acceptKey(block, 'inverse');
        }
        function visitPartial(partial) {
          this.acceptRequired(partial, 'name');
          this.acceptArray(partial.params);
          this.acceptKey(partial, 'hash');
        }
        exports['default'] = Visitor;
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        exports.SourceLocation = SourceLocation;
        exports.id = id;
        exports.stripFlags = stripFlags;
        exports.stripComment = stripComment;
        exports.preparePath = preparePath;
        exports.prepareMustache = prepareMustache;
        exports.prepareRawBlock = prepareRawBlock;
        exports.prepareBlock = prepareBlock;
        exports.prepareProgram = prepareProgram;
        exports.preparePartialBlock = preparePartialBlock;
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        function validateClose(open, close) {
          close = close.path ? close.path.original : close;
          if (open.path.original !== close) {
            var errorNode = {loc: open.path.loc};
            throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
          }
        }
        function SourceLocation(source, locInfo) {
          this.source = source;
          this.start = {
            line: locInfo.first_line,
            column: locInfo.first_column
          };
          this.end = {
            line: locInfo.last_line,
            column: locInfo.last_column
          };
        }
        function id(token) {
          if (/^\[.*\]$/.test(token)) {
            return token.substr(1, token.length - 2);
          } else {
            return token;
          }
        }
        function stripFlags(open, close) {
          return {
            open: open.charAt(2) === '~',
            close: close.charAt(close.length - 3) === '~'
          };
        }
        function stripComment(comment) {
          return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
        }
        function preparePath(data, parts, loc) {
          loc = this.locInfo(loc);
          var original = data ? '@' : '',
              dig = [],
              depth = 0,
              depthString = '';
          for (var i = 0,
              l = parts.length; i < l; i++) {
            var part = parts[i].part,
                isLiteral = parts[i].original !== part;
            original += (parts[i].separator || '') + part;
            if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
              if (dig.length > 0) {
                throw new _exception2['default']('Invalid path: ' + original, {loc: loc});
              } else if (part === '..') {
                depth++;
                depthString += '../';
              }
            } else {
              dig.push(part);
            }
          }
          return {
            type: 'PathExpression',
            data: data,
            depth: depth,
            parts: dig,
            original: original,
            loc: loc
          };
        }
        function prepareMustache(path, params, hash, open, strip, locInfo) {
          var escapeFlag = open.charAt(3) || open.charAt(2),
              escaped = escapeFlag !== '{' && escapeFlag !== '&';
          var decorator = /\*/.test(open);
          return {
            type: decorator ? 'Decorator' : 'MustacheStatement',
            path: path,
            params: params,
            hash: hash,
            escaped: escaped,
            strip: strip,
            loc: this.locInfo(locInfo)
          };
        }
        function prepareRawBlock(openRawBlock, contents, close, locInfo) {
          validateClose(openRawBlock, close);
          locInfo = this.locInfo(locInfo);
          var program = {
            type: 'Program',
            body: contents,
            strip: {},
            loc: locInfo
          };
          return {
            type: 'BlockStatement',
            path: openRawBlock.path,
            params: openRawBlock.params,
            hash: openRawBlock.hash,
            program: program,
            openStrip: {},
            inverseStrip: {},
            closeStrip: {},
            loc: locInfo
          };
        }
        function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
          if (close && close.path) {
            validateClose(openBlock, close);
          }
          var decorator = /\*/.test(openBlock.open);
          program.blockParams = openBlock.blockParams;
          var inverse = undefined,
              inverseStrip = undefined;
          if (inverseAndProgram) {
            if (decorator) {
              throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
            }
            if (inverseAndProgram.chain) {
              inverseAndProgram.program.body[0].closeStrip = close.strip;
            }
            inverseStrip = inverseAndProgram.strip;
            inverse = inverseAndProgram.program;
          }
          if (inverted) {
            inverted = inverse;
            inverse = program;
            program = inverted;
          }
          return {
            type: decorator ? 'DecoratorBlock' : 'BlockStatement',
            path: openBlock.path,
            params: openBlock.params,
            hash: openBlock.hash,
            program: program,
            inverse: inverse,
            openStrip: openBlock.strip,
            inverseStrip: inverseStrip,
            closeStrip: close && close.strip,
            loc: this.locInfo(locInfo)
          };
        }
        function prepareProgram(statements, loc) {
          if (!loc && statements.length) {
            var firstLoc = statements[0].loc,
                lastLoc = statements[statements.length - 1].loc;
            if (firstLoc && lastLoc) {
              loc = {
                source: firstLoc.source,
                start: {
                  line: firstLoc.start.line,
                  column: firstLoc.start.column
                },
                end: {
                  line: lastLoc.end.line,
                  column: lastLoc.end.column
                }
              };
            }
          }
          return {
            type: 'Program',
            body: statements,
            strip: {},
            loc: loc
          };
        }
        function preparePartialBlock(open, program, close, locInfo) {
          validateClose(open, close);
          return {
            type: 'PartialBlockStatement',
            name: open.path,
            params: open.params,
            hash: open.hash,
            program: program,
            openStrip: open.strip,
            closeStrip: close && close.strip,
            loc: this.locInfo(locInfo)
          };
        }
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        exports.Compiler = Compiler;
        exports.precompile = precompile;
        exports.compile = compile;
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        var _utils = __webpack_require__(5);
        var _ast = __webpack_require__(21);
        var _ast2 = _interopRequireDefault(_ast);
        var slice = [].slice;
        function Compiler() {}
        Compiler.prototype = {
          compiler: Compiler,
          equals: function equals(other) {
            var len = this.opcodes.length;
            if (other.opcodes.length !== len) {
              return false;
            }
            for (var i = 0; i < len; i++) {
              var opcode = this.opcodes[i],
                  otherOpcode = other.opcodes[i];
              if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
                return false;
              }
            }
            len = this.children.length;
            for (var i = 0; i < len; i++) {
              if (!this.children[i].equals(other.children[i])) {
                return false;
              }
            }
            return true;
          },
          guid: 0,
          compile: function compile(program, options) {
            this.sourceNode = [];
            this.opcodes = [];
            this.children = [];
            this.options = options;
            this.stringParams = options.stringParams;
            this.trackIds = options.trackIds;
            options.blockParams = options.blockParams || [];
            var knownHelpers = options.knownHelpers;
            options.knownHelpers = {
              'helperMissing': true,
              'blockHelperMissing': true,
              'each': true,
              'if': true,
              'unless': true,
              'with': true,
              'log': true,
              'lookup': true
            };
            if (knownHelpers) {
              for (var _name in knownHelpers) {
                if (_name in knownHelpers) {
                  options.knownHelpers[_name] = knownHelpers[_name];
                }
              }
            }
            return this.accept(program);
          },
          compileProgram: function compileProgram(program) {
            var childCompiler = new this.compiler(),
                result = childCompiler.compile(program, this.options),
                guid = this.guid++;
            this.usePartial = this.usePartial || result.usePartial;
            this.children[guid] = result;
            this.useDepths = this.useDepths || result.useDepths;
            return guid;
          },
          accept: function accept(node) {
            if (!this[node.type]) {
              throw new _exception2['default']('Unknown type: ' + node.type, node);
            }
            this.sourceNode.unshift(node);
            var ret = this[node.type](node);
            this.sourceNode.shift();
            return ret;
          },
          Program: function Program(program) {
            this.options.blockParams.unshift(program.blockParams);
            var body = program.body,
                bodyLength = body.length;
            for (var i = 0; i < bodyLength; i++) {
              this.accept(body[i]);
            }
            this.options.blockParams.shift();
            this.isSimple = bodyLength === 1;
            this.blockParams = program.blockParams ? program.blockParams.length : 0;
            return this;
          },
          BlockStatement: function BlockStatement(block) {
            transformLiteralToPath(block);
            var program = block.program,
                inverse = block.inverse;
            program = program && this.compileProgram(program);
            inverse = inverse && this.compileProgram(inverse);
            var type = this.classifySexpr(block);
            if (type === 'helper') {
              this.helperSexpr(block, program, inverse);
            } else if (type === 'simple') {
              this.simpleSexpr(block);
              this.opcode('pushProgram', program);
              this.opcode('pushProgram', inverse);
              this.opcode('emptyHash');
              this.opcode('blockValue', block.path.original);
            } else {
              this.ambiguousSexpr(block, program, inverse);
              this.opcode('pushProgram', program);
              this.opcode('pushProgram', inverse);
              this.opcode('emptyHash');
              this.opcode('ambiguousBlockValue');
            }
            this.opcode('append');
          },
          DecoratorBlock: function DecoratorBlock(decorator) {
            var program = decorator.program && this.compileProgram(decorator.program);
            var params = this.setupFullMustacheParams(decorator, program, undefined),
                path = decorator.path;
            this.useDecorators = true;
            this.opcode('registerDecorator', params.length, path.original);
          },
          PartialStatement: function PartialStatement(partial) {
            this.usePartial = true;
            var program = partial.program;
            if (program) {
              program = this.compileProgram(partial.program);
            }
            var params = partial.params;
            if (params.length > 1) {
              throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
            } else if (!params.length) {
              if (this.options.explicitPartialContext) {
                this.opcode('pushLiteral', 'undefined');
              } else {
                params.push({
                  type: 'PathExpression',
                  parts: [],
                  depth: 0
                });
              }
            }
            var partialName = partial.name.original,
                isDynamic = partial.name.type === 'SubExpression';
            if (isDynamic) {
              this.accept(partial.name);
            }
            this.setupFullMustacheParams(partial, program, undefined, true);
            var indent = partial.indent || '';
            if (this.options.preventIndent && indent) {
              this.opcode('appendContent', indent);
              indent = '';
            }
            this.opcode('invokePartial', isDynamic, partialName, indent);
            this.opcode('append');
          },
          PartialBlockStatement: function PartialBlockStatement(partialBlock) {
            this.PartialStatement(partialBlock);
          },
          MustacheStatement: function MustacheStatement(mustache) {
            this.SubExpression(mustache);
            if (mustache.escaped && !this.options.noEscape) {
              this.opcode('appendEscaped');
            } else {
              this.opcode('append');
            }
          },
          Decorator: function Decorator(decorator) {
            this.DecoratorBlock(decorator);
          },
          ContentStatement: function ContentStatement(content) {
            if (content.value) {
              this.opcode('appendContent', content.value);
            }
          },
          CommentStatement: function CommentStatement() {},
          SubExpression: function SubExpression(sexpr) {
            transformLiteralToPath(sexpr);
            var type = this.classifySexpr(sexpr);
            if (type === 'simple') {
              this.simpleSexpr(sexpr);
            } else if (type === 'helper') {
              this.helperSexpr(sexpr);
            } else {
              this.ambiguousSexpr(sexpr);
            }
          },
          ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
            var path = sexpr.path,
                name = path.parts[0],
                isBlock = program != null || inverse != null;
            this.opcode('getContext', path.depth);
            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);
            path.strict = true;
            this.accept(path);
            this.opcode('invokeAmbiguous', name, isBlock);
          },
          simpleSexpr: function simpleSexpr(sexpr) {
            var path = sexpr.path;
            path.strict = true;
            this.accept(path);
            this.opcode('resolvePossibleLambda');
          },
          helperSexpr: function helperSexpr(sexpr, program, inverse) {
            var params = this.setupFullMustacheParams(sexpr, program, inverse),
                path = sexpr.path,
                name = path.parts[0];
            if (this.options.knownHelpers[name]) {
              this.opcode('invokeKnownHelper', params.length, name);
            } else if (this.options.knownHelpersOnly) {
              throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
            } else {
              path.strict = true;
              path.falsy = true;
              this.accept(path);
              this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
            }
          },
          PathExpression: function PathExpression(path) {
            this.addDepth(path.depth);
            this.opcode('getContext', path.depth);
            var name = path.parts[0],
                scoped = _ast2['default'].helpers.scopedId(path),
                blockParamId = !path.depth && !scoped && this.blockParamIndex(name);
            if (blockParamId) {
              this.opcode('lookupBlockParam', blockParamId, path.parts);
            } else if (!name) {
              this.opcode('pushContext');
            } else if (path.data) {
              this.options.data = true;
              this.opcode('lookupData', path.depth, path.parts, path.strict);
            } else {
              this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
            }
          },
          StringLiteral: function StringLiteral(string) {
            this.opcode('pushString', string.value);
          },
          NumberLiteral: function NumberLiteral(number) {
            this.opcode('pushLiteral', number.value);
          },
          BooleanLiteral: function BooleanLiteral(bool) {
            this.opcode('pushLiteral', bool.value);
          },
          UndefinedLiteral: function UndefinedLiteral() {
            this.opcode('pushLiteral', 'undefined');
          },
          NullLiteral: function NullLiteral() {
            this.opcode('pushLiteral', 'null');
          },
          Hash: function Hash(hash) {
            var pairs = hash.pairs,
                i = 0,
                l = pairs.length;
            this.opcode('pushHash');
            for (; i < l; i++) {
              this.pushParam(pairs[i].value);
            }
            while (i--) {
              this.opcode('assignToHash', pairs[i].key);
            }
            this.opcode('popHash');
          },
          opcode: function opcode(name) {
            this.opcodes.push({
              opcode: name,
              args: slice.call(arguments, 1),
              loc: this.sourceNode[0].loc
            });
          },
          addDepth: function addDepth(depth) {
            if (!depth) {
              return;
            }
            this.useDepths = true;
          },
          classifySexpr: function classifySexpr(sexpr) {
            var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);
            var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);
            var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);
            var isEligible = !isBlockParam && (isHelper || isSimple);
            if (isEligible && !isHelper) {
              var _name2 = sexpr.path.parts[0],
                  options = this.options;
              if (options.knownHelpers[_name2]) {
                isHelper = true;
              } else if (options.knownHelpersOnly) {
                isEligible = false;
              }
            }
            if (isHelper) {
              return 'helper';
            } else if (isEligible) {
              return 'ambiguous';
            } else {
              return 'simple';
            }
          },
          pushParams: function pushParams(params) {
            for (var i = 0,
                l = params.length; i < l; i++) {
              this.pushParam(params[i]);
            }
          },
          pushParam: function pushParam(val) {
            var value = val.value != null ? val.value : val.original || '';
            if (this.stringParams) {
              if (value.replace) {
                value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
              }
              if (val.depth) {
                this.addDepth(val.depth);
              }
              this.opcode('getContext', val.depth || 0);
              this.opcode('pushStringParam', value, val.type);
              if (val.type === 'SubExpression') {
                this.accept(val);
              }
            } else {
              if (this.trackIds) {
                var blockParamIndex = undefined;
                if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
                  blockParamIndex = this.blockParamIndex(val.parts[0]);
                }
                if (blockParamIndex) {
                  var blockParamChild = val.parts.slice(1).join('.');
                  this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
                } else {
                  value = val.original || value;
                  if (value.replace) {
                    value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
                  }
                  this.opcode('pushId', val.type, value);
                }
              }
              this.accept(val);
            }
          },
          setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
            var params = sexpr.params;
            this.pushParams(params);
            this.opcode('pushProgram', program);
            this.opcode('pushProgram', inverse);
            if (sexpr.hash) {
              this.accept(sexpr.hash);
            } else {
              this.opcode('emptyHash', omitEmpty);
            }
            return params;
          },
          blockParamIndex: function blockParamIndex(name) {
            for (var depth = 0,
                len = this.options.blockParams.length; depth < len; depth++) {
              var blockParams = this.options.blockParams[depth],
                  param = blockParams && _utils.indexOf(blockParams, name);
              if (blockParams && param >= 0) {
                return [depth, param];
              }
            }
          }
        };
        function precompile(input, options, env) {
          if (input == null || typeof input !== 'string' && input.type !== 'Program') {
            throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
          }
          options = options || {};
          if (!('data' in options)) {
            options.data = true;
          }
          if (options.compat) {
            options.useDepths = true;
          }
          var ast = env.parse(input, options),
              environment = new env.Compiler().compile(ast, options);
          return new env.JavaScriptCompiler().compile(environment, options);
        }
        function compile(input, options, env) {
          if (options === undefined)
            options = {};
          if (input == null || typeof input !== 'string' && input.type !== 'Program') {
            throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
          }
          if (!('data' in options)) {
            options.data = true;
          }
          if (options.compat) {
            options.useDepths = true;
          }
          var compiled = undefined;
          function compileInput() {
            var ast = env.parse(input, options),
                environment = new env.Compiler().compile(ast, options),
                templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
            return env.template(templateSpec);
          }
          function ret(context, execOptions) {
            if (!compiled) {
              compiled = compileInput();
            }
            return compiled.call(this, context, execOptions);
          }
          ret._setup = function(setupOptions) {
            if (!compiled) {
              compiled = compileInput();
            }
            return compiled._setup(setupOptions);
          };
          ret._child = function(i, data, blockParams, depths) {
            if (!compiled) {
              compiled = compileInput();
            }
            return compiled._child(i, data, blockParams, depths);
          };
          return ret;
        }
        function argEquals(a, b) {
          if (a === b) {
            return true;
          }
          if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
            for (var i = 0; i < a.length; i++) {
              if (!argEquals(a[i], b[i])) {
                return false;
              }
            }
            return true;
          }
        }
        function transformLiteralToPath(sexpr) {
          if (!sexpr.path.parts) {
            var literal = sexpr.path;
            sexpr.path = {
              type: 'PathExpression',
              data: false,
              depth: 0,
              parts: [literal.original + ''],
              original: literal.original + '',
              loc: literal.loc
            };
          }
        }
      }, function(module, exports, __webpack_require__) {
        'use strict';
        var _interopRequireDefault = __webpack_require__(1)['default'];
        exports.__esModule = true;
        var _base = __webpack_require__(4);
        var _exception = __webpack_require__(6);
        var _exception2 = _interopRequireDefault(_exception);
        var _utils = __webpack_require__(5);
        var _codeGen = __webpack_require__(29);
        var _codeGen2 = _interopRequireDefault(_codeGen);
        function Literal(value) {
          this.value = value;
        }
        function JavaScriptCompiler() {}
        JavaScriptCompiler.prototype = {
          nameLookup: function nameLookup(parent, name) {
            if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
              return [parent, '.', name];
            } else {
              return [parent, '[', JSON.stringify(name), ']'];
            }
          },
          depthedLookup: function depthedLookup(name) {
            return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
          },
          compilerInfo: function compilerInfo() {
            var revision = _base.COMPILER_REVISION,
                versions = _base.REVISION_CHANGES[revision];
            return [revision, versions];
          },
          appendToBuffer: function appendToBuffer(source, location, explicit) {
            if (!_utils.isArray(source)) {
              source = [source];
            }
            source = this.source.wrap(source, location);
            if (this.environment.isSimple) {
              return ['return ', source, ';'];
            } else if (explicit) {
              return ['buffer += ', source, ';'];
            } else {
              source.appendToBuffer = true;
              return source;
            }
          },
          initializeBuffer: function initializeBuffer() {
            return this.quotedString('');
          },
          compile: function compile(environment, options, context, asObject) {
            this.environment = environment;
            this.options = options;
            this.stringParams = this.options.stringParams;
            this.trackIds = this.options.trackIds;
            this.precompile = !asObject;
            this.name = this.environment.name;
            this.isChild = !!context;
            this.context = context || {
              decorators: [],
              programs: [],
              environments: []
            };
            this.preamble();
            this.stackSlot = 0;
            this.stackVars = [];
            this.aliases = {};
            this.registers = {list: []};
            this.hashes = [];
            this.compileStack = [];
            this.inlineStack = [];
            this.blockParams = [];
            this.compileChildren(environment, options);
            this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
            this.useBlockParams = this.useBlockParams || environment.useBlockParams;
            var opcodes = environment.opcodes,
                opcode = undefined,
                firstLoc = undefined,
                i = undefined,
                l = undefined;
            for (i = 0, l = opcodes.length; i < l; i++) {
              opcode = opcodes[i];
              this.source.currentLocation = opcode.loc;
              firstLoc = firstLoc || opcode.loc;
              this[opcode.opcode].apply(this, opcode.args);
            }
            this.source.currentLocation = firstLoc;
            this.pushSource('');
            if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
              throw new _exception2['default']('Compile completed with content left on stack');
            }
            if (!this.decorators.isEmpty()) {
              this.useDecorators = true;
              this.decorators.prepend('var decorators = container.decorators;\n');
              this.decorators.push('return fn;');
              if (asObject) {
                this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
              } else {
                this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
                this.decorators.push('}\n');
                this.decorators = this.decorators.merge();
              }
            } else {
              this.decorators = undefined;
            }
            var fn = this.createFunctionContext(asObject);
            if (!this.isChild) {
              var ret = {
                compiler: this.compilerInfo(),
                main: fn
              };
              if (this.decorators) {
                ret.main_d = this.decorators;
                ret.useDecorators = true;
              }
              var _context = this.context;
              var programs = _context.programs;
              var decorators = _context.decorators;
              for (i = 0, l = programs.length; i < l; i++) {
                if (programs[i]) {
                  ret[i] = programs[i];
                  if (decorators[i]) {
                    ret[i + '_d'] = decorators[i];
                    ret.useDecorators = true;
                  }
                }
              }
              if (this.environment.usePartial) {
                ret.usePartial = true;
              }
              if (this.options.data) {
                ret.useData = true;
              }
              if (this.useDepths) {
                ret.useDepths = true;
              }
              if (this.useBlockParams) {
                ret.useBlockParams = true;
              }
              if (this.options.compat) {
                ret.compat = true;
              }
              if (!asObject) {
                ret.compiler = JSON.stringify(ret.compiler);
                this.source.currentLocation = {start: {
                    line: 1,
                    column: 0
                  }};
                ret = this.objectLiteral(ret);
                if (options.srcName) {
                  ret = ret.toStringWithSourceMap({file: options.destName});
                  ret.map = ret.map && ret.map.toString();
                } else {
                  ret = ret.toString();
                }
              } else {
                ret.compilerOptions = this.options;
              }
              return ret;
            } else {
              return fn;
            }
          },
          preamble: function preamble() {
            this.lastContext = 0;
            this.source = new _codeGen2['default'](this.options.srcName);
            this.decorators = new _codeGen2['default'](this.options.srcName);
          },
          createFunctionContext: function createFunctionContext(asObject) {
            var varDeclarations = '';
            var locals = this.stackVars.concat(this.registers.list);
            if (locals.length > 0) {
              varDeclarations += ', ' + locals.join(', ');
            }
            var aliasCount = 0;
            for (var alias in this.aliases) {
              var node = this.aliases[alias];
              if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
                varDeclarations += ', alias' + ++aliasCount + '=' + alias;
                node.children[0] = 'alias' + aliasCount;
              }
            }
            var params = ['container', 'depth0', 'helpers', 'partials', 'data'];
            if (this.useBlockParams || this.useDepths) {
              params.push('blockParams');
            }
            if (this.useDepths) {
              params.push('depths');
            }
            var source = this.mergeSource(varDeclarations);
            if (asObject) {
              params.push(source);
              return Function.apply(this, params);
            } else {
              return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
            }
          },
          mergeSource: function mergeSource(varDeclarations) {
            var isSimple = this.environment.isSimple,
                appendOnly = !this.forceBuffer,
                appendFirst = undefined,
                sourceSeen = undefined,
                bufferStart = undefined,
                bufferEnd = undefined;
            this.source.each(function(line) {
              if (line.appendToBuffer) {
                if (bufferStart) {
                  line.prepend('  + ');
                } else {
                  bufferStart = line;
                }
                bufferEnd = line;
              } else {
                if (bufferStart) {
                  if (!sourceSeen) {
                    appendFirst = true;
                  } else {
                    bufferStart.prepend('buffer += ');
                  }
                  bufferEnd.add(';');
                  bufferStart = bufferEnd = undefined;
                }
                sourceSeen = true;
                if (!isSimple) {
                  appendOnly = false;
                }
              }
            });
            if (appendOnly) {
              if (bufferStart) {
                bufferStart.prepend('return ');
                bufferEnd.add(';');
              } else if (!sourceSeen) {
                this.source.push('return "";');
              }
            } else {
              varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());
              if (bufferStart) {
                bufferStart.prepend('return buffer + ');
                bufferEnd.add(';');
              } else {
                this.source.push('return buffer;');
              }
            }
            if (varDeclarations) {
              this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
            }
            return this.source.merge();
          },
          blockValue: function blockValue(name) {
            var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
                params = [this.contextName(0)];
            this.setupHelperArgs(name, 0, params);
            var blockName = this.popStack();
            params.splice(1, 0, blockName);
            this.push(this.source.functionCall(blockHelperMissing, 'call', params));
          },
          ambiguousBlockValue: function ambiguousBlockValue() {
            var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
                params = [this.contextName(0)];
            this.setupHelperArgs('', 0, params, true);
            this.flushInline();
            var current = this.topStack();
            params.splice(1, 0, current);
            this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
          },
          appendContent: function appendContent(content) {
            if (this.pendingContent) {
              content = this.pendingContent + content;
            } else {
              this.pendingLocation = this.source.currentLocation;
            }
            this.pendingContent = content;
          },
          append: function append() {
            if (this.isInline()) {
              this.replaceStack(function(current) {
                return [' != null ? ', current, ' : ""'];
              });
              this.pushSource(this.appendToBuffer(this.popStack()));
            } else {
              var local = this.popStack();
              this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
              if (this.environment.isSimple) {
                this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
              }
            }
          },
          appendEscaped: function appendEscaped() {
            this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
          },
          getContext: function getContext(depth) {
            this.lastContext = depth;
          },
          pushContext: function pushContext() {
            this.pushStackLiteral(this.contextName(this.lastContext));
          },
          lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
            var i = 0;
            if (!scoped && this.options.compat && !this.lastContext) {
              this.push(this.depthedLookup(parts[i++]));
            } else {
              this.pushContext();
            }
            this.resolvePath('context', parts, i, falsy, strict);
          },
          lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
            this.useBlockParams = true;
            this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
            this.resolvePath('context', parts, 1);
          },
          lookupData: function lookupData(depth, parts, strict) {
            if (!depth) {
              this.pushStackLiteral('data');
            } else {
              this.pushStackLiteral('container.data(data, ' + depth + ')');
            }
            this.resolvePath('data', parts, 0, true, strict);
          },
          resolvePath: function resolvePath(type, parts, i, falsy, strict) {
            var _this = this;
            if (this.options.strict || this.options.assumeObjects) {
              this.push(strictLookup(this.options.strict && strict, this, parts, type));
              return;
            }
            var len = parts.length;
            for (; i < len; i++) {
              this.replaceStack(function(current) {
                var lookup = _this.nameLookup(current, parts[i], type);
                if (!falsy) {
                  return [' != null ? ', lookup, ' : ', current];
                } else {
                  return [' && ', lookup];
                }
              });
            }
          },
          resolvePossibleLambda: function resolvePossibleLambda() {
            this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
          },
          pushStringParam: function pushStringParam(string, type) {
            this.pushContext();
            this.pushString(type);
            if (type !== 'SubExpression') {
              if (typeof string === 'string') {
                this.pushString(string);
              } else {
                this.pushStackLiteral(string);
              }
            }
          },
          emptyHash: function emptyHash(omitEmpty) {
            if (this.trackIds) {
              this.push('{}');
            }
            if (this.stringParams) {
              this.push('{}');
              this.push('{}');
            }
            this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
          },
          pushHash: function pushHash() {
            if (this.hash) {
              this.hashes.push(this.hash);
            }
            this.hash = {
              values: [],
              types: [],
              contexts: [],
              ids: []
            };
          },
          popHash: function popHash() {
            var hash = this.hash;
            this.hash = this.hashes.pop();
            if (this.trackIds) {
              this.push(this.objectLiteral(hash.ids));
            }
            if (this.stringParams) {
              this.push(this.objectLiteral(hash.contexts));
              this.push(this.objectLiteral(hash.types));
            }
            this.push(this.objectLiteral(hash.values));
          },
          pushString: function pushString(string) {
            this.pushStackLiteral(this.quotedString(string));
          },
          pushLiteral: function pushLiteral(value) {
            this.pushStackLiteral(value);
          },
          pushProgram: function pushProgram(guid) {
            if (guid != null) {
              this.pushStackLiteral(this.programExpression(guid));
            } else {
              this.pushStackLiteral(null);
            }
          },
          registerDecorator: function registerDecorator(paramSize, name) {
            var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
                options = this.setupHelperArgs(name, paramSize);
            this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
          },
          invokeHelper: function invokeHelper(paramSize, name, isSimple) {
            var nonHelper = this.popStack(),
                helper = this.setupHelper(paramSize, name),
                simple = isSimple ? [helper.name, ' || '] : '';
            var lookup = ['('].concat(simple, nonHelper);
            if (!this.options.strict) {
              lookup.push(' || ', this.aliasable('helpers.helperMissing'));
            }
            lookup.push(')');
            this.push(this.source.functionCall(lookup, 'call', helper.callParams));
          },
          invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
            var helper = this.setupHelper(paramSize, name);
            this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
          },
          invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
            this.useRegister('helper');
            var nonHelper = this.popStack();
            this.emptyHash();
            var helper = this.setupHelper(0, name, helperCall);
            var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');
            var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
            if (!this.options.strict) {
              lookup[0] = '(helper = ';
              lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
            }
            this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
          },
          invokePartial: function invokePartial(isDynamic, name, indent) {
            var params = [],
                options = this.setupParams(name, 1, params);
            if (isDynamic) {
              name = this.popStack();
              delete options.name;
            }
            if (indent) {
              options.indent = JSON.stringify(indent);
            }
            options.helpers = 'helpers';
            options.partials = 'partials';
            options.decorators = 'container.decorators';
            if (!isDynamic) {
              params.unshift(this.nameLookup('partials', name, 'partial'));
            } else {
              params.unshift(name);
            }
            if (this.options.compat) {
              options.depths = 'depths';
            }
            options = this.objectLiteral(options);
            params.push(options);
            this.push(this.source.functionCall('container.invokePartial', '', params));
          },
          assignToHash: function assignToHash(key) {
            var value = this.popStack(),
                context = undefined,
                type = undefined,
                id = undefined;
            if (this.trackIds) {
              id = this.popStack();
            }
            if (this.stringParams) {
              type = this.popStack();
              context = this.popStack();
            }
            var hash = this.hash;
            if (context) {
              hash.contexts[key] = context;
            }
            if (type) {
              hash.types[key] = type;
            }
            if (id) {
              hash.ids[key] = id;
            }
            hash.values[key] = value;
          },
          pushId: function pushId(type, name, child) {
            if (type === 'BlockParam') {
              this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
            } else if (type === 'PathExpression') {
              this.pushString(name);
            } else if (type === 'SubExpression') {
              this.pushStackLiteral('true');
            } else {
              this.pushStackLiteral('null');
            }
          },
          compiler: JavaScriptCompiler,
          compileChildren: function compileChildren(environment, options) {
            var children = environment.children,
                child = undefined,
                compiler = undefined;
            for (var i = 0,
                l = children.length; i < l; i++) {
              child = children[i];
              compiler = new this.compiler();
              var index = this.matchExistingProgram(child);
              if (index == null) {
                this.context.programs.push('');
                index = this.context.programs.length;
                child.index = index;
                child.name = 'program' + index;
                this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
                this.context.decorators[index] = compiler.decorators;
                this.context.environments[index] = child;
                this.useDepths = this.useDepths || compiler.useDepths;
                this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
              } else {
                child.index = index;
                child.name = 'program' + index;
                this.useDepths = this.useDepths || child.useDepths;
                this.useBlockParams = this.useBlockParams || child.useBlockParams;
              }
            }
          },
          matchExistingProgram: function matchExistingProgram(child) {
            for (var i = 0,
                len = this.context.environments.length; i < len; i++) {
              var environment = this.context.environments[i];
              if (environment && environment.equals(child)) {
                return i;
              }
            }
          },
          programExpression: function programExpression(guid) {
            var child = this.environment.children[guid],
                programParams = [child.index, 'data', child.blockParams];
            if (this.useBlockParams || this.useDepths) {
              programParams.push('blockParams');
            }
            if (this.useDepths) {
              programParams.push('depths');
            }
            return 'container.program(' + programParams.join(', ') + ')';
          },
          useRegister: function useRegister(name) {
            if (!this.registers[name]) {
              this.registers[name] = true;
              this.registers.list.push(name);
            }
          },
          push: function push(expr) {
            if (!(expr instanceof Literal)) {
              expr = this.source.wrap(expr);
            }
            this.inlineStack.push(expr);
            return expr;
          },
          pushStackLiteral: function pushStackLiteral(item) {
            this.push(new Literal(item));
          },
          pushSource: function pushSource(source) {
            if (this.pendingContent) {
              this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
              this.pendingContent = undefined;
            }
            if (source) {
              this.source.push(source);
            }
          },
          replaceStack: function replaceStack(callback) {
            var prefix = ['('],
                stack = undefined,
                createdStack = undefined,
                usedLiteral = undefined;
            if (!this.isInline()) {
              throw new _exception2['default']('replaceStack on non-inline');
            }
            var top = this.popStack(true);
            if (top instanceof Literal) {
              stack = [top.value];
              prefix = ['(', stack];
              usedLiteral = true;
            } else {
              createdStack = true;
              var _name = this.incrStack();
              prefix = ['((', this.push(_name), ' = ', top, ')'];
              stack = this.topStack();
            }
            var item = callback.call(this, stack);
            if (!usedLiteral) {
              this.popStack();
            }
            if (createdStack) {
              this.stackSlot--;
            }
            this.push(prefix.concat(item, ')'));
          },
          incrStack: function incrStack() {
            this.stackSlot++;
            if (this.stackSlot > this.stackVars.length) {
              this.stackVars.push('stack' + this.stackSlot);
            }
            return this.topStackName();
          },
          topStackName: function topStackName() {
            return 'stack' + this.stackSlot;
          },
          flushInline: function flushInline() {
            var inlineStack = this.inlineStack;
            this.inlineStack = [];
            for (var i = 0,
                len = inlineStack.length; i < len; i++) {
              var entry = inlineStack[i];
              if (entry instanceof Literal) {
                this.compileStack.push(entry);
              } else {
                var stack = this.incrStack();
                this.pushSource([stack, ' = ', entry, ';']);
                this.compileStack.push(stack);
              }
            }
          },
          isInline: function isInline() {
            return this.inlineStack.length;
          },
          popStack: function popStack(wrapped) {
            var inline = this.isInline(),
                item = (inline ? this.inlineStack : this.compileStack).pop();
            if (!wrapped && item instanceof Literal) {
              return item.value;
            } else {
              if (!inline) {
                if (!this.stackSlot) {
                  throw new _exception2['default']('Invalid stack pop');
                }
                this.stackSlot--;
              }
              return item;
            }
          },
          topStack: function topStack() {
            var stack = this.isInline() ? this.inlineStack : this.compileStack,
                item = stack[stack.length - 1];
            if (item instanceof Literal) {
              return item.value;
            } else {
              return item;
            }
          },
          contextName: function contextName(context) {
            if (this.useDepths && context) {
              return 'depths[' + context + ']';
            } else {
              return 'depth' + context;
            }
          },
          quotedString: function quotedString(str) {
            return this.source.quotedString(str);
          },
          objectLiteral: function objectLiteral(obj) {
            return this.source.objectLiteral(obj);
          },
          aliasable: function aliasable(name) {
            var ret = this.aliases[name];
            if (ret) {
              ret.referenceCount++;
              return ret;
            }
            ret = this.aliases[name] = this.source.wrap(name);
            ret.aliasable = true;
            ret.referenceCount = 1;
            return ret;
          },
          setupHelper: function setupHelper(paramSize, name, blockHelper) {
            var params = [],
                paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
            var foundHelper = this.nameLookup('helpers', name, 'helper'),
                callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : {}');
            return {
              params: params,
              paramsInit: paramsInit,
              name: foundHelper,
              callParams: [callContext].concat(params)
            };
          },
          setupParams: function setupParams(helper, paramSize, params) {
            var options = {},
                contexts = [],
                types = [],
                ids = [],
                objectArgs = !params,
                param = undefined;
            if (objectArgs) {
              params = [];
            }
            options.name = this.quotedString(helper);
            options.hash = this.popStack();
            if (this.trackIds) {
              options.hashIds = this.popStack();
            }
            if (this.stringParams) {
              options.hashTypes = this.popStack();
              options.hashContexts = this.popStack();
            }
            var inverse = this.popStack(),
                program = this.popStack();
            if (program || inverse) {
              options.fn = program || 'container.noop';
              options.inverse = inverse || 'container.noop';
            }
            var i = paramSize;
            while (i--) {
              param = this.popStack();
              params[i] = param;
              if (this.trackIds) {
                ids[i] = this.popStack();
              }
              if (this.stringParams) {
                types[i] = this.popStack();
                contexts[i] = this.popStack();
              }
            }
            if (objectArgs) {
              options.args = this.source.generateArray(params);
            }
            if (this.trackIds) {
              options.ids = this.source.generateArray(ids);
            }
            if (this.stringParams) {
              options.types = this.source.generateArray(types);
              options.contexts = this.source.generateArray(contexts);
            }
            if (this.options.data) {
              options.data = 'data';
            }
            if (this.useBlockParams) {
              options.blockParams = 'blockParams';
            }
            return options;
          },
          setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
            var options = this.setupParams(helper, paramSize, params);
            options = this.objectLiteral(options);
            if (useRegister) {
              this.useRegister('options');
              params.push('options');
              return ['options=', options];
            } else if (params) {
              params.push(options);
              return '';
            } else {
              return options;
            }
          }
        };
        (function() {
          var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');
          var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};
          for (var i = 0,
              l = reservedWords.length; i < l; i++) {
            compilerWords[reservedWords[i]] = true;
          }
        })();
        JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
          return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
        };
        function strictLookup(requireTerminal, compiler, parts, type) {
          var stack = compiler.popStack(),
              i = 0,
              len = parts.length;
          if (requireTerminal) {
            len--;
          }
          for (; i < len; i++) {
            stack = compiler.nameLookup(stack, parts[i], type);
          }
          if (requireTerminal) {
            return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
          } else {
            return stack;
          }
        }
        exports['default'] = JavaScriptCompiler;
        module.exports = exports['default'];
      }, function(module, exports, __webpack_require__) {
        'use strict';
        exports.__esModule = true;
        var _utils = __webpack_require__(5);
        var SourceNode = undefined;
        try {
          if (false) {
            var SourceMap = require('source-map');
            SourceNode = SourceMap.SourceNode;
          }
        } catch (err) {}
        if (!SourceNode) {
          SourceNode = function(line, column, srcFile, chunks) {
            this.src = '';
            if (chunks) {
              this.add(chunks);
            }
          };
          SourceNode.prototype = {
            add: function add(chunks) {
              if (_utils.isArray(chunks)) {
                chunks = chunks.join('');
              }
              this.src += chunks;
            },
            prepend: function prepend(chunks) {
              if (_utils.isArray(chunks)) {
                chunks = chunks.join('');
              }
              this.src = chunks + this.src;
            },
            toStringWithSourceMap: function toStringWithSourceMap() {
              return {code: this.toString()};
            },
            toString: function toString() {
              return this.src;
            }
          };
        }
        function castChunk(chunk, codeGen, loc) {
          if (_utils.isArray(chunk)) {
            var ret = [];
            for (var i = 0,
                len = chunk.length; i < len; i++) {
              ret.push(codeGen.wrap(chunk[i], loc));
            }
            return ret;
          } else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
            return chunk + '';
          }
          return chunk;
        }
        function CodeGen(srcFile) {
          this.srcFile = srcFile;
          this.source = [];
        }
        CodeGen.prototype = {
          isEmpty: function isEmpty() {
            return !this.source.length;
          },
          prepend: function prepend(source, loc) {
            this.source.unshift(this.wrap(source, loc));
          },
          push: function push(source, loc) {
            this.source.push(this.wrap(source, loc));
          },
          merge: function merge() {
            var source = this.empty();
            this.each(function(line) {
              source.add(['  ', line, '\n']);
            });
            return source;
          },
          each: function each(iter) {
            for (var i = 0,
                len = this.source.length; i < len; i++) {
              iter(this.source[i]);
            }
          },
          empty: function empty() {
            var loc = this.currentLocation || {start: {}};
            return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
          },
          wrap: function wrap(chunk) {
            var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || {start: {}} : arguments[1];
            if (chunk instanceof SourceNode) {
              return chunk;
            }
            chunk = castChunk(chunk, this, loc);
            return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
          },
          functionCall: function functionCall(fn, type, params) {
            params = this.generateList(params);
            return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
          },
          quotedString: function quotedString(str) {
            return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029') + '"';
          },
          objectLiteral: function objectLiteral(obj) {
            var pairs = [];
            for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                var value = castChunk(obj[key], this);
                if (value !== 'undefined') {
                  pairs.push([this.quotedString(key), ':', value]);
                }
              }
            }
            var ret = this.generateList(pairs);
            ret.prepend('{');
            ret.add('}');
            return ret;
          },
          generateList: function generateList(entries) {
            var ret = this.empty();
            for (var i = 0,
                len = entries.length; i < len; i++) {
              if (i) {
                ret.add(',');
              }
              ret.add(castChunk(entries[i], this));
            }
            return ret;
          },
          generateArray: function generateArray(entries) {
            var ret = this.generateList(entries);
            ret.prepend('[');
            ret.add(']');
            return ret;
          }
        };
        exports['default'] = CodeGen;
        module.exports = exports['default'];
      }]);
    });
    ;
  })();
  return _retrieveGlobal();
});

$__System.registerDynamic("5", ["4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  module.exports = $__require('4');
  return module.exports;
});

$__System.registerDynamic("6", [], false, function($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);
  (function() {
    (function(window, document) {
      "use strict";
      window.getHashMap = () => {
        let map = new Map();
        if (!document.location.hash)
          return map;
        let hasharray = document.location.hash.substring(1).split(/\&/);
        for (let y = 0; y < hasharray.length; y++) {
          let z = hasharray[y].split(/\=/);
          if (z && z.length == 2)
            map.set(z[0], decodeURIComponent(z[1]));
        }
        return map;
      };
      window.hashMapToURL = (map) => {
        let pairs = [];
        map.forEach((value, key) => {
          pairs.push(key + '=' + encodeURIComponent(value));
        });
        return '#' + pairs.join('&');
      };
      window.getHash = function(name) {
        var y,
            z,
            hasharray;
        if (!document.location.hash) {
          return false;
        }
        hasharray = document.location.hash.substring(1).split(/\&/);
        for (y = 0; y < hasharray.length; y++) {
          z = hasharray[y].split(/\=/);
          if (z[0] === name)
            return decodeURIComponent(z[1]);
        }
      };
      window.setHash = function(name, value) {
        var hasharray,
            y,
            z;
        if (getHash(name)) {
          hasharray = document.location.hash.substring(1).split(/\&/);
          for (y = 0; y < hasharray.length; y++) {
            z = hasharray[y].split(/\=/);
            if ((z[0] === name) && !(value === '')) {
              z[1] = encodeURIComponent(value);
              hasharray[y] = z.join('=');
            }
          }
          document.location.hash = '#' + hasharray.join('&');
        } else {
          document.location.hash = document.location.hash ? document.location.hash + '&' : '#';
          document.location.hash += name + '=' + value;
        }
      };
    })(window, document);
  })();
  return _retrieveGlobal();
});

$__System.register("7", ["6"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var hash_1;
    return {
        setters:[
            function (hash_1_1) {
                hash_1 = hash_1_1;
            }],
        execute: function() {
            exports_1("default",(function () {
                "use strict";
                var pages = new Map();
                var pub = {};
                pub.add = function (page) {
                    pages.set(page.id, page);
                    return page;
                };
                pub.getById = function (id) {
                    return pages.get(id);
                };
                pub.toString = function () { return Array.from(pages.entries()).map(function (_a) {
                    var key = _a[0], value = _a[1];
                    return '' + key + ':' + value;
                }).join("\n"); };
                var backStack = [];
                var forwardStack = [];
                var previousPageUrl = undefined;
                //render the current page
                pub.renderPage = function () {
                    var _this = this;
                    var state = hash_1.getHashMap();
                    var url = hashMapToURL(state);
                    //find the page to render
                    var title = (state.get('page') || '').replace('%20', ' '); //some browsers replace spaces with %20
                    var page = pub.getById(title) || pub.getById(advancedSettings.pages.default);
                    if (!page)
                        return Promise.reject();
                    var scroll = undefined;
                    return Promise.resolve()
                        .then(function () {
                        if (previousPageUrl === undefined) {
                            previousPageUrl = '' + url;
                            scroll = 0;
                            return;
                        }
                        //store the scroll position of the previous page
                        var previousPageScroll = window.scrollY; // || document.documentElement.scrollTop || document.body.scrollTop || 0
                        if (backStack.length > 0 && backStack[backStack.length - 1].url === url) {
                            scroll = backStack.pop().scroll;
                            forwardStack.push({ url: previousPageUrl, scroll: previousPageScroll });
                        }
                        else if (forwardStack.length > 0 && forwardStack[forwardStack.length - 1].url === url) {
                            scroll = forwardStack.pop().scroll;
                            backStack.push({ url: previousPageUrl, scroll: previousPageScroll });
                        }
                        else {
                            forwardStack = [];
                            scroll = 0;
                            backStack.push({ url: previousPageUrl, scroll: previousPageScroll });
                        }
                        previousPageUrl = '' + url;
                    })
                        .then(function () { return page.render(state, _this); })
                        .then(function () {
                        window.scroll(0, scroll || 0);
                    });
                };
                //render the page every time the hash changes
                window.addEventListener("hashchange", function () {
                    pub.renderPage();
                }, false);
                return pub;
            })());
        }
    }
});

$__System.register("8", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Actors',
                'view': 'list',
                'groupby': 'alpha',
                'icon': function () { return 'img/icons/default/DefaultActor.png'; },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', state.get('media')]]); },
                'data': function (state) {
                    //higher order map functions (for use in promise api .then() calls)
                    var map_ = function (func) { return function (array) { return Array.prototype.map.call(array, func); }; };
                    var flatMap_ = function (func) { return function (array) { return Array.prototype.concat.apply([], Array.prototype.map.call(array, func)); }; };
                    var flatten = function (array) { return Array.prototype.concat.apply([], array); };
                    var mediaTypes = {
                        'TV Shows': {
                            name: 'TV Shows',
                            page: 'TV Shows',
                            resultProperty: 'tvshows',
                            method: 'VideoLibrary.GetTVShows'
                        },
                        'Movies': {
                            name: 'Movies',
                            page: 'Movies',
                            resultProperty: 'movies',
                            method: 'VideoLibrary.GetMovies'
                        }
                    };
                    var mediaType = mediaTypes[state.get('media')];
                    var m = mediaType ? [mediaType] :
                        Object.keys(mediaTypes).map(function (key) { return mediaTypes[key]; }); //mediaTypes.toArray()
                    return Promise.all(m.map(function (media) {
                        return xbmc.get({
                            method: media.method,
                            params: {
                                'properties': ['cast']
                            },
                            cache: true
                        })
                            .then(function (result) { return result[media.resultProperty] || []; })
                            .then(flatMap_(function (mediaInfo) { return mediaInfo.cast; }))
                            .then(map_(function (actor) { return ({
                            label: actor.name,
                            alpha: actor.name[0].toUpperCase(),
                            link: '#page=' + media.page + '&actor=' + encodeURIComponent(actor.name),
                            thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png'
                        }); }));
                    }))
                        .then(flatten)
                        .then(function (actors) { return ({
                        pageName: !(mediaType && mediaType.name) ? 'Actors' :
                            mediaType.name + ' by Actor',
                        items: actors
                    }); });
                }
            })));
        }
    }
});

$__System.register("a", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Addon',
                'view': 'list',
                'icon': function (state) { return 'img/icons/home/addons.png'; },
                'parentState': function (state) { return new Map([['page', 'Home']]); },
                'data': function (state) {
                    var addonid = state.get('addonid');
                    return xbmc.get({
                        'method': 'Addons.GetAddonDetails',
                        'params': {
                            'properties': ["name", "version", "summary", "description", "author", "thumbnail", "broken", "enabled"],
                            'addonid': addonid
                        },
                        'cache': false
                    })
                        .then(function (result) { return result.addon || {}; })
                        .then(function (addon) { return ({
                        'thumbnail': addon.thumbnail ? xbmc.vfs2uri(addon.thumbnail) : 'img/icons/default/DefaultAddon.png',
                        'title': addon.name + ' v' + addon.version,
                        'subtitle': addon.summary,
                        'author': addon.author,
                        'description': addon.description,
                        'actions': [
                            addon.enabled && {
                                'label': 'Run',
                                'link': "javascript:( () => { xbmc.sendMessage('Addons.ExecuteAddon', { 'addonid': '" + addonid + "' }) } )()"
                            },
                            {
                                'label': addon.enabled ? 'Disable' : 'Enable',
                                'link': "javascript:( () => { xbmc.sendMessage('Addons.SetAddonEnabled', { 'addonid': '" + addonid + "', 'enabled': 'toggle' }); pages.renderPage() } )()"
                            }
                        ]
                    }); });
                }
            })));
        }
    }
});

$__System.register("b", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Addons',
                'name': 'Add-ons',
                'view': 'list',
                'groupby': 'type',
                'icon': function (state) { return 'img/icons/home/addons.png'; },
                'parentState': function (state) { return new Map([['page', 'Home']]); },
                'data': function (state) {
                    return xbmc.get({
                        method: 'Addons.GetAddons',
                        params: {
                            'properties': ['name', 'version', 'summary', 'thumbnail', 'enabled']
                        },
                        cache: true
                    })
                        .then(function (result) { return ({
                        items: (result.addons || []).map(function (addon) { return ({
                            label: addon.name,
                            details: ['v' + addon.version, addon.enabled ? 'enabled' : 'disabled'],
                            thumbnail: addon.thumbnail ? xbmc.vfs2uri(addon.thumbnail) : 'img/icons/default/DefaultAddon.png',
                            link: '#page=Addon&addonid=' + addon.addonid,
                            type: addon.type
                        }); })
                    }); });
                }
            })));
        }
    }
});

$__System.register("c", ["9", "d"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Album',
                'view': 'list',
                'parent': 'Music',
                'icon': function (state) { return 'img/icons/default/DefaultMusicAlbums.png'; },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', 'Music']]); },
                'data': function (state) {
                    var albumid = +state.get('albumid');
                    var getAlbumDetails = xbmc.get({
                        'method': 'AudioLibrary.GetAlbumDetails',
                        'params': {
                            'properties': ["title", "description", "artist", "genre", "theme", "mood", "style", "type", "albumlabel", "year",
                                "fanart", "thumbnail", "genreid", "artistid", "displayartist"],
                            'albumid': albumid
                        },
                        cache: true
                    })
                        .then(function (result) { return result.albumdetails; })
                        .then(function (albumdetails) {
                        var page = {
                            title: albumdetails.displayartist || albumdetails.artist.join(', ') || '',
                            subtitle: (albumdetails.label || '') + (albumdetails.year ? ' (' + albumdetails.year + ')' : ''),
                            thumbnail: albumdetails.thumbnail && xbmc.vfs2uri(albumdetails.thumbnail),
                            fanart: xbmc.vfs2uri(albumdetails.fanart),
                            details: [
                                { name: 'Genre', value: albumdetails.genre },
                                { name: 'Description', value: albumdetails.description },
                                { name: 'Theme', value: albumdetails.theme },
                                { name: 'Mood', value: albumdetails.mood },
                                { name: 'Style', value: albumdetails.style },
                                { name: 'Type', value: albumdetails.type },
                                { name: 'Album Label', value: albumdetails.albumlabel }
                            ],
                            actions: [
                                {
                                    label: 'Play',
                                    thumbnail: 'img/buttons/play.png',
                                    link: "javascript:(() => { xbmc.Play({ 'albumid': " + albumid + " }, 0) })()"
                                },
                                {
                                    label: 'Add to playlist',
                                    thumbnail: 'img/buttons/add.png',
                                    link: "javascript:(() => { xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'albumid': " + albumid + " } }) })()"
                                }
                            ]
                        };
                        if (albumdetails.thumbnail)
                            page.thumbnail = xbmc.vfs2uri(albumdetails.thumbnail);
                        return page;
                    });
                    var getSongs = xbmc.get({
                        'method': 'AudioLibrary.GetSongs',
                        'params': {
                            'properties': ['file', 'title', 'track', 'duration'],
                            'filter': { 'albumid': albumid }
                        },
                        cache: true
                    })
                        .then(function (result) { return result.songs.map(function (song) { return ({
                        thumbnail: 'img/icons/default/DefaultAudio.png',
                        label: song.label,
                        number: song.track,
                        details: util_1.seconds2shortstring(song.duration),
                        actions: [
                            { label: '▶', link: "javascript: xbmc.Play({ 'albumid': " + albumid + " }, 0, " + (song.track - 1) + ")" }
                        ]
                    }); }); });
                    return Promise.all([getAlbumDetails, getSongs]) //wait for the above to finish
                        .then(function (_a) {
                        var page = _a[0], items = _a[1];
                        page.items = items;
                        return page;
                    });
                }
            })));
        }
    }
});

$__System.register("e", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Albums',
                'view': 'list',
                'groupby': 'title',
                'icon': function (state) { return 'img/icons/default/DefaultMusicAlbums.png'; },
                'icon': function (state) {
                    return state.get('group') === 'genre' || state.get('genre') ? 'img/icons/default/DefaultMusicGenres.png' :
                        state.get('group') === 'year' || state.get('year') ? 'img/icons/default/DefaultYear.png' :
                            'img/icons/default/DefaultMusicAlbums.png';
                },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', 'Music']]); },
                'data': function (state) {
                    var filter = xbmc.makeFilter([
                        { name: 'Genre', key: 'genre', type: String },
                        { name: 'Artist', key: 'artist', type: String }
                    ]);
                    var group = state.get('group') || this.groupby;
                    return xbmc.get({
                        method: 'AudioLibrary.GetAlbums',
                        params: {
                            'properties': ['title', 'artist', 'year', 'thumbnail'],
                            'filter': (filter || {}).filter
                        },
                        cache: true
                    })
                        .then(function (result) { return ({
                        pageName: 'Albums' + (filter ? ' by ' + filter.name :
                            group ? ' by ' + group :
                                ''),
                        title: filter ? '' + filter.value : undefined,
                        items: (result.albums || []).map(function (album, i) { return ({
                            title: album.label[0].toUpperCase(),
                            label: album.label,
                            details: album.artist,
                            year: album.year,
                            link: '#page=Album&albumid=' + album.albumid,
                            thumbnail: album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/icons/default/DefaultAlbumCover.png',
                            actions: [
                                { label: '▶', link: "javascript: xbmc.Play({ 'albumid': " + album.albumid + " }, 0)" }
                            ]
                        }); })
                    }); });
                }
            })));
        }
    }
});

$__System.register("f", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Artist',
                'view': 'list',
                'groupby': 'year',
                'icon': function (state) { return 'img/icons/default/DefaultMusicAlbums.png'; },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', 'Music']]); },
                'data': function (state) {
                    var artistid = +state.get('artistid');
                    var getArtistDetails = xbmc.get({
                        'method': 'AudioLibrary.GetArtistDetails',
                        'params': {
                            'properties': ["instrument", "style", "mood", "born", "formed", "description", "genre",
                                "died", "disbanded", "yearsactive", "fanart", "thumbnail"],
                            'artistid': artistid
                        },
                        cache: true
                    })
                        .then(function (result) { return result.artistdetails || {}; })
                        .then(function (x) { return ({
                        title: x.label || 'Artist ' + x.artistid,
                        thumbnail: x.thumbnail ? xbmc.vfs2uri(x.thumbnail) : undefined,
                        details: [
                            { 'name': 'Instrument', 'value': x.instrument },
                            { 'name': 'Style', 'value': x.style },
                            { 'name': 'Mood', 'value': x.mood },
                            { 'name': 'Born', 'value': x.born },
                            { 'name': 'Formed', 'value': x.formed },
                            { 'name': 'Description', 'value': x.description },
                            { 'name': 'Genre', 'value': x.genre },
                            { 'name': 'Died', 'value': x.died },
                            { 'name': 'Disbanded', 'value': x.disbanded },
                            { 'name': 'Years Active', 'value': x.yearsactive }
                        ],
                        actions: [
                            {
                                label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: "javascript:(() => { xbmc.Play({ 'artistid': " + x.artistid + " }, 0) })()"
                            },
                            {
                                label: 'Add to playlist',
                                thumbnail: 'img/buttons/add.png',
                                link: "javascript:(() => { xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'artistid': " + x.artistid + " } }) })()"
                            }
                        ]
                    }); });
                    var getAlbums = xbmc.get({
                        'method': 'AudioLibrary.GetAlbums',
                        'params': {
                            'properties': ['title', 'artist', 'year', 'thumbnail'],
                            'filter': { 'artistid': artistid }
                        },
                        'cache': true
                    })
                        .then(function (result) { return (result.albums || []).map(function (album) { return ({
                        label: album.label,
                        link: '#page=Album&albumid=' + album.albumid + '&artistid=' + artistid,
                        thumbnail: album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/icons/default/DefaultAudio.png',
                        thumbnailWidth: '50px',
                        year: album.year,
                        actions: [
                            { label: '▶', link: "javascript: xbmc.Play({ 'albumid': " + album.albumid + " }, 0)" }
                        ]
                    }); }); });
                    return Promise.all([getArtistDetails, getAlbums]) //wait for the above to finish
                        .then(function (_a) {
                        var page = _a[0], items = _a[1];
                        page.items = items;
                        return page;
                    });
                }
            })));
        }
    }
});

$__System.register("10", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Artists',
                'view': 'list',
                'groupby': 'alpha',
                'icon': function () { return 'img/icons/default/DefaultMusicArtists.png'; },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', 'Music']]); },
                'data': function (state) {
                    var filter = xbmc.makeFilter([
                        { name: 'Genre', key: 'genre', type: String }
                    ]);
                    var group = state.get('group') || this.groupby;
                    return xbmc.get({
                        'method': 'AudioLibrary.GetArtists',
                        'params': {
                            'properties': ['thumbnail'],
                            'albumartistsonly': true,
                            'filter': filter ? filter.filter : undefined
                        },
                        'cache': true
                    })
                        .then(function (result) { return ({
                        pageName: 'Artists' + (filter ? ' by ' + filter.name :
                            group ? ' by ' + group :
                                ''),
                        title: filter ? '' + filter.value : undefined,
                        items: (result.artists || []).map(function (artist) { return ({
                            alpha: artist.label[0].toUpperCase(),
                            label: artist.label,
                            link: '#page=Artist&artistid=' + artist.artistid,
                            thumbnail: artist.thumbnail ? xbmc.vfs2uri(artist.thumbnail) : 'img/icons/default/DefaultArtist.png',
                            play: function () { return xbmc.Play({ 'artistid': "+x.artistid+" }, 0); }
                        }); })
                    }); });
                }
            })));
        }
    }
});

$__System.register("11", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Broadcast',
                'view': 'list',
                'icon': function (state) { return state.get('media') === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png'; },
                'parentState': function (state) { return new Map([['page', 'Channels'], ['media', state.get('media')]]); },
                'data': function (state) {
                    var broadcastid = +state.get('broadcastid');
                    return xbmc.get({
                        method: 'PVR.GetBroadcastDetails',
                        params: {
                            "broadcastid": broadcastid //,
                        }
                    })
                        .then(function (_a) {
                        var broadcastdetails = _a.broadcastdetails;
                        return ({
                            thumbnail: broadcastdetails.thumbnail === undefined ? 'img/icons/default/DefaultAddonNone.png' : xbmc.vfs2uri(broadcastdetails.thumbnail),
                            pageName: [state.get('media'), 'Broadcast'].join(' '),
                            title: broadcastdetails.label,
                            actions: [{
                                    label: 'Play',
                                    thumbnail: 'img/buttons/play.png',
                                    link: "javascript:(() => { xbmc.Open({ 'item': { 'channelid': " + broadcastid + " } }) })()"
                                }]
                        });
                    });
                }
            })));
        }
    }
});

$__System.register("12", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Channel Group',
                'view': 'list',
                'icon': function (state) { return state.get('media') === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png'; },
                'parentState': function (state) { return new Map([['page', 'Channels'], ['media', state.get('media')]]); },
                'data': function (state) {
                    var groupid = +state.get('groupid');
                    var channelgroupdetails = xbmc.get({
                        method: 'PVR.GetChannelGroupDetails',
                        params: {
                            'channelgroupid': groupid
                        }
                    })
                        .then(function (data) { return data.channelgroupdetails || {}; });
                    var channels = xbmc.get({
                        method: 'PVR.GetChannels',
                        params: {
                            'properties': ['hidden', 'locked', 'thumbnail'],
                            'channelgroupid': groupid
                        }
                    })
                        .then(function (data) { return data.channels || {}; });
                    return Promise.all([channelgroupdetails, channels])
                        .then(function (_a) {
                        var channelgroupdetails = _a[0], channels = _a[1];
                        return ({
                            title: channelgroupdetails.label || 'Channels',
                            items: channels.map(function (channel) { return ({
                                label: channel.label,
                                hidden: channel.hidden,
                                locked: channel.locked,
                                thumbnail: channel.thumbnail === undefined ? 'img/icons/default/DefaultAddonNone.png' : xbmc.vfs2uri(channel.thumbnail),
                                link: '#page=Channel&media=' + state.get('media') + '&channelid=' + channel.channelid,
                                play: function () { return xbmc.Open({ 'item': { 'channelid': channel.channelid } }); }
                            }); })
                        });
                    });
                }
            })));
        }
    }
});

$__System.register("13", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Channel',
                'view': 'list',
                'icon': function (state) { return state.get('media') === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png'; },
                'parentState': function (state) { return new Map([['page', 'Channels'], ['media', state.get('media')]]); },
                'data': function (state) {
                    var channelid = +state.get('channelid');
                    return xbmc.get({
                        method: 'PVR.GetChannelDetails',
                        params: {
                            'properties': ["thumbnail", "channeltype", "hidden", "locked", "channel", "lastplayed"],
                            'channelid': channelid
                        }
                    })
                        .then(function (result) { return result.channeldetails || {}; })
                        .then(function (details) { return ({
                        thumbnail: details.thumbnail === undefined ? 'img/icons/default/DefaultAddonNone.png' : xbmc.vfs2uri(details.thumbnail),
                        pageName: { 'radio': 'Radio ', 'tv': 'TV ' }[details.channeltype] + 'Channel',
                        title: details.label,
                        actions: [{
                                label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: "javascript:(() => { xbmc.Open({ 'item': { 'channelid': " + channelid + " } }) })()"
                            }]
                    }); });
                }
            })));
        }
    }
});

$__System.register("14", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    var mediaToLower;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            mediaToLower = { 'Radio': 'radio', 'TV': 'tv' };
            exports_1("default",(new page_1.default({
                'id': 'Channels',
                'view': 'list',
                'icon': function (state) { return state.get('media') === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png'; },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', state.get('media')]]); },
                'data': function (state) {
                    var m = state.get('media');
                    var media = mediaToLower[m] === undefined ? ['TV', 'Radio'] : [m];
                    var nextpage = ({ 'Channel Group': 'Channel Group', 'Guide': 'Guide' })[state.get('nextpage')];
                    if (nextpage === undefined)
                        nextpage = 'Channel Group';
                    return Promise.all(media.map(function (type) {
                        return xbmc.get({
                            'method': 'PVR.GetChannelGroups',
                            'params': {
                                'channeltype': mediaToLower[type]
                            }
                        })
                            .then(function (result) { return result.channelgroups.map(function (g) {
                            g.link = '#page=' + nextpage + '&media=' + state.get('media') + '&groupid=' + g.channelgroupid;
                            return g;
                        }); })
                            .catch(function () { return []; })
                            .then(function (items) { return ({
                            label: type + ' ' + ({ 'Channel Group': 'Channels', 'Guide': 'Guide' })[nextpage],
                            items: items
                        }); });
                    }))
                        .then(function (items) { return (media.length == 1 ? {
                        pageName: items[0].label,
                        items: items[0].items
                    } : {
                        items: items
                    }); })
                        .catch(function (e) { title: e; });
                }
            })));
        }
    }
});

$__System.register("15", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Directory',
                'view': 'list',
                'parent': 'Files',
                'icon': function (state) { return 'img/icons/default/DefaultFolder.png'; },
                'parentState': function (state) {
                    var m = {
                        'video': 'Videos',
                        'music': 'Music',
                        'pictures': 'Pictures'
                    }[state.get('media')];
                    return m ?
                        new Map([['page', 'Menu'], ['media', m]]) :
                        new Map([['page', 'Home']]);
                },
                'data': function (state) {
                    var root = state.get('root');
                    var path = state.get('path');
                    var media = state.get('media') || '';
                    var sortby = state.get('sortby') || 'date';
                    var order = state.get('order');
                    var inverseOrder = {
                        'ascending': 'descending',
                        'descending': 'ascending'
                    }[order];
                    if (inverseOrder === undefined) {
                        order = 'descending';
                        inverseOrder = 'ascending';
                    }
                    var pathSplit = function (path) { return path.split(new RegExp('[\\\\/]')); };
                    return xbmc.get({
                        method: 'Files.GetDirectory',
                        params: {
                            'properties': ['duration', 'thumbnail', 'file', 'size', 'mimetype', 'lastmodified'],
                            'sort': { 'method': sortby, 'order': order },
                            'directory': root + (path || ''),
                            'media': media
                        }
                    })
                        .then(function (result) { return result.files || []; })
                        .then(function (files) { return files.map(function (file) {
                        var f = pathSplit(file.file);
                        var filename = f.pop();
                        if (!filename)
                            filename = f.pop();
                        if (file.filetype === 'directory') {
                            file.link = '#page=Directory&media=' + media + '&sortby=' + sortby + '&order=' + order + '&root=' + encodeURIComponent(root) + '&path=' + encodeURIComponent((path || '') + '/' + filename);
                            file.thumbnail = file.thumbnail ? xbmc.vfs2uri(file.thumbnail) : 'img/icons/default/DefaultFolder.png';
                        }
                        else {
                            var playlistid = file.type === 'audio' ? 0 : file.type === 'video' ? 1 : 2;
                            file.actions = [
                                { label: '▶', link: "javascript: xbmc.Open({ 'item': { 'file': '" + xbmc.vfs2uri(file.file) + "'  } })" }
                            ];
                            /*file.play = function () {
                                if (file.type === 'unknown' || !file.type) file.type = media
                                xbmc.Open({ 'item': { 'file': xbmc.vfs2uri(file.file) } })
                            }*/
                            if (media === 'pictures')
                                file.thumbnail = file.thumbnail || file.file;
                            file.thumbnail = file.thumbnail ? xbmc.vfs2uri(file.thumbnail) : 'img/icons/default/DefaultFile.png';
                        }
                        file.label = filename;
                        file.details = [];
                        if (file.size)
                            file.details.push((file.size / 1024 / 1024).toFixed(2) + 'MB');
                        if (file.mimetype)
                            file.details.push(file.mimetype);
                        if (file.lastmodified)
                            file.details.push(file.lastmodified);
                        file.thumbnailWidth = '50px';
                        return file;
                    }); })
                        .then(function (items) {
                        var splitPath = (path ? pathSplit(path) : []);
                        var p = [];
                        var pathString = '';
                        while (splitPath.length > 0) {
                            var label = splitPath.shift();
                            pathString += label + '/';
                            if (label)
                                p.push({
                                    'link': '#page=Directory&media=' + media + '&sortby=' + sortby + '&order=' + order + '&root=' + encodeURIComponent(root) + '&path=' + encodeURIComponent(pathString),
                                    'label': label
                                });
                        }
                        p.unshift({
                            'link': '#page=Directory&media=' + media + '&sortby=' + sortby + '&order=' + order + '&root=' + encodeURIComponent(root),
                            'label': '' + root,
                            'class': 'root'
                        });
                        p[p.length - 1].selected = true;
                        return {
                            items: items,
                            options: [
                                {
                                    id: 'path',
                                    label: 'Path',
                                    items: p
                                },
                                {
                                    id: 'sort',
                                    label: 'Sort By',
                                    items: [
                                        { label: 'Name', sortby: 'label', order: 'ascending' },
                                        { label: 'Size', sortby: 'size', order: 'descending' },
                                        { label: 'Date', sortby: 'date', order: 'descending' }
                                    ].map(function (item) { return ({
                                        label: item.label + (sortby === item.sortby ? { 'ascending': ' ↑', 'descending': ' ↓' }[order] : ''),
                                        'class': sortby === item.sortby ? 'selected' : undefined,
                                        link: sortby === item.sortby ?
                                            '#page=Directory&media=' + media + '&sortby=' + item.sortby + '&order=' + inverseOrder + '&root=' + encodeURIComponent(root) + '&path=' + encodeURIComponent(pathString) :
                                            '#page=Directory&media=' + media + '&sortby=' + item.sortby + '&order=' + item.order + '&root=' + encodeURIComponent(root) + '&path=' + encodeURIComponent(pathString)
                                    }); })
                                }
                            ]
                        };
                    });
                }
            })));
        }
    }
});

$__System.register("16", ["9", "d"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Episode',
                'view': 'list',
                'parent': 'TV Shows',
                'icon': function (state) { return 'img/icons/default/DefaultVideo.png'; },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', 'TV Shows']]); },
                'data': function (state) {
                    var episodeid = +state.get('episodeid');
                    return xbmc.get({
                        'method': 'VideoLibrary.GetEpisodeDetails',
                        'params': {
                            'properties': [
                                "title", "plot", "writer", "firstaired", "runtime", "director",
                                "productioncode", "season", "episode", "originaltitle", "showtitle",
                                "lastplayed", "fanart", "thumbnail", "tvshowid", "cast"
                            ],
                            'episodeid': episodeid
                        }
                    })
                        .then(function (result) { return result.episodedetails; })
                        .then(function (x) { return ({
                        title: x.title + ((x.originaltitle && x.originaltitle != x.title) ? ' [' + x.originaltitle + ']' : ''),
                        subtitle: x.showtitle,
                        thumbnail: xbmc.vfs2uri(x.thumbnail),
                        fanart: xbmc.vfs2uri(x.fanart),
                        details: [
                            (x.productioncode || x.season && x.episode) ? { 'name': 'Production Code', 'value': (x.productioncode || x.season + 'x' + x.episode) } : undefined,
                            x.lastplayed ? { 'name': 'Last Played', 'value': util_1.ymd2string(x.lastplayed) } : undefined,
                            x.firstaired ? { 'name': 'First Aired', 'value': util_1.ymd2string(x.firstaired) } : undefined,
                            x.runtime ? { 'name': 'Runtime', 'value': util_1.seconds2string(x.runtime) } : undefined,
                            { 'name': 'Plot', 'value': x.plot },
                            { 'name': 'Director', 'value': x.director },
                            { 'name': 'Writer', 'value': x.writer },
                            { 'name': 'Genre', 'value': x.genre }
                        ],
                        actions: [
                            { label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: "javascript:(() => { xbmc.Play({ 'episodeid': " + x.episodeid + " }, 1) })()"
                            },
                            { label: 'Add to Playlist',
                                thumbnail: 'img/buttons/add.png',
                                link: "javascript:(() => { xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'episodeid': " + x.episodeid + " } }) })()"
                            }
                        ],
                        items: [
                            { label: 'Cast',
                                items: x.cast.map(function (actor) { return ({
                                    label: actor.name,
                                    details: actor.role,
                                    thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
                                    link: '#page=TV Shows&actor=' + actor.name
                                }); })
                            }
                        ]
                    }); });
                }
            })));
        }
    }
});

$__System.register("17", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Files',
                'view': 'list',
                'icon': function (state) { return 'img/icons/default/DefaultFolder.png'; },
                'data': function (state) {
                    var media = state.get('media');
                    var types = [
                        { 'media': 'video', 'label': 'Video' },
                        { 'media': 'music', 'label': 'Music' },
                        { 'media': 'pictures', 'label': 'Pictures' },
                        { 'media': 'files', 'label': 'Files' }
                    ];
                    if (media)
                        types = types.filter(function (type) { return type.label == media; });
                    return Promise.all(types.map(function (type) { return xbmc.get({
                        'method': 'Files.GetSources',
                        'params': { 'media': type.media },
                        'cache': true
                    }); }))
                        .then(function (datas) { return datas.map(function (data) { return data.sources || []; }); })
                        .then(function (datas) { return datas.map(function (sources) { return sources.map(function (source) {
                        source.link = '#page=Directory&directory=' + encodeURIComponent(source.file) + '&media=' + source.media;
                        source.thumbnail = 'img/icons/default/DefaultFolder.png';
                        source.thumbnailWidth = '50px';
                        return source;
                    }); }); })
                        .then(function (datas) { return types.map(function (type, i) {
                        type.items = datas[i];
                        return type;
                    }); })
                        .then(function (items) { return ({
                        title: 'Files',
                        items: items
                    }); });
                }
            })));
        }
    }
});

$__System.register("18", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Genres',
                'view': 'list',
                'icon': function (state) { return state.get('type') === 'Albums' || state.get('type') === 'Artists' ? 'img/icons/default/DefaultMusicGenres.png' : 'img/icons/default/DefaultGenre.png'; },
                'parentState': function (state) {
                    var type = {
                        'Movies': 'Movies',
                        'TV Shows': 'TV Shows',
                        'Music Videos': 'Music Videos',
                        'Artists': 'Music',
                        'Albums': 'Music'
                    }[state.get('type')];
                    if (type)
                        return new Map([['page', 'Menu'], ['media', type]]);
                    else
                        return new Map([['page', 'Home']]);
                },
                'data': function (state) {
                    var page = {};
                    var type = state.get('type');
                    var videoType = { 'Movies': 'movie', 'TV Shows': 'tvshow', 'Music Videos': 'musicvideo' }[type];
                    var audioType = { 'Artists': 'artists', 'Albums': 'albums' }[type];
                    var getGenres = undefined;
                    if (videoType !== undefined)
                        getGenres = xbmc.get({
                            method: 'VideoLibrary.GetGenres',
                            params: { 'type': videoType }
                        });
                    if (audioType !== undefined)
                        getGenres = xbmc.get({
                            method: 'AudioLibrary.GetGenres'
                        });
                    if (getGenres === undefined)
                        throw "Page: Menu: invalid type";
                    return getGenres
                        .then(function (result) { return (result.genres || []).map(function (genre) { return ({
                        'label': genre.label,
                        'link': '#page=' + type + '&genre=' + encodeURIComponent(genre.label)
                    }); }); })
                        .then(function (items) { return ({
                        pageName: type + ' by Genre',
                        groups: items
                    }); });
                }
            })));
        }
    }
});

(function() {
var define = $__System.amdDefine;
"format amd";
;
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define("19", [], factory) : global.moment = factory();
}(this, function() {
  'use strict';
  var hookCallback;
  function utils_hooks__hooks() {
    return hookCallback.apply(null, arguments);
  }
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  }
  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }
  function map(arr, fn) {
    var res = [],
        i;
    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function create_utc__createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      meridiem: null
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }
  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function(fun) {
      var t = Object(this);
      var len = t.length >>> 0;
      for (var i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }
      return false;
    };
  }
  function valid__isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m);
      var parsedParts = some.call(flags.parsedDateParts, function(i) {
        return i != null;
      });
      m._isValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || (flags.meridiem && parsedParts));
      if (m._strict) {
        m._isValid = m._isValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
      }
    }
    return m._isValid;
  }
  function valid__createInvalid(flags) {
    var m = create_utc__createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }
  function isUndefined(input) {
    return input === void 0;
  }
  var momentProperties = utils_hooks__hooks.momentProperties = [];
  function copyConfig(to, from) {
    var i,
        prop,
        val;
    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
      to._i = from._i;
    }
    if (!isUndefined(from._f)) {
      to._f = from._f;
    }
    if (!isUndefined(from._l)) {
      to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }
    if (momentProperties.length > 0) {
      for (i in momentProperties) {
        prop = momentProperties[i];
        val = from[prop];
        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }
    return to;
  }
  var updateInProgress = false;
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (updateInProgress === false) {
      updateInProgress = true;
      utils_hooks__hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
  }
  function absFloor(number) {
    if (number < 0) {
      return Math.ceil(number);
    } else {
      return Math.floor(number);
    }
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
      if ((dontConvert && array1[i] !== array2[i]) || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }
  function warn(msg) {
    if (utils_hooks__hooks.suppressDeprecationWarnings === false && (typeof console !== 'undefined') && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function() {
      if (utils_hooks__hooks.deprecationHandler != null) {
        utils_hooks__hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (utils_hooks__hooks.deprecationHandler != null) {
      utils_hooks__hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  utils_hooks__hooks.suppressDeprecationWarnings = false;
  utils_hooks__hooks.deprecationHandler = null;
  function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }
  function isObject(input) {
    return Object.prototype.toString.call(input) === '[object Object]';
  }
  function locale_set__set(config) {
    var prop,
        i;
    for (i in config) {
      prop = config[i];
      if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this['_' + i] = prop;
      }
    }
    this._config = config;
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
  }
  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig),
        prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    return res;
  }
  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }
  var keys;
  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function(obj) {
      var i,
          res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }
  var locales = {};
  var globalLocale;
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  }
  function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));
        if (locale) {
          return locale;
        }
        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
          break;
        }
        j--;
      }
      i++;
    }
    return null;
  }
  function loadLocale(name) {
    var oldLocale = null;
    if (!locales[name] && (typeof module !== 'undefined') && module && module.exports) {
      try {
        oldLocale = globalLocale._abbr;
        require('./locale/' + name);
        locale_locales__getSetGlobalLocale(oldLocale);
      } catch (e) {}
    }
    return locales[name];
  }
  function locale_locales__getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = locale_locales__getLocale(key);
      } else {
        data = defineLocale(key, values);
      }
      if (data) {
        globalLocale = data;
      }
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, config) {
    if (config !== null) {
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale');
        config = mergeConfigs(locales[name]._config, config);
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          config = mergeConfigs(locales[config.parentLocale]._config, config);
        } else {
          deprecateSimple('parentLocaleUndefined', 'specified parentLocale is not defined yet');
        }
      }
      locales[name] = new Locale(config);
      locale_locales__getSetGlobalLocale(name);
      return locales[name];
    } else {
      delete locales[name];
      return null;
    }
  }
  function updateLocale(name, config) {
    if (config != null) {
      var locale;
      if (locales[name] != null) {
        config = mergeConfigs(locales[name]._config, config);
      }
      locale = new Locale(config);
      locale.parentLocale = locales[name];
      locales[name] = locale;
      locale_locales__getSetGlobalLocale(name);
    } else {
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }
  function locale_locales__getLocale(key) {
    var locale;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return globalLocale;
    }
    if (!isArray(key)) {
      locale = loadLocale(key);
      if (locale) {
        return locale;
      }
      key = [key];
    }
    return chooseLocale(key);
  }
  function locale_locales__listLocales() {
    return keys(locales);
  }
  var aliases = {};
  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }
  function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  function makeGetSet(unit, keepTime) {
    return function(value) {
      if (value != null) {
        get_set__set(this, unit, value);
        utils_hooks__hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get_set__get(this, unit);
      }
    };
  }
  function get_set__get(mom, unit) {
    return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }
  function get_set__set(mom, unit, value) {
    if (mom.isValid()) {
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
  }
  function getSet(units, value) {
    var unit;
    if (typeof units === 'object') {
      for (unit in units) {
        this.set(unit, units[unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }
  function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  var formatFunctions = {};
  var formatTokenFunctions = {};
  function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
      func = function() {
        return this[callback]();
      };
    }
    if (token) {
      formatTokenFunctions[token] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function() {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal) {
      formatTokenFunctions[ordinal] = function() {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
  }
  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;
    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }
    return function(mom) {
      var output = '',
          i;
      for (i = 0; i < length; i++) {
        output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
      }
      return output;
    };
  }
  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](m);
  }
  function expandFormat(format, locale) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format;
  }
  var match1 = /\d/;
  var match2 = /\d\d/;
  var match3 = /\d{3}/;
  var match4 = /\d{4}/;
  var match6 = /[+-]?\d{6}/;
  var match1to2 = /\d\d?/;
  var match3to4 = /\d\d\d\d?/;
  var match5to6 = /\d\d\d\d\d\d?/;
  var match1to3 = /\d{1,3}/;
  var match1to4 = /\d{1,4}/;
  var match1to6 = /[+-]?\d{1,6}/;
  var matchUnsigned = /\d+/;
  var matchSigned = /[+-]?\d+/;
  var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
  var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var regexes = {};
  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
      return (isStrict && strictRegex) ? strictRegex : regex;
    };
  }
  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }
    return regexes[token](config._strict, config._locale);
  }
  function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  var tokens = {};
  function addParseToken(token, callback) {
    var i,
        func = callback;
    if (typeof token === 'string') {
      token = [token];
    }
    if (typeof callback === 'number') {
      func = function(input, array) {
        array[callback] = toInt(input);
      };
    }
    for (i = 0; i < token.length; i++) {
      tokens[token[i]] = func;
    }
  }
  function addWeekParseToken(token, callback) {
    addParseToken(token, function(input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }
  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }
  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8;
  var indexOf;
  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(o) {
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }
  function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }
  addFormatToken('M', ['MM', 2], 'Mo', function() {
    return this.month() + 1;
  });
  addFormatToken('MMM', 0, 0, function(format) {
    return this.localeData().monthsShort(this, format);
  });
  addFormatToken('MMMM', 0, 0, function(format) {
    return this.localeData().months(this, format);
  });
  addUnitAlias('month', 'M');
  addRegexToken('M', match1to2);
  addRegexToken('MM', match1to2, match2);
  addRegexToken('MMM', function(isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function(isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });
  addParseToken(['M', 'MM'], function(input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(['MMM', 'MMMM'], function(input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });
  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
  function localeMonths(m, format) {
    return isArray(this._months) ? this._months[m.month()] : this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }
  var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  function localeMonthsShort(m, format) {
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }
  function units_month__handleStrictParse(monthName, format, strict) {
    var i,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = create_utc__createUTC([2000, i]);
        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeMonthsParse(monthName, format, strict) {
    var i,
        mom,
        regex;
    if (this._monthsParseExact) {
      return units_month__handleStrictParse.call(this, monthName, format, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    for (i = 0; i < 12; i++) {
      mom = create_utc__createUTC([2000, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
      }
      if (!strict && !this._monthsParse[i]) {
        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }
  function setMonth(mom, value) {
    var dayOfMonth;
    if (!mom.isValid()) {
      return mom;
    }
    if (typeof value === 'string') {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        if (typeof value !== 'number') {
          return mom;
        }
      }
    }
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      utils_hooks__hooks.updateOffset(this, true);
      return this;
    } else {
      return get_set__get(this, 'Month');
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  var defaultMonthsShortRegex = matchWord;
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  var defaultMonthsRegex = matchWord;
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;
    for (i = 0; i < 12; i++) {
      mom = create_utc__createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  }
  function checkOverflow(m) {
    var overflow;
    var a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
  var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]];
  var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
  var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
  function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;
    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
      utils_hooks__hooks.createFromInputFallback(config);
    }
  }
  utils_hooks__hooks.createFromInputFallback = deprecate('moment construction falls back to js Date. This is ' + 'discouraged and will be removed in upcoming major ' + 'release. Please refer to ' + 'https://github.com/moment/moment/issues/1407 for more info.', function(config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  });
  function createDate(y, m, d, h, M, s, ms) {
    var date = new Date(y, m, d, h, M, s, ms);
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }
    return date;
  }
  function createUTCDate(y) {
    var date = new Date(Date.UTC.apply(null, arguments));
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
    return date;
  }
  addFormatToken('Y', 0, 0, function() {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
  });
  addFormatToken(0, ['YY', 2], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, ['YYYY', 4], 0, 'year');
  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
  addUnitAlias('year', 'y');
  addRegexToken('Y', matchSigned);
  addRegexToken('YY', match1to2, match2);
  addRegexToken('YYYY', match1to4, match4);
  addRegexToken('YYYYY', match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);
  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function(input, array) {
    array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function(input, array) {
    array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function(input, array) {
    array[YEAR] = parseInt(input, 10);
  });
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  utils_hooks__hooks.parseTwoDigitYear = function(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };
  var getSetYear = makeGetSet('FullYear', true);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  function firstWeekOffset(year, dow, doy) {
    var fwd = 7 + dow - doy,
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;
    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }
  function currentDateArray(config) {
    var nowValue = new Date(utils_hooks__hooks.now());
    if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }
  function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }
    if (config._dayOfYear) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse)) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }
      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }
    for (; i < 7; i++) {
      config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w,
        weekYear,
        week,
        weekday,
        dow,
        doy,
        temp,
        weekdayOverflow;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;
      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
      week = defaults(w.w, 1);
      if (w.d != null) {
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }
  utils_hooks__hooks.ISO_8601 = function() {};
  function configFromStringAndFormat(config) {
    if (config._f === utils_hooks__hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token);
        }
        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    }
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }
    if (getParsingFlags(config).bigHour === true && config._a[HOUR] <= 12 && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;
    if (meridiem == null) {
      return hour;
    }
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      return hour;
    }
  }
  function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,
        scoreToBeat,
        i,
        currentScore;
    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }
    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);
      if (!valid__isValid(tempConfig)) {
        continue;
      }
      currentScore += getParsingFlags(tempConfig).charsLeftOver;
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function configFromObject(config) {
    if (config._d) {
      return;
    }
    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function(obj) {
      return obj && parseInt(obj, 10);
    });
    configFromArray(config);
  }
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      res.add(1, 'd');
      res._nextDay = undefined;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i,
        format = config._f;
    config._locale = config._locale || locale_locales__getLocale(config._l);
    if (input === null || (format === undefined && input === '')) {
      return valid__createInvalid({nullInput: true});
    }
    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else if (isDate(input)) {
      config._d = input;
    } else {
      configFromInput(config);
    }
    if (!valid__isValid(config)) {
      config._d = null;
    }
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (input === undefined) {
      config._d = new Date(utils_hooks__hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function(obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (typeof(input) === 'object') {
      configFromObject(config);
    } else if (typeof(input) === 'number') {
      config._d = new Date(input);
    } else {
      utils_hooks__hooks.createFromInputFallback(config);
    }
  }
  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};
    if (typeof(locale) === 'boolean') {
      strict = locale;
      locale = undefined;
    }
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;
    return createFromConfig(c);
  }
  function local__createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }
  var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548', function() {
    var other = local__createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return valid__createInvalid();
    }
  });
  var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548', function() {
    var other = local__createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return valid__createInvalid();
    }
  });
  function pickBy(fn, moments) {
    var res,
        i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return local__createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isBefore', args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isAfter', args);
  }
  var now = function() {
    return Date.now ? Date.now() : +(new Date());
  };
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;
    this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 1000 * 60 * 60;
    this._days = +days + weeks * 7;
    this._months = +months + quarters * 3 + years * 12;
    this._data = {};
    this._locale = locale_locales__getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function offset(token, separator) {
    addFormatToken(token, 0, 0, function() {
      var offset = this.utcOffset();
      var sign = '+';
      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }
      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
  }
  offset('Z', ':');
  offset('ZZ', '');
  addRegexToken('Z', matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function(input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string) {
    var matches = ((string || '').match(matcher) || []);
    var chunk = matches[matches.length - 1] || [];
    var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);
    return parts[0] === '+' ? minutes : -minutes;
  }
  function cloneWithOffset(input, model) {
    var res,
        diff;
    if (model._isUTC) {
      res = model.clone();
      diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
      res._d.setTime(res._d.valueOf() + diff);
      utils_hooks__hooks.updateOffset(res, false);
      return res;
    } else {
      return local__createLocal(input).local();
    }
  }
  function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  }
  utils_hooks__hooks.updateOffset = function() {};
  function getSetOffset(input, keepLocalTime) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);
      } else if (Math.abs(input) < 16) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }
      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          utils_hooks__hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }
      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm) {
      this.utcOffset(this._tzm);
    } else if (typeof this._i === 'string') {
      this.utcOffset(offsetFromString(matchOffset, this._i));
    }
    return this;
  }
  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? local__createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return (this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset());
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {};
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }
  var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;
  var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
  function create__createDuration(input, key) {
    var duration = input,
        match = null,
        sign,
        ret,
        diffRes;
    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (typeof input === 'number') {
      duration = {};
      if (key) {
        duration[key] = input;
      } else {
        duration.milliseconds = input;
      }
    } else if (!!(match = aspNetRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(match[MILLISECOND]) * sign
      };
    } else if (!!(match = isoRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        w: parseIso(match[4], sign),
        d: parseIso(match[5], sign),
        h: parseIso(match[6], sign),
        m: parseIso(match[7], sign),
        s: parseIso(match[8], sign)
      };
    } else if (duration == null) {
      duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }
    return ret;
  }
  create__createDuration.fn = Duration.prototype;
  function parseIso(inp, sign) {
    var res = inp && parseFloat(inp.replace(',', '.'));
    return (isNaN(res) ? 0 : res) * sign;
  }
  function positiveMomentsDifference(base, other) {
    var res = {
      milliseconds: 0,
      months: 0
    };
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return {
        milliseconds: 0,
        months: 0
      };
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }
  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  }
  function createAdder(direction, name) {
    return function(val, period) {
      var dur,
          tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
        tmp = val;
        val = period;
        period = tmp;
      }
      val = typeof val === 'string' ? +val : val;
      dur = create__createDuration(val, period);
      add_subtract__addSubtract(this, dur, direction);
      return this;
    };
  }
  function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);
    if (!mom.isValid()) {
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (milliseconds) {
      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
      get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
    }
    if (months) {
      setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
      utils_hooks__hooks.updateOffset(mom, days || months);
    }
  }
  var add_subtract__add = createAdder(1, 'add');
  var add_subtract__subtract = createAdder(-1, 'subtract');
  function moment_calendar__calendar(time, formats) {
    var now = time || local__createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        diff = this.diff(sod, 'days', true),
        format = diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);
    return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }
  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }
  function isBetween(from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) && (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
  }
  function isSame(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }
  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }
  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }
  function diff(input, units, asFloat) {
    var that,
        zoneDelta,
        delta,
        output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);
    if (units === 'year' || units === 'month' || units === 'quarter') {
      output = monthDiff(this, that);
      if (units === 'quarter') {
        output = output / 3;
      } else if (units === 'year') {
        output = output / 12;
      }
    } else {
      delta = this - that;
      output = units === 'second' ? delta / 1e3 : units === 'minute' ? delta / 6e4 : units === 'hour' ? delta / 36e5 : units === 'day' ? (delta - zoneDelta) / 864e5 : units === 'week' ? (delta - zoneDelta) / 6048e5 : delta;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust) || 0;
  }
  utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
  function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }
  function moment_format__toISOString() {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
      if (isFunction(Date.prototype.toISOString)) {
        return this.toDate().toISOString();
      } else {
        return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
      }
    } else {
      return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
  }
  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (this.isValid() && ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())) {
      return create__createDuration({
        to: this,
        from: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(local__createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (this.isValid() && ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())) {
      return create__createDuration({
        from: this,
        to: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(local__createLocal(), withoutSuffix);
  }
  function locale(key) {
    var newLocaleData;
    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = locale_locales__getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(key) {
    if (key === undefined) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });
  function localeData() {
    return this._locale;
  }
  function startOf(units) {
    units = normalizeUnits(units);
    switch (units) {
      case 'year':
        this.month(0);
      case 'quarter':
      case 'month':
        this.date(1);
      case 'week':
      case 'isoWeek':
      case 'day':
      case 'date':
        this.hours(0);
      case 'hour':
        this.minutes(0);
      case 'minute':
        this.seconds(0);
      case 'second':
        this.milliseconds(0);
    }
    if (units === 'week') {
      this.weekday(0);
    }
    if (units === 'isoWeek') {
      this.isoWeekday(1);
    }
    if (units === 'quarter') {
      this.month(Math.floor(this.month() / 3) * 3);
    }
    return this;
  }
  function endOf(units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
      return this;
    }
    if (units === 'date') {
      units = 'day';
    }
    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
  }
  function to_type__valueOf() {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
  }
  function unix() {
    return Math.floor(this.valueOf() / 1000);
  }
  function toDate() {
    return this._offset ? new Date(this.valueOf()) : this._d;
  }
  function toArray() {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  }
  function moment_valid__isValid() {
    return valid__isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  addFormatToken(0, ['gg', 2], 0, function() {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ['GG', 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }
  addWeekYearFormatToken('gggg', 'weekYear');
  addWeekYearFormatToken('ggggg', 'weekYear');
  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear');
  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG');
  addRegexToken('G', matchSigned);
  addRegexToken('g', matchSigned);
  addRegexToken('GG', match1to2, match2);
  addRegexToken('gg', match1to2, match2);
  addRegexToken('GGGG', match1to4, match4);
  addRegexToken('gggg', match1to4, match4);
  addRegexToken('GGGGG', match1to6, match6);
  addRegexToken('ggggg', match1to6, match6);
  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function(input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
  });
  addWeekParseToken(['gg', 'GG'], function(input, week, config, token) {
    week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
  });
  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }
  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }
  addFormatToken('Q', 0, 'Qo', 'quarter');
  addUnitAlias('quarter', 'Q');
  addRegexToken('Q', match1);
  addParseToken('Q', function(input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });
  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }
  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W');
  addRegexToken('w', match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W', match1to2);
  addRegexToken('WW', match1to2, match2);
  addWeekParseToken(['w', 'ww', 'W', 'WW'], function(input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
  });
  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    doy: 6
  };
  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }
  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }
  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  }
  addFormatToken('D', ['DD', 2], 'Do', 'date');
  addUnitAlias('date', 'D');
  addRegexToken('D', match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function(isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
  });
  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function(input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
  });
  var getSetDayOfMonth = makeGetSet('Date', true);
  addFormatToken('d', 0, 'do', 'day');
  addFormatToken('dd', 0, 0, function(format) {
    return this.localeData().weekdaysMin(this, format);
  });
  addFormatToken('ddd', 0, 0, function(format) {
    return this.localeData().weekdaysShort(this, format);
  });
  addFormatToken('dddd', 0, 0, function(format) {
    return this.localeData().weekdays(this, format);
  });
  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday');
  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E');
  addRegexToken('d', match1to2);
  addRegexToken('e', match1to2);
  addRegexToken('E', match1to2);
  addRegexToken('dd', function(isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken('ddd', function(isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken('dddd', function(isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
  });
  addWeekParseToken(['dd', 'ddd', 'dddd'], function(input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(['d', 'e', 'E'], function(input, week, config, token) {
    week[token] = toInt(input);
  });
  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }
    if (!isNaN(input)) {
      return parseInt(input, 10);
    }
    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
      return input;
    }
    return null;
  }
  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
  function localeWeekdays(m, format) {
    return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
  }
  var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
  function localeWeekdaysShort(m) {
    return this._weekdaysShort[m.day()];
  }
  var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
  function localeWeekdaysMin(m) {
    return this._weekdaysMin[m.day()];
  }
  function day_of_week__handleStrictParse(weekdayName, format, strict) {
    var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      for (i = 0; i < 7; ++i) {
        mom = create_utc__createUTC([2000, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeWeekdaysParse(weekdayName, format, strict) {
    var i,
        mom,
        regex;
    if (this._weekdaysParseExact) {
      return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      mom = create_utc__createUTC([2000, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
      }
      if (!this._weekdaysParse[i]) {
        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }
  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }
  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
  }
  var defaultWeekdaysRegex = matchWord;
  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  var defaultWeekdaysShortRegex = matchWord;
  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  var defaultWeekdaysMinRegex = matchWord;
  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;
    for (i = 0; i < 7; i++) {
      mom = create_utc__createUTC([2000, 1]).day(i);
      minp = this.weekdaysMin(mom, '');
      shortp = this.weekdaysShort(mom, '');
      longp = this.weekdays(mom, '');
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
  }
  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
  addUnitAlias('dayOfYear', 'DDD');
  addRegexToken('DDD', match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function(input, array, config) {
    config._dayOfYear = toInt(input);
  });
  function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function kFormat() {
    return this.hours() || 24;
  }
  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);
  addFormatToken('hmm', 0, 0, function() {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken('hmmss', 0, 0, function() {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken('Hmm', 0, 0, function() {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken('Hmmss', 0, 0, function() {
    return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }
  meridiem('a', true);
  meridiem('A', false);
  addUnitAlias('hour', 'h');
  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }
  addRegexToken('a', matchMeridiem);
  addRegexToken('A', matchMeridiem);
  addRegexToken('H', match1to2);
  addRegexToken('h', match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);
  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['a', 'A'], function(input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function(input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function(input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function(input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });
  function localeIsPM(input) {
    return ((input + '').toLowerCase().charAt(0) === 'p');
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    } else {
      return isLower ? 'am' : 'AM';
    }
  }
  var getSetHour = makeGetSet('Hours', true);
  addFormatToken('m', ['mm', 2], 0, 'minute');
  addUnitAlias('minute', 'm');
  addRegexToken('m', match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE);
  var getSetMinute = makeGetSet('Minutes', false);
  addFormatToken('s', ['ss', 2], 0, 'second');
  addUnitAlias('second', 's');
  addRegexToken('s', match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND);
  var getSetSecond = makeGetSet('Seconds', false);
  addFormatToken('S', 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ['SS', 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function() {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function() {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function() {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function() {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function() {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function() {
    return this.millisecond() * 1000000;
  });
  addUnitAlias('millisecond', 'ms');
  addRegexToken('S', match1to3, match1);
  addRegexToken('SS', match1to3, match2);
  addRegexToken('SSS', match1to3, match3);
  var token;
  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }
  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  }
  var getSetMillisecond = makeGetSet('Milliseconds', false);
  addFormatToken('z', 0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName');
  function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
  }
  function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }
  var momentPrototype__proto = Moment.prototype;
  momentPrototype__proto.add = add_subtract__add;
  momentPrototype__proto.calendar = moment_calendar__calendar;
  momentPrototype__proto.clone = clone;
  momentPrototype__proto.diff = diff;
  momentPrototype__proto.endOf = endOf;
  momentPrototype__proto.format = format;
  momentPrototype__proto.from = from;
  momentPrototype__proto.fromNow = fromNow;
  momentPrototype__proto.to = to;
  momentPrototype__proto.toNow = toNow;
  momentPrototype__proto.get = getSet;
  momentPrototype__proto.invalidAt = invalidAt;
  momentPrototype__proto.isAfter = isAfter;
  momentPrototype__proto.isBefore = isBefore;
  momentPrototype__proto.isBetween = isBetween;
  momentPrototype__proto.isSame = isSame;
  momentPrototype__proto.isSameOrAfter = isSameOrAfter;
  momentPrototype__proto.isSameOrBefore = isSameOrBefore;
  momentPrototype__proto.isValid = moment_valid__isValid;
  momentPrototype__proto.lang = lang;
  momentPrototype__proto.locale = locale;
  momentPrototype__proto.localeData = localeData;
  momentPrototype__proto.max = prototypeMax;
  momentPrototype__proto.min = prototypeMin;
  momentPrototype__proto.parsingFlags = parsingFlags;
  momentPrototype__proto.set = getSet;
  momentPrototype__proto.startOf = startOf;
  momentPrototype__proto.subtract = add_subtract__subtract;
  momentPrototype__proto.toArray = toArray;
  momentPrototype__proto.toObject = toObject;
  momentPrototype__proto.toDate = toDate;
  momentPrototype__proto.toISOString = moment_format__toISOString;
  momentPrototype__proto.toJSON = toJSON;
  momentPrototype__proto.toString = toString;
  momentPrototype__proto.unix = unix;
  momentPrototype__proto.valueOf = to_type__valueOf;
  momentPrototype__proto.creationData = creationData;
  momentPrototype__proto.year = getSetYear;
  momentPrototype__proto.isLeapYear = getIsLeapYear;
  momentPrototype__proto.weekYear = getSetWeekYear;
  momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
  momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;
  momentPrototype__proto.month = getSetMonth;
  momentPrototype__proto.daysInMonth = getDaysInMonth;
  momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;
  momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;
  momentPrototype__proto.weeksInYear = getWeeksInYear;
  momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
  momentPrototype__proto.date = getSetDayOfMonth;
  momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;
  momentPrototype__proto.weekday = getSetLocaleDayOfWeek;
  momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
  momentPrototype__proto.dayOfYear = getSetDayOfYear;
  momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
  momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
  momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
  momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;
  momentPrototype__proto.utcOffset = getSetOffset;
  momentPrototype__proto.utc = setOffsetToUTC;
  momentPrototype__proto.local = setOffsetToLocal;
  momentPrototype__proto.parseZone = setOffsetToParsedOffset;
  momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
  momentPrototype__proto.isDST = isDaylightSavingTime;
  momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted;
  momentPrototype__proto.isLocal = isLocal;
  momentPrototype__proto.isUtcOffset = isUtcOffset;
  momentPrototype__proto.isUtc = isUtc;
  momentPrototype__proto.isUTC = isUtc;
  momentPrototype__proto.zoneAbbr = getZoneAbbr;
  momentPrototype__proto.zoneName = getZoneName;
  momentPrototype__proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  momentPrototype__proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  momentPrototype__proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);
  var momentPrototype = momentPrototype__proto;
  function moment__createUnix(input) {
    return local__createLocal(input * 1000);
  }
  function moment__createInZone() {
    return local__createLocal.apply(null, arguments).parseZone();
  }
  var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
  };
  function locale_calendar__calendar(key, mom, now) {
    var output = this._calendar[key];
    return isFunction(output) ? output.call(mom, now) : output;
  }
  var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  };
  function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format || !formatUpper) {
      return format;
    }
    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) {
      return val.slice(1);
    });
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = 'Invalid date';
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = '%d';
  var defaultOrdinalParse = /\d{1,2}/;
  function ordinal(number) {
    return this._ordinal.replace('%d', number);
  }
  function preParsePostFormat(string) {
    return string;
  }
  var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  };
  function relative__relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }
  function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }
  var prototype__proto = Locale.prototype;
  prototype__proto._calendar = defaultCalendar;
  prototype__proto.calendar = locale_calendar__calendar;
  prototype__proto._longDateFormat = defaultLongDateFormat;
  prototype__proto.longDateFormat = longDateFormat;
  prototype__proto._invalidDate = defaultInvalidDate;
  prototype__proto.invalidDate = invalidDate;
  prototype__proto._ordinal = defaultOrdinal;
  prototype__proto.ordinal = ordinal;
  prototype__proto._ordinalParse = defaultOrdinalParse;
  prototype__proto.preparse = preParsePostFormat;
  prototype__proto.postformat = preParsePostFormat;
  prototype__proto._relativeTime = defaultRelativeTime;
  prototype__proto.relativeTime = relative__relativeTime;
  prototype__proto.pastFuture = pastFuture;
  prototype__proto.set = locale_set__set;
  prototype__proto.months = localeMonths;
  prototype__proto._months = defaultLocaleMonths;
  prototype__proto.monthsShort = localeMonthsShort;
  prototype__proto._monthsShort = defaultLocaleMonthsShort;
  prototype__proto.monthsParse = localeMonthsParse;
  prototype__proto._monthsRegex = defaultMonthsRegex;
  prototype__proto.monthsRegex = monthsRegex;
  prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
  prototype__proto.monthsShortRegex = monthsShortRegex;
  prototype__proto.week = localeWeek;
  prototype__proto._week = defaultLocaleWeek;
  prototype__proto.firstDayOfYear = localeFirstDayOfYear;
  prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
  prototype__proto.weekdays = localeWeekdays;
  prototype__proto._weekdays = defaultLocaleWeekdays;
  prototype__proto.weekdaysMin = localeWeekdaysMin;
  prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin;
  prototype__proto.weekdaysShort = localeWeekdaysShort;
  prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
  prototype__proto.weekdaysParse = localeWeekdaysParse;
  prototype__proto._weekdaysRegex = defaultWeekdaysRegex;
  prototype__proto.weekdaysRegex = weekdaysRegex;
  prototype__proto._weekdaysShortRegex = defaultWeekdaysShortRegex;
  prototype__proto.weekdaysShortRegex = weekdaysShortRegex;
  prototype__proto._weekdaysMinRegex = defaultWeekdaysMinRegex;
  prototype__proto.weekdaysMinRegex = weekdaysMinRegex;
  prototype__proto.isPM = localeIsPM;
  prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
  prototype__proto.meridiem = localeMeridiem;
  function lists__get(format, index, field, setter) {
    var locale = locale_locales__getLocale();
    var utc = create_utc__createUTC().set(setter, index);
    return locale[field](utc, format);
  }
  function listMonthsImpl(format, index, field) {
    if (typeof format === 'number') {
      index = format;
      format = undefined;
    }
    format = format || '';
    if (index != null) {
      return lists__get(format, index, field, 'month');
    }
    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
      out[i] = lists__get(format, i, field, 'month');
    }
    return out;
  }
  function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
      if (typeof format === 'number') {
        index = format;
        format = undefined;
      }
      format = format || '';
    } else {
      format = localeSorted;
      index = format;
      localeSorted = false;
      if (typeof format === 'number') {
        index = format;
        format = undefined;
      }
      format = format || '';
    }
    var locale = locale_locales__getLocale(),
        shift = localeSorted ? locale._week.dow : 0;
    if (index != null) {
      return lists__get(format, (index + shift) % 7, field, 'day');
    }
    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
      out[i] = lists__get(format, (i + shift) % 7, field, 'day');
    }
    return out;
  }
  function lists__listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
  }
  function lists__listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
  }
  function lists__listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }
  function lists__listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }
  function lists__listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }
  locale_locales__getSetGlobalLocale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(number) {
      var b = number % 10,
          output = (toInt(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
      return number + output;
    }
  });
  utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
  utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
  var mathAbs = Math.abs;
  function duration_abs__abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function duration_add_subtract__addSubtract(duration, input, value, direction) {
    var other = create__createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }
  function duration_add_subtract__add(input, value) {
    return duration_add_subtract__addSubtract(this, input, value, 1);
  }
  function duration_add_subtract__subtract(input, value) {
    return duration_add_subtract__addSubtract(this, input, value, -1);
  }
  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }
  function bubble() {
    var milliseconds = this._milliseconds;
    var days = this._days;
    var months = this._months;
    var data = this._data;
    var seconds,
        minutes,
        hours,
        years,
        monthsFromDays;
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) || (milliseconds <= 0 && days <= 0 && months <= 0))) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    }
    data.milliseconds = milliseconds % 1000;
    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));
    years = absFloor(months / 12);
    months %= 12;
    data.days = days;
    data.months = months;
    data.years = years;
    return this;
  }
  function daysToMonths(days) {
    return days * 4800 / 146097;
  }
  function monthsToDays(months) {
    return months * 146097 / 4800;
  }
  function as(units) {
    var days;
    var months;
    var milliseconds = this._milliseconds;
    units = normalizeUnits(units);
    if (units === 'month' || units === 'year') {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      return units === 'month' ? months : months / 12;
    } else {
      days = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case 'week':
          return days / 7 + milliseconds / 6048e5;
        case 'day':
          return days + milliseconds / 864e5;
        case 'hour':
          return days * 24 + milliseconds / 36e5;
        case 'minute':
          return days * 1440 + milliseconds / 6e4;
        case 'second':
          return days * 86400 + milliseconds / 1000;
        case 'millisecond':
          return Math.floor(days * 864e5) + milliseconds;
        default:
          throw new Error('Unknown unit ' + units);
      }
    }
  }
  function duration_as__valueOf() {
    return (this._milliseconds + this._days * 864e5 + (this._months % 12) * 2592e6 + toInt(this._months / 12) * 31536e6);
  }
  function makeAs(alias) {
    return function() {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs('ms');
  var asSeconds = makeAs('s');
  var asMinutes = makeAs('m');
  var asHours = makeAs('h');
  var asDays = makeAs('d');
  var asWeeks = makeAs('w');
  var asMonths = makeAs('M');
  var asYears = makeAs('y');
  function duration_get__get(units) {
    units = normalizeUnits(units);
    return this[units + 's']();
  }
  function makeGetter(name) {
    return function() {
      return this._data[name];
    };
  }
  var milliseconds = makeGetter('milliseconds');
  var seconds = makeGetter('seconds');
  var minutes = makeGetter('minutes');
  var hours = makeGetter('hours');
  var days = makeGetter('days');
  var months = makeGetter('months');
  var years = makeGetter('years');
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round;
  var thresholds = {
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    M: 11
  };
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
    var duration = create__createDuration(posNegDuration).abs();
    var seconds = round(duration.as('s'));
    var minutes = round(duration.as('m'));
    var hours = round(duration.as('h'));
    var days = round(duration.as('d'));
    var months = round(duration.as('M'));
    var years = round(duration.as('y'));
    var a = seconds < thresholds.s && ['s', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  }
  function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }
    if (limit === undefined) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    return true;
  }
  function humanize(withSuffix) {
    var locale = this.localeData();
    var output = duration_humanize__relativeTime(this, !withSuffix, locale);
    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }
    return locale.postformat(output);
  }
  var iso_string__abs = Math.abs;
  function iso_string__toISOString() {
    var seconds = iso_string__abs(this._milliseconds) / 1000;
    var days = iso_string__abs(this._days);
    var months = iso_string__abs(this._months);
    var minutes,
        hours,
        years;
    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;
    years = absFloor(months / 12);
    months %= 12;
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();
    if (!total) {
      return 'P0D';
    }
    return (total < 0 ? '-' : '') + 'P' + (Y ? Y + 'Y' : '') + (M ? M + 'M' : '') + (D ? D + 'D' : '') + ((h || m || s) ? 'T' : '') + (h ? h + 'H' : '') + (m ? m + 'M' : '') + (s ? s + 'S' : '');
  }
  var duration_prototype__proto = Duration.prototype;
  duration_prototype__proto.abs = duration_abs__abs;
  duration_prototype__proto.add = duration_add_subtract__add;
  duration_prototype__proto.subtract = duration_add_subtract__subtract;
  duration_prototype__proto.as = as;
  duration_prototype__proto.asMilliseconds = asMilliseconds;
  duration_prototype__proto.asSeconds = asSeconds;
  duration_prototype__proto.asMinutes = asMinutes;
  duration_prototype__proto.asHours = asHours;
  duration_prototype__proto.asDays = asDays;
  duration_prototype__proto.asWeeks = asWeeks;
  duration_prototype__proto.asMonths = asMonths;
  duration_prototype__proto.asYears = asYears;
  duration_prototype__proto.valueOf = duration_as__valueOf;
  duration_prototype__proto._bubble = bubble;
  duration_prototype__proto.get = duration_get__get;
  duration_prototype__proto.milliseconds = milliseconds;
  duration_prototype__proto.seconds = seconds;
  duration_prototype__proto.minutes = minutes;
  duration_prototype__proto.hours = hours;
  duration_prototype__proto.days = days;
  duration_prototype__proto.weeks = weeks;
  duration_prototype__proto.months = months;
  duration_prototype__proto.years = years;
  duration_prototype__proto.humanize = humanize;
  duration_prototype__proto.toISOString = iso_string__toISOString;
  duration_prototype__proto.toString = iso_string__toISOString;
  duration_prototype__proto.toJSON = iso_string__toISOString;
  duration_prototype__proto.locale = locale;
  duration_prototype__proto.localeData = localeData;
  duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
  duration_prototype__proto.lang = lang;
  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf');
  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function(input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
  });
  addParseToken('x', function(input, array, config) {
    config._d = new Date(toInt(input));
  });
  utils_hooks__hooks.version = '2.13.0';
  setHookCallback(local__createLocal);
  utils_hooks__hooks.fn = momentPrototype;
  utils_hooks__hooks.min = min;
  utils_hooks__hooks.max = max;
  utils_hooks__hooks.now = now;
  utils_hooks__hooks.utc = create_utc__createUTC;
  utils_hooks__hooks.unix = moment__createUnix;
  utils_hooks__hooks.months = lists__listMonths;
  utils_hooks__hooks.isDate = isDate;
  utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;
  utils_hooks__hooks.invalid = valid__createInvalid;
  utils_hooks__hooks.duration = create__createDuration;
  utils_hooks__hooks.isMoment = isMoment;
  utils_hooks__hooks.weekdays = lists__listWeekdays;
  utils_hooks__hooks.parseZone = moment__createInZone;
  utils_hooks__hooks.localeData = locale_locales__getLocale;
  utils_hooks__hooks.isDuration = isDuration;
  utils_hooks__hooks.monthsShort = lists__listMonthsShort;
  utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;
  utils_hooks__hooks.defineLocale = defineLocale;
  utils_hooks__hooks.updateLocale = updateLocale;
  utils_hooks__hooks.locales = locale_locales__listLocales;
  utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;
  utils_hooks__hooks.normalizeUnits = normalizeUnits;
  utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
  utils_hooks__hooks.prototype = momentPrototype;
  var _moment = utils_hooks__hooks;
  return _moment;
}));

})();
(function() {
var define = $__System.amdDefine;
define("1a", ["19"], function(main) {
  return main;
});

})();
$__System.register("1b", ["9", "d", "1a"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, util_1, moment_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Guide',
                'view': 'list',
                'icon': function (state) { return state.get('media') === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png'; },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', state.get('media')]]); },
                'data': function (state) {
                    var now = moment_1.default();
                    var nowUnix = now.unix();
                    var groupid = +state.get('groupid');
                    return xbmc.get({
                        method: 'PVR.GetChannels',
                        params: {
                            'properties': ['hidden', 'locked', 'thumbnail'],
                            'channelgroupid': groupid
                        },
                        cache: true
                    })
                        .then(function (_a) {
                        var channels = _a.channels;
                        return channels.map(function (channel) { return ({
                            channelid: channel.channelid,
                            label: channel.label,
                            thumbnail: xbmc.vfs2uri(channel.thumbnail),
                            itemsP: xbmc.get({
                                method: 'PVR.GetBroadcasts',
                                params: {
                                    channelid: channel.channelid,
                                    properties: ['starttime', 'runtime', 'endtime', 'isactive']
                                },
                                cache: true
                            })
                                .then(function (_a) {
                                var broadcasts = _a.broadcasts;
                                return broadcasts.map(function (broadcast) { return ({
                                    label: broadcast.label,
                                    link: '#page=Broadcast&broadcastid=' + broadcast.broadcastid + '&media=' + state.get('media'),
                                    details: moment_1.default(broadcast.endtime).isBefore(now) ?
                                        [util_1.minutes2string(broadcast.runtime)] :
                                        [moment_1.default(broadcast.starttime).format('LT'), util_1.minutes2string(broadcast.runtime)],
                                    runtime: broadcast.runtime,
                                    starttime: moment_1.default(broadcast.starttime),
                                    endtime: moment_1.default(broadcast.endtime),
                                    isfinished: moment_1.default(broadcast.endtime).isBefore(moment_1.default()),
                                    isactive: broadcast.isactive
                                }); });
                            })
                        }); });
                    })
                        .then(function (channels) {
                        return Promise.all(channels.map(function (channel) {
                            return channel.itemsP
                                .then(function (items) { return ({
                                label: channel.label,
                                thumbnail: channel.thumbnail === undefined ? 'img/icons/default/DefaultTVShows.png' : channel.thumbnail,
                                actions: [{
                                        label: 'Play ' + channel.label,
                                        thumbnail: 'img/buttons/play.png',
                                        link: "javascript:(() => { xbmc.Open({ 'item': { 'channelid': " + channel.channelid + " } }) })()"
                                    }],
                                items: items
                            }); });
                        }));
                    })
                        .then(function (channels) {
                        var startOfToday = moment_1.default().startOf('day');
                        var endOfToday = moment_1.default().endOf('day');
                        var day = state.get('day');
                        var startOfDay = undefined;
                        var endOfDay = undefined;
                        if (day === undefined) {
                            startOfDay = moment_1.default(now).subtract(2, 'hours');
                            endOfDay = startOfDay.clone().add(1, 'days');
                        }
                        else {
                            startOfDay = moment_1.default.unix(day).startOf('day');
                            endOfDay = startOfDay.clone().endOf('day');
                        }
                        //create the list of groups
                        var groupSet = new Set();
                        channels.forEach(function (_a) {
                            var items = _a.items;
                            return items.forEach(function (broadcast) {
                                var startday = moment_1.default(broadcast.starttime).startOf('day');
                                var endday = moment_1.default(broadcast.endtime).startOf('day');
                                groupSet.add(startday.unix());
                                groupSet.add(endday.unix());
                            });
                        });
                        var groups = Array.from(groupSet).map(function (dUnix) {
                            var d = moment_1.default.unix(dUnix);
                            d.startOf('day');
                            return {
                                label: d.isSame(startOfToday) ? 'today' : d.from(startOfToday),
                                selected: +day === +dUnix,
                                link: '#page=Guide&media=' + state.get('media') + '&groupid=' + state.get('groupid') + '&day=' + dUnix,
                                timestamp: +dUnix
                            };
                        });
                        groups.unshift({
                            label: 'now',
                            selected: day === undefined,
                            link: '#page=Guide&media=' + state.get('media') + '&groupid=' + state.get('groupid'),
                            timestamp: +nowUnix
                        });
                        groups.sort(function (a, b) { return (a.timestamp - b.timestamp); });
                        //filter channels from days that aren't selected
                        channels = channels.map(function (channel) {
                            var c = Object.create(channel);
                            c.items = channel.items.filter(function (item) { return (item.endtime.isBetween(startOfDay, endOfDay) || item.starttime.isBetween(startOfDay, endOfDay)); });
                            return c;
                        });
                        //find the first and last episode times
                        var starttime = undefined;
                        var endtime = undefined;
                        channels.forEach(function (channel) { return channel.items.forEach(function (item) {
                            starttime = starttime === undefined ? item.starttime : moment_1.default.min(item.starttime, starttime);
                            endtime = endtime === undefined ? item.endtime : moment_1.default.max(item.endtime, endtime);
                        }); });
                        //calculate the position of each episode
                        channels = channels.map(function (channel) {
                            channel.items = channel.items.map(function (item) {
                                item.style = "left: " + (item.starttime.unix() - starttime.unix()) / advancedSettings.epg.width + "px; width: " + (((item.endtime.unix() - item.starttime.unix()) / advancedSettings.epg.width) - advancedSettings.epg.padding) + "px;";
                                return item;
                            });
                            return channel;
                        });
                        //create timeline (the list of times at the top of page)
                        var start = moment_1.default(starttime).startOf('hour');
                        var end = moment_1.default(endtime).endOf('hour').add(1, 'minutes');
                        var timeline = [];
                        for (var date = moment_1.default(start); date.isSameOrBefore(endtime); date.add(15, 'minutes'))
                            if (date.isSameOrAfter(starttime))
                                timeline.push({
                                    'label': date.minutes() % 60 === 0 ? date.format('hA' + (date.hours() % 4 === 0 ? ' dddd' : '')) : ' ',
                                    'class': [date.isBefore(now) ? 'past' : 'future', date.minutes() % 60 === 0 ? 'major' : 'minor'].join(' '),
                                    'style': "left: " + ((date.unix() - starttime.unix()) / advancedSettings.epg.width) + "px;"
                                });
                        if (now.isBetween(starttime, endtime))
                            timeline.push({
                                'label': ' ',
                                'class': 'present',
                                'style': "left: " + ((now.unix() - starttime.unix()) / advancedSettings.epg.width) + "px;"
                            });
                        return {
                            items: channels,
                            /*options: [{
                                'id': 'Day',
                                'items': groups
                            }],*/
                            groups: groups,
                            timeline: timeline
                        };
                    });
                }
            })));
        }
    }
});

$__System.register("1c", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Home',
                'name': 'Kodi',
                'view': 'list',
                'icon': function (state) { return 'img/buttons/mainmenu.png'; },
                'data': function (state) {
                    var items = [
                        { 'label': 'Videos', 'link': '#page=Menu&media=Videos', 'thumbnail': 'img/icons/home/videos.png' },
                        { 'label': 'Movies', 'link': '#page=Menu&media=Movies', 'thumbnail': 'img/icons/home/movies.png' },
                        { 'label': 'TV Shows', 'link': '#page=Menu&media=TV Shows', 'thumbnail': 'img/icons/home/tv.png' },
                        { 'label': 'Music', 'link': '#page=Menu&media=Music', 'thumbnail': 'img/icons/home/music.png' },
                        { 'label': 'Radio', 'link': '#page=Menu&media=Radio', 'thumbnail': 'img/icons/home/radio.png' },
                        { 'label': 'TV', 'link': '#page=Menu&media=TV', 'thumbnail': 'img/icons/home/livetv.png' },
                        { 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail': 'img/icons/home/musicvideos.png' },
                        { 'label': 'Pictures', 'link': '#page=Menu&media=Pictures', 'thumbnail': 'img/icons/home/pictures.png' },
                        { 'label': 'Playlists', 'link': '#page=Playlists', 'thumbnail': 'img/icons/home/playlists.png' },
                        { 'label': 'Addons', 'link': '#page=Addons', 'thumbnail': 'img/icons/home/addons.png' }
                    ];
                    return Promise.resolve({ 'items': items, 'hideNavigation': true });
                }
            })));
        }
    }
});

$__System.register("1d", ["9", "d"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Menu',
                'view': 'list',
                'icon': function (state) { return ({
                    'Default': 'img/icons/home/menu.png',
                    'Videos': 'img/icons/home/videos.png',
                    'Movies': 'img/icons/home/movies.png',
                    'TV Shows': 'img/icons/home/tv.png',
                    'Music Videos': 'img/icons/home/musicvideos.png',
                    'Music': 'img/icons/home/music.png',
                    'Pictures': 'img/icons/home/pictures.png',
                    'TV': 'img/icons/home/livetv.png',
                    'Radio': 'img/icons/home/radio.png'
                }[state ? state.get('media') : 'Default']); },
                'parentState': function (state) {
                    var m = new Map();
                    var parent = {
                        'Movies': 'Videos',
                        'TV Shows': 'Videos',
                        'Music Videos': 'Videos'
                    }[state.get('media')];
                    if (parent) {
                        m.set('page', 'Menu');
                        m.set('media', parent);
                    }
                    else {
                        m.set('page', 'Home');
                    }
                    return m;
                },
                'data': function (state) {
                    var media = state.get('media');
                    var m = ({ 'Videos': 'video', 'Music': 'music', 'Pictures': 'pictures' })[media];
                    var getPage = Promise.resolve({
                        'pageName': media || 'Menu',
                        'items': ({
                            'Videos': [
                                { 'label': 'Library', 'items': [
                                        { 'label': 'Movies', 'link': '#page=Menu&media=Movies', 'thumbnail': 'img/icons/home/movies.png' },
                                        { 'label': 'TV Shows', 'link': '#page=Menu&media=TV Shows', 'thumbnail': 'img/icons/home/tv.png' },
                                        { 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail': 'img/icons/home/musicvideos.png' }
                                    ] }
                            ],
                            'Movies': [
                                { 'label': 'Library', 'items': [
                                        { 'label': 'By Year', 'link': '#page=Movies&group=year', 'thumbnail': 'img/icons/default/DefaultMovieYears.png' },
                                        { 'label': 'By Title', 'link': '#page=Movies&group=alpha', 'thumbnail': 'img/icons/default/DefaultMovieTitle.png' },
                                        { 'label': 'By Genre', 'link': '#page=Genres&type=Movies', 'thumbnail': 'img/icons/default/DefaultGenre.png' },
                                        { 'label': 'By Actor', 'link': '#page=Actors&media=Movies', 'thumbnail': 'img/icons/default/DefaultActor.png' }
                                    ] }
                            ],
                            'TV Shows': [
                                { 'label': 'Library', 'items': [
                                        { 'label': 'By Title', 'link': '#page=TV Shows', 'thumbnail': 'img/icons/default/DefaultTVShows.png' },
                                        { 'label': 'By Genre', 'link': '#page=Genres&type=TV Shows', 'thumbnail': 'img/icons/default/DefaultGenre.png' },
                                        { 'label': 'By Actor', 'link': '#page=Actors&media=TV Shows', 'thumbnail': 'img/icons/default/DefaultActor.png' }
                                    ] }
                            ],
                            'Music Videos': [
                                { 'label': 'Library', 'items': [
                                        { 'label': 'By Year', 'link': '#page=Music Videos&group=year', 'thumbnail': 'img/icons/default/DefaultYear.png' },
                                        { 'label': 'By Artist', 'link': '#page=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' },
                                        { 'label': 'By Genre', 'link': '#page=Music Videos&group=genre', 'thumbnail': 'img/icons/default/DefaultGenre.png' }
                                    ] }
                            ],
                            'Music': [
                                { 'label': 'Artists', 'items': [
                                        { 'label': 'By Name', 'link': '#page=Artists', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' },
                                        { 'label': 'By Genre', 'link': '#page=Genres&type=Artists', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }
                                    ] },
                                { 'label': 'Albums', 'items': [
                                        { 'label': 'By Year', 'link': '#page=Albums&group=year', 'thumbnail': 'img/icons/default/DefaultMusicYears.png' },
                                        { 'label': 'By Title', 'link': '#page=Albums', 'thumbnail': 'img/icons/default/DefaultMusicAlbums.png' },
                                        { 'label': 'By Genre', 'link': '#page=Genres&type=Albums', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }
                                    ] } /*,
                                { 'label': 'Music Videos', 'items': [
                                    { 'label': 'By Artist', 'link': '#page=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' },
                                    { 'label': 'By Genre', 'link': '#page=Genres&type=Music Videos', 'thumbnail': 'img/icons/default/DefaultGenre.png' }
                                ] }*/
                            ],
                            'Pictures': [],
                            'TV': [
                                { 'label': '', 'items': [
                                        { 'label': 'Channels', 'link': '#page=Channels&media=TV', 'thumbnail': 'img/icons/home/livetv.png' },
                                        { 'label': 'Guide', 'link': '#page=Channels&media=TV&nextpage=Guide', 'thumbnail': 'img/icons/home/livetv.png' } /*,
                                        { 'label': 'Recordings', 'link': '#', 'thumbnail': 'img/icons/home/livetv.png' },
                                        { 'label': 'Timers', 'link': '#page=Timers&media=TV', 'thumbnail': 'img/icons/home/livetv.png' }*/
                                    ] }
                            ],
                            'Radio': [
                                { 'label': '', 'items': [
                                        { 'label': 'Channels', 'link': '#page=Channels&media=Radio', 'thumbnail': 'img/icons/home/radio.png' },
                                        { 'label': 'Guide', 'link': '#page=Channels&media=Radio&nextpage=Guide', 'thumbnail': 'img/icons/home/radio.png' } /*,
                                        { 'label': 'Recordings', 'link': '#', 'thumbnail': 'img/icons/home/radio.png' },
                                        { 'label': 'Timers', 'link': '#page=Timers&media=Radio', 'thumbnail': 'img/icons/home/radio.png' }*/
                                    ] }
                            ]
                        })[media]
                    });
                    var recentlyAdded = ({
                        'TV Shows': {
                            method: 'VideoLibrary.GetRecentlyAddedEpisodes',
                            params: { 'properties': ['tvshowid', 'title', 'thumbnail', 'episode', 'season', 'file', 'showtitle'], 'limits': { 'end': 5 } },
                            key: 'episodes',
                            defaultThumbnail: 'img/icons/default/DefaultVideo.png',
                            transformItem: function (item) { return ({
                                link: '#page=Episode&episodeid=' + item.episodeid,
                                label: item.showtitle + ' - ' + item.title,
                                details: ['Season ' + item.season, 'Episode ' + item.episode],
                                actions: [
                                    { label: '▶', link: "javascript: xbmc.Play({ 'episodeid': " + item.episodeid + " }, 1)" }
                                ]
                            }); }
                        },
                        'Movies': {
                            method: 'VideoLibrary.GetRecentlyAddedMovies',
                            params: { "properties": ["title", "originaltitle", "runtime", "year", "thumbnail"], 'limits': { 'end': 5 } },
                            key: 'movies',
                            defaultThumbnail: 'img/icons/default/DefaultVideo.png',
                            transformItem: function (item) { return ({
                                link: '#page=Movie&movieid=' + item.movieid,
                                label: item.title + (item.originaltitle && item.originaltitle != item.title ? ' [' + item.originaltitle + ']' : ''),
                                details: ['(' + item.year + ')', util_1.seconds2string(item.runtime)],
                                actions: [
                                    { label: '▶', link: "javascript: xbmc.Play({ 'movieid': " + item.movieid + " }, 1)" }
                                ]
                            }); }
                        },
                        'Music Videos': {
                            method: 'VideoLibrary.GetRecentlyAddedMusicVideos',
                            params: { "properties": ["title", "runtime", "album", "artist", "year", "thumbnail"], 'limits': { 'end': 5 } },
                            key: 'musicvideos',
                            defaultThumbnail: 'img/icons/default/DefaultVideo.png',
                            transformItem: function (item) { return ({
                                link: '#page=Music Video&musicvideoid=' + item.musicvideoid,
                                label: item.artist + ' - ' + item.title,
                                details: [item.album + ' (' + item.year + ')', util_1.seconds2string(item.runtime)],
                                actions: [
                                    { label: '▶', link: "javascript: xbmc.Play({ 'musicvideoid': " + item.musicvideoid + " }, 1)" }
                                ]
                            }); }
                        },
                    })[media];
                    if (recentlyAdded !== undefined)
                        getPage = getPage.then(function (page) {
                            return xbmc.get({
                                method: recentlyAdded.method,
                                params: recentlyAdded.params
                            })
                                .then(function (result) { return result[recentlyAdded.key] || []; })
                                .then(function (items) { return items.map(function (item) {
                                var out = recentlyAdded.transformItem(item);
                                out.thumbnail = item.thumbnail ? xbmc.vfs2uri(item.thumbnail) : recentlyAdded.defaultThumbnail;
                                return out;
                            }); })
                                .then(function (items) { return ({
                                label: 'Recently Added',
                                items: items
                            }); })
                                .then(function (item) {
                                page.items.push(item);
                                return page;
                            });
                        });
                    //add a list of file sources to the Videos, Music... pages
                    if (m === undefined)
                        return getPage;
                    var getSources = xbmc.get({
                        method: 'Files.GetSources',
                        params: { 'media': m },
                        cache: true
                    })
                        .then(function (result) { return result.sources || []; })
                        .then(function (sources) { return sources.map(function (source) { return ({
                        label: source.label,
                        link: '#page=Directory&root=' + encodeURIComponent(source.file) + '&media=' + m,
                        thumbnail: 'img/icons/default/DefaultFolder.png',
                        thumbnailWidth: '50px'
                    }); }); });
                    return Promise.all([getPage, getSources])
                        .then(function (_a) {
                        var page = _a[0], sources = _a[1];
                        page.items.push({
                            'label': 'Files',
                            'items': sources
                        });
                        return page;
                    });
                }
            })));
        }
    }
});

$__System.register("1e", ["9", "d"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Movie',
                'view': 'list',
                'parent': 'Movies',
                'icon': function (state) { return 'img/icons/default/DefaultVideoCover.png'; },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', 'Movies']]); },
                'data': function (state) {
                    var movieid = +state.get('movieid');
                    return xbmc.get({
                        'method': 'VideoLibrary.GetMovieDetails',
                        'params': {
                            'properties': ['title', 'originaltitle', 'tagline', 'year', 'runtime', 'lastplayed', 'genre', 'writer', 'director', 'plot', 'fanart', 'thumbnail', 'cast'],
                            'movieid': movieid
                        }
                    })
                        .then(function (result) { return result.moviedetails; })
                        .then(function (moviedetails) { return ({
                        title: moviedetails.title + ((moviedetails.originaltitle && moviedetails.originaltitle != moviedetails.title) ? ' [' + moviedetails.originaltitle + ']' : ''),
                        subtitle: moviedetails.tagline,
                        thumbnail: xbmc.vfs2uri(moviedetails.thumbnail),
                        fanart: xbmc.vfs2uri(moviedetails.fanart),
                        details: [
                            { 'name': 'Year', 'value': moviedetails.year },
                            { 'name': 'Runtime', 'value': util_1.seconds2string(moviedetails.runtime) },
                            { 'name': 'Last Played', 'value': moviedetails.lastplayed ? util_1.ymd2string(moviedetails.lastplayed) : undefined },
                            { 'name': 'Director', 'value': moviedetails.director },
                            { 'name': 'Writer', 'value': moviedetails.writer },
                            { 'name': 'Genre', 'value': moviedetails.genre },
                            { 'name': 'Plot', 'value': moviedetails.plot }
                        ],
                        actions: [
                            { label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: "javascript:(() => { xbmc.Play({ 'movieid': " + moviedetails.movieid + " }, 1) })()"
                            },
                            { label: 'Add to Playlist',
                                thumbnail: 'img/buttons/add.png',
                                link: "javascript:(() => { xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'movieid': " + moviedetails.movieid + " } }) })()"
                            }
                        ],
                        items: [
                            { label: 'Cast',
                                items: moviedetails.cast.map(function (actor) { return ({
                                    label: actor.name,
                                    details: actor.role,
                                    thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
                                    link: '#page=Movies&actor=' + actor.name
                                }); })
                            }
                        ]
                    }); });
                }
            })));
        }
    }
});

$__System.register("1f", ["9", "d"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Movies',
                'view': 'list',
                'groupby': 'year',
                'icon': function (state) {
                    return state.get('group') === 'actor' || state.get('actor') ? 'img/icons/default/DefaultActor.png' :
                        state.get('group') === 'year' || state.get('year') ? 'img/icons/default/DefaultMovieYears.png' :
                            state.get('group') === 'genre' || state.get('genre') ? 'img/icons/default/DefaultGenre.png' :
                                'img/icons/default/DefaultMovieTitle.png';
                },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', 'Movies']]); },
                'data': function (state) {
                    var filter = xbmc.makeFilter([
                        { name: 'Genre', key: 'genre', type: String },
                        { name: 'Actor', key: 'actor', type: String }
                    ]);
                    var group = state.get('group') || this.groupby;
                    return xbmc.get({
                        method: 'VideoLibrary.GetMovies',
                        params: {
                            'properties': ['title', 'originaltitle', 'runtime', 'year', 'thumbnail', 'file', 'genre'],
                            'sort': { method: 'sorttitle', ignorearticle: true },
                            'filter': (filter || {}).filter
                        },
                        cache: true
                    })
                        .then(function (result) { return ({
                        pageName: 'Movies' + (filter ? ' by ' + filter.name :
                            group ? ' by ' + group :
                                ''),
                        title: filter ? '' + filter.value : undefined,
                        items: (result.movies || []).map(function (movie, i) {
                            movie.details = [];
                            if (movie.runtime)
                                movie.details.push(util_1.seconds2string(movie.runtime));
                            return {
                                label: (movie.title || movie.label || '') +
                                    (movie.originaltitle && movie.originaltitle != movie.title ? ' [' + movie.originaltitle + ']' : ''),
                                year: movie.year,
                                link: '#page=Movie&movieid=' + movie.movieid,
                                alpha: movie.label[0].toUpperCase(),
                                thumbnail: movie.thumbnail ? xbmc.vfs2uri(movie.thumbnail) : 'img/icons/default/DefaultVideo.png',
                                actions: [
                                    { label: '▶', link: "javascript: xbmc.Play({ 'movieid': " + movie.movieid + " }, 1)" }
                                ]
                            };
                        })
                    }); });
                }
            })));
        }
    }
});

$__System.register("20", ["9", "d"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Music Video',
                'view': 'list',
                'parent': 'Music Videos',
                'icon': function (state) { return 'img/icons/default/DefaultVideo.png'; },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', 'Music Videos']]); },
                'data': function (state) {
                    var musicvideoid = +state.get('musicvideoid');
                    return xbmc.get({
                        'method': 'VideoLibrary.GetMusicVideoDetails',
                        'params': {
                            'properties': ["title", "playcount", "runtime", "director", "studio", "year", "plot", "album",
                                "artist", "genre", "track", "lastplayed", "fanart", "thumbnail"],
                            'musicvideoid': musicvideoid
                        }
                    })
                        .then(function (result) { return result.musicvideodetails || {}; })
                        .then(function (details) { return ({
                        title: details.artist + ' - ' + details.title,
                        subtitle: details.album + (details.year ? ' (' + details.year + ')' : ''),
                        thumbnail: xbmc.vfs2uri(details.thumbnail),
                        fanart: xbmc.vfs2uri(details.fanart),
                        details: [
                            { 'name': 'Track', 'value': details.track > 0 ? details.track : undefined },
                            { 'name': 'Runtime', 'value': details.runtime ? util_1.seconds2string(details.runtime) : undefined },
                            { 'name': 'Last Played', 'value': details.lastplayed ? util_1.ymd2string(details.lastplayed) : undefined },
                            { 'name': 'Director', 'value': details.director },
                            { 'name': 'Studio', 'value': details.studio },
                            { 'name': 'Genre', 'value': details.genre },
                            { 'name': 'Plot', 'value': details.plot }
                        ],
                        actions: [
                            { label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: "javascript:(() => { xbmc.Play({ 'musicvideoid': " + details.musicvideoid + " }, 1) })()"
                            },
                            { label: 'Add to Playlist',
                                thumbnail: 'img/buttons/add.png',
                                link: "javascript:(() => { xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'musicvideoid': " + details.musicvideoid + " } }) })()"
                            }
                        ]
                    }); });
                }
            })));
        }
    }
});

$__System.register("21", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Music Videos',
                'view': 'list',
                'groupby': 'artist',
                'icon': function (state) {
                    return state.get('group') === 'year' ? 'img/icons/default/DefaultYear.png' :
                        state.get('group') === 'genre' ? 'img/icons/default/DefaultGenre.png' :
                            'img/icons/default/DefaultMusicArtists.png';
                },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', 'Music Videos']]); },
                'data': function (state) {
                    var groupby = state.get('group') || this.groupby;
                    return xbmc.get({
                        'params': {
                            'properties': ['title', 'genre', 'runtime', 'year', 'album', 'artist', 'track', 'thumbnail', 'file']
                        },
                        'method': 'VideoLibrary.GetMusicVideos',
                        'cache': true
                    })
                        .then(function (result) { return ({
                        pageName: 'Music Videos by ' + groupby,
                        items: (result.musicvideos || []).map(function (mv) { return ({
                            artist: (mv.artist instanceof Array ? mv.artist : [mv.artist]).join(', '),
                            label: mv.title,
                            details: (mv.album ? mv.album + (mv.year ? ' (' + mv.year + ')' : '') : ''),
                            thumbnail: mv.thumbnail ? xbmc.vfs2uri(mv.thumbnail) : undefined,
                            play: function () { xbmc.Open({ 'item': { 'file': xbmc.vfs2uri(mv.file) } }); },
                            year: mv.year,
                            genre: mv.genre,
                            link: '#page=Music Video&musicvideoid=' + mv.musicvideoid
                        }); })
                    }); });
                }
            })));
        }
    }
});

$__System.register("22", ["9", "d"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'Playlists',
                'view': 'list',
                'icon': function (state) { return 'img/icons/home/playlists.png'; },
                'parentState': function (state) { return new Map([['page', 'Home']]); },
                'data': function (state) {
                    return xbmc.get({
                        'method': 'Playlist.GetPlaylists'
                    })
                        .then(function (playlists) { return playlists.map(function (playlist) {
                        var label = playlist.playlistid + (playlist.type ? ': ' + playlist.type : '');
                        return xbmc.get({
                            'method': 'Playlist.GetItems',
                            'params': {
                                'properties': ['title', 'showtitle', 'artist', 'season', 'episode', 'file', 'thumbnail', 'runtime', 'duration'],
                                'playlistid': playlist.playlistid
                            }
                        })
                            .then(function (result) { return ({
                            label: label,
                            items: (result.items || []).map(function (item, i) {
                                item.details = '';
                                if (item.file)
                                    item.label = item.file.split('/')[--item.file.split('/').length];
                                //if (player.playlistid === playlistid && player.position === i) item.playing = true //TODO: get the item that's currently playing
                                item.thumbnail = item.thumbnail ? xbmc.vfs2uri(item.thumbnail) : 'img/icons/default/DefaultVideo.png';
                                if (item.runtime)
                                    item.details = util_1.seconds2string(item.runtime);
                                if (item.duration)
                                    item.details = util_1.seconds2string(item.duration);
                                if (!item.playing) {
                                    item.actions = [
                                        {
                                            label: '▶',
                                            link: "javascript: \n\t\t\t\t\t\t\t\t\txbmc.get({\n\t\t\t\t\t\t\t\t\t\t'method': 'Player.Open',\n\t\t\t\t\t\t\t\t\t\t'params': { 'item': { 'playlistid': " + playlist.playlistid + ", 'position': " + i + " } }\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t.then(pages.renderPage)"
                                        },
                                        {
                                            label: '-',
                                            link: "javascript: \n\t\t\t\t\t\t\t\t\txbmc.get({\n\t\t\t\t\t\t\t\t\t\t'method': 'Playlist.Remove',\n\t\t\t\t\t\t\t\t\t\t'params': { 'playlistid': " + playlist.playlistid + ", 'position': " + i + " }\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t.then(pages.renderPage)"
                                        }
                                    ];
                                }
                                return item;
                            })
                        }); });
                    }); }).
                        then(function (playlistItems) { return Promise.all(playlistItems); }).
                        then(function (playlists) { return ({
                        items: playlists
                    }); });
                }
            })));
        }
    }
});

$__System.register("d", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    /* Various useful functions */
    // Promise that resolves when the DOM is loaded
    function ready() {
        // Credit to Jake Archibald
        // https://github.com/jakearchibald/svgomg/blob/master/src/js/page/utils.js#L7
        return new Promise(function (resolve, reject) {
            function checkState() {
                if (document.readyState !== 'loading')
                    resolve();
            }
            document.addEventListener('readystatechange', checkState);
            checkState();
        });
    }
    exports_1("ready", ready);
    function minutes2string(t) {
        var hours = Math.floor(t / 60), mins = Math.floor(t % 60), out = [];
        if (hours > 0)
            out.push(hours + ' hour' + (hours > 1 ? 's' : ''));
        if (mins > 0)
            out.push(mins + ' minute' + (mins > 1 ? 's' : ''));
        return out.join(' ');
    }
    exports_1("minutes2string", minutes2string);
    function seconds2string(t) {
        return minutes2string(Math.round(t / 60));
    }
    exports_1("seconds2string", seconds2string);
    function seconds2shortstring(t) {
        function str(n) {
            return (n < 10 && n > -10 ? '0' : '') + Math.floor(n);
        }
        if (t > 3600)
            return str(t / 3600) + ':' + str((t % 3600) / 60) + ':' + str(t % 60);
        else
            return str(t / 60) + ':' + str(t % 60);
    }
    exports_1("seconds2shortstring", seconds2shortstring);
    function ymd2string(ymd) {
        var x = ymd.split(' ')[0].split('-');
        return [
            ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][x[1] - 1],
            +x[2] + ((/1[1-3]$/).test(x[2]) ? 'th' : (/1$/).test(x[2]) ? 'st' : (/2$/).test(x[2]) ? 'nd' : (/3$/).test(x[2]) ? 'rd' : 'th') + ',',
            x[0]
        ].join(' ');
    }
    exports_1("ymd2string", ymd2string);
    return {
        setters:[],
        execute: function() {
        }
    }
});

$__System.register("23", ["9", "d"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            },
            function (util_1_1) {
                util_1 = util_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'TV Show',
                'view': 'list',
                'parent': 'TV Shows',
                'groupby': 'season',
                'sortgroup': 'season',
                'icon': function (state) { return 'img/icons/default/DefaultTVShowTitle.png'; },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', 'TV Shows']]); },
                'data': function (state) {
                    var tvshowid = +state.get('tvshowid');
                    var getShowDetails = xbmc.get({
                        'method': 'VideoLibrary.GetTVShowDetails',
                        'params': {
                            'properties': ['title', 'art', 'thumbnail'],
                            'tvshowid': tvshowid
                        },
                        cache: true
                    })
                        .then(function (data) { return data.tvshowdetails || {}; })
                        .then(function (details) { return ({
                        title: details.title,
                        banner: details.art && details.art.banner ? xbmc.vfs2uri(details.art.banner) : undefined,
                    }); })
                        .then(function (details) {
                        if (details.art)
                            details.banner = xbmc.vfs2uri(details.art.banner);
                        delete details.thumbnail;
                        return details;
                    });
                    var getEpisodes = xbmc.get({
                        method: 'VideoLibrary.GetEpisodes',
                        params: {
                            'properties': ['tvshowid', 'title', 'thumbnail', 'episode', 'season', 'runtime', 'lastplayed'],
                            'tvshowid': tvshowid
                        },
                        cache: true
                    })
                        .then(function (result) { return result.episodes || {}; })
                        .then(function (episodes) { return episodes.map(function (episode) { return ({
                        link: '#page=Episode&episodeid=' + episode.episodeid,
                        label: episode.title || '',
                        thumbnail: episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : 'img/icons/default/DefaultVideo.png',
                        season: 'Season ' + episode.season,
                        thumbnailWidth: '89px',
                        details: [util_1.seconds2string(episode.runtime), episode.lastplayed ? 'Last played ' + util_1.ymd2string(episode.lastplayed) : undefined],
                        number: episode.episode,
                        actions: [
                            { label: '▶', link: "javascript: xbmc.Play({ 'episodeid': " + episode.episodeid + " }, 1)" }
                        ]
                    }); }); });
                    return Promise.all([getShowDetails, getEpisodes])
                        .then(function (_a) {
                        var page = _a[0], items = _a[1];
                        page.items = items;
                        return page;
                    });
                }
            })));
        }
    }
});

$__System.register("9", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var default_1;
    return {
        setters:[],
        execute: function() {
            default_1 = (function () {
                function default_1(obj) {
                    //copy obj.* to this.*
                    for (var attr in obj)
                        if (obj.hasOwnProperty(attr))
                            this[attr] = obj[attr];
                }
                default_1.prototype.crumbs = function (state, pages) {
                    if (this.parentState === undefined)
                        return [];
                    var parentState = this.parentState(state);
                    var parentPage = pages.getById(parentState.get('page'));
                    var crumbs = parentPage.crumbs(parentState, pages);
                    if (parentPage.icon)
                        crumbs.push({
                            'label': parentPage['id'],
                            'icon': parentPage.icon(parentState),
                            'link': hashMapToURL(parentState)
                        });
                    return crumbs;
                };
                default_1.prototype.render = function (state, pages) {
                    var _this = this;
                    var $loading = document.getElementById('loading');
                    $loading.className = '';
                    var page = this;
                    return page.data(state) //get the page data
                        .then(function (data) {
                        data.crumbs = page.crumbs(state, pages);
                        data.crumbs.push({
                            'icon': page.icon ? page.icon(state) : undefined,
                            'label': data.pageName || page.name || page.id,
                            'link': hashMapToURL(state)
                        });
                        return data;
                    })
                        .then(function (data) {
                        //sort and group the data
                        //TODO: review and probably rewrite
                        function groupItems(items, groupby) {
                            var o = [], temp = {};
                            if (!(items[0] && items[0][groupby]))
                                return items;
                            items.forEach(function (item, i) {
                                var s = item[groupby];
                                if (item instanceof Object) {
                                    if (!temp[s])
                                        temp[s] = [];
                                    temp[s].push(item);
                                }
                            });
                            Object.getOwnPropertyNames(temp).forEach(function (label) {
                                o.unshift({
                                    'label': label,
                                    'items': temp[label]
                                });
                            });
                            return o;
                        }
                        function sortItems(items, sortby) {
                            if (!(items[0] && items[0][sortby]))
                                return items;
                            return items.sort(function (a, b) {
                                var x = a[sortby], y = b[sortby];
                                if (x < y)
                                    return -1;
                                if (x > y)
                                    return +1;
                                return 0;
                            });
                        }
                        //if (state.get('sort') || this.sortby) data.items = sortItems(data.items, state.get('sort') || this.sortby)
                        var groupbyKey = state.get('group') || _this.groupby;
                        var groupbyValue = state.get(groupbyKey);
                        if (groupbyKey) {
                            var size = data.items.length;
                            var showItems = !(!groupbyValue && size > advancedSettings.pages.groupingThreshold);
                            //sort and group the items
                            data.items = sortItems(groupItems(data.items, groupbyKey), 'label');
                            //create groups
                            if (size > advancedSettings.pages.groupingThreshold)
                                data.groups = data.items.map(function (x) {
                                    var s = new Map(state);
                                    s.set(groupbyKey, x.label);
                                    return {
                                        'label': x.label,
                                        'link': hashMapToURL(s),
                                        'selected': x.label === groupbyValue
                                    };
                                });
                            //filter
                            if (groupbyValue)
                                data.items = data.items.filter(function (x) { return x.label === groupbyValue; });
                            //don't show the full list
                            if (!showItems)
                                data.items = undefined;
                            if (showItems && data.groups && data.groups.length > 40)
                                data.groups = [];
                        }
                        return data;
                    })
                        .catch(function (error) {
                        console.error(error);
                        return {
                            title: 'Error getting page data',
                            subtitle: error.message || '',
                            pageName: ':('
                        };
                    })
                        .then(function (data) {
                        //render the data to the DOM via the template
                        data.id = _this.id;
                        document.title = 'Hax//' + (data.title ? data.title : 'Kodi');
                        var $page = document.createElement('div');
                        $page.setAttribute('class', 'page');
                        //copy key/value pairs from the URL to the data- attributes of the $page
                        state.forEach(function (value, key) { return $page.setAttribute('data-' + key, value); });
                        $page.setAttribute('data-page', _this.id); //make sure the home page has a data-page attribute
                        $page.innerHTML = templates[state.get('view') || _this.view](data);
                        var $content = document.getElementById('content');
                        while ($content.firstChild)
                            $content.removeChild($content.firstChild); // $content.removeAllChildElements()
                        var $loading = document.getElementById('loading');
                        $loading.className = 'hidden';
                        $content.appendChild($page);
                        $page;
                    });
                };
                return default_1;
            }());
            exports_1("default", default_1);
        }
    }
});

$__System.register("24", ["9"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters:[
            function (page_1_1) {
                page_1 = page_1_1;
            }],
        execute: function() {
            exports_1("default",(new page_1.default({
                'id': 'TV Shows',
                'view': 'list',
                'groupby': 'title',
                'icon': function (state) {
                    return state.get('group') === 'actor' || state.get('actor') ? 'img/icons/default/DefaultActor.png' :
                        state.get('group') === 'year' || state.get('year') ? 'img/icons/default/DefaultYear.png' :
                            state.get('group') === 'genre' || state.get('genre') ? 'img/icons/default/DefaultGenre.png' :
                                'img/icons/default/DefaultTVShows.png';
                },
                'parentState': function (state) { return new Map([['page', 'Menu'], ['media', 'TV Shows']]); },
                'data': function (state) {
                    var filter = xbmc.makeFilter([
                        { name: 'Genre', key: 'genre', type: String },
                        { name: 'Year', key: 'year', type: Number },
                        { name: 'Actor', key: 'actor', type: String }
                    ]);
                    var group = state.get('group') || this.groupby;
                    return xbmc.get({
                        method: 'VideoLibrary.GetTVShows',
                        params: {
                            'properties': ['title', 'originaltitle', 'sorttitle', 'thumbnail', 'episode'],
                            'filter': (filter || {}).filter
                        },
                        cache: true
                    })
                        .then(function (result) { return result.tvshows || []; })
                        .then(function (tvshows) { return tvshows.map(function (tvshow) { return ({
                        label: tvshow.title + (tvshow.originaltitle && tvshow.originaltitle != tvshow.title ? ' [' + tvshow.originaltitle + ']' : ''),
                        details: [tvshow.episode + ' episodes'],
                        link: '#page=TV Show&tvshowid=' + tvshow.tvshowid,
                        thumbnail: tvshow.thumbnail ? xbmc.vfs2uri(tvshow.thumbnail) : 'img/icons/default/DefaultVideo.png',
                        title: (tvshow.sorttitle || tvshow.title || tvshow.originaltitle)[0].toUpperCase()
                    }); }); })
                        .then(function (items) { return ({
                        pageName: 'TV Shows' + (filter ? ' by ' + filter.name :
                            group ? ' by ' + group :
                                ''),
                        title: filter ? '' + filter.value : undefined,
                        items: items
                    }); });
                }
            })));
        }
    }
});

$__System.register("25", ["8", "a", "b", "c", "e", "f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var actors_js_1, addon_js_1, addons_js_1, album_js_1, albums_js_1, artist_js_1, artists_js_1, broadcast_js_1, channelgroup_js_1, channel_js_1, channels_js_1, directory_js_1, episode_js_1, files_js_1, genres_js_1, guide_js_1, home_js_1, menu_js_1, movie_js_1, movies_js_1, musicvideo_js_1, musicvideos_js_1, playlists_js_1, tvshow_js_1, tvshows_js_1;
    var pages;
    return {
        setters:[
            function (actors_js_1_1) {
                actors_js_1 = actors_js_1_1;
            },
            function (addon_js_1_1) {
                addon_js_1 = addon_js_1_1;
            },
            function (addons_js_1_1) {
                addons_js_1 = addons_js_1_1;
            },
            function (album_js_1_1) {
                album_js_1 = album_js_1_1;
            },
            function (albums_js_1_1) {
                albums_js_1 = albums_js_1_1;
            },
            function (artist_js_1_1) {
                artist_js_1 = artist_js_1_1;
            },
            function (artists_js_1_1) {
                artists_js_1 = artists_js_1_1;
            },
            function (broadcast_js_1_1) {
                broadcast_js_1 = broadcast_js_1_1;
            },
            function (channelgroup_js_1_1) {
                channelgroup_js_1 = channelgroup_js_1_1;
            },
            function (channel_js_1_1) {
                channel_js_1 = channel_js_1_1;
            },
            function (channels_js_1_1) {
                channels_js_1 = channels_js_1_1;
            },
            function (directory_js_1_1) {
                directory_js_1 = directory_js_1_1;
            },
            function (episode_js_1_1) {
                episode_js_1 = episode_js_1_1;
            },
            function (files_js_1_1) {
                files_js_1 = files_js_1_1;
            },
            function (genres_js_1_1) {
                genres_js_1 = genres_js_1_1;
            },
            function (guide_js_1_1) {
                guide_js_1 = guide_js_1_1;
            },
            function (home_js_1_1) {
                home_js_1 = home_js_1_1;
            },
            function (menu_js_1_1) {
                menu_js_1 = menu_js_1_1;
            },
            function (movie_js_1_1) {
                movie_js_1 = movie_js_1_1;
            },
            function (movies_js_1_1) {
                movies_js_1 = movies_js_1_1;
            },
            function (musicvideo_js_1_1) {
                musicvideo_js_1 = musicvideo_js_1_1;
            },
            function (musicvideos_js_1_1) {
                musicvideos_js_1 = musicvideos_js_1_1;
            },
            function (playlists_js_1_1) {
                playlists_js_1 = playlists_js_1_1;
            },
            function (tvshow_js_1_1) {
                tvshow_js_1 = tvshow_js_1_1;
            },
            function (tvshows_js_1_1) {
                tvshows_js_1 = tvshows_js_1_1;
            }],
        execute: function() {
            pages = [
                actors_js_1.default,
                addon_js_1.default,
                addons_js_1.default,
                album_js_1.default,
                albums_js_1.default,
                artist_js_1.default,
                artists_js_1.default,
                broadcast_js_1.default,
                channelgroup_js_1.default,
                channel_js_1.default,
                channels_js_1.default,
                directory_js_1.default,
                episode_js_1.default,
                files_js_1.default,
                genres_js_1.default,
                guide_js_1.default,
                home_js_1.default,
                menu_js_1.default,
                movie_js_1.default,
                movies_js_1.default,
                musicvideo_js_1.default,
                musicvideos_js_1.default,
                playlists_js_1.default,
                tvshow_js_1.default,
                tvshows_js_1.default
            ];
            exports_1("default",pages);
        }
    }
});

$__System.register("26", ["7", "25"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pages_1, loadAll_js_1;
    return {
        setters:[
            function (pages_1_1) {
                pages_1 = pages_1_1;
            },
            function (loadAll_js_1_1) {
                loadAll_js_1 = loadAll_js_1_1;
            }],
        execute: function() {
            loadAll_js_1.default.forEach(function (page) { return pages_1.default.add(page); });
            exports_1("default",pages_1.default);
        }
    }
});

$__System.register("27", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function default_1(update) {
        var requestAnimationFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (c) { window.setTimeout(c, 100); }, start, end, paused, duration, position = function () {
            var now = (new Date()).getTime();
            return !start || !end || !duration ? 0 :
                paused ? (paused - start) / duration :
                    now <= end ? (now - start) / duration : 0;
        }, timer = function () {
            var pos = position(), d = duration / 1e3 || 0;
            update(pos, Math.floor(pos * d), Math.floor(d));
            requestAnimationFrame(timer);
        }, pub = {
            start: function (totaltime, time) {
                if (totaltime)
                    pub.update(totaltime, time);
                else
                    pub.unpause();
            },
            pause: function () {
                if (!paused) {
                    var now = (new Date()).getTime();
                    if (now < end)
                        paused = now;
                }
            },
            unpause: function () {
                if (paused) {
                    var now = (new Date()).getTime();
                    start += now - paused;
                    end += now - paused;
                    paused = undefined;
                }
            },
            stop: function () {
                //var now = (new Date()).getTime();
                start = undefined;
                end = undefined;
                paused = undefined;
                duration = undefined;
            },
            getTotaltime: function () {
                return duration / 1e3;
            },
            update: function (totaltime, time) {
                var now = (new Date()).getTime();
                var pause = paused - start;
                if (totaltime > 0)
                    duration = (totaltime * 1e3);
                if (now >= end || totaltime > 0) {
                    start = now - ((time || 0) * 1e3);
                    end = start + duration;
                    paused = start + pause;
                }
                //if (totaltime !== duration/1e3) pub.unpause();
            },
            updateFraction: function (fraction) {
                var d = duration / 1e3;
                pub.update(d, d * fraction);
            },
            offset: function (d) {
                var diff = d * 1e3;
                start += diff;
                end += diff;
            }
        };
        timer();
        return pub;
    }
    exports_1("default", default_1);
    return {
        setters:[],
        execute: function() {
            ;
        }
    }
});

$__System.register("28", ["27"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var progress_1;
    return {
        setters:[
            function (progress_1_1) {
                progress_1 = progress_1_1;
            }],
        execute: function() {
            exports_1("default",(function () {
                "use strict";
                var progress = undefined;
                function timeObjToSeconds(o) {
                    return ((((o.hours * 60) + o.minutes) * 60) + o.seconds) + (o.milliseconds / 1e3);
                }
                function seconds2string(t) {
                    var str = function (n) {
                        return (n < 10 && n > -10 ? '0' : '') + Math.floor(n);
                    };
                    if (t > 3600)
                        return str(t / 3600) + ':' + str((t % 3600) / 60) + ':' + str(t % 60);
                    else
                        return str(t / 60) + ':' + str(t % 60);
                }
                function renderPlayer(player) {
                    var slider, volume, data;
                    function makeButton(o) {
                        return {
                            'label': o.text,
                            'class': o.action,
                            'link': "javascript: (() => { xbmc.get({ 'method': 'Input.ExecuteAction', 'params': { 'action': '" + o.action + "' } }) } )()"
                        };
                    }
                    //construct data
                    data = {
                        'buttons': ([
                            { 'text': 'Previous', 'action': 'skipprevious' },
                            { 'text': 'Play / Pause', 'action': 'playpause' },
                            { 'text': 'Stop', 'action': 'stop' },
                            { 'text': 'Next', 'action': 'skipnext' }
                        ]).map(makeButton),
                        'navbuttons': ([
                            { 'text': 'Up', 'action': 'up' },
                            { 'text': 'Down', 'action': 'down' },
                            { 'text': 'Left', 'action': 'left' },
                            { 'text': 'Right', 'action': 'right' },
                            { 'text': 'Select', 'action': 'select' },
                            { 'text': 'Back', 'action': 'back' },
                            { 'text': 'Information', 'action': 'info' },
                            //{ 'text': 'Menu',			'action':'contextmenu' },
                            { 'text': 'Home', 'action': 'previousmenu' }
                        ]).map(makeButton),
                        'rightbuttons': ([
                            //{ 'text': 'Mute',			'action':'mute' },
                            { 'text': 'Volume Up', 'action': 'volumeup' },
                            { 'text': 'Volume Down', 'action': 'volumedown' }
                        ]).map(makeButton),
                        'hideNavigation': true
                    };
                    data.navbuttons.push({
                        'label': 'Menu',
                        'class': 'contextmenu',
                        'link': "javascript: (() => { xbmc.get({method: 'GUI.GetProperties', params: { properties: [ 'fullscreen' ] }}).then(result => xbmc.sendMessage('Input.ExecuteAction', { action: result.fullscreen ? 'osd' : 'contextmenu' })) })()"
                    });
                    //render the data to the DOM via the player template
                    while (player.firstChild)
                        player.removeChild(player.firstChild); //remove child elements
                    player.innerHTML = templates.player(data);
                    //make the progress bar work
                    var oldString;
                    var progressElem = document.getElementById('progress');
                    var statusElem = progressElem.querySelector('.status');
                    var timeElem = progressElem.querySelector('.time');
                    var barElem = progressElem.querySelector('.bar');
                    var backgroundElem = progressElem.querySelector('.background');
                    progress = progress_1.default(function (position, time, duration) {
                        var value = Math.round(position * 10000);
                        var string = seconds2string(time) + '/' + seconds2string(duration);
                        if (string !== oldString) {
                            timeElem.innerHTML = string;
                            barElem.setAttribute('style', 'width: ' + (value / 100) + '%;');
                        }
                        oldString = string;
                    });
                    progressElem.addEventListener('mouseup', function (e) {
                        var boundingRect = backgroundElem.getBoundingClientRect();
                        var value = (e.pageX - boundingRect.left) / boundingRect.width;
                        if (value > 1)
                            value = 1;
                        if (value < 0)
                            value = 0;
                        value = Math.round(value * 100);
                        //update the local progress bar
                        progress.updateFraction(value / 100);
                        //send the command to kodi
                        xbmc.Seek({ 'value': value });
                    });
                    //toggle the player.visible class when the player.show button is clicked
                    player.querySelector('.show').addEventListener('click', function () {
                        player.className = player.className ? '' : 'minimize';
                    }, false);
                }
                var onNotification = {
                    'Player.OnPlay': function (data) {
                        document.body.setAttribute('data-status', 'playing');
                        xbmc.get({
                            'method': 'Player.GetProperties',
                            'params': {
                                'properties': ['time', 'totaltime', 'speed', 'playlistid', 'position', 'repeat', 'type', 'partymode', 'shuffled', 'live'],
                                'playerid': data.data.player.playerid
                            }
                        })
                            .then(function (player) {
                            progress.start(timeObjToSeconds(player.totaltime), timeObjToSeconds(player.time));
                        });
                    },
                    'Player.OnPause': function (data) {
                        document.body.setAttribute('data-status', 'paused');
                        progress.pause();
                    },
                    'Player.OnStop': function (data) {
                        document.body.setAttribute('data-status', 'stopped');
                        progress.stop();
                    },
                    'Player.OnSeek': function (data) {
                        var player = data.data.player;
                        progress.update(progress.getTotaltime(), timeObjToSeconds(player.time));
                    }
                };
                var playerStatus = 'stopped';
                function tick() {
                    var progressElem = document.getElementById('progress');
                    var statusElem = progressElem.querySelector('.status');
                    var player = {};
                    new Promise(function (resolve, reject) {
                        var cancel = false;
                        xbmc.GetActivePlayerProperties()
                            .then(function (x) { return new Promise(function (resolve) { return window.requestAnimationFrame(function () { return resolve(x); }); }); })
                            .then(function (p) {
                            if (cancel)
                                return;
                            player = p;
                            if (player) {
                                progress.update(timeObjToSeconds(player.totaltime), timeObjToSeconds(player.time));
                                if (player.speed > 0) {
                                    if (playerStatus !== 'playing') {
                                        progress.unpause();
                                        playerStatus = 'playing';
                                        document.body.setAttribute('data-status', 'playing');
                                    }
                                }
                                else {
                                    if (playerStatus !== 'paused') {
                                        progress.pause('paused');
                                        playerStatus = 'paused';
                                        document.body.setAttribute('data-status', 'paused');
                                    }
                                }
                            }
                            else {
                                if (playerStatus !== 'stopped') {
                                    progress.stop();
                                    playerStatus = 'stopped';
                                    document.body.setAttribute('data-status', 'stopped');
                                    statusElem.innerHTML = '';
                                }
                            }
                            window.setTimeout(resolve, 1e3);
                        });
                        window.setTimeout(resolve, 3e3);
                    })
                        .then(function () { return new Promise(function (resolve, reject) {
                        var cancel = false;
                        if (player && player.playlistid !== undefined && player.position !== undefined) {
                            xbmc.get({
                                'method': 'Playlist.GetItems',
                                'params': {
                                    'properties': ['title', 'art', 'tagline', 'showtitle', 'album', 'artist', 'season', 'episode', 'file', 'thumbnail', 'runtime', 'duration'],
                                    'playlistid': player.playlistid
                                }
                            })
                                .then(function (x) { return new Promise(function (resolve) { return window.requestAnimationFrame(function () { return resolve(x); }); }); })
                                .then(function (playlist) {
                                if (!playlist.items)
                                    return;
                                var item = playlist.items[player.position];
                                if (item) {
                                    statusElem.innerHTML = '' +
                                        (item.showtitle ? item.showtitle + ' ' : '') +
                                        (item.season >= 0 ? item.episode >= 0 && item.season + 'x' + item.episode + ' ' : '') +
                                        (item.artist && item.artist.length ? item.artist.join(', ') + ' - ' + (item.album || '') : '') +
                                        (item.label || item.title || item.file);
                                }
                                else
                                    statusElem.innerHTML = '';
                                window.setTimeout(resolve, 1e3);
                            });
                        }
                        else {
                            resolve();
                        }
                        window.setTimeout(resolve, 3e3);
                    }); })
                        .catch(tick)
                        .then(tick);
                }
                function init() {
                    //render the player
                    renderPlayer(document.querySelector('#player'));
                    //start polling
                    tick();
                    //bind event handlers to the xbmc websocket api
                    Object.getOwnPropertyNames(onNotification).forEach(function (name) { return xbmc.onNotification(name, onNotification[name]); });
                    return this;
                }
                return {
                    init: init
                };
            })());
        }
    }
});

$__System.register("1", ["d", "3", "5", "26", "28"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var util_1, xbmc_1, handlebars_1, loadPages_1, player_1;
    return {
        setters:[
            function (util_1_1) {
                util_1 = util_1_1;
            },
            function (xbmc_1_1) {
                xbmc_1 = xbmc_1_1;
            },
            function (handlebars_1_1) {
                handlebars_1 = handlebars_1_1;
            },
            function (loadPages_1_1) {
                loadPages_1 = loadPages_1_1;
            },
            function (player_1_1) {
                player_1 = player_1_1;
            }],
        execute: function() {
            util_1.ready().then(function () {
                "use strict";
                var global = window;
                var templateDir = 'templates/';
                var templateFiles = [
                    { name: 'listItem', file: templateDir + 'listItem.html' },
                    { name: 'listItems', file: templateDir + 'listItems.html' },
                    { name: 'list', file: templateDir + 'list.html' },
                    { name: 'player', file: templateDir + 'player.html' }
                ];
                function error(_a) {
                    var summary = _a.summary, details = _a.details;
                    document.body.innerHTML = "\n\t\t\t<h1>:(</h1>\n\t\t\t<h2>" + (summary || 'Error') + "</h2>\n\t\t\t" + details.map(function (text) { return ("<p>" + text + "</p>"); }).join('') + "\n\t\t";
                }
                function createSkeleton() {
                    document.body.innerHTML = "\n\t\t\t<div id=loading><span><img alt=\"Loading\" src=\"img/busy.png\" class=\"spin\"></span></div>\n\t\t\t<div id=main>\n\t\t\t\t<div id=content></div>\n\t\t\t\t<div id=player class=minimize></div>\n\t\t\t</div>\n\t\t";
                }
                var connectToKodi = xbmc_1.default(window.location.host)
                    .catch(function (e) { return error({ details: ['Could not connect to Kodi', e] }); });
                function loadTemplate(templateFile) {
                    return fetch(templateFile.file)
                        .then(function (response) { return response.text(); })
                        .then(function (source) {
                        var template = handlebars_1.default.compile(source);
                        handlebars_1.default.registerPartial(templateFile.name, template);
                        return { name: templateFile.name, template: template };
                    });
                }
                global.templates = {};
                var loadTemplates = Promise.all(templateFiles.map(function (templateFile) { return loadTemplate(templateFile); }))
                    .catch(function (e) { return error({ details: ['Loading template', e] }); })
                    .then(function (templateFiles) {
                    templateFiles.forEach(function (templateFile) {
                        global.templates[templateFile.name] = templateFile.template;
                    });
                    return global.templates;
                });
                Promise.all([connectToKodi, loadTemplates, loadPages_1.default])
                    .then(function (_a) {
                    var kodi = _a[0], templates = _a[1], pages = _a[2];
                    window.xbmc = kodi;
                    createSkeleton();
                    pages.renderPage();
                    player_1.default.init();
                });
            });
        }
    }
});

})
(function(factory) {
  factory();
});
//# sourceMappingURL=build.js.map