/**
 * @author sam.bailus@gmail.com
 */

/* HASH FUNCTIONS */

export function getHashArray() {
	let o = {}

	if (!document.location.hash) return o

	let hasharray = document.location.hash.substring(1).split(/\&/)
	for (let y = 0; y < hasharray.length; y++) {  //for (y in hasharray) {
		let z = hasharray[y].split(/\=/);
		if (z && z.length == 2)
			o[z[0]] = decodeURIComponent(z[1])
	}
	return o
}

export function hashArrayToURL(o) {
	return '#' + ( Object.keys(o).map(key => (`${ key }=${ encodeURIComponent( o[key] ) }`)).join('&') )
}