(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[22],{

/***/ "./resources/js/components/form/CheckboxListField.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/form/CheckboxListField.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckboxListField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





function CheckboxListField(_ref) {
  var _errors$name, _errors$name3;

  var label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      setFieldValue = _ref.setFieldValue,
      value = _ref.value,
      options = _ref.options,
      labelListClass = _ref.labelListClass,
      labelClass = _ref.labelClass,
      formGroupClass = _ref.formGroupClass;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(formGroupClass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("d-flex checkbox-label", labelClass)
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      "is-invalid": !!((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
    })
  }, options.map(function (option) {
    var _errors$name2;

    var checked = value.includes(option.value);

    var onChange = function onChange() {
      if (checked) {
        setFieldValue(name, value.filter(function (val) {
          return val !== option.value;
        }));
      } else {
        var newValue = value.slice();
        newValue.push(option.value);
        setFieldValue(name, newValue);
      }
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
      key: option.value,
      htmlFor: option.value,
      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("d-flex", labelListClass)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CustomInput"], {
      id: option.value,
      name: "".concat(name, "[").concat(option.value, "]"),
      type: "checkbox",
      checked: checked,
      onChange: onChange,
      invalid: !!((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, option.label));
  })), ((_errors$name3 = errors[name]) === null || _errors$name3 === void 0 ? void 0 : _errors$name3.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Errors__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errors: errors[name]
  }) : null);
}
CheckboxListField.propTypes = {
  options: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  formGroupClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  labelListClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./resources/js/components/widgets/ErrorMessage.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/widgets/ErrorMessage.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");


function ErrorMessage() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, t("common.site-error-message"));
}

/***/ }),

/***/ "./resources/js/containers/siteConfigs/edit/form/SiteConfigColorSchemeForm.js":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/siteConfigs/edit/form/SiteConfigColorSchemeForm.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteConfigColorSchemeForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_SiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/SiteConfig */ "./resources/js/models/SiteConfig.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function SiteConfigColorSchemeForm(_ref) {
  var config = _ref.config,
      getHandleSubmit = _ref.getHandleSubmit;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t; //eslint-disable-next-line


  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getHandleSubmit(function (values) {
    return {
      value: values
    };
  }), [getHandleSubmit]);
  var initialValue = config.value || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "site-configs ml-sm-3",
    initialValues: {
      primary: initialValue.primary,
      secondary: initialValue.secondary
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref2) {
      var handleBlur = _ref2.handleBlur,
          values = _ref2.values,
          errors = _ref2.errors,
          isSubmitting = _ref2.isSubmitting,
          setFieldValue = _ref2.setFieldValue;

      var changeCssVars = function changeCssVars(name, value) {
        var c = _objectSpread({}, values);

        c[name] = value;
        var newCssVariables = ":root {--primary-color: ".concat(c.primary, ";--secondary-color: ").concat(c.secondary, ";}");
        var el = document.getElementById("color-variables");
        el.innerHTML = newCssVariables;
      };

      var setValue = function setValue(name, value) {
        setFieldValue(name, value);
        changeCssVars(name, value);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, config.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex flex-wrap"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "mr-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "primary",
        name: "primary",
        label: t("siteConfig.colorScheme.primary-label"),
        placeholder: t("siteConfig.colorScheme.primary-placeholder"),
        type: "text",
        setFieldValue: setValue,
        onBlur: handleBlur,
        value: values.primary,
        errors: errors
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "secondary",
        name: "secondary",
        label: t("siteConfig.colorScheme.secondary-label"),
        placeholder: t("siteConfig.colorScheme.secondary-placeholder"),
        type: "text",
        setFieldValue: setValue,
        onBlur: handleBlur,
        value: values.secondary,
        errors: errors
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "pt-2 px-4 mt-3 mb-5",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  });
}
SiteConfigColorSchemeForm.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_SiteConfig__WEBPACK_IMPORTED_MODULE_5__["default"]).isRequired,
  getHandleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/siteConfigs/edit/form/SiteConfigEditFormFactory.js":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/siteConfigs/edit/form/SiteConfigEditFormFactory.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteConfigEditFormFactory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_siteConfigs_edit_form_SiteConfigTextForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/containers/siteConfigs/edit/form/SiteConfigTextForm */ "./resources/js/containers/siteConfigs/edit/form/SiteConfigTextForm.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _models_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/SiteConfig */ "./resources/js/models/SiteConfig.js");
