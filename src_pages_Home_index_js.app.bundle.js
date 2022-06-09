"use strict";
(self["webpackChunkinstor"] = self["webpackChunkinstor"] || []).push([["src_pages_Home_index_js"],{

/***/ "./src/components/Banner/index.js":
/*!****************************************!*\
  !*** ./src/components/Banner/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var components_BannerOverlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/BannerOverlay */ "./src/components/BannerOverlay/index.js");
/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Image */ "./src/components/Image/index.js");
/* harmony import */ var assets_json_banners_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/json/banners.json */ "./src/assets/json/banners.json");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function Banner() {
  var _bannerData$to;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      bannerData = _useState2[0],
      setBannerData = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setBannerData(assets_json_banners_json__WEBPACK_IMPORTED_MODULE_3__[1]);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Container, {
    p: {
      base: "1rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Link, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
    to: (_bannerData$to = bannerData === null || bannerData === void 0 ? void 0 : bannerData.to) !== null && _bannerData$to !== void 0 ? _bannerData$to : "",
    display: "block",
    position: "relative",
    h: ["8rem", "10rem", "12rem", "14rem", "16rem"],
    w: "100%",
    borderRadius: "1rem",
    variant: "box-inset"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: bannerData === null || bannerData === void 0 ? void 0 : bannerData.image,
    alt: "Banner photo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_BannerOverlay__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: bannerData === null || bannerData === void 0 ? void 0 : bannerData.heading,
    text: bannerData === null || bannerData === void 0 ? void 0 : bannerData.text
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ }),

/***/ "./src/components/BannerCarousel/ArrowButton/index.js":
/*!************************************************************!*\
  !*** ./src/components/BannerCarousel/ArrowButton/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/icons */ "./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function Arrow(_ref) {
  var _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? "left" : _ref$direction,
      onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, _extends({
    position: "absolute"
  }, direction === "left" && {
    left: "0"
  }, direction === "right" && {
    right: "0"
  }, {
    top: "50%",
    transform: "auto",
    translateY: "-50%",
    minW: "0",
    h: "auto",
    mx: {
      base: "0.5rem",
      md: "1rem"
    },
    px: "0",
    fontSize: "2rem",
    variant: "blur",
    color: "black",
    onClick: onClick
  }), direction === "left" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronLeftIcon, null), direction === "right" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_2__.ChevronRightIcon, null));
}

Arrow.propTypes = {
  direction: prop_types__WEBPACK_IMPORTED_MODULE_3___default().oneOf(["left", "right"]),
  onClick: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Arrow);

/***/ }),

/***/ "./src/components/BannerCarousel/Indicators/index.js":
/*!***********************************************************!*\
  !*** ./src/components/BannerCarousel/Indicators/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





function Indicator(_ref) {
  var length = _ref.length,
      current = _ref.current,
      navigate = _ref.navigate;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
    justify: "center",
    pos: "absolute",
    bottom: {
      base: "0.5rem",
      md: "1rem"
    },
    spacing: {
      base: "0.5rem",
      md: "1rem"
    },
    w: "100%"
  }, Array(length).fill().map(function (_, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, _extends({
      key: "dot-".concat(index),
      boxSize: {
        base: "0.5rem",
        md: "0.75rem"
      },
      px: "0",
      minW: "0",
      variant: "blur",
      onClick: function onClick() {
        return navigate(index);
      }
    }, current === index && {
      bg: "black"
    }));
  }));
}

Indicator.propTypes = {
  length: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),
  current: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired),
  navigate: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Indicator);

/***/ }),

