"use strict";
(self["webpackChunkinstor"] = self["webpackChunkinstor"] || []).push([["src_pages_Cart_index_js"],{

/***/ "./src/components/CartBlock/CartList/CartItem/AmountInput/index.js":
/*!*************************************************************************!*\
  !*** ./src/components/CartBlock/CartList/CartItem/AmountInput/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-16.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-0.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/number-input/dist/chakra-ui-number-input.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/slices/cartSlice */ "./src/store/slices/cartSlice.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function AmountInput(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      id = _ref.id;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var amount = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    var _state$cart$items$fin;

    return (_state$cart$items$fin = state.cart.items.find(function (item) {
      return item.id === id;
    })) === null || _state$cart$items$fin === void 0 ? void 0 : _state$cart$items$fin.amount;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setValue(amount);
  }, [amount]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!isNaN(value) && value !== "") {
      dispatch((0,store_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__.cartSetItemAmount)({
        id: id,
        amount: parseInt(value)
      }));
    }
  }, [value]);

  var _useNumberInput = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useNumberInput)({
    step: 1,
    value: value,
    defaultValue: 0,
    onChange: function onChange(valueAsString) {
      setValue(valueAsString);
    },
    min: 0,
    max: 99,
    precision: 0
  }),
      getInputProps = _useNumberInput.getInputProps,
      getIncrementButtonProps = _useNumberInput.getIncrementButtonProps,
      getDecrementButtonProps = _useNumberInput.getDecrementButtonProps;

  var inc = getIncrementButtonProps();
  var dec = getDecrementButtonProps();
  var input = getInputProps();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.HStack, {
    spacing: {
      base: "0.25rem",
      md: "0.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, _extends({
    size: size
  }, dec), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_6__.Subtract24Filled, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Input, _extends({
    type: "number",
    size: size,
    textAlign: "center",
    px: "0",
    maxW: size === "sm" ? "2.5rem" : "4rem"
  }, input)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, _extends({
    size: size
  }, inc), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_8__.Add24Filled, null)));
}

AmountInput.propTypes = {
  size: prop_types__WEBPACK_IMPORTED_MODULE_9___default().oneOf(["md", "sm"]),
  id: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AmountInput);

/***/ }),

/***/ "./src/components/CartBlock/CartList/CartItem/DeleteButton/index.js":
/*!**************************************************************************!*\
  !*** ./src/components/CartBlock/CartList/CartItem/DeleteButton/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/sizedIcons/chunk-6.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store_slices_cartSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! store/slices/cartSlice */ "./src/store/slices/cartSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







function DeleteButton(_ref) {
  var id = _ref.id;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();

  var onDelete = function onDelete() {
    if (id) dispatch((0,store_slices_cartSlice__WEBPACK_IMPORTED_MODULE_1__.cartDeleteItem)(id));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
    size: "sm",
    onClick: onDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__.Dismiss24Filled, null));
}

DeleteButton.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteButton);

/***/ }),

/***/ "./src/components/CartBlock/CartList/CartItem/index.js":
/*!*************************************************************!*\
  !*** ./src/components/CartBlock/CartList/CartItem/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/media-query/dist/chakra-ui-media-query.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _AmountInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AmountInput */ "./src/components/CartBlock/CartList/CartItem/AmountInput/index.js");
/* harmony import */ var _DeleteButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DeleteButton */ "./src/components/CartBlock/CartList/CartItem/DeleteButton/index.js");
/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Image */ "./src/components/Image/index.js");
/* harmony import */ var components_Price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Price */ "./src/components/Price/index.js");








function CartItem(_ref) {
  var item = _ref.item;
  var numberInputSize = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.useBreakpointValue)({
    base: "sm",
    lg: "md"
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {
    spacing: {
      base: "0.5rem",
      md: "1rem"
    },
    align: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.AspectRatio, {
    ratio: 1,
    flex: "0 0 auto",
    w: "30%",
    minW: "7rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: item.product.images[0],
    alt: "Photo of ".concat(item.product.name)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {
    w: "100%",
    alignSelf: "stretch",
    align: "stretch",
    justify: "space-between",
    py: {
      base: "0.5rem",
      md: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.HStack, {
    align: "start",
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
    variant: "small",
    fontWeight: "600",
    color: "gray.400",
    textTransform: "uppercase"
  }, item.product.category.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {
    textTransform: "capitalize"
  }, item.product.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_DeleteButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    id: item.id
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    direction: ["column-reverse", "row"],
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_AmountInput__WEBPACK_IMPORTED_MODULE_1__["default"], {
    size: numberInputSize,
    id: item.id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Price__WEBPACK_IMPORTED_MODULE_4__["default"], {
    price: item.product.price,
    discount: item.product.discount
  }))));
}

CartItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number.isRequired),
    amount: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number.isRequired),
    product: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
      id: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number.isRequired),
      name: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired),
      category: prop_types__WEBPACK_IMPORTED_MODULE_7___default().shape({
        name: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string.isRequired)
      }),
      price: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number.isRequired),
      discount: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().number),
      images: prop_types__WEBPACK_IMPORTED_MODULE_7___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)).isRequired
    })
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartItem);

