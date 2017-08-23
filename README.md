# Hax for Kodi

[Samuel Bailey](http://bailey.geek.nz) <[sam@bailey.geek.nz](mailto:sam@bailey.geek.nz)>


A fast and simple remote control for mobile devices.

![oUNe3E9.png](https://bitbucket.org/repo/dMaXXg/images/3495096627-oUNe3E9.png)


## Links
 * [Homepage](http://bailey.geek.nz/remote)
 * [Source](https://bitbucket.org/bailus/hax-for-kodi)
 * [Issues, Bugs and Feature Requests](https://bitbucket.org/bailus/hax-for-kodi/issues)
 * [Screenshots](http://imgur.com/a/ss0uj)
 * [Forum thread](http://forum.kodi.tv/showthread.php?tid=270698)
 * [Official Kodi addon repository](http://addons.kodi.tv/show/webinterface.hax/)
 * [Sam's Kodi addon repository](http://bailey.geek.nz/) [(source)](https://bitbucket.org/bailus/kodi-addons)


## Installation (Stable version)
The stable version is available from the official Kodi add-on repository. It can be downloaded and installed using Kodi's add-on manager.

Install the stable version of Hax from within Kodi [(v16 or above)](https://kodi.tv/download/) by going to:
 1. Settings
 2. Add-ons
 3. Install from repository
 4. Kodi add-on repository
 5. Web interface
 6. Hax
 7. Install


## Installation (Latest version)
The latest version can be installed from within Kodi after installing [Sam's Kodi addon repository](http://kodi.bailey.geek.nz/). Instructions for adding the repository to Kodi can be found [here](https://superrepo.org/get-started/) - just replace "http://srp.nu/" with "http://kodi.bailey.geek.nz/".

Install Hax from within Kodi [(v17 or above)](https://kodi.tv/download/) by going to:
 1. Settings
 2. Add-ons
 3. Install from repository
 4. Sam's Kodi addon repository
 5. Web interface
 6. Hax
 7. Install


## Configuration
See also: http://kodi.wiki/view/web_interface

After installation, Kodi's web interface can be enabled by going to:
 1. Settings
 2. Service Settings
 3. Control

To access the interface, you need to turn on "Allow remote control via HTTP". I use the following settings:
 - Allow remote control via HTTP: on
 - Port: 80
 - Username: kodi
 - Password: 
 - Web interface: Hax

You can then visit "http://localhost/" in your web browser to use Hax.

To access it from another computer (or phone .etc) on your network you'll need to [find your computer's name](http://its.yale.edu/how-to/article-how-find-your-computers-name) or [ip address](http://its.yale.edu/how-to/article-finding-your-ip-and-network-hardware-addresses). Then visit "http://<computer name>/" or "http://<ip address>/" in your web browser to use Hax.


## Development
To install the development version, use [Git](https://git-scm.com/) to clone this repository into your [Kodi plugins directory](http://www.htpcbeginner.com/kodi-folder-location-and-structure/). "Hax development version" will appear under the "My addons" menu and can be set up like any other web interface.

This version of Hax can be used without running the build command. It's useful for development but can be slow and takes a *very* long time to load, especially on mobile devices. A faster version can be built using the `npm run build` command (see below).

The index.html file in the root directory uses SystemJS, jspm and Babel to dynamically download, compile and load the modules and their dependencies from within the browser. Note that styles (CSS) can't be compiled in the browser using [PostCSS-cssnext](http://cssnext.io/) so those features won't be available.


### Building
```bash
npm install
jspm install
npm run build
```

A self-contained build will be saved into the ./build folder.


### Stack
#### Development
 * [Babel](https://babeljs.io/) - Latest JavaScript (es2015/es6) syntax support
 * [PostCSS-cssnext](http://cssnext.io/) - Latest CSS syntax support
 * [SystemJS](https://github.com/systemjs/systemjs) - Dynamic Module loader
 * [jspm](http://jspm.io/) - Browser package management
 * [npm](https://www.npmjs.com/) - Build tool

#### Libraries
 * [handlebars](http://handlebarsjs.com/) - Templating
 * [Moment.js](http://momentjs.com/) - Date parsing and formatting
