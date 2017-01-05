SystemJS.config({
  browserConfig: {
    "paths": {
      "github:": "/jspm_packages/github/",
      "npm:": "/jspm_packages/npm/",
      "Hax/": "/"
    }
  },
  nodeConfig: {
    "paths": {
      "github:": "jspm_packages/github/",
      "npm:": "jspm_packages/npm/",
      "Hax/": ""
    }
  },
  devConfig: {
    "map": {
      "babel": "npm:babel-core@5.8.38",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.6",
      "hbsrender": "npm:hbsrender@1.0.9",
      "uglify-js": "npm:uglify-js@2.7.5",
      "tty": "npm:jspm-nodelibs-tty@0.2.0",
      "plugin-typescript": "github:frankwallis/plugin-typescript@5.3.3",
      "net": "npm:jspm-nodelibs-net@0.2.0"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      },
      "npm:core-js@1.2.6": {
        "map": {
          "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        }
      },
      "npm:hbsrender@1.0.9": {
        "map": {
          "handlebars": "npm:handlebars@4.0.6",
          "commander": "npm:commander@2.9.0"
        }
      },
      "npm:commander@2.9.0": {
        "map": {
          "graceful-readlink": "npm:graceful-readlink@1.0.1"
        }
      },
      "npm:handlebars@4.0.6": {
        "map": {
          "optimist": "npm:optimist@0.6.1",
          "async": "npm:async@1.5.2",
          "source-map": "npm:source-map@0.4.4"
        }
      },
      "npm:optimist@0.6.1": {
        "map": {
          "minimist": "npm:minimist@0.0.8",
          "wordwrap": "npm:wordwrap@0.0.3"
        }
      },
      "npm:uglify-js@2.7.5": {
        "map": {
          "async": "npm:async@0.2.10",
          "source-map": "npm:source-map@0.5.6",
          "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2",
          "yargs": "npm:yargs@3.10.0"
        }
      },
      "npm:source-map@0.4.4": {
        "map": {
          "amdefine": "npm:amdefine@1.0.0"
        }
      },
      "npm:yargs@3.10.0": {
        "map": {
          "decamelize": "npm:decamelize@1.2.0",
          "cliui": "npm:cliui@2.1.0",
          "camelcase": "npm:camelcase@1.2.1",
          "window-size": "npm:window-size@0.1.0"
        }
      },
      "npm:cliui@2.1.0": {
        "map": {
          "wordwrap": "npm:wordwrap@0.0.2",
          "right-align": "npm:right-align@0.1.3",
          "center-align": "npm:center-align@0.1.3"
        }
      },
      "npm:right-align@0.1.3": {
        "map": {
          "align-text": "npm:align-text@0.1.4"
        }
      },
      "npm:center-align@0.1.3": {
        "map": {
          "align-text": "npm:align-text@0.1.4",
          "lazy-cache": "npm:lazy-cache@1.0.4"
        }
      },
      "npm:align-text@0.1.4": {
        "map": {
          "kind-of": "npm:kind-of@3.1.0",
          "longest": "npm:longest@1.0.1",
          "repeat-string": "npm:repeat-string@1.6.1"
        }
      },
      "npm:kind-of@3.1.0": {
        "map": {
          "is-buffer": "npm:is-buffer@1.1.4"
        }
      },
      "github:frankwallis/plugin-typescript@5.3.3": {
        "map": {
          "typescript": "npm:typescript@2.1.4"
        }
      },
      "npm:typescript@2.1.4": {
        "map": {
          "source-map-support": "npm:source-map-support@0.4.8"
        }
      },
      "npm:source-map-support@0.4.8": {
        "map": {
          "source-map": "npm:source-map@0.5.6"
        }
      }
    }
  },
  transpiler: "plugin-typescript",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  packages: {
    "Hax": {
      "main": "main.js"
    },
    "npm:typescript@1.8.10": {
      "map": {}
    }
  },
  depCache: {
    "js/main.js": [
      "./util",
      "./xbmc",
      "handlebars",
      "./loadPages",
      "./player"
    ],
    "github:components/handlebars.js@4.0.5.js": [
      "github:components/handlebars.js@4.0.5/handlebars"
    ],
    "js/xbmc.js": [
      "./jsonrpc"
    ],
    "js/loadPages.js": [
      "./pages",
      "../pages/loadAll.js"
    ],
    "js/player.js": [
      "./progress"
    ],
    "js/pages.js": [
      "./hash"
    ],
    "pages/loadAll.js": [
      "./actors.js",
      "./addon.js",
      "./addons.js",
      "./album.js",
      "./albums.js",
      "./artist.js",
      "./artists.js",
      "./broadcast.js",
      "./channelgroup.js",
      "./channel.js",
      "./channels.js",
      "./directory.js",
      "./episode.js",
      "./files.js",
      "./genres.js",
      "./guide.js",
      "./home.js",
      "./loadAll.js",
      "./menu.js",
      "./movie.js",
      "./movies.js",
      "./musicvideo.js",
      "./musicvideos.js",
      "./playlists.js",
      "./tvshow.js",
      "./tvshows.js"
    ],
    "pages/actors.js": [
      "../js/page"
    ],
    "pages/addon.js": [
      "../js/page"
    ],
    "pages/addons.js": [
      "../js/page"
    ],
    "pages/album.js": [
      "../js/page",
      "../js/util"
    ],
    "pages/albums.js": [
      "../js/page"
    ],
    "pages/artist.js": [
      "../js/page"
    ],
    "pages/artists.js": [
      "../js/page"
    ],
    "pages/broadcast.js": [
      "../js/page"
    ],
    "pages/channelgroup.js": [
      "../js/page"
    ],
    "pages/channel.js": [
      "../js/page"
    ],
    "pages/channels.js": [
      "../js/page"
    ],
    "pages/directory.js": [
      "../js/page"
    ],
    "pages/episode.js": [
      "../js/page",
      "../js/util"
    ],
    "pages/files.js": [
      "../js/page"
    ],
    "pages/genres.js": [
      "../js/page"
    ],
    "pages/guide.js": [
      "../js/page",
      "../js/util",
      "moment"
    ],
    "pages/home.js": [
      "../js/page"
    ],
    "pages/menu.js": [
      "../js/page",
      "../js/util"
    ],
    "pages/movie.js": [
      "../js/page",
      "../js/util"
    ],
    "pages/movies.js": [
      "../js/page",
      "../js/util"
    ],
    "pages/musicvideo.js": [
      "../js/page",
      "../js/util"
    ],
    "pages/musicvideos.js": [
      "../js/page"
    ],
    "pages/playlists.js": [
      "../js/page",
      "../js/util"
    ],
    "pages/tvshow.js": [
      "../js/page",
      "../js/util"
    ],
    "pages/tvshows.js": [
      "../js/page"
    ],
    "npm:moment@2.13.0.js": [
      "npm:moment@2.13.0/moment.js"
    ]
  },
  map: {
    "traceur": "github:jmcriffey/bower-traceur@0.0.93",
    "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.93",
    "typescript": "npm:typescript@1.8.10"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
    "babel-polyfill": "npm:babel-polyfill@6.9.1",
    "babel-preset-es2015": "npm:babel-preset-es2015@6.9.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "handlebars": "github:components/handlebars.js@4.0.5",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "json": "github:systemjs/plugin-json@0.1.2",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "moment": "npm:moment@2.13.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "whatwg-fetch": "npm:whatwg-fetch@1.0.0"
  },
  packages: {
    "npm:amdefine@1.0.0": {
      "map": {}
    },
    "npm:babel-code-frame@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "chalk": "npm:chalk@1.1.3",
        "esutils": "npm:esutils@2.0.2",
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:babel-core@6.10.4": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.8.0",
        "babel-generator": "npm:babel-generator@6.10.2",
        "babel-helpers": "npm:babel-helpers@6.8.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-register": "npm:babel-register@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-types": "npm:babel-types@6.10.2",
        "babylon": "npm:babylon@6.8.1",
        "convert-source-map": "npm:convert-source-map@1.2.0",
        "debug": "npm:debug@2.2.0",
        "json5": "npm:json5@0.4.0",
        "lodash": "npm:lodash@4.13.1",
        "minimatch": "npm:minimatch@3.0.2",
        "path-exists": "npm:path-exists@1.0.0",
        "path-is-absolute": "npm:path-is-absolute@1.0.0",
        "private": "npm:private@0.1.6",
        "shebang-regex": "npm:shebang-regex@1.0.0",
        "slash": "npm:slash@1.0.0",
        "source-map": "npm:source-map@0.5.6",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:babel-generator@6.10.2": {
      "map": {
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.2",
        "detect-indent": "npm:detect-indent@3.0.1",
        "lodash": "npm:lodash@4.13.1",
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:babel-helper-call-delegate@6.8.0": {
      "map": {
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-helper-define-map@6.9.0": {
      "map": {
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.2",
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "npm:babel-helper-function-name@6.8.0": {
      "map": {
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-helper-get-function-arity@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-helper-hoist-variables@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-helper-optimise-call-expression@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-helper-regex@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.2",
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "npm:babel-helper-replace-supers@6.8.0": {
      "map": {
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-helpers@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-template": "npm:babel-template@6.9.0"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-check-es2015-constants@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-syntax-async-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.10.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-types": "npm:babel-types@6.10.2",
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "npm:babel-plugin-transform-es2015-classes@6.9.0": {
      "map": {
        "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.8.0",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.8.0": {
      "map": {
        "babel-helper-define-map": "npm:babel-helper-define-map@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-template": "npm:babel-template@6.9.0"
      }
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-plugin-transform-es2015-for-of@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-es2015-function-name@6.9.0": {
      "map": {
        "babel-helper-function-name": "npm:babel-helper-function-name@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-plugin-transform-es2015-literals@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.10.3": {
      "map": {
        "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-plugin-transform-es2015-object-super@6.8.0": {
      "map": {
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-es2015-parameters@6.9.0": {
      "map": {
        "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.8.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-template": "npm:babel-template@6.9.0",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-plugin-transform-es2015-spread@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0": {
      "map": {
        "babel-helper-regex": "npm:babel-helper-regex@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.8.0": {
      "map": {
        "babel-helper-regex": "npm:babel-helper-regex@6.9.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "regexpu-core": "npm:regexpu-core@1.0.0"
      }
    },
    "npm:babel-plugin-transform-regenerator@6.9.0": {
      "map": {
        "babel-core": "npm:babel-core@6.10.4",
        "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.8.0",
        "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.10.1",
        "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-types": "npm:babel-types@6.10.2",
        "babylon": "npm:babylon@6.8.1",
        "private": "npm:private@0.1.6"
      }
    },
    "npm:babel-plugin-transform-strict-mode@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.2"
      }
    },
    "npm:babel-polyfill@6.9.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "core-js": "npm:core-js@2.4.0",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
      }
    },
    "npm:babel-preset-es2015@6.9.0": {
      "map": {
        "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.8.0",
        "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
        "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0",
        "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.10.1",
        "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.9.0",
        "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.8.0",
        "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.9.0",
        "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0",
        "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.8.0",
        "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
        "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.8.0",
        "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.10.3",
        "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.8.0",
        "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.9.0",
        "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.8.0",
        "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
        "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
        "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.8.0",
        "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.8.0",
        "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.8.0",
        "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.9.0"
      }
    },
    "npm:babel-register@6.9.0": {
      "map": {
        "babel-core": "npm:babel-core@6.10.4",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "core-js": "npm:core-js@2.4.0",
        "home-or-tmp": "npm:home-or-tmp@1.0.0",
        "lodash": "npm:lodash@4.13.1",
        "mkdirp": "npm:mkdirp@0.5.1",
        "path-exists": "npm:path-exists@1.0.0",
        "source-map-support": "npm:source-map-support@0.2.10"
      }
    },
    "npm:babel-runtime@6.9.2": {
      "map": {
        "core-js": "npm:core-js@2.4.0",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.5"
      }
    },
    "npm:babel-template@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "babel-types": "npm:babel-types@6.10.2",
        "babylon": "npm:babylon@6.8.1",
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "npm:babel-traverse@6.10.4": {
      "map": {
        "babel-code-frame": "npm:babel-code-frame@6.8.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-types": "npm:babel-types@6.10.2",
        "babylon": "npm:babylon@6.8.1",
        "debug": "npm:debug@2.2.0",
        "globals": "npm:globals@8.18.0",
        "invariant": "npm:invariant@2.2.1",
        "lodash": "npm:lodash@4.13.1"
      }
    },
    "npm:babel-types@6.10.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2",
        "babel-traverse": "npm:babel-traverse@6.10.4",
        "esutils": "npm:esutils@2.0.2",
        "lodash": "npm:lodash@4.13.1",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babylon@6.8.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.9.2"
      }
    },
    "npm:brace-expansion@1.1.5": {
      "map": {
        "balanced-match": "npm:balanced-match@0.4.1",
        "concat-map": "npm:concat-map@0.0.1"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:convert-source-map@1.2.0": {
      "map": {}
    },
    "npm:core-js@2.4.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:detect-indent@3.0.1": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1",
        "minimist": "npm:minimist@1.2.0",
        "repeating": "npm:repeating@1.1.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:get-stdin@4.0.1": {
      "map": {}
    },
    "npm:globals@8.18.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:home-or-tmp@1.0.0": {
      "map": {
        "os-tmpdir": "npm:os-tmpdir@1.0.1",
        "user-home": "npm:user-home@1.1.1"
      }
    },
    "npm:inherits@2.0.1": {
      "map": {}
    },
    "npm:invariant@2.2.1": {
      "map": {
        "loose-envify": "npm:loose-envify@1.2.0"
      }
    },
    "npm:is-finite@1.0.1": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.0"
      }
    },
    "npm:json5@0.4.0": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:lodash@4.13.1": {
      "map": {}
    },
    "npm:loose-envify@1.2.0": {
      "map": {
        "js-tokens": "npm:js-tokens@1.0.3"
      }
    },
    "npm:minimatch@3.0.2": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.5"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:os-tmpdir@1.0.1": {
      "map": {}
    },
    "npm:path-exists@1.0.0": {
      "map": {}
    },
    "npm:path-is-absolute@1.0.0": {
      "map": {}
    },
    "npm:punycode@1.3.2": {
      "map": {}
    },
    "npm:regenerator-runtime@0.9.5": {
      "map": {}
    },
    "npm:regexpu-core@1.0.0": {
      "map": {
        "regenerate": "npm:regenerate@1.3.1",
        "regjsgen": "npm:regjsgen@0.2.0",
        "regjsparser": "npm:regjsparser@0.1.5",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:regjsparser@0.1.5": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:repeating@1.1.3": {
      "map": {
        "is-finite": "npm:is-finite@1.0.1",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:source-map-support@0.2.10": {
      "map": {
        "source-map": "npm:source-map@0.1.32"
      }
    },
    "npm:source-map@0.1.32": {
      "map": {
        "amdefine": "npm:amdefine@1.0.0"
      }
    },
    "npm:source-map@0.5.6": {
      "map": {}
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:supports-color@2.0.0": {
      "map": {}
    },
    "npm:user-home@1.1.1": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "inherits": "npm:inherits@2.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "ieee754": "npm:ieee754@1.1.6",
        "isarray": "npm:isarray@1.0.0",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.5.0"
      }
    },
    "npm:stream-http@2.5.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "readable-stream": "npm:readable-stream@2.2.2",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hmac": "npm:create-hmac@1.1.4",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "browserify-sign": "npm:browserify-sign@4.0.0"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "randombytes": "npm:randombytes@2.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "ripemd160": "npm:ripemd160@1.0.1",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.3.2",
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.1",
        "hash.js": "npm:hash.js@1.0.3",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "cipher-base": "npm:cipher-base@1.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "bn.js": "npm:bn.js@4.11.6",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.1",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.1"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    }
  }
});