/***/ "./src/components/BannerCarousel/index.js":
/*!************************************************!*\
  !*** ./src/components/BannerCarousel/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/media-query/dist/chakra-ui-media-query.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/value/use-motion-value.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/animation/animate.mjs");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/render/dom/motion.mjs");
/* harmony import */ var _ArrowButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ArrowButton */ "./src/components/BannerCarousel/ArrowButton/index.js");
/* harmony import */ var components_BannerOverlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/BannerOverlay */ "./src/components/BannerOverlay/index.js");
/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Image */ "./src/components/Image/index.js");
/* harmony import */ var _Indicators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Indicators */ "./src/components/BannerCarousel/Indicators/index.js");
/* harmony import */ var assets_json_banners_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/json/banners.json */ "./src/assets/json/banners.json");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var transition = {
  type: "spring",
  bounce: 0
};

function BannerCarousel() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isDragging = _useState4[0],
      setIsDragging = _useState4[1];

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_6__.useMotionValue)(0);

  var prevSlide = function prevSlide() {
    return setCurrentPage(function (s) {
      return s === 0 ? assets_json_banners_json__WEBPACK_IMPORTED_MODULE_5__.length - 1 : s - 1;
    });
  };

  var nextSlide = function nextSlide() {
    return setCurrentPage(function (s) {
      return s === assets_json_banners_json__WEBPACK_IMPORTED_MODULE_5__.length - 1 ? 0 : s + 1;
    });
  };

  var animateX = function animateX() {
    var _ref$current;

    return (0,framer_motion__WEBPACK_IMPORTED_MODULE_7__.animate)(x, -currentPage * (((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.clientWidth) || 0), transition);
  };

  var dragEndHandler = function dragEndHandler(e, dragProps) {
    var _ref$current2;

    var width = ((_ref$current2 = ref.current) === null || _ref$current2 === void 0 ? void 0 : _ref$current2.clientWidth) || 0;
    var offset = dragProps.offset;

    if (offset.x > width / 3 && currentPage !== 0) {
      prevSlide();
    } else if (offset.x < -width / 3 && currentPage !== assets_json_banners_json__WEBPACK_IMPORTED_MODULE_5__.length - 1) {
      nextSlide();
    } else {
      animateX();
    }

    setTimeout(function () {
      setIsDragging(false);
    }, 100);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var controls = animateX();
    return controls.stop;
  }, [currentPage]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Container, {
    p: {
      base: "1rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Box, {
    h: ["9rem", "12rem", "15rem", "18rem", "21rem"],
    position: "relative",
    overflowX: "clip",
    borderRadius: "1rem",
    ref: ref
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(framer_motion__WEBPACK_IMPORTED_MODULE_9__.motion.div, {
    style: {
      x: x,
      height: "100%"
    },
    drag: "x",
    onDragStart: function onDragStart() {
      return setIsDragging(true);
    },
    dragMomentum: false,
    dragTransition: transition,
    onDragEnd: dragEndHandler
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.HStack, {
    spacing: "0",
    h: "100%"
  }, assets_json_banners_json__WEBPACK_IMPORTED_MODULE_5__.map(function (slide, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Link, {
      as: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link,
      to: slide.to,
      variant: "box-inset",
      position: "relative",
      boxSize: "100%",
      borderRadius: "1rem",
      flex: "0 0 auto",
      key: "slide-".concat(index),
      onClick: function onClick(e) {
        // Disable onClick while dragging
        if (isDragging) {
          e.stopPropagation();
          e.preventDefault();
        }
      },
      onDragStart: function onDragStart(e) {
        // Hack for firefox
        e.stopPropagation();
        e.preventDefault();
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
      src: slide.image,
      alt: "Banner photo"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_BannerOverlay__WEBPACK_IMPORTED_MODULE_2__["default"], {
      heading: slide.heading,
      text: slide.text
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_11__.Show, {
    above: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ArrowButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    direction: "left",
    onClick: prevSlide
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ArrowButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    direction: "right",
    onClick: nextSlide
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Indicators__WEBPACK_IMPORTED_MODULE_4__["default"], {
    length: assets_json_banners_json__WEBPACK_IMPORTED_MODULE_5__.length,
    current: currentPage,
    navigate: setCurrentPage
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerCarousel);

/***/ }),

/***/ "./src/components/BannerOverlay/index.js":
/*!***********************************************!*\
  !*** ./src/components/BannerOverlay/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-icons/fluentui-system-filled */ "./node_modules/@styled-icons/fluentui-system-filled/ArrowRight/ArrowRight.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");





function BannerOverlay(_ref) {
  var _ref$heading = _ref.heading,
      heading = _ref$heading === void 0 ? "" : _ref$heading,
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? "" : _ref$text,
      _ref$showCTA = _ref.showCTA,
      showCTA = _ref$showCTA === void 0 ? true : _ref$showCTA;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
    align: "start",
    position: "absolute",
    w: "50%",
    left: {
      base: "1rem",
      md: "4rem"
    },
    top: "50%",
    transform: "auto",
    translateY: "-50%",
    spacing: "0",
    color: "black"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
    as: "h1",
    size: "h1"
  }, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
    as: "h3",
    size: "h3"
  }, text), showCTA && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
    fontSize: {
      base: "14px",
      md: "16px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, null, "Learn more"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_2__.ArrowRight, {
    size: 16
  })));
}

BannerOverlay.propTypes = {
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  text: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
  showCTA: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerOverlay);

/***/ }),

