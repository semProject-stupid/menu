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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/night.png */ \"./src/assets/night.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  border: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\n:root {\r\n  --bg: #faf9f7;\r\n  --font: black;\r\n}\r\n.light {\r\n  --bg: rgb(2, 0, 0);\r\n  --font: #eee9dd;\r\n}\r\nhtml {\r\n  font-size: 32px;\r\n}\r\n\r\nbody {\r\n  /* border: 2px solid red; */\r\n  width: 100vw;\r\n  /* height: 100vh; */\r\n  /* min-height: 100vh; */\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  transition: 0.3s ease all;\r\n  background-color: var(--bg);\r\n  color: var(--font);\r\n}\r\n\r\n#menu {\r\n  border: 2px solid var(--font);\r\n  /* height: 600px; */\r\n  /* min-height: 600px; */\r\n  max-width: 500px;\r\n  padding: 20px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  margin-top: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n#title {\r\n  /* border: 2px solid green; */\r\n  height: max-content;\r\n  font-size: 1.5rem;\r\n  font-family: 'Times New Roman', Times, serif;\r\n  font-weight: 600;\r\n}\r\n\r\n#buttons {\r\n  display: flex;\r\n  gap: 50px;\r\n}\r\n\r\n.menu-button {\r\n  font-size: 0.5rem;\r\n  margin-top: 10px;\r\n  font-family: Georgia, 'Times New Roman', Times, serif;\r\n  background-color: transparent;\r\n  color: var(--font);\r\n  padding: 10px;\r\n  transition: background-color 0.3s ease, color 0.3s ease;\r\n  border-radius: 5px;\r\n  outline: none;\r\n  border: none;\r\n}\r\n.menu-button:hover {\r\n  cursor: pointer;\r\n  background-color: var(--font);\r\n  color: var(--bg);\r\n}\r\n#food {\r\n  /* border: 2px solid var(--font); */\r\n  /* height: 600px; */\r\n  /* min-height: 600px; */\r\n  width: 400px;\r\n  max-width: 500px;\r\n  margin-top: 15px;\r\n  display: flex;\r\n  justify-content: flex-start;\r\n  align-items: center;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  padding: 5px;\r\n}\r\n.food-item {\r\n  display: grid;\r\n  grid-template-columns: min(auto, 300px) min(auto, 60px);\r\n  grid-template-rows: auto auto;\r\n  width: 100%;\r\n  padding: 10px;\r\n  border-top: 2px solid var(--font);\r\n  border-bottom: 2px solid var(--font);\r\n  font-size: 0.5rem;\r\n  gap: 10px;\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n  transition: 0.3s ease background-color, 0.3s ease color, 0.3s ease transform;\r\n}\r\n.food-item:hover {\r\n  background-color: var(--font);\r\n  color: var(--bg);\r\n  transform: translateY(-5px); \r\n}\r\n.title {\r\n  font-size: 0.7rem;\r\n  font-weight: 400;\r\n}\r\n.price {\r\n  text-align: right;\r\n}\r\n#top-menu {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n#theme {\r\n  background: none;\r\n  width: 25px;\r\n  height: 25px;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-size: contain;\r\n  background-repeat: no-repeat;\r\n  margin-right: -20px;\r\n  margin-top: 45px;\r\n  margin-left: 5px;\r\n  transition: transform 0.3s ease;\r\n}\r\n#theme:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.05);\r\n}\r\n#food img {\r\n  width: 380px;\r\n}\r\n/* responsive queries */\r\n@media (max-width: 492px) {\r\n  #menu {\r\n    max-width: 300px;\r\n  }\r\n  #buttons {\r\n    gap: 20px;\r\n  }\r\n  #food {\r\n    width: 250px;\r\n  }\r\n}\r\n\r\n@media (max-width: 310px) {\r\n  #menu {\r\n    max-width: 200px;\r\n  }\r\n  #title {\r\n    font-size: 1.1rem;\r\n  }\r\n  #buttons {\r\n    flex-direction: column;\r\n    gap: 5px;\r\n  }\r\n  #food {\r\n    width: 150px;\r\n  }\r\n  #theme {\r\n    top: 20px;\r\n    left: 10px;\r\n  }\r\n  .food-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 6px;\r\n    font-size: 0.4rem;\r\n  }\r\n  .title {\r\n    font-size: 0.5rem;\r\n  }\r\n  .price {\r\n    text-align: left;\r\n  }\r\n}\r\n\r\n@media (max-width: 210px) {\r\n  #menu {\r\n    max-width: 140px;\r\n  }\r\n  #title {\r\n    font-size: 0.6rem;\r\n  }\r\n  #food {\r\n    width: 100px;\r\n  }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://menu/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://menu/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://menu/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://menu/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://menu/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://menu/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://menu/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://menu/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://menu/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://menu/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/appt.js":
/*!*********************!*\
  !*** ./src/appt.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   apptFunction: () => (/* binding */ apptFunction)\n/* harmony export */ });\nfunction apptFunction() {\r\n    const foodDiv = document.querySelector(\"#food\");\r\n    foodDiv.innerHTML = \"\";\r\n\r\n    apptInfo.forEach(item => {\r\n        const foodItem = document.createElement(\"div\");\r\n        foodItem.classList.add(\"food-item\");\r\n\r\n        const title = document.createElement(\"div\");\r\n        title.classList.add(\"title\");\r\n        title.textContent = item.title;\r\n        title.style.gridColumn = \"1\";\r\n        title.style.gridRow = \"1\";\r\n\r\n        const price = document.createElement(\"div\");\r\n        price.classList.add(\"price\");\r\n        price.textContent = item.price;\r\n        price.style.gridColumn = \"2\";\r\n        price.style.gridRow = \"1\";\r\n\r\n        const subtitle = document.createElement(\"div\");\r\n        subtitle.textContent = item.subtitle;\r\n        subtitle.style.gridColumn = \"1 / -1\"; \r\n        subtitle.style.gridRow = \"2\";\r\n\r\n        foodItem.appendChild(title);\r\n        foodItem.appendChild(price);\r\n        foodItem.appendChild(subtitle);\r\n\r\n        foodDiv.appendChild(foodItem);\r\n        foodDiv\r\n    }\r\n);\r\n\r\n}\r\n\r\nconst apptInfo = [\r\n  {\r\n    title: \"Grilled Fish\",\r\n    subtitle: \"Delicious grilled fish served with lime\",\r\n    price: \"32$\"\r\n  },\r\n  {\r\n    title: \"Bruschetta\",\r\n    subtitle: \"Toasted bread topped with fresh tomatoes and basil\",\r\n    price: \"10$\"\r\n  },\r\n  {\r\n    title: \"Stuffed Mushrooms\",\r\n    subtitle: \"Mushrooms filled with cheese and herbs\",\r\n    price: \"12$\"\r\n  },\r\n  {\r\n    title: \"Chicken Wings\",\r\n    subtitle: \"Spicy wings served with ranch dip\",\r\n    price: \"15$\"\r\n  },\r\n  {\r\n    title: \"Spring Rolls\",\r\n    subtitle: \"Crispy rolls with vegetables and sweet chili sauce\",\r\n    price: \"9$\"\r\n  },\r\n  {\r\n    title: \"Mozzarella Sticks\",\r\n    subtitle: \"Fried mozzarella cheese with marinara dip\",\r\n    price: \"11$\"\r\n  },\r\n  {\r\n    title: \"Shrimp Cocktail\",\r\n    subtitle: \"Chilled shrimp served with cocktail sauce\",\r\n    price: \"14$\"\r\n  },\r\n  {\r\n    title: \"Garlic Bread\",\r\n    subtitle: \"Toasted baguette slices with garlic butter\",\r\n    price: \"7$\"\r\n  },\r\n  {\r\n    title: \"Nachos\",\r\n    subtitle: \"Tortilla chips with melted cheese and jalapeños\",\r\n    price: \"13$\"\r\n  },\r\n  {\r\n    title: \"Caprese Skewers\",\r\n    subtitle: \"Tomato, mozzarella, and basil on skewers\",\r\n    price: \"10$\"\r\n  },\r\n  {\r\n    title: \"Deviled Eggs\",\r\n    subtitle: \"Classic deviled eggs with a hint of mustard\",\r\n    price: \"8$\"\r\n  },\r\n  {\r\n    title: \"Fried Calamari\",\r\n    subtitle: \"Lightly breaded calamari rings with aioli\",\r\n    price: \"16$\"\r\n  },\r\n  {\r\n    title: \"Spinach Artichoke Dip\",\r\n    subtitle: \"Warm creamy dip served with pita chips\",\r\n    price: \"13$\"\r\n  },\r\n  {\r\n    title: \"Mini Sliders\",\r\n    subtitle: \"Beef sliders with cheddar and caramelized onions\",\r\n    price: \"17$\"\r\n  },\r\n];\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://menu/./src/appt.js?\n}");

/***/ }),

