(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[45],{

/***/ "./resources/js/containers/instantMessages/edit.js":
/*!*********************************************************!*\
  !*** ./resources/js/containers/instantMessages/edit.js ***!
  \*********************************************************/
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
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");
/* harmony import */ var _containers_instantMessages_form_widgets_ClientsSelectField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/instantMessages/form/widgets/ClientsSelectField */ "./resources/js/containers/instantMessages/form/widgets/ClientsSelectField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function EditInstantMessagePage() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      redirectTo = _useState4[0],
      setRedirectTo = _useState4[1];

  var id = Object(react_router__WEBPACK_IMPORTED_MODULE_5__["useParams"])().id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("get", "/methods/instant-messages/".concat(id)).data(function (data) {
      setDate(data);
    });
  }, [id]);
  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (data) {
    return _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("patch", "/methods/instant-messages/".concat(id), {}, data);
  }, [id]);
  var afterSave = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setRedirectTo("/instant-messages/1");
  }, []);

  if (redirectTo !== null) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
      to: redirectTo
    });
  }

  var content;

  if (data) {
    var clients = null;
    var newClients = null;
    var initialClients = data.clients.map(function (client) {
      return {
        label: client.name,
        value: client.id,
        client: client
      };
    });

    if (+data.integration.service === _models_Integration__WEBPACK_IMPORTED_MODULE_7__["SERVICE_SMS_CHAT_ORG"]) {
      newClients = Object(_containers_instantMessages_form_widgets_ClientsSelectField__WEBPACK_IMPORTED_MODULE_8__["formatClientsOptions"])(initialClients, +data.integration.service);
    } else {
      clients = Object(_containers_instantMessages_form_widgets_ClientsSelectField__WEBPACK_IMPORTED_MODULE_8__["formatClientsOptions"])(initialClients, +data.integration.service);
    }

    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_instantMessages_form_InstantMessagesForm__WEBPACK_IMPORTED_MODULE_3__["default"], {
      afterSave: afterSave,
      handleSubmit: handleSubmit,
      initialData: {
        name: data.name,
        message: data.message || "",
        integration: {
          label: data.integration.name,
          value: data.integration.id,
          integration: data.integration
        },
        template: data.message_template ? {
          label: data.message_template.name,
          value: data.message_template.id,
          template: data.message_template
        } : null,
        start_date: +data.start_at,
        start_time: +data.start_at,
        tags: data.tags.map(function (tag) {
          return {
            label: tag.name,
            value: tag.id
          };
        }),
        clients: clients,
        new_clients: newClients,
        integration_type: null,
        send_instantly: !data.start_at
      }
    });
  } else {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"], null, t("instantMessages.edit-title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["Card"], {
    className: "instant-messages-view mb-4 shadow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_10__["CardBody"], {
    className: "px-4 rounded"
  }, content)));
}

/* harmony default export */ __webpack_exports__["default"] = (EditInstantMessagePage);

/***/ })

}]);