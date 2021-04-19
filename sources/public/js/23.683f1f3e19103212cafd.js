(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./resources/js/components/widgets/AddressItem.js":
/*!********************************************************!*\
  !*** ./resources/js/components/widgets/AddressItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddressItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function AddressItem(_ref) {
  var geo = _ref.geo;
  var location = [];

  if (geo.city) {
    location.push(geo.city);
  }

  if (geo.country) {
    location.push(geo.country);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, geo.iso ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "flag mr-2",
    src: "/img/flags/".concat(geo.iso.toLowerCase(), ".gif"),
    alt: geo.iso
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "location"
  }, location.join(", ")));
}
AddressItem.propTypes = {
  geo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
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

/***/ "./resources/js/components/widgets/modals/ConfirmModal.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/widgets/modals/ConfirmModal.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_es_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/es/Modal */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap_es_ModalBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/es/ModalBody */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var reactstrap_es_ModalFooter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/es/ModalFooter */ "./node_modules/reactstrap/es/ModalFooter.js");
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");







function ConfirmModal(_ref) {
  var text = _ref.text,
      onConfirm = _ref.onConfirm,
      onReject = _ref.onReject;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Modal__WEBPACK_IMPORTED_MODULE_2__["default"], {
    isOpen: true,
    toggle: onReject,
    className: "confirm-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_ModalBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, text), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_ModalFooter__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "primary",
    onClick: onConfirm
  }, "Confirm"), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    color: "secondary",
    onClick: onReject
  }, "Cancel")));
}

ConfirmModal.propTypes = {
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onReject: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ConfirmModal);

/***/ }),

/***/ "./resources/js/components/widgets/table/VairablesDisplayer.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/widgets/table/VairablesDisplayer.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _helpers_isGeo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/isGeo */ "./resources/js/helpers/isGeo.js");
/* harmony import */ var _components_widgets_AddressItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/AddressItem */ "./resources/js/components/widgets/AddressItem.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var reservedNames = ["ip", "geo", "first_name", "last_name", "phone_number", "email"];

function VariablesDisplayer(_ref) {
  var data = _ref.data;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var alwaysVisible = [];
  var visibleByRequirement = [];

  for (var key in data) {
    if (data.hasOwnProperty(key) && data[key] !== null) {
      var item = {
        name: key,
        value: data[key]
      };

      if (reservedNames.includes(key)) {
        alwaysVisible.push(item);
      } else {
        visibleByRequirement.push(item);
      }
    }
  }

  var renderValue = function renderValue(value) {
    if (Object(_helpers_isGeo__WEBPACK_IMPORTED_MODULE_3__["default"])(value)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_AddressItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        geo: value
      });
    }

    if (Array.isArray(value)) {
      return value.join(", ");
    }

    if (_typeof(value) === "object") {
      return JSON.stringify(value);
    }

    return value;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "variable-items"
  }, alwaysVisible.map(function (item) {
    if (!renderValue(item.value)) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "variable-item",
      key: item.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "item-name font-weight-bold"
    }, item.name, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "item-value"
    }, renderValue(item.value)));
  }), visibleByRequirement.length && !show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-link no-shadow p-0 color-blue text-middle text-dec-none",
    onClick: function onClick() {
      return setShow(true);
    }
  }, t("tables.json-show-more", {
    count: visibleByRequirement.length
  })) : null, visibleByRequirement.length && show ? visibleByRequirement.map(function (item) {
    if (!renderValue(item.value)) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "variable-item",
      key: item.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "item-name font-weight-bold"
    }, item.name, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "item-value"
    }, renderValue(item.value)));
  }) : null);
}

VariablesDisplayer.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (VariablesDisplayer);

/***/ }),

/***/ "./resources/js/containers/liveChat/helpers/getMessageAuthor.js":
/*!**********************************************************************!*\
  !*** ./resources/js/containers/liveChat/helpers/getMessageAuthor.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getMessageAuthor; });
function getMessageAuthor(chatMessage) {
  var messageOwner;

  if (chatMessage.isFromClient) {
    messageOwner = chatMessage.client;
  } else {
    messageOwner = chatMessage.isFromOperator ? chatMessage.user : {
      name: "Bot"
    };
  }

  return messageOwner;
}

/***/ }),

/***/ "./resources/js/containers/liveChat/helpers/useActiveClient.js":
/*!*********************************************************************!*\
  !*** ./resources/js/containers/liveChat/helpers/useActiveClient.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useActiveClient; });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

function useActiveClient() {
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(function (state) {
    return state.liveChat.getIn(["clientsMap", state.liveChat.get("activeClientId")]);
  });
}

/***/ }),

/***/ "./resources/js/containers/liveChat/helpers/useHandleActiveClientSelected.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/containers/liveChat/helpers/useHandleActiveClientSelected.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHandleActiveClientSelected; });
/* harmony import */ var _containers_liveChat_helpers_useActiveClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/containers/liveChat/helpers/useActiveClient */ "./resources/js/containers/liveChat/helpers/useActiveClient.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useHandleActiveClientSelected(callback) {
  var activeClient = Object(_containers_liveChat_helpers_useActiveClient__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var activeClientId = activeClient === null || activeClient === void 0 ? void 0 : activeClient.id.toString();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (activeClientId) {
      return callback(activeClientId);
    }
  }, [activeClientId, callback]);
}

/***/ }),

/***/ "./resources/js/containers/liveChat/helpers/useMsgTime.js":
/*!****************************************************************!*\
  !*** ./resources/js/containers/liveChat/helpers/useMsgTime.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMsgTime; });
/* harmony import */ var _hooks_useGetTimezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/hooks/useGetTimezone */ "./resources/js/hooks/useGetTimezone.js");
/* harmony import */ var _hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useGetDateTime */ "./resources/js/hooks/useGetDateTime.js");
/* harmony import */ var _helpers_momentInstance__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/momentInstance */ "./resources/js/helpers/momentInstance.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





function useMsgTime() {
  var fromNow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var timezone = Object(_hooks_useGetTimezone__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var fullFormat = Object(_hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_1__["useUserDateTimeFormatFormat"])();
  var timeFormat = Object(_hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_1__["useUserTimeFormat"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (date) {
    var momentDateTime = Object(_helpers_momentInstance__WEBPACK_IMPORTED_MODULE_2__["default"])(date * 1000).tz(timezone);
    var timeDiff = (new Date().getTime() - momentDateTime.toDate().getTime()) / 1000;
    var lessThanHourAgo = timeDiff < 3600;

    if (lessThanHourAgo && fromNow) {
      return momentDateTime.fromNow();
    }

    var isCurrentDate = momentDateTime.isSame(new Date(), "day");

    if (isCurrentDate) {
      return t("common.date.today") + ", " + momentDateTime.format(timeFormat);
    }

    var now = new Date();
    var isYesterday = momentDateTime.isSame(now.setTime(now.getTime() - 24 * 60 * 60 * 1000), "day");

    if (isYesterday) {
      return t("common.date.yesterday") + ", " + momentDateTime.format(timeFormat);
    }

    return momentDateTime.format(fullFormat);
  }, [fullFormat, timezone, timeFormat, t, fromNow]);
}

/***/ }),

/***/ "./resources/js/containers/liveChat/helpers/usePlayAudio.js":
/*!******************************************************************!*\
  !*** ./resources/js/containers/liveChat/helpers/usePlayAudio.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePlayAudio; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function usePlayAudio(src) {
  var loop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      stopPlay = _useState2[0],
      setStopPlay = _useState2[1];

  function playAudio() {
    var howlAudio = new howler__WEBPACK_IMPORTED_MODULE_1__["Howl"]({
      src: [src]
    });

    if (loop) {
      howlAudio.loop();
    }

    var id = howlAudio.play();
    setStopPlay(function () {
      return function () {
        return howlAudio.stop(id);
      };
    });
  }

  var deferredPlay = function deferredPlay() {
    return setTimeout(playAudio, 1000);
  };

  return [deferredPlay, stopPlay];
}

/***/ }),

/***/ "./resources/js/containers/liveChat/index.js":
/*!***************************************************!*\
  !*** ./resources/js/containers/liveChat/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LiveChatPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_liveChat_widgets_LiveChatContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/liveChat/widgets/LiveChatContainer */ "./resources/js/containers/liveChat/widgets/LiveChatContainer.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_ChatWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/ChatWindow */ "./resources/js/containers/liveChat/widgets/ChatWindow/ChatWindow.js");
/* harmony import */ var _containers_liveChat_widgets_ToggleLongSoundButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/liveChat/widgets/ToggleLongSoundButton */ "./resources/js/containers/liveChat/widgets/ToggleLongSoundButton.js");
/* harmony import */ var _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/liveChat/tabTypes */ "./resources/js/containers/liveChat/tabTypes.js");
/* harmony import */ var _containers_liveChat_widgets_ChatsList_LeftBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/LeftBar */ "./resources/js/containers/liveChat/widgets/ChatsList/LeftBar.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function LiveChatPage() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var params = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  var openedChatId = params.chatId;
  var tab = params.type || _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_7__["TAB_CONVERSATIONS"];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeClientChannel = _useState2[0],
      setActiveClientChannel = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "livechat-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_LiveChatContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    openedChatId: openedChatId,
    setActiveClientChannel: setActiveClientChannel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, t("liveChat.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ToggleLongSoundButton__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "live-chat-content-container pt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_LeftBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tab: tab
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_ChatWindow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    tab: tab,
    activeClientChannel: activeClientChannel
  }))))));
}

/***/ }),

/***/ "./resources/js/containers/liveChat/tabPropTypes.js":
/*!**********************************************************!*\
  !*** ./resources/js/containers/liveChat/tabPropTypes.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var propTypesForTabProperty = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(["conversations", "online-visitors"]);
/* harmony default export */ __webpack_exports__["default"] = (propTypesForTabProperty);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/ChatPlaceholder.js":
/*!********************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/ChatPlaceholder.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");



var ChatPlaceholder = function ChatPlaceholder() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100 text-large text-center align-self-center"
  }, t("liveChat.chat-window.select-chat-placeholder"));
};

/* harmony default export */ __webpack_exports__["default"] = (ChatPlaceholder);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/ChatWindow.js":
/*!***************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/ChatWindow.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_ChatPlaceholder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/ChatPlaceholder */ "./resources/js/containers/liveChat/widgets/ChatWindow/ChatPlaceholder.js");
/* harmony import */ var _containers_liveChat_helpers_useActiveClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/liveChat/helpers/useActiveClient */ "./resources/js/containers/liveChat/helpers/useActiveClient.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_ClientDetails_CommonUserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/ClientDetails/CommonUserInfo */ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/CommonUserInfo.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_ClientDetails_AnalyticsInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/ClientDetails/AnalyticsInfo */ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/AnalyticsInfo.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_ClientDetails_ClientTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/ClientDetails/ClientTags */ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/ClientTags.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_ClientDetails_NoteAboutClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/ClientDetails/NoteAboutClient */ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/NoteAboutClient.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_ClientDetails_ResponsibleOperator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/ClientDetails/ResponsibleOperator */ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/ResponsibleOperator.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_MessagesList_MessagesList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/MessagesList/MessagesList */ "./resources/js/containers/liveChat/widgets/ChatWindow/MessagesList/MessagesList.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-swipeable */ "./node_modules/react-swipeable/dist/react-swipeable.umd.js");
/* harmony import */ var react_swipeable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_swipeable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _containers_liveChat_widgets_MobileChatHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/containers/liveChat/widgets/MobileChatHeader */ "./resources/js/containers/liveChat/widgets/MobileChatHeader.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_SendMessageBlock_SendMessageBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/SendMessageBlock/SendMessageBlock */ "./resources/js/containers/liveChat/widgets/ChatWindow/SendMessageBlock/SendMessageBlock.js");
/* harmony import */ var _containers_liveChat_tabPropTypes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/containers/liveChat/tabPropTypes */ "./resources/js/containers/liveChat/tabPropTypes.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _containers_liveChat_liveChatRoutesConfig__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/containers/liveChat/liveChatRoutesConfig */ "./resources/js/containers/liveChat/liveChatRoutesConfig.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/redux/reducers/liveChat/actionCreators */ "./resources/js/redux/reducers/liveChat/actionCreators.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






















