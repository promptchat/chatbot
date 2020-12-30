(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

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

/***/ "./resources/js/components/widgets/YoutubePlayer.js":
/*!**********************************************************!*\
  !*** ./resources/js/components/widgets/YoutubePlayer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YoutubePlayer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_youtube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-youtube */ "./node_modules/react-youtube/dist/index.esm.js");



function YoutubePlayer(_ref) {
  var videoId = _ref.videoId;
  var opts = {
    playerVars: {
      modestbranding: 1
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_youtube__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "video-player my-4",
    videoId: videoId,
    opts: opts
  });
}
YoutubePlayer.propTypes = {
  videoId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/FormScreensFactory.js":
/*!*************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/FormScreensFactory.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormScreensFactory; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/integrations/form/IntegrationForm */ "./resources/js/containers/integrations/form/IntegrationForm.js");
/* harmony import */ var _containers_integrations_form_screen_ServiceScreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/integrations/form/screen/ServiceScreen */ "./resources/js/containers/integrations/form/screen/ServiceScreen.js");
/* harmony import */ var _containers_integrations_form_screen_ChatBotScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/integrations/form/screen/ChatBotScreen */ "./resources/js/containers/integrations/form/screen/ChatBotScreen.js");
/* harmony import */ var _containers_integrations_form_screen_ConfigureScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/integrations/form/screen/ConfigureScreen */ "./resources/js/containers/integrations/form/screen/ConfigureScreen.js");
/* harmony import */ var _containers_integrations_form_screen_SetupScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/integrations/form/screen/SetupScreen */ "./resources/js/containers/integrations/form/screen/SetupScreen.js");
/* harmony import */ var _containers_integrations_form_screen_SuccessScreen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/integrations/form/screen/SuccessScreen */ "./resources/js/containers/integrations/form/screen/SuccessScreen.js");








