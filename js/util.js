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

export function flatMap (array, callback) {
  return [].concat.apply([], array.map(callback));
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

export function seconds2shortstring (seconds) {
	const format = n => (n < 10 ? '0' : '')+Math.floor(n)

	const s = Math.abs(seconds)
	const h = s >= 3600 && Math.floor(s/3600)
	const mm = format((s%3600)/60)
	const ss = format(s%60)

	return (seconds < 0 ? '-' : '') +
			(h === false ? '' : `${h}:`) + `${mm}:${ss}`
}

export function ymd2string (ymd) {
	const x = ymd.split(' ')[0].split('-')
	return [
		['January','February','March','April','May','June','July','August','September','October','November','December'][x[1]-1], 
		+x[2]+((/1[1-3]$/).test(x[2]) ? 'th' : (/1$/).test(x[2]) ? 'st' : (/2$/).test(x[2]) ? 'nd' : (/3$/).test(x[2]) ? 'rd' : 'th')+',',
		x[0]
	].join(' ')
}

export function makeJsLink(script) {
	return `javascript: (function () { ${ script } })()`
}

export function makeDetail(page, name, key, value) {
	return value !== undefined && value.length > 0 && {
		'class': key,
		'name': name,
		'links': (Array.isArray(value) ? value : [  ])
				.map(v => ({
					'label': v,
					'link': `#page=${page}&${key}=${v}`
				}))
	}
}

import moment from 'moment'
export function parseYear(inputStr) {	

	const oldParseTwoDigitYear = moment.parseTwoDigitYear
	moment.parseTwoDigitYear = function (inputStr) {  //assume all 2-digit years are in the 1900s. https://momentjs.com/docs/#/parsing/string-format/
		return 1900+parseInt(inputStr)
	}
	const year = moment(inputStr, 'YYYY', true) // YYYY: 4 or 2 digit year.
	moment.parseTwoDigitYear = oldParseTwoDigitYear
	
	return year.isValid() ? year.format('YYYY') : "Unknown" // YYYY: 4 digit year.
}




export function groupItems (items, groupby) {
	const groups = new Map() // Map lets us efficiently look up groups by name (key)
	const groupKeys = [] // but Map doesn't guarantee order, so we also store an array of keys [42]

	if (!(items[0] && items[0][groupby])) return items
		
	items.forEach((item, i) => {
		const key = item[groupby]
		if (groups.has(key))
			groups.get(key).push(item)
		else {
			groups.set(key, [ item ])
			groupKeys.push(key) // [42]
		}
	})

	// output
	return groupKeys.map(key => ({
		'label': key,
		'items': groups.get(key)
	}))
}

export function sortItems (items, sortby) {
	if (!(items[0] && items[0][sortby])) return items
	return items.sort(function (a, b) {
		let x = a[sortby], y = b[sortby]
		if (x < y) return -1
		if (x > y) return +1
		return 0
	})
}

export function state2uri (state={}) {
	return '#' + 
		Object.keys(state)
		.filter(key => (state[key] !== undefined))
		.map(key =>
			(encodeURIComponent(key) + '=' + encodeURIComponent(state[key]))
		).join('&')
}


