(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

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

/***/ "./resources/js/containers/user/create/index.js":
/*!******************************************************!*\
  !*** ./resources/js/containers/user/create/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CreateUserPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_form_PhoneField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/PhoneField */ "./resources/js/components/form/PhoneField.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _helpers_getTimezone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/getTimezone */ "./resources/js/helpers/getTimezone.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _components_form_SelectField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/form/SelectField */ "./resources/js/components/form/SelectField.js");
/* harmony import */ var _containers_user_helpers_getLoadRoleOptions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/containers/user/helpers/getLoadRoleOptions */ "./resources/js/containers/user/helpers/getLoadRoleOptions.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/models/User */ "./resources/js/models/User.js");
/* harmony import */ var _components_form_TagsField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/form/TagsField */ "./resources/js/components/form/TagsField.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















function CreateUserPage() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      redirect = _useState2[0],
      setRedirect = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      companyDepartments = _useState4[0],
      setCompanyDepartments = _useState4[1];

  var userId = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_15__["default"])().id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_10__["default"].call("get", "/methods/user/".concat(userId, "/departments")).then(function (response) {
      var formattedDepartments = response.data.map(function (department) {
        return {
          label: department.name,
          value: department.id
        };
      });
      setCompanyDepartments(formattedDepartments);
    });
  }, [userId]);
  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
        setErrors = _ref2.setErrors;

    var departments = _ref.departments,
        data = _objectWithoutProperties(_ref, ["departments"]);

    var formattedData = _objectSpread({
      departments: departments ? departments.map(function (option) {
        return option.value;
      }) : []
    }, data);

    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_10__["default"].call("post", "/methods/user", formattedData).data(function () {
      setRedirect(true);
    }).validation(function (message, errors) {
      setErrors(errors);
    })["finally"](function () {
      setSubmitting(false);
    });
  }, [setRedirect]);

  if (redirect) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__["Redirect"], {
      to: "/users/1"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_2__["default"], null, t("user.create-page.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_5__["default"], {
    initialValues: {
      name: "",
      email: "",
      phone: "",
      timezone: Object(_helpers_getTimezone__WEBPACK_IMPORTED_MODULE_9__["default"])(),
      role: _models_User__WEBPACK_IMPORTED_MODULE_13__["ROLE_OPERATOR"],
      departments: []
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref3) {
      var handleChange = _ref3.handleChange,
          handleBlur = _ref3.handleBlur,
          values = _ref3.values,
          errors = _ref3.errors,
          isSubmitting = _ref3.isSubmitting,
          setFieldValue = _ref3.setFieldValue;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Col"], {
        xl: 4,
        lg: 5,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "limiter",
        id: "name",
        name: "name",
        label: t("user.create-page.name-label"),
        placeholder: t("user.create-page.name-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.name,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: "limiter",
        id: "email",
        name: "email",
        label: t("user.create-page.email-label"),
        placeholder: t("user.create-page.email-placeholder"),
        type: "email",
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.email,
        errors: errors
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_PhoneField__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "limiter",
        id: "phone",
        name: "phone",
        label: t("user.create-page.phone-label"),
        placeholder: t("user.create-page.phone-placeholder"),
        onChange: handleChange,
        onBlur: handleBlur,
        value: values.phone,
        errors: errors
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_16__["Col"], {
        xl: 4,
        lg: 5,
        md: 6
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SelectField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "limiter",
        id: "role",
        label: t("user.create-page.role-label"),
        name: "role",
        setFieldValue: setFieldValue,
        value: values.role,
        errors: errors,
        options: Object(_containers_user_helpers_getLoadRoleOptions__WEBPACK_IMPORTED_MODULE_12__["getRoleOptions"])(t).filter(function (role) {
          return role.value !== _models_User__WEBPACK_IMPORTED_MODULE_13__["ROLE_SYSTEM_ADMINISTRATOR"];
        }),
        isClearable: false
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TagsField__WEBPACK_IMPORTED_MODULE_14__["default"], {
        formGroupClass: "limiter",
        id: "departments",
        name: "departments",
        label: t("user.create-page.departments-label"),
        options: companyDepartments,
        setFieldValue: setFieldValue,
        onBlur: handleBlur,
        value: values.departments,
        errors: errors
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: "pt-2 px-4 mt-3 mb-5",
        disabled: isSubmitting
      }, t("common.saveBtnText")));
    }
  }));
}

/***/ })

}]);