/* harmony import */ var _SiteConfigEmailCredentialsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SiteConfigEmailCredentialsForm */ "./resources/js/containers/siteConfigs/edit/form/SiteConfigEmailCredentialsForm.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _containers_siteConfigs_edit_form_SiteConfigImageForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/siteConfigs/edit/form/SiteConfigImageForm */ "./resources/js/containers/siteConfigs/edit/form/SiteConfigImageForm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_siteConfigs_edit_form_SiteConfigColorSchemeForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/siteConfigs/edit/form/SiteConfigColorSchemeForm */ "./resources/js/containers/siteConfigs/edit/form/SiteConfigColorSchemeForm.js");
/* harmony import */ var _containers_siteConfigs_edit_form_SiteConfigLanguagesForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/siteConfigs/edit/form/SiteConfigLanguagesForm */ "./resources/js/containers/siteConfigs/edit/form/SiteConfigLanguagesForm.js");
/* harmony import */ var _containers_siteConfigs_edit_form_SiteConfigFontsLinkForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/containers/siteConfigs/edit/form/SiteConfigFontsLinkForm */ "./resources/js/containers/siteConfigs/edit/form/SiteConfigFontsLinkForm.js");
/* harmony import */ var _containers_siteConfigs_edit_form_SiteConfigPoweredByLinkForm__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/containers/siteConfigs/edit/form/SiteConfigPoweredByLinkForm */ "./resources/js/containers/siteConfigs/edit/form/SiteConfigPoweredByLinkForm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function SiteConfigEditFormFactory(_ref) {
  var config = _ref.config;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  var id = config.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      saved = _useState2[0],
      setSaved = _useState2[1];

  var getHandleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (prepareValues) {
    return function (values, _ref2) {
      var setSubmitting = _ref2.setSubmitting,
          setErrors = _ref2.setErrors;
      var formattedValues = prepareValues(values);
      _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_2__["default"].call("patch", "/methods/site-configs/".concat(id), {}, formattedValues).then(function () {
        return setSaved(true);
      }).validation(function (message, errors) {
        var errorsFormatted = {};
        lodash_forEach__WEBPACK_IMPORTED_MODULE_6___default()(errors, function (val, key) {
          errorsFormatted[key.replace("value.", "")] = val;
        });
        setErrors(errorsFormatted);
        setSubmitting(false);
      })["finally"](function () {
        return setSubmitting(false);
      });
    };
  }, [id]);

  if (saved) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: "/site-configs"
    });
  }

  switch (config.id) {
    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_4__["FAVICON"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_siteConfigs_edit_form_SiteConfigImageForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: t("siteConfig.favicon.label"),
        helpText: t("siteConfig.favicon.help-text"),
        config: config,
        getHandleSubmit: getHandleSubmit,
        types: ["image/png", "image/x-icon", "image/vnd.microsoft.icon"]
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_4__["LOGO"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_siteConfigs_edit_form_SiteConfigImageForm__WEBPACK_IMPORTED_MODULE_7__["default"], {
        label: t("siteConfig.logo.label"),
        helpText: t("siteConfig.logo.help-text"),
        config: config,
        getHandleSubmit: getHandleSubmit,
        types: ["image/png"]
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_4__["EMAIL_CREDENTIALS"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SiteConfigEmailCredentialsForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
          config: config,
          getHandleSubmit: getHandleSubmit
        });
      }

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_4__["SITE_COLOR_SCHEME"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_siteConfigs_edit_form_SiteConfigColorSchemeForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
        config: config,
        getHandleSubmit: getHandleSubmit
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_4__["LANGUAGE_LIST"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_siteConfigs_edit_form_SiteConfigLanguagesForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
          config: config,
          getHandleSubmit: getHandleSubmit
        });
      }

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_4__["SET_OF_GOOGLE_FONTS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_siteConfigs_edit_form_SiteConfigFontsLinkForm__WEBPACK_IMPORTED_MODULE_11__["default"], {
        config: config,
        getHandleSubmit: getHandleSubmit
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_4__["SITE_DESCRIPTION"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_siteConfigs_edit_form_SiteConfigTextForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
        config: config,
        getHandleSubmit: getHandleSubmit,
        type: "textarea"
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_4__["POWERED_BY_LINK_FOR_CHATBOX"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_siteConfigs_edit_form_SiteConfigPoweredByLinkForm__WEBPACK_IMPORTED_MODULE_12__["default"], {
        config: config,
        getHandleSubmit: getHandleSubmit
      });

    default:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_siteConfigs_edit_form_SiteConfigTextForm__WEBPACK_IMPORTED_MODULE_1__["default"], {
          config: config,
          getHandleSubmit: getHandleSubmit
        });
      }
  }
}

