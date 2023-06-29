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

var products = [{
  id: "ik01",
  name: "IK 테이블 스탠드 SNOWMAN22 SOLID Table Stand",
  price: "230000",
  new: "false",
  best: "best",
  src: "./images/product_01.jpg"
}, {
  id: "ik02",
  name: "IK 시리즈 WORKSHOP28 Pendant",
  price: "150000",
  new: "new",
  best: "false",
  src: "./images/product_02.jpg"
}, {
  id: "ik03",
  name: "IK 시리즈 TRIANGLE120 A Pendant",
  price: "390000",
  new: "new",
  best: "false",
  src: "./images/product_03.jpg"
}, {
  id: "ik04",
  name: "IK 시리즈 SNOWBALL22 SOLID Table Stand",
  price: "210000",
  new: "false",
  best: "best",
  src: "./images/product_04.jpg"
}, {
  id: "ik05",
  name: "IK 시리즈 FONDUE16 Table Stand KYOBO BOOK Edition",
  price: "280000",
  new: "false",
  best: "best",
  src: "./images/product_05.jpg"
}, {
  id: "ik06",
  name: "IK 시리즈 TEACUP 4A Table Stand",
  price: "75000",
  new: "false",
  best: "false",
  src: "./images/product_06.jpg"
}, {
  id: "ik07",
  name: "IK 시리즈 SNOWMAN22 Table Stand",
  price: "220000",
  new: "false",
  best: "best",
  src: "./images/product_07.jpg"
}, {
  id: "ik08",
  name: "IK 시리즈 FROG22 Floor Stand",
  price: "270000",
  new: "false",
  best: "best",
  src: "./images/product_08.jpg"
}, {
  id: "ik09",
  name: "IK 시리즈 FROG38 Pendant Burgundy",
  price: "120000",
  new: "false",
  best: "false",
  src: "./images/product_09.jpg"
}, {
  id: "ik10",
  name: "IK 시리즈 ACORN22 Floor Stand",
  price: "270000",
  new: "false",
  best: "false",
  src: "./images/product_010.jpg"
}, {
  id: "ik11",
  name: "IK 시리즈 WOOD3 Table Stand Silver",
  price: "55000",
  new: "new",
  best: "false",
  src: "./images/product_011.jpg"
}, {
  id: "ik12",
  name: "IK 시리즈 PINOCCHIO120 B Pendant",
  price: "280000",
  new: "new",
  best: "false",
  src: "./images/product_012.jpg"
}, {
  id: "ik13",
  name: "IK 시리즈 SWAN2 Table Stand",
  price: "240000",
  new: "false",
  best: "best",
  src: "./images/product_013.jpg"
}, {
  id: "ik14",
  name: "IK 시리즈 WORKSHOP38 Pendant",
  price: "190000",
  new: "false",
  best: "false",
  src: "./images/product_014.jpg"
}, {
  id: "ik15",
  name: "IK 시리즈 WORKSHOP28 Pendant",
  price: "150000",
  new: "false",
  best: "false",
  src: "./images/product_015.jpg"
}, {
  id: "ik16",
  name: "IK 시리즈 SWAN2 Floor Stand",
  price: "340000",
  new: "false",
  best: "false",
  src: "./images/product_016.jpg"
}, {
  id: "ik17",
  name: "IK 시리즈 CANDLE9 Table Stand Mint",
  price: "55000",
  new: "new",
  best: "false",
  src: "./images/product_017.jpg"
}, {
  id: "ik18",
  name: "IK 시리즈 APOLLO22 Table Stand",
  price: "340000",
  new: "new",
  best: "false",
  src: "./images/product_018.jpg"
}, {
  id: "ik19",
  name: "IK 시리즈 SATURN55 SMART Pendant White",
  price: "240000",
  new: "false",
  best: "best",
  src: "./images/product_019.jpg"
}, {
  id: "ik20",
  name: "IK 시리즈 TALLBOY16 Table Stand",
  price: "180000",
  new: "new",
  best: "false",
  src: "./images/product_020.jpg"
}, {
  id: "ik21",
  name: "IK 시리즈 SNOWBALL22 Table Stand",
  price: "200000",
  new: "false",
  best: "false",
  src: "./images/product_021.jpg"
}, {
  id: "ik22",
  name: "IK 시리즈 FROG22 Table Stand Butter",
  price: "160000",
  new: "new",
  best: "false",
  src: "./images/product_022.jpg"
}, {
  id: "ik23",
  name: "IK 시리즈 ACORN22 Table Stand White Edition",
  price: "170000",
  new: "false",
  best: "false",
  src: "./images/product_023.jpg"
}, {
  id: "ik24",
  name: "IK 시리즈 CANDLE9 Table Stand Ivory & Green",
  price: "550000",
  new: "false",
  best: "false",
  src: "./images/product_024.jpg"
}, {
  id: "ik25",
  name: "IK 시리즈 SWAN Table Stand ODENSE Edition",
  price: "240000",
  new: "false",
  best: "false",
  src: "./images/product_025.jpg"
}, {
  id: "ik26",
  name: "IK 시리즈 LANDSCAPE68 Table Stand Industrial Gray",
  price: "890000",
  new: "false",
  best: "false",
  src: "./images/product_026.jpg"
}, {
  id: "ik27",
  name: "IK 시리즈 TEACUP 4R Table Stand",
  price: "75000",
  new: "false",
  best: "false",
  src: "./images/product_027.jpg"
}, {
  id: "ik28",
  name: "IK 시리즈 WOOD2 SHADE Table Stand Gold & Green",
  price: "65000",
  new: "false",
  best: "false",
  src: "./images/product_028.jpg"
}, {
  id: "ik29",
  name: "IK 시리즈 TEACUP R Table Stand",
  price: "75000",
  new: "false",
  best: "best",
  src: "./images/product_029.jpg"
}, {
  id: "ik30",
  name: "IK 시리즈 ACORN38 Floor Stand",
  price: "310000",
  new: "false",
  best: "false",
  src: "./images/product_030.jpg"
}, {
  id: "ik31",
  name: "IK 시리즈 FROG22 Pendant 5Colors",
  price: "95000",
  new: "false",
  best: "false",
  src: "./images/product_031.jpg"
}, {
  id: "ik32",
  name: "IK 시리즈 NEST25 Pendant 2Colors",
  price: "120000",
  new: "false",
  best: "false",
  src: "./images/product_032.jpg"
}, {
  id: "ik33",
  name: "IK 시리즈 WOOD1 Table Stand",
  price: "35000",
  new: "false",
  best: "false",
  src: "./images/product_033.jpg"
}, {
  id: "ik34",
  name: "IK 시리즈 ACORN22 Pendant 5Colors",
  price: "95000",
  new: "false",
  best: "false",
  src: "./images/product_035.jpg"
}, {
  id: "ik35",
  name: "IK 시리즈 SNOWBALL22 Floor Stand 3Colors",
  price: "320000",
  new: "false",
  best: "false",
  src: "./images/product_034.jpg"
}, {
  id: "ik36",
  name: "IK 시리즈 MAGRITTE40 Pendant 4Colors",
  price: "380000",
  new: "false",
  best: "false",
  src: "./images/product_036.jpg"
}, {
  id: "ik37",
  name: "IK 시리즈 SLOPE45 SMART Pendant 3Colors",
  price: "290000",
  new: "false",
  best: "false",
  src: "./images/product_037.jpg"
}, {
  id: "ik38",
  name: "IK 시리즈 ACORN38 Pendant 5Colors",
  price: "120000",
  new: "false",
  best: "false",
  src: "./images/product_039.jpg"
}, {
  id: "ik39",
  name: "IK 시리즈 MAGRITTE25 Pendant 4Colors",
  price: "280000",
  new: "false",
  best: "false",
  src: "./images/product_038.jpg"
}, {
  id: "ik40",
  name: "IK 시리즈 WOOD2 Table Stand 2Colors",
  new: "false",
  price: "55000",
  best: "false",
  src: "./images/product_040.jpg"
} /* ,
  {
   id: "ik41",
   name: "IK 시리즈 SNOWMAN40 Pendant",
   new: "false",
   price: "520000",
   best: "best",
   src: "./images/product_041.jpg"
  } */];
