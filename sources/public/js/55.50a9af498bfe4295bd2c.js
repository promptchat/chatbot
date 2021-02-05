(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[55],{

/***/ "./resources/js/containers/instantMessages/create.js":
/*!***********************************************************!*\
  !*** ./resources/js/containers/instantMessages/create.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var _containers_instantMessages_form_InstantMessagesForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/instantMessages/form/InstantMessagesForm */ "./resources/js/containers/instantMessages/form/InstantMessagesForm.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function CreateInstantMessagePage() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      redirectTo = _useState2[0],
      setRedirectTo = _useState2[1];

  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data) {
    return _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("post", "/methods/instant-messages", {}, data);
  }, []);
  var afterSave = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setRedirectTo("/instant-messages/1");
  }, []);

  if (redirectTo !== null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
      to: redirectTo
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"], null, t("instantMessages.create-title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Card"], {
    className: "instant-messages-view mb-5 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_7__["CardBody"], {
    className: "px-4 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_instantMessages_form_InstantMessagesForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
    afterSave: afterSave,
    handleSubmit: handleSubmit,
    initialData: {
      name: "",
      message: "",
      integration: null,
      template: null,
      start_date: null,
      start_time: null,
      tags: null,
      clients: null,
      new_clients: null,
      integration_type: null,
      send_instantly: false
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateInstantMessagePage);

/***/ })

}]);