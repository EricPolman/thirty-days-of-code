(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/img-change-on-scroll.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fimg-change-on-scroll&absolutePagePath=%2FUsers%2Fericpolman%2Fgit%2Fpp%2Fhundred-days-of-code%2Fsubmissions%2Fday-001-react-hooks%2Fpages%2Fimg-change-on-scroll.tsx!./":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fimg-change-on-scroll&absolutePagePath=%2FUsers%2Fericpolman%2Fgit%2Fpp%2Fhundred-days-of-code%2Fsubmissions%2Fday-001-react-hooks%2Fpages%2Fimg-change-on-scroll.tsx ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/img-change-on-scroll", function() {
      var mod = __webpack_require__(/*! ./pages/img-change-on-scroll.tsx */ "./pages/img-change-on-scroll.tsx")
      if(true) {
        module.hot.accept(/*! ./pages/img-change-on-scroll.tsx */ "./pages/img-change-on-scroll.tsx", function() {
          if(!next.router.components["/img-change-on-scroll"]) return
          var updatedPage = __webpack_require__(/*! ./pages/img-change-on-scroll.tsx */ "./pages/img-change-on-scroll.tsx")
          next.router.update("/img-change-on-scroll", updatedPage)
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

/***/ "./pages/img-change-on-scroll.tsx":
/*!****************************************!*\
  !*** ./pages/img-change-on-scroll.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_image_change_on_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/image-change-on-scroll */ "./src/image-change-on-scroll.tsx");
var _this = undefined,
    _jsxFileName = "/Users/ericpolman/git/pp/hundred-days-of-code/submissions/day-001-react-hooks/pages/img-change-on-scroll.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChange = function ImageChange() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, [1124, 187, 823, 1269, 1530].map(function (id) {
    return __jsx("div", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }
    }, __jsx(_src_image_change_on_scroll__WEBPACK_IMPORTED_MODULE_1__["default"], {
      primaryImg: "/static/speakers/bw/Speaker-".concat(id, ".jpg"),
      secondaryImg: "/static/speakers/Speaker-".concat(id, ".jpg"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }
    }));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChange);

/***/ }),

/***/ "./src/image-change-on-scroll.tsx":
/*!****************************************!*\
  !*** ./src/image-change-on-scroll.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/ericpolman/git/pp/hundred-days-of-code/submissions/day-001-react-hooks/src/image-change-on-scroll.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ImageChangeOnScroll = function ImageChangeOnScroll(_ref) {
  var primaryImg = _ref.primaryImg,
      secondaryImg = _ref.secondaryImg;
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inView = _useState[0],
      setInView = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      isLoading = _useState2[0],
      setisLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setInView(isInView());
    setisLoading(false);
    window.addEventListener("scroll", scrollHandler);
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [isLoading]);

  var isInView = function isInView() {
    if (imageRef.current) {
      var rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  var scrollHandler = function scrollHandler() {
    return setInView(isInView);
  };

  return isLoading ? null : __jsx("img", {
    src: inView ? secondaryImg : primaryImg,
    alt: "",
    ref: imageRef,
    width: 200,
    height: 200,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 5
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

/***/ }),

/***/ 1:
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fimg-change-on-scroll&absolutePagePath=%2FUsers%2Fericpolman%2Fgit%2Fpp%2Fhundred-days-of-code%2Fsubmissions%2Fday-001-react-hooks%2Fpages%2Fimg-change-on-scroll.tsx ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fimg-change-on-scroll&absolutePagePath=%2FUsers%2Fericpolman%2Fgit%2Fpp%2Fhundred-days-of-code%2Fsubmissions%2Fday-001-react-hooks%2Fpages%2Fimg-change-on-scroll.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fimg-change-on-scroll&absolutePagePath=%2FUsers%2Fericpolman%2Fgit%2Fpp%2Fhundred-days-of-code%2Fsubmissions%2Fday-001-react-hooks%2Fpages%2Fimg-change-on-scroll.tsx!./");


/***/ }),

/***/ "dll-reference dll_2adc2403d89adc16ead0":
/*!*******************************************!*\
  !*** external "dll_2adc2403d89adc16ead0" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_2adc2403d89adc16ead0;

/***/ })

},[[1,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=img-change-on-scroll.js.map