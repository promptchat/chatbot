(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

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

/***/ "./resources/js/components/form/SimpleAsyncSelectField.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/form/SimpleAsyncSelectField.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleAsyncSelectField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select_async_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async/dist/react-select.esm */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var react_select_async_creatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select/async-creatable */ "./node_modules/react-select/async-creatable/dist/react-select.browser.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_form_base_Errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
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
function SimpleAsyncSelectField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      loadOptions = _ref.loadOptions,
      name = _ref.name,
      setFieldValue = _ref.setFieldValue,
      handleBlur = _ref.handleBlur,
      value = _ref.value,
      className = _ref.className,
      placeholder = _ref.placeholder,
      isClearable = _ref.isClearable,
      cacheOptions = _ref.cacheOptions,
      isMulti = _ref.isMulti,
      isDisabled = _ref.isDisabled,
      defaultOptions = _ref.defaultOptions;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  var Select = isClearable ? react_select_async_creatable__WEBPACK_IMPORTED_MODULE_2__["default"] : react_select_async_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_1__["default"];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Select, {
    cacheOptions: cacheOptions,
    defaultOptions: defaultOptions,
    loadOptions: loadOptions,
    onChange: function onChange(selectedOption) {
      setFieldValue(name, selectedOption);
    },
    value: value,
    isClearable: isClearable,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      "is-invalid": !!((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
    }),
    placeholder: placeholder ? placeholder : t("common.default-select-placeholder"),
    styles: selectStyles,
    isMulti: isMulti,
    isDisabled: isDisabled,
    onBlur: handleBlur
  }), ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_Errors__WEBPACK_IMPORTED_MODULE_5__["default"], {
    errors: errors[name]
  }) : null);
}
SimpleAsyncSelectField.defaultProps = {
  isClearable: true,
  cacheOptions: true,
  defaultOptions: true
};
SimpleAsyncSelectField.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number])
  }), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.any.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  loadOptions: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  isClearable: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  isMulti: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  cacheOptions: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool,
  defaultOptions: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array])
};

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

