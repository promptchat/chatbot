(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./resources/js/components/form/CreatableSelectField.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/form/CreatableSelectField.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreatableSelectField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/creatable */ "./node_modules/react-select/creatable/dist/react-select.browser.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_form_base_Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
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
function CreatableSelectField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      setFieldValue = _ref.setFieldValue,
      value = _ref.value,
      className = _ref.className,
      placeholder = _ref.placeholder,
      isClearable = _ref.isClearable,
      isDisabled = _ref.isDisabled,
      options = _ref.options;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_creatable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    options: options,
    onChange: function onChange(newOptions) {
      setFieldValue(name, newOptions);
    },
    value: value,
    isClearable: isClearable,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      "is-invalid": !!((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
    }),
    placeholder: placeholder ? placeholder : t("common.default-select-placeholder"),
    styles: selectStyles,
    isMulti: true,
    isDisabled: isDisabled
  }), ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_Errors__WEBPACK_IMPORTED_MODULE_4__["default"], {
    errors: errors[name]
  }) : null);
}
CreatableSelectField.defaultProps = {
  isClearable: true
};
CreatableSelectField.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number])
  }), prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  isClearable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,
  options: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array])
};

/***/ }),

/***/ "./resources/js/components/form/DateField.js":
/*!***************************************************!*\
  !*** ./resources/js/components/form/DateField.js ***!
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_form_base_DateInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/base/DateInput */ "./resources/js/components/form/base/DateInput.js");







function DateField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      className = _ref.className,
      value = _ref.value,
      setFieldValue = _ref.setFieldValue,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      customInput = _ref.customInput;
  var isInvalidClass = classnames__WEBPACK_IMPORTED_MODULE_4___default()({
    "is-invalid": errors && ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className)
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: id
  }, typeof label === "function" ? label() : label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_DateInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: id,
    name: name,
    value: value,
    onChange: function onChange(date) {
      return setFieldValue(name, date);
    },
    formGroupClass: classnames__WEBPACK_IMPORTED_MODULE_4___default()("py-0", isInvalidClass),
    inputClass: isInvalidClass,
    minDate: minDate,
    maxDate: maxDate,
    customInput: customInput
  }), errors && ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Errors__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errors: errors[name]
  }) : null);
}

DateField.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  minDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  maxDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  customInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DateField));

/***/ }),

/***/ "./resources/js/components/form/NumberField.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/form/NumberField.js ***!
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function NumberField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      _onChange = _ref.onChange,
      className = _ref.className,
      _ref$phone = _ref.phone,
      phone = _ref$phone === void 0 ? false : _ref$phone,
      fieldProps = _objectWithoutProperties(_ref, ["id", "label", "errors", "name", "onChange", "className", "phone"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], _extends({
    id: id,
    name: name,
    type: "text",
    onChange: function onChange(e) {
      if (phone && e.target.value[0] !== "+") {
        e.target.value = "+" + e.target.value;
      }

      var val = e.target.value;
      var regExp = phone ? /^\+[0-9]*$/ : /^[0-9]*$/; // eslint-disable-line

      var isNumber = regExp.test(val);
      isNumber && _onChange(e);
    }
  }, fieldProps, {
    invalid: !!((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
  })), ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Errors__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errors: errors[name]
  }) : null);
}

NumberField.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  phone: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(NumberField));

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

/***/ "./resources/js/components/form/TimeField.js":
/*!***************************************************!*\
  !*** ./resources/js/components/form/TimeField.js ***!
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_form_base_TimeInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/base/TimeInput */ "./resources/js/components/form/base/TimeInput.js");







function TimeField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      className = _ref.className,
      value = _ref.value,
      setFieldValue = _ref.setFieldValue,
      minTime = _ref.minTime,
      maxTime = _ref.maxTime,
      disabled = _ref.disabled,
      date = _ref.date;
  var isInvalidClass = classnames__WEBPACK_IMPORTED_MODULE_4___default()({
    "is-invalid": errors && ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className)
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: id
  }, typeof label === "function" ? label() : label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_TimeInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: id,
    name: name,
    value: value,
    onChange: function onChange(date) {
      return setFieldValue(name, date);
    },
    formGroupClass: classnames__WEBPACK_IMPORTED_MODULE_4___default()("py-0", isInvalidClass),
    inputClass: isInvalidClass,
    minTime: minTime,
    maxTime: maxTime,
    disabled: disabled,
    date: date
  }), errors && ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Errors__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errors: errors[name]
  }) : null);
}

TimeField.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  minTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  maxTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TimeField));

/***/ }),

/***/ "./resources/js/components/form/base/DateInput.js":
/*!********************************************************!*\
  !*** ./resources/js/components/form/base/DateInput.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var _hooks_useGetDateFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useGetDateFormat */ "./resources/js/hooks/useGetDateFormat.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_momentDateFormatToDateSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/momentDateFormatToDateSelect */ "./resources/js/helpers/momentDateFormatToDateSelect.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);









