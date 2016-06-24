window.advancedSettings = {
	"debug": true,
	"mainModule": "./js/main",
	"upgradeToSocket": false,
	"pages": {
		"default": "Home",
		"groupingThreshold": 50
	},
	"epg": {
		"width": 20,
		"padding": 4
	},
	"systemJS": {
		"transpiler": "babel",
		"meta": {
			"*.ts": {
				"format": "es6"
			}
		}
	},
	"jsonRPC": {
		"debug": false
	},
	"xbmc": {
		"debug": true
	}
};
