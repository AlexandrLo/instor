"use strict";
(self["webpackChunkinstor"] = self["webpackChunkinstor"] || []).push([["src_components_ProductsGrid_index_js-src_components_Title_index_js-src_assets_json_products_json"],{

/***/ "./src/components/AddToCartButton/index.js":
/*!*************************************************!*\
  !*** ./src/components/AddToCartButton/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-icons/fluentui-system-filled */ "./node_modules/@styled-icons/fluentui-system-filled/Add/Add.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/tooltip/dist/chakra-ui-tooltip.esm.js");
/* harmony import */ var store_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/slices/cartSlice */ "./src/store/slices/cartSlice.js");







function AddToCartButton(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      id = _ref.id,
      name = _ref.name;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useToast)();

  var onAdd = function onAdd(e) {
    e.stopPropagation();
    e.preventDefault();

    if (id) {
      dispatch((0,store_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__.cartAddItem)(id));
      toast({
        position: "top",
        title: "Added to cart",
        description: "".concat(name[0].toUpperCase() + name.slice(1), " was added to your cart"),
        status: "success",
        duration: 5000,
        isClosable: true
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, size === "md" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
    leftIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_5__.Add, {
      size: 24
    }),
    colorScheme: "orange",
    onClick: onAdd
  }, "Add to cart"), size === "sm" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tooltip, {
    label: "Add to cart",
    fontSize: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
    colorScheme: "orange",
    onClick: onAdd
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_5__.Add, {
    size: 24
  }))));
}

AddToCartButton.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_7___default().oneOf(["md", "sm"]),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddToCartButton);

/***/ }),

/***/ "./src/components/Image/index.js":
/*!***************************************!*\
  !*** ./src/components/Image/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/color-mode/dist/chakra-ui-color-mode.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/skeleton/dist/chakra-ui-skeleton.esm.js");
/* harmony import */ var _react_spring_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-spring/web */ "./node_modules/@react-spring/web/dist/react-spring-web.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var transitions = (0,_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.useTransition)(isLoading, {
    from: {
      opacity: 1
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    config: _react_spring_web__WEBPACK_IMPORTED_MODULE_1__.config.molasses
  });
  var start = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.100", "gray.600");
  var end = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.200", "gray.500");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
    position: "relative",
    boxSize: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Image, {
    src: src,
    alt: alt,
    zIndex: 0,
    position: "relative",
    fit: "cover",
    boxSize: "100%",
    borderRadius: "1rem",
    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
      bg: start,
      borderRadius: "1rem"
    }),
    onLoad: function onLoad() {
      return setIsLoading(false);
    }
  }), transitions(function (styles, item) {
    return item && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_react_spring_web__WEBPACK_IMPORTED_MODULE_1__.animated.div, {
      style: styles
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Skeleton, {
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: 0,
      boxSize: "100%",
      borderRadius: "1rem",
      opacity: 1,
      startColor: start,
      endColor: end
    }));
  }));
}

Image.propTypes = {
  src: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  alt: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ }),

/***/ "./src/components/Placeholder/Suggestions/index.js":
/*!*********************************************************!*\
  !*** ./src/components/Placeholder/Suggestions/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");



var suggestions = [{
  name: "Sofa",
  to: "/search?query=Sofa"
}, {
  name: "Chair",
  to: "/search?query=Chair"
}, {
  name: "Table",
  to: "/search?query=Table"
}];

function Suggestions() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, null, suggestions.map(function (suggestion) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
      key: suggestion.name,
      as: react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link,
      to: suggestion.to,
      size: "sm",
      px: "1rem",
      borderRadius: "full"
    }, suggestion.name);
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Suggestions);

/***/ }),

/***/ "./src/components/Placeholder/index.js":
/*!*********************************************!*\
  !*** ./src/components/Placeholder/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/media-query/dist/chakra-ui-media-query.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _Suggestions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Suggestions */ "./src/components/Placeholder/Suggestions/index.js");






