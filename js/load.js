ready().then(function () { //on document load
"use strict";

	Kodi(window.location.host)
	.catch(() => {
		document.body.innerHTML = '' +
			'<h1>:(</h1>' +
			'<h2>Error</h2>' +
			'<p>Could not connect to Kodi</p>'
	})
	.then(kodi => {

		window.xbmc = kodi

		document.body.innerHTML = '' +
			'<div id=loading><span><img alt="Loading" src="img/loading.gif"></span></div>' +
			'<div id=content></div>' +
			'<div id=player></div>'

		pages.renderPage();

		player.init(kodi);

	})
	
});