function ChatWindow(_ref) {
  var activeClientChannel = _ref.activeClientChannel,
      tab = _ref.tab;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_19__["useTranslation"])(),
      t = _useTranslation.t;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_17__["useDispatch"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      showClientInfo = _useState2[0],
      setShowClientInfo = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      redirect = _useState4[0],
      setRedirect = _useState4[1];

  var client = Object(_containers_liveChat_helpers_useActiveClient__WEBPACK_IMPORTED_MODULE_3__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!client) {
      setRedirect(false);
    }
  }, [client]);

  var showDetails = function showDetails() {
    setShowClientInfo(true);
  };

  var hideDetails = function hideDetails() {
    setShowClientInfo(false);
  };

  var toggleShowDetails = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setShowClientInfo(function (prevState) {
      return !prevState;
    });
  }, []);
  var handlers = Object(react_swipeable__WEBPACK_IMPORTED_MODULE_11__["useSwipeable"])({
    onSwipedLeft: showDetails,
    onSwipedRight: function onSwipedRight() {
      if (showClientInfo) {
        hideDetails();
      } else {
        setRedirect(true);
        dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_18__["setActiveClient"])(null));
      }
    }
  });

  if (redirect) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_15__["Redirect"], {
      to: _containers_liveChat_liveChatRoutesConfig__WEBPACK_IMPORTED_MODULE_16__["default"].homeRoute.getLink(tab)
    });
  }

  var content;

  if (client) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "messages-area"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_MobileChatHeader__WEBPACK_IMPORTED_MODULE_12__["default"], {
      client: client,
      href: _containers_liveChat_liveChatRoutesConfig__WEBPACK_IMPORTED_MODULE_16__["default"].homeRoute.getLink(tab),
      toggleShowDetails: toggleShowDetails
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "messages-area-content pt-xl-4 pt-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_MessagesList_MessagesList__WEBPACK_IMPORTED_MODULE_9__["default"], {
      client: client,
      activeClientChannel: activeClientChannel
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_SendMessageBlock_SendMessageBlock__WEBPACK_IMPORTED_MODULE_13__["default"], {
      client: client,
      activeClientChannel: activeClientChannel
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "client-info-area-wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_MobileChatHeader__WEBPACK_IMPORTED_MODULE_12__["default"], {
      client: client,
      onClick: hideDetails,
      toggleShowDetails: toggleShowDetails
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "client-info-area small-scrollbar"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "info-area top-area pt-xl-4 pt-2 pb-4 px-3 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "client-info color-black mb-3"
    }, t("liveChat.chat-window.details.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_ClientDetails_CommonUserInfo__WEBPACK_IMPORTED_MODULE_4__["default"], {
      client: client
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_ClientDetails_ResponsibleOperator__WEBPACK_IMPORTED_MODULE_8__["default"], {
      operator: client.responsibleOperator,
      clientId: client.id,
      responsibleOperator: client.responsibleOperator
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "info-area bottom-area py-4 px-3 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_ClientDetails_AnalyticsInfo__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: client.id,
      service: client.integration.service,
      variables: client.variables
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_ClientDetails_ClientTags__WEBPACK_IMPORTED_MODULE_6__["default"], {
      clientId: client.id,
      tags: client.tags
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_ClientDetails_NoteAboutClient__WEBPACK_IMPORTED_MODULE_7__["default"], {
      client: client
    })))));
  } else {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_ChatPlaceholder__WEBPACK_IMPORTED_MODULE_2__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_10___default()("chat-window", {
      active: !!client,
      "show-info": showClientInfo
    })
  }, handlers), content);
}

ChatWindow.propTypes = {
  activeClientChannel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  tab: _containers_liveChat_tabPropTypes__WEBPACK_IMPORTED_MODULE_14__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (ChatWindow);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/AnalyticsInfo.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/AnalyticsInfo.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");
/* harmony import */ var _containers_liveChat_widgets_ClientVariable_Variable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/liveChat/widgets/ClientVariable/Variable */ "./resources/js/containers/liveChat/widgets/ClientVariable/Variable.js");
/* harmony import */ var _components_widgets_AddressItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/AddressItem */ "./resources/js/components/widgets/AddressItem.js");
/* harmony import */ var _helpers_isGeo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/isGeo */ "./resources/js/helpers/isGeo.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_SidebarBlock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/SidebarBlock */ "./resources/js/containers/liveChat/widgets/ChatWindow/SidebarBlock.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_widgets_table_VairablesDisplayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/widgets/table/VairablesDisplayer */ "./resources/js/components/widgets/table/VairablesDisplayer.js");










function AnalyticsInfo(_ref) {
  var service = _ref.service,
      _ref$variables = _ref.variables,
      variables = _ref$variables === void 0 ? {} : _ref$variables;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  var content = null;
  var parts = [];

  switch (+service) {
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_WEB"]:
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ClientVariable_Variable__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: t("liveChat.chat-window.details.variable-ip"),
        value: variables.ip
      }), Object(_helpers_isGeo__WEBPACK_IMPORTED_MODULE_5__["default"])(variables.geo) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ClientVariable_Variable__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: t("liveChat.chat-window.details.variable-geo"),
        value: function value() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_AddressItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
            geo: variables.geo
          });
        }
      }) : null);
      break;

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TELEGRAM"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_VIBER"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_FACEBOOK_MESSENGER"]:
      parts = [];

      if (variables.first_name) {
        parts.push(variables.first_name);
      }

      if (variables.last_name) {
        parts.push(variables.last_name);
      }

      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ClientVariable_Variable__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: t("liveChat.chat-window.details.variable-name"),
        value: parts.join(" ")
      });
      break;

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_SMS"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_WHATSAPP"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_WHATSAPP"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_ORG"]:
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ClientVariable_Variable__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: t("liveChat.chat-window.details.variable-phone"),
        value: variables.phone_number
      });
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_SidebarBlock__WEBPACK_IMPORTED_MODULE_6__["default"], null, content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "client-info-title color-black"
  }, t("liveChat.chat-window.details.variables-title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_VairablesDisplayer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    data: variables
  })));
}

AnalyticsInfo.propTypes = {
  service: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  variables: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(AnalyticsInfo));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/ClientTags.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/ClientTags.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_select_async_creatable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-select/async-creatable */ "./node_modules/react-select/async-creatable/dist/react-select.browser.esm.js");
/* harmony import */ var _helpers_selectLoaders_loadCompanyTagsSelectOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/selectLoaders/loadCompanyTagsSelectOptions */ "./resources/js/helpers/selectLoaders/loadCompanyTagsSelectOptions.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_SidebarBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/SidebarBlock */ "./resources/js/containers/liveChat/widgets/ChatWindow/SidebarBlock.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








function ClientTags(_ref) {
  var clientId = _ref.clientId,
      tags = _ref.tags;
  tags = tags.map(function (tag) {
    return {
      label: tag.name,
      value: tag.id
    };
  });

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values) {
    var tags = (values || []).map(function (tag) {
      return {
        id: tag.__isNew__ ? null : tag.value,
        name: tag.label
      };
    });
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("post", "/methods/tags/add-client-tags/".concat(clientId), {}, {
      tags: tags
    });
  }, [clientId]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_SidebarBlock__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-2"
  }, t("liveChat.chat-window.details.tags-title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_async_creatable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    value: tags,
    isMulti: true,
    defaultOptions: true,
    loadOptions: _helpers_selectLoaders_loadCompanyTagsSelectOptions__WEBPACK_IMPORTED_MODULE_3__["default"],
    onChange: handleChange
  }));
}

ClientTags.defaultValue = {
  tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
ClientTags.propTypes = {
  clientId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ClientTags));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/CommonUserInfo.js":
/*!*********************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/CommonUserInfo.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CommonUserInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Client */ "./resources/js/models/Client.js");
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_ClientDetails_EditUserField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/ClientDetails/EditUserField */ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/EditUserField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");






function CommonUserInfo(_ref) {
  var client = _ref.client;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  var clientName = client.name;
  console.log(client.variables);
  var renderView = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, clientName);
  }, [clientName]);
  var renderField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref2) {
    var handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        values = _ref2.values,
        errors = _ref2.errors;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "pt-0",
      id: "name",
      name: "name",
      title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Client info"),
      label: t("liveChat.chat-window.details.name-label"),
      placeholder: t("liveChat.chat-window.details.name-placeholder"),
      type: "text",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.name || "",
      errors: errors
    }));
  }, [t]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_ClientDetails_EditUserField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clientId: client.id,
    fieldName: "name",
    fieldValue: clientName || "",
    renderView: renderView,
    renderField: renderField
  });
}
CommonUserInfo.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_Client__WEBPACK_IMPORTED_MODULE_2__["default"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/EditUserField.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/EditUserField.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_ClientDetails_EditableBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/ClientDetails/EditableBlock */ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/EditableBlock.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function EditUserField(_ref) {
  var clientId = _ref.clientId,
      fieldName = _ref.fieldName,
      fieldValue = _ref.fieldValue,
      renderField = _ref.renderField,
      renderView = _ref.renderView;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  var handleSubmit = function handleSubmit(values, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
        setErrors = _ref2.setErrors;
    return _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_2__["default"].call("post", "/methods/clients/".concat(clientId), {}, _defineProperty({}, fieldName, values[fieldName])).validation(function (errors, data) {
      setErrors(data);
      setSubmitting(false);
    })["catch"](function () {
      setSubmitting(false);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_ClientDetails_EditableBlock__WEBPACK_IMPORTED_MODULE_3__["default"], {
    renderView: renderView,
    renderForm: function renderForm(toggleEditMode) {
      var onSubmit = function onSubmit(values, actions) {
        handleSubmit(values, actions).then(toggleEditMode);
      };

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_4__["default"], {
        initialValues: _defineProperty({}, fieldName, fieldValue),
        handleSubmit: onSubmit,
        renderForm: function renderForm(_ref4) {
          var handleChange = _ref4.handleChange,
              handleBlur = _ref4.handleBlur,
              values = _ref4.values,
              errors = _ref4.errors,
              isSubmitting = _ref4.isSubmitting;
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, renderField({
            handleChange: handleChange,
            handleBlur: handleBlur,
            values: values,
            errors: errors
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: "mr-3 mb-2",
            disabled: isSubmitting
          }, t("common.saveBtnText")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: "mb-2",
            onClick: toggleEditMode
          }, t("common.cancelBtnText")));
        }
      });
    }
  });
}

EditUserField.propTypes = {
  clientId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  fieldName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  fieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  renderField: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  renderView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(EditUserField));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/EditableBlock.js":
/*!********************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/EditableBlock.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditableBlock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_SidebarBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/SidebarBlock */ "./resources/js/containers/liveChat/widgets/ChatWindow/SidebarBlock.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function EditableBlock(_ref) {
  var renderForm = _ref.renderForm,
      renderView = _ref.renderView;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      editMode = _useState2[0],
      setEditMode = _useState2[1];

  var toggleEditMode = function toggleEditMode() {
    return setEditMode(function (edit) {
      return !edit;
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_SidebarBlock__WEBPACK_IMPORTED_MODULE_3__["default"], null, editMode ? renderForm(toggleEditMode) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-baseline justify-content-between"
  }, renderView(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: toggleEditMode,
    color: "link",
    className: "no-shadow text-dec-none py-0 px-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaEdit"], {
    className: "icon-size-20 color-gray position-relative mb-1"
  }))));
}
EditableBlock.propTypes = {
  renderForm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  renderView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/LeaveChatButton.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/LeaveChatButton.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_modalWindows_actionCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/reducers/modalWindows/actionCreators */ "./resources/js/redux/reducers/modalWindows/actionCreators.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/models/User */ "./resources/js/models/User.js");










function LeaveChatButton(_ref) {
  var clientId = _ref.clientId,
      responsibleOperator = _ref.responsibleOperator;
  var authUser = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  var handleClick = function handleClick() {
    dispatch(Object(_redux_reducers_modalWindows_actionCreators__WEBPACK_IMPORTED_MODULE_4__["showConfirm"])("Do you really want leave conversation?")).then(function () {
      _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_5__["default"].call("post", "/methods/live-chat/stop-conversation/".concat(clientId));
    });
  };

  if (!responsibleOperator || responsibleOperator.id !== authUser.id) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "leave-chat-btn",
    color: "outline-danger",
    onClick: handleClick
  }, t("liveChat.chat-window.details.leave-chat-btn"));
}

LeaveChatButton.propTypes = {
  clientId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  responsibleOperator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_User__WEBPACK_IMPORTED_MODULE_8__["default"])
};
/* harmony default export */ __webpack_exports__["default"] = (LeaveChatButton);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/NoteAboutClient.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/NoteAboutClient.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var _models_Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/Client */ "./resources/js/models/Client.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_ClientDetails_EditUserField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/ClientDetails/EditUserField */ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/EditUserField.js");
/* harmony import */ var reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Label */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