function FormScreensFactory(_ref) {
  var isEdit = _ref.isEdit,
      handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      validate = _ref.validate,
      values = _ref.values,
      errors = _ref.errors,
      isSubmitting = _ref.isSubmitting,
      setFieldValue = _ref.setFieldValue,
      allowedScreens = _ref.allowedScreens,
      changeStep = _ref.changeStep,
      handleSubmit = _ref.handleSubmit;

  switch (values.step) {
    case _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_SERVICE"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_ServiceScreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
          isEdit: isEdit,
          handleChange: handleChange,
          values: values,
          allowedSteps: allowedScreens,
          changeStep: changeStep,
          validate: validate
        });
      }

    case _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_CHAT_BOT"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_ChatBotScreen__WEBPACK_IMPORTED_MODULE_4__["default"], {
          values: values,
          errors: errors,
          setFieldValue: setFieldValue,
          handleChange: handleChange,
          handleBlur: handleBlur,
          allowedSteps: allowedScreens,
          changeStep: changeStep,
          validate: validate
        });
      }

    case _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_CONFIGURE"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_ConfigureScreen__WEBPACK_IMPORTED_MODULE_5__["default"], {
          values: values,
          errors: errors,
          setFieldValue: setFieldValue,
          handleChange: handleChange,
          handleBlur: handleBlur,
          validate: validate,
          handleSubmit: handleSubmit
        });
      }

    case _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_SETUP"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_SetupScreen__WEBPACK_IMPORTED_MODULE_6__["default"], {
          values: values,
          allowedSteps: allowedScreens,
          changeStep: changeStep
        });
      }

    case _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_SUCCESS"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_SuccessScreen__WEBPACK_IMPORTED_MODULE_7__["default"], {
          handleChange: handleChange,
          handleBlur: handleBlur,
          values: values,
          errors: errors,
          isSubmitting: isSubmitting,
          setFieldValue: setFieldValue,
          allowedSteps: allowedScreens
        });
      }
  }
}
FormScreensFactory.propTypes = {
  isEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  isSubmitting: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  validate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  allowedScreens: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  changeStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/IntegrationForm.js":
/*!**********************************************************************!*\
  !*** ./resources/js/containers/integrations/form/IntegrationForm.js ***!
  \**********************************************************************/
/*! exports provided: STEP_SERVICE, STEP_CHAT_BOT, STEP_CONFIGURE, STEP_SETUP, STEP_SUCCESS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_SERVICE", function() { return STEP_SERVICE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_CHAT_BOT", function() { return STEP_CHAT_BOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_CONFIGURE", function() { return STEP_CONFIGURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_SETUP", function() { return STEP_SETUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEP_SUCCESS", function() { return STEP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IntegrationForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _containers_integrations_form_StepSelect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/integrations/form/StepSelect */ "./resources/js/containers/integrations/form/StepSelect.js");
/* harmony import */ var _containers_integrations_form_FormScreensFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/integrations/form/FormScreensFactory */ "./resources/js/containers/integrations/form/FormScreensFactory.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _containers_integrations_form_helpers_isChatBotDataSet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/integrations/form/helpers/isChatBotDataSet */ "./resources/js/containers/integrations/form/helpers/isChatBotDataSet.js");
/* harmony import */ var _containers_integrations_form_helpers_isSetupNeeded__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/integrations/form/helpers/isSetupNeeded */ "./resources/js/containers/integrations/form/helpers/isSetupNeeded.js");
/* harmony import */ var _containers_integrations_form_helpers_isConfigured__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/integrations/form/helpers/isConfigured */ "./resources/js/containers/integrations/form/helpers/isConfigured.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var STEP_SERVICE = "service";
var STEP_CHAT_BOT = "chat-bot";
var STEP_CONFIGURE = "configure";
var STEP_SETUP = "setup";
var STEP_SUCCESS = "success";
function IntegrationForm(_ref) {
  var isEdit = _ref.isEdit,
      step = _ref.step,
      onSubmit = _ref.onSubmit,
      defaultData = _ref.defaultData;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "integration-form",
    initialValues: _objectSpread({
      step: isEdit && step ? step : STEP_SERVICE
    }, defaultData),
    handleSubmit: onSubmit,
    renderForm: function renderForm(_ref2) {
      var handleChange = _ref2.handleChange,
          handleBlur = _ref2.handleBlur,
          values = _ref2.values,
          errors = _ref2.errors,
          isSubmitting = _ref2.isSubmitting,
          setFieldValue = _ref2.setFieldValue,
          setErrors = _ref2.setErrors,
          handleSubmit = _ref2.handleSubmit;
      var allowedScreens = [STEP_SERVICE];
      var screenServiceReady = !!values.service;

      if (screenServiceReady) {
        allowedScreens.push(STEP_CHAT_BOT);
      }

      var screenChatBotReady = screenServiceReady && Object(_containers_integrations_form_helpers_isChatBotDataSet__WEBPACK_IMPORTED_MODULE_6__["default"])(values, errors);

      if (screenChatBotReady) {
        allowedScreens.push(STEP_CONFIGURE);
      }

      var screenConfigureReady = screenChatBotReady && Object(_containers_integrations_form_helpers_isConfigured__WEBPACK_IMPORTED_MODULE_8__["default"])(values, errors);

      if (isEdit && screenConfigureReady) {
        if (Object(_containers_integrations_form_helpers_isSetupNeeded__WEBPACK_IMPORTED_MODULE_7__["default"])(values.service)) {
          allowedScreens.push(STEP_SETUP);
        } else {
          allowedScreens.push(STEP_SUCCESS);
        }
      }

      var screenSetUpReady = screenConfigureReady && Object(_containers_integrations_form_helpers_isSetupNeeded__WEBPACK_IMPORTED_MODULE_7__["default"])(values.service);

      if (isEdit && screenSetUpReady) {
        allowedScreens.push(STEP_SUCCESS);
      }

      var changeStep = function changeStep(val) {
        return setFieldValue("step", val);
      };

      var validate = function validate(fields) {
        return new Promise(function (resolve, reject) {
          var dataToValidate = {};

          var _iterator = _createForOfIteratorHelper(fields),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var field = _step.value;
              dataToValidate[field] = values[field];
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_5__["default"].call("post", "/methods/integrations/validate", {}, dataToValidate).then(function () {
            resolve();
          }).validation(function (msg, errors) {
            setErrors(errors);
            reject && reject();
          });
        });
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
        xl: 9
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Card"], {
        className: "mb-5 card-navbar shadow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardHeader"], {
        className: "p-0"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_StepSelect__WEBPACK_IMPORTED_MODULE_3__["default"], {
        allowedScreens: allowedScreens,
        step: values.step,
        onChange: changeStep,
        showSetUpScreen: Object(_containers_integrations_form_helpers_isSetupNeeded__WEBPACK_IMPORTED_MODULE_7__["default"])(values.service),
        errors: errors,
        validate: validate,
        values: values
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CardBody"], {
        className: "px-4 rounded-bottom"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_FormScreensFactory__WEBPACK_IMPORTED_MODULE_4__["default"], {
        handleChange: handleChange,
        handleBlur: handleBlur,
        values: values,
        errors: errors,
        isSubmitting: isSubmitting,
        setFieldValue: setFieldValue,
        validate: validate,
        isEdit: isEdit,
        allowedScreens: allowedScreens,
        changeStep: changeStep,
        handleSubmit: handleSubmit
      })))));
    }
  });
}
IntegrationForm.propTypes = {
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([STEP_SERVICE, STEP_CHAT_BOT, STEP_CONFIGURE, STEP_SETUP, STEP_SUCCESS]),
  isEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  defaultData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/NextStepButton.js":
/*!*********************************************************************!*\
  !*** ./resources/js/containers/integrations/form/NextStepButton.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NextStepButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");



function NextStepButton(_ref) {
  var fields = _ref.fields,
      validate = _ref.validate,
      nextStep = _ref.nextStep,
      allowedSteps = _ref.allowedSteps,
      changeStep = _ref.changeStep,
      content = _ref.content;

  if (!allowedSteps.includes(nextStep)) {
    return null;
  }

  var handleClick = function handleClick() {
    if (validate) {
      validate(fields).then(function () {
        return changeStep(nextStep);
      });
    } else {
      changeStep(nextStep);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "pt-2 px-4 my-4",
    type: "button",
    color: "primary",
    onClick: handleClick
  }, content ? content() : "Next");
}
NextStepButton.propTypes = {
  validate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  fields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  allowedSteps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  changeStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  nextStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  content: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/StepSelect.js":
/*!*****************************************************************!*\
  !*** ./resources/js/containers/integrations/form/StepSelect.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StepSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/integrations/form/IntegrationForm */ "./resources/js/containers/integrations/form/IntegrationForm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





function StepSelect(_ref) {
  var values = _ref.values,
      validate = _ref.validate,
      allowedScreens = _ref.allowedScreens,
      step = _ref.step,
      showSetUpScreen = _ref.showSetUpScreen,
      onChange = _ref.onChange,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  var steps = [{
    label: t("integrations.form.step.".concat(_containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_SERVICE"])),
    value: _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_SERVICE"],
    fields: ["service"],
    dependsOn: []
  }, {
    label: t("integrations.form.step.".concat(_containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_CHAT_BOT"])),
    value: _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_CHAT_BOT"],
    fields: ["name", "prefix", "company_chat_bot_id", "locale"],
    dependsOn: ["service"]
  }, {
    label: t("integrations.form.step.".concat(_containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_CONFIGURE"])),
    value: _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_CONFIGURE"],
    nFields: ["service", "name", "prefix", "company_chat_bot_id", "locale"],
    dependsOn: ["service", "name", "prefix", "company_chat_bot_id", "locale"]
  }, {
    label: t("integrations.form.step.".concat(_containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_SETUP"])),
    value: _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_SETUP"],
    dependsOn: "all"
  }, {
    label: t("integrations.form.step.".concat(_containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_SUCCESS"])),
    value: _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_SUCCESS"],
    dependsOn: "all"
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation-bar-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "navigation-bar w-100 d-flex"
  }, steps.map(function (option) {
    if (option.value === _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_2__["STEP_SETUP"] && !showSetUpScreen) {
      return null;
    }

    var isAllowed = allowedScreens.includes(option.value);
    var hasError;
    var entries = Object.entries(errors);

    if (option.fields) {
      hasError = entries.filter(function (p) {
        return option.fields.includes(p[0]) && p[1].length;
      }).length;
    } else if (option.nFields) {
      hasError = entries.filter(function (p) {
        return !option.nFields.includes(p[0]) && p[1].length;
      }).length;
    } else {
      hasError = false;
    }

    var handleChange = function handleChange() {
      validate(option.dependsOn === "all" ? Object.keys(values) : option.dependsOn).then(function () {
        onChange(option.value);
      });
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: option.value,
      type: "button",
      onClick: handleChange,
      className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("navigation-item rounded-top w-100 py-2 px-3", {
        active: option.value === step,
        error: hasError
      }),
      disabled: !isAllowed
    }, option.label);
  })));
}
StepSelect.propTypes = {
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  validate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  allowedScreens: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  step: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  showSetUpScreen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/helpers/isChatBotDataSet.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/helpers/isChatBotDataSet.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isChatBotDataSet; });
function isChatBotDataSet(values, errors) {
  return values.company_chat_bot_id && values.name && values.prefix && values.locale && !errors["company_chat_bot_id"] && !errors["name"] && !errors["prefix"] && !errors["locale"];
}

/***/ }),

/***/ "./resources/js/containers/integrations/form/helpers/isConfigured.js":
/*!***************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/helpers/isConfigured.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isConfigured; });
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function isConfigured(_ref, errors) {
  var service = _ref.service,
      values = _objectWithoutProperties(_ref, ["service"]);

  switch (+service) {
    case _models_Integration__WEBPACK_IMPORTED_MODULE_0__["SERVICE_WEB"]:
      {
        return values["config_id"] && !errors["config_id"];
      }

    case _models_Integration__WEBPACK_IMPORTED_MODULE_0__["SERVICE_FACEBOOK_MESSENGER"]:
      {
        return values["token"] && values["app_secret"] && !errors["token"] && !errors["app_secret"];
      }

    case _models_Integration__WEBPACK_IMPORTED_MODULE_0__["SERVICE_TELEGRAM"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_0__["SERVICE_SMS_CHAT_ORG"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_0__["SERVICE_SMS_CHAT_WHATSAPP"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_0__["SERVICE_VIBER"]:
      {
        return values["token"] && !errors["token"];
      }

    case _models_Integration__WEBPACK_IMPORTED_MODULE_0__["SERVICE_TWILIO_WHATSAPP"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_0__["SERVICE_TWILIO_SMS"]:
      {
        return values["token"] && values["sid"] && !errors["token"] && !errors["sid"];
      }

    default:
      {
        return false;
      }
  }
}

/***/ }),

/***/ "./resources/js/containers/integrations/form/helpers/isSetupNeeded.js":
/*!****************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/helpers/isSetupNeeded.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isSetupNeeded; });
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");

function isSetupNeeded(service) {
  return [_models_Integration__WEBPACK_IMPORTED_MODULE_0__["SERVICE_WEB"], _models_Integration__WEBPACK_IMPORTED_MODULE_0__["SERVICE_FACEBOOK_MESSENGER"], _models_Integration__WEBPACK_IMPORTED_MODULE_0__["SERVICE_TWILIO_WHATSAPP"], _models_Integration__WEBPACK_IMPORTED_MODULE_0__["SERVICE_TWILIO_SMS"]].includes(+service);
}

/***/ }),

/***/ "./resources/js/containers/integrations/form/helpers/selectLoaders/loadChatBotSelectValue.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/helpers/selectLoaders/loadChatBotSelectValue.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadChatBotSelectValue; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadChatBotSelectValue(id) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/chat-bots/".concat(id)).data(function (data) {
      resolve({
        label: data.name,
        value: data.id
      });
    });
  });
}