function DateInput(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      customInput = _ref.customInput,
      placeholder = _ref.placeholder,
      formGroupClass = _ref.formGroupClass,
      inputClass = _ref.inputClass,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(react_datepicker__WEBPACK_IMPORTED_MODULE_3__["registerLocale"])(window.locale, date_fns_locale__WEBPACK_IMPORTED_MODULE_4__[window.locale]);
  }, []);
  var dateFormat = Object(_hooks_useGetDateFormat__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var inputDateFormat = Object(_helpers_momentDateFormatToDateSelect__WEBPACK_IMPORTED_MODULE_7__["default"])(dateFormat);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(formGroupClass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    selected: value ? new Date(value * 1000) : null,
    onChange: function onChange(date) {
      return _onChange(date ? Math.ceil(date.getTime() / 1000) : null);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("form-control", inputClass),
    dateFormat: inputDateFormat,
    customInput: customInput,
    placeholderText: placeholder,
    locale: window.locale,
    minDate: minDate,
    maxDate: maxDate
  }));
}
DateInput.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  customInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  formGroupClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  inputClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  minDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  maxDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

/***/ "./resources/js/components/form/base/TimeInput.js":
/*!********************************************************!*\
  !*** ./resources/js/components/form/base/TimeInput.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useGetDateTime */ "./resources/js/hooks/useGetDateTime.js");








function TimeInput(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      customInput = _ref.customInput,
      placeholder = _ref.placeholder,
      formGroupClass = _ref.formGroupClass,
      inputClass = _ref.inputClass,
      minTime = _ref.minTime,
      maxTime = _ref.maxTime,
      disabled = _ref.disabled,
      date = _ref.date;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(react_datepicker__WEBPACK_IMPORTED_MODULE_3__["registerLocale"])(window.locale, date_fns_locale__WEBPACK_IMPORTED_MODULE_4__[window.locale]);
  }, []);
  var inputTimeFormat = Object(_hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_7__["useUserTimeFormat"])();

  var filterPassedTime = function filterPassedTime(time) {
    var optionDate;

    if (date) {
      optionDate = new Date(date * 1000);
      optionDate.setHours(time.getHours());
      optionDate.setMinutes(time.getMinutes());
    } else {
      optionDate = new Date(time);
    }

    if (minTime && maxTime) {
      return minTime.getTime() < optionDate.getTime() && optionDate.getTime() < maxTime.getTime();
    }

    if (minTime) {
      return minTime.getTime() < optionDate.getTime();
    }

    if (maxTime) {
      return optionDate.getTime() < maxTime.getTime();
    }

    return true;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()(formGroupClass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    selected: value ? new Date(value * 1000) : null,
    onChange: function onChange(time) {
      var optionDate = time;

      if (date) {
        optionDate = new Date(date * 1000);
        optionDate.setHours(time.getHours());
        optionDate.setMinutes(time.getMinutes());
      }

      _onChange(optionDate.getTime() / 1000);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("form-control", inputClass),
    dateFormat: inputTimeFormat,
    customInput: customInput,
    placeholderText: placeholder,
    locale: window.locale,
    showTimeSelect: true,
    showTimeSelectOnly: true,
    timeIntervals: 1,
    timeFormat: inputTimeFormat,
    filterTime: filterPassedTime,
    disabled: disabled
  }));
}
TimeInput.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  customInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  formGroupClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  inputClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  minTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  maxTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

/***/ }),

/***/ "./resources/js/components/form/base/TimeTextInput.js":
/*!************************************************************!*\
  !*** ./resources/js/components/form/base/TimeTextInput.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-input-mask */ "./node_modules/react-input-mask/index.js");
/* harmony import */ var react_input_mask__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_input_mask__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function TimeTextInput(_ref) {
  var style = _ref.style,
      onChange = _ref.onChange,
      value = _ref.value,
      className = _ref.className;

  var beforeMaskedValueChange = function beforeMaskedValueChange(newState) {
    var value = newState.value,
        selection = newState.selection;
    value = value.split("");

    if (value[0] > 2) {
      value[1] = value[0];
      value[0] = 0;
      selection = {
        start: 3,
        end: 3
      };
    }

    if (+value[0] === 2 && value[1] > 3) {
      value[1] = 3;
    }

    return {
      value: value.join(""),
      selection: selection
    };
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_input_mask__WEBPACK_IMPORTED_MODULE_0___default.a, {
    className: className,
    style: style,
    onChange: onChange,
    mask: "99:59",
    maskChar: "0",
    value: value,
    formatChars: {
      "9": "[0-9]",
      "5": "[0-5]",
      "2": "[0-2]",
      a: "[A-Za-z]",
      "*": "[A-Za-z0-9]"
    },
    beforeMaskedValueChange: beforeMaskedValueChange
  });
}

TimeTextInput.propTypes = {
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (TimeTextInput);

/***/ }),

/***/ "./resources/js/components/widgets/PageTitle.js":
/*!******************************************************!*\
  !*** ./resources/js/components/widgets/PageTitle.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function PageTitle(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title-main mb-3"
  }, children);
}
PageTitle.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
};

/***/ }),