/***/ "./src/components/CategoriesSection/CategoryCard/index.js":
/*!****************************************************************!*\
  !*** ./src/components/CategoriesSection/CategoryCard/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_ImageCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ImageCard */ "./src/components/ImageCard/index.js");




function CategoryCard(_ref) {
  var name = _ref.name,
      image = _ref.image,
      to = _ref.to;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_ImageCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    image: image,
    to: to,
    ratio: 2 / 1,
    minW: "150px",
    alt: "".concat(name, " category photo"),
    textProps: {
      top: "50%",
      transform: "auto",
      translateY: "-50%",
      color: "white"
    }
  });
}

CategoryCard.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  image: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryCard);

/***/ }),

/***/ "./src/components/CategoriesSection/index.js":
/*!***************************************************!*\
  !*** ./src/components/CategoriesSection/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _CategoryCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategoryCard */ "./src/components/CategoriesSection/CategoryCard/index.js");
/* harmony import */ var components_DragScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/DragScroll */ "./src/components/DragScroll/index.js");
/* harmony import */ var components_SectionWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SectionWrapper */ "./src/components/SectionWrapper/index.js");
/* harmony import */ var assets_json_categories_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/json/categories.json */ "./src/assets/json/categories.json");







function CategoriesSection() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_SectionWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    heading: {
      text: "Categories"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_DragScroll__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    w: "100%",
    pl: {
      base: "1rem",
      md: "1.5rem"
    },
    pb: {
      base: "1rem",
      md: "1.5rem"
    }
  }, assets_json_categories_json__WEBPACK_IMPORTED_MODULE_4__.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CategoryCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      image: category.image,
      name: category.name,
      to: "/category/".concat(category.id),
      key: category.id
    });
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoriesSection);

/***/ }),

/***/ "./src/components/Footer/ColorModeSwitch/index.js":
/*!********************************************************!*\
  !*** ./src/components/Footer/ColorModeSwitch/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/color-mode/dist/chakra-ui-color-mode.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/switch/dist/chakra-ui-switch.esm.js");
/* harmony import */ var _styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-icons/fluentui-system-filled */ "./node_modules/@styled-icons/fluentui-system-filled/WeatherMoon/WeatherMoon.esm.js");
/* harmony import */ var _styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-icons/fluentui-system-filled */ "./node_modules/@styled-icons/fluentui-system-filled/WeatherSunny/WeatherSunny.esm.js");




function ColorModeSwitch() {
  var _useColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)(),
      colorMode = _useColorMode.colorMode,
      toggleColorMode = _useColorMode.toggleColorMode;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
    color: "gray.400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_3__.WeatherMoon, {
    size: 24
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Switch, {
    onChange: toggleColorMode,
    isChecked: colorMode === "light"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_5__.WeatherSunny, {
    size: 24
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorModeSwitch);

/***/ }),