/***/ "./src/assets/night.png":
/*!******************************!*\
  !*** ./src/assets/night.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"8011e83f50db1c37f935.png\";\n\n//# sourceURL=webpack://menu/./src/assets/night.png?\n}");

/***/ }),

/***/ "./src/assets/sunset.png":
/*!*******************************!*\
  !*** ./src/assets/sunset.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"0eb658fd504ac69d4917.png\";\n\n//# sourceURL=webpack://menu/./src/assets/sunset.png?\n}");

/***/ }),

/***/ "./src/dessert.js":
/*!************************!*\
  !*** ./src/dessert.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dessertFunction: () => (/* binding */ dessertFunction)\n/* harmony export */ });\nfunction dessertFunction() {\r\n    const foodDiv = document.querySelector(\"#food\");\r\n    foodDiv.innerHTML = \"\";\r\n\r\n    dessertInfo.forEach(item => {\r\n        const foodItem = document.createElement(\"div\");\r\n        foodItem.classList.add(\"food-item\");\r\n\r\n        const title = document.createElement(\"div\");\r\n        title.classList.add(\"title\");\r\n        title.textContent = item.title;\r\n        title.style.gridColumn = \"1\";\r\n        title.style.gridRow = \"1\";\r\n\r\n        const price = document.createElement(\"div\");\r\n        price.classList.add(\"price\");\r\n        price.textContent = item.price;\r\n        price.style.gridColumn = \"2\";\r\n        price.style.gridRow = \"1\";\r\n\r\n        const subtitle = document.createElement(\"div\");\r\n        subtitle.textContent = item.subtitle;\r\n        subtitle.style.gridColumn = \"1 / -1\"; \r\n        subtitle.style.gridRow = \"2\";\r\n\r\n        foodItem.appendChild(title);\r\n        foodItem.appendChild(price);\r\n        foodItem.appendChild(subtitle);\r\n\r\n        foodDiv.appendChild(foodItem);\r\n    });\r\n}\r\n\r\nconst dessertInfo = [\r\n  {\r\n    title: \"Chocolate Lava Cake\",\r\n    subtitle: \"Warm chocolate cake with molten center\",\r\n    price: \"9$\"\r\n  },\r\n  {\r\n    title: \"Cheesecake\",\r\n    subtitle: \"Creamy New York-style cheesecake with strawberry topping\",\r\n    price: \"8$\"\r\n  },\r\n  {\r\n    title: \"Tiramisu\",\r\n    subtitle: \"Classic Italian dessert with espresso and mascarpone\",\r\n    price: \"10$\"\r\n  },\r\n  {\r\n    title: \"Crème Brûlée\",\r\n    subtitle: \"Vanilla custard topped with caramelized sugar\",\r\n    price: \"9$\"\r\n  },\r\n  {\r\n    title: \"Fruit Tart\",\r\n    subtitle: \"Buttery crust filled with pastry cream and fresh fruit\",\r\n    price: \"7$\"\r\n  },\r\n  {\r\n    title: \"Ice Cream Sundae\",\r\n    subtitle: \"Vanilla ice cream with chocolate syrup and cherries\",\r\n    price: \"6$\"\r\n  },\r\n  {\r\n    title: \"Molten Caramel Cake\",\r\n    subtitle: \"Rich caramel-filled cake served warm\",\r\n    price: \"10$\"\r\n  },\r\n  {\r\n    title: \"Apple Pie\",\r\n    subtitle: \"Classic pie with spiced apples and flaky crust\",\r\n    price: \"7$\"\r\n  },\r\n  {\r\n    title: \"Banana Split\",\r\n    subtitle: \"Three scoops of ice cream with banana, nuts, and syrup\",\r\n    price: \"8$\"\r\n  },\r\n  {\r\n    title: \"Churros\",\r\n    subtitle: \"Fried dough sticks coated in cinnamon sugar, with chocolate dip\",\r\n    price: \"7$\"\r\n  }\r\n];\r\n\r\n\r\n\n\n//# sourceURL=webpack://menu/./src/dessert.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_sunset_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/sunset.png */ \"./src/assets/sunset.png\");\n/* harmony import */ var _assets_night_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/night.png */ \"./src/assets/night.png\");\n/* harmony import */ var _appt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appt.js */ \"./src/appt.js\");\n/* harmony import */ var _main_course_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-course.js */ \"./src/main-course.js\");\n/* harmony import */ var _dessert_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dessert.js */ \"./src/dessert.js\");\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//query selectors\r\nconst apptButton = document.querySelector(\"#appetizers\");\r\nconst courseButton = document.querySelector(\"#main-courses\");\r\nconst dessertButton = document.querySelector(\"#desserts\");\r\nconst themeButton = document.querySelector(\"#theme\");\r\n//functions \r\nlet themeState = false; //false -> light, true -> dark \r\nfunction themeFunction() {\r\n    document.body.classList.toggle(\"light\");\r\n    themeState ? themeButton.style.backgroundImage = `url(${_assets_night_png__WEBPACK_IMPORTED_MODULE_2__})` : \r\n                themeButton.style.backgroundImage = `url(${_assets_sunset_png__WEBPACK_IMPORTED_MODULE_1__})` ;\r\n    themeState = !themeState;\r\n}\r\n//event listeners\r\napptButton.addEventListener(\"click\", _appt_js__WEBPACK_IMPORTED_MODULE_3__.apptFunction);\r\ncourseButton.addEventListener(\"click\", _main_course_js__WEBPACK_IMPORTED_MODULE_4__.courseFunction);\r\ndessertButton.addEventListener(\"click\", _dessert_js__WEBPACK_IMPORTED_MODULE_5__.dessertFunction);\r\nthemeButton.addEventListener(\"click\", themeFunction);\r\n\n\n//# sourceURL=webpack://menu/./src/index.js?\n}");

/***/ }),