/***/ }),

/***/ "./resources/js/containers/integrations/form/helpers/selectLoaders/loadConfigSelectOptions.js":
/*!****************************************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/helpers/selectLoaders/loadConfigSelectOptions.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadConfigSelectOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadConfigSelectOptions() {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/chat-box-configs/search").data(function (data) {
      resolve(data.map(function (config) {
        return {
          label: config.name,
          value: config.id
        };
      }));
    });
  });
}

/***/ }),

/***/ "./resources/js/containers/integrations/form/helpers/selectLoaders/loadConfigSelectValue.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/helpers/selectLoaders/loadConfigSelectValue.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadConfigSelectValue; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadConfigSelectValue(id) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/chat-box-configs/".concat(id)).data(function (config) {
      resolve({
        label: config.name,
        value: config.id
      });
    });
  });
}

/***/ }),

/***/ "./resources/js/containers/integrations/form/helpers/selectLoaders/loadLocalesSelectOptions.js":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/helpers/selectLoaders/loadLocalesSelectOptions.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadLocalesSelectOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _helpers_languagesToSelectFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/languagesToSelectFormat */ "./resources/js/helpers/languagesToSelectFormat.js");


function loadLocalesSelectOptions() {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/language").data(function (data) {
      resolve(Object(_helpers_languagesToSelectFormat__WEBPACK_IMPORTED_MODULE_1__["default"])(data));
    });
  });
}

