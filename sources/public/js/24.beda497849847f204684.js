(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/react-select/dist/react-select.browser.esm.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-select/dist/react-select.browser.esm.js ***!
  \********************************************************************/
/*! exports provided: components, createFilter, defaultTheme, mergeStyles, default, NonceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonceProvider", function() { return NonceProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-4322c0ed.browser.esm.js */ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__["y"]; });

/* harmony import */ var _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Select-9fdb8cd0.browser.esm.js */ "./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createFilter", function() { return _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultTheme", function() { return _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mergeStyles", function() { return _Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["m"]; });

/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./stateManager-04f734a2.browser.esm.js */ "./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js");
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/cache */ "./node_modules/@emotion/cache/dist/cache.browser.esm.js");














function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var NonceProvider =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(NonceProvider, _Component);

  function NonceProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.createEmotionCache = function (nonce) {
      return Object(_emotion_cache__WEBPACK_IMPORTED_MODULE_11__["default"])({
        nonce: nonce
      });
    };

    _this.createEmotionCache = Object(memoize_one__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.createEmotionCache);
    return _this;
  }

  var _proto = NonceProvider.prototype;

  _proto.render = function render() {
    var emotionCache = this.createEmotionCache(this.props.nonce);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_emotion_core__WEBPACK_IMPORTED_MODULE_2__["CacheProvider"], {
      value: emotionCache
    }, this.props.children);
  };

  return NonceProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var index = Object(_stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["m"])(_Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["S"]);

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./resources/js/components/form/PhoneField.js":
/*!****************************************************!*\
  !*** ./resources/js/components/form/PhoneField.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function PhoneField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      _onChange = _ref.onChange,
      className = _ref.className,
      fieldProps = _objectWithoutProperties(_ref, ["id", "label", "errors", "name", "onChange", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], _extends({
    id: id,
    name: name,
    type: "tel",
    onChange: function onChange(e) {
      var val = e.target.value;
      var regExp = /^[\+]?[0-9]*$/; // eslint-disable-line

      var isNumber = regExp.test(val);
      isNumber && _onChange(e);
    }
  }, fieldProps, {
    invalid: !!((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
  })), ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Errors__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errors: errors[name]
  }) : null);
}

PhoneField.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PhoneField));

/***/ }),

/***/ "./resources/js/components/form/SelectField.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/form/SelectField.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var selectStyles = {
  control: function control(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      "&, &:hover, &:focus": {
        borderColor: "#ced4da",
        boxShadow: "none"
      }
    });
  }
};

function SelectField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      setFieldValue = _ref.setFieldValue,
      options = _ref.options,
      value = _ref.value,
      className = _ref.className,
      placeholder = _ref.placeholder,
      isClearable = _ref.isClearable,
      isDisabled = _ref.isDisabled;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  var index = options.findIndex(function (option) {
    return option.value === value;
  });
  var selectVal = index === -1 ? null : options[index];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id,
    name: name,
    isDisabled: isDisabled,
    onChange: function onChange(option) {
      return setFieldValue(name, option ? option.value : null);
    },
    options: options,
    value: selectVal,
    isClearable: isClearable,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("select-field", {
      "is-invalid": !!((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
    }),
    placeholder: placeholder ? placeholder : t("common.default-select-placeholder"),
    styles: selectStyles
  }), ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Errors__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errors: errors[name]
  }) : null);
}

SelectField.defaultProps = {
  isClearable: true
};
SelectField.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isClearable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SelectField));

/***/ }),

/***/ "./resources/js/components/form/TagsField.js":
/*!***************************************************!*\
  !*** ./resources/js/components/form/TagsField.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);







function TagsField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      setFieldValue = _ref.setFieldValue,
      options = _ref.options,
      value = _ref.value,
      formGroupClass = _ref.formGroupClass;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(formGroupClass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: id,
    name: name,
    onChange: function onChange(value) {
      return setFieldValue(name, value);
    },
    isMulti: true,
    options: options,
    value: value,
    isClearable: true,
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
      "is-invalid": !!((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
    })
  }), ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Errors__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errors: errors[name]
  }) : null);
}

TagsField.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  formGroupClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TagsField));

/***/ }),