/***/ "./resources/js/containers/instantMessages/form/InstantMessagesForm.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/containers/instantMessages/form/InstantMessagesForm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useGetDateTime */ "./resources/js/hooks/useGetDateTime.js");
/* harmony import */ var _containers_instantMessages_form_InstantMessagesFormView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/instantMessages/form/InstantMessagesFormView */ "./resources/js/containers/instantMessages/form/InstantMessagesFormView.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function InstantMessagesForm(_ref) {
  var initialData = _ref.initialData,
      handleSubmit = _ref.handleSubmit,
      afterSave = _ref.afterSave,
      fromFilters = _ref.fromFilters;
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values, actions) {
    var _values$template, _values$integration, _values$sendViaIntegr, _values$template2;

    var clients;

    if (values.new_clients) {
      clients = values.new_clients;
    } else {
      clients = values.clients;
    }

    var message = values.message || null;

    if ((_values$template = values.template) === null || _values$template === void 0 ? void 0 : _values$template.value) {
      message = null;
    }

    var formattedValues = {
      name: values.name || null,
      message: message,
      filters: values.filters || null,
      selected: values.selected || null,
      integration_id: ((_values$integration = values.integration) === null || _values$integration === void 0 ? void 0 : _values$integration.value) || null,
      send_via_integration_id: ((_values$sendViaIntegr = values.sendViaIntegration) === null || _values$sendViaIntegr === void 0 ? void 0 : _values$sendViaIntegr.value) || null,
      message_template_id: ((_values$template2 = values.template) === null || _values$template2 === void 0 ? void 0 : _values$template2.value) || null,
      send_instantly: ~~values.send_instantly,
      start_date: values.start_date ? Math.ceil(values.start_date) : null,
      start_time: values.start_time ? Math.ceil(values.start_time) : null,
      tags: values.tags ? values.tags.map(function (tag) {
        return tag.value;
      }) : [],
      clients: clients ? clients.map(function (client) {
        return {
          id: client.__isNew__ ? null : client.value,
          name: client.label
        };
      }) : []
    };
    handleSubmit(formattedValues).data(function (data) {
      actions.setSubmitting(false);
      afterSave(data);
    }).validation(function (msg, errors) {
      var formattedErrors = {
        name: errors.name,
        message: errors.message,
        start_time: errors.start_time,
        start_date: errors.start_date,
        template: errors.message_template_id,
        integration: errors.integration_id,
        tags: errors.tags,
        clients: errors.clients,
        new_clients: errors.clients,
        sendViaIntegration: errors.send_via_integration_id
      };
      actions.setErrors(formattedErrors);
      actions.setSubmitting(false);
    })["catch"](function () {
      actions.setSubmitting(false);
    });
  }, [handleSubmit, afterSave]);
  var formatDateTime = Object(_hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var dateAndTimeToTimestampsToDate = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (startDate, startTime) {
    var date;

    if (startTime) {
      date = startTime;
    } else if (startDate) {
      date = startDate;
    } else {
      date = null;
    }

    return date ? formatDateTime(date) : null;
  }, [formatDateTime]);
  var generateName = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (integration, template, startDate, startTime) {
    var nameParts = [];

    if (integration) {
      nameParts.push(integration.label);
    }

    if (startDate) {
      nameParts.push(dateAndTimeToTimestampsToDate(startDate, startTime));
    }

    if (template) {
      nameParts.push(template.label);
    }

    return nameParts.join(" ");
  }, [dateAndTimeToTimestampsToDate]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      calculation = _useState2[0],
      setCalculation = _useState2[1];

  var updateClientsCount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (integrationId, tags, sentViaIntegrationId, setClients) {
    setCalculation(true);
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_5__["default"].call("get", "/methods/instant-messages/clients", {
      tags: tags === null || tags === void 0 ? void 0 : tags.map(function (tag) {
        return tag.value;
      }),
      integration_id: integrationId,
      sent_via_integration_id: sentViaIntegrationId
    }).data(function (data) {
      setCalculation(false);
      setTimeout(function () {
        setClients(data.clients.map(function (client) {
          return {
            label: client.name,
            value: client.id,
            client: client
          };
        }));
      });
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    initialValues: _objectSpread(_objectSpread({}, initialData), {}, {
      isNameChanged: false
    }),
    handleSubmit: onSubmit,
    renderForm: function renderForm(_ref2) {
      var setFieldValue = _ref2.setFieldValue,
          handleChange = _ref2.handleChange,
          values = _ref2.values,
          props = _objectWithoutProperties(_ref2, ["setFieldValue", "handleChange", "values"]);

      if (values.clients === null && !calculation) {
        setTimeout(function () {
          var _values$integration2, _values$sendViaIntegr2;

          updateClientsCount((_values$integration2 = values.integration) === null || _values$integration2 === void 0 ? void 0 : _values$integration2.value, values.tags, (_values$sendViaIntegr2 = values.sendViaIntegration) === null || _values$sendViaIntegr2 === void 0 ? void 0 : _values$sendViaIntegr2.value, function (clients) {
            return setFieldValue("clients", clients);
          });
        });
      }

      var handleNameChange = function handleNameChange(e) {
        handleChange(e);
        setFieldValue("isNameChanged", !!e.target.value);
      };

      var handleTemplateChange = function handleTemplateChange(name, value) {
        setFieldValue(name, value);

        if (value) {
          setFieldValue("message", value.template.message);
        } else if (!value && values.template) {
          setFieldValue("message", "");
        }

        if (!values.isNameChanged) {
          setFieldValue("name", generateName(values.integration, value, values.start_date, values.start_time));
        }
      };

      var handleIntegrationChange = function handleIntegrationChange(name, value) {
        var _values$sendViaIntegr3;

        setFieldValue(name, value);

        if (!values.isNameChanged) {
          setFieldValue("name", generateName(value, values.template, values.start_date, values.start_time));
        }

        if (!value) {
          setFieldValue("clients", null);
          setFieldValue("new_clients", null);
        }

        updateClientsCount(value ? value.value : null, values.tags, (_values$sendViaIntegr3 = values.sendViaIntegration) === null || _values$sendViaIntegr3 === void 0 ? void 0 : _values$sendViaIntegr3.value, function (clients) {
          return setFieldValue("clients", clients);
        });
      };

      var handleSendViaIntegrationChange = function handleSendViaIntegrationChange(name, value) {
        setFieldValue(name, value);
        updateClientsCount(value ? value.value : null, values.tags, value ? value.value : null, function (clients) {
          return setFieldValue("clients", clients);
        });
      };

      var handleStartChange = function handleStartChange(name, value) {
        setFieldValue(name, value);
        var startTime = values.start_time;

        if (name === "start_date") {
          var time = new Date(startTime);
          var optionDate = new Date(value * 1000);
          optionDate.setHours(time.getHours());
          optionDate.setMinutes(time.getMinutes());
          setFieldValue("start_time", startTime = optionDate.getTime() / 1000);
        }

        if (!values.isNameChanged) {
          setFieldValue("name", generateName(values.integration, values.template, name === "start_date" ? value : values.start_date, name === "start_time" ? value : startTime));
        }
      };

      var handleSendInstantlyChange = function handleSendInstantlyChange(name, value) {
        setFieldValue(name, value);

        if (!values.isNameChanged) {
          setFieldValue("name", generateName(values.integration, values.template, value ? null : values.start_date, value ? null : values.start_time));
        }
      };

      var handleClientChange = function handleClientChange(name, value) {
        setFieldValue(name, value);
      };

      var handleTagsChange = function handleTagsChange(name, value) {
        var _values$integration3, _values$sendViaIntegr4;

        setFieldValue(name, value);
        updateClientsCount((_values$integration3 = values.integration) === null || _values$integration3 === void 0 ? void 0 : _values$integration3.value, value, (_values$sendViaIntegr4 = values.sendViaIntegration) === null || _values$sendViaIntegr4 === void 0 ? void 0 : _values$sendViaIntegr4.value, function (clients) {
          return setFieldValue("clients", clients);
        });
      };

      var handleTextChange = function handleTextChange(value) {
        setFieldValue("message", value);
        setFieldValue("template", null);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_instantMessages_form_InstantMessagesFormView__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, props, {
        values: values,
        fromList: fromFilters,
        handleTagsChange: handleTagsChange,
        handleTextChange: handleTextChange,
        handleNameChange: handleNameChange,
        handleTemplateChange: handleTemplateChange,
        handleIntegrationChange: handleIntegrationChange,
        handleStartChange: handleStartChange,
        handleSendInstantlyChange: handleSendInstantlyChange,
        handleClientChange: handleClientChange,
        handleSendViaIntegrationChange: handleSendViaIntegrationChange,
        calculation: calculation
      }));
    }
  });
}

