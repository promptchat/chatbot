(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./resources/js/containers/auth/configureProject/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/containers/auth/configureProject/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigureProjectPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_form_PasswordField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/PasswordField */ "./resources/js/components/form/PasswordField.js");
/* harmony import */ var _components_layout_AuthLayout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/layout/AuthLayout */ "./resources/js/components/layout/AuthLayout.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _helpers_getTimezone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/getTimezone */ "./resources/js/helpers/getTimezone.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");











function ConfigureProjectPage() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
      t = _useTranslation.t;

  var authUser = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_10__["default"])();
  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values, _ref) {
    var setSubmitting = _ref.setSubmitting,
        setErrors = _ref.setErrors;
    values.timezone = Object(_helpers_getTimezone__WEBPACK_IMPORTED_MODULE_9__["default"])();
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__["default"].call("post", "/register-system-administrator", {}, values).then(function (response) {
      window.location.href = response.data.url;
    }).validation(function (message, errors) {
      setErrors(errors);
      setSubmitting(false);
    })["catch"](function () {
      setSubmitting(false);
    });
  }, []);

  if (authUser) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
      to: "/home"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_AuthLayout__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: t("configure.title")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: ""
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref2) {
      var handleChange = _ref2.handleChange,
          handleBlur = _ref2.handleBlur,
          values = _ref2.values,
          errors = _ref2.errors,
          isSubmitting = _ref2.isSubmitting;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "name",
        name: "name",
        label: t("configure.name-label"),
        placeholder: t("configure.name-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.name,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: "email",
        name: "email",
        label: t("configure.email-label"),
        placeholder: t("configure.email-placeholder"),
        type: "email",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.email,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_PasswordField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "password",
        name: "password",
        label: t("configure.password-label"),
        placeholder: t("configure.password-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.password,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_PasswordField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        id: "password_confirmation",
        name: "password_confirmation",
        label: t("configure.password-confirmation-label"),
        placeholder: t("configure.password-confirmation-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.password_confirmation,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "limiter text-center mb-2"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "btn-radius btn-radius-blue mx-auto",
        disabled: isSubmitting
      }, t("configure.register-btn"))));
    }
  }));
}

/***/ })

}]);