function NoteAboutClient(_ref) {
  var client = _ref.client;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  var note = client.note;
  var renderField = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref2) {
    var handleChange = _ref2.handleChange,
        handleBlur = _ref2.handleBlur,
        values = _ref2.values,
        errors = _ref2.errors;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "pt-0",
      id: "note",
      name: "note",
      label: t("liveChat.chat-window.details.note-label"),
      placeholder: t("liveChat.chat-window.details.note-placeholder"),
      type: "textarea",
      onChange: handleChange,
      onBlur: handleBlur,
      value: values.note || "",
      errors: errors
    });
  }, [t]);
  var renderView = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "client-info-title color-black pr-1",
      htmlFor: "note"
    }, t("liveChat.chat-window.details.note-title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "d-block"
    }, note ? note : t("liveChat.chat-window.details.note-empty-text")));
  }, [note, t]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_ClientDetails_EditUserField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    clientId: client.id,
    fieldName: "note",
    fieldValue: note || "",
    renderView: renderView,
    renderField: renderField
  });
}

NoteAboutClient.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_Client__WEBPACK_IMPORTED_MODULE_3__["default"]).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(NoteAboutClient));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/ResponsibleOperator.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/ResponsibleOperator.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_widgets_UserImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/UserImage */ "./resources/js/components/widgets/UserImage.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_SidebarBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/SidebarBlock */ "./resources/js/containers/liveChat/widgets/ChatWindow/SidebarBlock.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/User */ "./resources/js/models/User.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_ClientDetails_LeaveChatButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/ClientDetails/LeaveChatButton */ "./resources/js/containers/liveChat/widgets/ChatWindow/ClientDetails/LeaveChatButton.js");








function ResponsibleOperator(_ref) {
  var operator = _ref.operator,
      clientId = _ref.clientId;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_SidebarBlock__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "client-info-title color-black"
  }, t("liveChat.chat-window.details.responsible-operator-title")), operator ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-wrap justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center mr-2 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_UserImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    user: operator
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "ml-2"
  }, operator.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_ClientDetails_LeaveChatButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    clientId: clientId,
    responsibleOperator: operator
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-center"
  }, t("liveChat.chat-window.details.no-responsible-operator")));
}

ResponsibleOperator.propTypes = {
  operator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_User__WEBPACK_IMPORTED_MODULE_5__["default"]),
  clientId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ResponsibleOperator));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/MessagesList/Attachment.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/MessagesList/Attachment.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/ChatMessage */ "./resources/js/models/ChatMessage.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");





function Attachment(_ref) {
  var attachment = _ref.attachment,
      fullWidth = _ref.fullWidth;

  switch (attachment.type) {
    case _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ATTACHMENT_TYPE_IMAGE"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "py-2",
          style: {
            maxWidth: fullWidth ? 200 : 100
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: attachment.data.url,
          alt: "",
          className: "img-fluid"
        }));
      }

    case _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ATTACHMENT_TYPE_VIDEO"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "py-2",
          style: {
            maxWidth: fullWidth ? 300 : 150
          }
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
          controls: "controls",
          className: "chat-message-video"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
          src: attachment.data.url
        })));
      }

    case _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["ATTACHMENT_TYPE_FILE"]:
      {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "chat-message-file my-1"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: attachment.data.url
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaFile"], {
          className: "icon-size-20 color-gray"
        })));
      }
  }

  return null;
}

Attachment.propTypes = {
  attachment: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  fullWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Attachment);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/MessagesList/Message.js":
/*!*************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/MessagesList/Message.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_ChatMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/ChatMessage */ "./resources/js/models/ChatMessage.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_MessagesList_Attachment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/MessagesList/Attachment */ "./resources/js/containers/liveChat/widgets/ChatWindow/MessagesList/Attachment.js");
/* harmony import */ var _containers_liveChat_helpers_getMessageAuthor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/liveChat/helpers/getMessageAuthor */ "./resources/js/containers/liveChat/helpers/getMessageAuthor.js");
/* harmony import */ var _containers_liveChat_widgets_messageImageUrl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/liveChat/widgets/messageImageUrl */ "./resources/js/containers/liveChat/widgets/messageImageUrl.js");








function Message(_ref) {
  var chatMessage = _ref.chatMessage,
      isPreview = _ref.isPreview,
      formatMsgTime = _ref.formatMsgTime;
  var messageOwner = Object(_containers_liveChat_helpers_getMessageAuthor__WEBPACK_IMPORTED_MODULE_5__["default"])(chatMessage);
  var imgUrl = Object(_containers_liveChat_widgets_messageImageUrl__WEBPACK_IMPORTED_MODULE_6__["default"])(chatMessage);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("message-container clearfix", {
      "from-client": chatMessage.isFromClient,
      "from-operator": chatMessage.isFromOperator,
      "from-bot": chatMessage.isFromBot,
      preview: isPreview
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message py-1"
  }, imgUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "message-img-autor mx-sm-4 mx-2",
    src: imgUrl,
    alt: "author img"
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message-content text-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat-message color-black",
    dangerouslySetInnerHTML: {
      __html: chatMessage.message
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, chatMessage.attachment ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_MessagesList_Attachment__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attachment: chatMessage.attachment,
    fullWidth: !chatMessage.message
  }) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message-info-mark mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "color-black mr-2"
  }, messageOwner === null || messageOwner === void 0 ? void 0 : messageOwner.name), chatMessage.created_at ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "color-dark-gray"
  }, formatMsgTime(chatMessage.created_at)) : null)))));
}

Message.defaultProps = {
  isPreview: false
};
Message.propTypes = {
  chatMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_ChatMessage__WEBPACK_IMPORTED_MODULE_3__["default"]).isRequired,
  isPreview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  formatMsgTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Message));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/MessagesList/MessagesList.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/MessagesList/MessagesList.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _models_Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/Client */ "./resources/js/models/Client.js");
/* harmony import */ var _models_ChatMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/ChatMessage */ "./resources/js/models/ChatMessage.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_MessagesList_Message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/MessagesList/Message */ "./resources/js/containers/liveChat/widgets/ChatWindow/MessagesList/Message.js");
/* harmony import */ var _redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/reducers/liveChat/actionCreators */ "./resources/js/redux/reducers/liveChat/actionCreators.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_MessagesList_helpers_useHandleChatScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/MessagesList/helpers/useHandleChatScroll */ "./resources/js/containers/liveChat/widgets/ChatWindow/MessagesList/helpers/useHandleChatScroll.js");
/* harmony import */ var _containers_liveChat_helpers_useMsgTime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/liveChat/helpers/useMsgTime */ "./resources/js/containers/liveChat/helpers/useMsgTime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function MessagesList(_ref) {
  var _client$name, _scrollableElementRef, _scrollableElementRef2;

  var client = _ref.client,
      activeClientChannel = _ref.activeClientChannel,
      newMessages = _ref.newMessages,
      oldMessages = _ref.oldMessages,
      loading = _ref.loading,
      hasMore = _ref.hasMore,
      loadMessages = _ref.loadMessages;
  var clientName = (_client$name = client.name) === null || _client$name === void 0 ? void 0 : _client$name.toString();
  var clientId = client.id.toString();
  var formatMsgTime = Object(_containers_liveChat_helpers_useMsgTime__WEBPACK_IMPORTED_MODULE_9__["default"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      clientMessagePreview = _useState2[0],
      setClientMessagePreview = _useState2[1];

  var _useHandleChatScroll = Object(_containers_liveChat_widgets_ChatWindow_MessagesList_helpers_useHandleChatScroll__WEBPACK_IMPORTED_MODULE_8__["default"])(client, oldMessages, newMessages),
      _useHandleChatScroll2 = _slicedToArray(_useHandleChatScroll, 4),
      scrollableElementRef = _useHandleChatScroll2[0],
      handleContainerScroll = _useHandleChatScroll2[1],
      initiallyScrolled = _useHandleChatScroll2[2],
      isFullyScrolledBottom = _useHandleChatScroll2[3];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadMessages(clientId);
  }, [clientId, loadMessages]);

  function handleLoadMore() {
    if (!hasMore || loading || !initiallyScrolled) {
      return;
    }

    loadMessages(clientId);
  }

  var createPreviewMessage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (message, fromOperator) {
    return message && !fromOperator ? _models_ChatMessage__WEBPACK_IMPORTED_MODULE_4__["default"].instantiate({
      id: "preview",
      message: message,
      created_at: null,
      client: client,
      type: _models_ChatMessage__WEBPACK_IMPORTED_MODULE_4__["TYPE_CLIENT_MESSAGE"]
    }) : null;
  }, [clientName] //eslint-disable-line
  );
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (activeClientChannel) {
      activeClientChannel.listenForWhisper("typing", function (_ref2) {
        var message = _ref2.message,
            fromOperator = _ref2.fromOperator;
        setClientMessagePreview(createPreviewMessage(message, fromOperator));
        setTimeout(function () {
          setClientMessagePreview(null);
        }, 2000);
      });
      return function () {
        activeClientChannel.stopListeningForWhisper("typing");
      };
    }
  }, [activeClientChannel, createPreviewMessage]);
  var scrollH = (_scrollableElementRef = scrollableElementRef.current) === null || _scrollableElementRef === void 0 ? void 0 : _scrollableElementRef.scrollHeight;
  var scrollT = (_scrollableElementRef2 = scrollableElementRef.current) === null || _scrollableElementRef2 === void 0 ? void 0 : _scrollableElementRef2.scrollTop;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var el = scrollableElementRef.current;

    if (el && scrollH && !isFullyScrolledBottom()) {
      var currentScrollHeight = el.scrollHeight;
      var diff = currentScrollHeight - scrollH;
      el.scrollTop = scrollT + diff;
    }
  }, [oldMessages, clientMessagePreview]); //eslint-disable-line

  var content;

  if (oldMessages) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "pr-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_7___default.a, {
      isReverse: true,
      loadMore: handleLoadMore,
      hasMore: hasMore && !loading && initiallyScrolled,
      loader: null,
      useWindow: false,
      getScrollParent: function getScrollParent() {
        return scrollableElementRef.current;
      }
    }, oldMessages.map(function (message, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_MessagesList_Message__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: "".concat(index, "-").concat(message.id),
        chatMessage: message,
        formatMsgTime: formatMsgTime
      });
    })), newMessages.map(function (message) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_MessagesList_Message__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: message.id,
        chatMessage: message,
        formatMsgTime: formatMsgTime
      });
    }), clientMessagePreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_MessagesList_Message__WEBPACK_IMPORTED_MODULE_5__["default"], {
      chatMessage: clientMessagePreview,
      formatMsgTime: formatMsgTime
    }) : null);
  } else {
    content = null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "small-scrollbar messages-list messages-list-scrollbar w-100 pr-2",
    ref: scrollableElementRef,
    onScroll: handleContainerScroll
  }, content));
}

MessagesList.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_Client__WEBPACK_IMPORTED_MODULE_3__["default"]).isRequired,
  activeClientChannel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  newMessages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  oldMessages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  hasMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  loadMessages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var stateToProps = function stateToProps(state) {
  var liveChatData = state.liveChat;
  return {
    newMessages: liveChatData.get("newClientMessages"),
    oldMessages: liveChatData.get("oldClientMessages"),
    hasMore: liveChatData.get("oldMessagesHasMore"),
    loading: liveChatData.get("clientMessagesLoading")
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    loadMessages: function loadMessages(clientId) {
      return dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_6__["loadClientMessages"])(clientId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps, dispatchToProps)(MessagesList));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/MessagesList/helpers/useHandleChatScroll.js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/MessagesList/helpers/useHandleChatScroll.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useHandleChatScroll; });
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/hooks/usePrevious */ "./resources/js/hooks/usePrevious.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function useHandleChatScroll(client, oldMessages, newMessages) {
  var clientId = client.id.toString();
  var prevClientId = Object(_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_0__["default"])(clientId);
  var scrollableElementRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      initiallyScrolled = _useState2[0],
      setInitiallyScrolled = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isScrolledNow = _useState4[0],
      setIsScrolledNow = _useState4[1];

  var isFullyScrolledBottom = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var element = scrollableElementRef.current;
    return element.clientHeight + element.scrollTop >= element.scrollHeight - 50;
  }, [scrollableElementRef]);
  var scrollMessages = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var element = scrollableElementRef.current;
    element.scrollTop = element.scrollHeight;
  }, [scrollableElementRef]); //reinit variables if client changed and loaded new chat

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!oldMessages && clientId) {
      setInitiallyScrolled(false);
      setIsScrolledNow(false);
    }
  }, [clientId, oldMessages]); //eslint-disable-line
  //scroll bot if chat open first time

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!initiallyScrolled && oldMessages && clientId) {
      scrollMessages();
      setInitiallyScrolled(true);
      setIsScrolledNow(true);
    }
  }, [scrollMessages, oldMessages, initiallyScrolled, clientId]); //scroll bottom if user received new message and was fully scrolled bottom (i.e. doesnt read old messages)

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (clientId === prevClientId && initiallyScrolled && isScrolledNow) {
      scrollMessages();
    }
  }, [newMessages, initiallyScrolled, clientId, prevClientId]); //eslint-disable-line

  var handleScroll = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    var newIsScrolledNow = isFullyScrolledBottom();

    if (newIsScrolledNow !== isScrolledNow) {
      setIsScrolledNow(newIsScrolledNow);
    }
  }, [isScrolledNow, setIsScrolledNow, isFullyScrolledBottom]);
  return [scrollableElementRef, handleScroll, initiallyScrolled, isFullyScrolledBottom];
}

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/PickClientBtn.js":
/*!******************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/PickClientBtn.js ***!
  \******************************************************************************/
