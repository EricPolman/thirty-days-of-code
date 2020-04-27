webpackHotUpdate("static/development/pages/img-change.js",{

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
/* harmony import */ var _src_image_change_on_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/image-change-on-scroll */ "./src/image-change-on-scroll.tsx");
var _this = undefined,
    _jsxFileName = "/Users/ericpolman/git/pp/hundred-days-of-code/submissions/day-001-react-hooks/pages/img-change.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var ImageChange = function ImageChange() {
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, __jsx(_src_image_change_on_scroll__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/speakers/bw/Speaker-187.jpg",
    secondaryImg: "/static/speakers/Speaker-187.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), "\xA0\xA0\xA0", __jsx(_src_image_change_on_scroll__WEBPACK_IMPORTED_MODULE_1__["default"], {
    primaryImg: "/static/speakers/bw/Speaker-1124.jpg",
    secondaryImg: "/static/speakers/Speaker-1124.jpg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChange);

/***/ }),

/***/ "./src/image-change-on-mouseover.tsx":
false,

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

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    window.addEventListener("scroll", scrollHandler);
    return function () {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  var isInView = function isInView() {
    if (imageRef.current) {
      var rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    return false;
  };

  var scrollHandler = function scrollHandler() {
    setInView(isInView);
  };

  return __jsx("img", {
    src: inView ? primaryImg : secondaryImg,
    alt: "",
    ref: imageRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ImageChangeOnScroll);

/***/ })

})
//# sourceMappingURL=img-change.js.0c40c4b23a70706618c0.hot-update.js.map