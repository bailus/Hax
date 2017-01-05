!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);void 0!==typeof c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
!function(e){function n(e,n){e=e.replace(l,"");var r=e.match(u),t=(r[1].split(",")[n]||"require").replace(s,""),i=p[t]||(p[t]=new RegExp(a+t+f,"g"));i.lastIndex=0;for(var o,c=[];o=i.exec(e);)c.push(o[2]||o[3]);return c}function r(e,n,t,o){if("object"==typeof e&&!(e instanceof Array))return r.apply(null,Array.prototype.splice.call(arguments,1,arguments.length-1));if("string"==typeof e&&"function"==typeof n&&(e=[e]),!(e instanceof Array)){if("string"==typeof e){var l=i.get(e);return l.__useDefault?l["default"]:l}throw new TypeError("Invalid require")}for(var a=[],f=0;f<e.length;f++)a.push(i["import"](e[f],o));Promise.all(a).then(function(e){n&&n.apply(null,e)},t)}function t(t,l,a){"string"!=typeof t&&(a=l,l=t,t=null),l instanceof Array||(a=l,l=["require","exports","module"].splice(0,a.length)),"function"!=typeof a&&(a=function(e){return function(){return e}}(a)),void 0===l[l.length-1]&&l.pop();var f,u,s;-1!=(f=o.call(l,"require"))&&(l.splice(f,1),t||(l=l.concat(n(a.toString(),f)))),-1!=(u=o.call(l,"exports"))&&l.splice(u,1),-1!=(s=o.call(l,"module"))&&l.splice(s,1);var p={name:t,deps:l,execute:function(n,t,o){for(var p=[],c=0;c<l.length;c++)p.push(n(l[c]));o.uri=o.id,o.config=function(){},-1!=s&&p.splice(s,0,o),-1!=u&&p.splice(u,0,t),-1!=f&&p.splice(f,0,function(e,t,l){return"string"==typeof e&&"function"!=typeof t?n(e):r.call(i,e,t,l,o.id)});var d=a.apply(-1==u?e:t,p);return"undefined"==typeof d&&o&&(d=o.exports),"undefined"!=typeof d?d:void 0}};if(t)c.anonDefine||c.isBundle?c.anonDefine&&c.anonDefine.name&&(c.anonDefine=null):c.anonDefine=p,c.isBundle=!0,i.registerDynamic(p.name,p.deps,!1,p.execute);else{if(c.anonDefine&&!c.anonDefine.name)throw new Error("Multiple anonymous defines in module "+t);c.anonDefine=p}}var i=$__System,o=Array.prototype.indexOf||function(e){for(var n=0,r=this.length;r>n;n++)if(this[n]===e)return n;return-1},l=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,a="(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])",f="\\s*\\(\\s*(\"([^\"]+)\"|'([^']+)')\\s*\\)",u=/\(([^\)]*)\)/,s=/^\s+|\s+$/g,p={};t.amd={};var c={isBundle:!1,anonDefine:null};i.amdDefine=t,i.amdRequire=r}("undefined"!=typeof self?self:global);
$__System.registerDynamic('2', ['3', '4', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var getKeys = $__require('3'),
      toIObject = $__require('4');
  module.exports = function (object, el) {
    var O = toIObject(object),
        keys = getKeys(O),
        length = keys.length,
        index = 0,
        key;
    while (length > index) if (O[key = keys[index++]] === el) return key;
  };
  return module.exports;
});
$__System.registerDynamic('6', ['3', '7', '8', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // all enumerable object keys, includes symbols
  var getKeys = $__require('3'),
      gOPS = $__require('7'),
      pIE = $__require('8');
  module.exports = function (it) {
    var result = getKeys(it),
        getSymbols = gOPS.f;
    if (getSymbols) {
      var symbols = getSymbols(it),
          isEnum = pIE.f,
          i = 0,
          key;
      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }return result;
  };
  return module.exports;
});
$__System.registerDynamic('9', ['a', 'b', 'c', 'd', 'e', 'f', '10', '11', '12', '13', '14', '15', '16', '2', '6', '17', '18', '4', '19', '1a', '1b', '1c', '1d', '1e', '3', '1f', '8', '7', '20', '21', '5'], true, function ($__require, exports, module) {
  'use strict';
  // ECMAScript 6 symbols shim

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('a'),
      has = $__require('b'),
      DESCRIPTORS = $__require('c'),
      $export = $__require('d'),
      redefine = $__require('e'),
      META = $__require('f').KEY,
      $fails = $__require('10'),
      shared = $__require('11'),
      setToStringTag = $__require('12'),
      uid = $__require('13'),
      wks = $__require('14'),
      wksExt = $__require('15'),
      wksDefine = $__require('16'),
      keyOf = $__require('2'),
      enumKeys = $__require('6'),
      isArray = $__require('17'),
      anObject = $__require('18'),
      toIObject = $__require('4'),
      toPrimitive = $__require('19'),
      createDesc = $__require('1a'),
      _create = $__require('1b'),
      gOPNExt = $__require('1c'),
      $GOPD = $__require('1d'),
      $DP = $__require('1e'),
      $keys = $__require('3'),
      gOPD = $GOPD.f,
      dP = $DP.f,
      gOPN = gOPNExt.f,
      $Symbol = global.Symbol,
      $JSON = global.JSON,
      _stringify = $JSON && $JSON.stringify,
      PROTOTYPE = 'prototype',
      HIDDEN = wks('_hidden'),
      TO_PRIMITIVE = wks('toPrimitive'),
      isEnum = {}.propertyIsEnumerable,
      SymbolRegistry = shared('symbol-registry'),
      AllSymbols = shared('symbols'),
      OPSymbols = shared('op-symbols'),
      ObjectProto = Object[PROTOTYPE],
      USE_NATIVE = typeof $Symbol == 'function',
      QObject = global.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDesc = DESCRIPTORS && $fails(function () {
    return _create(dP({}, 'a', {
      get: function () {
        return dP(this, 'a', { value: 7 }).a;
      }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    dP(it, key, D);
    if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
  } : dP;

  var wrap = function (tag) {
    var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
    anObject(it);
    key = toPrimitive(key, true);
    anObject(D);
    if (has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = _create(D, { enumerable: createDesc(0, false) });
      }return setSymbolDesc(it, key, D);
    }return dP(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P)),
        i = 0,
        l = keys.length,
        key;
    while (l > i) $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create(it, P) {
    return P === undefined ? _create(it) : $defineProperties(_create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = toPrimitive(key, true));
    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = toIObject(it);
    key = toPrimitive(key, true);
    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
    var D = gOPD(it, key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN(toIObject(it)),
        result = [],
        i = 0,
        key;
    while (names.length > i) {
      if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    }return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto,
        names = gOPN(IS_OP ? OPSymbols : toIObject(it)),
        result = [],
        i = 0,
        key;
    while (names.length > i) {
      if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
    }return result;
  };

  // 19.4.1.1 Symbol([description])
  if (!USE_NATIVE) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
      var $set = function (value) {
        if (this === ObjectProto) $set.call(OPSymbols, value);
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, createDesc(1, value));
      };
      if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
      return wrap(tag);
    };
    redefine($Symbol[PROTOTYPE], 'toString', function toString() {
      return this._k;
    });

    $GOPD.f = $getOwnPropertyDescriptor;
    $DP.f = $defineProperty;
    $__require('1f').f = gOPNExt.f = $getOwnPropertyNames;
    $__require('8').f = $propertyIsEnumerable;
    $__require('7').f = $getOwnPropertySymbols;

    if (DESCRIPTORS && !$__require('20')) {
      redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    wksExt.f = function (name) {
      return wrap(wks(name));
    };
  }

  $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

  for (var symbols =
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), i = 0; symbols.length > i;) wks(symbols[i++]);

  for (var symbols = $keys(wks.store), i = 0; symbols.length > i;) wksDefine(symbols[i++]);

  $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function (key) {
      return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(key) {
      if (isSymbol(key)) return keyOf(SymbolRegistry, key);
      throw TypeError(key + ' is not a symbol!');
    },
    useSetter: function () {
      setter = true;
    },
    useSimple: function () {
      setter = false;
    }
  });

  $export($export.S + $export.F * !USE_NATIVE, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // 24.3.2 JSON.stringify(value [, replacer [, space]])
  $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      var args = [it],
          i = 1,
          replacer,
          $replacer;
      while (arguments.length > i) args.push(arguments[i++]);
      replacer = args[1];
      if (typeof replacer == 'function') $replacer = replacer;
      if ($replacer || !isArray(replacer)) replacer = function (key, value) {
        if ($replacer) value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  });

  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
  $Symbol[PROTOTYPE][TO_PRIMITIVE] || $__require('21')($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  setToStringTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  setToStringTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  setToStringTag(global.JSON, 'JSON', true);
  return module.exports;
});
$__System.registerDynamic('22', ['d', '1b', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d');
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  $export($export.S, 'Object', { create: $__require('1b') });
  return module.exports;
});
$__System.registerDynamic('23', ['d', 'c', '1e', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d');
  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  $export($export.S + $export.F * !$__require('c'), 'Object', { defineProperty: $__require('1e').f });
  return module.exports;
});
$__System.registerDynamic('24', ['d', 'c', '25', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d');
  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
  $export($export.S + $export.F * !$__require('c'), 'Object', { defineProperties: $__require('25') });
  return module.exports;
});
$__System.registerDynamic('26', ['4', '1d', '27', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  var toIObject = $__require('4'),
      $getOwnPropertyDescriptor = $__require('1d').f;

  $__require('27')('getOwnPropertyDescriptor', function () {
    return function getOwnPropertyDescriptor(it, key) {
      return $getOwnPropertyDescriptor(toIObject(it), key);
    };
  });
  return module.exports;
});
$__System.registerDynamic('28', ['29', '2a', '27', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.9 Object.getPrototypeOf(O)
  var toObject = $__require('29'),
      $getPrototypeOf = $__require('2a');

  $__require('27')('getPrototypeOf', function () {
    return function getPrototypeOf(it) {
      return $getPrototypeOf(toObject(it));
    };
  });
  return module.exports;
});
$__System.registerDynamic('2b', ['29', '3', '27', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.14 Object.keys(O)
  var toObject = $__require('29'),
      $keys = $__require('3');

  $__require('27')('keys', function () {
    return function keys(it) {
      return $keys(toObject(it));
    };
  });
  return module.exports;
});
$__System.registerDynamic('1c', ['4', '1f', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  var toIObject = $__require('4'),
      gOPN = $__require('1f').f,
      toString = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  module.exports.f = function getOwnPropertyNames(it) {
    return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
  };
  return module.exports;
});
$__System.registerDynamic('2c', ['27', '1c', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  $__require('27')('getOwnPropertyNames', function () {
    return $__require('1c').f;
  });
  return module.exports;
});
$__System.registerDynamic('2d', ['2e', 'f', '27', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.5 Object.freeze(O)
  var isObject = $__require('2e'),
      meta = $__require('f').onFreeze;

  $__require('27')('freeze', function ($freeze) {
    return function freeze(it) {
      return $freeze && isObject(it) ? $freeze(meta(it)) : it;
    };
  });
  return module.exports;
});
$__System.registerDynamic('2f', ['2e', 'f', '27', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.17 Object.seal(O)
  var isObject = $__require('2e'),
      meta = $__require('f').onFreeze;

  $__require('27')('seal', function ($seal) {
    return function seal(it) {
      return $seal && isObject(it) ? $seal(meta(it)) : it;
    };
  });
  return module.exports;
});
$__System.registerDynamic('30', ['2e', 'f', '27', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.15 Object.preventExtensions(O)
  var isObject = $__require('2e'),
      meta = $__require('f').onFreeze;

  $__require('27')('preventExtensions', function ($preventExtensions) {
    return function preventExtensions(it) {
      return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
    };
  });
  return module.exports;
});
$__System.registerDynamic('31', ['2e', '27', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.12 Object.isFrozen(O)
  var isObject = $__require('2e');

  $__require('27')('isFrozen', function ($isFrozen) {
    return function isFrozen(it) {
      return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
    };
  });
  return module.exports;
});
$__System.registerDynamic('32', ['2e', '27', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.13 Object.isSealed(O)
  var isObject = $__require('2e');

  $__require('27')('isSealed', function ($isSealed) {
    return function isSealed(it) {
      return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
    };
  });
  return module.exports;
});
$__System.registerDynamic('27', ['d', '33', '10', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // most Object methods by ES6 should accept primitives
  var $export = $__require('d'),
      core = $__require('33'),
      fails = $__require('10');
  module.exports = function (KEY, exec) {
    var fn = (core.Object || {})[KEY] || Object[KEY],
        exp = {};
    exp[KEY] = exec(fn);
    $export($export.S + $export.F * fails(function () {
      fn(1);
    }), 'Object', exp);
  };
  return module.exports;
});
$__System.registerDynamic('34', ['2e', '27', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.11 Object.isExtensible(O)
  var isObject = $__require('2e');

  $__require('27')('isExtensible', function ($isExtensible) {
    return function isExtensible(it) {
      return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
    };
  });
  return module.exports;
});
$__System.registerDynamic('35', ['d', '36', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.3.1 Object.assign(target, source)
  var $export = $__require('d');

  $export($export.S + $export.F, 'Object', { assign: $__require('36') });
  return module.exports;
});
$__System.registerDynamic('37', ['d', '38', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.3.10 Object.is(value1, value2)
  var $export = $__require('d');
  $export($export.S, 'Object', { is: $__require('38') });
  return module.exports;
});
$__System.registerDynamic('39', ['d', '3a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.3.19 Object.setPrototypeOf(O, proto)
  var $export = $__require('d');
  $export($export.S, 'Object', { setPrototypeOf: $__require('3a').set });
  return module.exports;
});
$__System.registerDynamic('3b', ['3c', '14', 'e', '5'], true, function ($__require, exports, module) {
  'use strict';
  // 19.1.3.6 Object.prototype.toString()

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var classof = $__require('3c'),
      test = {};
  test[$__require('14')('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    $__require('e')(Object.prototype, 'toString', function toString() {
      return '[object ' + classof(this) + ']';
    }, true);
  }
  return module.exports;
});
$__System.registerDynamic('3d', ['d', '3e', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
  var $export = $__require('d');

  $export($export.P, 'Function', { bind: $__require('3e') });
  return module.exports;
});
$__System.registerDynamic('3f', ['1e', '1a', 'b', 'c', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var dP = $__require('1e').f,
      createDesc = $__require('1a'),
      has = $__require('b'),
      FProto = Function.prototype,
      nameRE = /^\s*function ([^ (]*)/,
      NAME = 'name';

  var isExtensible = Object.isExtensible || function () {
    return true;
  };

  // 19.2.4.2 name
  NAME in FProto || $__require('c') && dP(FProto, NAME, {
    configurable: true,
    get: function () {
      try {
        var that = this,
            name = ('' + that).match(nameRE)[1];
        has(that, NAME) || !isExtensible(that) || dP(that, NAME, createDesc(5, name));
        return name;
      } catch (e) {
        return '';
      }
    }
  });
  return module.exports;
});
$__System.registerDynamic('40', ['2e', '2a', '14', '1e', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var isObject = $__require('2e'),
      getPrototypeOf = $__require('2a'),
      HAS_INSTANCE = $__require('14')('hasInstance'),
      FunctionProto = Function.prototype;
  // 19.2.3.6 Function.prototype[@@hasInstance](V)
  if (!(HAS_INSTANCE in FunctionProto)) $__require('1e').f(FunctionProto, HAS_INSTANCE, { value: function (O) {
      if (typeof this != 'function' || !isObject(O)) return false;
      if (!isObject(this.prototype)) return O instanceof this;
      // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
      while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
      return false;
    } });
  return module.exports;
});
$__System.registerDynamic('41', ['d', '42', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $parseInt = $__require('42');
  // 18.2.5 parseInt(string, radix)
  $export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });
  return module.exports;
});
$__System.registerDynamic('43', ['d', '44', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $parseFloat = $__require('44');
  // 18.2.4 parseFloat(string)
  $export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });
  return module.exports;
});
$__System.registerDynamic('45', ['a', 'b', '46', '47', '19', '10', '1f', '1d', '1e', '48', '1b', 'c', 'e', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('a'),
      has = $__require('b'),
      cof = $__require('46'),
      inheritIfRequired = $__require('47'),
      toPrimitive = $__require('19'),
      fails = $__require('10'),
      gOPN = $__require('1f').f,
      gOPD = $__require('1d').f,
      dP = $__require('1e').f,
      $trim = $__require('48').trim,
      NUMBER = 'Number',
      $Number = global[NUMBER],
      Base = $Number,
      proto = $Number.prototype
  // Opera ~12 has broken Object#toString
  ,
      BROKEN_COF = cof($__require('1b')(proto)) == NUMBER,
      TRIM = 'trim' in String.prototype;

  // 7.1.3 ToNumber(argument)
  var toNumber = function (argument) {
    var it = toPrimitive(argument, false);
    if (typeof it == 'string' && it.length > 2) {
      it = TRIM ? it.trim() : $trim(it, 3);
      var first = it.charCodeAt(0),
          third,
          radix,
          maxCode;
      if (first === 43 || first === 45) {
        third = it.charCodeAt(2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (it.charCodeAt(1)) {
          case 66:case 98:
            radix = 2;maxCode = 49;break; // fast equal /^0b[01]+$/i
          case 79:case 111:
            radix = 8;maxCode = 55;break; // fast equal /^0o[0-7]+$/i
          default:
            return +it;
        }
        for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
          code = digits.charCodeAt(i);
          // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        }return parseInt(digits, radix);
      }
    }return +it;
  };

  if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
    $Number = function Number(value) {
      var it = arguments.length < 1 ? 0 : value,
          that = this;
      return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () {
        proto.valueOf.call(that);
      }) : cof(that) != NUMBER) ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
    };
    for (var keys = $__require('c') ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' + 'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger').split(','), j = 0, key; keys.length > j; j++) {
      if (has(Base, key = keys[j]) && !has($Number, key)) {
        dP($Number, key, gOPD(Base, key));
      }
    }
    $Number.prototype = proto;
    proto.constructor = $Number;
    $__require('e')(global, NUMBER, $Number);
  }
  return module.exports;
});
$__System.registerDynamic('49', ['d', '4a', '4b', '4c', '4d', '10', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      anInstance = $__require('4a'),
      toInteger = $__require('4b'),
      aNumberValue = $__require('4c'),
      repeat = $__require('4d'),
      $toFixed = 1..toFixed,
      floor = Math.floor,
      data = [0, 0, 0, 0, 0, 0],
      ERROR = 'Number.toFixed: incorrect invocation!',
      ZERO = '0';

  var multiply = function (n, c) {
    var i = -1,
        c2 = c;
    while (++i < 6) {
      c2 += n * data[i];
      data[i] = c2 % 1e7;
      c2 = floor(c2 / 1e7);
    }
  };
  var divide = function (n) {
    var i = 6,
        c = 0;
    while (--i >= 0) {
      c += data[i];
      data[i] = floor(c / n);
      c = c % n * 1e7;
    }
  };
  var numToString = function () {
    var i = 6,
        s = '';
    while (--i >= 0) {
      if (s !== '' || i === 0 || data[i] !== 0) {
        var t = String(data[i]);
        s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
      }
    }return s;
  };
  var pow = function (x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };
  var log = function (x) {
    var n = 0,
        x2 = x;
    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }
    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    }return n;
  };

  $export($export.P + $export.F * (!!$toFixed && (0.00008.toFixed(3) !== '0.000' || 0.9.toFixed(0) !== '1' || 1.255.toFixed(2) !== '1.25' || 1000000000000000128..toFixed(0) !== '1000000000000000128') || !$__require('10')(function () {
    // V8 ~ Android 4.3-
    $toFixed.call({});
  })), 'Number', {
    toFixed: function toFixed(fractionDigits) {
      var x = aNumberValue(this, ERROR),
          f = toInteger(fractionDigits),
          s = '',
          m = ZERO,
          e,
          z,
          j,
          k;
      if (f < 0 || f > 20) throw RangeError(ERROR);
      if (x != x) return 'NaN';
      if (x <= -1e21 || x >= 1e21) return String(x);
      if (x < 0) {
        s = '-';
        x = -x;
      }
      if (x > 1e-21) {
        e = log(x * pow(2, 69, 1)) - 69;
        z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;
        if (e > 0) {
          multiply(0, z);
          j = f;
          while (j >= 7) {
            multiply(1e7, 0);
            j -= 7;
          }
          multiply(pow(10, j, 1), 0);
          j = e - 1;
          while (j >= 23) {
            divide(1 << 23);
            j -= 23;
          }
          divide(1 << j);
          multiply(1, 1);
          divide(2);
          m = numToString();
        } else {
          multiply(0, z);
          multiply(1 << -e, 0);
          m = numToString() + repeat.call(ZERO, f);
        }
      }
      if (f > 0) {
        k = m.length;
        m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
      } else {
        m = s + m;
      }return m;
    }
  });
  return module.exports;
});
$__System.registerDynamic('4c', ['46', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var cof = $__require('46');
  module.exports = function (it, msg) {
    if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
    return +it;
  };
  return module.exports;
});
$__System.registerDynamic('4e', ['d', '10', '4c', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $fails = $__require('10'),
      aNumberValue = $__require('4c'),
      $toPrecision = 1..toPrecision;

  $export($export.P + $export.F * ($fails(function () {
    // IE7-
    return $toPrecision.call(1, undefined) !== '1';
  }) || !$fails(function () {
    // V8 ~ Android 4.3-
    $toPrecision.call({});
  })), 'Number', {
    toPrecision: function toPrecision(precision) {
      var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
      return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
    }
  });
  return module.exports;
});
$__System.registerDynamic('4f', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.1.2.1 Number.EPSILON
  var $export = $__require('d');

  $export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });
  return module.exports;
});
$__System.registerDynamic('50', ['d', 'a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.1.2.2 Number.isFinite(number)
  var $export = $__require('d'),
      _isFinite = $__require('a').isFinite;

  $export($export.S, 'Number', {
    isFinite: function isFinite(it) {
      return typeof it == 'number' && _isFinite(it);
    }
  });
  return module.exports;
});
$__System.registerDynamic('51', ['d', '52', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.1.2.3 Number.isInteger(number)
  var $export = $__require('d');

  $export($export.S, 'Number', { isInteger: $__require('52') });
  return module.exports;
});
$__System.registerDynamic('53', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.1.2.4 Number.isNaN(number)
  var $export = $__require('d');

  $export($export.S, 'Number', {
    isNaN: function isNaN(number) {
      return number != number;
    }
  });
  return module.exports;
});
$__System.registerDynamic('54', ['d', '52', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.1.2.5 Number.isSafeInteger(number)
  var $export = $__require('d'),
      isInteger = $__require('52'),
      abs = Math.abs;

  $export($export.S, 'Number', {
    isSafeInteger: function isSafeInteger(number) {
      return isInteger(number) && abs(number) <= 0x1fffffffffffff;
    }
  });
  return module.exports;
});
$__System.registerDynamic('55', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.1.2.6 Number.MAX_SAFE_INTEGER
  var $export = $__require('d');

  $export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });
  return module.exports;
});
$__System.registerDynamic('56', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.1.2.10 Number.MIN_SAFE_INTEGER
  var $export = $__require('d');

  $export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });
  return module.exports;
});
$__System.registerDynamic('44', ['a', '48', '57', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $parseFloat = $__require('a').parseFloat,
      $trim = $__require('48').trim;

  module.exports = 1 / $parseFloat($__require('57') + '-0') !== -Infinity ? function parseFloat(str) {
    var string = $trim(String(str), 3),
        result = $parseFloat(string);
    return result === 0 && string.charAt(0) == '-' ? -0 : result;
  } : $parseFloat;
  return module.exports;
});
$__System.registerDynamic('58', ['d', '44', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $parseFloat = $__require('44');
  // 20.1.2.12 Number.parseFloat(string)
  $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });
  return module.exports;
});
$__System.registerDynamic('42', ['a', '48', '57', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $parseInt = $__require('a').parseInt,
      $trim = $__require('48').trim,
      ws = $__require('57'),
      hex = /^[\-+]?0[xX]/;

  module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
    var string = $trim(String(str), 3);
    return $parseInt(string, radix >>> 0 || (hex.test(string) ? 16 : 10));
  } : $parseInt;
  return module.exports;
});
$__System.registerDynamic('59', ['d', '42', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $parseInt = $__require('42');
  // 20.1.2.13 Number.parseInt(string, radix)
  $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });
  return module.exports;
});
$__System.registerDynamic('5a', ['d', '5b', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.3 Math.acosh(x)
  var $export = $__require('d'),
      log1p = $__require('5b'),
      sqrt = Math.sqrt,
      $acosh = Math.acosh;

  $export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity), 'Math', {
    acosh: function acosh(x) {
      return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? Math.log(x) + Math.LN2 : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
    }
  });
  return module.exports;
});
$__System.registerDynamic('5c', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.5 Math.asinh(x)
  var $export = $__require('d'),
      $asinh = Math.asinh;

  function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
  }

  // Tor Browser bug: Math.asinh(0) -> -0 
  $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });
  return module.exports;
});
$__System.registerDynamic('5d', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.7 Math.atanh(x)
  var $export = $__require('d'),
      $atanh = Math.atanh;

  // Tor Browser bug: Math.atanh(-0) -> 0 
  $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
    atanh: function atanh(x) {
      return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
    }
  });
  return module.exports;
});
$__System.registerDynamic('5e', ['d', '5f', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.9 Math.cbrt(x)
  var $export = $__require('d'),
      sign = $__require('5f');

  $export($export.S, 'Math', {
    cbrt: function cbrt(x) {
      return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
    }
  });
  return module.exports;
});
$__System.registerDynamic('60', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.11 Math.clz32(x)
  var $export = $__require('d');

  $export($export.S, 'Math', {
    clz32: function clz32(x) {
      return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
    }
  });
  return module.exports;
});
$__System.registerDynamic('61', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.12 Math.cosh(x)
  var $export = $__require('d'),
      exp = Math.exp;

  $export($export.S, 'Math', {
    cosh: function cosh(x) {
      return (exp(x = +x) + exp(-x)) / 2;
    }
  });
  return module.exports;
});
$__System.registerDynamic('62', ['d', '63', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.14 Math.expm1(x)
  var $export = $__require('d'),
      $expm1 = $__require('63');

  $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });
  return module.exports;
});
$__System.registerDynamic('64', ['d', '5f', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.16 Math.fround(x)
  var $export = $__require('d'),
      sign = $__require('5f'),
      pow = Math.pow,
      EPSILON = pow(2, -52),
      EPSILON32 = pow(2, -23),
      MAX32 = pow(2, 127) * (2 - EPSILON32),
      MIN32 = pow(2, -126);

  var roundTiesToEven = function (n) {
    return n + 1 / EPSILON - 1 / EPSILON;
  };

  $export($export.S, 'Math', {
    fround: function fround(x) {
      var $abs = Math.abs(x),
          $sign = sign(x),
          a,
          result;
      if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
      a = (1 + EPSILON32 / EPSILON) * $abs;
      result = a - (a - $abs);
      if (result > MAX32 || result != result) return $sign * Infinity;
      return $sign * result;
    }
  });
  return module.exports;
});
$__System.registerDynamic('65', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
  var $export = $__require('d'),
      abs = Math.abs;

  $export($export.S, 'Math', {
    hypot: function hypot(value1, value2) {
      // eslint-disable-line no-unused-vars
      var sum = 0,
          i = 0,
          aLen = arguments.length,
          larg = 0,
          arg,
          div;
      while (i < aLen) {
        arg = abs(arguments[i++]);
        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }
      return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
    }
  });
  return module.exports;
});
$__System.registerDynamic('66', ['d', '10', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.18 Math.imul(x, y)
  var $export = $__require('d'),
      $imul = Math.imul;

  // some WebKit versions fails with big numbers, some has wrong arity
  $export($export.S + $export.F * $__require('10')(function () {
    return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
  }), 'Math', {
    imul: function imul(x, y) {
      var UINT16 = 0xffff,
          xn = +x,
          yn = +y,
          xl = UINT16 & xn,
          yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  });
  return module.exports;
});
$__System.registerDynamic('67', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.21 Math.log10(x)
  var $export = $__require('d');

  $export($export.S, 'Math', {
    log10: function log10(x) {
      return Math.log(x) / Math.LN10;
    }
  });
  return module.exports;
});
$__System.registerDynamic("5b", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.20 Math.log1p(x)
  module.exports = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
  };
  return module.exports;
});
$__System.registerDynamic('68', ['d', '5b', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.20 Math.log1p(x)
  var $export = $__require('d');

  $export($export.S, 'Math', { log1p: $__require('5b') });
  return module.exports;
});
$__System.registerDynamic('69', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.22 Math.log2(x)
  var $export = $__require('d');

  $export($export.S, 'Math', {
    log2: function log2(x) {
      return Math.log(x) / Math.LN2;
    }
  });
  return module.exports;
});
$__System.registerDynamic("5f", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.28 Math.sign(x)
  module.exports = Math.sign || function sign(x) {
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };
  return module.exports;
});
$__System.registerDynamic('6a', ['d', '5f', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.28 Math.sign(x)
  var $export = $__require('d');

  $export($export.S, 'Math', { sign: $__require('5f') });
  return module.exports;
});
$__System.registerDynamic('6b', ['d', '63', '10', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.30 Math.sinh(x)
  var $export = $__require('d'),
      expm1 = $__require('63'),
      exp = Math.exp;

  // V8 near Chromium 38 has a problem with very small numbers
  $export($export.S + $export.F * $__require('10')(function () {
    return !Math.sinh(-2e-17) != -2e-17;
  }), 'Math', {
    sinh: function sinh(x) {
      return Math.abs(x = +x) < 1 ? (expm1(x) - expm1(-x)) / 2 : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
    }
  });
  return module.exports;
});
$__System.registerDynamic("63", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.14 Math.expm1(x)
  var $expm1 = Math.expm1;
  module.exports = !$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
  } : $expm1;
  return module.exports;
});
$__System.registerDynamic('6c', ['d', '63', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.33 Math.tanh(x)
  var $export = $__require('d'),
      expm1 = $__require('63'),
      exp = Math.exp;

  $export($export.S, 'Math', {
    tanh: function tanh(x) {
      var a = expm1(x = +x),
          b = expm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    }
  });
  return module.exports;
});
$__System.registerDynamic('6d', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.2.2.34 Math.trunc(x)
  var $export = $__require('d');

  $export($export.S, 'Math', {
    trunc: function trunc(it) {
      return (it > 0 ? Math.floor : Math.ceil)(it);
    }
  });
  return module.exports;
});
$__System.registerDynamic('6e', ['d', '6f', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      toIndex = $__require('6f'),
      fromCharCode = String.fromCharCode,
      $fromCodePoint = String.fromCodePoint;

  // length should be 1, old FF problem
  $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
    // 21.1.2.2 String.fromCodePoint(...codePoints)
    fromCodePoint: function fromCodePoint(x) {
      // eslint-disable-line no-unused-vars
      var res = [],
          aLen = arguments.length,
          i = 0,
          code;
      while (aLen > i) {
        code = +arguments[i++];
        if (toIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
        res.push(code < 0x10000 ? fromCharCode(code) : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00));
      }return res.join('');
    }
  });
  return module.exports;
});
$__System.registerDynamic('70', ['d', '4', '71', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      toIObject = $__require('4'),
      toLength = $__require('71');

  $export($export.S, 'String', {
    // 21.1.2.4 String.raw(callSite, ...substitutions)
    raw: function raw(callSite) {
      var tpl = toIObject(callSite.raw),
          len = toLength(tpl.length),
          aLen = arguments.length,
          res = [],
          i = 0;
      while (len > i) {
        res.push(String(tpl[i++]));
        if (i < aLen) res.push(String(arguments[i]));
      }return res.join('');
    }
  });
  return module.exports;
});
$__System.registerDynamic('72', ['48', '5'], true, function ($__require, exports, module) {
  'use strict';
  // 21.1.3.25 String.prototype.trim()

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('48')('trim', function ($trim) {
    return function trim() {
      return $trim(this, 3);
    };
  });
  return module.exports;
});
$__System.registerDynamic('73', ['74', '75', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $at = $__require('74')(true);

  // 21.1.3.27 String.prototype[@@iterator]()
  $__require('75')(String, 'String', function (iterated) {
    this._t = String(iterated); // target
    this._i = 0; // next index
    // 21.1.5.2.1 %StringIteratorPrototype%.next()
  }, function () {
    var O = this._t,
        index = this._i,
        point;
    if (index >= O.length) return { value: undefined, done: true };
    point = $at(O, index);
    this._i += point.length;
    return { value: point, done: false };
  });
  return module.exports;
});
$__System.registerDynamic('76', ['d', '74', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $at = $__require('74')(false);
  $export($export.P, 'String', {
    // 21.1.3.3 String.prototype.codePointAt(pos)
    codePointAt: function codePointAt(pos) {
      return $at(this, pos);
    }
  });
  return module.exports;
});
$__System.registerDynamic('77', ['d', '71', '78', '79', '5'], true, function ($__require, exports, module) {
  // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      toLength = $__require('71'),
      context = $__require('78'),
      ENDS_WITH = 'endsWith',
      $endsWith = ''[ENDS_WITH];

  $export($export.P + $export.F * $__require('79')(ENDS_WITH), 'String', {
    endsWith: function endsWith(searchString /*, endPosition = @length */) {
      var that = context(this, searchString, ENDS_WITH),
          endPosition = arguments.length > 1 ? arguments[1] : undefined,
          len = toLength(that.length),
          end = endPosition === undefined ? len : Math.min(toLength(endPosition), len),
          search = String(searchString);
      return $endsWith ? $endsWith.call(that, search, end) : that.slice(end - search.length, end) === search;
    }
  });
  return module.exports;
});
$__System.registerDynamic('7a', ['d', '78', '79', '5'], true, function ($__require, exports, module) {
  // 21.1.3.7 String.prototype.includes(searchString, position = 0)
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      context = $__require('78'),
      INCLUDES = 'includes';

  $export($export.P + $export.F * $__require('79')(INCLUDES), 'String', {
    includes: function includes(searchString /*, position = 0 */) {
      return !!~context(this, searchString, INCLUDES).indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  return module.exports;
});
$__System.registerDynamic('7b', ['d', '4d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d');

  $export($export.P, 'String', {
    // 21.1.3.13 String.prototype.repeat(count)
    repeat: $__require('4d')
  });
  return module.exports;
});
$__System.registerDynamic('78', ['7c', '7d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // helper for String#{startsWith, endsWith, includes}
  var isRegExp = $__require('7c'),
      defined = $__require('7d');

  module.exports = function (that, searchString, NAME) {
    if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
    return String(defined(that));
  };
  return module.exports;
});
$__System.registerDynamic('79', ['14', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var MATCH = $__require('14')('match');
  module.exports = function (KEY) {
    var re = /./;
    try {
      '/./'[KEY](re);
    } catch (e) {
      try {
        re[MATCH] = false;
        return !'/./'[KEY](re);
      } catch (f) {/* empty */}
    }return true;
  };
  return module.exports;
});
$__System.registerDynamic('7e', ['d', '71', '78', '79', '5'], true, function ($__require, exports, module) {
  // 21.1.3.18 String.prototype.startsWith(searchString [, position ])
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      toLength = $__require('71'),
      context = $__require('78'),
      STARTS_WITH = 'startsWith',
      $startsWith = ''[STARTS_WITH];

  $export($export.P + $export.F * $__require('79')(STARTS_WITH), 'String', {
    startsWith: function startsWith(searchString /*, position = 0 */) {
      var that = context(this, searchString, STARTS_WITH),
          index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length)),
          search = String(searchString);
      return $startsWith ? $startsWith.call(that, search, index) : that.slice(index, index + search.length) === search;
    }
  });
  return module.exports;
});
$__System.registerDynamic('7f', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.2 String.prototype.anchor(name)

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('anchor', function (createHTML) {
    return function anchor(name) {
      return createHTML(this, 'a', 'name', name);
    };
  });
  return module.exports;
});
$__System.registerDynamic('81', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.3 String.prototype.big()

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('big', function (createHTML) {
    return function big() {
      return createHTML(this, 'big', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('82', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.4 String.prototype.blink()

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('blink', function (createHTML) {
    return function blink() {
      return createHTML(this, 'blink', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('83', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.5 String.prototype.bold()

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('bold', function (createHTML) {
    return function bold() {
      return createHTML(this, 'b', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('84', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.6 String.prototype.fixed()

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('fixed', function (createHTML) {
    return function fixed() {
      return createHTML(this, 'tt', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('85', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.7 String.prototype.fontcolor(color)

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('fontcolor', function (createHTML) {
    return function fontcolor(color) {
      return createHTML(this, 'font', 'color', color);
    };
  });
  return module.exports;
});
$__System.registerDynamic('86', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.8 String.prototype.fontsize(size)

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('fontsize', function (createHTML) {
    return function fontsize(size) {
      return createHTML(this, 'font', 'size', size);
    };
  });
  return module.exports;
});
$__System.registerDynamic('87', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.9 String.prototype.italics()

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('italics', function (createHTML) {
    return function italics() {
      return createHTML(this, 'i', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('88', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.10 String.prototype.link(url)

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('link', function (createHTML) {
    return function link(url) {
      return createHTML(this, 'a', 'href', url);
    };
  });
  return module.exports;
});
$__System.registerDynamic('89', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.11 String.prototype.small()

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('small', function (createHTML) {
    return function small() {
      return createHTML(this, 'small', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('8a', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.12 String.prototype.strike()

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('strike', function (createHTML) {
    return function strike() {
      return createHTML(this, 'strike', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('8b', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.13 String.prototype.sub()

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('sub', function (createHTML) {
    return function sub() {
      return createHTML(this, 'sub', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('80', ['d', '10', '7d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      fails = $__require('10'),
      defined = $__require('7d'),
      quot = /"/g;
  // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
  var createHTML = function (string, tag, attribute, value) {
    var S = String(defined(string)),
        p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };
  module.exports = function (NAME, exec) {
    var O = {};
    O[NAME] = exec(createHTML);
    $export($export.P + $export.F * fails(function () {
      var test = ''[NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    }), 'String', O);
  };
  return module.exports;
});
$__System.registerDynamic('8c', ['80', '5'], true, function ($__require, exports, module) {
  'use strict';
  // B.2.3.14 String.prototype.sup()

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('80')('sup', function (createHTML) {
    return function sup() {
      return createHTML(this, 'sup', '', '');
    };
  });
  return module.exports;
});
$__System.registerDynamic('8d', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.3.3.1 / 15.9.4.4 Date.now()
  var $export = $__require('d');

  $export($export.S, 'Date', { now: function () {
      return new Date().getTime();
    } });
  return module.exports;
});
$__System.registerDynamic('8e', ['d', '29', '19', '10', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      toObject = $__require('29'),
      toPrimitive = $__require('19');

  $export($export.P + $export.F * $__require('10')(function () {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function () {
        return 1;
      } }) !== 1;
  }), 'Date', {
    toJSON: function toJSON(key) {
      var O = toObject(this),
          pv = toPrimitive(O);
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });
  return module.exports;
});
$__System.registerDynamic('8f', ['d', '10', '5'], true, function ($__require, exports, module) {
  'use strict';
  // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      fails = $__require('10'),
      getTime = Date.prototype.getTime;

  var lz = function (num) {
    return num > 9 ? num : '0' + num;
  };

  // PhantomJS / old WebKit has a broken implementations
  $export($export.P + $export.F * (fails(function () {
    return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
  }) || !fails(function () {
    new Date(NaN).toISOString();
  })), 'Date', {
    toISOString: function toISOString() {
      if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
      var d = this,
          y = d.getUTCFullYear(),
          m = d.getUTCMilliseconds(),
          s = y < 0 ? '-' : y > 9999 ? '+' : '';
      return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) + '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) + 'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) + ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
    }
  });
  return module.exports;
});
$__System.registerDynamic('90', ['e', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var DateProto = Date.prototype,
      INVALID_DATE = 'Invalid Date',
      TO_STRING = 'toString',
      $toString = DateProto[TO_STRING],
      getTime = DateProto.getTime;
  if (new Date(NaN) + '' != INVALID_DATE) {
    $__require('e')(DateProto, TO_STRING, function toString() {
      var value = getTime.call(this);
      return value === value ? $toString.call(this) : INVALID_DATE;
    });
  }
  return module.exports;
});
$__System.registerDynamic('91', ['18', '19', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var anObject = $__require('18'),
      toPrimitive = $__require('19'),
      NUMBER = 'number';

  module.exports = function (hint) {
    if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
    return toPrimitive(anObject(this), hint != NUMBER);
  };
  return module.exports;
});
$__System.registerDynamic('92', ['14', '21', '91', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var TO_PRIMITIVE = $__require('14')('toPrimitive'),
      proto = Date.prototype;

  if (!(TO_PRIMITIVE in proto)) $__require('21')(proto, TO_PRIMITIVE, $__require('91'));
  return module.exports;
});
$__System.registerDynamic('93', ['d', '17', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
  var $export = $__require('d');

  $export($export.S, 'Array', { isArray: $__require('17') });
  return module.exports;
});
$__System.registerDynamic('94', ['95', 'd', '29', '96', '97', '71', '98', '99', '9a', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var ctx = $__require('95'),
      $export = $__require('d'),
      toObject = $__require('29'),
      call = $__require('96'),
      isArrayIter = $__require('97'),
      toLength = $__require('71'),
      createProperty = $__require('98'),
      getIterFn = $__require('99');

  $export($export.S + $export.F * !$__require('9a')(function (iter) {
    Array.from(iter);
  }), 'Array', {
    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
    from: function from(arrayLike /*, mapfn = undefined, thisArg = undefined*/) {
      var O = toObject(arrayLike),
          C = typeof this == 'function' ? this : Array,
          aLen = arguments.length,
          mapfn = aLen > 1 ? arguments[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = getIterFn(O),
          length,
          result,
          step,
          iterator;
      if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
      // if object isn't iterable or it's array with default iterator - use simple case
      if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
        }
      }
      result.length = index;
      return result;
    }
  });
  return module.exports;
});
$__System.registerDynamic('9b', ['d', '98', '10', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      createProperty = $__require('98');

  // WebKit Array.of isn't generic
  $export($export.S + $export.F * $__require('10')(function () {
    function F() {}
    return !(Array.of.call(F) instanceof F);
  }), 'Array', {
    // 22.1.2.3 Array.of( ...items)
    of: function of() /* ...args */{
      var index = 0,
          aLen = arguments.length,
          result = new (typeof this == 'function' ? this : Array)(aLen);
      while (aLen > index) createProperty(result, index, arguments[index++]);
      result.length = aLen;
      return result;
    }
  });
  return module.exports;
});
$__System.registerDynamic('9c', ['d', '4', '9d', '9e', '5'], true, function ($__require, exports, module) {
  'use strict';
  // 22.1.3.13 Array.prototype.join(separator)

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      toIObject = $__require('4'),
      arrayJoin = [].join;

  // fallback for not array-like strings
  $export($export.P + $export.F * ($__require('9d') != Object || !$__require('9e')(arrayJoin)), 'Array', {
    join: function join(separator) {
      return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
    }
  });
  return module.exports;
});
$__System.registerDynamic('9f', ['d', 'a0', '46', '6f', '71', '10', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      html = $__require('a0'),
      cof = $__require('46'),
      toIndex = $__require('6f'),
      toLength = $__require('71'),
      arraySlice = [].slice;

  // fallback for not array-like ES3 strings and DOM objects
  $export($export.P + $export.F * $__require('10')(function () {
    if (html) arraySlice.call(html);
  }), 'Array', {
    slice: function slice(begin, end) {
      var len = toLength(this.length),
          klass = cof(this);
      end = end === undefined ? len : end;
      if (klass == 'Array') return arraySlice.call(this, begin, end);
      var start = toIndex(begin, len),
          upTo = toIndex(end, len),
          size = toLength(upTo - start),
          cloned = Array(size),
          i = 0;
      for (; i < size; i++) cloned[i] = klass == 'String' ? this.charAt(start + i) : this[start + i];
      return cloned;
    }
  });
  return module.exports;
});
$__System.registerDynamic('a1', ['d', 'a2', '29', '10', '9e', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      aFunction = $__require('a2'),
      toObject = $__require('29'),
      fails = $__require('10'),
      $sort = [].sort,
      test = [1, 2, 3];

  $export($export.P + $export.F * (fails(function () {
    // IE8-
    test.sort(undefined);
  }) || !fails(function () {
    // V8 bug
    test.sort(null);
    // Old WebKit
  }) || !$__require('9e')($sort)), 'Array', {
    // 22.1.3.25 Array.prototype.sort(comparefn)
    sort: function sort(comparefn) {
      return comparefn === undefined ? $sort.call(toObject(this)) : $sort.call(toObject(this), aFunction(comparefn));
    }
  });
  return module.exports;
});
$__System.registerDynamic('a3', ['d', 'a4', '9e', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $forEach = $__require('a4')(0),
      STRICT = $__require('9e')([].forEach, true);

  $export($export.P + $export.F * !STRICT, 'Array', {
    // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
    forEach: function forEach(callbackfn /* , thisArg */) {
      return $forEach(this, callbackfn, arguments[1]);
    }
  });
  return module.exports;
});
$__System.registerDynamic('a5', ['d', 'a4', '9e', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $map = $__require('a4')(1);

  $export($export.P + $export.F * !$__require('9e')([].map, true), 'Array', {
    // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
    map: function map(callbackfn /* , thisArg */) {
      return $map(this, callbackfn, arguments[1]);
    }
  });
  return module.exports;
});
$__System.registerDynamic('a6', ['d', 'a4', '9e', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $filter = $__require('a4')(2);

  $export($export.P + $export.F * !$__require('9e')([].filter, true), 'Array', {
    // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
    filter: function filter(callbackfn /* , thisArg */) {
      return $filter(this, callbackfn, arguments[1]);
    }
  });
  return module.exports;
});
$__System.registerDynamic('a7', ['d', 'a4', '9e', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $some = $__require('a4')(3);

  $export($export.P + $export.F * !$__require('9e')([].some, true), 'Array', {
    // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
    some: function some(callbackfn /* , thisArg */) {
      return $some(this, callbackfn, arguments[1]);
    }
  });
  return module.exports;
});
$__System.registerDynamic('a8', ['d', 'a4', '9e', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $every = $__require('a4')(4);

  $export($export.P + $export.F * !$__require('9e')([].every, true), 'Array', {
    // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
    every: function every(callbackfn /* , thisArg */) {
      return $every(this, callbackfn, arguments[1]);
    }
  });
  return module.exports;
});
$__System.registerDynamic('a9', ['d', 'aa', '9e', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $reduce = $__require('aa');

  $export($export.P + $export.F * !$__require('9e')([].reduce, true), 'Array', {
    // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
    reduce: function reduce(callbackfn /* , initialValue */) {
      return $reduce(this, callbackfn, arguments.length, arguments[1], false);
    }
  });
  return module.exports;
});
$__System.registerDynamic('aa', ['a2', '29', '9d', '71', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var aFunction = $__require('a2'),
      toObject = $__require('29'),
      IObject = $__require('9d'),
      toLength = $__require('71');

  module.exports = function (that, callbackfn, aLen, memo, isRight) {
    aFunction(callbackfn);
    var O = toObject(that),
        self = IObject(O),
        length = toLength(O.length),
        index = isRight ? length - 1 : 0,
        i = isRight ? -1 : 1;
    if (aLen < 2) for (;;) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (isRight ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (; isRight ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
  return module.exports;
});
$__System.registerDynamic('ab', ['d', 'aa', '9e', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $reduce = $__require('aa');

  $export($export.P + $export.F * !$__require('9e')([].reduceRight, true), 'Array', {
    // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
    reduceRight: function reduceRight(callbackfn /* , initialValue */) {
      return $reduce(this, callbackfn, arguments.length, arguments[1], true);
    }
  });
  return module.exports;
});
$__System.registerDynamic('ac', ['d', 'ad', '9e', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $indexOf = $__require('ad')(false),
      $native = [].indexOf,
      NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

  $export($export.P + $export.F * (NEGATIVE_ZERO || !$__require('9e')($native)), 'Array', {
    // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
    indexOf: function indexOf(searchElement /*, fromIndex = 0 */) {
      return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
    }
  });
  return module.exports;
});
$__System.registerDynamic('9e', ['10', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var fails = $__require('10');

  module.exports = function (method, arg) {
    return !!method && fails(function () {
      arg ? method.call(null, function () {}, 1) : method.call(null);
    });
  };
  return module.exports;
});
$__System.registerDynamic('ae', ['d', '4', '4b', '71', '9e', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      toIObject = $__require('4'),
      toInteger = $__require('4b'),
      toLength = $__require('71'),
      $native = [].lastIndexOf,
      NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

  $export($export.P + $export.F * (NEGATIVE_ZERO || !$__require('9e')($native)), 'Array', {
    // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */) {
      // convert -0 to +0
      if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
      var O = toIObject(this),
          length = toLength(O.length),
          index = length - 1;
      if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
      if (index < 0) index = length + index;
      for (; index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
      return -1;
    }
  });
  return module.exports;
});
$__System.registerDynamic('af', ['d', 'b0', 'b1', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
  var $export = $__require('d');

  $export($export.P, 'Array', { copyWithin: $__require('b0') });

  $__require('b1')('copyWithin');
  return module.exports;
});
$__System.registerDynamic('b2', ['d', 'b3', 'b1', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  var $export = $__require('d');

  $export($export.P, 'Array', { fill: $__require('b3') });

  $__require('b1')('fill');
  return module.exports;
});
$__System.registerDynamic('b4', ['d', 'a4', 'b1', '5'], true, function ($__require, exports, module) {
  'use strict';
  // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $find = $__require('a4')(5),
      KEY = 'find',
      forced = true;
  // Shouldn't skip holes
  if (KEY in []) Array(1)[KEY](function () {
    forced = false;
  });
  $export($export.P + $export.F * forced, 'Array', {
    find: function find(callbackfn /*, that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  $__require('b1')(KEY);
  return module.exports;
});
$__System.registerDynamic('b5', ['d', 'a4', 'b1', '5'], true, function ($__require, exports, module) {
  'use strict';
  // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $find = $__require('a4')(6),
      KEY = 'findIndex',
      forced = true;
  // Shouldn't skip holes
  if (KEY in []) Array(1)[KEY](function () {
    forced = false;
  });
  $export($export.P + $export.F * forced, 'Array', {
    findIndex: function findIndex(callbackfn /*, that = undefined */) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  $__require('b1')(KEY);
  return module.exports;
});
$__System.registerDynamic('b6', ['b7', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('b7')('Array');
  return module.exports;
});
$__System.registerDynamic('b8', ['a', '47', '1e', '1f', '7c', 'b9', 'c', '10', '14', 'e', 'b7', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('a'),
      inheritIfRequired = $__require('47'),
      dP = $__require('1e').f,
      gOPN = $__require('1f').f,
      isRegExp = $__require('7c'),
      $flags = $__require('b9'),
      $RegExp = global.RegExp,
      Base = $RegExp,
      proto = $RegExp.prototype,
      re1 = /a/g,
      re2 = /a/g
  // "new" creates a new object, old webkit buggy here
  ,
      CORRECT_NEW = new $RegExp(re1) !== re1;

  if ($__require('c') && (!CORRECT_NEW || $__require('10')(function () {
    re2[$__require('14')('match')] = false;
    // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
  }))) {
    $RegExp = function RegExp(p, f) {
      var tiRE = this instanceof $RegExp,
          piRE = isRegExp(p),
          fiU = f === undefined;
      return !tiRE && piRE && p.constructor === $RegExp && fiU ? p : inheritIfRequired(CORRECT_NEW ? new Base(piRE && !fiU ? p.source : p, f) : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
    };
    var proxy = function (key) {
      key in $RegExp || dP($RegExp, key, {
        configurable: true,
        get: function () {
          return Base[key];
        },
        set: function (it) {
          Base[key] = it;
        }
      });
    };
    for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
    proto.constructor = $RegExp;
    $RegExp.prototype = proto;
    $__require('e')(global, 'RegExp', $RegExp);
  }

  $__require('b7')('RegExp');
  return module.exports;
});
$__System.registerDynamic('ba', ['bb', '18', 'b9', 'c', 'e', '10', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('bb');
  var anObject = $__require('18'),
      $flags = $__require('b9'),
      DESCRIPTORS = $__require('c'),
      TO_STRING = 'toString',
      $toString = /./[TO_STRING];

  var define = function (fn) {
    $__require('e')(RegExp.prototype, TO_STRING, fn, true);
  };

  // 21.2.5.14 RegExp.prototype.toString()
  if ($__require('10')(function () {
    return $toString.call({ source: 'a', flags: 'b' }) != '/a/b';
  })) {
    define(function toString() {
      var R = anObject(this);
      return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
    });
    // FF44- RegExp#toString has a wrong name
  } else if ($toString.name != TO_STRING) {
    define(function toString() {
      return $toString.call(this);
    });
  }
  return module.exports;
});
$__System.registerDynamic('bb', ['c', '1e', 'b9', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 21.2.5.3 get RegExp.prototype.flags()
  if ($__require('c') && /./g.flags != 'g') $__require('1e').f(RegExp.prototype, 'flags', {
    configurable: true,
    get: $__require('b9')
  });
  return module.exports;
});
$__System.registerDynamic('bc', ['bd', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // @@match logic
  $__require('bd')('match', 1, function (defined, MATCH, $match) {
    // 21.1.3.11 String.prototype.match(regexp)
    return [function match(regexp) {
      'use strict';

      var O = defined(this),
          fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    }, $match];
  });
  return module.exports;
});
$__System.registerDynamic('be', ['bd', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // @@replace logic
  $__require('bd')('replace', 2, function (defined, REPLACE, $replace) {
    // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
    return [function replace(searchValue, replaceValue) {
      'use strict';

      var O = defined(this),
          fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined ? fn.call(searchValue, O, replaceValue) : $replace.call(String(O), searchValue, replaceValue);
    }, $replace];
  });
  return module.exports;
});
$__System.registerDynamic('bf', ['bd', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // @@search logic
  $__require('bd')('search', 1, function (defined, SEARCH, $search) {
    // 21.1.3.15 String.prototype.search(regexp)
    return [function search(regexp) {
      'use strict';

      var O = defined(this),
          fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    }, $search];
  });
  return module.exports;
});
$__System.registerDynamic('bd', ['21', 'e', '10', '7d', '14', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var hide = $__require('21'),
      redefine = $__require('e'),
      fails = $__require('10'),
      defined = $__require('7d'),
      wks = $__require('14');

  module.exports = function (KEY, length, exec) {
    var SYMBOL = wks(KEY),
        fns = exec(defined, SYMBOL, ''[KEY]),
        strfn = fns[0],
        rxfn = fns[1];
    if (fails(function () {
      var O = {};
      O[SYMBOL] = function () {
        return 7;
      };
      return ''[KEY](O) != 7;
    })) {
      redefine(String.prototype, KEY, strfn);
      hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) {
        return rxfn.call(string, this, arg);
      }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) {
        return rxfn.call(string, this);
      });
    }
  };
  return module.exports;
});
$__System.registerDynamic('c0', ['bd', '7c', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // @@split logic
  $__require('bd')('split', 2, function (defined, SPLIT, $split) {
    'use strict';

    var isRegExp = $__require('7c'),
        _split = $split,
        $push = [].push,
        $SPLIT = 'split',
        LENGTH = 'length',
        LAST_INDEX = 'lastIndex';
    if ('abbc'[$SPLIT](/(b)*/)[1] == 'c' || 'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 || 'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 || '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 || '.'[$SPLIT](/()()/)[LENGTH] > 1 || ''[$SPLIT](/.?/)[LENGTH]) {
      var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
      // based on es5-shim implementation, need to rework it
      $split = function (separator, limit) {
        var string = String(this);
        if (separator === undefined && limit === 0) return [];
        // If `separator` is not a regex, use native split
        if (!isRegExp(separator)) return _split.call(string, separator, limit);
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0;
        var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
        // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var separator2, match, lastIndex, lastLength, i;
        // Doesn't need flags gy, but they don't hurt
        if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
        while (match = separatorCopy.exec(string)) {
          // `separatorCopy.lastIndex` is not reliable cross-browser
          lastIndex = match.index + match[0][LENGTH];
          if (lastIndex > lastLastIndex) {
            output.push(string.slice(lastLastIndex, match.index));
            // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
            if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
              for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
            });
            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
            lastLength = match[0][LENGTH];
            lastLastIndex = lastIndex;
            if (output[LENGTH] >= splitLimit) break;
          }
          if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
        }
        if (lastLastIndex === string[LENGTH]) {
          if (lastLength || !separatorCopy.test('')) output.push('');
        } else output.push(string.slice(lastLastIndex));
        return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
      };
      // Chakra, V8
    } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
      $split = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
      };
    }
    // 21.1.3.17 String.prototype.split(separator, limit)
    return [function split(separator, limit) {
      var O = defined(this),
          fn = separator == undefined ? undefined : separator[SPLIT];
      return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
    }, $split];
  });
  return module.exports;
});
$__System.registerDynamic('c1', ['20', 'a', '95', '3c', 'd', '2e', '18', 'a2', '4a', 'c2', '3a', 'c3', 'c4', 'c5', '14', 'c6', '12', 'b7', '33', '9a', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('20'),
      global = $__require('a'),
      ctx = $__require('95'),
      classof = $__require('3c'),
      $export = $__require('d'),
      isObject = $__require('2e'),
      anObject = $__require('18'),
      aFunction = $__require('a2'),
      anInstance = $__require('4a'),
      forOf = $__require('c2'),
      setProto = $__require('3a').set,
      speciesConstructor = $__require('c3'),
      task = $__require('c4').set,
      microtask = $__require('c5')(),
      PROMISE = 'Promise',
      TypeError = global.TypeError,
      process = global.process,
      $Promise = global[PROMISE],
      process = global.process,
      isNode = classof(process) == 'process',
      empty = function () {/* empty */},
      Internal,
      GenericPromiseCapability,
      Wrapper;

  var USE_NATIVE = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1),
          FakePromise = (promise.constructor = {})[$__require('14')('species')] = function (exec) {
        exec(empty, empty);
      };
      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
    } catch (e) {/* empty */}
  }();

  // helpers
  var sameConstructor = function (a, b) {
    // with library wrapper special case
    return a === b || a === $Promise && b === Wrapper;
  };
  var isThenable = function (it) {
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var newPromiseCapability = function (C) {
    return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
  };
  var PromiseCapability = GenericPromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction(resolve);
    this.reject = aFunction(reject);
  };
  var perform = function (exec) {
    try {
      exec();
    } catch (e) {
      return { error: e };
    }
  };
  var notify = function (promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v,
          ok = promise._s == 1,
          i = 0;
      var run = function (reaction) {
        var handler = ok ? reaction.ok : reaction.fail,
            resolve = reaction.resolve,
            reject = reaction.reject,
            domain = reaction.domain,
            result,
            then;
        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled(promise);
              promise._h = 1;
            }
            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value);
              if (domain) domain.exit();
            }
            if (result === reaction.promise) {
              reject(TypeError('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          reject(e);
        }
      };
      while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled(promise);
    });
  };
  var onUnhandled = function (promise) {
    task.call(global, function () {
      var value = promise._v,
          abrupt,
          handler,
          console;
      if (isUnhandled(promise)) {
        abrupt = perform(function () {
          if (isNode) {
            process.emit('unhandledRejection', value, promise);
          } else if (handler = global.onunhandledrejection) {
            handler({ promise: promise, reason: value });
          } else if ((console = global.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
      }promise._a = undefined;
      if (abrupt) throw abrupt.error;
    });
  };
  var isUnhandled = function (promise) {
    if (promise._h == 1) return false;
    var chain = promise._a || promise._c,
        i = 0,
        reaction;
    while (chain.length > i) {
      reaction = chain[i++];
      if (reaction.fail || !isUnhandled(reaction.promise)) return false;
    }return true;
  };
  var onHandleUnhandled = function (promise) {
    task.call(global, function () {
      var handler;
      if (isNode) {
        process.emit('rejectionHandled', promise);
      } else if (handler = global.onrejectionhandled) {
        handler({ promise: promise, reason: promise._v });
      }
    });
  };
  var $reject = function (value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
  };
  var $resolve = function (value) {
    var promise = this,
        then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
      if (promise === value) throw TypeError("Promise can't be resolved itself");
      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = { _w: promise, _d: false }; // wrap
          try {
            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({ _w: promise, _d: false }, e); // wrap
    }
  };

  // constructor polyfill
  if (!USE_NATIVE) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      anInstance(this, $Promise, PROMISE, '_h');
      aFunction(executor);
      Internal.call(this);
      try {
        executor(ctx($resolve, this, 1), ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    };
    Internal = function Promise(executor) {
      this._c = []; // <- awaiting reactions
      this._a = undefined; // <- checked in isUnhandled reactions
      this._s = 0; // <- state
      this._d = false; // <- done
      this._v = undefined; // <- value
      this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
      this._n = false; // <- notify
    };
    Internal.prototype = $__require('c6')($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode ? process.domain : undefined;
        this._c.push(reaction);
        if (this._a) this._a.push(reaction);
        if (this._s) notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    PromiseCapability = function () {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = ctx($resolve, promise, 1);
      this.reject = ctx($reject, promise, 1);
    };
  }

  $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
  $__require('12')($Promise, PROMISE);
  $__require('b7')(PROMISE);
  Wrapper = $__require('33')[PROMISE];

  // statics
  $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this),
          $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      // instanceof instead of internal slot check because we should fix it without replacement native Promise core
      if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
      var capability = newPromiseCapability(this),
          $$resolve = capability.resolve;
      $$resolve(x);
      return capability.promise;
    }
  });
  $export($export.S + $export.F * !(USE_NATIVE && $__require('9a')(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this,
          capability = newPromiseCapability(C),
          resolve = capability.resolve,
          reject = capability.reject;
      var abrupt = perform(function () {
        var values = [],
            index = 0,
            remaining = 1;
        forOf(iterable, false, function (promise) {
          var $index = index++,
              alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (abrupt) reject(abrupt.error);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this,
          capability = newPromiseCapability(C),
          reject = capability.reject;
      var abrupt = perform(function () {
        forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (abrupt) reject(abrupt.error);
      return capability.promise;
    }
  });
  return module.exports;
});
$__System.registerDynamic('c7', ['c8', 'c9', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var weak = $__require('c8');

  // 23.4 WeakSet Objects
  $__require('c9')('WeakSet', function (get) {
    return function WeakSet() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.4.3.1 WeakSet.prototype.add(value)
    add: function add(value) {
      return weak.def(this, value, true);
    }
  }, weak, false, true);
  return module.exports;
});
$__System.registerDynamic('ca', ['d', 'cb', 'cc', '18', '6f', '71', '2e', '14', 'a', 'c3', '10', 'b7', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $typed = $__require('cb'),
      buffer = $__require('cc'),
      anObject = $__require('18'),
      toIndex = $__require('6f'),
      toLength = $__require('71'),
      isObject = $__require('2e'),
      TYPED_ARRAY = $__require('14')('typed_array'),
      ArrayBuffer = $__require('a').ArrayBuffer,
      speciesConstructor = $__require('c3'),
      $ArrayBuffer = buffer.ArrayBuffer,
      $DataView = buffer.DataView,
      $isView = $typed.ABV && ArrayBuffer.isView,
      $slice = $ArrayBuffer.prototype.slice,
      VIEW = $typed.VIEW,
      ARRAY_BUFFER = 'ArrayBuffer';

  $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

  $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
    // 24.1.3.1 ArrayBuffer.isView(arg)
    isView: function isView(it) {
      return $isView && $isView(it) || isObject(it) && VIEW in it;
    }
  });

  $export($export.P + $export.U + $export.F * $__require('10')(function () {
    return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
  }), ARRAY_BUFFER, {
    // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
    slice: function slice(start, end) {
      if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
      var len = anObject(this).byteLength,
          first = toIndex(start, len),
          final = toIndex(end === undefined ? len : end, len),
          result = new (speciesConstructor(this, $ArrayBuffer))(toLength(final - first)),
          viewS = new $DataView(this),
          viewT = new $DataView(result),
          index = 0;
      while (first < final) {
        viewT.setUint8(index++, viewS.getUint8(first++));
      }return result;
    }
  });

  $__require('b7')(ARRAY_BUFFER);
  return module.exports;
});
$__System.registerDynamic('cd', ['d', 'cb', 'cc', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d');
  $export($export.G + $export.W + $export.F * !$__require('cb').ABV, {
    DataView: $__require('cc').DataView
  });
  return module.exports;
});
$__System.registerDynamic('ce', ['cf', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('cf')('Int8', 1, function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('d0', ['cf', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('cf')('Uint8', 1, function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('d1', ['cf', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('cf')('Uint8', 1, function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true);
  return module.exports;
});
$__System.registerDynamic('d2', ['cf', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('cf')('Int16', 2, function (init) {
    return function Int16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('d3', ['cf', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('cf')('Uint16', 2, function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('d4', ['cf', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('cf')('Int32', 4, function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('d5', ['cf', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('cf')('Uint32', 4, function (init) {
    return function Uint32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('d6', ['cf', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('cf')('Float32', 4, function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('cb', ['a', '21', '13', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('a'),
      hide = $__require('21'),
      uid = $__require('13'),
      TYPED = uid('typed_array'),
      VIEW = uid('view'),
      ABV = !!(global.ArrayBuffer && global.DataView),
      CONSTR = ABV,
      i = 0,
      l = 9,
      Typed;

  var TypedArrayConstructors = 'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'.split(',');

  while (i < l) {
    if (Typed = global[TypedArrayConstructors[i++]]) {
      hide(Typed.prototype, TYPED, true);
      hide(Typed.prototype, VIEW, true);
    } else CONSTR = false;
  }

  module.exports = {
    ABV: ABV,
    CONSTR: CONSTR,
    TYPED: TYPED,
    VIEW: VIEW
  };
  return module.exports;
});
$__System.registerDynamic('cc', ['a', 'c', '20', 'cb', '21', 'c6', '10', '4a', '4b', '71', '1f', '1e', 'b3', '12', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('a'),
      DESCRIPTORS = $__require('c'),
      LIBRARY = $__require('20'),
      $typed = $__require('cb'),
      hide = $__require('21'),
      redefineAll = $__require('c6'),
      fails = $__require('10'),
      anInstance = $__require('4a'),
      toInteger = $__require('4b'),
      toLength = $__require('71'),
      gOPN = $__require('1f').f,
      dP = $__require('1e').f,
      arrayFill = $__require('b3'),
      setToStringTag = $__require('12'),
      ARRAY_BUFFER = 'ArrayBuffer',
      DATA_VIEW = 'DataView',
      PROTOTYPE = 'prototype',
      WRONG_LENGTH = 'Wrong length!',
      WRONG_INDEX = 'Wrong index!',
      $ArrayBuffer = global[ARRAY_BUFFER],
      $DataView = global[DATA_VIEW],
      Math = global.Math,
      parseInt = global.parseInt,
      RangeError = global.RangeError,
      Infinity = global.Infinity,
      BaseBuffer = $ArrayBuffer,
      abs = Math.abs,
      pow = Math.pow,
      min = Math.min,
      floor = Math.floor,
      log = Math.log,
      LN2 = Math.LN2,
      BUFFER = 'buffer',
      BYTE_LENGTH = 'byteLength',
      BYTE_OFFSET = 'byteOffset',
      $BUFFER = DESCRIPTORS ? '_b' : BUFFER,
      $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH,
      $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

  // IEEE754 conversions based on https://github.com/feross/ieee754
  var packIEEE754 = function (value, mLen, nBytes) {
    var buffer = Array(nBytes),
        eLen = nBytes * 8 - mLen - 1,
        eMax = (1 << eLen) - 1,
        eBias = eMax >> 1,
        rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0,
        i = 0,
        s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0,
        e,
        m,
        c;
    value = abs(value);
    if (value != value || value === Infinity) {
      m = value != value ? 1 : 0;
      e = eMax;
    } else {
      e = floor(log(value) / LN2);
      if (value * (c = pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }
      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = (value * c - 1) * pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * pow(2, eBias - 1) * pow(2, mLen);
        e = 0;
      }
    }
    for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
    buffer[--i] |= s * 128;
    return buffer;
  };
  var unpackIEEE754 = function (buffer, mLen, nBytes) {
    var eLen = nBytes * 8 - mLen - 1,
        eMax = (1 << eLen) - 1,
        eBias = eMax >> 1,
        nBits = eLen - 7,
        i = nBytes - 1,
        s = buffer[i--],
        e = s & 127,
        m;
    s >>= 7;
    for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : s ? -Infinity : Infinity;
    } else {
      m = m + pow(2, mLen);
      e = e - eBias;
    }return (s ? -1 : 1) * m * pow(2, e - mLen);
  };

  var unpackI32 = function (bytes) {
    return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
  };
  var packI8 = function (it) {
    return [it & 0xff];
  };
  var packI16 = function (it) {
    return [it & 0xff, it >> 8 & 0xff];
  };
  var packI32 = function (it) {
    return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
  };
  var packF64 = function (it) {
    return packIEEE754(it, 52, 8);
  };
  var packF32 = function (it) {
    return packIEEE754(it, 23, 4);
  };

  var addGetter = function (C, key, internal) {
    dP(C[PROTOTYPE], key, { get: function () {
        return this[internal];
      } });
  };

  var get = function (view, bytes, index, isLittleEndian) {
    var numIndex = +index,
        intIndex = toInteger(numIndex);
    if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b,
        start = intIndex + view[$OFFSET],
        pack = store.slice(start, start + bytes);
    return isLittleEndian ? pack : pack.reverse();
  };
  var set = function (view, bytes, index, conversion, value, isLittleEndian) {
    var numIndex = +index,
        intIndex = toInteger(numIndex);
    if (numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
    var store = view[$BUFFER]._b,
        start = intIndex + view[$OFFSET],
        pack = conversion(+value);
    for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
  };

  var validateArrayBufferArguments = function (that, length) {
    anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
    var numberLength = +length,
        byteLength = toLength(numberLength);
    if (numberLength != byteLength) throw RangeError(WRONG_LENGTH);
    return byteLength;
  };

  if (!$typed.ABV) {
    $ArrayBuffer = function ArrayBuffer(length) {
      var byteLength = validateArrayBufferArguments(this, length);
      this._b = arrayFill.call(Array(byteLength), 0);
      this[$LENGTH] = byteLength;
    };

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance(this, $DataView, DATA_VIEW);
      anInstance(buffer, $ArrayBuffer, DATA_VIEW);
      var bufferLength = buffer[$LENGTH],
          offset = toInteger(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
      this[$BUFFER] = buffer;
      this[$OFFSET] = offset;
      this[$LENGTH] = byteLength;
    };

    if (DESCRIPTORS) {
      addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
      addGetter($DataView, BUFFER, '_b');
      addGetter($DataView, BYTE_LENGTH, '_l');
      addGetter($DataView, BYTE_OFFSET, '_o');
    }

    redefineAll($DataView[PROTOTYPE], {
      getInt8: function getInt8(byteOffset) {
        return get(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset /*, littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset /*, littleEndian */) {
        var bytes = get(this, 2, byteOffset, arguments[1]);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset /*, littleEndian */) {
        return unpackI32(get(this, 4, byteOffset, arguments[1]));
      },
      getUint32: function getUint32(byteOffset /*, littleEndian */) {
        return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset /*, littleEndian */) {
        return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
      },
      getFloat64: function getFloat64(byteOffset /*, littleEndian */) {
        return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
      },
      setInt8: function setInt8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set(this, 1, byteOffset, packI8, value);
      },
      setInt16: function setInt16(byteOffset, value /*, littleEndian */) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setUint16: function setUint16(byteOffset, value /*, littleEndian */) {
        set(this, 2, byteOffset, packI16, value, arguments[2]);
      },
      setInt32: function setInt32(byteOffset, value /*, littleEndian */) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setUint32: function setUint32(byteOffset, value /*, littleEndian */) {
        set(this, 4, byteOffset, packI32, value, arguments[2]);
      },
      setFloat32: function setFloat32(byteOffset, value /*, littleEndian */) {
        set(this, 4, byteOffset, packF32, value, arguments[2]);
      },
      setFloat64: function setFloat64(byteOffset, value /*, littleEndian */) {
        set(this, 8, byteOffset, packF64, value, arguments[2]);
      }
    });
  } else {
    if (!fails(function () {
      new $ArrayBuffer(); // eslint-disable-line no-new
    }) || !fails(function () {
      new $ArrayBuffer(.5); // eslint-disable-line no-new
    })) {
      $ArrayBuffer = function ArrayBuffer(length) {
        return new BaseBuffer(validateArrayBufferArguments(this, length));
      };
      var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
      for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
        if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
      };
      if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
    }
    // iOS Safari 7.x bug
    var view = new $DataView(new $ArrayBuffer(2)),
        $setInt8 = $DataView[PROTOTYPE].setInt8;
    view.setInt8(0, 2147483648);
    view.setInt8(1, 2147483649);
    if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8.call(this, byteOffset, value << 24 >> 24);
      }
    }, true);
  }
  setToStringTag($ArrayBuffer, ARRAY_BUFFER);
  setToStringTag($DataView, DATA_VIEW);
  hide($DataView[PROTOTYPE], $typed.VIEW, true);
  exports[ARRAY_BUFFER] = $ArrayBuffer;
  exports[DATA_VIEW] = $DataView;
  return module.exports;
});
$__System.registerDynamic('52', ['2e', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 20.1.2.3 Number.isInteger(number)
  var isObject = $__require('2e'),
      floor = Math.floor;
  module.exports = function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor(it) === it;
  };
  return module.exports;
});
$__System.registerDynamic("38", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.9 SameValue(x, y)
  module.exports = Object.is || function is(x, y) {
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };
  return module.exports;
});
$__System.registerDynamic('d7', ['3c', '14', 'd8', '33', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var classof = $__require('3c'),
      ITERATOR = $__require('14')('iterator'),
      Iterators = $__require('d8');
  module.exports = $__require('33').isIterable = function (it) {
    var O = Object(it);
    return O[ITERATOR] !== undefined || '@@iterator' in O || Iterators.hasOwnProperty(classof(O));
  };
  return module.exports;
});
$__System.registerDynamic('c3', ['18', 'a2', '14', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.3.20 SpeciesConstructor(O, defaultConstructor)
  var anObject = $__require('18'),
      aFunction = $__require('a2'),
      SPECIES = $__require('14')('species');
  module.exports = function (O, D) {
    var C = anObject(O).constructor,
        S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };
  return module.exports;
});
$__System.registerDynamic('b3', ['29', '6f', '71', '5'], true, function ($__require, exports, module) {
  // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var toObject = $__require('29'),
      toIndex = $__require('6f'),
      toLength = $__require('71');
  module.exports = function fill(value /*, start = 0, end = @length */) {
    var O = toObject(this),
        length = toLength(O.length),
        aLen = arguments.length,
        index = toIndex(aLen > 1 ? arguments[1] : undefined, length),
        end = aLen > 2 ? arguments[2] : undefined,
        endPos = end === undefined ? length : toIndex(end, length);
    while (endPos > index) O[index++] = value;
    return O;
  };
  return module.exports;
});
$__System.registerDynamic('b0', ['29', '6f', '71', '5'], true, function ($__require, exports, module) {
  // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var toObject = $__require('29'),
      toIndex = $__require('6f'),
      toLength = $__require('71');

  module.exports = [].copyWithin || function copyWithin(target /*= 0*/, start /*= 0, end = @length*/) {
    var O = toObject(this),
        len = toLength(O.length),
        to = toIndex(target, len),
        from = toIndex(start, len),
        end = arguments.length > 2 ? arguments[2] : undefined,
        count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to),
        inc = 1;
    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }
    while (count-- > 0) {
      if (from in O) O[to] = O[from];else delete O[to];
      to += inc;
      from += inc;
    }return O;
  };
  return module.exports;
});
$__System.registerDynamic('cf', ['c', '20', 'a', '10', 'd', 'cb', 'cc', '95', '4a', '1a', '21', 'c6', '52', '4b', '71', '6f', '19', 'b', '38', '3c', '2e', '29', '97', '1b', '2a', '1f', 'd7', '99', '13', '14', 'a4', 'ad', 'c3', 'd9', 'd8', '9a', 'b7', 'b3', 'b0', '1e', '1d', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  if ($__require('c')) {
    var LIBRARY = $__require('20'),
        global = $__require('a'),
        fails = $__require('10'),
        $export = $__require('d'),
        $typed = $__require('cb'),
        $buffer = $__require('cc'),
        ctx = $__require('95'),
        anInstance = $__require('4a'),
        propertyDesc = $__require('1a'),
        hide = $__require('21'),
        redefineAll = $__require('c6'),
        isInteger = $__require('52'),
        toInteger = $__require('4b'),
        toLength = $__require('71'),
        toIndex = $__require('6f'),
        toPrimitive = $__require('19'),
        has = $__require('b'),
        same = $__require('38'),
        classof = $__require('3c'),
        isObject = $__require('2e'),
        toObject = $__require('29'),
        isArrayIter = $__require('97'),
        create = $__require('1b'),
        getPrototypeOf = $__require('2a'),
        gOPN = $__require('1f').f,
        isIterable = $__require('d7'),
        getIterFn = $__require('99'),
        uid = $__require('13'),
        wks = $__require('14'),
        createArrayMethod = $__require('a4'),
        createArrayIncludes = $__require('ad'),
        speciesConstructor = $__require('c3'),
        ArrayIterators = $__require('d9'),
        Iterators = $__require('d8'),
        $iterDetect = $__require('9a'),
        setSpecies = $__require('b7'),
        arrayFill = $__require('b3'),
        arrayCopyWithin = $__require('b0'),
        $DP = $__require('1e'),
        $GOPD = $__require('1d'),
        dP = $DP.f,
        gOPD = $GOPD.f,
        RangeError = global.RangeError,
        TypeError = global.TypeError,
        Uint8Array = global.Uint8Array,
        ARRAY_BUFFER = 'ArrayBuffer',
        SHARED_BUFFER = 'Shared' + ARRAY_BUFFER,
        BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT',
        PROTOTYPE = 'prototype',
        ArrayProto = Array[PROTOTYPE],
        $ArrayBuffer = $buffer.ArrayBuffer,
        $DataView = $buffer.DataView,
        arrayForEach = createArrayMethod(0),
        arrayFilter = createArrayMethod(2),
        arraySome = createArrayMethod(3),
        arrayEvery = createArrayMethod(4),
        arrayFind = createArrayMethod(5),
        arrayFindIndex = createArrayMethod(6),
        arrayIncludes = createArrayIncludes(true),
        arrayIndexOf = createArrayIncludes(false),
        arrayValues = ArrayIterators.values,
        arrayKeys = ArrayIterators.keys,
        arrayEntries = ArrayIterators.entries,
        arrayLastIndexOf = ArrayProto.lastIndexOf,
        arrayReduce = ArrayProto.reduce,
        arrayReduceRight = ArrayProto.reduceRight,
        arrayJoin = ArrayProto.join,
        arraySort = ArrayProto.sort,
        arraySlice = ArrayProto.slice,
        arrayToString = ArrayProto.toString,
        arrayToLocaleString = ArrayProto.toLocaleString,
        ITERATOR = wks('iterator'),
        TAG = wks('toStringTag'),
        TYPED_CONSTRUCTOR = uid('typed_constructor'),
        DEF_CONSTRUCTOR = uid('def_constructor'),
        ALL_CONSTRUCTORS = $typed.CONSTR,
        TYPED_ARRAY = $typed.TYPED,
        VIEW = $typed.VIEW,
        WRONG_LENGTH = 'Wrong length!';

    var $map = createArrayMethod(1, function (O, length) {
      return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
    });

    var LITTLE_ENDIAN = fails(function () {
      return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
    });

    var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
      new Uint8Array(1).set({});
    });

    var strictToLength = function (it, SAME) {
      if (it === undefined) throw TypeError(WRONG_LENGTH);
      var number = +it,
          length = toLength(it);
      if (SAME && !same(number, length)) throw RangeError(WRONG_LENGTH);
      return length;
    };

    var toOffset = function (it, BYTES) {
      var offset = toInteger(it);
      if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
      return offset;
    };

    var validate = function (it) {
      if (isObject(it) && TYPED_ARRAY in it) return it;
      throw TypeError(it + ' is not a typed array!');
    };

    var allocate = function (C, length) {
      if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
        throw TypeError('It is not a typed array constructor!');
      }return new C(length);
    };

    var speciesFromList = function (O, list) {
      return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
    };

    var fromList = function (C, list) {
      var index = 0,
          length = list.length,
          result = allocate(C, length);
      while (length > index) result[index] = list[index++];
      return result;
    };

    var addGetter = function (it, key, internal) {
      dP(it, key, { get: function () {
          return this._d[internal];
        } });
    };

    var $from = function from(source /*, mapfn, thisArg */) {
      var O = toObject(source),
          aLen = arguments.length,
          mapfn = aLen > 1 ? arguments[1] : undefined,
          mapping = mapfn !== undefined,
          iterFn = getIterFn(O),
          i,
          length,
          values,
          result,
          step,
          iterator;
      if (iterFn != undefined && !isArrayIter(iterFn)) {
        for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
          values.push(step.value);
        }O = values;
      }
      if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
      for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
        result[i] = mapping ? mapfn(O[i], i) : O[i];
      }
      return result;
    };

    var $of = function of() /*...items*/{
      var index = 0,
          length = arguments.length,
          result = allocate(this, length);
      while (length > index) result[index] = arguments[index++];
      return result;
    };

    // iOS Safari 6.x fails here
    var TO_LOCALE_BUG = !!Uint8Array && fails(function () {
      arrayToLocaleString.call(new Uint8Array(1));
    });

    var $toLocaleString = function toLocaleString() {
      return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
    };

    var proto = {
      copyWithin: function copyWithin(target, start /*, end */) {
        return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
      },
      every: function every(callbackfn /*, thisArg */) {
        return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      fill: function fill(value /*, start, end */) {
        // eslint-disable-line no-unused-vars
        return arrayFill.apply(validate(this), arguments);
      },
      filter: function filter(callbackfn /*, thisArg */) {
        return speciesFromList(this, arrayFilter(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined));
      },
      find: function find(predicate /*, thisArg */) {
        return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      findIndex: function findIndex(predicate /*, thisArg */) {
        return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
      },
      forEach: function forEach(callbackfn /*, thisArg */) {
        arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      indexOf: function indexOf(searchElement /*, fromIndex */) {
        return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      includes: function includes(searchElement /*, fromIndex */) {
        return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
      },
      join: function join(separator) {
        // eslint-disable-line no-unused-vars
        return arrayJoin.apply(validate(this), arguments);
      },
      lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */) {
        // eslint-disable-line no-unused-vars
        return arrayLastIndexOf.apply(validate(this), arguments);
      },
      map: function map(mapfn /*, thisArg */) {
        return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      reduce: function reduce(callbackfn /*, initialValue */) {
        // eslint-disable-line no-unused-vars
        return arrayReduce.apply(validate(this), arguments);
      },
      reduceRight: function reduceRight(callbackfn /*, initialValue */) {
        // eslint-disable-line no-unused-vars
        return arrayReduceRight.apply(validate(this), arguments);
      },
      reverse: function reverse() {
        var that = this,
            length = validate(that).length,
            middle = Math.floor(length / 2),
            index = 0,
            value;
        while (index < middle) {
          value = that[index];
          that[index++] = that[--length];
          that[length] = value;
        }return that;
      },
      some: function some(callbackfn /*, thisArg */) {
        return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      },
      sort: function sort(comparefn) {
        return arraySort.call(validate(this), comparefn);
      },
      subarray: function subarray(begin, end) {
        var O = validate(this),
            length = O.length,
            $begin = toIndex(begin, length);
        return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(O.buffer, O.byteOffset + $begin * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toIndex(end, length)) - $begin));
      }
    };

    var $slice = function slice(start, end) {
      return speciesFromList(this, arraySlice.call(validate(this), start, end));
    };

    var $set = function set(arrayLike /*, offset */) {
      validate(this);
      var offset = toOffset(arguments[1], 1),
          length = this.length,
          src = toObject(arrayLike),
          len = toLength(src.length),
          index = 0;
      if (len + offset > length) throw RangeError(WRONG_LENGTH);
      while (index < len) this[offset + index] = src[index++];
    };

    var $iterators = {
      entries: function entries() {
        return arrayEntries.call(validate(this));
      },
      keys: function keys() {
        return arrayKeys.call(validate(this));
      },
      values: function values() {
        return arrayValues.call(validate(this));
      }
    };

    var isTAIndex = function (target, key) {
      return isObject(target) && target[TYPED_ARRAY] && typeof key != 'symbol' && key in target && String(+key) == String(key);
    };
    var $getDesc = function getOwnPropertyDescriptor(target, key) {
      return isTAIndex(target, key = toPrimitive(key, true)) ? propertyDesc(2, target[key]) : gOPD(target, key);
    };
    var $setDesc = function defineProperty(target, key, desc) {
      if (isTAIndex(target, key = toPrimitive(key, true)) && isObject(desc) && has(desc, 'value') && !has(desc, 'get') && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable && (!has(desc, 'writable') || desc.writable) && (!has(desc, 'enumerable') || desc.enumerable)) {
        target[key] = desc.value;
        return target;
      } else return dP(target, key, desc);
    };

    if (!ALL_CONSTRUCTORS) {
      $GOPD.f = $getDesc;
      $DP.f = $setDesc;
    }

    $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
      getOwnPropertyDescriptor: $getDesc,
      defineProperty: $setDesc
    });

    if (fails(function () {
      arrayToString.call({});
    })) {
      arrayToString = arrayToLocaleString = function toString() {
        return arrayJoin.call(this);
      };
    }

    var $TypedArrayPrototype$ = redefineAll({}, proto);
    redefineAll($TypedArrayPrototype$, $iterators);
    hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
    redefineAll($TypedArrayPrototype$, {
      slice: $slice,
      set: $set,
      constructor: function () {/* noop */},
      toString: arrayToString,
      toLocaleString: $toLocaleString
    });
    addGetter($TypedArrayPrototype$, 'buffer', 'b');
    addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
    addGetter($TypedArrayPrototype$, 'byteLength', 'l');
    addGetter($TypedArrayPrototype$, 'length', 'e');
    dP($TypedArrayPrototype$, TAG, {
      get: function () {
        return this[TYPED_ARRAY];
      }
    });

    module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
      CLAMPED = !!CLAMPED;
      var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array',
          ISNT_UINT8 = NAME != 'Uint8Array',
          GETTER = 'get' + KEY,
          SETTER = 'set' + KEY,
          TypedArray = global[NAME],
          Base = TypedArray || {},
          TAC = TypedArray && getPrototypeOf(TypedArray),
          FORCED = !TypedArray || !$typed.ABV,
          O = {},
          TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
      var getter = function (that, index) {
        var data = that._d;
        return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
      };
      var setter = function (that, index, value) {
        var data = that._d;
        if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
        data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
      };
      var addElement = function (that, index) {
        dP(that, index, {
          get: function () {
            return getter(this, index);
          },
          set: function (value) {
            return setter(this, index, value);
          },
          enumerable: true
        });
      };
      if (FORCED) {
        TypedArray = wrapper(function (that, data, $offset, $length) {
          anInstance(that, TypedArray, NAME, '_d');
          var index = 0,
              offset = 0,
              buffer,
              byteLength,
              length,
              klass;
          if (!isObject(data)) {
            length = strictToLength(data, true);
            byteLength = length * BYTES;
            buffer = new $ArrayBuffer(byteLength);
          } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
            buffer = data;
            offset = toOffset($offset, BYTES);
            var $len = data.byteLength;
            if ($length === undefined) {
              if ($len % BYTES) throw RangeError(WRONG_LENGTH);
              byteLength = $len - offset;
              if (byteLength < 0) throw RangeError(WRONG_LENGTH);
            } else {
              byteLength = toLength($length) * BYTES;
              if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
            }
            length = byteLength / BYTES;
          } else if (TYPED_ARRAY in data) {
            return fromList(TypedArray, data);
          } else {
            return $from.call(TypedArray, data);
          }
          hide(that, '_d', {
            b: buffer,
            o: offset,
            l: byteLength,
            e: length,
            v: new $DataView(buffer)
          });
          while (index < length) addElement(that, index++);
        });
        TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
        hide(TypedArrayPrototype, 'constructor', TypedArray);
      } else if (!$iterDetect(function (iter) {
        // V8 works with iterators, but fails in many other cases
        // https://code.google.com/p/v8/issues/detail?id=4552
        new TypedArray(null); // eslint-disable-line no-new
        new TypedArray(iter); // eslint-disable-line no-new
      }, true)) {
        TypedArray = wrapper(function (that, data, $offset, $length) {
          anInstance(that, TypedArray, NAME);
          var klass;
          // `ws` module bug, temporarily remove validation length for Uint8Array
          // https://github.com/websockets/ws/pull/645
          if (!isObject(data)) return new Base(strictToLength(data, ISNT_UINT8));
          if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
            return $length !== undefined ? new Base(data, toOffset($offset, BYTES), $length) : $offset !== undefined ? new Base(data, toOffset($offset, BYTES)) : new Base(data);
          }
          if (TYPED_ARRAY in data) return fromList(TypedArray, data);
          return $from.call(TypedArray, data);
        });
        arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
          if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
        });
        TypedArray[PROTOTYPE] = TypedArrayPrototype;
        if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
      }
      var $nativeIterator = TypedArrayPrototype[ITERATOR],
          CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined),
          $iterator = $iterators.values;
      hide(TypedArray, TYPED_CONSTRUCTOR, true);
      hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
      hide(TypedArrayPrototype, VIEW, true);
      hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

      if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
        dP(TypedArrayPrototype, TAG, {
          get: function () {
            return NAME;
          }
        });
      }

      O[NAME] = TypedArray;

      $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

      $export($export.S, NAME, {
        BYTES_PER_ELEMENT: BYTES,
        from: $from,
        of: $of
      });

      if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

      $export($export.P, NAME, proto);

      setSpecies(NAME);

      $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

      $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

      $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, { toString: arrayToString });

      $export($export.P + $export.F * fails(function () {
        new TypedArray(1).slice();
      }), NAME, { slice: $slice });

      $export($export.P + $export.F * (fails(function () {
        return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
      }) || !fails(function () {
        TypedArrayPrototype.toLocaleString.call([1, 2]);
      })), NAME, { toLocaleString: $toLocaleString });

      Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
      if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
    };
  } else module.exports = function () {/* empty */};
  return module.exports;
});
$__System.registerDynamic('da', ['cf', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('cf')('Float64', 8, function (init) {
    return function Float64Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });
  return module.exports;
});
$__System.registerDynamic('db', ['d', 'a2', '18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
  var $export = $__require('d'),
      aFunction = $__require('a2'),
      anObject = $__require('18'),
      _apply = Function.apply;

  $export($export.S, 'Reflect', {
    apply: function apply(target, thisArgument, argumentsList) {
      return _apply.call(aFunction(target), thisArgument, anObject(argumentsList));
    }
  });
  return module.exports;
});
$__System.registerDynamic('3e', ['a2', '2e', 'dc', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var aFunction = $__require('a2'),
      isObject = $__require('2e'),
      invoke = $__require('dc'),
      arraySlice = [].slice,
      factories = {};

  var construct = function (F, len, args) {
    if (!(len in factories)) {
      for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
      factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
    }return factories[len](F, args);
  };

  module.exports = Function.bind || function bind(that /*, args... */) {
    var fn = aFunction(this),
        partArgs = arraySlice.call(arguments, 1);
    var bound = function () /* args... */{
      var args = partArgs.concat(arraySlice.call(arguments));
      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
    };
    if (isObject(fn.prototype)) bound.prototype = fn.prototype;
    return bound;
  };
  return module.exports;
});
$__System.registerDynamic('dd', ['d', '1b', 'a2', '18', '2e', '3e', '10', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
  var $export = $__require('d'),
      create = $__require('1b'),
      aFunction = $__require('a2'),
      anObject = $__require('18'),
      isObject = $__require('2e'),
      bind = $__require('3e');

  // MS Edge supports only 2 arguments
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it
  $export($export.S + $export.F * $__require('10')(function () {
    function F() {}
    return !(Reflect.construct(function () {}, [], F) instanceof F);
  }), 'Reflect', {
    construct: function construct(Target, args /*, newTarget*/) {
      aFunction(Target);
      anObject(args);
      var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0:
            return new Target();
          case 1:
            return new Target(args[0]);
          case 2:
            return new Target(args[0], args[1]);
          case 3:
            return new Target(args[0], args[1], args[2]);
          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        }
        // w/o altered newTarget, lot of arguments case
        var $args = [null];
        $args.push.apply($args, args);
        return new (bind.apply(Target, $args))();
      }
      // with altered newTarget, not support built-in constructors
      var proto = newTarget.prototype,
          instance = create(isObject(proto) ? proto : Object.prototype),
          result = Function.apply.call(Target, instance, args);
      return isObject(result) ? result : instance;
    }
  });
  return module.exports;
});
$__System.registerDynamic('de', ['1e', 'd', '18', '19', '10', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
  var dP = $__require('1e'),
      $export = $__require('d'),
      anObject = $__require('18'),
      toPrimitive = $__require('19');

  // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
  $export($export.S + $export.F * $__require('10')(function () {
    Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
  }), 'Reflect', {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
      anObject(target);
      propertyKey = toPrimitive(propertyKey, true);
      anObject(attributes);
      try {
        dP.f(target, propertyKey, attributes);
        return true;
      } catch (e) {
        return false;
      }
    }
  });
  return module.exports;
});
$__System.registerDynamic('df', ['d', '1d', '18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.4 Reflect.deleteProperty(target, propertyKey)
  var $export = $__require('d'),
      gOPD = $__require('1d').f,
      anObject = $__require('18');

  $export($export.S, 'Reflect', {
    deleteProperty: function deleteProperty(target, propertyKey) {
      var desc = gOPD(anObject(target), propertyKey);
      return desc && !desc.configurable ? false : delete target[propertyKey];
    }
  });
  return module.exports;
});
$__System.registerDynamic('e0', ['d', '18', 'e1', '5'], true, function ($__require, exports, module) {
  'use strict';
  // 26.1.5 Reflect.enumerate(target)

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      anObject = $__require('18');
  var Enumerate = function (iterated) {
    this._t = anObject(iterated); // target
    this._i = 0; // next index
    var keys = this._k = [] // keys
    ,
        key;
    for (key in iterated) keys.push(key);
  };
  $__require('e1')(Enumerate, 'Object', function () {
    var that = this,
        keys = that._k,
        key;
    do {
      if (that._i >= keys.length) return { value: undefined, done: true };
    } while (!((key = keys[that._i++]) in that._t));
    return { value: key, done: false };
  });

  $export($export.S, 'Reflect', {
    enumerate: function enumerate(target) {
      return new Enumerate(target);
    }
  });
  return module.exports;
});
$__System.registerDynamic('e2', ['1d', '2a', 'b', 'd', '2e', '18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.6 Reflect.get(target, propertyKey [, receiver])
  var gOPD = $__require('1d'),
      getPrototypeOf = $__require('2a'),
      has = $__require('b'),
      $export = $__require('d'),
      isObject = $__require('2e'),
      anObject = $__require('18');

  function get(target, propertyKey /*, receiver*/) {
    var receiver = arguments.length < 3 ? target : arguments[2],
        desc,
        proto;
    if (anObject(target) === receiver) return target[propertyKey];
    if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ? desc.value : desc.get !== undefined ? desc.get.call(receiver) : undefined;
    if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
  }

  $export($export.S, 'Reflect', { get: get });
  return module.exports;
});
$__System.registerDynamic('e3', ['1d', 'd', '18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
  var gOPD = $__require('1d'),
      $export = $__require('d'),
      anObject = $__require('18');

  $export($export.S, 'Reflect', {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
      return gOPD.f(anObject(target), propertyKey);
    }
  });
  return module.exports;
});
$__System.registerDynamic('e4', ['d', '2a', '18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.8 Reflect.getPrototypeOf(target)
  var $export = $__require('d'),
      getProto = $__require('2a'),
      anObject = $__require('18');

  $export($export.S, 'Reflect', {
    getPrototypeOf: function getPrototypeOf(target) {
      return getProto(anObject(target));
    }
  });
  return module.exports;
});
$__System.registerDynamic('e5', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.9 Reflect.has(target, propertyKey)
  var $export = $__require('d');

  $export($export.S, 'Reflect', {
    has: function has(target, propertyKey) {
      return propertyKey in target;
    }
  });
  return module.exports;
});
$__System.registerDynamic('e6', ['d', '18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.10 Reflect.isExtensible(target)
  var $export = $__require('d'),
      anObject = $__require('18'),
      $isExtensible = Object.isExtensible;

  $export($export.S, 'Reflect', {
    isExtensible: function isExtensible(target) {
      anObject(target);
      return $isExtensible ? $isExtensible(target) : true;
    }
  });
  return module.exports;
});
$__System.registerDynamic('e7', ['d', 'e8', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.11 Reflect.ownKeys(target)
  var $export = $__require('d');

  $export($export.S, 'Reflect', { ownKeys: $__require('e8') });
  return module.exports;
});
$__System.registerDynamic('e9', ['d', '18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.12 Reflect.preventExtensions(target)
  var $export = $__require('d'),
      anObject = $__require('18'),
      $preventExtensions = Object.preventExtensions;

  $export($export.S, 'Reflect', {
    preventExtensions: function preventExtensions(target) {
      anObject(target);
      try {
        if ($preventExtensions) $preventExtensions(target);
        return true;
      } catch (e) {
        return false;
      }
    }
  });
  return module.exports;
});
$__System.registerDynamic('ea', ['1e', '1d', '2a', 'b', 'd', '1a', '18', '2e', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
  var dP = $__require('1e'),
      gOPD = $__require('1d'),
      getPrototypeOf = $__require('2a'),
      has = $__require('b'),
      $export = $__require('d'),
      createDesc = $__require('1a'),
      anObject = $__require('18'),
      isObject = $__require('2e');

  function set(target, propertyKey, V /*, receiver*/) {
    var receiver = arguments.length < 4 ? target : arguments[3],
        ownDesc = gOPD.f(anObject(target), propertyKey),
        existingDescriptor,
        proto;
    if (!ownDesc) {
      if (isObject(proto = getPrototypeOf(target))) {
        return set(proto, propertyKey, V, receiver);
      }
      ownDesc = createDesc(0);
    }
    if (has(ownDesc, 'value')) {
      if (ownDesc.writable === false || !isObject(receiver)) return false;
      existingDescriptor = gOPD.f(receiver, propertyKey) || createDesc(0);
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
      return true;
    }
    return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
  }

  $export($export.S, 'Reflect', { set: set });
  return module.exports;
});
$__System.registerDynamic('eb', ['d', '3a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 26.1.14 Reflect.setPrototypeOf(target, proto)
  var $export = $__require('d'),
      setProto = $__require('3a');

  if (setProto) $export($export.S, 'Reflect', {
    setPrototypeOf: function setPrototypeOf(target, proto) {
      setProto.check(target, proto);
      try {
        setProto.set(target, proto);
        return true;
      } catch (e) {
        return false;
      }
    }
  });
  return module.exports;
});
$__System.registerDynamic('ec', ['d', 'ad', 'b1', '5'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/tc39/Array.prototype.includes

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $includes = $__require('ad')(true);

  $export($export.P, 'Array', {
    includes: function includes(el /*, fromIndex = 0 */) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  $__require('b1')('includes');
  return module.exports;
});
$__System.registerDynamic('74', ['4b', '7d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var toInteger = $__require('4b'),
      defined = $__require('7d');
  // true  -> String#at
  // false -> String#codePointAt
  module.exports = function (TO_STRING) {
    return function (that, pos) {
      var s = String(defined(that)),
          i = toInteger(pos),
          l = s.length,
          a,
          b;
      if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
      a = s.charCodeAt(i);
      return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
    };
  };
  return module.exports;
});
$__System.registerDynamic('ed', ['d', '74', '5'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/mathiasbynens/String.prototype.at

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $at = $__require('74')(true);

  $export($export.P, 'String', {
    at: function at(pos) {
      return $at(this, pos);
    }
  });
  return module.exports;
});
$__System.registerDynamic('ee', ['d', 'ef', '5'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/tc39/proposal-string-pad-start-end

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $pad = $__require('ef');

  $export($export.P, 'String', {
    padStart: function padStart(maxLength /*, fillString = ' ' */) {
      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
    }
  });
  return module.exports;
});
$__System.registerDynamic('4d', ['4b', '7d', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var toInteger = $__require('4b'),
      defined = $__require('7d');

  module.exports = function repeat(count) {
    var str = String(defined(this)),
        res = '',
        n = toInteger(count);
    if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
    for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
    return res;
  };
  return module.exports;
});
$__System.registerDynamic('ef', ['71', '4d', '7d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/tc39/proposal-string-pad-start-end
  var toLength = $__require('71'),
      repeat = $__require('4d'),
      defined = $__require('7d');

  module.exports = function (that, maxLength, fillString, left) {
    var S = String(defined(that)),
        stringLength = S.length,
        fillStr = fillString === undefined ? ' ' : String(fillString),
        intMaxLength = toLength(maxLength);
    if (intMaxLength <= stringLength || fillStr == '') return S;
    var fillLen = intMaxLength - stringLength,
        stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
    return left ? stringFiller + S : S + stringFiller;
  };
  return module.exports;
});
$__System.registerDynamic('f0', ['d', 'ef', '5'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/tc39/proposal-string-pad-start-end

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $pad = $__require('ef');

  $export($export.P, 'String', {
    padEnd: function padEnd(maxLength /*, fillString = ' ' */) {
      return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
    }
  });
  return module.exports;
});
$__System.registerDynamic('f1', ['48', '5'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('48')('trimLeft', function ($trim) {
    return function trimLeft() {
      return $trim(this, 1);
    };
  }, 'trimStart');
  return module.exports;
});
$__System.registerDynamic('57', ['5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  return module.exports;
});
$__System.registerDynamic('48', ['d', '7d', '10', '57', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      defined = $__require('7d'),
      fails = $__require('10'),
      spaces = $__require('57'),
      space = '[' + spaces + ']',
      non = '\u200b\u0085',
      ltrim = RegExp('^' + space + space + '*'),
      rtrim = RegExp(space + space + '*$');

  var exporter = function (KEY, exec, ALIAS) {
    var exp = {};
    var FORCE = fails(function () {
      return !!spaces[KEY]() || non[KEY]() != non;
    });
    var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
    if (ALIAS) exp[ALIAS] = fn;
    $export($export.P + $export.F * FORCE, 'String', exp);
  };

  // 1 -> String#trimLeft
  // 2 -> String#trimRight
  // 3 -> String#trim
  var trim = exporter.trim = function (string, TYPE) {
    string = String(defined(string));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };

  module.exports = exporter;
  return module.exports;
});
$__System.registerDynamic('f2', ['48', '5'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/sebmarkbage/ecmascript-string-left-right-trim

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('48')('trimRight', function ($trim) {
    return function trimRight() {
      return $trim(this, 2);
    };
  }, 'trimEnd');
  return module.exports;
});
$__System.registerDynamic('7c', ['2e', '46', '14', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.8 IsRegExp(argument)
  var isObject = $__require('2e'),
      cof = $__require('46'),
      MATCH = $__require('14')('match');
  module.exports = function (it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
  };
  return module.exports;
});
$__System.registerDynamic('b9', ['18', '5'], true, function ($__require, exports, module) {
  'use strict';
  // 21.2.5.3 get RegExp.prototype.flags

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var anObject = $__require('18');
  module.exports = function () {
    var that = anObject(this),
        result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };
  return module.exports;
});
$__System.registerDynamic('f3', ['d', '7d', '71', '7c', 'b9', 'e1', '5'], true, function ($__require, exports, module) {
  'use strict';
  // https://tc39.github.io/String.prototype.matchAll/

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      defined = $__require('7d'),
      toLength = $__require('71'),
      isRegExp = $__require('7c'),
      getFlags = $__require('b9'),
      RegExpProto = RegExp.prototype;

  var $RegExpStringIterator = function (regexp, string) {
    this._r = regexp;
    this._s = string;
  };

  $__require('e1')($RegExpStringIterator, 'RegExp String', function next() {
    var match = this._r.exec(this._s);
    return { value: match, done: match === null };
  });

  $export($export.P, 'String', {
    matchAll: function matchAll(regexp) {
      defined(this);
      if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
      var S = String(this),
          flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp),
          rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
      rx.lastIndex = toLength(regexp.lastIndex);
      return new $RegExpStringIterator(rx, S);
    }
  });
  return module.exports;
});
$__System.registerDynamic('f4', ['16', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('16')('asyncIterator');
  return module.exports;
});
$__System.registerDynamic('15', ['14', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  exports.f = $__require('14');
  return module.exports;
});
$__System.registerDynamic('16', ['a', '33', '20', '15', '1e', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('a'),
      core = $__require('33'),
      LIBRARY = $__require('20'),
      wksExt = $__require('15'),
      defineProperty = $__require('1e').f;
  module.exports = function (name) {
    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
  };
  return module.exports;
});
$__System.registerDynamic('f5', ['16', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('16')('observable');
  return module.exports;
});
$__System.registerDynamic('1f', ['f6', 'f7', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
  var $keys = $__require('f6'),
      hiddenKeys = $__require('f7').concat('length', 'prototype');

  exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
  };
  return module.exports;
});
$__System.registerDynamic('e8', ['1f', '7', '18', 'a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // all object keys, includes non-enumerable and symbols
  var gOPN = $__require('1f'),
      gOPS = $__require('7'),
      anObject = $__require('18'),
      Reflect = $__require('a').Reflect;
  module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
    var keys = gOPN.f(anObject(it)),
        getSymbols = gOPS.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };
  return module.exports;
});
$__System.registerDynamic('98', ['1e', '1a', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $defineProperty = $__require('1e'),
      createDesc = $__require('1a');

  module.exports = function (object, index, value) {
    if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
  };
  return module.exports;
});
$__System.registerDynamic('f8', ['d', 'e8', '4', '1d', '98', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/tc39/proposal-object-getownpropertydescriptors
  var $export = $__require('d'),
      ownKeys = $__require('e8'),
      toIObject = $__require('4'),
      gOPD = $__require('1d'),
      createProperty = $__require('98');

  $export($export.S, 'Object', {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIObject(object),
          getDesc = gOPD.f,
          keys = ownKeys(O),
          result = {},
          i = 0,
          key,
          D;
      while (keys.length > i) createProperty(result, key = keys[i++], getDesc(O, key));
      return result;
    }
  });
  return module.exports;
});
$__System.registerDynamic('f9', ['d', 'fa', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/tc39/proposal-object-values-entries
  var $export = $__require('d'),
      $values = $__require('fa')(false);

  $export($export.S, 'Object', {
    values: function values(it) {
      return $values(it);
    }
  });
  return module.exports;
});
$__System.registerDynamic('fa', ['3', '4', '8', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var getKeys = $__require('3'),
      toIObject = $__require('4'),
      isEnum = $__require('8').f;
  module.exports = function (isEntries) {
    return function (it) {
      var O = toIObject(it),
          keys = getKeys(O),
          length = keys.length,
          i = 0,
          result = [],
          key;
      while (length > i) if (isEnum.call(O, key = keys[i++])) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }return result;
    };
  };
  return module.exports;
});
$__System.registerDynamic('fb', ['d', 'fa', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/tc39/proposal-object-values-entries
  var $export = $__require('d'),
      $entries = $__require('fa')(true);

  $export($export.S, 'Object', {
    entries: function entries(it) {
      return $entries(it);
    }
  });
  return module.exports;
});
$__System.registerDynamic('fc', ['d', '29', 'a2', '1e', 'c', 'fd', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      toObject = $__require('29'),
      aFunction = $__require('a2'),
      $defineProperty = $__require('1e');

  // B.2.2.2 Object.prototype.__defineGetter__(P, getter)
  $__require('c') && $export($export.P + $__require('fd'), 'Object', {
    __defineGetter__: function __defineGetter__(P, getter) {
      $defineProperty.f(toObject(this), P, { get: aFunction(getter), enumerable: true, configurable: true });
    }
  });
  return module.exports;
});
$__System.registerDynamic('fe', ['d', '29', 'a2', '1e', 'c', 'fd', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      toObject = $__require('29'),
      aFunction = $__require('a2'),
      $defineProperty = $__require('1e');

  // B.2.2.3 Object.prototype.__defineSetter__(P, setter)
  $__require('c') && $export($export.P + $__require('fd'), 'Object', {
    __defineSetter__: function __defineSetter__(P, setter) {
      $defineProperty.f(toObject(this), P, { set: aFunction(setter), enumerable: true, configurable: true });
    }
  });
  return module.exports;
});
$__System.registerDynamic('ff', ['d', '29', '19', '2a', '1d', 'c', 'fd', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      toObject = $__require('29'),
      toPrimitive = $__require('19'),
      getPrototypeOf = $__require('2a'),
      getOwnPropertyDescriptor = $__require('1d').f;

  // B.2.2.4 Object.prototype.__lookupGetter__(P)
  $__require('c') && $export($export.P + $__require('fd'), 'Object', {
    __lookupGetter__: function __lookupGetter__(P) {
      var O = toObject(this),
          K = toPrimitive(P, true),
          D;
      do {
        if (D = getOwnPropertyDescriptor(O, K)) return D.get;
      } while (O = getPrototypeOf(O));
    }
  });
  return module.exports;
});
$__System.registerDynamic('fd', ['20', '10', 'a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // Forced replacement prototype accessors methods
  module.exports = $__require('20') || !$__require('10')(function () {
    var K = Math.random();
    // In FF throws only define methods
    __defineSetter__.call(null, K, function () {/* empty */});
    delete $__require('a')[K];
  });
  return module.exports;
});
$__System.registerDynamic('100', ['d', '29', '19', '2a', '1d', 'c', 'fd', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      toObject = $__require('29'),
      toPrimitive = $__require('19'),
      getPrototypeOf = $__require('2a'),
      getOwnPropertyDescriptor = $__require('1d').f;

  // B.2.2.5 Object.prototype.__lookupSetter__(P)
  $__require('c') && $export($export.P + $__require('fd'), 'Object', {
    __lookupSetter__: function __lookupSetter__(P) {
      var O = toObject(this),
          K = toPrimitive(P, true),
          D;
      do {
        if (D = getOwnPropertyDescriptor(O, K)) return D.set;
      } while (O = getPrototypeOf(O));
    }
  });
  return module.exports;
});
$__System.registerDynamic('101', ['d', '102', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $export = $__require('d');

  $export($export.P + $export.R, 'Map', { toJSON: $__require('102')('Map') });
  return module.exports;
});
$__System.registerDynamic('102', ['3c', '103', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var classof = $__require('3c'),
      from = $__require('103');
  module.exports = function (NAME) {
    return function toJSON() {
      if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
      return from(this);
    };
  };
  return module.exports;
});
$__System.registerDynamic('104', ['d', '102', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/DavidBruant/Map-Set.prototype.toJSON
  var $export = $__require('d');

  $export($export.P + $export.R, 'Set', { toJSON: $__require('102')('Set') });
  return module.exports;
});
$__System.registerDynamic('105', ['d', 'a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/ljharb/proposal-global
  var $export = $__require('d');

  $export($export.S, 'System', { global: $__require('a') });
  return module.exports;
});
$__System.registerDynamic('106', ['d', '46', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/ljharb/proposal-is-error
  var $export = $__require('d'),
      cof = $__require('46');

  $export($export.S, 'Error', {
    isError: function isError(it) {
      return cof(it) === 'Error';
    }
  });
  return module.exports;
});
$__System.registerDynamic('107', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = $__require('d');

  $export($export.S, 'Math', {
    iaddh: function iaddh(x0, x1, y0, y1) {
      var $x0 = x0 >>> 0,
          $x1 = x1 >>> 0,
          $y0 = y0 >>> 0;
      return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
    }
  });
  return module.exports;
});
$__System.registerDynamic('108', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = $__require('d');

  $export($export.S, 'Math', {
    isubh: function isubh(x0, x1, y0, y1) {
      var $x0 = x0 >>> 0,
          $x1 = x1 >>> 0,
          $y0 = y0 >>> 0;
      return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
    }
  });
  return module.exports;
});
$__System.registerDynamic('109', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = $__require('d');

  $export($export.S, 'Math', {
    imulh: function imulh(u, v) {
      var UINT16 = 0xffff,
          $u = +u,
          $v = +v,
          u0 = $u & UINT16,
          v0 = $v & UINT16,
          u1 = $u >> 16,
          v1 = $v >> 16,
          t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
      return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
    }
  });
  return module.exports;
});
$__System.registerDynamic('10a', ['d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
  var $export = $__require('d');

  $export($export.S, 'Math', {
    umulh: function umulh(u, v) {
      var UINT16 = 0xffff,
          $u = +u,
          $v = +v,
          u0 = $u & UINT16,
          v0 = $v & UINT16,
          u1 = $u >>> 16,
          v1 = $v >>> 16,
          t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
      return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
    }
  });
  return module.exports;
});
$__System.registerDynamic('10b', ['10c', '18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var metadata = $__require('10c'),
      anObject = $__require('18'),
      toMetaKey = metadata.key,
      ordinaryDefineOwnMetadata = metadata.set;

  metadata.exp({ defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
      ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
    } });
  return module.exports;
});
$__System.registerDynamic('10d', ['10c', '18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var metadata = $__require('10c'),
      anObject = $__require('18'),
      toMetaKey = metadata.key,
      getOrCreateMetadataMap = metadata.map,
      store = metadata.store;

  metadata.exp({ deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */) {
      var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]),
          metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
      if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
      if (metadataMap.size) return true;
      var targetMetadata = store.get(target);
      targetMetadata['delete'](targetKey);
      return !!targetMetadata.size || store['delete'](target);
    } });
  return module.exports;
});
$__System.registerDynamic('10e', ['10c', '18', '2a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var metadata = $__require('10c'),
      anObject = $__require('18'),
      getPrototypeOf = $__require('2a'),
      ordinaryHasOwnMetadata = metadata.has,
      ordinaryGetOwnMetadata = metadata.get,
      toMetaKey = metadata.key;

  var ordinaryGetMetadata = function (MetadataKey, O, P) {
    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
  };

  metadata.exp({ getMetadata: function getMetadata(metadataKey, target /*, targetKey */) {
      return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
  return module.exports;
});
$__System.registerDynamic('10f', ['110', 'c9', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var strong = $__require('110');

  // 23.2 Set Objects
  module.exports = $__require('c9')('Set', function (get) {
    return function Set() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.2.3.1 Set.prototype.add(value)
    add: function add(value) {
      return strong.def(this, value = value === 0 ? 0 : value, value);
    }
  }, strong);
  return module.exports;
});
$__System.registerDynamic('103', ['c2', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var forOf = $__require('c2');

  module.exports = function (iter, ITERATOR) {
    var result = [];
    forOf(iter, false, result.push, result, ITERATOR);
    return result;
  };
  return module.exports;
});
$__System.registerDynamic('111', ['10f', '103', '10c', '18', '2a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var Set = $__require('10f'),
      from = $__require('103'),
      metadata = $__require('10c'),
      anObject = $__require('18'),
      getPrototypeOf = $__require('2a'),
      ordinaryOwnMetadataKeys = metadata.keys,
      toMetaKey = metadata.key;

  var ordinaryMetadataKeys = function (O, P) {
    var oKeys = ordinaryOwnMetadataKeys(O, P),
        parent = getPrototypeOf(O);
    if (parent === null) return oKeys;
    var pKeys = ordinaryMetadataKeys(parent, P);
    return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
  };

  metadata.exp({ getMetadataKeys: function getMetadataKeys(target /*, targetKey */) {
      return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
    } });
  return module.exports;
});
$__System.registerDynamic('112', ['10c', '18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var metadata = $__require('10c'),
      anObject = $__require('18'),
      ordinaryGetOwnMetadata = metadata.get,
      toMetaKey = metadata.key;

  metadata.exp({ getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */) {
      return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
  return module.exports;
});
$__System.registerDynamic('113', ['10c', '18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var metadata = $__require('10c'),
      anObject = $__require('18'),
      ordinaryOwnMetadataKeys = metadata.keys,
      toMetaKey = metadata.key;

  metadata.exp({ getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */) {
      return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
    } });
  return module.exports;
});
$__System.registerDynamic('114', ['10c', '18', '2a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var metadata = $__require('10c'),
      anObject = $__require('18'),
      getPrototypeOf = $__require('2a'),
      ordinaryHasOwnMetadata = metadata.has,
      toMetaKey = metadata.key;

  var ordinaryHasMetadata = function (MetadataKey, O, P) {
    var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
    if (hasOwn) return true;
    var parent = getPrototypeOf(O);
    return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
  };

  metadata.exp({ hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */) {
      return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
  return module.exports;
});
$__System.registerDynamic('115', ['10c', '18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var metadata = $__require('10c'),
      anObject = $__require('18'),
      ordinaryHasOwnMetadata = metadata.has,
      toMetaKey = metadata.key;

  metadata.exp({ hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */) {
      return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
    } });
  return module.exports;
});
$__System.registerDynamic('110', ['1e', '1b', '21', 'c6', '95', '4a', '7d', 'c2', '75', '116', 'b7', 'c', 'f', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var dP = $__require('1e').f,
      create = $__require('1b'),
      hide = $__require('21'),
      redefineAll = $__require('c6'),
      ctx = $__require('95'),
      anInstance = $__require('4a'),
      defined = $__require('7d'),
      forOf = $__require('c2'),
      $iterDefine = $__require('75'),
      step = $__require('116'),
      setSpecies = $__require('b7'),
      DESCRIPTORS = $__require('c'),
      fastKey = $__require('f').fastKey,
      SIZE = DESCRIPTORS ? '_s' : 'size';

  var getEntry = function (that, key) {
    // fast case
    var index = fastKey(key),
        entry;
    if (index !== 'F') return that._i[index];
    // frozen object case
    for (entry = that._f; entry; entry = entry.n) {
      if (entry.k == key) return entry;
    }
  };

  module.exports = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, NAME, '_i');
        that._i = create(null); // index
        that._f = undefined; // first entry
        that._l = undefined; // last entry
        that[SIZE] = 0; // size
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.1.3.1 Map.prototype.clear()
        // 23.2.3.2 Set.prototype.clear()
        clear: function clear() {
          for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
            entry.r = true;
            if (entry.p) entry.p = entry.p.n = undefined;
            delete data[entry.i];
          }
          that._f = that._l = undefined;
          that[SIZE] = 0;
        },
        // 23.1.3.3 Map.prototype.delete(key)
        // 23.2.3.4 Set.prototype.delete(value)
        'delete': function (key) {
          var that = this,
              entry = getEntry(that, key);
          if (entry) {
            var next = entry.n,
                prev = entry.p;
            delete that._i[entry.i];
            entry.r = true;
            if (prev) prev.n = next;
            if (next) next.p = prev;
            if (that._f == entry) that._f = next;
            if (that._l == entry) that._l = prev;
            that[SIZE]--;
          }return !!entry;
        },
        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
        forEach: function forEach(callbackfn /*, that = undefined */) {
          anInstance(this, C, 'forEach');
          var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
              entry;
          while (entry = entry ? entry.n : this._f) {
            f(entry.v, entry.k, this);
            // revert to the last existing entry
            while (entry && entry.r) entry = entry.p;
          }
        },
        // 23.1.3.7 Map.prototype.has(key)
        // 23.2.3.7 Set.prototype.has(value)
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      if (DESCRIPTORS) dP(C.prototype, 'size', {
        get: function () {
          return defined(this[SIZE]);
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var entry = getEntry(that, key),
          prev,
          index;
      // change existing entry
      if (entry) {
        entry.v = value;
        // create new entry
      } else {
        that._l = entry = {
          i: index = fastKey(key, true), // <- index
          k: key, // <- key
          v: value, // <- value
          p: prev = that._l, // <- previous entry
          n: undefined, // <- next entry
          r: false // <- removed
        };
        if (!that._f) that._f = entry;
        if (prev) prev.n = entry;
        that[SIZE]++;
        // add to index
        if (index !== 'F') that._i[index] = entry;
      }return that;
    },
    getEntry: getEntry,
    setStrong: function (C, NAME, IS_MAP) {
      // add .keys, .values, .entries, [@@iterator]
      // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
      $iterDefine(C, NAME, function (iterated, kind) {
        this._t = iterated; // target
        this._k = kind; // kind
        this._l = undefined; // previous
      }, function () {
        var that = this,
            kind = that._k,
            entry = that._l;
        // revert to the last existing entry
        while (entry && entry.r) entry = entry.p;
        // get next entry
        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
          // or finish the iteration
          that._t = undefined;
          return step(1);
        }
        // return step by kind
        if (kind == 'keys') return step(0, entry.k);
        if (kind == 'values') return step(0, entry.v);
        return step(0, [entry.k, entry.v]);
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

      // add [@@species], 23.1.2.2, 23.2.2.2
      setSpecies(NAME);
    }
  };
  return module.exports;
});
$__System.registerDynamic('117', ['110', 'c9', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var strong = $__require('110');

  // 23.1 Map Objects
  module.exports = $__require('c9')('Map', function (get) {
    return function Map() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  }, {
    // 23.1.3.6 Map.prototype.get(key)
    get: function get(key) {
      var entry = strong.getEntry(this, key);
      return entry && entry.v;
    },
    // 23.1.3.9 Map.prototype.set(key, value)
    set: function set(key, value) {
      return strong.def(this, key === 0 ? 0 : key, value);
    }
  }, strong, true);
  return module.exports;
});
$__System.registerDynamic("7", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  exports.f = Object.getOwnPropertySymbols;
  return module.exports;
});
$__System.registerDynamic('36', ['3', '7', '8', '29', '9d', '10', '5'], true, function ($__require, exports, module) {
  'use strict';
  // 19.1.2.1 Object.assign(target, source, ...)

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var getKeys = $__require('3'),
      gOPS = $__require('7'),
      pIE = $__require('8'),
      toObject = $__require('29'),
      IObject = $__require('9d'),
      $assign = Object.assign;

  // should work with symbols and should have deterministic property order (V8 bug)
  module.exports = !$assign || $__require('10')(function () {
    var A = {},
        B = {},
        S = Symbol(),
        K = 'abcdefghijklmnopqrst';
    A[S] = 7;
    K.split('').forEach(function (k) {
      B[k] = k;
    });
    return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars
    var T = toObject(target),
        aLen = arguments.length,
        index = 1,
        getSymbols = gOPS.f,
        isEnum = pIE.f;
    while (aLen > index) {
      var S = IObject(arguments[index++]),
          keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S),
          length = keys.length,
          j = 0,
          key;
      while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
    }return T;
  } : $assign;
  return module.exports;
});
$__System.registerDynamic('17', ['46', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.2 IsArray(argument)
  var cof = $__require('46');
  module.exports = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
  };
  return module.exports;
});
$__System.registerDynamic('118', ['2e', '17', '14', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var isObject = $__require('2e'),
      isArray = $__require('17'),
      SPECIES = $__require('14')('species');

  module.exports = function (original) {
    var C;
    if (isArray(original)) {
      C = original.constructor;
      // cross-realm fallback
      if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
      if (isObject(C)) {
        C = C[SPECIES];
        if (C === null) C = undefined;
      }
    }return C === undefined ? Array : C;
  };
  return module.exports;
});
$__System.registerDynamic('119', ['118', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
  var speciesConstructor = $__require('118');

  module.exports = function (original, length) {
    return new (speciesConstructor(original))(length);
  };
  return module.exports;
});
$__System.registerDynamic('a4', ['95', '9d', '29', '71', '119', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 0 -> Array#forEach
  // 1 -> Array#map
  // 2 -> Array#filter
  // 3 -> Array#some
  // 4 -> Array#every
  // 5 -> Array#find
  // 6 -> Array#findIndex
  var ctx = $__require('95'),
      IObject = $__require('9d'),
      toObject = $__require('29'),
      toLength = $__require('71'),
      asc = $__require('119');
  module.exports = function (TYPE, $create) {
    var IS_MAP = TYPE == 1,
        IS_FILTER = TYPE == 2,
        IS_SOME = TYPE == 3,
        IS_EVERY = TYPE == 4,
        IS_FIND_INDEX = TYPE == 6,
        NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
        create = $create || asc;
    return function ($this, callbackfn, that) {
      var O = toObject($this),
          self = IObject(O),
          f = ctx(callbackfn, that, 3),
          length = toLength(self.length),
          index = 0,
          result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
          val,
          res;
      for (; length > index; index++) if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);
        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true; // some
              case 5:
                return val; // find
              case 6:
                return index; // findIndex
              case 2:
                result.push(val); // filter
            } else if (IS_EVERY) return false; // every
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
    };
  };
  return module.exports;
});
$__System.registerDynamic('c8', ['c6', 'f', '18', '2e', '4a', 'c2', 'a4', 'b', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var redefineAll = $__require('c6'),
      getWeak = $__require('f').getWeak,
      anObject = $__require('18'),
      isObject = $__require('2e'),
      anInstance = $__require('4a'),
      forOf = $__require('c2'),
      createArrayMethod = $__require('a4'),
      $has = $__require('b'),
      arrayFind = createArrayMethod(5),
      arrayFindIndex = createArrayMethod(6),
      id = 0;

  // fallback for uncaught frozen keys
  var uncaughtFrozenStore = function (that) {
    return that._l || (that._l = new UncaughtFrozenStore());
  };
  var UncaughtFrozenStore = function () {
    this.a = [];
  };
  var findUncaughtFrozen = function (store, key) {
    return arrayFind(store.a, function (it) {
      return it[0] === key;
    });
  };
  UncaughtFrozenStore.prototype = {
    get: function (key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function (key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function (key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.a.push([key, value]);
    },
    'delete': function (key) {
      var index = arrayFindIndex(this.a, function (it) {
        return it[0] === key;
      });
      if (~index) this.a.splice(index, 1);
      return !!~index;
    }
  };

  module.exports = {
    getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
      var C = wrapper(function (that, iterable) {
        anInstance(that, C, NAME, '_i');
        that._i = id++; // collection id
        that._l = undefined; // leak store for uncaught frozen objects
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
      });
      redefineAll(C.prototype, {
        // 23.3.3.2 WeakMap.prototype.delete(key)
        // 23.4.3.3 WeakSet.prototype.delete(value)
        'delete': function (key) {
          if (!isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(this)['delete'](key);
          return data && $has(data, this._i) && delete data[this._i];
        },
        // 23.3.3.4 WeakMap.prototype.has(key)
        // 23.4.3.4 WeakSet.prototype.has(value)
        has: function has(key) {
          if (!isObject(key)) return false;
          var data = getWeak(key);
          if (data === true) return uncaughtFrozenStore(this).has(key);
          return data && $has(data, this._i);
        }
      });
      return C;
    },
    def: function (that, key, value) {
      var data = getWeak(anObject(key), true);
      if (data === true) uncaughtFrozenStore(that).set(key, value);else data[that._i] = value;
      return that;
    },
    ufstore: uncaughtFrozenStore
  };
  return module.exports;
});
$__System.registerDynamic('f', ['13', '2e', 'b', '1e', '10', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var META = $__require('13')('meta'),
      isObject = $__require('2e'),
      has = $__require('b'),
      setDesc = $__require('1e').f,
      id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !$__require('10')(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
        i: 'O' + ++id, // object ID
        w: {} // weak collections IDs
      } });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
      // return object ID
    }return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
      // return hash weak collections IDs
    }return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
  return module.exports;
});
$__System.registerDynamic('9a', ['14', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var ITERATOR = $__require('14')('iterator'),
      SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR]();
    riter['return'] = function () {
      SAFE_CLOSING = true;
    };
    Array.from(riter, function () {
      throw 2;
    });
  } catch (e) {/* empty */}

  module.exports = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7],
          iter = arr[ITERATOR]();
      iter.next = function () {
        return { done: safe = true };
      };
      arr[ITERATOR] = function () {
        return iter;
      };
      exec(arr);
    } catch (e) {/* empty */}
    return safe;
  };
  return module.exports;
});
$__System.registerDynamic("8", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  exports.f = {}.propertyIsEnumerable;
  return module.exports;
});
$__System.registerDynamic('1d', ['8', '1a', '4', '19', 'b', '11a', 'c', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var pIE = $__require('8'),
      createDesc = $__require('1a'),
      toIObject = $__require('4'),
      toPrimitive = $__require('19'),
      has = $__require('b'),
      IE8_DOM_DEFINE = $__require('11a'),
      gOPD = Object.getOwnPropertyDescriptor;

  exports.f = $__require('c') ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = toIObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
      return gOPD(O, P);
    } catch (e) {/* empty */}
    if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
  };
  return module.exports;
});
$__System.registerDynamic('3a', ['2e', '18', '95', '1d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  /* eslint-disable no-proto */
  var isObject = $__require('2e'),
      anObject = $__require('18');
  var check = function (O, proto) {
    anObject(O);
    if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
  };
  module.exports = {
    set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = $__require('95')(Function.call, $__require('1d').f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) {
        buggy = true;
      }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
    check: check
  };
  return module.exports;
});
$__System.registerDynamic('47', ['2e', '3a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var isObject = $__require('2e'),
      setPrototypeOf = $__require('3a').set;
  module.exports = function (that, target, C) {
    var P,
        S = target.constructor;
    if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
      setPrototypeOf(that, P);
    }return that;
  };
  return module.exports;
});
$__System.registerDynamic('c9', ['a', 'd', 'e', 'c6', 'f', 'c2', '4a', '2e', '10', '9a', '12', '47', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('a'),
      $export = $__require('d'),
      redefine = $__require('e'),
      redefineAll = $__require('c6'),
      meta = $__require('f'),
      forOf = $__require('c2'),
      anInstance = $__require('4a'),
      isObject = $__require('2e'),
      fails = $__require('10'),
      $iterDetect = $__require('9a'),
      setToStringTag = $__require('12'),
      inheritIfRequired = $__require('47');

  module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
    var Base = global[NAME],
        C = Base,
        ADDER = IS_MAP ? 'set' : 'add',
        proto = C && C.prototype,
        O = {};
    var fixMethod = function (KEY) {
      var fn = proto[KEY];
      redefine(proto, KEY, KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) {
        fn.call(this, a === 0 ? 0 : a);return this;
      } : function set(a, b) {
        fn.call(this, a === 0 ? 0 : a, b);return this;
      });
    };
    if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
      new C().entries().next();
    }))) {
      // create collection constructor
      C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
      redefineAll(C.prototype, methods);
      meta.NEED = true;
    } else {
      var instance = new C()
      // early implementations not supports chaining
      ,
          HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      ,
          THROWS_ON_PRIMITIVES = fails(function () {
        instance.has(1);
      })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      ,
          ACCEPT_ITERABLES = $iterDetect(function (iter) {
        new C(iter);
      }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      ,
          BUGGY_ZERO = !IS_WEAK && fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C(),
            index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });
      if (!ACCEPT_ITERABLES) {
        C = wrapper(function (target, iterable) {
          anInstance(target, C, NAME);
          var that = inheritIfRequired(new Base(), target, C);
          if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
          return that;
        });
        C.prototype = proto;
        proto.constructor = C;
      }
      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }
      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
      // weak collections should not contains .clear method
      if (IS_WEAK && proto.clear) delete proto.clear;
    }

    setToStringTag(C, NAME);

    O[NAME] = C;
    $export($export.G + $export.W + $export.F * (C != Base), O);

    if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

    return C;
  };
  return module.exports;
});
$__System.registerDynamic('11b', ['a4', 'e', 'f', '36', 'c8', '2e', 'b', 'c9', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var each = $__require('a4')(0),
      redefine = $__require('e'),
      meta = $__require('f'),
      assign = $__require('36'),
      weak = $__require('c8'),
      isObject = $__require('2e'),
      has = $__require('b'),
      getWeak = meta.getWeak,
      isExtensible = Object.isExtensible,
      uncaughtFrozenStore = weak.ufstore,
      tmp = {},
      InternalMap;

  var wrapper = function (get) {
    return function WeakMap() {
      return get(this, arguments.length > 0 ? arguments[0] : undefined);
    };
  };

  var methods = {
    // 23.3.3.3 WeakMap.prototype.get(key)
    get: function get(key) {
      if (isObject(key)) {
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(this).get(key);
        return data ? data[this._i] : undefined;
      }
    },
    // 23.3.3.5 WeakMap.prototype.set(key, value)
    set: function set(key, value) {
      return weak.def(this, key, value);
    }
  };

  // 23.3 WeakMap Objects
  var $WeakMap = module.exports = $__require('c9')('WeakMap', wrapper, methods, weak, true, true);

  // IE11 WeakMap frozen keys fix
  if (new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7) {
    InternalMap = weak.getConstructor(wrapper);
    assign(InternalMap.prototype, methods);
    meta.NEED = true;
    each(['delete', 'has', 'get', 'set'], function (key) {
      var proto = $WeakMap.prototype,
          method = proto[key];
      redefine(proto, key, function (a, b) {
        // store frozen objects on internal weakmap shim
        if (isObject(a) && !isExtensible(a)) {
          if (!this._f) this._f = new InternalMap();
          var result = this._f[key](a, b);
          return key == 'set' ? this : result;
          // store all the rest on native weakmap
        }return method.call(this, a, b);
      });
    });
  }
  return module.exports;
});
$__System.registerDynamic('10c', ['117', 'd', '11', '11b', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var Map = $__require('117'),
      $export = $__require('d'),
      shared = $__require('11')('metadata'),
      store = shared.store || (shared.store = new ($__require('11b'))());

  var getOrCreateMetadataMap = function (target, targetKey, create) {
    var targetMetadata = store.get(target);
    if (!targetMetadata) {
      if (!create) return undefined;
      store.set(target, targetMetadata = new Map());
    }
    var keyMetadata = targetMetadata.get(targetKey);
    if (!keyMetadata) {
      if (!create) return undefined;
      targetMetadata.set(targetKey, keyMetadata = new Map());
    }return keyMetadata;
  };
  var ordinaryHasOwnMetadata = function (MetadataKey, O, P) {
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
  };
  var ordinaryGetOwnMetadata = function (MetadataKey, O, P) {
    var metadataMap = getOrCreateMetadataMap(O, P, false);
    return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
  };
  var ordinaryDefineOwnMetadata = function (MetadataKey, MetadataValue, O, P) {
    getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
  };
  var ordinaryOwnMetadataKeys = function (target, targetKey) {
    var metadataMap = getOrCreateMetadataMap(target, targetKey, false),
        keys = [];
    if (metadataMap) metadataMap.forEach(function (_, key) {
      keys.push(key);
    });
    return keys;
  };
  var toMetaKey = function (it) {
    return it === undefined || typeof it == 'symbol' ? it : String(it);
  };
  var exp = function (O) {
    $export($export.S, 'Reflect', O);
  };

  module.exports = {
    store: store,
    map: getOrCreateMetadataMap,
    has: ordinaryHasOwnMetadata,
    get: ordinaryGetOwnMetadata,
    set: ordinaryDefineOwnMetadata,
    keys: ordinaryOwnMetadataKeys,
    key: toMetaKey,
    exp: exp
  };
  return module.exports;
});
$__System.registerDynamic('11c', ['10c', '18', 'a2', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var metadata = $__require('10c'),
      anObject = $__require('18'),
      aFunction = $__require('a2'),
      toMetaKey = metadata.key,
      ordinaryDefineOwnMetadata = metadata.set;

  metadata.exp({ metadata: function metadata(metadataKey, metadataValue) {
      return function decorator(target, targetKey) {
        ordinaryDefineOwnMetadata(metadataKey, metadataValue, (targetKey !== undefined ? anObject : aFunction)(target), toMetaKey(targetKey));
      };
    } });
  return module.exports;
});
$__System.registerDynamic('11d', ['d', 'c5', 'a', '46', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
  var $export = $__require('d'),
      microtask = $__require('c5')(),
      process = $__require('a').process,
      isNode = $__require('46')(process) == 'process';

  $export($export.G, {
    asap: function asap(fn) {
      var domain = isNode && process.domain;
      microtask(domain ? domain.bind(fn) : fn);
    }
  });
  return module.exports;
});
$__System.registerDynamic('c5', ['a', 'c4', '46', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('a'),
      macrotask = $__require('c4').set,
      Observer = global.MutationObserver || global.WebKitMutationObserver,
      process = global.process,
      Promise = global.Promise,
      isNode = $__require('46')(process) == 'process';

  module.exports = function () {
    var head, last, notify;

    var flush = function () {
      var parent, fn;
      if (isNode && (parent = process.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (e) {
          if (head) notify();else last = undefined;
          throw e;
        }
      }last = undefined;
      if (parent) parent.enter();
    };

    // Node.js
    if (isNode) {
      notify = function () {
        process.nextTick(flush);
      };
      // browsers with MutationObserver
    } else if (Observer) {
      var toggle = true,
          node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
      notify = function () {
        node.data = toggle = !toggle;
      };
      // environments with maybe non-completely correct, but existent Promise
    } else if (Promise && Promise.resolve) {
      var promise = Promise.resolve();
      notify = function () {
        promise.then(flush);
      };
      // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
    } else {
      notify = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global, flush);
      };
    }

    return function (fn) {
      var task = { fn: fn, next: undefined };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      }last = task;
    };
  };
  return module.exports;
});
$__System.registerDynamic('4a', ['5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
      throw TypeError(name + ': incorrect invocation!');
    }return it;
  };
  return module.exports;
});
$__System.registerDynamic('c6', ['e', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var redefine = $__require('e');
  module.exports = function (target, src, safe) {
    for (var key in src) redefine(target, key, src[key], safe);
    return target;
  };
  return module.exports;
});
$__System.registerDynamic('96', ['18', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // call something on iterator step with safe closing on error
  var anObject = $__require('18');
  module.exports = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
      // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };
  return module.exports;
});
$__System.registerDynamic('97', ['d8', '14', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // check on default Array iterator
  var Iterators = $__require('d8'),
      ITERATOR = $__require('14')('iterator'),
      ArrayProto = Array.prototype;

  module.exports = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };
  return module.exports;
});
$__System.registerDynamic('3c', ['46', '14', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // getting tag from 19.1.3.6 Object.prototype.toString()
  var cof = $__require('46'),
      TAG = $__require('14')('toStringTag')
  // ES3 wrong here
  ,
      ARG = cof(function () {
    return arguments;
  }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) {/* empty */}
  };

  module.exports = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };
  return module.exports;
});
$__System.registerDynamic('99', ['3c', '14', 'd8', '33', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var classof = $__require('3c'),
      ITERATOR = $__require('14')('iterator'),
      Iterators = $__require('d8');
  module.exports = $__require('33').getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
  };
  return module.exports;
});
$__System.registerDynamic('c2', ['95', '96', '97', '18', '71', '99', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var ctx = $__require('95'),
      call = $__require('96'),
      isArrayIter = $__require('97'),
      anObject = $__require('18'),
      toLength = $__require('71'),
      getIterFn = $__require('99'),
      BREAK = {},
      RETURN = {};
  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () {
      return iterable;
    } : getIterFn(iterable),
        f = ctx(fn, that, entries ? 2 : 1),
        index = 0,
        length,
        step,
        iterator,
        result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = call(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
  return module.exports;
});
$__System.registerDynamic('b7', ['a', '1e', 'c', '14', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('a'),
      dP = $__require('1e'),
      DESCRIPTORS = $__require('c'),
      SPECIES = $__require('14')('species');

  module.exports = function (KEY) {
    var C = global[KEY];
    if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
      configurable: true,
      get: function () {
        return this;
      }
    });
  };
  return module.exports;
});
$__System.registerDynamic('11e', ['d', 'a', '33', 'c5', '14', 'a2', '18', '4a', 'c6', '21', 'c2', 'b7', '5'], true, function ($__require, exports, module) {
  'use strict';
  // https://github.com/zenparsing/es-observable

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      global = $__require('a'),
      core = $__require('33'),
      microtask = $__require('c5')(),
      OBSERVABLE = $__require('14')('observable'),
      aFunction = $__require('a2'),
      anObject = $__require('18'),
      anInstance = $__require('4a'),
      redefineAll = $__require('c6'),
      hide = $__require('21'),
      forOf = $__require('c2'),
      RETURN = forOf.RETURN;

  var getMethod = function (fn) {
    return fn == null ? undefined : aFunction(fn);
  };

  var cleanupSubscription = function (subscription) {
    var cleanup = subscription._c;
    if (cleanup) {
      subscription._c = undefined;
      cleanup();
    }
  };

  var subscriptionClosed = function (subscription) {
    return subscription._o === undefined;
  };

  var closeSubscription = function (subscription) {
    if (!subscriptionClosed(subscription)) {
      subscription._o = undefined;
      cleanupSubscription(subscription);
    }
  };

  var Subscription = function (observer, subscriber) {
    anObject(observer);
    this._c = undefined;
    this._o = observer;
    observer = new SubscriptionObserver(this);
    try {
      var cleanup = subscriber(observer),
          subscription = cleanup;
      if (cleanup != null) {
        if (typeof cleanup.unsubscribe === 'function') cleanup = function () {
          subscription.unsubscribe();
        };else aFunction(cleanup);
        this._c = cleanup;
      }
    } catch (e) {
      observer.error(e);
      return;
    }if (subscriptionClosed(this)) cleanupSubscription(this);
  };

  Subscription.prototype = redefineAll({}, {
    unsubscribe: function unsubscribe() {
      closeSubscription(this);
    }
  });

  var SubscriptionObserver = function (subscription) {
    this._s = subscription;
  };

  SubscriptionObserver.prototype = redefineAll({}, {
    next: function next(value) {
      var subscription = this._s;
      if (!subscriptionClosed(subscription)) {
        var observer = subscription._o;
        try {
          var m = getMethod(observer.next);
          if (m) return m.call(observer, value);
        } catch (e) {
          try {
            closeSubscription(subscription);
          } finally {
            throw e;
          }
        }
      }
    },
    error: function error(value) {
      var subscription = this._s;
      if (subscriptionClosed(subscription)) throw value;
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.error);
        if (!m) throw value;
        value = m.call(observer, value);
      } catch (e) {
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      }cleanupSubscription(subscription);
      return value;
    },
    complete: function complete(value) {
      var subscription = this._s;
      if (!subscriptionClosed(subscription)) {
        var observer = subscription._o;
        subscription._o = undefined;
        try {
          var m = getMethod(observer.complete);
          value = m ? m.call(observer, value) : undefined;
        } catch (e) {
          try {
            cleanupSubscription(subscription);
          } finally {
            throw e;
          }
        }cleanupSubscription(subscription);
        return value;
      }
    }
  });

  var $Observable = function Observable(subscriber) {
    anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
  };

  redefineAll($Observable.prototype, {
    subscribe: function subscribe(observer) {
      return new Subscription(observer, this._f);
    },
    forEach: function forEach(fn) {
      var that = this;
      return new (core.Promise || global.Promise)(function (resolve, reject) {
        aFunction(fn);
        var subscription = that.subscribe({
          next: function (value) {
            try {
              return fn(value);
            } catch (e) {
              reject(e);
              subscription.unsubscribe();
            }
          },
          error: reject,
          complete: resolve
        });
      });
    }
  });

  redefineAll($Observable, {
    from: function from(x) {
      var C = typeof this === 'function' ? this : $Observable;
      var method = getMethod(anObject(x)[OBSERVABLE]);
      if (method) {
        var observable = anObject(method.call(x));
        return observable.constructor === C ? observable : new C(function (observer) {
          return observable.subscribe(observer);
        });
      }
      return new C(function (observer) {
        var done = false;
        microtask(function () {
          if (!done) {
            try {
              if (forOf(x, false, function (it) {
                observer.next(it);
                if (done) return RETURN;
              }) === RETURN) return;
            } catch (e) {
              if (done) throw e;
              observer.error(e);
              return;
            }observer.complete();
          }
        });
        return function () {
          done = true;
        };
      });
    },
    of: function of() {
      for (var i = 0, l = arguments.length, items = Array(l); i < l;) items[i] = arguments[i++];
      return new (typeof this === 'function' ? this : $Observable)(function (observer) {
        var done = false;
        microtask(function () {
          if (!done) {
            for (var i = 0; i < items.length; ++i) {
              observer.next(items[i]);
              if (done) return;
            }observer.complete();
          }
        });
        return function () {
          done = true;
        };
      });
    }
  });

  hide($Observable.prototype, OBSERVABLE, function () {
    return this;
  });

  $export($export.G, { Observable: $Observable });

  $__require('b7')('Observable');
  return module.exports;
});
$__System.registerDynamic('11f', ['a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('a');
  return module.exports;
});
$__System.registerDynamic('120', ['11f', 'dc', 'a2', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var path = $__require('11f'),
      invoke = $__require('dc'),
      aFunction = $__require('a2');
  module.exports = function () /* ...pargs */{
    var fn = aFunction(this),
        length = arguments.length,
        pargs = Array(length),
        i = 0,
        _ = path._,
        holder = false;
    while (length > i) if ((pargs[i] = arguments[i++]) === _) holder = true;
    return function () /* ...args */{
      var that = this,
          aLen = arguments.length,
          j = 0,
          k = 0,
          args;
      if (!holder && !aLen) return invoke(fn, pargs, that);
      args = pargs.slice();
      if (holder) for (; length > j; j++) if (args[j] === _) args[j] = arguments[k++];
      while (aLen > k) args.push(arguments[k++]);
      return invoke(fn, args, that);
    };
  };
  return module.exports;
});
$__System.registerDynamic('121', ['a', 'd', 'dc', '120', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // ie9- setTimeout & setInterval additional parameters fix
  var global = $__require('a'),
      $export = $__require('d'),
      invoke = $__require('dc'),
      partial = $__require('120'),
      navigator = global.navigator,
      MSIE = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
  var wrap = function (set) {
    return MSIE ? function (fn, time /*, ...args */) {
      return set(invoke(partial, [].slice.call(arguments, 2), typeof fn == 'function' ? fn : Function(fn)), time);
    } : set;
  };
  $export($export.G + $export.B + $export.F * MSIE, {
    setTimeout: wrap(global.setTimeout),
    setInterval: wrap(global.setInterval)
  });
  return module.exports;
});
$__System.registerDynamic("dc", ["5"], true, function ($__require, exports, module) {
                  var process = $__require("5");
                  var define,
                      global = this || self,
                      GLOBAL = global;
                  // fast apply, http://jsperf.lnkit.com/fast-apply/5
                  module.exports = function (fn, args, that) {
                                    var un = that === undefined;
                                    switch (args.length) {
                                                      case 0:
                                                                        return un ? fn() : fn.call(that);
                                                      case 1:
                                                                        return un ? fn(args[0]) : fn.call(that, args[0]);
                                                      case 2:
                                                                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                                                      case 3:
                                                                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                                                      case 4:
                                                                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                                    }return fn.apply(that, args);
                  };
                  return module.exports;
});
$__System.registerDynamic('c4', ['95', 'dc', 'a0', '122', 'a', '46', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var ctx = $__require('95'),
      invoke = $__require('dc'),
      html = $__require('a0'),
      cel = $__require('122'),
      global = $__require('a'),
      process = global.process,
      setTask = global.setImmediate,
      clearTask = global.clearImmediate,
      MessageChannel = global.MessageChannel,
      counter = 0,
      queue = {},
      ONREADYSTATECHANGE = 'onreadystatechange',
      defer,
      channel,
      port;
  var run = function () {
    var id = +this;
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listener = function (event) {
    run.call(event.data);
  };
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var args = [],
          i = 1;
      while (arguments.length > i) args.push(arguments[i++]);
      queue[++counter] = function () {
        invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id) {
      delete queue[id];
    };
    // Node.js 0.8-
    if ($__require('46')(process) == 'process') {
      defer = function (id) {
        process.nextTick(ctx(run, id, 1));
      };
      // Browsers with MessageChannel, includes WebWorkers
    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = ctx(port.postMessage, port, 1);
      // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
      defer = function (id) {
        global.postMessage(id + '', '*');
      };
      global.addEventListener('message', listener, false);
      // IE8-
    } else if (ONREADYSTATECHANGE in cel('script')) {
      defer = function (id) {
        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run.call(id);
        };
      };
      // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(ctx(run, id, 1), 0);
      };
    }
  }
  module.exports = {
    set: setTask,
    clear: clearTask
  };
  return module.exports;
});
$__System.registerDynamic('123', ['d', 'c4', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $export = $__require('d'),
      $task = $__require('c4');
  $export($export.G + $export.B, {
    setImmediate: $task.set,
    clearImmediate: $task.clear
  });
  return module.exports;
});
$__System.registerDynamic('b1', ['14', '21', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = $__require('14')('unscopables'),
      ArrayProto = Array.prototype;
  if (ArrayProto[UNSCOPABLES] == undefined) $__require('21')(ArrayProto, UNSCOPABLES, {});
  module.exports = function (key) {
    ArrayProto[UNSCOPABLES][key] = true;
  };
  return module.exports;
});
$__System.registerDynamic("116", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function (done, value) {
    return { value: value, done: !!done };
  };
  return module.exports;
});
$__System.registerDynamic("20", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = false;
  return module.exports;
});
$__System.registerDynamic("46", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  var toString = {}.toString;

  module.exports = function (it) {
    return toString.call(it).slice(8, -1);
  };
  return module.exports;
});
$__System.registerDynamic('9d', ['46', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var cof = $__require('46');
  module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };
  return module.exports;
});
$__System.registerDynamic('4', ['9d', '7d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // to indexed object, toObject with fallback for non-array-like ES3 strings
  var IObject = $__require('9d'),
      defined = $__require('7d');
  module.exports = function (it) {
    return IObject(defined(it));
  };
  return module.exports;
});
$__System.registerDynamic('71', ['4b', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.1.15 ToLength
  var toInteger = $__require('4b'),
      min = Math.min;
  module.exports = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };
  return module.exports;
});
$__System.registerDynamic("4b", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.1.4 ToInteger
  var ceil = Math.ceil,
      floor = Math.floor;
  module.exports = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };
  return module.exports;
});
$__System.registerDynamic('6f', ['4b', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var toInteger = $__require('4b'),
      max = Math.max,
      min = Math.min;
  module.exports = function (index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min(index, length);
  };
  return module.exports;
});
$__System.registerDynamic('ad', ['4', '71', '6f', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // false -> Array#indexOf
  // true  -> Array#includes
  var toIObject = $__require('4'),
      toLength = $__require('71'),
      toIndex = $__require('6f');
  module.exports = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject($this),
          length = toLength(O.length),
          index = toIndex(fromIndex, length),
          value;
      // Array#includes uses SameValueZero equality algorithm
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        if (value != value) return true;
        // Array#toIndex ignores holes, Array#includes - not
      } else for (; length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }return !IS_INCLUDES && -1;
    };
  };
  return module.exports;
});
$__System.registerDynamic('f6', ['b', '4', 'ad', '124', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var has = $__require('b'),
      toIObject = $__require('4'),
      arrayIndexOf = $__require('ad')(false),
      IE_PROTO = $__require('124')('IE_PROTO');

  module.exports = function (object, names) {
    var O = toIObject(object),
        i = 0,
        result = [],
        key;
    for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };
  return module.exports;
});
$__System.registerDynamic('3', ['f6', 'f7', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
  var $keys = $__require('f6'),
      enumBugKeys = $__require('f7');

  module.exports = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
  };
  return module.exports;
});
$__System.registerDynamic('25', ['1e', '18', '3', 'c', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var dP = $__require('1e'),
      anObject = $__require('18'),
      getKeys = $__require('3');

  module.exports = $__require('c') ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = getKeys(Properties),
        length = keys.length,
        i = 0,
        P;
    while (length > i) dP.f(O, P = keys[i++], Properties[P]);
    return O;
  };
  return module.exports;
});
$__System.registerDynamic('f7', ['5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // IE 8- don't enum bug keys
  module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
  return module.exports;
});
$__System.registerDynamic('a0', ['a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = $__require('a').document && document.documentElement;
  return module.exports;
});
$__System.registerDynamic('1b', ['18', '25', 'f7', '124', '122', 'a0', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
  var anObject = $__require('18'),
      dPs = $__require('25'),
      enumBugKeys = $__require('f7'),
      IE_PROTO = $__require('124')('IE_PROTO'),
      Empty = function () {/* empty */},
      PROTOTYPE = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = $__require('122')('iframe'),
        i = enumBugKeys.length,
        gt = '>',
        iframeDocument;
    iframe.style.display = 'none';
    $__require('a0').appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write('<script>document.F=Object</script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
    return createDict();
  };

  module.exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };
  return module.exports;
});
$__System.registerDynamic('e1', ['1b', '1a', '12', '21', '14', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var create = $__require('1b'),
      descriptor = $__require('1a'),
      setToStringTag = $__require('12'),
      IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  $__require('21')(IteratorPrototype, $__require('14')('iterator'), function () {
    return this;
  });

  module.exports = function (Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };
  return module.exports;
});
$__System.registerDynamic('12', ['1e', 'b', '14', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var def = $__require('1e').f,
      has = $__require('b'),
      TAG = $__require('14')('toStringTag');

  module.exports = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
  };
  return module.exports;
});
$__System.registerDynamic("7d", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.2.1 RequireObjectCoercible(argument)
  module.exports = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('29', ['7d', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.1.13 ToObject(argument)
  var defined = $__require('7d');
  module.exports = function (it) {
    return Object(defined(it));
  };
  return module.exports;
});
$__System.registerDynamic('124', ['11', '13', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var shared = $__require('11')('keys'),
      uid = $__require('13');
  module.exports = function (key) {
    return shared[key] || (shared[key] = uid(key));
  };
  return module.exports;
});
$__System.registerDynamic('2a', ['b', '29', '124', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
  var has = $__require('b'),
      toObject = $__require('29'),
      IE_PROTO = $__require('124')('IE_PROTO'),
      ObjectProto = Object.prototype;

  module.exports = Object.getPrototypeOf || function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO)) return O[IE_PROTO];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    }return O instanceof Object ? ObjectProto : null;
  };
  return module.exports;
});
$__System.registerDynamic('75', ['20', 'd', 'e', '21', 'b', 'd8', 'e1', '12', '2a', '14', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var LIBRARY = $__require('20'),
      $export = $__require('d'),
      redefine = $__require('e'),
      hide = $__require('21'),
      has = $__require('b'),
      Iterators = $__require('d8'),
      $iterCreate = $__require('e1'),
      setToStringTag = $__require('12'),
      getPrototypeOf = $__require('2a'),
      ITERATOR = $__require('14')('iterator'),
      BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  ,
      FF_ITERATOR = '@@iterator',
      KEYS = 'keys',
      VALUES = 'values';

  var returnThis = function () {
    return this;
  };

  module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS:
          return function keys() {
            return new Constructor(this, kind);
          };
        case VALUES:
          return function values() {
            return new Constructor(this, kind);
          };
      }return function entries() {
        return new Constructor(this, kind);
      };
    };
    var TAG = NAME + ' Iterator',
        DEF_VALUES = DEFAULT == VALUES,
        VALUES_BUG = false,
        proto = Base.prototype,
        $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
        $default = $native || getMethod(DEFAULT),
        $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
        $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
        methods,
        key,
        IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype) {
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() {
        return $native.call(this);
      };
    }
    // Define iterator
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
      hide(proto, ITERATOR, $default);
    }
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };
  return module.exports;
});
$__System.registerDynamic('d9', ['b1', '116', 'd8', '4', '75', '5'], true, function ($__require, exports, module) {
  'use strict';

  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var addToUnscopables = $__require('b1'),
      step = $__require('116'),
      Iterators = $__require('d8'),
      toIObject = $__require('4');

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  module.exports = $__require('75')(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated); // target
    this._i = 0; // next index
    this._k = kind; // kind
    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t,
        kind = this._k,
        index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array;

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');
  return module.exports;
});
$__System.registerDynamic("d8", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = {};
  return module.exports;
});
$__System.registerDynamic('11', ['a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('a'),
      SHARED = '__core-js_shared__',
      store = global[SHARED] || (global[SHARED] = {});
  module.exports = function (key) {
    return store[key] || (store[key] = {});
  };
  return module.exports;
});
$__System.registerDynamic('14', ['11', '13', 'a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var store = $__require('11')('wks'),
      uid = $__require('13'),
      Symbol = $__require('a').Symbol,
      USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] = USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
  };

  $exports.store = store;
  return module.exports;
});
$__System.registerDynamic('125', ['d9', 'e', 'a', '21', 'd8', '14', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var $iterators = $__require('d9'),
      redefine = $__require('e'),
      global = $__require('a'),
      hide = $__require('21'),
      Iterators = $__require('d8'),
      wks = $__require('14'),
      ITERATOR = wks('iterator'),
      TO_STRING_TAG = wks('toStringTag'),
      ArrayValues = Iterators.Array;

  for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
    var NAME = collections[i],
        Collection = global[NAME],
        proto = Collection && Collection.prototype,
        key;
    if (proto) {
      if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
      if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
      Iterators[NAME] = ArrayValues;
      for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
  return module.exports;
});
$__System.registerDynamic('126', ['9', '22', '23', '24', '26', '28', '2b', '2c', '2d', '2f', '30', '31', '32', '34', '35', '37', '39', '3b', '3d', '3f', '40', '41', '43', '45', '49', '4e', '4f', '50', '51', '53', '54', '55', '56', '58', '59', '5a', '5c', '5d', '5e', '60', '61', '62', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '70', '72', '73', '76', '77', '7a', '7b', '7e', '7f', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '92', '93', '94', '9b', '9c', '9f', 'a1', 'a3', 'a5', 'a6', 'a7', 'a8', 'a9', 'ab', 'ac', 'ae', 'af', 'b2', 'b4', 'b5', 'b6', 'd9', 'b8', 'ba', 'bb', 'bc', 'be', 'bf', 'c0', 'c1', '117', '10f', '11b', 'c7', 'ca', 'cd', 'ce', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'da', 'db', 'dd', 'de', 'df', 'e0', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f8', 'f9', 'fb', 'fc', 'fe', 'ff', '100', '101', '104', '105', '106', '107', '108', '109', '10a', '10b', '10d', '10e', '111', '112', '113', '114', '115', '11c', '11d', '11e', '121', '123', '125', '33', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('9');
  $__require('22');
  $__require('23');
  $__require('24');
  $__require('26');
  $__require('28');
  $__require('2b');
  $__require('2c');
  $__require('2d');
  $__require('2f');
  $__require('30');
  $__require('31');
  $__require('32');
  $__require('34');
  $__require('35');
  $__require('37');
  $__require('39');
  $__require('3b');
  $__require('3d');
  $__require('3f');
  $__require('40');
  $__require('41');
  $__require('43');
  $__require('45');
  $__require('49');
  $__require('4e');
  $__require('4f');
  $__require('50');
  $__require('51');
  $__require('53');
  $__require('54');
  $__require('55');
  $__require('56');
  $__require('58');
  $__require('59');
  $__require('5a');
  $__require('5c');
  $__require('5d');
  $__require('5e');
  $__require('60');
  $__require('61');
  $__require('62');
  $__require('64');
  $__require('65');
  $__require('66');
  $__require('67');
  $__require('68');
  $__require('69');
  $__require('6a');
  $__require('6b');
  $__require('6c');
  $__require('6d');
  $__require('6e');
  $__require('70');
  $__require('72');
  $__require('73');
  $__require('76');
  $__require('77');
  $__require('7a');
  $__require('7b');
  $__require('7e');
  $__require('7f');
  $__require('81');
  $__require('82');
  $__require('83');
  $__require('84');
  $__require('85');
  $__require('86');
  $__require('87');
  $__require('88');
  $__require('89');
  $__require('8a');
  $__require('8b');
  $__require('8c');
  $__require('8d');
  $__require('8e');
  $__require('8f');
  $__require('90');
  $__require('92');
  $__require('93');
  $__require('94');
  $__require('9b');
  $__require('9c');
  $__require('9f');
  $__require('a1');
  $__require('a3');
  $__require('a5');
  $__require('a6');
  $__require('a7');
  $__require('a8');
  $__require('a9');
  $__require('ab');
  $__require('ac');
  $__require('ae');
  $__require('af');
  $__require('b2');
  $__require('b4');
  $__require('b5');
  $__require('b6');
  $__require('d9');
  $__require('b8');
  $__require('ba');
  $__require('bb');
  $__require('bc');
  $__require('be');
  $__require('bf');
  $__require('c0');
  $__require('c1');
  $__require('117');
  $__require('10f');
  $__require('11b');
  $__require('c7');
  $__require('ca');
  $__require('cd');
  $__require('ce');
  $__require('d0');
  $__require('d1');
  $__require('d2');
  $__require('d3');
  $__require('d4');
  $__require('d5');
  $__require('d6');
  $__require('da');
  $__require('db');
  $__require('dd');
  $__require('de');
  $__require('df');
  $__require('e0');
  $__require('e2');
  $__require('e3');
  $__require('e4');
  $__require('e5');
  $__require('e6');
  $__require('e7');
  $__require('e9');
  $__require('ea');
  $__require('eb');
  $__require('ec');
  $__require('ed');
  $__require('ee');
  $__require('f0');
  $__require('f1');
  $__require('f2');
  $__require('f3');
  $__require('f4');
  $__require('f5');
  $__require('f8');
  $__require('f9');
  $__require('fb');
  $__require('fc');
  $__require('fe');
  $__require('ff');
  $__require('100');
  $__require('101');
  $__require('104');
  $__require('105');
  $__require('106');
  $__require('107');
  $__require('108');
  $__require('109');
  $__require('10a');
  $__require('10b');
  $__require('10d');
  $__require('10e');
  $__require('111');
  $__require('112');
  $__require('113');
  $__require('114');
  $__require('115');
  $__require('11c');
  $__require('11d');
  $__require('11e');
  $__require('121');
  $__require('123');
  $__require('125');
  module.exports = $__require('33');
  return module.exports;
});
$__System.registerDynamic("127", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  /**
   * Copyright (c) 2014, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
   * additional grant of patent rights can be found in the PATENTS file in
   * the same directory.
   */

  !function (global) {
    "use strict";

    var hasOwn = Object.prototype.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

    var inModule = typeof module === "object";
    var runtime = global.regeneratorRuntime;
    if (runtime) {
      if (inModule) {
        // If regeneratorRuntime is defined globally and we're in a module,
        // make the exports object identical to regeneratorRuntime.
        module.exports = runtime;
      }
      // Don't bother evaluating the rest of this file if the runtime was
      // already defined globally.
      return;
    }

    // Define the runtime globally (as expected by generated code) as either
    // module.exports (if we're in a module) or a new, empty object.
    runtime = global.regeneratorRuntime = inModule ? module.exports : {};

    function wrap(innerFn, outerFn, self, tryLocsList) {
      // If outerFn provided, then outerFn.prototype instanceof Generator.
      var generator = Object.create((outerFn || Generator).prototype);
      var context = new Context(tryLocsList || []);

      // The ._invoke method unifies the implementations of the .next,
      // .throw, and .return methods.
      generator._invoke = makeInvokeMethod(innerFn, self, context);

      return generator;
    }
    runtime.wrap = wrap;

    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
      try {
        return { type: "normal", arg: fn.call(obj, arg) };
      } catch (err) {
        return { type: "throw", arg: err };
      }
    }

    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";

    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};

    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}

    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
      ["next", "throw", "return"].forEach(function (method) {
        prototype[method] = function (arg) {
          return this._invoke(method, arg);
        };
      });
    }

    runtime.isGeneratorFunction = function (genFun) {
      var ctor = typeof genFun === "function" && genFun.constructor;
      return ctor ? ctor === GeneratorFunction ||
      // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };

    runtime.mark = function (genFun) {
      if (Object.setPrototypeOf) {
        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
      } else {
        genFun.__proto__ = GeneratorFunctionPrototype;
        if (!(toStringTagSymbol in genFun)) {
          genFun[toStringTagSymbol] = "GeneratorFunction";
        }
      }
      genFun.prototype = Object.create(Gp);
      return genFun;
    };

    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `value instanceof AwaitArgument` to determine if the yielded value is
    // meant to be awaited. Some may consider the name of this method too
    // cutesy, but they are curmudgeons.
    runtime.awrap = function (arg) {
      return new AwaitArgument(arg);
    };

    function AwaitArgument(arg) {
      this.arg = arg;
    }

    function AsyncIterator(generator) {
      function invoke(method, arg, resolve, reject) {
        var record = tryCatch(generator[method], generator, arg);
        if (record.type === "throw") {
          reject(record.arg);
        } else {
          var result = record.arg;
          var value = result.value;
          if (value instanceof AwaitArgument) {
            return Promise.resolve(value.arg).then(function (value) {
              invoke("next", value, resolve, reject);
            }, function (err) {
              invoke("throw", err, resolve, reject);
            });
          }

          return Promise.resolve(value).then(function (unwrapped) {
            // When a yielded Promise is resolved, its final value becomes
            // the .value of the Promise<{value,done}> result for the
            // current iteration. If the Promise is rejected, however, the
            // result for this iteration will be rejected with the same
            // reason. Note that rejections of yielded Promises are not
            // thrown back into the generator function, as is the case
            // when an awaited Promise is rejected. This difference in
            // behavior between yield and await is important, because it
            // allows the consumer to decide what to do with the yielded
            // rejection (swallow it and continue, manually .throw it back
            // into the generator, abandon iteration, whatever). With
            // await, by contrast, there is no opportunity to examine the
            // rejection reason outside the generator function, so the
            // only option is to throw it from the await expression, and
            // let the generator function handle the exception.
            result.value = unwrapped;
            resolve(result);
          }, reject);
        }
      }

      if (typeof process === "object" && process.domain) {
        invoke = process.domain.bind(invoke);
      }

      var previousPromise;

      function enqueue(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(callInvokeWithMethodAndArg,
        // Avoid propagating failures to Promises returned by later
        // invocations of the iterator.
        callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }

      // Define the unified helper method that is used to implement .next,
      // .throw, and .return (see defineIteratorMethods).
      this._invoke = enqueue;
    }

    defineIteratorMethods(AsyncIterator.prototype);

    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    runtime.async = function (innerFn, outerFn, self, tryLocsList) {
      var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));

      return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function (result) {
        return result.done ? result.value : iter.next();
      });
    };

    function makeInvokeMethod(innerFn, self, context) {
      var state = GenStateSuspendedStart;

      return function invoke(method, arg) {
        if (state === GenStateExecuting) {
          throw new Error("Generator is already running");
        }

        if (state === GenStateCompleted) {
          if (method === "throw") {
            throw arg;
          }

          // Be forgiving, per 25.3.3.3.3 of the spec:
          // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
          return doneResult();
        }

        while (true) {
          var delegate = context.delegate;
          if (delegate) {
            if (method === "return" || method === "throw" && delegate.iterator[method] === undefined) {
              // A return or throw (when the delegate iterator has no throw
              // method) always terminates the yield* loop.
              context.delegate = null;

              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              var returnMethod = delegate.iterator["return"];
              if (returnMethod) {
                var record = tryCatch(returnMethod, delegate.iterator, arg);
                if (record.type === "throw") {
                  // If the return method threw an exception, let that
                  // exception prevail over the original return or throw.
                  method = "throw";
                  arg = record.arg;
                  continue;
                }
              }

              if (method === "return") {
                // Continue with the outer return, now that the delegate
                // iterator has been terminated.
                continue;
              }
            }

            var record = tryCatch(delegate.iterator[method], delegate.iterator, arg);

            if (record.type === "throw") {
              context.delegate = null;

              // Like returning generator.throw(uncaught), but without the
              // overhead of an extra function call.
              method = "throw";
              arg = record.arg;
              continue;
            }

            // Delegate generator ran and handled its own exceptions so
            // regardless of what the method was, we continue as if it is
            // "next" with an undefined arg.
            method = "next";
            arg = undefined;

            var info = record.arg;
            if (info.done) {
              context[delegate.resultName] = info.value;
              context.next = delegate.nextLoc;
            } else {
              state = GenStateSuspendedYield;
              return info;
            }

            context.delegate = null;
          }

          if (method === "next") {
            // Setting context._sent for legacy support of Babel's
            // function.sent implementation.
            context.sent = context._sent = arg;
          } else if (method === "throw") {
            if (state === GenStateSuspendedStart) {
              state = GenStateCompleted;
              throw arg;
            }

            if (context.dispatchException(arg)) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              method = "next";
              arg = undefined;
            }
          } else if (method === "return") {
            context.abrupt("return", arg);
          }

          state = GenStateExecuting;

          var record = tryCatch(innerFn, self, context);
          if (record.type === "normal") {
            // If an exception is thrown from innerFn, we leave state ===
            // GenStateExecuting and loop back for another invocation.
            state = context.done ? GenStateCompleted : GenStateSuspendedYield;

            var info = {
              value: record.arg,
              done: context.done
            };

            if (record.arg === ContinueSentinel) {
              if (context.delegate && method === "next") {
                // Deliberately forget the last sent value so that we don't
                // accidentally pass it on to the delegate.
                arg = undefined;
              }
            } else {
              return info;
            }
          } else if (record.type === "throw") {
            state = GenStateCompleted;
            // Dispatch the exception by looping back around to the
            // context.dispatchException(arg) call above.
            method = "throw";
            arg = record.arg;
          }
        }
      };
    }

    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);

    Gp[iteratorSymbol] = function () {
      return this;
    };

    Gp[toStringTagSymbol] = "Generator";

    Gp.toString = function () {
      return "[object Generator]";
    };

    function pushTryEntry(locs) {
      var entry = { tryLoc: locs[0] };

      if (1 in locs) {
        entry.catchLoc = locs[1];
      }

      if (2 in locs) {
        entry.finallyLoc = locs[2];
        entry.afterLoc = locs[3];
      }

      this.tryEntries.push(entry);
    }

    function resetTryEntry(entry) {
      var record = entry.completion || {};
      record.type = "normal";
      delete record.arg;
      entry.completion = record;
    }

    function Context(tryLocsList) {
      // The root entry object (effectively a try statement without a catch
      // or a finally block) gives us a place to store values thrown from
      // locations where there is no enclosing try statement.
      this.tryEntries = [{ tryLoc: "root" }];
      tryLocsList.forEach(pushTryEntry, this);
      this.reset(true);
    }

    runtime.keys = function (object) {
      var keys = [];
      for (var key in object) {
        keys.push(key);
      }
      keys.reverse();

      // Rather than returning an object with a next method, we keep
      // things simple and return the next function itself.
      return function next() {
        while (keys.length) {
          var key = keys.pop();
          if (key in object) {
            next.value = key;
            next.done = false;
            return next;
          }
        }

        // To avoid creating an additional object, we just hang the .value
        // and .done properties off the next function object itself. This
        // also ensures that the minifier will not anonymize the function.
        next.done = true;
        return next;
      };
    };

    function values(iterable) {
      if (iterable) {
        var iteratorMethod = iterable[iteratorSymbol];
        if (iteratorMethod) {
          return iteratorMethod.call(iterable);
        }

        if (typeof iterable.next === "function") {
          return iterable;
        }

        if (!isNaN(iterable.length)) {
          var i = -1,
              next = function next() {
            while (++i < iterable.length) {
              if (hasOwn.call(iterable, i)) {
                next.value = iterable[i];
                next.done = false;
                return next;
              }
            }

            next.value = undefined;
            next.done = true;

            return next;
          };

          return next.next = next;
        }
      }

      // Return an iterator with no values.
      return { next: doneResult };
    }
    runtime.values = values;

    function doneResult() {
      return { value: undefined, done: true };
    }

    Context.prototype = {
      constructor: Context,

      reset: function (skipTempReset) {
        this.prev = 0;
        this.next = 0;
        // Resetting context._sent for legacy support of Babel's
        // function.sent implementation.
        this.sent = this._sent = undefined;
        this.done = false;
        this.delegate = null;

        this.tryEntries.forEach(resetTryEntry);

        if (!skipTempReset) {
          for (var name in this) {
            // Not sure about the optimal order of these conditions:
            if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
              this[name] = undefined;
            }
          }
        }
      },

      stop: function () {
        this.done = true;

        var rootEntry = this.tryEntries[0];
        var rootRecord = rootEntry.completion;
        if (rootRecord.type === "throw") {
          throw rootRecord.arg;
        }

        return this.rval;
      },

      dispatchException: function (exception) {
        if (this.done) {
          throw exception;
        }

        var context = this;
        function handle(loc, caught) {
          record.type = "throw";
          record.arg = exception;
          context.next = loc;
          return !!caught;
        }

        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          var record = entry.completion;

          if (entry.tryLoc === "root") {
            // Exception thrown outside of any try block that could handle
            // it, so set the completion value of the entire function to
            // throw the exception.
            return handle("end");
          }

          if (entry.tryLoc <= this.prev) {
            var hasCatch = hasOwn.call(entry, "catchLoc");
            var hasFinally = hasOwn.call(entry, "finallyLoc");

            if (hasCatch && hasFinally) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              } else if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else if (hasCatch) {
              if (this.prev < entry.catchLoc) {
                return handle(entry.catchLoc, true);
              }
            } else if (hasFinally) {
              if (this.prev < entry.finallyLoc) {
                return handle(entry.finallyLoc);
              }
            } else {
              throw new Error("try statement without catch or finally");
            }
          }
        }
      },

      abrupt: function (type, arg) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
            var finallyEntry = entry;
            break;
          }
        }

        if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
          // Ignore the finally entry if control is not jumping to a
          // location outside the try/catch block.
          finallyEntry = null;
        }

        var record = finallyEntry ? finallyEntry.completion : {};
        record.type = type;
        record.arg = arg;

        if (finallyEntry) {
          this.next = finallyEntry.finallyLoc;
        } else {
          this.complete(record);
        }

        return ContinueSentinel;
      },

      complete: function (record, afterLoc) {
        if (record.type === "throw") {
          throw record.arg;
        }

        if (record.type === "break" || record.type === "continue") {
          this.next = record.arg;
        } else if (record.type === "return") {
          this.rval = record.arg;
          this.next = "end";
        } else if (record.type === "normal" && afterLoc) {
          this.next = afterLoc;
        }
      },

      finish: function (finallyLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.finallyLoc === finallyLoc) {
            this.complete(entry.completion, entry.afterLoc);
            resetTryEntry(entry);
            return ContinueSentinel;
          }
        }
      },

      "catch": function (tryLoc) {
        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
          var entry = this.tryEntries[i];
          if (entry.tryLoc === tryLoc) {
            var record = entry.completion;
            if (record.type === "throw") {
              var thrown = record.arg;
              resetTryEntry(entry);
            }
            return thrown;
          }
        }

        // The context.catch method must only be called with a location
        // argument that corresponds to a known catch block.
        throw new Error("illegal catch attempt");
      },

      delegateYield: function (iterable, resultName, nextLoc) {
        this.delegate = {
          iterator: values(iterable),
          resultName: resultName,
          nextLoc: nextLoc
        };

        return ContinueSentinel;
      }
    };
  }(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global : typeof window === "object" ? window : typeof self === "object" ? self : this);
  return module.exports;
});
$__System.registerDynamic('18', ['2e', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var isObject = $__require('2e');
  module.exports = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('a', ['5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('122', ['2e', 'a', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var isObject = $__require('2e'),
      document = $__require('a').document
  // in old IE typeof document.createElement is 'object'
  ,
      is = isObject(document) && isObject(document.createElement);
  module.exports = function (it) {
    return is ? document.createElement(it) : {};
  };
  return module.exports;
});
$__System.registerDynamic('11a', ['c', '10', '122', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = !$__require('c') && !$__require('10')(function () {
    return Object.defineProperty($__require('122')('div'), 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
  return module.exports;
});
$__System.registerDynamic('2e', ['5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };
  return module.exports;
});
$__System.registerDynamic('19', ['2e', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // 7.1.1 ToPrimitive(input [, PreferredType])
  var isObject = $__require('2e');
  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  module.exports = function (it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };
  return module.exports;
});
$__System.registerDynamic('1e', ['18', '11a', '19', 'c', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var anObject = $__require('18'),
      IE8_DOM_DEFINE = $__require('11a'),
      toPrimitive = $__require('19'),
      dP = Object.defineProperty;

  exports.f = $__require('c') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return dP(O, P, Attributes);
    } catch (e) {/* empty */}
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  return module.exports;
});
$__System.registerDynamic("1a", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  return module.exports;
});
$__System.registerDynamic("10", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };
  return module.exports;
});
$__System.registerDynamic('c', ['10', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // Thank's IE8 for his funny defineProperty
  module.exports = !$__require('10')(function () {
    return Object.defineProperty({}, 'a', { get: function () {
        return 7;
      } }).a != 7;
  });
  return module.exports;
});
$__System.registerDynamic('21', ['1e', '1a', 'c', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var dP = $__require('1e'),
      createDesc = $__require('1a');
  module.exports = $__require('c') ? function (object, key, value) {
    return dP.f(object, key, createDesc(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  return module.exports;
});
$__System.registerDynamic("b", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  var hasOwnProperty = {}.hasOwnProperty;
  module.exports = function (it, key) {
    return hasOwnProperty.call(it, key);
  };
  return module.exports;
});
$__System.registerDynamic('13', ['5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var id = 0,
      px = Math.random();
  module.exports = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };
  return module.exports;
});
$__System.registerDynamic('e', ['a', '21', 'b', '13', '33', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('a'),
      hide = $__require('21'),
      has = $__require('b'),
      SRC = $__require('13')('src'),
      TO_STRING = 'toString',
      $toString = Function[TO_STRING],
      TPL = ('' + $toString).split(TO_STRING);

  $__require('33').inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) has(val, 'name') || hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === global) {
      O[key] = val;
    } else {
      if (!safe) {
        delete O[key];
        hide(O, key, val);
      } else {
        if (O[key]) O[key] = val;else hide(O, key, val);
      }
    }
    // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
  return module.exports;
});
$__System.registerDynamic('a2', ['5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };
  return module.exports;
});
$__System.registerDynamic('95', ['a2', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // optional / simple context binding
  var aFunction = $__require('a2');
  module.exports = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1:
        return function (a) {
          return fn.call(that, a);
        };
      case 2:
        return function (a, b) {
          return fn.call(that, a, b);
        };
      case 3:
        return function (a, b, c) {
          return fn.call(that, a, b, c);
        };
    }
    return function () /* ...args */{
      return fn.apply(that, arguments);
    };
  };
  return module.exports;
});
$__System.registerDynamic('d', ['a', '33', '21', 'e', '95', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var global = $__require('a'),
      core = $__require('33'),
      hide = $__require('21'),
      redefine = $__require('e'),
      ctx = $__require('95'),
      PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F,
        IS_GLOBAL = type & $export.G,
        IS_STATIC = type & $export.S,
        IS_PROTO = type & $export.P,
        IS_BIND = type & $export.B,
        target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE],
        exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
        expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {}),
        key,
        own,
        out,
        exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      // extend global
      if (target) redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  global.core = core;
  // type bitmap
  $export.F = 1; // forced
  $export.G = 2; // global
  $export.S = 4; // static
  $export.P = 8; // proto
  $export.B = 16; // bind
  $export.W = 32; // wrap
  $export.U = 64; // safe
  $export.R = 128; // real proto method for `library` 
  module.exports = $export;
  return module.exports;
});
$__System.registerDynamic("128", ["5"], true, function ($__require, exports, module) {
  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  module.exports = function (regExp, replace) {
    var replacer = replace === Object(replace) ? function (part) {
      return replace[part];
    } : replace;
    return function (it) {
      return String(it).replace(regExp, replacer);
    };
  };
  return module.exports;
});
$__System.registerDynamic('129', ['d', '128', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  // https://github.com/benjamingr/RexExp.escape
  var $export = $__require('d'),
      $re = $__require('128')(/[\\^$*+?.()|[\]{}]/g, '\\$&');

  $export($export.S, 'RegExp', { escape: function escape(it) {
      return $re(it);
    } });
  return module.exports;
});
$__System.registerDynamic('33', ['5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  var core = module.exports = { version: '2.4.0' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

  return module.exports;
});
$__System.registerDynamic('12a', ['129', '33', '5'], true, function ($__require, exports, module) {
  var process = $__require('5');
  var define,
      global = this || self,
      GLOBAL = global;
  $__require('129');
  module.exports = $__require('33').RegExp.escape;
  return module.exports;
});
$__System.registerDynamic("@system-env", [], false, function() {
  return {
    "default": true
  };
});

$__System.registerDynamic('5', ['@system-env'], true, function ($__require, exports, module) {
    var define,
        global = this || self,
        GLOBAL = global;
    // From https://github.com/defunctzombie/node-process/blob/master/browser.js
    // shim for using process in browser

    var productionEnv = $__require('@system-env').production;

    var process = module.exports = {};
    var queue = [];
    var draining = false;
    var currentQueue;
    var queueIndex = -1;

    function cleanUpNextTick() {
        draining = false;
        if (currentQueue.length) {
            queue = currentQueue.concat(queue);
        } else {
            queueIndex = -1;
        }
        if (queue.length) {
            drainQueue();
        }
    }

    function drainQueue() {
        if (draining) {
            return;
        }
        var timeout = setTimeout(cleanUpNextTick);
        draining = true;

        var len = queue.length;
        while (len) {
            currentQueue = queue;
            queue = [];
            while (++queueIndex < len) {
                if (currentQueue) {
                    currentQueue[queueIndex].run();
                }
            }
            queueIndex = -1;
            len = queue.length;
        }
        currentQueue = null;
        draining = false;
        clearTimeout(timeout);
    }

    process.nextTick = function (fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
            for (var i = 1; i < arguments.length; i++) {
                args[i - 1] = arguments[i];
            }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
            setTimeout(drainQueue, 0);
        }
    };

    // v8 likes predictible objects
    function Item(fun, array) {
        this.fun = fun;
        this.array = array;
    }
    Item.prototype.run = function () {
        this.fun.apply(null, this.array);
    };
    process.title = 'browser';
    process.browser = true;
    process.env = {
        NODE_ENV: productionEnv ? 'production' : 'development'
    };
    process.argv = [];
    process.version = ''; // empty string to avoid regexp issues
    process.versions = {};

    function noop() {}

    process.on = noop;
    process.addListener = noop;
    process.once = noop;
    process.off = noop;
    process.removeListener = noop;
    process.removeAllListeners = noop;
    process.emit = noop;

    process.binding = function (name) {
        throw new Error('process.binding is not supported');
    };

    process.cwd = function () {
        return '/';
    };
    process.chdir = function (dir) {
        throw new Error('process.chdir is not supported');
    };
    process.umask = function () {
        return 0;
    };
    return module.exports;
});
$__System.registerDynamic("12b", ["126", "127", "12a", "5"], true, function ($__require, exports, module) {
  "use strict";

  var process = $__require("5");
  var define,
      global = this || self,
      GLOBAL = global;
  $__require("126");

  $__require("127");

  $__require("12a");

  /* eslint max-len: 0 */

  if (global._babelPolyfill) {
    throw new Error("only one instance of babel-polyfill is allowed");
  }
  global._babelPolyfill = true;

  // Should be removed in the next major release:

  var DEFINE_PROPERTY = "defineProperty";
  function define(O, key, value) {
    O[key] || Object[DEFINE_PROPERTY](O, key, {
      writable: true,
      configurable: true,
      value: value
    });
  }

  define(String.prototype, "padLeft", "".padStart);
  define(String.prototype, "padRight", "".padEnd);

  "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
    [][key] && define(Array, key, Function.call.bind([][key]));
  });
  return module.exports;
});
$__System.registerDynamic('12c', [], true, function ($__require, exports, module) {
  var define,
      global = this || self,
      GLOBAL = global;
  (function (self) {
    'use strict';

    if (self.fetch) {
      return;
    }

    var support = {
      searchParams: 'URLSearchParams' in self,
      iterable: 'Symbol' in self && 'iterator' in Symbol,
      blob: 'FileReader' in self && 'Blob' in self && function () {
        try {
          new Blob();
          return true;
        } catch (e) {
          return false;
        }
      }(),
      formData: 'FormData' in self,
      arrayBuffer: 'ArrayBuffer' in self
    };

    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = String(name);
      }
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name');
      }
      return name.toLowerCase();
    }

    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = String(value);
      }
      return value;
    }

    // Build a destructive iterator for the value list
    function iteratorFor(items) {
      var iterator = {
        next: function () {
          var value = items.shift();
          return { done: value === undefined, value: value };
        }
      };

      if (support.iterable) {
        iterator[Symbol.iterator] = function () {
          return iterator;
        };
      }

      return iterator;
    }

    function Headers(headers) {
      this.map = {};

      if (headers instanceof Headers) {
        headers.forEach(function (value, name) {
          this.append(name, value);
        }, this);
      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function (name) {
          this.append(name, headers[name]);
        }, this);
      }
    }

    Headers.prototype.append = function (name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var list = this.map[name];
      if (!list) {
        list = [];
        this.map[name] = list;
      }
      list.push(value);
    };

    Headers.prototype['delete'] = function (name) {
      delete this.map[normalizeName(name)];
    };

    Headers.prototype.get = function (name) {
      var values = this.map[normalizeName(name)];
      return values ? values[0] : null;
    };

    Headers.prototype.getAll = function (name) {
      return this.map[normalizeName(name)] || [];
    };

    Headers.prototype.has = function (name) {
      return this.map.hasOwnProperty(normalizeName(name));
    };

    Headers.prototype.set = function (name, value) {
      this.map[normalizeName(name)] = [normalizeValue(value)];
    };

    Headers.prototype.forEach = function (callback, thisArg) {
      Object.getOwnPropertyNames(this.map).forEach(function (name) {
        this.map[name].forEach(function (value) {
          callback.call(thisArg, value, name, this);
        }, this);
      }, this);
    };

    Headers.prototype.keys = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push(name);
      });
      return iteratorFor(items);
    };

    Headers.prototype.values = function () {
      var items = [];
      this.forEach(function (value) {
        items.push(value);
      });
      return iteratorFor(items);
    };

    Headers.prototype.entries = function () {
      var items = [];
      this.forEach(function (value, name) {
        items.push([name, value]);
      });
      return iteratorFor(items);
    };

    if (support.iterable) {
      Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
    }

    function consumed(body) {
      if (body.bodyUsed) {
        return Promise.reject(new TypeError('Already read'));
      }
      body.bodyUsed = true;
    }

    function fileReaderReady(reader) {
      return new Promise(function (resolve, reject) {
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = function () {
          reject(reader.error);
        };
      });
    }

    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      return fileReaderReady(reader);
    }

    function readBlobAsText(blob) {
      var reader = new FileReader();
      reader.readAsText(blob);
      return fileReaderReady(reader);
    }

    function Body() {
      this.bodyUsed = false;

      this._initBody = function (body) {
        this._bodyInit = body;
        if (typeof body === 'string') {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this._bodyText = body.toString();
        } else if (!body) {
          this._bodyText = '';
        } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
          // Only support ArrayBuffers for POST method.
          // Receiving ArrayBuffers happens via Blobs, instead.
        } else {
          throw new Error('unsupported BodyInit type');
        }

        if (!this.headers.get('content-type')) {
          if (typeof body === 'string') {
            this.headers.set('content-type', 'text/plain;charset=UTF-8');
          } else if (this._bodyBlob && this._bodyBlob.type) {
            this.headers.set('content-type', this._bodyBlob.type);
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }
        }
      };

      if (support.blob) {
        this.blob = function () {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }

          if (this._bodyBlob) {
            return Promise.resolve(this._bodyBlob);
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob');
          } else {
            return Promise.resolve(new Blob([this._bodyText]));
          }
        };

        this.arrayBuffer = function () {
          return this.blob().then(readBlobAsArrayBuffer);
        };

        this.text = function () {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }

          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as text');
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
      } else {
        this.text = function () {
          var rejected = consumed(this);
          return rejected ? rejected : Promise.resolve(this._bodyText);
        };
      }

      if (support.formData) {
        this.formData = function () {
          return this.text().then(decode);
        };
      }

      this.json = function () {
        return this.text().then(JSON.parse);
      };

      return this;
    }

    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return methods.indexOf(upcased) > -1 ? upcased : method;
    }

    function Request(input, options) {
      options = options || {};
      var body = options.body;
      if (Request.prototype.isPrototypeOf(input)) {
        if (input.bodyUsed) {
          throw new TypeError('Already read');
        }
        this.url = input.url;
        this.credentials = input.credentials;
        if (!options.headers) {
          this.headers = new Headers(input.headers);
        }
        this.method = input.method;
        this.mode = input.mode;
        if (!body) {
          body = input._bodyInit;
          input.bodyUsed = true;
        }
      } else {
        this.url = input;
      }

      this.credentials = options.credentials || this.credentials || 'omit';
      if (options.headers || !this.headers) {
        this.headers = new Headers(options.headers);
      }
      this.method = normalizeMethod(options.method || this.method || 'GET');
      this.mode = options.mode || this.mode || null;
      this.referrer = null;

      if ((this.method === 'GET' || this.method === 'HEAD') && body) {
        throw new TypeError('Body not allowed for GET or HEAD requests');
      }
      this._initBody(body);
    }

    Request.prototype.clone = function () {
      return new Request(this);
    };

    function decode(body) {
      var form = new FormData();
      body.trim().split('&').forEach(function (bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form;
    }

    function headers(xhr) {
      var head = new Headers();
      var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n');
      pairs.forEach(function (header) {
        var split = header.trim().split(':');
        var key = split.shift().trim();
        var value = split.join(':').trim();
        head.append(key, value);
      });
      return head;
    }

    Body.call(Request.prototype);

    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }

      this.type = 'default';
      this.status = options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = options.statusText;
      this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
      this.url = options.url || '';
      this._initBody(bodyInit);
    }

    Body.call(Response.prototype);

    Response.prototype.clone = function () {
      return new Response(this._bodyInit, {
        status: this.status,
        statusText: this.statusText,
        headers: new Headers(this.headers),
        url: this.url
      });
    };

    Response.error = function () {
      var response = new Response(null, { status: 0, statusText: '' });
      response.type = 'error';
      return response;
    };

    var redirectStatuses = [301, 302, 303, 307, 308];

    Response.redirect = function (url, status) {
      if (redirectStatuses.indexOf(status) === -1) {
        throw new RangeError('Invalid status code');
      }

      return new Response(null, { status: status, headers: { location: url } });
    };

    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;

    self.fetch = function (input, init) {
      return new Promise(function (resolve, reject) {
        var request;
        if (Request.prototype.isPrototypeOf(input) && !init) {
          request = input;
        } else {
          request = new Request(input, init);
        }

        var xhr = new XMLHttpRequest();

        function responseURL() {
          if ('responseURL' in xhr) {
            return xhr.responseURL;
          }

          // Avoid security warnings on getResponseHeader when not allowed by CORS
          if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
            return xhr.getResponseHeader('X-Request-URL');
          }

          return;
        }

        xhr.onload = function () {
          var options = {
            status: xhr.status,
            statusText: xhr.statusText,
            headers: headers(xhr),
            url: responseURL()
          };
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          resolve(new Response(body, options));
        };

        xhr.onerror = function () {
          reject(new TypeError('Network request failed'));
        };

        xhr.ontimeout = function () {
          reject(new TypeError('Network request failed'));
        };

        xhr.open(request.method, request.url, true);

        if (request.credentials === 'include') {
          xhr.withCredentials = true;
        }

        if ('responseType' in xhr && support.blob) {
          xhr.responseType = 'blob';
        }

        request.headers.forEach(function (value, name) {
          xhr.setRequestHeader(name, value);
        });

        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
      });
    };
    self.fetch.polyfill = true;
  })(typeof self !== 'undefined' ? self : this);
  return module.exports;
});
$__System.register("12d", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("default", function (window, undefined) {
                "use strict";

                var $ = {
                    extend: function (a, b) {
                        Object.getOwnPropertyNames(b).forEach(function (key) {
                            a[key] = b[key];
                        });
                        return a;
                    },
                    each: function (o, callback) {
                        Object.keys(o).forEach(function (key) {
                            return callback(key, o[key]);
                        });
                    }
                };
                var DEBUG = !!(window.advancedSettings && window.advancedSettings.jsonRPC && window.advancedSettings.jsonRPC.debug);
                var WEBSOCKET_TIMEOUT = 3000; //3 seconds
                var MAX_SOCKET_CONNECTION_ATTEMPTS = 3;
                var notifications = {};
                var onopen = [];
                var onclose = [];
                var address;
                var transport;
                function parseURL(url, func) {
                    var temp = document.createElement('a');
                    temp.href = url;
                    if (func instanceof Function) func.apply(temp);
                    return temp.href;
                }
                function connect(url) {
                    address = parseURL(url, function () {
                        if (this.protocol === 'ws:' || this.protocol === 'wss:') transport = 'websocket';
                        if (this.protocol === 'http:' || this.protocol === 'https:') transport = 'ajax';
                    });
                    if (transport) return $.extend({
                        'transport': transport,
                        'address': address,
                        'connect': connect,
                        'onNotification': function (method, callback) {
                            if (!notifications[method]) notifications[method] = [];
                            notifications[method].push(callback);
                        },
                        'onConnect': function (callback) {
                            if (callback instanceof Function) onopen.push(callback);
                        },
                        'onDisconnect': function (callback) {
                            if (callback instanceof Function) onclose.push(callback);
                        },
                        'notifications': function (n) {
                            if (n) notifications = n;
                            return notifications;
                        }
                    }, JSONRPC[transport](address));
                }
                function JSONRPC(url, debug) {
                    if (debug && window.console) DEBUG = true;
                    if (url) return connect(url);
                }
                var nextId = 0;
                function sendMessage(method, params) {
                    if (DEBUG) console.log('JSONRPC.ajax: SENDING MESSAGE: ' + method, params);
                    return this.send({
                        'data': {
                            'jsonrpc': '2.0',
                            'method': method,
                            'params': params || {},
                            'id': nextId++
                        }
                    }).catch(function (error) {
                        if (DEBUG) console.log('JSONRPC.ajax: MESSAGE ERROR: ' + method, error);
                        return error;
                    }).then(function (data) {
                        if (DEBUG) console.log('JSONRPC.ajax: RECEIVING MESSAGE: ' + method, data);
                        return data;
                    });
                }
                function sendNotification(method, params) {
                    if (DEBUG) console.log('JSONRPC.ajax: NOTIFICATION SENT: ' + method, params);
                    return this.send({
                        'data': {
                            'jsonrpc': '2.0',
                            'method': method,
                            'params': params || {}
                        }
                    });
                }
                JSONRPC.ajax = function (url) {
                    function send(message) {
                        return fetch(new Request(url, {
                            method: 'POST',
                            headers: new Headers({
                                'Content-Type': 'application/json'
                            }),
                            body: JSON.stringify(message.data)
                        })).then(function (response) {
                            return response.json();
                        });
                    }
                    return {
                        'send': send,
                        'sendMessage': sendMessage,
                        'sendNotification': sendNotification
                    };
                };
                JSONRPC.websocket = function (url) {
                    var socket = {},
                        messages = {},
                        buffer = [],
                        socketConnectionAttempts = 0;
                    function socketReady() {
                        return socket.readyState === 1;
                    }
                    function send(message) {
                        return new Promise(function (resolve, reject) {
                            var id = message.data.id;
                            message.success = resolve;
                            if (socketReady()) {
                                if (id && message.success instanceof Function) {
                                    message.timeout = window.setTimeout(function () {
                                        if (DEBUG) console.log('JSONRPC.websocket: MESSAGE TIMEOUT: RE-SENDING: ' + message.data.method, message);
                                        if (messages[id]) {
                                            delete messages[id];
                                            send(message);
                                        }
                                    }, WEBSOCKET_TIMEOUT);
                                    messages[id] = message; //if its a message, save it in the message callback buffer
                                }
                                try {
                                    socket.send(JSON.stringify(message.data));
                                } catch (e) {
                                    console.error('JSONRPC.websocket: ERROR SENDING DATA: ' + e, message.data);
                                    throw e;
                                }
                                return true;
                            } else {
                                buffer.push(message);
                                return false;
                            }
                        });
                    }
                    function sendNext() {
                        if (buffer.length) send(buffer.shift());
                    }
                    function connectSocket() {
                        socket = new WebSocket(url);
                        socket.q = {};
                        socket.onmessage = function (message) {
                            var data = JSON.parse(message.data);
                            var m;
                            if (data.id) {
                                if (messages[data.id]) {
                                    m = messages[data.id];
                                    if (DEBUG) console.log('JSONRPC.websocket: MESSAGE RECEIVED: ' + m.data.method, data);
                                    if (m.success instanceof Function) m.success(data);
                                    window.clearTimeout(m.timeout);
                                    delete messages[data.id];
                                }
                            } else {
                                if (DEBUG) console.log('JSONRPC.websocket: NOTIFICATION RECEIVED: ' + data.method, data);
                                if (notifications[data.method]) {
                                    $.each(notifications[data.method], function (i, o) {
                                        if (o instanceof Function) o(data.params);
                                    });
                                }
                            }
                            sendNext();
                        };
                        socket.onclose = function (close) {
                            if (DEBUG) console.log('JSONRPC.websocket: DISCONNECTED');
                            if (socketConnectionAttempts < MAX_SOCKET_CONNECTION_ATTEMPTS) {
                                window.setTimeout(function () {
                                    if (socket.readyState === 3) connectSocket();
                                }, 1000); //retry after 1 second
                            } else $.each(onclose, function (i, o) {
                                if (o instanceof Function) o();
                            }); //too many connection attempts
                        };
                        socket.onopen = function () {
                            if (DEBUG) console.log('JSONRPC.websocket: CONNECTED');
                            socketConnectionAttempts = 0;
                            sendNext(); //re-start the buffer when the socket reconnects
                            $.each(onopen, function (i, o) {
                                if (o instanceof Function) o();
                            });
                        };
                    }
                    if (!('WebSocket' in window)) return;
                    connectSocket();
                    return {
                        'send': send,
                        'sendMessage': sendMessage,
                        'sendNotification': sendNotification
                    };
                };
                return JSONRPC;
            }(window));
        }
    };
});
$__System.register("12e", ["12d"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var jsonrpc_1;
    return {
        setters: [function (jsonrpc_1_1) {
            jsonrpc_1 = jsonrpc_1_1;
        }],
        execute: function () {
            exports_1("default", function () {
                "use strict";

                var DEBUG = !!(window.advancedSettings && window.advancedSettings.xbmc && window.advancedSettings.xbmc.debug);
                var socket = { 'q': {} };
                var events = {};
                var server = undefined;
                var extend = function (object, modification) {
                    Object.keys(modification).forEach(function (key) {
                        object[key] = modification[key];
                    });
                    return object;
                };
                //the map below describes the xbmc.* functions
                //objects are passed to makeFunction() before being added
                var rpc = {
                    'Open': {
                        'method': 'Player.Open'
                    },
                    'GetActivePlayer': {
                        'method': 'Player.GetActivePlayers',
                        'wrapper': function (players, callback) {
                            if (!players.length) {
                                callback();
                                return;
                            }
                            ;
                            callback(players[0]); //run callback with the active player
                        }
                    },
                    'GetActivePlayerID': {
                        'method': 'Player.GetActivePlayers',
                        'wrapper': function (players, callback) {
                            if (!players.length) return; //do nothing if there is nothing playing
                            callback(players[0].playerid); //run callback with the id of the active player
                        }
                    },
                    'GetActivePlayerProperties': function () {
                        return new Promise(function (resolve, reject) {
                            pub.GetActivePlayer().then(function (player) {
                                if (!player) resolve();else pub.get({
                                    'method': 'Player.GetProperties',
                                    'params': {
                                        'properties': ['time', 'totaltime', 'speed', 'playlistid', 'position', 'repeat', 'type', 'partymode', 'shuffled', 'live'],
                                        'playerid': player.playerid
                                    }
                                }).then(resolve).catch(reject);
                            });
                        });
                    },
                    'GoTo': {
                        'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
                        'method': 'Player.GoTo'
                    },
                    'Seek': {
                        'requires': { 'name': 'playerid', 'value': 'GetActivePlayerID' },
                        'method': 'Player.Seek'
                    },
                    'Play': function (o, playlistid, position) {
                        return pub.get({
                            method: 'Playlist.Clear',
                            params: { 'playlistid': playlistid }
                        }).then(function (result) {
                            return pub.get({
                                method: 'Playlist.Add',
                                params: {
                                    'playlistid': playlistid,
                                    'item': typeof o === 'string' ? { 'file': o } : o
                                }
                            });
                        }).then(function (result) {
                            return pub.get({
                                'method': 'Player.Open',
                                'params': {
                                    'item': { 'playlistid': playlistid, 'position': position || 0 }
                                }
                            });
                        });
                    }
                };
                //Modifies parts of an url
                //parseURL( '/' );
                //parseURL( '/', { 'protocol': 'https', 'port': 8080 } );
                //parseURL( '/', function () { this.protocol = 'https'; this.port = 8080; } );
                //parseURL( '/', [ { 'protocol': 'https' }, function () { this.port = '8080'; } ] );
                var parseURL = function (url, m) {
                    var temp = document.createElement('a');
                    temp.href = url || '/';
                    var modifyObject = function (object, modifications) {
                        if (!(modifications instanceof Array)) modifications = [modifications];
                        modifications.forEach(function (modification) {
                            if (modification instanceof Function) modification.apply(object);else if (modification instanceof Array) object = modifyObject(object, modification);else Object.keys(modification).forEach(function (key) {
                                object[key] = modification[key];
                            });
                        });
                        return object;
                    };
                    if (m) temp = modifyObject(temp, m);
                    return temp.href;
                };
                //like Array.some but returns the value of the function instead of true/false
                var first_ = function (func) {
                    return function (array) {
                        var out = undefined;
                        Array.prototype.some.call(array, function (elem, i) {
                            var value = func(elem, i);
                            if (value) {
                                out = value;
                                return true;
                            }
                        });
                        return out;
                    };
                };
                //public functions
                var pub = {
                    'vfs2uri': function () {
                        var self,
                            vfsurl = parseURL('/', { 'protocol': 'http' });
                        self = function (vfs) {
                            if (!vfs) return;
                            //if (vfs.substring(0,21) === 'image://http%3a%2f%2f') return decodeURIComponent( vfs.substring(8) ); //get image directly from the internet, bypassing the xbmc cache
                            return vfsurl + encodeURIComponent(vfs);
                        };
                        self.set = function (url) {
                            vfsurl = parseURL(url || '/');
                        };
                        return self;
                    }(),
                    'makeFilter': function (state, filter) {
                        return first_(function (filter) {
                            var value = state[filter.key];
                            if (!value) return;
                            var out = {
                                'filter': {},
                                'name': filter.name,
                                'value': new filter.type(value)
                            };
                            out.filter[filter.key] = out.value;
                            return out;
                        })(filter);
                    },
                    'onNotification': function (method, callback) {
                        server.onNotification(method, callback);
                    },
                    'version': function () {
                        var version = undefined;
                        var self = function () {
                            return version;
                        };
                        self.set = function (v) {
                            if (v >= 0) version = v;
                        };
                        return self;
                    }(),
                    'transport': function () {
                        var transport = 'ajax';
                        var self = function () {
                            return transport;
                        };
                        self.set = function (t) {
                            transport = t;
                        };
                        return self;
                    }(),
                    'sendMessageCached': function () {
                        var messageCache = new Map();
                        return function (o) {
                            var cacheResult = messageCache.get(JSON.stringify(o.params));
                            if (cacheResult) return Promise.resolve(cacheResult);
                            return server.sendMessage(o.method, o.params).then(function (data) {
                                messageCache.set(JSON.stringify(o.params), data);
                                return data;
                            });
                        };
                    }(),
                    'sendMessage': function (method, params) {
                        return server.sendMessage(method, params);
                    },
                    // get({ method: String, params: Object, cache: Boolean })
                    // returns Promise<Object>
                    'get': function (o) {
                        return (o.cache === true ? pub.sendMessageCached(o) : pub.sendMessage(o.method, o.params)).then(function (data) {
                            if (data.result === undefined) {
                                console.error(data.error);
                                return Promise.reject(data.error);
                            }
                            return data.result;
                        });
                    }
                };
                var cache = new Map();
                function load(name, params, callback) {
                    var r = rpc[name];
                    var cb = undefined;
                    //let hash = r.method+'_'+JSON.stringify(params).replace(/\W/g,'')
                    //let cached = cache[hash]
                    var cached = cache.get(params);
                    if (cached) callback(cached);else {
                        if (r && r.method) server.sendMessage(r.method, params).then(function (result) {
                            if (callback instanceof Function) {
                                cb = r.cache ? function (x) {
                                    cache.set(params, x);return callback(x);
                                } : callback;
                                if (result.result) result = result.result;
                                if (r.wrapper) r.wrapper(result, cb);else cb(result);
                            }
                        });
                    }
                }
                function makeFunction(item, index) {
                    var template = function (params) {
                        return new Promise(function (resolve, reject) {
                            if (!params) params = {};
                            if (item.params) extend(params, item.params);
                            load(index, params, resolve);
                        });
                    };
                    if (item instanceof Function) {
                        pub[index] = item;
                        return;
                    }
                    if (item.requires) pub[index] = function (params) {
                        return new Promise(function (resolve, reject) {
                            //return the required function with the template as a callback
                            return pub[item.requires.value]().then(function (result) {
                                if (!params) params = {};
                                if (result !== undefined) params[item.requires.name] = result;
                                return template(params);
                            });
                        });
                    };else pub[index] = template; //just use the bare template if there is no dependency
                }
                Object.getOwnPropertyNames(rpc).forEach(function (key) {
                    return makeFunction(rpc[key], key);
                }); //make public functions from the rpc array
                function upgradeToSocket(address, callback) {
                    var ws = jsonrpc_1.default(address);
                    var ajax = server;
                    if (DEBUG) console.log('XBMC: Attempting to upgrade transport to websocket', address);
                    if (!ws) {
                        if (DEBUG) console.log('XBMC: No websocket support in this browser', navigator.userAgent);
                        return;
                    }
                    ws.notifications(ajax.notifications());
                    ws.onConnect(function () {
                        if (DEBUG) console.log('XBMC: Transport upgraded to websocket');
                        server = ws; //replace ajax transport with websocket
                        pub.transport.set('websocket');
                        if (callback instanceof Function) callback();
                    });
                    ws.onDisconnect(function () {
                        if (DEBUG) console.log('XBMC: Upgrading transport to websocket failed');
                        if (pub.transport() === 'websocket') server = ajax;
                        pub.transport.set('ajax');
                    });
                }
                return function (addr) {
                    var address = parseURL('/', { 'host': addr });
                    return new Promise(function (resolve, reject) {
                        //set URL variables
                        var ajaxURL = parseURL(address, { 'protocol': 'http', 'pathname': 'jsonrpc', 'search': '' });
                        var wsURL = parseURL(address, { 'protocol': 'ws', 'pathname': 'jsonrpc', 'port': 9090 });
                        pub.vfs2uri.set(parseURL(address, [{ 'protocol': 'http', 'pathname': 'vfs/' } //,
                        ]));
                        if (DEBUG) console.log('XBMC: Connecting to ', ajaxURL);
                        //create an ajax transport
                        server = jsonrpc_1.default(ajaxURL);
                        pub.transport.set('ajax');
                        //get the version from the server, if it is over 5 the server supports websockets so we should upgrade the connection
                        server.sendMessage('JSONRPC.Version').catch(function (error) {
                            if (DEBUG) console.log('XBMC: Connection failure: ', error);
                            reject();
                        }).then(function (data) {
                            if (data.result && data.result.version) {
                                if (DEBUG) console.log('XBMC: Connected: API Version ', data.result.version);
                                pub.version.set(data.result.version.major || data.result.version || undefined);
                                if (pub.version() >= 5 && advancedSettings.upgradeToSocket) upgradeToSocket(wsURL);
                                resolve(pub);
                            } else {
                                if (DEBUG) console.log('XBMC: Connection failure: Invalid version received', data.error);
                                reject();
                            }
                        });
                    });
                };
            }());
        }
    };
});
$__System.registerDynamic('12f', [], false, function ($__require, $__exports, $__module) {
	var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, 'Handlebars', null);

	(function ($__global) {
		/*!
  
   handlebars v4.0.5
  
  Copyright (C) 2011-2015 by Yehuda Katz
  
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
  
  @license
  */
		(function webpackUniversalModuleDefinition(root, factory) {
			if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if (typeof exports === 'object') exports["Handlebars"] = factory();else root["Handlebars"] = factory();
		})(this, function () {
			return (/******/function (modules) {
					// webpackBootstrap
					/******/ // The module cache
					/******/var installedModules = {};

					/******/ // The require function
					/******/function __webpack_require__(moduleId) {

						/******/ // Check if module is in cache
						/******/if (installedModules[moduleId])
							/******/return installedModules[moduleId].exports;

						/******/ // Create a new module (and put it into the cache)
						/******/var module = installedModules[moduleId] = {
							/******/exports: {},
							/******/id: moduleId,
							/******/loaded: false
							/******/ };

						/******/ // Execute the module function
						/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

						/******/ // Flag the module as loaded
						/******/module.loaded = true;

						/******/ // Return the exports of the module
						/******/return module.exports;
						/******/
					}

					/******/ // expose the modules object (__webpack_modules__)
					/******/__webpack_require__.m = modules;

					/******/ // expose the module cache
					/******/__webpack_require__.c = installedModules;

					/******/ // __webpack_public_path__
					/******/__webpack_require__.p = "";

					/******/ // Load entry module and return exports
					/******/return __webpack_require__(0);
					/******/
				}(
				/************************************************************************/
				/******/[
				/* 0 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;

					var _handlebarsRuntime = __webpack_require__(2);

					var _handlebarsRuntime2 = _interopRequireDefault(_handlebarsRuntime);

					// Compiler imports

					var _handlebarsCompilerAst = __webpack_require__(21);

					var _handlebarsCompilerAst2 = _interopRequireDefault(_handlebarsCompilerAst);

					var _handlebarsCompilerBase = __webpack_require__(22);

					var _handlebarsCompilerCompiler = __webpack_require__(27);

					var _handlebarsCompilerJavascriptCompiler = __webpack_require__(28);

					var _handlebarsCompilerJavascriptCompiler2 = _interopRequireDefault(_handlebarsCompilerJavascriptCompiler);

					var _handlebarsCompilerVisitor = __webpack_require__(25);

					var _handlebarsCompilerVisitor2 = _interopRequireDefault(_handlebarsCompilerVisitor);

					var _handlebarsNoConflict = __webpack_require__(20);

					var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

					var _create = _handlebarsRuntime2['default'].create;
					function create() {
						var hb = _create();

						hb.compile = function (input, options) {
							return _handlebarsCompilerCompiler.compile(input, options, hb);
						};
						hb.precompile = function (input, options) {
							return _handlebarsCompilerCompiler.precompile(input, options, hb);
						};

						hb.AST = _handlebarsCompilerAst2['default'];
						hb.Compiler = _handlebarsCompilerCompiler.Compiler;
						hb.JavaScriptCompiler = _handlebarsCompilerJavascriptCompiler2['default'];
						hb.Parser = _handlebarsCompilerBase.parser;
						hb.parse = _handlebarsCompilerBase.parse;

						return hb;
					}

					var inst = create();
					inst.create = create;

					_handlebarsNoConflict2['default'](inst);

					inst.Visitor = _handlebarsCompilerVisitor2['default'];

					inst['default'] = inst;

					exports['default'] = inst;
					module.exports = exports['default'];

					/***/
				},
				/* 1 */
				/***/function (module, exports) {

					"use strict";

					exports["default"] = function (obj) {
						return obj && obj.__esModule ? obj : {
							"default": obj
						};
					};

					exports.__esModule = true;

					/***/
				},
				/* 2 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireWildcard = __webpack_require__(3)['default'];

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;

					var _handlebarsBase = __webpack_require__(4);

					var base = _interopRequireWildcard(_handlebarsBase);

					// Each of these augment the Handlebars object. No need to setup here.
					// (This is done to easily share code between commonjs and browse envs)

					var _handlebarsSafeString = __webpack_require__(18);

					var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

					var _handlebarsException = __webpack_require__(6);

					var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

					var _handlebarsUtils = __webpack_require__(5);

					var Utils = _interopRequireWildcard(_handlebarsUtils);

					var _handlebarsRuntime = __webpack_require__(19);

					var runtime = _interopRequireWildcard(_handlebarsRuntime);

					var _handlebarsNoConflict = __webpack_require__(20);

					var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

					// For compatibility and usage outside of module systems, make the Handlebars object a namespace
					function create() {
						var hb = new base.HandlebarsEnvironment();

						Utils.extend(hb, base);
						hb.SafeString = _handlebarsSafeString2['default'];
						hb.Exception = _handlebarsException2['default'];
						hb.Utils = Utils;
						hb.escapeExpression = Utils.escapeExpression;

						hb.VM = runtime;
						hb.template = function (spec) {
							return runtime.template(spec, hb);
						};

						return hb;
					}

					var inst = create();
					inst.create = create;

					_handlebarsNoConflict2['default'](inst);

					inst['default'] = inst;

					exports['default'] = inst;
					module.exports = exports['default'];

					/***/
				},
				/* 3 */
				/***/function (module, exports) {

					"use strict";

					exports["default"] = function (obj) {
						if (obj && obj.__esModule) {
							return obj;
						} else {
							var newObj = {};

							if (obj != null) {
								for (var key in obj) {
									if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
								}
							}

							newObj["default"] = obj;
							return newObj;
						}
					};

					exports.__esModule = true;

					/***/
				},
				/* 4 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;
					exports.HandlebarsEnvironment = HandlebarsEnvironment;

					var _utils = __webpack_require__(5);

					var _exception = __webpack_require__(6);

					var _exception2 = _interopRequireDefault(_exception);

					var _helpers = __webpack_require__(7);

					var _decorators = __webpack_require__(15);

					var _logger = __webpack_require__(17);

					var _logger2 = _interopRequireDefault(_logger);

					var VERSION = '4.0.5';
					exports.VERSION = VERSION;
					var COMPILER_REVISION = 7;

					exports.COMPILER_REVISION = COMPILER_REVISION;
					var REVISION_CHANGES = {
						1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
						2: '== 1.0.0-rc.3',
						3: '== 1.0.0-rc.4',
						4: '== 1.x.x',
						5: '== 2.0.0-alpha.x',
						6: '>= 2.0.0-beta.1',
						7: '>= 4.0.0'
					};

					exports.REVISION_CHANGES = REVISION_CHANGES;
					var objectType = '[object Object]';

					function HandlebarsEnvironment(helpers, partials, decorators) {
						this.helpers = helpers || {};
						this.partials = partials || {};
						this.decorators = decorators || {};

						_helpers.registerDefaultHelpers(this);
						_decorators.registerDefaultDecorators(this);
					}

					HandlebarsEnvironment.prototype = {
						constructor: HandlebarsEnvironment,

						logger: _logger2['default'],
						log: _logger2['default'].log,

						registerHelper: function registerHelper(name, fn) {
							if (_utils.toString.call(name) === objectType) {
								if (fn) {
									throw new _exception2['default']('Arg not supported with multiple helpers');
								}
								_utils.extend(this.helpers, name);
							} else {
								this.helpers[name] = fn;
							}
						},
						unregisterHelper: function unregisterHelper(name) {
							delete this.helpers[name];
						},

						registerPartial: function registerPartial(name, partial) {
							if (_utils.toString.call(name) === objectType) {
								_utils.extend(this.partials, name);
							} else {
								if (typeof partial === 'undefined') {
									throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
								}
								this.partials[name] = partial;
							}
						},
						unregisterPartial: function unregisterPartial(name) {
							delete this.partials[name];
						},

						registerDecorator: function registerDecorator(name, fn) {
							if (_utils.toString.call(name) === objectType) {
								if (fn) {
									throw new _exception2['default']('Arg not supported with multiple decorators');
								}
								_utils.extend(this.decorators, name);
							} else {
								this.decorators[name] = fn;
							}
						},
						unregisterDecorator: function unregisterDecorator(name) {
							delete this.decorators[name];
						}
					};

					var log = _logger2['default'].log;

					exports.log = log;
					exports.createFrame = _utils.createFrame;
					exports.logger = _logger2['default'];

					/***/
				},
				/* 5 */
				/***/function (module, exports) {

					'use strict';

					exports.__esModule = true;
					exports.extend = extend;
					exports.indexOf = indexOf;
					exports.escapeExpression = escapeExpression;
					exports.isEmpty = isEmpty;
					exports.createFrame = createFrame;
					exports.blockParams = blockParams;
					exports.appendContextPath = appendContextPath;
					var escape = {
						'&': '&amp;',
						'<': '&lt;',
						'>': '&gt;',
						'"': '&quot;',
						"'": '&#x27;',
						'`': '&#x60;',
						'=': '&#x3D;'
					};

					var badChars = /[&<>"'`=]/g,
					    possible = /[&<>"'`=]/;

					function escapeChar(chr) {
						return escape[chr];
					}

					function extend(obj /* , ...source */) {
						for (var i = 1; i < arguments.length; i++) {
							for (var key in arguments[i]) {
								if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
									obj[key] = arguments[i][key];
								}
							}
						}

						return obj;
					}

					var toString = Object.prototype.toString;

					exports.toString = toString;
					// Sourced from lodash
					// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
					/* eslint-disable func-style */
					var isFunction = function isFunction(value) {
						return typeof value === 'function';
					};
					// fallback for older versions of Chrome and Safari
					/* istanbul ignore next */
					if (isFunction(/x/)) {
						exports.isFunction = isFunction = function (value) {
							return typeof value === 'function' && toString.call(value) === '[object Function]';
						};
					}
					exports.isFunction = isFunction;

					/* eslint-enable func-style */

					/* istanbul ignore next */
					var isArray = Array.isArray || function (value) {
						return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
					};

					exports.isArray = isArray;
					// Older IE versions do not directly support indexOf so we must implement our own, sadly.

					function indexOf(array, value) {
						for (var i = 0, len = array.length; i < len; i++) {
							if (array[i] === value) {
								return i;
							}
						}
						return -1;
					}

					function escapeExpression(string) {
						if (typeof string !== 'string') {
							// don't escape SafeStrings, since they're already safe
							if (string && string.toHTML) {
								return string.toHTML();
							} else if (string == null) {
								return '';
							} else if (!string) {
								return string + '';
							}

							// Force a string conversion as this will be done by the append regardless and
							// the regex test will do this transparently behind the scenes, causing issues if
							// an object's to string has escaped characters in it.
							string = '' + string;
						}

						if (!possible.test(string)) {
							return string;
						}
						return string.replace(badChars, escapeChar);
					}

					function isEmpty(value) {
						if (!value && value !== 0) {
							return true;
						} else if (isArray(value) && value.length === 0) {
							return true;
						} else {
							return false;
						}
					}

					function createFrame(object) {
						var frame = extend({}, object);
						frame._parent = object;
						return frame;
					}

					function blockParams(params, ids) {
						params.path = ids;
						return params;
					}

					function appendContextPath(contextPath, id) {
						return (contextPath ? contextPath + '.' : '') + id;
					}

					/***/
				},
				/* 6 */
				/***/function (module, exports) {

					'use strict';

					exports.__esModule = true;

					var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

					function Exception(message, node) {
						var loc = node && node.loc,
						    line = undefined,
						    column = undefined;
						if (loc) {
							line = loc.start.line;
							column = loc.start.column;

							message += ' - ' + line + ':' + column;
						}

						var tmp = Error.prototype.constructor.call(this, message);

						// Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
						for (var idx = 0; idx < errorProps.length; idx++) {
							this[errorProps[idx]] = tmp[errorProps[idx]];
						}

						/* istanbul ignore else */
						if (Error.captureStackTrace) {
							Error.captureStackTrace(this, Exception);
						}

						if (loc) {
							this.lineNumber = line;
							this.column = column;
						}
					}

					Exception.prototype = new Error();

					exports['default'] = Exception;
					module.exports = exports['default'];

					/***/
				},
				/* 7 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;
					exports.registerDefaultHelpers = registerDefaultHelpers;

					var _helpersBlockHelperMissing = __webpack_require__(8);

					var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

					var _helpersEach = __webpack_require__(9);

					var _helpersEach2 = _interopRequireDefault(_helpersEach);

					var _helpersHelperMissing = __webpack_require__(10);

					var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

					var _helpersIf = __webpack_require__(11);

					var _helpersIf2 = _interopRequireDefault(_helpersIf);

					var _helpersLog = __webpack_require__(12);

					var _helpersLog2 = _interopRequireDefault(_helpersLog);

					var _helpersLookup = __webpack_require__(13);

					var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

					var _helpersWith = __webpack_require__(14);

					var _helpersWith2 = _interopRequireDefault(_helpersWith);

					function registerDefaultHelpers(instance) {
						_helpersBlockHelperMissing2['default'](instance);
						_helpersEach2['default'](instance);
						_helpersHelperMissing2['default'](instance);
						_helpersIf2['default'](instance);
						_helpersLog2['default'](instance);
						_helpersLookup2['default'](instance);
						_helpersWith2['default'](instance);
					}

					/***/
				},
				/* 8 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					exports.__esModule = true;

					var _utils = __webpack_require__(5);

					exports['default'] = function (instance) {
						instance.registerHelper('blockHelperMissing', function (context, options) {
							var inverse = options.inverse,
							    fn = options.fn;

							if (context === true) {
								return fn(this);
							} else if (context === false || context == null) {
								return inverse(this);
							} else if (_utils.isArray(context)) {
								if (context.length > 0) {
									if (options.ids) {
										options.ids = [options.name];
									}

									return instance.helpers.each(context, options);
								} else {
									return inverse(this);
								}
							} else {
								if (options.data && options.ids) {
									var data = _utils.createFrame(options.data);
									data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
									options = { data: data };
								}

								return fn(context, options);
							}
						});
					};

					module.exports = exports['default'];

					/***/
				},
				/* 9 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;

					var _utils = __webpack_require__(5);

					var _exception = __webpack_require__(6);

					var _exception2 = _interopRequireDefault(_exception);

					exports['default'] = function (instance) {
						instance.registerHelper('each', function (context, options) {
							if (!options) {
								throw new _exception2['default']('Must pass iterator to #each');
							}

							var fn = options.fn,
							    inverse = options.inverse,
							    i = 0,
							    ret = '',
							    data = undefined,
							    contextPath = undefined;

							if (options.data && options.ids) {
								contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
							}

							if (_utils.isFunction(context)) {
								context = context.call(this);
							}

							if (options.data) {
								data = _utils.createFrame(options.data);
							}

							function execIteration(field, index, last) {
								if (data) {
									data.key = field;
									data.index = index;
									data.first = index === 0;
									data.last = !!last;

									if (contextPath) {
										data.contextPath = contextPath + field;
									}
								}

								ret = ret + fn(context[field], {
									data: data,
									blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
								});
							}

							if (context && typeof context === 'object') {
								if (_utils.isArray(context)) {
									for (var j = context.length; i < j; i++) {
										if (i in context) {
											execIteration(i, i, i === context.length - 1);
										}
									}
								} else {
									var priorKey = undefined;

									for (var key in context) {
										if (context.hasOwnProperty(key)) {
											// We're running the iterations one step out of sync so we can detect
											// the last iteration without have to scan the object twice and create
											// an itermediate keys array.
											if (priorKey !== undefined) {
												execIteration(priorKey, i - 1);
											}
											priorKey = key;
											i++;
										}
									}
									if (priorKey !== undefined) {
										execIteration(priorKey, i - 1, true);
									}
								}
							}

							if (i === 0) {
								ret = inverse(this);
							}

							return ret;
						});
					};

					module.exports = exports['default'];

					/***/
				},
				/* 10 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;

					var _exception = __webpack_require__(6);

					var _exception2 = _interopRequireDefault(_exception);

					exports['default'] = function (instance) {
						instance.registerHelper('helperMissing', function () /* [args, ]options */{
							if (arguments.length === 1) {
								// A missing field in a {{foo}} construct.
								return undefined;
							} else {
								// Someone is actually trying to call something, blow up.
								throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
							}
						});
					};

					module.exports = exports['default'];

					/***/
				},
				/* 11 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					exports.__esModule = true;

					var _utils = __webpack_require__(5);

					exports['default'] = function (instance) {
						instance.registerHelper('if', function (conditional, options) {
							if (_utils.isFunction(conditional)) {
								conditional = conditional.call(this);
							}

							// Default behavior is to render the positive path if the value is truthy and not empty.
							// The `includeZero` option may be set to treat the condtional as purely not empty based on the
							// behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
							if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
								return options.inverse(this);
							} else {
								return options.fn(this);
							}
						});

						instance.registerHelper('unless', function (conditional, options) {
							return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
						});
					};

					module.exports = exports['default'];

					/***/
				},
				/* 12 */
				/***/function (module, exports) {

					'use strict';

					exports.__esModule = true;

					exports['default'] = function (instance) {
						instance.registerHelper('log', function () /* message, options */{
							var args = [undefined],
							    options = arguments[arguments.length - 1];
							for (var i = 0; i < arguments.length - 1; i++) {
								args.push(arguments[i]);
							}

							var level = 1;
							if (options.hash.level != null) {
								level = options.hash.level;
							} else if (options.data && options.data.level != null) {
								level = options.data.level;
							}
							args[0] = level;

							instance.log.apply(instance, args);
						});
					};

					module.exports = exports['default'];

					/***/
				},
				/* 13 */
				/***/function (module, exports) {

					'use strict';

					exports.__esModule = true;

					exports['default'] = function (instance) {
						instance.registerHelper('lookup', function (obj, field) {
							return obj && obj[field];
						});
					};

					module.exports = exports['default'];

					/***/
				},
				/* 14 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					exports.__esModule = true;

					var _utils = __webpack_require__(5);

					exports['default'] = function (instance) {
						instance.registerHelper('with', function (context, options) {
							if (_utils.isFunction(context)) {
								context = context.call(this);
							}

							var fn = options.fn;

							if (!_utils.isEmpty(context)) {
								var data = options.data;
								if (options.data && options.ids) {
									data = _utils.createFrame(options.data);
									data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
								}

								return fn(context, {
									data: data,
									blockParams: _utils.blockParams([context], [data && data.contextPath])
								});
							} else {
								return options.inverse(this);
							}
						});
					};

					module.exports = exports['default'];

					/***/
				},
				/* 15 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;
					exports.registerDefaultDecorators = registerDefaultDecorators;

					var _decoratorsInline = __webpack_require__(16);

					var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

					function registerDefaultDecorators(instance) {
						_decoratorsInline2['default'](instance);
					}

					/***/
				},
				/* 16 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					exports.__esModule = true;

					var _utils = __webpack_require__(5);

					exports['default'] = function (instance) {
						instance.registerDecorator('inline', function (fn, props, container, options) {
							var ret = fn;
							if (!props.partials) {
								props.partials = {};
								ret = function (context, options) {
									// Create a new partials stack frame prior to exec.
									var original = container.partials;
									container.partials = _utils.extend({}, original, props.partials);
									var ret = fn(context, options);
									container.partials = original;
									return ret;
								};
							}

							props.partials[options.args[0]] = options.fn;

							return ret;
						});
					};

					module.exports = exports['default'];

					/***/
				},
				/* 17 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					exports.__esModule = true;

					var _utils = __webpack_require__(5);

					var logger = {
						methodMap: ['debug', 'info', 'warn', 'error'],
						level: 'info',

						// Maps a given level value to the `methodMap` indexes above.
						lookupLevel: function lookupLevel(level) {
							if (typeof level === 'string') {
								var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
								if (levelMap >= 0) {
									level = levelMap;
								} else {
									level = parseInt(level, 10);
								}
							}

							return level;
						},

						// Can be overridden in the host environment
						log: function log(level) {
							level = logger.lookupLevel(level);

							if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
								var method = logger.methodMap[level];
								if (!console[method]) {
									// eslint-disable-line no-console
									method = 'log';
								}

								for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
									message[_key - 1] = arguments[_key];
								}

								console[method].apply(console, message); // eslint-disable-line no-console
							}
						}
					};

					exports['default'] = logger;
					module.exports = exports['default'];

					/***/
				},
				/* 18 */
				/***/function (module, exports) {

					// Build out our basic SafeString type
					'use strict';

					exports.__esModule = true;
					function SafeString(string) {
						this.string = string;
					}

					SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
						return '' + this.string;
					};

					exports['default'] = SafeString;
					module.exports = exports['default'];

					/***/
				},
				/* 19 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireWildcard = __webpack_require__(3)['default'];

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;
					exports.checkRevision = checkRevision;
					exports.template = template;
					exports.wrapProgram = wrapProgram;
					exports.resolvePartial = resolvePartial;
					exports.invokePartial = invokePartial;
					exports.noop = noop;

					var _utils = __webpack_require__(5);

					var Utils = _interopRequireWildcard(_utils);

					var _exception = __webpack_require__(6);

					var _exception2 = _interopRequireDefault(_exception);

					var _base = __webpack_require__(4);

					function checkRevision(compilerInfo) {
						var compilerRevision = compilerInfo && compilerInfo[0] || 1,
						    currentRevision = _base.COMPILER_REVISION;

						if (compilerRevision !== currentRevision) {
							if (compilerRevision < currentRevision) {
								var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
								    compilerVersions = _base.REVISION_CHANGES[compilerRevision];
								throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
							} else {
								// Use the embedded version info since the runtime doesn't know about this revision yet
								throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
							}
						}
					}

					function template(templateSpec, env) {
						/* istanbul ignore next */
						if (!env) {
							throw new _exception2['default']('No environment passed to template');
						}
						if (!templateSpec || !templateSpec.main) {
							throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
						}

						templateSpec.main.decorator = templateSpec.main_d;

						// Note: Using env.VM references rather than local var references throughout this section to allow
						// for external users to override these as psuedo-supported APIs.
						env.VM.checkRevision(templateSpec.compiler);

						function invokePartialWrapper(partial, context, options) {
							if (options.hash) {
								context = Utils.extend({}, context, options.hash);
								if (options.ids) {
									options.ids[0] = true;
								}
							}

							partial = env.VM.resolvePartial.call(this, partial, context, options);
							var result = env.VM.invokePartial.call(this, partial, context, options);

							if (result == null && env.compile) {
								options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
								result = options.partials[options.name](context, options);
							}
							if (result != null) {
								if (options.indent) {
									var lines = result.split('\n');
									for (var i = 0, l = lines.length; i < l; i++) {
										if (!lines[i] && i + 1 === l) {
											break;
										}

										lines[i] = options.indent + lines[i];
									}
									result = lines.join('\n');
								}
								return result;
							} else {
								throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
							}
						}

						// Just add water
						var container = {
							strict: function strict(obj, name) {
								if (!(name in obj)) {
									throw new _exception2['default']('"' + name + '" not defined in ' + obj);
								}
								return obj[name];
							},
							lookup: function lookup(depths, name) {
								var len = depths.length;
								for (var i = 0; i < len; i++) {
									if (depths[i] && depths[i][name] != null) {
										return depths[i][name];
									}
								}
							},
							lambda: function lambda(current, context) {
								return typeof current === 'function' ? current.call(context) : current;
							},

							escapeExpression: Utils.escapeExpression,
							invokePartial: invokePartialWrapper,

							fn: function fn(i) {
								var ret = templateSpec[i];
								ret.decorator = templateSpec[i + '_d'];
								return ret;
							},

							programs: [],
							program: function program(i, data, declaredBlockParams, blockParams, depths) {
								var programWrapper = this.programs[i],
								    fn = this.fn(i);
								if (data || depths || blockParams || declaredBlockParams) {
									programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
								} else if (!programWrapper) {
									programWrapper = this.programs[i] = wrapProgram(this, i, fn);
								}
								return programWrapper;
							},

							data: function data(value, depth) {
								while (value && depth--) {
									value = value._parent;
								}
								return value;
							},
							merge: function merge(param, common) {
								var obj = param || common;

								if (param && common && param !== common) {
									obj = Utils.extend({}, common, param);
								}

								return obj;
							},

							noop: env.VM.noop,
							compilerInfo: templateSpec.compiler
						};

						function ret(context) {
							var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

							var data = options.data;

							ret._setup(options);
							if (!options.partial && templateSpec.useData) {
								data = initData(context, data);
							}
							var depths = undefined,
							    blockParams = templateSpec.useBlockParams ? [] : undefined;
							if (templateSpec.useDepths) {
								if (options.depths) {
									depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
								} else {
									depths = [context];
								}
							}

							function main(context /*, options*/) {
								return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
							}
							main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
							return main(context, options);
						}
						ret.isTop = true;

						ret._setup = function (options) {
							if (!options.partial) {
								container.helpers = container.merge(options.helpers, env.helpers);

								if (templateSpec.usePartial) {
									container.partials = container.merge(options.partials, env.partials);
								}
								if (templateSpec.usePartial || templateSpec.useDecorators) {
									container.decorators = container.merge(options.decorators, env.decorators);
								}
							} else {
								container.helpers = options.helpers;
								container.partials = options.partials;
								container.decorators = options.decorators;
							}
						};

						ret._child = function (i, data, blockParams, depths) {
							if (templateSpec.useBlockParams && !blockParams) {
								throw new _exception2['default']('must pass block params');
							}
							if (templateSpec.useDepths && !depths) {
								throw new _exception2['default']('must pass parent depths');
							}

							return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
						};
						return ret;
					}

					function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
						function prog(context) {
							var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

							var currentDepths = depths;
							if (depths && context !== depths[0]) {
								currentDepths = [context].concat(depths);
							}

							return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
						}

						prog = executeDecorators(fn, prog, container, depths, data, blockParams);

						prog.program = i;
						prog.depth = depths ? depths.length : 0;
						prog.blockParams = declaredBlockParams || 0;
						return prog;
					}

					function resolvePartial(partial, context, options) {
						if (!partial) {
							if (options.name === '@partial-block') {
								partial = options.data['partial-block'];
							} else {
								partial = options.partials[options.name];
							}
						} else if (!partial.call && !options.name) {
							// This is a dynamic partial that returned a string
							options.name = partial;
							partial = options.partials[partial];
						}
						return partial;
					}

					function invokePartial(partial, context, options) {
						options.partial = true;
						if (options.ids) {
							options.data.contextPath = options.ids[0] || options.data.contextPath;
						}

						var partialBlock = undefined;
						if (options.fn && options.fn !== noop) {
							options.data = _base.createFrame(options.data);
							partialBlock = options.data['partial-block'] = options.fn;

							if (partialBlock.partials) {
								options.partials = Utils.extend({}, options.partials, partialBlock.partials);
							}
						}

						if (partial === undefined && partialBlock) {
							partial = partialBlock;
						}

						if (partial === undefined) {
							throw new _exception2['default']('The partial ' + options.name + ' could not be found');
						} else if (partial instanceof Function) {
							return partial(context, options);
						}
					}

					function noop() {
						return '';
					}

					function initData(context, data) {
						if (!data || !('root' in data)) {
							data = data ? _base.createFrame(data) : {};
							data.root = context;
						}
						return data;
					}

					function executeDecorators(fn, prog, container, depths, data, blockParams) {
						if (fn.decorator) {
							var props = {};
							prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
							Utils.extend(prog, props);
						}
						return prog;
					}

					/***/
				},
				/* 20 */
				/***/function (module, exports) {

					/* WEBPACK VAR INJECTION */(function (global) {
						/* global window */
						'use strict';

						exports.__esModule = true;

						exports['default'] = function (Handlebars) {
							/* istanbul ignore next */
							var root = typeof global !== 'undefined' ? global : window,
							    $Handlebars = root.Handlebars;
							/* istanbul ignore next */
							Handlebars.noConflict = function () {
								if (root.Handlebars === Handlebars) {
									root.Handlebars = $Handlebars;
								}
								return Handlebars;
							};
						};

						module.exports = exports['default'];
						/* WEBPACK VAR INJECTION */
					}).call(exports, function () {
						return this;
					}());

					/***/
				},
				/* 21 */
				/***/function (module, exports) {

					'use strict';

					exports.__esModule = true;
					var AST = {
						// Public API used to evaluate derived attributes regarding AST nodes
						helpers: {
							// a mustache is definitely a helper if:
							// * it is an eligible helper, and
							// * it has at least one parameter or hash segment
							helperExpression: function helperExpression(node) {
								return node.type === 'SubExpression' || (node.type === 'MustacheStatement' || node.type === 'BlockStatement') && !!(node.params && node.params.length || node.hash);
							},

							scopedId: function scopedId(path) {
								return (/^\.|this\b/.test(path.original)
								);
							},

							// an ID is simple if it only has one part, and that part is not
							// `..` or `this`.
							simpleId: function simpleId(path) {
								return path.parts.length === 1 && !AST.helpers.scopedId(path) && !path.depth;
							}
						}
					};

					// Must be exported as an object rather than the root of the module as the jison lexer
					// must modify the object to operate properly.
					exports['default'] = AST;
					module.exports = exports['default'];

					/***/
				},
				/* 22 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireDefault = __webpack_require__(1)['default'];

					var _interopRequireWildcard = __webpack_require__(3)['default'];

					exports.__esModule = true;
					exports.parse = parse;

					var _parser = __webpack_require__(23);

					var _parser2 = _interopRequireDefault(_parser);

					var _whitespaceControl = __webpack_require__(24);

					var _whitespaceControl2 = _interopRequireDefault(_whitespaceControl);

					var _helpers = __webpack_require__(26);

					var Helpers = _interopRequireWildcard(_helpers);

					var _utils = __webpack_require__(5);

					exports.parser = _parser2['default'];

					var yy = {};
					_utils.extend(yy, Helpers);

					function parse(input, options) {
						// Just return if an already-compiled AST was passed in.
						if (input.type === 'Program') {
							return input;
						}

						_parser2['default'].yy = yy;

						// Altering the shared object here, but this is ok as parser is a sync operation
						yy.locInfo = function (locInfo) {
							return new yy.SourceLocation(options && options.srcName, locInfo);
						};

						var strip = new _whitespaceControl2['default'](options);
						return strip.accept(_parser2['default'].parse(input));
					}

					/***/
				},
				/* 23 */
				/***/function (module, exports) {

					/* istanbul ignore next */
					/* Jison generated parser */
					"use strict";

					var handlebars = function () {
						var parser = { trace: function trace() {},
							yy: {},
							symbols_: { "error": 2, "root": 3, "program": 4, "EOF": 5, "program_repetition0": 6, "statement": 7, "mustache": 8, "block": 9, "rawBlock": 10, "partial": 11, "partialBlock": 12, "content": 13, "COMMENT": 14, "CONTENT": 15, "openRawBlock": 16, "rawBlock_repetition_plus0": 17, "END_RAW_BLOCK": 18, "OPEN_RAW_BLOCK": 19, "helperName": 20, "openRawBlock_repetition0": 21, "openRawBlock_option0": 22, "CLOSE_RAW_BLOCK": 23, "openBlock": 24, "block_option0": 25, "closeBlock": 26, "openInverse": 27, "block_option1": 28, "OPEN_BLOCK": 29, "openBlock_repetition0": 30, "openBlock_option0": 31, "openBlock_option1": 32, "CLOSE": 33, "OPEN_INVERSE": 34, "openInverse_repetition0": 35, "openInverse_option0": 36, "openInverse_option1": 37, "openInverseChain": 38, "OPEN_INVERSE_CHAIN": 39, "openInverseChain_repetition0": 40, "openInverseChain_option0": 41, "openInverseChain_option1": 42, "inverseAndProgram": 43, "INVERSE": 44, "inverseChain": 45, "inverseChain_option0": 46, "OPEN_ENDBLOCK": 47, "OPEN": 48, "mustache_repetition0": 49, "mustache_option0": 50, "OPEN_UNESCAPED": 51, "mustache_repetition1": 52, "mustache_option1": 53, "CLOSE_UNESCAPED": 54, "OPEN_PARTIAL": 55, "partialName": 56, "partial_repetition0": 57, "partial_option0": 58, "openPartialBlock": 59, "OPEN_PARTIAL_BLOCK": 60, "openPartialBlock_repetition0": 61, "openPartialBlock_option0": 62, "param": 63, "sexpr": 64, "OPEN_SEXPR": 65, "sexpr_repetition0": 66, "sexpr_option0": 67, "CLOSE_SEXPR": 68, "hash": 69, "hash_repetition_plus0": 70, "hashSegment": 71, "ID": 72, "EQUALS": 73, "blockParams": 74, "OPEN_BLOCK_PARAMS": 75, "blockParams_repetition_plus0": 76, "CLOSE_BLOCK_PARAMS": 77, "path": 78, "dataName": 79, "STRING": 80, "NUMBER": 81, "BOOLEAN": 82, "UNDEFINED": 83, "NULL": 84, "DATA": 85, "pathSegments": 86, "SEP": 87, "$accept": 0, "$end": 1 },
							terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
							productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 1], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
							performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$
							/**/) {

								var $0 = $$.length - 1;
								switch (yystate) {
									case 1:
										return $$[$0 - 1];
										break;
									case 2:
										this.$ = yy.prepareProgram($$[$0]);
										break;
									case 3:
										this.$ = $$[$0];
										break;
									case 4:
										this.$ = $$[$0];
										break;
									case 5:
										this.$ = $$[$0];
										break;
									case 6:
										this.$ = $$[$0];
										break;
									case 7:
										this.$ = $$[$0];
										break;
									case 8:
										this.$ = $$[$0];
										break;
									case 9:
										this.$ = {
											type: 'CommentStatement',
											value: yy.stripComment($$[$0]),
											strip: yy.stripFlags($$[$0], $$[$0]),
											loc: yy.locInfo(this._$)
										};

										break;
									case 10:
										this.$ = {
											type: 'ContentStatement',
											original: $$[$0],
											value: $$[$0],
											loc: yy.locInfo(this._$)
										};

										break;
									case 11:
										this.$ = yy.prepareRawBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
										break;
									case 12:
										this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1] };
										break;
									case 13:
										this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], false, this._$);
										break;
									case 14:
										this.$ = yy.prepareBlock($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0], true, this._$);
										break;
									case 15:
										this.$ = { open: $$[$0 - 5], path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
										break;
									case 16:
										this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
										break;
									case 17:
										this.$ = { path: $$[$0 - 4], params: $$[$0 - 3], hash: $$[$0 - 2], blockParams: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 5], $$[$0]) };
										break;
									case 18:
										this.$ = { strip: yy.stripFlags($$[$0 - 1], $$[$0 - 1]), program: $$[$0] };
										break;
									case 19:
										var inverse = yy.prepareBlock($$[$0 - 2], $$[$0 - 1], $$[$0], $$[$0], false, this._$),
										    program = yy.prepareProgram([inverse], $$[$0 - 1].loc);
										program.chained = true;

										this.$ = { strip: $$[$0 - 2].strip, program: program, chain: true };

										break;
									case 20:
										this.$ = $$[$0];
										break;
									case 21:
										this.$ = { path: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 2], $$[$0]) };
										break;
									case 22:
										this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
										break;
									case 23:
										this.$ = yy.prepareMustache($$[$0 - 3], $$[$0 - 2], $$[$0 - 1], $$[$0 - 4], yy.stripFlags($$[$0 - 4], $$[$0]), this._$);
										break;
									case 24:
										this.$ = {
											type: 'PartialStatement',
											name: $$[$0 - 3],
											params: $$[$0 - 2],
											hash: $$[$0 - 1],
											indent: '',
											strip: yy.stripFlags($$[$0 - 4], $$[$0]),
											loc: yy.locInfo(this._$)
										};

										break;
									case 25:
										this.$ = yy.preparePartialBlock($$[$0 - 2], $$[$0 - 1], $$[$0], this._$);
										break;
									case 26:
										this.$ = { path: $$[$0 - 3], params: $$[$0 - 2], hash: $$[$0 - 1], strip: yy.stripFlags($$[$0 - 4], $$[$0]) };
										break;
									case 27:
										this.$ = $$[$0];
										break;
									case 28:
										this.$ = $$[$0];
										break;
									case 29:
										this.$ = {
											type: 'SubExpression',
											path: $$[$0 - 3],
											params: $$[$0 - 2],
											hash: $$[$0 - 1],
											loc: yy.locInfo(this._$)
										};

										break;
									case 30:
										this.$ = { type: 'Hash', pairs: $$[$0], loc: yy.locInfo(this._$) };
										break;
									case 31:
										this.$ = { type: 'HashPair', key: yy.id($$[$0 - 2]), value: $$[$0], loc: yy.locInfo(this._$) };
										break;
									case 32:
										this.$ = yy.id($$[$0 - 1]);
										break;
									case 33:
										this.$ = $$[$0];
										break;
									case 34:
										this.$ = $$[$0];
										break;
									case 35:
										this.$ = { type: 'StringLiteral', value: $$[$0], original: $$[$0], loc: yy.locInfo(this._$) };
										break;
									case 36:
										this.$ = { type: 'NumberLiteral', value: Number($$[$0]), original: Number($$[$0]), loc: yy.locInfo(this._$) };
										break;
									case 37:
										this.$ = { type: 'BooleanLiteral', value: $$[$0] === 'true', original: $$[$0] === 'true', loc: yy.locInfo(this._$) };
										break;
									case 38:
										this.$ = { type: 'UndefinedLiteral', original: undefined, value: undefined, loc: yy.locInfo(this._$) };
										break;
									case 39:
										this.$ = { type: 'NullLiteral', original: null, value: null, loc: yy.locInfo(this._$) };
										break;
									case 40:
										this.$ = $$[$0];
										break;
									case 41:
										this.$ = $$[$0];
										break;
									case 42:
										this.$ = yy.preparePath(true, $$[$0], this._$);
										break;
									case 43:
										this.$ = yy.preparePath(false, $$[$0], this._$);
										break;
									case 44:
										$$[$0 - 2].push({ part: yy.id($$[$0]), original: $$[$0], separator: $$[$0 - 1] });this.$ = $$[$0 - 2];
										break;
									case 45:
										this.$ = [{ part: yy.id($$[$0]), original: $$[$0] }];
										break;
									case 46:
										this.$ = [];
										break;
									case 47:
										$$[$0 - 1].push($$[$0]);
										break;
									case 48:
										this.$ = [$$[$0]];
										break;
									case 49:
										$$[$0 - 1].push($$[$0]);
										break;
									case 50:
										this.$ = [];
										break;
									case 51:
										$$[$0 - 1].push($$[$0]);
										break;
									case 58:
										this.$ = [];
										break;
									case 59:
										$$[$0 - 1].push($$[$0]);
										break;
									case 64:
										this.$ = [];
										break;
									case 65:
										$$[$0 - 1].push($$[$0]);
										break;
									case 70:
										this.$ = [];
										break;
									case 71:
										$$[$0 - 1].push($$[$0]);
										break;
									case 78:
										this.$ = [];
										break;
									case 79:
										$$[$0 - 1].push($$[$0]);
										break;
									case 82:
										this.$ = [];
										break;
									case 83:
										$$[$0 - 1].push($$[$0]);
										break;
									case 86:
										this.$ = [];
										break;
									case 87:
										$$[$0 - 1].push($$[$0]);
										break;
									case 90:
										this.$ = [];
										break;
									case 91:
										$$[$0 - 1].push($$[$0]);
										break;
									case 94:
										this.$ = [];
										break;
									case 95:
										$$[$0 - 1].push($$[$0]);
										break;
									case 98:
										this.$ = [$$[$0]];
										break;
									case 99:
										$$[$0 - 1].push($$[$0]);
										break;
									case 100:
										this.$ = [$$[$0]];
										break;
									case 101:
										$$[$0 - 1].push($$[$0]);
										break;
								}
							},
							table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 13: 40, 15: [1, 20], 17: 39 }, { 20: 42, 56: 41, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 45, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 48, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 42, 56: 49, 64: 43, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 50, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 51] }, { 72: [1, 35], 86: 52 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 53, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 54, 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 55, 47: [2, 54] }, { 28: 60, 43: 61, 44: [1, 59], 47: [2, 56] }, { 13: 63, 15: [1, 20], 18: [1, 62] }, { 15: [2, 48], 18: [2, 48] }, { 33: [2, 86], 57: 64, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 65, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 66, 47: [1, 67] }, { 30: 68, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 69, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 70, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 71, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 75, 33: [2, 80], 50: 72, 63: 73, 64: 76, 65: [1, 44], 69: 74, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 80] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 51] }, { 20: 75, 53: 81, 54: [2, 84], 63: 82, 64: 76, 65: [1, 44], 69: 83, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 84, 47: [1, 67] }, { 47: [2, 55] }, { 4: 85, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 86, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 87, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 88, 47: [1, 67] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 75, 33: [2, 88], 58: 89, 63: 90, 64: 76, 65: [1, 44], 69: 91, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 92, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 93, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 31: 94, 33: [2, 60], 63: 95, 64: 76, 65: [1, 44], 69: 96, 70: 77, 71: 78, 72: [1, 79], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 66], 36: 97, 63: 98, 64: 76, 65: [1, 44], 69: 99, 70: 77, 71: 78, 72: [1, 79], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 22: 100, 23: [2, 52], 63: 101, 64: 76, 65: [1, 44], 69: 102, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 75, 33: [2, 92], 62: 103, 63: 104, 64: 76, 65: [1, 44], 69: 105, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 106] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 107, 72: [1, 108], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 109], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 110] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 56, 39: [1, 58], 43: 57, 44: [1, 59], 45: 112, 46: 111, 47: [2, 76] }, { 33: [2, 70], 40: 113, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 114] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 75, 63: 116, 64: 76, 65: [1, 44], 67: 115, 68: [2, 96], 69: 117, 70: 77, 71: 78, 72: [1, 79], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 118] }, { 32: 119, 33: [2, 62], 74: 120, 75: [1, 121] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 122, 74: 123, 75: [1, 121] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 124] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 125] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 109] }, { 20: 75, 63: 126, 64: 76, 65: [1, 44], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 75, 33: [2, 72], 41: 127, 63: 128, 64: 76, 65: [1, 44], 69: 129, 70: 77, 71: 78, 72: [1, 79], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 130] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 131] }, { 33: [2, 63] }, { 72: [1, 133], 76: 132 }, { 33: [1, 134] }, { 33: [2, 69] }, { 15: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 135, 74: 136, 75: [1, 121] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 138], 77: [1, 137] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 139] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
							defaultActions: { 4: [2, 1], 55: [2, 55], 57: [2, 20], 61: [2, 57], 74: [2, 81], 83: [2, 85], 87: [2, 18], 91: [2, 89], 102: [2, 53], 105: [2, 93], 111: [2, 19], 112: [2, 77], 117: [2, 97], 120: [2, 63], 123: [2, 69], 124: [2, 12], 136: [2, 75], 137: [2, 32] },
							parseError: function parseError(str, hash) {
								throw new Error(str);
							},
							parse: function parse(input) {
								var self = this,
								    stack = [0],
								    vstack = [null],
								    lstack = [],
								    table = this.table,
								    yytext = "",
								    yylineno = 0,
								    yyleng = 0,
								    recovering = 0,
								    TERROR = 2,
								    EOF = 1;
								this.lexer.setInput(input);
								this.lexer.yy = this.yy;
								this.yy.lexer = this.lexer;
								this.yy.parser = this;
								if (typeof this.lexer.yylloc == "undefined") this.lexer.yylloc = {};
								var yyloc = this.lexer.yylloc;
								lstack.push(yyloc);
								var ranges = this.lexer.options && this.lexer.options.ranges;
								if (typeof this.yy.parseError === "function") this.parseError = this.yy.parseError;
								function popStack(n) {
									stack.length = stack.length - 2 * n;
									vstack.length = vstack.length - n;
									lstack.length = lstack.length - n;
								}
								function lex() {
									var token;
									token = self.lexer.lex() || 1;
									if (typeof token !== "number") {
										token = self.symbols_[token] || token;
									}
									return token;
								}
								var symbol,
								    preErrorSymbol,
								    state,
								    action,
								    a,
								    r,
								    yyval = {},
								    p,
								    len,
								    newState,
								    expected;
								while (true) {
									state = stack[stack.length - 1];
									if (this.defaultActions[state]) {
										action = this.defaultActions[state];
									} else {
										if (symbol === null || typeof symbol == "undefined") {
											symbol = lex();
										}
										action = table[state] && table[state][symbol];
									}
									if (typeof action === "undefined" || !action.length || !action[0]) {
										var errStr = "";
										if (!recovering) {
											expected = [];
											for (p in table[state]) if (this.terminals_[p] && p > 2) {
												expected.push("'" + this.terminals_[p] + "'");
											}
											if (this.lexer.showPosition) {
												errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
											} else {
												errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1 ? "end of input" : "'" + (this.terminals_[symbol] || symbol) + "'");
											}
											this.parseError(errStr, { text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected });
										}
									}
									if (action[0] instanceof Array && action.length > 1) {
										throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
									}
									switch (action[0]) {
										case 1:
											stack.push(symbol);
											vstack.push(this.lexer.yytext);
											lstack.push(this.lexer.yylloc);
											stack.push(action[1]);
											symbol = null;
											if (!preErrorSymbol) {
												yyleng = this.lexer.yyleng;
												yytext = this.lexer.yytext;
												yylineno = this.lexer.yylineno;
												yyloc = this.lexer.yylloc;
												if (recovering > 0) recovering--;
											} else {
												symbol = preErrorSymbol;
												preErrorSymbol = null;
											}
											break;
										case 2:
											len = this.productions_[action[1]][1];
											yyval.$ = vstack[vstack.length - len];
											yyval._$ = { first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column };
											if (ranges) {
												yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
											}
											r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
											if (typeof r !== "undefined") {
												return r;
											}
											if (len) {
												stack = stack.slice(0, -1 * len * 2);
												vstack = vstack.slice(0, -1 * len);
												lstack = lstack.slice(0, -1 * len);
											}
											stack.push(this.productions_[action[1]][0]);
											vstack.push(yyval.$);
											lstack.push(yyval._$);
											newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
											stack.push(newState);
											break;
										case 3:
											return true;
									}
								}
								return true;
							}
						};
						/* Jison generated lexer */
						var lexer = function () {
							var lexer = { EOF: 1,
								parseError: function parseError(str, hash) {
									if (this.yy.parser) {
										this.yy.parser.parseError(str, hash);
									} else {
										throw new Error(str);
									}
								},
								setInput: function setInput(input) {
									this._input = input;
									this._more = this._less = this.done = false;
									this.yylineno = this.yyleng = 0;
									this.yytext = this.matched = this.match = '';
									this.conditionStack = ['INITIAL'];
									this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 };
									if (this.options.ranges) this.yylloc.range = [0, 0];
									this.offset = 0;
									return this;
								},
								input: function input() {
									var ch = this._input[0];
									this.yytext += ch;
									this.yyleng++;
									this.offset++;
									this.match += ch;
									this.matched += ch;
									var lines = ch.match(/(?:\r\n?|\n).*/g);
									if (lines) {
										this.yylineno++;
										this.yylloc.last_line++;
									} else {
										this.yylloc.last_column++;
									}
									if (this.options.ranges) this.yylloc.range[1]++;

									this._input = this._input.slice(1);
									return ch;
								},
								unput: function unput(ch) {
									var len = ch.length;
									var lines = ch.split(/(?:\r\n?|\n)/g);

									this._input = ch + this._input;
									this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
									//this.yyleng -= len;
									this.offset -= len;
									var oldLines = this.match.split(/(?:\r\n?|\n)/g);
									this.match = this.match.substr(0, this.match.length - 1);
									this.matched = this.matched.substr(0, this.matched.length - 1);

									if (lines.length - 1) this.yylineno -= lines.length - 1;
									var r = this.yylloc.range;

									this.yylloc = { first_line: this.yylloc.first_line,
										last_line: this.yylineno + 1,
										first_column: this.yylloc.first_column,
										last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
									};

									if (this.options.ranges) {
										this.yylloc.range = [r[0], r[0] + this.yyleng - len];
									}
									return this;
								},
								more: function more() {
									this._more = true;
									return this;
								},
								less: function less(n) {
									this.unput(this.match.slice(n));
								},
								pastInput: function pastInput() {
									var past = this.matched.substr(0, this.matched.length - this.match.length);
									return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, "");
								},
								upcomingInput: function upcomingInput() {
									var next = this.match;
									if (next.length < 20) {
										next += this._input.substr(0, 20 - next.length);
									}
									return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
								},
								showPosition: function showPosition() {
									var pre = this.pastInput();
									var c = new Array(pre.length + 1).join("-");
									return pre + this.upcomingInput() + "\n" + c + "^";
								},
								next: function next() {
									if (this.done) {
										return this.EOF;
									}
									if (!this._input) this.done = true;

									var token, match, tempMatch, index, col, lines;
									if (!this._more) {
										this.yytext = '';
										this.match = '';
									}
									var rules = this._currentRules();
									for (var i = 0; i < rules.length; i++) {
										tempMatch = this._input.match(this.rules[rules[i]]);
										if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
											match = tempMatch;
											index = i;
											if (!this.options.flex) break;
										}
									}
									if (match) {
										lines = match[0].match(/(?:\r\n?|\n).*/g);
										if (lines) this.yylineno += lines.length;
										this.yylloc = { first_line: this.yylloc.last_line,
											last_line: this.yylineno + 1,
											first_column: this.yylloc.last_column,
											last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length };
										this.yytext += match[0];
										this.match += match[0];
										this.matches = match;
										this.yyleng = this.yytext.length;
										if (this.options.ranges) {
											this.yylloc.range = [this.offset, this.offset += this.yyleng];
										}
										this._more = false;
										this._input = this._input.slice(match[0].length);
										this.matched += match[0];
										token = this.performAction.call(this, this.yy, this, rules[index], this.conditionStack[this.conditionStack.length - 1]);
										if (this.done && this._input) this.done = false;
										if (token) return token;else return;
									}
									if (this._input === "") {
										return this.EOF;
									} else {
										return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), { text: "", token: null, line: this.yylineno });
									}
								},
								lex: function lex() {
									var r = this.next();
									if (typeof r !== 'undefined') {
										return r;
									} else {
										return this.lex();
									}
								},
								begin: function begin(condition) {
									this.conditionStack.push(condition);
								},
								popState: function popState() {
									return this.conditionStack.pop();
								},
								_currentRules: function _currentRules() {
									return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
								},
								topState: function topState() {
									return this.conditionStack[this.conditionStack.length - 2];
								},
								pushState: function begin(condition) {
									this.begin(condition);
								} };
							lexer.options = {};
							lexer.performAction = function anonymous(yy, yy_, $avoiding_name_collisions, YY_START
							/**/) {

								function strip(start, end) {
									return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng - end);
								}

								var YYSTATE = YY_START;
								switch ($avoiding_name_collisions) {
									case 0:
										if (yy_.yytext.slice(-2) === "\\\\") {
											strip(0, 1);
											this.begin("mu");
										} else if (yy_.yytext.slice(-1) === "\\") {
											strip(0, 1);
											this.begin("emu");
										} else {
											this.begin("mu");
										}
										if (yy_.yytext) return 15;

										break;
									case 1:
										return 15;
										break;
									case 2:
										this.popState();
										return 15;

										break;
									case 3:
										this.begin('raw');return 15;
										break;
									case 4:
										this.popState();
										// Should be using `this.topState()` below, but it currently
										// returns the second top instead of the first top. Opened an
										// issue about it at https://github.com/zaach/jison/issues/291
										if (this.conditionStack[this.conditionStack.length - 1] === 'raw') {
											return 15;
										} else {
											yy_.yytext = yy_.yytext.substr(5, yy_.yyleng - 9);
											return 'END_RAW_BLOCK';
										}

										break;
									case 5:
										return 15;
										break;
									case 6:
										this.popState();
										return 14;

										break;
									case 7:
										return 65;
										break;
									case 8:
										return 68;
										break;
									case 9:
										return 19;
										break;
									case 10:
										this.popState();
										this.begin('raw');
										return 23;

										break;
									case 11:
										return 55;
										break;
									case 12:
										return 60;
										break;
									case 13:
										return 29;
										break;
									case 14:
										return 47;
										break;
									case 15:
										this.popState();return 44;
										break;
									case 16:
										this.popState();return 44;
										break;
									case 17:
										return 34;
										break;
									case 18:
										return 39;
										break;
									case 19:
										return 51;
										break;
									case 20:
										return 48;
										break;
									case 21:
										this.unput(yy_.yytext);
										this.popState();
										this.begin('com');

										break;
									case 22:
										this.popState();
										return 14;

										break;
									case 23:
										return 48;
										break;
									case 24:
										return 73;
										break;
									case 25:
										return 72;
										break;
									case 26:
										return 72;
										break;
									case 27:
										return 87;
										break;
									case 28:
										// ignore whitespace
										break;
									case 29:
										this.popState();return 54;
										break;
									case 30:
										this.popState();return 33;
										break;
									case 31:
										yy_.yytext = strip(1, 2).replace(/\\"/g, '"');return 80;
										break;
									case 32:
										yy_.yytext = strip(1, 2).replace(/\\'/g, "'");return 80;
										break;
									case 33:
										return 85;
										break;
									case 34:
										return 82;
										break;
									case 35:
										return 82;
										break;
									case 36:
										return 83;
										break;
									case 37:
										return 84;
										break;
									case 38:
										return 81;
										break;
									case 39:
										return 75;
										break;
									case 40:
										return 77;
										break;
									case 41:
										return 72;
										break;
									case 42:
										yy_.yytext = yy_.yytext.replace(/\\([\\\]])/g, '$1');return 72;
										break;
									case 43:
										return 'INVALID';
										break;
									case 44:
										return 5;
										break;
								}
							};
							lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^\/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/];
							lexer.conditions = { "mu": { "rules": [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], "inclusive": false }, "emu": { "rules": [2], "inclusive": false }, "com": { "rules": [6], "inclusive": false }, "raw": { "rules": [3, 4, 5], "inclusive": false }, "INITIAL": { "rules": [0, 1, 44], "inclusive": true } };
							return lexer;
						}();
						parser.lexer = lexer;
						function Parser() {
							this.yy = {};
						}Parser.prototype = parser;parser.Parser = Parser;
						return new Parser();
					}();exports.__esModule = true;
					exports['default'] = handlebars;

					/***/
				},
				/* 24 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;

					var _visitor = __webpack_require__(25);

					var _visitor2 = _interopRequireDefault(_visitor);

					function WhitespaceControl() {
						var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

						this.options = options;
					}
					WhitespaceControl.prototype = new _visitor2['default']();

					WhitespaceControl.prototype.Program = function (program) {
						var doStandalone = !this.options.ignoreStandalone;

						var isRoot = !this.isRootSeen;
						this.isRootSeen = true;

						var body = program.body;
						for (var i = 0, l = body.length; i < l; i++) {
							var current = body[i],
							    strip = this.accept(current);

							if (!strip) {
								continue;
							}

							var _isPrevWhitespace = isPrevWhitespace(body, i, isRoot),
							    _isNextWhitespace = isNextWhitespace(body, i, isRoot),
							    openStandalone = strip.openStandalone && _isPrevWhitespace,
							    closeStandalone = strip.closeStandalone && _isNextWhitespace,
							    inlineStandalone = strip.inlineStandalone && _isPrevWhitespace && _isNextWhitespace;

							if (strip.close) {
								omitRight(body, i, true);
							}
							if (strip.open) {
								omitLeft(body, i, true);
							}

							if (doStandalone && inlineStandalone) {
								omitRight(body, i);

								if (omitLeft(body, i)) {
									// If we are on a standalone node, save the indent info for partials
									if (current.type === 'PartialStatement') {
										// Pull out the whitespace from the final line
										current.indent = /([ \t]+$)/.exec(body[i - 1].original)[1];
									}
								}
							}
							if (doStandalone && openStandalone) {
								omitRight((current.program || current.inverse).body);

								// Strip out the previous content node if it's whitespace only
								omitLeft(body, i);
							}
							if (doStandalone && closeStandalone) {
								// Always strip the next node
								omitRight(body, i);

								omitLeft((current.inverse || current.program).body);
							}
						}

						return program;
					};

					WhitespaceControl.prototype.BlockStatement = WhitespaceControl.prototype.DecoratorBlock = WhitespaceControl.prototype.PartialBlockStatement = function (block) {
						this.accept(block.program);
						this.accept(block.inverse);

						// Find the inverse program that is involed with whitespace stripping.
						var program = block.program || block.inverse,
						    inverse = block.program && block.inverse,
						    firstInverse = inverse,
						    lastInverse = inverse;

						if (inverse && inverse.chained) {
							firstInverse = inverse.body[0].program;

							// Walk the inverse chain to find the last inverse that is actually in the chain.
							while (lastInverse.chained) {
								lastInverse = lastInverse.body[lastInverse.body.length - 1].program;
							}
						}

						var strip = {
							open: block.openStrip.open,
							close: block.closeStrip.close,

							// Determine the standalone candiacy. Basically flag our content as being possibly standalone
							// so our parent can determine if we actually are standalone
							openStandalone: isNextWhitespace(program.body),
							closeStandalone: isPrevWhitespace((firstInverse || program).body)
						};

						if (block.openStrip.close) {
							omitRight(program.body, null, true);
						}

						if (inverse) {
							var inverseStrip = block.inverseStrip;

							if (inverseStrip.open) {
								omitLeft(program.body, null, true);
							}

							if (inverseStrip.close) {
								omitRight(firstInverse.body, null, true);
							}
							if (block.closeStrip.open) {
								omitLeft(lastInverse.body, null, true);
							}

							// Find standalone else statments
							if (!this.options.ignoreStandalone && isPrevWhitespace(program.body) && isNextWhitespace(firstInverse.body)) {
								omitLeft(program.body);
								omitRight(firstInverse.body);
							}
						} else if (block.closeStrip.open) {
							omitLeft(program.body, null, true);
						}

						return strip;
					};

					WhitespaceControl.prototype.Decorator = WhitespaceControl.prototype.MustacheStatement = function (mustache) {
						return mustache.strip;
					};

					WhitespaceControl.prototype.PartialStatement = WhitespaceControl.prototype.CommentStatement = function (node) {
						/* istanbul ignore next */
						var strip = node.strip || {};
						return {
							inlineStandalone: true,
							open: strip.open,
							close: strip.close
						};
					};

					function isPrevWhitespace(body, i, isRoot) {
						if (i === undefined) {
							i = body.length;
						}

						// Nodes that end with newlines are considered whitespace (but are special
						// cased for strip operations)
						var prev = body[i - 1],
						    sibling = body[i - 2];
						if (!prev) {
							return isRoot;
						}

						if (prev.type === 'ContentStatement') {
							return (sibling || !isRoot ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(prev.original);
						}
					}
					function isNextWhitespace(body, i, isRoot) {
						if (i === undefined) {
							i = -1;
						}

						var next = body[i + 1],
						    sibling = body[i + 2];
						if (!next) {
							return isRoot;
						}

						if (next.type === 'ContentStatement') {
							return (sibling || !isRoot ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(next.original);
						}
					}

					// Marks the node to the right of the position as omitted.
					// I.e. {{foo}}' ' will mark the ' ' node as omitted.
					//
					// If i is undefined, then the first child will be marked as such.
					//
					// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
					// content is met.
					function omitRight(body, i, multiple) {
						var current = body[i == null ? 0 : i + 1];
						if (!current || current.type !== 'ContentStatement' || !multiple && current.rightStripped) {
							return;
						}

						var original = current.value;
						current.value = current.value.replace(multiple ? /^\s+/ : /^[ \t]*\r?\n?/, '');
						current.rightStripped = current.value !== original;
					}

					// Marks the node to the left of the position as omitted.
					// I.e. ' '{{foo}} will mark the ' ' node as omitted.
					//
					// If i is undefined then the last child will be marked as such.
					//
					// If mulitple is truthy then all whitespace will be stripped out until non-whitespace
					// content is met.
					function omitLeft(body, i, multiple) {
						var current = body[i == null ? body.length - 1 : i - 1];
						if (!current || current.type !== 'ContentStatement' || !multiple && current.leftStripped) {
							return;
						}

						// We omit the last node if it's whitespace only and not preceeded by a non-content node.
						var original = current.value;
						current.value = current.value.replace(multiple ? /\s+$/ : /[ \t]+$/, '');
						current.leftStripped = current.value !== original;
						return current.leftStripped;
					}

					exports['default'] = WhitespaceControl;
					module.exports = exports['default'];

					/***/
				},
				/* 25 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;

					var _exception = __webpack_require__(6);

					var _exception2 = _interopRequireDefault(_exception);

					function Visitor() {
						this.parents = [];
					}

					Visitor.prototype = {
						constructor: Visitor,
						mutating: false,

						// Visits a given value. If mutating, will replace the value if necessary.
						acceptKey: function acceptKey(node, name) {
							var value = this.accept(node[name]);
							if (this.mutating) {
								// Hacky sanity check: This may have a few false positives for type for the helper
								// methods but will generally do the right thing without a lot of overhead.
								if (value && !Visitor.prototype[value.type]) {
									throw new _exception2['default']('Unexpected node type "' + value.type + '" found when accepting ' + name + ' on ' + node.type);
								}
								node[name] = value;
							}
						},

						// Performs an accept operation with added sanity check to ensure
						// required keys are not removed.
						acceptRequired: function acceptRequired(node, name) {
							this.acceptKey(node, name);

							if (!node[name]) {
								throw new _exception2['default'](node.type + ' requires ' + name);
							}
						},

						// Traverses a given array. If mutating, empty respnses will be removed
						// for child elements.
						acceptArray: function acceptArray(array) {
							for (var i = 0, l = array.length; i < l; i++) {
								this.acceptKey(array, i);

								if (!array[i]) {
									array.splice(i, 1);
									i--;
									l--;
								}
							}
						},

						accept: function accept(object) {
							if (!object) {
								return;
							}

							/* istanbul ignore next: Sanity code */
							if (!this[object.type]) {
								throw new _exception2['default']('Unknown type: ' + object.type, object);
							}

							if (this.current) {
								this.parents.unshift(this.current);
							}
							this.current = object;

							var ret = this[object.type](object);

							this.current = this.parents.shift();

							if (!this.mutating || ret) {
								return ret;
							} else if (ret !== false) {
								return object;
							}
						},

						Program: function Program(program) {
							this.acceptArray(program.body);
						},

						MustacheStatement: visitSubExpression,
						Decorator: visitSubExpression,

						BlockStatement: visitBlock,
						DecoratorBlock: visitBlock,

						PartialStatement: visitPartial,
						PartialBlockStatement: function PartialBlockStatement(partial) {
							visitPartial.call(this, partial);

							this.acceptKey(partial, 'program');
						},

						ContentStatement: function ContentStatement() /* content */{},
						CommentStatement: function CommentStatement() /* comment */{},

						SubExpression: visitSubExpression,

						PathExpression: function PathExpression() /* path */{},

						StringLiteral: function StringLiteral() /* string */{},
						NumberLiteral: function NumberLiteral() /* number */{},
						BooleanLiteral: function BooleanLiteral() /* bool */{},
						UndefinedLiteral: function UndefinedLiteral() /* literal */{},
						NullLiteral: function NullLiteral() /* literal */{},

						Hash: function Hash(hash) {
							this.acceptArray(hash.pairs);
						},
						HashPair: function HashPair(pair) {
							this.acceptRequired(pair, 'value');
						}
					};

					function visitSubExpression(mustache) {
						this.acceptRequired(mustache, 'path');
						this.acceptArray(mustache.params);
						this.acceptKey(mustache, 'hash');
					}
					function visitBlock(block) {
						visitSubExpression.call(this, block);

						this.acceptKey(block, 'program');
						this.acceptKey(block, 'inverse');
					}
					function visitPartial(partial) {
						this.acceptRequired(partial, 'name');
						this.acceptArray(partial.params);
						this.acceptKey(partial, 'hash');
					}

					exports['default'] = Visitor;
					module.exports = exports['default'];

					/***/
				},
				/* 26 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;
					exports.SourceLocation = SourceLocation;
					exports.id = id;
					exports.stripFlags = stripFlags;
					exports.stripComment = stripComment;
					exports.preparePath = preparePath;
					exports.prepareMustache = prepareMustache;
					exports.prepareRawBlock = prepareRawBlock;
					exports.prepareBlock = prepareBlock;
					exports.prepareProgram = prepareProgram;
					exports.preparePartialBlock = preparePartialBlock;

					var _exception = __webpack_require__(6);

					var _exception2 = _interopRequireDefault(_exception);

					function validateClose(open, close) {
						close = close.path ? close.path.original : close;

						if (open.path.original !== close) {
							var errorNode = { loc: open.path.loc };

							throw new _exception2['default'](open.path.original + " doesn't match " + close, errorNode);
						}
					}

					function SourceLocation(source, locInfo) {
						this.source = source;
						this.start = {
							line: locInfo.first_line,
							column: locInfo.first_column
						};
						this.end = {
							line: locInfo.last_line,
							column: locInfo.last_column
						};
					}

					function id(token) {
						if (/^\[.*\]$/.test(token)) {
							return token.substr(1, token.length - 2);
						} else {
							return token;
						}
					}

					function stripFlags(open, close) {
						return {
							open: open.charAt(2) === '~',
							close: close.charAt(close.length - 3) === '~'
						};
					}

					function stripComment(comment) {
						return comment.replace(/^\{\{~?\!-?-?/, '').replace(/-?-?~?\}\}$/, '');
					}

					function preparePath(data, parts, loc) {
						loc = this.locInfo(loc);

						var original = data ? '@' : '',
						    dig = [],
						    depth = 0,
						    depthString = '';

						for (var i = 0, l = parts.length; i < l; i++) {
							var part = parts[i].part,


							// If we have [] syntax then we do not treat path references as operators,
							// i.e. foo.[this] resolves to approximately context.foo['this']
							isLiteral = parts[i].original !== part;
							original += (parts[i].separator || '') + part;

							if (!isLiteral && (part === '..' || part === '.' || part === 'this')) {
								if (dig.length > 0) {
									throw new _exception2['default']('Invalid path: ' + original, { loc: loc });
								} else if (part === '..') {
									depth++;
									depthString += '../';
								}
							} else {
								dig.push(part);
							}
						}

						return {
							type: 'PathExpression',
							data: data,
							depth: depth,
							parts: dig,
							original: original,
							loc: loc
						};
					}

					function prepareMustache(path, params, hash, open, strip, locInfo) {
						// Must use charAt to support IE pre-10
						var escapeFlag = open.charAt(3) || open.charAt(2),
						    escaped = escapeFlag !== '{' && escapeFlag !== '&';

						var decorator = /\*/.test(open);
						return {
							type: decorator ? 'Decorator' : 'MustacheStatement',
							path: path,
							params: params,
							hash: hash,
							escaped: escaped,
							strip: strip,
							loc: this.locInfo(locInfo)
						};
					}

					function prepareRawBlock(openRawBlock, contents, close, locInfo) {
						validateClose(openRawBlock, close);

						locInfo = this.locInfo(locInfo);
						var program = {
							type: 'Program',
							body: contents,
							strip: {},
							loc: locInfo
						};

						return {
							type: 'BlockStatement',
							path: openRawBlock.path,
							params: openRawBlock.params,
							hash: openRawBlock.hash,
							program: program,
							openStrip: {},
							inverseStrip: {},
							closeStrip: {},
							loc: locInfo
						};
					}

					function prepareBlock(openBlock, program, inverseAndProgram, close, inverted, locInfo) {
						if (close && close.path) {
							validateClose(openBlock, close);
						}

						var decorator = /\*/.test(openBlock.open);

						program.blockParams = openBlock.blockParams;

						var inverse = undefined,
						    inverseStrip = undefined;

						if (inverseAndProgram) {
							if (decorator) {
								throw new _exception2['default']('Unexpected inverse block on decorator', inverseAndProgram);
							}

							if (inverseAndProgram.chain) {
								inverseAndProgram.program.body[0].closeStrip = close.strip;
							}

							inverseStrip = inverseAndProgram.strip;
							inverse = inverseAndProgram.program;
						}

						if (inverted) {
							inverted = inverse;
							inverse = program;
							program = inverted;
						}

						return {
							type: decorator ? 'DecoratorBlock' : 'BlockStatement',
							path: openBlock.path,
							params: openBlock.params,
							hash: openBlock.hash,
							program: program,
							inverse: inverse,
							openStrip: openBlock.strip,
							inverseStrip: inverseStrip,
							closeStrip: close && close.strip,
							loc: this.locInfo(locInfo)
						};
					}

					function prepareProgram(statements, loc) {
						if (!loc && statements.length) {
							var firstLoc = statements[0].loc,
							    lastLoc = statements[statements.length - 1].loc;

							/* istanbul ignore else */
							if (firstLoc && lastLoc) {
								loc = {
									source: firstLoc.source,
									start: {
										line: firstLoc.start.line,
										column: firstLoc.start.column
									},
									end: {
										line: lastLoc.end.line,
										column: lastLoc.end.column
									}
								};
							}
						}

						return {
							type: 'Program',
							body: statements,
							strip: {},
							loc: loc
						};
					}

					function preparePartialBlock(open, program, close, locInfo) {
						validateClose(open, close);

						return {
							type: 'PartialBlockStatement',
							name: open.path,
							params: open.params,
							hash: open.hash,
							program: program,
							openStrip: open.strip,
							closeStrip: close && close.strip,
							loc: this.locInfo(locInfo)
						};
					}

					/***/
				},
				/* 27 */
				/***/function (module, exports, __webpack_require__) {

					/* eslint-disable new-cap */

					'use strict';

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;
					exports.Compiler = Compiler;
					exports.precompile = precompile;
					exports.compile = compile;

					var _exception = __webpack_require__(6);

					var _exception2 = _interopRequireDefault(_exception);

					var _utils = __webpack_require__(5);

					var _ast = __webpack_require__(21);

					var _ast2 = _interopRequireDefault(_ast);

					var slice = [].slice;

					function Compiler() {}

					// the foundHelper register will disambiguate helper lookup from finding a
					// function in a context. This is necessary for mustache compatibility, which
					// requires that context functions in blocks are evaluated by blockHelperMissing,
					// and then proceed as if the resulting value was provided to blockHelperMissing.

					Compiler.prototype = {
						compiler: Compiler,

						equals: function equals(other) {
							var len = this.opcodes.length;
							if (other.opcodes.length !== len) {
								return false;
							}

							for (var i = 0; i < len; i++) {
								var opcode = this.opcodes[i],
								    otherOpcode = other.opcodes[i];
								if (opcode.opcode !== otherOpcode.opcode || !argEquals(opcode.args, otherOpcode.args)) {
									return false;
								}
							}

							// We know that length is the same between the two arrays because they are directly tied
							// to the opcode behavior above.
							len = this.children.length;
							for (var i = 0; i < len; i++) {
								if (!this.children[i].equals(other.children[i])) {
									return false;
								}
							}

							return true;
						},

						guid: 0,

						compile: function compile(program, options) {
							this.sourceNode = [];
							this.opcodes = [];
							this.children = [];
							this.options = options;
							this.stringParams = options.stringParams;
							this.trackIds = options.trackIds;

							options.blockParams = options.blockParams || [];

							// These changes will propagate to the other compiler components
							var knownHelpers = options.knownHelpers;
							options.knownHelpers = {
								'helperMissing': true,
								'blockHelperMissing': true,
								'each': true,
								'if': true,
								'unless': true,
								'with': true,
								'log': true,
								'lookup': true
							};
							if (knownHelpers) {
								for (var _name in knownHelpers) {
									/* istanbul ignore else */
									if (_name in knownHelpers) {
										options.knownHelpers[_name] = knownHelpers[_name];
									}
								}
							}

							return this.accept(program);
						},

						compileProgram: function compileProgram(program) {
							var childCompiler = new this.compiler(),

							// eslint-disable-line new-cap
							result = childCompiler.compile(program, this.options),
							    guid = this.guid++;

							this.usePartial = this.usePartial || result.usePartial;

							this.children[guid] = result;
							this.useDepths = this.useDepths || result.useDepths;

							return guid;
						},

						accept: function accept(node) {
							/* istanbul ignore next: Sanity code */
							if (!this[node.type]) {
								throw new _exception2['default']('Unknown type: ' + node.type, node);
							}

							this.sourceNode.unshift(node);
							var ret = this[node.type](node);
							this.sourceNode.shift();
							return ret;
						},

						Program: function Program(program) {
							this.options.blockParams.unshift(program.blockParams);

							var body = program.body,
							    bodyLength = body.length;
							for (var i = 0; i < bodyLength; i++) {
								this.accept(body[i]);
							}

							this.options.blockParams.shift();

							this.isSimple = bodyLength === 1;
							this.blockParams = program.blockParams ? program.blockParams.length : 0;

							return this;
						},

						BlockStatement: function BlockStatement(block) {
							transformLiteralToPath(block);

							var program = block.program,
							    inverse = block.inverse;

							program = program && this.compileProgram(program);
							inverse = inverse && this.compileProgram(inverse);

							var type = this.classifySexpr(block);

							if (type === 'helper') {
								this.helperSexpr(block, program, inverse);
							} else if (type === 'simple') {
								this.simpleSexpr(block);

								// now that the simple mustache is resolved, we need to
								// evaluate it by executing `blockHelperMissing`
								this.opcode('pushProgram', program);
								this.opcode('pushProgram', inverse);
								this.opcode('emptyHash');
								this.opcode('blockValue', block.path.original);
							} else {
								this.ambiguousSexpr(block, program, inverse);

								// now that the simple mustache is resolved, we need to
								// evaluate it by executing `blockHelperMissing`
								this.opcode('pushProgram', program);
								this.opcode('pushProgram', inverse);
								this.opcode('emptyHash');
								this.opcode('ambiguousBlockValue');
							}

							this.opcode('append');
						},

						DecoratorBlock: function DecoratorBlock(decorator) {
							var program = decorator.program && this.compileProgram(decorator.program);
							var params = this.setupFullMustacheParams(decorator, program, undefined),
							    path = decorator.path;

							this.useDecorators = true;
							this.opcode('registerDecorator', params.length, path.original);
						},

						PartialStatement: function PartialStatement(partial) {
							this.usePartial = true;

							var program = partial.program;
							if (program) {
								program = this.compileProgram(partial.program);
							}

							var params = partial.params;
							if (params.length > 1) {
								throw new _exception2['default']('Unsupported number of partial arguments: ' + params.length, partial);
							} else if (!params.length) {
								if (this.options.explicitPartialContext) {
									this.opcode('pushLiteral', 'undefined');
								} else {
									params.push({ type: 'PathExpression', parts: [], depth: 0 });
								}
							}

							var partialName = partial.name.original,
							    isDynamic = partial.name.type === 'SubExpression';
							if (isDynamic) {
								this.accept(partial.name);
							}

							this.setupFullMustacheParams(partial, program, undefined, true);

							var indent = partial.indent || '';
							if (this.options.preventIndent && indent) {
								this.opcode('appendContent', indent);
								indent = '';
							}

							this.opcode('invokePartial', isDynamic, partialName, indent);
							this.opcode('append');
						},
						PartialBlockStatement: function PartialBlockStatement(partialBlock) {
							this.PartialStatement(partialBlock);
						},

						MustacheStatement: function MustacheStatement(mustache) {
							this.SubExpression(mustache);

							if (mustache.escaped && !this.options.noEscape) {
								this.opcode('appendEscaped');
							} else {
								this.opcode('append');
							}
						},
						Decorator: function Decorator(decorator) {
							this.DecoratorBlock(decorator);
						},

						ContentStatement: function ContentStatement(content) {
							if (content.value) {
								this.opcode('appendContent', content.value);
							}
						},

						CommentStatement: function CommentStatement() {},

						SubExpression: function SubExpression(sexpr) {
							transformLiteralToPath(sexpr);
							var type = this.classifySexpr(sexpr);

							if (type === 'simple') {
								this.simpleSexpr(sexpr);
							} else if (type === 'helper') {
								this.helperSexpr(sexpr);
							} else {
								this.ambiguousSexpr(sexpr);
							}
						},
						ambiguousSexpr: function ambiguousSexpr(sexpr, program, inverse) {
							var path = sexpr.path,
							    name = path.parts[0],
							    isBlock = program != null || inverse != null;

							this.opcode('getContext', path.depth);

							this.opcode('pushProgram', program);
							this.opcode('pushProgram', inverse);

							path.strict = true;
							this.accept(path);

							this.opcode('invokeAmbiguous', name, isBlock);
						},

						simpleSexpr: function simpleSexpr(sexpr) {
							var path = sexpr.path;
							path.strict = true;
							this.accept(path);
							this.opcode('resolvePossibleLambda');
						},

						helperSexpr: function helperSexpr(sexpr, program, inverse) {
							var params = this.setupFullMustacheParams(sexpr, program, inverse),
							    path = sexpr.path,
							    name = path.parts[0];

							if (this.options.knownHelpers[name]) {
								this.opcode('invokeKnownHelper', params.length, name);
							} else if (this.options.knownHelpersOnly) {
								throw new _exception2['default']('You specified knownHelpersOnly, but used the unknown helper ' + name, sexpr);
							} else {
								path.strict = true;
								path.falsy = true;

								this.accept(path);
								this.opcode('invokeHelper', params.length, path.original, _ast2['default'].helpers.simpleId(path));
							}
						},

						PathExpression: function PathExpression(path) {
							this.addDepth(path.depth);
							this.opcode('getContext', path.depth);

							var name = path.parts[0],
							    scoped = _ast2['default'].helpers.scopedId(path),
							    blockParamId = !path.depth && !scoped && this.blockParamIndex(name);

							if (blockParamId) {
								this.opcode('lookupBlockParam', blockParamId, path.parts);
							} else if (!name) {
								// Context reference, i.e. `{{foo .}}` or `{{foo ..}}`
								this.opcode('pushContext');
							} else if (path.data) {
								this.options.data = true;
								this.opcode('lookupData', path.depth, path.parts, path.strict);
							} else {
								this.opcode('lookupOnContext', path.parts, path.falsy, path.strict, scoped);
							}
						},

						StringLiteral: function StringLiteral(string) {
							this.opcode('pushString', string.value);
						},

						NumberLiteral: function NumberLiteral(number) {
							this.opcode('pushLiteral', number.value);
						},

						BooleanLiteral: function BooleanLiteral(bool) {
							this.opcode('pushLiteral', bool.value);
						},

						UndefinedLiteral: function UndefinedLiteral() {
							this.opcode('pushLiteral', 'undefined');
						},

						NullLiteral: function NullLiteral() {
							this.opcode('pushLiteral', 'null');
						},

						Hash: function Hash(hash) {
							var pairs = hash.pairs,
							    i = 0,
							    l = pairs.length;

							this.opcode('pushHash');

							for (; i < l; i++) {
								this.pushParam(pairs[i].value);
							}
							while (i--) {
								this.opcode('assignToHash', pairs[i].key);
							}
							this.opcode('popHash');
						},

						// HELPERS
						opcode: function opcode(name) {
							this.opcodes.push({ opcode: name, args: slice.call(arguments, 1), loc: this.sourceNode[0].loc });
						},

						addDepth: function addDepth(depth) {
							if (!depth) {
								return;
							}

							this.useDepths = true;
						},

						classifySexpr: function classifySexpr(sexpr) {
							var isSimple = _ast2['default'].helpers.simpleId(sexpr.path);

							var isBlockParam = isSimple && !!this.blockParamIndex(sexpr.path.parts[0]);

							// a mustache is an eligible helper if:
							// * its id is simple (a single part, not `this` or `..`)
							var isHelper = !isBlockParam && _ast2['default'].helpers.helperExpression(sexpr);

							// if a mustache is an eligible helper but not a definite
							// helper, it is ambiguous, and will be resolved in a later
							// pass or at runtime.
							var isEligible = !isBlockParam && (isHelper || isSimple);

							// if ambiguous, we can possibly resolve the ambiguity now
							// An eligible helper is one that does not have a complex path, i.e. `this.foo`, `../foo` etc.
							if (isEligible && !isHelper) {
								var _name2 = sexpr.path.parts[0],
								    options = this.options;

								if (options.knownHelpers[_name2]) {
									isHelper = true;
								} else if (options.knownHelpersOnly) {
									isEligible = false;
								}
							}

							if (isHelper) {
								return 'helper';
							} else if (isEligible) {
								return 'ambiguous';
							} else {
								return 'simple';
							}
						},

						pushParams: function pushParams(params) {
							for (var i = 0, l = params.length; i < l; i++) {
								this.pushParam(params[i]);
							}
						},

						pushParam: function pushParam(val) {
							var value = val.value != null ? val.value : val.original || '';

							if (this.stringParams) {
								if (value.replace) {
									value = value.replace(/^(\.?\.\/)*/g, '').replace(/\//g, '.');
								}

								if (val.depth) {
									this.addDepth(val.depth);
								}
								this.opcode('getContext', val.depth || 0);
								this.opcode('pushStringParam', value, val.type);

								if (val.type === 'SubExpression') {
									// SubExpressions get evaluated and passed in
									// in string params mode.
									this.accept(val);
								}
							} else {
								if (this.trackIds) {
									var blockParamIndex = undefined;
									if (val.parts && !_ast2['default'].helpers.scopedId(val) && !val.depth) {
										blockParamIndex = this.blockParamIndex(val.parts[0]);
									}
									if (blockParamIndex) {
										var blockParamChild = val.parts.slice(1).join('.');
										this.opcode('pushId', 'BlockParam', blockParamIndex, blockParamChild);
									} else {
										value = val.original || value;
										if (value.replace) {
											value = value.replace(/^this(?:\.|$)/, '').replace(/^\.\//, '').replace(/^\.$/, '');
										}

										this.opcode('pushId', val.type, value);
									}
								}
								this.accept(val);
							}
						},

						setupFullMustacheParams: function setupFullMustacheParams(sexpr, program, inverse, omitEmpty) {
							var params = sexpr.params;
							this.pushParams(params);

							this.opcode('pushProgram', program);
							this.opcode('pushProgram', inverse);

							if (sexpr.hash) {
								this.accept(sexpr.hash);
							} else {
								this.opcode('emptyHash', omitEmpty);
							}

							return params;
						},

						blockParamIndex: function blockParamIndex(name) {
							for (var depth = 0, len = this.options.blockParams.length; depth < len; depth++) {
								var blockParams = this.options.blockParams[depth],
								    param = blockParams && _utils.indexOf(blockParams, name);
								if (blockParams && param >= 0) {
									return [depth, param];
								}
							}
						}
					};

					function precompile(input, options, env) {
						if (input == null || typeof input !== 'string' && input.type !== 'Program') {
							throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.precompile. You passed ' + input);
						}

						options = options || {};
						if (!('data' in options)) {
							options.data = true;
						}
						if (options.compat) {
							options.useDepths = true;
						}

						var ast = env.parse(input, options),
						    environment = new env.Compiler().compile(ast, options);
						return new env.JavaScriptCompiler().compile(environment, options);
					}

					function compile(input, options, env) {
						if (options === undefined) options = {};

						if (input == null || typeof input !== 'string' && input.type !== 'Program') {
							throw new _exception2['default']('You must pass a string or Handlebars AST to Handlebars.compile. You passed ' + input);
						}

						if (!('data' in options)) {
							options.data = true;
						}
						if (options.compat) {
							options.useDepths = true;
						}

						var compiled = undefined;

						function compileInput() {
							var ast = env.parse(input, options),
							    environment = new env.Compiler().compile(ast, options),
							    templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
							return env.template(templateSpec);
						}

						// Template is only compiled on first use and cached after that point.
						function ret(context, execOptions) {
							if (!compiled) {
								compiled = compileInput();
							}
							return compiled.call(this, context, execOptions);
						}
						ret._setup = function (setupOptions) {
							if (!compiled) {
								compiled = compileInput();
							}
							return compiled._setup(setupOptions);
						};
						ret._child = function (i, data, blockParams, depths) {
							if (!compiled) {
								compiled = compileInput();
							}
							return compiled._child(i, data, blockParams, depths);
						};
						return ret;
					}

					function argEquals(a, b) {
						if (a === b) {
							return true;
						}

						if (_utils.isArray(a) && _utils.isArray(b) && a.length === b.length) {
							for (var i = 0; i < a.length; i++) {
								if (!argEquals(a[i], b[i])) {
									return false;
								}
							}
							return true;
						}
					}

					function transformLiteralToPath(sexpr) {
						if (!sexpr.path.parts) {
							var literal = sexpr.path;
							// Casting to string here to make false and 0 literal values play nicely with the rest
							// of the system.
							sexpr.path = {
								type: 'PathExpression',
								data: false,
								depth: 0,
								parts: [literal.original + ''],
								original: literal.original + '',
								loc: literal.loc
							};
						}
					}

					/***/
				},
				/* 28 */
				/***/function (module, exports, __webpack_require__) {

					'use strict';

					var _interopRequireDefault = __webpack_require__(1)['default'];

					exports.__esModule = true;

					var _base = __webpack_require__(4);

					var _exception = __webpack_require__(6);

					var _exception2 = _interopRequireDefault(_exception);

					var _utils = __webpack_require__(5);

					var _codeGen = __webpack_require__(29);

					var _codeGen2 = _interopRequireDefault(_codeGen);

					function Literal(value) {
						this.value = value;
					}

					function JavaScriptCompiler() {}

					JavaScriptCompiler.prototype = {
						// PUBLIC API: You can override these methods in a subclass to provide
						// alternative compiled forms for name lookup and buffering semantics
						nameLookup: function nameLookup(parent, name /* , type*/) {
							if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
								return [parent, '.', name];
							} else {
								return [parent, '[', JSON.stringify(name), ']'];
							}
						},
						depthedLookup: function depthedLookup(name) {
							return [this.aliasable('container.lookup'), '(depths, "', name, '")'];
						},

						compilerInfo: function compilerInfo() {
							var revision = _base.COMPILER_REVISION,
							    versions = _base.REVISION_CHANGES[revision];
							return [revision, versions];
						},

						appendToBuffer: function appendToBuffer(source, location, explicit) {
							// Force a source as this simplifies the merge logic.
							if (!_utils.isArray(source)) {
								source = [source];
							}
							source = this.source.wrap(source, location);

							if (this.environment.isSimple) {
								return ['return ', source, ';'];
							} else if (explicit) {
								// This is a case where the buffer operation occurs as a child of another
								// construct, generally braces. We have to explicitly output these buffer
								// operations to ensure that the emitted code goes in the correct location.
								return ['buffer += ', source, ';'];
							} else {
								source.appendToBuffer = true;
								return source;
							}
						},

						initializeBuffer: function initializeBuffer() {
							return this.quotedString('');
						},
						// END PUBLIC API

						compile: function compile(environment, options, context, asObject) {
							this.environment = environment;
							this.options = options;
							this.stringParams = this.options.stringParams;
							this.trackIds = this.options.trackIds;
							this.precompile = !asObject;

							this.name = this.environment.name;
							this.isChild = !!context;
							this.context = context || {
								decorators: [],
								programs: [],
								environments: []
							};

							this.preamble();

							this.stackSlot = 0;
							this.stackVars = [];
							this.aliases = {};
							this.registers = { list: [] };
							this.hashes = [];
							this.compileStack = [];
							this.inlineStack = [];
							this.blockParams = [];

							this.compileChildren(environment, options);

							this.useDepths = this.useDepths || environment.useDepths || environment.useDecorators || this.options.compat;
							this.useBlockParams = this.useBlockParams || environment.useBlockParams;

							var opcodes = environment.opcodes,
							    opcode = undefined,
							    firstLoc = undefined,
							    i = undefined,
							    l = undefined;

							for (i = 0, l = opcodes.length; i < l; i++) {
								opcode = opcodes[i];

								this.source.currentLocation = opcode.loc;
								firstLoc = firstLoc || opcode.loc;
								this[opcode.opcode].apply(this, opcode.args);
							}

							// Flush any trailing content that might be pending.
							this.source.currentLocation = firstLoc;
							this.pushSource('');

							/* istanbul ignore next */
							if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
								throw new _exception2['default']('Compile completed with content left on stack');
							}

							if (!this.decorators.isEmpty()) {
								this.useDecorators = true;

								this.decorators.prepend('var decorators = container.decorators;\n');
								this.decorators.push('return fn;');

								if (asObject) {
									this.decorators = Function.apply(this, ['fn', 'props', 'container', 'depth0', 'data', 'blockParams', 'depths', this.decorators.merge()]);
								} else {
									this.decorators.prepend('function(fn, props, container, depth0, data, blockParams, depths) {\n');
									this.decorators.push('}\n');
									this.decorators = this.decorators.merge();
								}
							} else {
								this.decorators = undefined;
							}

							var fn = this.createFunctionContext(asObject);
							if (!this.isChild) {
								var ret = {
									compiler: this.compilerInfo(),
									main: fn
								};

								if (this.decorators) {
									ret.main_d = this.decorators; // eslint-disable-line camelcase
									ret.useDecorators = true;
								}

								var _context = this.context;
								var programs = _context.programs;
								var decorators = _context.decorators;

								for (i = 0, l = programs.length; i < l; i++) {
									if (programs[i]) {
										ret[i] = programs[i];
										if (decorators[i]) {
											ret[i + '_d'] = decorators[i];
											ret.useDecorators = true;
										}
									}
								}

								if (this.environment.usePartial) {
									ret.usePartial = true;
								}
								if (this.options.data) {
									ret.useData = true;
								}
								if (this.useDepths) {
									ret.useDepths = true;
								}
								if (this.useBlockParams) {
									ret.useBlockParams = true;
								}
								if (this.options.compat) {
									ret.compat = true;
								}

								if (!asObject) {
									ret.compiler = JSON.stringify(ret.compiler);

									this.source.currentLocation = { start: { line: 1, column: 0 } };
									ret = this.objectLiteral(ret);

									if (options.srcName) {
										ret = ret.toStringWithSourceMap({ file: options.destName });
										ret.map = ret.map && ret.map.toString();
									} else {
										ret = ret.toString();
									}
								} else {
									ret.compilerOptions = this.options;
								}

								return ret;
							} else {
								return fn;
							}
						},

						preamble: function preamble() {
							// track the last context pushed into place to allow skipping the
							// getContext opcode when it would be a noop
							this.lastContext = 0;
							this.source = new _codeGen2['default'](this.options.srcName);
							this.decorators = new _codeGen2['default'](this.options.srcName);
						},

						createFunctionContext: function createFunctionContext(asObject) {
							var varDeclarations = '';

							var locals = this.stackVars.concat(this.registers.list);
							if (locals.length > 0) {
								varDeclarations += ', ' + locals.join(', ');
							}

							// Generate minimizer alias mappings
							//
							// When using true SourceNodes, this will update all references to the given alias
							// as the source nodes are reused in situ. For the non-source node compilation mode,
							// aliases will not be used, but this case is already being run on the client and
							// we aren't concern about minimizing the template size.
							var aliasCount = 0;
							for (var alias in this.aliases) {
								// eslint-disable-line guard-for-in
								var node = this.aliases[alias];

								if (this.aliases.hasOwnProperty(alias) && node.children && node.referenceCount > 1) {
									varDeclarations += ', alias' + ++aliasCount + '=' + alias;
									node.children[0] = 'alias' + aliasCount;
								}
							}

							var params = ['container', 'depth0', 'helpers', 'partials', 'data'];

							if (this.useBlockParams || this.useDepths) {
								params.push('blockParams');
							}
							if (this.useDepths) {
								params.push('depths');
							}

							// Perform a second pass over the output to merge content when possible
							var source = this.mergeSource(varDeclarations);

							if (asObject) {
								params.push(source);

								return Function.apply(this, params);
							} else {
								return this.source.wrap(['function(', params.join(','), ') {\n  ', source, '}']);
							}
						},
						mergeSource: function mergeSource(varDeclarations) {
							var isSimple = this.environment.isSimple,
							    appendOnly = !this.forceBuffer,
							    appendFirst = undefined,
							    sourceSeen = undefined,
							    bufferStart = undefined,
							    bufferEnd = undefined;
							this.source.each(function (line) {
								if (line.appendToBuffer) {
									if (bufferStart) {
										line.prepend('  + ');
									} else {
										bufferStart = line;
									}
									bufferEnd = line;
								} else {
									if (bufferStart) {
										if (!sourceSeen) {
											appendFirst = true;
										} else {
											bufferStart.prepend('buffer += ');
										}
										bufferEnd.add(';');
										bufferStart = bufferEnd = undefined;
									}

									sourceSeen = true;
									if (!isSimple) {
										appendOnly = false;
									}
								}
							});

							if (appendOnly) {
								if (bufferStart) {
									bufferStart.prepend('return ');
									bufferEnd.add(';');
								} else if (!sourceSeen) {
									this.source.push('return "";');
								}
							} else {
								varDeclarations += ', buffer = ' + (appendFirst ? '' : this.initializeBuffer());

								if (bufferStart) {
									bufferStart.prepend('return buffer + ');
									bufferEnd.add(';');
								} else {
									this.source.push('return buffer;');
								}
							}

							if (varDeclarations) {
								this.source.prepend('var ' + varDeclarations.substring(2) + (appendFirst ? '' : ';\n'));
							}

							return this.source.merge();
						},

						// [blockValue]
						//
						// On stack, before: hash, inverse, program, value
						// On stack, after: return value of blockHelperMissing
						//
						// The purpose of this opcode is to take a block of the form
						// `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
						// replace it on the stack with the result of properly
						// invoking blockHelperMissing.
						blockValue: function blockValue(name) {
							var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
							    params = [this.contextName(0)];
							this.setupHelperArgs(name, 0, params);

							var blockName = this.popStack();
							params.splice(1, 0, blockName);

							this.push(this.source.functionCall(blockHelperMissing, 'call', params));
						},

						// [ambiguousBlockValue]
						//
						// On stack, before: hash, inverse, program, value
						// Compiler value, before: lastHelper=value of last found helper, if any
						// On stack, after, if no lastHelper: same as [blockValue]
						// On stack, after, if lastHelper: value
						ambiguousBlockValue: function ambiguousBlockValue() {
							// We're being a bit cheeky and reusing the options value from the prior exec
							var blockHelperMissing = this.aliasable('helpers.blockHelperMissing'),
							    params = [this.contextName(0)];
							this.setupHelperArgs('', 0, params, true);

							this.flushInline();

							var current = this.topStack();
							params.splice(1, 0, current);

							this.pushSource(['if (!', this.lastHelper, ') { ', current, ' = ', this.source.functionCall(blockHelperMissing, 'call', params), '}']);
						},

						// [appendContent]
						//
						// On stack, before: ...
						// On stack, after: ...
						//
						// Appends the string value of `content` to the current buffer
						appendContent: function appendContent(content) {
							if (this.pendingContent) {
								content = this.pendingContent + content;
							} else {
								this.pendingLocation = this.source.currentLocation;
							}

							this.pendingContent = content;
						},

						// [append]
						//
						// On stack, before: value, ...
						// On stack, after: ...
						//
						// Coerces `value` to a String and appends it to the current buffer.
						//
						// If `value` is truthy, or 0, it is coerced into a string and appended
						// Otherwise, the empty string is appended
						append: function append() {
							if (this.isInline()) {
								this.replaceStack(function (current) {
									return [' != null ? ', current, ' : ""'];
								});

								this.pushSource(this.appendToBuffer(this.popStack()));
							} else {
								var local = this.popStack();
								this.pushSource(['if (', local, ' != null) { ', this.appendToBuffer(local, undefined, true), ' }']);
								if (this.environment.isSimple) {
									this.pushSource(['else { ', this.appendToBuffer("''", undefined, true), ' }']);
								}
							}
						},

						// [appendEscaped]
						//
						// On stack, before: value, ...
						// On stack, after: ...
						//
						// Escape `value` and append it to the buffer
						appendEscaped: function appendEscaped() {
							this.pushSource(this.appendToBuffer([this.aliasable('container.escapeExpression'), '(', this.popStack(), ')']));
						},

						// [getContext]
						//
						// On stack, before: ...
						// On stack, after: ...
						// Compiler value, after: lastContext=depth
						//
						// Set the value of the `lastContext` compiler value to the depth
						getContext: function getContext(depth) {
							this.lastContext = depth;
						},

						// [pushContext]
						//
						// On stack, before: ...
						// On stack, after: currentContext, ...
						//
						// Pushes the value of the current context onto the stack.
						pushContext: function pushContext() {
							this.pushStackLiteral(this.contextName(this.lastContext));
						},

						// [lookupOnContext]
						//
						// On stack, before: ...
						// On stack, after: currentContext[name], ...
						//
						// Looks up the value of `name` on the current context and pushes
						// it onto the stack.
						lookupOnContext: function lookupOnContext(parts, falsy, strict, scoped) {
							var i = 0;

							if (!scoped && this.options.compat && !this.lastContext) {
								// The depthed query is expected to handle the undefined logic for the root level that
								// is implemented below, so we evaluate that directly in compat mode
								this.push(this.depthedLookup(parts[i++]));
							} else {
								this.pushContext();
							}

							this.resolvePath('context', parts, i, falsy, strict);
						},

						// [lookupBlockParam]
						//
						// On stack, before: ...
						// On stack, after: blockParam[name], ...
						//
						// Looks up the value of `parts` on the given block param and pushes
						// it onto the stack.
						lookupBlockParam: function lookupBlockParam(blockParamId, parts) {
							this.useBlockParams = true;

							this.push(['blockParams[', blockParamId[0], '][', blockParamId[1], ']']);
							this.resolvePath('context', parts, 1);
						},

						// [lookupData]
						//
						// On stack, before: ...
						// On stack, after: data, ...
						//
						// Push the data lookup operator
						lookupData: function lookupData(depth, parts, strict) {
							if (!depth) {
								this.pushStackLiteral('data');
							} else {
								this.pushStackLiteral('container.data(data, ' + depth + ')');
							}

							this.resolvePath('data', parts, 0, true, strict);
						},

						resolvePath: function resolvePath(type, parts, i, falsy, strict) {
							// istanbul ignore next

							var _this = this;

							if (this.options.strict || this.options.assumeObjects) {
								this.push(strictLookup(this.options.strict && strict, this, parts, type));
								return;
							}

							var len = parts.length;
							for (; i < len; i++) {
								/* eslint-disable no-loop-func */
								this.replaceStack(function (current) {
									var lookup = _this.nameLookup(current, parts[i], type);
									// We want to ensure that zero and false are handled properly if the context (falsy flag)
									// needs to have the special handling for these values.
									if (!falsy) {
										return [' != null ? ', lookup, ' : ', current];
									} else {
										// Otherwise we can use generic falsy handling
										return [' && ', lookup];
									}
								});
								/* eslint-enable no-loop-func */
							}
						},

						// [resolvePossibleLambda]
						//
						// On stack, before: value, ...
						// On stack, after: resolved value, ...
						//
						// If the `value` is a lambda, replace it on the stack by
						// the return value of the lambda
						resolvePossibleLambda: function resolvePossibleLambda() {
							this.push([this.aliasable('container.lambda'), '(', this.popStack(), ', ', this.contextName(0), ')']);
						},

						// [pushStringParam]
						//
						// On stack, before: ...
						// On stack, after: string, currentContext, ...
						//
						// This opcode is designed for use in string mode, which
						// provides the string value of a parameter along with its
						// depth rather than resolving it immediately.
						pushStringParam: function pushStringParam(string, type) {
							this.pushContext();
							this.pushString(type);

							// If it's a subexpression, the string result
							// will be pushed after this opcode.
							if (type !== 'SubExpression') {
								if (typeof string === 'string') {
									this.pushString(string);
								} else {
									this.pushStackLiteral(string);
								}
							}
						},

						emptyHash: function emptyHash(omitEmpty) {
							if (this.trackIds) {
								this.push('{}'); // hashIds
							}
							if (this.stringParams) {
								this.push('{}'); // hashContexts
								this.push('{}'); // hashTypes
							}
							this.pushStackLiteral(omitEmpty ? 'undefined' : '{}');
						},
						pushHash: function pushHash() {
							if (this.hash) {
								this.hashes.push(this.hash);
							}
							this.hash = { values: [], types: [], contexts: [], ids: [] };
						},
						popHash: function popHash() {
							var hash = this.hash;
							this.hash = this.hashes.pop();

							if (this.trackIds) {
								this.push(this.objectLiteral(hash.ids));
							}
							if (this.stringParams) {
								this.push(this.objectLiteral(hash.contexts));
								this.push(this.objectLiteral(hash.types));
							}

							this.push(this.objectLiteral(hash.values));
						},

						// [pushString]
						//
						// On stack, before: ...
						// On stack, after: quotedString(string), ...
						//
						// Push a quoted version of `string` onto the stack
						pushString: function pushString(string) {
							this.pushStackLiteral(this.quotedString(string));
						},

						// [pushLiteral]
						//
						// On stack, before: ...
						// On stack, after: value, ...
						//
						// Pushes a value onto the stack. This operation prevents
						// the compiler from creating a temporary variable to hold
						// it.
						pushLiteral: function pushLiteral(value) {
							this.pushStackLiteral(value);
						},

						// [pushProgram]
						//
						// On stack, before: ...
						// On stack, after: program(guid), ...
						//
						// Push a program expression onto the stack. This takes
						// a compile-time guid and converts it into a runtime-accessible
						// expression.
						pushProgram: function pushProgram(guid) {
							if (guid != null) {
								this.pushStackLiteral(this.programExpression(guid));
							} else {
								this.pushStackLiteral(null);
							}
						},

						// [registerDecorator]
						//
						// On stack, before: hash, program, params..., ...
						// On stack, after: ...
						//
						// Pops off the decorator's parameters, invokes the decorator,
						// and inserts the decorator into the decorators list.
						registerDecorator: function registerDecorator(paramSize, name) {
							var foundDecorator = this.nameLookup('decorators', name, 'decorator'),
							    options = this.setupHelperArgs(name, paramSize);

							this.decorators.push(['fn = ', this.decorators.functionCall(foundDecorator, '', ['fn', 'props', 'container', options]), ' || fn;']);
						},

						// [invokeHelper]
						//
						// On stack, before: hash, inverse, program, params..., ...
						// On stack, after: result of helper invocation
						//
						// Pops off the helper's parameters, invokes the helper,
						// and pushes the helper's return value onto the stack.
						//
						// If the helper is not found, `helperMissing` is called.
						invokeHelper: function invokeHelper(paramSize, name, isSimple) {
							var nonHelper = this.popStack(),
							    helper = this.setupHelper(paramSize, name),
							    simple = isSimple ? [helper.name, ' || '] : '';

							var lookup = ['('].concat(simple, nonHelper);
							if (!this.options.strict) {
								lookup.push(' || ', this.aliasable('helpers.helperMissing'));
							}
							lookup.push(')');

							this.push(this.source.functionCall(lookup, 'call', helper.callParams));
						},

						// [invokeKnownHelper]
						//
						// On stack, before: hash, inverse, program, params..., ...
						// On stack, after: result of helper invocation
						//
						// This operation is used when the helper is known to exist,
						// so a `helperMissing` fallback is not required.
						invokeKnownHelper: function invokeKnownHelper(paramSize, name) {
							var helper = this.setupHelper(paramSize, name);
							this.push(this.source.functionCall(helper.name, 'call', helper.callParams));
						},

						// [invokeAmbiguous]
						//
						// On stack, before: hash, inverse, program, params..., ...
						// On stack, after: result of disambiguation
						//
						// This operation is used when an expression like `{{foo}}`
						// is provided, but we don't know at compile-time whether it
						// is a helper or a path.
						//
						// This operation emits more code than the other options,
						// and can be avoided by passing the `knownHelpers` and
						// `knownHelpersOnly` flags at compile-time.
						invokeAmbiguous: function invokeAmbiguous(name, helperCall) {
							this.useRegister('helper');

							var nonHelper = this.popStack();

							this.emptyHash();
							var helper = this.setupHelper(0, name, helperCall);

							var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

							var lookup = ['(', '(helper = ', helperName, ' || ', nonHelper, ')'];
							if (!this.options.strict) {
								lookup[0] = '(helper = ';
								lookup.push(' != null ? helper : ', this.aliasable('helpers.helperMissing'));
							}

							this.push(['(', lookup, helper.paramsInit ? ['),(', helper.paramsInit] : [], '),', '(typeof helper === ', this.aliasable('"function"'), ' ? ', this.source.functionCall('helper', 'call', helper.callParams), ' : helper))']);
						},

						// [invokePartial]
						//
						// On stack, before: context, ...
						// On stack after: result of partial invocation
						//
						// This operation pops off a context, invokes a partial with that context,
						// and pushes the result of the invocation back.
						invokePartial: function invokePartial(isDynamic, name, indent) {
							var params = [],
							    options = this.setupParams(name, 1, params);

							if (isDynamic) {
								name = this.popStack();
								delete options.name;
							}

							if (indent) {
								options.indent = JSON.stringify(indent);
							}
							options.helpers = 'helpers';
							options.partials = 'partials';
							options.decorators = 'container.decorators';

							if (!isDynamic) {
								params.unshift(this.nameLookup('partials', name, 'partial'));
							} else {
								params.unshift(name);
							}

							if (this.options.compat) {
								options.depths = 'depths';
							}
							options = this.objectLiteral(options);
							params.push(options);

							this.push(this.source.functionCall('container.invokePartial', '', params));
						},

						// [assignToHash]
						//
						// On stack, before: value, ..., hash, ...
						// On stack, after: ..., hash, ...
						//
						// Pops a value off the stack and assigns it to the current hash
						assignToHash: function assignToHash(key) {
							var value = this.popStack(),
							    context = undefined,
							    type = undefined,
							    id = undefined;

							if (this.trackIds) {
								id = this.popStack();
							}
							if (this.stringParams) {
								type = this.popStack();
								context = this.popStack();
							}

							var hash = this.hash;
							if (context) {
								hash.contexts[key] = context;
							}
							if (type) {
								hash.types[key] = type;
							}
							if (id) {
								hash.ids[key] = id;
							}
							hash.values[key] = value;
						},

						pushId: function pushId(type, name, child) {
							if (type === 'BlockParam') {
								this.pushStackLiteral('blockParams[' + name[0] + '].path[' + name[1] + ']' + (child ? ' + ' + JSON.stringify('.' + child) : ''));
							} else if (type === 'PathExpression') {
								this.pushString(name);
							} else if (type === 'SubExpression') {
								this.pushStackLiteral('true');
							} else {
								this.pushStackLiteral('null');
							}
						},

						// HELPERS

						compiler: JavaScriptCompiler,

						compileChildren: function compileChildren(environment, options) {
							var children = environment.children,
							    child = undefined,
							    compiler = undefined;

							for (var i = 0, l = children.length; i < l; i++) {
								child = children[i];
								compiler = new this.compiler(); // eslint-disable-line new-cap

								var index = this.matchExistingProgram(child);

								if (index == null) {
									this.context.programs.push(''); // Placeholder to prevent name conflicts for nested children
									index = this.context.programs.length;
									child.index = index;
									child.name = 'program' + index;
									this.context.programs[index] = compiler.compile(child, options, this.context, !this.precompile);
									this.context.decorators[index] = compiler.decorators;
									this.context.environments[index] = child;

									this.useDepths = this.useDepths || compiler.useDepths;
									this.useBlockParams = this.useBlockParams || compiler.useBlockParams;
								} else {
									child.index = index;
									child.name = 'program' + index;

									this.useDepths = this.useDepths || child.useDepths;
									this.useBlockParams = this.useBlockParams || child.useBlockParams;
								}
							}
						},
						matchExistingProgram: function matchExistingProgram(child) {
							for (var i = 0, len = this.context.environments.length; i < len; i++) {
								var environment = this.context.environments[i];
								if (environment && environment.equals(child)) {
									return i;
								}
							}
						},

						programExpression: function programExpression(guid) {
							var child = this.environment.children[guid],
							    programParams = [child.index, 'data', child.blockParams];

							if (this.useBlockParams || this.useDepths) {
								programParams.push('blockParams');
							}
							if (this.useDepths) {
								programParams.push('depths');
							}

							return 'container.program(' + programParams.join(', ') + ')';
						},

						useRegister: function useRegister(name) {
							if (!this.registers[name]) {
								this.registers[name] = true;
								this.registers.list.push(name);
							}
						},

						push: function push(expr) {
							if (!(expr instanceof Literal)) {
								expr = this.source.wrap(expr);
							}

							this.inlineStack.push(expr);
							return expr;
						},

						pushStackLiteral: function pushStackLiteral(item) {
							this.push(new Literal(item));
						},

						pushSource: function pushSource(source) {
							if (this.pendingContent) {
								this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation));
								this.pendingContent = undefined;
							}

							if (source) {
								this.source.push(source);
							}
						},

						replaceStack: function replaceStack(callback) {
							var prefix = ['('],
							    stack = undefined,
							    createdStack = undefined,
							    usedLiteral = undefined;

							/* istanbul ignore next */
							if (!this.isInline()) {
								throw new _exception2['default']('replaceStack on non-inline');
							}

							// We want to merge the inline statement into the replacement statement via ','
							var top = this.popStack(true);

							if (top instanceof Literal) {
								// Literals do not need to be inlined
								stack = [top.value];
								prefix = ['(', stack];
								usedLiteral = true;
							} else {
								// Get or create the current stack name for use by the inline
								createdStack = true;
								var _name = this.incrStack();

								prefix = ['((', this.push(_name), ' = ', top, ')'];
								stack = this.topStack();
							}

							var item = callback.call(this, stack);

							if (!usedLiteral) {
								this.popStack();
							}
							if (createdStack) {
								this.stackSlot--;
							}
							this.push(prefix.concat(item, ')'));
						},

						incrStack: function incrStack() {
							this.stackSlot++;
							if (this.stackSlot > this.stackVars.length) {
								this.stackVars.push('stack' + this.stackSlot);
							}
							return this.topStackName();
						},
						topStackName: function topStackName() {
							return 'stack' + this.stackSlot;
						},
						flushInline: function flushInline() {
							var inlineStack = this.inlineStack;
							this.inlineStack = [];
							for (var i = 0, len = inlineStack.length; i < len; i++) {
								var entry = inlineStack[i];
								/* istanbul ignore if */
								if (entry instanceof Literal) {
									this.compileStack.push(entry);
								} else {
									var stack = this.incrStack();
									this.pushSource([stack, ' = ', entry, ';']);
									this.compileStack.push(stack);
								}
							}
						},
						isInline: function isInline() {
							return this.inlineStack.length;
						},

						popStack: function popStack(wrapped) {
							var inline = this.isInline(),
							    item = (inline ? this.inlineStack : this.compileStack).pop();

							if (!wrapped && item instanceof Literal) {
								return item.value;
							} else {
								if (!inline) {
									/* istanbul ignore next */
									if (!this.stackSlot) {
										throw new _exception2['default']('Invalid stack pop');
									}
									this.stackSlot--;
								}
								return item;
							}
						},

						topStack: function topStack() {
							var stack = this.isInline() ? this.inlineStack : this.compileStack,
							    item = stack[stack.length - 1];

							/* istanbul ignore if */
							if (item instanceof Literal) {
								return item.value;
							} else {
								return item;
							}
						},

						contextName: function contextName(context) {
							if (this.useDepths && context) {
								return 'depths[' + context + ']';
							} else {
								return 'depth' + context;
							}
						},

						quotedString: function quotedString(str) {
							return this.source.quotedString(str);
						},

						objectLiteral: function objectLiteral(obj) {
							return this.source.objectLiteral(obj);
						},

						aliasable: function aliasable(name) {
							var ret = this.aliases[name];
							if (ret) {
								ret.referenceCount++;
								return ret;
							}

							ret = this.aliases[name] = this.source.wrap(name);
							ret.aliasable = true;
							ret.referenceCount = 1;

							return ret;
						},

						setupHelper: function setupHelper(paramSize, name, blockHelper) {
							var params = [],
							    paramsInit = this.setupHelperArgs(name, paramSize, params, blockHelper);
							var foundHelper = this.nameLookup('helpers', name, 'helper'),
							    callContext = this.aliasable(this.contextName(0) + ' != null ? ' + this.contextName(0) + ' : {}');

							return {
								params: params,
								paramsInit: paramsInit,
								name: foundHelper,
								callParams: [callContext].concat(params)
							};
						},

						setupParams: function setupParams(helper, paramSize, params) {
							var options = {},
							    contexts = [],
							    types = [],
							    ids = [],
							    objectArgs = !params,
							    param = undefined;

							if (objectArgs) {
								params = [];
							}

							options.name = this.quotedString(helper);
							options.hash = this.popStack();

							if (this.trackIds) {
								options.hashIds = this.popStack();
							}
							if (this.stringParams) {
								options.hashTypes = this.popStack();
								options.hashContexts = this.popStack();
							}

							var inverse = this.popStack(),
							    program = this.popStack();

							// Avoid setting fn and inverse if neither are set. This allows
							// helpers to do a check for `if (options.fn)`
							if (program || inverse) {
								options.fn = program || 'container.noop';
								options.inverse = inverse || 'container.noop';
							}

							// The parameters go on to the stack in order (making sure that they are evaluated in order)
							// so we need to pop them off the stack in reverse order
							var i = paramSize;
							while (i--) {
								param = this.popStack();
								params[i] = param;

								if (this.trackIds) {
									ids[i] = this.popStack();
								}
								if (this.stringParams) {
									types[i] = this.popStack();
									contexts[i] = this.popStack();
								}
							}

							if (objectArgs) {
								options.args = this.source.generateArray(params);
							}

							if (this.trackIds) {
								options.ids = this.source.generateArray(ids);
							}
							if (this.stringParams) {
								options.types = this.source.generateArray(types);
								options.contexts = this.source.generateArray(contexts);
							}

							if (this.options.data) {
								options.data = 'data';
							}
							if (this.useBlockParams) {
								options.blockParams = 'blockParams';
							}
							return options;
						},

						setupHelperArgs: function setupHelperArgs(helper, paramSize, params, useRegister) {
							var options = this.setupParams(helper, paramSize, params);
							options = this.objectLiteral(options);
							if (useRegister) {
								this.useRegister('options');
								params.push('options');
								return ['options=', options];
							} else if (params) {
								params.push(options);
								return '';
							} else {
								return options;
							}
						}
					};

					(function () {
						var reservedWords = ('break else new var' + ' case finally return void' + ' catch for switch while' + ' continue function this with' + ' default if throw' + ' delete in try' + ' do instanceof typeof' + ' abstract enum int short' + ' boolean export interface static' + ' byte extends long super' + ' char final native synchronized' + ' class float package throws' + ' const goto private transient' + ' debugger implements protected volatile' + ' double import public let yield await' + ' null true false').split(' ');

						var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

						for (var i = 0, l = reservedWords.length; i < l; i++) {
							compilerWords[reservedWords[i]] = true;
						}
					})();

					JavaScriptCompiler.isValidJavaScriptVariableName = function (name) {
						return !JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name);
					};

					function strictLookup(requireTerminal, compiler, parts, type) {
						var stack = compiler.popStack(),
						    i = 0,
						    len = parts.length;
						if (requireTerminal) {
							len--;
						}

						for (; i < len; i++) {
							stack = compiler.nameLookup(stack, parts[i], type);
						}

						if (requireTerminal) {
							return [compiler.aliasable('container.strict'), '(', stack, ', ', compiler.quotedString(parts[i]), ')'];
						} else {
							return stack;
						}
					}

					exports['default'] = JavaScriptCompiler;
					module.exports = exports['default'];

					/***/
				},
				/* 29 */
				/***/function (module, exports, __webpack_require__) {

					/* global define */
					'use strict';

					exports.__esModule = true;

					var _utils = __webpack_require__(5);

					var SourceNode = undefined;

					try {
						/* istanbul ignore next */
						if (false) {
							// We don't support this in AMD environments. For these environments, we asusme that
							// they are running on the browser and thus have no need for the source-map library.
							var SourceMap = require('source-map');
							SourceNode = SourceMap.SourceNode;
						}
					} catch (err) {}
					/* NOP */

					/* istanbul ignore if: tested but not covered in istanbul due to dist build  */
					if (!SourceNode) {
						SourceNode = function (line, column, srcFile, chunks) {
							this.src = '';
							if (chunks) {
								this.add(chunks);
							}
						};
						/* istanbul ignore next */
						SourceNode.prototype = {
							add: function add(chunks) {
								if (_utils.isArray(chunks)) {
									chunks = chunks.join('');
								}
								this.src += chunks;
							},
							prepend: function prepend(chunks) {
								if (_utils.isArray(chunks)) {
									chunks = chunks.join('');
								}
								this.src = chunks + this.src;
							},
							toStringWithSourceMap: function toStringWithSourceMap() {
								return { code: this.toString() };
							},
							toString: function toString() {
								return this.src;
							}
						};
					}

					function castChunk(chunk, codeGen, loc) {
						if (_utils.isArray(chunk)) {
							var ret = [];

							for (var i = 0, len = chunk.length; i < len; i++) {
								ret.push(codeGen.wrap(chunk[i], loc));
							}
							return ret;
						} else if (typeof chunk === 'boolean' || typeof chunk === 'number') {
							// Handle primitives that the SourceNode will throw up on
							return chunk + '';
						}
						return chunk;
					}

					function CodeGen(srcFile) {
						this.srcFile = srcFile;
						this.source = [];
					}

					CodeGen.prototype = {
						isEmpty: function isEmpty() {
							return !this.source.length;
						},
						prepend: function prepend(source, loc) {
							this.source.unshift(this.wrap(source, loc));
						},
						push: function push(source, loc) {
							this.source.push(this.wrap(source, loc));
						},

						merge: function merge() {
							var source = this.empty();
							this.each(function (line) {
								source.add(['  ', line, '\n']);
							});
							return source;
						},

						each: function each(iter) {
							for (var i = 0, len = this.source.length; i < len; i++) {
								iter(this.source[i]);
							}
						},

						empty: function empty() {
							var loc = this.currentLocation || { start: {} };
							return new SourceNode(loc.start.line, loc.start.column, this.srcFile);
						},
						wrap: function wrap(chunk) {
							var loc = arguments.length <= 1 || arguments[1] === undefined ? this.currentLocation || { start: {} } : arguments[1];

							if (chunk instanceof SourceNode) {
								return chunk;
							}

							chunk = castChunk(chunk, this, loc);

							return new SourceNode(loc.start.line, loc.start.column, this.srcFile, chunk);
						},

						functionCall: function functionCall(fn, type, params) {
							params = this.generateList(params);
							return this.wrap([fn, type ? '.' + type + '(' : '(', params, ')']);
						},

						quotedString: function quotedString(str) {
							return '"' + (str + '').replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\r/g, '\\r').replace(/\u2028/g, '\\u2028') // Per Ecma-262 7.3 + 7.8.4
							.replace(/\u2029/g, '\\u2029') + '"';
						},

						objectLiteral: function objectLiteral(obj) {
							var pairs = [];

							for (var key in obj) {
								if (obj.hasOwnProperty(key)) {
									var value = castChunk(obj[key], this);
									if (value !== 'undefined') {
										pairs.push([this.quotedString(key), ':', value]);
									}
								}
							}

							var ret = this.generateList(pairs);
							ret.prepend('{');
							ret.add('}');
							return ret;
						},

						generateList: function generateList(entries) {
							var ret = this.empty();

							for (var i = 0, len = entries.length; i < len; i++) {
								if (i) {
									ret.add(',');
								}

								ret.add(castChunk(entries[i], this));
							}

							return ret;
						},

						generateArray: function generateArray(entries) {
							var ret = this.generateList(entries);
							ret.prepend('[');
							ret.add(']');

							return ret;
						}
					};

					exports['default'] = CodeGen;
					module.exports = exports['default'];

					/***/
				}
				/******/])
			);
		});
		;
	})(this);

	return _retrieveGlobal();
});
$__System.register("130", ["131"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var hash_1;
    return {
        setters: [function (hash_1_1) {
            hash_1 = hash_1_1;
        }],
        execute: function () {
            exports_1("default", function () {
                "use strict";

                var pages = new Map();
                var pub = {};
                pub.add = function (page) {
                    pages.set(page.id, page);
                    return page;
                };
                pub.getById = function (id) {
                    return pages.get(id);
                };
                pub.toString = function () {
                    return Array.from(pages.entries()).map(function (_a) {
                        var key = _a[0],
                            value = _a[1];
                        return '' + key + ':' + value;
                    }).join("\n");
                };
                var backStack = [];
                var forwardStack = [];
                var previousPageUrl = undefined;
                //render the current page
                pub.renderPage = function () {
                    var _this = this;
                    var state = hash_1.getHashArray();
                    var url = hash_1.hashArrayToURL(state);
                    //find the page to render
                    var title = (state['page'] || '').replace('%20', ' '); //some browsers replace spaces with %20
                    var page = pub.getById(title) || pub.getById(advancedSettings.pages.default);
                    if (!page) return Promise.reject();
                    var scroll = undefined;
                    return Promise.resolve().then(function () {
                        if (previousPageUrl === undefined) {
                            previousPageUrl = '' + url;
                            scroll = 0;
                            return;
                        }
                        //store the scroll position of the previous page
                        var previousPageScroll = window.scrollY; // || document.documentElement.scrollTop || document.body.scrollTop || 0
                        if (backStack.length > 0 && backStack[backStack.length - 1].url === url) {
                            scroll = backStack.pop().scroll;
                            forwardStack.push({ url: previousPageUrl, scroll: previousPageScroll });
                        } else if (forwardStack.length > 0 && forwardStack[forwardStack.length - 1].url === url) {
                            scroll = forwardStack.pop().scroll;
                            backStack.push({ url: previousPageUrl, scroll: previousPageScroll });
                        } else {
                            forwardStack = [];
                            scroll = 0;
                            backStack.push({ url: previousPageUrl, scroll: previousPageScroll });
                        }
                        previousPageUrl = '' + url;
                    }).then(function () {
                        return page.render(state, _this);
                    }).then(function () {
                        window.scroll(0, scroll || 0);
                    });
                };
                //render the page every time the hash changes
                window.addEventListener("hashchange", function () {
                    pub.renderPage();
                }, false);
                return pub;
            }());
        }
    };
});
$__System.register("132", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Actors',
                'view': 'list',
                'groupby': 'alpha',
                'icon': function () {
                    return 'img/icons/default/DefaultActor.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': state['media'] };
                },
                'data': function (state) {
                    //higher order map functions (for use in promise api .then() calls)
                    var map_ = function (func) {
                        return function (array) {
                            return Array.prototype.map.call(array, func);
                        };
                    };
                    var flatMap_ = function (func) {
                        return function (array) {
                            return Array.prototype.concat.apply([], Array.prototype.map.call(array, func));
                        };
                    };
                    var flatten = function (array) {
                        return Array.prototype.concat.apply([], array);
                    };
                    var mediaTypes = {
                        'TV Shows': {
                            name: 'TV Shows',
                            page: 'TV Shows',
                            resultProperty: 'tvshows',
                            method: 'VideoLibrary.GetTVShows'
                        },
                        'Movies': {
                            name: 'Movies',
                            page: 'Movies',
                            resultProperty: 'movies',
                            method: 'VideoLibrary.GetMovies'
                        }
                    };
                    var mediaType = mediaTypes[state['media']];
                    var m = mediaType ? [mediaType] : Object.keys(mediaTypes).map(function (key) {
                        return mediaTypes[key];
                    }); //mediaTypes.toArray()
                    return Promise.all(m.map(function (media) {
                        return xbmc.get({
                            method: media.method,
                            params: {
                                'properties': ['cast']
                            },
                            cache: true
                        }).then(function (result) {
                            return result[media.resultProperty] || [];
                        }).then(flatMap_(function (mediaInfo) {
                            return mediaInfo.cast;
                        })).then(map_(function (actor) {
                            return {
                                label: actor.name,
                                alpha: actor.name[0].toUpperCase(),
                                link: '#page=' + media.page + '&actor=' + encodeURIComponent(actor.name),
                                thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png'
                            };
                        }));
                    })).then(flatten).then(function (actors) {
                        return {
                            pageName: !(mediaType && mediaType.name) ? 'Actors' : mediaType.name + ' by Actor',
                            items: actors
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("134", ["133", "135"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Addon',
                'view': 'list',
                'icon': function (state) {
                    return 'img/icons/home/addons.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Home' };
                },
                'data': function (state) {
                    var addonid = state['addonid'];
                    return xbmc.get({
                        'method': 'Addons.GetAddonDetails',
                        'params': {
                            'properties': ["name", "version", "summary", "description", "author", "thumbnail", "broken", "enabled"],
                            'addonid': addonid
                        },
                        'cache': false
                    }).then(function (result) {
                        return result.addon || {};
                    }).then(function (addon) {
                        return {
                            'thumbnail': addon.thumbnail ? xbmc.vfs2uri(addon.thumbnail) : 'img/icons/default/DefaultAddon.png',
                            'title': addon.name + ' v' + addon.version,
                            'subtitle': addon.summary,
                            'author': addon.author,
                            'description': addon.description,
                            'actions': [addon.enabled && {
                                'label': 'Run',
                                'link': util_1.makeJsLink("xbmc.sendMessage('Addons.ExecuteAddon', { 'addonid': '" + addonid + "' })")
                            }, {
                                'label': addon.enabled ? 'Disable' : 'Enable',
                                'link': util_1.makeJsLink("xbmc.sendMessage('Addons.SetAddonEnabled', { 'addonid': '" + addonid + "', 'enabled': 'toggle' }); pages.renderPage()")
                            }]
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("136", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Addons',
                'name': 'Add-ons',
                'view': 'list',
                'groupby': 'type',
                'icon': function (state) {
                    return 'img/icons/home/addons.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Home' };
                },
                'data': function (state) {
                    return xbmc.get({
                        method: 'Addons.GetAddons',
                        params: {
                            'properties': ['name', 'version', 'summary', 'thumbnail', 'enabled']
                        },
                        cache: true
                    }).then(function (result) {
                        return {
                            items: (result.addons || []).map(function (addon) {
                                return {
                                    label: addon.name,
                                    details: ['v' + addon.version, addon.enabled ? 'enabled' : 'disabled'],
                                    thumbnail: addon.thumbnail ? xbmc.vfs2uri(addon.thumbnail) : 'img/icons/default/DefaultAddon.png',
                                    link: '#page=Addon&addonid=' + addon.addonid,
                                    type: addon.type
                                };
                            })
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("137", ["133", "135"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Album',
                'view': 'list',
                'parent': 'Music',
                'icon': function (state) {
                    return 'img/icons/default/DefaultMusicAlbums.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'Music' };
                },
                'data': function (state) {
                    var albumid = +state['albumid'];
                    var getAlbumDetails = xbmc.get({
                        'method': 'AudioLibrary.GetAlbumDetails',
                        'params': {
                            'properties': ["title", "description", "artist", "genre", "theme", "mood", "style", "type", "albumlabel", "rating", "year", "musicbrainzalbumid", "musicbrainzalbumartistid", "fanart", "thumbnail", "playcount", "genreid", "artistid", "displayartist"],
                            'albumid': albumid
                        },
                        cache: true
                    }).then(function (_a) {
                        var _b = _a.albumdetails,
                            albumdetails = _b === void 0 ? {} : _b;
                        return albumdetails;
                    }).then(function (_a) {
                        var label = _a.label,
                            title = _a.title,
                            description = _a.description,
                            artist = _a.artist,
                            _b = _a.genre,
                            genre = _b === void 0 ? [] : _b,
                            theme = _a.theme,
                            _c = _a.mood,
                            mood = _c === void 0 ? [] : _c,
                            _d = _a.style,
                            style = _d === void 0 ? [] : _d,
                            type = _a.type,
                            albumlabel = _a.albumlabel,
                            rating = _a.rating,
                            year = _a.year,
                            fanart = _a.fanart,
                            thumbnail = _a.thumbnail,
                            playcount = _a.playcount,
                            genreid = _a.genreid,
                            artistid = _a.artistid,
                            displayartist = _a.displayartist;
                        var page = {
                            title: displayartist || artist.join(', '),
                            titleLink: "#page=Artist&artistid=" + artistid,
                            subtitle: label,
                            thumbnail: thumbnail && xbmc.vfs2uri(thumbnail),
                            fanart: xbmc.vfs2uri(fanart),
                            details: [{
                                name: 'Year',
                                links: [{
                                    label: year,
                                    link: '#page=Albums&year=' + year
                                }]
                            }, { 'name': 'Rating', 'value': rating }, {
                                name: 'Mood',
                                links: mood.map(function (mood) {
                                    return {
                                        label: mood,
                                        link: '#page=Albums&mood=' + mood
                                    };
                                })
                            }, {
                                name: 'Style',
                                links: style.map(function (style) {
                                    return {
                                        label: style,
                                        link: '#page=Albums&style=' + style
                                    };
                                })
                            }, {
                                name: 'Type',
                                links: [{
                                    label: type,
                                    link: '#page=Albums&type=' + type
                                }]
                            }, {
                                name: 'Genre',
                                links: genre.map(function (genre) {
                                    return {
                                        label: genre,
                                        link: '#page=Albums&genre=' + genre
                                    };
                                })
                            }, { 'name': 'Description', 'value': description }],
                            actions: [{
                                label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: util_1.makeJsLink("xbmc.Play({ 'albumid': (" + albumid + ") }, 0)")
                            }, {
                                label: 'Add to playlist',
                                thumbnail: 'img/buttons/add.png',
                                link: util_1.makeJsLink("xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'albumid': (" + albumid + ") } })")
                            }]
                        };
                        if (thumbnail) page.thumbnail = xbmc.vfs2uri(thumbnail);
                        return page;
                    });
                    var getSongs = xbmc.get({
                        'method': 'AudioLibrary.GetSongs',
                        'params': {
                            'properties': ['file', 'title', 'track', 'duration'],
                            'filter': { 'albumid': albumid }
                        },
                        cache: true
                    }).then(function (result) {
                        return result.songs.map(function (_a) {
                            var label = _a.label,
                                title = _a.title,
                                track = _a.track,
                                duration = _a.duration;
                            return {
                                thumbnail: 'img/icons/default/DefaultAudio.png',
                                label: label,
                                number: track,
                                details: util_1.seconds2shortstring(duration),
                                actions: [{
                                    label: '▶',
                                    link: util_1.makeJsLink("xbmc.Play({ 'albumid': " + albumid + " }, 0, " + (track - 1) + ")")
                                }]
                            };
                        });
                    });
                    return Promise.all([getAlbumDetails, getSongs]) //wait for the above to finish
                    .then(function (_a) {
                        var page = _a[0],
                            items = _a[1];
                        page.items = items;
                        return page;
                    });
                }
            }));
        }
    };
});
$__System.register("138", ["133", "135"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Albums',
                'view': 'list',
                'groupby': 'title',
                'icon': function (state) {
                    return state['group'] === 'genre' || state['genre'] ? 'img/icons/default/DefaultMusicGenres.png' : state['group'] === 'year' || state['year'] ? 'img/icons/default/DefaultYear.png' : 'img/icons/default/DefaultMusicAlbums.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'Music' };
                },
                'data': function (state) {
                    var filter = xbmc.makeFilter(state, [{ name: 'Genre', key: 'genre', type: String }, { name: 'Artist', key: 'artist', type: String }]);
                    var group = state['group'] || this.groupby;
                    return xbmc.get({
                        method: 'AudioLibrary.GetAlbums',
                        params: {
                            'properties': ['title', 'artist', 'year', 'thumbnail'],
                            'filter': (filter || {}).filter
                        },
                        cache: true
                    }).then(function (result) {
                        return {
                            pageName: 'Albums' + (filter ? ' by ' + filter.name : group ? ' by ' + group : ''),
                            title: filter ? '' + filter.value : undefined,
                            items: (result.albums || []).map(function (album, i) {
                                return {
                                    title: album.label[0].toUpperCase(),
                                    label: album.label,
                                    details: album.artist,
                                    year: album.year,
                                    link: '#page=Album&albumid=' + album.albumid,
                                    thumbnail: album.thumbnail ? xbmc.vfs2uri(album.thumbnail) : 'img/icons/default/DefaultAlbumCover.png',
                                    actions: [{ label: '▶', link: util_1.makeJsLink("xbmc.Play({ 'albumid': " + album.albumid + " }, 0)") }]
                                };
                            })
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("139", ["133", "135"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Artist',
                'view': 'list',
                'groupby': 'year',
                'icon': function (state) {
                    return 'img/icons/default/DefaultMusicAlbums.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'Music' };
                },
                'data': function (state) {
                    var artistid = +state['artistid'];
                    var getArtistDetails = xbmc.get({
                        'method': 'AudioLibrary.GetArtistDetails',
                        'params': {
                            'properties': ["instrument", "style", "mood", "born", "formed", "description", "genre", "died", "disbanded", "yearsactive", "musicbrainzartistid", "fanart", "thumbnail"],
                            'artistid': artistid
                        },
                        cache: true
                    }).then(function (_a) {
                        var _b = _a.artistdetails,
                            artistdetails = _b === void 0 ? {} : _b;
                        return artistdetails;
                    }).then(function (x) {
                        console.log(x);return x;
                    }).then(function (_a) {
                        var _b = _a.label,
                            label = _b === void 0 ? '' : _b,
                            _c = _a.instrument,
                            instrument = _c === void 0 ? [] : _c,
                            _d = _a.style,
                            style = _d === void 0 ? [] : _d,
                            _e = _a.mood,
                            mood = _e === void 0 ? [] : _e,
                            _f = _a.born,
                            born = _f === void 0 ? '' : _f,
                            _g = _a.formed,
                            formed = _g === void 0 ? '' : _g,
                            _h = _a.description,
                            description = _h === void 0 ? '' : _h,
                            _j = _a.genre,
                            genre = _j === void 0 ? [] : _j,
                            _k = _a.died,
                            died = _k === void 0 ? '' : _k,
                            _l = _a.disbanded,
                            disbanded = _l === void 0 ? '' : _l,
                            _m = _a.yearsactive,
                            yearsactive = _m === void 0 ? [] : _m,
                            _o = _a.musicbrainzartistid,
                            musicbrainzartistid = _o === void 0 ? [] : _o,
                            fanart = _a.fanart,
                            _p = _a.thumbnail,
                            thumbnail = _p === void 0 ? '' : _p;
                        return {
                            title: label || 'Artist ' + artistid,
                            thumbnail: thumbnail ? xbmc.vfs2uri(thumbnail) : undefined,
                            fanart: xbmc.vfs2uri(fanart),
                            details: [{ 'name': 'Born', 'value': born }, { 'name': 'Formed', 'value': formed }, { 'name': 'Disbanded', 'value': disbanded }, { 'name': 'Died', 'value': died }, {
                                name: 'Years Active',
                                links: yearsactive.map(function (year) {
                                    return {
                                        label: year,
                                        link: '#page=Albums&year=' + year
                                    };
                                })
                            }, {
                                name: 'Mood',
                                links: mood.map(function (mood) {
                                    return {
                                        label: mood,
                                        link: '#page=Artists&mood=' + mood
                                    };
                                })
                            }, {
                                name: 'Style',
                                links: style.map(function (style) {
                                    return {
                                        label: style,
                                        link: '#page=Artists&style=' + style
                                    };
                                })
                            }, {
                                name: 'Instrument',
                                links: instrument.map(function (instrument) {
                                    return {
                                        label: instrument,
                                        link: '#page=Artists&instrument=' + instrument
                                    };
                                })
                            }, {
                                name: 'Genre',
                                links: genre.map(function (genre) {
                                    return {
                                        label: genre,
                                        link: '#page=Movies&genre=' + genre
                                    };
                                })
                            }, { 'name': 'Description', 'value': description }],
                            actions: [{
                                label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: util_1.makeJsLink("xbmc.Play({ 'artistid': (" + artistid + ") }, 0)")
                            }, {
                                label: 'Add to playlist',
                                thumbnail: 'img/buttons/add.png',
                                link: util_1.makeJsLink("xbmc.sendMessage('Playlist.add', { 'playlistid': 0, 'item': { 'artistid': (" + artistid + ") } })")
                            }]
                        };
                    });
                    var getAlbums = xbmc.get({
                        'method': 'AudioLibrary.GetAlbums',
                        'params': {
                            'properties': ['title', 'artist', 'year', 'thumbnail'],
                            'filter': { 'artistid': artistid }
                        },
                        'cache': true
                    }).then(function (result) {
                        return (result.albums || []).map(function (_a) {
                            var label = _a.label,
                                albumid = _a.albumid,
                                thumbnail = _a.thumbnail,
                                year = _a.year;
                            return {
                                label: label,
                                link: '#page=Album&albumid=' + albumid + '&artistid=' + artistid,
                                thumbnail: thumbnail ? xbmc.vfs2uri(thumbnail) : 'img/icons/default/DefaultAudio.png',
                                thumbnailWidth: '50px',
                                year: year,
                                actions: [{
                                    label: '▶',
                                    link: util_1.makeJsLink("xbmc.Play({ 'albumid': " + albumid + " }, 0)")
                                }]
                            };
                        });
                    });
                    return Promise.all([getArtistDetails, getAlbums]) //wait for the above to finish
                    .then(function (_a) {
                        var page = _a[0],
                            items = _a[1];
                        page.items = items;
                        return page;
                    });
                }
            }));
        }
    };
});
$__System.register("13a", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Artists',
                'view': 'list',
                'groupby': 'alpha',
                'icon': function () {
                    return 'img/icons/default/DefaultMusicArtists.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'Music' };
                },
                'data': function (state) {
                    var filter = xbmc.makeFilter(state, [{ name: 'Genre', key: 'genre', type: String }]);
                    var group = state['group'] || this.groupby;
                    return xbmc.get({
                        'method': 'AudioLibrary.GetArtists',
                        'params': {
                            'properties': ['thumbnail'],
                            'albumartistsonly': true,
                            'filter': filter ? filter.filter : undefined
                        },
                        'cache': true
                    }).then(function (result) {
                        return {
                            pageName: 'Artists' + (filter ? ' by ' + filter.name : group ? ' by ' + group : ''),
                            title: filter ? '' + filter.value : undefined,
                            items: (result.artists || []).map(function (artist) {
                                return {
                                    alpha: artist.label[0].toUpperCase(),
                                    label: artist.label,
                                    link: '#page=Artist&artistid=' + artist.artistid,
                                    thumbnail: artist.thumbnail ? xbmc.vfs2uri(artist.thumbnail) : 'img/icons/default/DefaultArtist.png',
                                    play: function () {
                                        return xbmc.Play({ 'artistid': "+x.artistid+" }, 0);
                                    }
                                };
                            })
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("13b", ["133", "135"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Broadcast',
                'view': 'list',
                'icon': function (state) {
                    return state['media'] === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Channels', 'media': state['media'] };
                },
                'data': function (state) {
                    console.log(+state.broadcastid);
                    return xbmc.get({
                        method: 'PVR.GetBroadcastDetails',
                        params: {
                            "broadcastid": +state.broadcastid,
                            "properties": ["title"]
                        }
                    }).then(function (_a) {
                        var broadcastdetails = _a.broadcastdetails;
                        return {
                            pageName: [state['media'], 'Broadcast'].join(' '),
                            title: broadcastdetails.label,
                            actions: [{
                                label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: util_1.makeJsLink("xbmc.Open({ 'item': { 'channelid': " + +state.broadcastid + " } })")
                            }]
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("13c", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Channel Group',
                'view': 'list',
                'icon': function (state) {
                    return state['media'] === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Channels', 'media': state['media'] };
                },
                'data': function (state) {
                    var groupid = +state['groupid'];
                    var channelgroupdetails = xbmc.get({
                        method: 'PVR.GetChannelGroupDetails',
                        params: {
                            'channelgroupid': groupid
                        }
                    }).then(function (data) {
                        return data.channelgroupdetails || {};
                    });
                    var channels = xbmc.get({
                        method: 'PVR.GetChannels',
                        params: {
                            'properties': ['hidden', 'locked', 'thumbnail'],
                            'channelgroupid': groupid
                        }
                    }).then(function (data) {
                        return data.channels || {};
                    });
                    return Promise.all([channelgroupdetails, channels]).then(function (_a) {
                        var channelgroupdetails = _a[0],
                            channels = _a[1];
                        return {
                            title: channelgroupdetails.label || 'Channels',
                            items: channels.map(function (channel) {
                                return {
                                    label: channel.label,
                                    hidden: channel.hidden,
                                    locked: channel.locked,
                                    thumbnail: channel.thumbnail === undefined ? 'img/icons/default/DefaultAddonNone.png' : xbmc.vfs2uri(channel.thumbnail),
                                    link: '#page=Channel&media=' + state['media'] + '&channelid=' + channel.channelid,
                                    play: function () {
                                        return xbmc.Open({ 'item': { 'channelid': channel.channelid } });
                                    }
                                };
                            })
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("13d", ["133", "135", "13e"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1, moment_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }, function (moment_1_1) {
            moment_1 = moment_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Channel',
                'view': 'list',
                'icon': function (state) {
                    return state['media'] === 'radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Channels', 'media': state['media'] };
                },
                'data': function (state) {
                    var channelid = +state['channelid'];
                    return xbmc.get({
                        method: 'PVR.GetChannelDetails',
                        params: {
                            'properties': ["thumbnail", "channeltype", "hidden", "locked", "lastplayed", "broadcastnow", "broadcastnext", "uniqueid", "icon", "channelnumber", "subchannelnumber", "isrecording"],
                            'channelid': channelid
                        }
                    }).then(function (x) {
                        console.log(x);return x;
                    }).then(function (_a) {
                        var channeldetails = (_a === void 0 ? { channeldetails: {} } : _a).channeldetails;
                        return {
                            thumbnail: channeldetails.thumbnail === undefined ? channeldetails.icon === undefined ? 'img/icons/default/DefaultAddonNone.png' : xbmc.vfs2uri(channeldetails.icon) : xbmc.vfs2uri(channeldetails.thumbnail),
                            pageName: { 'radio': 'Radio ', 'tv': 'TV ' }[channeldetails.channeltype] + 'Channel',
                            title: channeldetails.label,
                            subtitle: channeldetails.channeltype + ' ' + channeldetails.channelnumber /* + ' [' + (channeldetails.subchannelnumber <= 0 ? '' : 'subchannel: ' + channeldetails.subchannelnumber + ' ') + 'id: ' + channeldetails.uniqueid + ']'*/
                            , actions: [{
                                label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: util_1.makeJsLink("xbmc.Open({ 'item': { 'channelid': " + channelid + " } })")
                            }],
                            details: [{ 'name': 'Status', 'value': [channeldetails.hidden ? 'Hidden' : undefined, channeldetails.locked ? 'Locked' : undefined, channeldetails.isrecording ? 'Recording' : undefined].filter(function (x) {
                                    return x !== undefined;
                                }).join(', ') }, { 'name': 'Last Played', 'value': moment_1.default.utc(channeldetails.lastplayed).fromNow() }, channeldetails.broadcastnow === undefined ? undefined : { 'name': 'Now (started ' + moment_1.default.utc(channeldetails.broadcastnow.starttime).fromNow() + ')', 'value': channeldetails.broadcastnow.title }, channeldetails.broadcastnext === undefined ? undefined : { 'name': 'Next (starts ' + moment_1.default.utc(channeldetails.broadcastnext.starttime).fromNow() + ')', 'value': channeldetails.broadcastnext.title }]
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("13f", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, mediaToLower;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            mediaToLower = { 'Radio': 'radio', 'TV': 'tv' };
            exports_1("default", new page_1.default({
                'id': 'Channels',
                'view': 'list',
                'icon': function (state) {
                    return state['media'] === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': state['media'] };
                },
                'data': function (state) {
                    var m = state['media'];
                    var media = mediaToLower[m] === undefined ? ['TV', 'Radio'] : [m];
                    var nextpage = { 'Channel Group': 'Channel Group', 'Guide': 'Guide' }[state['nextpage']];
                    if (nextpage === undefined) nextpage = 'Channel Group';
                    return Promise.all(media.map(function (type) {
                        return xbmc.get({
                            'method': 'PVR.GetChannelGroups',
                            'params': {
                                'channeltype': mediaToLower[type]
                            }
                        }).then(function (result) {
                            return result.channelgroups.map(function (g) {
                                g.link = '#page=' + nextpage + '&media=' + state['media'] + '&groupid=' + g.channelgroupid;
                                return g;
                            });
                        }).catch(function () {
                            return [];
                        }).then(function (items) {
                            return {
                                label: type + ' ' + { 'Channel Group': 'Channels', 'Guide': 'Guide' }[nextpage],
                                items: items
                            };
                        });
                    })).then(function (items) {
                        return media.length == 1 ? {
                            pageName: items[0].label,
                            items: items[0].items
                        } : {
                            items: items
                        };
                    }).catch(function (e) {
                        title: e;
                    });
                }
            }));
        }
    };
});
$__System.register("140", ["133", "135"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Directory',
                'view': 'list',
                'parent': 'Files',
                'icon': function (state) {
                    return 'img/icons/default/DefaultFolder.png';
                },
                'parentState': function (state) {
                    var m = {
                        'video': 'Videos',
                        'music': 'Music',
                        'pictures': 'Pictures'
                    }[state['media']];
                    return m ? { 'page': 'Menu', 'media': m } : { 'page': 'Home' };
                },
                'data': function (state) {
                    var root = state['root'];
                    var path = state['path'];
                    var media = state['media'] || '';
                    var sortby = state['sortby'] || 'date';
                    var order = state['order'];
                    var inverseOrder = {
                        'ascending': 'descending',
                        'descending': 'ascending'
                    }[order];
                    if (inverseOrder === undefined) {
                        order = 'descending';
                        inverseOrder = 'ascending';
                    }
                    var pathSplit = function (path) {
                        return path.split(new RegExp('[\\\\/]'));
                    };
                    return xbmc.get({
                        method: 'Files.GetDirectory',
                        params: {
                            'properties': ['duration', 'thumbnail', 'file', 'size', 'mimetype', 'lastmodified'],
                            'sort': { 'method': sortby, 'order': order },
                            'directory': root + (path || ''),
                            'media': media
                        }
                    }).then(function (result) {
                        return result.files || [];
                    }).then(function (files) {
                        return files.map(function (file) {
                            var f = pathSplit(file.file);
                            var filename = f.pop();
                            if (!filename) filename = f.pop();
                            if (file.filetype === 'directory') {
                                file.link = '#page=Directory&media=' + media + '&sortby=' + sortby + '&order=' + order + '&root=' + encodeURIComponent(root) + '&path=' + encodeURIComponent((path || '') + '/' + filename);
                                file.thumbnail = file.thumbnail ? xbmc.vfs2uri(file.thumbnail) : 'img/icons/default/DefaultFolder.png';
                            } else {
                                var playlistid = file.type === 'audio' ? 0 : file.type === 'video' ? 1 : 2;
                                file.actions = [{
                                    label: '▶',
                                    link: util_1.makeJsLink("xbmc.Open({ 'item': { 'file': '" + xbmc.vfs2uri(file.file) + "'  } })")
                                }];
                                file.link = "#page=File&media=" + media + "&sortby=" + sortby + "&order=" + order + "&root=" + encodeURIComponent(root) + "&=" + encodeURIComponent(path || '') + "&filename=" + encodeURIComponent(filename);
                                if (media === 'pictures') file.thumbnail = file.thumbnail || file.file;
                                file.thumbnail = file.thumbnail ? xbmc.vfs2uri(file.thumbnail) : 'img/icons/default/DefaultFile.png';
                            }
                            file.label = filename;
                            file.details = [];
                            if (file.size) file.details.push((file.size / 1024 / 1024).toFixed(2) + 'MB');
                            if (file.mimetype) file.details.push(file.mimetype);
                            if (file.lastmodified) file.details.push(file.lastmodified);
                            file.thumbnailWidth = '50px';
                            return file;
                        });
                    }).then(function (items) {
                        var splitPath = path ? pathSplit(path) : [];
                        var p = [];
                        var pathString = '';
                        while (splitPath.length > 0) {
                            var label = splitPath.shift();
                            pathString += label + '/';
                            if (label) p.push({
                                'link': '#page=Directory&media=' + media + '&sortby=' + sortby + '&order=' + order + '&root=' + encodeURIComponent(root) + '&path=' + encodeURIComponent(pathString),
                                'label': label
                            });
                        }
                        p.unshift({
                            'link': '#page=Directory&media=' + media + '&sortby=' + sortby + '&order=' + order + '&root=' + encodeURIComponent(root),
                            'label': '' + root,
                            'class': 'root'
                        });
                        p[p.length - 1].selected = true;
                        return {
                            items: items,
                            options: [{
                                id: 'path',
                                label: 'Path',
                                items: p
                            }, {
                                id: 'sort',
                                label: 'Sort By',
                                items: [{ label: 'Name', sortby: 'label', order: 'ascending' }, { label: 'Size', sortby: 'size', order: 'descending' }, { label: 'Date', sortby: 'date', order: 'descending' }].map(function (item) {
                                    return {
                                        label: item.label + (sortby === item.sortby ? { 'ascending': ' ↑', 'descending': ' ↓' }[order] : ''),
                                        'class': sortby === item.sortby ? 'selected' : undefined,
                                        link: sortby === item.sortby ? '#page=Directory&media=' + media + '&sortby=' + item.sortby + '&order=' + inverseOrder + '&root=' + encodeURIComponent(root) + '&path=' + encodeURIComponent(pathString) : '#page=Directory&media=' + media + '&sortby=' + item.sortby + '&order=' + item.order + '&root=' + encodeURIComponent(root) + '&path=' + encodeURIComponent(pathString)
                                    };
                                })
                            }]
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("141", ["133", "135", "13e"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1, moment_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }, function (moment_1_1) {
            moment_1 = moment_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Episode',
                'view': 'list',
                'parent': 'TV Shows',
                'icon': function (state) {
                    return 'img/icons/default/DefaultVideo.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'TV Shows' };
                },
                'data': function (state) {
                    var episodeid = +state['episodeid'];
                    return xbmc.get({
                        'method': 'VideoLibrary.GetEpisodeDetails',
                        'params': {
                            'properties': ["title", "plot", "votes", "rating", "writer", "firstaired", "playcount", "runtime", "director", "productioncode", "season", "episode", "originaltitle", "showtitle", "cast", "streamdetails", "lastplayed", "file", "resume", "tvshowid", "dateadded", "uniqueid", "art"],
                            'episodeid': episodeid
                        }
                    }).then(function (_a) {
                        var _b = _a.episodedetails,
                            episodedetails = _b === void 0 ? {} : _b;
                        return episodedetails;
                    }).then(function (_a) {
                        var title = _a.title,
                            plot = _a.plot,
                            votes = _a.votes,
                            rating = _a.rating,
                            _b = _a.writer,
                            writer = _b === void 0 ? [] : _b,
                            firstaired = _a.firstaired,
                            playcount = _a.playcount,
                            runtime = _a.runtime,
                            _c = _a.director,
                            director = _c === void 0 ? [] : _c,
                            productioncode = _a.productioncode,
                            season = _a.season,
                            episode = _a.episode,
                            originaltitle = _a.originaltitle,
                            showtitle = _a.showtitle,
                            cast = _a.cast,
                            _d = _a.streamdetails,
                            streamdetails = _d === void 0 ? {} : _d,
                            lastplayed = _a.lastplayed,
                            file = _a.file,
                            resume = _a.resume,
                            tvshowid = _a.tvshowid,
                            dateadded = _a.dateadded,
                            uniqueid = _a.uniqueid,
                            art = _a.art,
                            label = _a.label;
                        return {
                            title: showtitle,
                            titleLink: "#page=TV Show&tvshowid=" + tvshowid,
                            subtitle: label,
                            thumbnail: xbmc.vfs2uri(art['thumb'] || art['season.poster'] || art['tvshow.poster']),
                            //banner: xbmc.vfs2uri(art['tvshow.banner']),
                            fanart: xbmc.vfs2uri(art['tvshow.fanart']),
                            details: [{
                                'name': 'Production Code',
                                'links': [{ label: "Season " + season, link: "#page=Season&tvshowid=" + tvshowid + "&season=" + season }, { label: "Episode " + episode }]
                            }, { 'name': 'Rating', 'value': Math.round(rating * 10) / 10 + "/10 (" + votes + " votes)" }, { 'name': 'Plot', 'value': plot }, {
                                name: 'Director',
                                links: director.map(function (director) {
                                    return {
                                        label: director,
                                        link: '#page=Episodes&director=' + director
                                    };
                                })
                            }, {
                                name: 'Writer',
                                links: writer.map(function (writer) {
                                    return {
                                        label: writer,
                                        link: '#page=Episodes&writers=' + writer
                                    };
                                })
                            }, { 'name': 'Statistics', 'links': [{ 'label': "Runtime " + util_1.seconds2string(runtime) }, { 'label': "Played " + playcount + " times" }, { 'label': lastplayed instanceof String && lastplayed.length > 0 ? "Last Played " + moment_1.default(lastplayed).format('LL') : undefined }, { 'label': "Added " + moment_1.default(dateadded).format('LL') }] }, {
                                name: 'Audio',
                                links: streamdetails.audio.map(function (_a) {
                                    var language = _a.language,
                                        channels = _a.channels,
                                        codec = _a.codec;
                                    return {
                                        label: (language ? language + ": " : '') + (channels + " channels (" + codec + ")")
                                    };
                                })
                            }, {
                                name: 'Video',
                                links: streamdetails.video.map(function (_a) {
                                    var width = _a.width,
                                        height = _a.height,
                                        codec = _a.codec,
                                        stereomode = _a.stereomode;
                                    return {
                                        label: width + "\u00D7" + height + " (" + codec + ")" + (stereomode ? ", " + stereomode : '')
                                    };
                                })
                            }, {
                                name: 'File',
                                links: [{
                                    label: file,
                                    link: "" + xbmc.vfs2uri(file)
                                }]
                            }],
                            actions: [{ label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: util_1.makeJsLink("xbmc.Play({ 'episodeid': (" + episodeid + ") }, 1)")
                            }, { label: 'Add to Playlist',
                                thumbnail: 'img/buttons/add.png',
                                link: util_1.makeJsLink("xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'episodeid': (" + episodeid + ") } })")
                            }],
                            cast: cast.map(function (_a) {
                                var name = _a.name,
                                    role = _a.role,
                                    thumbnail = _a.thumbnail;
                                return {
                                    label: name,
                                    details: role,
                                    thumbnail: thumbnail ? xbmc.vfs2uri(thumbnail) : 'img/icons/default/DefaultActor.png',
                                    link: "#page=Episodes&actor=" + name
                                };
                            })
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("142", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Files',
                'view': 'list',
                'icon': function (state) {
                    return 'img/icons/default/DefaultFolder.png';
                },
                'data': function (state) {
                    var media = state['media'];
                    var types = [{ 'media': 'video', 'label': 'Video' }, { 'media': 'music', 'label': 'Music' }, { 'media': 'pictures', 'label': 'Pictures' }, { 'media': 'files', 'label': 'Files' }];
                    if (media) types = types.filter(function (type) {
                        return type.label == media;
                    });
                    return Promise.all(types.map(function (type) {
                        return xbmc.get({
                            'method': 'Files.GetSources',
                            'params': { 'media': type.media },
                            'cache': true
                        });
                    })).then(function (datas) {
                        return datas.map(function (data) {
                            return data.sources || [];
                        });
                    }).then(function (datas) {
                        return datas.map(function (sources) {
                            return sources.map(function (source) {
                                source.link = '#page=Directory&directory=' + encodeURIComponent(source.file) + '&media=' + source.media;
                                source.thumbnail = 'img/icons/default/DefaultFolder.png';
                                source.thumbnailWidth = '50px';
                                return source;
                            });
                        });
                    }).then(function (datas) {
                        return types.map(function (type, i) {
                            type.items = datas[i];
                            return type;
                        });
                    }).then(function (items) {
                        return {
                            title: 'Files',
                            items: items
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("143", ["133", "135"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'File',
                'view': 'list',
                'icon': function (state) {
                    return 'img/icons/default/DefaultFile.png';
                },
                'parentState': function (state) {
                    return {
                        'page': 'Directory',
                        'media': state['media'],
                        'sortby': state['sortby'],
                        'root': state['root'],
                        'path': state['path']
                    };
                },
                'data': function (state) {
                    var media = '' + (state['media'] || 'files');
                    var playlistid = {
                        'files': -1,
                        'music': 0,
                        'video': 1,
                        'pictures': 2
                    }[media];
                    var root = state['root'] || '';
                    var path = state['path'] || '';
                    var filename = state['filename'] || '';
                    var fullPath = [root, path, filename].join('');
                    return xbmc.get({
                        method: 'Files.GetFileDetails',
                        params: {
                            'file': fullPath,
                            'media': media,
                            'properties': ['thumbnail', 'file', 'size', 'mimetype', 'lastmodified']
                        }
                    }).then(function (_a) {
                        var filedetails = _a.filedetails;
                        return {
                            title: filedetails.label,
                            thumbnail: xbmc.vfs2uri(media === 'pictures' ? filedetails.file : filedetails.thumbnail),
                            details: [{
                                'name': 'File',
                                'value': filedetails.file
                            }, { 'name': 'Type', 'value': filedetails.mimetype }, { 'name': 'Size', 'value': filedetails.size / 1024 }, { 'name': 'Last Modified', 'value': filedetails.lastmodified }],
                            actions: [{
                                label: 'Download',
                                thumbnail: 'img/buttons/download.png',
                                link: xbmc.vfs2uri(filedetails.file)
                            }, playlistid < 0 ? undefined : {
                                label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: util_1.makeJsLink("xbmc.Open({ 'item': { 'file': '" + xbmc.vfs2uri(filedetails.file) + "'  } })")
                            }, playlistid < 0 ? undefined : {
                                label: 'Add to Playlist',
                                thumbnail: 'img/buttons/add.png',
                                link: util_1.makeJsLink("xbmc.sendMessage('Playlist.Add',{ 'playlistid': " + playlistid + ", 'item': { 'file': '" + xbmc.vfs2uri(filedetails.file) + "'  } })")
                            }]
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("144", ["133", "135"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'File Album',
                'view': 'list',
                'icon': function (state) {
                    return 'img/icons/default/DefaultFile.png';
                },
                'data': function (state) {
                    var media = '' + (state['media'] || 'files');
                    var playlistid = {
                        'files': -1,
                        'music': 0,
                        'video': 1,
                        'pictures': 2
                    }[media];
                    var root = state['root'] || '';
                    var path = state['path'] || '';
                    var filename = state['filename'] || '';
                    var fullPath = [root, path, filename].join('');
                    var directoryDetails = xbmc.get({
                        method: 'Files.GetDirectory',
                        params: {
                            'properties': ['duration', 'thumbnail', 'file', 'size', 'mimetype', 'lastmodified'],
                            'sort': { 'method': sortby, 'order': order },
                            'directory': root + path,
                            'media': media
                        }
                    }).then(function (x) {
                        console.log(x);return x;
                    }).then(function (_a) {
                        var files = _a.files;
                        return files.map(function (file) {
                            return {
                                label: file.label,
                                link: ''
                            };
                        });
                    });
                    var fileDetails = xbmc.get({
                        method: 'Files.GetFileDetails',
                        params: {
                            'file': fullPath,
                            'media': media,
                            'properties': ['thumbnail', 'file', 'size', 'mimetype', 'lastmodified']
                        }
                    }).then(function (x) {
                        console.log(x);return x;
                    }).then(function (_a) {
                        var filedetails = _a.filedetails;
                        return {
                            title: filedetails.label,
                            thumbnail: xbmc.vfs2uri(media === 'pictures' ? filedetails.file : filedetails.thumbnail),
                            details: [{ 'name': 'File', 'value': filedetails.file }, { 'name': 'Type', 'value': filedetails.mimetype }, { 'name': 'Size', 'value': filedetails.size }, { 'name': 'Last Modified', 'value': filedetails.lastmodified }],
                            actions: [{ label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: util_1.makeJsLink("xbmc.Open({ 'item': { 'file': '" + xbmc.vfs2uri(filedetails.file) + "'  } })")
                            }, playlistid < 0 ? undefined : {
                                label: 'Add to Playlist',
                                thumbnail: 'img/buttons/add.png',
                                link: util_1.makeJsLink("xbmc.sendMessage('Playlist.Add',{ 'playlistid': " + playlistid + ", 'item': { 'file': '" + xbmc.vfs2uri(filedetails.file) + "'  } })")
                            }]
                        };
                    });
                    return Promise.all([fileDetails, directoryDetails]).then(function (_a) {
                        var fileDetails = _a[0],
                            directoryDetails = _a[1];
                        return {};
                    });
                }
            }));
        }
    };
});
$__System.register("145", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Genres',
                'view': 'list',
                'icon': function (state) {
                    return state['type'] === 'Albums' || state['type'] === 'Artists' ? 'img/icons/default/DefaultMusicGenres.png' : 'img/icons/default/DefaultGenre.png';
                },
                'parentState': function (state) {
                    var type = {
                        'Movies': 'Movies',
                        'TV Shows': 'TV Shows',
                        'Music Videos': 'Music Videos',
                        'Artists': 'Music',
                        'Albums': 'Music'
                    }[state['type']];
                    if (type) return new Map([['page', 'Menu'], ['media', type]]);else return new Map([['page', 'Home']]);
                },
                'data': function (state) {
                    var page = {};
                    var type = state['type'];
                    var videoType = { 'Movies': 'movie', 'TV Shows': 'tvshow', 'Music Videos': 'musicvideo' }[type];
                    var audioType = { 'Artists': 'artists', 'Albums': 'albums' }[type];
                    var getGenres = undefined;
                    if (videoType !== undefined) getGenres = xbmc.get({
                        method: 'VideoLibrary.GetGenres',
                        params: { 'type': videoType }
                    });
                    if (audioType !== undefined) getGenres = xbmc.get({
                        method: 'AudioLibrary.GetGenres'
                    });
                    if (getGenres === undefined) throw "Page: Menu: invalid type";
                    return getGenres.then(function (result) {
                        return (result.genres || []).map(function (genre) {
                            return {
                                'label': genre.label,
                                'link': '#page=' + type + '&genre=' + encodeURIComponent(genre.label)
                            };
                        });
                    }).then(function (items) {
                        return {
                            pageName: type + ' by Genre',
                            groups: items
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("146", ["133", "135", "13e"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1, moment_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }, function (moment_1_1) {
            moment_1 = moment_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Guide',
                'view': 'list',
                'icon': function (state) {
                    return state['media'] === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': state['media'] };
                },
                'data': function (state) {
                    var now = moment_1.default.utc();
                    var nowUnix = now.unix();
                    var groupid = +state['groupid'];
                    return xbmc.get({
                        method: 'PVR.GetChannels',
                        params: {
                            'properties': ['hidden', 'locked', 'thumbnail'],
                            'channelgroupid': groupid
                        },
                        cache: true
                    }).then(function (_a) {
                        var channels = (_a === void 0 ? { channels: [] } : _a).channels;
                        return channels.map(function (channel) {
                            return {
                                channelid: channel.channelid,
                                label: channel.label,
                                thumbnail: xbmc.vfs2uri(channel.thumbnail),
                                itemsP: xbmc.get({
                                    method: 'PVR.GetBroadcasts',
                                    params: {
                                        channelid: channel.channelid,
                                        properties: ['starttime', 'runtime', 'endtime', 'isactive']
                                    },
                                    cache: true
                                }).then(function (_a) {
                                    var broadcasts = (_a === void 0 ? { broadcasts: [] } : _a).broadcasts;
                                    return broadcasts.map(function (broadcast) {
                                        return {
                                            label: broadcast.label,
                                            link: '#page=Broadcast&broadcastid=' + broadcast.broadcastid + '&media=' + state['media'],
                                            details: [moment_1.default.utc(broadcast.starttime).local().format('LT')],
                                            runtime: broadcast.runtime,
                                            starttime: moment_1.default.utc(broadcast.starttime),
                                            stime: moment_1.default.utc(broadcast.starttime),
                                            endtime: moment_1.default.utc(broadcast.endtime),
                                            isfinished: moment_1.default.utc(broadcast.endtime).isBefore(moment_1.default()),
                                            isactive: broadcast.isactive
                                        };
                                    });
                                }).catch(function (x) {
                                    return [];
                                })
                            };
                        });
                    }).then(function (channels) {
                        console.log(channels);
                        return Promise.all(channels.map(function (channel) {
                            return channel.itemsP.then(function (items) {
                                return {
                                    label: channel.label,
                                    thumbnail: channel.thumbnail === undefined ? 'img/icons/default/DefaultTVShows.png' : channel.thumbnail,
                                    actions: [{
                                        label: 'Play ' + channel.label,
                                        thumbnail: 'img/buttons/play.png',
                                        link: util_1.makeJsLink("xbmc.Open({ 'item': { 'channelid': (" + channel.channelid + ") } })")
                                    }],
                                    items: items
                                };
                            });
                        }));
                    }).then(function (channels) {
                        var startOfToday = moment_1.default().startOf('day');
                        var endOfToday = moment_1.default().endOf('day');
                        var day = state['day'];
                        var startOfDay = undefined;
                        var endOfDay = undefined;
                        if (day === undefined) {
                            startOfDay = moment_1.default(now).subtract(2, 'hours');
                            endOfDay = startOfDay.clone().add(1, 'days');
                        } else {
                            startOfDay = moment_1.default.unix(day).startOf('day');
                            endOfDay = startOfDay.clone().endOf('day');
                        }
                        //create the list of groups
                        var groupSet = new Set();
                        channels.forEach(function (_a) {
                            var items = _a.items;
                            return items.forEach(function (broadcast) {
                                var startday = moment_1.default(broadcast.starttime).startOf('day');
                                var endday = moment_1.default(broadcast.endtime).startOf('day');
                                groupSet.add(startday.unix());
                                groupSet.add(endday.unix());
                            });
                        });
                        var groups = Array.from(groupSet).map(function (dUnix) {
                            var d = moment_1.default.unix(dUnix);
                            d.startOf('day');
                            return {
                                label: d.isSame(startOfToday) ? 'today' : d.from(startOfToday),
                                selected: +day === +dUnix,
                                link: '#page=Guide&media=' + state['media'] + '&groupid=' + state['groupid'] + '&day=' + dUnix,
                                timestamp: +dUnix
                            };
                        });
                        groups.unshift({
                            label: 'now',
                            selected: day === undefined,
                            link: '#page=Guide&media=' + state['media'] + '&groupid=' + state['groupid'],
                            timestamp: +nowUnix
                        });
                        groups.sort(function (a, b) {
                            return a.timestamp - b.timestamp;
                        });
                        //filter channels from days that aren't selected
                        channels = channels.map(function (channel) {
                            var c = Object.create(channel);
                            if (Array.isArray(channel.items)) c.items = channel.items.filter(function (item) {
                                return item.endtime.isBetween(startOfDay, endOfDay) || item.starttime.isBetween(startOfDay, endOfDay);
                            });else c.items = [];
                            return c;
                        });
                        //find the first and last episode times
                        /*let starttime = undefined
                        let endtime = undefined
                        channels.forEach(channel => channel.items.forEach(item => {
                            starttime = starttime === undefined ? item.starttime : moment.min(item.starttime, starttime)
                            endtime = endtime === undefined ? item.endtime : moment.max(item.endtime, endtime)
                        }))*/
                        var starttime = startOfDay;
                        var endtime = endOfDay;
                        //calculate the position of each episode
                        channels = channels.map(function (channel) {
                            if (Array.isArray(channel.items)) channel.items = channel.items.map(function (item) {
                                var stime = moment_1.default.max(starttime, item.starttime);
                                item.style = "left: " + (stime.unix() - starttime.unix()) / advancedSettings.epg.width + "px; width: " + ((item.endtime.unix() - stime.unix()) / advancedSettings.epg.width - advancedSettings.epg.padding) + "px;";
                                return item;
                            });
                            return channel;
                        });
                        //create timeline (the list of times at the top of page)
                        var start = moment_1.default.utc(starttime).local().startOf('hour');
                        var end = moment_1.default.utc(endtime).local().endOf('hour').add(1, 'minutes');
                        var timeline = [];
                        for (var date = moment_1.default(start); date.isSameOrBefore(endtime); date.add(15, 'minutes')) if (date.isSameOrAfter(starttime)) timeline.push({
                            'label': date.minutes() % 60 === 0 ? date.format('hA' + (date.hours() % 4 === 0 ? ' dddd' : '')) : ' ',
                            'class': [date.isBefore(now) ? 'past' : 'future', date.minutes() % 60 === 0 ? 'major' : 'minor'].join(' '),
                            'style': "left: " + (date.unix() - starttime.unix()) / advancedSettings.epg.width + "px;"
                        });
                        if (now.isBetween(starttime, endtime)) timeline.push({
                            'label': ' ',
                            'class': 'present',
                            'style': "left: " + (now.unix() - starttime.unix()) / advancedSettings.epg.width + "px;"
                        });
                        return {
                            items: channels,
                            /*options: [{
                                'id': 'Day',
                                'items': groups
                            }],*/
                            groups: groups,
                            timeline: timeline
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("147", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Home',
                'name': 'Kodi',
                'view': 'list',
                'icon': function (state) {
                    return 'img/buttons/mainmenu.png';
                },
                'data': function (state) {
                    var infoBooleans = xbmc.get({
                        method: 'XBMC.GetInfoBooleans',
                        params: {
                            booleans: ['PVR.HasTVChannels', 'PVR.HasRadioChannels']
                        }
                    });
                    return Promise.all([infoBooleans]).then(function (_a) {
                        var infoBooleans = _a[0];
                        var items = [];
                        if (!advancedSettings.home.hideVideos) items.push({ 'label': 'Videos', 'link': '#page=Menu&media=Videos', 'thumbnail': 'img/icons/home/videos.png' });
                        if (!advancedSettings.home.hideMovies) items.push({ 'label': 'Movies', 'link': '#page=Menu&media=Movies', 'thumbnail': 'img/icons/home/movies.png' });
                        if (!advancedSettings.home.hideTvShows) items.push({ 'label': 'TV Shows', 'link': '#page=Menu&media=TV Shows', 'thumbnail': 'img/icons/home/tv.png' });
                        if (!advancedSettings.home.hideMusicVideos) items.push({ 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail': 'img/icons/home/musicvideos.png' });
                        if (!advancedSettings.home.hideMusic) items.push({ 'label': 'Music', 'link': '#page=Menu&media=Music', 'thumbnail': 'img/icons/home/music.png' });
                        if (!advancedSettings.home.hidePictures) items.push({ 'label': 'Pictures', 'link': '#page=Menu&media=Pictures', 'thumbnail': 'img/icons/home/pictures.png' });
                        if (!advancedSettings.home.hidePlaylists) items.push({ 'label': 'Playlists', 'link': '#page=Playlists', 'thumbnail': 'img/icons/home/playlists.png' });
                        if (!advancedSettings.home.hideRadio && infoBooleans['PVR.HasRadioChannels']) items.push({ 'label': 'Radio', 'link': '#page=Menu&media=Radio', 'thumbnail': 'img/icons/home/radio.png' });
                        if (!advancedSettings.home.hideLiveTv && infoBooleans['PVR.HasTVChannels']) items.push({ 'label': 'Live TV', 'link': '#page=Menu&media=TV', 'thumbnail': 'img/icons/home/livetv.png' });
                        if (!advancedSettings.home.hideAddons) items.push({ 'label': 'Addons', 'link': '#page=Addons', 'thumbnail': 'img/icons/home/addons.png' });
                        return {
                            'items': items,
                            'hideNavigation': true
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("148", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Menu',
                'view': 'list',
                'icon': function (state) {
                    return {
                        'Default': 'img/icons/home/menu.png',
                        'Videos': 'img/icons/home/videos.png',
                        'Movies': 'img/icons/home/movies.png',
                        'TV Shows': 'img/icons/home/tv.png',
                        'Music Videos': 'img/icons/home/musicvideos.png',
                        'Music': 'img/icons/home/music.png',
                        'Pictures': 'img/icons/home/pictures.png',
                        'TV': 'img/icons/home/livetv.png',
                        'Radio': 'img/icons/home/radio.png'
                    }[state ? state['media'] : 'Default'];
                },
                'parentState': function (state) {
                    var m = new Map();
                    var parent = {
                        'Movies': 'Videos',
                        'TV Shows': 'Videos',
                        'Music Videos': 'Videos'
                    }[state['media']];
                    if (parent) {
                        m['page'] = 'Menu';
                        m['media'] = parent;
                    } else {
                        m['page'] = 'Home';
                    }
                    return m;
                },
                'data': function (state) {
                    var media = state['media'];
                    var m = { 'Videos': 'video', 'Music': 'music', 'Pictures': 'pictures' }[media];
                    var getPage = Promise.resolve({
                        'pageName': media || 'Menu',
                        'items': {
                            'Videos': [{ 'label': 'Videos', 'items': [{ 'label': 'Movies', 'link': '#page=Menu&media=Movies', 'thumbnail': 'img/icons/home/movies.png' }, { 'label': 'TV Shows', 'link': '#page=Menu&media=TV Shows', 'thumbnail': 'img/icons/home/tv.png' }, { 'label': 'Music Videos', 'link': '#page=Menu&media=Music Videos', 'thumbnail': 'img/icons/home/musicvideos.png' }] }],
                            'Movies': [{ 'label': 'Movies', 'items': [{ 'label': 'By Year', 'link': '#page=Movies&group=year', 'thumbnail': 'img/icons/default/DefaultMovieYears.png' }, { 'label': 'By Title', 'link': '#page=Movies&group=alpha', 'thumbnail': 'img/icons/default/DefaultMovieTitle.png' }, { 'label': 'By Genre', 'link': '#page=Genres&type=Movies', 'thumbnail': 'img/icons/default/DefaultGenre.png' }, { 'label': 'By Actor', 'link': '#page=Actors&media=Movies', 'thumbnail': 'img/icons/default/DefaultActor.png' }] }, { 'label': 'Movie Sets', 'items': [{ 'label': 'By Title', 'link': '#page=Movie Sets', 'thumbnail': 'img/icons/default/DefaultMovieTitle.png' }] }],
                            'TV Shows': [{ 'label': 'TV Shows', 'items': [{ 'label': 'By Title', 'link': '#page=TV Shows', 'thumbnail': 'img/icons/default/DefaultTVShows.png' }, { 'label': 'By Genre', 'link': '#page=Genres&type=TV Shows', 'thumbnail': 'img/icons/default/DefaultGenre.png' }, { 'label': 'By Actor', 'link': '#page=Actors&media=TV Shows', 'thumbnail': 'img/icons/default/DefaultActor.png' }] }],
                            'Music Videos': [{ 'label': 'Music Videos', 'items': [{ 'label': 'By Year', 'link': '#page=Music Videos&group=year', 'thumbnail': 'img/icons/default/DefaultYear.png' }, { 'label': 'By Artist', 'link': '#page=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' }, { 'label': 'By Genre', 'link': '#page=Music Videos&group=genre', 'thumbnail': 'img/icons/default/DefaultGenre.png' }] }],
                            'Music': [{ 'label': 'Artists', 'items': [{ 'label': 'By Name', 'link': '#page=Artists', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' }, { 'label': 'By Genre', 'link': '#page=Genres&type=Artists', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }] }, { 'label': 'Albums', 'items': [{ 'label': 'By Year', 'link': '#page=Albums&group=year', 'thumbnail': 'img/icons/default/DefaultMusicYears.png' }, { 'label': 'By Title', 'link': '#page=Albums', 'thumbnail': 'img/icons/default/DefaultMusicAlbums.png' }, { 'label': 'By Genre', 'link': '#page=Genres&type=Albums', 'thumbnail': 'img/icons/default/DefaultMusicGenres.png' }] } /*,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               { 'label': 'Music Videos', 'items': [
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               { 'label': 'By Artist', 'link': '#page=Music Videos', 'thumbnail': 'img/icons/default/DefaultMusicArtists.png' },
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               { 'label': 'By Genre', 'link': '#page=Genres&type=Music Videos', 'thumbnail': 'img/icons/default/DefaultGenre.png' }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               ] }*/
                            ],
                            'Pictures': [],
                            'TV': [{ 'label': '', 'items': [{ 'label': 'Channels', 'link': '#page=Channels&media=TV', 'thumbnail': 'img/icons/home/livetv.png' }, { 'label': 'Guide', 'link': '#page=Channels&media=TV&nextpage=Guide', 'thumbnail': 'img/icons/home/livetv.png' }, { 'label': 'Recordings', 'link': '#page=Recordings&media=TV', 'thumbnail': 'img/icons/home/livetv.png' }, { 'label': 'Timers', 'link': '#page=Timers&media=TV', 'thumbnail': 'img/icons/home/livetv.png' }] }],
                            'Radio': [{ 'label': '', 'items': [{ 'label': 'Channels', 'link': '#page=Channels&media=Radio', 'thumbnail': 'img/icons/home/radio.png' }, { 'label': 'Guide', 'link': '#page=Channels&media=Radio&nextpage=Guide', 'thumbnail': 'img/icons/home/radio.png' }, { 'label': 'Recordings', 'link': '#page=Recordings&media=Radio', 'thumbnail': 'img/icons/home/radio.png' }, { 'label': 'Timers', 'link': '#page=Timers&media=Radio', 'thumbnail': 'img/icons/home/radio.png' }] }]
                        }[media]
                    });
                    var recentlyAdded = {
                        'TV Shows': {
                            method: 'VideoLibrary.GetRecentlyAddedEpisodes',
                            params: { 'properties': ['tvshowid', 'title', 'thumbnail', 'episode', 'season', 'file', 'showtitle'], 'limits': { 'end': 5 } },
                            key: 'episodes',
                            defaultThumbnail: 'img/icons/default/DefaultVideo.png',
                            transformItem: function (item) {
                                return {
                                    link: '#page=Episode&episodeid=' + item.episodeid,
                                    label: item.showtitle + ' - ' + item.title,
                                    details: ['Season ' + item.season, 'Episode ' + item.episode]
                                };
                            }
                        },
                        'Movies': {
                            method: 'VideoLibrary.GetRecentlyAddedMovies',
                            params: { "properties": ["title", "originaltitle", "runtime", "year", "thumbnail"], 'limits': { 'end': 5 } },
                            key: 'movies',
                            defaultThumbnail: 'img/icons/default/DefaultVideo.png',
                            transformItem: function (item) {
                                return {
                                    link: '#page=Movie&movieid=' + item.movieid,
                                    label: '(' + item.year + ')' + item.label
                                };
                            }
                        },
                        'Music Videos': {
                            method: 'VideoLibrary.GetRecentlyAddedMusicVideos',
                            params: { "properties": ["title", "runtime", "album", "artist", "year", "thumbnail"], 'limits': { 'end': 5 } },
                            key: 'musicvideos',
                            defaultThumbnail: 'img/icons/default/DefaultVideo.png',
                            transformItem: function (item) {
                                return {
                                    link: '#page=Music Video&musicvideoid=' + item.musicvideoid,
                                    label: item.artist + ' - ' + item.title,
                                    details: [item.album + ' (' + item.year + ')']
                                };
                            }
                        }
                    }[media];
                    if (recentlyAdded !== undefined) getPage = getPage.then(function (page) {
                        return xbmc.get({
                            method: recentlyAdded.method,
                            params: recentlyAdded.params
                        }).then(function (result) {
                            return result[recentlyAdded.key] || [];
                        }).then(function (items) {
                            return items.map(function (item) {
                                var out = recentlyAdded.transformItem(item);
                                out.thumbnail = item.thumbnail ? xbmc.vfs2uri(item.thumbnail) : recentlyAdded.defaultThumbnail;
                                return out;
                            });
                        }).then(function (items) {
                            page.recentlyAdded = items;
                            return page;
                        });
                    });
                    //add a list of file sources to the Videos, Music... pages
                    if (m === undefined) return getPage;
                    var getSources = xbmc.get({
                        method: 'Files.GetSources',
                        params: { 'media': m },
                        cache: true
                    }).then(function (result) {
                        return result.sources || [];
                    }).then(function (sources) {
                        return sources.map(function (source) {
                            return {
                                label: source.label,
                                link: '#page=Directory&root=' + encodeURIComponent(source.file) + '&media=' + m,
                                thumbnail: 'img/icons/default/DefaultFolder.png',
                                thumbnailWidth: '50px'
                            };
                        });
                    });
                    return Promise.all([getPage, getSources]).then(function (_a) {
                        var page = _a[0],
                            sources = _a[1];
                        page.items.push({
                            'label': 'Files',
                            'items': sources
                        });
                        return page;
                    });
                }
            }));
        }
    };
});
$__System.register("149", ["133", "135", "13e"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1, moment_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }, function (moment_1_1) {
            moment_1 = moment_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Movie',
                'view': 'list',
                'parent': 'Movies',
                'icon': function (state) {
                    return 'img/icons/default/DefaultVideoCover.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'Movies' };
                },
                'data': function (state) {
                    var movieid = +state['movieid'];
                    return xbmc.get({
                        'method': 'VideoLibrary.GetMovieDetails',
                        'params': {
                            'properties': ["title", "genre", "year", "rating", "director", "trailer", "tagline", "plot", "plotoutline", "originaltitle", "lastplayed", "playcount", "writer", "studio", "mpaa", "cast", "country", "imdbnumber", "runtime", "set", "showlink", "streamdetails", "top250", "votes", "fanart", "thumbnail", "file", "sorttitle", "resume", "setid", "dateadded", "tag", "art"],
                            'movieid': movieid
                        }
                    }).then(function (_a) {
                        var _b = _a.moviedetails,
                            moviedetails = _b === void 0 ? {} : _b;
                        return moviedetails;
                    }).then(function (_a) {
                        var _b = _a === void 0 ? {} : _a,
                            title = _b.title,
                            genre = _b.genre,
                            year = _b.year,
                            rating = _b.rating,
                            director = _b.director,
                            trailer = _b.trailer,
                            tagline = _b.tagline,
                            plot = _b.plot,
                            plotoutline = _b.plotoutline,
                            originaltitle = _b.originaltitle,
                            lastplayed = _b.lastplayed,
                            playcount = _b.playcount,
                            writer = _b.writer,
                            studio = _b.studio,
                            mpaa = _b.mpaa,
                            cast = _b.cast,
                            country = _b.country,
                            imdbnumber = _b.imdbnumber,
                            runtime = _b.runtime,
                            set = _b.set,
                            showlink = _b.showlink,
                            streamdetails = _b.streamdetails,
                            top250 = _b.top250,
                            votes = _b.votes,
                            fanart = _b.fanart,
                            thumbnail = _b.thumbnail,
                            file = _b.file,
                            sorttitle = _b.sorttitle,
                            resume = _b.resume,
                            setid = _b.setid,
                            dateadded = _b.dateadded,
                            tag = _b.tag,
                            art = _b.art;
                        return {
                            title: title + (originaltitle && originaltitle != title ? ' [' + originaltitle + ']' : ''),
                            subtitle: tagline,
                            thumbnail: xbmc.vfs2uri(thumbnail),
                            fanart: xbmc.vfs2uri(fanart),
                            details: [{
                                name: 'Tag',
                                links: (Array.isArray(tag) ? tag : [tag]).map(function (tag) {
                                    return {
                                        label: tag,
                                        link: '#page=Movies&tag=' + tag
                                    };
                                })
                            }, { 'name': 'Rating', 'value': Math.round(rating * 10) / 10 + "/10 (" + votes + " votes)" + (top250 ? ' #' + top250 : '') }, { 'name': 'MPAA Rating', 'value': mpaa }, {
                                name: 'Year',
                                links: [{
                                    label: year,
                                    link: '#page=Movies&year=' + year
                                }]
                            }, {
                                name: 'Country',
                                links: (Array.isArray(country) ? country : []).map(function (country) {
                                    return {
                                        label: country,
                                        link: '#page=Movies&country=' + country
                                    };
                                })
                            }, !set ? undefined : {
                                name: 'Set',
                                links: [{
                                    label: set,
                                    link: '#page=Movie Set&setid=' + setid
                                }]
                            }, {
                                name: 'Genre',
                                links: (Array.isArray(genre) ? genre : [genre]).map(function (genre) {
                                    return {
                                        label: genre,
                                        link: '#page=Movies&genre=' + genre
                                    };
                                })
                            }, { 'name': 'Plot', 'value': plot }, {
                                name: 'Director',
                                links: (Array.isArray(director) ? director : [director]).map(function (director) {
                                    return {
                                        label: director,
                                        link: '#page=Movies&director=' + director
                                    };
                                })
                            }, {
                                name: 'Writer',
                                links: (Array.isArray(writer) ? writer : [writer]).map(function (writer) {
                                    return {
                                        link: '#page=Movies&writers=' + writer,
                                        label: writer
                                    };
                                })
                            }, {
                                name: 'Studio',
                                links: (Array.isArray(studio) ? studio : [studio]).map(function (studio) {
                                    return {
                                        label: studio,
                                        link: '#page=Movies&studio=' + studio
                                    };
                                })
                            }, { 'name': 'Statistics', 'links': [{ 'label': "Runtime " + util_1.seconds2string(runtime) }, { 'label': "Played " + playcount + " times" }, { 'label': lastplayed instanceof String && lastplayed.length > 0 ? "Last Played " + moment_1.default(lastplayed).format('LL') : undefined }, { 'label': "Added " + moment_1.default(dateadded).format('LL') }] }, {
                                name: 'Audio',
                                links: (Array.isArray(streamdetails.audio) ? streamdetails.audio : [streamdetails.audio]).map(function (_a) {
                                    var language = _a.language,
                                        channels = _a.channels,
                                        codec = _a.codec;
                                    return {
                                        label: (language ? language + ": " : '') + (channels + " channels (" + codec + ")")
                                    };
                                })
                            }, {
                                name: 'Video',
                                links: (Array.isArray(streamdetails.video) ? streamdetails.video : [streamdetails.video]).map(function (_a) {
                                    var width = _a.width,
                                        height = _a.height,
                                        codec = _a.codec,
                                        stereomode = _a.stereomode;
                                    return {
                                        label: width + "\u00D7" + height + " (" + codec + ")" + (stereomode ? ", " + stereomode : '')
                                    };
                                })
                            }, {
                                name: 'File',
                                links: [{
                                    label: file,
                                    actions: [{
                                        label: 'Download',
                                        thumbnail: 'img/buttons/download.png',
                                        link: "" + xbmc.vfs2uri(file)
                                    }]
                                }]
                            }, {
                                name: 'Links',
                                links: [{
                                    label: 'IMDB',
                                    link: imdbnumber instanceof String && imdbnumber.length > 0 ? "http://www.imdb.com/title/" + imdbnumber + "/" : "http://www.imdb.com/search/title?release_date=" + encodeURIComponent(year) + ",&title=" + encodeURIComponent(title) + "&title_type=feature,tv_movie,documentary,short"
                                }, {
                                    label: 'themoviedb.org',
                                    link: "https://www.themoviedb.org/search?query=" + encodeURIComponent(title)
                                }]
                            }],
                            actions: [{ label: 'Play Trailer',
                                thumbnail: 'img/buttons/play.png',
                                link: util_1.makeJsLink("xbmc.Play({ \"file\": \"" + trailer + "\" }, 1)")
                            }, { label: 'Add to Playlist',
                                thumbnail: 'img/buttons/add.png',
                                link: util_1.makeJsLink("xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'movieid': " + movieid + " } })")
                            }, { label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: util_1.makeJsLink("xbmc.Play({ \"movieid\": " + movieid + " }, 1)")
                            }],
                            cast: cast.map(function (actor) {
                                return {
                                    label: actor.name,
                                    details: actor.role,
                                    thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
                                    link: '#page=Movies&actor=' + actor.name
                                };
                            })
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("14a", ["133", "135", "14b"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1, xbmcFilter_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }, function (xbmcFilter_1_1) {
            xbmcFilter_1 = xbmcFilter_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Movies',
                'view': 'list',
                'groupby': 'year',
                'icon': function (state) {
                    return state['group'] === 'actor' || state['actor'] ? 'img/icons/default/DefaultActor.png' : state['group'] === 'year' || state['year'] ? 'img/icons/default/DefaultMovieYears.png' : state['group'] === 'genre' || state['genre'] ? 'img/icons/default/DefaultGenre.png' : 'img/icons/default/DefaultMovieTitle.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'Movies' };
                },
                'data': function (state) {
                    var fields = [{ name: 'Genre', key: 'genreid', type: 'integer' }, { name: 'Genre', key: 'genre', type: 'string' }, { name: 'Year', key: 'year', type: 'integer' }, { name: 'Actor', key: 'actor', type: 'string' }, { name: 'Writer', key: 'writers', type: 'string' }, { name: 'Director', key: 'director', type: 'string' }, { name: 'Studio', key: 'studio', type: 'string' }, { name: 'Country', key: 'country', type: 'string' }, { name: 'Set', key: 'setid', type: 'integer' }, { name: 'Set', key: 'set', type: 'string' }, { name: 'Tag', key: 'tag', type: 'string' }];
                    var filter = xbmcFilter_1.default.fromState(state, fields);
                    var group = state['group'] || this.groupby;
                    return xbmc.get({
                        method: 'VideoLibrary.GetMovies',
                        params: {
                            'properties': ['title', 'originaltitle', 'runtime', 'year', 'thumbnail', 'file', 'genre'],
                            'sort': { method: 'sorttitle', ignorearticle: true },
                            'filter': filter.out()
                        },
                        cache: true
                    }).then(function (result) {
                        return {
                            title: 'Movies' + (group ? ' by ' + group : ''),
                            subtitle: filter.toString(),
                            items: (result.movies || []).map(function (movie, i) {
                                movie.details = [];
                                if (movie.runtime) movie.details.push(util_1.seconds2string(movie.runtime));
                                return {
                                    label: (movie.title || movie.label || '') + (movie.originaltitle && movie.originaltitle != movie.title ? ' [' + movie.originaltitle + ']' : ''),
                                    year: movie.year,
                                    link: '#page=Movie&movieid=' + movie.movieid,
                                    alpha: movie.label[0].toUpperCase(),
                                    thumbnail: movie.thumbnail ? xbmc.vfs2uri(movie.thumbnail) : 'img/icons/default/DefaultVideo.png',
                                    actions: [{
                                        label: '▶',
                                        link: util_1.makeJsLink("xbmc.Play({ 'movieid': " + movie.movieid + " }, 1)")
                                    }]
                                };
                            })
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("14c", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Movie Set',
                'view': 'list',
                'groupby': 'year',
                'icon': function (state) {
                    return 'img/icons/default/DefaultMovieTitle.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'Movies' };
                },
                'data': function (_a) {
                    var setid = _a.setid;
                    return xbmc.get({
                        'method': 'VideoLibrary.GetMovieSetDetails',
                        'params': {
                            'setid': +setid,
                            'properties': ["title", "playcount", "fanart", "thumbnail", "art"],
                            'movies': {
                                'properties': ["title", "genre", "year", "rating", "director", "trailer", "tagline", "plot", "plotoutline", "originaltitle", "lastplayed", "playcount", "writer", "studio", "mpaa", "cast", "country", "imdbnumber", "runtime", "set", "showlink", "streamdetails", "top250", "votes", "fanart", "thumbnail", "file", "sorttitle", "resume", "setid", "dateadded", "tag", "art"]
                            }
                        }
                    }).then(function (_a) {
                        var _b = _a.setdetails,
                            setdetails = _b === void 0 ? {} : _b;
                        return setdetails;
                    }).then(function (_a) {
                        var _b = _a.label,
                            label = _b === void 0 ? '' : _b,
                            _c = _a.playcount,
                            playcount = _c === void 0 ? 0 : _c,
                            _d = _a.fanart,
                            fanart = _d === void 0 ? '' : _d,
                            _e = _a.thumbnail,
                            thumbnail = _e === void 0 ? '' : _e,
                            _f = _a.art,
                            art = _f === void 0 ? {} : _f,
                            _g = _a.movies,
                            movies = _g === void 0 ? [] : _g;
                        return {
                            title: label,
                            items: movies.map(function (_a) {
                                var movieid = _a.movieid,
                                    _b = _a.label,
                                    label = _b === void 0 ? '' : _b,
                                    _c = _a.thumbnail,
                                    thumbnail = _c === void 0 ? '' : _c,
                                    _d = _a.year,
                                    year = _d === void 0 ? '' : _d,
                                    _e = _a.rating,
                                    rating = _e === void 0 ? '' : _e,
                                    _f = _a.votes,
                                    votes = _f === void 0 ? '' : _f,
                                    _g = _a.top250,
                                    top250 = _g === void 0 ? '' : _g,
                                    _h = _a.plot,
                                    plot = _h === void 0 ? '' : _h;
                                return {
                                    label: label,
                                    thumbnail: xbmc.vfs2uri(thumbnail),
                                    link: "#page=Movie&movieid=" + movieid,
                                    year: year,
                                    detailList: [{ 'name': 'Rating', 'value': Math.round(rating * 10) / 10 + "/10 (" + votes + " votes)" + (top250 ? ' #' + top250 : '') }, { 'name': 'Plot', 'value': plot }]
                                };
                            })
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("14d", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Movie Sets',
                'view': 'list',
                'icon': function (state) {
                    return 'img/icons/default/DefaultMovieTitle.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'Movies' };
                },
                'data': function (state) {
                    var getMovieSets = xbmc.get({
                        'method': 'VideoLibrary.GetMovieSets',
                        'params': {
                            'properties': ["thumbnail"]
                        }
                    }).then(function (_a) {
                        var _b = _a.sets,
                            sets = _b === void 0 ? {} : _b;
                        return sets.map(function (_a) {
                            var label = _a.label,
                                thumbnail = _a.thumbnail,
                                setid = _a.setid;
                            return {
                                label: label,
                                thumbnail: xbmc.vfs2uri(thumbnail),
                                link: "#page=Movie Set&setid=" + setid
                            };
                        });
                    });
                    return Promise.all([getMovieSets]).then(function (_a) {
                        var sets = (_a === void 0 ? [[]] : _a)[0];
                        return {
                            title: 'Movie Sets',
                            items: sets
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("14e", ["133", "135", "13e"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1, moment_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }, function (moment_1_1) {
            moment_1 = moment_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Music Video',
                'view': 'list',
                'parent': 'Music Videos',
                'icon': function (state) {
                    return 'img/icons/default/DefaultVideo.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'Music Videos' };
                },
                'data': function (state) {
                    var musicvideoid = +state['musicvideoid'];
                    return xbmc.get({
                        'method': 'VideoLibrary.GetMusicVideoDetails',
                        'params': {
                            'properties': ["title", "playcount", "runtime", "director", "studio", "year", "plot", "album", "artist", "genre", "track", "streamdetails", "lastplayed", "fanart", "thumbnail", "file", "resume", "dateadded", "tag", "art"],
                            'musicvideoid': musicvideoid
                        }
                    }).then(function (_a) {
                        var _b = _a.musicvideodetails,
                            musicvideodetails = _b === void 0 ? {} : _b;
                        return musicvideodetails;
                    }).then(function (_a) {
                        var title = _a.title,
                            playcount = _a.playcount,
                            runtime = _a.runtime,
                            director = _a.director,
                            studio = _a.studio,
                            year = _a.year,
                            plot = _a.plot,
                            album = _a.album,
                            artist = _a.artist,
                            genre = _a.genre,
                            track = _a.track,
                            streamdetails = _a.streamdetails,
                            lastplayed = _a.lastplayed,
                            fanart = _a.fanart,
                            thumbnail = _a.thumbnail,
                            file = _a.file,
                            resume = _a.resume,
                            dateadded = _a.dateadded,
                            tag = _a.tag,
                            art = _a.art,
                            label = _a.label;
                        return {
                            title: artist,
                            titleLink: "#page=Music Videos&artist=" + artist,
                            subtitle: label,
                            thumbnail: xbmc.vfs2uri(thumbnail),
                            fanart: xbmc.vfs2uri(fanart),
                            details: [{
                                name: 'Tag',
                                links: (Array.isArray(tag) ? tag : [tag]).map(function (tag) {
                                    return {
                                        label: tag,
                                        link: '#page=Music Videos&tag=' + tag
                                    };
                                })
                            }, {
                                'name': 'Album',
                                'links': [{
                                    label: album + (track > 0 ? "track " + track : '')
                                }]
                            }, {
                                name: 'Year',
                                links: [{
                                    label: year,
                                    link: '#page=Music Videos&year=' + year
                                }]
                            }, {
                                name: 'Genre',
                                links: (Array.isArray(genre) ? genre : [genre]).map(function (genre) {
                                    return {
                                        label: genre,
                                        link: '#page=Music Videos&genre=' + genre
                                    };
                                })
                            }, { 'name': 'Plot', 'value': plot }, {
                                name: 'Director',
                                links: (Array.isArray(director) ? director : [director]).map(function (director) {
                                    return {
                                        label: director,
                                        link: '#page=Music Videos&director=' + director
                                    };
                                })
                            }, {
                                name: 'Studio',
                                links: (Array.isArray(studio) ? studio : [studio]).map(function (studio) {
                                    return {
                                        label: studio,
                                        link: '#page=Music Videos&studio=' + studio
                                    };
                                })
                            }, { 'name': 'Statistics', 'links': [{ 'label': "Runtime " + util_1.seconds2string(runtime) }, { 'label': "Played " + playcount + " times" }, { 'label': lastplayed instanceof String && lastplayed.length > 0 ? "Last Played " + moment_1.default(lastplayed).format('LL') : undefined }, { 'label': "Added " + moment_1.default(dateadded).format('LL') }] }, {
                                name: 'Audio',
                                links: (Array.isArray(streamdetails.audio) ? streamdetails.audio : [streamdetails.audio]).map(function (_a) {
                                    var language = _a.language,
                                        channels = _a.channels,
                                        codec = _a.codec;
                                    return {
                                        label: (language ? language + ": " : '') + (channels + " channels (" + codec + ")")
                                    };
                                })
                            }, {
                                name: 'Video',
                                links: (Array.isArray(streamdetails.video) ? streamdetails.video : [streamdetails.video]).map(function (_a) {
                                    var width = _a.width,
                                        height = _a.height,
                                        codec = _a.codec,
                                        stereomode = _a.stereomode;
                                    return {
                                        label: width + "\u00D7" + height + " (" + codec + ")" + (stereomode ? ", " + stereomode : '')
                                    };
                                })
                            }, {
                                name: 'File',
                                links: [{
                                    label: file,
                                    link: "" + xbmc.vfs2uri(file)
                                }]
                            }, {
                                'name': 'Links',
                                'links': [{
                                    label: "Albums by " + artist,
                                    link: "#page=Albums&artist=" + artist + "&album=" + album
                                }]
                            }],
                            actions: [{ label: 'Play',
                                thumbnail: 'img/buttons/play.png',
                                link: util_1.makeJsLink("xbmc.Play({ 'musicvideoid': " + musicvideoid + " }, 1)")
                            }, { label: 'Add to Playlist',
                                thumbnail: 'img/buttons/add.png',
                                link: util_1.makeJsLink("xbmc.sendMessage('Playlist.Add',{ 'playlistid': 1, 'item': { 'musicvideoid': " + musicvideoid + " } })")
                            }]
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("14f", ["133", "14b"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, xbmcFilter_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (xbmcFilter_1_1) {
            xbmcFilter_1 = xbmcFilter_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Music Videos',
                'view': 'list',
                'groupby': 'artist',
                'icon': function (state) {
                    return state['group'] === 'year' ? 'img/icons/default/DefaultYear.png' : state['group'] === 'genre' ? 'img/icons/default/DefaultGenre.png' : 'img/icons/default/DefaultMusicArtists.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'Music Videos' };
                },
                'data': function (state) {
                    var groupby = state['group'] || this.groupby;
                    var fields = [{ name: 'Title', key: 'title', type: 'string' }, { name: 'Genre', key: 'genre', type: 'string' }, { name: 'Genre', key: 'genreid', type: 'integer' }, { name: 'Album', key: 'album', type: 'string' }, { name: 'Year', key: 'year', type: 'integer' }, { name: 'Artist', key: 'artist', type: 'string' }, { name: 'Filename', key: 'filename', type: 'string' }, { name: 'Path', key: 'path', type: 'string' }, { name: 'Director', key: 'director', type: 'string' }, { name: 'Studio', key: 'studio', type: 'string' }, { name: 'Plot', key: 'plot', type: 'string' }, { name: 'Video Resolution', key: 'videoresolution', type: 'string' }, { name: 'Audio Channels', key: 'audiochannels', type: 'string' }, { name: 'Video Codec', key: 'videocodec', type: 'string' }, { name: 'Audio Codec', key: 'audiocodec', type: 'string' }, { name: 'Audio Language', key: 'audiolanguage', type: 'string' }, { name: 'Subtitle Language', key: 'subtitlelanguage', type: 'string' }, { name: 'Video Aspect', key: 'videoaspect', type: 'string' }, { name: 'Playlist', key: 'playlist', type: 'string' }];
                    var filter = xbmcFilter_1.default.fromState(state, fields);
                    return xbmc.get({
                        'params': {
                            'properties': ['title', 'genre', 'runtime', 'year', 'album', 'artist', 'track', 'thumbnail', 'file'],
                            'filter': filter.out()
                        },
                        'method': 'VideoLibrary.GetMusicVideos',
                        'cache': true
                    }).then(function (result) {
                        return {
                            title: 'Music Videos' + (groupby ? ' by ' + groupby : ''),
                            subtitle: filter.toString(),
                            items: (result.musicvideos || []).map(function (mv) {
                                return {
                                    artist: (mv.artist instanceof Array ? mv.artist : [mv.artist]).join(', '),
                                    label: mv.title,
                                    details: mv.album ? mv.album + (mv.year ? ' (' + mv.year + ')' : '') : '',
                                    thumbnail: mv.thumbnail ? xbmc.vfs2uri(mv.thumbnail) : undefined,
                                    play: function () {
                                        xbmc.Open({ 'item': { 'file': xbmc.vfs2uri(mv.file) } });
                                    },
                                    year: mv.year,
                                    genre: mv.genre,
                                    link: '#page=Music Video&musicvideoid=' + mv.musicvideoid
                                };
                            })
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("150", ["133", "135"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Playlists',
                'view': 'list',
                'icon': function (state) {
                    return 'img/icons/home/playlists.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Home' };
                },
                'data': function (state) {
                    return xbmc.get({
                        'method': 'Playlist.GetPlaylists'
                    }).then(function (playlists) {
                        return playlists.map(function (playlist) {
                            var label = playlist.playlistid + (playlist.type ? ': ' + playlist.type : '');
                            return xbmc.get({
                                'method': 'Playlist.GetItems',
                                'params': {
                                    'properties': ['title', 'showtitle', 'artist', 'season', 'episode', 'file', 'thumbnail', 'runtime', 'duration'],
                                    'playlistid': playlist.playlistid
                                }
                            }).then(function (result) {
                                return {
                                    label: label,
                                    items: (result.items || []).map(function (item, i) {
                                        item.details = '';
                                        if (item.file) item.label = item.file.split('/')[--item.file.split('/').length];
                                        //if (player.playlistid === playlistid && player.position === i) item.playing = true //TODO: get the item that's currently playing
                                        item.thumbnail = item.thumbnail ? xbmc.vfs2uri(item.thumbnail) : 'img/icons/default/DefaultVideo.png';
                                        if (item.runtime) item.details = util_1.seconds2string(item.runtime);
                                        if (item.duration) item.details = util_1.seconds2string(item.duration);
                                        if (!item.playing) {
                                            item.actions = [{
                                                label: '▶',
                                                link: util_1.makeJsLink("\n\t\t\t\t\t\t\t\t\txbmc.get({\n\t\t\t\t\t\t\t\t\t\t'method': 'Player.Open',\n\t\t\t\t\t\t\t\t\t\t'params': { 'item': { 'playlistid': " + playlist.playlistid + ", 'position': " + i + " } }\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t")
                                            }, {
                                                label: '-',
                                                link: util_1.makeJsLink("\n\t\t\t\t\t\t\t\t\txbmc.get({\n\t\t\t\t\t\t\t\t\t\t'method': 'Playlist.Remove',\n\t\t\t\t\t\t\t\t\t\t'params': { 'playlistid': " + playlist.playlistid + ", 'position': " + i + " }\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t")
                                            }];
                                        }
                                        return item;
                                    })
                                };
                            });
                        });
                    }).then(function (playlistItems) {
                        return Promise.all(playlistItems);
                    }).then(function (playlists) {
                        return {
                            items: playlists
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("151", ["133", "13e"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, moment_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (moment_1_1) {
            moment_1 = moment_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'TV Show',
                'view': 'list',
                'parent': 'TV Shows',
                'sortgroup': 'season',
                'icon': function (state) {
                    return 'img/icons/default/DefaultTVShowTitle.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'TV Shows' };
                },
                'data': function (state) {
                    var tvshowid = +state['tvshowid'];
                    var getShowDetails = xbmc.get({
                        'method': 'VideoLibrary.GetTVShowDetails',
                        'params': {
                            'properties': ["title", "genre", "year", "rating", "plot", "studio", "mpaa", "cast", "playcount", "episode", "imdbnumber", "premiered", "votes", "lastplayed", "fanart", "thumbnail", "file", "originaltitle", "sorttitle", "episodeguide", "season", "watchedepisodes", "dateadded", "tag", "art"],
                            'tvshowid': tvshowid
                        },
                        cache: true
                    }).then(function (_a) {
                        var _b = _a.tvshowdetails,
                            tvshowdetails = _b === void 0 ? {} : _b;
                        return tvshowdetails;
                    }).then(function (_a) {
                        var title = _a.title,
                            genre = _a.genre,
                            year = _a.year,
                            rating = _a.rating,
                            plot = _a.plot,
                            studio = _a.studio,
                            mpaa = _a.mpaa,
                            cast = _a.cast,
                            playcount = _a.playcount,
                            episode = _a.episode,
                            imdbnumber = _a.imdbnumber,
                            premiered = _a.premiered,
                            votes = _a.votes,
                            lastplayed = _a.lastplayed,
                            fanart = _a.fanart,
                            thumbnail = _a.thumbnail,
                            file = _a.file,
                            originaltitle = _a.originaltitle,
                            sorttitle = _a.sorttitle,
                            episodeguide = _a.episodeguide,
                            season = _a.season,
                            watchedepisodes = _a.watchedepisodes,
                            dateadded = _a.dateadded,
                            tag = _a.tag,
                            art = _a.art;
                        return {
                            title: title,
                            subtitle: title === originaltitle ? undefined : originaltitle,
                            banner: art && art.banner ? xbmc.vfs2uri(art.banner) : undefined,
                            fanart: xbmc.vfs2uri(art['fanart']),
                            details: [{
                                name: 'Tag',
                                links: (Array.isArray(tag) ? tag : [tag]).map(function (tag) {
                                    return {
                                        label: tag,
                                        link: '#page=Movies&tag=' + tag
                                    };
                                })
                            }, { 'name': 'Rating', 'value': Math.round(rating * 10) / 10 + "/10 (" + votes + " votes)" }, { 'name': 'MPAA Rating', 'value': mpaa }, {
                                name: 'Year',
                                links: [{ label: year, link: '#page=Movies&year=' + year }, { 'label': premiered instanceof String && premiered.length > 0 ? "Premiered: " + moment_1.default(premiered).format('LL') : undefined }]
                            }, {
                                name: 'Genre',
                                links: (Array.isArray(genre) ? genre : [genre]).map(function (genre) {
                                    return {
                                        label: genre,
                                        link: '#page=Movies&genre=' + genre
                                    };
                                })
                            }, { 'name': 'Plot', 'value': plot }, {
                                name: 'Studio',
                                links: (Array.isArray(studio) ? studio : [studio]).map(function (studio) {
                                    return {
                                        label: studio,
                                        link: '#page=Movies&studio=' + studio
                                    };
                                })
                            }, { 'name': 'Statistics', 'links': [{ 'label': "Seasons: " + season }, { 'label': "Episodes: " + episode + " (" + watchedepisodes + " watched)" }, { 'label': lastplayed instanceof String && lastplayed.length > 0 ? "Last Played: " + moment_1.default(lastplayed).format('LL') : undefined }, { 'label': "Added: " + moment_1.default(dateadded).format('LL') }] }, {
                                name: 'Links',
                                links: imdbnumber instanceof String && imdbnumber.length > 0 ? [{
                                    label: 'IMDB',
                                    link: "http://www.imdb.com/title/" + imdbnumber + "/"
                                }] : undefined
                            }],
                            cast: cast.map(function (actor) {
                                return {
                                    label: actor.name,
                                    details: actor.role,
                                    thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
                                    link: '#page=TV Shows&actor=' + actor.name
                                };
                            })
                        };
                    });
                    var getSeasons = xbmc.get({
                        method: 'VideoLibrary.GetSeasons',
                        params: {
                            'properties': ["season", "showtitle", "episode", "thumbnail", "tvshowid", "watchedepisodes"],
                            'tvshowid': tvshowid
                        },
                        cache: true
                    }).then(function (_a) {
                        var _b = _a.seasons,
                            seasons = _b === void 0 ? [] : _b;
                        return seasons.map(function (season) {
                            return {
                                label: season.label,
                                details: [season.episode + ' episodes', season.watchedepisodes + ' watched'],
                                link: "#page=Season&tvshowid=" + season.tvshowid + "&season=" + season.season,
                                thumbnail: season.thumbnail ? xbmc.vfs2uri(season.thumbnail) : 'img/icons/default/DefaultVideo.png'
                            };
                        });
                    });
                    return Promise.all([getShowDetails, getSeasons]).then(function (_a) {
                        var page = _a[0],
                            seasons = _a[1];
                        page.seasons = seasons;
                        return page;
                    });
                }
            }));
        }
    };
});
$__System.register("152", ["133", "14b"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, xbmcFilter_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (xbmcFilter_1_1) {
            xbmcFilter_1 = xbmcFilter_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'TV Shows',
                'view': 'list',
                'groupby': 'title',
                'icon': function (state) {
                    return state['group'] === 'actor' || state['actor'] ? 'img/icons/default/DefaultActor.png' : state['group'] === 'year' || state['year'] ? 'img/icons/default/DefaultYear.png' : state['group'] === 'genre' || state['genre'] ? 'img/icons/default/DefaultGenre.png' : 'img/icons/default/DefaultTVShows.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'TV Shows' };
                },
                'data': function (state) {
                    //http://kodi.wiki/view/JSON-RPC_API/v6#List.Filter.Fields.TVShows
                    var fields = [{ name: 'Title', key: 'title', type: 'string' }, { name: 'Genre', key: 'genre', type: 'string' }, { name: 'Genre', key: 'genreid', type: 'integer' }, { name: 'Year', key: 'year', type: 'integer' }, { name: 'Actor', key: 'actor', type: 'string' }, { name: 'Studio', key: 'studio', type: 'string' }, { name: 'Tag', key: 'tag', type: 'string' }];
                    var filter = xbmcFilter_1.default.fromState(state, fields);
                    var group = state['group'] || this.groupby;
                    return xbmc.get({
                        method: 'VideoLibrary.GetTVShows',
                        params: {
                            'properties': ['title', 'originaltitle', 'sorttitle', 'thumbnail', 'episode'],
                            'filter': filter.out()
                        },
                        cache: true
                    }).then(function (result) {
                        return result.tvshows || [];
                    }).then(function (tvshows) {
                        return tvshows.map(function (tvshow) {
                            return {
                                label: tvshow.title + (tvshow.originaltitle && tvshow.originaltitle != tvshow.title ? ' [' + tvshow.originaltitle + ']' : ''),
                                details: [tvshow.episode + ' episodes'],
                                link: '#page=TV Show&tvshowid=' + tvshow.tvshowid,
                                thumbnail: tvshow.thumbnail ? xbmc.vfs2uri(tvshow.thumbnail) : 'img/icons/default/DefaultVideo.png',
                                title: (tvshow.sorttitle || tvshow.title || tvshow.originaltitle)[0].toUpperCase()
                            };
                        });
                    }).then(function (items) {
                        return {
                            title: 'TV Shows' + (group ? ' by ' + group : ''),
                            subtitle: filter.toString(),
                            items: items
                        };
                    });
                }
            }));
        }
    };
});
$__System.register('14b', [], function (exports_1, context_1) {
    "use strict";

    var __extends = this && this.__extends || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __moduleName = context_1 && context_1.id;
    var Filter;
    return {
        setters: [],
        execute: function () {
            Filter = function () {
                function class_1() {}
                class_1.prototype.out = function () {
                    return undefined;
                };
                class_1.prototype.isEmpty = function () {
                    return true;
                };
                return class_1;
            }();
            Filter.operator = function () {
                function class_2(name, field, value, operator) {
                    if (operator === void 0) {
                        operator = 'contains';
                    }
                    this.name = name;
                    this.field = field;
                    this.value = value;
                    this.operator = operator;
                }
                class_2.prototype.isEmpty = function () {
                    return typeof this.name !== 'string' || this.name.length <= 0 || this.type !== undefined && typeof this.type !== this.type || this.type === 'string' && this.value.length <= 0;
                };
                class_2.prototype.out = function () {
                    if (this.isEmpty()) return undefined;else return {
                        "operator": this.operator,
                        "field": this.field,
                        "value": this.value
                    };
                };
                class_2.prototype.toString = function () {
                    if (this.isEmpty()) return '';else return this.name + ": " + this.value;
                };
                return class_2;
            }();
            Filter.string = function (_super) {
                __extends(class_3, _super);
                function class_3() {
                    var x = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        x[_i] = arguments[_i];
                    }
                    var _this;
                    x[1] = '' + x[1];
                    _this = _super.call(this, x) || this;
                    return _this;
                }
                return class_3;
            }(Filter.operator);
            Filter.number = function (_super) {
                __extends(class_4, _super);
                function class_4() {
                    var x = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        x[_i] = arguments[_i];
                    }
                    var _this;
                    x[1] = Number(x[1]);
                    _this = _super.call(this, x) || this;
                    return _this;
                }
                return class_4;
            }(Filter.operator);
            Filter.combine = function (_super) {
                __extends(class_5, _super);
                function class_5(operator, children) {
                    var _this = _super.call(this) || this;
                    _this.operator = operator;
                    _this.children = children;
                    return _this;
                }
                class_5.prototype.isEmpty = function () {
                    return !Array.isArray(this.children) || this.children.length <= 0;
                };
                class_5.prototype.out = function () {
                    if (this.isEmpty()) return undefined;
                    var o = {};
                    o[this.operator] = this.children.map(function (filter) {
                        return filter.out();
                    });
                    return o;
                };
                class_5.prototype.toString = function () {
                    if (this.isEmpty()) return '';else return this.children.map(function (child) {
                        return child.toString();
                    }).join(" " + this.operator + " ");
                };
                return class_5;
            }(Filter);
            Filter.fromState = function (state, fields) {
                var children = fields.filter(function (field) {
                    return state[field.key] !== undefined;
                }).map(function (field) {
                    return new Filter.operator(field.name, field.key, state[field.key]);
                });
                return new Filter.combine('and', children);
            };
            exports_1("default", Filter);
        }
    };
});
$__System.register("153", ["133", "135", "14b"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1, xbmcFilter_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }, function (xbmcFilter_1_1) {
            xbmcFilter_1 = xbmcFilter_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Episodes',
                'view': 'list',
                'groupby': 'show',
                'parent': 'TV Shows',
                'icon': function (state) {
                    return 'img/icons/default/DefaultTVShowTitle.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'TV Shows' };
                },
                'data': function (state) {
                    //http://kodi.wiki/view/JSON-RPC_API/v6#List.Filter.Fields.Episodes
                    var fields = [{ name: 'Title', key: 'title', 'type': 'string' }, { name: 'Tvshow', key: 'tvshow', 'type': 'string' }, { name: 'Writers', key: 'writers', 'type': 'string' }, { name: 'Genre', key: 'genre', 'type': 'string' }, { name: 'Year', key: 'year', 'type': 'integer' }, { name: 'Director', key: 'director', 'type': 'string' }, { name: 'Actor', key: 'actor', 'type': 'string' }, { name: 'Studio', key: 'studio', 'type': 'string' }, { name: 'Mpaarating', key: 'mpaarating', 'type': 'string' }, { name: 'Tag', key: 'tag', 'type': 'string' }];
                    var filter = xbmcFilter_1.default.fromState(state, fields);
                    var getEpisodes = xbmc.get({
                        method: 'VideoLibrary.GetEpisodes',
                        params: {
                            'properties': ['tvshowid', 'showtitle', 'title', 'thumbnail', 'episode', 'season', 'runtime', 'lastplayed'],
                            'filter': filter.out()
                        },
                        cache: true
                    }).then(function (_a) {
                        var _b = _a.episodes,
                            episodes = _b === void 0 ? [] : _b;
                        return episodes.map(function (episode) {
                            return {
                                show: episode.showtitle,
                                link: '#page=Episode&episodeid=' + episode.episodeid,
                                label: episode.title || '',
                                thumbnail: episode.thumbnail ? xbmc.vfs2uri(episode.thumbnail) : 'img/icons/default/DefaultVideo.png',
                                season: 'Season ' + episode.season,
                                thumbnailWidth: '89px',
                                details: [util_1.seconds2string(episode.runtime), episode.lastplayed ? 'Last played ' + util_1.ymd2string(episode.lastplayed) : undefined],
                                number: episode.episode,
                                actions: [{
                                    label: '▶',
                                    link: util_1.makeJsLink("xbmc.Play({ 'episodeid': " + episode.episodeid + " }, 1)")
                                }]
                            };
                        });
                    });
                    return getEpisodes.then(function (items) {
                        return {
                            title: 'Episodes',
                            subtitle: filter.toString(),
                            items: items
                        };
                    });
                }
            }));
        }
    };
});
(function() {
var define = $__System.amdDefine;
;
(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define("13e", [], factory) : global.moment = factory();
}(this, function() {
  'use strict';
  var hookCallback;
  function utils_hooks__hooks() {
    return hookCallback.apply(null, arguments);
  }
  function setHookCallback(callback) {
    hookCallback = callback;
  }
  function isArray(input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  }
  function isDate(input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  }
  function map(arr, fn) {
    var res = [],
        i;
    for (i = 0; i < arr.length; ++i) {
      res.push(fn(arr[i], i));
    }
    return res;
  }
  function hasOwnProp(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function extend(a, b) {
    for (var i in b) {
      if (hasOwnProp(b, i)) {
        a[i] = b[i];
      }
    }
    if (hasOwnProp(b, 'toString')) {
      a.toString = b.toString;
    }
    if (hasOwnProp(b, 'valueOf')) {
      a.valueOf = b.valueOf;
    }
    return a;
  }
  function create_utc__createUTC(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, true).utc();
  }
  function defaultParsingFlags() {
    return {
      empty: false,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: false,
      invalidMonth: null,
      invalidFormat: false,
      userInvalidated: false,
      iso: false,
      parsedDateParts: [],
      meridiem: null
    };
  }
  function getParsingFlags(m) {
    if (m._pf == null) {
      m._pf = defaultParsingFlags();
    }
    return m._pf;
  }
  var some;
  if (Array.prototype.some) {
    some = Array.prototype.some;
  } else {
    some = function(fun) {
      var t = Object(this);
      var len = t.length >>> 0;
      for (var i = 0; i < len; i++) {
        if (i in t && fun.call(this, t[i], i, t)) {
          return true;
        }
      }
      return false;
    };
  }
  function valid__isValid(m) {
    if (m._isValid == null) {
      var flags = getParsingFlags(m);
      var parsedParts = some.call(flags.parsedDateParts, function(i) {
        return i != null;
      });
      m._isValid = !isNaN(m._d.getTime()) && flags.overflow < 0 && !flags.empty && !flags.invalidMonth && !flags.invalidWeekday && !flags.nullInput && !flags.invalidFormat && !flags.userInvalidated && (!flags.meridiem || (flags.meridiem && parsedParts));
      if (m._strict) {
        m._isValid = m._isValid && flags.charsLeftOver === 0 && flags.unusedTokens.length === 0 && flags.bigHour === undefined;
      }
    }
    return m._isValid;
  }
  function valid__createInvalid(flags) {
    var m = create_utc__createUTC(NaN);
    if (flags != null) {
      extend(getParsingFlags(m), flags);
    } else {
      getParsingFlags(m).userInvalidated = true;
    }
    return m;
  }
  function isUndefined(input) {
    return input === void 0;
  }
  var momentProperties = utils_hooks__hooks.momentProperties = [];
  function copyConfig(to, from) {
    var i,
        prop,
        val;
    if (!isUndefined(from._isAMomentObject)) {
      to._isAMomentObject = from._isAMomentObject;
    }
    if (!isUndefined(from._i)) {
      to._i = from._i;
    }
    if (!isUndefined(from._f)) {
      to._f = from._f;
    }
    if (!isUndefined(from._l)) {
      to._l = from._l;
    }
    if (!isUndefined(from._strict)) {
      to._strict = from._strict;
    }
    if (!isUndefined(from._tzm)) {
      to._tzm = from._tzm;
    }
    if (!isUndefined(from._isUTC)) {
      to._isUTC = from._isUTC;
    }
    if (!isUndefined(from._offset)) {
      to._offset = from._offset;
    }
    if (!isUndefined(from._pf)) {
      to._pf = getParsingFlags(from);
    }
    if (!isUndefined(from._locale)) {
      to._locale = from._locale;
    }
    if (momentProperties.length > 0) {
      for (i in momentProperties) {
        prop = momentProperties[i];
        val = from[prop];
        if (!isUndefined(val)) {
          to[prop] = val;
        }
      }
    }
    return to;
  }
  var updateInProgress = false;
  function Moment(config) {
    copyConfig(this, config);
    this._d = new Date(config._d != null ? config._d.getTime() : NaN);
    if (updateInProgress === false) {
      updateInProgress = true;
      utils_hooks__hooks.updateOffset(this);
      updateInProgress = false;
    }
  }
  function isMoment(obj) {
    return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
  }
  function absFloor(number) {
    if (number < 0) {
      return Math.ceil(number);
    } else {
      return Math.floor(number);
    }
  }
  function toInt(argumentForCoercion) {
    var coercedNumber = +argumentForCoercion,
        value = 0;
    if (coercedNumber !== 0 && isFinite(coercedNumber)) {
      value = absFloor(coercedNumber);
    }
    return value;
  }
  function compareArrays(array1, array2, dontConvert) {
    var len = Math.min(array1.length, array2.length),
        lengthDiff = Math.abs(array1.length - array2.length),
        diffs = 0,
        i;
    for (i = 0; i < len; i++) {
      if ((dontConvert && array1[i] !== array2[i]) || (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
        diffs++;
      }
    }
    return diffs + lengthDiff;
  }
  function warn(msg) {
    if (utils_hooks__hooks.suppressDeprecationWarnings === false && (typeof console !== 'undefined') && console.warn) {
      console.warn('Deprecation warning: ' + msg);
    }
  }
  function deprecate(msg, fn) {
    var firstTime = true;
    return extend(function() {
      if (utils_hooks__hooks.deprecationHandler != null) {
        utils_hooks__hooks.deprecationHandler(null, msg);
      }
      if (firstTime) {
        warn(msg + '\nArguments: ' + Array.prototype.slice.call(arguments).join(', ') + '\n' + (new Error()).stack);
        firstTime = false;
      }
      return fn.apply(this, arguments);
    }, fn);
  }
  var deprecations = {};
  function deprecateSimple(name, msg) {
    if (utils_hooks__hooks.deprecationHandler != null) {
      utils_hooks__hooks.deprecationHandler(name, msg);
    }
    if (!deprecations[name]) {
      warn(msg);
      deprecations[name] = true;
    }
  }
  utils_hooks__hooks.suppressDeprecationWarnings = false;
  utils_hooks__hooks.deprecationHandler = null;
  function isFunction(input) {
    return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
  }
  function isObject(input) {
    return Object.prototype.toString.call(input) === '[object Object]';
  }
  function locale_set__set(config) {
    var prop,
        i;
    for (i in config) {
      prop = config[i];
      if (isFunction(prop)) {
        this[i] = prop;
      } else {
        this['_' + i] = prop;
      }
    }
    this._config = config;
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
  }
  function mergeConfigs(parentConfig, childConfig) {
    var res = extend({}, parentConfig),
        prop;
    for (prop in childConfig) {
      if (hasOwnProp(childConfig, prop)) {
        if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
          res[prop] = {};
          extend(res[prop], parentConfig[prop]);
          extend(res[prop], childConfig[prop]);
        } else if (childConfig[prop] != null) {
          res[prop] = childConfig[prop];
        } else {
          delete res[prop];
        }
      }
    }
    return res;
  }
  function Locale(config) {
    if (config != null) {
      this.set(config);
    }
  }
  var keys;
  if (Object.keys) {
    keys = Object.keys;
  } else {
    keys = function(obj) {
      var i,
          res = [];
      for (i in obj) {
        if (hasOwnProp(obj, i)) {
          res.push(i);
        }
      }
      return res;
    };
  }
  var locales = {};
  var globalLocale;
  function normalizeLocale(key) {
    return key ? key.toLowerCase().replace('_', '-') : key;
  }
  function chooseLocale(names) {
    var i = 0,
        j,
        next,
        locale,
        split;
    while (i < names.length) {
      split = normalizeLocale(names[i]).split('-');
      j = split.length;
      next = normalizeLocale(names[i + 1]);
      next = next ? next.split('-') : null;
      while (j > 0) {
        locale = loadLocale(split.slice(0, j).join('-'));
        if (locale) {
          return locale;
        }
        if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
          break;
        }
        j--;
      }
      i++;
    }
    return null;
  }
  function loadLocale(name) {
    var oldLocale = null;
    if (!locales[name] && (typeof module !== 'undefined') && module && module.exports) {
      try {
        oldLocale = globalLocale._abbr;
        require('./locale/' + name);
        locale_locales__getSetGlobalLocale(oldLocale);
      } catch (e) {}
    }
    return locales[name];
  }
  function locale_locales__getSetGlobalLocale(key, values) {
    var data;
    if (key) {
      if (isUndefined(values)) {
        data = locale_locales__getLocale(key);
      } else {
        data = defineLocale(key, values);
      }
      if (data) {
        globalLocale = data;
      }
    }
    return globalLocale._abbr;
  }
  function defineLocale(name, config) {
    if (config !== null) {
      config.abbr = name;
      if (locales[name] != null) {
        deprecateSimple('defineLocaleOverride', 'use moment.updateLocale(localeName, config) to change ' + 'an existing locale. moment.defineLocale(localeName, ' + 'config) should only be used for creating a new locale');
        config = mergeConfigs(locales[name]._config, config);
      } else if (config.parentLocale != null) {
        if (locales[config.parentLocale] != null) {
          config = mergeConfigs(locales[config.parentLocale]._config, config);
        } else {
          deprecateSimple('parentLocaleUndefined', 'specified parentLocale is not defined yet');
        }
      }
      locales[name] = new Locale(config);
      locale_locales__getSetGlobalLocale(name);
      return locales[name];
    } else {
      delete locales[name];
      return null;
    }
  }
  function updateLocale(name, config) {
    if (config != null) {
      var locale;
      if (locales[name] != null) {
        config = mergeConfigs(locales[name]._config, config);
      }
      locale = new Locale(config);
      locale.parentLocale = locales[name];
      locales[name] = locale;
      locale_locales__getSetGlobalLocale(name);
    } else {
      if (locales[name] != null) {
        if (locales[name].parentLocale != null) {
          locales[name] = locales[name].parentLocale;
        } else if (locales[name] != null) {
          delete locales[name];
        }
      }
    }
    return locales[name];
  }
  function locale_locales__getLocale(key) {
    var locale;
    if (key && key._locale && key._locale._abbr) {
      key = key._locale._abbr;
    }
    if (!key) {
      return globalLocale;
    }
    if (!isArray(key)) {
      locale = loadLocale(key);
      if (locale) {
        return locale;
      }
      key = [key];
    }
    return chooseLocale(key);
  }
  function locale_locales__listLocales() {
    return keys(locales);
  }
  var aliases = {};
  function addUnitAlias(unit, shorthand) {
    var lowerCase = unit.toLowerCase();
    aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
  }
  function normalizeUnits(units) {
    return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
  }
  function normalizeObjectUnits(inputObject) {
    var normalizedInput = {},
        normalizedProp,
        prop;
    for (prop in inputObject) {
      if (hasOwnProp(inputObject, prop)) {
        normalizedProp = normalizeUnits(prop);
        if (normalizedProp) {
          normalizedInput[normalizedProp] = inputObject[prop];
        }
      }
    }
    return normalizedInput;
  }
  function makeGetSet(unit, keepTime) {
    return function(value) {
      if (value != null) {
        get_set__set(this, unit, value);
        utils_hooks__hooks.updateOffset(this, keepTime);
        return this;
      } else {
        return get_set__get(this, unit);
      }
    };
  }
  function get_set__get(mom, unit) {
    return mom.isValid() ? mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
  }
  function get_set__set(mom, unit, value) {
    if (mom.isValid()) {
      mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
    }
  }
  function getSet(units, value) {
    var unit;
    if (typeof units === 'object') {
      for (unit in units) {
        this.set(unit, units[unit]);
      }
    } else {
      units = normalizeUnits(units);
      if (isFunction(this[units])) {
        return this[units](value);
      }
    }
    return this;
  }
  function zeroFill(number, targetLength, forceSign) {
    var absNumber = '' + Math.abs(number),
        zerosToFill = targetLength - absNumber.length,
        sign = number >= 0;
    return (sign ? (forceSign ? '+' : '') : '-') + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
  }
  var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
  var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
  var formatFunctions = {};
  var formatTokenFunctions = {};
  function addFormatToken(token, padded, ordinal, callback) {
    var func = callback;
    if (typeof callback === 'string') {
      func = function() {
        return this[callback]();
      };
    }
    if (token) {
      formatTokenFunctions[token] = func;
    }
    if (padded) {
      formatTokenFunctions[padded[0]] = function() {
        return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
      };
    }
    if (ordinal) {
      formatTokenFunctions[ordinal] = function() {
        return this.localeData().ordinal(func.apply(this, arguments), token);
      };
    }
  }
  function removeFormattingTokens(input) {
    if (input.match(/\[[\s\S]/)) {
      return input.replace(/^\[|\]$/g, '');
    }
    return input.replace(/\\/g, '');
  }
  function makeFormatFunction(format) {
    var array = format.match(formattingTokens),
        i,
        length;
    for (i = 0, length = array.length; i < length; i++) {
      if (formatTokenFunctions[array[i]]) {
        array[i] = formatTokenFunctions[array[i]];
      } else {
        array[i] = removeFormattingTokens(array[i]);
      }
    }
    return function(mom) {
      var output = '',
          i;
      for (i = 0; i < length; i++) {
        output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
      }
      return output;
    };
  }
  function formatMoment(m, format) {
    if (!m.isValid()) {
      return m.localeData().invalidDate();
    }
    format = expandFormat(format, m.localeData());
    formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
    return formatFunctions[format](m);
  }
  function expandFormat(format, locale) {
    var i = 5;
    function replaceLongDateFormatTokens(input) {
      return locale.longDateFormat(input) || input;
    }
    localFormattingTokens.lastIndex = 0;
    while (i >= 0 && localFormattingTokens.test(format)) {
      format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
      localFormattingTokens.lastIndex = 0;
      i -= 1;
    }
    return format;
  }
  var match1 = /\d/;
  var match2 = /\d\d/;
  var match3 = /\d{3}/;
  var match4 = /\d{4}/;
  var match6 = /[+-]?\d{6}/;
  var match1to2 = /\d\d?/;
  var match3to4 = /\d\d\d\d?/;
  var match5to6 = /\d\d\d\d\d\d?/;
  var match1to3 = /\d{1,3}/;
  var match1to4 = /\d{1,4}/;
  var match1to6 = /[+-]?\d{1,6}/;
  var matchUnsigned = /\d+/;
  var matchSigned = /[+-]?\d+/;
  var matchOffset = /Z|[+-]\d\d:?\d\d/gi;
  var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi;
  var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/;
  var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;
  var regexes = {};
  function addRegexToken(token, regex, strictRegex) {
    regexes[token] = isFunction(regex) ? regex : function(isStrict, localeData) {
      return (isStrict && strictRegex) ? strictRegex : regex;
    };
  }
  function getParseRegexForToken(token, config) {
    if (!hasOwnProp(regexes, token)) {
      return new RegExp(unescapeFormat(token));
    }
    return regexes[token](config._strict, config._locale);
  }
  function unescapeFormat(s) {
    return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
      return p1 || p2 || p3 || p4;
    }));
  }
  function regexEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
  }
  var tokens = {};
  function addParseToken(token, callback) {
    var i,
        func = callback;
    if (typeof token === 'string') {
      token = [token];
    }
    if (typeof callback === 'number') {
      func = function(input, array) {
        array[callback] = toInt(input);
      };
    }
    for (i = 0; i < token.length; i++) {
      tokens[token[i]] = func;
    }
  }
  function addWeekParseToken(token, callback) {
    addParseToken(token, function(input, array, config, token) {
      config._w = config._w || {};
      callback(input, config._w, config, token);
    });
  }
  function addTimeToArrayFromToken(token, input, config) {
    if (input != null && hasOwnProp(tokens, token)) {
      tokens[token](input, config._a, config, token);
    }
  }
  var YEAR = 0;
  var MONTH = 1;
  var DATE = 2;
  var HOUR = 3;
  var MINUTE = 4;
  var SECOND = 5;
  var MILLISECOND = 6;
  var WEEK = 7;
  var WEEKDAY = 8;
  var indexOf;
  if (Array.prototype.indexOf) {
    indexOf = Array.prototype.indexOf;
  } else {
    indexOf = function(o) {
      var i;
      for (i = 0; i < this.length; ++i) {
        if (this[i] === o) {
          return i;
        }
      }
      return -1;
    };
  }
  function daysInMonth(year, month) {
    return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
  }
  addFormatToken('M', ['MM', 2], 'Mo', function() {
    return this.month() + 1;
  });
  addFormatToken('MMM', 0, 0, function(format) {
    return this.localeData().monthsShort(this, format);
  });
  addFormatToken('MMMM', 0, 0, function(format) {
    return this.localeData().months(this, format);
  });
  addUnitAlias('month', 'M');
  addRegexToken('M', match1to2);
  addRegexToken('MM', match1to2, match2);
  addRegexToken('MMM', function(isStrict, locale) {
    return locale.monthsShortRegex(isStrict);
  });
  addRegexToken('MMMM', function(isStrict, locale) {
    return locale.monthsRegex(isStrict);
  });
  addParseToken(['M', 'MM'], function(input, array) {
    array[MONTH] = toInt(input) - 1;
  });
  addParseToken(['MMM', 'MMMM'], function(input, array, config, token) {
    var month = config._locale.monthsParse(input, token, config._strict);
    if (month != null) {
      array[MONTH] = month;
    } else {
      getParsingFlags(config).invalidMonth = input;
    }
  });
  var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
  var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
  function localeMonths(m, format) {
    return isArray(this._months) ? this._months[m.month()] : this._months[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }
  var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
  function localeMonthsShort(m, format) {
    return isArray(this._monthsShort) ? this._monthsShort[m.month()] : this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
  }
  function units_month__handleStrictParse(monthName, format, strict) {
    var i,
        ii,
        mom,
        llc = monthName.toLocaleLowerCase();
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
      for (i = 0; i < 12; ++i) {
        mom = create_utc__createUTC([2000, i]);
        this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
        this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'MMM') {
        ii = indexOf.call(this._shortMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._longMonthsParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._longMonthsParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortMonthsParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeMonthsParse(monthName, format, strict) {
    var i,
        mom,
        regex;
    if (this._monthsParseExact) {
      return units_month__handleStrictParse.call(this, monthName, format, strict);
    }
    if (!this._monthsParse) {
      this._monthsParse = [];
      this._longMonthsParse = [];
      this._shortMonthsParse = [];
    }
    for (i = 0; i < 12; i++) {
      mom = create_utc__createUTC([2000, i]);
      if (strict && !this._longMonthsParse[i]) {
        this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
        this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
      }
      if (!strict && !this._monthsParse[i]) {
        regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
        this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
        return i;
      } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
        return i;
      } else if (!strict && this._monthsParse[i].test(monthName)) {
        return i;
      }
    }
  }
  function setMonth(mom, value) {
    var dayOfMonth;
    if (!mom.isValid()) {
      return mom;
    }
    if (typeof value === 'string') {
      if (/^\d+$/.test(value)) {
        value = toInt(value);
      } else {
        value = mom.localeData().monthsParse(value);
        if (typeof value !== 'number') {
          return mom;
        }
      }
    }
    dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
    mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
    return mom;
  }
  function getSetMonth(value) {
    if (value != null) {
      setMonth(this, value);
      utils_hooks__hooks.updateOffset(this, true);
      return this;
    } else {
      return get_set__get(this, 'Month');
    }
  }
  function getDaysInMonth() {
    return daysInMonth(this.year(), this.month());
  }
  var defaultMonthsShortRegex = matchWord;
  function monthsShortRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsShortStrictRegex;
      } else {
        return this._monthsShortRegex;
      }
    } else {
      return this._monthsShortStrictRegex && isStrict ? this._monthsShortStrictRegex : this._monthsShortRegex;
    }
  }
  var defaultMonthsRegex = matchWord;
  function monthsRegex(isStrict) {
    if (this._monthsParseExact) {
      if (!hasOwnProp(this, '_monthsRegex')) {
        computeMonthsParse.call(this);
      }
      if (isStrict) {
        return this._monthsStrictRegex;
      } else {
        return this._monthsRegex;
      }
    } else {
      return this._monthsStrictRegex && isStrict ? this._monthsStrictRegex : this._monthsRegex;
    }
  }
  function computeMonthsParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom;
    for (i = 0; i < 12; i++) {
      mom = create_utc__createUTC([2000, i]);
      shortPieces.push(this.monthsShort(mom, ''));
      longPieces.push(this.months(mom, ''));
      mixedPieces.push(this.months(mom, ''));
      mixedPieces.push(this.monthsShort(mom, ''));
    }
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 12; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._monthsShortRegex = this._monthsRegex;
    this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
  }
  function checkOverflow(m) {
    var overflow;
    var a = m._a;
    if (a && getParsingFlags(m).overflow === -2) {
      overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1;
      if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
        overflow = DATE;
      }
      if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
        overflow = WEEK;
      }
      if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
        overflow = WEEKDAY;
      }
      getParsingFlags(m).overflow = overflow;
    }
    return m;
  }
  var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
  var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/;
  var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
  var isoDates = [['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/], ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/], ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/], ['GGGG-[W]WW', /\d{4}-W\d\d/, false], ['YYYY-DDD', /\d{4}-\d{3}/], ['YYYY-MM', /\d{4}-\d\d/, false], ['YYYYYYMMDD', /[+-]\d{10}/], ['YYYYMMDD', /\d{8}/], ['GGGG[W]WWE', /\d{4}W\d{3}/], ['GGGG[W]WW', /\d{4}W\d{2}/, false], ['YYYYDDD', /\d{7}/]];
  var isoTimes = [['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/], ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/], ['HH:mm:ss', /\d\d:\d\d:\d\d/], ['HH:mm', /\d\d:\d\d/], ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/], ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/], ['HHmmss', /\d\d\d\d\d\d/], ['HHmm', /\d\d\d\d/], ['HH', /\d\d/]];
  var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
  function configFromISO(config) {
    var i,
        l,
        string = config._i,
        match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
        allowTime,
        dateFormat,
        timeFormat,
        tzFormat;
    if (match) {
      getParsingFlags(config).iso = true;
      for (i = 0, l = isoDates.length; i < l; i++) {
        if (isoDates[i][1].exec(match[1])) {
          dateFormat = isoDates[i][0];
          allowTime = isoDates[i][2] !== false;
          break;
        }
      }
      if (dateFormat == null) {
        config._isValid = false;
        return;
      }
      if (match[3]) {
        for (i = 0, l = isoTimes.length; i < l; i++) {
          if (isoTimes[i][1].exec(match[3])) {
            timeFormat = (match[2] || ' ') + isoTimes[i][0];
            break;
          }
        }
        if (timeFormat == null) {
          config._isValid = false;
          return;
        }
      }
      if (!allowTime && timeFormat != null) {
        config._isValid = false;
        return;
      }
      if (match[4]) {
        if (tzRegex.exec(match[4])) {
          tzFormat = 'Z';
        } else {
          config._isValid = false;
          return;
        }
      }
      config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
      configFromStringAndFormat(config);
    } else {
      config._isValid = false;
    }
  }
  function configFromString(config) {
    var matched = aspNetJsonRegex.exec(config._i);
    if (matched !== null) {
      config._d = new Date(+matched[1]);
      return;
    }
    configFromISO(config);
    if (config._isValid === false) {
      delete config._isValid;
      utils_hooks__hooks.createFromInputFallback(config);
    }
  }
  utils_hooks__hooks.createFromInputFallback = deprecate('moment construction falls back to js Date. This is ' + 'discouraged and will be removed in upcoming major ' + 'release. Please refer to ' + 'https://github.com/moment/moment/issues/1407 for more info.', function(config) {
    config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
  });
  function createDate(y, m, d, h, M, s, ms) {
    var date = new Date(y, m, d, h, M, s, ms);
    if (y < 100 && y >= 0 && isFinite(date.getFullYear())) {
      date.setFullYear(y);
    }
    return date;
  }
  function createUTCDate(y) {
    var date = new Date(Date.UTC.apply(null, arguments));
    if (y < 100 && y >= 0 && isFinite(date.getUTCFullYear())) {
      date.setUTCFullYear(y);
    }
    return date;
  }
  addFormatToken('Y', 0, 0, function() {
    var y = this.year();
    return y <= 9999 ? '' + y : '+' + y;
  });
  addFormatToken(0, ['YY', 2], 0, function() {
    return this.year() % 100;
  });
  addFormatToken(0, ['YYYY', 4], 0, 'year');
  addFormatToken(0, ['YYYYY', 5], 0, 'year');
  addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
  addUnitAlias('year', 'y');
  addRegexToken('Y', matchSigned);
  addRegexToken('YY', match1to2, match2);
  addRegexToken('YYYY', match1to4, match4);
  addRegexToken('YYYYY', match1to6, match6);
  addRegexToken('YYYYYY', match1to6, match6);
  addParseToken(['YYYYY', 'YYYYYY'], YEAR);
  addParseToken('YYYY', function(input, array) {
    array[YEAR] = input.length === 2 ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input);
  });
  addParseToken('YY', function(input, array) {
    array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
  });
  addParseToken('Y', function(input, array) {
    array[YEAR] = parseInt(input, 10);
  });
  function daysInYear(year) {
    return isLeapYear(year) ? 366 : 365;
  }
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  utils_hooks__hooks.parseTwoDigitYear = function(input) {
    return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
  };
  var getSetYear = makeGetSet('FullYear', true);
  function getIsLeapYear() {
    return isLeapYear(this.year());
  }
  function firstWeekOffset(year, dow, doy) {
    var fwd = 7 + dow - doy,
        fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
  }
  function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
    var localWeekday = (7 + weekday - dow) % 7,
        weekOffset = firstWeekOffset(year, dow, doy),
        dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
        resYear,
        resDayOfYear;
    if (dayOfYear <= 0) {
      resYear = year - 1;
      resDayOfYear = daysInYear(resYear) + dayOfYear;
    } else if (dayOfYear > daysInYear(year)) {
      resYear = year + 1;
      resDayOfYear = dayOfYear - daysInYear(year);
    } else {
      resYear = year;
      resDayOfYear = dayOfYear;
    }
    return {
      year: resYear,
      dayOfYear: resDayOfYear
    };
  }
  function weekOfYear(mom, dow, doy) {
    var weekOffset = firstWeekOffset(mom.year(), dow, doy),
        week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
        resWeek,
        resYear;
    if (week < 1) {
      resYear = mom.year() - 1;
      resWeek = week + weeksInYear(resYear, dow, doy);
    } else if (week > weeksInYear(mom.year(), dow, doy)) {
      resWeek = week - weeksInYear(mom.year(), dow, doy);
      resYear = mom.year() + 1;
    } else {
      resYear = mom.year();
      resWeek = week;
    }
    return {
      week: resWeek,
      year: resYear
    };
  }
  function weeksInYear(year, dow, doy) {
    var weekOffset = firstWeekOffset(year, dow, doy),
        weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
    return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
  }
  function defaults(a, b, c) {
    if (a != null) {
      return a;
    }
    if (b != null) {
      return b;
    }
    return c;
  }
  function currentDateArray(config) {
    var nowValue = new Date(utils_hooks__hooks.now());
    if (config._useUTC) {
      return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
    }
    return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
  }
  function configFromArray(config) {
    var i,
        date,
        input = [],
        currentDate,
        yearToUse;
    if (config._d) {
      return;
    }
    currentDate = currentDateArray(config);
    if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
      dayOfYearFromWeekInfo(config);
    }
    if (config._dayOfYear) {
      yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
      if (config._dayOfYear > daysInYear(yearToUse)) {
        getParsingFlags(config)._overflowDayOfYear = true;
      }
      date = createUTCDate(yearToUse, 0, config._dayOfYear);
      config._a[MONTH] = date.getUTCMonth();
      config._a[DATE] = date.getUTCDate();
    }
    for (i = 0; i < 3 && config._a[i] == null; ++i) {
      config._a[i] = input[i] = currentDate[i];
    }
    for (; i < 7; i++) {
      config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
    }
    if (config._a[HOUR] === 24 && config._a[MINUTE] === 0 && config._a[SECOND] === 0 && config._a[MILLISECOND] === 0) {
      config._nextDay = true;
      config._a[HOUR] = 0;
    }
    config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
    if (config._tzm != null) {
      config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
    }
    if (config._nextDay) {
      config._a[HOUR] = 24;
    }
  }
  function dayOfYearFromWeekInfo(config) {
    var w,
        weekYear,
        week,
        weekday,
        dow,
        doy,
        temp,
        weekdayOverflow;
    w = config._w;
    if (w.GG != null || w.W != null || w.E != null) {
      dow = 1;
      doy = 4;
      weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
      week = defaults(w.W, 1);
      weekday = defaults(w.E, 1);
      if (weekday < 1 || weekday > 7) {
        weekdayOverflow = true;
      }
    } else {
      dow = config._locale._week.dow;
      doy = config._locale._week.doy;
      weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
      week = defaults(w.w, 1);
      if (w.d != null) {
        weekday = w.d;
        if (weekday < 0 || weekday > 6) {
          weekdayOverflow = true;
        }
      } else if (w.e != null) {
        weekday = w.e + dow;
        if (w.e < 0 || w.e > 6) {
          weekdayOverflow = true;
        }
      } else {
        weekday = dow;
      }
    }
    if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
      getParsingFlags(config)._overflowWeeks = true;
    } else if (weekdayOverflow != null) {
      getParsingFlags(config)._overflowWeekday = true;
    } else {
      temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
      config._a[YEAR] = temp.year;
      config._dayOfYear = temp.dayOfYear;
    }
  }
  utils_hooks__hooks.ISO_8601 = function() {};
  function configFromStringAndFormat(config) {
    if (config._f === utils_hooks__hooks.ISO_8601) {
      configFromISO(config);
      return;
    }
    config._a = [];
    getParsingFlags(config).empty = true;
    var string = '' + config._i,
        i,
        parsedInput,
        tokens,
        token,
        skipped,
        stringLength = string.length,
        totalParsedInputLength = 0;
    tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
    for (i = 0; i < tokens.length; i++) {
      token = tokens[i];
      parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
      if (parsedInput) {
        skipped = string.substr(0, string.indexOf(parsedInput));
        if (skipped.length > 0) {
          getParsingFlags(config).unusedInput.push(skipped);
        }
        string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
        totalParsedInputLength += parsedInput.length;
      }
      if (formatTokenFunctions[token]) {
        if (parsedInput) {
          getParsingFlags(config).empty = false;
        } else {
          getParsingFlags(config).unusedTokens.push(token);
        }
        addTimeToArrayFromToken(token, parsedInput, config);
      } else if (config._strict && !parsedInput) {
        getParsingFlags(config).unusedTokens.push(token);
      }
    }
    getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
    if (string.length > 0) {
      getParsingFlags(config).unusedInput.push(string);
    }
    if (getParsingFlags(config).bigHour === true && config._a[HOUR] <= 12 && config._a[HOUR] > 0) {
      getParsingFlags(config).bigHour = undefined;
    }
    getParsingFlags(config).parsedDateParts = config._a.slice(0);
    getParsingFlags(config).meridiem = config._meridiem;
    config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
    configFromArray(config);
    checkOverflow(config);
  }
  function meridiemFixWrap(locale, hour, meridiem) {
    var isPm;
    if (meridiem == null) {
      return hour;
    }
    if (locale.meridiemHour != null) {
      return locale.meridiemHour(hour, meridiem);
    } else if (locale.isPM != null) {
      isPm = locale.isPM(meridiem);
      if (isPm && hour < 12) {
        hour += 12;
      }
      if (!isPm && hour === 12) {
        hour = 0;
      }
      return hour;
    } else {
      return hour;
    }
  }
  function configFromStringAndArray(config) {
    var tempConfig,
        bestMoment,
        scoreToBeat,
        i,
        currentScore;
    if (config._f.length === 0) {
      getParsingFlags(config).invalidFormat = true;
      config._d = new Date(NaN);
      return;
    }
    for (i = 0; i < config._f.length; i++) {
      currentScore = 0;
      tempConfig = copyConfig({}, config);
      if (config._useUTC != null) {
        tempConfig._useUTC = config._useUTC;
      }
      tempConfig._f = config._f[i];
      configFromStringAndFormat(tempConfig);
      if (!valid__isValid(tempConfig)) {
        continue;
      }
      currentScore += getParsingFlags(tempConfig).charsLeftOver;
      currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
      getParsingFlags(tempConfig).score = currentScore;
      if (scoreToBeat == null || currentScore < scoreToBeat) {
        scoreToBeat = currentScore;
        bestMoment = tempConfig;
      }
    }
    extend(config, bestMoment || tempConfig);
  }
  function configFromObject(config) {
    if (config._d) {
      return;
    }
    var i = normalizeObjectUnits(config._i);
    config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function(obj) {
      return obj && parseInt(obj, 10);
    });
    configFromArray(config);
  }
  function createFromConfig(config) {
    var res = new Moment(checkOverflow(prepareConfig(config)));
    if (res._nextDay) {
      res.add(1, 'd');
      res._nextDay = undefined;
    }
    return res;
  }
  function prepareConfig(config) {
    var input = config._i,
        format = config._f;
    config._locale = config._locale || locale_locales__getLocale(config._l);
    if (input === null || (format === undefined && input === '')) {
      return valid__createInvalid({nullInput: true});
    }
    if (typeof input === 'string') {
      config._i = input = config._locale.preparse(input);
    }
    if (isMoment(input)) {
      return new Moment(checkOverflow(input));
    } else if (isArray(format)) {
      configFromStringAndArray(config);
    } else if (format) {
      configFromStringAndFormat(config);
    } else if (isDate(input)) {
      config._d = input;
    } else {
      configFromInput(config);
    }
    if (!valid__isValid(config)) {
      config._d = null;
    }
    return config;
  }
  function configFromInput(config) {
    var input = config._i;
    if (input === undefined) {
      config._d = new Date(utils_hooks__hooks.now());
    } else if (isDate(input)) {
      config._d = new Date(input.valueOf());
    } else if (typeof input === 'string') {
      configFromString(config);
    } else if (isArray(input)) {
      config._a = map(input.slice(0), function(obj) {
        return parseInt(obj, 10);
      });
      configFromArray(config);
    } else if (typeof(input) === 'object') {
      configFromObject(config);
    } else if (typeof(input) === 'number') {
      config._d = new Date(input);
    } else {
      utils_hooks__hooks.createFromInputFallback(config);
    }
  }
  function createLocalOrUTC(input, format, locale, strict, isUTC) {
    var c = {};
    if (typeof(locale) === 'boolean') {
      strict = locale;
      locale = undefined;
    }
    c._isAMomentObject = true;
    c._useUTC = c._isUTC = isUTC;
    c._l = locale;
    c._i = input;
    c._f = format;
    c._strict = strict;
    return createFromConfig(c);
  }
  function local__createLocal(input, format, locale, strict) {
    return createLocalOrUTC(input, format, locale, strict, false);
  }
  var prototypeMin = deprecate('moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548', function() {
    var other = local__createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other < this ? this : other;
    } else {
      return valid__createInvalid();
    }
  });
  var prototypeMax = deprecate('moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548', function() {
    var other = local__createLocal.apply(null, arguments);
    if (this.isValid() && other.isValid()) {
      return other > this ? this : other;
    } else {
      return valid__createInvalid();
    }
  });
  function pickBy(fn, moments) {
    var res,
        i;
    if (moments.length === 1 && isArray(moments[0])) {
      moments = moments[0];
    }
    if (!moments.length) {
      return local__createLocal();
    }
    res = moments[0];
    for (i = 1; i < moments.length; ++i) {
      if (!moments[i].isValid() || moments[i][fn](res)) {
        res = moments[i];
      }
    }
    return res;
  }
  function min() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isBefore', args);
  }
  function max() {
    var args = [].slice.call(arguments, 0);
    return pickBy('isAfter', args);
  }
  var now = function() {
    return Date.now ? Date.now() : +(new Date());
  };
  function Duration(duration) {
    var normalizedInput = normalizeObjectUnits(duration),
        years = normalizedInput.year || 0,
        quarters = normalizedInput.quarter || 0,
        months = normalizedInput.month || 0,
        weeks = normalizedInput.week || 0,
        days = normalizedInput.day || 0,
        hours = normalizedInput.hour || 0,
        minutes = normalizedInput.minute || 0,
        seconds = normalizedInput.second || 0,
        milliseconds = normalizedInput.millisecond || 0;
    this._milliseconds = +milliseconds + seconds * 1e3 + minutes * 6e4 + hours * 1000 * 60 * 60;
    this._days = +days + weeks * 7;
    this._months = +months + quarters * 3 + years * 12;
    this._data = {};
    this._locale = locale_locales__getLocale();
    this._bubble();
  }
  function isDuration(obj) {
    return obj instanceof Duration;
  }
  function offset(token, separator) {
    addFormatToken(token, 0, 0, function() {
      var offset = this.utcOffset();
      var sign = '+';
      if (offset < 0) {
        offset = -offset;
        sign = '-';
      }
      return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
    });
  }
  offset('Z', ':');
  offset('ZZ', '');
  addRegexToken('Z', matchShortOffset);
  addRegexToken('ZZ', matchShortOffset);
  addParseToken(['Z', 'ZZ'], function(input, array, config) {
    config._useUTC = true;
    config._tzm = offsetFromString(matchShortOffset, input);
  });
  var chunkOffset = /([\+\-]|\d\d)/gi;
  function offsetFromString(matcher, string) {
    var matches = ((string || '').match(matcher) || []);
    var chunk = matches[matches.length - 1] || [];
    var parts = (chunk + '').match(chunkOffset) || ['-', 0, 0];
    var minutes = +(parts[1] * 60) + toInt(parts[2]);
    return parts[0] === '+' ? minutes : -minutes;
  }
  function cloneWithOffset(input, model) {
    var res,
        diff;
    if (model._isUTC) {
      res = model.clone();
      diff = (isMoment(input) || isDate(input) ? input.valueOf() : local__createLocal(input).valueOf()) - res.valueOf();
      res._d.setTime(res._d.valueOf() + diff);
      utils_hooks__hooks.updateOffset(res, false);
      return res;
    } else {
      return local__createLocal(input).local();
    }
  }
  function getDateOffset(m) {
    return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
  }
  utils_hooks__hooks.updateOffset = function() {};
  function getSetOffset(input, keepLocalTime) {
    var offset = this._offset || 0,
        localAdjust;
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    if (input != null) {
      if (typeof input === 'string') {
        input = offsetFromString(matchShortOffset, input);
      } else if (Math.abs(input) < 16) {
        input = input * 60;
      }
      if (!this._isUTC && keepLocalTime) {
        localAdjust = getDateOffset(this);
      }
      this._offset = input;
      this._isUTC = true;
      if (localAdjust != null) {
        this.add(localAdjust, 'm');
      }
      if (offset !== input) {
        if (!keepLocalTime || this._changeInProgress) {
          add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
        } else if (!this._changeInProgress) {
          this._changeInProgress = true;
          utils_hooks__hooks.updateOffset(this, true);
          this._changeInProgress = null;
        }
      }
      return this;
    } else {
      return this._isUTC ? offset : getDateOffset(this);
    }
  }
  function getSetZone(input, keepLocalTime) {
    if (input != null) {
      if (typeof input !== 'string') {
        input = -input;
      }
      this.utcOffset(input, keepLocalTime);
      return this;
    } else {
      return -this.utcOffset();
    }
  }
  function setOffsetToUTC(keepLocalTime) {
    return this.utcOffset(0, keepLocalTime);
  }
  function setOffsetToLocal(keepLocalTime) {
    if (this._isUTC) {
      this.utcOffset(0, keepLocalTime);
      this._isUTC = false;
      if (keepLocalTime) {
        this.subtract(getDateOffset(this), 'm');
      }
    }
    return this;
  }
  function setOffsetToParsedOffset() {
    if (this._tzm) {
      this.utcOffset(this._tzm);
    } else if (typeof this._i === 'string') {
      this.utcOffset(offsetFromString(matchOffset, this._i));
    }
    return this;
  }
  function hasAlignedHourOffset(input) {
    if (!this.isValid()) {
      return false;
    }
    input = input ? local__createLocal(input).utcOffset() : 0;
    return (this.utcOffset() - input) % 60 === 0;
  }
  function isDaylightSavingTime() {
    return (this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset());
  }
  function isDaylightSavingTimeShifted() {
    if (!isUndefined(this._isDSTShifted)) {
      return this._isDSTShifted;
    }
    var c = {};
    copyConfig(c, this);
    c = prepareConfig(c);
    if (c._a) {
      var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
      this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0;
    } else {
      this._isDSTShifted = false;
    }
    return this._isDSTShifted;
  }
  function isLocal() {
    return this.isValid() ? !this._isUTC : false;
  }
  function isUtcOffset() {
    return this.isValid() ? this._isUTC : false;
  }
  function isUtc() {
    return this.isValid() ? this._isUTC && this._offset === 0 : false;
  }
  var aspNetRegex = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/;
  var isoRegex = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
  function create__createDuration(input, key) {
    var duration = input,
        match = null,
        sign,
        ret,
        diffRes;
    if (isDuration(input)) {
      duration = {
        ms: input._milliseconds,
        d: input._days,
        M: input._months
      };
    } else if (typeof input === 'number') {
      duration = {};
      if (key) {
        duration[key] = input;
      } else {
        duration.milliseconds = input;
      }
    } else if (!!(match = aspNetRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
        y: 0,
        d: toInt(match[DATE]) * sign,
        h: toInt(match[HOUR]) * sign,
        m: toInt(match[MINUTE]) * sign,
        s: toInt(match[SECOND]) * sign,
        ms: toInt(match[MILLISECOND]) * sign
      };
    } else if (!!(match = isoRegex.exec(input))) {
      sign = (match[1] === '-') ? -1 : 1;
      duration = {
        y: parseIso(match[2], sign),
        M: parseIso(match[3], sign),
        w: parseIso(match[4], sign),
        d: parseIso(match[5], sign),
        h: parseIso(match[6], sign),
        m: parseIso(match[7], sign),
        s: parseIso(match[8], sign)
      };
    } else if (duration == null) {
      duration = {};
    } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
      diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));
      duration = {};
      duration.ms = diffRes.milliseconds;
      duration.M = diffRes.months;
    }
    ret = new Duration(duration);
    if (isDuration(input) && hasOwnProp(input, '_locale')) {
      ret._locale = input._locale;
    }
    return ret;
  }
  create__createDuration.fn = Duration.prototype;
  function parseIso(inp, sign) {
    var res = inp && parseFloat(inp.replace(',', '.'));
    return (isNaN(res) ? 0 : res) * sign;
  }
  function positiveMomentsDifference(base, other) {
    var res = {
      milliseconds: 0,
      months: 0
    };
    res.months = other.month() - base.month() + (other.year() - base.year()) * 12;
    if (base.clone().add(res.months, 'M').isAfter(other)) {
      --res.months;
    }
    res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
    return res;
  }
  function momentsDifference(base, other) {
    var res;
    if (!(base.isValid() && other.isValid())) {
      return {
        milliseconds: 0,
        months: 0
      };
    }
    other = cloneWithOffset(other, base);
    if (base.isBefore(other)) {
      res = positiveMomentsDifference(base, other);
    } else {
      res = positiveMomentsDifference(other, base);
      res.milliseconds = -res.milliseconds;
      res.months = -res.months;
    }
    return res;
  }
  function absRound(number) {
    if (number < 0) {
      return Math.round(-1 * number) * -1;
    } else {
      return Math.round(number);
    }
  }
  function createAdder(direction, name) {
    return function(val, period) {
      var dur,
          tmp;
      if (period !== null && !isNaN(+period)) {
        deprecateSimple(name, 'moment().' + name + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
        tmp = val;
        val = period;
        period = tmp;
      }
      val = typeof val === 'string' ? +val : val;
      dur = create__createDuration(val, period);
      add_subtract__addSubtract(this, dur, direction);
      return this;
    };
  }
  function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
    var milliseconds = duration._milliseconds,
        days = absRound(duration._days),
        months = absRound(duration._months);
    if (!mom.isValid()) {
      return;
    }
    updateOffset = updateOffset == null ? true : updateOffset;
    if (milliseconds) {
      mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
    }
    if (days) {
      get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
    }
    if (months) {
      setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
    }
    if (updateOffset) {
      utils_hooks__hooks.updateOffset(mom, days || months);
    }
  }
  var add_subtract__add = createAdder(1, 'add');
  var add_subtract__subtract = createAdder(-1, 'subtract');
  function moment_calendar__calendar(time, formats) {
    var now = time || local__createLocal(),
        sod = cloneWithOffset(now, this).startOf('day'),
        diff = this.diff(sod, 'days', true),
        format = diff < -6 ? 'sameElse' : diff < -1 ? 'lastWeek' : diff < 0 ? 'lastDay' : diff < 1 ? 'sameDay' : diff < 2 ? 'nextDay' : diff < 7 ? 'nextWeek' : 'sameElse';
    var output = formats && (isFunction(formats[format]) ? formats[format]() : formats[format]);
    return this.format(output || this.localeData().calendar(format, this, local__createLocal(now)));
  }
  function clone() {
    return new Moment(this);
  }
  function isAfter(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
      return this.valueOf() > localInput.valueOf();
    } else {
      return localInput.valueOf() < this.clone().startOf(units).valueOf();
    }
  }
  function isBefore(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input);
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(!isUndefined(units) ? units : 'millisecond');
    if (units === 'millisecond') {
      return this.valueOf() < localInput.valueOf();
    } else {
      return this.clone().endOf(units).valueOf() < localInput.valueOf();
    }
  }
  function isBetween(from, to, units, inclusivity) {
    inclusivity = inclusivity || '()';
    return (inclusivity[0] === '(' ? this.isAfter(from, units) : !this.isBefore(from, units)) && (inclusivity[1] === ')' ? this.isBefore(to, units) : !this.isAfter(to, units));
  }
  function isSame(input, units) {
    var localInput = isMoment(input) ? input : local__createLocal(input),
        inputMs;
    if (!(this.isValid() && localInput.isValid())) {
      return false;
    }
    units = normalizeUnits(units || 'millisecond');
    if (units === 'millisecond') {
      return this.valueOf() === localInput.valueOf();
    } else {
      inputMs = localInput.valueOf();
      return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
    }
  }
  function isSameOrAfter(input, units) {
    return this.isSame(input, units) || this.isAfter(input, units);
  }
  function isSameOrBefore(input, units) {
    return this.isSame(input, units) || this.isBefore(input, units);
  }
  function diff(input, units, asFloat) {
    var that,
        zoneDelta,
        delta,
        output;
    if (!this.isValid()) {
      return NaN;
    }
    that = cloneWithOffset(input, this);
    if (!that.isValid()) {
      return NaN;
    }
    zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
    units = normalizeUnits(units);
    if (units === 'year' || units === 'month' || units === 'quarter') {
      output = monthDiff(this, that);
      if (units === 'quarter') {
        output = output / 3;
      } else if (units === 'year') {
        output = output / 12;
      }
    } else {
      delta = this - that;
      output = units === 'second' ? delta / 1e3 : units === 'minute' ? delta / 6e4 : units === 'hour' ? delta / 36e5 : units === 'day' ? (delta - zoneDelta) / 864e5 : units === 'week' ? (delta - zoneDelta) / 6048e5 : delta;
    }
    return asFloat ? output : absFloor(output);
  }
  function monthDiff(a, b) {
    var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
        anchor = a.clone().add(wholeMonthDiff, 'months'),
        anchor2,
        adjust;
    if (b - anchor < 0) {
      anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
      adjust = (b - anchor) / (anchor - anchor2);
    } else {
      anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
      adjust = (b - anchor) / (anchor2 - anchor);
    }
    return -(wholeMonthDiff + adjust) || 0;
  }
  utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
  utils_hooks__hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
  function toString() {
    return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
  }
  function moment_format__toISOString() {
    var m = this.clone().utc();
    if (0 < m.year() && m.year() <= 9999) {
      if (isFunction(Date.prototype.toISOString)) {
        return this.toDate().toISOString();
      } else {
        return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
      }
    } else {
      return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
    }
  }
  function format(inputString) {
    if (!inputString) {
      inputString = this.isUtc() ? utils_hooks__hooks.defaultFormatUtc : utils_hooks__hooks.defaultFormat;
    }
    var output = formatMoment(this, inputString);
    return this.localeData().postformat(output);
  }
  function from(time, withoutSuffix) {
    if (this.isValid() && ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())) {
      return create__createDuration({
        to: this,
        from: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function fromNow(withoutSuffix) {
    return this.from(local__createLocal(), withoutSuffix);
  }
  function to(time, withoutSuffix) {
    if (this.isValid() && ((isMoment(time) && time.isValid()) || local__createLocal(time).isValid())) {
      return create__createDuration({
        from: this,
        to: time
      }).locale(this.locale()).humanize(!withoutSuffix);
    } else {
      return this.localeData().invalidDate();
    }
  }
  function toNow(withoutSuffix) {
    return this.to(local__createLocal(), withoutSuffix);
  }
  function locale(key) {
    var newLocaleData;
    if (key === undefined) {
      return this._locale._abbr;
    } else {
      newLocaleData = locale_locales__getLocale(key);
      if (newLocaleData != null) {
        this._locale = newLocaleData;
      }
      return this;
    }
  }
  var lang = deprecate('moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.', function(key) {
    if (key === undefined) {
      return this.localeData();
    } else {
      return this.locale(key);
    }
  });
  function localeData() {
    return this._locale;
  }
  function startOf(units) {
    units = normalizeUnits(units);
    switch (units) {
      case 'year':
        this.month(0);
      case 'quarter':
      case 'month':
        this.date(1);
      case 'week':
      case 'isoWeek':
      case 'day':
      case 'date':
        this.hours(0);
      case 'hour':
        this.minutes(0);
      case 'minute':
        this.seconds(0);
      case 'second':
        this.milliseconds(0);
    }
    if (units === 'week') {
      this.weekday(0);
    }
    if (units === 'isoWeek') {
      this.isoWeekday(1);
    }
    if (units === 'quarter') {
      this.month(Math.floor(this.month() / 3) * 3);
    }
    return this;
  }
  function endOf(units) {
    units = normalizeUnits(units);
    if (units === undefined || units === 'millisecond') {
      return this;
    }
    if (units === 'date') {
      units = 'day';
    }
    return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
  }
  function to_type__valueOf() {
    return this._d.valueOf() - ((this._offset || 0) * 60000);
  }
  function unix() {
    return Math.floor(this.valueOf() / 1000);
  }
  function toDate() {
    return this._offset ? new Date(this.valueOf()) : this._d;
  }
  function toArray() {
    var m = this;
    return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
  }
  function toObject() {
    var m = this;
    return {
      years: m.year(),
      months: m.month(),
      date: m.date(),
      hours: m.hours(),
      minutes: m.minutes(),
      seconds: m.seconds(),
      milliseconds: m.milliseconds()
    };
  }
  function toJSON() {
    return this.isValid() ? this.toISOString() : null;
  }
  function moment_valid__isValid() {
    return valid__isValid(this);
  }
  function parsingFlags() {
    return extend({}, getParsingFlags(this));
  }
  function invalidAt() {
    return getParsingFlags(this).overflow;
  }
  function creationData() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  addFormatToken(0, ['gg', 2], 0, function() {
    return this.weekYear() % 100;
  });
  addFormatToken(0, ['GG', 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function addWeekYearFormatToken(token, getter) {
    addFormatToken(0, [token, token.length], 0, getter);
  }
  addWeekYearFormatToken('gggg', 'weekYear');
  addWeekYearFormatToken('ggggg', 'weekYear');
  addWeekYearFormatToken('GGGG', 'isoWeekYear');
  addWeekYearFormatToken('GGGGG', 'isoWeekYear');
  addUnitAlias('weekYear', 'gg');
  addUnitAlias('isoWeekYear', 'GG');
  addRegexToken('G', matchSigned);
  addRegexToken('g', matchSigned);
  addRegexToken('GG', match1to2, match2);
  addRegexToken('gg', match1to2, match2);
  addRegexToken('GGGG', match1to4, match4);
  addRegexToken('gggg', match1to4, match4);
  addRegexToken('GGGGG', match1to6, match6);
  addRegexToken('ggggg', match1to6, match6);
  addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function(input, week, config, token) {
    week[token.substr(0, 2)] = toInt(input);
  });
  addWeekParseToken(['gg', 'GG'], function(input, week, config, token) {
    week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
  });
  function getSetWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }
  function getSetISOWeekYear(input) {
    return getSetWeekYearHelper.call(this, input, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function getISOWeeksInYear() {
    return weeksInYear(this.year(), 1, 4);
  }
  function getWeeksInYear() {
    var weekInfo = this.localeData()._week;
    return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
  }
  function getSetWeekYearHelper(input, week, weekday, dow, doy) {
    var weeksTarget;
    if (input == null) {
      return weekOfYear(this, dow, doy).year;
    } else {
      weeksTarget = weeksInYear(input, dow, doy);
      if (week > weeksTarget) {
        week = weeksTarget;
      }
      return setWeekAll.call(this, input, week, weekday, dow, doy);
    }
  }
  function setWeekAll(weekYear, week, weekday, dow, doy) {
    var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
        date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
    this.year(date.getUTCFullYear());
    this.month(date.getUTCMonth());
    this.date(date.getUTCDate());
    return this;
  }
  addFormatToken('Q', 0, 'Qo', 'quarter');
  addUnitAlias('quarter', 'Q');
  addRegexToken('Q', match1);
  addParseToken('Q', function(input, array) {
    array[MONTH] = (toInt(input) - 1) * 3;
  });
  function getSetQuarter(input) {
    return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
  }
  addFormatToken('w', ['ww', 2], 'wo', 'week');
  addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
  addUnitAlias('week', 'w');
  addUnitAlias('isoWeek', 'W');
  addRegexToken('w', match1to2);
  addRegexToken('ww', match1to2, match2);
  addRegexToken('W', match1to2);
  addRegexToken('WW', match1to2, match2);
  addWeekParseToken(['w', 'ww', 'W', 'WW'], function(input, week, config, token) {
    week[token.substr(0, 1)] = toInt(input);
  });
  function localeWeek(mom) {
    return weekOfYear(mom, this._week.dow, this._week.doy).week;
  }
  var defaultLocaleWeek = {
    dow: 0,
    doy: 6
  };
  function localeFirstDayOfWeek() {
    return this._week.dow;
  }
  function localeFirstDayOfYear() {
    return this._week.doy;
  }
  function getSetWeek(input) {
    var week = this.localeData().week(this);
    return input == null ? week : this.add((input - week) * 7, 'd');
  }
  function getSetISOWeek(input) {
    var week = weekOfYear(this, 1, 4).week;
    return input == null ? week : this.add((input - week) * 7, 'd');
  }
  addFormatToken('D', ['DD', 2], 'Do', 'date');
  addUnitAlias('date', 'D');
  addRegexToken('D', match1to2);
  addRegexToken('DD', match1to2, match2);
  addRegexToken('Do', function(isStrict, locale) {
    return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
  });
  addParseToken(['D', 'DD'], DATE);
  addParseToken('Do', function(input, array) {
    array[DATE] = toInt(input.match(match1to2)[0], 10);
  });
  var getSetDayOfMonth = makeGetSet('Date', true);
  addFormatToken('d', 0, 'do', 'day');
  addFormatToken('dd', 0, 0, function(format) {
    return this.localeData().weekdaysMin(this, format);
  });
  addFormatToken('ddd', 0, 0, function(format) {
    return this.localeData().weekdaysShort(this, format);
  });
  addFormatToken('dddd', 0, 0, function(format) {
    return this.localeData().weekdays(this, format);
  });
  addFormatToken('e', 0, 0, 'weekday');
  addFormatToken('E', 0, 0, 'isoWeekday');
  addUnitAlias('day', 'd');
  addUnitAlias('weekday', 'e');
  addUnitAlias('isoWeekday', 'E');
  addRegexToken('d', match1to2);
  addRegexToken('e', match1to2);
  addRegexToken('E', match1to2);
  addRegexToken('dd', function(isStrict, locale) {
    return locale.weekdaysMinRegex(isStrict);
  });
  addRegexToken('ddd', function(isStrict, locale) {
    return locale.weekdaysShortRegex(isStrict);
  });
  addRegexToken('dddd', function(isStrict, locale) {
    return locale.weekdaysRegex(isStrict);
  });
  addWeekParseToken(['dd', 'ddd', 'dddd'], function(input, week, config, token) {
    var weekday = config._locale.weekdaysParse(input, token, config._strict);
    if (weekday != null) {
      week.d = weekday;
    } else {
      getParsingFlags(config).invalidWeekday = input;
    }
  });
  addWeekParseToken(['d', 'e', 'E'], function(input, week, config, token) {
    week[token] = toInt(input);
  });
  function parseWeekday(input, locale) {
    if (typeof input !== 'string') {
      return input;
    }
    if (!isNaN(input)) {
      return parseInt(input, 10);
    }
    input = locale.weekdaysParse(input);
    if (typeof input === 'number') {
      return input;
    }
    return null;
  }
  var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
  function localeWeekdays(m, format) {
    return isArray(this._weekdays) ? this._weekdays[m.day()] : this._weekdays[this._weekdays.isFormat.test(format) ? 'format' : 'standalone'][m.day()];
  }
  var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
  function localeWeekdaysShort(m) {
    return this._weekdaysShort[m.day()];
  }
  var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
  function localeWeekdaysMin(m) {
    return this._weekdaysMin[m.day()];
  }
  function day_of_week__handleStrictParse(weekdayName, format, strict) {
    var i,
        ii,
        mom,
        llc = weekdayName.toLocaleLowerCase();
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._minWeekdaysParse = [];
      for (i = 0; i < 7; ++i) {
        mom = create_utc__createUTC([2000, 1]).day(i);
        this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
        this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
        this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
      }
    }
    if (strict) {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    } else {
      if (format === 'dddd') {
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else if (format === 'ddd') {
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._minWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      } else {
        ii = indexOf.call(this._minWeekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._weekdaysParse, llc);
        if (ii !== -1) {
          return ii;
        }
        ii = indexOf.call(this._shortWeekdaysParse, llc);
        return ii !== -1 ? ii : null;
      }
    }
  }
  function localeWeekdaysParse(weekdayName, format, strict) {
    var i,
        mom,
        regex;
    if (this._weekdaysParseExact) {
      return day_of_week__handleStrictParse.call(this, weekdayName, format, strict);
    }
    if (!this._weekdaysParse) {
      this._weekdaysParse = [];
      this._minWeekdaysParse = [];
      this._shortWeekdaysParse = [];
      this._fullWeekdaysParse = [];
    }
    for (i = 0; i < 7; i++) {
      mom = create_utc__createUTC([2000, 1]).day(i);
      if (strict && !this._fullWeekdaysParse[i]) {
        this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\.?') + '$', 'i');
        this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\.?') + '$', 'i');
        this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\.?') + '$', 'i');
      }
      if (!this._weekdaysParse[i]) {
        regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
        this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
      }
      if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
        return i;
      } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
        return i;
      }
    }
  }
  function getSetDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    if (input != null) {
      input = parseWeekday(input, this.localeData());
      return this.add(input - day, 'd');
    } else {
      return day;
    }
  }
  function getSetLocaleDayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return input == null ? weekday : this.add(input - weekday, 'd');
  }
  function getSetISODayOfWeek(input) {
    if (!this.isValid()) {
      return input != null ? this : NaN;
    }
    return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
  }
  var defaultWeekdaysRegex = matchWord;
  function weekdaysRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysStrictRegex;
      } else {
        return this._weekdaysRegex;
      }
    } else {
      return this._weekdaysStrictRegex && isStrict ? this._weekdaysStrictRegex : this._weekdaysRegex;
    }
  }
  var defaultWeekdaysShortRegex = matchWord;
  function weekdaysShortRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysShortStrictRegex;
      } else {
        return this._weekdaysShortRegex;
      }
    } else {
      return this._weekdaysShortStrictRegex && isStrict ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
    }
  }
  var defaultWeekdaysMinRegex = matchWord;
  function weekdaysMinRegex(isStrict) {
    if (this._weekdaysParseExact) {
      if (!hasOwnProp(this, '_weekdaysRegex')) {
        computeWeekdaysParse.call(this);
      }
      if (isStrict) {
        return this._weekdaysMinStrictRegex;
      } else {
        return this._weekdaysMinRegex;
      }
    } else {
      return this._weekdaysMinStrictRegex && isStrict ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
    }
  }
  function computeWeekdaysParse() {
    function cmpLenRev(a, b) {
      return b.length - a.length;
    }
    var minPieces = [],
        shortPieces = [],
        longPieces = [],
        mixedPieces = [],
        i,
        mom,
        minp,
        shortp,
        longp;
    for (i = 0; i < 7; i++) {
      mom = create_utc__createUTC([2000, 1]).day(i);
      minp = this.weekdaysMin(mom, '');
      shortp = this.weekdaysShort(mom, '');
      longp = this.weekdays(mom, '');
      minPieces.push(minp);
      shortPieces.push(shortp);
      longPieces.push(longp);
      mixedPieces.push(minp);
      mixedPieces.push(shortp);
      mixedPieces.push(longp);
    }
    minPieces.sort(cmpLenRev);
    shortPieces.sort(cmpLenRev);
    longPieces.sort(cmpLenRev);
    mixedPieces.sort(cmpLenRev);
    for (i = 0; i < 7; i++) {
      shortPieces[i] = regexEscape(shortPieces[i]);
      longPieces[i] = regexEscape(longPieces[i]);
      mixedPieces[i] = regexEscape(mixedPieces[i]);
    }
    this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
    this._weekdaysShortRegex = this._weekdaysRegex;
    this._weekdaysMinRegex = this._weekdaysRegex;
    this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
    this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
    this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
  }
  addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
  addUnitAlias('dayOfYear', 'DDD');
  addRegexToken('DDD', match1to3);
  addRegexToken('DDDD', match3);
  addParseToken(['DDD', 'DDDD'], function(input, array, config) {
    config._dayOfYear = toInt(input);
  });
  function getSetDayOfYear(input) {
    var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
    return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
  }
  function hFormat() {
    return this.hours() % 12 || 12;
  }
  function kFormat() {
    return this.hours() || 24;
  }
  addFormatToken('H', ['HH', 2], 0, 'hour');
  addFormatToken('h', ['hh', 2], 0, hFormat);
  addFormatToken('k', ['kk', 2], 0, kFormat);
  addFormatToken('hmm', 0, 0, function() {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
  });
  addFormatToken('hmmss', 0, 0, function() {
    return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  addFormatToken('Hmm', 0, 0, function() {
    return '' + this.hours() + zeroFill(this.minutes(), 2);
  });
  addFormatToken('Hmmss', 0, 0, function() {
    return '' + this.hours() + zeroFill(this.minutes(), 2) + zeroFill(this.seconds(), 2);
  });
  function meridiem(token, lowercase) {
    addFormatToken(token, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
    });
  }
  meridiem('a', true);
  meridiem('A', false);
  addUnitAlias('hour', 'h');
  function matchMeridiem(isStrict, locale) {
    return locale._meridiemParse;
  }
  addRegexToken('a', matchMeridiem);
  addRegexToken('A', matchMeridiem);
  addRegexToken('H', match1to2);
  addRegexToken('h', match1to2);
  addRegexToken('HH', match1to2, match2);
  addRegexToken('hh', match1to2, match2);
  addRegexToken('hmm', match3to4);
  addRegexToken('hmmss', match5to6);
  addRegexToken('Hmm', match3to4);
  addRegexToken('Hmmss', match5to6);
  addParseToken(['H', 'HH'], HOUR);
  addParseToken(['a', 'A'], function(input, array, config) {
    config._isPm = config._locale.isPM(input);
    config._meridiem = input;
  });
  addParseToken(['h', 'hh'], function(input, array, config) {
    array[HOUR] = toInt(input);
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmm', function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('hmmss', function(input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
    getParsingFlags(config).bigHour = true;
  });
  addParseToken('Hmm', function(input, array, config) {
    var pos = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos));
    array[MINUTE] = toInt(input.substr(pos));
  });
  addParseToken('Hmmss', function(input, array, config) {
    var pos1 = input.length - 4;
    var pos2 = input.length - 2;
    array[HOUR] = toInt(input.substr(0, pos1));
    array[MINUTE] = toInt(input.substr(pos1, 2));
    array[SECOND] = toInt(input.substr(pos2));
  });
  function localeIsPM(input) {
    return ((input + '').toLowerCase().charAt(0) === 'p');
  }
  var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
  function localeMeridiem(hours, minutes, isLower) {
    if (hours > 11) {
      return isLower ? 'pm' : 'PM';
    } else {
      return isLower ? 'am' : 'AM';
    }
  }
  var getSetHour = makeGetSet('Hours', true);
  addFormatToken('m', ['mm', 2], 0, 'minute');
  addUnitAlias('minute', 'm');
  addRegexToken('m', match1to2);
  addRegexToken('mm', match1to2, match2);
  addParseToken(['m', 'mm'], MINUTE);
  var getSetMinute = makeGetSet('Minutes', false);
  addFormatToken('s', ['ss', 2], 0, 'second');
  addUnitAlias('second', 's');
  addRegexToken('s', match1to2);
  addRegexToken('ss', match1to2, match2);
  addParseToken(['s', 'ss'], SECOND);
  var getSetSecond = makeGetSet('Seconds', false);
  addFormatToken('S', 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  addFormatToken(0, ['SS', 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  addFormatToken(0, ['SSS', 3], 0, 'millisecond');
  addFormatToken(0, ['SSSS', 4], 0, function() {
    return this.millisecond() * 10;
  });
  addFormatToken(0, ['SSSSS', 5], 0, function() {
    return this.millisecond() * 100;
  });
  addFormatToken(0, ['SSSSSS', 6], 0, function() {
    return this.millisecond() * 1000;
  });
  addFormatToken(0, ['SSSSSSS', 7], 0, function() {
    return this.millisecond() * 10000;
  });
  addFormatToken(0, ['SSSSSSSS', 8], 0, function() {
    return this.millisecond() * 100000;
  });
  addFormatToken(0, ['SSSSSSSSS', 9], 0, function() {
    return this.millisecond() * 1000000;
  });
  addUnitAlias('millisecond', 'ms');
  addRegexToken('S', match1to3, match1);
  addRegexToken('SS', match1to3, match2);
  addRegexToken('SSS', match1to3, match3);
  var token;
  for (token = 'SSSS'; token.length <= 9; token += 'S') {
    addRegexToken(token, matchUnsigned);
  }
  function parseMs(input, array) {
    array[MILLISECOND] = toInt(('0.' + input) * 1000);
  }
  for (token = 'S'; token.length <= 9; token += 'S') {
    addParseToken(token, parseMs);
  }
  var getSetMillisecond = makeGetSet('Milliseconds', false);
  addFormatToken('z', 0, 0, 'zoneAbbr');
  addFormatToken('zz', 0, 0, 'zoneName');
  function getZoneAbbr() {
    return this._isUTC ? 'UTC' : '';
  }
  function getZoneName() {
    return this._isUTC ? 'Coordinated Universal Time' : '';
  }
  var momentPrototype__proto = Moment.prototype;
  momentPrototype__proto.add = add_subtract__add;
  momentPrototype__proto.calendar = moment_calendar__calendar;
  momentPrototype__proto.clone = clone;
  momentPrototype__proto.diff = diff;
  momentPrototype__proto.endOf = endOf;
  momentPrototype__proto.format = format;
  momentPrototype__proto.from = from;
  momentPrototype__proto.fromNow = fromNow;
  momentPrototype__proto.to = to;
  momentPrototype__proto.toNow = toNow;
  momentPrototype__proto.get = getSet;
  momentPrototype__proto.invalidAt = invalidAt;
  momentPrototype__proto.isAfter = isAfter;
  momentPrototype__proto.isBefore = isBefore;
  momentPrototype__proto.isBetween = isBetween;
  momentPrototype__proto.isSame = isSame;
  momentPrototype__proto.isSameOrAfter = isSameOrAfter;
  momentPrototype__proto.isSameOrBefore = isSameOrBefore;
  momentPrototype__proto.isValid = moment_valid__isValid;
  momentPrototype__proto.lang = lang;
  momentPrototype__proto.locale = locale;
  momentPrototype__proto.localeData = localeData;
  momentPrototype__proto.max = prototypeMax;
  momentPrototype__proto.min = prototypeMin;
  momentPrototype__proto.parsingFlags = parsingFlags;
  momentPrototype__proto.set = getSet;
  momentPrototype__proto.startOf = startOf;
  momentPrototype__proto.subtract = add_subtract__subtract;
  momentPrototype__proto.toArray = toArray;
  momentPrototype__proto.toObject = toObject;
  momentPrototype__proto.toDate = toDate;
  momentPrototype__proto.toISOString = moment_format__toISOString;
  momentPrototype__proto.toJSON = toJSON;
  momentPrototype__proto.toString = toString;
  momentPrototype__proto.unix = unix;
  momentPrototype__proto.valueOf = to_type__valueOf;
  momentPrototype__proto.creationData = creationData;
  momentPrototype__proto.year = getSetYear;
  momentPrototype__proto.isLeapYear = getIsLeapYear;
  momentPrototype__proto.weekYear = getSetWeekYear;
  momentPrototype__proto.isoWeekYear = getSetISOWeekYear;
  momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;
  momentPrototype__proto.month = getSetMonth;
  momentPrototype__proto.daysInMonth = getDaysInMonth;
  momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek;
  momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek;
  momentPrototype__proto.weeksInYear = getWeeksInYear;
  momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;
  momentPrototype__proto.date = getSetDayOfMonth;
  momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek;
  momentPrototype__proto.weekday = getSetLocaleDayOfWeek;
  momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
  momentPrototype__proto.dayOfYear = getSetDayOfYear;
  momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;
  momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;
  momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;
  momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;
  momentPrototype__proto.utcOffset = getSetOffset;
  momentPrototype__proto.utc = setOffsetToUTC;
  momentPrototype__proto.local = setOffsetToLocal;
  momentPrototype__proto.parseZone = setOffsetToParsedOffset;
  momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
  momentPrototype__proto.isDST = isDaylightSavingTime;
  momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted;
  momentPrototype__proto.isLocal = isLocal;
  momentPrototype__proto.isUtcOffset = isUtcOffset;
  momentPrototype__proto.isUtc = isUtc;
  momentPrototype__proto.isUTC = isUtc;
  momentPrototype__proto.zoneAbbr = getZoneAbbr;
  momentPrototype__proto.zoneName = getZoneName;
  momentPrototype__proto.dates = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
  momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
  momentPrototype__proto.years = deprecate('years accessor is deprecated. Use year instead', getSetYear);
  momentPrototype__proto.zone = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);
  var momentPrototype = momentPrototype__proto;
  function moment__createUnix(input) {
    return local__createLocal(input * 1000);
  }
  function moment__createInZone() {
    return local__createLocal.apply(null, arguments).parseZone();
  }
  var defaultCalendar = {
    sameDay: '[Today at] LT',
    nextDay: '[Tomorrow at] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Yesterday at] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L'
  };
  function locale_calendar__calendar(key, mom, now) {
    var output = this._calendar[key];
    return isFunction(output) ? output.call(mom, now) : output;
  }
  var defaultLongDateFormat = {
    LTS: 'h:mm:ss A',
    LT: 'h:mm A',
    L: 'MM/DD/YYYY',
    LL: 'MMMM D, YYYY',
    LLL: 'MMMM D, YYYY h:mm A',
    LLLL: 'dddd, MMMM D, YYYY h:mm A'
  };
  function longDateFormat(key) {
    var format = this._longDateFormat[key],
        formatUpper = this._longDateFormat[key.toUpperCase()];
    if (format || !formatUpper) {
      return format;
    }
    this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) {
      return val.slice(1);
    });
    return this._longDateFormat[key];
  }
  var defaultInvalidDate = 'Invalid date';
  function invalidDate() {
    return this._invalidDate;
  }
  var defaultOrdinal = '%d';
  var defaultOrdinalParse = /\d{1,2}/;
  function ordinal(number) {
    return this._ordinal.replace('%d', number);
  }
  function preParsePostFormat(string) {
    return string;
  }
  var defaultRelativeTime = {
    future: 'in %s',
    past: '%s ago',
    s: 'a few seconds',
    m: 'a minute',
    mm: '%d minutes',
    h: 'an hour',
    hh: '%d hours',
    d: 'a day',
    dd: '%d days',
    M: 'a month',
    MM: '%d months',
    y: 'a year',
    yy: '%d years'
  };
  function relative__relativeTime(number, withoutSuffix, string, isFuture) {
    var output = this._relativeTime[string];
    return (isFunction(output)) ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number);
  }
  function pastFuture(diff, output) {
    var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
    return isFunction(format) ? format(output) : format.replace(/%s/i, output);
  }
  var prototype__proto = Locale.prototype;
  prototype__proto._calendar = defaultCalendar;
  prototype__proto.calendar = locale_calendar__calendar;
  prototype__proto._longDateFormat = defaultLongDateFormat;
  prototype__proto.longDateFormat = longDateFormat;
  prototype__proto._invalidDate = defaultInvalidDate;
  prototype__proto.invalidDate = invalidDate;
  prototype__proto._ordinal = defaultOrdinal;
  prototype__proto.ordinal = ordinal;
  prototype__proto._ordinalParse = defaultOrdinalParse;
  prototype__proto.preparse = preParsePostFormat;
  prototype__proto.postformat = preParsePostFormat;
  prototype__proto._relativeTime = defaultRelativeTime;
  prototype__proto.relativeTime = relative__relativeTime;
  prototype__proto.pastFuture = pastFuture;
  prototype__proto.set = locale_set__set;
  prototype__proto.months = localeMonths;
  prototype__proto._months = defaultLocaleMonths;
  prototype__proto.monthsShort = localeMonthsShort;
  prototype__proto._monthsShort = defaultLocaleMonthsShort;
  prototype__proto.monthsParse = localeMonthsParse;
  prototype__proto._monthsRegex = defaultMonthsRegex;
  prototype__proto.monthsRegex = monthsRegex;
  prototype__proto._monthsShortRegex = defaultMonthsShortRegex;
  prototype__proto.monthsShortRegex = monthsShortRegex;
  prototype__proto.week = localeWeek;
  prototype__proto._week = defaultLocaleWeek;
  prototype__proto.firstDayOfYear = localeFirstDayOfYear;
  prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;
  prototype__proto.weekdays = localeWeekdays;
  prototype__proto._weekdays = defaultLocaleWeekdays;
  prototype__proto.weekdaysMin = localeWeekdaysMin;
  prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin;
  prototype__proto.weekdaysShort = localeWeekdaysShort;
  prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
  prototype__proto.weekdaysParse = localeWeekdaysParse;
  prototype__proto._weekdaysRegex = defaultWeekdaysRegex;
  prototype__proto.weekdaysRegex = weekdaysRegex;
  prototype__proto._weekdaysShortRegex = defaultWeekdaysShortRegex;
  prototype__proto.weekdaysShortRegex = weekdaysShortRegex;
  prototype__proto._weekdaysMinRegex = defaultWeekdaysMinRegex;
  prototype__proto.weekdaysMinRegex = weekdaysMinRegex;
  prototype__proto.isPM = localeIsPM;
  prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
  prototype__proto.meridiem = localeMeridiem;
  function lists__get(format, index, field, setter) {
    var locale = locale_locales__getLocale();
    var utc = create_utc__createUTC().set(setter, index);
    return locale[field](utc, format);
  }
  function listMonthsImpl(format, index, field) {
    if (typeof format === 'number') {
      index = format;
      format = undefined;
    }
    format = format || '';
    if (index != null) {
      return lists__get(format, index, field, 'month');
    }
    var i;
    var out = [];
    for (i = 0; i < 12; i++) {
      out[i] = lists__get(format, i, field, 'month');
    }
    return out;
  }
  function listWeekdaysImpl(localeSorted, format, index, field) {
    if (typeof localeSorted === 'boolean') {
      if (typeof format === 'number') {
        index = format;
        format = undefined;
      }
      format = format || '';
    } else {
      format = localeSorted;
      index = format;
      localeSorted = false;
      if (typeof format === 'number') {
        index = format;
        format = undefined;
      }
      format = format || '';
    }
    var locale = locale_locales__getLocale(),
        shift = localeSorted ? locale._week.dow : 0;
    if (index != null) {
      return lists__get(format, (index + shift) % 7, field, 'day');
    }
    var i;
    var out = [];
    for (i = 0; i < 7; i++) {
      out[i] = lists__get(format, (i + shift) % 7, field, 'day');
    }
    return out;
  }
  function lists__listMonths(format, index) {
    return listMonthsImpl(format, index, 'months');
  }
  function lists__listMonthsShort(format, index) {
    return listMonthsImpl(format, index, 'monthsShort');
  }
  function lists__listWeekdays(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
  }
  function lists__listWeekdaysShort(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
  }
  function lists__listWeekdaysMin(localeSorted, format, index) {
    return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
  }
  locale_locales__getSetGlobalLocale('en', {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(number) {
      var b = number % 10,
          output = (toInt(number % 100 / 10) === 1) ? 'th' : (b === 1) ? 'st' : (b === 2) ? 'nd' : (b === 3) ? 'rd' : 'th';
      return number + output;
    }
  });
  utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
  utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);
  var mathAbs = Math.abs;
  function duration_abs__abs() {
    var data = this._data;
    this._milliseconds = mathAbs(this._milliseconds);
    this._days = mathAbs(this._days);
    this._months = mathAbs(this._months);
    data.milliseconds = mathAbs(data.milliseconds);
    data.seconds = mathAbs(data.seconds);
    data.minutes = mathAbs(data.minutes);
    data.hours = mathAbs(data.hours);
    data.months = mathAbs(data.months);
    data.years = mathAbs(data.years);
    return this;
  }
  function duration_add_subtract__addSubtract(duration, input, value, direction) {
    var other = create__createDuration(input, value);
    duration._milliseconds += direction * other._milliseconds;
    duration._days += direction * other._days;
    duration._months += direction * other._months;
    return duration._bubble();
  }
  function duration_add_subtract__add(input, value) {
    return duration_add_subtract__addSubtract(this, input, value, 1);
  }
  function duration_add_subtract__subtract(input, value) {
    return duration_add_subtract__addSubtract(this, input, value, -1);
  }
  function absCeil(number) {
    if (number < 0) {
      return Math.floor(number);
    } else {
      return Math.ceil(number);
    }
  }
  function bubble() {
    var milliseconds = this._milliseconds;
    var days = this._days;
    var months = this._months;
    var data = this._data;
    var seconds,
        minutes,
        hours,
        years,
        monthsFromDays;
    if (!((milliseconds >= 0 && days >= 0 && months >= 0) || (milliseconds <= 0 && days <= 0 && months <= 0))) {
      milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
      days = 0;
      months = 0;
    }
    data.milliseconds = milliseconds % 1000;
    seconds = absFloor(milliseconds / 1000);
    data.seconds = seconds % 60;
    minutes = absFloor(seconds / 60);
    data.minutes = minutes % 60;
    hours = absFloor(minutes / 60);
    data.hours = hours % 24;
    days += absFloor(hours / 24);
    monthsFromDays = absFloor(daysToMonths(days));
    months += monthsFromDays;
    days -= absCeil(monthsToDays(monthsFromDays));
    years = absFloor(months / 12);
    months %= 12;
    data.days = days;
    data.months = months;
    data.years = years;
    return this;
  }
  function daysToMonths(days) {
    return days * 4800 / 146097;
  }
  function monthsToDays(months) {
    return months * 146097 / 4800;
  }
  function as(units) {
    var days;
    var months;
    var milliseconds = this._milliseconds;
    units = normalizeUnits(units);
    if (units === 'month' || units === 'year') {
      days = this._days + milliseconds / 864e5;
      months = this._months + daysToMonths(days);
      return units === 'month' ? months : months / 12;
    } else {
      days = this._days + Math.round(monthsToDays(this._months));
      switch (units) {
        case 'week':
          return days / 7 + milliseconds / 6048e5;
        case 'day':
          return days + milliseconds / 864e5;
        case 'hour':
          return days * 24 + milliseconds / 36e5;
        case 'minute':
          return days * 1440 + milliseconds / 6e4;
        case 'second':
          return days * 86400 + milliseconds / 1000;
        case 'millisecond':
          return Math.floor(days * 864e5) + milliseconds;
        default:
          throw new Error('Unknown unit ' + units);
      }
    }
  }
  function duration_as__valueOf() {
    return (this._milliseconds + this._days * 864e5 + (this._months % 12) * 2592e6 + toInt(this._months / 12) * 31536e6);
  }
  function makeAs(alias) {
    return function() {
      return this.as(alias);
    };
  }
  var asMilliseconds = makeAs('ms');
  var asSeconds = makeAs('s');
  var asMinutes = makeAs('m');
  var asHours = makeAs('h');
  var asDays = makeAs('d');
  var asWeeks = makeAs('w');
  var asMonths = makeAs('M');
  var asYears = makeAs('y');
  function duration_get__get(units) {
    units = normalizeUnits(units);
    return this[units + 's']();
  }
  function makeGetter(name) {
    return function() {
      return this._data[name];
    };
  }
  var milliseconds = makeGetter('milliseconds');
  var seconds = makeGetter('seconds');
  var minutes = makeGetter('minutes');
  var hours = makeGetter('hours');
  var days = makeGetter('days');
  var months = makeGetter('months');
  var years = makeGetter('years');
  function weeks() {
    return absFloor(this.days() / 7);
  }
  var round = Math.round;
  var thresholds = {
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    M: 11
  };
  function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
    return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
  }
  function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
    var duration = create__createDuration(posNegDuration).abs();
    var seconds = round(duration.as('s'));
    var minutes = round(duration.as('m'));
    var hours = round(duration.as('h'));
    var days = round(duration.as('d'));
    var months = round(duration.as('M'));
    var years = round(duration.as('y'));
    var a = seconds < thresholds.s && ['s', seconds] || minutes <= 1 && ['m'] || minutes < thresholds.m && ['mm', minutes] || hours <= 1 && ['h'] || hours < thresholds.h && ['hh', hours] || days <= 1 && ['d'] || days < thresholds.d && ['dd', days] || months <= 1 && ['M'] || months < thresholds.M && ['MM', months] || years <= 1 && ['y'] || ['yy', years];
    a[2] = withoutSuffix;
    a[3] = +posNegDuration > 0;
    a[4] = locale;
    return substituteTimeAgo.apply(null, a);
  }
  function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
    if (thresholds[threshold] === undefined) {
      return false;
    }
    if (limit === undefined) {
      return thresholds[threshold];
    }
    thresholds[threshold] = limit;
    return true;
  }
  function humanize(withSuffix) {
    var locale = this.localeData();
    var output = duration_humanize__relativeTime(this, !withSuffix, locale);
    if (withSuffix) {
      output = locale.pastFuture(+this, output);
    }
    return locale.postformat(output);
  }
  var iso_string__abs = Math.abs;
  function iso_string__toISOString() {
    var seconds = iso_string__abs(this._milliseconds) / 1000;
    var days = iso_string__abs(this._days);
    var months = iso_string__abs(this._months);
    var minutes,
        hours,
        years;
    minutes = absFloor(seconds / 60);
    hours = absFloor(minutes / 60);
    seconds %= 60;
    minutes %= 60;
    years = absFloor(months / 12);
    months %= 12;
    var Y = years;
    var M = months;
    var D = days;
    var h = hours;
    var m = minutes;
    var s = seconds;
    var total = this.asSeconds();
    if (!total) {
      return 'P0D';
    }
    return (total < 0 ? '-' : '') + 'P' + (Y ? Y + 'Y' : '') + (M ? M + 'M' : '') + (D ? D + 'D' : '') + ((h || m || s) ? 'T' : '') + (h ? h + 'H' : '') + (m ? m + 'M' : '') + (s ? s + 'S' : '');
  }
  var duration_prototype__proto = Duration.prototype;
  duration_prototype__proto.abs = duration_abs__abs;
  duration_prototype__proto.add = duration_add_subtract__add;
  duration_prototype__proto.subtract = duration_add_subtract__subtract;
  duration_prototype__proto.as = as;
  duration_prototype__proto.asMilliseconds = asMilliseconds;
  duration_prototype__proto.asSeconds = asSeconds;
  duration_prototype__proto.asMinutes = asMinutes;
  duration_prototype__proto.asHours = asHours;
  duration_prototype__proto.asDays = asDays;
  duration_prototype__proto.asWeeks = asWeeks;
  duration_prototype__proto.asMonths = asMonths;
  duration_prototype__proto.asYears = asYears;
  duration_prototype__proto.valueOf = duration_as__valueOf;
  duration_prototype__proto._bubble = bubble;
  duration_prototype__proto.get = duration_get__get;
  duration_prototype__proto.milliseconds = milliseconds;
  duration_prototype__proto.seconds = seconds;
  duration_prototype__proto.minutes = minutes;
  duration_prototype__proto.hours = hours;
  duration_prototype__proto.days = days;
  duration_prototype__proto.weeks = weeks;
  duration_prototype__proto.months = months;
  duration_prototype__proto.years = years;
  duration_prototype__proto.humanize = humanize;
  duration_prototype__proto.toISOString = iso_string__toISOString;
  duration_prototype__proto.toString = iso_string__toISOString;
  duration_prototype__proto.toJSON = iso_string__toISOString;
  duration_prototype__proto.locale = locale;
  duration_prototype__proto.localeData = localeData;
  duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
  duration_prototype__proto.lang = lang;
  addFormatToken('X', 0, 0, 'unix');
  addFormatToken('x', 0, 0, 'valueOf');
  addRegexToken('x', matchSigned);
  addRegexToken('X', matchTimestamp);
  addParseToken('X', function(input, array, config) {
    config._d = new Date(parseFloat(input, 10) * 1000);
  });
  addParseToken('x', function(input, array, config) {
    config._d = new Date(toInt(input));
  });
  utils_hooks__hooks.version = '2.13.0';
  setHookCallback(local__createLocal);
  utils_hooks__hooks.fn = momentPrototype;
  utils_hooks__hooks.min = min;
  utils_hooks__hooks.max = max;
  utils_hooks__hooks.now = now;
  utils_hooks__hooks.utc = create_utc__createUTC;
  utils_hooks__hooks.unix = moment__createUnix;
  utils_hooks__hooks.months = lists__listMonths;
  utils_hooks__hooks.isDate = isDate;
  utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale;
  utils_hooks__hooks.invalid = valid__createInvalid;
  utils_hooks__hooks.duration = create__createDuration;
  utils_hooks__hooks.isMoment = isMoment;
  utils_hooks__hooks.weekdays = lists__listWeekdays;
  utils_hooks__hooks.parseZone = moment__createInZone;
  utils_hooks__hooks.localeData = locale_locales__getLocale;
  utils_hooks__hooks.isDuration = isDuration;
  utils_hooks__hooks.monthsShort = lists__listMonthsShort;
  utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin;
  utils_hooks__hooks.defineLocale = defineLocale;
  utils_hooks__hooks.updateLocale = updateLocale;
  utils_hooks__hooks.locales = locale_locales__listLocales;
  utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort;
  utils_hooks__hooks.normalizeUnits = normalizeUnits;
  utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
  utils_hooks__hooks.prototype = momentPrototype;
  var _moment = utils_hooks__hooks;
  return _moment;
}));

})();
$__System.register("154", ["133", "135", "13e"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1, util_1, moment_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }, function (moment_1_1) {
            moment_1 = moment_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Season',
                'view': 'list',
                'parent': 'TV Shows',
                'sortgroup': 'season',
                'icon': function (state) {
                    return 'img/icons/default/DefaultTVShowTitle.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': 'TV Shows' };
                },
                'data': function (state) {
                    var tvshowid = +state['tvshowid'];
                    var season = +state['season'];
                    var getShowDetails = xbmc.get({
                        'method': 'VideoLibrary.GetTVShowDetails',
                        'params': {
                            'properties': ["title", "genre", "rating", "studio", "mpaa", "cast", "episode", "votes", "lastplayed", "file", "originaltitle", "sorttitle", "episodeguide", "dateadded", "tag"],
                            'tvshowid': tvshowid
                        },
                        cache: true
                    }).then(function (_a) {
                        var _b = _a.tvshowdetails,
                            tvshowdetails = _b === void 0 ? {} : _b;
                        return tvshowdetails;
                    });
                    var getSeasonDetails = xbmc.get({
                        method: 'VideoLibrary.GetSeasons',
                        params: {
                            'properties': ["season", "showtitle", "episode", "watchedepisodes", "art"],
                            'tvshowid': tvshowid
                        },
                        cache: true
                    }).then(function (_a) {
                        var _b = _a.seasons,
                            seasons = _b === void 0 ? [] : _b;
                        return seasons.filter(function (s) {
                            return s.season == season;
                        })[0];
                    });
                    var getDetails = Promise.all([getShowDetails, getSeasonDetails]).then(function (x) {
                        console.log(x);return x;
                    }).then(function (_a) {
                        var show = _a[0],
                            season = _a[1];
                        return {
                            title: season.showtitle,
                            titleLink: "#page=TV Show&tvshowid=" + tvshowid,
                            subtitle: season.label,
                            banner: season.art && xbmc.vfs2uri(season.art['season.banner'] || season.art['tvshow.banner']),
                            fanart: xbmc.vfs2uri(season.art['tvshow.fanart']),
                            details: [{
                                name: 'Tag',
                                links: (Array.isArray(show.tag) ? show.tag : [show.tag]).map(function (tag) {
                                    return {
                                        label: tag,
                                        link: '#page=TV Shows&tag=' + tag
                                    };
                                })
                            }, { 'name': 'Rating', 'value': Math.round(show.rating * 10) / 10 + "/10 (" + show.votes + " votes)" }, { 'name': 'MPAA Rating', 'value': show.mpaa }, {
                                name: 'Genre',
                                links: (Array.isArray(show.genre) ? show.genre : []).map(function (genre) {
                                    return {
                                        label: genre,
                                        link: '#page=TV Shows&genre=' + genre
                                    };
                                })
                            }, {
                                name: 'Studio',
                                links: (Array.isArray(show.studio) ? show.studio : []).map(function (studio) {
                                    return {
                                        label: studio,
                                        link: '#page=TV Shows&studio=' + studio
                                    };
                                })
                            }, { 'name': 'Statistics', 'links': [{ 'label': "Episodes: " + season.episode + " (" + season.watchedepisodes + " watched)" }, { 'label': "Added " + moment_1.default(show.dateadded).format('LL') }] }],
                            cast: show.cast.map(function (actor) {
                                return {
                                    label: actor.name,
                                    details: actor.role,
                                    thumbnail: actor.thumbnail ? xbmc.vfs2uri(actor.thumbnail) : 'img/icons/default/DefaultActor.png',
                                    link: '#page=TV Shows&actor=' + actor.name
                                };
                            })
                        };
                    });
                    var getEpisodes = state['season'] !== undefined && xbmc.get({
                        method: 'VideoLibrary.GetEpisodes',
                        params: {
                            'properties': ['tvshowid', 'title', 'episode', 'runtime', 'lastplayed', 'art'],
                            'tvshowid': tvshowid,
                            'season': +state['season']
                        },
                        cache: true
                    }).then(function (_a) {
                        var _b = _a.episodes,
                            episodes = _b === void 0 ? [] : _b;
                        return episodes;
                    }).then(function (episodes) {
                        return episodes.map(function (_a) {
                            var episodeid = _a.episodeid,
                                title = _a.title,
                                runtime = _a.runtime,
                                lastplayed = _a.lastplayed,
                                episode = _a.episode,
                                _b = _a.art,
                                art = _b === void 0 ? {} : _b;
                            return {
                                link: "#page=Episode&episodeid=" + episodeid,
                                label: title,
                                thumbnail: xbmc.vfs2uri(art.thumb) || 'img/icons/default/DefaultVideo.png',
                                season: "Season " + season,
                                details: [util_1.seconds2string(runtime), lastplayed ? 'Last played ' + moment_1.default(lastplayed).format('LL') : undefined],
                                number: episode,
                                actions: [{
                                    label: '▶',
                                    link: util_1.makeJsLink("xbmc.Play({ 'episodeid': " + episodeid + " }, 1)")
                                }]
                            };
                        });
                    });
                    return Promise.all([getDetails, getEpisodes]).then(function (_a) {
                        var page = _a[0],
                            episodes = _a[1];
                        page.items = [{
                            label: 'Episodes',
                            items: episodes
                        }];
                        return page;
                    });
                }
            }));
        }
    };
});
$__System.register("155", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Timers',
                'view': 'list',
                'icon': function (state) {
                    return state['media'] === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Menu', 'media': state['media'] };
                },
                'data': function (state) {
                    return xbmc.get({
                        method: 'PVR.GetTimers',
                        cache: true,
                        params: {
                            'properties': ['channelid', 'isradio', 'state', 'summary', 'title']
                        }
                    }).then(function (x) {
                        console.log(x);return x;
                    }).then(function (_a) {
                        var timers = (_a === void 0 ? { timers: [] } : _a).timers;
                        return {
                            title: 'Timers',
                            items: timers.map(function (timer) {
                                return {
                                    label: timer.label,
                                    details: timer.summary,
                                    link: '#page=Timer&id=' + timer.timerid + '&media=' + state.media
                                };
                            })
                        };
                    });
                }
            }));
        }
    };
});
/**
 * @author sam.bailus@gmail.com
 */
$__System.register("131", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    /* HASH FUNCTIONS */
    function getHashArray() {
        var o = {};
        if (!document.location.hash) return o;
        var hasharray = document.location.hash.substring(1).split(/\&/);
        for (var y = 0; y < hasharray.length; y++) {
            var z = hasharray[y].split(/\=/);
            if (z && z.length == 2) o[z[0]] = decodeURIComponent(z[1]);
        }
        return o;
    }
    exports_1("getHashArray", getHashArray);
    function hashArrayToURL(o) {
        return '#' + Object.keys(o).map(function (key) {
            return key + "=" + encodeURIComponent(o[key]);
        }).join('&');
    }
    exports_1("hashArrayToURL", hashArrayToURL);
    return {
        setters: [],
        execute: function () {/**
                              * @author sam.bailus@gmail.com
                              */
        }
    };
});
$__System.register("133", ["131"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var hash_1, default_1;
    return {
        setters: [function (hash_1_1) {
            hash_1 = hash_1_1;
        }],
        execute: function () {
            default_1 = function () {
                function default_1(obj) {
                    //copy obj.* to this.*
                    for (var attr in obj) if (obj.hasOwnProperty(attr)) this[attr] = obj[attr];
                }
                default_1.prototype.crumbs = function (state, pages) {
                    if (this.parentState === undefined) return [];
                    var parentState = this.parentState(state);
                    var parentPage = pages.getById(parentState['page']);
                    if (!parentPage) return [];
                    var crumbs = parentPage.crumbs(parentState, pages);
                    if (parentPage.icon) crumbs.push({
                        'label': parentPage['id'],
                        'icon': parentPage.icon(parentState),
                        'link': hash_1.hashArrayToURL(parentState)
                    });
                    return crumbs;
                };
                default_1.prototype.render = function (state, pages) {
                    var _this = this;
                    var $loading = document.getElementById('loading');
                    $loading.className = '';
                    var $content = document.getElementById('content');
                    $content.className = 'hidden';
                    var page = this;
                    return page.data(state) //get the page data
                    .then(function (data) {
                        data.crumbs = page.crumbs(state, pages);
                        data.crumbs.push({
                            'icon': page.icon ? page.icon(state) : undefined,
                            'label': data.pageName || page.name || page.id,
                            'link': hash_1.hashArrayToURL(state)
                        });
                        return data;
                    }).then(function (data) {
                        //sort and group the data
                        //TODO: review and probably rewrite
                        function groupItems(items, groupby) {
                            var o = [],
                                temp = {};
                            if (!(items[0] && items[0][groupby])) return items;
                            items.forEach(function (item, i) {
                                var s = item[groupby];
                                if (item instanceof Object) {
                                    if (!temp[s]) temp[s] = [];
                                    temp[s].push(item);
                                }
                            });
                            Object.getOwnPropertyNames(temp).forEach(function (label) {
                                o.unshift({
                                    'label': label,
                                    'items': temp[label]
                                });
                            });
                            return o;
                        }
                        function sortItems(items, sortby) {
                            if (!(items[0] && items[0][sortby])) return items;
                            return items.sort(function (a, b) {
                                var x = a[sortby],
                                    y = b[sortby];
                                if (x < y) return -1;
                                if (x > y) return +1;
                                return 0;
                            });
                        }
                        //if (state['sort') || this.sortby) data.items = sortItems(data.items, state['sort'] || this.sortby]
                        var groupbyKey = state['group'] || _this.groupby;
                        var groupbyValue = state[groupbyKey];
                        if (groupbyKey) {
                            if (!Array.isArray(data.items)) data.items = [];
                            var size = data.items.length;
                            var showItems = !(!groupbyValue && size > advancedSettings.pages.groupingThreshold);
                            //sort and group the items
                            data.items = sortItems(groupItems(data.items, groupbyKey), 'label');
                            //create groups
                            if (size > advancedSettings.pages.groupingThreshold) data.groups = data.items.map(function (x) {
                                var s = Object.assign({}, state);
                                s[groupbyKey] = x.label;
                                return {
                                    'label': x.label,
                                    'link': hash_1.hashArrayToURL(s),
                                    'selected': x.label === groupbyValue
                                };
                            });
                            //filter
                            if (groupbyValue) data.items = data.items.filter(function (x) {
                                return x.label === groupbyValue;
                            });
                            //don't show the full list
                            if (!showItems) data.items = undefined;
                            if (showItems && data.groups && data.groups.length > 40) data.groups = [];
                        }
                        return data;
                    }).catch(function (error) {
                        console.error(error);
                        return {
                            title: 'Error getting page data',
                            subtitle: error.message || '',
                            pageName: ':('
                        };
                    }).then(function (data) {
                        //render the data to the DOM via the template
                        data.id = _this.id;
                        //document.title = ''+(data.title ? data.title : 'Kodi');
                        var $page = document.createElement('div');
                        $page.setAttribute('class', 'page');
                        //copy key/value pairs from the URL to the data- attributes of the $page
                        Object.keys(state).forEach(function (key) {
                            return $page.setAttribute('data-' + key, state[key]);
                        });
                        $page.setAttribute('data-page', _this.id); //make sure the home page has a data-page attribute
                        $page.innerHTML = templates[state['view'] || _this.view](data);
                        var $content = document.getElementById('content');
                        while ($content.firstChild) $content.removeChild($content.firstChild); // $content.removeAllChildElements()
                        $content.className = '';
                        var $loading = document.getElementById('loading');
                        $loading.className = 'hidden';
                        $content.appendChild($page);
                        $page;
                    });
                };
                return default_1;
            }();
            exports_1("default", default_1);
        }
    };
});
$__System.register("156", ["133"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var page_1;
    return {
        setters: [function (page_1_1) {
            page_1 = page_1_1;
        }],
        execute: function () {
            exports_1("default", new page_1.default({
                'id': 'Timer',
                'view': 'list',
                'icon': function (state) {
                    return state['media'] === 'Radio' ? 'img/icons/home/radio.png' : 'img/icons/home/livetv.png';
                },
                'parentState': function (state) {
                    return { 'page': 'Timers', 'media': state['media'] };
                },
                'data': function (state) {
                    return xbmc.get({
                        method: 'PVR.GetTimerDetails',
                        params: {
                            'timerid': +state.id,
                            'properties': ['channelid', 'directory', 'endanytime', 'endmargin', 'endtime', 'epgsearchstring', 'epguid', 'file', 'firstday', 'fulltextepgsearch', 'ismanual', 'isradio', 'isreadonly', 'istimerrule', 'lifetime', 'maxrecordings', 'preventduplicateepisodes', 'priority', 'recordinggroup', 'runtime', 'startanytime', 'startmargin', 'starttime', 'state', 'summary', 'title', 'weekdays']
                        },
                        cache: true
                    }).then(function (x) {
                        console.log(x);return x;
                    }).then(function (_a) {
                        var timerdetails = (_a === void 0 ? { timerdetails: {} } : _a).timerdetails;
                        return {
                            title: timerdetails.title || 'Timer',
                            subtitle: timerdetails.summary,
                            details: [{ 'name': 'State', 'value': timerdetails.state }, { 'name': 'Start Time', 'value': timerdetails.starttime }, { 'name': 'End Time', 'value': timerdetails.endtime }, {
                                'name': 'Channel',
                                'value': timerdetails.channelid,
                                'link': '#page=Channel&channelid=' + timerdetails.channelid + '&media=' + state.media
                            }]
                        };
                    });
                }
            }));
        }
    };
});
$__System.register("157", ["132", "134", "136", "137", "138", "139", "13a", "13b", "13c", "13d", "13f", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "14a", "14c", "14d", "14e", "14f", "150", "151", "152", "153", "154", "155", "156"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var actors_js_1, addon_js_1, addons_js_1, album_js_1, albums_js_1, artist_js_1, artists_js_1, broadcast_js_1, channelgroup_js_1, channel_js_1, channels_js_1, directory_js_1, episode_js_1, files_js_1, file_js_1, filealbum_js_1, genres_js_1, guide_js_1, home_js_1, menu_js_1, movie_js_1, movies_js_1, movieset_js_1, moviesets_js_1, musicvideo_js_1, musicvideos_js_1, playlists_js_1, tvshow_js_1, tvshows_js_1, episodes_js_1, season_js_1, timers_js_1, timer_js_1, pages;
    return {
        setters: [function (actors_js_1_1) {
            actors_js_1 = actors_js_1_1;
        }, function (addon_js_1_1) {
            addon_js_1 = addon_js_1_1;
        }, function (addons_js_1_1) {
            addons_js_1 = addons_js_1_1;
        }, function (album_js_1_1) {
            album_js_1 = album_js_1_1;
        }, function (albums_js_1_1) {
            albums_js_1 = albums_js_1_1;
        }, function (artist_js_1_1) {
            artist_js_1 = artist_js_1_1;
        }, function (artists_js_1_1) {
            artists_js_1 = artists_js_1_1;
        }, function (broadcast_js_1_1) {
            broadcast_js_1 = broadcast_js_1_1;
        }, function (channelgroup_js_1_1) {
            channelgroup_js_1 = channelgroup_js_1_1;
        }, function (channel_js_1_1) {
            channel_js_1 = channel_js_1_1;
        }, function (channels_js_1_1) {
            channels_js_1 = channels_js_1_1;
        }, function (directory_js_1_1) {
            directory_js_1 = directory_js_1_1;
        }, function (episode_js_1_1) {
            episode_js_1 = episode_js_1_1;
        }, function (files_js_1_1) {
            files_js_1 = files_js_1_1;
        }, function (file_js_1_1) {
            file_js_1 = file_js_1_1;
        }, function (filealbum_js_1_1) {
            filealbum_js_1 = filealbum_js_1_1;
        }, function (genres_js_1_1) {
            genres_js_1 = genres_js_1_1;
        }, function (guide_js_1_1) {
            guide_js_1 = guide_js_1_1;
        }, function (home_js_1_1) {
            home_js_1 = home_js_1_1;
        }, function (menu_js_1_1) {
            menu_js_1 = menu_js_1_1;
        }, function (movie_js_1_1) {
            movie_js_1 = movie_js_1_1;
        }, function (movies_js_1_1) {
            movies_js_1 = movies_js_1_1;
        }, function (movieset_js_1_1) {
            movieset_js_1 = movieset_js_1_1;
        }, function (moviesets_js_1_1) {
            moviesets_js_1 = moviesets_js_1_1;
        }, function (musicvideo_js_1_1) {
            musicvideo_js_1 = musicvideo_js_1_1;
        }, function (musicvideos_js_1_1) {
            musicvideos_js_1 = musicvideos_js_1_1;
        }, function (playlists_js_1_1) {
            playlists_js_1 = playlists_js_1_1;
        }, function (tvshow_js_1_1) {
            tvshow_js_1 = tvshow_js_1_1;
        }, function (tvshows_js_1_1) {
            tvshows_js_1 = tvshows_js_1_1;
        }, function (episodes_js_1_1) {
            episodes_js_1 = episodes_js_1_1;
        }, function (season_js_1_1) {
            season_js_1 = season_js_1_1;
        }, function (timers_js_1_1) {
            timers_js_1 = timers_js_1_1;
        }, function (timer_js_1_1) {
            timer_js_1 = timer_js_1_1;
        }],
        execute: function () {
            pages = [actors_js_1.default, addon_js_1.default, addons_js_1.default, album_js_1.default, albums_js_1.default, artist_js_1.default, artists_js_1.default, broadcast_js_1.default, channelgroup_js_1.default, channel_js_1.default, channels_js_1.default, directory_js_1.default, episode_js_1.default, files_js_1.default, file_js_1.default, filealbum_js_1.default, genres_js_1.default, guide_js_1.default, home_js_1.default, menu_js_1.default, movie_js_1.default, movies_js_1.default, movieset_js_1.default, moviesets_js_1.default, musicvideo_js_1.default, musicvideos_js_1.default, playlists_js_1.default, tvshow_js_1.default, tvshows_js_1.default, episodes_js_1.default, season_js_1.default, timers_js_1.default, timer_js_1.default];
            exports_1("default", pages);
        }
    };
});
$__System.register("158", ["130", "157"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var pages_1, loadAll_js_1;
    return {
        setters: [function (pages_1_1) {
            pages_1 = pages_1_1;
        }, function (loadAll_js_1_1) {
            loadAll_js_1 = loadAll_js_1_1;
        }],
        execute: function () {
            loadAll_js_1.default.forEach(function (page) {
                return pages_1.default.add(page);
            });
            exports_1("default", pages_1.default);
        }
    };
});
$__System.register("159", [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    function default_1(update) {
        var requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (c) {
            window.setTimeout(c, 100);
        },
            start,
            end,
            paused,
            duration,
            position = function () {
            var now = new Date().getTime();
            return !start || !end || !duration ? 0 : paused ? (paused - start) / duration : now <= end ? (now - start) / duration : 0;
        },
            timer = function () {
            var pos = position(),
                d = duration / 1e3 || 0;
            update(pos, Math.floor(pos * d), Math.floor(d));
            requestAnimationFrame(timer);
        },
            pub = {
            start: function (totaltime, time) {
                if (totaltime) pub.update(totaltime, time);else pub.unpause();
            },
            pause: function () {
                if (!paused) {
                    var now = new Date().getTime();
                    if (now < end) paused = now;
                }
            },
            unpause: function () {
                if (paused) {
                    var now = new Date().getTime();
                    start += now - paused;
                    end += now - paused;
                    paused = undefined;
                }
            },
            stop: function () {
                //var now = (new Date()).getTime();
                start = undefined;
                end = undefined;
                paused = undefined;
                duration = undefined;
            },
            getTotaltime: function () {
                return duration / 1e3;
            },
            update: function (totaltime, time) {
                var now = new Date().getTime();
                var pause = paused - start;
                if (totaltime > 0) duration = totaltime * 1e3;
                if (now >= end || totaltime > 0) {
                    start = now - (time || 0) * 1e3;
                    end = start + duration;
                    paused = start + pause;
                }
                //if (totaltime !== duration/1e3) pub.unpause();
            },
            updateFraction: function (fraction) {
                var d = duration / 1e3;
                pub.update(d, d * fraction);
            },
            offset: function (d) {
                var diff = d * 1e3;
                start += diff;
                end += diff;
            }
        };
        timer();
        return pub;
    }
    exports_1("default", default_1);
    return {
        setters: [],
        execute: function () {
            ;
        }
    };
});
/* Various useful functions */
$__System.register('135', [], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    // Promise that resolves when the DOM is loaded
    function ready() {
        // Credit to Jake Archibald
        // https://github.com/jakearchibald/svgomg/blob/master/src/js/page/utils.js#L7
        return new Promise(function (resolve, reject) {
            function checkState() {
                if (document.readyState !== 'loading') resolve();
            }
            document.addEventListener('readystatechange', checkState);
            checkState();
        });
    }
    exports_1("ready", ready);
    function minutes2string(t) {
        var hours = Math.floor(t / 60),
            mins = Math.floor(t % 60),
            out = [];
        if (hours > 0) out.push(hours + ' hour' + (hours > 1 ? 's' : ''));
        if (mins > 0) out.push(mins + ' minute' + (mins > 1 ? 's' : ''));
        return out.join(' ');
    }
    exports_1("minutes2string", minutes2string);
    function seconds2string(t) {
        return minutes2string(Math.round(t / 60));
    }
    exports_1("seconds2string", seconds2string);
    function seconds2shortstring(t) {
        function str(n) {
            return (n < 10 && n > -10 ? '0' : '') + Math.floor(n);
        }
        if (t > 3600) return str(t / 3600) + ':' + str(t % 3600 / 60) + ':' + str(t % 60);else return str(t / 60) + ':' + str(t % 60);
    }
    exports_1("seconds2shortstring", seconds2shortstring);
    function ymd2string(ymd) {
        var x = ymd.split(' ')[0].split('-');
        return [['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][x[1] - 1], +x[2] + (/1[1-3]$/.test(x[2]) ? 'th' : /1$/.test(x[2]) ? 'st' : /2$/.test(x[2]) ? 'nd' : /3$/.test(x[2]) ? 'rd' : 'th') + ',', x[0]].join(' ');
    }
    exports_1("ymd2string", ymd2string);
    function makeJsLink(script) {
        return "javascript: (function () { " + script + " })()";
    }
    exports_1("makeJsLink", makeJsLink);
    return {
        setters: [],
        execute: function () {/* Various useful functions */
        }
    };
});
$__System.register("15a", ["159", "135"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var progress_1, util_1;
    return {
        setters: [function (progress_1_1) {
            progress_1 = progress_1_1;
        }, function (util_1_1) {
            util_1 = util_1_1;
        }],
        execute: function () {
            exports_1("default", function () {
                "use strict";

                var progress = undefined;
                function timeObjToSeconds(o) {
                    return (o.hours * 60 + o.minutes) * 60 + o.seconds + o.milliseconds / 1e3;
                }
                function renderPlayer(player) {
                    var slider, volume, data;
                    function makeButton(o) {
                        return {
                            'label': o.text,
                            'class': o.action,
                            'link': util_1.makeJsLink("\n\t\t\t\t\txbmc.get({\n\t\t\t\t\t\t'method': 'Input.ExecuteAction',\n\t\t\t\t\t\t'params': {\n\t\t\t\t\t\t\t'action': '" + o.action + "'\n\t\t\t\t\t\t}\n\t\t\t\t\t})\n\t\t\t\t")
                        };
                    }
                    //construct data
                    data = {
                        'buttons': [{ 'text': 'Previous', 'action': 'skipprevious' }, { 'text': 'Play / Pause', 'action': 'playpause' }, { 'text': 'Stop', 'action': 'stop' }, { 'text': 'Next', 'action': 'skipnext' }].map(makeButton),
                        'navbuttons': [{ 'text': 'Up', 'action': 'up' }, { 'text': 'Down', 'action': 'down' }, { 'text': 'Left', 'action': 'left' }, { 'text': 'Right', 'action': 'right' }, { 'text': 'Select', 'action': 'select' }, { 'text': 'Back', 'action': 'back' }, { 'text': 'Information', 'action': 'info' },
                        //{ 'text': 'Menu',			'action':'contextmenu' },
                        { 'text': 'Home', 'action': 'previousmenu' }].map(makeButton),
                        'rightbuttons': [
                        //{ 'text': 'Mute',			'action':'mute' },
                        { 'text': 'Volume Up', 'action': 'volumeup' }, { 'text': 'Volume Down', 'action': 'volumedown' }].map(makeButton),
                        'hideNavigation': true
                    };
                    data.navbuttons.push({
                        'label': 'Menu',
                        'class': 'contextmenu',
                        'link': util_1.makeJsLink("\n\t\t\t\txbmc.get({\n\t\t\t\t\tmethod: 'GUI.GetProperties',\n\t\t\t\t\tparams: {\n\t\t\t\t\t\tproperties: [ 'fullscreen' ] \n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t\t.then(result => xbmc.sendMessage('Input.ExecuteAction', {\n\t\t\t\t\taction: result.fullscreen ? 'osd' : 'contextmenu'\n\t\t\t\t}))\n\t\t\t")
                    });
                    //render the data to the DOM via the player template
                    while (player.firstChild) player.removeChild(player.firstChild); //remove child elements
                    player.innerHTML = templates.player(data);
                    //make the progress bar work
                    var oldString;
                    var progressElem = document.getElementById('progress');
                    var statusElem = progressElem.querySelector('.status');
                    var timeElem = progressElem.querySelector('.time');
                    var barElem = progressElem.querySelector('.bar');
                    var backgroundElem = progressElem.querySelector('.background');
                    progress = progress_1.default(function (position, time, duration) {
                        var value = Math.round(position * 10000);
                        var string = (time ? util_1.seconds2string(time) + '/' : '') + util_1.seconds2string(duration);
                        if (string !== oldString) {
                            timeElem.innerHTML = string;
                            barElem.setAttribute('style', 'width: ' + value / 100 + '%;');
                        }
                        oldString = string;
                    });
                    progressElem.addEventListener('mouseup', function (e) {
                        var boundingRect = backgroundElem.getBoundingClientRect();
                        var value = (e.pageX - boundingRect.left) / boundingRect.width;
                        if (value > 1) value = 1;
                        if (value < 0) value = 0;
                        value = Math.round(value * 100);
                        //update the local progress bar
                        progress.updateFraction(value / 100);
                        //send the command to kodi
                        xbmc.Seek({ 'value': value });
                    });
                    //toggle the player.visible class when the player.show button is clicked
                    player.querySelector('.show').addEventListener('click', function () {
                        player.className = player.className ? '' : 'minimize';
                    }, false);
                }
                var onNotification = {
                    'Player.OnPlay': function (data) {
                        document.body.setAttribute('data-status', 'playing');
                        xbmc.get({
                            'method': 'Player.GetProperties',
                            'params': {
                                'properties': ['time', 'totaltime', 'speed', 'playlistid', 'position', 'repeat', 'type', 'partymode', 'shuffled', 'live'],
                                'playerid': data.data.player.playerid
                            }
                        }).then(function (player) {
                            progress.start(timeObjToSeconds(player.totaltime), timeObjToSeconds(player.time));
                        });
                    },
                    'Player.OnPause': function (data) {
                        document.body.setAttribute('data-status', 'paused');
                        progress.pause();
                    },
                    'Player.OnStop': function (data) {
                        document.body.setAttribute('data-status', 'stopped');
                        progress.stop();
                    },
                    'Player.OnSeek': function (data) {
                        var player = data.data.player;
                        progress.update(progress.getTotaltime(), timeObjToSeconds(player.time));
                    }
                };
                var playerStatus = 'stopped';
                function tick() {
                    var progressElem = document.getElementById('progress');
                    var statusElem = progressElem.querySelector('.status');
                    var player = {};
                    new Promise(function (resolve, reject) {
                        var cancel = false;
                        xbmc.GetActivePlayerProperties().then(function (x) {
                            return new Promise(function (resolve) {
                                return window.requestAnimationFrame(function () {
                                    return resolve(x);
                                });
                            });
                        }).then(function (p) {
                            if (cancel) return;
                            player = p;
                            if (player) {
                                progress.update(timeObjToSeconds(player.totaltime), timeObjToSeconds(player.time));
                                if (player.speed > 0) {
                                    if (playerStatus !== 'playing') {
                                        progress.unpause();
                                        playerStatus = 'playing';
                                        document.body.setAttribute('data-status', 'playing');
                                    }
                                } else {
                                    if (playerStatus !== 'paused') {
                                        progress.pause('paused');
                                        playerStatus = 'paused';
                                        document.body.setAttribute('data-status', 'paused');
                                    }
                                }
                            } else {
                                if (playerStatus !== 'stopped') {
                                    progress.stop();
                                    playerStatus = 'stopped';
                                    document.body.setAttribute('data-status', 'stopped');
                                    statusElem.innerHTML = '';
                                }
                            }
                            window.setTimeout(resolve, 1e3);
                        });
                        window.setTimeout(resolve, 3e3);
                    }).then(function () {
                        return new Promise(function (resolve, reject) {
                            var cancel = false;
                            if (player && player.playlistid !== undefined && player.position !== undefined) {
                                xbmc.get({
                                    'method': 'Playlist.GetItems',
                                    'params': {
                                        'properties': ['title', 'art', 'tagline', 'showtitle', 'album', 'artist', 'season', 'episode', 'file', 'thumbnail', 'runtime', 'duration'],
                                        'playlistid': player.playlistid
                                    }
                                }).then(function (x) {
                                    return new Promise(function (resolve) {
                                        return window.requestAnimationFrame(function () {
                                            return resolve(x);
                                        });
                                    });
                                }).then(function (playlist) {
                                    if (!playlist.items) return;
                                    var item = playlist.items[player.position];
                                    if (item) {
                                        statusElem.innerHTML = '' + (item.showtitle ? item.showtitle + ' ' : '') + (item.season >= 0 ? item.episode >= 0 && item.season + 'x' + item.episode + ' ' : '') + (item.artist && item.artist.length ? item.artist.join(', ') + ' - ' + (item.album || '') : '') + (item.label || item.title || item.file);
                                    } else statusElem.innerHTML = '';
                                    window.setTimeout(resolve, 1e3);
                                });
                            } else {
                                resolve();
                            }
                            window.setTimeout(resolve, 3e3);
                        });
                    }).catch(tick).then(tick);
                }
                function init() {
                    //render the player
                    renderPlayer(document.querySelector('#player'));
                    //start polling
                    tick();
                    //bind event handlers to the xbmc websocket api
                    Object.getOwnPropertyNames(onNotification).forEach(function (name) {
                        return xbmc.onNotification(name, onNotification[name]);
                    });
                    return this;
                }
                return {
                    init: init
                };
            }());
        }
    };
});
$__System.register("1", ["12b", "12c", "135", "12e", "12f", "158", "15a"], function (exports_1, context_1) {
    "use strict";

    var __moduleName = context_1 && context_1.id;
    var util_1, xbmc_1, handlebars_1, loadPages_1, player_1;
    return {
        setters: [function (_1) {}, function (_2) {}, function (util_1_1) {
            util_1 = util_1_1;
        }, function (xbmc_1_1) {
            xbmc_1 = xbmc_1_1;
        }, function (handlebars_1_1) {
            handlebars_1 = handlebars_1_1;
        }, function (loadPages_1_1) {
            loadPages_1 = loadPages_1_1;
        }, function (player_1_1) {
            player_1 = player_1_1;
        }],
        execute: function () {
            util_1.ready().then(function () {
                "use strict";

                var global = window;
                var templateDir = 'templates/';
                var templateFiles = [{ name: 'listItem', file: templateDir + 'listItem.html' }, { name: 'listItems', file: templateDir + 'listItems.html' }, { name: 'list', file: templateDir + 'list.html' }, { name: 'player', file: templateDir + 'player.html' }, { name: 'details', file: templateDir + 'details.html' }];
                function error(_a) {
                    var summary = _a.summary,
                        details = _a.details;
                    document.body.innerHTML = "\n\t\t\t<h1>:(</h1>\n\t\t\t<h2>" + (summary || 'Error') + "</h2>\n\t\t\t" + details.map(function (text) {
                        return "<p>" + text + "</p>";
                    }).join('') + "\n\t\t";
                }
                function createSkeleton() {
                    document.body.innerHTML = "\n\t\t\t<div id=main>\n\t\t\t\t<div id=loading><span><img alt=\"Loading\" src=\"img/busy.png\" class=\"spin\"></span></div>\n\t\t\t\t<div id=content></div>\n\t\t\t\t<div id=player class=minimize></div>\n\t\t\t</div>\n\t\t";
                }
                var connectToKodi = xbmc_1.default(window.location.host).catch(function (e) {
                    return error({ details: ['Could not connect to Kodi', e] });
                });
                function loadTemplate(templateFile) {
                    return fetch(templateFile.file).then(function (response) {
                        return response.text();
                    }).then(function (source) {
                        var template = handlebars_1.default.compile(source);
                        handlebars_1.default.registerPartial(templateFile.name, template);
                        return { name: templateFile.name, template: template };
                    });
                }
                global.templates = {};
                var loadTemplates = Promise.all(templateFiles.map(function (templateFile) {
                    return loadTemplate(templateFile);
                })).catch(function (e) {
                    return error({ details: ['Loading template', e] });
                }).then(function (templateFiles) {
                    templateFiles.forEach(function (templateFile) {
                        global.templates[templateFile.name] = templateFile.template;
                    });
                    return global.templates;
                });
                Promise.all([connectToKodi, loadTemplates, loadPages_1.default]).then(function (_a) {
                    var kodi = _a[0],
                        templates = _a[1],
                        pages = _a[2];
                    window.xbmc = kodi;
                    createSkeleton();
                    pages.renderPage();
                    player_1.default.init();
                });
            });
        }
    };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=build.js.map