/***/ }),

/***/ "./resources/js/containers/siteConfigs/edit/form/SiteConfigEmailCredentialsForm.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/containers/siteConfigs/edit/form/SiteConfigEmailCredentialsForm.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteConfigEmailCredentialsForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_SiteConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/models/SiteConfig */ "./resources/js/models/SiteConfig.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");
/* harmony import */ var _components_form_NumberField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/form/NumberField */ "./resources/js/components/form/NumberField.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_form_PasswordField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/form/PasswordField */ "./resources/js/components/form/PasswordField.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");












function SiteConfigEmailCredentialsForm(_ref) {
  var config = _ref.config,
      getHandleSubmit = _ref.getHandleSubmit;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t; //eslint-disable-next-line


  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getHandleSubmit(function (values) {
    return {
      value: values
    };
  }), [getHandleSubmit]);
  var emailCredentials = config.value || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "site-configs ml-sm-3",
    initialValues: {
      customCredentials: emailCredentials.customCredentials || false,
      MAIL_HOST: emailCredentials.MAIL_HOST || "",
      MAIL_PORT: emailCredentials.MAIL_PORT || "",
      MAIL_PASSWORD: emailCredentials.MAIL_PASSWORD || "",
      MAIL_USERNAME: emailCredentials.MAIL_USERNAME || "",
      MAIL_FROM_NAME: emailCredentials.MAIL_FROM_NAME || "",
      MAIL_ENCRYPTION: emailCredentials.MAIL_ENCRYPTION,
      MAIL_FROM_ADDRESS: emailCredentials.MAIL_FROM_ADDRESS
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref2) {
      var handleChange = _ref2.handleChange,
          handleBlur = _ref2.handleBlur,
          values = _ref2.values,
          errors = _ref2.errors,
          isSubmitting = _ref2.isSubmitting,
          setFieldValue = _ref2.setFieldValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_11__["default"], null, config.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_7__["default"], {
        labelClass: "align-items-center",
        id: "customCredentials",
        name: "customCredentials",
        label: t("siteConfig.email.use-custom-credentials-label"),
        setFieldValue: setFieldValue,
        onBlur: handleBlur,
        value: values.customCredentials,
        errors: errors
      }), values.customCredentials ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "site-config-email-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xs: 12,
        sm: 6,
        lg: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: "MAIL_HOST",
        name: "MAIL_HOST",
        label: t("siteConfig.email.mail-host-label"),
        placeholder: t("siteConfig.email.mail-host-placeholder"),
        type: "text",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.MAIL_HOST,
        errors: errors
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xs: 12,
        sm: 6,
        lg: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_NumberField__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "MAIL_PORT",
        name: "MAIL_PORT",
        label: t("siteConfig.email.mail-port-label"),
        placeholder: t("siteConfig.email.mail-port-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.MAIL_PORT,
        errors: errors
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xs: 12,
        sm: 6,
        lg: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: "MAIL_ENCRYPTION",
        name: "MAIL_ENCRYPTION",
        label: t("siteConfig.email.mail-encryption-label"),
        placeholder: t("siteConfig.email.mail-encryption-placeholder"),
        type: "text",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.MAIL_ENCRYPTION,
        errors: errors
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "site-config-email-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xs: 12,
        sm: 6,
        lg: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_PasswordField__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "MAIL_USERNAME",
        name: "MAIL_USERNAME",
        label: t("siteConfig.email.mail-username-label"),
        placeholder: t("siteConfig.email.mail-username-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.MAIL_USERNAME,
        errors: errors
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xs: 12,
        sm: 6,
        lg: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_PasswordField__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: "MAIL_PASSWORD",
        name: "MAIL_PASSWORD",
        label: t("siteConfig.email.mail-password-label"),
        placeholder: t("siteConfig.email.mail-password-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.MAIL_PASSWORD,
        errors: errors
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], {
        className: "site-config-email-form"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xs: 12,
        sm: 6,
        lg: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: "MAIL_FROM_NAME",
        name: "MAIL_FROM_NAME",
        label: t("siteConfig.email.mail-from-label"),
        placeholder: t("siteConfig.email.mail-from-placeholder"),
        type: "text",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.MAIL_FROM_NAME,
        errors: errors
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xs: 12,
        sm: 6,
        lg: 4
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        id: "MAIL_FROM_ADDRESS",
        name: "MAIL_FROM_ADDRESS",
        label: t("siteConfig.email.mail-from-address-label"),
        placeholder: t("siteConfig.email.mail-from-address-placeholder"),
        type: "email",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.MAIL_FROM_ADDRESS,
        errors: errors
      })))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "pt-2 px-4 mt-3 mb-5",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  });
}
SiteConfigEmailCredentialsForm.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_SiteConfig__WEBPACK_IMPORTED_MODULE_6__["default"]).isRequired,
  getHandleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/siteConfigs/edit/form/SiteConfigFontsLinkForm.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/containers/siteConfigs/edit/form/SiteConfigFontsLinkForm.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteConfigFontsLinkForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_SiteConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/models/SiteConfig */ "./resources/js/models/SiteConfig.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");