/***/ "./resources/js/containers/calendar/form/CalendarForm.js":
/*!***************************************************************!*\
  !*** ./resources/js/containers/calendar/form/CalendarForm.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _containers_calendar_form_CalendarFormView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/calendar/form/CalendarFormView */ "./resources/js/containers/calendar/form/CalendarFormView.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function CalendarForm(_ref) {
  var handleSubmit = _ref.handleSubmit,
      initialValues = _ref.initialValues;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    initialValues: initialValues,
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref2) {
      var values = _ref2.values,
          setFieldValue = _ref2.setFieldValue,
          errors = _ref2.errors,
          setErrors = _ref2.setErrors,
          props = _objectWithoutProperties(_ref2, ["values", "setFieldValue", "errors", "setErrors"]);

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_calendar_form_CalendarFormView__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
        setFieldValue: setFieldValue,
        values: values,
        errors: errors,
        setErrors: setErrors
      }, props));
    }
  });
}

CalendarForm.propTypes = {
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarForm);

/***/ }),

/***/ "./resources/js/containers/calendar/form/CalendarFormView.js":
/*!*******************************************************************!*\
  !*** ./resources/js/containers/calendar/form/CalendarFormView.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_form_NumberField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/NumberField */ "./resources/js/components/form/NumberField.js");
/* harmony import */ var _components_form_CreatableSelectField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/CreatableSelectField */ "./resources/js/components/form/CreatableSelectField.js");
/* harmony import */ var _containers_calendar_form_workDaysWidget_WorkDaysWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/calendar/form/workDaysWidget/WorkDaysWidget */ "./resources/js/containers/calendar/form/workDaysWidget/WorkDaysWidget.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _containers_calendar_form_calendar_CalendarWidget__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/calendar/form/calendar/CalendarWidget */ "./resources/js/containers/calendar/form/calendar/CalendarWidget.js");











function CalendarFormView(_ref) {
  var values = _ref.values,
      errors = _ref.errors,
      isSubmitting = _ref.isSubmitting,
      setFieldValue = _ref.setFieldValue,
      handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      setErrors = _ref.setErrors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: 4,
    className: "main-calendar-data"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "mb-5 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    className: "d-flex flex-wrap flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "limiter w-100",
    label: t("calendars.form.common-info.name-label"),
    placeholder: t("calendars.form.common-info.name-placeholder"),
    name: "name",
    value: values.name,
    errors: errors,
    onChange: handleChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "limiter w-100",
    label: t("calendars.form.common-info.calendar-name-label"),
    placeholder: t("calendars.form.common-info.calendar-name-placeholder"),
    name: "default_event_name",
    value: values.default_event_name,
    errors: errors,
    onChange: handleChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "limiter w-100",
    label: t("calendars.form.common-info.calendar-appointment_created_message-label"),
    placeholder: t("calendars.form.common-info.calendar-appointment_created_message-placeholder"),
    type: "textarea",
    name: "appointment_created_message",
    value: values.appointment_created_message,
    errors: errors,
    onChange: handleChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "limiter w-100",
    label: t("calendars.form.common-info.calendar-appointment_window_title-label"),
    placeholder: t("calendars.form.common-info.calendar-appointment_window_title-placeholder"),
    name: "appointment_window_title",
    value: values.appointment_window_title,
    errors: errors,
    onChange: handleChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_NumberField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "limiter w-100",
    label: t("calendars.form.common-info.event-duration-label"),
    placeholder: t("calendars.form.common-info.event-duration-placeholder"),
    name: "default_minutes_for_event",
    value: values.default_minutes_for_event,
    errors: errors,
    onChange: handleChange,
    onBlur: handleBlur
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CreatableSelectField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "limiter w-100",
    label: t("calendars.form.common-info.notifications-email-label"),
    name: "emails",
    errors: errors,
    value: values.emails,
    options: values.emails,
    setFieldValue: setFieldValue
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: 7,
    lg: 8
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "mb-5 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    className: "d-flex flex-wrap working-hours"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-large font-weight-bold"
  }, t("calendars.form.working-hours.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_calendar_form_workDaysWidget_WorkDaysWidget__WEBPACK_IMPORTED_MODULE_7__["default"], {
    value: values.working_hours,
    setFieldValue: setFieldValue,
    errors: errors
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xl: 11,
    lg: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    className: "mb-5 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardBody"], {
    className: "d-flex flex-wrap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_calendar_form_calendar_CalendarWidget__WEBPACK_IMPORTED_MODULE_9__["default"], {
    errors: errors,
    events: values.events,
    workingDays: values.working_hours,
    setFieldValue: setFieldValue,
    setErrors: setErrors,
    values: values
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "pt-2 px-4 mb-5",
    disabled: isSubmitting
  }, t("common.saveBtnText")))));
}

CalendarFormView.propTypes = {
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  isSubmitting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setErrors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarFormView);

/***/ }),