/***/ }),

/***/ "./resources/js/containers/integrations/form/helpers/selectLoaders/loadLocalesSelectValue.js":
/*!***************************************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/helpers/selectLoaders/loadLocalesSelectValue.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadLocalesSelectValue; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _helpers_languagesToSelectFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/languagesToSelectFormat */ "./resources/js/helpers/languagesToSelectFormat.js");


function loadLocalesSelectValue(locale) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/language/".concat(locale)).data(function (data) {
      resolve(Object(_helpers_languagesToSelectFormat__WEBPACK_IMPORTED_MODULE_1__["default"])([data])[0]);
    });
  });
}

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/ChatBotScreen.js":
/*!***************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/ChatBotScreen.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatBotScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_integrations_form_NextStepButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/integrations/form/NextStepButton */ "./resources/js/containers/integrations/form/NextStepButton.js");
/* harmony import */ var _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/integrations/form/IntegrationForm */ "./resources/js/containers/integrations/form/IntegrationForm.js");
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/AsyncSelectField */ "./resources/js/components/form/AsyncSelectField.js");
/* harmony import */ var _containers_integrations_helpers_loadChatBotSelectOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/integrations/helpers/loadChatBotSelectOptions */ "./resources/js/containers/integrations/helpers/loadChatBotSelectOptions.js");
/* harmony import */ var _containers_integrations_form_helpers_selectLoaders_loadChatBotSelectValue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/integrations/form/helpers/selectLoaders/loadChatBotSelectValue */ "./resources/js/containers/integrations/form/helpers/selectLoaders/loadChatBotSelectValue.js");
/* harmony import */ var _containers_integrations_form_helpers_selectLoaders_loadLocalesSelectOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/integrations/form/helpers/selectLoaders/loadLocalesSelectOptions */ "./resources/js/containers/integrations/form/helpers/selectLoaders/loadLocalesSelectOptions.js");
/* harmony import */ var _containers_integrations_form_helpers_selectLoaders_loadLocalesSelectValue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/integrations/form/helpers/selectLoaders/loadLocalesSelectValue */ "./resources/js/containers/integrations/form/helpers/selectLoaders/loadLocalesSelectValue.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");












function ChatBotScreen(_ref) {
  var setFieldValue = _ref.setFieldValue,
      handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      values = _ref.values,
      errors = _ref.errors,
      allowedSteps = _ref.allowedSteps,
      changeStep = _ref.changeStep,
      validate = _ref.validate;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    lg: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "limiter",
    name: "name",
    label: t("integrations.form.chatbot-screen.name-label"),
    placeholder: t("integrations.form.chatbot-screen.name-placeholder"),
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.name || "",
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "limiter",
    name: "prefix",
    label: t("integrations.form.chatbot-screen.prefix-label"),
    placeholder: t("integrations.form.chatbot-screen.prefix-placeholder"),
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.prefix || "",
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_11__["Col"], {
    lg: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "limiter",
    name: "company_chat_bot_id",
    label: t("integrations.form.chatbot-screen.chat-label"),
    value: values.company_chat_bot_id,
    setFieldValue: setFieldValue,
    errors: errors,
    loadOptions: _containers_integrations_helpers_loadChatBotSelectOptions__WEBPACK_IMPORTED_MODULE_6__["default"],
    loadValue: _containers_integrations_form_helpers_selectLoaders_loadChatBotSelectValue__WEBPACK_IMPORTED_MODULE_7__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "limiter",
    name: "locale",
    label: t("integrations.form.chatbot-screen.language-label"),
    loadOptions: _containers_integrations_form_helpers_selectLoaders_loadLocalesSelectOptions__WEBPACK_IMPORTED_MODULE_8__["default"],
    loadValue: _containers_integrations_form_helpers_selectLoaders_loadLocalesSelectValue__WEBPACK_IMPORTED_MODULE_9__["default"],
    value: values.locale,
    setFieldValue: setFieldValue,
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_NextStepButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    validate: validate,
    fields: ["service", "name", "prefix", "company_chat_bot_id", "locale"],
    changeStep: changeStep,
    allowedSteps: allowedSteps,
    nextStep: _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_3__["STEP_CONFIGURE"],
    content: function content() {
      return t("integrations.form.next-btn.step-chatbot");
    }
  }));
}
ChatBotScreen.propTypes = {
  allowedSteps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  changeStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  validate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/ConfigureScreen.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/ConfigureScreen.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigureScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");
/* harmony import */ var _containers_integrations_form_screen_configure_ConfigureWeb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/integrations/form/screen/configure/ConfigureWeb */ "./resources/js/containers/integrations/form/screen/configure/ConfigureWeb.js");
/* harmony import */ var _containers_integrations_form_screen_configure_ConfigureFacebookMessenger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/integrations/form/screen/configure/ConfigureFacebookMessenger */ "./resources/js/containers/integrations/form/screen/configure/ConfigureFacebookMessenger.js");
/* harmony import */ var _containers_integrations_form_screen_configure_ConfigureOnlyToken__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/integrations/form/screen/configure/ConfigureOnlyToken */ "./resources/js/containers/integrations/form/screen/configure/ConfigureOnlyToken.js");
/* harmony import */ var _containers_integrations_form_screen_configure_ConfigureTwilio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/integrations/form/screen/configure/ConfigureTwilio */ "./resources/js/containers/integrations/form/screen/configure/ConfigureTwilio.js");