InstantMessagesForm.propTypes = {
  initialData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  afterSave: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  fromFilters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (InstantMessagesForm);

/***/ }),

/***/ "./resources/js/containers/instantMessages/form/InstantMessagesFormView.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/containers/instantMessages/form/InstantMessagesFormView.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _containers_instantMessages_form_helpers_loadTemplateSelectOptions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/instantMessages/form/helpers/loadTemplateSelectOptions */ "./resources/js/containers/instantMessages/form/helpers/loadTemplateSelectOptions.js");
/* harmony import */ var _components_form_SimpleAsyncSelectField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/form/SimpleAsyncSelectField */ "./resources/js/components/form/SimpleAsyncSelectField.js");
/* harmony import */ var _containers_instantMessages_form_widgets_SaveTemplateModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/instantMessages/form/widgets/SaveTemplateModal */ "./resources/js/containers/instantMessages/form/widgets/SaveTemplateModal.js");
/* harmony import */ var _helpers_selectLoaders_loadIntegrationSelectOptions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/helpers/selectLoaders/loadIntegrationSelectOptions */ "./resources/js/helpers/selectLoaders/loadIntegrationSelectOptions.js");
/* harmony import */ var _components_form_DateField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/form/DateField */ "./resources/js/components/form/DateField.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");
/* harmony import */ var _components_form_TimeField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/form/TimeField */ "./resources/js/components/form/TimeField.js");
/* harmony import */ var _containers_instantMessages_form_widgets_ClientsSelectField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/containers/instantMessages/form/widgets/ClientsSelectField */ "./resources/js/containers/instantMessages/form/widgets/ClientsSelectField.js");
/* harmony import */ var _helpers_selectLoaders_loadCompanyTagsSelectOptions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/helpers/selectLoaders/loadCompanyTagsSelectOptions */ "./resources/js/helpers/selectLoaders/loadCompanyTagsSelectOptions.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





