/***/ "./resources/js/containers/calendar/form/calendar/CalendarWidget.js":
/*!**************************************************************************!*\
  !*** ./resources/js/containers/calendar/form/calendar/CalendarWidget.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _containers_calendar_form_calendar_WorkingHourEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/calendar/form/calendar/WorkingHourEditor */ "./resources/js/containers/calendar/form/calendar/WorkingHourEditor.js");
/* harmony import */ var reactstrap_es_ModalBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/ModalBody */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap_es_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Modal */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var _containers_calendar_form_calendar_EventEditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/calendar/form/calendar/EventEditor */ "./resources/js/containers/calendar/form/calendar/EventEditor.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _containers_calendar_form_formDataToSubmit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/calendar/form/formDataToSubmit */ "./resources/js/containers/calendar/form/formDataToSubmit.js");
/* harmony import */ var react_big_calendar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-big-calendar */ "./node_modules/react-big-calendar/dist/react-big-calendar.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var localizer = Object(react_big_calendar__WEBPACK_IMPORTED_MODULE_10__["momentLocalizer"])(moment__WEBPACK_IMPORTED_MODULE_2___default.a);

function CalendarWidget(_ref) {
  var workingDays = _ref.workingDays,
      events = _ref.events,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors,
      setErrors = _ref.setErrors,
      values = _ref.values;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      _useState2 = _slicedToArray(_useState, 2),
      activeEventIndex = _useState2[0],
      setActiveEventIndex = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(-1),
      _useState4 = _slicedToArray(_useState3, 2),
      activeWorkingHourIndex = _useState4[0],
      setActiveWorkingHourIndex = _useState4[1];

  var isDayWorking = function isDayWorking(d) {
    var res = true;
    var index = workingDays.findIndex(function (workingDay) {
      return workingDay.get("day") === moment__WEBPACK_IMPORTED_MODULE_2___default()(d).format("YYYY-MM-DD");
    });

    if (index === -1) {
      index = workingDays.findIndex(function (workingDay) {
        return workingDay.get("day_of_week") === d.getDay();
      });
    }

    res &= !!workingDays.getIn([index, "working"]);
    return res;
  };

  var handleAddEvent = function handleAddEvent(day) {
    var newEventsList = events.push(Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])({
      id: "new_" + day.start.getTime(),
      name: values.default_event_name,
      username: "",
      email: "",
      user_phone: "",
      confirm_visitor: 0,
      client_id: null,
      start_time: Math.ceil(day.start.getTime() / 1000),
      end_time: Math.ceil(day.start.getTime() / 1000) + values.default_minutes_for_event * 60,
      isDraft: true,
      day: day
    }));
    setFieldValue("events", newEventsList);
    setActiveEventIndex(newEventsList.size - 1);
  };

  var handleSelectEvent = function handleSelectEvent(_ref2) {
    var resource = _ref2.resource;
    var index = events.findIndex(function (eventData) {
      return eventData.get("id").toString() === resource.toString();
    });

    if (index !== -1) {
      setActiveEventIndex(index);
    }
  };

  var handleCancelEventCreation = function handleCancelEventCreation() {
    if (events.getIn([activeEventIndex, "isDraft"])) {
      setFieldValue("events", events["delete"](activeEventIndex));
    }

    setActiveEventIndex(-1);
  };

  var confirmEventAddition = function confirmEventAddition() {
    var val = _objectSpread({}, values);

    val.events = val.events.setIn([activeEventIndex, "isDraft"], false);
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_8__["default"].call("post", "/methods/calendars/validate", {}, Object(_containers_calendar_form_formDataToSubmit__WEBPACK_IMPORTED_MODULE_9__["default"])(val)).validation(function (msg, errors) {
      var res = {};

      for (var key in errors) {
        if (errors.hasOwnProperty(key) && key.substr(0, 6) === "events") {
          res[key] = errors[key];
        }
      }

      setErrors(res);
    }).data(function () {
      setActiveEventIndex(-1);
    });
  };

  var addOrFindWorkingDay = function addOrFindWorkingDay(startDate) {
    var date = moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).format("YYYY-MM-DD");
    var workingDayIndex = workingDays.findIndex(function (workingDay) {
      return workingDay.get("day") === date;
    });

    if (workingDayIndex !== -1) {
      setActiveWorkingHourIndex(workingDayIndex);
    } else {
      var newWorkingDaysList = workingDays.push(Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])({
        id: "new_" + startDate.getTime(),
        day_of_week: startDate.getDay(),
        day: date,
        work_from: moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).format("HH:mm"),
        work_to: moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).format("HH:mm"),
        dinner_from: moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).format("HH:mm"),
        dinner_to: moment__WEBPACK_IMPORTED_MODULE_2___default()(startDate).format("HH:mm"),
        working: 1,
        isDraft: true
      }));
      setFieldValue("working_hours", newWorkingDaysList);
      setActiveWorkingHourIndex(newWorkingDaysList.size - 1);
    }
  };

  var handleAddSpecialSchedule = function handleAddSpecialSchedule() {
    var timestamp = +events.getIn([activeEventIndex, "start_time"]);
    addOrFindWorkingDay(new Date(timestamp * 1000));
    handleCancelEventCreation();
  };

  var handleCancelWorkingHourCreateOrEdit = function handleCancelWorkingHourCreateOrEdit() {
    if (workingDays.getIn([activeWorkingHourIndex, "isDraft"])) {
      setFieldValue("working_hours", workingDays["delete"](activeWorkingHourIndex));
    }

    setActiveWorkingHourIndex(-1);
  };

  var confirmWorkingHourAddition = function confirmWorkingHourAddition() {
    setFieldValue("working_hours", workingDays.setIn([activeWorkingHourIndex, "isDraft"], false));
    setActiveWorkingHourIndex(-1);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "calendar-container w-100"
  }, activeEventIndex !== -1 || activeWorkingHourIndex !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: true,
    toggle: activeWorkingHourIndex !== -1 ? handleCancelWorkingHourCreateOrEdit : handleCancelEventCreation,
    className: "confirm-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_ModalBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "p-4"
  }, activeEventIndex !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_calendar_form_calendar_EventEditor__WEBPACK_IMPORTED_MODULE_7__["default"], {
    index: activeEventIndex,
    allEvent: events,
    setFieldValue: setFieldValue,
    handleClose: handleCancelEventCreation,
    addSchedule: handleAddSpecialSchedule,
    handleConfirm: confirmEventAddition,
    errors: errors,
    eventDuration: +values.default_minutes_for_event
  }) : null, activeWorkingHourIndex !== -1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_calendar_form_calendar_WorkingHourEditor__WEBPACK_IMPORTED_MODULE_4__["default"], {
    errors: errors,
    setFieldValue: setFieldValue,
    workingDays: workingDays,
    index: activeWorkingHourIndex,
    handleClose: handleCancelWorkingHourCreateOrEdit,
    handleConfirm: confirmWorkingHourAddition
  }) : null)) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_big_calendar__WEBPACK_IMPORTED_MODULE_10__["Calendar"], {
    className: "calendar",
    views: ["month", "day"],
    dayPropGetter: function dayPropGetter(a) {
      return {
        className: isDayWorking(a) ? "working" : "holiday"
      };
    },
    selectable: true,
    onSelectSlot: handleAddEvent,
    localizer: localizer,
    onSelectEvent: handleSelectEvent,
    events: events.toJS().map(function (eventData) {
      return {
        resource: eventData.id,
        title: eventData.name,
        start: new Date(eventData.start_time * 1000),
        end: new Date(eventData.end_time * 1000)
      };
    }),
    startAccessor: "start",
    endAccessor: "end"
  }));
}