/*! exports provided: requestPickUser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestPickUser", function() { return requestPickUser; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function requestPickUser(clientId, text) {
  return _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__["default"].call("post", "/methods/live-chat/pick-client/".concat(clientId), {}, {
    text: text
  });
}

function PickClientBtn(_ref) {
  var children = _ref.children,
      clientId = _ref.clientId,
      color = _ref.color,
      text = _ref.text,
      afterSend = _ref.afterSend,
      title = _ref.title,
      className = _ref.className;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSubmitting = _useState2[0],
      setIsSubmitting = _useState2[1];

  var authUser = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_4__["default"])();

  var handlePickClient = function handlePickClient() {
    setIsSubmitting(true);
    requestPickUser(clientId, text ? text : authUser.default_conversation_message).then(function () {
      afterSend && afterSend();
    })["catch"](function () {
      setIsSubmitting(false);
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className),
    disabled: isSubmitting,
    color: color,
    onClick: handlePickClient,
    type: "button",
    title: title
  }, children);
}

PickClientBtn.defaultProps = {
  color: "warning"
};
PickClientBtn.propTypes = {
  clientId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  color: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  afterSend: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(PickClientBtn));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/SendMessageBlock/MessageAttachmentField.js":
/*!********************************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/SendMessageBlock/MessageAttachmentField.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");



var MessageAttachmentField = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var handleAddFile = _ref.handleAddFile;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "mb-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    ref: ref,
    type: "file",
    onChange: handleAddFile,
    className: "d-none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPaperclip"], {
    className: "icon-size-20 color-gray position-relative ml-sm-4 ml-2 my-2"
  }));
});
MessageAttachmentField.propTypes = {
  handleAddFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MessageAttachmentField));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/SendMessageBlock/MessageEditorFileIcon.js":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/SendMessageBlock/MessageEditorFileIcon.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");




function MessageEditorFileIcon(_ref) {
  var file = _ref.file,
      removeFile = _ref.removeFile;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFile"], {
    className: "icon-size-14 color-gray mr-1"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, file.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: removeFile,
    className: "btn btn-link text-dec-none no-shadow p-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTimesCircle"], {
    className: "icon-size-12 color-red"
  })));
}

MessageEditorFileIcon.propTypes = {
  file: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }),
  removeFile: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MessageEditorFileIcon));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/SendMessageBlock/MessageTextField.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/SendMessageBlock/MessageTextField.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




function MessageTextField(_ref) {
  var message = _ref.message,
      handleMessageChange = _ref.handleMessageChange,
      handleKeyDown = _ref.handleKeyDown;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    className: "w-100 message-text-field ml-sm-4 ml-2",
    onChange: handleMessageChange,
    onKeyDown: handleKeyDown,
    value: message || "",
    placeholder: t("liveChat.chat-window.text-editor-placeholder")
  });
}

MessageTextField.propTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  handleMessageChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleKeyDown: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MessageTextField);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/SendMessageBlock/SendMessageBlock.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/SendMessageBlock/SendMessageBlock.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Client */ "./resources/js/models/Client.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/hooks/usePrevious */ "./resources/js/hooks/usePrevious.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_SendMessageBlock_MessageEditorFileIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/SendMessageBlock/MessageEditorFileIcon */ "./resources/js/containers/liveChat/widgets/ChatWindow/SendMessageBlock/MessageEditorFileIcon.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_SendMessageBlock_MessageTextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/SendMessageBlock/MessageTextField */ "./resources/js/containers/liveChat/widgets/ChatWindow/SendMessageBlock/MessageTextField.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_PickClientBtn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/PickClientBtn */ "./resources/js/containers/liveChat/widgets/ChatWindow/PickClientBtn.js");
/* harmony import */ var _containers_liveChat_widgets_ChatWindow_SendMessageBlock_MessageAttachmentField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatWindow/SendMessageBlock/MessageAttachmentField */ "./resources/js/containers/liveChat/widgets/ChatWindow/SendMessageBlock/MessageAttachmentField.js");
/* harmony import */ var _components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/buttons/SubmitButton */ "./resources/js/components/buttons/SubmitButton.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














function SendMessageBlock(_ref) {
  var client = _ref.client,
      activeClientChannel = _ref.activeClientChannel;
  var authUser = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var operatorId = client.operator_id;
  var clientId = client.id.toString();
  var needPickClientToSendMessage = operatorId ? operatorId !== authUser.id : true;
  var defaultMessage = needPickClientToSendMessage ? authUser.default_conversation_message : "";

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isSubmitting = _useState2[0],
      setIsSubmitting = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultMessage),
      _useState4 = _slicedToArray(_useState3, 2),
      message = _useState4[0],
      setMessage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState6 = _slicedToArray(_useState5, 2),
      file = _useState6[0],
      setFile = _useState6[1];

  var fileRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var onSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    var formData = new FormData();
    formData.append("text", message);
    formData.append("attachment", file);
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_10__["default"].call("post", "/methods/live-chat/send-message/".concat(clientId), {}, formData).then(function () {
      clearEditor();
    })["finally"](function () {
      setIsSubmitting(false);
    });
  }, [isSubmitting, message, file, clearEditor, clientId]);
  var handleMessageChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    if (isSubmitting) {
      return;
    }

    if (activeClientChannel) {
      activeClientChannel.whisper("typing", {
        message: "operator typing message...",
        fromOperator: operatorId
      });
    }

    setMessage(e.target.value);
  }, [operatorId, isSubmitting, activeClientChannel]);
  var handleAddFile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    if (isSubmitting) {
      return;
    }

    setFile(e.target.files[0]);
  }, [isSubmitting]);
  var defaultMsg = authUser.default_conversation_message;
  var pickUser = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setIsSubmitting(true);
    Object(_containers_liveChat_widgets_ChatWindow_PickClientBtn__WEBPACK_IMPORTED_MODULE_7__["requestPickUser"])(clientId, message ? message : defaultMsg).then(function () {
      setMessage("");
      setIsSubmitting(false);
    })["catch"](function () {
      setIsSubmitting(false);
    });
  }, [clientId, message, defaultMsg]);
  var handleKeyDown = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    if (isSubmitting) {
      return;
    }

    if (e.keyCode === 13 && !e.shiftKey) {
      needPickClientToSendMessage ? pickUser() : onSubmit();
    }
  }, [needPickClientToSendMessage, isSubmitting, onSubmit, pickUser]);
  var handleRemoveFile = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (isSubmitting) {
      return;
    }

    setFile(null);
  }, [isSubmitting]);
  var clearEditor = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    setMessage("");
    setFile(null);

    if (fileRef.current) {
      fileRef.current.files = null;
      fileRef.current.value = null;
    }
  }, [fileRef, setMessage]);
  var prevOperatorId = Object(_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_4__["default"])(operatorId);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (operatorId !== prevOperatorId) {
      setMessage(defaultMessage);
    }
  }, [operatorId, prevOperatorId, needPickClientToSendMessage]); //eslint-disable-line

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-3"
  }, file ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_SendMessageBlock_MessageEditorFileIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    file: file,
    removeFile: handleRemoveFile
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_11___default()("d-flex align-items-center message-send-block", {
      "need-pick-user": needPickClientToSendMessage
    })
  }, needPickClientToSendMessage ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_SendMessageBlock_MessageAttachmentField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    ref: fileRef,
    handleAddFile: handleAddFile
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_SendMessageBlock_MessageTextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    handleKeyDown: handleKeyDown,
    handleMessageChange: handleMessageChange,
    message: message
  }), needPickClientToSendMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatWindow_PickClientBtn__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "send-btn btn-link no-shadow border-0",
    clientId: client.id,
    text: message,
    afterSend: function afterSend() {
      return setMessage("");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "send-icon",
    src: "/img/send.svg",
    alt: "send"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_buttons_SubmitButton__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "send-btn btn-link no-shadow border-0",
    disabled: isSubmitting || !file && !message,
    onClick: onSubmit
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "send-icon",
    src: "/img/send.svg",
    alt: "send"
  }))));
}

SendMessageBlock.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_Client__WEBPACK_IMPORTED_MODULE_2__["default"]).isRequired,
  activeClientChannel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (SendMessageBlock);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatWindow/SidebarBlock.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatWindow/SidebarBlock.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




function SidebarBlock(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("sidebar-block", className)
  }, children);
}

SidebarBlock.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (SidebarBlock);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatsList/ChatListSwitcher.js":
/*!********************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatsList/ChatListSwitcher.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _containers_liveChat_tabPropTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/liveChat/tabPropTypes */ "./resources/js/containers/liveChat/tabPropTypes.js");
/* harmony import */ var _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/liveChat/tabTypes */ "./resources/js/containers/liveChat/tabTypes.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_liveChat_liveChatRoutesConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/liveChat/liveChatRoutesConfig */ "./resources/js/containers/liveChat/liveChatRoutesConfig.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








function ChatListSwitcher(_ref) {
  var tab = _ref.tab;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-panel-wrapper chat-list-switcher"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-panel nav-tabs px-3 w-100 d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-panel-item nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: _containers_liveChat_liveChatRoutesConfig__WEBPACK_IMPORTED_MODULE_5__["default"].homeRoute.getLink(_containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_3__["TAB_CONVERSATIONS"]),
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("nav-link w-100 py-2 px-sm-3 px-2", {
      active: tab === _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_3__["TAB_CONVERSATIONS"]
    })
  }, t("liveChat.chats-panel.tab-conversations"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-panel-item nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: _containers_liveChat_liveChatRoutesConfig__WEBPACK_IMPORTED_MODULE_5__["default"].homeRoute.getLink(_containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_3__["TAB_ONLINE_VISITORS"]),
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("nav-link w-100 py-2 px-sm-3 px-2", {
      active: tab === _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_3__["TAB_ONLINE_VISITORS"]
    })
  }, t("liveChat.chats-panel.tab-online-visitors")))));
}

ChatListSwitcher.propTypes = {
  tab: _containers_liveChat_tabPropTypes__WEBPACK_IMPORTED_MODULE_2__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ChatListSwitcher));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatsList/LeftBar.js":