function Placeholder(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      icon = _ref.icon,
      heading = _ref.heading,
      description = _ref.description,
      _ref$showButton = _ref.showButton,
      showButton = _ref$showButton === void 0 ? true : _ref$showButton,
      _ref$showSuggestions = _ref.showSuggestions,
      showSuggestions = _ref$showSuggestions === void 0 ? false : _ref$showSuggestions,
      maxW = _ref.maxW,
      children = _ref.children;
  var iconSizeMd = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)(["3rem", "3rem", "4rem"]);
  var iconSizeLg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useBreakpointValue)(["4rem", "4rem", "5rem"]);
  var headingSize = "h2";
  var iconSize = "4rem";

  switch (size) {
    default:
    case "md":
      headingSize = "h2";
      iconSize = iconSizeMd;
      break;

    case "lg":
      headingSize = "h1";
      iconSize = iconSizeLg;
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
    spacing: "1rem",
    maxW: maxW
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().cloneElement(icon, {
    size: iconSize
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
    spacing: "0"
  }, heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
    as: headingSize,
    size: headingSize,
    textAlign: "center"
  }, heading), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
    color: "gray.400",
    textAlign: "center"
  }, description)), showButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Link,
    to: "/"
  }, "Back to Homepage"), showSuggestions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Suggestions__WEBPACK_IMPORTED_MODULE_1__["default"], null), children);
}

Placeholder.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOf(["md", "lg"]),
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node),
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  showButton: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  showSuggestions: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),
  maxW: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().any),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Placeholder);

/***/ }),

/***/ "./src/components/Price/index.js":
/*!***************************************!*\
  !*** ./src/components/Price/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");




function Price(_ref) {
  var price = _ref.price,
      discount = _ref.discount,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size;

  if (size === "lg") {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
      spacing: "0.5rem"
    }, discount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
      size: "h2",
      fontWeight: "400",
      textDecoration: "line-through",
      color: "gray.400"
    }, "$", price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
      size: "h2",
      color: "red.400"
    }, "$", discount)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
      size: "h2"
    }, "$", price));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
    spacing: "0.25rem"
  }, discount ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
    fontWeight: "400",
    textDecoration: "line-through",
    color: "gray.400"
  }, "$", price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
    fontWeight: "600",
    color: "red.400"
  }, "$", discount)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
    fontWeight: "600"
  }, "$", price));
}

Price.propTypes = {
  price: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  discount: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["md", "lg"])
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Price);

/***/ }),

/***/ "./src/components/ProductsGrid/ProductsSimpleGrid/ProductCard/index.js":
/*!*****************************************************************************!*\
  !*** ./src/components/ProductsGrid/ProductsSimpleGrid/ProductCard/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/color-mode/dist/chakra-ui-color-mode.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/media-query/dist/chakra-ui-media-query.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var components_AddToCartButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/AddToCartButton */ "./src/components/AddToCartButton/index.js");
/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Image */ "./src/components/Image/index.js");
/* harmony import */ var components_Price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Price */ "./src/components/Price/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function ProductCard(_ref) {
  var _searchParams$get;

  var product = _ref.product;
  var cardBg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useColorModeValue)("gray.50", "gray.700");
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();

  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useSearchParams)(),
      _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
      searchParams = _useSearchParams2[0];

  var from = (_searchParams$get = searchParams.get("from")) !== null && _searchParams$get !== void 0 ? _searchParams$get : location.pathname;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_6__.Link,
    to: "/product/".concat(product.id, "?from=").concat(from),
    w: "100%",
    borderRadius: "1rem",
    bg: cardBg,
    variant: "box",
    onDragStart: function onDragStart(e) {
      // Prevent user client link dragging
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
    position: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.AspectRatio, {
    maxW: "100%",
    maxH: "17rem",
    ratio: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: product.images[0],
    alt: "Photo of ".concat(product.name)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Hide, {
    above: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
    bg: cardBg,
    position: "absolute",
    bottom: "0",
    right: "0",
    margin: "0.5rem",
    borderRadius: "0.5rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_AddToCartButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "sm",
    id: product.id,
    name: product.name
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.HStack, {
    align: ["flex-end", "center"],
    justify: "space-between",
    spacing: "0.5rem",
    p: ["1rem", "1rem", "1.5rem"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {
    align: "stretch",
    spacing: "0",
    flexGrow: "1",
    w: "0%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
    color: "gray.400",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "uppercase"
  }, product.category.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {
    textTransform: "capitalize",
    textOverflow: "ellipsis",
    overflow: "hidden",
    style: {
      wordWrap: "normal"
    }
  }, product.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Show, {
    above: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Price__WEBPACK_IMPORTED_MODULE_3__["default"], {
    price: product.price,
    discount: product.discount
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {
    flexGrow: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Show, {
    above: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_AddToCartButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: "sm",
    id: product.id,
    name: product.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Hide, {
    above: "xs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Price__WEBPACK_IMPORTED_MODULE_3__["default"], {
    price: product.price,
    discount: product.discount
  })))));
}

ProductCard.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number.isRequired),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string.isRequired),
    category: prop_types__WEBPACK_IMPORTED_MODULE_9___default().shape({
      id: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number.isRequired),
      name: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string.isRequired)
    }),
    info: prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_9___default().string))),
    price: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number.isRequired),
    discount: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number),
    images: prop_types__WEBPACK_IMPORTED_MODULE_9___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)).isRequired
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);