CalendarWidget.propTypes = {
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  workingDays: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setErrors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CalendarWidget);

/***/ }),

/***/ "./resources/js/containers/calendar/form/calendar/EventEditor.js":
/*!***********************************************************************!*\
  !*** ./resources/js/containers/calendar/form/calendar/EventEditor.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_form_PhoneField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/PhoneField */ "./resources/js/components/form/PhoneField.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");
/* harmony import */ var _components_form_TimeField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/TimeField */ "./resources/js/components/form/TimeField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_useGetDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/hooks/useGetDate */ "./resources/js/hooks/useGetDate.js");
/* harmony import */ var _components_form_DateField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/form/DateField */ "./resources/js/components/form/DateField.js");
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");












function EventEditor(_ref) {
  var handleClose = _ref.handleClose,
      handleConfirm = _ref.handleConfirm,
      addSchedule = _ref.addSchedule,
      index = _ref.index,
      allEvent = _ref.allEvent,
      _setFieldValue = _ref.setFieldValue,
      errors = _ref.errors,
      eventDuration = _ref.eventDuration;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  var event = allEvent.get(index);

  var getChangeHandler = function getChangeHandler(name) {
    return function (e) {
      return _setFieldValue("events", allEvent.setIn([index, name], e.target.value));
    };
  };

  var onNameChange = getChangeHandler("name");
  var onUsernameChange = getChangeHandler("username");
  var onUserEmailChange = getChangeHandler("email");
  var onUserPhoneChange = getChangeHandler("user_phone");
  var onCommentChange = getChangeHandler("comment");
  var formatDate = Object(_hooks_useGetDate__WEBPACK_IMPORTED_MODULE_7__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "calendar-editor-header d-flex justify-content-between border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-weight-bold"
  }, formatDate(event.get("start_time"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-primary mr-3 mt-2",
    type: "button",
    onClick: addSchedule
  }, t("calendars.form.events.work-schedule"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link no-shadow p-0 align-self-start",
    type: "button",
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaWindowClose"], {
    className: "icon-size-20 color-red"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, t("calendars.form.events.create-event")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_DateField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "pt-2",
    customInput: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
      type: "button"
    }, t("calendars.form.events.change-date-btn")),
    name: "events.".concat(index, ".start_time"),
    value: +event.get("start_time"),
    setFieldValue: function setFieldValue(name, value) {
      _setFieldValue("events", allEvent.updateIn([index], function (oldEvent) {
        return oldEvent.set("start_time", value).set("end_time", value + eventDuration * 60);
      }));
    },
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TimeField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "mr-2",
    label: t("calendars.form.events.from-label"),
    name: "events.".concat(index, ".start_time"),
    value: +event.get("start_time"),
    setFieldValue: function setFieldValue(name, value) {
      _setFieldValue("events", allEvent.updateIn([index], function (oldEvent) {
        return oldEvent.set("start_time", value).set("end_time", value + eventDuration * 60);
      }));
    },
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TimeField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "ml-2",
    label: t("calendars.form.events.to-label"),
    name: "events.".concat(index, ".end_time"),
    value: +event.get("end_time"),
    setFieldValue: function setFieldValue() {},
    errors: errors,
    disabled: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "limiter",
    label: t("calendars.form.events.name-label"),
    placeholder: t("calendars.form.events.name-placeholder"),
    name: "events.".concat(index, ".name"),
    value: event.get("name"),
    onChange: onNameChange,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "limiter",
    label: t("calendars.form.events.client-name-label"),
    placeholder: t("calendars.form.events.client-name-placeholder"),
    name: "events.".concat(index, ".username"),
    value: event.get("username"),
    onChange: onUsernameChange,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "limiter",
    label: t("calendars.form.events.user-email-label"),
    placeholder: t("calendars.form.events.user-email-placeholder"),
    name: "events.".concat(index, ".email"),
    value: event.get("email"),
    onChange: onUserEmailChange,
    errors: errors,
    type: "email"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_PhoneField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "limiter",
    label: t("calendars.form.events.user-phone-label"),
    placeholder: t("calendars.form.events.user-phone-placeholder"),
    name: "events.".concat(index, ".user_phone"),
    value: event.get("user_phone"),
    onChange: onUserPhoneChange,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "limiter",
    label: t("calendars.form.events.comment-label"),
    placeholder: t("calendars.form.events.comment-placeholder"),
    name: "events.".concat(index, ".comment"),
    value: event.get("comment"),
    onChange: onCommentChange,
    errors: errors,
    type: "textarea"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "confirm-visitor",
    label: t("calendars.form.events.confirm-visitor-label"),
    name: "events.".concat(index, ".confirm_visitor"),
    value: event.get("confirm_visitor"),
    setFieldValue: function setFieldValue(name, value) {
      _setFieldValue("events", allEvent.setIn([index, "confirm_visitor"], value));
    },
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pt-2 px-4 mb-1 btn btn-primary",
    type: "button",
    onClick: handleConfirm
  }, t("common.saveBtnText")));
}

