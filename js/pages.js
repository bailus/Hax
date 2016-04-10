
var pages = (() => {

	var pages = {},
		public = {}

	public.add = (page) => {
		pages[page.id] = page
		return page
	}

	public.getById = (id) => {
		return pages[id]
	}

	//render the current page
	public.renderPage = () => {

		//find the page to render
		var title = (getHash('page') || '').replace('%20',' ') //some browsers replace spaces with %20
		var page = public.getById(title) || public.getById(DEFAULT_PAGE)

		if (page) page.render()

	}

	//render the page every time the hash changes
	window.addEventListener("hashchange", () => {
		public.renderPage(getHash('page'))
	}, false)

	return public

})();

function minutes2string (t) {
	var hours = Math.floor(t/60),
	    mins  = Math.floor(t%60),
	    out = [];
	if (hours > 0) out.push(hours + ' hour' + (hours > 1 ? 's' : ''));
	if (mins > 0) out.push(mins + ' minute' + (mins > 1 ? 's' : ''));
	return out.join(' ');
};

function seconds2string (t) {
	return minutes2string(Math.round(t/60));
};

function seconds2shortstring (t) {
	var str = function (n) {
		return (n < 10 && n > -10 ? '0' : '')+Math.floor(n);
	};
	if (t > 3600) return str(t/3600) +':'+ str((t%3600)/60) +':'+ str(t%60);
	else return str(t/60) +':'+ str(t%60);
};

function ymd2string (ymd) {
	var x = ymd.split(' ')[0].split('-');
	return [
		['January','February','March','April','May','June','July','August','September','October','November','December'][x[1]-1], 
		+x[2]+((/1[1-3]$/).test(x[2]) ? 'th' : (/1$/).test(x[2]) ? 'st' : (/2$/).test(x[2]) ? 'nd' : (/3$/).test(x[2]) ? 'rd' : 'th')+',',
		x[0]
	].join(' ');
};



class Page {
	
	constructor(obj) {
		//copy obj.* to this.*
		for (var attr in obj)
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
					var o = [], temp = {}
					if (!(items[0] && items[0][groupby])) return items
					items.forEach((item, i) => {
						var s = item[groupby]
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
						var x = a[sortby], y = b[sortby]
						if (x < y) return -1
						if (x > y) return +1
						return 0
					})
				}
				
				let groupby = getHash('group') || this.groupby
				
				if (getHash('sort') || this.sortby) data.items = sortItems(data.items, getHash('sort') || this.sortby)

				if (groupby) {
					var size = data.items.length
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
			$page.setAttribute('data-page', this.id)

			$page.appendChild(template[ getHash('view') || this.view ].bind(data))

			let $content = document.getElementById('content')
			while ($content.firstChild) $content.removeChild($content.firstChild)  // $content.removeAllChildElements()

			$content.appendChild($page)

			let $loading = document.getElementById('loading')
			$loading.className = 'hidden'

		})



			
	}
}
