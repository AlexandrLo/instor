"use strict";
(self["webpackChunkinstor"] = self["webpackChunkinstor"] || []).push([["src_pages_Product_index_js"],{

/***/ "./src/components/ProductBlock/ProductImage/ShareButton/index.js":
/*!***********************************************************************!*\
  !*** ./src/components/ProductBlock/ProductImage/ShareButton/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-14.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/toast/dist/chakra-ui-toast.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");




function ShareButton() {
  var _useClipboard = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useClipboard)(window.location.href),
      onCopy = _useClipboard.onCopy;

  var toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useToast)();

  var sharePage = function sharePage() {
    if (navigator.share) {
      navigator.share({
        title: "Instor",
        url: window.location.href
      });
    } else {
      onCopy();
      toast({
        position: "top",
        title: "Copied to clipboard",
        description: "Page address was copied to clipboard",
        status: "info",
        duration: 5000,
        isClosable: true
      });
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "blur",
    onClick: sharePage
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__.ShareAndroid24Filled, null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShareButton);

/***/ }),

/***/ "./src/components/ProductBlock/ProductImage/index.js":
/*!***********************************************************!*\
  !*** ./src/components/ProductBlock/ProductImage/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var components_BackButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/BackButton */ "./src/components/BackButton/index.js");
/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Image */ "./src/components/Image/index.js");
/* harmony import */ var _ShareButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ShareButton */ "./src/components/ProductBlock/ProductImage/ShareButton/index.js");







function ProductImage(_ref) {
  var images = _ref.images,
      name = _ref.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Box, {
    pos: "relative",
    ml: {
      base: "1rem",
      md: "1.5rem"
    },
    mr: {
      base: "1rem",
      md: "0"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.AspectRatio, {
    minW: {
      base: "100%",
      md: "18rem",
      lg: "23rem",
      xl: "28rem"
    },
    maxH: {
      base: "none",
      sm: "28rem",
      md: "none"
    },
    ratio: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Image__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: images === null || images === void 0 ? void 0 : images[0],
    alt: "Photo of ".concat(name)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {
    pos: "absolute",
    top: "0",
    p: "1.5rem",
    w: "100%",
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_BackButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "blur"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ShareButton__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}

ProductImage.propTypes = {
  images: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)),
  name: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductImage);

/***/ }),

/***/ "./src/components/ProductBlock/ProductInfo/ReviewsCard/RatingStars/index.js":
/*!**********************************************************************************!*\
  !*** ./src/components/ProductBlock/ProductInfo/ReviewsCard/RatingStars/index.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-15.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");





function RatingStars(_ref) {
  var rating = _ref.rating;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
    spacing: "0"
  }, Array(5).fill().map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
      key: i,
      color: i + 1 < rating ? "yellow.400" : "gray.500"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_2__.Star24Filled, null));
  }));
}

RatingStars.propTypes = {
  rating: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RatingStars);

/***/ }),

/***/ "./src/components/ProductBlock/ProductInfo/ReviewsCard/index.js":
/*!**********************************************************************!*\
  !*** ./src/components/ProductBlock/ProductInfo/ReviewsCard/index.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/icons/chunk-0.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/color-mode/dist/chakra-ui-color-mode.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/image/dist/chakra-ui-image.esm.js");
/* harmony import */ var _RatingStars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RatingStars */ "./src/components/ProductBlock/ProductInfo/ReviewsCard/RatingStars/index.js");




var reviewsData = {
  averageRating: 4.5,
  reviews: [{
    id: 1,
    avatar: "assets/images/avatars/user-avatar-1.png",
    name: "Alex",
    rating: 4,
    review: "Example Review"
  }, {
    id: 2,
    avatar: "assets/images/avatars/user-avatar-2.png",
    name: "Alex",
    rating: 4,
    review: "Example Review"
  }, {
    id: 3,
    avatar: "assets/images/avatars/user-avatar-3.png",
    name: "Alex",
    rating: 4,
    review: "Example Review"
  }, {
    id: 4,
    avatar: "assets/images/avatars/user-avatar-4.png",
    name: "Alex",
    rating: 4,
    review: "Example Review"
  }, {
    id: 5,
    avatar: "assets/images/avatars/user-avatar-5.png",
    name: "Alex",
    rating: 4,
    review: "Example Review"
  }]
};