function InstantMessagesFormView(_ref) {
  var _values$clients;

  var handleSendInstantlyChange = _ref.handleSendInstantlyChange,
      handleStartChange = _ref.handleStartChange,
      handleTextChange = _ref.handleTextChange,
      handleClientChange = _ref.handleClientChange,
      handleBlur = _ref.handleBlur,
      handleTagsChange = _ref.handleTagsChange,
      values = _ref.values,
      errors = _ref.errors,
      isSubmitting = _ref.isSubmitting,
      handleNameChange = _ref.handleNameChange,
      handleTemplateChange = _ref.handleTemplateChange,
      handleIntegrationChange = _ref.handleIntegrationChange,
      handleSendViaIntegrationChange = _ref.handleSendViaIntegrationChange,
      fromList = _ref.fromList,
      calculation = _ref.calculation;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      sending = _useState2[0],
      setSending = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      seeAll = _useState4[0],
      setSeeAll = _useState4[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    md: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "limiter",
    id: "name",
    name: "name",
    label: t("instantMessages.form.name-label"),
    placeholder: t("instantMessages.form.name-placeholder"),
    onChange: handleNameChange,
    onBlur: handleBlur,
    value: values.name,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "limiter form-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, t("instantMessages.form.text-label")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_16__["CKEditor"], {
    editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_17___default.a,
    data: values.message,
    onChange: function onChange(event, editor) {
      handleTextChange(editor.getData());
    },
    placeholder: t("instantMessages.form.text-placeholder"),
    config: {
      toolbar: ["bold", "italic", "underline", "link", "bulletedList", "numberedList", "undo", "redo"],
      mention: {
        feeds: [{
          marker: "@",
          feed: function feed(queryString) {
            return Promise.resolve([{
              id: "@".concat(queryString)
            }].concat(_toConsumableArray([{
              id: "@first_name"
            }, {
              id: "@last_name"
            }, {
              id: "@email"
            }, {
              id: "@phone_number"
            }].filter(function (_ref2) {
              var id = _ref2.id;
              return id.toLowerCase().includes(queryString.toLowerCase());
            }))));
          }
        }]
      }
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    md: 6
  }, !fromList && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SimpleAsyncSelectField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "limiter",
    name: "tags",
    label: t("instantMessages.form.tags-label"),
    value: values.tags,
    setFieldValue: handleTagsChange,
    errors: errors,
    loadOptions: _helpers_selectLoaders_loadCompanyTagsSelectOptions__WEBPACK_IMPORTED_MODULE_15__["default"],
    isMulti: true,
    isClearable: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SimpleAsyncSelectField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "limiter",
    id: "integration",
    name: "integration",
    label: t("instantMessages.form.channel-label"),
    value: values.integration,
    setFieldValue: handleIntegrationChange,
    errors: errors,
    loadOptions: _helpers_selectLoaders_loadIntegrationSelectOptions__WEBPACK_IMPORTED_MODULE_10__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sub-label-bottom text-middle mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, t("instantMessages.form.clients-count", {
    count: calculation ? t("instantMessages.form.calculation") : (_values$clients = values.clients) === null || _values$clients === void 0 ? void 0 : _values$clients.length
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return setSeeAll(!seeAll);
    }
  }, seeAll ? t("instantMessages.form.hide") : t("instantMessages.form.see-all"))), seeAll && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_instantMessages_form_widgets_ClientsSelectField__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "limiter",
    values: values,
    errors: errors,
    setFieldValue: handleClientChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    md: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_instantMessages_form_widgets_SaveTemplateModal__WEBPACK_IMPORTED_MODULE_9__["default"], {
    text: values.message,
    disabled: !!values.template,
    onSending: function onSending() {
      return setSending(true);
    },
    onSent: function onSent() {
      return setSending(false);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    md: 6
  }, sending ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SimpleAsyncSelectField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "limiter",
    id: "template",
    name: "template",
    label: t("instantMessages.form.template-label"),
    value: values.template,
    setFieldValue: handleTemplateChange,
    errors: errors,
    loadOptions: _containers_instantMessages_form_helpers_loadTemplateSelectOptions__WEBPACK_IMPORTED_MODULE_7__["default"],
    cacheOptions: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SimpleAsyncSelectField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "limiter",
    id: "sendViaIntegration",
    name: "sendViaIntegration",
    label: t("instantMessages.form.send_via-label"),
    value: values.sendViaIntegration,
    setFieldValue: handleSendViaIntegrationChange,
    errors: errors,
    loadOptions: Object(_helpers_selectLoaders_loadIntegrationSelectOptions__WEBPACK_IMPORTED_MODULE_10__["getLoadIntegrationSelectOptions"])(_models_Integration__WEBPACK_IMPORTED_MODULE_18__["SERVICE_SMS_CHAT_ORG"])
  }), values.send_instantly ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_DateField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "1",
    name: "start_date",
    label: t("instantMessages.form.start-date-label"),
    value: values.start_date,
    setFieldValue: handleStartChange,
    errors: errors,
    minDate: new Date(),
    showTimeInput: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TimeField__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "start_time",
    name: "start_time",
    label: t("instantMessages.form.start-time-label"),
    value: values.start_time,
    setFieldValue: handleStartChange,
    errors: errors,
    disabled: !values.start_date,
    date: values.start_date,
    minTime: new Date()
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: "send_instantly",
    name: "send_instantly",
    label: t("instantMessages.form.send-instantly-label"),
    value: values.send_instantly,
    setFieldValue: handleSendInstantlyChange
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "pt-2 px-4 mb-4",
    disabled: isSubmitting
  }, t("common.saveBtnText"))));
}

