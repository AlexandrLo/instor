"use strict";
(self["webpackChunkinstor"] = self["webpackChunkinstor"] || []).push([["src_components_DragScroll_index_js-src_components_PopularSection_index_js"],{

/***/ "./src/components/DragScroll/index.js":
/*!********************************************!*\
  !*** ./src/components/DragScroll/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _use_gesture_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @use-gesture/react */ "./node_modules/@use-gesture/react/dist/use-gesture-react.esm.js");
/* harmony import */ var react_resize_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-resize-detector */ "./node_modules/react-resize-detector/build/index.esm.js");
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/web */ "./node_modules/@react-spring/web/dist/react-spring-web.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/components/DragScroll/utils.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var springDragConfig = {
  mass: 1,
  tension: 4000,
  friction: 100
};
var springFreeConfig = {
  mass: 5,
  tension: 400,
  friction: 100
};
var springRubberBandConfig = {
  mass: 5,
  tension: 400,
  friction: 60
};

function DragScroll(_ref) {
  var _ref3;

  var children = _ref.children,
      _ref$axis = _ref.axis,
      axis = _ref$axis === void 0 ? "x" : _ref$axis;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    start: 0,
    end: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      bounds = _useState2[0],
      setBounds = _useState2[1];

  var sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var onResize = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function () {
    // reset scroll position
    api.start({
      to: _defineProperty({}, axis, 0),
      config: springRubberBandConfig
    }); // Get element sizes

    var containerSize = axis === "x" ? sliderRef.current.clientWidth : sliderRef.current.clientHeight;
    var sliderSize = axis === "x" ? sliderRef.current.scrollWidth : sliderRef.current.scrollHeight; // Set scroll bounds for new size

    setBounds({
      start: containerSize - sliderSize,
      end: 0
    });
  }, []);
  (0,react_resize_detector__WEBPACK_IMPORTED_MODULE_3__.useResizeDetector)({
    onResize: onResize,
    targetRef: sliderRef,
    refreshMode: "debounce",
    refreshRate: 100
  });
  var bind = (0,_use_gesture_react__WEBPACK_IMPORTED_MODULE_4__.useDrag)(function (_ref2) {
    var down = _ref2.down,
        _ref2$direction = _slicedToArray(_ref2.direction, 2),
        dx = _ref2$direction[0],
        dy = _ref2$direction[1],
        _ref2$offset = _slicedToArray(_ref2.offset, 2),
        ox = _ref2$offset[0],
        oy = _ref2$offset[1],
        _ref2$velocity = _slicedToArray(_ref2.velocity, 2),
        vx = _ref2$velocity[0],
        vy = _ref2$velocity[1];

    var d = axis === "x" ? dx : dy;
    var o = axis === "x" ? ox : oy;
    var v = axis === "x" ? vx : vy;
    var releaseOffset = o + v * d * 300;
    var config = springDragConfig;

    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_2__.isInRange)(releaseOffset, bounds.start, bounds.end) && !down) {
      config = springRubberBandConfig;
    }

    if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isInRange)(releaseOffset, bounds.start, bounds.end) && !down) {
      config = springFreeConfig;
    }

    api.start({
      to: _defineProperty({}, axis, down ? o : (0,_utils__WEBPACK_IMPORTED_MODULE_2__.clamp)(releaseOffset, bounds.start, bounds.end)),
      config: config
    });
  }, {
    preventDefault: true,
    filterTaps: true,
    from: function from() {
      return [axis === "x" ? coord.get() : 0, axis === "y" ? coord.get() : 0];
    }
  });

  var _useSpring = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useSpring)(function () {
    return {
      to: {
        x: 0,
        y: 0
      }
    };
  }),
      _useSpring2 = _slicedToArray(_useSpring, 2),
      _useSpring2$ = _useSpring2[0],
      x = _useSpring2$.x,
      y = _useSpring2$.y,
      api = _useSpring2[1];

  var coord = axis === "x" ? x : y;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, _extends({}, axis === "x" && {
    overflowX: "hidden"
  }, axis === "y" && {
    overflowY: "hidden"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.animated.div, _extends({
    ref: sliderRef,
    style: (_ref3 = {}, _defineProperty(_ref3, axis, coord), _defineProperty(_ref3, "touchAction", axis === "x" ? "pan-y" : "pan-x"), _ref3)
  }, bind()), children));
}

