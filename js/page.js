import { hashArrayToURL } from './hash'
import { sortItems, groupItems } from './util'

export default class {
	
	constructor(obj) {
		//copy obj.* to this.*
		for (let attr in obj)
            if (obj.hasOwnProperty(attr))
            	this[attr] = obj[attr];
	}

	crumbs(state, pages) {
		if (this.parentState === undefined) return []

		const parentState = this.parentState(state)
		const parentPage = pages.getById(parentState['page'])
		if (!parentPage) return []

		const crumbs = parentPage.crumbs(parentState, pages)
		if (parentPage.icon) crumbs.push({
			'label': parentPage['id'],
			'icon': parentPage.icon(parentState),
			'link': hashArrayToURL(parentState)
		})
		return crumbs
	}

	render(state, pages) {
		let $loading = document.getElementById('loading')
		$loading.className = ''
		let $content = document.getElementById('content')
		$content.className = 'hidden'

		const page = this
		return page.data(state)   //get the page data
		.then(data => {
			data.crumbs = page.crumbs(state, pages)
			data.crumbs.push({
				'icon': page.icon ? page.icon(state) : undefined,
				'label': data.pageName || page.name || page.id,
				'link': hashArrayToURL(state)
			})
			return data
		})
		.then(data => {

			//sort and group the data
			const groupbyKey = state['group'] || this.groupby
			const groupbyValue = state[groupbyKey]
			if (groupbyKey) {
				if (!Array.isArray(data.items)) data.items = []
				const size = data.items.length
				const showItems = !(!groupbyValue && size > advancedSettings.pages.groupingThreshold)

				//group the items
				data.items = sortItems(groupItems(data.items, groupbyKey), 'label')

				//sort the groups
				if (state['sort'] || this.sortby)
					data.items = data.items.map(item => {
						if (!item.items || item.items.length < 2)
							return item
						item.items = sortItems(item.items, state['sort'] || this.sortby)
						return item
					})

				//create group list
				if (size > advancedSettings.pages.groupingThreshold)
					data.groups = data.items.map(x => {
						const s = Object.assign({}, state)
						s[groupbyKey] = x.label
						return {
							'label': x.label,
							'link': hashArrayToURL(s),
							'selected': x.label === groupbyValue
						}
					})

				//filter
				if (groupbyValue)
					data.items = data.items.filter(x => x.label === groupbyValue)

				//don't show the full list
				if (!showItems)
					data.items = undefined

			}
			else {
				if (state['sort'] || this.sortby)
					data.items = sortItems(data.items, state['sort'] || this.sortby)
			}

			return data


		})
		.catch(error => {
			console.error(error)
			return {
				title: 'Error getting page data',
				subtitle: error.message || '',
				pageName: ':('
			}
		})
		.then(data => {
			//render the data to the DOM via the template
			data.id = this.id;
			//document.title = ''+(data.title ? data.title : 'Kodi');

			let $page = document.createElement('div')
			$page.setAttribute('class', 'page')

			//copy key/value pairs from the URL to the data- attributes of the $page
			Object.keys(state).forEach(key => $page.setAttribute('data-'+key, state[key]))
			$page.setAttribute('data-page', this.id) //make sure the home page has a data-page attribute

			$page.innerHTML = templates[ state['view'] || this.view ](data)

			let $content = document.getElementById('content')
			while ($content.firstChild) $content.removeChild($content.firstChild)  // $content.removeAllChildElements()
			$content.className = ''

			let $loading = document.getElementById('loading')
			$loading.className = 'hidden'

			$content.appendChild($page)

			$page

		})



			
	}
}