/*global JsonML */

/* namespace template */
var template;
if ("undefined" === typeof template) {
	template = {};
}

template.list = JsonML.BST(
[
	"",
	" ",
	[
		"header",
		" ",
		[
			"div",
			{
				"class": "crumbs"
			},
			" ",
			function() {
				return JsonML.BST([
				"",
				" ",
				[
					"a",
					{
						href: 
							function() {
	return this.data.link;
},
						"class": "crumb"
					},
					" ",
					[
						"img",
						{
							"jbst:visible": 
								function() {
	return !!this.data.icon;
},
							src: 
								function() {
	return this.data.icon;
},
							alt: 
								function() {
	return this.data.label;
}
						}
					],
					" ",
					[
						"span",
						{
							"jbst:visible": 
								function() {
	return !!this.data.label;
},
							"class": "label"
						},
						function() {
	return this.data.label;
}
					],
					" "
				],
				" "
			]).dataBind(this.data.crumbs, this.index, this.count);
			},
			" "
		],
		" ",
		[
			"a",
			{
				href: "javascript:history.go(-1)",
				"class": "backButton"
			},
			[
				"img",
				{
					src: "img/buttons/icon_back.png",
					height: "32",
					width: "32"
				}
			]
		],
		" "
	],
	" ",
	[
		"img",
		{
			"jbst:visible": 
				function() {
	return !!this.data.thumbnail;
},
			"class": "thumbnail",
			src: 
				function() {
	return this.data.thumbnail;
},
			alt: ""
		}
	],
	" ",
	[
		"h1",
		{
			"jbst:visible": 
				function() {
	return !this.data.banner;
}
		},
		" ",
		function() {
	return this.data.title;
},
		"\n"
	],
	"\n",
	[
		"h1",
		{
			"jbst:visible": 
				function() {
	return !!this.data.banner;
}
		},
		" ",
		[
			"img",
			{
				src: 
					function() {
	return this.data.banner;
},
				alt: 
					function() {
	return this.data.title;
},
				title: 
					function() {
	return this.data.title;
}
			}
		],
		"\n"
	],
	" ",
	[
		"h2",
		{
			"jbst:visible": 
				function() {
	return !!this.data.subtitle;
}
		},
		" ",
		function() {
	return this.data.subtitle;
},
		"\n"
	],
	" ",
	[
		"p",
		{
			"class": "actions",
			"jbst:visible": 
				function() {
	return !!this.data.actions;
}
		},
		" ",
		function() {
				return JsonML.BST([
			"",
			" ",
			[
				"a",
				{
					"jbst:visible": 
						function() {
	return !!this.data.link;
},
					"class": "action",
					href: 
						function() {
	return ''+this.data.link;
}
				},
				" ",
				[
					"img",
					{
						"jbst:visible": 
							function() {
	return !!this.data.thumbnail;
},
						src: 
							function() {
	return ''+this.data.thumbnail;
}
					}
				],
				" ",
				[
					"span",
					{
						"class": "label",
						"jbst:visible": 
							function() {
	return !!this.data.label;
}
					},
					function() {
	return ''+this.data.label;
}
				],
				" "
			],
			" ",
			[
				"span",
				{
					"jbst:visible": 
						function() {
	return !this.data.link;
},
					"class": "action"
				},
				" ",
				[
					"img",
					{
						"jbst:visible": 
							function() {
	return !!this.data.thumbnail;
},
						src: 
							function() {
	return ''+this.data.thumbnail;
}
					}
				],
				" ",
				[
					"span",
					{
						"class": "label",
						"jbst:visible": 
							function() {
	return !!this.data.label;
}
					},
					function() {
	return ''+this.data.label;
}
				],
				" "
			],
			" "
		]).dataBind(this.data.actions, this.index, this.count);
			},
		"\n"
	],
	" ",
	[
		"dl",
		{
			"class": "details",
			"jbst:visible": 
				function() {
	return !!(this.data && this.data.details);
}
		},
		" ",
		function() {
				return JsonML.BST([
			"",
			" ",
			[
				"dt",
				{
					"jbst:visible": 
						function() {
	return !!(this.data) && !!(Array.isArray(this.data.value) ? (this.data.value.length > 0) : (this.data.value));
}
				},
				" ",
				function() {
	return ''+this.data.name;
},
				" "
			],
			" ",
			[
				"dd",
				{
					"jbst:visible": 
						function() {
	return !!(this.data) && !!(Array.isArray(this.data.value) ? (this.data.value.length > 0) : (this.data.value));
}
				},
				" ",
				[
					"a",
					{
						"jbst:visible": 
							function() {
	return !!this.data.link;
},
						href: 
							function() {
	return ''+this.data.link;
}
					},
					" ",
					[
						"img",
						{
							"jbst:visible": 
								function() {
	return !!this.data.thumbnail;
},
							src: 
								function() {
	return ''+this.data.thumbnail;
}
						}
					],
					" ",
					function() {
	return (Array.isArray(this.data.value) ? this.data.value.join(', ') : ''+this.data.value);
},
					" "
				],
				" ",
				[
					"span",
					{
						"jbst:visible": 
							function() {
	return !this.data.link;
}
					},
					" ",
					[
						"img",
						{
							"jbst:visible": 
								function() {
	return !!this.data.thumbnail;
},
							src: 
								function() {
	return ''+this.data.thumbnail;
}
						}
					],
					" ",
					function() {
	return (Array.isArray(this.data.value) ? this.data.value.join(', ') : ''+this.data.value);
},
					" "
				],
				" "
			],
			" "
		]).dataBind(this.data.details, this.index, this.count);
			},
		"\n"
	],
	" ",
	[
		"ul",
		{
			"class": "options",
			"jbst:visible": 
				function() {
	return Array.isArray(this.data.options);
}
		},
		" ",
		function() {
				return JsonML.BST([
			"",
			" ",
			[
				"li",
				{
					"class": 
						function() {
	return this.data.id;
}
				},
				" ",
				[
					"div",
					{
						"class": "label",
						"jbst:visible": 
							function() {
	return !!this.data.label;
}
					},
					function() {
	return this.data.label;
}
				],
				" ",
				[
					"ul",
					{
						"jbst:visible": 
							function() {
	return Array.isArray(this.data.items);
}
					},
					" ",
					function() {
				return JsonML.BST([
						"",
						" ",
						[
							"li",
							{
								"class": 
									function() {
	return this.data.selected ? 'selected' : '';
}
							},
							" ",
							[
								"a",
								{
									"jbst:visible": 
										function() {
	return !!this.data.link;
},
									href: 
										function() {
	return this.data.link;
}
								},
								" ",
								[
									"span",
									{
										"jbst:visible": 
											function() {
	return !!this.data.label;
}
									},
									function() {
	return this.data.label;
}
								],
								" ",
								[
									"img",
									{
										"jbst:visible": 
											function() {
	return !!this.data.thumbnail;
}
									}
								],
								function() {
	return this.data.thumbnail;
},
								" "
							],
							" ",
							[
								"span",
								{
									"jbst:visible": 
										function() {
	return !this.data.link;
}
								},
								" ",
								[
									"span",
									{
										"jbst:visible": 
											function() {
	return !!this.data.label;
}
									},
									function() {
	return this.data.label;
}
								],
								" ",
								[
									"img",
									{
										"jbst:visible": 
											function() {
	return !!this.data.thumbnail;
}
									}
								],
								function() {
	return this.data.thumbnail;
},
								" "
							],
							" "
						],
						" "
					]).dataBind(this.data.items, this.index, this.count);
			},
					" "
				],
				" "
			],
			" "
		]).dataBind(this.data.options, this.index, this.count);
			},
		"\n"
	],
	" ",
	[
		"p",
		{
			"class": "path",
			"jbst:visible": 
				function() {
	return !!this.data.path;
}
		},
		" ",
		function() {
				return JsonML.BST([
			"",
			" ",
			[
				"a",
				{
					"jbst:visible": 
						function() {
	return !!this.data.link;
},
					href: 
						function() {
	return ''+this.data.link;
}
				},
				function() {
	return ''+this.data.label;
}
			],
			" ",
			[
				"span",
				{
					"jbst:visible": 
						function() {
	return !this.data.link;
}
				},
				function() {
	return ''+this.data.label;
}
			],
			" "
		]).dataBind(this.data.path, this.index, this.count);
			},
		"\n"
	],
	" ",
	[
		"p",
		{
			"class": "groups",
			"jbst:visible": 
				function() {
	return !!this.data.groups;
}
		},
		" ",
		function() {
				return JsonML.BST([
			"",
			" ",
			[
				"a",
				{
					"class": 
						function() {
	return 'group '+(this.data.selected ? 'selected' : '');
},
					href: 
						function() {
	return ''+this.data.link;
}
				},
				" ",
				[
					"img",
					{
						"jbst:visible": 
							function() {
	return !!this.data.thumbnail;
},
						src: 
							function() {
	return ''+this.data.thumbnail;
}
					}
				],
				" ",
				[
					"span",
					{
						"class": "label",
						"jbst:visible": 
							function() {
	return !!this.data.label;
}
					},
					function() {
	return ''+this.data.label;
}
				],
				" "
			],
			" "
		]).dataBind(this.data.groups, this.index, this.count);
			},
		"\n"
	],
	" ",
	[
		"ul",
		{
			"jbst:visible": 
				function() {
	return !!this.data.items;
},
			"class": 
				function() {
	return ('list'+(this.data.collapsed ? ' collapsed' : ''));
},
			"data-groupby": 
				function() {
	return this.data.groupby;
}
		},
		" ",
		function() {
				return JsonML.BST([
			"",
			" ",
			[
				"li",
				{
					"jbst:visible": 
						function() {
	return this.data.items instanceof Array;
},
					"class": "superListItem"
				},
				" ",
				[
					"h3",
					function() {
	return this.data.label;
}
				],
				" ",
				[
					"ul",
					" ",
					function() {
				return JsonML.BST([
						"",
						" ",
						[
							"li",
							{
								"class": "listItem"
							},
							" ",
							function() {
				return JsonML.BST(template.listitem).dataBind(this.data, this.index, this.count);
			},
							" "
						],
						" "
					]).dataBind(this.data.items, this.index, this.count);
			},
					" "
				],
				" "
			],
			" ",
			[
				"li",
				{
					"class": "listItem",
					"jbst:visible": 
						function() {
	return !(this.data.items instanceof Array);
}
				},
				" ",
				function() {
				return JsonML.BST(template.listitem).dataBind(this.data.items instanceof Array ? undefined : this.data, this.index, this.count);
			},
				" "
			],
			" "
		]).dataBind(this.data.items, this.index, this.count);
			},
		"\n"
	],
	" ",
	[
		"img",
		{
			"jbst:visible": 
				function() {
	return !!this.data.fanart;
},
			"class": "fanart",
			src: 
				function() {
	return this.data.fanart;
},
			alt: ""
		}
	]
]);