/***/ "./resources/js/components/form/base/ImageInput/helpers/sendImage.js":
/*!***************************************************************************!*\
  !*** ./resources/js/components/form/base/ImageInput/helpers/sendImage.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sendImage; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function sendImage(file) {
  var formData = new FormData();
  formData.append("file", file);
  return _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("post", "/methods/image", {}, formData);
}

/***/ }),

/***/ "./resources/js/components/widgets/Accordion.js":
/*!******************************************************!*\
  !*** ./resources/js/components/widgets/Accordion.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




function Accordion(_ref) {
  var items = _ref.items;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, items.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      className: "btn-notification mt-4 mb-0 w-100 rounded-0",
      color: "",
      onClick: function onClick() {
        return setOpen(open === index ? null : index);
      }
    }, item.renderButton()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpen: open === index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
      className: "mb-2 rounded-0 border-top-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
      className: "border-0"
    }, item.renderContent()))));
  }));
}
Accordion.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    renderButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    renderContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  })).isRequired
};

/***/ }),

/***/ "./resources/js/components/widgets/SuccessAlert.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/widgets/SuccessAlert.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SuccessAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-sweetalert */ "./node_modules/react-bootstrap-sweetalert/dist/index.js");
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2__);



function SuccessAlert(_ref) {
  var show = _ref.show,
      text = _ref.text,
      onConfirm = _ref.onConfirm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "",
    show: show,
    onConfirm: onConfirm,
    type: "success"
  }, text);
}
SuccessAlert.propTypes = {
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./resources/js/containers/user/UserEdit.js":
/*!**************************************************!*\
  !*** ./resources/js/containers/user/UserEdit.js ***!
  \**************************************************/
/*! exports provided: SCREEN_MAIN_SETTINGS, SCREEN_NOTIFICATIONS_SETTINGS, SCREEN_DEPARTMENTS_SETTINGS, SCREEN_DEFAULT_MESSAGE_SETTINGS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_MAIN_SETTINGS", function() { return SCREEN_MAIN_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_NOTIFICATIONS_SETTINGS", function() { return SCREEN_NOTIFICATIONS_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_DEPARTMENTS_SETTINGS", function() { return SCREEN_DEPARTMENTS_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCREEN_DEFAULT_MESSAGE_SETTINGS", function() { return SCREEN_DEFAULT_MESSAGE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var _containers_user_editComponents_ChangePasswordBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/user/editComponents/ChangePasswordBlock */ "./resources/js/containers/user/editComponents/ChangePasswordBlock.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/User */ "./resources/js/models/User.js");
/* harmony import */ var _containers_user_editComponents_ChangeInfoBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/user/editComponents/ChangeInfoBlock */ "./resources/js/containers/user/editComponents/ChangeInfoBlock.js");
/* harmony import */ var _containers_user_editComponents_ChangeNotificationSettingsBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/user/editComponents/ChangeNotificationSettingsBlock */ "./resources/js/containers/user/editComponents/ChangeNotificationSettingsBlock.js");
/* harmony import */ var _containers_user_editComponents_ChangeDefaultMessageBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/user/editComponents/ChangeDefaultMessageBlock */ "./resources/js/containers/user/editComponents/ChangeDefaultMessageBlock.js");
/* harmony import */ var _containers_user_editComponents_ChangeDepartmentsBlock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/user/editComponents/ChangeDepartmentsBlock */ "./resources/js/containers/user/editComponents/ChangeDepartmentsBlock.js");
/* harmony import */ var _containers_user_editComponents_PageLayout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/user/editComponents/PageLayout */ "./resources/js/containers/user/editComponents/PageLayout.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_auth_actionCreators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/redux/reducers/auth/actionCreators */ "./resources/js/redux/reducers/auth/actionCreators.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

















