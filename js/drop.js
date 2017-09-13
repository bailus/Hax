
//drag and drop support
const eventListenerPreventDefault = f => e => {
	if (e.preventDefault) e.preventDefault() // required by FF + Safari
	f(e)
	return false // required by IE
}

//tell the browser that we *can* drop on this target
const eventListenerEnableDrop = f => e => {
	e.dataTransfer.dropEffect = 'copy'
	return f(e)
}

const dropInit = dropElem => {
	const listeners = {}

	const runListeners = eventName => e => {
		if (listeners[eventName] === undefined) return
		listeners[eventName].some(({ func }) => func(e))
	}

	const addListener = (eventName, func, priority=0) => {
		if (listeners[eventName] === undefined) listeners[eventName] = []
		listeners[eventName].push({ 'func':func, 'priority':priority })
		listeners[eventName].sort((a, b) => b.priority - a.priority)
	}


	const dragListener = f => eventListenerPreventDefault(eventListenerEnableDrop(f))
	dropElem.addEventListener('dragover', dragListener(runListeners('dragover')))
	dropElem.addEventListener('dragenter', dragListener(runListeners('dragenter')))

	const dropListener = eventListenerPreventDefault
	dropElem.addEventListener('drop', dropListener(runListeners('drop')))


	return { 'addListener': addListener }
}

const dropTextListener = f => e => f(e.dataTransfer.getData('Text'))

const dropUrlListener = f => dropTextListener(text => {
	try {
		return f(new URL(text))
	} catch (badURL) {
		return false
	}
})

const addDropHandlers = () => {

	const dropHandler = dropInit(document.body)

	dropHandler.addListener('drop', dropUrlListener(url => {
		// we need to turn the youtube url into a format that the kodi youtube plugin will understand
		const pluginUrl = new URL('plugin://plugin.video.youtube/play/')

		const setParam = (key, value) => {
			if (value !== null)
				return pluginUrl.searchParams.set(key, value)
		}

		if (url.hostname === 'www.youtube.com') {
			if (url.searchParams.has('v')) pluginUrl.searchParams.set('video_id', url.searchParams.get('v'))
			if (url.searchParams.has('list')) pluginUrl.searchParams.set('playlist_id', url.searchParams.get('list'))
		}
		else if (url.hostname === 'youtu.be') {
			pluginUrl.searchParams.set('video_id', url.pathname.slice(1))
		}
		else return false

		if (pluginUrl.searchParams.get('playlist_id') !== undefined) {
			pluginUrl.searchParams.set('order', 'default')
			pluginUrl.searchParams.set('play', '1')
		}

		xbmc.Open({ 'item': { 'file': pluginUrl.href } })

		return true
	}), 1)

	dropHandler.addListener('drop', dropUrlListener(url => {
		xbmc.Open({ 'item': { 'file': url.href } })

		return true
	}), 0)

	dropHandler.addListener('drop', dropTextListener(text => {
		console.log(text)

		return true
	}), -1) //default drop listener

}

export default {
	'addDropHandlers': addDropHandlers
}
