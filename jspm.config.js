SystemJS.config({
  browserConfig: {
    "paths": {
      "npm:": "/jspm_packages/npm/",
      "github:": "/jspm_packages/github/"
    }
  },
  nodeConfig: {
    "paths": {
      "npm:": "jspm_packages/npm/",
      "github:": "jspm_packages/github/"
    }
  },
  devConfig: {
    "map": {
      "net": "npm:jspm-nodelibs-net@0.2.1",
      "hbsrender": "npm:hbsrender@1.0.9",
      "core-js": "npm:core-js@1.2.7",
      "babel": "npm:babel-core@5.8.38",
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "tty": "npm:jspm-nodelibs-tty@0.2.1",
      "uglify-js": "npm:uglify-js@2.8.29",
      "uglify-to-browserify": "npm:uglify-to-browserify@1.0.2"
    },
    "packages": {
      "npm:uglify-js@2.8.29": {
        "map": {
          "yargs": "npm:yargs@3.10.0",
          "source-map": "npm:source-map@0.5.7"
        }
      },
      "npm:hbsrender@1.0.9": {
        "map": {
          "commander": "npm:commander@2.9.0",
          "handlebars": "npm:handlebars@4.0.6"
        }
      },
      "npm:handlebars@4.0.6": {
        "map": {
          "source-map": "npm:source-map@0.4.4",
          "async": "npm:async@1.5.2",
          "optimist": "npm:optimist@0.6.1"
        }
      },
      "npm:yargs@3.10.0": {
        "map": {
          "window-size": "npm:window-size@0.1.0",
          "camelcase": "npm:camelcase@1.2.1",
          "decamelize": "npm:decamelize@1.2.0",
          "cliui": "npm:cliui@2.1.0"
        }
      },
      "npm:commander@2.9.0": {
        "map": {
          "graceful-readlink": "npm:graceful-readlink@1.0.1"
        }
      },
      "npm:source-map@0.4.4": {
        "map": {
          "amdefine": "npm:amdefine@1.0.1"
        }
      },
      "npm:cliui@2.1.0": {
        "map": {
          "right-align": "npm:right-align@0.1.3",
          "wordwrap": "npm:wordwrap@0.0.2",
          "center-align": "npm:center-align@0.1.3"
        }
      },
      "npm:optimist@0.6.1": {
        "map": {
          "wordwrap": "npm:wordwrap@0.0.2",
          "minimist": "npm:minimist@0.0.10"
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
          "kind-of": "npm:kind-of@3.2.2",
          "longest": "npm:longest@1.0.1",
          "repeat-string": "npm:repeat-string@1.6.1"
        }
      },
      "npm:kind-of@3.2.2": {
        "map": {
          "is-buffer": "npm:is-buffer@1.1.5"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0",
    "babel-polyfill": "npm:babel-polyfill@6.26.0",
    "babel-preset-es2015": "npm:babel-preset-es2015@6.24.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "events": "npm:jspm-nodelibs-events@0.2.2",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "handlebars": "github:components/handlebars.js@4.0.10",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "json": "github:systemjs/plugin-json@0.1.2",
    "lodash": "npm:lodash@4.17.4",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "moment": "npm:moment@2.18.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "whatwg-fetch": "npm:whatwg-fetch@1.1.1"
  },
  packages: {
    "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-polyfill@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "core-js": "npm:core-js@2.5.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.10.5"
      }
    },
    "npm:babel-preset-es2015@6.24.1": {
      "map": {
        "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0",
        "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.22.0",
        "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.24.1",
        "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.24.1",
        "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.24.1",
        "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.23.0",
        "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0",
        "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.26.0",
        "babel-plugin-transform-es2015-modules-umd": "npm:babel-plugin-transform-es2015-modules-umd@6.24.1",
        "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.0",
        "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.24.1",
        "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1",
        "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.22.0",
        "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.24.1",
        "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.24.1",
        "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.22.0",
        "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0",
        "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.24.1",
        "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.26.0",
        "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.24.1",
        "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.24.1",
        "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.23.0",
        "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.22.0",
        "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.24.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.2"
      }
    },
    "npm:babel-runtime@6.26.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.11.0",
        "core-js": "npm:core-js@2.5.1"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.7"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:babel-plugin-check-es2015-constants@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-classes@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.26.0",
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-duplicate-keys@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-template": "npm:babel-template@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-umd@6.24.1": {
      "map": {
        "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-template": "npm:babel-template@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.24.1",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-object-super@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1",
        "babel-template": "npm:babel-template@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-literals@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-amd@6.24.1": {
      "map": {
        "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.0",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-template": "npm:babel-template@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-function-name@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.1"
      }
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-parameters@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.24.1",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1"
      }
    },
    "npm:babel-plugin-transform-es2015-for-of@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "regexpu-core": "npm:regexpu-core@2.0.0",
        "babel-helper-regex": "npm:babel-helper-regex@6.26.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "querystring": "npm:querystring@0.2.0",
        "punycode": "npm:punycode@1.3.2"
      }
    },
    "npm:babel-plugin-transform-regenerator@6.26.0": {
      "map": {
        "regenerator-transform": "npm:regenerator-transform@0.10.1"
      }
    },
    "npm:stream-http@2.7.2": {
      "map": {
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0",
        "readable-stream": "npm:readable-stream@2.3.3",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:buffer@5.0.7": {
      "map": {
        "base64-js": "npm:base64-js@1.2.1",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:crypto-browserify@3.11.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.5",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.13"
      }
    },
    "npm:babel-helper-optimise-call-expression@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:babel-messages@6.23.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-helper-hoist-variables@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:babel-plugin-transform-strict-mode@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:babel-traverse@6.26.0": {
      "map": {
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "lodash": "npm:lodash@4.17.4",
        "babel-code-frame": "npm:babel-code-frame@6.26.0",
        "debug": "npm:debug@2.6.8",
        "globals": "npm:globals@9.18.0",
        "invariant": "npm:invariant@2.2.2",
        "babylon": "npm:babylon@6.18.0"
      }
    },
    "npm:babel-template@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "lodash": "npm:lodash@4.17.4",
        "babylon": "npm:babylon@6.18.0"
      }
    },
    "npm:babel-types@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "lodash": "npm:lodash@4.17.4",
        "esutils": "npm:esutils@2.0.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.3"
      }
    },
    "npm:babel-helper-replace-supers@6.24.1": {
      "map": {
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-messages": "npm:babel-messages@6.23.0",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:babel-helper-define-map@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:regenerator-transform@0.10.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "private": "npm:private@0.1.7"
      }
    },
    "npm:babel-helper-function-name@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-template": "npm:babel-template@6.26.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1"
      }
    },
    "npm:babel-helper-call-delegate@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-traverse": "npm:babel-traverse@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1"
      }
    },
    "npm:babel-helper-regex@6.26.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "lodash": "npm:lodash@4.17.4"
      }
    },
    "npm:babel-helper-get-function-arity@6.24.1": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0",
        "babel-types": "npm:babel-types@6.26.0"
      }
    },
    "npm:regexpu-core@2.0.0": {
      "map": {
        "regenerate": "npm:regenerate@1.3.2",
        "regjsgen": "npm:regjsgen@0.2.0",
        "regjsparser": "npm:regjsparser@0.1.5"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "string_decoder": "npm:string_decoder@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "isarray": "npm:isarray@1.0.0",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:babel-code-frame@6.26.0": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "chalk": "npm:chalk@1.1.3",
        "js-tokens": "npm:js-tokens@3.0.2"
      }
    },
    "npm:babel-plugin-transform-es2015-spread@6.22.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.24.1": {
      "map": {
        "babel-helper-regex": "npm:babel-helper-regex@6.26.0",
        "babel-types": "npm:babel-types@6.26.0",
        "babel-runtime": "npm:babel-runtime@6.26.0"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.8",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "ripemd160": "npm:ripemd160@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.4",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.1"
      }
    },
    "npm:debug@2.6.8": {
      "map": {
        "ms": "npm:ms@2.0.0"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@2.0.1",
        "cipher-base": "npm:cipher-base@1.0.4",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8",
        "parse-asn1": "npm:parse-asn1@5.1.0",
        "browserify-rsa": "npm:browserify-rsa@4.0.1"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.8",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:regjsparser@0.1.5": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:pbkdf2@3.0.13": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "create-hmac": "npm:create-hmac@1.1.6",
        "ripemd160": "npm:ripemd160@2.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "elliptic": "npm:elliptic@6.4.0",
        "bn.js": "npm:bn.js@4.11.8"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.2"
      }
    },
    "npm:loose-envify@1.3.1": {
      "map": {
        "js-tokens": "npm:js-tokens@3.0.2"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "has-ansi": "npm:has-ansi@2.0.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.2",
        "pbkdf2": "npm:pbkdf2@3.0.13",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:cipher-base@1.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "create-hash": "npm:create-hash@1.1.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "hash.js": "npm:hash.js@1.1.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.4",
        "inherits": "npm:inherits@2.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:evp_bytestokey@1.0.2": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "md5.js": "npm:md5.js@1.3.4"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.8",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:md5.js@1.3.4": {
      "map": {
        "hash-base": "npm:hash-base@3.0.4",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:hash-base@3.0.4": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    }
  }
});
