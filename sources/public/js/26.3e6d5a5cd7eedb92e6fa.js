(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./resources/js/components/form/AsyncSelectField.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/form/AsyncSelectField.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AsyncSelectField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select_async_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async/dist/react-select.esm */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_form_base_Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
function AsyncSelectField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      loadOptions = _ref.loadOptions,
      loadValue = _ref.loadValue,
      name = _ref.name,
      setFieldValue = _ref.setFieldValue,
      value = _ref.value,
      className = _ref.className,
      placeholder = _ref.placeholder,
      isClearable = _ref.isClearable;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      option = _useState2[0],
      setOption = _useState2[1];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (value && !option) {
      loadValue(value).then(function (o) {
        setOption(o);
      });
    }
  }, [loadValue, option, value]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_async_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_1__["default"], {
    cacheOptions: true,
    defaultOptions: true,
    loadOptions: loadOptions,
    onChange: function onChange(selectedOption) {
      setFieldValue(name, selectedOption ? selectedOption.value : null);
      setOption(selectedOption);
    },
    value: value ? option : null,
    isClearable: isClearable,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      "is-invalid": !!((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
    }),
    placeholder: placeholder ? placeholder : t("common.default-select-placeholder"),
    styles: selectStyles
  }), ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_Errors__WEBPACK_IMPORTED_MODULE_4__["default"], {
    errors: errors[name]
  }) : null);
}
AsyncSelectField.defaultProps = {
  isClearable: true
};
AsyncSelectField.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  loadOptions: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  loadValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  isClearable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};

/***/ }),

/***/ "./resources/js/components/form/CoutryCode.js":
/*!****************************************************!*\
  !*** ./resources/js/components/form/CoutryCode.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CountryCode; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select_async_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async/dist/react-select.esm */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_form_base_Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_flags_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-flags-select */ "./node_modules/react-flags-select/build/index.esm.js");
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
function CountryCode(_ref) {
  var _errors$name;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      setFieldValue = _ref.setFieldValue,
      value = _ref.value,
      className = _ref.className,
      placeholder = _ref.placeholder;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Label"], {
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_flags_select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selected: value,
    countries: [],
    placeholder: placeholder,
    customLabels: {},
    onSelect: function onSelect(code) {
      setFieldValue(name, code);
    }
  }), ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_Errors__WEBPACK_IMPORTED_MODULE_4__["default"], {
    errors: errors[name]
  }) : null);
}
CountryCode.defaultProps = {
  isClearable: true,
  placeholder: ""
};
CountryCode.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number]),
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.any.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  isClearable: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool
};

/***/ }),

/***/ "./resources/js/components/form/FileField.js":
/*!***************************************************!*\
  !*** ./resources/js/components/form/FileField.js ***!
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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function FileField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      className = _ref.className,
      value = _ref.value,
      setFieldValue = _ref.setFieldValue,
      types = _ref.types;
  var inputStatusClass = classnames__WEBPACK_IMPORTED_MODULE_4___default()({
    "is-invalid": Boolean(errors && ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length))
  });

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: id,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(inputStatusClass)
  }, typeof label === "function" ? label() : label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onDrop: function onDrop(files) {
      setFieldValue(name, files[0]);
    },
    accept: types.length ? types : null
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("dropzone-class")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, getRootProps(), {
      className: "load-img d-flex justify-content-center flex-column align-items-center p-3"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({}, getInputProps(), {
      multiple: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaArrowDown"], {
      className: "icon-size-40 color-gray"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "load-img-tip mt-3 text-center"
    }, t("common.drag-and-drop"))));
  }), value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("position-relative file-preview mr-4", inputStatusClass)
  }, value.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-link no-shadow position-absolute file-preview-close-btn py-0 px-1",
    onClick: function onClick() {
      setFieldValue(name, null);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaTimesCircle"], {
    className: "color-red position-relative"
  }))) : null, errors && ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Errors__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errors: errors[name]
  }) : null);
}

FileField.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  types: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FileField));

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
      fieldProps = _objectWithoutProperties(_ref, ["id", "label", "errors", "name", "onChange", "className"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], _extends({
    id: id,
    name: name,
    type: "text",
    onChange: function onChange(e) {
      var val = e.target.value;
      var regExp = /^[0-9]*$/; // eslint-disable-line

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
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(NumberField));

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

/***/ "./resources/js/containers/clients/import-csv/form/ClientsImportScoreScreen.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/containers/clients/import-csv/form/ClientsImportScoreScreen.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






