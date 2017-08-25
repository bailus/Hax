/* Functions for working with files */


export function getSlash(filenameComponents) {
	if (filenameComponents.join('').includes('\\')) return '\\'
	return '/'
}

export function trim(str, chars) {
	if (str === undefined || str.length <= 0) return ''

	if (chars[str[0]])
		return trim(str.substr(1), chars) //Remove the first character then repeat

	if (chars[str.slice(-1)])
		return trim(str.slice(0, -1), chars) //Remove the last character then repeat

	return str //No more characters to remove
}

export function trimRight(str, chars) {
	if (str === undefined || str.length <= 0) return ''

	if (chars[str.slice(-1)])
		return trimRight(str.slice(0, -1), chars) //Remove the last character then repeat

	return str //No more characters to remove
}

export function trimFilename(str) {
	return trimRight(str, { '/': true, '\\': true })
}

export function joinFilenameComponents(filenameComponents, slash) {
	if (slash === undefined)
		slash = getSlash(filenameComponents)

	return filenameComponents
		.map(trimFilename)
		//.filter(str => (str !== undefined && str.lddength > 0))
		.map(str => (str === undefined ? '' : str))
		//.map(str => (str.slice(-1) == ':' ? str+'/' : str)) //support directories like "smb://" and "videoplaylists://"
		.join(slash)
}

export function joinDirectoryComponents(filenameComponents, slash) {
	if (slash === undefined)
		slash = getSlash(filenameComponents)

	return joinFilenameComponents(filenameComponents, slash)
}
