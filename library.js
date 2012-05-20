var xbmcLibraryFactory = (function ($) { //create the xbmcLibrary global object
	"use strict";

	//constants
	var LAZYLOAD_OPTIONS = { failure_limit : 10 },
	  PAGESIZE = 20,
	  FANART = 1, //0 = no fanart, 1 = normal fanart, 2 = fanart everywhere
	  pub = {},
	  xbmc,
	  DEBUG = true;
	  
	var groupItems = function (items, groupby) {
		var o = [], temp = {};
		if (!(items[0] && items[0][groupby])) return items;
		$.each(items, function (i, item) {
			var s = item[groupby];
			if (item instanceof Object) {
				if (!temp[s]) temp[s] = [];
				temp[s].push(item);
			}
		});
		$.each(temp, function (label, items) {
			o.unshift({
				'label': label,
				'items': items
			});
		});
		return o;
	};
	  
	var sortItems = function (items, sortby) {
		if (!(items[0] && items[0][sortby])) return items;
		return items.sort(function (a, b) {
			var x = a[sortby], y = b[sortby];
			if (x < y) return -1;
			if (x > y) return +1;
			return 0;
		});
	};
	
	//controllers
	var pages = {
		'Movies': {
			'view': 'list',
			'header': true,
			'groupby': 'year',
			'data': function (callback) {
				var page = {};
				Q().
				  add(function (c) { //get movies
					xbmc.GetMovies(function (d) {
						page.items = d.movies || [];
						c();
					});
				  }).
				  add(function (c) { //format movies
					$.each(page.items, function (i, movie) {
						movie.link = '#page=Movie&movieid='+movie.movieid;
						if (movie.file) {
							movie.play = function () {
								xbmc.Play(movie.file, 1);
							};
							movie.add = function () {
								xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': movie.file } });
							};
						}
						//if (movie.fanart) movie.thumbnail = movie.fanart; fanart takes too long to load
						movie.thumbnail = movie.thumbnail ? xbmc.vfs2uri(movie.thumbnail) : 'img/DefaultVideo.png';
						movie.width = 33;
					});
					c();
				  }).
				  onfinish(function () {
					callback(page);
				  }).
				  start();
			}
		},
		'Movie': {
			'view': 'details',
			'parent': 'Movies',
			'data': function (callback) {
				var page = {};
				Q().
				  add(function (c) { //get movie details
					xbmc.GetMovieDetails({ 'movieid': +getHash('movieid') }, function (d) {
						page = d.moviedetails || {};
						c();
					});
				  }).
				  add(function (c) { //format movie details
					if (page.year) page.title += ' ('+page.year+')';
					if (page.tagline) page.heading = page.tagline;
					if (page.file) {
						page.play = function () {
							xbmc.Play(page.file, 1);
						};
						page.add = function () {
							xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': page.file } });
						};
					}
					if (page.thumbnail) page.thumbnail = xbmc.vfs2uri(page.thumbnail);
					if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart);
					c();
				  }).
				  onfinish(function () {
					callback(page);
				  }).
				  start();
			}
		},
		'TV Shows': {
			'view': 'banner',
			'header': true,
			'data': function (callback) {
				var page = {};
				Q().
				  add(function (c) { //get tv shows
					xbmc.GetTVShows(function (d) {
						page.items = d.tvshows || [];
						c();
					});
				  }).
				  add(function (c) { //format tv shows
					$.each(page.items, function (i, tvshow) {
						tvshow.link = '#page=TV Show&tvshowid='+tvshow.tvshowid;
						if (tvshow.thumbnail) tvshow.thumbnail = xbmc.vfs2uri(tvshow.thumbnail);
					});
					c();
				  }).
				  onfinish(function () {
					callback(page);
				  }).
				  start();
			}
		},
		'TV Show': {
			'view': 'list',
			'parent': 'TV Shows',
			'groupby': 'season',
			'data': function (callback) {
				var page = {}, tvshowid = +getHash('tvshowid');
				Q().
				  add(function (c) { //get show details
					xbmc.GetTVShowDetails({ 'tvshowid': tvshowid }, function (d) {
						page = d.tvshowdetails || {};
						c();
					});
				  }).
				  add(function (c) { //format show details
					if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart);
					if (page.thumbnail) page.banner = xbmc.vfs2uri(page.thumbnail);
					delete page.thumbnail;
					c();
				  }).
				  add(function (c) { //get episodes
					xbmc.GetTVEpisodes({ 'tvshowid': tvshowid }, function (d) {
						page.items = d.episodes || {};
						c();
					});
				  }).
				  add(function (c) { //format episodes
					$.each(page.items, function (i, episode) {
						episode.play = function () {
							xbmc.Play(episode.file, 1);
						};
						episode.add = function () {
							xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': episode.file } });
						};
						episode.link = '#page=Episode&episodeid='+episode.episodeid+'&tvshowid='+tvshowid;
						if (episode.episode) episode.label = episode.episode+'. '+episode.title;
						episode.thumbnail = episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : 'img/DefaultVideo.png';
						episode.season = 'Season '+episode.season;
					});
					c();
				  }).
				  onfinish(function () {
					callback(page);
				  }).
				  start();
			}
		},
		'Episode': {
			'view': 'details',
			'parent': 'TV Shows',
			'data': function (callback) {
				var page = {}, tvshowid = +getHash('tvshowid'), episodeid = +getHash('episodeid');
				Q().
				  add(function (c) { //get movie details
					xbmc.GetEpisodeDetails({ 'episodeid': episodeid }, function (d) {
						page = d.episodedetails || {};
						c();
					});
				  }).
				  add(function (c) { //format movie details
					if (page.title) page.heading = page.title;
					if (tvshowid) page.link = '#page=TV Show&tvshowid='+tvshowid;
					if (page.showtitle) page.title = page.showtitle;
					if (page.file) {
						page.play = function () {
							xbmc.Play(page.file, 1);
						};
						page.add = function () {
							xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': page.file } });
						};
					}
					if (page.thumbnail) page.thumbnail = xbmc.vfs2uri(page.thumbnail);
					if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart);
					c();
				  }).
				  onfinish(function () {
					callback(page);
				  }).
				  start();
			}
		},
		'Music': {
			'view': 'list',
			'header': true,
			'data': function (callback) {
				var page = {};
				Q().
				  add(function (c) { //get artists
					xbmc.GetArtists(function (d) {
						page.items = d.artists || [];
						c();
					});
				  }).
				  add(function (c) { //format artists
				  	$.each(page.items, function (i, artist) {
						artist.link = '#page=Artist&artistid='+artist.artistid;
						artist.thumbnail = artist.thumbnail ? xbmc.vfs2uri(artist.thumbnail) : 'img/DefaultArtist.png';
						artist.width = 50;
					});
					c();
				  }).
				  onfinish(function () {
					callback(page);
				  }).
				  start();
			}
		},
		'Artist': {
			'view': 'list',
			'parent': 'Music',
			'data': function (callback) {
				var page = {}, artistid = +getHash('artistid');
				Q().
				  add(function (c) { //get artist details
					xbmc.GetArtistDetails({ 'artistid': artistid }, function (d) {
						page = d.artistdetails || {};
						c();
					});
				  }).
				  add(function (c) { //format artist details
					if (page.thumbnail) page.thumbnail = xbmc.vfs2uri(page.thumbnail);
					if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart);
					page.title = page.label || '';
					page.genre = undefined;
					if (page.description === 'Fetching artist biography from allmusic.com is not possible due to copyright reasons.') page.description = undefined;
					c();
				  }).
				  add(function (c) { //get albums
					xbmc.GetAlbums({ 'artistid': artistid }, function (d) {
						page.items = d.albums || [];
						c();
					});
				  }).
				  add(function (c) { //format albums
					$.each(page.items, function (i, album) {
						if (album.year) album.label = '('+album.year+') '+album.label;
						album.link = '#page=Album&albumid='+album.albumid;
						album.thumbnail = album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/DefaultAudio.png';
						album.width = 50;
					});
					c();
				  }).
				  onfinish(function () {
					callback(page);
				  }).
				  start();
			}
		},
		'Album': {
			'view': 'list',
			'parent': 'Music',
			'data': function (callback) {
				var page = {}, albumid = +getHash('albumid');
				Q().
				  add(function (c) { //get album details
					xbmc.GetAlbumDetails({ 'albumid': albumid }, function (d) {
						page = d.albumdetails || {};
						c();
					});
				  }).
				  add(function (c) { //format album details
					if (page.thumbnail) page.thumbnail = xbmc.vfs2uri(page.thumbnail);
					if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart);
					page.title = page.artist || '';
					page.link = '#page=Artist&artistid='+page.artistid;
					page.subtitle = page.label || '';
					if (page.year) page.subtitle = '('+page.year+') '+page.subtitle;
					if (page.description === 'Fetching album review from allmusic.com is not possible due to copyright reasons.') page.description = undefined;
					c();
				  }).
				  add(function (c) { //get songs
					xbmc.GetSongs({ 'albumid': albumid }, function (d) {
						page.items = d.songs || [];
						c();
					});
				  }).
				  add(function (c) { //format songs
					$.each(page.items, function (i, song) {
						if (song.track) song.label = song.track+'. '+song.label;
						song.thumbnail = undefined;
						song.width = 50;
						if (song.file) {
							song.play = function () {
								xbmc.Play(song.file, 1);
							};
							song.add = function () {
								xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': song.file } });
							};
						}
					});
					c();
				  }).
				  onfinish(function () {
					callback(page);
				  }).
				  start();
			}
		},
		'Files': {
			'view': 'list',
			'header': true,
			'medias': {
					'video': { 'label': 'Video' },
					'music': { 'label': 'Music' },
					'pictures': { 'label': 'Pictures' },
					'files': { 'label': 'Files' }
			},
			'data': function (callback) {
				var medias = pages.Files.medias,
				  page = {
					'items': []
				  };
				if (FANART >= 2) page.fanart = 'img/backgrounds/system.jpg';
				$.each(medias, function (i, media) {
					if (!media.thumbnail) media.thumbnail = 'img/DefaultFolder.png';
					if (!media.width) media.width = 50;
					media.link = '#page=Sources&media='+i;
					page.items.push(media);
				});
				callback(page);
			}
		},
		'Sources': {
			'view': 'list',
			'parent': 'Files',
			'data': function (callback) {
				var page = {}, media = getHash('media');
				Q().
				  add(function (c) { //get sources
					xbmc.GetSources({ 'media': media }, function (d) {
						page.items = d.sources || [];
						c();
					});
				  }).
				  add(function (c) { //format sources
					page.items.unshift({ //add back button
						'link': '#page=Files',
						'label': ' . . ',
						'thumbnail': 'img/DefaultFolderBack.png',
						'width': 50
					});
					$.each(page.items, function (i, source) {
						source.link = '#page=Directory&directory='+encodeURIComponent(source.file)+'&media='+media;
						source.thumbnail = 'img/DefaultFolder.png';
						source.width = 50;
					});
					c();
				  }).
				  onfinish(function () {
					callback(page);
				  }).
				  start();
			}
		},
		'Directory': {
			'view': 'list',
			'parent': 'Files',
			'data': function (callback) {
				var page = {}, directory = getHash('directory'), media = getHash('media') || '';
				Q().
				  add(function (c) { //get files
					xbmc.GetDirectory({ 'directory': directory, 'media': media }, function (d) {
						page.items = d.files || [];
						c();
					});
				  }).
				  add(function (c) { //format files
					$.each(page.items, function (i, file) {
						var f = file.file.split('/'),
						  filename = f.pop();
						if (file.filetype === 'directory') {
							file.link = '#page=Directory&directory='+encodeURIComponent(file.file)+'&media='+getHash('media');
							if (!file.thumbnail) file.thumbnail = 'img/DefaultFolder.png';
						}
						if (file.filetype === 'file') {
							file.play = function () {
								xbmc.Play(file.file, 1);
							};
							file.add = function () {
								xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': file.file } });
							};
							file.thumbnail = file.thumbnail ? xbmc.vfs2uri(file.thumbnail) : 'img/DefaultFile.png';
						}
						if (!filename) filename = f.pop();
						file.label = filename;
						file.width = 50;
					});
					c();
				  }).
				  add(function (c) { //add back button
					var path = directory.split('/'), back = '';
					if (!path.pop()) path.pop(); //remove the last part of the current directory
					back = path.join('/');					
					if (path.length > 2) page.items.unshift({
						'link': '#page=Directory&directory='+back+'&media='+getHash('media'),
						'label': ' . . ',
						'thumbnail': 'img/DefaultFolderBack.png',
						'width': 50
					});
					c();
				  }).
				  onfinish(function () {
					callback(page);
				  }).
				  start();
			}
		},
		'Playlist': {
			'view': 'list',
			'header': true,
			'data': function (callback) {
				var page = {}, playlistid = +getHash('playlistid') || 1, player = {};
				Q().
				  add(function (c) { //get playlist items
					xbmc.GetPlaylistItems({ 'playlistid': playlistid }, function (d) {
						page.items = d.items || [];
						c();
					});
				  }).
				  add(function (c) { //get active player
					xbmc.GetActivePlayerProperties(function (d) {
						player = d || {};
						c();
					});
				  }).
				  add(function (c) { //format playlist items
		  			$.each(page.items, function (i, item) {
						if (item.file) item.label = item.file.split('/')[--item.file.split('/').length];
						if (player && player.position == i) item.playing = true;
						if (!item.playing) {
							item.play = function () {
								xbmc.Open({ 'item': { 'playlistid': playlistid, 'position': i } });
								renderPage('Playlist'); //refresh the playlist
							};
							item.remove = function () {
								xbmc.RemoveFromPlaylist({ 'playlistid': 1, 'position': i });
								renderPage('Playlist'); //refresh the playlist
							};
						}
						if (item.thumbnail) item.thumbnail = xbmc.vfs2uri(item.thumbnail);
					});
					c();
				  }).
				  onfinish(function () {
					callback(page);
				  }).
				  start();
			}
		},
		'Remote': {
			'view': 'buttons',
			'data': { 'buttons':[
			                    { 'text': 'Home', 'class':'home', 'src':'img/buttons/home.png', 'onclick':function () { xbmc.Home(); } },
			                    { 'text': 'Up', 'class':'up', 'src':'img/buttons/up.png', 'onclick':function () { xbmc.Up(); } },
			                    { 'text': 'Down', 'class':'down', 'src':'img/buttons/down.png', 'onclick':function () { xbmc.Down(); } },
			                    { 'text': 'Left', 'class':'left', 'src':'img/buttons/left.png', 'onclick':function () { xbmc.Left(); } },
			                    { 'text': 'Right', 'class':'right', 'src':'img/buttons/right.png', 'onclick':function () { xbmc.Right(); } },
			                    { 'text': 'Select', 'class':'select', 'src':'img/buttons/select.png', 'onclick':function () { xbmc.Select(); } },
			                    { 'text': 'Back', 'class':'back', 'src':'img/buttons/back.png', 'onclick':function () { xbmc.Back(); } },
			                    { 'text': 'Previous', 'class':'previous', 'src':'img/buttons/previous.png', 'onclick':function () { xbmc.GoPrevious(); } },
			                    { 'text': 'Stop', 'class':'stop', 'src':'img/buttons/stop.png', 'onclick':function () { xbmc.Stop(); } },
			                    { 'text': 'Next', 'class':'next', 'src':'img/buttons/next.png', 'onclick':function () { xbmc.GoNext(); } }
			]}
		}
	};
	
	var buttons = { //functions that interact with the buttons at the top of the page
			'render': function () {
				var header, list, data;
				
				//construct data
				data = { 'class': 'headerButtons', 'buttons': [] };
				$.each(pages, function (title, page) {
					if (page.header) data.buttons.push({
						'text': title,
						'href': '#page='+title
					});
				});
				
				//render the data to the DOM via the buttons template
				header = $('#header').
				  html(''). //remove child elements
				  append(template.buttons.bind(data));
				
				//apply javascript UI hacks
				list = header.children('ul')
				list.css({
					'width': list.children().width()*list.children().length,
					'height': list.children().height(),
				});
				buttons.iScroll = new iScroll(header.get(0),{
					'vScroll': false,
					'hScrollbar': false
				});
			},
			'select': function (title) {
				$('#header li'). //all the buttons in the header
					removeClass('selected').
					each(function () { //find the button that should be selected
						var button = $(this);
						if (button.text() === title) {
							button.addClass('selected');
							buttons.iScroll.scrollToElement(button[0]);
						}
					});
			}
	};
	
	var renderPage = function (title) {
		var data, page, defaultPage = 'Remote';
		
		//find the page to render
		if (!title) title = defaultPage;
		title = title.replace('%20',' '); //some browsers replace spaces with %20
		page = pages[title];
		if (!page) page = pages[defaultPage];
		
		if (DEBUG) console.log('Rendering page: '+title);
		
		//if the data isn't a function, turn it into one
		if (!page.data) data = function (callback) { callback({}) };
		else if (!(page.data instanceof Function)) data = function (callback) { callback(page.data) };
		else data = page.data;

		//get the page data
		data(function (data) {			
			if (DEBUG) console.dir(data);
			
			//sort and group the data
			if (data.items) data.items = groupItems(sortItems(data.items, getHash('sort') || page.sortby), getHash('group') || page.groupby);
			
			//render the data to the DOM via the template
			var p = $('<div class="page"></div>'),
			v = $(template[getHash('view') || page.view].bind(data)).appendTo(p);
			$('#content').empty().append(p);
			
			//apply javascript UI hacks
			$('body').scrollTop(0);
			$('#loading').hide();
			v.find('img').filter('[data-original]').lazyload(LAZYLOAD_OPTIONS); //initialize the lazyload plugin
		});
		
		//select and scroll to the appropriate button in the header
		if (page.parent) buttons.select(page.parent);
		else buttons.select(title);
	};
	
	//main()
	return function (x) {
		xbmc = x;
		//render the buttons
		buttons.render();
	
		//render the page
		renderPage(getHash('page') || undefined);
		
		//render the page every time the hash changes
		$(window).hashchange(function () {
			$('#loading').show();
			renderPage(getHash('page'));
		});
		
		return pub;
	};

})(jQuery);
