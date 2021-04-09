(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

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
      onConfirm = _ref.onConfirm,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "success" : _ref$type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "",
    show: show,
    onConfirm: onConfirm,
    type: type
  }, text);
}
SuccessAlert.propTypes = {
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./resources/js/containers/auth/resetPassword/index.js":
/*!*************************************************************!*\
  !*** ./resources/js/containers/auth/resetPassword/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResetPasswordPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _components_layout_AuthLayout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/layout/AuthLayout */ "./resources/js/components/layout/AuthLayout.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _components_form_PasswordField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/form/PasswordField */ "./resources/js/components/form/PasswordField.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var _components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/widgets/SuccessAlert */ "./resources/js/components/widgets/SuccessAlert.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function ResetPasswordPage(_ref) {
  var location = _ref.location,
      match = _ref.match;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      passwordChanged = _useState2[0],
      setPasswordChanged = _useState2[1];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var token = match === null || match === void 0 ? void 0 : match.params.token;
  var email = new URLSearchParams(location === null || location === void 0 ? void 0 : location.search).get("email");
  var authUser = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
        setErrors = _ref2.setErrors;
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_7__["default"].call("post", "/reset-password", {}, _objectSpread({
      token: token,
      email: email
    }, values)).then(function () {
      setPasswordChanged(true);
    }).validation(function (message, errors) {
      setErrors(errors);
      setSubmitting(false);
    });
  }, [email, token, setPasswordChanged]);

  if (authUser) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: "/home"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_AuthLayout__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: t("resetPassword.title")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
    show: passwordChanged,
    text: t("resetPassword.password-changed-message"),
    onConfirm: function onConfirm() {
      window.location.href = "/login";
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "auth-form",
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_PasswordField__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "password",
        name: "password",
        label: t("resetPassword.password-label"),
        placeholder: t("register.password-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.password,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_PasswordField__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: "password_confirmation",
        name: "password_confirmation",
        label: t("resetPassword.password-confirmation-label"),
        placeholder: t("resetPassword.password-confirmation-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.password_confirmation,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "limiter limiter-auth text-center my-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "btn-radius btn-radius-blue mx-auto",
        disabled: isSubmitting
      }, t("resetPassword.reset-password-btn"))));
    }
  }));
}
ResetPasswordPage.propTypes = {
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ })

}]);