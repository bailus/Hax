"use strict";

const pages = (() => {

	const pages = new Map()
	const pub = {}

	pub.add = (page) => {
		pages.set(page.id, page)
		return page
	}

	pub.getById = (id) => {
		return pages.get(id)
	}

	const backStack = []
	let forwardStack = []
	let previousPageUrl = undefined

	//render the current page
	pub.renderPage = () => {
		const state = getHashMap()
		const url = hashMapToURL(state)

		//find the page to render
		const title = (state.get('page') || '').replace('%20',' ') //some browsers replace spaces with %20
		const page = pub.getById(title) || pub.getById(DEFAULT_PAGE)

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
		.then(() => new Promise(window.requestAnimationFrame))
		.then(() => page.render(state))
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

function minutes2string (t) {
	const hours = Math.floor(t/60),
	    mins  = Math.floor(t%60),
	    out = []
	if (hours > 0) out.push(hours + ' hour' + (hours > 1 ? 's' : ''))
	if (mins > 0) out.push(mins + ' minute' + (mins > 1 ? 's' : ''))
	return out.join(' ')
}

function seconds2string (t) {
	return minutes2string(Math.round(t/60))
}

function seconds2shortstring (t) {
	function str (n) {
		return (n < 10 && n > -10 ? '0' : '')+Math.floor(n)
	}
	if (t > 3600) return str(t/3600) +':'+ str((t%3600)/60) +':'+ str(t%60)
	else return str(t/60) +':'+ str(t%60)
}

function ymd2string (ymd) {
	const x = ymd.split(' ')[0].split('-')
	return [
		['January','February','March','April','May','June','July','August','September','October','November','December'][x[1]-1], 
		+x[2]+((/1[1-3]$/).test(x[2]) ? 'th' : (/1$/).test(x[2]) ? 'st' : (/2$/).test(x[2]) ? 'nd' : (/3$/).test(x[2]) ? 'rd' : 'th')+',',
		x[0]
	].join(' ')
}

class Page {
	
	constructor(obj) {
		//copy obj.* to this.*
		for (let attr in obj)
            if (obj.hasOwnProperty(attr))
            	this[attr] = obj[attr];
	}

	crumbs(state) {
		if (this.parentState === undefined)
			return []

		const parentState = this.parentState(state)
		const parentPage = pages.getById(parentState.get('page'))
		const crumbs = parentPage.crumbs(parentState)
		if (parentPage.icon) crumbs.push({
			'label': parentPage['id'],
			'icon': parentPage.icon(parentState),
			'link': hashMapToURL(parentState)
		})
		return crumbs
	}

	render(state) {
		let $loading = document.getElementById('loading')
		$loading.className = ''

		const page = this

		return page.data(state)   //get the page data
		.then(data => {
			data.crumbs = page.crumbs(state)
			data.crumbs.push({
				'icon': page.icon ? page.icon(state) : undefined,
				'label': data.pageName || page.name || page.id,
				'link': hashMapToURL(state)
			})
			return data
		})
		.then(data => {

			//sort and group the data
			//TODO: review and probably rewrite

			function groupItems (items, groupby) {
				let o = [], temp = {}
				if (!(items[0] && items[0][groupby])) return items
				items.forEach((item, i) => {
					let s = item[groupby]
					if (item instanceof Object) {
						if (!temp[s]) temp[s] = []
						temp[s].push(item)
					}
				})
				Object.getOwnPropertyNames(temp).forEach(label => {
					o.unshift({
						'label': label,
						'items': temp[label]
					})
				})
				return o
			}

			function sortItems (items, sortby) {
				if (!(items[0] && items[0][sortby])) return items
				return items.sort(function (a, b) {
					let x = a[sortby], y = b[sortby]
					if (x < y) return -1
					if (x > y) return +1
					return 0
				})
			}
			
			//if (state.get('sort') || this.sortby) data.items = sortItems(data.items, state.get('sort') || this.sortby)
			
			const groupbyKey = state.get('group') || this.groupby
			const groupbyValue = state.get(groupbyKey)
			if (groupbyKey) {
				let size = data.items.length
				const showItems = !(!groupbyValue && size > GROUPING_THRESHOLD)

				//sort and group the items
				data.items = sortItems(groupItems(data.items, groupbyKey), 'label')

				//create groups
				if (size > GROUPING_THRESHOLD)
					data.groups = data.items.map(x => {
						const s = new Map(state)
						s.set(groupbyKey, x.label)
						return {
							'label': x.label,
							'link': hashMapToURL(s),
							'selected': x.label === groupbyValue
						}
					})

				//filter
				if (groupbyValue)
					data.items = data.items.filter(x => x.label === groupbyValue)

				//don't show the full list
				if (!showItems)
					data.items = undefined

				if (showItems && data.groups && data.groups.length > 40)
					data.groups = []

			}

			return data


		})
		.catch(error => {
			console.error(error)
			return {
				title: 'Error getting page data :(',
				subtitle: error.message || ''
			}
		})
		.then(data => {
			//render the data to the DOM via the template
			data.id = this.id;
			document.title = 'Hax//'+(data.title ? data.title : 'Kodi');

			let $page = document.createElement('div')
			$page.setAttribute('class', 'page')

			//copy key/value pairs from the URL to the data- attributes of the $page
			state.forEach((value, key) => $page.setAttribute('data-'+key, value))
			$page.setAttribute('data-page', this.id) //make sure the home page has a data-page attribute

			$page.appendChild(template[ state.get('view') || this.view ].bind(data))

			let $content = document.getElementById('content')
			while ($content.firstChild) $content.removeChild($content.firstChild)  // $content.removeAllChildElements()

			let $loading = document.getElementById('loading')
			$loading.className = 'hidden'

			$content.appendChild($page)

			$page

		})



			
	}
}
