/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/entry/index.js":
/*!****************************!*
  !*** ./src/entry/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_image_hydrate_loading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/image-hydrate-loading */ \"./src/js/image-hydrate-loading.js\");\n/* harmony import */ var _css_image_hydrate_loading_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/image-hydrate-loading.css */ \"./src/css/image-hydrate-loading.css\");\n\n\n/* eslint-disable-next-line */\n\nnew _js_image_hydrate_loading__WEBPACK_IMPORTED_MODULE_0__.default('.to-hydrate');\n\n//# sourceURL=webpack://image-hydrate-loading/./src/entry/index.js?");

/***/ }),

/***/ "./src/js/image-hydrate-loading.js":
/*!*****************************************!*
  !*** ./src/js/image-hydrate-loading.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass ImageHydrateLoading {\n  constructor(selector) {\n    this.img = null;\n    this.selector = typeof selector !== 'string' ? selector : document.querySelector(selector);\n    this.addBufferedImage();\n  }\n\n  getAttribute(attribute) {\n    return this.selector.getAttribute(attribute);\n  }\n\n  addBufferedImage() {\n    fetch(this.getAttribute('data-src')).then(response => response.arrayBuffer()).then(buffer => {\n      this.selector.src = window.URL.createObjectURL(new Blob([new Uint8Array(buffer)]));\n      this.selector.setAttribute('rendered', true);\n    });\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageHydrateLoading);\n\n//# sourceURL=webpack://image-hydrate-loading/./src/js/image-hydrate-loading.js?");

/***/ }),

/***/ "./src/css/image-hydrate-loading.css":
/*!*******************************************!*
  !*** ./src/css/image-hydrate-loading.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://image-hydrate-loading/./src/css/image-hydrate-loading.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/entry/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;