/***/ "./src/components/Footer/SocialButtons/index.js":
/*!******************************************************!*\
  !*** ./src/components/Footer/SocialButtons/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");




function SocialButtons() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link,
    href: "https://instagram.com/",
    variant: "ghost",
    colorScheme: "instagram",
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaInstagram, {
    size: 24
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link,
    href: "https://youtube.com/",
    variant: "ghost",
    colorScheme: "youtube",
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaYoutube, {
    size: 24
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link,
    href: "https://pinterest.com/",
    variant: "ghost",
    colorScheme: "pinterest",
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaPinterest, {
    size: 24
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialButtons);

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/media-query/dist/chakra-ui-media-query.esm.js");
/* harmony import */ var _ColorModeSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorModeSwitch */ "./src/components/Footer/ColorModeSwitch/index.js");
/* harmony import */ var _SocialButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialButtons */ "./src/components/Footer/SocialButtons/index.js");





function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
    pt: "3rem",
    pb: {
      base: "7rem",
      sm: "3rem"
    },
    px: {
      base: "1rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
    spacing: "2rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Hide, {
    above: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    spacing: "1.5rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SocialButtons__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    w: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Show, {
    above: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    w: "100%",
    spacing: "1.5rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SocialButtons__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
    variant: "muted",
    textAlign: "center",
    whiteSpace: "nowrap"
  }, "\xA9 Instor 2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    w: "100%",
    justify: "flex-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ColorModeSwitch__WEBPACK_IMPORTED_MODULE_1__["default"], null)))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/Hero/index.js":
/*!**************************************!*\
  !*** ./src/components/Hero/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");



function Hero() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    pt: {
      base: "2rem",
      md: "3rem"
    },
    pb: {
      base: "1rem",
      md: "1.5rem"
    },
    px: {
      base: "1rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
    justify: {
      base: "start",
      md: "center"
    },
    textAlign: {
      base: "start",
      md: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
    as: "h1",
    size: "h1",
    maxW: "450px"
  }, "Explore What Your Home Needs")));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

/***/ }),

/***/ "./src/components/ImageCard/index.js":
/*!*******************************************!*\
  !*** ./src/components/ImageCard/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Image */ "./src/components/Image/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







function ImageCard(_ref) {
  var name = _ref.name,
      image = _ref.image,
      to = _ref.to,
      ratio = _ref.ratio,
      minW = _ref.minW,
      alt = _ref.alt,
      textProps = _ref.textProps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link,
    to: to,
    position: "relative",
    pr: {
      base: "1rem",
      md: "1.5rem"
    },
    w: "100%",
    borderRadius: "1rem",
    variant: "box",
    onDragStart: function onDragStart(e) {
      // Prevent user client link dragging
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.AspectRatio, {
    w: "100%",
    ratio: ratio,
    minW: minW
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Image__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: image,
    alt: alt
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, _extends({
    as: "h3",
    size: "h3",
    position: "absolute",
    left: {
      base: "1rem",
      md: "1.5rem"
    },
    top: {
      base: "1rem",
      md: "1.5rem"
    },
    style: {
      wordSpacing: "100vw"
    },
    textTransform: "capitalize"
  }, textProps), name));
}

ImageCard.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  image: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string.isRequired),
  ratio: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().number.isRequired),
  alt: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  minW: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  textProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object),
  imageProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageCard);

/***/ }),

/***/ "./src/components/RoomsSection/RoomCard/index.js":
/*!*******************************************************!*\
  !*** ./src/components/RoomsSection/RoomCard/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_ImageCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ImageCard */ "./src/components/ImageCard/index.js");




function RoomCard(_ref) {
  var name = _ref.name,
      image = _ref.image,
      to = _ref.to;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_ImageCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: name,
    image: image,
    to: to,
    ratio: 2 / 3,
    minW: "180px",
    alt: "".concat(name, " category photo"),
    textProps: {
      color: "black"
    }
  });
}

RoomCard.propTypes = {
  name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  image: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  to: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomCard);