/*!***********************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatsList/LeftBar.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/containers/liveChat/tabTypes */ "./resources/js/containers/liveChat/tabTypes.js");
/* harmony import */ var _containers_liveChat_widgets_ChatsList_conversationChatsList_ConversationChatsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/conversationChatsList/ConversationChatsList */ "./resources/js/containers/liveChat/widgets/ChatsList/conversationChatsList/ConversationChatsList.js");
/* harmony import */ var _containers_liveChat_widgets_ChatsList_conversationChatsList_ConversationChatsListView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/conversationChatsList/ConversationChatsListView */ "./resources/js/containers/liveChat/widgets/ChatsList/conversationChatsList/ConversationChatsListView.js");
/* harmony import */ var _containers_liveChat_tabPropTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/liveChat/tabPropTypes */ "./resources/js/containers/liveChat/tabPropTypes.js");
/* harmony import */ var _containers_liveChat_widgets_ChatsList_ChatListSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/ChatListSwitcher */ "./resources/js/containers/liveChat/widgets/ChatsList/ChatListSwitcher.js");
/* harmony import */ var _containers_liveChat_widgets_ChatsList_onlineVisitorChatsList_OnlineVisitorChatsList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/onlineVisitorChatsList/OnlineVisitorChatsList */ "./resources/js/containers/liveChat/widgets/ChatsList/onlineVisitorChatsList/OnlineVisitorChatsList.js");
/* harmony import */ var _containers_liveChat_widgets_ChatsList_onlineVisitorChatsList_OnlineVisitorChatsListView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/onlineVisitorChatsList/OnlineVisitorChatsListView */ "./resources/js/containers/liveChat/widgets/ChatsList/onlineVisitorChatsList/OnlineVisitorChatsListView.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _containers_liveChat_helpers_useActiveClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/liveChat/helpers/useActiveClient */ "./resources/js/containers/liveChat/helpers/useActiveClient.js");
/* harmony import */ var _containers_liveChat_helpers_useMsgTime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/liveChat/helpers/useMsgTime */ "./resources/js/containers/liveChat/helpers/useMsgTime.js");












function LeftBar(_ref) {
  var tab = _ref.tab;
  var activeTab;
  var client = Object(_containers_liveChat_helpers_useActiveClient__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var formatMsgTime = Object(_containers_liveChat_helpers_useMsgTime__WEBPACK_IMPORTED_MODULE_10__["default"])(false);

  switch (tab) {
    case _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_1__["TAB_CONVERSATIONS"]:
      activeTab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_conversationChatsList_ConversationChatsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        view: _containers_liveChat_widgets_ChatsList_conversationChatsList_ConversationChatsListView__WEBPACK_IMPORTED_MODULE_3__["default"],
        formatMsgTime: formatMsgTime
      });
      break;

    case _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_1__["TAB_ONLINE_VISITORS"]:
      activeTab = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_onlineVisitorChatsList_OnlineVisitorChatsList__WEBPACK_IMPORTED_MODULE_6__["default"], {
        view: _containers_liveChat_widgets_ChatsList_onlineVisitorChatsList_OnlineVisitorChatsListView__WEBPACK_IMPORTED_MODULE_7__["default"],
        formatMsgTime: formatMsgTime
      });
      break;

    default:
      activeTab = null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("chat-list-container", {
      "d-md-block d-none": !!client
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_ChatListSwitcher__WEBPACK_IMPORTED_MODULE_5__["default"], {
    tab: tab
  }), activeTab);
}

LeftBar.propTypes = {
  tab: _containers_liveChat_tabPropTypes__WEBPACK_IMPORTED_MODULE_4__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(LeftBar));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatsList/conversationChatsList/ConversationChatsList.js":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatsList/conversationChatsList/ConversationChatsList.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/reducers/liveChat/actionCreators */ "./resources/js/redux/reducers/liveChat/actionCreators.js");
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");
/* harmony import */ var _components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/ErrorMessage */ "./resources/js/components/widgets/ErrorMessage.js");







function ConversationChatsList(_ref) {
  var clientsMap = _ref.clientsMap,
      clientsIds = _ref.clientsIds,
      clientsAskingLiveChatIds = _ref.clientsAskingLiveChatIds,
      loading = _ref.loading,
      hasMore = _ref.hasMore,
      error = _ref.error,
      view = _ref.view,
      loadClients = _ref.loadClients,
      loadClientsAskingLiveChat = _ref.loadClientsAskingLiveChat,
      formatMsgTime = _ref.formatMsgTime;
  var ChatsListView = view;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!clientsAskingLiveChatIds) {
      loadClientsAskingLiveChat();
    }
  }, [clientsAskingLiveChatIds]); //eslint-disable-line

  var loadMore = function loadMore() {
    if (loading || !hasMore) {
      return;
    }

    loadClients();
  };

  if (!clientsAskingLiveChatIds || !clientsIds.size && loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChatsListView, {
    clientsMap: clientsMap,
    clientsIds: clientsIds,
    clientsAskingLiveChatIds: clientsAskingLiveChatIds,
    loadMore: loadMore,
    hasMore: hasMore && !loading,
    formatMsgTime: formatMsgTime
  });
}

ConversationChatsList.propTypes = {
  clientsMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  clientsIds: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  clientsAskingLiveChatIds: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  view: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  loadClients: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  loadClientsAskingLiveChat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  formatMsgTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  hasMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var stateToProps = function stateToProps(state) {
  var liveChatData = state.liveChat;
  return {
    loading: liveChatData.get("clientsListLoading"),
    hasMore: liveChatData.get("conversationClientsHasMore"),
    error: liveChatData.get("clientsListLoadingError"),
    clientsMap: liveChatData.get("clientsMap"),
    clientsIds: liveChatData.get("clientsIds"),
    clientsAskingLiveChatIds: liveChatData.get("clientsAskingLiveChatIds")
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    loadClients: function loadClients(offset) {
      return dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_3__["loadClientsList"])(offset));
    },
    loadClientsAskingLiveChat: function loadClientsAskingLiveChat(offset) {
      return dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_3__["loadClientsAskingLiveChatList"])(offset));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps, dispatchToProps)(ConversationChatsList));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatsList/conversationChatsList/ConversationChatsListView.js":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatsList/conversationChatsList/ConversationChatsListView.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConversationChatsListView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_liveChat_widgets_ChatsList_item_ChatItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/item/ChatItem */ "./resources/js/containers/liveChat/widgets/ChatsList/item/ChatItem.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/liveChat/tabTypes */ "./resources/js/containers/liveChat/tabTypes.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");






function ConversationChatsListView(_ref) {
  var clientsMap = _ref.clientsMap,
      clientsIds = _ref.clientsIds,
      clientsAskingLiveChatIds = _ref.clientsAskingLiveChatIds,
      loadMore = _ref.loadMore,
      hasMore = _ref.hasMore,
      formatMsgTime = _ref.formatMsgTime;
  var scrollParentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: scrollParentRef,
    className: "chat-list view small-scrollbar"
  }, clientsAskingLiveChatIds.size ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled mb-0"
  }, clientsAskingLiveChatIds.map(function (clientId) {
    var client = clientsMap.get(clientId);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_item_ChatItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: client.id,
      client: client,
      waitingLiveChat: true,
      tab: _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_4__["TAB_CONVERSATIONS"],
      formatMsgTime: formatMsgTime
    });
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pageStart: 0,
    loadMore: loadMore,
    hasMore: hasMore,
    loader: null,
    useWindow: false,
    getScrollParent: function getScrollParent() {
      return scrollParentRef.current;
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled"
  }, clientsIds.map(function (clientId) {
    var client = clientsMap.get(clientId);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_item_ChatItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: client.id,
      client: client,
      tab: _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_4__["TAB_CONVERSATIONS"],
      formatMsgTime: formatMsgTime
    });
  }))), clientsAskingLiveChatIds.size || clientsIds.size ? null : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 text-center text-middle"
  }, t("liveChat.chats-panel.no-conversations")));
}
ConversationChatsListView.propTypes = {
  clientsMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  clientsIds: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  clientsAskingLiveChatIds: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  loadMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  formatMsgTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  hasMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatsList/item/ChatItem.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatsList/item/ChatItem.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _models_Client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/Client */ "./resources/js/models/Client.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _containers_integrations_form_screen_ServiceScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/integrations/form/screen/ServiceScreen */ "./resources/js/containers/integrations/form/screen/ServiceScreen.js");
/* harmony import */ var _containers_liveChat_widgets_ChatsList_item_LastMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/item/LastMessage */ "./resources/js/containers/liveChat/widgets/ChatsList/item/LastMessage.js");
/* harmony import */ var _containers_liveChat_widgets_ChatsList_item_TagsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/item/TagsList */ "./resources/js/containers/liveChat/widgets/ChatsList/item/TagsList.js");
/* harmony import */ var _containers_liveChat_widgets_ChatsList_item_DepartmentItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/item/DepartmentItem */ "./resources/js/containers/liveChat/widgets/ChatsList/item/DepartmentItem.js");
/* harmony import */ var _containers_liveChat_widgets_ChatsList_item_ClientVariablesString__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/item/ClientVariablesString */ "./resources/js/containers/liveChat/widgets/ChatsList/item/ClientVariablesString.js");
/* harmony import */ var _containers_liveChat_tabPropTypes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/containers/liveChat/tabPropTypes */ "./resources/js/containers/liveChat/tabPropTypes.js");
/* harmony import */ var _containers_liveChat_liveChatRoutesConfig__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/containers/liveChat/liveChatRoutesConfig */ "./resources/js/containers/liveChat/liveChatRoutesConfig.js");
/* harmony import */ var _containers_liveChat_widgets_ChatsList_item_SessionsBlock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/item/SessionsBlock */ "./resources/js/containers/liveChat/widgets/ChatsList/item/SessionsBlock.js");















function _ChatItemData(_ref) {
  var client = _ref.client,
      tab = _ref.tab,
      showSessions = _ref.showSessions,
      formatMsgTime = _ref.formatMsgTime;
  var service = client.integration.service;
  var lastMessage = client.lastMessage;
  var clientName = client.name;
  var clientId = client.id;
  var tags = client.tags;
  var department = client.department;
  var variables = client.variables;
  var activeSessions = client.active_sessions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Link"], {
    to: _containers_liveChat_liveChatRoutesConfig__WEBPACK_IMPORTED_MODULE_12__["default"].chatRoute.getLink(tab, clientId),
    className: "d-flex chat-list-item-content pb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "service-icon-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, _containers_integrations_form_screen_ServiceScreen__WEBPACK_IMPORTED_MODULE_6__["serviceIconsMap"][service]())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chat-list-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-between align-items-center w-100 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, clientName), lastMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "date color-dark-gray"
  }, formatMsgTime(lastMessage.created_at)) : null), variables && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_item_ClientVariablesString__WEBPACK_IMPORTED_MODULE_10__["default"], {
    variables: variables,
    integrationType: service
  }), lastMessage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_item_LastMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
    lastMessage: lastMessage,
    clientName: clientName
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-wrap"
  }, department ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_item_DepartmentItem__WEBPACK_IMPORTED_MODULE_9__["default"], {
    department: department
  }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_item_TagsList__WEBPACK_IMPORTED_MODULE_8__["default"], {
    tags: tags
  })), showSessions && activeSessions.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_item_SessionsBlock__WEBPACK_IMPORTED_MODULE_13__["default"], {
    sessions: activeSessions
  }) : null));
}

_ChatItemData.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(_models_Client__WEBPACK_IMPORTED_MODULE_3__["default"]).isRequired,
  tab: _containers_liveChat_tabPropTypes__WEBPACK_IMPORTED_MODULE_11__["default"],
  showSessions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  formatMsgTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
var ChatItemData = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(_ChatItemData);

function ChatItem(_ref2) {
  var client = _ref2.client,
      waitingLiveChat = _ref2.waitingLiveChat,
      isActive = _ref2.isActive,
      tab = _ref2.tab,
      showSessions = _ref2.showSessions,
      formatMsgTime = _ref2.formatMsgTime;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    id: client.id,
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("chat-list-item pt-3 pb-2 px-3", {
      active: isActive,
      "waiting-for-live-chat": waitingLiveChat
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChatItemData, {
    client: client,
    tab: tab,
    showSessions: showSessions,
    formatMsgTime: formatMsgTime
  }));
}

ChatItem.propTypes = {
  client: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(_models_Client__WEBPACK_IMPORTED_MODULE_3__["default"]).isRequired,
  waitingLiveChat: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  isActive: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  tab: _containers_liveChat_tabPropTypes__WEBPACK_IMPORTED_MODULE_11__["default"],
  showSessions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  formatMsgTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(function (state, props) {
  var _state$liveChat$get;

  var isActive = ((_state$liveChat$get = state.liveChat.get("activeClientId")) === null || _state$liveChat$get === void 0 ? void 0 : _state$liveChat$get.toString()) === props.client.id.toString();
  return {
    isActive: isActive
  };
})(ChatItem));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatsList/item/ClientVariablesString.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatsList/item/ClientVariablesString.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");
/* harmony import */ var _components_widgets_AddressItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/AddressItem */ "./resources/js/components/widgets/AddressItem.js");
/* harmony import */ var _helpers_isGeo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/isGeo */ "./resources/js/helpers/isGeo.js");