InstantMessagesFormView.propTypes = {
  handleTagsChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleSendInstantlyChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleClientChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleTextChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleStartChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleIntegrationChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleSendViaIntegrationChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleTemplateChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleNameChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  isSubmitting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  fromList: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  calculation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (InstantMessagesFormView);

/***/ }),

/***/ "./resources/js/containers/instantMessages/form/helpers/loadClientSelectOptions.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/containers/instantMessages/form/helpers/loadClientSelectOptions.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadClientSelectOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadClientSelectOptions(inputValue, integrationId) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/clients/search", {
      q: inputValue,
      integrationId: integrationId
    }).data(function (data) {
      resolve(data.map(function (client) {
        return {
          label: client.name,
          value: client.id,
          client: client
        };
      }));
    });
  });
}

/***/ }),

/***/ "./resources/js/containers/instantMessages/form/helpers/loadTemplateSelectOptions.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/containers/instantMessages/form/helpers/loadTemplateSelectOptions.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadTemplateSelectOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadTemplateSelectOptions(inputValue) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/instant-messages/templates/search", {
      q: inputValue
    }).data(function (data) {
      resolve(data.map(function (template) {
        return {
          label: template.name,
          value: template.id,
          template: template
        };
      }));
    });
  });
}

/***/ }),