function ConfigureScreen(_ref) {
  var setFieldValue = _ref.setFieldValue,
      handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      values = _ref.values,
      errors = _ref.errors,
      validate = _ref.validate,
      handleSubmit = _ref.handleSubmit;

  /**
   * @param {Array} fields
   * @returns {function(*): void}
   */
  var handleSubmitClick = function handleSubmitClick(fields) {
    return function (e) {
      e.preventDefault();

      if (validate) {
        var allFields = fields.concat(["service", "name", "prefix", "company_chat_bot_id", "locale", "config_id"]);
        validate(allFields).then(function () {
          handleSubmit();
        });
      } else {
        handleSubmit();
      }
    };
  };

  switch (+values.service) {
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_WEB"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_configure_ConfigureWeb__WEBPACK_IMPORTED_MODULE_3__["default"], {
          video: "bx79vJP4zWI",
          setFieldValue: setFieldValue,
          values: values,
          errors: errors,
          handleSubmitClick: handleSubmitClick
        });
      }

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_FACEBOOK_MESSENGER"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_configure_ConfigureFacebookMessenger__WEBPACK_IMPORTED_MODULE_4__["default"], {
          video: "bx79vJP4zWI",
          handleChange: handleChange,
          handleBlur: handleBlur,
          values: values,
          errors: errors,
          handleSubmitClick: handleSubmitClick
        });
      }

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TELEGRAM"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_configure_ConfigureOnlyToken__WEBPACK_IMPORTED_MODULE_5__["default"], {
          video: "b9-cHk-7N8k",
          handleChange: handleChange,
          handleBlur: handleBlur,
          values: values,
          errors: errors,
          handleSubmitClick: handleSubmitClick
        });
      }

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_ORG"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_configure_ConfigureOnlyToken__WEBPACK_IMPORTED_MODULE_5__["default"], {
          video: "bx79vJP4zWI",
          handleChange: handleChange,
          handleBlur: handleBlur,
          values: values,
          errors: errors,
          handleSubmitClick: handleSubmitClick
        });
      }

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_WHATSAPP"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_configure_ConfigureOnlyToken__WEBPACK_IMPORTED_MODULE_5__["default"], {
          video: "b9-cHk-7N8k",
          handleChange: handleChange,
          handleBlur: handleBlur,
          values: values,
          errors: errors,
          handleSubmitClick: handleSubmitClick
        });
      }

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_VIBER"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_configure_ConfigureOnlyToken__WEBPACK_IMPORTED_MODULE_5__["default"], {
          video: "bx79vJP4zWI",
          handleChange: handleChange,
          handleBlur: handleBlur,
          values: values,
          errors: errors,
          handleSubmitClick: handleSubmitClick
        });
      }

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_WHATSAPP"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_configure_ConfigureTwilio__WEBPACK_IMPORTED_MODULE_6__["default"], {
          video: "bx79vJP4zWI",
          handleChange: handleChange,
          handleBlur: handleBlur,
          values: values,
          errors: errors,
          handleSubmitClick: handleSubmitClick
        });
      }

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_SMS"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_configure_ConfigureTwilio__WEBPACK_IMPORTED_MODULE_6__["default"], {
          video: "bx79vJP4zWI",
          handleChange: handleChange,
          handleBlur: handleBlur,
          values: values,
          errors: errors,
          handleSubmitClick: handleSubmitClick
        });
      }
  }
}
ConfigureScreen.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  validate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/ServiceScreen.js":
/*!***************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/ServiceScreen.js ***!
  \***************************************************************************/
