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
})({"js/detail.js":[function(require,module,exports) {
/* -------------- product_info -------------- */
$(function () {
  var selectColor = $('.product_info .color div');
  selectColor.click(function () {
    selectColor.removeClass('on');
    $(this).addClass('on');
  }); /* selectColor_click_event */

  /* -------------- optionColor -------------- */
  var optionText = $('.option_txt .optionText');
  var optionImg = $('.option_switch .option_img');
  var optionColor = $('.option_color .color_chip');
  var index = 0;
  optionColor.click(function () {
    optionColor.removeClass('on');
    $(this).addClass('on');
    index = $(this).index();
    optionText.removeClass('on');
    optionImg.removeClass('on');
    optionText.eq(index).addClass('on');
    optionImg.eq(index).addClass('on');
  }); /* optionColor_click_event */

  /* -------------- card_popup -------------- */
  var mark = $('.card_benefit .more_mark');
  var cardPopup = $('.card_popup');
  mark.mouseover(function () {
    cardPopup.css('display', 'block');
  });
  mark.mouseout(function () {
    cardPopup.css('display', 'none');
  }); //cardPopup_hover_event

  /* -------------- side_notice -------------- */
  $('#refundOpen').on('click', function () {
    $('#refundHide').slideDown(320);
    $(this).hide();
    $('#refundClose').show();
  });
  $('#refundClose').on('click', function () {
    $('#refundHide').slideUp(320);
    $(this).hide();
    $('#refundOpen').show();
  }); //refundInfo_click_event.

  $('#shipmentOpen').on('click', function () {
    $('#shipmentHide').slideDown(320);
    $(this).hide();
    $('#shipmentClose').show();
  });
  $('#shipmentClose').on('click', function () {
    $('#shipmentHide').slideUp(320);
    $(this).hide();
    $('#shipmentOpen').show();
  }); //shipmentInfo_click_event

  $('#csOpen').on('click', function () {
    $('#csHide').slideDown(176);
    $(this).hide();
    $('#csClose').show();
  });
  $('#csClose').on('click', function () {
    $('#csHide').slideUp(176);
    $(this).hide();
    $('#csOpen').show();
  }); //csInfo_click_event

  /* -------------- tabMenu -------------- */
  var tabLi = $('.menu_label li');
  tabLi.click(function () {
    tabLi.removeClass('on');
    $(this).addClass('on');
  });

  /*   let position1 = $('#questionBox').offset().top;
    console.log(position1);
   */
  $('#detailInfo').click(function (e) {
    e.preventDefault();
    //let top = $('#detailBox').offset().top
    $('.detail_content').stop().animate({
      scrollTop: 875
    }, 500);
  }); //btn_top_click_event

  $('#notice').click(function (e) {
    e.preventDefault();
    //let top = $('#noticeBox').offset().top
    $('.detail_content').stop().animate({
      scrollTop: 2200
    }, 500);
  }); //btn_top_click_event

  $('#review').click(function (e) {
    e.preventDefault();
    //let top = $('#reviewBox').offset().top
    $('.detail_content').stop().animate({
      scrollTop: 3200
    }, 500);
  }); //btn_top_click_event

  $('#question').click(function (e) {
    e.preventDefault();
    //let top = $('#questionBox').offset().top
    $('.detail_content').stop().animate({
      scrollTop: 5300
    }, 500);
  }); //btn_top_click_event

  /* -------------- review_img -------------- */
  var eleWidth = $('.review_img .frame li').innerWidth();
  $('.frame li a').click(function () {
    review_popup.style.display = 'block';
  });
  function left() {
    $('.review_img .frame').animate({
      left: eleWidth * -1
    }, 300, function () {
      $(this).children('li:first').insertAfter($(this).children('li:last'));
      $(this).css('left', 0);
    });
  } //left()

  function right() {
    $('.review_img .frame li:last').insertBefore($('.frame li:first'));
    $('.review_img .frame').css('left', eleWidth * -1);
    $('.review_img .frame').animate({
      left: 0
    }, 300);
  } //right 

  $('.prev_btn').click(function () {
    left();
  }); //prev_btn_click_events

  $('.next_btn').click(function () {
    right();
  }); //next_btn_click_event

  /* -------------- questionBox -------------- */
  var guestion = $('.inquire_list ul li .short');
  var answer = $('.inquire_list ul li .answer_area');
  var closeAnswer = $('.inquire_list ul li .answer_area .answer .closeAnswer');
  guestion.on('click', function () {
    answer.slideDown(240);
  });
  closeAnswer.on('click', function () {
    answer.slideUp(240);
  }); //questionBox_click_event

  /* -------------- top_btn -------------- */
  $('.top_btn').click(function (e) {
    e.preventDefault();
    $('.detail_content').stop().animate({
      scrollTop: 0
    }, 500);
  }); //btn_top_click_event

  /* -------------- shopping_history -------------- */
  var historyPopup = $('.history_popup');
  var historyBtn = $('.history_btn');
  var hideBtn = $('.history_hide');
  var historyList = $('.shopping_history .history_list');
  var deleteBtn = $('.list_delete');
  var deleteAll = $('.deleteAll');
  historyBtn.click(function () {
    historyPopup.stop().animate({
      right: 0
    }, 100);
  });
  hideBtn.click(function () {
    historyPopup.stop().animate({
      right: -480
    }, 100);
  }); //historyBtn_click_event

  historyList.mouseover(function () {
    deleteBtn.css('display', 'block');
  });
  historyList.mouseout(function () {
    deleteBtn.css('display', 'none');
  }); //historyBtn_mouseover_event

  deleteBtn.mouseover(function () {
    deleteBtn.css('color', '#191919');
  });
  deleteBtn.mouseout(function () {
    deleteBtn.css('color', '#ccc');
  }); //deleteBtn_mouseover_event

  deleteBtn.click(function () {
    historyList.css('display', 'none');
  });
  deleteAll.click(function () {
    historyList.css('display', 'none');
  }); //deleteBtn_click_event
});

/* -------------- option -------------- */
document.addEventListener('DOMContentLoaded', function () {
  var butter = document.querySelector('.color .butter');
  var pink = document.querySelector('.color .pink');
  var white = document.querySelector('.color .white');
  var txt = document.querySelector('.select_option h5');
  var slideImg = document.querySelector('.swiper-slide.swiper-slide-active img');
  butter.onclick = butterClick;
  pink.onclick = pinkClick;
  white.onclick = whiteClick;
  function butterClick() {
    txt.innerHTML = '[필수] Butter', slideImg.src = './images/detail_AllButter_gray.jpg';
  }
  function pinkClick() {
    txt.innerHTML = '[필수] Peach & Deep Green', slideImg.src = './images/detail_PeachDeepGreen_gray.jpg';
  }
  function whiteClick() {
    txt.innerHTML = '[필수] White & Ice Blue', slideImg.src = './images/detail_WhiteIceBlue_gray.jpg';
  }

  /* -------------- allPrice -------------- */
  var countElement = document.getElementById("count");
  var countVal = countElement.value;
  var result = document.getElementById("result");
  var resultVal = result.value;
  var sellPrice = document.getElementById("sellPrice");
  var sellPriceVal = sellPrice.value;
  var finalCount = document.getElementById("finalCount");
  var increase = document.getElementById("add");
  var decrease = document.getElementById("minus");
  increase.onclick = add;
  decrease.onclick = minus;
  function add() {
    countVal++;
    resultVal = countVal * sellPriceVal;
    countElement.value = countVal;
    finalCount.value = countVal;
    result.value = resultVal;
  }
  ;
  function minus() {
    if (countVal > 1) {
      countVal--;
      resultVal = countVal * sellPriceVal;
      countElement.value = countVal;
      finalCount.value = countVal;
      result.value = resultVal;
      console.log(countVal, resultVal, sellPriceVal);
    } else {
      countVal = 1;
    }
  }
  ;

  /* -------------- detailImg -------------- */
  var moreBtn = document.querySelector('.more_btn');
  var detailBox = document.querySelector('.detail');
  var isOpen = false;
  //변수에 is가 붙으면 false나 true 값을 가지는 변수라는 것
  //status 움직이는 동적 컨텐츠 만들때 많이 사용

  moreBtn.addEventListener('click', function () {
    if (isOpen === false) {
      detailBox.style.display = 'block';
      moreBtn.innerHTML = '상품설명닫기 <i class="fas fa-chevron-up"></i>';
      isOpen = true;
    } else {
      detailBox.style.display = 'none';
      moreBtn.innerHTML = '상품설명 더보기 <i class="fas fa-chevron-down"></i>';
      isOpen = false;
    }
  }); //moreBtn_click_event
});
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/detail.js"], null)
//# sourceMappingURL=/detail.975b991d.js.map