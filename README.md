# Hax v0.3.3

[Samuel Bailey](http://bailey.geek.nz) <[sam@bailey.geek.nz](mailto:sam@bailey.geek.nz)>


A fast and simple remote control for mobile devices.


## Links
 * [Homepage](http://bailey.geek.nz/remote)
 * [Source](https://github.com/bailus/hax)
 * [Issues, Bugs and Feature Requests](https://github.com/bailus/hax/issues)
 * [Screenshots](http://imgur.com/a/ss0uj)
 * [Forum thread](http://forum.kodi.tv/showthread.php?tid=270698)
 * [Kodi addon repository](http://addons.kodi.tv/show/webinterface.hax/)


## Development
For testing purposes, Hax can be used without running the build command. The index.html file in the root directory uses SystemJS, jspm and Babel to dynamically download, compile and load the modules and their dependencies from within the browser.

This is useful for testing purposes but can take a *very* long time to load, especially on mobile devices. A fast version can be built using the `npm run build` command (see below).


## Compiling
```bash
npm install
npm run build
```

A self-contained build will be saved into the ./build folder.


 ## Stack
 * [npm](https://www.npmjs.com/) - Build tool
 * [jspm](http://jspm.io/) - Browser package management
 * [SystemJS](https://github.com/systemjs/systemjs) - Dynamic Module loader
 * [Babel](https://babeljs.io/) - Next generation JavaScript (es2015/es6) support
 * [PostCSS-cssnext](http://cssnext.io/) - Latest CSS syntax support
 * [handlebars](http://handlebarsjs.com/) - Templating