/*! exports provided: serviceIconsMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceIconsMap", function() { return serviceIconsMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ServiceScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/integrations/form/IntegrationForm */ "./resources/js/containers/integrations/form/IntegrationForm.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _containers_integrations_form_NextStepButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/integrations/form/NextStepButton */ "./resources/js/containers/integrations/form/NextStepButton.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _serviceIconsMap;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var serviceIconsMap = (_serviceIconsMap = {}, _defineProperty(_serviceIconsMap, _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_WEB"], function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaGlobe"], {
    className: "service-icon color-blue3 icon-size-40"
  });
}), _defineProperty(_serviceIconsMap, _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_FACEBOOK_MESSENGER"], function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaFacebookMessenger"], {
    className: "facebook-icon icon-size-40 color-facebook"
  });
}), _defineProperty(_serviceIconsMap, _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_ORG"], function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "service-img sms-chat",
    src: "/img/services/sms-chat.png",
    alt: "sms-chat"
  });
}), _defineProperty(_serviceIconsMap, _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_WHATSAPP"], function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaWhatsapp"], {
    className: "whatsapp-icon icon-size-40 color-whatsapp"
  });
}), _defineProperty(_serviceIconsMap, _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TELEGRAM"], function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaTelegram"], {
    className: "telegram-icon icon-size-40 color-telegram"
  });
}), _defineProperty(_serviceIconsMap, _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_VIBER"], function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaViber"], {
    className: "viber-icon icon-size-40 color-viber"
  });
}), _defineProperty(_serviceIconsMap, _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_WHATSAPP"], function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "service-img twilio",
    src: "/img/services/twilio-red.svg",
    alt: "twilio-whatsapp"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-absolute twilio-whatsapp rounded-circle d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaWhatsapp"], {
    className: "icon-size-20 color-whatsapp sm-whatsapp"
  })));
}), _defineProperty(_serviceIconsMap, _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_SMS"], function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "service-img twilio",
    src: "/img/services/twilio-red.svg",
    alt: "sms-twilio"
  });
}), _serviceIconsMap);
function ServiceScreen(_ref) {
  var validate = _ref.validate,
      isEdit = _ref.isEdit,
      handleChange = _ref.handleChange,
      values = _ref.values,
      allowedSteps = _ref.allowedSteps,
      changeStep = _ref.changeStep;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    label: t("integrations.service.".concat(_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_WEB"])),
    value: _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_WEB"],
    icon: serviceIconsMap[_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_WEB"]],
    iconBtn: function iconBtn() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaGlobe"], {
        className: "icon-size-25"
      });
    }
  }, {
    label: t("integrations.service.".concat(_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_FACEBOOK_MESSENGER"])),
    value: _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_FACEBOOK_MESSENGER"],
    icon: serviceIconsMap[_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_FACEBOOK_MESSENGER"]],
    iconBtn: function iconBtn() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaFacebookMessenger"], {
        className: "icon-size-25"
      });
    }
  }, {
    label: t("integrations.service.".concat(_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_ORG"])),
    value: _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_ORG"],
    icon: serviceIconsMap[_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_ORG"]],
    iconBtn: function iconBtn() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "service-img sms-chat-btn",
        src: "/img/services/sms-chat.png",
        alt: "sms-chat"
      });
    }
  }, {
    label: t("integrations.service.".concat(_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_WHATSAPP"])),
    value: _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_WHATSAPP"],
    icon: serviceIconsMap[_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_WHATSAPP"]],
    iconBtn: function iconBtn() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaWhatsapp"], {
        className: "icon-size-25"
      });
    }
  }, {
    label: t("integrations.service.".concat(_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TELEGRAM"])),
    value: _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TELEGRAM"],
    icon: serviceIconsMap[_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TELEGRAM"]],
    iconBtn: function iconBtn() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaTelegram"], {
        className: "icon-size-25"
      });
    }
  }, {
    label: t("integrations.service.".concat(_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_VIBER"])),
    value: _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_VIBER"],
    icon: serviceIconsMap[_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_VIBER"]],
    iconBtn: function iconBtn() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaViber"], {
        className: "icon-size-25"
      });
    }
  }, {
    label: t("integrations.service.".concat(_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_WHATSAPP"])),
    value: _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_WHATSAPP"],
    icon: serviceIconsMap[_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_WHATSAPP"]],
    iconBtn: function iconBtn() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "service-img twilio-btn",
        src: "/img/services/twilio-white.svg",
        alt: "twilio-whatsapp"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaWhatsapp"], {
        className: "pl-2 icon-size-30 color-white"
      }));
    }
  }, {
    label: t("integrations.service.".concat(_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_SMS"])),
    value: _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_SMS"],
    icon: serviceIconsMap[_models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_SMS"]],
    iconBtn: function iconBtn() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "service-img twilio-btn",
        src: "/img/services/twilio-white.svg",
        alt: "sms-twilio"
      });
    }
  }]),
      _useState2 = _slicedToArray(_useState, 1),
      services = _useState2[0];

  var activeServiceIndex = services.findIndex(function (service) {
    return +service.value === +values.service;
  });
  var activeService = activeServiceIndex === -1 ? null : services[activeServiceIndex];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "my-4"
  }, services.map(function (service) {
    var isActive = +service.value === +values.service;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
      xl: 4,
      md: 4,
      sm: 6,
      key: service.value,
      className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("my-3 px-sm-3 px-0", {
        active: isActive
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "rounded d-flex align-items-center p-sm-3 py-3 px-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "position-relative service-img-wrapper d-flex justify-content-center mr-1"
    }, service.icon()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["CustomInput"], {
      className: "ml-2 ",
      value: service.value,
      onChange: isEdit ? null : handleChange,
      checked: isActive,
      type: "radio",
      id: "service-".concat(service.value),
      name: "service",
      disabled: isEdit
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Label"], {
      className: "mb-0",
      htmlFor: "service-".concat(service.value)
    }, service.label)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_NextStepButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    validate: validate,
    fields: ["service"],
    allowedSteps: allowedSteps,
    nextStep: _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_5__["STEP_CHAT_BOT"],
    changeStep: changeStep,
    content: function content() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, t("integrations.form.next-btn.step-service", {
        serviceName: activeService.label
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-2 pl-1"
      }, activeService === null || activeService === void 0 ? void 0 : activeService.iconBtn()));
    }
  }));
}
ServiceScreen.propTypes = {
  isEdit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  validate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  changeStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  allowedSteps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/SetupScreen.js":
/*!*************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/SetupScreen.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SetupScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");
/* harmony import */ var _containers_integrations_form_screen_setup_SetupWeb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/integrations/form/screen/setup/SetupWeb */ "./resources/js/containers/integrations/form/screen/setup/SetupWeb.js");
/* harmony import */ var _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/integrations/form/IntegrationForm */ "./resources/js/containers/integrations/form/IntegrationForm.js");
/* harmony import */ var _containers_integrations_form_NextStepButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/integrations/form/NextStepButton */ "./resources/js/containers/integrations/form/NextStepButton.js");
/* harmony import */ var _containers_integrations_form_screen_setup_SetupFacebookMessenger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/integrations/form/screen/setup/SetupFacebookMessenger */ "./resources/js/containers/integrations/form/screen/setup/SetupFacebookMessenger.js");
/* harmony import */ var _containers_integrations_form_screen_setup_SetupTwilio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/integrations/form/screen/setup/SetupTwilio */ "./resources/js/containers/integrations/form/screen/setup/SetupTwilio.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");