function ClientVariablesString(_ref) {
  var variables = _ref.variables,
      integrationType = _ref.integrationType;
  var content;
  var nameParts;

  switch (+integrationType) {
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_WEB"]:
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "mr-2"
      }, variables.ip), Object(_helpers_isGeo__WEBPACK_IMPORTED_MODULE_4__["default"])(variables.geo) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_AddressItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        geo: variables.geo
      }) : null);
      break;

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TELEGRAM"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_VIBER"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_FACEBOOK_MESSENGER"]:
      nameParts = [];

      if (variables.first_name) {
        nameParts.push(variables.first_name);
      }

      if (variables.last_name) {
        nameParts.push(variables.last_name);
      }

      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, nameParts.join(" "));
      break;

    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_SMS"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_TWILIO_WHATSAPP"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_WHATSAPP"]:
    case _models_Integration__WEBPACK_IMPORTED_MODULE_2__["SERVICE_SMS_CHAT_ORG"]:
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, variables.phone_number);
      break;

    default:
      content = null;
  }

  return content ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mb-2 d-flex flex-wrap"
  }, content) : null;
}

ClientVariablesString.propTypes = {
  variables: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  integrationType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ClientVariablesString);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatsList/item/DepartmentItem.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatsList/item/DepartmentItem.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function DepartmentItem(_ref) {
  var department = _ref.department;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-inline-block tag-item department mr-1 my-1"
  }, department.name);
}

DepartmentItem.propTypes = {
  department: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DepartmentItem);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatsList/item/LastMessage.js":
/*!********************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatsList/item/LastMessage.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LastMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/ChatMessage */ "./resources/js/models/ChatMessage.js");
/* harmony import */ var _containers_liveChat_widgets_messageImageUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/liveChat/widgets/messageImageUrl */ "./resources/js/containers/liveChat/widgets/messageImageUrl.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");





function LastMessage(_ref) {
  var lastMessage = _ref.lastMessage;
  var imgUrl = Object(_containers_liveChat_widgets_messageImageUrl__WEBPACK_IMPORTED_MODULE_3__["default"])(lastMessage);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex last-message mb-2"
  }, imgUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "last-message-author mr-2",
    src: imgUrl,
    alt: "author img"
  }) : null, lastMessage.message ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message-body color-dark-gray",
    dangerouslySetInnerHTML: {
      __html: lastMessage.message
    }
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFile"], {
    className: "icon-size-20 color-gray"
  }));
}
LastMessage.propTypes = {
  lastMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_ChatMessage__WEBPACK_IMPORTED_MODULE_2__["default"]).isRequired,
  clientName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatsList/item/SessionsBlock.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatsList/item/SessionsBlock.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_es_Dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/es/Dropdown */ "./node_modules/reactstrap/es/Dropdown.js");
/* harmony import */ var reactstrap_es_DropdownToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/es/DropdownToggle */ "./node_modules/reactstrap/es/DropdownToggle.js");
/* harmony import */ var reactstrap_es_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/es/DropdownMenu */ "./node_modules/reactstrap/es/DropdownMenu.js");
/* harmony import */ var reactstrap_es_DropdownItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/DropdownItem */ "./node_modules/reactstrap/es/DropdownItem.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function SessionItem(_ref) {
  var session = _ref.session;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-2 text-middle"
  }, session.url);
}

SessionItem.propTypes = {
  session: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
    url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
  }).isRequired
};

function SessionsBlock(_ref2) {
  var sessions = _ref2.sessions;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownOpen = _useState2[0],
      setDropdownOpen = _useState2[1];

  var toggle = function toggle() {
    return setDropdownOpen(function (prevState) {
      return !prevState;
    });
  };

  var firstSession = sessions[0];
  var otherSessions = sessions.slice(1);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SessionItem, {
    key: "session-".concat(firstSession.id),
    session: firstSession
  }), otherSessions.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Dropdown__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "session-dropdown",
    isOpen: dropdownOpen,
    toggle: toggle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_DropdownToggle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "session-btn text-middle py-1 px-2",
    color: "outline-secondary",
    caret: true
  }, "+", otherSessions.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_DropdownMenu__WEBPACK_IMPORTED_MODULE_4__["default"], null, otherSessions.map(function (session) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_DropdownItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "session-dropdown-item",
      key: "session-".concat(session.id),
      toggle: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SessionItem, {
      session: session
    }));
  }))) : null);
}

SessionsBlock.propTypes = {
  sessions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SessionsBlock);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatsList/item/TagsList.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatsList/item/TagsList.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



function TagsList(_ref) {
  var tags = _ref.tags;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, tags.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: tag.id,
      className: "tag-item mr-1 my-1"
    }, tag.name);
  }));
}

TagsList.propTypes = {
  tags: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TagsList);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatsList/onlineVisitorChatsList/OnlineVisitorChatsList.js":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatsList/onlineVisitorChatsList/OnlineVisitorChatsList.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");
/* harmony import */ var _components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/ErrorMessage */ "./resources/js/components/widgets/ErrorMessage.js");
/* harmony import */ var _redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/reducers/liveChat/actionCreators */ "./resources/js/redux/reducers/liveChat/actionCreators.js");







function OnlineVisitorChatsList(_ref) {
  var clientsMap = _ref.clientsMap,
      clientsIds = _ref.clientsIds,
      loading = _ref.loading,
      hasMore = _ref.hasMore,
      error = _ref.error,
      view = _ref.view,
      loadOnlineVisitors = _ref.loadOnlineVisitors,
      formatMsgTime = _ref.formatMsgTime;
  var ChatsListView = view;

  var loadMore = function loadMore() {
    if (loading || !hasMore) {
      return;
    }

    loadOnlineVisitors();
  };

  if (!clientsIds.size && loading) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_3__["default"], null);
  }

  if (error) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChatsListView, {
    clientsMap: clientsMap,
    clientsIds: clientsIds,
    loadMore: loadMore,
    hasMore: hasMore && !loading,
    formatMsgTime: formatMsgTime
  });
}

OnlineVisitorChatsList.propTypes = {
  clientsMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  clientsIds: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  view: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  loadOnlineVisitors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  formatMsgTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  hasMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var stateToProps = function stateToProps(state) {
  return {
    loading: state.liveChat.get("onlineVisitorsListLoading"),
    hasMore: state.liveChat.get("hasMoreOnlineVisitors"),
    error: state.liveChat.get("onlineVisitorClientsListLoadingError"),
    clientsMap: state.liveChat.get("clientsMap"),
    clientsIds: state.liveChat.get("onlineVisitorClientsIds")
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    loadOnlineVisitors: function loadOnlineVisitors(offset) {
      dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_5__["loadOnlineVisitorClientsList"])(offset));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps, dispatchToProps)(OnlineVisitorChatsList));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ChatsList/onlineVisitorChatsList/OnlineVisitorChatsListView.js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ChatsList/onlineVisitorChatsList/OnlineVisitorChatsListView.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OnlineVisitorChatsListView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_liveChat_widgets_ChatsList_item_ChatItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/item/ChatItem */ "./resources/js/containers/liveChat/widgets/ChatsList/item/ChatItem.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-infinite-scroller */ "./node_modules/react-infinite-scroller/index.js");
/* harmony import */ var react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/liveChat/tabTypes */ "./resources/js/containers/liveChat/tabTypes.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");






function OnlineVisitorChatsListView(_ref) {
  var clientsMap = _ref.clientsMap,
      clientsIds = _ref.clientsIds,
      loadMore = _ref.loadMore,
      hasMore = _ref.hasMore,
      formatMsgTime = _ref.formatMsgTime;
  var scrollParentRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: scrollParentRef,
    className: "chat-list view small-scrollbar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_infinite_scroller__WEBPACK_IMPORTED_MODULE_3___default.a, {
    pageStart: 0,
    loadMore: loadMore,
    hasMore: hasMore,
    loader: null,
    useWindow: false,
    getScrollParent: function getScrollParent() {
      return scrollParentRef.current;
    }
  }, clientsIds.size ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "list-unstyled mb-0"
  }, clientsIds.map(function (clientId) {
    var client = clientsMap.get(clientId);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_item_ChatItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: client.id,
      client: client,
      tab: _containers_liveChat_tabTypes__WEBPACK_IMPORTED_MODULE_4__["TAB_ONLINE_VISITORS"],
      showSessions: true,
      formatMsgTime: formatMsgTime
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mt-4 text-center text-middle"
  }, t("liveChat.chats-panel.no-online-visitors"))));
}
OnlineVisitorChatsListView.propTypes = {
  clientsMap: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  clientsIds: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  loadMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  formatMsgTime: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  hasMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ClientVariable/Variable.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ClientVariable/Variable.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Variable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function Variable(_ref) {
  var name = _ref.name,
      value = _ref.value;

  if (!value) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-middle d-flex mt-1 mb-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mr-1"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, typeof value === "function" ? value() : value));
}
Variable.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/LiveChatContainer.js":
/*!***********************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/LiveChatContainer.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/reducers/liveChat/actionCreators */ "./resources/js/redux/reducers/liveChat/actionCreators.js");
/* harmony import */ var _models_ChatMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/ChatMessage */ "./resources/js/models/ChatMessage.js");
/* harmony import */ var _containers_liveChat_helpers_usePlayAudio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/liveChat/helpers/usePlayAudio */ "./resources/js/containers/liveChat/helpers/usePlayAudio.js");
/* harmony import */ var _helpers_echoClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/echoClient */ "./resources/js/helpers/echoClient.js");
/* harmony import */ var _containers_liveChat_helpers_useHandleActiveClientSelected__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/liveChat/helpers/useHandleActiveClientSelected */ "./resources/js/containers/liveChat/helpers/useHandleActiveClientSelected.js");
/* harmony import */ var _containers_liveChat_helpers_useActiveClient__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/liveChat/helpers/useActiveClient */ "./resources/js/containers/liveChat/helpers/useActiveClient.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function usePlayLongNotification(authUser) {
  var playSound = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var clientsAskingLiveChatIds = state.liveChat.get("clientsAskingLiveChatIds");
    return !!(clientsAskingLiveChatIds && clientsAskingLiveChatIds.size > 0);
  });

  var _usePlayAudio = Object(_containers_liveChat_helpers_usePlayAudio__WEBPACK_IMPORTED_MODULE_6__["default"])("/audio/bring.mp3", true),
      _usePlayAudio2 = _slicedToArray(_usePlayAudio, 2),
      playLongNotification = _usePlayAudio2[0],
      stopPlayLongNotification = _usePlayAudio2[1];

  var soundAllowed = authUser.user_notifications_setting.site_long_notifications && playSound;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (soundAllowed) {
      playLongNotification();
    } else {
      stopPlayLongNotification && stopPlayLongNotification();
    }
  }, [soundAllowed]); //eslint-disable-line

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      stopPlayLongNotification && stopPlayLongNotification();
    };
  }, [stopPlayLongNotification]);
  return soundAllowed;
}

