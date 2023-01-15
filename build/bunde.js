/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/fun.js":
/*!***********************!*\
  !*** ./src/js/fun.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"leave\": () => (/* binding */ leave),\n/* harmony export */   \"leave2\": () => (/* binding */ leave2),\n/* harmony export */   \"over\": () => (/* binding */ over)\n/* harmony export */ });\n/* harmony import */ var _var_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./var.js */ \"./src/js/var.js\");\n\r\n\r\nfunction over()\r\n{\r\n\r\n    // var img=document.getElementById('imgid');\r\n    _var_js__WEBPACK_IMPORTED_MODULE_0__.img.src=\"./image/1.jpg\"\r\n    _var_js__WEBPACK_IMPORTED_MODULE_0__.img.setAttribute(\"src\")\r\n}\r\n\r\n\r\nfunction leave()\r\n{\r\n    // var img=document.getElementById('imgid');\r\n    _var_js__WEBPACK_IMPORTED_MODULE_0__.img.src=\"./image/2.jpg\"\r\n}\r\n\r\n\r\nfunction leave2()\r\n{\r\n    // var img=document.getElementById('imgid');\r\n    _var_js__WEBPACK_IMPORTED_MODULE_0__.img.src=\"./image/3.jpg\"\r\n}\n\n//# sourceURL=webpack://web/./src/js/fun.js?");

/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _var_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./var.js */ \"./src/js/var.js\");\n/* harmony import */ var _fun_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fun.js */ \"./src/js/fun.js\");\n/* harmony import */ var _image_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../image/1.jpg */ \"./image/1.jpg\");\n/* harmony import */ var _image_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../image/2.jpg */ \"./image/2.jpg\");\n/* harmony import */ var _image_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../image/3.jpg */ \"./image/3.jpg\");\n\r\n\r\n\r\nconsole.log(\"sdddsdsd\");\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://web/./src/js/home.js?");

/***/ }),

/***/ "./src/js/var.js":
/*!***********************!*\
  !*** ./src/js/var.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"img\": () => (/* binding */ img)\n/* harmony export */ });\nvar img=document.getElementById('imgid');\n\n//# sourceURL=webpack://web/./src/js/var.js?");

/***/ }),

/***/ "./image/1.jpg":
/*!*********************!*\
  !*** ./image/1.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9ff7b46cbef924975b51.jpg\";\n\n//# sourceURL=webpack://web/./image/1.jpg?");

/***/ }),

/***/ "./image/2.jpg":
/*!*********************!*\
  !*** ./image/2.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"abc3a281e9fdba024fa9.jpg\";\n\n//# sourceURL=webpack://web/./image/2.jpg?");

/***/ }),

/***/ "./image/3.jpg":
/*!*********************!*\
  !*** ./image/3.jpg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"51e999a61fe1c1aa45eb.jpg\";\n\n//# sourceURL=webpack://web/./image/3.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/home.js");
/******/ 	
/******/ })()
;