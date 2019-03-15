// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"index.js":[function(require,module,exports) {
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-loop-func */
var root = document.querySelector('#root');
var Resources = {
  'Birds': 0,
  'Birdseed': 100,
  'Trinkets': 0,
  'Small Birdfeeder': 0
};
var Clickers = {
  'scatterBirdseed': {
    'name': 'Scatter some birdseed',
    'buy': 'Trinkets',
    // resource to buy
    'buyCount': 1,
    // how many?
    'spend': 'Birdseed',
    // resource to spend
    'spendCount': 10,
    // how many?
    'successMessage': 'A bird ate some birdseed and flew away, leaving you 1 trinket.',
    'errorMessage': 'Not enough birdseed'
  },
  'buyBirdseed': {
    'name': 'Buy more birdseed',
    'buy': 'Birdseed',
    'buyCount': 10,
    'spend': 'Trinkets',
    'spendCount': 1,
    'successMessage': '',
    'errorMessage': 'Not enough trinkets'
  },
  'smallBirdfeeder': {
    'name': 'x1 Small Birdfeeder',
    'buy': 'Small Birdfeeder',
    'buyCount': 1,
    'spend': 'Trinkets',
    'spendCount': 5,
    'successMessage': '',
    'errorMessage': 'Not enough trinkets'
  }
};
var Alerts = ['<span>Welcome to your Bird Clicker garden. Scatter some seed for the birds to begin.</span>']; // Header component

function Header() {
  return "\n        <header>Bird Clicker: a Game of Avian Iteration</header>\n    ";
} // Counters component


function Counters(resources) {
  var output = '<div id="resources" class="column">';

  var _arr = Object.entries(resources);

  for (var _i = 0; _i < _arr.length; _i++) {
    var _arr$_i = _slicedToArray(_arr[_i], 2),
        key = _arr$_i[0],
        value = _arr$_i[1];

    if (value > 0) {
      output += "<span id=\"".concat(key, "\">").concat(key, ": ").concat(value, "</span>");
    }
  }

  output += '</div>';
  return output;
} // Buttons component


function Buttons(clickers) {
  var output = '<div id="clickers" class="column">';

  var _arr2 = Object.entries(clickers);

  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var _arr2$_i = _slicedToArray(_arr2[_i2], 2),
        key = _arr2$_i[0],
        value = _arr2$_i[1];

    if (Resources[value.spend] >= value.spendCount) {
      output += "<span id=\"".concat(key, "\" class=\"button\">").concat(value.name, "</span>");
    }
  }

  output += '</div>';
  return output;
} // Messages


function Messages(alerts) {
  return "<div id=\"messages\" class=\"column\">".concat(alerts.join(' '), "</div>");
} // user alert message


function newMessage(text) {
  Alerts.push("<span>".concat(text, "</span>"));
} // rendering HTML content


function render(resources, clickers, alerts) {
  root.innerHTML = "\n    ".concat(Header(), "\n    ").concat(Counters(resources), "\n    ").concat(Buttons(clickers), "\n    ").concat(Messages(alerts), "\n"); // incoming: CHRISTMAS TREE OF DOOM

  var _arr3 = Object.entries(clickers);

  var _loop = function _loop() {
    var _arr3$_i = _slicedToArray(_arr3[_i3], 2),
        key = _arr3$_i[0],
        value = _arr3$_i[1];

    var button = document.querySelector("#".concat(key));

    if (button) {
      button.addEventListener('click', function (event) {
        if (Resources["".concat(value.spend)] >= value.spendCount) {
          Resources["".concat(value.buy)] += value.buyCount;
          Resources["".concat(value.spend)] -= value.spendCount;
          newMessage("".concat(value.successMessage));
        } else {
          newMessage("".concat(value.errorMessage));
        }

        render(Resources, Clickers, Alerts);
        console.log(Alerts);
      });
    }
  };

  for (var _i3 = 0; _i3 < _arr3.length; _i3++) {
    _loop();
  }
}

render(Resources, Clickers, Alerts);
},{}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56971" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/final-project.e31bb0bc.map