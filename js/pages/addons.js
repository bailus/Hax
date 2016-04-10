pages.add(new Page({
	'id': 'Addons',
	'view': 'list',
	'groupby': 'type',
	'data': function (callback) {
		var page = { title: 'Add-ons', items: [] },
			q = Q();

		q.add(function (c) {
			xbmc.GetAddons({}, function (d) {
				page.items = d.addons;
				c();
			});
		});

		q.add(function (c) {
			var p = Q();
			
			page.items = page.items || [];

			$.each(page.items, function (i, addon) {
				p.add(function (C) {

					xbmc.GetAddonDetails({ 'addonid': addon.addonid }, function (d) {

						page.items[i] = {
							'label': d.addon.name+' '+d.addon.version,
							'thumbnail': xbmc.vfs2uri(d.addon.thumbnail),
							'details': d.addon.summary,
							'type': d.addon.type
						};

						C();
					});

				});
			});

			p.onfinish(function () {
				c();
			});

			p.start();
		});

		q.onfinish(function () {
			callback(page);
		});

		q.start();
	}
}));