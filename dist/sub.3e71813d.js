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
})({"js/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//productList라는 데이터 객체를 만들어 끌어가는 것
//id는 데이터 배열을 구분해줌

var shoppingList = [{
  id: "ik01",
  name: "IK 테이블 스탠드 SNOWMAN22 SOLID Table Stand",
  price: "230,000원",
  best: "best",
  src: "./images/product_01.jpg"
}, {
  id: "ik02",
  name: "IK 시리즈 WORKSHOP28 Pendant",
  price: "150,000원",
  best: "false",
  src: "./images/product_02.jpg"
}, {
  id: "ik03",
  name: "IK 시리즈 TRIANGLE120 A Pendant",
  price: "390,000원",
  best: "false",
  src: "./images/product_03.jpg"
}, {
  id: "ik04",
  name: "IK 시리즈 SNOWBALL22 SOLID Table Stand",
  price: "210,000원",
  best: "best",
  src: "./images/product_04.jpg"
}, {
  id: "ik05",
  name: "IK 시리즈 FONDUE16 Table Stand KYOBO BOOK Edition",
  price: "280,000원",
  best: "best",
  src: "./images/product_05.jpg"
}, {
  id: "ik06",
  name: "IK 시리즈 TEACUP 4A Table Stand",
  price: "75,000원",
  best: "false",
  src: "./images/product_06.jpg"
}, {
  id: "ik07",
  name: "IK 시리즈 SNOWMAN22 Table Stand",
  price: "220,000원",
  best: "false",
  src: "./images/product_07.jpg"
}, {
  id: "ik08",
  name: "IK 시리즈 FROG22 Floor Stand",
  price: "270,000원",
  best: "best",
  src: "./images/product_08.jpg"
}, {
  id: "ik09",
  name: "IK 시리즈 FROG38 Pendant Burgundy",
  price: "120,000원",
  best: "false",
  src: "./images/product_09.jpg"
}, {
  id: "ik10",
  name: "IK 시리즈 ACORN22 Floor Stand",
  price: "270,000원",
  best: "false",
  src: "./images/product_010.jpg"
}, {
  id: "ik11",
  name: "IK 시리즈 WOOD3 Table Stand Silver",
  price: "55,000원",
  best: "false",
  src: "./images/product_011.jpg"
}, {
  id: "ik12",
  name: "IK 시리즈 PINOCCHIO120 B Pendant",
  price: "280,000원",
  best: "false",
  src: "./images/product_012.jpg"
}, {
  id: "ik13",
  name: "IK 시리즈 SWAN2 Table Stand",
  price: "240,000원",
  best: "false",
  src: "./images/product_013.jpg"
}, {
  id: "ik14",
  name: "IK 시리즈 WORKSHOP38 Pendant",
  price: "190,000원",
  best: "best",
  src: "./images/product_014.jpg"
}, {
  id: "ik15",
  name: "IK 시리즈 WORKSHOP28 Pendant",
  price: "150,000원",
  best: "false",
  src: "./images/product_015.jpg"
}, {
  id: "ik16",
  name: "IK 시리즈 SWAN2 Floor Stand",
  price: "340,000원",
  best: "false",
  src: "./images/product_016.jpg"
}, {
  id: "ik17",
  name: "IK 시리즈 CANDLE9 Table Stand Mint",
  price: "55,000원",
  best: "false",
  src: "./images/product_017.jpg"
}, {
  id: "ik18",
  name: "IK 시리즈 APOLLO22 Table Stand",
  price: "340,000원",
  best: "false",
  src: "./images/product_018.jpg"
}, {
  id: "ik19",
  name: "IK 시리즈 SATURN55 SMART Pendant White",
  price: "240,000원",
  best: "false",
  src: "./images/product_019.jpg"
}, {
  id: "ik20",
  name: "IK 시리즈 TALLBOY16 Table Stand",
  price: "180,000원",
  best: "false",
  src: "./images/product_020.jpg"
}, {
  id: "ik21",
  name: "IK 시리즈 SNOWBALL22 Table Stand",
  price: "200,000원",
  best: "false",
  src: "./images/product_021.jpg"
}, {
  id: "ik22",
  name: "IK 시리즈 FROG22 Table Stand Butter",
  price: "160,000원",
  best: "false",
  src: "./images/product_022.jpg"
}, {
  id: "ik23",
  name: "IK 시리즈 ACORN22 Table Stand White Edition",
  price: "170,000원",
  best: "false",
  src: "./images/product_023.jpg"
}, {
  id: "ik24",
  name: "IK 시리즈 CANDLE9 Table Stand Ivory & Green",
  price: "550,000원",
  best: "false",
  src: "./images/product_024.jpg"
}, {
  id: "ik25",
  name: "IK 시리즈 SWAN Table Stand ODENSE Edition",
  price: "240,000원",
  best: "false",
  src: "./images/product_025.jpg"
}, {
  id: "ik26",
  name: "IK 시리즈 LANDSCAPE68 Table Stand Industrial Gray",
  price: "890,000원",
  best: "false",
  src: "./images/product_026.jpg"
}, {
  id: "ik27",
  name: "IK 시리즈 TEACUP 4R Table Stand",
  price: "75,000원",
  best: "false",
  src: "./images/product_027.jpg"
}, {
  id: "ik28",
  name: "IK 시리즈 WOOD2 SHADE Table Stand Gold & Green",
  price: "65,000원",
  best: "false",
  src: "./images/product_028.jpg"
}, {
  id: "ik29",
  name: "IK 시리즈 TEACUP R Table Stand",
  price: "75,000원",
  best: "false",
  src: "./images/product_029.jpg"
}, {
  id: "ik30",
  name: "IK 시리즈 ACORN38 Floor Stand",
  price: "310,000원",
  best: "false",
  src: "./images/product_030.jpg"
}, {
  id: "ik31",
  name: "IK 시리즈 FROG22 Pendant 5Colors",
  price: "95,000원",
  best: "false",
  src: "./images/product_031.jpg"
}, {
  id: "ik32",
  name: "IK 시리즈 NEST25 Pendant 2Colors",
  price: "120,000원",
  best: "false",
  src: "./images/product_032.jpg"
}, {
  id: "ik33",
  name: "IK 시리즈 WOOD1 Table Stand",
  price: "35,000원",
  best: "false",
  src: "./images/product_033.jpg"
}, {
  id: "ik34",
  name: "IK 시리즈 ACORN22 Pendant 5Colors",
  price: "95,000원",
  best: "false",
  src: "./images/product_035.jpg"
}, {
  id: "ik35",
  name: "IK 시리즈 SNOWBALL22 Floor Stand 3Colors",
  price: "320,000원",
  best: "false",
  src: "./images/product_034.jpg"
}, {
  id: "ik36",
  name: "IK 시리즈 MAGRITTE40 Pendant 4Colors",
  price: "380,000원",
  best: "false",
  src: "./images/product_036.jpg"
}, {
  id: "ik37",
  name: "IK 시리즈 SLOPE45 SMART Pendant 3Colors",
  price: "290,000원",
  best: "false",
  src: "./images/product_037.jpg"
}, {
  id: "ik38",
  name: "IK 시리즈 ACORN38 Pendant 5Colors",
  price: "120,000원",
  best: "false",
  src: "./images/product_039.jpg"
}, {
  id: "ik39",
  name: "IK 시리즈 MAGRITTE25 Pendant 4Colors",
  price: "280,000원",
  best: "false",
  src: "./images/product_038.jpg"
}, {
  id: "ik40",
  name: "IK 시리즈 WOOD2 Table Stand 2Colors",
  price: "55,000원",
  best: "false",
  src: "./images/product_040.jpg"
}];
var _default = shoppingList;
exports.default = _default;
},{}],"js/sub.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* -------------- productList -------------- */