EventEditor.propTypes = {
  handleClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  addSchedule: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  allEvent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  eventDuration: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (EventEditor);

/***/ }),

/***/ "./resources/js/containers/calendar/form/calendar/WorkingHourEditor.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/containers/calendar/form/calendar/WorkingHourEditor.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_calendar_form_workDaysWidget_WorkDaysWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/calendar/form/workDaysWidget/WorkDaysWidget */ "./resources/js/containers/calendar/form/workDaysWidget/WorkDaysWidget.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_useGetDate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useGetDate */ "./resources/js/hooks/useGetDate.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");









function WorkingHourEditor(_ref) {
  var handleClose = _ref.handleClose,
      handleConfirm = _ref.handleConfirm,
      workingDays = _ref.workingDays,
      index = _ref.index,
      errors = _ref.errors,
      _setFieldValue = _ref.setFieldValue;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  var activeDay = workingDays.get(index);
  var formatDate = Object(_hooks_useGetDate__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "calendar-editor-header d-flex justify-content-between border-bottom pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "font-weight-bold"
  }, formatDate(moment__WEBPACK_IMPORTED_MODULE_6___default()(activeDay.get("day"), "YYYY-MM-DD").unix())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link no-shadow p-0",
    type: "button",
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaWindowClose"], {
    className: "icon-size-20 color-red"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    id: "working-day",
    name: "working",
    label: t("calendars.form.working-hours.working-label"),
    value: activeDay.get("working"),
    setFieldValue: function setFieldValue(name, value) {
      _setFieldValue("working_hours", workingDays.setIn([index, "working"], value));
    },
    errors: {}
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_calendar_form_workDaysWidget_WorkDaysWidget__WEBPACK_IMPORTED_MODULE_2__["WorkDaysTable"], {
    className: "working-hour-editor",
    value: workingDays,
    setFieldValue: _setFieldValue,
    errors: errors,
    showDay: false,
    days: [activeDay.get("day_of_week")],
    getDaySettings: function getDaySettings() {
      return {
        day: activeDay,
        dateIndex: index
      };
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pt-2 px-4 mb-1 btn btn-primary",
    type: "button",
    onClick: handleConfirm
  }, t("common.saveBtnText")));
}

WorkingHourEditor.propTypes = {
  handleClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  workingDays: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WorkingHourEditor);