var SCREEN_MAIN_SETTINGS = "main-settings";
var SCREEN_NOTIFICATIONS_SETTINGS = "notifications-settings";
var SCREEN_DEPARTMENTS_SETTINGS = "departments-settings";
var SCREEN_DEFAULT_MESSAGE_SETTINGS = "default-message-settings";
function UserEdit() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(SCREEN_MAIN_SETTINGS),
      _useState4 = _slicedToArray(_useState3, 2),
      screen = _useState4[0],
      setScreen = _useState4[1];

  var params = Object(react_router__WEBPACK_IMPORTED_MODULE_13__["useParams"])();
  var userId = params.id;
  var authUser = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_10__["default"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_11__["useDispatch"])();

  var changeScreen = function changeScreen(screen) {
    setScreen(user.isSystemAdministrator ? SCREEN_MAIN_SETTINGS : screen);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var cancelTokenSource = axios__WEBPACK_IMPORTED_MODULE_15___default.a.CancelToken.source();
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__["default"].call("get", "/methods/user/".concat(userId), {}, {}, {
      cancelToken: cancelTokenSource.token
    }).then(function (response) {
      setUser(response.data ? new _models_User__WEBPACK_IMPORTED_MODULE_4__["default"](response.data) : null);
    });
    return function clean() {
      cancelTokenSource.cancel();
    };
  }, [userId, setUser]);

  var updateInfo = function updateInfo(data) {
    var newUser = user.set("name", data.name).set("email", data.email).set("phone", data.phone).set("image_id", data.image_id).set("image", data.image).set("departments", data.departments);
    setUser(newUser);

    if (+authUser.id === +userId) {
      dispatch(Object(_redux_reducers_auth_actionCreators__WEBPACK_IMPORTED_MODULE_12__["setAuthUser"])(data));
    }
  };

  var updateImage = function updateImage(image) {
    setUser(user.set("image_id", image.id).set("image", image));
  };

  var content = null;

  if (!user) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_14__["default"], null);
  } else {
    switch (screen) {
      case SCREEN_MAIN_SETTINGS:
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_user_editComponents_PageLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          user: user,
          screen: screen,
          setScreen: changeScreen,
          afterImageChanged: updateImage
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_user_editComponents_ChangeInfoBlock__WEBPACK_IMPORTED_MODULE_5__["default"], {
          user: user,
          afterSave: updateInfo
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_user_editComponents_ChangePasswordBlock__WEBPACK_IMPORTED_MODULE_2__["default"], {
          user: user
        }));
        break;

      case SCREEN_NOTIFICATIONS_SETTINGS:
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_user_editComponents_PageLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          user: user,
          screen: screen,
          setScreen: changeScreen,
          afterImageChanged: updateImage
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_user_editComponents_ChangeNotificationSettingsBlock__WEBPACK_IMPORTED_MODULE_6__["default"], {
          user: user
        }));
        break;

      case SCREEN_DEPARTMENTS_SETTINGS:
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_user_editComponents_PageLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          user: user,
          screen: screen,
          setScreen: changeScreen,
          afterImageChanged: updateImage
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_user_editComponents_ChangeDepartmentsBlock__WEBPACK_IMPORTED_MODULE_8__["default"], {
          user: user,
          afterSave: updateInfo
        }));
        break;

      case SCREEN_DEFAULT_MESSAGE_SETTINGS:
        content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_user_editComponents_PageLayout__WEBPACK_IMPORTED_MODULE_9__["default"], {
          user: user,
          screen: screen,
          setScreen: changeScreen,
          afterImageChanged: updateImage
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_user_editComponents_ChangeDefaultMessageBlock__WEBPACK_IMPORTED_MODULE_7__["default"], {
          user: user
        }));
        break;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    pagesAddClass: "page-bg-gray"
  }, content);
}

/***/ }),