function SiteConfigFontsLinkForm(_ref) {
  var config = _ref.config,
      getHandleSubmit = _ref.getHandleSubmit;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t; //eslint-disable-next-line


  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getHandleSubmit(function (values) {
    return values;
  }), [getHandleSubmit]);

  var info = function info() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "https://fonts.google.com/?selection.family=".concat(window.siteFonts.join("|")),
      target: "_blank"
    }, t("siteConfig.fonts.info"));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "site-configs ml-sm-3",
    initialValues: {
      value: config.value || ""
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref2) {
      var handleChange = _ref2.handleChange,
          handleBlur = _ref2.handleBlur,
          values = _ref2.values,
          errors = _ref2.errors,
          isSubmitting = _ref2.isSubmitting;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, config.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "limiter",
        id: "value",
        name: "value",
        label: info,
        placeholder: t("siteConfig.text.placeholder"),
        type: "text",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.value,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "pt-2 px-4 mt-3 mb-5",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  });
}
SiteConfigFontsLinkForm.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_SiteConfig__WEBPACK_IMPORTED_MODULE_6__["default"]).isRequired,
  getHandleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/siteConfigs/edit/form/SiteConfigImageForm.js":
/*!******************************************************************************!*\
  !*** ./resources/js/containers/siteConfigs/edit/form/SiteConfigImageForm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteConfigImageForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_SiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/SiteConfig */ "./resources/js/models/SiteConfig.js");
/* harmony import */ var _components_form_ImageField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/ImageField */ "./resources/js/components/form/ImageField.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");








