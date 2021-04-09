(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

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

/***/ })

}]);