/***/ }),

/***/ "./src/components/RoomsSection/index.js":
/*!**********************************************!*\
  !*** ./src/components/RoomsSection/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var components_DragScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/DragScroll */ "./src/components/DragScroll/index.js");
/* harmony import */ var _RoomCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RoomCard */ "./src/components/RoomsSection/RoomCard/index.js");
/* harmony import */ var components_SectionWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/SectionWrapper */ "./src/components/SectionWrapper/index.js");
/* harmony import */ var assets_json_rooms_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/json/rooms.json */ "./src/assets/json/rooms.json");







function RoomsSection() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_SectionWrapper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    heading: {
      text: "Rooms",
      description: "Furniture for every corners in your home"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_DragScroll__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {
    w: "100%",
    px: {
      base: "1rem",
      md: "1.5rem"
    },
    pb: {
      base: "1rem",
      md: "1.5rem"
    }
  }, assets_json_rooms_json__WEBPACK_IMPORTED_MODULE_4__.map(function (room) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_RoomCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      image: room.image,
      name: room.name,
      to: "/room/".concat(room.id),
      key: room.id
    });
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RoomsSection);

/***/ }),

/***/ "./src/pages/Home/index.js":
/*!*********************************!*\
  !*** ./src/pages/Home/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Banner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Banner */ "./src/components/Banner/index.js");
/* harmony import */ var components_BannerCarousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/BannerCarousel */ "./src/components/BannerCarousel/index.js");
/* harmony import */ var components_CategoriesSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/CategoriesSection */ "./src/components/CategoriesSection/index.js");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var components_Hero__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Hero */ "./src/components/Hero/index.js");
/* harmony import */ var components_PopularSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/PopularSection */ "./src/components/PopularSection/index.js");
/* harmony import */ var components_RoomsSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/RoomsSection */ "./src/components/RoomsSection/index.js");
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Title */ "./src/components/Title/index.js");










function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Title__WEBPACK_IMPORTED_MODULE_8__["default"], {
    postfix: "Home"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Hero__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_BannerCarousel__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_CategoriesSection__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_PopularSection__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Banner__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_RoomsSection__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./src/assets/json/banners.json":
/*!**************************************!*\
  !*** ./src/assets/json/banners.json ***!
  \**************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"image":"assets/images/banner/banner-1.jpg","heading":"30% off","text":"High quality sofa","to":"/category/2"},{"image":"assets/images/banner/banner-2.jpg","heading":"Sale","text":"All chairs up to 50% off","to":"/category/1"},{"image":"assets/images/banner/banner-1.jpg","heading":"Sale","text":"All sofas up to 30% off","to":"/category/2"}]');

/***/ }),

/***/ "./src/assets/json/categories.json":
/*!*****************************************!*\
  !*** ./src/assets/json/categories.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"name":"chairs","singular":"chair","image":"assets/images/categories/category-chairs.jpg"},{"id":2,"name":"sofas","singular":"sofa","image":"assets/images/categories/category-sofas.jpg"},{"id":3,"name":"desks","singular":"desk","image":"assets/images/categories/category-desks.jpg"}]');

/***/ }),

/***/ "./src/assets/json/rooms.json":
/*!************************************!*\
  !*** ./src/assets/json/rooms.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":1,"name":"living room","description":"Stop dreaming about the perfect living room – create one with our furniture","image":"assets/images/rooms/room-livingroom.jpg"},{"id":2,"name":"bed room","description":"Use our furniture to create a perfect bedroom that will suit your sleeping habits","image":"assets/images/rooms/room-bedroom.jpg"},{"id":3,"name":"dining room","description":"Create an appetizing dining room for your next family dinner from scratch","image":"assets/images/rooms/room-diningroom.jpg"},{"id":4,"name":"office","description":"Best solutions for your home office","image":"assets/images/rooms/room-office.jpg"}]');

/***/ })

}]);
//# sourceMappingURL=src_pages_Home_index_js.app.bundle.js.map