function ClientsImportScoreScreen(_ref) {
  var result = _ref.result;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    className: "clients-import mb-4 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["CardBody"], {
    className: "rounded px-4 clients-import-result"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title pb-2",
    dangerouslySetInnerHTML: {
      __html: t("clients.import-csv.total-rows-count", {
        count: "<span class=\"value\">".concat(result.total_rows_count, "</span>")
      })
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title pb-2",
    dangerouslySetInnerHTML: {
      __html: t("clients.import-csv.imported-clients-count", {
        count: "<span class=\"value\">".concat(result.imported_clients_count, "</span>")
      })
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "title pb-2",
    dangerouslySetInnerHTML: {
      __html: t("clients.import-csv.import-status", {
        importStatus: '<span class="value">' + t("clients.import-csv.statuses.".concat(result.status)) + "</span>"
      })
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "my-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    to: "/clients/1",
    className: "btn btn-success"
  }, t("clients.import-csv.back-to-clients-btn"))))));
}

ClientsImportScoreScreen.propTypes = {
  result: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    total_rows_count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    imported_clients_count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    status: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
  }).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClientsImportScoreScreen);

/***/ }),

/***/ "./resources/js/containers/clients/import-csv/form/ImportCsvForm.js":
/*!**************************************************************************!*\
  !*** ./resources/js/containers/clients/import-csv/form/ImportCsvForm.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _containers_clients_import_csv_form_ImportCsvFormView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/clients/import-csv/form/ImportCsvFormView */ "./resources/js/containers/clients/import-csv/form/ImportCsvFormView.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









function ImportCsvForm(_ref) {
  var handleSubmit = _ref.handleSubmit;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Card"], {
    className: "clients-import mb-4 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CardBody"], {
    className: "rounded px-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    initialValues: {
      integration_id: null,
      csv: 1,
      tags: [],
      country_code: "UA",
      phone_number_position: "",
      variables: Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])([])
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref2) {
      var values = _ref2.values,
          setFieldValue = _ref2.setFieldValue,
          errors = _ref2.errors,
          setErrors = _ref2.setErrors,
          props = _objectWithoutProperties(_ref2, ["values", "setFieldValue", "errors", "setErrors"]);

      var handleIntegrationChange = function handleIntegrationChange(name, value) {
        setFieldValue(name, value);

        if (!value) {
          setFieldValue("csv", null);
          setFieldValue("phone_number_position", "");
          setFieldValue("variables", Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])([]));
          setFieldValue("tags", []);
        } else {
          _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_6__["default"].call("get", "/methods/clients/generate-import-name/".concat(value)).data(function (data) {
            setFieldValue("tags", [{
              label: data,
              value: data
            }]);
          });
        }
      };

      var handleChangeCsv = function handleChangeCsv(name, value) {
        setFieldValue(name, value);

        if (!value) {
          setFieldValue("phone_number_position", "");
          setFieldValue("variables", Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])([]));
        }
      };

      var handleClickAddVariable = function handleClickAddVariable() {
        setFieldValue("variables", values.variables.push(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Map"])({
          name: "",
          position: ""
        })));
      };

      var handleClickRemoveVariable = function handleClickRemoveVariable(index) {
        var newErrors = _objectSpread({}, errors);

        if (newErrors.variables) {
          delete newErrors.variables;
        }

        setErrors(newErrors);
        setFieldValue("variables", values.variables["delete"](index));
      };

      var handleVariableChange = function handleVariableChange(index, item) {
        setFieldValue("variables", values.variables.set(index, item));
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_clients_import_csv_form_ImportCsvFormView__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, props, {
        values: values,
        setErrors: setErrors,
        errors: errors,
        handleIntegrationChange: handleIntegrationChange,
        setFieldValue: setFieldValue,
        handleChangeCsv: handleChangeCsv,
        handleClickAddVariable: handleClickAddVariable,
        handleVariableChange: handleVariableChange,
        handleClickRemoveVariable: handleClickRemoveVariable
      }));
    }
  })));
}

ImportCsvForm.propTypes = {
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImportCsvForm);

/***/ }),

/***/ "./resources/js/containers/clients/import-csv/form/ImportCsvFormView.js":
/*!******************************************************************************!*\
  !*** ./resources/js/containers/clients/import-csv/form/ImportCsvFormView.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/AsyncSelectField */ "./resources/js/components/form/AsyncSelectField.js");
