# Hax v0.5.1

[Samuel Bailey](http://bailey.geek.nz) <[sam@bailey.geek.nz](mailto:sam@bailey.geek.nz)>


A fast and simple remote control for mobile devices.

![oUNe3E9.png](https://bitbucket.org/repo/dMaXXg/images/3495096627-oUNe3E9.png)


## Links
 * [Homepage](http://bailey.geek.nz/remote)
 * [Source](https://github.com/bailus/hax)
 * [Issues, Bugs and Feature Requests](https://github.com/bailus/hax/issues)
 * [Screenshots](http://imgur.com/a/ss0uj)
 * [Forum thread](http://forum.kodi.tv/showthread.php?tid=270698)
 * [Kodi addon repository](http://addons.kodi.tv/show/webinterface.hax/)


## Development
For development, Hax can be used without running the build command. The index.html file in the root directory uses SystemJS, jspm and Babel to dynamically download, compile and load the modules and their dependencies from within the browser. Note that styles (CSS) can't be compiled in the browser using [PostCSS-cssnext](http://cssnext.io/) so those features won't be available.

This is useful for testing purposes but can take a *very* long time to load, especially on mobile devices. A faster version can be built using the `npm run build` command (see below).


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