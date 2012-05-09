var xbmcLibraryFactory = (function ($) { //create the xbmcLibrary global object
	"use strict";

	//constants
	var LAZYLOAD_OPTIONS = { failure_limit : 10 },
	  PAGESIZE = 20,
	  FANART = 1, //0 = no fanart, 1 = normal fanart, 2 = fanart everywhere
	  ROTATE_MOVIE_THUMBNAILS = true,
	  pub = {},
	  xbmc,
	  DEBUG = true;

	//html helper functions
	var html = {
		'page': function () {
			return $('<div class="page"></div>');
		},
		'headerButton': function (page, src) {
			return $('<li class="headerButton"><a href="#page='+page+'" tabindex="0">'+page+'</a></li>');
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
		'Movies': {
			'view': 'list2',
			'header': true,
			'icon': 'img/Movie.png',
			'data': function (callback) {
				xbmc.GetMovies(function (data) {
					var page = {
						'items': []
					};
					if (FANART >= 2) page.fanart = 'img/backgrounds/videos.jpg';
					if (data.movies) {
						$.each(data.movies, function (i, movie) {
							movie.link = '#page=Movie&movieid='+movie.movieid;
							if (movie.file) {
								movie.play = function () {
									xbmc.Play(movie.file, 1);
								};
								movie.add = function () {
									xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': movie.file } });
								};
							}
							if (movie.fanart) movie.thumbnail = movie.fanart;
							movie.thumbnail = movie.thumbnail ? xbmc.vfs2uri(movie.thumbnail) : 'img/DefaultVideo.png';
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
			'parent': 'Movies',
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
					}
					if (movie.thumbnail) movie.thumbnail = xbmc.vfs2uri(movie.thumbnail);
					if (movie.fanart) movie.fanart = xbmc.vfs2uri(movie.fanart);
					callback(movie);
				});
			}
		},
		'TV Shows': {
			'view': 'banner',
			'header': true,
			'icon': 'img/TV.png',
			'data': function (callback) {
				xbmc.GetTVShows(function (data) {
					var page = {
						'items': []
					};
					if (data.tvshows) {
						page.items = data.tvshows;
						$.each(page.items, function (i, tvshow) {
							tvshow.link = '#page=TV Show&tvshowid='+tvshow.tvshowid;
							if (tvshow.thumbnail) tvshow.thumbnail = xbmc.vfs2uri(tvshow.thumbnail);
						});
					}
					callback(page);
				});
			}
		},
		'TV Show': {
			'view': 'list2',
			'parent': 'TV Shows',
			'data': function (callback) {
				var tvshowid = +getHash('tvshowid');
				xbmc.GetTVShowDetails({ 'tvshowid': tvshowid }, function (show) {
					xbmc.GetTVEpisodes({ 'tvshowid': tvshowid }, function (data) {
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
								episode.link = '#page=Episode&episodeid='+episode.episodeid+'&tvshowid='+tvshowid;
								if (episode.episode) episode.label = episode.episode+'. '+episode.title;
								episode.thumbnail = episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : 'img/DefaultVideo.png';
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
						}
						callback(page);
					});
				});
			}
		},
		'Episode': {
			'view': 'details',
			'parent': 'TV Shows',
			'data': function (callback) {
				xbmc.GetEpisodeDetails({ 'episodeid': +getHash('episodeid') }, function (data) {
					var episode = data.episodedetails;
					episode.heading = episode.title;
					if (getHash('tvshowid')) episode.link = '#page=TV Show&tvshowid='+getHash('tvshowid');
					if (episode.showtitle) episode.title = episode.showtitle;
					if (episode.file) {
						episode.play = function () {
							xbmc.Play(episode.file, 1);
						};
						episode.add = function () {
							xbmc.AddToPlaylist({ 'playlistid': 1, 'item': { 'file': episode.file } });
						};
					}
					if (episode.thumbnail) episode.thumbnail = xbmc.vfs2uri(episode.thumbnail);
					if (episode.fanart) episode.fanart = xbmc.vfs2uri(episode.fanart);
					callback(episode);
				});
			}
		},
		'Music': {
			'view': 'list',
			'header': true,
			'icon': 'img/Music.png',
			'data': function (callback) {
				xbmc.GetArtists(function (data) {
					if (data.artists) $.each(data.artists, function (i, artist) {
						artist.link = '#page=Artist&artistid='+artist.artistid;
						artist.thumbnail = artist.thumbnail ? xbmc.vfs2uri(artist.thumbnail) : 'img/DefaultArtist.png';
						artist.width = 50;
					});
					var page = {
						'items': data.artists
					};
					if (FANART >= 2) page.fanart = 'img/backgrounds/music.jpg';
					callback(page);
				});
			}
		},
		'Artist': {
			'view': 'list',
			'parent': 'Music',
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
							album.thumbnail = album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/DefaultAudio.png';
							album.width = 50;
						});						
						callback(page);
					});
				});
			}
		},
		'Album': {
			'view': 'list',
			'parent': 'Music',
			'data': function (callback) {
				xbmc.GetSongs({ 'albumid': +getHash('albumid') }, function (data) {
					xbmc.GetAlbumDetails({ 'albumid': +getHash('albumid') }, function (album) {
						var page = album.albumdetails || {};
						if (page.thumbnail) page.thumbnail = xbmc.vfs2uri(page.thumbnail);
						if (page.fanart) page.fanart = xbmc.vfs2uri(page.fanart);
						page.title = page.artist || '';
						page.link = '#page=Artist&artistid='+page.artistid;
						page.subtitle = page.label || '';
						if (page.year) page.subtitle = '('+page.year+') '+page.subtitle;
						if (page.description === 'Fetching album review from allmusic.com is not possible due to copyright reasons.') page.description = undefined;
						page.items = data.songs || [];
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
						callback(page);
					});
				});
			}
		},
		'Files': {
			'view': 'list',
			'header': true,
			'icon': 'img/Files.png',
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
				var media = getHash('media');
				xbmc.GetSources({ 'media': media }, function (data) {
					if (data.sources) $.each(data.sources, function (i, source) {
						source.link = '#page=Directory&directory='+source.file+'&media='+media;
						source.thumbnail = 'img/DefaultFolder.png';
						source.width = 50;
					});
					data.sources.unshift({
						'link': '#page=Files',
						'label': ' . . ',
						'thumbnail': 'img/DefaultFolderBack.png',
						'width': 50
					});
					var page = {
						'items': data.sources
					};
					if (FANART >= 2) page.fanart = 'img/backgrounds/system.jpg';
					callback(page);
				});
			}
		},
		'Directory': {
			'view': 'list',
			'parent': 'Files',
			'data': function (callback) {
				xbmc.GetDirectory({ 'directory': getHash('directory'), 'media': getHash('media') }, function (data) {
					if (!data.files) data.files = [];
					$.each(data.files, function (i, file) {
						var f = file.file.split('/'),
						  filename = f.pop();
						if (file.filetype === 'directory') {
							file.link = '#page=Directory&directory='+file.file+'&media='+getHash('media');
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
					var path = getHash('directory').split('/');
					if (!path.pop()) path.pop(); //remove the last part of the current directory
					var back = path.join('/');
					
					if (path.length > 2) data.files.unshift({
						'link': '#page=Directory&directory='+back+'&media='+getHash('media'),
						'label': ' . . ',
						'thumbnail': 'img/DefaultFolderBack.png',
						'width': 50
					});
					var page = {
						'directory': getHash('directory'),
						'items': data.files
					};
					if (FANART >= 2) page.fanart = 'img/backgrounds/system.jpg';
					callback(page);
				});
			}
		},
		'Playlist': {
			'view': 'list',
			'header': true, 
			'data': function (callback) {
				var playlistid = getHash('playlistid') || 1;
				xbmc.GetPlaylistItems({ 'playlistid': playlistid }, function (playlist) {
					xbmc.GetActivePlayerProperties(function (player) {
						if (playlist.items) $.each(playlist.items, function (i, item) {
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
						var page = {
							'items': playlist.items
						};
						if (FANART >= 2) page.fanart = 'img/backgrounds/appearance.jpg';
						callback(page);
					});
				});
			}
		},
		'Remote': {
			'view': 'remote',
			'data': function (callback) {
				callback({});
			}
		}
	};
	
	var buttons = { //functions that interact with the buttons at the top of the page
			'render': function () {
				var header = $('#header');
				var list = $('<ul></ul>').appendTo(header);
				$.each(pages, function (title, page) {
					if (page.header) html.headerButton(title).appendTo(list);
				});
				list.css('width',list.children().width()*list.children().length);
				buttons.iScroll = new iScroll(header[0],{
					'vScroll': false,
					'hScrollbar': false
				});
			},
			'select': function (title) {
				var b = $('.headerButton');
				b.filter('.selected').removeClass('selected');
				b.each(function () {
					var button = $(this);
					if (button.text() === title) {
						button.addClass('selected');
						buttons.iScroll.scrollToElement(button[0]);
					}
				});
			}
	};
	
	var renderPage = function (title) {
		if (DEBUG) console.log('Rendering page: '+title);
		if (!title) title = 'Remote';
		var page = pages[title];
		title = title.replace('%20',' '); //some browsers replace spaces with %20
		if (!page) page = pages[title];
		if (page) {
			page.data(function (data) {
				console.dir(data);
				if (page.view && template[page.view]) {
					var p = html.page(),
					v = $(template[page.view].bind(data)).appendTo(p);
					$('#content').empty().append(p);
					$('body').scrollTop(0);
					v.find('img').filter('[data-original]').lazyload(LAZYLOAD_OPTIONS); //initialize the lazyload plugin after the page is added to the DOM
				}
				$('#loading').hide();
			});
			//select and scroll to the appropriate button in the header
			if (page.parent) buttons.select(page.parent);
			else buttons.select(title);
		} else {
			if (DEBUG) console.log('Rendering failed: '+title);
		}
	};
	
	var getOrientation = function () { //get the current screen orientation
		var h = $(window).height(),
		  w = $(window).width();
		if (h > w) return 'portrait';
		return 'landscape';
	};
	
	var onResize = function () {
		$('body').attr('data-orientation', getOrientation());
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
		
		$(window).resize(onResize);
		onResize();
		
		return pub;
	};

})(jQuery);
