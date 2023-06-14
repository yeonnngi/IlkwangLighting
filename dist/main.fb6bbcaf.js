// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/main.js":[function(require,module,exports) {
/* -------------- issue_contents -------------- */
/* 
const interior = document.querySelector('.space_box .img_left .interior')
const interiorLi = document.querySelector('.space_box .img_left .interior li')
const product = document.querySelector('.space_box .img_right .product')
const beddingLi = document.querySelector('.space_box .img_left .bedding li')
const beddingRi = document.querySelector('.space_box .img_right .bedding li')
const livingLi = document.querySelector('.space_box .img_left .living li')
const livingRi = document.querySelector('.space_box .img_right .living li')
const diningLi = document.querySelector('.space_box .img_left .dining li')
const diningRi = document.querySelector('.space_box .img_right .dining li')
const kitchenLi = document.querySelector('.space_box .img_left .kitchen li')
const kitchenRi = document.querySelector('.space_box .img_right .kitchen li')
const deskLi = document.querySelector('.space_box .img_left .desk li')
const deskRi = document.querySelector('.space_box .img_right .desk li')
 */

var interior = $('.space_box .img_left .interior');
var interiorLi = $('.space_box .img_left .interior li');
var product = $('.space_box .img_right .product');
var beddingLi = $('.space_box .img_left .bedding li');
var beddingRi = $('.space_box .img_right .bedding li');
var livingLi = $('.space_box .img_left .living li');
var livingRi = $('.space_box .img_right .living li');
var diningLi = $('.space_box .img_left .dining li');
var diningRi = $('.space_box .img_right .dining li');
var kitchenLi = $('.space_box .img_left .kitchen li');
var kitchenRi = $('.space_box .img_right .kitchen li');
var deskLi = $('.space_box .img_left .desk li');
var deskRi = $('.space_box .img_right .desk li');
beddingRi.mouseover(function () {
  index = $(this).index();
  beddingLi.removeClass('li_on');
  beddingLi.eq(index).addClass('li_on');
});
livingRi.mouseover(function () {
  index = $(this).index();
  livingLi.removeClass('li_on');
  livingLi.eq(index).addClass('li_on');
});
diningRi.mouseover(function () {
  index = $(this).index();
  diningLi.removeClass('li_on');
  diningLi.eq(index).addClass('li_on');
});
kitchenRi.mouseover(function () {
  index = $(this).index();
  kitchenLi.removeClass('li_on');
  kitchenLi.eq(index).addClass('li_on');
});
deskRi.mouseover(function () {
  index = $(this).index();
  deskLi.removeClass('li_on');
  deskLi.eq(index).addClass('li_on');
});
//issue_contents

var tabLi = $('.space_wrap .space_label li');
var index = 0;
tabLi.click(function () {
  tabLi.removeClass('on');
  $(this).addClass('on');
  index = $(this).index();
  interior.removeClass('ul_on');
  interior.eq(index).addClass('ul_on');
  product.removeClass('right_on');
  product.eq(index).addClass('right_on');
});

/* -------------- top_btn -------------- */

$('.top_btn').click(function (e) {
  e.preventDefault();
  $('html, body').stop().animate({
    scrollTop: 0
  }, 500);
}); //btn_top_click_event

/* -------------- shopping_history -------------- */
var historyPopup = $('.history_popup');
var historyBtn = $('.history_btn');
var hideBtn = $('.history_hide');
var shoppingHistory = $('.shopping_history');
var historyList = $('.shopping_history .history_list');
var deleteBtn = $('.list_delete');
var deleteAll = $('.deleteAll');
historyBtn.click(function () {
  historyPopup.stop().animate({
    right: 0
  }, 100);
}); //historyBtn_click_event

hideBtn.click(function () {
  historyPopup.stop().animate({
    right: -480
  }, 100);
}); //historyBtn_click_event

historyList.mouseover(function () {
  deleteBtn.css('display', 'block');
}); //historyBtn_click_event

historyList.mouseout(function () {
  deleteBtn.css('display', 'none');
}); //historyBtn_click_event

deleteBtn.mouseover(function () {
  deleteBtn.css('color', '#191919');
}); //historyBtn_click_event

deleteBtn.mouseout(function () {
  deleteBtn.css('color', '#ccc');
}); //historyBtn_click_event

deleteBtn.click(function () {
  historyList.css('display', 'none');
}); //historyBtn_click_event

deleteAll.click(function () {
  historyList.css('display', 'none');
}); //historyBtn_click_event
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58769" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/main.js"], null)
//# sourceMappingURL=/main.fb6bbcaf.js.map