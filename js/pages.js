import { getHashArray, hashArrayToURL } from './hash.js'

export default (() => {
"use strict";

	const pages = new Map()
	const pub = {}

	pub.add = (page) => {
		pages.set(page.id, page)
		return page
	}

	pub.getById = (id) => {
		return pages.get(id)
	}

	pub.toString = () => Array.from(pages.entries()).map(([key, value]) => ''+key+':'+value).join("\n")

	const backStack = []
	let forwardStack = []
	let previousPageUrl = undefined

	//render the current page
	pub.renderPage = function () {
		const state = getHashArray()
		const url = hashArrayToURL(state)

		//find the page to render
		const title = (state['page'] || '').replace('%20',' ') //some browsers replace spaces with %20
		const page = pub.getById(title) || pub.getById(advancedSettings.pages.default)

		if (!page) return Promise.reject()

		let scroll = undefined
		return Promise.resolve()
		.then(() => {
			if (previousPageUrl === undefined) {
				previousPageUrl = ''+url
				scroll = 0
				return
			}

			//store the scroll position of the previous page
			const previousPageScroll = window.scrollY// || document.documentElement.scrollTop || document.body.scrollTop || 0
			if (backStack.length > 0 && backStack[backStack.length-1].url === url) { //if the back button was pressed
				scroll = backStack.pop().scroll
				forwardStack.push({ url: previousPageUrl, scroll: previousPageScroll })
			}
			else if (forwardStack.length > 0 && forwardStack[forwardStack.length-1].url === url) { //if the forward button was pressed
				scroll = forwardStack.pop().scroll
				backStack.push({ url: previousPageUrl, scroll: previousPageScroll })
			}
			else { //if the user clicked a link
				forwardStack = []
				scroll = 0
				backStack.push({ url: previousPageUrl, scroll: previousPageScroll })
			}

			previousPageUrl = ''+url
		})
		//.then(() => new Promise(window.requestAnimationFrame))
		.then(() => page.render(state, this))
		.then(() => {
			window.scroll(0,scroll || 0)
		})

	}

	//render the page every time the hash changes
	window.addEventListener("hashchange", () => {
		pub.renderPage()
	}, false)

	return pub

})()


