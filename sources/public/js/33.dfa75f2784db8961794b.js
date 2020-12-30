(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

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
      onConfirm = _ref.onConfirm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "",
    show: show,
    onConfirm: onConfirm,
    type: "success"
  }, text);
}
SuccessAlert.propTypes = {
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./resources/js/containers/clients/create-client/form/CreateClientFormView.js":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/clients/create-client/form/CreateClientFormView.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _components_form_NumberField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/NumberField */ "./resources/js/components/form/NumberField.js");
/* harmony import */ var _containers_clients_create_client_form_VariableItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/clients/create-client/form/VariableItem */ "./resources/js/containers/clients/create-client/form/VariableItem.js");
/* harmony import */ var _components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/AsyncSelectField */ "./resources/js/components/form/AsyncSelectField.js");
/* harmony import */ var _helpers_selectLoaders_loadIntegrationSelectValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/helpers/selectLoaders/loadIntegrationSelectValue */ "./resources/js/helpers/selectLoaders/loadIntegrationSelectValue.js");
/* harmony import */ var _helpers_selectLoaders_loadIntegrationSelectOptions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/helpers/selectLoaders/loadIntegrationSelectOptions */ "./resources/js/helpers/selectLoaders/loadIntegrationSelectOptions.js");
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");











var loadWebIntegrationsSelectOptions = Object(_helpers_selectLoaders_loadIntegrationSelectOptions__WEBPACK_IMPORTED_MODULE_9__["getLoadIntegrationSelectOptions"])(_models_Integration__WEBPACK_IMPORTED_MODULE_10__["SERVICE_SMS_CHAT_ORG"]);

function CreateClientFormView(_ref) {
  var setFieldValue = _ref.setFieldValue,
      handleClickAddVariable = _ref.handleClickAddVariable,
      handleVariableChange = _ref.handleVariableChange,
      handleClickRemoveVariable = _ref.handleClickRemoveVariable,
      handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      values = _ref.values,
      errors = _ref.errors,
      isSubmitting = _ref.isSubmitting;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    label: t("clients.create-page.integration-label"),
    name: "integration_id",
    value: values.integration_id,
    setFieldValue: setFieldValue,
    loadOptions: loadWebIntegrationsSelectOptions,
    loadValue: _helpers_selectLoaders_loadIntegrationSelectValue__WEBPACK_IMPORTED_MODULE_8__["default"],
    errors: errors,
    isClearable: true
  }), values.integration_id ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_NumberField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "phone_number",
    name: "phone_number",
    label: t("clients.create-page.phone-number-label"),
    placeholder: t("clients.create-page.phone-number-placeholder"),
    value: values.phone_number,
    onChange: handleChange,
    onBlur: handleBlur,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, values.variables.map(function (variable, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_clients_create_client_form_VariableItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "mb-3",
    type: "button",
    onClick: handleClickAddVariable
  }, t("clients.create-page.add-variable-btn")))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "pt-2 px-4 mt-3 mb-sm-4 mb-5",
    disabled: isSubmitting || !values.integration_id
  }, t("common.saveBtnText")));
}

CreateClientFormView.propTypes = {
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleClickAddVariable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleVariableChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleClickRemoveVariable: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  isSubmitting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (CreateClientFormView);

/***/ }),

/***/ "./resources/js/containers/clients/create-client/form/VariableItem.js":
/*!****************************************************************************!*\
  !*** ./resources/js/containers/clients/create-client/form/VariableItem.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");






function VariableItem(_ref) {
  var item = _ref.item,
      onItemChange = _ref.onItemChange,
      onRemove = _ref.onRemove,
      errors = _ref.errors,
      index = _ref.index;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-sm-nowrap flex-wrap align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mr-sm-3 mr-2",
    id: "variables.".concat(index, ".name"),
    name: "variables.".concat(index, ".name"),
    label: t("clients.create-page.variable-name-label"),
    placeholder: t("clients.create-page.variable-name-placeholder"),
    value: item.get("name"),
    onChange: function onChange(e) {
      onItemChange(item.set("name", e.target.value));
    },
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mr-sm-3 mr-2",
    id: "variables.".concat(index, ".value"),
    name: "variables.".concat(index, ".value"),
    label: t("clients.create-page.variable-value-label"),
    placeholder: t("clients.create-page.variable-value-placeholder"),
    value: item.get("value"),
    onChange: function onChange(e) {
      onItemChange(item.set("value", e.target.value));
    },
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link no-shadow p-sm-2 py-2 px-1 mb-3",
    type: "button",
    onClick: onRemove
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaTrashAlt"], {
    className: "color-gray icon-size-20"
  })));
}

VariableItem.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
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

/***/ "./resources/js/containers/clients/create-client/index.js":
/*!****************************************************************!*\
  !*** ./resources/js/containers/clients/create-client/index.js ***!
  \****************************************************************/
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
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _containers_clients_create_client_form_CreateClientFormView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/clients/create-client/form/CreateClientFormView */ "./resources/js/containers/clients/create-client/form/CreateClientFormView.js");
/* harmony import */ var _components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/widgets/SuccessAlert */ "./resources/js/components/widgets/SuccessAlert.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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













function CreateClientPage() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      success = _useState2[0],
      setSuccess = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      redirect = _useState4[0],
      setRedirect = _useState4[1];

  var handleSubmit = function handleSubmit(values, _ref) {
    var setSubmitting = _ref.setSubmitting,
        setErrors = _ref.setErrors;
    var formattedData = {
      integration_id: values.integration_id,
      phone_number: values.phone_number,
      variables: values.variables.toJS()
    };
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("post", "/methods/clients", {}, formattedData).data(function () {
      setSuccess(true);
      setSubmitting(false);
    }).validation(function (msg, errors) {
      setErrors(errors);
      setSubmitting(false);
    })["catch"](function () {
      setSubmitting(false);
    });
  };

  if (redirect) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_9__["Redirect"], {
      to: "/clients/1"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_2__["default"], null, t("clients.create-page.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
    className: "clients-create mb-4 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], {
    className: "rounded px-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "limiter",
    initialValues: {
      integration_id: null,
      phone_number: "",
      variables: Object(immutable__WEBPACK_IMPORTED_MODULE_5__["List"])([])
    },
    handleSubmit: handleSubmit,
    renderForm: function renderForm(_ref2) {
      var values = _ref2.values,
          setFieldValue = _ref2.setFieldValue,
          errors = _ref2.errors,
          setErrors = _ref2.setErrors,
          props = _objectWithoutProperties(_ref2, ["values", "setFieldValue", "errors", "setErrors"]);

      var handleClickAddVariable = function handleClickAddVariable() {
        setFieldValue("variables", values.variables.push(Object(immutable__WEBPACK_IMPORTED_MODULE_5__["Map"])({
          name: "",
          value: ""
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

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_clients_create_client_form_CreateClientFormView__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, props, {
        values: values,
        setErrors: setErrors,
        errors: errors,
        setFieldValue: setFieldValue,
        handleClickAddVariable: handleClickAddVariable,
        handleVariableChange: handleVariableChange,
        handleClickRemoveVariable: handleClickRemoveVariable
      }));
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SuccessAlert__WEBPACK_IMPORTED_MODULE_8__["default"], {
    show: success,
    text: t("clients.create-page.client-created-message"),
    onConfirm: function onConfirm() {
      setSuccess(false);
      setRedirect(true);
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateClientPage);

/***/ })

}]);