/***/ }),

/***/ "./resources/js/containers/calendar/form/formDataToSubmit.js":
/*!*******************************************************************!*\
  !*** ./resources/js/containers/calendar/form/formDataToSubmit.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formDataToSubmit; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function formDataToSubmit(data) {
  var emails = data.emails,
      working_hours = data.working_hours,
      events = data.events,
      normalData = _objectWithoutProperties(data, ["emails", "working_hours", "events"]);

  return _objectSpread({
    emails: emails.map(function (emailOption) {
      return emailOption.value;
    }),
    working_hours: working_hours.filter(function (item) {
      return !item.get("isDraft");
    }).toJS(),
    events: events.filter(function (item) {
      return !item.get("isDraft");
    }).toJS()
  }, normalData);
}

/***/ }),

/***/ "./resources/js/containers/calendar/form/workDaysWidget/DayNumber.js":
/*!***************************************************************************!*\
  !*** ./resources/js/containers/calendar/form/workDaysWidget/DayNumber.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");





function DayNumber(_ref) {
  var dayNumber = _ref.dayNumber,
      working = _ref.working,
      handleWorkingChange = _ref.handleWorkingChange;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    formGroupClass: "day-number",
    id: "day-".concat(dayNumber),
    name: "working",
    label: t("common.daysOfWeek.".concat(dayNumber)),
    value: working,
    setFieldValue: function setFieldValue(name, value) {
      handleWorkingChange(value);
    },
    errors: {}
  }));
}

DayNumber.propTypes = {
  dayNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  working: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  handleWorkingChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DayNumber);

/***/ }),

/***/ "./resources/js/containers/calendar/form/workDaysWidget/DayRow.js":
/*!************************************************************************!*\
  !*** ./resources/js/containers/calendar/form/workDaysWidget/DayRow.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_calendar_form_workDaysWidget_DayNumber__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/calendar/form/workDaysWidget/DayNumber */ "./resources/js/containers/calendar/form/workDaysWidget/DayNumber.js");
/* harmony import */ var _components_form_base_TimeTextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/base/TimeTextInput */ "./resources/js/components/form/base/TimeTextInput.js");
/* harmony import */ var _components_form_base_Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);







function TimeField(_ref) {
  var _errors$name, _errors$name2;

  var errors = _ref.errors,
      name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_TimeTextInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("border-on-focus time-field px-1", {
      "is-invalid": !!((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
    }),
    value: value,
    onChange: onChange
  }), ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_Errors__WEBPACK_IMPORTED_MODULE_4__["default"], {
    errors: errors[name]
  }) : null);
}

function DayRow(_ref2) {
  var dayNumber = _ref2.dayNumber,
      value = _ref2.value,
      errors = _ref2.errors,
      handleDayChange = _ref2.handleDayChange,
      showDay = _ref2.showDay;

  var handleWorkingChange = function handleWorkingChange(working) {
    handleDayChange(value.set("working", working));
  };

  var handleWorkFromChange = function handleWorkFromChange(e) {
    handleDayChange(value.set("work_from", e.target.value));
  };

  var handleWorkToChange = function handleWorkToChange(e) {
    handleDayChange(value.set("work_to", e.target.value));
  };

  var handleDinnerFromChange = function handleDinnerFromChange(e) {
    handleDayChange(value.set("dinner_from", e.target.value));
  };

  var handleDinnerToChange = function handleDinnerToChange(e) {
    handleDayChange(value.set("dinner_to", e.target.value));
  };

  if (!value.get("working")) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, showDay ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_calendar_form_workDaysWidget_DayNumber__WEBPACK_IMPORTED_MODULE_2__["default"], {
      dayNumber: dayNumber,
      working: value.get("working"),
      handleWorkingChange: handleWorkingChange
    }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      colSpan: 4,
      className: "text-center"
    }, "Day off"));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, showDay ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_calendar_form_workDaysWidget_DayNumber__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dayNumber: dayNumber,
    working: value.get("working"),
    handleWorkingChange: handleWorkingChange
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeField, {
    name: "working_hours.".concat(dayNumber, ".work_from"),
    value: value.get("work_from") || "00:00",
    onChange: handleWorkFromChange,
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeField, {
    name: "working_hours.".concat(dayNumber, ".work_to"),
    value: value.get("work_to") || "00:00",
    onChange: handleWorkToChange,
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeField, {
    name: "working_hours.".concat(dayNumber, ".dinner_from"),
    value: value.get("dinner_from") || "00:00",
    onChange: handleDinnerFromChange,
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TimeField, {
    name: "working_hours.".concat(dayNumber, ".dinner_to"),
    value: value.get("dinner_to") || "00:00",
    onChange: handleDinnerToChange,
    errors: errors
  })));
}

DayRow.propTypes = {
  dayNumber: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleDayChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showDay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (DayRow);
TimeField.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/***/ }),

