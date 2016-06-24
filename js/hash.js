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

export function getHash(name) {
	var y, z, hasharray;
	if (!document.location.hash) { return false; }
	hasharray = document.location.hash.substring(1).split(/\&/);
	for (y = 0; y < hasharray.length; y++) {  //for (y in hasharray) {
		z = hasharray[y].split(/\=/);
		if (z[0] === name) return decodeURIComponent(z[1]);
	}
}

export function setHash(name, value) {
	var hasharray, y, z;
	if (getHash(name)) {
		hasharray = document.location.hash.substring(1).split(/\&/);
		for (y = 0; y < hasharray.length; y++) {  //for (y in hasharray) {
			z = hasharray[y].split(/\=/);
			if ((z[0] === name) && !(value === '')) {
				z[1] = encodeURIComponent(value);
				hasharray[y] = z.join('=');
			}
		}
		document.location.hash = '#' + hasharray.join('&');
	} else {
		document.location.hash = document.location.hash ? document.location.hash + '&' : '#';
		document.location.hash += name + '=' + value;
	}
}