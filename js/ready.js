// Promise that resolves when the DOM is loaded
function ready() {
"use strict";

	// Credit to Jake Archibald
	// https://github.com/jakearchibald/svgomg/blob/master/src/js/page/utils.js#L7
	return new Promise((resolve, reject) => {
		function checkState() {
			if (document.readyState !== 'loading')
				resolve()
		}
		document.addEventListener('readystatechange', checkState)
		checkState()
	})
}