/***/ "./resources/js/containers/user/editComponents/ChangeDefaultMessageBlock.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/containers/user/editComponents/ChangeDefaultMessageBlock.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeDefaultMessageBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/models/User */ "./resources/js/models/User.js");
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/widgets/SuccessAlert */ "./resources/js/components/widgets/SuccessAlert.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function ChangeDefaultMessageBlock(_ref) {
  var user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      infoChanged = _useState2[0],
      setInfoChanged = _useState2[1];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var handleSubmit = function handleSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
        setErrors = _ref2.setErrors;
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__["default"].call("patch", "/methods/user/".concat(user.id), {}, values).then(function () {
      setInfoChanged(true);
    }).validation(function (message, errors) {
      setErrors(errors);
    });
    setSubmitting(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: infoChanged,
    text: t("user.default-conversation-message.default-conversation-message-changed-message"),
    onConfirm: function onConfirm() {
      return setInfoChanged(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    initialValues: {
      default_conversation_message: user.default_conversation_message
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref3) {
      var handleChange = _ref3.handleChange,
          handleBlur = _ref3.handleBlur,
          values = _ref3.values,
          errors = _ref3.errors,
          isSubmitting = _ref3.isSubmitting;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "default-message",
        id: "default_conversation_message",
        name: "default_conversation_message",
        type: "textarea",
        label: t("user.default-conversation-message.default-conversation-message-label"),
        placeholder: t("user.default-conversation-message.default-conversation-message-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.default_conversation_message,
        errors: errors,
        rows: "6"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "pt-2 px-4 my-4",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  }));
}
ChangeDefaultMessageBlock.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_User__WEBPACK_IMPORTED_MODULE_6__["default"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/user/editComponents/ChangeDepartmentsBlock.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/containers/user/editComponents/ChangeDepartmentsBlock.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeDepartmentsBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/models/User */ "./resources/js/models/User.js");
/* harmony import */ var _components_form_TagsField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/TagsField */ "./resources/js/components/form/TagsField.js");
/* harmony import */ var _components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/widgets/SuccessAlert */ "./resources/js/components/widgets/SuccessAlert.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function ChangeDepartmentsBlock(_ref) {
  var user = _ref.user,
      afterSave = _ref.afterSave;
  var userId = user.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      infoChanged = _useState2[0],
      setInfoChanged = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      companyDepartments = _useState4[0],
      setCompanyDepartments = _useState4[1];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__["default"].call("get", "/methods/user/".concat(userId, "/departments")).then(function (response) {
      var formattedDepartments = response.data.map(function (department) {
        return {
          label: department.name,
          value: department.id
        };
      });
      setCompanyDepartments(formattedDepartments);
    });
  }, [userId]);

  var handleSubmit = function handleSubmit(_ref2, _ref3) {
    var departments = _ref2.departments;
    var setSubmitting = _ref3.setSubmitting,
        setErrors = _ref3.setErrors;
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__["default"].call("patch", "/methods/user/".concat(user.id), {}, {
      departments: departments ? departments.map(function (selectOption) {
        return selectOption.value;
      }) : []
    }).then(function (response) {
      afterSave(response.data);
      setInfoChanged(true);
    }).validation(function (message, errors) {
      setErrors(errors);
    })["finally"](function () {
      setSubmitting(false);
    });
  };

  if (!companyDepartments) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 7
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: infoChanged,
    text: t("user.departments.departments-changed-message"),
    onConfirm: function onConfirm() {
      return setInfoChanged(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    initialValues: {
      departments: user.departments.map(function (department) {
        return {
          label: department.name,
          value: department.id
        };
      })
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref4) {
      var setFieldValue = _ref4.setFieldValue,
          handleBlur = _ref4.handleBlur,
          values = _ref4.values,
          errors = _ref4.errors,
          isSubmitting = _ref4.isSubmitting;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TagsField__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: "departments",
        name: "departments",
        label: t("user.departments.departments-label"),
        options: companyDepartments,
        setFieldValue: setFieldValue,
        onBlur: handleBlur,
        value: values.departments,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "pt-2 px-4 my-4",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  }));
}
ChangeDepartmentsBlock.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_User__WEBPACK_IMPORTED_MODULE_6__["default"]).isRequired,
  afterSave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/user/editComponents/ChangeInfoBlock.js":