var _default = products;
exports.default = _default;
},{}],"js/sub.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./data.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /* -------------- productList -------------- */
/* -------------- sort -------------- */
var productList = document.querySelector('.product_list');

// default
for (var i = 0; i < _data.default.length; i++) {
  var productDiv = document.createElement('div');
  productDiv.setAttribute('class', 'productDiv');
  var productImgDiv = document.createElement('div');
  productImgDiv.setAttribute('class', 'product_img');
  productDiv.appendChild(productImgDiv);
  var productImgA = document.createElement('a');
  productImgA.setAttribute('href', './detail.html');
  productImgDiv.appendChild(productImgA);
  var productImg = document.createElement('img');
  productImg.setAttribute('src', _data.default[i].src);
  productImgA.appendChild(productImg);
  var productTxtDiv = document.createElement('div');
  productTxtDiv.setAttribute('class', 'product_txt kor');
  productDiv.appendChild(productTxtDiv);
  var productName = document.createElement('p');
  var productNameTxt = document.createTextNode(_data.default[i].name);
  productName.appendChild(productNameTxt);
  productName.setAttribute('class', 'title');
  productTxtDiv.appendChild(productName);
  var productPrice = document.createElement('span');
  var productPriceText = document.createTextNode(_data.default[i].price + " 원");
  productPrice.appendChild(productPriceText);
  productPrice.setAttribute('class', 'price');
  productTxtDiv.appendChild(productPrice);
  productList.appendChild(productDiv);
}

