jQuery(function () { //on document load
	const body = document.body
	
	var failed = function () {
		body.empty();
		body.append('<h1>:(</h1><h2>Error</h2><p>Could not connect to Kodi</p>');
	};

	var connected = function () {

		document.body.innerHTML = '' +
			'<div id=loading><span><img alt="Loading" src="img/loading.gif"></span></div>' +
			'<div id=content></div>' +
			'<div id=player></div>'

		pages.renderPage();

		player.init();

	};
	
	var connect = function (address) {
		window.xbmc = xbmc(address, connected, failed);
	};

	connect();

});
