"use strict";
(self["webpackChunkinstor"] = self["webpackChunkinstor"] || []).push([["src_pages_NotFound_index_js"],{

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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/color-mode/dist/chakra-ui-color-mode.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/switch/dist/chakra-ui-switch.esm.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-18.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-19.js");




function ColorModeSwitch() {
  var _useColorMode = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)(),
      colorMode = _useColorMode.colorMode,
      toggleColorMode = _useColorMode.toggleColorMode;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
    color: "gray.400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__.WeatherMoon24Filled, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Switch, {
    onChange: toggleColorMode,
    isChecked: colorMode === "light"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__.WeatherSunny24Filled, null));
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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");




function SocialButtons() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link,
    href: "https://instagram.com/",
    variant: "ghost",
    colorScheme: "instagram",
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaInstagram, {
    size: 24
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link,
    href: "https://youtube.com/",
    variant: "ghost",
    colorScheme: "youtube",
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaYoutube, {
    size: 24
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
    as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Link,
    href: "https://pinterest.com/",
    variant: "ghost",
    colorScheme: "pinterest",
    size: "sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaPinterest, {
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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/media-query/dist/chakra-ui-media-query.esm.js");
/* harmony import */ var _ColorModeSwitch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorModeSwitch */ "./src/components/Footer/ColorModeSwitch/index.js");
/* harmony import */ var _SocialButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialButtons */ "./src/components/Footer/SocialButtons/index.js");





function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
    pt: "3rem",
    pb: {
      base: "7rem",
      sm: "3rem"
    },
    px: {
      base: "1rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
    spacing: "2rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Hide, {
    above: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    spacing: "1.5rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SocialButtons__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    w: "100%"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Show, {
    above: "md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    w: "100%",
    spacing: "1.5rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SocialButtons__WEBPACK_IMPORTED_MODULE_2__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
    variant: "muted",
    textAlign: "center",
    whiteSpace: "nowrap"
  }, "\xA9 Instor 2022"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    w: "100%",
    justify: "flex-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ColorModeSwitch__WEBPACK_IMPORTED_MODULE_1__["default"], null)))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, null, suggestions.map(function (suggestion) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
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
  var headingSize = "h2";
  var iconSize = "4rem";

  switch (size) {
    default:
    case "md":
      headingSize = "h2";
      iconSize = ["3rem", "3rem", "4rem"];
      break;

    case "lg":
      headingSize = "h1";
      iconSize = ["4rem", "4rem", "5rem"];
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
    spacing: "1rem",
    maxW: maxW
  }, icon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    fontSize: iconSize,
    lineHeight: "0"
  }, icon), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
    spacing: "0"
  }, heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
    as: headingSize,
    size: headingSize,
    textAlign: "center"
  }, heading), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
    color: "gray.400",
    textAlign: "center"
  }, description)), showButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link,
    to: "/"
  }, "Back to Homepage"), showSuggestions && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Suggestions__WEBPACK_IMPORTED_MODULE_1__["default"], null), children);
}

Placeholder.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_5___default().oneOf(["md", "lg"]),
  icon: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node),
  heading: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  description: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().string),
  showButton: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  showSuggestions: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool),
  maxW: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().any),
  children: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().node)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Placeholder);

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
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function Title(_ref) {
  var postfix = _ref.postfix;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_helmet_async__WEBPACK_IMPORTED_MODULE_1__.Helmet, null, postfix ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Instor | ".concat(postfix === null || postfix === void 0 ? void 0 : postfix.replace(/^\w/, function (c) {
    return c.toUpperCase();
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, "Instor"));
}

Title.propTypes = {
  postfix: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ "./src/pages/NotFound/index.js":
/*!*************************************!*\
  !*** ./src/pages/NotFound/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/icons/chunk-2.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var components_Placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Placeholder */ "./src/components/Placeholder/index.js");
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Title */ "./src/components/Title/index.js");







function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    postfix: "Page not Found"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {
    flex: "1 0 100%",
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Placeholder__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "lg",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_5__.DocumentErrorRegular, null),
    heading: "Page not Found",
    description: "This page doesn't exist or was removed"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ })

}]);
//# sourceMappingURL=src_pages_NotFound_index_js.app.bundle.js.map