//new
function productNew() {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }
  var Newproducts = _data.default.filter(function (a) {
    return a.new == "new";
  });
  for (var _i = 0; _i < Newproducts.length; _i++) {
    var _productDiv = document.createElement('div');
    _productDiv.setAttribute('class', 'productDiv');
    var _productImgDiv = document.createElement('div');
    _productImgDiv.setAttribute('class', 'product_img');
    _productDiv.appendChild(_productImgDiv);
    var _productImgA = document.createElement('a');
    _productImgA.setAttribute('href', './detail.html');
    _productImgDiv.appendChild(_productImgA);
    var _productImg = document.createElement('img');
    _productImg.setAttribute('src', Newproducts[_i].src);
    _productImgA.appendChild(_productImg);
    var _productTxtDiv = document.createElement('div');
    _productTxtDiv.setAttribute('class', 'product_txt kor');
    _productDiv.appendChild(_productTxtDiv);
    var _productName = document.createElement('p');
    var _productNameTxt = document.createTextNode(Newproducts[_i].name);
    _productName.appendChild(_productNameTxt);
    _productName.setAttribute('class', 'title');
    _productTxtDiv.appendChild(_productName);
    var _productPrice = document.createElement('span');
    var _productPriceText = document.createTextNode(Newproducts[_i].price + " 원");
    _productPrice.appendChild(_productPriceText);
    _productPrice.setAttribute('class', 'price');
    _productTxtDiv.appendChild(_productPrice);
    productList.appendChild(_productDiv);
  }
}
;

//best
function productBest() {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }
  var Newproducts = _data.default.filter(function (a) {
    return a.best == "best";
  });
  for (var _i2 = 0; _i2 < Newproducts.length; _i2++) {
    var _productDiv2 = document.createElement('div');
    _productDiv2.setAttribute('class', 'productDiv');
    var _productImgDiv2 = document.createElement('div');
    _productImgDiv2.setAttribute('class', 'product_img');
    _productDiv2.appendChild(_productImgDiv2);
    var _productImgA2 = document.createElement('a');
    _productImgA2.setAttribute('href', './detail.html');
    _productImgDiv2.appendChild(_productImgA2);
    var _productImg2 = document.createElement('img');
    _productImg2.setAttribute('src', Newproducts[_i2].src);
    _productImgA2.appendChild(_productImg2);
    var _productTxtDiv2 = document.createElement('div');
    _productTxtDiv2.setAttribute('class', 'product_txt kor');
    _productDiv2.appendChild(_productTxtDiv2);
    var _productName2 = document.createElement('p');
    var _productNameTxt2 = document.createTextNode(Newproducts[_i2].name);
    _productName2.appendChild(_productNameTxt2);
    _productName2.setAttribute('class', 'title');
    _productTxtDiv2.appendChild(_productName2);
    var _productPrice2 = document.createElement('span');
    var _productPriceText2 = document.createTextNode(Newproducts[_i2].price + " 원");
    _productPrice2.appendChild(_productPriceText2);
    _productPrice2.setAttribute('class', 'price');
    _productTxtDiv2.appendChild(_productPrice2);
    productList.appendChild(_productDiv2);
  }
}
;

