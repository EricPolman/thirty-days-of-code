webpackHotUpdate("static/development/pages/img-change-on-scroll.js",{

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
    src: inView ? secondaryImg : primaryImg,
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
//# sourceMappingURL=img-change-on-scroll.js.ca63f3369d66edb28ff8.hot-update.js.map