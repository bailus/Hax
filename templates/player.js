/*global JsonML */

/* namespace template */
var template;
if ("undefined" === typeof template) {
	template = {};
}

template.player = JsonML.BST(
[
	"div",
	{
		id: "player"
	},
	" ",
	function() {
				return JsonML.BST(template.buttons).dataBind(this.data, this.index, this.count);
			},
	" ",
	[
		"div",
		{
			id: "progress"
		}
	],
	" ",
	[
		"div",
		{
			id: "nowPlaying"
		}
	],
	" ",
	[
		"div",
		{
			id: "volume"
		}
	],
	"\n"
]);