/*global JsonML */

/* namespace template */
var template;
if ("undefined" === typeof template) {
	template = {};
}

template.details = JsonML.BST(
[
	"",
	" ",
	[
		"div",
		{
			"class": "details"
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
	return this.data.thumbnail;
},
				alt: "",
				"class": "image"
			}
		],
		" ",
		[
			"a",
			{
				href: "#page=Home",
				"class": "homeButton"
			},
			[
				"img",
				{
					src: "img/Remote.png",
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
			function() {
	return this.data.title;
}
		],
		" ",
		[
			"h2",
			{
				"jbst:visible": 
					function() {
	return !!this.data.heading;
}
			},
			function() {
	return this.data.heading;
}
		],
		" ",
		[
			"div",
			" ",
			[
				"span",
				{
					"data-role": "button",
					"jbst:visible": 
						function() {
	return !!this.data.play;
},
					"class": "play",
					onclick: 
						function() {
	return this.data.play;
}
				},
				"\u25B6 Play"
			],
			" ",
			[
				"span",
				{
					"data-role": "button",
					"jbst:visible": 
						function() {
	return !!this.data.add;
},
					"class": "add",
					onclick: 
						function() {
	return this.data.add;
}
				},
				"+ Add to playlist"
			],
			" "
		],
		" ",
		[
			"h3",
			{
				"jbst:visible": 
					function() {
	return !!this.data.runtime;
}
			},
			"Runtime"
		],
		" ",
		[
			"p",
			{
				"jbst:visible": 
					function() {
	return !!this.data.runtime;
}
			},
			function() {
	return this.data.runtime + ' minutes';
}
		],
		" ",
		[
			"h3",
			{
				"jbst:visible": 
					function() {
	return !!this.data.director;
}
			},
			"Director"
		],
		" ",
		[
			"p",
			{
				"jbst:visible": 
					function() {
	return !!this.data.director;
}
			},
			function() {
	return this.data.director;
}
		],
		" ",
		[
			"h3",
			{
				"jbst:visible": 
					function() {
	return !!this.data.writer;
}
			},
			"Writer"
		],
		" ",
		[
			"p",
			{
				"jbst:visible": 
					function() {
	return !!this.data.writer;
}
			},
			function() {
	return this.data.writer;
}
		],
		" ",
		[
			"h3",
			{
				"jbst:visible": 
					function() {
	return !!this.data.plot;
}
			},
			"Plot"
		],
		" ",
		[
			"p",
			{
				"jbst:visible": 
					function() {
	return !!this.data.plot;
}
			},
			function() {
	return this.data.plot;
}
		],
		" ",
		[
			"h3",
			{
				"jbst:visible": 
					function() {
	return !!this.data.genre;
}
			},
			"Genre"
		],
		" ",
		[
			"p",
			{
				"jbst:visible": 
					function() {
	return !!this.data.genre;
}
			},
			function() {
	return this.data.genre;
}
		],
		" ",
		[
			"div",
			{
				"jbst:visible": 
					function() {
	return !!this.data.fanart;
},
				"class": "fanart"
			},
			[
				"img",
				{
					src: 
						function() {
	return this.data.fanart;
},
					alt: ""
				}
			]
		],
		"\n"
	],
	"\n"
]);