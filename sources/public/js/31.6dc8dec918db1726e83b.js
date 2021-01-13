(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./resources/js/containers/chatBoxConfigs/create.js":
/*!**********************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/create.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatBoxConfigs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/forEach */ "./node_modules/lodash/forEach.js");
/* harmony import */ var lodash_forEach__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_forEach__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _containers_chatBoxConfigs_form_helpers_prepareDefaultValue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/helpers/prepareDefaultValue */ "./resources/js/containers/chatBoxConfigs/form/helpers/prepareDefaultValue.js");
/* harmony import */ var _containers_chatBoxConfigs_form_helpers_prepareDataToSubmit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/helpers/prepareDataToSubmit */ "./resources/js/containers/chatBoxConfigs/form/helpers/prepareDataToSubmit.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function ChatBoxConfigs() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      defaultValue = _useState2[0],
      setDefaultValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      redirectTo = _useState4[0],
      setRedirectTo = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("get", "/methods/chat-box-configs/initial-value").data(function (data) {
      setDefaultValue(data);
    });
  }, []);
  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values, _ref) {
    var setSubmitting = _ref.setSubmitting,
        setErrors = _ref.setErrors;
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("post", "/methods/chat-box-configs", {}, Object(_containers_chatBoxConfigs_form_helpers_prepareDataToSubmit__WEBPACK_IMPORTED_MODULE_10__["default"])(values)).data(function (data) {
      setRedirectTo("/chat-box-configs/".concat(data.id, "/edit"));
    }).validation(function (msg, errors) {
      var errorsFormatted = {};
      lodash_forEach__WEBPACK_IMPORTED_MODULE_6___default()(errors, function (val, key) {
        errorsFormatted[key.replace("data.", "")] = val;
      });
      setErrors(errorsFormatted);
    })["finally"](function () {
      setSubmitting(false);
    });
  }, []);

  if (redirectTo) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_8__["Redirect"], {
      to: redirectTo
    });
  }

  var content;

  if (defaultValue) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      isEdit: false,
      onSubmit: handleSubmit,
      defaultData: Object(_containers_chatBoxConfigs_form_helpers_prepareDefaultValue__WEBPACK_IMPORTED_MODULE_9__["default"])(defaultValue)
    });
  } else {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_2__["default"], null, t("chatBoxConfigs.create-page.title")), content);
}

/***/ })

}]);