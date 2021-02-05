(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./resources/js/components/form/ColorField.js":
/*!****************************************************!*\
  !*** ./resources/js/components/form/ColorField.js ***!
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
/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-color */ "./node_modules/react-color/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap_es_ButtonDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/ButtonDropdown */ "./node_modules/reactstrap/es/ButtonDropdown.js");
/* harmony import */ var reactstrap_es_DropdownToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/DropdownToggle */ "./node_modules/reactstrap/es/DropdownToggle.js");
/* harmony import */ var reactstrap_es_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap/es/DropdownMenu */ "./node_modules/reactstrap/es/DropdownMenu.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function ColorField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      value = _ref.value,
      setFieldValue = _ref.setFieldValue,
      colors = _ref.colors,
      className = _ref.className,
      insideButton = _ref.insideButton,
      triangle = _ref.triangle;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownOpen = _useState2[0],
      setOpen = _useState2[1];

  var toggle = function toggle() {
    return setOpen(!dropdownOpen);
  };

  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (color) {
    setFieldValue(name, color.hex);
  }, [setFieldValue, name]);
  var fullClassName = classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, {
    "is-invalid": !!((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
  });
  var input = colors ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_4__["TwitterPicker"], {
    color: value || undefined,
    colors: (colors === null || colors === void 0 ? void 0 : colors.length) || undefined,
    onChangeComplete: onChange,
    className: fullClassName,
    triangle: insideButton ? "hide" : triangle
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_color__WEBPACK_IMPORTED_MODULE_4__["ChromePicker"], {
    color: value || undefined,
    onChangeComplete: onChange,
    className: fullClassName
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: id
  }, label), insideButton ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    "data-name": name
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_ButtonDropdown__WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: dropdownOpen,
    toggle: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_DropdownToggle__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "color-field-toggle d-block rounded",
    style: {
      background: value
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_DropdownMenu__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "outline-none"
  }, input))) : input, ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Errors__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errors: errors[name]
  }) : null);
}

ColorField.defaultProps = {
  triangle: "top"
};
ColorField.propTypes = {
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  colors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  triangle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  insideButton: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ColorField));

/***/ }),

/***/ "./resources/js/components/form/ImageField.js":
/*!****************************************************!*\
  !*** ./resources/js/components/form/ImageField.js ***!
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
/* harmony import */ var _components_form_base_ImageInput_ImageInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/base/ImageInput/ImageInput */ "./resources/js/components/form/base/ImageInput/ImageInput.js");






function ImageField(_ref) {
  var _errors$name;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      maxFilesCount = _ref.maxFilesCount,
      value = _ref.value,
      setFieldValue = _ref.setFieldValue,
      types = _ref.types;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: id
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_ImageInput_ImageInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    files: value || [],
    onChange: function onChange(value, images) {
      return setFieldValue(name, value, images);
    },
    maxFilesCount: maxFilesCount,
    types: types
  }), ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Errors__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errors: errors[name]
  }) : null);
}

ImageField.defaultProps = {
  types: ["image/*"]
};
ImageField.propTypes = {
  types: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  maxFilesCount: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ImageField));

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

/***/ })

}]);