/*!************************************************************************!*\
  !*** ./resources/js/containers/user/editComponents/ChangeInfoBlock.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeInfoBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/models/User */ "./resources/js/models/User.js");
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_form_PhoneField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/form/PhoneField */ "./resources/js/components/form/PhoneField.js");
/* harmony import */ var _components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/SuccessAlert */ "./resources/js/components/widgets/SuccessAlert.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");
/* harmony import */ var _components_form_SelectField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/form/SelectField */ "./resources/js/components/form/SelectField.js");
/* harmony import */ var _helpers_momentInstance__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/helpers/momentInstance */ "./resources/js/helpers/momentInstance.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function ChangeInfoBlock(_ref) {
  var user = _ref.user,
      afterSave = _ref.afterSave;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      infoChanged = _useState2[0],
      setInfoChanged = _useState2[1];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var handleSubmit = function handleSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
        setErrors = _ref2.setErrors;
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__["default"].call("patch", "/methods/user/".concat(user.id), {}, values).then(function (response) {
      setInfoChanged(true);
      afterSave(response.data);
    }).validation(function (message, errors) {
      setErrors(errors);
    });
    setSubmitting(false);
  };

  var momentDate = Object(_helpers_momentInstance__WEBPACK_IMPORTED_MODULE_12__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_13__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: infoChanged,
    text: t("user.user-info.info-changed-message"),
    onConfirm: function onConfirm() {
      return setInfoChanged(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    initialValues: {
      name: user.name,
      email: user.email,
      phone: user.phone,
      is_am_pm: user.is_am_pm,
      preferred_date_format: user.preferred_date_format
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref3) {
      var handleChange = _ref3.handleChange,
          handleBlur = _ref3.handleBlur,
          values = _ref3.values,
          errors = _ref3.errors,
          isSubmitting = _ref3.isSubmitting,
          setFieldValue = _ref3.setFieldValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "limiter",
        id: "name",
        name: "name",
        label: t("user.user-info.name-label"),
        placeholder: t("user.user-info.name-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.name || "",
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "limiter",
        id: "email",
        name: "email",
        type: "email",
        label: t("user.user-info.email-label"),
        placeholder: t("user.user-info.email-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.email || "",
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_PhoneField__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "limiter",
        id: "phone",
        name: "phone",
        label: t("user.user-info.phone-label"),
        placeholder: t("user.user-info.phone-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.phone || "",
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "is-am-pm",
        name: "is_am_pm",
        label: t("user.user-info.show-am-pm-time-format-label"),
        setFieldValue: setFieldValue,
        onBlur: handleBlur,
        value: values.is_am_pm,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SelectField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "limiter",
        id: "preferred-format",
        label: t("user.user-info.date-format-label"),
        placeholder: t("user.user-info.date-format-placeholder"),
        name: "preferred_date_format",
        setFieldValue: setFieldValue,
        onBlur: handleBlur,
        value: values.preferred_date_format,
        errors: errors,
        options: [{
          label: momentDate.format("MM/DD/YYYY"),
          value: "MM/DD/YYYY"
        }, {
          label: momentDate.format("DD.MM.YYYY"),
          value: "DD.MM.YYYY"
        }]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "pt-2 px-4 my-4",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  }));
}
ChangeInfoBlock.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_User__WEBPACK_IMPORTED_MODULE_6__["default"]).isRequired,
  afterSave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/user/editComponents/ChangeNotificationSettingsBlock.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/containers/user/editComponents/ChangeNotificationSettingsBlock.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeNotificationSettingsBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/models/User */ "./resources/js/models/User.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");
/* harmony import */ var _components_widgets_Accordion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/widgets/Accordion */ "./resources/js/components/widgets/Accordion.js");
/* harmony import */ var _components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/SuccessAlert */ "./resources/js/components/widgets/SuccessAlert.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function ChangeNotificationSettingsBlock(_ref) {
  var user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      infoChanged = _useState2[0],
      setInfoChanged = _useState2[1];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var notificationSettings = user.user_notifications_setting;

  var handleSubmit = function handleSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
        setErrors = _ref2.setErrors;
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__["default"].call("patch", "/methods/user/notifications-settings/".concat(notificationSettings.id), {}, values).then(function () {
      setInfoChanged(true);
    }).validation(function (message, errors) {
      setErrors(errors);
    });
    setSubmitting(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    xl: 7,
    lg: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_9__["default"], {
    show: infoChanged,
    text: t("user.notifications.settings-changed-message"),
    onConfirm: function onConfirm() {
      return setInfoChanged(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    initialValues: {
      site_short_notifications: notificationSettings.site_short_notifications,
      site_long_notifications: notificationSettings.site_long_notifications,
      email_notifications_livechat_activity: notificationSettings.email_notifications_livechat_activity,
      email_notifications_chatbot_activity: notificationSettings.email_notifications_chatbot_activity,
      sms_notifications_livechat_activity: notificationSettings.sms_notifications_livechat_activity,
      sms_notifications_chatbot_activity: notificationSettings.sms_notifications_chatbot_activity
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref3) {
      var handleBlur = _ref3.handleBlur,
          values = _ref3.values,
          errors = _ref3.errors,
          isSubmitting = _ref3.isSubmitting,
          setFieldValue = _ref3.setFieldValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_Accordion__WEBPACK_IMPORTED_MODULE_8__["default"], {
        items: [{
          renderButton: function renderButton() {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaBell"], {
              className: "icon-size-15 mr-2 color-gray"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, t("user.notifications.title-notification-sound")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaSortDown"], {
              className: "icon-size-15 color-gray mb-2"
            }));
          },
          renderContent: function renderContent() {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_7__["default"], {
              formGroupClass: "p-2",
              id: "site_short_notifications",
              name: "site_short_notifications",
              label: t("user.notifications.site-short-notifications-label"),
              placeholder: t("user.notifications.site-short-notifications-placeholder"),
              setFieldValue: setFieldValue,
              onBlur: handleBlur,
              value: values.site_short_notifications,
              errors: errors
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_7__["default"], {
              formGroupClass: "p-2",
              id: "site_long_notifications",
              name: "site_long_notifications",
              label: t("user.notifications.site-long-notifications-label"),
              placeholder: t("user.notifications.site-long-notifications-placeholder"),
              setFieldValue: setFieldValue,
              onBlur: handleBlur,
              value: values.site_long_notifications,
              errors: errors
            }));
          }
        }, {
          renderButton: function renderButton() {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaSms"], {
              className: "icon-size-15 mr-2 color-gray"
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, t("user.notifications.title-notification-text")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaSortDown"], {
              className: "icon-size-15 color-gray mb-2"
            }));
          },
          renderContent: function renderContent() {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_7__["default"], {
              formGroupClass: "p-2",
              id: "email_notifications_livechat_activity",
              name: "email_notifications_livechat_activity",
              label: t("user.notifications.email-notifications-livechat-activity-label"),
              placeholder: t("user.notifications.email-notifications-livechat-activity-placeholder"),
              setFieldValue: setFieldValue,
              onBlur: handleBlur,
              value: values.email_notifications_livechat_activity,
              errors: errors
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_7__["default"], {
              formGroupClass: "p-2",
              id: "email_notifications_chatbot_activity",
              name: "email_notifications_chatbot_activity",
              label: t("user.notifications.email-notifications-chatbot-activity-label"),
              placeholder: t("user.notifications.email-notifications-chatbot-activity-placeholder"),
              setFieldValue: setFieldValue,
              onBlur: handleBlur,
              value: values.email_notifications_chatbot_activity,
              errors: errors
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_7__["default"], {
              formGroupClass: "p-2",
              id: "sms_notifications_livechat_activity",
              name: "sms_notifications_livechat_activity",
              label: t("user.notifications.sms-notifications-livechat-activity-label"),
              placeholder: t("user.notifications.sms-notifications-livechat-activity-placeholder"),
              setFieldValue: setFieldValue,
              onBlur: handleBlur,
              value: values.sms_notifications_livechat_activity,
              errors: errors
            }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_7__["default"], {
              formGroupClass: "p-2",
              id: "sms_notifications_chatbot_activity",
              name: "sms_notifications_chatbot_activity",
              label: t("user.notifications.sms-notifications-chatbot-activity-label"),
              placeholder: t("user.notifications.sms-notifications-chatbot-activity-placeholder"),
              setFieldValue: setFieldValue,
              onBlur: handleBlur,
              value: values.sms_notifications_chatbot_activity,
              errors: errors
            }));
          }
        }]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "pt-2 px-4 mt-5 mb-4",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  }));
}
ChangeNotificationSettingsBlock.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_User__WEBPACK_IMPORTED_MODULE_6__["default"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/user/editComponents/ChangePasswordBlock.js":
/*!****************************************************************************!*\
  !*** ./resources/js/containers/user/editComponents/ChangePasswordBlock.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangePasswordBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _components_form_PasswordField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/PasswordField */ "./resources/js/components/form/PasswordField.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/models/User */ "./resources/js/models/User.js");
/* harmony import */ var _components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/widgets/SuccessAlert */ "./resources/js/components/widgets/SuccessAlert.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function ChangePasswordBlock(_ref) {
  var user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      passwordChanged = _useState2[0],
      setPasswordChanged = _useState2[1];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var handleSubmit = function handleSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
        setErrors = _ref2.setErrors;
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__["default"].call("post", "/methods/user/".concat(user.id, "/update-password"), {}, values).then(function () {
      setPasswordChanged(true);
    }).validation(function (message, errors) {
      setErrors(errors);
    });
    setSubmitting(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: passwordChanged,
    text: t("user.password.password-changed-message"),
    onConfirm: function onConfirm() {
      return setPasswordChanged(false);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    initialValues: {
      password: "",
      password_confirmation: ""
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref3) {
      var handleChange = _ref3.handleChange,
          handleBlur = _ref3.handleBlur,
          values = _ref3.values,
          errors = _ref3.errors,
          isSubmitting = _ref3.isSubmitting;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_PasswordField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "limiter",
        id: "password",
        name: "password",
        label: t("user.password.password-label"),
        placeholder: t("user.password.password-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.password,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_PasswordField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "limiter",
        id: "password_confirmation",
        name: "password_confirmation",
        label: t("user.password.password-confirmation-label"),
        placeholder: t("user.password.password-confirmation-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.password_confirmation,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "pt-2 px-4 my-4",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  }));
}
ChangePasswordBlock.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_User__WEBPACK_IMPORTED_MODULE_7__["default"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/user/editComponents/PageLayout.js":
/*!*******************************************************************!*\
  !*** ./resources/js/containers/user/editComponents/PageLayout.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_user_UserEdit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/user/UserEdit */ "./resources/js/containers/user/UserEdit.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/User */ "./resources/js/models/User.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_user_editComponents_UserAvatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/user/editComponents/UserAvatar */ "./resources/js/containers/user/editComponents/UserAvatar.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var _components_widgets_LangSwitcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/LangSwitcher */ "./resources/js/components/widgets/LangSwitcher.js");










function PageLayout(_ref) {
  var _user$company;

  var user = _ref.user,
      screen = _ref.screen,
      children = _ref.children,
      setScreen = _ref.setScreen,
      afterImageChanged = _ref.afterImageChanged;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  var authUser = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_8__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 4
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "mb-5 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "d-flex flex-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mr-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_user_editComponents_UserAvatar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    afterSave: afterImageChanged,
    user: user,
    editable: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-large font-weight-bold mb-1"
  }, user.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    className: "user-info-table mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, user.isSystemAdministrator ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, t("user.user-info-block.company")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, (_user$company = user.company) === null || _user$company === void 0 ? void 0 : _user$company.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, t("user.user-info-block.department")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, user.departments.map(function (d) {
    return d.name;
  }).join(", ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, t("user.user-info-block.role")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, t("user.role.".concat(user.role)))))), authUser.id === user.id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_LangSwitcher__WEBPACK_IMPORTED_MODULE_9__["default"], {
    toggleClass: "user-language px-0 btn-noShadow"
  }) : null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    xl: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
    className: "mb-5 card-navbar shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardHeader"], {
    className: "p-0"
  }, user.isSystemAdministrator ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation-bar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation-bar w-100 d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("navigation-item rounded-top w-100 py-2 px-3", {
      active: screen === _containers_user_UserEdit__WEBPACK_IMPORTED_MODULE_4__["SCREEN_MAIN_SETTINGS"]
    }),
    onClick: function onClick() {
      return setScreen(_containers_user_UserEdit__WEBPACK_IMPORTED_MODULE_4__["SCREEN_MAIN_SETTINGS"]);
    }
  }, t("user.settings-menu.personal-data")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("navigation-item rounded-top w-100 py-2 px-3", {
      active: screen === _containers_user_UserEdit__WEBPACK_IMPORTED_MODULE_4__["SCREEN_NOTIFICATIONS_SETTINGS"]
    }),
    onClick: function onClick() {
      return setScreen(_containers_user_UserEdit__WEBPACK_IMPORTED_MODULE_4__["SCREEN_NOTIFICATIONS_SETTINGS"]);
    }
  }, t("user.settings-menu.notifications")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("navigation-item rounded-top w-100 py-2 px-3", {
      active: screen === _containers_user_UserEdit__WEBPACK_IMPORTED_MODULE_4__["SCREEN_DEPARTMENTS_SETTINGS"]
    }),
    onClick: function onClick() {
      return setScreen(_containers_user_UserEdit__WEBPACK_IMPORTED_MODULE_4__["SCREEN_DEPARTMENTS_SETTINGS"]);
    }
  }, t("user.settings-menu.settings")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("navigation-item rounded-top w-100 py-2 px-3", {
      active: screen === _containers_user_UserEdit__WEBPACK_IMPORTED_MODULE_4__["SCREEN_DEFAULT_MESSAGE_SETTINGS"]
    }),
    onClick: function onClick() {
      return setScreen(_containers_user_UserEdit__WEBPACK_IMPORTED_MODULE_4__["SCREEN_DEFAULT_MESSAGE_SETTINGS"]);
    }
  }, t("user.settings-menu.live-chat"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
    className: "px-4 rounded-bottom"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, children)))));
}
PageLayout.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_User__WEBPACK_IMPORTED_MODULE_5__["default"]).isRequired,
  screen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setScreen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  afterImageChanged: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/***/ }),

