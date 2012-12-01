/*global JsonML */

/* namespace template */
var template;
if ("undefined" === typeof template) {
	template = {};
}

template.listdetails = JsonML.BST(
[
	"",
	" ",
	[
		"img",
		{
			"jbst:visible": 
				function() {
	return !!this.data.banner;
},
			"class": "banner",
			src: 
				function() {
	return this.data.banner;
},
			alt: ""
		}
	],
	"\n",
	[
		"img",
		{
			"jbst:visible": 
				function() {
	return !!this.data.thumbnail;
},
			"class": "headerThumbnail",
			src: 
				function() {
	return this.data.thumbnail;
},
			alt: ""
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
	return !!(this.data.title && !this.data.banner);
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
			"jbst:visible": 
				function() {
	return !!this.data.formed;
}
		},
		" ",
		function() {
	return 'Formed: ' + this.data.formed;
},
		"\n"
	],
	" ",
	[
		"p",
		{
			"jbst:visible": 
				function() {
	return !!this.data.disbanded;
}
		},
		" ",
		function() {
	return 'Disbanded: ' + this.data.disbanded;
},
		"\n"
	],
	" ",
	[
		"p",
		{
			"jbst:visible": 
				function() {
	return !!this.data.died;
}
		},
		" ",
		function() {
	return 'Died: ' + this.data.died;
},
		"\n"
	],
	" ",
	[
		"p",
		{
			"jbst:visible": 
				function() {
	return !!this.data.instrument;
}
		},
		" ",
		function() {
	return 'Instrument: ' + this.data.instrument;
},
		"\n"
	],
	" ",
	[
		"p",
		{
			"jbst:visible": 
				function() {
	return !!this.data.style;
}
		},
		" ",
		function() {
	return 'Style: ' + this.data.style;
},
		"\n"
	],
	" ",
	[
		"h3",
		{
			"jbst:visible": 
				function() {
	return !!this.data.recentlyadded;
}
		},
		"Recently Added"
	],
	"\n",
	[
		"ul",
		{
			"jbst:visible": 
				function() {
	return !!this.data.recentlyadded;
},
			"class": "recentlyadded"
		},
		" ",
		function() {
				return JsonML.BST(template.recentlyaddeditem).dataBind(this.data.recentlyadded, this.index, this.count);
			},
		"\n"
	],
	"\n"
]);