//가나다순
function productABC() {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }
  var NewProducts = _toConsumableArray(_data.default);
  NewProducts.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  });
  for (var _i3 = 0; _i3 < _data.default.length; _i3++) {
    var _productDiv3 = document.createElement('div');
    _productDiv3.setAttribute('class', 'productDiv');
    var _productImgDiv3 = document.createElement('div');
    _productImgDiv3.setAttribute('class', 'product_img');
    _productDiv3.appendChild(_productImgDiv3);
    var _productImgA3 = document.createElement('a');
    _productImgA3.setAttribute('href', './detail.html');
    _productImgDiv3.appendChild(_productImgA3);
    var _productImg3 = document.createElement('img');
    _productImg3.setAttribute('src', NewProducts[_i3].src);
    _productImgA3.appendChild(_productImg3);
    var _productTxtDiv3 = document.createElement('div');
    _productTxtDiv3.setAttribute('class', 'product_txt kor');
    _productDiv3.appendChild(_productTxtDiv3);
    var _productName3 = document.createElement('p');
    var _productNameTxt3 = document.createTextNode(NewProducts[_i3].name);
    _productName3.appendChild(_productNameTxt3);
    _productName3.setAttribute('class', 'title');
    _productTxtDiv3.appendChild(_productName3);
    var _productPrice3 = document.createElement('span');
    var _productPriceText3 = document.createTextNode(NewProducts[_i3].price + " 원");
    _productPrice3.appendChild(_productPriceText3);
    _productPrice3.setAttribute('class', 'price');
    _productTxtDiv3.appendChild(_productPrice3);
    productList.appendChild(_productDiv3);
  }
}

// 낮은 가격(내림차순)
function priceUp() {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }
  var NewProducts = _toConsumableArray(_data.default);
  NewProducts.sort(function (a, b) {
    return a.price - b.price;
  });
  for (var _i4 = 0; _i4 < _data.default.length; _i4++) {
    var _productDiv4 = document.createElement('div');
    _productDiv4.setAttribute('class', 'productDiv');
    var _productImgDiv4 = document.createElement('div');
    _productImgDiv4.setAttribute('class', 'product_img');
    _productDiv4.appendChild(_productImgDiv4);
    var _productImgA4 = document.createElement('a');
    _productImgA4.setAttribute('href', './detail.html');
    _productImgDiv4.appendChild(_productImgA4);
    var _productImg4 = document.createElement('img');
    _productImg4.setAttribute('src', NewProducts[_i4].src);
    _productImgA4.appendChild(_productImg4);
    var _productTxtDiv4 = document.createElement('div');
    _productTxtDiv4.setAttribute('class', 'product_txt kor');
    _productDiv4.appendChild(_productTxtDiv4);
    var _productName4 = document.createElement('p');
    var _productNameTxt4 = document.createTextNode(NewProducts[_i4].name);
    _productName4.appendChild(_productNameTxt4);
    _productName4.setAttribute('class', 'title');
    _productTxtDiv4.appendChild(_productName4);
    var _productPrice4 = document.createElement('span');
    var _productPriceText4 = document.createTextNode(NewProducts[_i4].price + " 원");
    _productPrice4.appendChild(_productPriceText4);
    _productPrice4.setAttribute('class', 'price');
    _productTxtDiv4.appendChild(_productPrice4);
    productList.appendChild(_productDiv4);
  }
}

// 높은 가격(오름차순)
function priceDown() {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }
  var NewProducts = _toConsumableArray(_data.default);
  NewProducts.sort(function (a, b) {
    return b.price - a.price;
  });
  for (var _i5 = 0; _i5 < _data.default.length; _i5++) {
    var _productDiv5 = document.createElement('div');
    _productDiv5.setAttribute('class', 'productDiv');
    var _productImgDiv5 = document.createElement('div');
    _productImgDiv5.setAttribute('class', 'product_img');
    _productDiv5.appendChild(_productImgDiv5);
    var _productImgA5 = document.createElement('a');
    _productImgA5.setAttribute('href', './detail.html');
    _productImgDiv5.appendChild(_productImgA5);
    var _productImg5 = document.createElement('img');
    _productImg5.setAttribute('src', NewProducts[_i5].src);
    _productImgA5.appendChild(_productImg5);
    var _productTxtDiv5 = document.createElement('div');
    _productTxtDiv5.setAttribute('class', 'product_txt kor');
    _productDiv5.appendChild(_productTxtDiv5);
    var _productName5 = document.createElement('p');
    var _productNameTxt5 = document.createTextNode(NewProducts[_i5].name);
    _productName5.appendChild(_productNameTxt5);
    _productName5.setAttribute('class', 'title');
    _productTxtDiv5.appendChild(_productName5);
    var _productPrice5 = document.createElement('span');
    var _productPriceText5 = document.createTextNode(NewProducts[_i5].price + " 원");
    _productPrice5.appendChild(_productPriceText5);
    _productPrice5.setAttribute('class', 'price');
    _productTxtDiv5.appendChild(_productPrice5);
    productList.appendChild(_productDiv5);
  }
}

