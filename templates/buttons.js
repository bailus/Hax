/*global JsonML */

/* namespace template */
var template;
if ("undefined" === typeof template) {
	template = {};
}

template.buttons = JsonML.BST(
[
	"",
	" ",
	[
		"a",
		{
			"jbst:visible": 
				function() {
	return !this.data.hideNavigation;
},
			href: "javascript:history.go(-1)",
			"class": "backButton"
		},
		[
			"img",
			{
				src: "img/icon_back.png",
				height: "32",
				width: "32"
			}
		]
	],
	"\n",
	[
		"a",
		{
			"jbst:visible": 
				function() {
	return !this.data.hideNavigation;
},
			href: "#page=Home",
			"class": "homeButton"
		},
		[
			"img",
			{
				src: "img/icon_home.png",
				height: "32",
				width: "32"
			}
		]
	],
	" ",
	[
		"h1",
		{
			"jbst:visible": 
				function() {
	return !!this.data.title;
}
		},
		" ",
		function() {
	return this.data.title;
},
		"\n"
	],
	" ",
	[
		"ul",
		{
			"class": 
				function() {
	return this.data['class'] || 'buttons';
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
	return this.data['class'];
}
				},
				" ",
				[
					"a",
					{
						href: 
							function() {
	return this.data.href || 'javascript: (' + (this.data.onclick || 'function () { void(0) }') + ')()';
}
					},
					" ",
					[
						"img",
						{
							"jbst:visible": 
								function() {
	return !!this.data.src;
},
							src: 
								function() {
	return this.data.src;
},
							alt: 
								function() {
	return this.data.text;
}
						}
					],
					" ",
					[
						"span",
						{
							"jbst:visible": 
								function() {
	return !this.data.src;
}
						},
						function() {
	return this.data.text;
}
					],
					" "
				],
				" "
			],
			" "
		]).dataBind(this.data.buttons, this.index, this.count);
			},
		" "
	],
	"\n"
]);