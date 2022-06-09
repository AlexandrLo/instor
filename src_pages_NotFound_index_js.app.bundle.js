"use strict";
(self["webpackChunkinstor"] = self["webpackChunkinstor"] || []).push([["src_pages_NotFound_index_js"],{

/***/ "./node_modules/@styled-icons/fluentui-system-filled/DocumentError/DocumentError.esm.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@styled-icons/fluentui-system-filled/DocumentError/DocumentError.esm.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentError": () => (/* binding */ DocumentError),
/* harmony export */   "DocumentErrorDimensions": () => (/* binding */ DocumentErrorDimensions)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styled-icons/styled-icon */ "./node_modules/@styled-icons/styled-icon/index.esm.js");



var DocumentError = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (props, ref) {
  var attrs = {
    "fill": "currentColor",
    "xmlns": "http://www.w3.org/2000/svg"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_styled_icons_styled_icon__WEBPACK_IMPORTED_MODULE_2__.StyledIconBase, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    iconAttrs: attrs,
    iconVerticalAlign: "middle",
    iconViewBox: "0 0 24 24"
  }, props, {
    ref: ref
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M12 2v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2h-6.81A6.5 6.5 0 0 0 4 11.5V4c0-1.1.9-2 2-2h6z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M13.5 2.5V8c0 .28.22.5.5.5h5.5l-6-6zM12 17.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zM6.5 14a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5zm0 7.13a.62.62 0 1 0 0-1.25.62.62 0 0 0 0 1.25z"
  }));
});
DocumentError.displayName = 'DocumentError';
var DocumentErrorDimensions = {
  height: 24,
  width: 24
};

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @styled-icons/fluentui-system-filled */ "./node_modules/@styled-icons/fluentui-system-filled/DocumentError/DocumentError.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var components_Placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Placeholder */ "./src/components/Placeholder/index.js");
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Title */ "./src/components/Title/index.js");







function NotFound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    postfix: "Page not Found"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.VStack, {
    flex: "1 0 100%",
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Placeholder__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "lg",
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_styled_icons_fluentui_system_filled__WEBPACK_IMPORTED_MODULE_5__.DocumentError, null),
    heading: "Page not Found",
    description: "This page doesn't exist or was removed"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Footer__WEBPACK_IMPORTED_MODULE_1__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ })

}]);
//# sourceMappingURL=src_pages_NotFound_index_js.app.bundle.js.map