/***/ "./src/main-course.js":
/*!****************************!*\
  !*** ./src/main-course.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   courseFunction: () => (/* binding */ courseFunction)\n/* harmony export */ });\nfunction courseFunction() {\r\n    const foodDiv = document.querySelector(\"#food\");\r\n    foodDiv.innerHTML = \"\";\r\n\r\n    mainCourseInfo.forEach(item => {\r\n        const foodItem = document.createElement(\"div\");\r\n        foodItem.classList.add(\"food-item\");\r\n\r\n        const title = document.createElement(\"div\");\r\n        title.classList.add(\"title\");\r\n        title.textContent = item.title;\r\n        title.style.gridColumn = \"1\";\r\n        title.style.gridRow = \"1\";\r\n\r\n        const price = document.createElement(\"div\");\r\n        price.classList.add(\"price\");\r\n        price.textContent = item.price;\r\n        price.style.gridColumn = \"2\";\r\n        price.style.gridRow = \"1\";\r\n\r\n        const subtitle = document.createElement(\"div\");\r\n        subtitle.textContent = item.subtitle;\r\n        subtitle.style.gridColumn = \"1 / -1\"; \r\n        subtitle.style.gridRow = \"2\";\r\n\r\n        foodItem.appendChild(title);\r\n        foodItem.appendChild(price);\r\n        foodItem.appendChild(subtitle);\r\n\r\n        foodDiv.appendChild(foodItem);\r\n    });\r\n}\r\n\r\nconst mainCourseInfo = [\r\n  {\r\n    title: \"Grilled Ribeye Steak\",\r\n    subtitle: \"Juicy ribeye steak grilled to perfection with herb butter\",\r\n    price: \"45$\"\r\n  },\r\n  {\r\n    title: \"Roast Chicken\",\r\n    subtitle: \"Slow-roasted chicken served with rosemary potatoes\",\r\n    price: \"28$\"\r\n  },\r\n  {\r\n    title: \"Spaghetti Carbonara\",\r\n    subtitle: \"Classic Roman pasta with egg, cheese, pancetta, and pepper\",\r\n    price: \"22$\"\r\n  },\r\n  {\r\n    title: \"Vegetable Stir-Fry\",\r\n    subtitle: \"Seasonal veggies sautéed with soy-ginger glaze\",\r\n    price: \"18$\"\r\n  },\r\n  {\r\n    title: \"Lamb Chops\",\r\n    subtitle: \"Grilled lamb chops served with mint yogurt sauce\",\r\n    price: \"39$\"\r\n  },\r\n  {\r\n    title: \"Seafood Paella\",\r\n    subtitle: \"Spanish rice with shrimp, mussels, and saffron\",\r\n    price: \"36$\"\r\n  },\r\n  {\r\n    title: \"Beef Bourguignon\",\r\n    subtitle: \"French stew with braised beef, mushrooms, and red wine\",\r\n    price: \"33$\"\r\n  },\r\n  {\r\n    title: \"Chicken Alfredo\",\r\n    subtitle: \"Creamy Alfredo sauce over fettuccine and grilled chicken\",\r\n    price: \"24$\"\r\n  },\r\n  {\r\n    title: \"Stuffed Bell Peppers\",\r\n    subtitle: \"Bell peppers filled with rice, veggies, and cheese\",\r\n    price: \"20$\"\r\n  },\r\n  {\r\n    title: \"Pan-Seared Salmon\",\r\n    subtitle: \"Served with lemon dill sauce and sautéed greens\",\r\n    price: \"30$\"\r\n  }\r\n];\r\n\r\n\r\n\n\n//# sourceURL=webpack://menu/./src/main-course.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://menu/./src/style.css?\n}");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;