function LiveChatContainer(_ref) {
  var setActiveClientChannel = _ref.setActiveClientChannel,
      openedChatId = _ref.openedChatId,
      children = _ref.children,
      updateClientsLastMessageDate = _ref.updateClientsLastMessageDate,
      addClientAskingLivechat = _ref.addClientAskingLivechat,
      handleVisitorGotOperator = _ref.handleVisitorGotOperator,
      openChatWithClient = _ref.openChatWithClient,
      updateClient = _ref.updateClient,
      loadClients = _ref.loadClients,
      needPreloadClients = _ref.needPreloadClients,
      addNewMessage = _ref.addNewMessage,
      handleConversationStopped = _ref.handleConversationStopped,
      handleClientDidNotGetOperator = _ref.handleClientDidNotGetOperator,
      clientSessionOpened = _ref.clientSessionOpened,
      clientSessionClosed = _ref.clientSessionClosed;
  var authUser = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_2__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (openedChatId) {
      if (needPreloadClients) {
        loadClients().then(function () {
          openChatWithClient(openedChatId);
        });
      } else {
        openChatWithClient(openedChatId);
      }
    } else {
      openChatWithClient(null);
    }
  }, [openedChatId]); //eslint-disable-line

  usePlayLongNotification(authUser);

  var _usePlayAudio3 = Object(_containers_liveChat_helpers_usePlayAudio__WEBPACK_IMPORTED_MODULE_6__["default"])("/audio/notification.mp3"),
      _usePlayAudio4 = _slicedToArray(_usePlayAudio3, 1),
      playShortNotification = _usePlayAudio4[0];

  var activeClient = Object(_containers_liveChat_helpers_useActiveClient__WEBPACK_IMPORTED_MODULE_9__["default"])();
  var activeClientId = activeClient === null || activeClient === void 0 ? void 0 : activeClient.id.toString();

  var getDepartmentChannels = function getDepartmentChannels() {
    var channels = [];
    authUser.departments.forEach(function (department) {
      channels.push(_helpers_echoClient__WEBPACK_IMPORTED_MODULE_7__["default"]["private"]("Department.".concat(department.id)));
    });
    channels.push(_helpers_echoClient__WEBPACK_IMPORTED_MODULE_7__["default"]["private"]("Company.".concat(authUser.company_id, ".Department")));
    return channels;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    getDepartmentChannels().forEach(function (channel) {
      channel.listen("VisitorAskingForLivechat", function (_ref2) {
        var client = _ref2.client;
        addClientAskingLivechat(client);
      }).listen("VisitorAskingForLivechat", function (_ref3) {
        var client = _ref3.client;
        addClientAskingLivechat(client);
      }).listen("VisitorGotLivechatOperator", function (_ref4) {
        var client = _ref4.client;
        handleVisitorGotOperator(client, authUser.id);
      }).listen("ClientDataChanged", function (_ref5) {
        var clientId = _ref5.clientId,
            changedFieldName = _ref5.changedFieldName,
            changedFieldValue = _ref5.changedFieldValue;
        updateClient(clientId, changedFieldName, changedFieldValue);
      }).listen("VisitorGotLivechatOperator", function (_ref6) {
        var client = _ref6.client;
        handleVisitorGotOperator(client, authUser.id);
      }).listen("StopConversationWithClient", function (_ref7) {
        var clientId = _ref7.clientId;
        handleConversationStopped(clientId);
      }).listen("VisitorDidNotGetOperator", function (_ref8) {
        var client = _ref8.client;
        handleClientDidNotGetOperator(client);
      }).listen("ClientSessionOpened", function (_ref9) {
        var client = _ref9.client;
        clientSessionOpened(client);
      }).listen("ClientSessionClosed", function (_ref10) {
        var client = _ref10.client,
            hasOtherSessions = _ref10.hasOtherSessions;
        clientSessionClosed(client, hasOtherSessions);
      });
    });
  }, [authUser]); //eslint-disable-line

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var channels = getDepartmentChannels();
    channels.forEach(function (channel) {
      channel.listen("ClientNewMessage", function (_ref11) {
        var _message$user;

        var message = _ref11.message,
            client = _ref11.client;
        message.client = client;
        updateClientsLastMessageDate(message);
        var isMessageFromAnotherUser = Boolean(message.user && ((_message$user = message.user) === null || _message$user === void 0 ? void 0 : _message$user.id.toString()) !== authUser.id.toString());
        var isMessageFromClient = message.type === _models_ChatMessage__WEBPACK_IMPORTED_MODULE_5__["TYPE_CLIENT_MESSAGE"];

        if (isMessageFromClient || isMessageFromAnotherUser) {
          playShortNotification();
        }
      });
    });
    return function () {
      channels.forEach(function (channel) {
        channel.stopListening("ClientNewMessage");
      });
    };
  }, [authUser, activeClientId]); //eslint-disable-line

  Object(_containers_liveChat_helpers_useHandleActiveClientSelected__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (clientId) {
    if (clientId) {
      var channel = _helpers_echoClient__WEBPACK_IMPORTED_MODULE_7__["default"]["private"]("Client.".concat(clientId));
      channel.listen("ClientNewMessage", function (_ref12) {
        var message = _ref12.message,
            client = _ref12.client;
        message.client = client;
        addNewMessage(message);
      });
      setActiveClientChannel(channel);
      return function () {
        channel.stopListening("ClientNewMessage");
        setActiveClientChannel(null);
      };
    }
  }, [addNewMessage, setActiveClientChannel]));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
}

LiveChatContainer.propTypes = {
  openedChatId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  needPreloadClients: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  updateClientsLastMessageDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  addClientAskingLivechat: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleVisitorGotOperator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  openChatWithClient: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  updateClient: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  loadClients: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  addNewMessage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleConversationStopped: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleClientDidNotGetOperator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  clientSessionOpened: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  clientSessionClosed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setActiveClientChannel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
};

function stateToProps(state) {
  var _state$liveChat$get;

  return {
    needPreloadClients: !((_state$liveChat$get = state.liveChat.get("clientsIds")) === null || _state$liveChat$get === void 0 ? void 0 : _state$liveChat$get.size)
  };
}

function dispatchToProps(dispatch) {
  return {
    openChatWithClient: function openChatWithClient(clientId) {
      return dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_4__["setActiveClient"])(clientId));
    },
    updateClientsLastMessageDate: function updateClientsLastMessageDate(message) {
      dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_4__["updateClientsLastMessageDate"])(message));
    },
    addClientAskingLivechat: function addClientAskingLivechat(client) {
      dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_4__["addClientAskingLivechat"])(client));
    },
    handleVisitorGotOperator: function handleVisitorGotOperator(client, operatorId) {
      dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_4__["handleVisitorGotOperator"])({
        client: client,
        operatorId: operatorId
      }));
    },
    handleClientDidNotGetOperator: function handleClientDidNotGetOperator(client) {
      dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_4__["clientDidNotGetOperator"])(client));
    },
    handleConversationStopped: function handleConversationStopped(clientId) {
      dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_4__["handleConversationStopped"])(clientId));
    },
    updateClient: function updateClient(clientId, fieldName, data) {
      dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_4__["updateClientData"])(clientId, fieldName, data));
    },
    loadClients: function loadClients(offset) {
      return dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_4__["loadClientsList"])(offset));
    },
    addNewMessage: function addNewMessage(message) {
      dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_4__["clientNewMessage"])(message));
    },
    clientSessionOpened: function clientSessionOpened(client) {
      dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_4__["onlineVisitorNewSessionOpened"])(client));
    },
    clientSessionClosed: function clientSessionClosed(client, hasMore) {
      dispatch(Object(_redux_reducers_liveChat_actionCreators__WEBPACK_IMPORTED_MODULE_4__["onlineVisitorSessionClosed"])(client, hasMore));
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(stateToProps, dispatchToProps)(LiveChatContainer));

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/MobileChatHeader.js":
/*!**********************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/MobileChatHeader.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _models_Client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Client */ "./resources/js/models/Client.js");
/* harmony import */ var _containers_liveChat_widgets_ChatsList_item_ClientVariablesString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/liveChat/widgets/ChatsList/item/ClientVariablesString */ "./resources/js/containers/liveChat/widgets/ChatsList/item/ClientVariablesString.js");
/* harmony import */ var _containers_integrations_form_screen_ServiceScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/integrations/form/screen/ServiceScreen */ "./resources/js/containers/integrations/form/screen/ServiceScreen.js");








function GoBackBtn(_ref) {
  var onClick = _ref.onClick,
      href = _ref.href;
  var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaArrowLeft"], {
    className: "icon-size-20 color-blue mb-2"
  });

  if (onClick) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-link no-shadow text-dec-none d-flex align-items-center px-2",
      onClick: onClick
    }, content);
  } else if (href) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      className: "btn btn-link no-shadow text-dec-none d-flex align-items-center px-2",
      to: href
    }, content);
  }

  return null;
}

GoBackBtn.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

function MobileChatHeader(_ref2) {
  var onClick = _ref2.onClick,
      href = _ref2.href,
      client = _ref2.client,
      toggleShowDetails = _ref2.toggleShowDetails;
  var service = client.integration.service;
  var variables = client.variables;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mobile-chat-header-container pt-3 pb-2 pl-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GoBackBtn, {
    onClick: onClick,
    href: href
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: toggleShowDetails,
    className: "current-interlocutor btn-link no-shadow border-0 w-100 px-1 d-flex align-items-center text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-wrap align-items-center img-block mr-3 mb-2"
  }, _containers_integrations_form_screen_ServiceScreen__WEBPACK_IMPORTED_MODULE_6__["serviceIconsMap"][service]()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-wrap align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "w-100 mb-2"
  }, client.name), variables && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_liveChat_widgets_ChatsList_item_ClientVariablesString__WEBPACK_IMPORTED_MODULE_5__["default"], {
    variables: variables,
    integrationType: service
  }))));
}

MobileChatHeader.propTypes = {
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_Client__WEBPACK_IMPORTED_MODULE_4__["default"]).isRequired,
  toggleShowDetails: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (MobileChatHeader);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/ToggleLongSoundButton.js":
/*!***************************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/ToggleLongSoundButton.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var react_bootstrap_sweetalert_dist_styles_SweetAlertStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-sweetalert/dist/styles/SweetAlertStyles */ "./node_modules/react-bootstrap-sweetalert/dist/styles/SweetAlertStyles.js");
/* harmony import */ var react_bootstrap_sweetalert_dist_styles_SweetAlertStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_sweetalert_dist_styles_SweetAlertStyles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_auth_actionCreators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/reducers/auth/actionCreators */ "./resources/js/redux/reducers/auth/actionCreators.js");
/* harmony import */ var _helpers_echoClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/echoClient */ "./resources/js/helpers/echoClient.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");









function ToggleLongSoundButton() {
  var user = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var siteLongNotifications = user.user_notifications_setting.site_long_notifications;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _helpers_echoClient__WEBPACK_IMPORTED_MODULE_6__["default"]["private"]("User.self.".concat(user.id)).listen("UserNotificationSettingsChanged", function (_ref) {
      var data = _ref.data;
      dispatch(Object(_redux_reducers_auth_actionCreators__WEBPACK_IMPORTED_MODULE_5__["setAuthUser"])(user.set("user_notifications_setting", data)));
    });
  }, [_redux_reducers_auth_actionCreators__WEBPACK_IMPORTED_MODULE_5__["setAuthUser"], user]); //eslint-disable-line

  var handleClick = function handleClick() {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_3__["default"].call("patch", "/methods/user/notifications-settings/".concat(user.user_notifications_setting.id), {}, {
      site_long_notifications: +!siteLongNotifications
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link volume-btn no-shadow px-2 text-dec-none position-relative",
    onClick: handleClick
  }, siteLongNotifications ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaVolumeOff"], {
    className: "color-gray icon-size-30"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaVolumeOff"], {
    className: "color-gray icon-size-30"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaTimes"], {
    className: "volume-turned-off color-gray icon-size-14 position-absolute"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (ToggleLongSoundButton);

/***/ }),

/***/ "./resources/js/containers/liveChat/widgets/messageImageUrl.js":
/*!*********************************************************************!*\
  !*** ./resources/js/containers/liveChat/widgets/messageImageUrl.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return messageImageUrl; });
/* harmony import */ var _models_ChatMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/ChatMessage */ "./resources/js/models/ChatMessage.js");

function messageImageUrl(message) {
  switch (message.type) {
    case _models_ChatMessage__WEBPACK_IMPORTED_MODULE_0__["TYPE_USER_MESSAGE"]:
      return null;

    case _models_ChatMessage__WEBPACK_IMPORTED_MODULE_0__["TYPE_BOT_MESSAGE"]:
      return "/img/default_chatbot_img.svg";

    case _models_ChatMessage__WEBPACK_IMPORTED_MODULE_0__["TYPE_CLIENT_MESSAGE"]:
      return "/img/default_user_image.svg";
  }
}

/***/ }),

/***/ "./resources/js/helpers/echoClient.js":
/*!********************************************!*\
  !*** ./resources/js/helpers/echoClient.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var laravel_echo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! laravel-echo */ "./node_modules/laravel-echo/dist/echo.js");

window.io = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
var echoClient = new laravel_echo__WEBPACK_IMPORTED_MODULE_0__["default"]({
  broadcaster: "socket.io",
  host: window.location.origin
});
/* harmony default export */ __webpack_exports__["default"] = (echoClient);

/***/ }),

/***/ "./resources/js/helpers/isGeo.js":
/*!***************************************!*\
  !*** ./resources/js/helpers/isGeo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isGeo; });
function isGeo(geo) {
  return (geo === null || geo === void 0 ? void 0 : geo.iso) || (geo === null || geo === void 0 ? void 0 : geo.city) || (geo === null || geo === void 0 ? void 0 : geo.country);
}

/***/ }),

/***/ "./resources/js/helpers/momentInstance.js":
/*!************************************************!*\
  !*** ./resources/js/helpers/momentInstance.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment/locale/es */ "./node_modules/moment/locale/es.js");
/* harmony import */ var moment_locale_es__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_0__);
var moment = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");


