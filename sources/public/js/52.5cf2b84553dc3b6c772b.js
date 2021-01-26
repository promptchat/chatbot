(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./resources/js/containers/chatBoxConfigs/edit.js":
/*!********************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/edit.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditChatBoxConfigs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _containers_chatBoxConfigs_form_helpers_prepareDefaultValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/helpers/prepareDefaultValue */ "./resources/js/containers/chatBoxConfigs/form/helpers/prepareDefaultValue.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _containers_chatBoxConfigs_form_helpers_prepareDataToSubmit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/helpers/prepareDataToSubmit */ "./resources/js/containers/chatBoxConfigs/form/helpers/prepareDataToSubmit.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function EditChatBoxConfigs() {
  var id = Object(react_router__WEBPACK_IMPORTED_MODULE_7__["useParams"])().id;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      defaultData = _useState2[0],
      setDefaultData = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      formData = _useState4[0],
      setFormData = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      redirectTo = _useState6[0],
      setRedirectTo = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("get", "/methods/chat-box-configs/initial-value").data(function (data) {
      setDefaultData(data);
    });
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("get", "/methods/chat-box-configs/".concat(id)).data(function (responseData) {
      var name = responseData.name,
          chat_logo_id = responseData.chat_logo_id,
          default_chat_bot_image_id = responseData.default_chat_bot_image_id,
          data = responseData.data;

      var formDataFormat = _objectSpread({
        name: name,
        chat_logo_id: chat_logo_id,
        default_chat_bot_image_id: default_chat_bot_image_id
      }, data);

      setFormData(Object(_containers_chatBoxConfigs_form_helpers_prepareDefaultValue__WEBPACK_IMPORTED_MODULE_8__["default"])(formDataFormat));
    }).code(404, function () {
      setRedirectTo("/home"); //todo: change to configs index or 404 when they will be implemented
    });
  }, [id]);
  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values, _ref) {
    var setSubmitting = _ref.setSubmitting,
        setErrors = _ref.setErrors;
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("patch", "/methods/chat-box-configs/".concat(id), {}, Object(_containers_chatBoxConfigs_form_helpers_prepareDataToSubmit__WEBPACK_IMPORTED_MODULE_10__["default"])(values)).data(function () {
      setRedirectTo("/chat-box-configs");
    }).validation(function (msg, errors) {
      var errorsFormatted = {};
      lodash_forEach__WEBPACK_IMPORTED_MODULE_9___default()(errors, function (val, key) {
        errorsFormatted[key.replace("data.", "")] = val;
      });
      setErrors(errorsFormatted);
      setSubmitting(false);
    })["catch"](function () {
      setSubmitting(false);
    });
  }, [id, setRedirectTo]);

  if (redirectTo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_7__["Redirect"], {
      to: redirectTo
    });
  }

  var content;

  if (formData && defaultData) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isEdit: true,
      onSubmit: handleSubmit,
      initialData: formData,
      defaultData: defaultData
    });
  } else {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_2__["default"], null, t("chatBoxConfigs.edit-page.title")), content);
}

/***/ })

}]);