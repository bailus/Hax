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

	//render the current page
	pub.renderPage = () => {

		//find the page to render
		let title = (getHash('page') || '').replace('%20',' ') //some browsers replace spaces with %20
		let page = pub.getById(title) || pub.getById(DEFAULT_PAGE)

		if (page) page.render()

	}

	//render the page every time the hash changes
	window.addEventListener("hashchange", () => {
		pub.renderPage()
	}, false)

	return pub

})()

function minutes2string (t) {
	let hours = Math.floor(t/60),
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
	let x = ymd.split(' ')[0].split('-')
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

	render() {
		let $loading = document.getElementById('loading')
		$loading.className = ''

		new Promise(this.data)   //get the page data, this.data should be an async function that returns the page data
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
				
				let groupby = getHash('group') || this.groupby
				
				if (getHash('sort') || this.sortby) data.items = sortItems(data.items, getHash('sort') || this.sortby)

				if (groupby) {
					let size = data.items.length
					data.groupby = groupby
					data.items = sortItems(groupItems(data.items, groupby), 'label')
					if (getHash(groupby)) data.items = data.items.filter(function (x) {
						return x.label === getHash(groupby)
					})
					else if (size > 100) {
						data.collapsed = true
						data.items = data.items.map(function (x) {
							return {
								'label': x.label,
								'link': document.location.hash+'&'+groupby+'='+x.label
							}
						})
					}
				}

				return data


		})
		.then(data => {
			//render the data to the DOM via the template
			data.id = this.id;
			document.title = 'Hax//'+(data.title ? data.title : 'Kodi');

			let $page = document.createElement('div')
			$page.setAttribute('class', 'page')

			//copy key/value pairs from the URL to the data- attributes of the $page
			window.getHashMap().forEach((value, key) => $page.setAttribute('data-'+key, value))
			$page.setAttribute('data-page', this.id) //make sure the home page has a data-page attribute

			$page.appendChild(template[ getHash('view') || this.view ].bind(data))

			let $content = document.getElementById('content')
			while ($content.firstChild) $content.removeChild($content.firstChild)  // $content.removeAllChildElements()

			$content.appendChild($page)

			let $loading = document.getElementById('loading')
			$loading.className = 'hidden'

		})



			
	}
}