function ReviewsCard() {
  var bgColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.50", "gray.700");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    justify: "space-between",
    p: "1rem",
    spacing: "1rem",
    borderRadius: "1rem",
    bg: bgColor
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
    spacing: "0",
    align: "start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RatingStars__WEBPACK_IMPORTED_MODULE_1__["default"], {
    rating: reviewsData.averageRating
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, null, reviewsData.averageRating)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {
    variant: "muted"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    spacing: "0.25rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, null, reviewsData.reviews.length, " reviews"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__.ArrowRightFilled, null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    spacing: "0",
    pr: "1rem"
  }, reviewsData.reviews.slice(0, 4).map(function (review) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
      key: review.id,
      w: "1rem"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Image, {
      src: review.avatar,
      alt: "Reviewer profile image",
      maxW: "none",
      boxSize: "2rem",
      borderRadius: "full",
      border: "2px",
      borderColor: bgColor
    }));
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewsCard);

/***/ }),

/***/ "./src/components/ProductBlock/ProductInfo/index.js":
/*!**********************************************************!*\
  !*** ./src/components/ProductBlock/ProductInfo/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/tabs/dist/chakra-ui-tabs.esm.js");
/* harmony import */ var components_AddToCartButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/AddToCartButton */ "./src/components/AddToCartButton/index.js");
/* harmony import */ var components_DragScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/DragScroll */ "./src/components/DragScroll/index.js");
/* harmony import */ var components_Price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Price */ "./src/components/Price/index.js");
/* harmony import */ var _ReviewsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReviewsCard */ "./src/components/ProductBlock/ProductInfo/ReviewsCard/index.js");








function ProductInfo(_ref) {
  var _product$category, _product$info, _product$info2;

  var product = _ref.product;
  var padding = {
    base: "1rem",
    md: "1.5rem"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.VStack, {
    align: "stretch",
    spacing: padding,
    pt: padding
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.HStack, {
    justify: "space-between",
    align: "flex-end",
    px: padding
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, {
    variant: "bold",
    color: "gray.400",
    textTransform: "uppercase"
  }, (_product$category = product.category) === null || _product$category === void 0 ? void 0 : _product$category.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {
    as: "h2",
    size: "h2",
    textTransform: "capitalize"
  }, product.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Price__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: "lg",
    price: product.price,
    discount: product.discount
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Stack, {
    direction: {
      base: "column-reverse",
      lg: "row"
    },
    align: {
      base: "stretch",
      lg: "center"
    },
    justify: "space-between",
    px: padding,
    spacing: padding
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ReviewsCard__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_AddToCartButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    id: product.id,
    name: product.name
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tabs, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_DragScroll__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.TabList, {
    w: "fit-content",
    spacing: "1rem",
    px: padding
  }, (_product$info = product.info) === null || _product$info === void 0 ? void 0 : _product$info.map(function (info) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Tab, {
      key: info[0]
    }, info[0]);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.TabPanels, null, (_product$info2 = product.info) === null || _product$info2 === void 0 ? void 0 : _product$info2.map(function (info) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.TabPanel, {
      key: info[0]
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Text, null, info[1]));
  }))));
}

ProductInfo.propTypes = {
  product: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
    name: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string),
    category: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
      id: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
      name: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)
    }),
    info: prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().string))),
    price: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
    discount: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
    images: prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().string))
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductInfo);

/***/ }),

/***/ "./src/components/ProductBlock/index.js":
/*!**********************************************!*\
  !*** ./src/components/ProductBlock/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _ProductImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductImage */ "./src/components/ProductBlock/ProductImage/index.js");
/* harmony import */ var _ProductInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductInfo */ "./src/components/ProductBlock/ProductInfo/index.js");
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Title */ "./src/components/Title/index.js");
/* harmony import */ var assets_json_products_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/json/products.json */ "./src/assets/json/products.json");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function ProductBlock() {
  var urlParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useNavigate)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      productData = _useState2[0],
      setProductData = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var foundProduct = assets_json_products_json__WEBPACK_IMPORTED_MODULE_4__.find(function (product) {
      return product.id == urlParams.id;
    });

    if (!foundProduct) {
      navigate("/404", {
        replace: true
      });
    } else {
      setProductData(foundProduct);
    }
  }, [urlParams]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    postfix: productData.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {
    py: {
      base: "1rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    direction: {
      base: "column",
      md: "row"
    },
    spacing: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    name: productData.name,
    images: productData.images
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ProductInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    product: productData
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductBlock);

/***/ }),

/***/ "./src/pages/Product/index.js":
/*!************************************!*\
  !*** ./src/pages/Product/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var components_PopularSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/PopularSection */ "./src/components/PopularSection/index.js");
/* harmony import */ var components_ProductBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ProductBlock */ "./src/components/ProductBlock/index.js");
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Title */ "./src/components/Title/index.js");





function Product() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    postfix: "Product"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_ProductBlock__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_PopularSection__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Product);

/***/ })

}]);
//# sourceMappingURL=src_pages_Product_index_js.app.bundle.js.map