/***/ "./resources/js/containers/user/editComponents/UserAvatar.js":
/*!*******************************************************************!*\
  !*** ./resources/js/containers/user/editComponents/UserAvatar.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserAvatar; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ "./resources/js/models/User.js");
/* harmony import */ var _components_form_base_ImageInput_helpers_sendImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/base/ImageInput/helpers/sendImage */ "./resources/js/components/form/base/ImageInput/helpers/sendImage.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_auth_actionCreators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/redux/reducers/auth/actionCreators */ "./resources/js/redux/reducers/auth/actionCreators.js");
/* harmony import */ var _helpers_getUserAvatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/getUserAvatar */ "./resources/js/helpers/getUserAvatar.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }












function updateUserImage(userId, imageId) {
  return _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_5__["default"].call("patch", "/methods/user/".concat(userId), {}, {
    image_id: imageId
  });
}

function UserAvatar(_ref) {
  var user = _ref.user,
      afterSave = _ref.afterSave,
      editable = _ref.editable;
  var authUser = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();

  var onChange = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var files;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              files = e.target.files;

              if (files.length) {
                Object(_components_form_base_ImageInput_helpers_sendImage__WEBPACK_IMPORTED_MODULE_4__["default"])(files[0]).then(function (imageResponse) {
                  var image = imageResponse.data;
                  updateUserImage(user.id, image.id).then(function () {
                    if (user.id === authUser.id) {
                      dispatch(Object(_redux_reducers_auth_actionCreators__WEBPACK_IMPORTED_MODULE_8__["updateAuthUserImage"])(image));
                    }

                    afterSave(image);
                  });
                });
              }

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function onChange(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    className: "user-avatar d-block position-relative mb-4 pb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "user-photo-block rounded-circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: Object(_helpers_getUserAvatar__WEBPACK_IMPORTED_MODULE_9__["default"])(user.imageUrl),
    alt: user.name,
    className: "user-photo"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    className: "d-none",
    type: "file",
    multiple: false,
    accept: "image/*",
    onChange: onChange,
    disabled: !editable
  }), editable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "photo-cam-bg position-absolute"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaCameraRetro"], {
    className: "photo-icon icon-size-25 color-gray position-absolute"
  })) : null);
}
UserAvatar.propTypes = {
  user: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(_models_User__WEBPACK_IMPORTED_MODULE_3__["default"]).isRequired,
  afterSave: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  editable: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./resources/js/helpers/momentInstance.js":
/*!************************************************!*\
  !*** ./resources/js/helpers/momentInstance.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/locale/es */ "./node_modules/moment/locale/es.js");
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_0__);
var moment = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");


moment.locale(window.locale);
/* harmony default export */ __webpack_exports__["default"] = (moment);

/***/ })

}]);