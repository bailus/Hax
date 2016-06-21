"use strict";
/* Various useful functions */


// Promise that resolves when the DOM is loaded
export function ready() {

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


export function minutes2string (t) {
	const hours = Math.floor(t/60),
	    mins  = Math.floor(t%60),
	    out = []
	if (hours > 0) out.push(hours + ' hour' + (hours > 1 ? 's' : ''))
	if (mins > 0) out.push(mins + ' minute' + (mins > 1 ? 's' : ''))
	return out.join(' ')
}

export function seconds2string (t) {
	return minutes2string(Math.round(t/60))
}

export function seconds2shortstring (t) {
	function str (n) {
		return (n < 10 && n > -10 ? '0' : '')+Math.floor(n)
	}
	if (t > 3600) return str(t/3600) +':'+ str((t%3600)/60) +':'+ str(t%60)
	else return str(t/60) +':'+ str(t%60)
}

export function ymd2string (ymd) {
	const x = ymd.split(' ')[0].split('-')
	return [
		['January','February','March','April','May','June','July','August','September','October','November','December'][x[1]-1], 
		+x[2]+((/1[1-3]$/).test(x[2]) ? 'th' : (/1$/).test(x[2]) ? 'st' : (/2$/).test(x[2]) ? 'nd' : (/3$/).test(x[2]) ? 'rd' : 'th')+',',
		x[0]
	].join(' ')
}