/***/ "./resources/js/containers/instantMessages/form/widgets/ClientsSelectField.js":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/instantMessages/form/widgets/ClientsSelectField.js ***!
  \************************************************************************************/
/*! exports provided: formatClientsOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatClientsOptions", function() { return formatClientsOptions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");
/* harmony import */ var _components_form_SelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/SelectField */ "./resources/js/components/form/SelectField.js");
/* harmony import */ var _components_form_SimpleAsyncSelectField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/SimpleAsyncSelectField */ "./resources/js/components/form/SimpleAsyncSelectField.js");
/* harmony import */ var _containers_instantMessages_form_helpers_loadClientSelectOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/instantMessages/form/helpers/loadClientSelectOptions */ "./resources/js/containers/instantMessages/form/helpers/loadClientSelectOptions.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var formatClientsOptions = function formatClientsOptions(options) {
  return options.map(function (option) {
    var _client$variables$geo, _client$variables$geo3;

    var client = option;
    var labelParts = [];
    var geoParts = [];

    switch (null) {
      case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_WEB"]:
        if (client.name) {
          labelParts.push(client.name);
        }

        if (client.variables.ip) {
          labelParts.push(client.variables.ip);
        }

        geoParts = [];

        if ((_client$variables$geo = client.variables.geo) === null || _client$variables$geo === void 0 ? void 0 : _client$variables$geo.city) {
          var _client$variables$geo2;

          geoParts.push((_client$variables$geo2 = client.variables.geo) === null || _client$variables$geo2 === void 0 ? void 0 : _client$variables$geo2.city);
        }

        if ((_client$variables$geo3 = client.variables.geo) === null || _client$variables$geo3 === void 0 ? void 0 : _client$variables$geo3.country) {
          var _client$variables$geo4;

          geoParts.push((_client$variables$geo4 = client.variables.geo) === null || _client$variables$geo4 === void 0 ? void 0 : _client$variables$geo4.country);
        }

        if (geoParts.length) {
          labelParts.push(geoParts.join(", "));
        }

        return {
          label: labelParts.join(" "),
          value: option.value
        };

      case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TELEGRAM"]:
      case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_VIBER"]:
      case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_FACEBOOK_MESSENGER"]:
        if (client.variables.first_name) {
          labelParts.push(client.variables.first_name);
        }

        if (client.variables.last_name) {
          labelParts.push(client.variables.last_name);
        }

        return {
          label: labelParts.join(" "),
          value: option.value
        };

      case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_ORG"]:
      case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_WHATSAPP"]:
      case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_WHATSAPP"]:
      case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_SMS"]:
      default:
        if (client.variables.phone_number) {
          labelParts.push(client.variables.phone_number);
        }

        if (client.variables.first_name) {
          labelParts.push(client.variables.first_name);
        }

        if (client.variables.last_name) {
          labelParts.push(client.variables.last_name);
        }

        return {
          label: labelParts.join(" "),
          value: option.value
        };
    }
  });
};

function ClientsSelectField(_ref) {
  var values = _ref.values,
      errors = _ref.errors,
      setFieldValue = _ref.setFieldValue,
      className = _ref.className;
  var integrationOption = values.integration;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      defaultOptions = _useState2[0],
      setDefaultOptions = _useState2[1];

  var integrationId = integrationOption === null || integrationOption === void 0 ? void 0 : integrationOption.value;
  var integrationService = +(integrationOption === null || integrationOption === void 0 ? void 0 : integrationOption.integration.service);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (integrationId) {
      Object(_containers_instantMessages_form_helpers_loadClientSelectOptions__WEBPACK_IMPORTED_MODULE_5__["default"])("", integrationId).then(function (options) {
        options = formatClientsOptions(options, integrationService);
        setDefaultOptions(options);
      });
    }
  }, [integrationId, integrationService]);

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SimpleAsyncSelectField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: className,
    name: "clients",
    label: t("instantMessages.form.to-label"),
    value: values.clients,
    setFieldValue: setFieldValue,
    errors: errors,
    loadOptions: function loadOptions(q) {
      return [];
    },
    defaultOptions: defaultOptions,
    isMulti: true
  });
}

