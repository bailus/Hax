/**
 * @author sam.bailus@gmail.com
 */

/* HASH FUNCTIONS */

export function getHashMap() {
	let map = new Map()

	if (!document.location.hash) return map

	let hasharray = document.location.hash.substring(1).split(/\&/)
	for (let y = 0; y < hasharray.length; y++) {  //for (y in hasharray) {
		let z = hasharray[y].split(/\=/);
		if (z && z.length == 2)
			map.set(z[0], decodeURIComponent(z[1]))
	}
	return map
}

export function hashMapToURL(map) {
	let pairs = []
	map.forEach((value, key) => {
		pairs.push(key + '=' + encodeURIComponent(value))
	})
	return '#' + pairs.join('&')
}