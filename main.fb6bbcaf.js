parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"d6sW":[function(require,module,exports) {
document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".space_wrap .space_label li"),o=document.querySelectorAll(".space_box .img_right .product"),t=document.querySelectorAll(".space_box .img_right .bedding li"),n=document.querySelectorAll(".space_box .img_right .living li"),i=document.querySelectorAll(".space_box .img_right .dining li"),c=document.querySelectorAll(".space_box .img_right .kitchen li"),l=document.querySelectorAll(".space_box .img_right .desk li"),s=document.querySelectorAll(".space_box .img_left .interior"),r=(document.querySelectorAll(".space_box .img_left .interior li"),document.querySelectorAll(".space_box .img_left .bedding li")),d=document.querySelectorAll(".space_box .img_left .living li"),a=document.querySelectorAll(".space_box .img_left .dining li"),u=document.querySelectorAll(".space_box .img_left .kitchen li"),f=document.querySelectorAll(".space_box .img_left .desk li");e.forEach(function(t,n){t.addEventListener("click",function(){o.forEach(function(e){e.classList.remove("right_on"),o[n].classList.add("right_on")}),s.forEach(function(e){e.classList.remove("ul_on"),s[n].classList.add("ul_on")}),e.forEach(function(o){o.classList.remove("on"),e[n].classList.add("on")})})}),t.forEach(function(e,o){e.addEventListener("mouseover",function(){r.forEach(function(e){e.classList.remove("li_on"),r[o].classList.add("li_on")})})}),n.forEach(function(e,o){e.addEventListener("mouseover",function(){d.forEach(function(e){e.classList.remove("li_on"),d[o].classList.add("li_on")})})}),i.forEach(function(e,o){e.addEventListener("mouseover",function(){a.forEach(function(e){e.classList.remove("li_on"),a[o].classList.add("li_on")})})}),c.forEach(function(e,o){e.addEventListener("mouseover",function(){u.forEach(function(e){e.classList.remove("li_on"),u[o].classList.add("li_on")})})}),l.forEach(function(e,o){e.addEventListener("mouseover",function(){f.forEach(function(e){e.classList.remove("li_on"),f[o].classList.add("li_on")})})});var m=document.querySelector(".top_btn");window.addEventListener("scroll",function(){window.scrollY>300?gsap.to(m,.3,{opacity:1}):gsap.to(m,.3,{opacity:0})}),m.addEventListener("click",function(){gsap.to(window,.5,{scrollTo:0})});var _=document.querySelector(".history_btn"),y=document.querySelector(".history_popup"),p=document.querySelector(".history_hide"),v=document.querySelector(".shopping_history .history_list"),L=document.querySelector(".list_delete"),g=document.querySelector(".deleteAll");window.addEventListener("scroll",function(){window.scrollY>300?gsap.to(_,.3,{opacity:1}):gsap.to(_,.3,{opacity:0})}),_.addEventListener("click",function(){y.style.display="block"}),p.addEventListener("click",function(){y.style.display="none"}),v.addEventListener("mouseover",function(){L.style.display="block"}),v.addEventListener("mouseout",function(){L.style.display="none"}),L.addEventListener("mouseover",function(){L.style.color="#191919"}),L.addEventListener("mouseout",function(){L.style.color="#ccc"}),L.addEventListener("click",function(){v.style.display="none"}),g.addEventListener("click",function(){v.style.display="none"})});
},{}]},{},["d6sW"], null)
//# sourceMappingURL=main.fb6bbcaf.js.map