/***/ }),

/***/ "./src/components/ProductsGrid/ProductsSimpleGrid/index.js":
/*!*****************************************************************!*\
  !*** ./src/components/ProductsGrid/ProductsSimpleGrid/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _ProductCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCard */ "./src/components/ProductsGrid/ProductsSimpleGrid/ProductCard/index.js");





function ProductsSimpleGrid(_ref) {
  var products = _ref.products;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.SimpleGrid, {
    columns: {
      base: 1,
      xs: 2,
      sm: 2,
      md: 3,
      lg: 3,
      xl: 4
    },
    spacing: "1rem",
    w: "100%"
  }, products.map(function (product) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: product.id,
      product: product
    });
  }));
}

ProductsSimpleGrid.propTypes = {
  products: prop_types__WEBPACK_IMPORTED_MODULE_3___default().arrayOf(_ProductCard__WEBPACK_IMPORTED_MODULE_1__["default"].propTypes.product).isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsSimpleGrid);

/***/ }),

/***/ "./src/components/ProductsGrid/index.js":
/*!**********************************************!*\
  !*** ./src/components/ProductsGrid/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-icons/fluentui-system-filled */ "./node_modules/@styled-icons/fluentui-system-filled/Border/Border.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/spinner/dist/chakra-ui-spinner.esm.js");
/* harmony import */ var components_Placeholder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Placeholder */ "./src/components/Placeholder/index.js");
/* harmony import */ var _ProductsSimpleGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductsSimpleGrid */ "./src/components/ProductsGrid/ProductsSimpleGrid/index.js");







function ProductsGrid(_ref) {
  var _ref$products = _ref.products,
      products = _ref$products === void 0 ? [] : _ref$products,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
    p: "3rem",
    w: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Spinner, {
    size: "xl"
  })), !isLoading && products.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ProductsSimpleGrid__WEBPACK_IMPORTED_MODULE_2__["default"], {
    products: products
  }), !isLoading && products.length <= 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Placeholder__WEBPACK_IMPORTED_MODULE_1__["default"], {
    maxW: "19rem",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_5__.Border, null),
    heading: "No Products Found",
    description: "Please check spelling or try one of these searches:",
    showButton: false,
    showSuggestions: true
  }));
}

ProductsGrid.propTypes = {
  products: _ProductsSimpleGrid__WEBPACK_IMPORTED_MODULE_2__["default"].propTypes.products,
  isLoading: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductsGrid);

/***/ }),