DragScroll.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node.isRequired),
  axis: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["x", "y"])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DragScroll);

/***/ }),

/***/ "./src/components/DragScroll/utils.js":
/*!********************************************!*\
  !*** ./src/components/DragScroll/utils.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ clamp),
/* harmony export */   "isInRange": () => (/* binding */ isInRange)
/* harmony export */ });
/**
 * Limits number within given range
 *
 * @param {Number} num Number to clamp
 * @param {Number} min Minimum value
 * @param {Number} max Maximum value
 * @returns {Number}
 */
var clamp = function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
};
/**
 *  Finds if the number is the specified range
 *
 * @param {Number} num Number to check
 * @param {Number} min Minimum value
 * @param {Number} max Maximum value
 * @return {Boolean} True if number is in range
 */

var isInRange = function isInRange(num, min, max) {
  return num > min && num < max;
};

/***/ }),

/***/ "./src/components/PopularSection/index.js":
/*!************************************************!*\
  !*** ./src/components/PopularSection/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/media-query/dist/chakra-ui-media-query.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var components_ProductsGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ProductsGrid */ "./src/components/ProductsGrid/index.js");
/* harmony import */ var components_SectionWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/SectionWrapper */ "./src/components/SectionWrapper/index.js");
/* harmony import */ var assets_json_products_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/json/products.json */ "./src/assets/json/products.json");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function PopularSection() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      popularProductsData = _useState2[0],
      setPopularProductsData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isLoading = _useState4[0],
      setIsLoading = _useState4[1];

  var productCount = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useBreakpointValue)({
    base: 4,
    xs: 4,
    sm: 4,
    md: 6,
    lg: 6,
    xl: 8
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setPopularProductsData(_toConsumableArray(assets_json_products_json__WEBPACK_IMPORTED_MODULE_3__).sort(function (a, b) {
      return b.popularity - a.popularity;
    }).slice(0, productCount));
    setIsLoading(false);
  }, [productCount]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_SectionWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    heading: {
      text: "Popular"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    p: {
      base: "1rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_ProductsGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
    products: popularProductsData,
    isLoading: isLoading
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopularSection);

/***/ }),

/***/ "./src/components/SectionWrapper/index.js":
/*!************************************************!*\
  !*** ./src/components/SectionWrapper/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styled-icons/fluentui-system-filled */ "./node_modules/@styled-icons/fluentui-system-filled/ArrowRight/ArrowRight.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");






function SectionWrapper(_ref) {
  var heading = _ref.heading,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, null, heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
    spacing: "0",
    align: "start",
    px: {
      base: "1rem",
      md: "1.5rem"
    },
    pt: {
      base: "1rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
    spacing: "2rem",
    justify: {
      base: "space-between",
      md: "start"
    },
    align: "baseline",
    w: "100%"
  }, heading.text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
    as: "h2",
    size: "h2"
  }, heading.text), heading.to && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link,
    to: heading.to,
    color: "orange.400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
    spacing: "0.25rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
    variant: "small"
  }, "See all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_3__.ArrowRight, null)))), heading.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
    variant: "muted"
  }, heading.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, null, children));
}

SectionWrapper.propTypes = {
  heading: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({
    text: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    description: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
    to: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
  }),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionWrapper);

/***/ })

}]);
//# sourceMappingURL=src_components_DragScroll_index_js-src_components_PopularSection_index_js.app.bundle.js.map