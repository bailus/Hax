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
			id: "nowPlaying"
		}
	],
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
			id: "progress"
		}
	],
	"\n",
	function() {
				return JsonML.BST(template.buttons).dataBind(this.data, this.index, this.count);
			}
]);