/***/ }),

/***/ "./src/components/CartBlock/CartList/index.js":
/*!****************************************************!*\
  !*** ./src/components/CartBlock/CartList/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/icons/chunk-1.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _CartItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CartItem */ "./src/components/CartBlock/CartList/CartItem/index.js");
/* harmony import */ var components_Placeholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Placeholder */ "./src/components/Placeholder/index.js");







function CartList(_ref) {
  var items = _ref.items;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
    spacing: "1rem",
    align: "stretch",
    flex: "1 0 0%",
    w: "100%",
    maxW: "100%"
  }, items.length > 0 ? items.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CartItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: item.product.id,
      item: item
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    justify: "center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Placeholder__WEBPACK_IMPORTED_MODULE_2__["default"], {
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_4__.CartRegular, null),
    heading: "Cart is Empty",
    description: "Looks like you haven\u2019t added anything to your cart yet",
    maxW: "18rem"
  })));
}

CartList.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(_CartItem__WEBPACK_IMPORTED_MODULE_1__["default"].propTypes.item)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartList);

/***/ }),

/***/ "./src/components/CartBlock/Summary/CheckoutButton/CheckoutModal/index.js":
/*!********************************************************************************!*\
  !*** ./src/components/CartBlock/Summary/CheckoutButton/CheckoutModal/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/icons/chunk-1.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/modal/dist/chakra-ui-modal.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");





function CheckoutModal(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
    isOpen: isOpen,
    onClose: onClose,
    isCentered: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalOverlay, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalContent, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalBody, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
    color: "green.400",
    fontSize: "6rem",
    lineHeight: "0",
    p: "1rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__.CheckmarkCircleRegular, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
    as: "h2",
    size: "h2"
  }, "Order Placed"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, null, "Order number:", " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
    variant: "bold",
    as: "b"
  }, "123456")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ModalFooter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
    w: "100%",
    variant: "solid",
    onClick: onClose
  }, "Ok"))));
}

CheckoutModal.propTypes = {
  isOpen: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired),
  onClose: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutModal);

/***/ }),

/***/ "./src/components/CartBlock/Summary/CheckoutButton/index.js":
/*!******************************************************************!*\
  !*** ./src/components/CartBlock/Summary/CheckoutButton/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/hooks/dist/chakra-ui-hooks.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _CheckoutModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckoutModal */ "./src/components/CartBlock/Summary/CheckoutButton/CheckoutModal/index.js");
/* harmony import */ var store_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/slices/cartSlice */ "./src/store/slices/cartSlice.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");







function CheckoutButton(_ref) {
  var _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;

  var _useDisclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.useDisclosure)(),
      isOpen = _useDisclosure.isOpen,
      onOpen = _useDisclosure.onOpen,
      onClose = _useDisclosure.onClose;

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();

  var handleClick = function handleClick() {
    dispatch((0,store_slices_cartSlice__WEBPACK_IMPORTED_MODULE_2__.cartClear)());
    onOpen();
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
    colorScheme: "orange",
    disabled: disabled,
    onClick: handleClick
  }, "Checkout"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CheckoutModal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isOpen: isOpen,
    onClose: onClose
  }));
}

CheckoutButton.propTypes = {
  disabled: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckoutButton);

/***/ }),

/***/ "./src/components/CartBlock/Summary/index.js":
/*!***************************************************!*\
  !*** ./src/components/CartBlock/Summary/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/input/dist/chakra-ui-input.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/button/dist/chakra-ui-button.esm.js");
/* harmony import */ var _CheckoutButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CheckoutButton */ "./src/components/CartBlock/Summary/CheckoutButton/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Summary(_ref) {
  var items = _ref.items;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      productsTotal = _useState2[0],
      setProductsTotal = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      deliveryTotal = _useState4[0],
      setDeliveryTotal = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setProductsTotal(items.reduce(function (sum, item) {
      return sum += item.amount * (item.product.discount ? item.product.discount : item.product.price);
    }, 0));
    setDeliveryTotal(items.length > 0 ? 15 : 0);
  }, [items]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.VStack, {
    position: "sticky",
    top: "7rem",
    align: "stretch",
    flex: "0 0 auto",
    w: {
      base: "100%",
      md: "35%"
    },
    spacing: "1rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
    as: "h2",
    size: "h2"
  }, "Summary"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
    spacing: "0.5rem",
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
    variant: "muted"
  }, "Products"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
    variant: "muted"
  }, "$", productsTotal)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
    spacing: "0.5rem",
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
    variant: "muted"
  }, "Delivery"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
    variant: "muted"
  }, "$", deliveryTotal)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
    spacing: "0.5rem",
    justify: "space-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, null, "Total"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
    variant: "bold"
  }, "$", productsTotal + deliveryTotal)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.HStack, {
    spacing: "0.5rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Input, {
    placeholder: "Coupon code"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "solid"
  }, "Apply")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CheckoutButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    disabled: items.length === 0
  }));
}