// default function
function productBasic() {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }
  for (var _i6 = 0; _i6 < _data.default.length; _i6++) {
    var _productDiv6 = document.createElement('div');
    _productDiv6.setAttribute('class', 'productDiv');
    var _productImgDiv6 = document.createElement('div');
    _productImgDiv6.setAttribute('class', 'product_img');
    _productDiv6.appendChild(_productImgDiv6);
    var _productImgA6 = document.createElement('a');
    _productImgA6.setAttribute('href', './detail.html');
    _productImgDiv6.appendChild(_productImgA6);
    var _productImg6 = document.createElement('img');
    _productImg6.setAttribute('src', _data.default[_i6].src);
    _productImgA6.appendChild(_productImg6);
    var _productTxtDiv6 = document.createElement('div');
    _productTxtDiv6.setAttribute('class', 'product_txt kor');
    _productDiv6.appendChild(_productTxtDiv6);
    var _productName6 = document.createElement('p');
    var _productNameTxt6 = document.createTextNode(_data.default[_i6].name);
    _productName6.appendChild(_productNameTxt6);
    _productName6.setAttribute('class', 'title');
    _productTxtDiv6.appendChild(_productName6);
    var _productPrice6 = document.createElement('span');
    var _productPriceText6 = document.createTextNode(_data.default[_i6].price + " 원");
    _productPrice6.appendChild(_productPriceText6);
    _productPrice6.setAttribute('class', 'price');
    _productTxtDiv6.appendChild(_productPrice6);
    productList.appendChild(_productDiv6);
  }
}

// button
var btnContainer = document.querySelector(".btnContainer");
var basicBtn = document.querySelector(".basicBtn");
var newBtn = document.querySelector(".newBtn");
var bestBtn = document.querySelector(".bestBtn");
var abcBtn = document.querySelector(".abcBtn");
var lowPriceBtn = document.querySelector(".lowPriceBtn");
var highPriceBtn = document.querySelector(".highPriceBtn");
btnContainer.addEventListener("click", function (e) {
  if (e.target == basicBtn) {
    productBasic();
  } else if (e.target == newBtn) {
    productNew();
  } else if (e.target == bestBtn) {
    productBest();
  } else if (e.target == abcBtn) {
    productABC();
  } else if (e.target == lowPriceBtn) {
    priceUp();
  } else if (e.target == highPriceBtn) {
    priceDown();
  } else {
    return;
  }
});
var selectBtn = document.querySelectorAll('.btnContainer button');
selectBtn.forEach(function (item, i) {
  item.addEventListener('click', function () {
    selectBtn.forEach(function (item) {
      item.classList.remove('on');
      selectBtn[i].classList.add('on');
    });
  });
});

/* -------------- top_btn -------------- */
document.addEventListener('DOMContentLoaded', function () {
  var topBtn = document.querySelector('.top_btn');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      gsap.to(topBtn, 0.3, {
        opacity: 1
      });
    } else {
      gsap.to(topBtn, 0.3, {
        opacity: 0
      });
    }
  }); //topBtn_event

  topBtn.addEventListener('click', function () {
    gsap.to(window, 0.5, {
      scrollTo: 0
    });
  });

  /* -------------- shopping_history -------------- */
  var historyBtn = document.querySelector('.history_btn');
  var historyPopup = document.querySelector('.history_popup');
  var hideBtn = document.querySelector('.history_hide');
  var historyList = document.querySelector('.shopping_history .history_list');
  var deleteBtn = document.querySelector('.list_delete');
  var deleteAll = document.querySelector('.deleteAll');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
      gsap.to(historyBtn, 0.3, {
        opacity: 1
      });
    } else {
      gsap.to(historyBtn, 0.3, {
        opacity: 0
      });
    }
  }); //historyBtn_event

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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/sub.js"], null)
//# sourceMappingURL=/sub.3e71813d.js.map