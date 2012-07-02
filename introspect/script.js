(function (window, $, undefined) {
	"use strict";
	
	var TAB_WIDTH = 4,
	COMMENTS = {
		'type': function () {
			var str = '';
			if (this.type === undefined) return;
			if (this.type === 'object') return; //objects have curly braces so type doesn't have to be specified here
			if (typeof this.type === 'string') str += this.type;
			if (this['enum'] instanceof Array) {
				str += " ('"+this['enum'].join("', '")+"')"
			}
			return str;
		},
		'required': { 'true': 'required' },
		'id': 'id',
		'uniqueItems': { 'true': 'all items must be unique' },
		'additionalProperties': { 'false': 'no additional properties allowed' },
		'disallow': 'not type',
		'format': 'format',
		'pattern': 'match',
		'divisibleBy': 'divisible by',
		'minimum': 'minimum',
		'maximum': 'maximum',
		'minItems': 'minimum items',
		'maxItems': 'maximum items',
		'minLength': 'minimum length',
		'maxLength': 'maximum length',
		'exclusiveMinimum': 'exclusive minimum',
		'exclusiveMaximum': 'exclusive maximum',
		'dependencies': 'dependencies',
		'description': '',
		//'patternProperties': 'match',
	},
	getData = function (server, callback) {
		var q = Q(), data = {}, output = {};
		q.add(function (c) {
			server.sendMessage('JSONRPC.Permission', function (d) {
				$.extend(data, { 'permissions': d.result });
				c();
			});
		});
		q.add(function (c) {
			var css = '';
			$.each(data.permissions, function (permission, allowed) {
				css += 'div:contains("'+permission+'") { color: #900; }'+"\n";
			});
			$('head').append('<style>'+css+'</style>');
			c();
		});
		q.add(function (c) {
			server.sendMessage('JSONRPC.Introspect', { 'getmetadata': true }, function (d) {
				console.dir(d)
				$.extend(data, d.result);
				c();
			});
		});
		q.add(function (c) { //traverse types and expand references
			var expandType = function (type) {
				if (type['extends'] && !(type['extends'] instanceof Array)) type['extends'] = [type['extends']];
				if (type['extends'] instanceof Array) {
					$.each(type['extends'], function (key, value) {
						var t = expandType(data.types[value]);
						if (t.properties) {
							if (!type.properties) type.properties = {};
							$.extend(type.properties, t.properties);
						}
						if (data.types[value].items) {
							if (!type.items) type.items = {};
							$.extend(type.items, t.items);
						}
					});
					delete type['extends'];
				}
				return type;
			};
			$.each(data.types, function (t, type) {
				expandType(type);
			});
			c();
		});
		q.add(function (c) { //traverse methods/notifications and expand references
			var R = function (d) {
				if (d['$ref']) {
					$.extend(d, data.types[d['$ref']]);
					delete d['$ref'];
				}
				$.each(d, function (key, value) {
					if (value instanceof Array || value instanceof Object) R(value);
				});
			};
			R(data.methods);
			R(data.notifications);
			c();
		});
		q.add(function (c) { //create syntax and results
			var tabs = function (n) {
				return n ? "\n"+Array(n*TAB_WIDTH+1).join(" ") : "\n";
			},
			print = function (p, depth) {
				var out = [], string = '', type = p.type, comments = [], types = [], params = [],
				printProperties = function (items) {
					if (items) $.each(items, function (key, value) {
						out.push("'"+key+"': "+print(value, depth+1));
					});
					return out.join(', '+tabs(depth+1));
				};
				if (!depth) depth = 0;
				//guess type
				if (p.properties) type = 'object';
				if (p.items) type = 'array';
				if (p.enums) type = 'string';
				if (p.params) type = 'message';
				
				$.each(COMMENTS, function (name, description) {
					var property = p[name],
					descriptionIsString = typeof description === 'string',
					descriptionIsObject = description instanceof Object,
					propertyIsString = typeof property === 'string',
					propertyIsArray = property instanceof Array,
					propertyIsBoolean = property instanceof Boolean,
					propertyIsObject = property instanceof Object,
					propertyIsNumber = !isNaN(property-0);
						
					if (description instanceof Function) {
						var o = description.call(p);
						if (o !== undefined) comments.push(o);
						return;
					}
					
					if (property === undefined) return;
					
					if (descriptionIsString && description !== '') description += ': ';
					if (propertyIsString || propertyIsNumber) {
						if (descriptionIsString) comments.push(description+property);
						else if (descriptionIsObject && description[property] !== undefined) comments.push(description[property]);
					}
					else if (descriptionIsString && propertyIsArray) comments.push(description+property.join(', '));
					else if (propertyIsBoolean) {
						if (descriptionIsString && property) comments.push(description);
						else if (descriptionIsObject) {
							if (property && typeof description.true === 'string') comments.push(description.true);
							if (!property && typeof description.false === 'string') comments.push(description.false);
						}
					}
					else if (descriptionIsString && propertyIsObject) {
						var properties = [];
						$.each(property, function (key, value) {
							properties.push(key+': '+value);
						});
						comments.push(description+properties.join(', '));
					}
				});
				if (comments.length) comments = ' /* '+comments.join(', ')+' */';
				else comments = '';
				
				if (type === 'object') types.push('{'+comments+tabs(depth+1)+printProperties(p.properties)+tabs(depth)+'}');
				if (type === 'array') types.push('['+comments+tabs(depth+1)+print(p.items, depth+1)+tabs(depth)+']');
				if (type === 'message') {	
					$.each(p.params, function (i, param) {
						params.push(tabs(depth+1)+"'"+param['name']+"': "+print(param, depth+1));
					});
					types.push('{'+comments+params.join(', ')+tabs(depth)+'}');
				}
				if (type instanceof Array) $.each(type, function (key, value) {
					types.push(print(value, depth));
				});
				if (types.length) return types.join(' or ');
				
				string = p['default'] === undefined ? 'undefined' :
					p['default'] === null ? 'null' :
					typeof p['default'] === 'string' ? "'"+p['default']+"'" :
					p['default'];
				string += comments;
					
				return string;
			},
			//syntaxHighlight = function (str) {
			//	return '<syntaxhighlight lang="javascript">'+tabs(0)+str+tabs(0)+'</syntaxhighlight>'
			//},
			printMethod = function (itemName, item, method) {
				var temp = {}, out = {};
				temp.Syntax = {
					'properties': {
						'jsonrpc': { 'default': '2.0' },
						'method': { 'default': itemName },
						'id': { 'type': 'integer', 'required': true }
					}
				};
				if (item.params instanceof Array && item.params.length) temp.Syntax.properties.params = { 'params': item.params };
				if (item.returns) temp.Returns = {
					'properties': {
						'jsonrpc': { 'default': '2.0' },
						'method': { 'default': itemName },
						'id': { 'type': 'integer', 'required': true },
						'result': item.returns
					}
				};
				out[itemName] = {
					'syntax': print(temp.Syntax),
					'result': print(temp.Returns),
					'permissions': item.permission || 'none',
					'description': item.description || ''
				};
				return out;
			},
			printNotification = function (itemName, item, method) {
				var temp = {}, out = {};
				if (item.params) {
					temp.Returns = {
						'properties': {
							'jsonrpc': { 'default': '2.0' },
							'method': { 'default': itemName }
						}
					};
				}
				if (item.params instanceof Array && item.params.length) temp.Returns.properties.params = { 'params': item.params };
				out[itemName] = {
					'result': print(temp.Returns),
					'permissions': item.permission || 'none',
					'description': item.description || ''
				};
				return out;
			};
			$.each(splitItems(data.notifications), function (namespace, notifications) {
				if (output[namespace] === undefined) output[namespace] = {};
				if (output[namespace].Notifications === undefined) output[namespace].Notifications = {};
				$.each(notifications, function (itemName, item) {
					output[namespace].Notifications[itemName] = printNotification(itemName, item, 'server.sendMessage');
				});
			});
			$.each(splitItems(data.methods), function (namespace, methods) {
				if (output[namespace] === undefined) output[namespace] = {};
				if (output[namespace].Methods === undefined) output[namespace].Methods = {};
				$.each(methods, function (itemName, item) {
					output[namespace].Methods[itemName] = printMethod(itemName, item, 'server.sendMessage');
				});
			});
			c();
		});
		q.onfinish(function () {
			callback({
				'title': data.description,
				'id': data.id,
				'version': data.version,
				'items': output
			});
		});
		q.start();
	},
	splitItems = function (items) {
		var out = {};
		$.each(items, function (itemName, item) {
			var s = itemName.split('.');
			if (!out[s[0]]) out[s[0]] = {};
			out[s[0]][itemName] = item;
			if (item instanceof Object && item.id === undefined) item.id = itemName;
		});
		return out;
	},
	order = [
		'name',
		'description',
		'type',
		'id',
		'permission',
		'syntax',
		'result'
	],
	renderItem = function (itemName, item, out) {
		//if (item === null) return;
		//if (itemName === 'id') return;
		//if (itemName === 'type') return;
		return $('<li></li>').
		  attr('data-title',itemName).
		  append('<div class="title">'+itemName+'</div>').
		  append(renderTree(item)).
		  appendTo(out);
	},
	renderTree = function (d) {
		var $out = $('<ul></ul>');
		if (!(d instanceof Array || d instanceof Object)) {
			$out = $('<div data-type="'+typeof d+'"></div>').text(d);
		}
		else {
			$.each(order, function (i, name) {
				$.each(d, function (itemName, item) {
					if (itemName === name) renderItem(itemName, item, $out);
				});
			});
			$.each(d, function (itemName, item) {
				var visible = true;
				$.each(order, function (i, name) {
					if (itemName === name) visible = false;
				});
				if (visible) renderItem(itemName, item, $out);
			});
		}
		if (d instanceof Array) $out.addClass('array');
		return $out;
	},
	renderData = function (d) {
		$('#output').
		  html('').
		  append(renderTree(d));
		window.scrollTo(0,0);
	},
	renderHeader = function (d) {
		var h = {};
		h[d.title] = {
			'Version': d.version,
			'': d.id
		}
		$('#header').
		  html('').
		  append(renderTree(h));
	},
	renderMenuTree = function (d, depth) {
		var $out = $('<ul></ul>');
		if (!depth) depth = 0;
		if (d instanceof Object) $.each(d, function (i, item) {
			var $item = $('<li></li>'), description = [];
			$item.attr('data-title',i);
			if (depth < 2) {
				$item.append('<div class="title">'+i+'</div>');
				$item.append(renderMenuTree(item,depth+1));
			}
			else {
				if (item instanceof Object) $.each(item, function (o,p) { if (typeof p.description === 'string') description.push(p.description) });
				$item.append('<div class="item" title="'+description.join(', ')+'">'+i+'</div>');
				$item.click(function () {
					$('.selected').toggleClass('selected', false);
					$item.toggleClass('selected', true);
				  	renderData(item);
				});
			}
			$item.appendTo($out);
		});
		return $out;
	},
	renderMenu = function (d) {
		var menus = {}, menu = $('#menu');
		console.dir(d);
		menu.
		  html('').
		  append(renderMenuTree(d));
		
		menu.
		  find('.title').
		  click(function () {
		  	$(this).parent().toggleClass('expanded');
		  }).
		  parent().addClass('collapsible');
		  
		//menu.children().children('.collapsible').toggleClass('expanded', true);
	},
	connect = function (address) {
		var URL = parseURL('/', { 'pathname': 'jsonrpc'/*, 'protocol': 'ws', 'port': 9090*/ });
		window.server = JSONRPC(URL, true);
		getData(window.server, function (d) {
			renderHeader(d);
			renderMenu(d.items);
		});
	};

	$(function () { //when the page has finished loading
		connect(); //try to connect
	});

})(window, jQuery, undefined);