/***/ "./resources/js/containers/calendar/form/workDaysWidget/WorkDaysWidget.js":
/*!********************************************************************************!*\
  !*** ./resources/js/containers/calendar/form/workDaysWidget/WorkDaysWidget.js ***!
  \********************************************************************************/
/*! exports provided: WorkDaysTable, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkDaysTable", function() { return WorkDaysTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/range */ "./node_modules/lodash/range.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap_es_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/es/Table */ "./node_modules/reactstrap/es/Table.js");
/* harmony import */ var _containers_calendar_form_workDaysWidget_DayRow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/calendar/form/workDaysWidget/DayRow */ "./resources/js/containers/calendar/form/workDaysWidget/DayRow.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);









function getDaySettings(workingDays, dayNumber) {
  var dateIndex = workingDays.findIndex(function (workDay) {
    return workDay.get("day_of_week") === dayNumber && workDay.get("day") === moment__WEBPACK_IMPORTED_MODULE_3___default()().format("YYYY-MM-DD");
  });
  var day;

  if (dateIndex !== -1) {
    day = workingDays.get(dateIndex);
  } else {
    dateIndex = workingDays.findIndex(function (workDay) {
      return workDay.get("day_of_week") === dayNumber;
    });
    day = workingDays.get(dateIndex);
  }

  return {
    day: day,
    dateIndex: dateIndex
  };
}

function WorkDaysTable(_ref) {
  var value = _ref.value,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors,
      showDay = _ref.showDay,
      days = _ref.days,
      getDaySettings = _ref.getDaySettings,
      className = _ref.className;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("work-days-table", className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, showDay ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, t("calendars.form.working-hours.day")) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, t("calendars.form.working-hours.work-from")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, t("calendars.form.working-hours.work-to")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, t("calendars.form.working-hours.lunch-from")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, t("calendars.form.working-hours.lunch-to")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, days.map(function (dayNumber) {
    var _getDaySettings = getDaySettings(value, dayNumber),
        day = _getDaySettings.day,
        dateIndex = _getDaySettings.dateIndex;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_calendar_form_workDaysWidget_DayRow__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: "day-".concat(dayNumber),
      dayNumber: dayNumber,
      value: day,
      errors: errors,
      handleDayChange: function handleDayChange(newValue) {
        setFieldValue("working_hours", value.set(dateIndex, newValue));
      },
      showDay: showDay
    });
  })));
}
WorkDaysTable.defaultProps = {
  showDay: true
};
WorkDaysTable.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  showDay: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  getDaySettings: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  days: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

function WorkDaysWidget(_ref2) {
  var value = _ref2.value,
      setFieldValue = _ref2.setFieldValue,
      errors = _ref2.errors;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WorkDaysTable, {
    value: value,
    setFieldValue: setFieldValue,
    errors: errors,
    showDay: true,
    days: lodash_range__WEBPACK_IMPORTED_MODULE_2___default()(0, 7),
    getDaySettings: getDaySettings
  });
}

WorkDaysWidget.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (WorkDaysWidget);

/***/ }),

/***/ "./resources/js/helpers/momentDateFormatToDateSelect.js":
/*!**************************************************************!*\
  !*** ./resources/js/helpers/momentDateFormatToDateSelect.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return momentDateFormatToDateSelect; });
function momentDateFormatToDateSelect(date) {
  switch (date) {
    case "MM/DD/YYYY":
      return "MM/dd/yyyy";

    case "DD.MM.YYYY":
      return "dd.MM.yyyy";
  }
}

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

/***/ }),

/***/ "./resources/js/hooks/useGetDateTime.js":
/*!**********************************************!*\
  !*** ./resources/js/hooks/useGetDateTime.js ***!
  \**********************************************/
/*! exports provided: useUserTimeFormat, useUserDateTimeFormatFormat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserTimeFormat", function() { return useUserTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserDateTimeFormatFormat", function() { return useUserDateTimeFormatFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetDateTime; });
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var _hooks_useGetDateFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useGetDateFormat */ "./resources/js/hooks/useGetDateFormat.js");
/* harmony import */ var _hooks_useGetTimezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useGetTimezone */ "./resources/js/hooks/useGetTimezone.js");
/* harmony import */ var _helpers_momentInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/momentInstance */ "./resources/js/helpers/momentInstance.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






function getTimeFormat(user) {
  var isAmPm = user ? user.is_am_pm : true;
  return isAmPm ? "hh:mm a" : "HH:mm";
}

function useUserTimeFormat() {
  var user = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return getTimeFormat(user);
}
function useUserDateTimeFormatFormat() {
  var dateFormat = Object(_hooks_useGetDateFormat__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var timeFormat = useUserTimeFormat();
  return timeFormat + " " + dateFormat;
}
function useGetDateTime() {
  var timezone = Object(_hooks_useGetTimezone__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var fullFormat = useUserDateTimeFormatFormat();
  return Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (date) {
    return Object(_helpers_momentInstance__WEBPACK_IMPORTED_MODULE_3__["default"])(date * 1000).tz(timezone).format(fullFormat);
  }, [fullFormat, timezone]);
}

/***/ })

}]);