ClientsSelectField.propTypes = {
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (ClientsSelectField);

/***/ }),

/***/ "./resources/js/containers/instantMessages/form/widgets/SaveTemplateModal.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/containers/instantMessages/form/widgets/SaveTemplateModal.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-sweetalert */ "./node_modules/react-bootstrap-sweetalert/dist/index.js");
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _components_form_base_Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function SaveTemplateModal(_ref) {
  var text = _ref.text,
      disabled = _ref.disabled,
      onSending = _ref.onSending,
      onSent = _ref.onSent;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      errors = _useState4[0],
      setErrors = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState6 = _slicedToArray(_useState5, 2),
      templateName = _useState6[0],
      setTemplateName = _useState6[1];

  var onConfirm = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    onSending();
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__["default"].call("post", "/methods/instant-messages/templates", {}, {
      name: templateName,
      message: text
    }).validation(function (msg, errors) {
      setErrors(errors.name);
    }).data(function () {
      setOpen(false);
    })["finally"](function () {
      onSent();
    });
  }, [templateName, onSent, onSending, text]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2___default.a, {
    show: open,
    title: t("instantMessages.form.template-name-label"),
    onConfirm: onConfirm,
    onCancel: function onCancel() {
      return setOpen(false);
    },
    dependencies: [open, setTemplateName, errors, onConfirm]
  }, function (renderProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      ref: renderProps.setAutoFocusInputRef,
      className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("form-control", {
        "is-invalid": !!errors.length
      }),
      value: templateName,
      onKeyDown: renderProps.onEnterKeyDownConfirm,
      onChange: function onChange(e) {
        return setTemplateName(e.target.value);
      },
      placeholder: t("instantMessages.form.template-name-label")
    }), errors.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_Errors__WEBPACK_IMPORTED_MODULE_4__["default"], {
      errors: errors
    }) : null);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pt-2 px-4 mb-3 btn btn-primary",
    type: "button",
    disabled: disabled || !text,
    onClick: function onClick() {
      return setOpen(true);
    }
  }, t("instantMessages.form.save-template-btn")));
}

SaveTemplateModal.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  onSending: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  onSent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};
/* harmony default export */ __webpack_exports__["default"] = (SaveTemplateModal);

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

/***/ "./resources/js/helpers/selectLoaders/loadCompanyTagsSelectOptions.js":
/*!****************************************************************************!*\
  !*** ./resources/js/helpers/selectLoaders/loadCompanyTagsSelectOptions.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadCompanyTagsSelectOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadCompanyTagsSelectOptions(inputValue) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/tags/search-company-tags", {
      q: inputValue
    }).data(function (data) {
      resolve(data.map(function (integration) {
        return {
          label: integration.name,
          value: integration.id
        };
      }));
    });
  });
}

/***/ }),

/***/ "./resources/js/helpers/selectLoaders/loadIntegrationSelectOptions.js":
/*!****************************************************************************!*\
  !*** ./resources/js/helpers/selectLoaders/loadIntegrationSelectOptions.js ***!
  \****************************************************************************/
/*! exports provided: getLoadIntegrationSelectOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoadIntegrationSelectOptions", function() { return getLoadIntegrationSelectOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function getLoadIntegrationSelectOptions() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return function loadIntegrationSelectOptions(inputValue) {
    return new Promise(function (resolve) {
      var params = {
        q: inputValue
      };

      if (type) {
        params.type = type;
      }

      _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/integrations/search", params).data(function (data) {
        resolve(data.map(function (integration) {
          return {
            label: integration.name,
            value: integration.id,
            integration: integration
          };
        }));
      });
    });
  };
}
var loadIntegrationSelectOptions = getLoadIntegrationSelectOptions();
/* harmony default export */ __webpack_exports__["default"] = (loadIntegrationSelectOptions);

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