function SetupScreen(_ref) {
  var values = _ref.values,
      changeStep = _ref.changeStep,
      allowedSteps = _ref.allowedSteps;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  var content = null;

  switch (+values.service) {
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_WEB"]:
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_setup_SetupWeb__WEBPACK_IMPORTED_MODULE_3__["default"], {
        values: values
      });
      break;

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_FACEBOOK_MESSENGER"]:
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_setup_SetupFacebookMessenger__WEBPACK_IMPORTED_MODULE_6__["default"], {
        values: values
      });
      break;

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_WHATSAPP"]:
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_setup_SetupTwilio__WEBPACK_IMPORTED_MODULE_7__["default"], {
        video: "5kUu97Vkwj4",
        values: values
      });
      break;

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_SMS"]:
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_setup_SetupTwilio__WEBPACK_IMPORTED_MODULE_7__["default"], {
        video: "10byeZV5jcc",
        values: values
      });
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, content, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_NextStepButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    changeStep: changeStep,
    allowedSteps: allowedSteps,
    nextStep: _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_4__["STEP_SUCCESS"],
    content: function content() {
      return t("integrations.form.next-btn.step-setup");
    }
  }));
}
SetupScreen.propTypes = {
  allowedSteps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  changeStep: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/SuccessScreen.js":
/*!***************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/SuccessScreen.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SuccessScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");



function SuccessScreen() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "color-blue title-middle mt-4 pb-2"
  }, t("integrations.form.success-screen.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-main mb-5"
  }, t("integrations.form.success-screen.text")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/integrations",
    className: "pt-2 px-4 mt-3 mb-sm-4 mb-5 btn btn-success"
  }, t("integrations.form.next-btn.step-success")));
}

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/configure/ConfigureFacebookMessenger.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/configure/ConfigureFacebookMessenger.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigureFacebookMessenger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_integrations_form_screen_configure_ConfigureLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/integrations/form/screen/configure/ConfigureLayout */ "./resources/js/containers/integrations/form/screen/configure/ConfigureLayout.js");





function ConfigureFacebookMessenger(_ref) {
  var video = _ref.video,
      handleSubmitClick = _ref.handleSubmitClick,
      handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      values = _ref.values,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_configure_ConfigureLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleSubmit: handleSubmitClick(["token", "app_secret"]),
    errors: errors,
    values: values,
    video: video
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "limiter",
    name: "token",
    label: t("integrations.form.configure-screen.token-label"),
    placeholder: t("integrations.form.configure-screen.token-placeholder"),
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.token || "",
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "limiter",
    name: "app_secret",
    label: t("integrations.form.configure-screen.app-secret-label"),
    placeholder: t("integrations.form.configure-screen.app-secret-placeholder"),
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.app_secret || "",
    errors: errors
  }));
}
ConfigureFacebookMessenger.propTypes = {
  video: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleSubmitClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/configure/ConfigureLayout.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/configure/ConfigureLayout.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigureLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_widgets_YoutubePlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/YoutubePlayer */ "./resources/js/components/widgets/YoutubePlayer.js");
/* harmony import */ var _containers_integrations_form_helpers_isConfigured__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/integrations/form/helpers/isConfigured */ "./resources/js/containers/integrations/form/helpers/isConfigured.js");
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");






function ConfigureLayout(_ref) {
  var handleSubmit = _ref.handleSubmit,
      video = _ref.video,
      values = _ref.values,
      errors = _ref.errors,
      children = _ref.children;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, video ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_YoutubePlayer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    videoId: video
  }) : null, children, Object(_containers_integrations_form_helpers_isConfigured__WEBPACK_IMPORTED_MODULE_4__["default"])(values, errors) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "pt-2 px-4 my-4",
    type: "submit",
    color: "primary",
    onClick: handleSubmit
  }, t("integrations.form.next-btn.step-configure")) : null);
}
ConfigureLayout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  video: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/configure/ConfigureOnlyToken.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/configure/ConfigureOnlyToken.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigureOnlyToken; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_integrations_form_screen_configure_ConfigureLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/integrations/form/screen/configure/ConfigureLayout */ "./resources/js/containers/integrations/form/screen/configure/ConfigureLayout.js");





function ConfigureOnlyToken(_ref) {
  var video = _ref.video,
      handleSubmitClick = _ref.handleSubmitClick,
      handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      values = _ref.values,
      errors = _ref.errors;
  var handleSubmit = handleSubmitClick(["config_id"]);

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_configure_ConfigureLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    video: video,
    values: values,
    errors: errors,
    handleSubmit: handleSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "limiter",
    name: "token",
    label: t("integrations.form.configure-screen.token-label"),
    placeholder: t("integrations.form.configure-screen.token-placeholder"),
    value: values.token || "",
    onChange: handleChange,
    onBlur: handleBlur,
    errors: errors
  }));
}
ConfigureOnlyToken.propTypes = {
  video: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleSubmitClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/configure/ConfigureTwilio.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/configure/ConfigureTwilio.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigureTwilio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_integrations_form_screen_configure_ConfigureLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/integrations/form/screen/configure/ConfigureLayout */ "./resources/js/containers/integrations/form/screen/configure/ConfigureLayout.js");





function ConfigureTwilio(_ref) {
  var video = _ref.video,
      handleSubmitClick = _ref.handleSubmitClick,
      handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      values = _ref.values,
      errors = _ref.errors;
  var handleSubmit = handleSubmitClick(["sid", "token"]);

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_configure_ConfigureLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleSubmit: handleSubmit,
    errors: errors,
    values: values,
    video: video
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "limiter",
    name: "sid",
    label: t("integrations.form.configure-screen.sid-label"),
    placeholder: t("integrations.form.configure-screen.sid-placeholder"),
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.sid || "",
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "limiter",
    label: t("integrations.form.configure-screen.token-label"),
    placeholder: t("integrations.form.configure-screen.token-placeholder"),
    onChange: handleChange,
    onBlur: handleBlur,
    value: values.token || "",
    errors: errors
  }));
}
ConfigureTwilio.propTypes = {
  video: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleSubmitClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/configure/ConfigureWeb.js":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/configure/ConfigureWeb.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigureWeb; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/AsyncSelectField */ "./resources/js/components/form/AsyncSelectField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_integrations_form_screen_configure_ConfigureLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/integrations/form/screen/configure/ConfigureLayout */ "./resources/js/containers/integrations/form/screen/configure/ConfigureLayout.js");