/* harmony import */ var _helpers_selectLoaders_loadIntegrationSelectValue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/selectLoaders/loadIntegrationSelectValue */ "./resources/js/helpers/selectLoaders/loadIntegrationSelectValue.js");
/* harmony import */ var _components_form_FileField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/FileField */ "./resources/js/components/form/FileField.js");
/* harmony import */ var _containers_clients_import_csv_form_VariableItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/clients/import-csv/form/VariableItem */ "./resources/js/containers/clients/import-csv/form/VariableItem.js");
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _helpers_selectLoaders_loadIntegrationSelectOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/selectLoaders/loadIntegrationSelectOptions */ "./resources/js/helpers/selectLoaders/loadIntegrationSelectOptions.js");
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");
/* harmony import */ var _components_form_NumberField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/form/NumberField */ "./resources/js/components/form/NumberField.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _helpers_selectLoaders_loadCompanyTagsSelectOptions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/helpers/selectLoaders/loadCompanyTagsSelectOptions */ "./resources/js/helpers/selectLoaders/loadCompanyTagsSelectOptions.js");
/* harmony import */ var _components_form_SimpleAsyncSelectField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/form/SimpleAsyncSelectField */ "./resources/js/components/form/SimpleAsyncSelectField.js");
/* harmony import */ var react_flags_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-flags-select */ "./node_modules/react-flags-select/build/index.esm.js");
/* harmony import */ var _components_form_CoutryCode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/form/CoutryCode */ "./resources/js/components/form/CoutryCode.js");


















var loadWebIntegrationsSelectOptions = Object(_helpers_selectLoaders_loadIntegrationSelectOptions__WEBPACK_IMPORTED_MODULE_9__["getLoadIntegrationSelectOptions"])(_models_Integration__WEBPACK_IMPORTED_MODULE_10__["SERVICE_SMS_CHAT_ORG"]);

function ImportCsvFormView(_ref) {
  var handleIntegrationChange = _ref.handleIntegrationChange,
      handleChangeCsv = _ref.handleChangeCsv,
      handleClickAddVariable = _ref.handleClickAddVariable,
      handleVariableChange = _ref.handleVariableChange,
      handleClickRemoveVariable = _ref.handleClickRemoveVariable,
      handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      values = _ref.values,
      errors = _ref.errors,
      isSubmitting = _ref.isSubmitting,
      setFieldValue = _ref.setFieldValue;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "limiter",
    label: t("clients.import-csv.integration-label"),
    name: "integration_id",
    value: values.integration_id,
    setFieldValue: handleIntegrationChange,
    loadOptions: loadWebIntegrationsSelectOptions,
    loadValue: _helpers_selectLoaders_loadIntegrationSelectValue__WEBPACK_IMPORTED_MODULE_4__["default"],
    errors: errors,
    isClearable: true
  }), values.integration_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_FileField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "csv",
    label: t("clients.import-csv.file-label"),
    value: values.csv,
    setFieldValue: handleChangeCsv,
    errors: errors,
    types: [".csv"]
  }) : null, values.csv ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_12__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_NumberField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "limiter",
    id: "phone_number_position",
    name: "phone_number_position",
    label: t("clients.import-csv.phone-position-label"),
    placeholder: t("clients.import-csv.phone-position-placeholder"),
    value: values.phone_number_position,
    onChange: handleChange,
    onBlur: handleBlur,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "limiter"
  }, values.variables.map(function (variable, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_clients_import_csv_form_VariableItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: index,
      index: index,
      item: variable,
      onItemChange: function onItemChange(item) {
        handleVariableChange(index, item);
      },
      onRemove: function onRemove() {
        return handleClickRemoveVariable(index);
      },
      errors: errors
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_13__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SimpleAsyncSelectField__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: "limiter",
    name: "tags",
    label: t("clients.import-csv.tags-label"),
    value: values.tags,
    setFieldValue: setFieldValue,
    errors: errors,
    loadOptions: _helpers_selectLoaders_loadCompanyTagsSelectOptions__WEBPACK_IMPORTED_MODULE_14__["default"],
    isMulti: true,
    isClearable: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CoutryCode__WEBPACK_IMPORTED_MODULE_17__["default"], {
    className: "limiter",
    label: t("clients.import-csv.default_country"),
    placeholder: t("clients.import-csv.default_country"),
    value: values.country_code,
    name: "country_code",
    setFieldValue: setFieldValue,
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mb-3",
    type: "button",
    onClick: handleClickAddVariable
  }, t("clients.import-csv.add-variable-btn")))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "pt-2 px-4 mt-3 mb-sm-4 mb-5",
    disabled: isSubmitting
  }, t("common.saveBtnText")));
}

ImportCsvFormView.propTypes = {
  handleIntegrationChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChangeCsv: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleClickAddVariable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleVariableChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleClickRemoveVariable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  isSubmitting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (ImportCsvFormView);

/***/ }),

/***/ "./resources/js/containers/clients/import-csv/form/VariableItem.js":
/*!*************************************************************************!*\
  !*** ./resources/js/containers/clients/import-csv/form/VariableItem.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_form_NumberField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/NumberField */ "./resources/js/components/form/NumberField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");