function SiteConfigImageForm(_ref) {
  var helpText = _ref.helpText,
      types = _ref.types,
      config = _ref.config,
      getHandleSubmit = _ref.getHandleSubmit;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t; //eslint-disable-next-line


  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getHandleSubmit(function (values) {
    return values;
  }), [getHandleSubmit]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "site-configs ml-sm-3",
    initialValues: {
      value: config.value || []
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref2) {
      var handleBlur = _ref2.handleBlur,
          values = _ref2.values,
          errors = _ref2.errors,
          isSubmitting = _ref2.isSubmitting,
          setFieldValue = _ref2.setFieldValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, config.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ImageField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "value",
        name: "value",
        label: helpText,
        setFieldValue: setFieldValue,
        onBlur: handleBlur,
        value: values.value,
        errors: errors,
        maxFilesCount: 1,
        types: types
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "pt-2 px-4 mt-3 mb-5",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  });
}
SiteConfigImageForm.propTypes = {
  helpText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  types: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_SiteConfig__WEBPACK_IMPORTED_MODULE_5__["default"]).isRequired,
  getHandleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/siteConfigs/edit/form/SiteConfigLanguagesForm.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/containers/siteConfigs/edit/form/SiteConfigLanguagesForm.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteConfigLanguagesForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_SiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/SiteConfig */ "./resources/js/models/SiteConfig.js");
/* harmony import */ var _components_form_CheckboxListField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/CheckboxListField */ "./resources/js/components/form/CheckboxListField.js");
/* harmony import */ var _helpers_client_AxiosClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/client/AxiosClient */ "./resources/js/helpers/client/AxiosClient.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _helpers_languagesToSelectFormat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/languagesToSelectFormat */ "./resources/js/helpers/languagesToSelectFormat.js");
/* harmony import */ var _components_form_SelectField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/form/SelectField */ "./resources/js/components/form/SelectField.js");
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function SiteConfigLanguagesForm(_ref) {
  var _config$value, _config$value2;

  var config = _ref.config,
      getHandleSubmit = _ref.getHandleSubmit;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      languageOptions = _useState2[0],
      setLanguageOptions = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    new _helpers_client_AxiosClient__WEBPACK_IMPORTED_MODULE_7__["default"](window.availableLanguagesListUrl).call("get").then(function (_ref2) {
      var data = _ref2.data;
      setLanguageOptions(Object(_helpers_languagesToSelectFormat__WEBPACK_IMPORTED_MODULE_9__["default"])(data));
    });
  }, [setLanguageOptions]);
  var languages = languageOptions ? lodash_map__WEBPACK_IMPORTED_MODULE_8___default()(languageOptions, "value") : []; //eslint-disable-next-line

  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getHandleSubmit(function (values) {
    return {
      value: {
        languages: values.languages.filter(function (val) {
          return languages.includes(val);
        }),
        defaultLanguage: values.defaultLanguage
      }
    };
  }), [getHandleSubmit, languages]);

  if (!languageOptions) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_11__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "site-configs ml-sm-3",
    initialValues: {
      languages: ((_config$value = config.value) === null || _config$value === void 0 ? void 0 : _config$value.languages) || [],
      defaultLanguage: (_config$value2 = config.value) === null || _config$value2 === void 0 ? void 0 : _config$value2.defaultLanguage
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref3) {
      var values = _ref3.values,
          errors = _ref3.errors,
          isSubmitting = _ref3.isSubmitting,
          _setFieldValue = _ref3.setFieldValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_12__["default"], null, config.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxListField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        labelListClass: "align-items-center",
        label: t("siteConfig.language.available-languages-label"),
        name: "languages",
        value: values.languages,
        setFieldValue: function setFieldValue(name, value) {
          if (!value.includes(values.defaultLanguage)) {
            _setFieldValue("defaultLanguage", null);
          }

          _setFieldValue(name, value);
        },
        options: languageOptions,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SelectField__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "limiter",
        label: t("siteConfig.language.default-language-label"),
        name: "defaultLanguage",
        value: values.defaultLanguage,
        setFieldValue: _setFieldValue,
        options: languageOptions.filter(function (option) {
          return values.languages.includes(option.value);
        }),
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "pt-2 px-4 mt-3 mb-5",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  });
}
SiteConfigLanguagesForm.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_SiteConfig__WEBPACK_IMPORTED_MODULE_5__["default"]).isRequired,
  getHandleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/siteConfigs/edit/form/SiteConfigPoweredByLinkForm.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/containers/siteConfigs/edit/form/SiteConfigPoweredByLinkForm.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteConfigPoweredByLinkForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_SiteConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/models/SiteConfig */ "./resources/js/models/SiteConfig.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");