/* harmony import */ var _containers_integrations_form_helpers_selectLoaders_loadConfigSelectOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/integrations/form/helpers/selectLoaders/loadConfigSelectOptions */ "./resources/js/containers/integrations/form/helpers/selectLoaders/loadConfigSelectOptions.js");
/* harmony import */ var _containers_integrations_form_helpers_selectLoaders_loadConfigSelectValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/integrations/form/helpers/selectLoaders/loadConfigSelectValue */ "./resources/js/containers/integrations/form/helpers/selectLoaders/loadConfigSelectValue.js");







function ConfigureWeb(_ref) {
  var video = _ref.video,
      handleSubmitClick = _ref.handleSubmitClick,
      setFieldValue = _ref.setFieldValue,
      values = _ref.values,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_configure_ConfigureLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    video: video,
    handleSubmit: handleSubmitClick(["config_id"]),
    values: values,
    errors: errors
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "limiter",
    name: "config_id",
    label: t("integrations.form.configure-screen.config-label"),
    loadOptions: _containers_integrations_form_helpers_selectLoaders_loadConfigSelectOptions__WEBPACK_IMPORTED_MODULE_5__["default"],
    loadValue: _containers_integrations_form_helpers_selectLoaders_loadConfigSelectValue__WEBPACK_IMPORTED_MODULE_6__["default"],
    value: values.config_id || "",
    setFieldValue: setFieldValue,
    errors: errors
  }));
}
ConfigureWeb.propTypes = {
  video: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleSubmitClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/setup/SetupFacebookMessenger.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/setup/SetupFacebookMessenger.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SetupFacebookMessenger; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _containers_integrations_form_screen_setup_SetupLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/integrations/form/screen/setup/SetupLayout */ "./resources/js/containers/integrations/form/screen/setup/SetupLayout.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





function SetupFacebookMessenger(_ref) {
  var values = _ref.values;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_setup_SetupLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    integrationId: values.id,
    video: "vlDzYIIOYmM",
    renderContent: function renderContent(data) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "limiter",
        label: t("integrations.form.setup-screen.callback-label"),
        name: "callbackUrl",
        value: data.callbackUrl,
        readOnly: 1
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "limiter",
        label: t("integrations.form.setup-screen.confirmation-token-label"),
        name: "token",
        value: data.verification,
        readOnly: 1
      }));
    }
  });
}
SetupFacebookMessenger.propTypes = {
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/setup/SetupLayout.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/setup/SetupLayout.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SetupLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_widgets_YoutubePlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/YoutubePlayer */ "./resources/js/components/widgets/YoutubePlayer.js");
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function SetupLayout(_ref) {
  var video = _ref.video,
      integrationId = _ref.integrationId,
      renderContent = _ref.renderContent;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("get", "/methods/integrations/".concat(integrationId, "/setup-data")).data(function (setupData) {
      setData(setupData);
    });
  }, [integrationId]);

  if (!data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "video-player-block"
  }, video ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_YoutubePlayer__WEBPACK_IMPORTED_MODULE_2__["default"], {
    videoId: video
  }) : null, renderContent(data));
}
SetupLayout.propTypes = {
  integrationId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  renderContent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  video: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/setup/SetupTwilio.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/setup/SetupTwilio.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SetupTwilio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _containers_integrations_form_screen_setup_SetupLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/integrations/form/screen/setup/SetupLayout */ "./resources/js/containers/integrations/form/screen/setup/SetupLayout.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





function SetupTwilio(_ref) {
  var values = _ref.values,
      video = _ref.video;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_setup_SetupLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    integrationId: values.id,
    video: video,
    renderContent: function renderContent(data) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
        className: "limiter",
        label: t("integrations.form.setup-screen.callback-label"),
        name: "callbackUrl",
        value: data.callbackUrl,
        readOnly: 1
      });
    }
  });
}
SetupTwilio.propTypes = {
  video: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/form/screen/setup/SetupWeb.js":
/*!****************************************************************************!*\
  !*** ./resources/js/containers/integrations/form/screen/setup/SetupWeb.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SetupWeb; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_integrations_form_screen_setup_SetupLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/integrations/form/screen/setup/SetupLayout */ "./resources/js/containers/integrations/form/screen/setup/SetupLayout.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




function SetupWeb(_ref) {
  var values = _ref.values;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_screen_setup_SetupLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    integrationId: values.id,
    video: "vlDzYIIOYmM",
    renderContent: function renderContent(data) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-main pt-4"
      }, t("integrations.form.setup-screen.copy-html-text")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "copy-html-text p-3 rounded"
      }, data.script));
    }
  });
}
SetupWeb.propTypes = {
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/integrations/helpers/loadChatBotSelectOptions.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/containers/integrations/helpers/loadChatBotSelectOptions.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadChatBotSelectOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadChatBotSelectOptions(inputValue) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/chat-bots/search", {
      q: inputValue
    }).data(function (data) {
      resolve(data.map(function (item) {
        return {
          label: item.name,
          value: item.id
        };
      }));
    });
  });
}

/***/ })

}]);