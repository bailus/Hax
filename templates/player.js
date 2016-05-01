/*global JsonML */

/* namespace template */
var template;
if ("undefined" === typeof template) {
	template = {};
}

template.player = JsonML.BST(
[
	"",
	"\n",
	[
		"div",
		{
			"class": "show"
		}
	],
	"\n",
	[
		"div",
		{
			"class": "imageBox"
		},
		[
			"img",
			{
				"class": "thumbnail"
			}
		]
	],
	"\n",
	[
		"div",
		{
			"class": "details"
		}
	],
	"\n",
	[
		"div",
		{
			"class": "player"
		},
		" ",
		[
			"div",
			{
				id: "progress"
			},
			" ",
			[
				"div",
				{
					"class": "bar"
				}
			],
			" ",
			[
				"div",
				{
					"class": "status"
				}
			],
			" ",
			[
				"div",
				{
					"class": "time"
				}
			],
			" "
		],
		" ",
		function() {
				return JsonML.BST(template.buttons).dataBind(this.data, this.index, this.count);
			},
		"\n"
	]
]);
