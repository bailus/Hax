var xbmcLibraryFactory = (function ($) { //create the xbmcLibrary global object
	"use strict";

	var LAZYLOAD_OPTIONS = { },
	  pub = {},
	  xbmc,
	  DEBUG = false,
	  RECENTLYADDED = false;
	  
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
	
	var seconds2string = function (t) {
		var str = function (n) {
			return (n < 10 && n > -10 ? '0' : '')+Math.floor(n);
		};
		if (t > 3600) return str(t/3600) +':'+ str((t%3600)/60) +':'+ str(t%60);
		else return str(t/60) +':'+ str(t%60);
	};
	
	var minutes2string = function (t) {
		var str = function (n) {
			return (n < 10 && n > -10 ? '0' : '')+Math.floor(n);
		};
		if (t > 60) return str(t/60) +':'+ str(t%60) + ':00';
		return str(t) + ':00';
	};
	
	var ymd2string = function (date) {
		var x = date.split(' ')[0].split('-');
		return [ ['January','February','March','April','May','June','July','August','September','October','November','December'][x[1]-1], x[2]+',', x[0] ].join(' ');
	};
	
	var pages = {
		'Movies': {
			'view': 'list',
			'header': true,
			'groupby': 'year',
			'data': function (callback) {
				var page = {}, q = Q();
				if (RECENTLYADDED) {
					q.add(function (c) { //get recently added movies
						xbmc.GetRecentlyAddedMovies(function (d) {
							console.dir(d);
							page.recentlyadded = d.movies || [];
							c();
						});
					});
					q.add(function (c) { //format recently added movies
						$.each(page.recentlyadded, function (i, movie) {
							movie.thumbnailWidth = '34px';
							movie.link = '#page=Movie&movieid='+movie.movieid;
							movie.thumbnail = movie.thumbnail ? xbmc.vfs2uri(movie.thumbnail) : 'img/DefaultVideo.png';
						});
						c();
					});
				}
				q.add(function (c) { //get movies
					xbmc.GetMovies(function (d) {
						page.items = d.movies || [];
						c();
					});
				});
				q.add(function (c) { //format movies
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
						movie.thumbnailWidth = '34px';
						movie.details = [];
						if (movie.genre) movie.details.push(movie.genre);
						//movie.details.push( minutes2string(movie.runtime || 0) );
					});
					c();
				});
				q.onfinish(function () {
					callback(page);
				});
				q.start();
			}
		},
		'Movie': {
			'view': 'details',
			'parent': 'Movies',
			'data': function (callback) {
				var page = {}, q = Q();
				q.add(function (c) { //get movie details
					xbmc.GetMovieDetails({ 'movieid': +getHash('movieid') }, function (d) {
						page = d.moviedetails || {};
						c();
					});
				});
				q.add(function (c) { //format movie details
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
					if (page.trailer) page.trailer = function () {
						xbmc.Play(page.trailer, 1);
					};
					if (page.thumbnail) page.thumbnail = xbmc.vfs2uri(page.thumbnail);
					if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart);
					c();
				});
				q.onfinish(function () {
					callback(page);
				});
				q.start();
			}
		},
		'TV Shows': {
			'view': 'banner',
			'header': true,
			'data': function (callback) {
				var page = {}, q = Q();
				if (RECENTLYADDED) {
					q.add(function (c) { //get recently added episodes
						xbmc.GetRecentlyAddedEpisodes(function (d) {
							console.dir(d);
							page.recentlyadded = d.episodes || [];
							c();
						});
					});
					q.add(function (c) { //format recently added episodes
						$.each(page.recentlyadded, function (i, episode) {
							episode.link = '#page=Episode&episodeid='+episode.episodeid+'&tvshowid='+episode.tvshowid;
							if (episode.episode) {
								episode.label = episode.episode+'. '+episode.title;
								if (episode.season) episode.label = episode.season+'x'+episode.label;
							}
							episode.thumbnail = episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : 'img/DefaultVideo.png';
							episode.season = 'Season '+episode.season;
						});
						c();
					});
				};
				q.add(function (c) { //get tv shows
					xbmc.GetTVShows(function (d) {
						page.items = d.tvshows || [];
						c();
					});
				});
				q.add(function (c) { //format tv shows
					$.each(page.items, function (i, tvshow) {
						tvshow.link = '#page=TV Show&tvshowid='+tvshow.tvshowid;
						if (tvshow.thumbnail) tvshow.thumbnail = xbmc.vfs2uri(tvshow.thumbnail);
					});
					c();
				});
				q.onfinish(function () {
					callback(page);
				});
				q.start();
			}
		},
		'TV Show': {
			'view': 'list',
			'parent': 'TV Shows',
			'groupby': 'season',
			'sortgroup': 'season',
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
					//if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart);
					delete page.fanart;
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
						episode.label = episode.title || '';
						if (episode.episode) episode.number = episode.episode;
						episode.thumbnail = episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : 'img/DefaultVideo.png';
						episode.season = 'Season '+episode.season;
						episode.thumbnailWidth = '89px';
						episode.details = [];
						if (episode.runtime) episode.details.push( minutes2string(episode.runtime) );
						if (episode.lastplayed) episode.details.push( 'Last played '+ymd2string(episode.lastplayed) );
						//episode.details.push( minutes2string(episode.runtime || 0) );
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
				var page = {}, q = Q();
				if (RECENTLYADDED) {
					q.add(function (c) { //get recently added albums
						xbmc.GetRecentlyAddedAlbums(function (d) {
							page.recentlyadded = d.albums || [];
							c();
						});
					})
					q.add(function (c) { //format recently added albums
					  	$.each(page.recentlyadded, function (i, album) {
							if (album.year) album.label = '('+album.year+') '+album.label;
							album.link = '#page=Album&albumid='+album.albumid;
							album.thumbnail = album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/DefaultAudio.png';
						});
						c();
					});
				}
				q.add(function (c) { //get artists
					xbmc.GetArtists(function (d) {
						page.items = d.artists || [];
						c();
					});
				});
				q.add(function (c) { //format artists
				  	$.each(page.items, function (i, artist) {
						artist.link = '#page=Artist&artistid='+artist.artistid;
						artist.thumbnail = artist.thumbnail ? xbmc.vfs2uri(artist.thumbnail) : 'img/DefaultArtist.png';
						artist.thumbnailWidth = '50px';
						artist.details = artist.genre || ' ';
					});
					c();
				});
				q.onfinish(function () {
					callback(page);
				});
				q.start();
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
					//if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart);
					delete page.fanart;
					page.title = page.label || '';
					page.genre = undefined;
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
						album.link = '#page=Album&albumid='+album.albumid;
						album.thumbnail = album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/DefaultAudio.png';
						album.thumbnailWidth = '50px';
						if (album.year) album.details = album.year;
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
					//if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart);
					delete page.fanart;
					page.title = page.artist || '';
					page.link = '#page=Artist&artistid='+page.artistid;
					page.subtitle = page.label || '';
					if (page.year) page.subtitle = '('+page.year+') '+page.subtitle;
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
						if (song.track <= 10000) song.number = song.track;
						song.thumbnail = undefined;
						song.thumbnailWidth = '50px';
						if (song.file) {
							song.play = function () {
								xbmc.Play(song.file, 1);
							};
							song.add = function () {
								xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': song.file } });
							};
						}
						if (song.duration) song.details = seconds2string(song.duration);
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
			'data': function (callback) {
				var page = { 'items': [
					{ 'media': 'video', 'label': 'Video' },
					{ 'media': 'music', 'label': 'Music' },
					{ 'media': 'pictures', 'label': 'Pictures' },
					{ 'media': 'files', 'label': 'Files' }
				  ] }, 
				  q = Q();
				$.each(page.items, function (i, item) {
					q.add(function (c) { //get sources
						xbmc.GetSources({ 'media': item.media }, function (d) {
							item.items = d.sources || [];
							c();
						});
					});
					q.add(function (c) { //format sources
						$.each(item.items, function (i, source) {
							source.link = '#page=Directory&directory='+encodeURIComponent(source.file)+'&media='+item.media;
							source.thumbnail = 'img/DefaultFolder.png';
							source.thumbnailWidth = '50px';
						});
						c();
					});
				});
				q.onfinish(function () {
					callback(page);
				});
				q.start();
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
							file.details = [];
							file.details.push( Math.round((file.size||0)/1024)+'MB' );
							if (file.mimetype) file.details.push( !file.type || (file.type === 'unknown') ? file.mimetype : file.type );
						}
						if (!filename) filename = f.pop();
						file.label = filename;
						file.thumbnailWidth = '50px';
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
						'thumbnailWidth': '50px'
					});
					c();
				  }).
				  onfinish(function () {
					callback(page);
				  }).
				  start();
			}
		},
		'Playlists': {
			'view': 'list',
			'header': true,
			'data': function (callback) {
				var page = {}, player;
				Q().
				  add(function (c) { //get playlists
					xbmc.GetPlaylists(function (d) {
						page.items = d || [];
						c();
					});
				  }).
				  add(function (c) {
					var q = Q();
		  			$.each(page.items, function (i, item) { //for each playlist
		  				item.label = item.type || 'Playlist';
		  				q.add(function(cb) { //get playlist items
			  				xbmc.GetPlaylistItems({ 'playlistid': item.playlistid }, function (d) {
			  					item.items = d.items || [];
			  					cb();
			  				});
			  			});
					});
					q.onfinish(function () {
						c();
					});
					q.start();
				  }).
				  add(function (c) { //get active player
					xbmc.GetActivePlayerProperties(function (d) {
						player = d || {};
						c();
					});
				  }).
				  add(function (c) { //format playlist items
		  			$.each(page.items, function (i, item) {
		  				var playlistid = item.playlistid || 0;
			  			$.each(item.items, function (i, item) {
							if (item.file) item.label = item.file.split('/')[--item.file.split('/').length];
							if (player.playlistid === playlistid && player.position === i) item.playing = true;
							if (!item.playing) {
								item.play = function () {
									xbmc.Open({ 'item': { 'playlistid': playlistid, 'position': i } });
									renderPage('Playlists'); //refresh the playlist
								};
								item.remove = function () {
									xbmc.RemoveFromPlaylist({ 'playlistid': playlistid, 'position': i });
									renderPage('Playlists'); //refresh the playlist
								};
							}
							if (item.thumbnail) item.thumbnail = xbmc.vfs2uri(item.thumbnail);
							item.details = '';
							if (item.runtime) item.details = minutes2string(item.runtime);
							if (item.duration) item.details = seconds2string(item.duration);
						});
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
			'data': function (callback) {
				var buttons = [
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
				];
				if (xbmc.version() >= 5) buttons = buttons.concat([
			                    { 'text': 'Information', 'class':'info', 'src':'img/buttons/info.png', 'onclick':function () { xbmc.Info(); } },
			                    { 'text': 'Menu', 'class':'menu', 'src':'img/buttons/menu.png', 'onclick':function () { xbmc.ContextMenu(); } },
			                    { 'text': 'Fullscreen', 'class':'fullscreen', 'src':'img/buttons/fullscreen.png', 'onclick':function () { xbmc.ToggleFullscreen(); } },
			                    { 'text': 'Eject', 'class':'eject', 'src':'img/buttons/eject.png', 'onclick':function () { xbmc.Eject(); } }
				]);
				callback({ 'class': 'remote', 'buttons': buttons });
			}
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
			if (getHash('sort') || page.sortby) data.items = sortItems(data.items, getHash('sort') || page.sortby)
			if (getHash('group') || page.groupby) data.items = sortItems(groupItems(data.items, getHash('group') || page.groupby), 'label');
			
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
