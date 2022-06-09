"use strict";
(self["webpackChunkinstor"] = self["webpackChunkinstor"] || []).push([["src_pages_Search_index_js"],{

/***/ "./src/components/PageHeader/index.js":
/*!********************************************!*\
  !*** ./src/components/PageHeader/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/color-mode/dist/chakra-ui-color-mode.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var components_BackButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/BackButton */ "./src/components/BackButton/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function PageHeader(_ref) {
  var _ref$heading = _ref.heading,
      heading = _ref$heading === void 0 ? "" : _ref$heading,
      description = _ref.description,
      image = _ref.image,
      onBack = _ref.onBack;
  var headerBg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.50", "gray.700");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, _extends({
    w: "100%",
    bg: headerBg,
    p: {
      base: "1.5rem",
      sm: "3rem"
    },
    borderRadius: "1rem"
  }, image && {
    backgroundImage: image,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    spacing: {
      base: "0.75rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_BackButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: image ? "blur" : "alpha",
    onBack: onBack
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
    align: "start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
    as: "h1",
    size: "h1",
    color: image && "white",
    textTransform: "capitalize"
  }, heading), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
    variant: "muted",
    color: image && "white"
  }, description))));
}

PageHeader.propTypes = {
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  image: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string),
  onBack: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().func)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageHeader);

/***/ }),

/***/ "./src/components/SearchBlock/index.js":
/*!*********************************************!*\
  !*** ./src/components/SearchBlock/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fuse_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.esm.js");
/* harmony import */ var _styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @styled-icons/fluentui-system-filled */ "./node_modules/@styled-icons/fluentui-system-filled/Search/Search.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var components_PageHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/PageHeader */ "./src/components/PageHeader/index.js");
/* harmony import */ var components_Placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Placeholder */ "./src/components/Placeholder/index.js");
/* harmony import */ var components_ProductsGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ProductsGrid */ "./src/components/ProductsGrid/index.js");
/* harmony import */ var assets_json_products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/json/products.json */ "./src/assets/json/products.json");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function SearchBlock() {
  var _searchParams$get;

  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useSearchParams)(),
      _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
      searchParams = _useSearchParams2[0];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      fuse = _useState2[0],
      setFuse = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      searchProductsData = _useState4[0],
      setSeacrhProductsData = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var query = (_searchParams$get = searchParams.get("query")) !== null && _searchParams$get !== void 0 ? _searchParams$get : "";
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setFuse(new fuse_js__WEBPACK_IMPORTED_MODULE_6__["default"](assets_json_products_json__WEBPACK_IMPORTED_MODULE_4__, {
      keys: ["name", "category.name", "rooms.name", "info"]
    }));
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var results = fuse === null || fuse === void 0 ? void 0 : fuse.search(query);

    if (results) {
      setSeacrhProductsData(results === null || results === void 0 ? void 0 : results.map(function (result) {
        return result.item;
      }));
      setIsLoading(false);
    }
  }, [searchParams, fuse]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Container, {
    p: {
      base: "1rem",
      md: "1.5rem"
    },
    flex: "1 0 100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.VStack, {
    spacing: {
      base: "2rem",
      md: "3rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_PageHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    heading: "Search",
    description: query && "Showing results for \"".concat(query, "\"")
  }), query ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_ProductsGrid__WEBPACK_IMPORTED_MODULE_3__["default"], {
    products: searchProductsData,
    isLoading: isLoading
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Placeholder__WEBPACK_IMPORTED_MODULE_2__["default"], {
    maxW: "19rem",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_8__.Search, null),
    heading: "Find Best Furniture For Your House",
    description: "For example:",
    showButton: false,
    showSuggestions: true
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBlock);

/***/ }),

/***/ "./src/pages/Search/index.js":
/*!***********************************!*\
  !*** ./src/pages/Search/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_SearchBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/SearchBlock */ "./src/components/SearchBlock/index.js");
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Title */ "./src/components/Title/index.js");




function Search() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Title__WEBPACK_IMPORTED_MODULE_2__["default"], {
    postfix: "Product"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_SearchBlock__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ })

}]);
//# sourceMappingURL=src_pages_Search_index_js.app.bundle.js.map