function VariableItem(_ref) {
  var item = _ref.item,
      onItemChange = _ref.onItemChange,
      onRemove = _ref.onRemove,
      errors = _ref.errors,
      index = _ref.index;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-sm-nowrap flex-wrap align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mr-sm-3 mr-2",
    id: "variables.".concat(index, ".name"),
    name: "variables.".concat(index, ".name"),
    label: t("clients.import-csv.variable-name-label"),
    placeholder: t("clients.import-csv.variable-name-placeholder"),
    value: item.get("name"),
    onChange: function onChange(e) {
      onItemChange(item.set("name", e.target.value));
    },
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_NumberField__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "mr-sm-3 mr-2",
    id: "variables.".concat(index, ".position"),
    name: "variables.".concat(index, ".position"),
    label: t("clients.import-csv.variable-position-label"),
    placeholder: t("clients.import-csv.variable-position-placeholder"),
    value: item.get("position"),
    onChange: function onChange(e) {
      onItemChange(item.set("position", e.target.value));
    },
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link no-shadow p-sm-2 py-2 px-1 mb-3",
    type: "button",
    onClick: onRemove
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaTrashAlt"], {
    className: "color-gray icon-size-20"
  })));
}

VariableItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    position: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    get: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    set: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }),
  onItemChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (VariableItem);

/***/ }),

/***/ "./resources/js/containers/clients/import-csv/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/containers/clients/import-csv/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var _helpers_echoClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/echoClient */ "./resources/js/helpers/echoClient.js");
/* harmony import */ var _containers_clients_import_csv_form_ClientsImportScoreScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/clients/import-csv/form/ClientsImportScoreScreen */ "./resources/js/containers/clients/import-csv/form/ClientsImportScoreScreen.js");
/* harmony import */ var _containers_clients_import_csv_form_ImportCsvForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/clients/import-csv/form/ImportCsvForm */ "./resources/js/containers/clients/import-csv/form/ImportCsvForm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function ImportCsvPage() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      importing = _useState2[0],
      setImporting = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      importingResult = _useState4[0],
      setImportingResult = _useState4[1];

  var authUser = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var userId = authUser.id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _helpers_echoClient__WEBPACK_IMPORTED_MODULE_7__["default"]["private"]("App.Models.User.".concat(userId)).listen("ClientsImportedFromCsv", function (data) {
      setImportingResult(data);
    });
  }, [userId]);

  var handleSubmit = function handleSubmit(values, _ref) {
    var setSubmitting = _ref.setSubmitting,
        setErrors = _ref.setErrors;
    var variablesArray = values.variables.toJS();
    var formData = new FormData();
    formData.set("integration_id", values.integration_id);
    formData.set("csv", values.csv);
    formData.set("phone_number_position", values.phone_number_position);

    for (var variableIndex in variablesArray) {
      formData.set("variables[".concat(variableIndex, "][name]"), variablesArray[variableIndex].name);
      formData.set("variables[".concat(variableIndex, "][position]"), variablesArray[variableIndex].position);
    }

    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("post", "/methods/clients/import-csv", {}, formData).data(function (data) {
      setImporting(data);
    }).validation(function (msg, errors) {
      setErrors(errors);
      setSubmitting(false);
    })["catch"](function () {
      setSubmitting(false);
    });
  };

  var gotImportResult = importing && importingResult && (importing === null || importing === void 0 ? void 0 : importing.id) === (importingResult === null || importingResult === void 0 ? void 0 : importingResult.id);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_2__["default"], null, t("clients.import-csv.title")), importing ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_clients_import_csv_form_ImportCsvForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
    handleSubmit: handleSubmit
  }), importing && !gotImportResult ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_5__["default"], null) : null, gotImportResult ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_clients_import_csv_form_ClientsImportScoreScreen__WEBPACK_IMPORTED_MODULE_8__["default"], {
    result: importingResult
  }) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (ImportCsvPage);

/***/ }),

/***/ "./resources/js/helpers/echoClient.js":
/*!********************************************!*\
  !*** ./resources/js/helpers/echoClient.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");

window.io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
var echoClient = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
  broadcaster: "socket.io",
  host: window.location.origin
});
/* harmony default export */ __webpack_exports__["default"] = (echoClient);

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

/***/ "./resources/js/helpers/selectLoaders/loadIntegrationSelectValue.js":
/*!**************************************************************************!*\
  !*** ./resources/js/helpers/selectLoaders/loadIntegrationSelectValue.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadIntegrationSelectValue; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadIntegrationSelectValue(id) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/integrations/".concat(id)).data(function (integration) {
      resolve({
        label: integration.name,
        value: integration.id,
        service: integration.service
      });
    });
  });
}

/***/ }),

/***/ 3:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);