import 'babel-polyfill'
import 'whatwg-fetch'
import { ready } from './util.js'
import XBMC from './xbmc.js'
import Handlebars from 'handlebars'
import loadPages from './loadPages.js'
import player from './player.js'
import drop from './drop.js'


ready().then(function () { //on document load
"use strict";

	const global = window

	const templateDir = 'templates/'
	const templateFiles = [
		{ name: 'listItem', file: templateDir+'listItem.html' },
		{ name: 'listItems', file: templateDir+'listItems.html' },
		{ name: 'list', file: templateDir+'list.html' },
		{ name: 'player', file: templateDir+'player.html' },
		{ name: 'details', file: templateDir+'details.html' }
	]

	function error({ summary, details }) {
		document.body.innerHTML = `
			<h1>:(</h1>
			<h2>${summary || 'Error'}</h2>
			${details.map(text => `<p>${text}</p>`).join('')}
		`
	}

	function createSkeleton() {
		document.body.innerHTML = `
			<div id=main>
				<div id=loading><span><img alt="Loading" src="img/busy.png" class="spin"></span></div>
				<div id=content></div>
				<div id=player class=minimize></div>
			</div>
		`
	}

	const connectToKodi =
		XBMC(window.location.host)
		.catch(e => error({ details: [ 'Could not connect to Kodi', e ] }))

	function loadTemplate(templateFile) {
		return fetch(templateFile.file)
			.then(response => response.text())
			.then(source => {
				const template = Handlebars.compile(source)
				Handlebars.registerPartial(templateFile.name, template)
				return { name: templateFile.name, template: template }
			})
	}

	global.templates = {}

	const loadTemplates = 
		Promise.all(templateFiles.map(templateFile => loadTemplate(templateFile)))
		.catch(e => error({ details: [ 'Loading template', e ] }))
		.then(templateFiles => {
			templateFiles.forEach(templateFile => {
				global.templates[templateFile.name] = templateFile.template
			})
			return global.templates
		})

	Promise.all([ connectToKodi, loadTemplates, loadPages ])
	.then(([ kodi, templates, pages ]) => {

		window.xbmc = kodi

		createSkeleton()

		pages.renderPage()

		player.init()

		drop.addDropHandlers()

	})
	
});
