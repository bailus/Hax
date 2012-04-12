xbmcLibrary = (function ($) { //create the xbmcLibrary global object

	//constants
	var DEBUG = true;
	var LAZYLOAD_OPTIONS = { failure_limit : 10 };

	//html helper functions
	var html = {
		'page': function () {
			return $('<div class="page"></div>');
		},
		'details': function () {
			return $('<div class="details"></div>');
		},
		'directory': function (x) {
			if (x !== undefined) return $('<div class="directory">'+x+'</div>');
			return $('<div class="directory"></div>');
		},
		'list': function (x) {
			if (x !== undefined) return $('<ul>'+x+'</ul>');
			return $('<ul></ul>');
		},
		'li': function (x) {
			if (x !== undefined) return $('<li>'+x+'</li>');
			return $('<li></li>');
		},
		'h2': function (x) {
			if (x !== undefined) return $('<h2>'+x+'</h2>');
			return $('<h2></h2>');
		},
		'h3': function (x) {
			if (x !== undefined) return $('<h3>'+x+'</h3>');
			return $('<h3></h3>');
		},
		'p': function (x) {
			if (x !== undefined) return $('<p>'+x+'</p>');
			return $('<p></p>');
		},
		'fanart': function (src) {
			return $('<div class="fanart"><img src="'+src+'" alt=""></img></div>');
		},
		'headerThumbnail': function (src) {
			return $('<img src="'+src+'" alt="" class="headerThumbnail"></img>');
		},
		'listThumbnail': function (src) {
			return $('<img src="'+src+'" alt="" class="listThumbnail"></img>');
		},
		'image': function (src) {
			return $('<img src="'+src+'" alt="" class="image"></img>');
		},
		'listItem': function (item) {
			var i = $('<li class="listItem"></li>');
			var c = '';
			i.css('height', item.height || 50);
			if (item.rotatethumbnail) c += 'rotatethumbnail';
			if (item.thumbnail) {
				var img = $('<img alt="" class="'+c+'"></img>');
				if (item.thumbnail.slice(0,4) === '/vfs/') { //only lazyload thumbnails that come from the xbmc virtual file system
					img.attr('src', '/img/Transparent.png');
					img.attr('data-original', item.thumbnail);
				} else { //images that aren't on the vfs are loaded normally
					img.attr('src', item.thumbnail)
				}
				var thumbnail = $('<div class="thumbnail"></div>').appendTo(i);
				if (item.link) $('<a href="'+item.link+'"></a>').append(img).appendTo(thumbnail);
				else img.appendTo(thumbnail);
				if (item.width) thumbnail.css('width', item.width);
			}
			
			if (item.play) {
				var play = $('<span class="play">▶</span>').appendTo(i);
				play.click(item.play);
			}
			if (item.add) {
				var add = $('<span class="add">+</span>').appendTo(i);
				add.click(item.add);
			}
			if (item.remove) {
				var add = $('<span class="remove">-</span>').appendTo(i);
				add.click(item.remove);
			}
			
			if (item.link) i.append('<a href="'+item.link+'"><span class="label">'+item.label+'</span></a>');
			else i.append('<span class="label">'+item.label+'</span>');
			return i;
		},
		'bannerItem': function (item) {
			var i = $('<li class="bannerItem"></li>');
			var a = i;
			if (item.link) a = $('<a href="'+item.link+'"></a>').appendTo(i);
			if (item.thumbnail) a.append('<img class="banner" src="/img/Banner.png" data-original="'+xbmc.vfs2uri(item.thumbnail)+'" alt="'+item.label+'">');
			a.append('<span class="bannerLabel">'+item.label+'</span>');
			a.append('<img class="bannerBackground" src="/img/Banner.png" alt="">');
			return i;
		},
		'banner': function (src, title) {
			return $('<img class="pagebanner" src="'+src+'" alt="'+title+'"></div>');
		},
		'play': function (item) {
			var i = html.p();
			if (item.play) {
				var play = $('<span class="play">▶ Play</span>').appendTo(i);
				play.click(item.play);
			}
			if (item.add) {
				var add = $('<span class="add">+ Add to playlist</span>').appendTo(i);
				add.click(item.add);
			}
			return i;	
		},
		'pageTitle': function (title) {
			return $('<h1>'+title+'</h1>');
		},
		'headerButton': function (page, src) {
			return $('<a class="headerButton" href="#page='+page+'"><img alt="'+page+'" src="'+src+'"></img></span>');
		},
		'listDetails': function (data, output) {
			if (data.thumbnail) {
				output.append( html.headerThumbnail(data.thumbnail) );
			}
			if (data.title) {
				if (data.banner) output.append( html.banner(data.banner, data.title) );
				else output.append( html.pageTitle(data.title) );
			}
			if (data.subtitle) html.h2(data.subtitle).appendTo(output);
			if (data.description)  html.p(data.description).appendTo(output);
			if (data.formed) html.p('Formed: '+data.formed).appendTo(output);
			if (data.disbanded) html.p('Disbanded: '+data.disbanded).appendTo(output);
			if (data.died) html.p('Died: '+data.died).appendTo(output);
			if (data.directory) output.append( html.p(data.directory) );
		}
	};
	
	var obj2array = function (obj) { //makes a new array from an object using jQuery.each()
		var array = [];
		$.each(obj, function (index, item) {
			array.push(item);
		});
		return array;
	};
	
	//controllers
	var pages = {
		'Home': {
			'view': 'list',
			//'header': true,
			//'icon': '/img/Home.png',
			'data': function (callback) {
				var items = {};
				$.each(pages, function (title, page) {
					if (page.home) items[title] = {
						'label': title,
						'title': title,
						'icon': page.icon || undefined,
						'link': '#page='+title,
					};
				});
				var page = {
					'title': 'Home',
					'items': obj2array(items)
				};
				callback(page);
			}
		},
		'Movies': {
			'view': 'list2',
			'home': true,
			'icon': '/img/Movie.png',
			'data': function (callback) {
				xbmc.GetMovies(function (data) {
					var page = {
						'title': 'Movies',
						'items': [],
						//'fanart': '/img/backgrounds/videos.jpg'
					};
					if (data.movies) {
						$.each(data.movies, function (i, movie) {
							movie.link = '#page=Movie&movieid='+movie.movieid;
							if (movie.file) {
								movie.play = function () {
									xbmc.Play(movie.file, 1)
								};
								movie.add = function () {
									xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': movie.file } })
								};
							}
							movie.thumbnail = movie.thumbnail ? xbmc.vfs2uri(movie.thumbnail) : '/img/DefaultVideo.png';
							movie.rotatethumbnail = true;
							movie.height = 50;
							movie.width = 80;
						});
						var movies = {};
						$.each(data.movies, function (i, movie) { //sort the movies into years
							if (!movies[movie.year]) movies[movie.year] = [];
							movies[movie.year].push(movie);
						});
						$.each(movies, function (year, items) { //push the episodes from each season into the page.items array
							page.items.unshift({
								'label': year,
								'items': items
							});
						});
					}
					callback(page);
				});
			}
		},
		'Movie': {
			'view': 'details',
			'data': function (callback) {
				xbmc.GetMovieDetails({ 'movieid': +getHash('movieid') }, function (data) {
					var movie = data.moviedetails;
					if (movie.year) movie.title += ' ('+movie.year+')';
					if (movie.tagline) movie.heading = movie.tagline;
					if (movie.file) {
						movie.play = function () {
							xbmc.Play(movie.file, 1);
						};
						movie.add = function () {
							xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': movie.file } });
						};
					};
					callback(movie);
				});
			}
		},
		'TV Shows': {
			'view': 'banner',
			'home': true,
			'icon': '/img/TV.png',
			'data': function (callback) {
				xbmc.GetTVShows(function (data) {
					var page = {
						'title': 'TV Shows',
						'items': []
					};
					if (data.tvshows) {
						page.items = data.tvshows;
						$.each(page.items, function (i, tvshow) {
							tvshow.link = '#page=TV Show&tvshowid='+tvshow.tvshowid;
						});
					};
					callback(page);
				});
			}
		},
		'TV Show': {
			'view': 'list2',
			'data': function (callback) {
				xbmc.GetTVShowDetails({ 'tvshowid': +getHash('tvshowid') }, function (show) {
					xbmc.GetTVEpisodes({ 'tvshowid': +getHash('tvshowid') }, function (data) {
						var page = show.tvshowdetails;
						if (page.fanart) page.fanart = xbmc.vfs2uri(show.tvshowdetails.fanart);
						if (page.thumbnail) page.banner = xbmc.vfs2uri(show.tvshowdetails.thumbnail);
						delete page.thumbnail;
						page.items = [];
						if (data.episodes) {
							$.each(data.episodes, function (i, episode) {
								episode.play = function () {
									xbmc.Play(episode.file, 1);
								};
								episode.add = function () {
									xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': episode.file } });
								};
								episode.link = '#page=Episode&episodeid='+episode.episodeid;
								if (episode.episode) episode.label = episode.episode+'. '+episode.title;
								episode.thumbnail = episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : '/img/DefaultVideo.png';
							});
							var seasons = {};
							$.each(data.episodes, function (i, episode) { //sort the episodes into seasons
								var season = 'Season '+episode.season;
								if (!seasons[season]) seasons[season] = [];
								seasons[season].push(episode);
							});
							$.each(seasons, function (season, items) { //push the episodes from each season into the page.items array
								page.items.push({
									'label': season,
									'items': items
								});
							});
						};
						callback(page);
					});
				});
			}
		},
		'Episode': {
			'view': 'details',
			'data': function (callback) {
				xbmc.GetEpisodeDetails({ 'episodeid': +getHash('episodeid') }, function (data) {
					var episode = data.episodedetails;
					episode.heading = episode.title;
					//if (episode.thumbnail) episode.fanart = data.episodedetails.thumbnail;
					//episode.thumbnail = undefined;
					if (episode.showtitle) episode.title = episode.showtitle;
					if (episode.file) {
						episode.play = function () {
							xbmc.Play(episode.file, 1);
						};
						episode.add = function () {
							xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': episode.file } });
						};
					}
					callback(episode);
				});
			}
		},
		'Music': {
			'view': 'list',
			'home': true,
			'icon': '/img/Music.png',
			'data': function (callback) {
				xbmc.GetArtists(function (data) {
					if (data.artists) $.each(data.artists, function (i, artist) {
						artist.link = '#page=Artist&artistid='+artist.artistid;
						artist.thumbnail = artist.thumbnail ? xbmc.vfs2uri(artist.thumbnail) : '/img/DefaultArtist.png';
						artist.width = 50;
					});
					var page = {
						'title': 'Music',
						'items': data.artists,
						//'fanart': '/img/backgrounds/music.jpg'
					};
					callback(page);
				});
			}
		},
		'Artist': {
			'view': 'list',
			'data': function (callback) {
				xbmc.GetAlbums({ 'artistid': +getHash('artistid') }, function (data) {
					xbmc.GetArtistDetails({ 'artistid': +getHash('artistid') }, function (artist) {
						var page = artist.artistdetails || {};
						if (page.thumbnail) page.thumbnail = xbmc.vfs2uri(page.thumbnail);
						if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart);
						page.title = page.label || '';
						page.items = data.albums || [];
						page.genre = undefined;
						if (page.description === 'Fetching artist biography from allmusic.com is not possible due to copyright reasons.') page.description = undefined;
						$.each(page.items, function (i, album) {
							if (album.year) album.label = '('+album.year+') '+album.label;
							album.link = '#page=Album&albumid='+album.albumid;
							album.thumbnail = album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : '/img/DefaultAudio.png';
							album.width = 50;
						});						
						callback(page);
					});
				});
			}
		},
		'Album': {
			'view': 'list',
			'data': function (callback) {
				xbmc.GetSongs({ 'albumid': +getHash('albumid') }, function (data) {
					xbmc.GetAlbumDetails({ 'albumid': +getHash('albumid') }, function (album) {
						var page = album.albumdetails || {};
						if (page.thumbnail) page.thumbnail = xbmc.vfs2uri(page.thumbnail);
						if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart);
						page.title = page.artist || '';
						page.subtitle = page.label || '';
						if (page.year) page.subtitle = '('+page.year+') '+page.subtitle;
						if (page.description === 'Fetching album review from allmusic.com is not possible due to copyright reasons.') page.description = undefined;
						page.items = data.songs || [];
						$.each(page.items, function (i, song) {
							if (song.track) song.label = song.track+'. '+song.label
							song.thumbnail = undefined;
							song.width = 50;
							if (song.file) {
								song.play = function () {
									xbmc.Play(song.file, 1)
								};
								song.add = function () {
									xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': song.file } })
								};
							}
						});
						callback(page);
					});
				});
			}
		},
		'Files': {
			'view': 'list',
			'home': true,
			'icon': '/img/Files.png',
			'data': function (callback) {
				medias = {
					'video': { 'label': 'Video' },
					'music': { 'label': 'Music' },
					'pictures': { 'label': 'Pictures' },
					'files': { 'label': 'Files' }
				};
				$.each(medias, function (i, media) {
					if (!media.thumbnail) media.thumbnail = '/img/DefaultFolder.png';
					if (!media.width) media.width = 50;
					media.link = '#page=Sources&media='+i;
				});
				var page = {
					'title': 'Files',
					'items': medias,
					//'fanart': '/img/backgrounds/system.jpg'
				};
				callback(page);
			}
		},
		'Sources': {
			'view': 'list',
			'data': function (callback) {
				xbmc.GetSources({ 'media': getHash('media') }, function (data) {
					if (data.sources) $.each(data.sources, function (i, source) {
						source.link = '#page=Directory&directory='+source.file+'&media='+getHash('media');
						source.thumbnail = '/img/DefaultFolder.png';
						source.width = 50;
					});
					data.sources.unshift({
						'link': '#page=Files',
						'label': ' . . ',
						'thumbnail': '/img/DefaultFolderBack.png',
						'width': 50
					});
					var page = {
						'title': getHash('media'),
						'items': data.sources,
						//'fanart': '/img/backgrounds/system.jpg'
					};
					callback(page);
				});
			}
		},
		'Directory': {
			'view': 'list',
			'data': function (callback) {
				xbmc.GetDirectory({ 'directory': getHash('directory'), 'media': getHash('media') }, function (data) {
				//console.dir(data)
					if (!data.files) data.files = [];
					$.each(data.files, function (i, file) {
						if (file.filetype === 'directory') {
							file.link = '#page=Directory&directory='+file.file+'&media='+getHash('media');
							if (!file.thumbnail) file.thumbnail = '/img/DefaultFolder.png';
						};
						if (file.filetype === 'file') {
							file.play = function () {
								xbmc.Play(file.file, 1)
							};
							file.add = function () {
								xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': file.file } })
							};
							file.thumbnail = file.thumbnail ? xbmc.vfs2uri(file.thumbnail) : '/img/DefaultFile.png';
						};
						var f = file.file.split('/');
						var filename = f.pop();
						if (!filename) filename = f.pop();
						file.label = filename;
						file.width = 50;
					});
					var path = getHash('directory').split('/');
					if (!path.pop()) path.pop(); //remove the last part of the current directory
					var back = path.join('/');
					
					if (path.length > 2) data.files.unshift({
						'link': '#page=Directory&directory='+back+'&media='+getHash('media'),
						'label': ' . . ',
						'thumbnail': '/img/DefaultFolderBack.png',
						'width': 50
					});
					var page = {
						'title': getHash('media'),
						'directory': getHash('directory'),
						'items': data.files,
						//'fanart': '/img/backgrounds/system.jpg'
					};
					callback(page);
				});
			}
		},
		'Playlist': {
			'view': 'list',
			'data': function (callback) {
				xbmc.GetPlaylistItems({'playlistid':1}, function (data) {
					if (data.items) $.each(data.items, function (i, item) {
						if (item.file) {
							item.play = function () {
								xbmc.Play(item.file, 1);
							};
							item.remove = function () {
								xbmc.RemoveFromPlaylist({ 'playlistid': 1, 'position': i });
								renderPage('Playlist'); //refresh the playlist
							};
						}
						if (item.thumbnail) item.thumbnail = xbmc.vfs2uri(item.thumbnail);
					});
					var page = {
						'title': 'Playlist',
						'items': data.items,
						//'fanart': '/img/backgrounds/appearance.jpg'
					};
					callback(page);
				});
			}
		},
		'Remote': {
			'view': 'svg',
			'data': function (callback) {
				$.ajax('/img/remote.svg').
				  done(function (data) {
				  	callback({
				  		'svg': data
				  	});
				  });
			}
		}
	};
	
	//views
	var views = {
		'list': {
			'render': function (data) {
				//console.log('rendering list view');
				var output = $('<div class="list"></div>');
				html.listDetails(data, output);
				var list = html.list().appendTo(output);
				if (data.items) $.each(data.items, function (index, item) {
					list.append( html.listItem(item) );
				});
				if (data.fanart) html.fanart(data.fanart).appendTo(output);
				return output;
			}
		},
		'banner': {
			'render': function (data) {
				//console.log('rendering banner view');
				var list = html.list();
				//if (data.title) list.append( html.pageTitle(data.title) );
				if (data.items) $.each(data.items, function (index, item) {
					list.append( html.bannerItem(item) );
				});
				return list;
			}
		},
		'list2': {
			'render': function (data) {
				//console.log('rendering list2 view');
				var output = $('<div class="list"></div>');
				if (data.thumbnail) {
					output.append( html.headerThumbnail(data.thumbnail) );
				}
				if (data.title) {
					if (data.banner) output.append( html.banner(data.banner, data.title) );
					else output.append( html.pageTitle(data.title) );
				}
				if (data.description)  html.p(data.description).appendTo(output);
				if (data.style) html.p(data.style).appendTo(output);
				if (data.formed) html.p('Formed: '+data.formed).appendTo(output);
				if (data.disbanded) html.p('Disbanded: '+data.disbanded).appendTo(output);
				if (data.died) html.p('Died: '+data.died).appendTo(output);
				
				var list = html.list().appendTo(output);
				if (data.items) $.each(data.items, function (i, item) {
					var listitem = html.li().addClass('superListItem').appendTo(list);
					if (item.thumbnail) html.listThumbnail(item.thumbnail).appendTo(listitem);
					var title = html.h3(item.label).appendTo(listitem);
					var l = html.list().appendTo(listitem);
					if (item.items) $.each(item.items, function (index, item) {
						l.append( html.listItem(item) );
					});
					
				});
				if (data.fanart) html.fanart(data.fanart).appendTo(output);
				return output;
			}
		},
		'details': {
			'render': function (data) {
				//console.log('rendering details view');
				//console.dir(data);
				var output = html.details();
				if (data.thumbnail) html.image(xbmc.vfs2uri(data.thumbnail)).appendTo(output);
				if (data.title) html.pageTitle(data.title).appendTo(output);
				if (data.heading) html.h2(data.heading).appendTo(output);
				if (data.play || data.add) html.play(data).appendTo(output);
				if (data.season && data.episode) html.p('Season '+data.season+', Episode '+data.episode).appendTo(output);
				if (data.genre) html.p(data.genre).appendTo(output);
				if (data.runtime) html.p(data.runtime+' Minutes').appendTo(output);
				if (data.director) {
					html.h3('Director').appendTo(output);
					html.p(data.director).appendTo(output);
				}
				if (data.writer) {
					html.h3('Writer').appendTo(output);
					html.p(data.writer).appendTo(output);
				}
				if (data.plot) {
					html.h3('Plot').appendTo(output);
					html.p(data.plot).appendTo(output);
				}
				
				if (data.fanart) html.fanart(xbmc.vfs2uri(data.fanart)).appendTo(output);
				return output;
			}
		},
		'svg': {
			'render': function (data) {
				//console.dir(data)
				var svg = document.adoptNode(data.svg.documentElement);
				return $('<div class="svg"></div>').append(svg);
			}
		}
	};
	
	var history = [];
	var renderPage = function (title) {
		if (DEBUG) console.log('Rendering page: '+title);
		if (!title) title = 'Remote';
		var page = pages[title];
		if (page) page.data(function (data) {
			if (page.view) {
				var p = html.page();
				var v = views[page.view].render(data).appendTo(p);
				$('#content').empty().append(p);
				$('body').scrollTop(0);
				v.find('img').filter('[data-original]').lazyload(LAZYLOAD_OPTIONS);   //initialize the lazyload plugin after the page is added to the DOM
			}
			$('#loading').hide();
		});
		else if (DEBUG) console.log('Rendering failed: '+title);
	};
	
	var renderButtons = function () {
		var header = $('#header');
		$.each(pages, function (title, page) {
			if (/*page.header && */page.icon) header.append(html.headerButton(title, page.icon));
		});
	};
	
	var getOrientation = function () { //get the current screen orientation
		var h = $(window).height();
		var w = $(window).width();
		if (h > w) return 'portrait';
		return 'landscape';
	};
	
	var onResize = function () {
		$('body').attr('data-orientation', getOrientation());
	};
	
	var init = function () {
		//render the buttons
		renderButtons();
	
		//render the page
		renderPage(getHash('page') || undefined);
		
		//render the page every time the hash changes
		$(window).hashchange(function () {
			$('#loading').show();
			renderPage(getHash('page'));
		});
		
		$(window).resize(onResize);
		onResize();
	};
	
	return {
		'init': init
	};

})(jQuery);

jQuery(function () { //on document load
	xbmcLibrary.init(); //initialize the library
});
