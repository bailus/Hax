pages.add(new Page({
	'id': 'Live',
	'view': 'list',
	'data': function (callback) {
		var page = { title: 'Live', items: [] },
			q = Q();

		$.each(['TV', 'Radio'], function (i, type) {
			q.add(function (c) { //get groups

				xbmc.GetChannelGroups({ 'channeltype': type.toLowerCase() }, function (d) {
					page.items.push({
						'label': type,
						'items': (d.channelgroups||[]).map(function (g) {
							g.link = '#page=Channels&id='+g.channelgroupid;
							return g;
						})
					})
					c();
				});

			});
		});

		q.onfinish(function () {
			callback(page);
		});

		q.start();
	}
}));

pages.add(new Page({
	'id': 'Channels',
	'view': 'list',
	'data': function (callback) {
		var page = { },
			q = Q(),
			groupid = +getHash('id');

		q.add(function (c) { //get groups
			xbmc.GetChannelGroupDetails({ 'channelgroupid': groupid }, function (d) {
				page.title = d.channelgroupdetails.label || '';
				c();
			});
		});

		q.add(function (c) { //get groups

			xbmc.GetChannels({ 'channelgroupid': groupid }, function (d) {

				page.items = (d.channels||[]).map(function (c) {
					//c.link = '#page=Channel&id='+c.channelid;
					c.thumbnail = xbmc.vfs2uri(c.thumbnail);
					c.play = function () {
						xbmc.Open({ 'item': { 'channelid': c.channelid }});
					};
					return c;
				});

				c();
			});

		});

		q.onfinish(function () {
			callback(page);
		});

		q.start();
	}
}));