moment.locale(window.locale);
/* harmony default export */ __webpack_exports__["default"] = (moment);

/***/ }),

/***/ "./resources/js/helpers/selectLoaders/loadCompanyTagsSelectOptions.js":
/*!****************************************************************************!*\
  !*** ./resources/js/helpers/selectLoaders/loadCompanyTagsSelectOptions.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadCompanyTagsSelectOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadCompanyTagsSelectOptions(inputValue) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/tags/search-company-tags", {
      q: inputValue
    }).data(function (data) {
      resolve(data.map(function (integration) {
        return {
          label: integration.name,
          value: integration.id
        };
      }));
    });
  });
}

/***/ }),

/***/ "./resources/js/hooks/useGetDateTime.js":
/*!**********************************************!*\
  !*** ./resources/js/hooks/useGetDateTime.js ***!
  \**********************************************/
/*! exports provided: useUserTimeFormat, useUserDateTimeFormatFormat, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserTimeFormat", function() { return useUserTimeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUserDateTimeFormatFormat", function() { return useUserDateTimeFormatFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetDateTime; });
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var _hooks_useGetDateFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useGetDateFormat */ "./resources/js/hooks/useGetDateFormat.js");
/* harmony import */ var _hooks_useGetTimezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useGetTimezone */ "./resources/js/hooks/useGetTimezone.js");
/* harmony import */ var _helpers_momentInstance__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/momentInstance */ "./resources/js/helpers/momentInstance.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);






function getTimeFormat(user) {
  var isAmPm = user ? user.is_am_pm : true;
  return isAmPm ? "hh:mm a" : "HH:mm";
}

function useUserTimeFormat() {
  var user = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_0__["default"])();
  return getTimeFormat(user);
}
function useUserDateTimeFormatFormat() {
  var dateFormat = Object(_hooks_useGetDateFormat__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var timeFormat = useUserTimeFormat();
  return timeFormat + " " + dateFormat;
}
function useGetDateTime() {
  var timezone = Object(_hooks_useGetTimezone__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var fullFormat = useUserDateTimeFormatFormat();
  return Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function (date) {
    return Object(_helpers_momentInstance__WEBPACK_IMPORTED_MODULE_3__["default"])(date * 1000).tz(timezone).format(fullFormat);
  }, [fullFormat, timezone]);
}

/***/ }),

/***/ "./resources/js/hooks/usePrevious.js":
/*!*******************************************!*\
  !*** ./resources/js/hooks/usePrevious.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var usePrevious = function usePrevious(value) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    ref.current = value;
  });
  return ref.current;
};

/* harmony default export */ __webpack_exports__["default"] = (usePrevious);

/***/ }),

/***/ "./resources/js/models/ModalWindow.js":
/*!********************************************!*\
  !*** ./resources/js/models/ModalWindow.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var fields = {
  id: null,
  render: function render() {
    return null;
  }
};

var ModalWindow = /*#__PURE__*/function (_Record) {
  _inherits(ModalWindow, _Record);

  var _super = _createSuper(ModalWindow);

  function ModalWindow() {
    _classCallCheck(this, ModalWindow);

    return _super.apply(this, arguments);
  }

  _createClass(ModalWindow, null, [{
    key: "instantiate",
    value: function instantiate(data) {
      return new ModalWindow(data);
    }
  }]);

  return ModalWindow;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(fields));

/* harmony default export */ __webpack_exports__["default"] = (ModalWindow);

/***/ }),

/***/ "./resources/js/redux/reducers/liveChat/actionCreators.js":
/*!****************************************************************!*\
  !*** ./resources/js/redux/reducers/liveChat/actionCreators.js ***!
  \****************************************************************/
/*! exports provided: loadClientsList, updateClientsLastMessageDate, addClientAskingLivechat, handleVisitorGotOperator, loadClientsAskingLiveChatList, setActiveClient, updateClientData, clientMessagesLoading, clientMessagesLoaded, clientNewMessage, handleConversationStopped, clientDidNotGetOperator, loadClientMessages, loadOnlineVisitorClientsList, onlineVisitorNewSessionOpened, onlineVisitorSessionClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadClientsList", function() { return loadClientsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClientsLastMessageDate", function() { return updateClientsLastMessageDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClientAskingLivechat", function() { return addClientAskingLivechat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleVisitorGotOperator", function() { return handleVisitorGotOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadClientsAskingLiveChatList", function() { return loadClientsAskingLiveChatList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setActiveClient", function() { return setActiveClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateClientData", function() { return updateClientData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientMessagesLoading", function() { return clientMessagesLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientMessagesLoaded", function() { return clientMessagesLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientNewMessage", function() { return clientNewMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleConversationStopped", function() { return handleConversationStopped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientDidNotGetOperator", function() { return clientDidNotGetOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadClientMessages", function() { return loadClientMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadOnlineVisitorClientsList", function() { return loadOnlineVisitorClientsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlineVisitorNewSessionOpened", function() { return onlineVisitorNewSessionOpened; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onlineVisitorSessionClosed", function() { return onlineVisitorSessionClosed; });
/* harmony import */ var _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/liveChat/actionTypes */ "./resources/js/redux/reducers/liveChat/actionTypes.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");



var loadingClientsList = function loadingClientsList() {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLIENTS_LOADING
  };
};

var loadingClientsListError = function loadingClientsListError(data) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLIENTS_LOADING_ERROR,
    payload: data
  };
};

var loadedClientsList = function loadedClientsList(data) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLIENTS_LOADED,
    payload: data
  };
};

var loadClientsList = function loadClientsList() {
  return function (dispatch, getState) {
    dispatch(loadingClientsList());
    var offset = getState().liveChat.get("clientsIds").size;
    return _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/live-chat/clients-list", {
      offset: offset
    }).data(function (data) {
      dispatch(loadedClientsList(data));
    })["catch"](function (error, response) {
      dispatch(loadingClientsListError(response));
    });
  };
};

var loadedClientsAskingLiveChatList = function loadedClientsAskingLiveChatList(data) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLIENTS_ASKING_LIVECHAT_LOADED,
    payload: data
  };
};

var updateClientsLastMessageDate = function updateClientsLastMessageDate(message) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLIENTS_UPDATE_LAST_MESSAGE,
    payload: message
  };
};
var addClientAskingLivechat = function addClientAskingLivechat(client) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLIENTS_ADD_ASKING_LIVECHAT,
    payload: client
  };
};
var handleVisitorGotOperator = function handleVisitorGotOperator(client) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLIENTS_GOT_OPERATOR,
    payload: client
  };
};
var loadClientsAskingLiveChatList = function loadClientsAskingLiveChatList() {
  return function (dispatch) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/live-chat/clients--waiting-live-chat-list").data(function (data) {
      dispatch(loadedClientsAskingLiveChatList(data));
    })["catch"](function (error, response) {
      dispatch(loadingClientsListError(response));
    });
  };
};
var setActiveClient = function setActiveClient(clientId) {
  return function (dispatch, getState) {
    if (clientId) {
      var alreadyLoaded = getState().liveChat.getIn(["clientsMap", clientId.toString()]);

      if (alreadyLoaded) {
        dispatch({
          type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SET_ACTIVE_CLIENT,
          payload: clientId
        });
      } else {
        _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/live-chat/get-client/".concat(clientId)).data(function (client) {
          dispatch({
            type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SET_LOADED_ACTIVE_CLIENT,
            payload: client
          });
        });
      }
    } else {
      dispatch({
        type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SET_ACTIVE_CLIENT,
        payload: clientId
      });
    }
  };
};
var updateClientData = function updateClientData(clientId, fieldName, data) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CLIENT_DATA,
    payload: {
      clientId: clientId,
      fieldName: fieldName,
      data: data
    }
  };
};
var clientMessagesLoading = function clientMessagesLoading() {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLIENT_MESSAGES_LOADING,
    payload: null
  };
};
var clientMessagesLoaded = function clientMessagesLoaded(messages) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLIENT_MESSAGES_LOADED,
    payload: messages
  };
};
var clientNewMessage = function clientNewMessage(message) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLIENT_NEW_MESSAGE,
    payload: message
  };
};
var handleConversationStopped = function handleConversationStopped(clientId) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CONVERSATION_STOPPED,
    payload: clientId
  };
};
var clientDidNotGetOperator = function clientDidNotGetOperator(client) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CLIENTS_DID_NOT_GET_OPERATOR,
    payload: client
  };
};
var loadClientMessages = function loadClientMessages(clientId) {
  return function (dispatch, getState) {
    var liveChatData = getState().liveChat;
    var lastMessageId = liveChatData.getIn(["oldClientMessages", 0, "id"]);
    var oldMessagesHasMore = liveChatData.get("oldMessagesHasMore");

    if (!oldMessagesHasMore) {
      return;
    }

    dispatch(clientMessagesLoading());
    var params = {};

    if (lastMessageId) {
      params.lastId = lastMessageId;
    }

    return _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/live-chat/get-messages/".concat(clientId), params).data(function (data) {
      dispatch(clientMessagesLoaded(data));
    });
  };
};

var loadingOnlineVisitorClientsList = function loadingOnlineVisitorClientsList() {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONLINE_VISITOR_CLIENTS_LOADING
  };
};

var loadingOnlineVisitorClientsListError = function loadingOnlineVisitorClientsListError(data) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONLINE_VISITOR_CLIENTS_LOADING_ERROR,
    payload: data
  };
};

var loadedOnlineVisitorClientsList = function loadedOnlineVisitorClientsList(data) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONLINE_VISITOR_CLIENTS_LOADED,
    payload: data
  };
};

var loadOnlineVisitorClientsList = function loadOnlineVisitorClientsList() {
  return function (dispatch, getState) {
    dispatch(loadingOnlineVisitorClientsList());
    var offset = getState().liveChat.get("onlineVisitorClientsIds").size;
    return _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/live-chat/online-visitors-list", {
      offset: offset
    }).data(function (data) {
      dispatch(loadedOnlineVisitorClientsList(data));
    })["catch"](function (error, response) {
      dispatch(loadingOnlineVisitorClientsListError(response));
    });
  };
};
var onlineVisitorNewSessionOpened = function onlineVisitorNewSessionOpened(data) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONLINE_VISITOR_NEW_SESSION_OPENED,
    payload: data
  };
};
var onlineVisitorSessionClosed = function onlineVisitorSessionClosed(client, hasMoreSessions) {
  return {
    type: _redux_reducers_liveChat_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ONLINE_VISITOR_SESSION_CLOSED,
    payload: {
      client: client,
      hasMoreSessions: hasMoreSessions
    }
  };
};

/***/ }),

/***/ "./resources/js/redux/reducers/modalWindows/actionCreators.js":
/*!********************************************************************!*\
  !*** ./resources/js/redux/reducers/modalWindows/actionCreators.js ***!
  \********************************************************************/
/*! exports provided: removeModalWindow, showConfirm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeModalWindow", function() { return removeModalWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfirm", function() { return showConfirm; });
/* harmony import */ var _redux_reducers_modalWindows_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/modalWindows/actionTypes */ "./resources/js/redux/reducers/modalWindows/actionTypes.js");
/* harmony import */ var _models_ModalWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/ModalWindow */ "./resources/js/models/ModalWindow.js");
/* harmony import */ var _components_widgets_modals_ConfirmModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/modals/ConfirmModal */ "./resources/js/components/widgets/modals/ConfirmModal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_4__);






var addModalWindow = function addModalWindow(modal) {
  return {
    type: _redux_reducers_modalWindows_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ADD,
    payload: modal
  };
};

var removeModalWindow = function removeModalWindow(id) {
  return {
    type: _redux_reducers_modalWindows_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].REMOVE,
    payload: id
  };
};
var showConfirm = function showConfirm(text) {
  return function (dispatch) {
    return new Promise(function (confirm, reject) {
      var id = lodash_uniqueId__WEBPACK_IMPORTED_MODULE_4___default()();
      var modal = new _models_ModalWindow__WEBPACK_IMPORTED_MODULE_1__["default"]({
        id: id,
        data: {
          text: text,
          onConfirm: confirm,
          onReject: reject
        },
        render: function render() {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_widgets_modals_ConfirmModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
            text: text,
            onConfirm: function onConfirm() {
              confirm();
              dispatch(removeModalWindow(id));
            },
            onReject: function onReject() {
              reject();
              dispatch(removeModalWindow(id));
            }
          });
        }
      });
      dispatch(addModalWindow(modal));
    });
  };
};

/***/ }),

/***/ 3:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

}]);