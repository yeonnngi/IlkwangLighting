parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"lr0c":[function(require,module,exports) {
var e=new Swiper(".swiper_main",{autoplay:{delay:3e3},centeredSlides:!0,loop:!0,pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiperBtn_next",prevEl:".swiperBtn_prev"}}),t=new Swiper(".swiper_new",{autoplay:{delay:3e3,disableOnInteraction:!1},slidesPerView:3,spaceBetween:30,slidesOffsetBefore:10,slidesOffsetAfter:10,slidesPerGroup:3,loop:!0,navigation:{nextEl:".newBtn_next",prevEl:".newBtn_prev"},scrollbar:{el:".swiper-scrollbar",draggable:!0}}),i=new Swiper(".swiper_best",{effect:"coverflow",grabCursor:!0,centeredSlides:!0,centeredSlidesBounds:!0,centerInsufficientSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,stretch:50,depth:100,modifier:1.5,slideShadows:!0},autoplay:{delay:3e3,disableOnInteraction:!1},loop:!0,navigation:{nextEl:".bestBtn_next",prevEl:".bestBtn_prev"}}),n=new Swiper(".swiper_detail",{centeredSlides:!0,loop:!0,pagination:{el:".detail_pagination",clickable:!0},navigation:{nextEl:".swiper-button-prev",prevEl:".swiper-button-next"}}),r=new Swiper(".swiper_option",{centeredSlides:!0,loop:!0,navigation:{nextEl:".swiper-button-prev",prevEl:".swiper-button-next"}});
},{}]},{},["lr0c"], null)
//# sourceMappingURL=swiper.08bec4ff.js.map