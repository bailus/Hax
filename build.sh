#!/bin/bash

# XBMC Simple Remote build script

# config
scripts=(
	'js/jquery.min.js'
	'js/jquery-ui.min.js'
	'js/json.js'
	'js/jsonrpc.js'
	'js/jsonml.js'
	'js/jsonml-jbst.js'
	'js/hash.js'
	'js/hashchange.js'
	'js/lazyload.js'
	'js/iscroll.js'
	'js/time.js'
	'js/Q.js'
	'templates/details.js'
	'templates/list.js'
	'templates/listdetails.js'
	'templates/listitem.js'
	'templates/banner.js'
	'templates/banneritem.js'
	'templates/buttons.js'
	'templates/player.js'
	'templates/recentlyaddeditem.js'
	'templates/link.js'
	'js/xbmc.js'
	'js/library.js'
	'js/player.js'
	'js/load.js'
)
minifiers=(
	'yui-compressor'
	'cat'
)


echo 'making debug.html...'
	
	#copy base.html
	touch debug.html
	cat base.html > debug.html
	
	#add debug global javascript variable
	echo '<script>window.DEBUG = true</script>' >> debug.html

	#link to the scripts
	for script in ${scripts[*]}
	do
		echo "<script src=\"$script\"></script>" >> debug.html
	done

	file debug.html


echo 'making index.html...'
	
	#copy base.html
	touch index.html
	cat base.html > index.html

	#find minifier
	for minifier in ${minifiers[*]}
	do
		#if the command exists we can stop looking
		type -P $minifier &>/dev/null && break
	done
	echo "Using $minifier to minify scripts"

	#add scripts to the output via the minifier
	for script in ${scripts[*]}
	do
		echo '<script>' >> index.html
		$minifier $script >> index.html
		echo '</script>' >> index.html
	done

	file index.html





