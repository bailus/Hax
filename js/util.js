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
	const hh = s >= 3600 && format(s/3600)
	const mm = format((s%3600)/60)
	const ss = format(s%60)

	return (seconds < 0 ? '-' : '') +
			(hh === false ? '' : `${hh}:`) + `${mm}:${ss}`
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