Summary.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
    amount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number.isRequired),
    product: prop_types__WEBPACK_IMPORTED_MODULE_5___default().shape({
      price: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number.isRequired),
      discount: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().number)
    }).isRequired
  }))
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Summary);

/***/ }),

/***/ "./src/components/CartBlock/index.js":
/*!*******************************************!*\
  !*** ./src/components/CartBlock/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var _CartList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CartList */ "./src/components/CartBlock/CartList/index.js");
/* harmony import */ var components_PageHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/PageHeader */ "./src/components/PageHeader/index.js");
/* harmony import */ var _Summary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Summary */ "./src/components/CartBlock/Summary/index.js");
/* harmony import */ var assets_json_products_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/json/products.json */ "./src/assets/json/products.json");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function CartBlock() {
  var cartItems = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.cart.items;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      hydratedCart = _useState2[0],
      setHydratedCart = _useState2[1];

  var getProductData = function getProductData(id) {
    return assets_json_products_json__WEBPACK_IMPORTED_MODULE_5__.find(function (product) {
      return product.id === id;
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setHydratedCart(cartItems.map(function (item) {
      return _objectSpread(_objectSpread({}, item), {}, {
        product: getProductData(item.id)
      });
    }));
  }, [cartItems]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Container, {
    p: {
      base: "1rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.VStack, {
    spacing: {
      base: "2rem",
      md: "3rem"
    },
    align: "stretch"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_PageHeader__WEBPACK_IMPORTED_MODULE_3__["default"], {
    heading: "Cart"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {
    align: "start",
    direction: {
      base: "column",
      md: "row"
    },
    spacing: {
      base: "1rem",
      md: "3rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CartList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: hydratedCart
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Summary__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: hydratedCart
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartBlock);

/***/ }),

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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/color-mode/dist/chakra-ui-color-mode.esm.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");
/* harmony import */ var components_BackButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/BackButton */ "./src/components/BackButton/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function PageHeader(_ref) {
  var _ref$heading = _ref.heading,
      heading = _ref$heading === void 0 ? "" : _ref$heading,
      description = _ref.description,
      image = _ref.image,
      onBack = _ref.onBack;
  var headerBg = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorModeValue)("gray.50", "gray.700");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, _extends({
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.HStack, {
    spacing: {
      base: "0.75rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_BackButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: image ? "blur" : "alpha",
    onBack: onBack
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.VStack, {
    align: "start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Heading, {
    as: "h1",
    size: "h1",
    color: image && "white",
    textTransform: "capitalize"
  }, heading), description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_SectionWrapper__WEBPACK_IMPORTED_MODULE_2__["default"], {
    heading: {
      text: "Popular"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {
    px: {
      base: "1rem",
      md: "1.5rem"
    },
    pb: {
      base: "1rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_ProductsGrid__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/* harmony import */ var _fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fluentui/react-icons */ "./node_modules/@fluentui/react-icons/lib/icons/chunk-0.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/index.js");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "./node_modules/@chakra-ui/layout/dist/chakra-ui-layout.esm.js");






function SectionWrapper(_ref) {
  var heading = _ref.heading,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, null, heading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
    spacing: "0",
    align: "start",
    p: {
      base: "1rem",
      md: "1.5rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
    spacing: "2rem",
    justify: {
      base: "space-between",
      md: "start"
    },
    align: "baseline",
    w: "100%"
  }, heading.text && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
    as: "h2",
    size: "h2"
  }, heading.text), heading.to && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
    as: react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link,
    to: heading.to,
    color: "orange.400"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
    spacing: "0.25rem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
    variant: "small"
  }, "See all"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_fluentui_react_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowRightFilled, null)))), heading.description && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
    variant: "muted"
  }, heading.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, null, children));
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

/***/ }),

/***/ "./src/pages/Cart/index.js":
/*!*********************************!*\
  !*** ./src/pages/Cart/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var components_CartBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/CartBlock */ "./src/components/CartBlock/index.js");
/* harmony import */ var components_PopularSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/PopularSection */ "./src/components/PopularSection/index.js");
/* harmony import */ var components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Title */ "./src/components/Title/index.js");





function Cart() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_Title__WEBPACK_IMPORTED_MODULE_3__["default"], {
    postfix: "Cart"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_CartBlock__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(components_PopularSection__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ })

}]);
//# sourceMappingURL=src_pages_Cart_index_js.app.bundle.js.map