function SiteConfigPoweredByLinkForm(_ref) {
  var config = _ref.config,
      getHandleSubmit = _ref.getHandleSubmit;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t; //eslint-disable-next-line


  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getHandleSubmit(function (values) {
    return {
      value: values
    };
  }), [getHandleSubmit]);
  var initialValue = config.value || {};
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "site-configs ml-sm-3",
    initialValues: {
      name: initialValue.name || "",
      link: initialValue.link || ""
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref2) {
      var handleBlur = _ref2.handleBlur,
          values = _ref2.values,
          errors = _ref2.errors,
          isSubmitting = _ref2.isSubmitting,
          handleChange = _ref2.handleChange;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, config.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "limiter",
        id: "name",
        name: "name",
        label: t("siteConfig.poweredBy.name-label"),
        placeholder: t("siteConfig.poweredBy.name-placeholder"),
        type: "text",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.name,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "limiter",
        id: "link",
        name: "link",
        label: t("siteConfig.poweredBy.link-label"),
        placeholder: t("siteConfig.poweredBy.link-placeholder"),
        type: "text",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.link,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "pt-2 px-4 mt-3 mb-5",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  });
}
SiteConfigPoweredByLinkForm.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_SiteConfig__WEBPACK_IMPORTED_MODULE_6__["default"]).isRequired,
  getHandleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/siteConfigs/edit/form/SiteConfigTextForm.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/containers/siteConfigs/edit/form/SiteConfigTextForm.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteConfigTextForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_SiteConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/models/SiteConfig */ "./resources/js/models/SiteConfig.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");








function SiteConfigTextForm(_ref) {
  var config = _ref.config,
      getHandleSubmit = _ref.getHandleSubmit,
      type = _ref.type;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t; //eslint-disable-next-line


  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(getHandleSubmit(function (values) {
    return values;
  }), [getHandleSubmit]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "site-configs ml-sm-3",
    initialValues: {
      value: config.value || ""
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref2) {
      var handleChange = _ref2.handleChange,
          handleBlur = _ref2.handleBlur,
          values = _ref2.values,
          errors = _ref2.errors,
          isSubmitting = _ref2.isSubmitting;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_7__["default"], null, config.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "limiter",
        id: "value",
        name: "value",
        placeholder: t("siteConfig.text.placeholder"),
        type: type,
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.value,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "pt-2 px-4 mt-3 mb-5",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  });
}
SiteConfigTextForm.defaultProps = {
  type: "text"
};
SiteConfigTextForm.propTypes = {
  config: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_SiteConfig__WEBPACK_IMPORTED_MODULE_6__["default"]).isRequired,
  getHandleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./resources/js/containers/siteConfigs/edit/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/containers/siteConfigs/edit/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/ErrorMessage */ "./resources/js/components/widgets/ErrorMessage.js");
/* harmony import */ var _models_SiteConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/SiteConfig */ "./resources/js/models/SiteConfig.js");
/* harmony import */ var _redux_reducers_siteConfigs_actionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/reducers/siteConfigs/actionCreators */ "./resources/js/redux/reducers/siteConfigs/actionCreators.js");
/* harmony import */ var _containers_siteConfigs_edit_form_SiteConfigEditFormFactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/siteConfigs/edit/form/SiteConfigEditFormFactory */ "./resources/js/containers/siteConfigs/edit/form/SiteConfigEditFormFactory.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");