//export로 내보낸 변수를 가져와 쓰는것

var productList = document.querySelector('.product_list');
for (var i = 0; i < _data.default.length; i++) {
  //for (let i = 0; i < 16; i++) {

  var productLi = document.createElement('li');
  //productLi.setAttribute('class', 'productLi')

  var productImgDiv = document.createElement('div');
  productImgDiv.setAttribute('class', 'product_img');
  productLi.appendChild(productImgDiv);
  var productImgA = document.createElement('a');
  productImgA.setAttribute('href', './detail.html');
  productImgDiv.appendChild(productImgA);
  var productImg = document.createElement('img');
  productImg.setAttribute('src', _data.default[i].src);
  productImgA.appendChild(productImg);
  var productTxtDiv = document.createElement('div');
  productTxtDiv.setAttribute('class', 'product_txt kor');
  productLi.appendChild(productTxtDiv);
  var productName = document.createElement('p');
  var productNameTxt = document.createTextNode(_data.default[i].name);
  productName.appendChild(productNameTxt);
  productName.setAttribute('class', 'title');
  productTxtDiv.appendChild(productName);
  var productPrice = document.createElement('span');
  var productPriceText = document.createTextNode(_data.default[i].price);
  productPrice.appendChild(productPriceText);
  productPrice.setAttribute('class', 'price');
  productTxtDiv.appendChild(productPrice);
  productList.appendChild(productLi);
}

/* -------------- pagination -------------- */
$(document).on('click', '.paging .pages>span', function () {
  if (!$(this).hasClass('active')) {
    $(this).parent().find('span.active').removeClass('active');
    $(this).addClass('active');
  }
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
},{"./data.js":"js/data.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sub.js"], null)
//# sourceMappingURL=/sub.3e71813d.js.map