/***/ "./src/components/Title/index.js":
/*!***************************************!*\
  !*** ./src/components/Title/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function Title(_ref) {
  var postfix = _ref.postfix;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, postfix ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Instor | ".concat(postfix === null || postfix === void 0 ? void 0 : postfix.replace(/^\w/, function (c) {
    return c.toUpperCase();
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title", null, "Instor"));
}

Title.propTypes = {
  postfix: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./src/assets/json/products.json":
/*!***************************************!*\
  !*** ./src/assets/json/products.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":220101,"name":"langfjall","popularity":1,"category":{"id":1,"name":"chair"},"rooms":[{"id":4,"name":"office"}],"info":[["Description","The seat\'s bowl-shaped bottom is adapted for your sit bones and those of most of the world\'s population. And with an innovative technique, the seat\'s padding is shaped to maximise your comfort. The upholstery of the chair consists of straight polyester fibres with small gaps between them – providing comfy elasticity and better ventilation so you enjoy a pleasant temperature when sitting. The backrest has a built-in lumbar support and the angle between the seat and the backrest is optimally adapted to make it comfortable for you to sit a little longer at the dining table. The hardwearing cover of cotton and polyester is yarn dyed to create an attractive two-tone effect. The chair cover comes in one piece and fixes in place with hook-and-loop fasteners so you can easily pull it off and put it back on again. After lively meals, it\'s nice to know that you can easily pull the chair cover off and machine wash it. The chair legs are made of solid wood, which is a durable natural material. Thanks to new research and a new technique, this upholstered chair gives you optimal seating comfort. Change the style anytime by replacing the chair cover with one in a different colour or model."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Back fabric: 100 % polyester (100% recycled). Fabric: 35% cotton, 65% polyester (min. 90% recycled). Leg: Solid birch, Acrylic paint. Seat frame: Steel, Epoxy/polyester powder coating. Backrest frame: Steel. Support panel: Polyethylene plastic. Backrest cushion/ Seat cushion: 100% polyester. Lining: Polyester wadding."]],"price":199,"images":["assets/images/products/product-220101.jpg"]},{"id":220102,"name":"fjallberget","popularity":1,"category":{"id":1,"name":"chair"},"rooms":[{"id":4,"name":"office"}],"info":[["Description","The seat\'s bowl-shaped bottom is adapted for your sit bones and those of most of the world\'s population. And with an innovative technique, the seat\'s padding is shaped to maximise your comfort. The upholstery of the chair consists of straight polyester fibres with small gaps between them – providing comfy elasticity and better ventilation so you enjoy a pleasant temperature when sitting. The backrest has a built-in lumbar support and the angle between the seat and the backrest is optimally adapted to make it comfortable for you to sit a little longer at the dining table. The hardwearing cover of cotton and polyester is yarn dyed to create an attractive two-tone effect. The chair cover comes in one piece and fixes in place with hook-and-loop fasteners so you can easily pull it off and put it back on again. After lively meals, it\'s nice to know that you can easily pull the chair cover off and machine wash it. The chair legs are made of solid wood, which is a durable natural material. Thanks to new research and a new technique, this upholstered chair gives you optimal seating comfort. Change the style anytime by replacing the chair cover with one in a different colour or model."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Back fabric: 100 % polyester (100% recycled). Fabric: 35% cotton, 65% polyester (min. 90% recycled). Leg: Solid birch, Acrylic paint. Seat frame: Steel, Epoxy/polyester powder coating. Backrest frame: Steel. Support panel: Polyethylene plastic. Backrest cushion/ Seat cushion: 100% polyester. Lining: Polyester wadding."]],"price":269,"images":["assets/images/products/product-220102.jpg"]},{"id":220103,"name":"bergmund","popularity":1,"category":{"id":1,"name":"chair"},"rooms":[{"id":3,"name":"dining room"}],"info":[["Description","The seat\'s bowl-shaped bottom is adapted for your sit bones and those of most of the world\'s population. And with an innovative technique, the seat\'s padding is shaped to maximise your comfort. The upholstery of the chair consists of straight polyester fibres with small gaps between them – providing comfy elasticity and better ventilation so you enjoy a pleasant temperature when sitting. The backrest has a built-in lumbar support and the angle between the seat and the backrest is optimally adapted to make it comfortable for you to sit a little longer at the dining table. The hardwearing cover of cotton and polyester is yarn dyed to create an attractive two-tone effect. The chair cover comes in one piece and fixes in place with hook-and-loop fasteners so you can easily pull it off and put it back on again. After lively meals, it\'s nice to know that you can easily pull the chair cover off and machine wash it. The chair legs are made of solid wood, which is a durable natural material. Thanks to new research and a new technique, this upholstered chair gives you optimal seating comfort. Change the style anytime by replacing the chair cover with one in a different colour or model."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Back fabric: 100 % polyester (100% recycled). Fabric: 35% cotton, 65% polyester (min. 90% recycled). Leg: Solid birch, Acrylic paint. Seat frame: Steel, Epoxy/polyester powder coating. Backrest frame: Steel. Support panel: Polyethylene plastic. Backrest cushion/ Seat cushion: 100% polyester. Lining: Polyester wadding."]],"price":79,"images":["assets/images/products/product-220103.jpg"]},{"id":220104,"name":"odger","popularity":1,"category":{"id":1,"name":"chair"},"rooms":[{"id":3,"name":"dining room"},{"id":4,"name":"office"}],"info":[["Description","The seat\'s bowl-shaped bottom is adapted for your sit bones and those of most of the world\'s population. And with an innovative technique, the seat\'s padding is shaped to maximise your comfort. The upholstery of the chair consists of straight polyester fibres with small gaps between them – providing comfy elasticity and better ventilation so you enjoy a pleasant temperature when sitting. The backrest has a built-in lumbar support and the angle between the seat and the backrest is optimally adapted to make it comfortable for you to sit a little longer at the dining table. The hardwearing cover of cotton and polyester is yarn dyed to create an attractive two-tone effect. The chair cover comes in one piece and fixes in place with hook-and-loop fasteners so you can easily pull it off and put it back on again. After lively meals, it\'s nice to know that you can easily pull the chair cover off and machine wash it. The chair legs are made of solid wood, which is a durable natural material. Thanks to new research and a new technique, this upholstered chair gives you optimal seating comfort. Change the style anytime by replacing the chair cover with one in a different colour or model."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Back fabric: 100 % polyester (100% recycled). Fabric: 35% cotton, 65% polyester (min. 90% recycled). Leg: Solid birch, Acrylic paint. Seat frame: Steel, Epoxy/polyester powder coating. Backrest frame: Steel. Support panel: Polyethylene plastic. Backrest cushion/ Seat cushion: 100% polyester. Lining: Polyester wadding."]],"price":69,"images":["assets/images/products/product-220104.jpg"]},{"id":220105,"name":"lisabo","popularity":1,"category":{"id":1,"name":"chair"},"rooms":[{"id":3,"name":"dining room"}],"info":[["Description","The seat\'s bowl-shaped bottom is adapted for your sit bones and those of most of the world\'s population. And with an innovative technique, the seat\'s padding is shaped to maximise your comfort. The upholstery of the chair consists of straight polyester fibres with small gaps between them – providing comfy elasticity and better ventilation so you enjoy a pleasant temperature when sitting. The backrest has a built-in lumbar support and the angle between the seat and the backrest is optimally adapted to make it comfortable for you to sit a little longer at the dining table. The hardwearing cover of cotton and polyester is yarn dyed to create an attractive two-tone effect. The chair cover comes in one piece and fixes in place with hook-and-loop fasteners so you can easily pull it off and put it back on again. After lively meals, it\'s nice to know that you can easily pull the chair cover off and machine wash it. The chair legs are made of solid wood, which is a durable natural material. Thanks to new research and a new technique, this upholstered chair gives you optimal seating comfort. Change the style anytime by replacing the chair cover with one in a different colour or model."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Back fabric: 100 % polyester (100% recycled). Fabric: 35% cotton, 65% polyester (min. 90% recycled). Leg: Solid birch, Acrylic paint. Seat frame: Steel, Epoxy/polyester powder coating. Backrest frame: Steel. Support panel: Polyethylene plastic. Backrest cushion/ Seat cushion: 100% polyester. Lining: Polyester wadding."]],"price":79,"images":["assets/images/products/product-220105.jpg"]},{"id":220106,"name":"tossberg","popularity":3,"category":{"id":1,"name":"chair"},"rooms":[{"id":1,"name":"living room"},{"id":3,"name":"dining room"},{"id":4,"name":"office"}],"info":[["Description","The seat\'s bowl-shaped bottom is adapted for your sit bones and those of most of the world\'s population. And with an innovative technique, the seat\'s padding is shaped to maximise your comfort. The upholstery of the chair consists of straight polyester fibres with small gaps between them – providing comfy elasticity and better ventilation so you enjoy a pleasant temperature when sitting. The backrest has a built-in lumbar support and the angle between the seat and the backrest is optimally adapted to make it comfortable for you to sit a little longer at the dining table. The hardwearing cover of cotton and polyester is yarn dyed to create an attractive two-tone effect. The chair cover comes in one piece and fixes in place with hook-and-loop fasteners so you can easily pull it off and put it back on again. After lively meals, it\'s nice to know that you can easily pull the chair cover off and machine wash it. The chair legs are made of solid wood, which is a durable natural material. Thanks to new research and a new technique, this upholstered chair gives you optimal seating comfort. Change the style anytime by replacing the chair cover with one in a different colour or model."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Back fabric: 100 % polyester (100% recycled). Fabric: 35% cotton, 65% polyester (min. 90% recycled). Leg: Solid birch, Acrylic paint. Seat frame: Steel, Epoxy/polyester powder coating. Backrest frame: Steel. Support panel: Polyethylene plastic. Backrest cushion/ Seat cushion: 100% polyester. Lining: Polyester wadding."]],"price":139,"images":["assets/images/products/product-220106.jpg"]},{"id":220107,"name":"strandmon","popularity":7,"category":{"id":1,"name":"chair"},"rooms":[{"id":1,"name":"living room"}],"info":[["Description","The seat\'s bowl-shaped bottom is adapted for your sit bones and those of most of the world\'s population. And with an innovative technique, the seat\'s padding is shaped to maximise your comfort. The upholstery of the chair consists of straight polyester fibres with small gaps between them – providing comfy elasticity and better ventilation so you enjoy a pleasant temperature when sitting. The backrest has a built-in lumbar support and the angle between the seat and the backrest is optimally adapted to make it comfortable for you to sit a little longer at the dining table. The hardwearing cover of cotton and polyester is yarn dyed to create an attractive two-tone effect. The chair cover comes in one piece and fixes in place with hook-and-loop fasteners so you can easily pull it off and put it back on again. After lively meals, it\'s nice to know that you can easily pull the chair cover off and machine wash it. The chair legs are made of solid wood, which is a durable natural material. Thanks to new research and a new technique, this upholstered chair gives you optimal seating comfort. Change the style anytime by replacing the chair cover with one in a different colour or model."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Back fabric: 100 % polyester (100% recycled). Fabric: 35% cotton, 65% polyester (min. 90% recycled). Leg: Solid birch, Acrylic paint. Seat frame: Steel, Epoxy/polyester powder coating. Backrest frame: Steel. Support panel: Polyethylene plastic. Backrest cushion/ Seat cushion: 100% polyester. Lining: Polyester wadding."]],"price":199,"discount":179,"images":["assets/images/products/product-220107.jpg"]},{"id":220201,"name":"landskrona","popularity":8,"category":{"id":2,"name":"sofa"},"rooms":[{"id":1,"name":"living room"},{"id":2,"name":"bed room"}],"info":[["Description","10 year guarantee. Read about the terms in the guarantee brochure. Allows you to sit deeply, low and softly with the loose back cushions for extra support. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like. The cover is easy to keep clean since it is removable and can be machine washed. The various sections of the seating series can be connected together in different combinations or used separately. You sit in comfort with a slight, pleasant resilience thanks to the elastic weave in the bottom and high resilience foam in the seat cushions. If you like the way it looks you have to try it! The deep seats, moveable back cushions and suspension fabric make this seating very comfortable. Create your own combination, sit back and relax."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Do not bleach. Machine wash, max 40°C, normal process. To be washed separately. Do not tumble dry. Iron, max 150°C. Professional dry cleaning in tetrachloroethene and hydrocarbons, normal process."]],"price":549,"discount":499,"images":["assets/images/products/product-220201.jpg"]},{"id":220202,"name":"soderhamn","popularity":5,"category":{"id":2,"name":"sofa"},"rooms":[{"id":1,"name":"living room"},{"id":2,"name":"bed room"}],"info":[["Description","10 year guarantee. Read about the terms in the guarantee brochure. Allows you to sit deeply, low and softly with the loose back cushions for extra support. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like. The cover is easy to keep clean since it is removable and can be machine washed. The various sections of the seating series can be connected together in different combinations or used separately. You sit in comfort with a slight, pleasant resilience thanks to the elastic weave in the bottom and high resilience foam in the seat cushions. If you like the way it looks you have to try it! The deep seats, moveable back cushions and suspension fabric make this seating very comfortable. Create your own combination, sit back and relax."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Do not bleach. Machine wash, max 40°C, normal process. To be washed separately. Do not tumble dry. Iron, max 150°C. Professional dry cleaning in tetrachloroethene and hydrocarbons, normal process."]],"price":599,"images":["assets/images/products/product-220202.jpg"]},{"id":220203,"name":"smedstorp","popularity":1,"category":{"id":2,"name":"sofa"},"rooms":[{"id":1,"name":"living room"},{"id":2,"name":"bed room"}],"info":[["Description","10 year guarantee. Read about the terms in the guarantee brochure. Allows you to sit deeply, low and softly with the loose back cushions for extra support. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like. The cover is easy to keep clean since it is removable and can be machine washed. The various sections of the seating series can be connected together in different combinations or used separately. You sit in comfort with a slight, pleasant resilience thanks to the elastic weave in the bottom and high resilience foam in the seat cushions. If you like the way it looks you have to try it! The deep seats, moveable back cushions and suspension fabric make this seating very comfortable. Create your own combination, sit back and relax."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Do not bleach. Machine wash, max 40°C, normal process. To be washed separately. Do not tumble dry. Iron, max 150°C. Professional dry cleaning in tetrachloroethene and hydrocarbons, normal process."]],"price":599,"images":["assets/images/products/product-220203.jpg"]},{"id":220204,"name":"klubbfors","popularity":4,"category":{"id":2,"name":"sofa"},"rooms":[{"id":1,"name":"living room"},{"id":2,"name":"bed room"}],"info":[["Description","10 year guarantee. Read about the terms in the guarantee brochure. Allows you to sit deeply, low and softly with the loose back cushions for extra support. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like. The cover is easy to keep clean since it is removable and can be machine washed. The various sections of the seating series can be connected together in different combinations or used separately. You sit in comfort with a slight, pleasant resilience thanks to the elastic weave in the bottom and high resilience foam in the seat cushions. If you like the way it looks you have to try it! The deep seats, moveable back cushions and suspension fabric make this seating very comfortable. Create your own combination, sit back and relax."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Do not bleach. Machine wash, max 40°C, normal process. To be washed separately. Do not tumble dry. Iron, max 150°C. Professional dry cleaning in tetrachloroethene and hydrocarbons, normal process."]],"price":589,"images":["assets/images/products/product-220204.jpg"]},{"id":220205,"name":"linanas","popularity":1,"category":{"id":2,"name":"sofa"},"rooms":[{"id":1,"name":"living room"},{"id":2,"name":"bed room"}],"info":[["Description","10 year guarantee. Read about the terms in the guarantee brochure. Allows you to sit deeply, low and softly with the loose back cushions for extra support. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like. The cover is easy to keep clean since it is removable and can be machine washed. The various sections of the seating series can be connected together in different combinations or used separately. You sit in comfort with a slight, pleasant resilience thanks to the elastic weave in the bottom and high resilience foam in the seat cushions. If you like the way it looks you have to try it! The deep seats, moveable back cushions and suspension fabric make this seating very comfortable. Create your own combination, sit back and relax."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Do not bleach. Machine wash, max 40°C, normal process. To be washed separately. Do not tumble dry. Iron, max 150°C. Professional dry cleaning in tetrachloroethene and hydrocarbons, normal process."]],"price":329,"images":["assets/images/products/product-220205.jpg"]},{"id":220206,"name":"slatorp","popularity":1,"category":{"id":2,"name":"sofa"},"rooms":[{"id":1,"name":"living room"},{"id":2,"name":"bed room"}],"info":[["Description","10 year guarantee. Read about the terms in the guarantee brochure. Allows you to sit deeply, low and softly with the loose back cushions for extra support. You can place the chaise longue section to the left or right of the sofa, and switch whenever you like. The cover is easy to keep clean since it is removable and can be machine washed. The various sections of the seating series can be connected together in different combinations or used separately. You sit in comfort with a slight, pleasant resilience thanks to the elastic weave in the bottom and high resilience foam in the seat cushions. If you like the way it looks you have to try it! The deep seats, moveable back cushions and suspension fabric make this seating very comfortable. Create your own combination, sit back and relax."],["Materials","71% cotton, 8% viscose/rayon, 21 % polyester. Frame: Plywood, Fibreboard, Non-woven polypropylene, Steel, Solid wood. Back cushion: Polyester hollow fibres, Non-woven polypropylene. Upholstery material: Highly resilient polyurethane foam (cold foam) 35 kg/cu.m., Polyurethane foam 20 kg/cu.m., Polyester hollow fibre wadding, Non-woven polypropylene. Smoulder resistant lining/ Smoulder resistant lining: Polyester wadding."],["Care instructions","Do not bleach. Machine wash, max 40°C, normal process. To be washed separately. Do not tumble dry. Iron, max 150°C. Professional dry cleaning in tetrachloroethene and hydrocarbons, normal process."]],"price":329,"images":["assets/images/products/product-220206.jpg"]},{"id":220301,"name":"tommaryd","popularity":1,"category":{"id":3,"name":"desk"},"rooms":[{"id":3,"name":"dining room"},{"id":4,"name":"office"}],"info":[["Description","The clean, simple design is easy to place in restaurants, cafés or meeting rooms and quick-meeting areas in offices. 10 year guarantee. Read about the terms in the guarantee brochure. The laminate surface is very durable, easy to clean and can withstand heavy use. The feet can be adjusted so the table stands steadily on uneven floors. They’re attached to the table’s legs so they will not fall off or get lost. The durable edge band protects against bumps, scratches and cracks caused by chairs being moved around or hung on the table. Combine any number of tables as you like and create a solution that suits you and your team – for meetings, creative workshops, collaborations and individual tasks. You can quickly and easily rearrange your tables and adjust the solution when the needs in the office change. This table suits both homes and businesses demanding everyday strength and durability. Easy to place in a kitchen, dining room, café or meeting room. The clean design combines well with many styles."],["Materials","Particleboard, Oak veneer, Tinted clear acrylic lacquer, Paper foil, ABS plastic. Basematerial/ Leg: Steel, Epoxy/polyester powder coating. Inside leg/ Inside frame: Steel."],["Care instructions","For maximum quality, re-tighten the screws when necessary. Wipe clean with a cloth dampened in a mild cleaner. Wipe dry with a clean cloth."]],"price":139,"images":["assets/images/products/product-220301.jpg"]},{"id":220302,"name":"lagkapten","popularity":6,"category":{"id":3,"name":"desk"},"rooms":[{"id":4,"name":"office"}],"info":[["Description","This sturdy desk is built to outlast years of coffee and hard work. You get a generous work surface and a clever solution to keep cords in place underneath. The melamine surface is durable, stain resistant and easy to keep clean. Deep table top gives a generous work surface and lets you sit at a comfortable distance from the computer monitor. You can mount the table top at a height that suits you, since the legs are adjustable."],["Materials","Tabletop: Particleboard, Melamine foil, Plastic edging. Underframe for table top Leg/ Underframe/ Mounting plate: Steel, Epoxy/polyester powder coating. Feet: Aluminum, Epoxy/polyester powder coating. Cable management: Stainless steel, 70 % rubber, 30 % polyester."],["Care instructions","Check regularly that all assembly fastenings are properly tightened and retighten when necessary. Wipe clean with a mild soapy solution. Wipe dry with a clean cloth."]],"price":119,"images":["assets/images/products/product-220302.jpg"]},{"id":220303,"name":"bekant","popularity":1,"category":{"id":3,"name":"desk"},"rooms":[{"id":4,"name":"office"}],"info":[["Description","This sturdy desk is built to outlast years of coffee and hard work. You get a generous work surface and a clever solution to keep cords in place underneath. The melamine surface is durable, stain resistant and easy to keep clean. Deep table top gives a generous work surface and lets you sit at a comfortable distance from the computer monitor. You can mount the table top at a height that suits you, since the legs are adjustable."],["Materials","Tabletop: Particleboard, Melamine foil, Plastic edging. Underframe for table top Leg/ Underframe/ Mounting plate: Steel, Epoxy/polyester powder coating. Feet: Aluminum, Epoxy/polyester powder coating. Cable management: Stainless steel, 70 % rubber, 30 % polyester."],["Care instructions","Check regularly that all assembly fastenings are properly tightened and retighten when necessary. Wipe clean with a mild soapy solution. Wipe dry with a clean cloth."]],"price":279,"images":["assets/images/products/product-220303.jpg"]},{"id":220304,"name":"idasen","popularity":1,"category":{"id":3,"name":"desk"},"rooms":[{"id":4,"name":"office"}],"info":[["Description","This sturdy desk is built to outlast years of coffee and hard work. You get a generous work surface and a clever solution to keep cords in place underneath. The melamine surface is durable, stain resistant and easy to keep clean. Deep table top gives a generous work surface and lets you sit at a comfortable distance from the computer monitor. You can mount the table top at a height that suits you, since the legs are adjustable."],["Materials","Tabletop: Particleboard, Melamine foil, Plastic edging. Underframe for table top Leg/ Underframe/ Mounting plate: Steel, Epoxy/polyester powder coating. Feet: Aluminum, Epoxy/polyester powder coating. Cable management: Stainless steel, 70 % rubber, 30 % polyester."],["Care instructions","Check regularly that all assembly fastenings are properly tightened and retighten when necessary. Wipe clean with a mild soapy solution. Wipe dry with a clean cloth."]],"price":709,"images":["assets/images/products/product-220304.jpg"]}]');

/***/ })

}]);
//# sourceMappingURL=src_components_ProductsGrid_index_js-src_components_Title_index_js-src_assets_json_products_json.app.bundle.js.map