(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

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

/***/ "./resources/js/containers/user/helpers/getLoadRoleOptions.js":
/*!********************************************************************!*\
  !*** ./resources/js/containers/user/helpers/getLoadRoleOptions.js ***!
  \********************************************************************/
/*! exports provided: getRoleOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoleOptions", function() { return getRoleOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getLoadRoleOptions; });
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/User */ "./resources/js/models/User.js");

function getRoleOptions(t) {
  return [{
    label: t("user.role.".concat(_models_User__WEBPACK_IMPORTED_MODULE_0__["ROLE_SYSTEM_ADMINISTRATOR"])),
    value: _models_User__WEBPACK_IMPORTED_MODULE_0__["ROLE_SYSTEM_ADMINISTRATOR"]
  }, {
    label: t("user.role.".concat(_models_User__WEBPACK_IMPORTED_MODULE_0__["ROLE_COMPANY_ADMINISTRATOR"])),
    value: _models_User__WEBPACK_IMPORTED_MODULE_0__["ROLE_COMPANY_ADMINISTRATOR"]
  }, {
    label: t("user.role.".concat(_models_User__WEBPACK_IMPORTED_MODULE_0__["ROLE_OPERATOR"])),
    value: _models_User__WEBPACK_IMPORTED_MODULE_0__["ROLE_OPERATOR"]
  }];
}
function getLoadRoleOptions(t) {
  return function loadRoleOptions() {
    return new Promise(function (resolve) {
      resolve(getRoleOptions(t));
    });
  };
}

/***/ })

}]);