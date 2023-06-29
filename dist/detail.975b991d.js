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
document.addEventListener('DOMContentLoaded', function () {
  var selectColor = document.querySelectorAll('.product_info .color div');
  selectColor.forEach(function (item, i) {
    item.addEventListener('click', function () {
      selectColor.forEach(function (item) {
        item.classList.remove('on');
        selectColor[i].classList.add('on');
      });
    });
  });
  var butter = document.querySelector('.color .butter');
  var pink = document.querySelector('.color .pink');
  var white = document.querySelector('.color .white');
  var txt = document.querySelector('.select_option h5');
  var slideImg = document.querySelector('.swiper-slide-active img');
  butter.addEventListener('click', function () {
    txt.innerHTML = '[필수] Butter';
    slideImg.src = './images/detail_AllButter_gray.jpg';
  });
  pink.addEventListener('click', function () {
    txt.innerHTML = '[필수] Peach & Deep Green';
    slideImg.src = './images/detail_PeachDeepGreen_gray.jpg';
  });
  white.addEventListener('click', function () {
    txt.innerHTML = '[필수] White & Ice Blue';
    slideImg.src = './images/detail_WhiteIceBlue_gray.jpg';
  });

  /* -------------- card_popup -------------- */
  var mark = document.querySelector('.card_benefit .more_mark');
  var cardPopup = document.querySelector('.card_popup');
  mark.addEventListener('mouseover', function () {
    cardPopup.style.display = 'block';
  });
  mark.addEventListener('mouseout', function () {
    cardPopup.style.display = 'none';
  });

  /* -------------- optionColor -------------- */
  var optionText = document.querySelectorAll('.option_txt .optionText');
  var optionImg = document.querySelectorAll('.option_switch .option_img');
  var optionColor = document.querySelectorAll('.option_color .color_chip');
  optionColor.forEach(function (item, i) {
    item.addEventListener('click', function () {
      optionColor.forEach(function (item) {
        item.classList.remove('on');
        optionColor[i].classList.add('on');
      });
      optionImg.forEach(function (item) {
        item.classList.remove('on');
        optionImg[i].classList.add('on');
      });
      optionText.forEach(function (item) {
        item.classList.remove('on');
        optionText[i].classList.add('on');
      });
    });
  });

  /* -------------- detailImg -------------- */
  var moreBtn = document.querySelector('.more_btn');
  var isOpen = false;
  moreBtn.addEventListener('click', function () {
    var detailBox = document.querySelector('.detail');
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

  /* -------------- side_notice -------------- */
  var refundTitle = document.getElementById('refundTitle');
  var refundHide = document.getElementById('refundHide');
  var refundOpen = document.getElementById('refundOpen');
  var refundClose = document.getElementById('refundClose');
  var shipmentTitle = document.getElementById('shipmentTitle');
  var shipmentHide = document.getElementById('shipmentHide');
  var shipmentOpen = document.getElementById('shipmentOpen');
  var shipmentClose = document.getElementById('shipmentClose');
  var csTitle = document.getElementById('csTitle');
  var csHide = document.getElementById('csHide');
  var csOpen = document.getElementById('csOpen');
  var csClose = document.getElementById('csClose');
  refundTitle.addEventListener('click', function () {
    refundHide.classList.toggle('show');
    refundOpen.classList.toggle('show');
    refundClose.classList.toggle('show');
  });
  shipmentTitle.addEventListener('click', function () {
    shipmentHide.classList.toggle('show');
    shipmentOpen.classList.toggle('show');
    shipmentClose.classList.toggle('show');
  });
  csTitle.addEventListener('click', function () {
    csHide.classList.toggle('show');
    csOpen.classList.toggle('show');
    csClose.classList.toggle('show');
  });

  /* -------------- allPrice -------------- */
  var countEle = document.getElementById("count");
  var countVal = countEle.value;
  var result = document.getElementById("result");
  var resultVal = result.value;
  var sellPrice = document.getElementById("sellPrice");
  var sellPriceVal = sellPrice.value;
  var finalCount = document.getElementById("finalCount");
  var increase = document.getElementById("plus");
  var decrease = document.getElementById("minus");
  increase.onclick = plus;
  decrease.onclick = minus;
  function plus() {
    countVal++;
    resultVal = countVal * sellPriceVal;
    countEle.value = countVal;
    finalCount.value = countVal;
    result.value = resultVal;
  }
  ;
  function minus() {
    if (countVal > 1) {
      countVal--;
      resultVal = countVal * sellPriceVal;
      countEle.value = countVal;
      finalCount.value = countVal;
      result.value = resultVal;
    } else {
      countVal = 1;
    }
    console.log(countVal, resultVal, sellPriceVal);
  }
  ;

  /* -------------- questionBox -------------- */
  var guestion = document.querySelector('.list_box ul li .short');
  var answer = document.querySelector('.list_box ul li .answer_area');
  var closeAnswer = document.querySelector('.answer_area .answer .closeAnswer');
  guestion.addEventListener('click', function () {
    answer.style.display = 'block';
  });
  closeAnswer.addEventListener('click', function () {
    answer.style.display = 'none';
  });

  /* -------------- scroll_event -------------- */
  var topBtn = document.querySelector('.top_btn');
  var header = document.getElementById('header');
  var tabMenu = document.querySelector('.tabMenu_wrap');
  var tabMenuHeader = document.querySelector('.tabMenu_headerWrap');
  var detailArea = document.getElementById('detail_content');
  detailArea.addEventListener('scroll', function () {
    if (detailArea.scrollTop < 400) {
      gsap.to(topBtn, 0.3, {
        opacity: 0
      });
    } else {
      gsap.to(topBtn, 0.3, {
        opacity: 1
      });
    }
  }); //topBtn_event

  topBtn.addEventListener('click', function () {
    gsap.to(detailArea, 0.5, {
      scrollTo: 0
    });
  });
  detailArea.addEventListener('scroll', function () {
    if (detailArea.scrollTop >= 900) {
      header.style.opacity = "0";
      tabMenu.style.opacity = "0";
      tabMenuHeader.style.opacity = "1";
    } else {
      header.style.opacity = "1";
      tabMenu.style.opacity = "1";
      tabMenuHeader.style.opacity = "0";
    }
  }); //tabMenu_event

  var tabDetailInfo = document.getElementById('detailInfo');
  var tabNotice = document.getElementById('notice');
  var tabReview = document.getElementById('review');
  var tabQuestion = document.getElementById('question');
  var headDetailInfo = document.getElementById('headDetailInfo');
  var headNotice = document.getElementById('headNotice');
  var headReview = document.getElementById('headReview');
  var headQuestion = document.getElementById('headQuestion');
  var detailBox = document.getElementById('detailBox');
  var noticeBox = document.getElementById('noticeBox');
  var reviewBox = document.getElementById('reviewBox');
  var questionBox = document.getElementById('questionBox');

  /* -------------- tabMenu -------------- */
  tabDetailInfo.addEventListener('click', function () {
    gsap.to(detailArea, 0.5, {
      scrollTo: detailBox
    });
  });
  tabNotice.addEventListener('click', function () {
    gsap.to(detailArea, 0.5, {
      scrollTo: noticeBox
    });
  });
  tabReview.addEventListener('click', function () {
    gsap.to(detailArea, 0.5, {
      scrollTo: reviewBox
    });
  });
  tabQuestion.addEventListener('click', function () {
    gsap.to(detailArea, 0.5, {
      scrollTo: questionBox
    });
  });

  /* -------------- tabMenu_header -------------- */
  headDetailInfo.addEventListener('click', function () {
    gsap.to(detailArea, 0.5, {
      scrollTo: detailBox
    });
  });
  headNotice.addEventListener('click', function () {
    gsap.to(detailArea, 0.5, {
      scrollTo: noticeBox
    });
  });
  headReview.addEventListener('click', function () {
    gsap.to(detailArea, 0.5, {
      scrollTo: reviewBox
    });
  });
  headQuestion.addEventListener('click', function () {
    gsap.to(detailArea, 0.5, {
      scrollTo: questionBox
    });
  });
  var tabLi = document.querySelectorAll('.tabMenu .menu_label li');
  var headTabLi = document.querySelectorAll('.tabMenu .headMenu_label li');
  tabLi.forEach(function (item, i) {
    item.addEventListener('click', function () {
      headTabLi.forEach(function (item) {
        item.classList.remove('on');
        headTabLi[i].classList.add('on');
      });
      tabLi.forEach(function (item) {
        item.classList.remove('on');
        tabLi[i].classList.add('on');
      });
    });
  });
  headTabLi.forEach(function (item, i) {
    item.addEventListener('click', function () {
      headTabLi.forEach(function (item) {
        item.classList.remove('on');
        headTabLi[i].classList.add('on');
      });
    });
  });

  /* -------------- review_save -------------- */
  var saveBtn = document.getElementById('saveBtn');
  saveBtn.addEventListener('click', function () {
    var revName = document.getElementById('revName');
    var revTitle = document.getElementById('revTitle');
    var revCon = document.getElementById('revCon');
    var SNOWMAN22 = document.getElementById('SNOWMAN22');
    var inputImage = document.getElementById('inputImage');
    var file = inputImage.files[0];
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate().toString().padStart(2, '0');
    var fullDateTime = year + '-' + month + '-' + day;
    var reviewList = document.getElementById('reviewList');
    var reviewLi = document.createElement('li');
    var userInfo = document.createElement('div');
    userInfo.setAttribute('class', 'user_info');
    var userIdP = document.createElement('p');
    var userIdPTxt = document.createTextNode(revName.value);
    userIdP.setAttribute('class', 'userId');
    userIdP.appendChild(userIdPTxt);
    userInfo.appendChild(userIdP);
    var revDateP = document.createElement('p');
    var revDatePTxt = document.createTextNode(fullDateTime);
    revDateP.setAttribute('class', 'revDate');
    revDateP.appendChild(revDatePTxt);
    userInfo.appendChild(revDateP);
    var purchaseOption = document.createElement('div');
    purchaseOption.setAttribute('class', 'purchaseOption');
    var revOptionP = document.createElement('p');
    var revOptionPTxt = document.createTextNode("옵션 :");
    revOptionP.setAttribute('class', 'revOption');
    revOptionP.appendChild(revOptionPTxt);
    purchaseOption.appendChild(revOptionP);
    var revOptionValP = document.createElement('p');
    var revOptionValTxt = document.createTextNode(SNOWMAN22.value);
    revOptionValP.setAttribute('class', 'revOptionVal');
    revOptionValP.appendChild(revOptionValTxt);
    purchaseOption.appendChild(revOptionValP);
    var reviewContent = document.createElement('div');
    reviewContent.setAttribute('class', 'reviewContent');
    var reviewTxtP = document.createElement('p');
    var reviewTxtTxt = document.createTextNode(revCon.value);
    reviewTxtP.setAttribute('class', 'reviewTxt');
    reviewTxtP.appendChild(reviewTxtTxt);
    reviewContent.appendChild(reviewTxtP);
    var contentImg = document.createElement('div');
    contentImg.setAttribute('class', 'contentImg');
    var reviewImg = document.createElement('img');
    reviewImg.setAttribute('src', URL.createObjectURL(file));
    contentImg.appendChild(reviewImg);
    reviewContent.appendChild(contentImg);
    reviewLi.appendChild(userInfo);
    reviewLi.appendChild(purchaseOption);
    reviewLi.appendChild(reviewContent);
    reviewList.prepend(reviewLi);
    revName.value = "";
    revTitle.value = "";
    revCon.value = "";
    SNOWMAN22.value = "상품옵션선택";
    inputImage.value = "";
  });

  /* -------------- QnA -------------- */

  var btnAddBtn = document.getElementById('btnAddBtn');
  btnAddBtn.addEventListener('click', function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate().toString().padStart(2, '0');
    var hour = date.getHours().toString().padStart(2, '0');
    ;
    var minute = date.getMinutes().toString().padStart(2, '0');
    var fullDateTime = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
    var userName = document.getElementById('userName');
    var queTitle = document.getElementById('queTitle');
    var queContent = document.getElementById('queContent');
    var qnaList = document.getElementById('qnaList');
    var queLi = document.createElement('li');
    queLi.setAttribute('class', 'queLi');
    var qnaShort = document.createElement('div');
    qnaShort.setAttribute('class', 'short');
    var que = document.createElement('div');
    que.setAttribute('class', 'que');
    var qnaLongP = document.createElement('p');
    var qnaLongTxt = document.createTextNode(queContent.value);
    qnaLongP.setAttribute('class', 'qnaLong');
    qnaLongP.appendChild(qnaLongTxt);
    que.appendChild(qnaLongP);
    var queUser = document.createElement('div');
    queUser.setAttribute('class', 'queUser');
    var queUserP = document.createElement('p');
    var queUserPTxt = document.createTextNode(userName.value);
    queUserP.appendChild(queUserPTxt);
    queUser.appendChild(queUserP);
    var queDate = document.createElement('div');
    queDate.setAttribute('class', 'queDate');
    var queDateP = document.createElement('p');
    var queDatePTxt = document.createTextNode(fullDateTime);
    queDateP.appendChild(queDatePTxt);
    queDate.appendChild(queDateP);
    var queStatus = document.createElement('div');
    queStatus.setAttribute('class', 'queStatus');
    var queStatusP = document.createElement('p');
    var queStatusPTxt = document.createTextNode("no");
    queStatusP.appendChild(queStatusPTxt);
    queStatus.appendChild(queStatusP);
    qnaShort.appendChild(que);
    qnaShort.appendChild(queUser);
    qnaShort.appendChild(queDate);
    qnaShort.appendChild(queStatus);
    queLi.appendChild(qnaShort);
    qnaList.prepend(queLi);
    userName.value = null;
    queTitle.value = null;
    queContent.value = null;
  });

  /* -------------- shopping_history -------------- */
  var historyBtn = document.querySelector('.history_btn');
  var historyPopup = document.querySelector('.history_popup');
  var hideBtn = document.querySelector('.history_hide');
  var historyList = document.querySelector('.shopping_history .history_list');
  var deleteBtn = document.querySelector('.list_delete');
  var deleteAll = document.querySelector('.deleteAll');
  historyBtn.addEventListener('click', function () {
    historyPopup.style.display = 'block';
  });
  hideBtn.addEventListener('click', function () {
    historyPopup.style.display = 'none';
  });
  historyList.addEventListener('mouseover', function () {
    deleteBtn.style.display = 'block';
  });
  historyList.addEventListener('mouseout', function () {
    deleteBtn.style.display = 'none';
  });
  deleteBtn.addEventListener('mouseover', function () {
    deleteBtn.style.color = '#191919';
  });
  deleteBtn.addEventListener('mouseout', function () {
    deleteBtn.style.color = '#ccc';
  });
  deleteBtn.addEventListener('click', function () {
    historyList.style.display = 'none';
  });
  deleteAll.addEventListener('click', function () {
    historyList.style.display = 'none';
  });
});

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
}
; //right 

$('.prev_btn').click(function () {
  left();
}); //prev_btn_click_events

$('.next_btn').click(function () {
  right();
}); //next_btn_click_event
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58798" + '/');
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