function SiteConfigEdit(_ref) {
  var loading = _ref.loading,
      item = _ref.item,
      error = _ref.error,
      dispatch = _ref.dispatch;
  var params = Object(react_router__WEBPACK_IMPORTED_MODULE_8__["useParams"])();
  var id = params.id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_reducers_siteConfigs_actionCreators__WEBPACK_IMPORTED_MODULE_6__["loadSiteConfig"])(id));
  }, [id, dispatch]);
  var content;

  if (loading) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_9__["default"], null);
  } else if (item && !error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_siteConfigs_edit_form_SiteConfigEditFormFactory__WEBPACK_IMPORTED_MODULE_7__["default"], {
      config: item
    });
  } else if (error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, content);
}

SiteConfigEdit.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_SiteConfig__WEBPACK_IMPORTED_MODULE_5__["default"]),
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var stateToProps = function stateToProps(state) {
  var siteConfigs = state.siteConfigs;
  return {
    loading: siteConfigs.get("loading"),
    item: siteConfigs.get("item"),
    error: siteConfigs.get("error"),
    data: siteConfigs.get("data").toArray()
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(stateToProps)(SiteConfigEdit));

/***/ }),

/***/ "./resources/js/redux/helpers/getStandardIndexActions.js":
/*!***************************************************************!*\
  !*** ./resources/js/redux/helpers/getStandardIndexActions.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getStandardIndexActions; });
function getStandardIndexActions(ACTIONS) {
  var loading = function loading() {
    return {
      type: ACTIONS.LOADING
    };
  };

  var error = function error(data) {
    return {
      type: ACTIONS.LOADING_ERROR,
      payload: data
    };
  };

  var itemsListLoaded = function itemsListLoaded(data) {
    return {
      type: ACTIONS.ITEMS_LOADED,
      payload: data
    };
  };

  return {
    loading: loading,
    error: error,
    itemsListLoaded: itemsListLoaded
  };
}

/***/ }),

/***/ "./resources/js/redux/reducers/siteConfigs/actionCreators.js":
/*!*******************************************************************!*\
  !*** ./resources/js/redux/reducers/siteConfigs/actionCreators.js ***!
  \*******************************************************************/
/*! exports provided: loadSiteConfigs, loadSiteConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSiteConfigs", function() { return loadSiteConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSiteConfig", function() { return loadSiteConfig; });
/* harmony import */ var _redux_reducers_siteConfigs_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/siteConfigs/actionTypes */ "./resources/js/redux/reducers/siteConfigs/actionTypes.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _redux_helpers_getStandardIndexActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/helpers/getStandardIndexActions */ "./resources/js/redux/helpers/getStandardIndexActions.js");




var _getStandardIndexActi = Object(_redux_helpers_getStandardIndexActions__WEBPACK_IMPORTED_MODULE_2__["default"])(_redux_reducers_siteConfigs_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"]),
    loading = _getStandardIndexActi.loading,
    itemsListLoaded = _getStandardIndexActi.itemsListLoaded,
    error = _getStandardIndexActi.error;

var itemLoaded = function itemLoaded(data) {
  return {
    type: _redux_reducers_siteConfigs_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ITEM_LOADED,
    payload: data
  };
};

var loadSiteConfigs = function loadSiteConfigs() {
  return function (dispatch) {
    dispatch(loading());
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/site-configs", {}, {}).then(function (response) {
      return dispatch(itemsListLoaded(response.data));
    })["catch"](function (response) {
      return dispatch(error(response));
    });
  };
};
var loadSiteConfig = function loadSiteConfig(id) {
  return function (dispatch) {
    dispatch(loading());
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/site-configs/".concat(id), {}, {}).then(function (response) {
      return dispatch(itemLoaded(response.data));
    })["catch"](function (response) {
      return dispatch(error(response));
    });
  };
};

/***/ })

}]);