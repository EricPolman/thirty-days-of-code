(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/img-change.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fimg-change&absolutePagePath=%2FUsers%2Fericpolman%2Fgit%2Fpp%2Fhundred-days-of-code%2Fsubmissions%2Fday-001-react-hooks%2Fpages%2Fimg-change.tsx!./":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fimg-change&absolutePagePath=%2FUsers%2Fericpolman%2Fgit%2Fpp%2Fhundred-days-of-code%2Fsubmissions%2Fday-001-react-hooks%2Fpages%2Fimg-change.tsx ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/img-change", function() {
      var mod = __webpack_require__(/*! ./pages/img-change.tsx */ "./pages/img-change.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/img-change.tsx */ "./pages/img-change.tsx", function() {
          if(!next.router.components["/img-change"]) return
          var updatedPage = __webpack_require__(/*! ./pages/img-change.tsx */ "./pages/img-change.tsx")
          next.router.update("/img-change", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_2adc2403d89adc16ead0 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_2adc2403d89adc16ead0 */ "dll-reference dll_2adc2403d89adc16ead0"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/img-change.tsx":
/*!******************************!*\
  !*** ./pages/img-change.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_image_change_on_mouseover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/image-change-on-mouseover */ "./src/image-change-on-mouseover.tsx");
var _this = undefined,
    _jsxFileName = "/Users/ericpolman/git/pp/hundred-days-of-code/submissions/day-001-react-hooks/pages/img-change.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChange = function ImageChange() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_src_image_change_on_mouseover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/speakers/bw/Speaker-187.jpg",
    secondaryImg: "/static/speakers/Speaker-187.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }), "\xA0\xA0\xA0", __jsx(_src_image_change_on_mouseover__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/speakers/bw/Speaker-1124.jpg",
    secondaryImg: "/static/speakers/Speaker-1124.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChange);

/***/ }),

/***/ "./src/image-change-on-mouseover.tsx":
/*!*******************************************!*\
  !*** ./src/image-change-on-mouseover.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/ericpolman/git/pp/hundred-days-of-code/submissions/day-001-react-hooks/src/image-change-on-mouseover.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageChangeOnMouseover = function ImageChangeOnMouseover(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx("img", {
    src: primaryImg,
    alt: "",
    onMouseOver: function onMouseOver() {
      imageRef.current.src = secondaryImg;
    },
    onMouseOut: function onMouseOut() {
      imageRef.current.src = primaryImg;
    },
    ref: imageRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnMouseover);

/***/ }),

/***/ 2:
/*!***********************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fimg-change&absolutePagePath=%2FUsers%2Fericpolman%2Fgit%2Fpp%2Fhundred-days-of-code%2Fsubmissions%2Fday-001-react-hooks%2Fpages%2Fimg-change.tsx ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fimg-change&absolutePagePath=%2FUsers%2Fericpolman%2Fgit%2Fpp%2Fhundred-days-of-code%2Fsubmissions%2Fday-001-react-hooks%2Fpages%2Fimg-change.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fimg-change&absolutePagePath=%2FUsers%2Fericpolman%2Fgit%2Fpp%2Fhundred-days-of-code%2Fsubmissions%2Fday-001-react-hooks%2Fpages%2Fimg-change.tsx!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=img-change.js.map