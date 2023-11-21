(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _ref;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var swiper = new Swiper(".js-looks", (_ref = {
  slidesPerView: "auto"
}, _defineProperty(_ref, "slidesPerView", 5), _defineProperty(_ref, "spaceBetween", 20), _defineProperty(_ref, "loop", true), _defineProperty(_ref, "speed", 3000), _defineProperty(_ref, "autoplay", {
  delay: 1000
}), _defineProperty(_ref, "pagination", {
  el: ".swiper-pagination",
  clickable: true
}), _defineProperty(_ref, "breakpoints", {
  500: {
    slidesPerView: 2,
    spaceBetween: 40
  },
  700: {
    slidesPerView: 2,
    spaceBetween: 40

  },
  768: {
    slidesPerView: 3,
    spaceBetween: 40
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 40
  }
}), _ref));

},{}]},{},[1])//# sourceMappingURL=webstore.js.map
