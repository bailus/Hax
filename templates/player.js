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
		"progress",
		{
			max: "10000"
		}
	],
	"\n",
	[
		"div",
		{
			"class": "time"
		}
	],
	"\n",
	[
		"div",
		{
			id: "nowPlaying"
		}
	],
	"\n",
	function() {
				return JsonML.BST(template.buttons).dataBind(this.data, this.index, this.count);
			}
]);