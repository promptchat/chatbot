(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/css/chatbot.scss":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./resources/css/chatbot.scss ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  user-select: none;\n}\n\n.builder-field {\n  background-image: url(\"/img/grid.png\");\n}\n\n.block {\n  background-color: #fff;\n  position: absolute;\n  width: 220px;\n  border-radius: 5px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);\n}\n.block.react-draggable-dragging {\n  z-index: 5 !important;\n}\n.block.selected {\n  box-shadow: 0 0 5px #5555e2;\n}\n.block .header {\n  cursor: pointer;\n  padding: 7px 14px;\n  background-color: #EDF2F6;\n  border-radius: 5px 5px 0 0;\n  color: black;\n  font-weight: bold;\n  font-size: 15px;\n}\n.block .header .context-menu {\n  color: #728CA3;\n  float: right;\n}\n.block .block-content {\n  padding: 10px;\n}\n.block .block-content .message {\n  color: #668AAA;\n}\n.block .block-content .message p {\n  padding-bottom: 0;\n}\n.block .block-content .api {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #668AAA;\n}\n.block .block-content .api .api-method {\n  color: #AFAFAF;\n  margin-right: 10px;\n}\n.block .block-content .variable .variable-name {\n  font-style: italic;\n  color: #0abfe0;\n}\n.block .block-content var {\n  color: #0abfe0;\n}\n.block .block-button {\n  margin: 10px 13px;\n  background-color: #F5F5F5;\n  color: #668AAA;\n  padding: 6px 10px;\n}\n.block .block-button[connected=connected-right] .connect-right {\n  transition: none;\n  opacity: 1;\n  right: -24px;\n}\n.block .block-button[connected=connected-left] .connect-left {\n  transition: none;\n  opacity: 1;\n  left: -24px;\n}\n.block .block-button .connect {\n  border: 2px solid #fff;\n  width: 17px;\n  height: 17px;\n  background-size: 13px 13px;\n}\n.block .block-button .connect.connect-right {\n  top: calc(50% - 9px);\n}\n.block .block-button .connect.connect-left {\n  top: calc(50% - 9px);\n}\n.block .carousel.slide .card {\n  height: 180px;\n  overflow-y: scroll;\n}\n.block .carousel-control-next {\n  right: -15px;\n}\n.block .carousel-control-prev {\n  left: -15px;\n}\n.block .carousel-control-prev span, .block .carousel-control-next span {\n  background-color: rgba(0, 0, 0, 0.55);\n  border-radius: 50%;\n  padding: 10px;\n  background-size: 50%;\n}\n\n.connectable {\n  position: relative;\n}\n\n.connect {\n  z-index: 6;\n  opacity: 0;\n  background-color: transparent;\n  border-radius: 50%;\n  position: absolute;\n  cursor: pointer;\n  background-image: url(\"/img/eclipse.svg\");\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 38px;\n  height: 38px;\n  transition: 0.5s ease;\n}\n.connect.connect-top {\n  z-index: 4;\n  right: calc(50% - 20px);\n  top: -18px;\n}\n.connect.connect-right {\n  right: -18px;\n  top: calc(50% - 18px);\n}\n.connect.connect-bottom {\n  right: calc(50% - 20px);\n  bottom: -18px;\n}\n.connect.connect-left {\n  left: -18px;\n  top: calc(50% - 18px);\n}\n\n.connectable:hover > .connect, .connecting, .connect:hover {\n  opacity: 1;\n}\n.connectable:hover > .connect.connect-top, .connecting.connect-top, .connect:hover.connect-top {\n  top: -24px;\n}\n.connectable:hover > .connect.connect-right, .connecting.connect-right, .connect:hover.connect-right {\n  right: -24px;\n}\n.connectable:hover > .connect.connect-bottom, .connecting.connect-bottom, .connect:hover.connect-bottom {\n  bottom: -24px;\n}\n.connectable:hover > .connect.connect-left, .connecting.connect-left, .connect:hover.connect-left {\n  left: -24px;\n}\n\n.connect-content {\n  z-index: 5;\n  position: relative;\n}\n\n.configure {\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 5px;\n  position: fixed;\n  top: 20px;\n  right: 20px;\n}\n.configure .btn-success {\n  margin-right: 10px;\n}\n.configure .form-control {\n  width: 200px;\n  margin-right: 10px;\n  display: inline-block;\n}\n\n.minimap {\n  background-color: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  bottom: 20px;\n  right: 20px;\n}\n.minimap .buttons {\n  width: 220px;\n}\n.minimap .buttons .btn {\n  margin: 5px;\n}\n.minimap .buttons .counter {\n  color: #ffffff;\n}\n\n.panel {\n  background-color: #FBFDFE;\n  height: 100%;\n  position: absolute;\n  padding: 10px;\n  border: 1px solid #EEEEEE;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.06);\n}\n.panel .panel-header {\n  padding: 20px 0;\n  font-style: italic;\n  font-size: 17px;\n}\n.panel .create-btn {\n  margin: 6px 0;\n  padding: 5px 0 0 20px;\n}\n.panel .create-btn .color-label {\n  width: 6px;\n  top: 0;\n  bottom: 0;\n  position: absolute;\n  left: 0;\n}\n.panel .create-btn .drag-element {\n  color: #c2c2c2;\n}\n.panel .block-creation .plus-icon {\n  position: absolute;\n  top: -10px;\n  left: -16px;\n  font-size: 14px;\n}\n\n.remove-anchor {\n  position: absolute;\n  z-index: 1;\n  background-color: white;\n  border: 1px solid blue;\n  border-radius: 50%;\n  width: 10px;\n  height: 10px;\n  color: blue;\n  font-size: 5px;\n}\n\n.block-edit {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: space-between;\n  background-color: white;\n  z-index: 500;\n  width: 350px;\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  padding: 20px 20px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);\n}\n.block-edit .header {\n  margin: -20px -20px 20px -20px;\n  padding: 15px;\n}\n.block-edit .block-edit-body {\n  height: 100%;\n  position: relative;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  scrollbar-width: none;\n}\n.block-edit .actions {\n  padding-top: 20px;\n}\n.block-edit .actions .btn {\n  margin-right: 10px;\n}\n.block-edit .api-edit-collapse {\n  padding: 8px 0;\n  border-bottom: 1px solid #cccccc;\n  margin-bottom: 10px;\n}\n.block-edit .api-edit-collapse .toggler {\n  float: right;\n  font-size: 18px;\n}\n.block-edit .value-group {\n  position: relative;\n  margin-bottom: 10px;\n}\n.block-edit .value-group .value-group-key,\n.block-edit .value-group .value-group-value {\n  font-size: 10px;\n  display: inline-block;\n}\n.block-edit .value-group .value-group-key {\n  margin-right: 10px;\n  width: 100px;\n}\n.block-edit .value-group .value-group-value {\n  width: 200px;\n}\n.block-edit .value-group .value-group-remove {\n  position: absolute;\n  top: 5px;\n  font-size: 12px;\n  right: 8px;\n}\n.block-edit .add-value-group {\n  display: block;\n  margin-top: 15px;\n}\n.block-edit .card-button-group {\n  position: relative;\n}\n.block-edit .card-button-group .card-button-group-type,\n.block-edit .card-button-group .card-button-group-text,\n.block-edit .card-button-group .card-button-group-value {\n  display: inline-block;\n  font-size: 10px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n.block-edit .card-button-group .card-button-group-type {\n  width: 75px;\n  margin-right: 5px;\n}\n.block-edit .card-button-group .card-button-group-text {\n  width: 75px;\n  margin-right: 5px;\n}\n.block-edit .card-button-group .card-button-group-value {\n  width: 105px;\n}\n.block-edit .card-button-group .card-button-group-remove {\n  top: 9px;\n  right: -11px;\n  font-size: 11px;\n  position: absolute;\n}\n\n.edit-bgdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.5);\n}\n\n.editable-block {\n  margin-bottom: 20px;\n}\n\n.help-question {\n  margin-left: 10px;\n}\n\n.input-with-remove {\n  position: relative;\n}\n.input-with-remove .remove-btn {\n  position: absolute;\n  right: 10px;\n  top: 5px;\n}\n.input-with-remove input {\n  padding-right: 30px;\n}\n\n.attachment-preview {\n  max-width: 100%;\n  max-height: 150px;\n}", ""]);

// exports


/***/ }),

/***/ "./resources/css/chatbot.scss":
/*!************************************!*\
  !*** ./resources/css/chatbot.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader!../../node_modules/postcss-loader/src??ref--6-2!../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./chatbot.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./resources/css/chatbot.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayoutForWithoutPaddings.js":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayoutForWithoutPaddings.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersonalAccountLayoutForWithoutPaddings; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _menu_MainMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu/MainMenu */ "./resources/js/components/layout/PersonalAccountLayout/menu/MainMenu.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function PersonalAccountLayoutForWithoutPaddings(_ref) {
  var children = _ref.children,
      redirectIfForbidden = _ref.redirectIfForbidden;
  var authUser = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var redirectToForbiddenPage = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (state) {
    return state.auth.get("showForbiddenMessage");
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  if (redirectToForbiddenPage && redirectIfForbidden) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_5__["Redirect"], {
      to: "/403"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    className: "d-lg-flex d-block p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Navbar"], {
    dark: true,
    expand: "lg",
    className: "personal-account-right-bar p-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["NavbarToggler"], {
    color: "dark",
    onClick: toggle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    isOpen: isOpen,
    navbar: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_menu_MainMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    user: authUser
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "personal-account-content without-paddings"
  }, children));
}
PersonalAccountLayoutForWithoutPaddings.defaultProps = {
  redirectIfForbidden: true
};
PersonalAccountLayoutForWithoutPaddings.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  redirectIfForbidden: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
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

/***/ "./resources/js/constants/BlockTypes.js":
/*!**********************************************!*\
  !*** ./resources/js/constants/BlockTypes.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (Object.freeze({
  TYPE_START: 0,
  TYPE_MESSAGE: 1,
  TYPE_QUESTION: 2,
  TYPE_BUTTONS: 3,
  TYPE_SELECT: 4,
  TYPE_BUTTON: 5,
  TYPE_CALENDAR: 6,
  TYPE_API_CONTENT: 7,
  TYPE_MAP: 8,
  TYPE_SWITCH: 9,
  TYPE_CAROUSEL: 10,
  TYPE_SET_VARIABLE: 11,
  TYPE_CALL_OPERATOR: 12,
  TYPE_TRIGGER: 13,
  TYPE_NOTIFICATION: 14,
  TYPE_TAG: 15,
  TYPE_DEPARTMENT: 16
}));

/***/ }),

/***/ "./resources/js/containers/chatBot/Anchor.js":
/*!***************************************************!*\
  !*** ./resources/js/containers/chatBot/Anchor.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ChatBotForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ChatBotForm */ "./resources/js/containers/chatBot/ChatBotForm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function Anchor(_ref) {
  var from = _ref.from,
      to = _ref.to,
      _ref$scroll = _ref.scroll,
      scroll = _ref$scroll === void 0 ? {
    x: 0,
    y: 0
  } : _ref$scroll;
  var rendered = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (_ref2) {
    var chatbot = _ref2.chatbot;
    var isRenderedFrom = chatbot.getIn(["builder", "rendered", from.toString()]);
    var isRenderedTo = chatbot.getIn(["builder", "rendered", to.toString()]);

    if (!isRenderedFrom || !isRenderedTo) {
      return false;
    }

    return isRenderedFrom[0] + isRenderedTo[0];
  });
  var scale = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (_ref3) {
    var chatbot = _ref3.chatbot;
    return chatbot.getIn(["builder", "scale"]);
  });
  var onlySide = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (_ref4) {
    var chatbot = _ref4.chatbot;
    return chatbot.getIn(["builder", "rendered", from.toString(), 1]);
  });

  if (!rendered) {
    return null;
  }

  var HEADER_HEIGHT = 0;
  var RIGHT_BAR_WIDTH = _ChatBotForm__WEBPACK_IMPORTED_MODULE_2__["FULL_RIGHT_BAR_SIZE"];
  var k = 100 / scale;
  var DELTA = 12 / k;
  var PATH_LEFT = 1;
  var PATH_RIGHT = 2;
  var PATH_TOP = 3;
  var PATH_BOTTOM = 4;
  var sourceElement = document.getElementById("block-".concat(from));
  var sourceRect = sourceElement.getBoundingClientRect();
  var targetRect = document.getElementById("block-".concat(to)).getBoundingClientRect();
  var wrapperRect = {
    x: 0,
    y: 0
  };
  var a = {
    x: sourceRect.x + scroll.x - wrapperRect.x - RIGHT_BAR_WIDTH,
    y: sourceRect.y + scroll.y - wrapperRect.y - HEADER_HEIGHT,
    width: sourceRect.width,
    height: sourceRect.height
  };
  var b = {
    x: targetRect.x + scroll.x - wrapperRect.x - RIGHT_BAR_WIDTH,
    y: targetRect.y + scroll.y - wrapperRect.y - HEADER_HEIGHT,
    width: targetRect.width,
    height: targetRect.height
  };
  var axMiddle = a.x + a.width / 2;
  var ayMiddle = a.y + a.height / 2;
  var bxMiddle = b.x + b.width / 2;
  var byMiddle = b.y + b.height / 2; // 16 outs

  var leftDelta = axMiddle - bxMiddle;
  var topDelta = ayMiddle - byMiddle;
  var isConnectFrom = from === "connect-from";
  var MOVE_MARGIN = isConnectFrom ? -a.width / 2 / k : 4 / k;
  var MOVE_SUB_MARGIN = isConnectFrom ? 0 : 2 / k;
  var STATIC_MOVE = isConnectFrom ? 1 : 0;
  var A = {
    top: {
      x: axMiddle - STATIC_MOVE,
      y: a.y - MOVE_MARGIN - MOVE_SUB_MARGIN - STATIC_MOVE
    },
    bottom: {
      x: axMiddle - STATIC_MOVE,
      y: a.y + a.height + MOVE_MARGIN - STATIC_MOVE
    },
    left: {
      x: a.x - MOVE_MARGIN - MOVE_SUB_MARGIN - STATIC_MOVE,
      y: ayMiddle - STATIC_MOVE
    },
    right: {
      x: a.x + a.width + MOVE_MARGIN - STATIC_MOVE,
      y: ayMiddle - STATIC_MOVE
    }
  };
  var B = {
    top: {
      x: bxMiddle,
      y: b.y - DELTA
    },
    bottom: {
      x: bxMiddle,
      y: b.y + b.height + DELTA
    },
    left: {
      x: b.x - DELTA,
      y: byMiddle
    },
    right: {
      x: b.x + b.width + DELTA,
      y: byMiddle
    }
  };
  var classes = {
    top: "connected-top",
    left: "connected-left",
    bottom: "connected-bottom",
    right: "connected-right"
  };
  var paths = []; // 4 outs

  if (leftDelta > 0) {
    if (topDelta > 0) {
      paths = [[A.left, B.right, PATH_RIGHT, classes.left], [A.left, B.bottom, PATH_TOP, classes.left]];

      if (!onlySide) {
        paths = paths.concat([[A.top, B.right, PATH_RIGHT, classes.top], [A.top, B.bottom, PATH_BOTTOM, classes.top]]);
      }
    } else {
      paths = [[A.left, B.right, PATH_RIGHT, classes.left], [A.left, B.top, PATH_TOP, classes.left]];

      if (!onlySide) {
        paths = paths.concat([[A.bottom, B.right, PATH_RIGHT, classes.bottom], [A.bottom, B.top, PATH_TOP, classes.bottom]]);
      }
    }
  } else {
    if (topDelta > 0) {
      paths = [[A.right, B.left, PATH_LEFT, classes.right], [A.right, B.bottom, PATH_BOTTOM, classes.right]];

      if (!onlySide) {
        paths = paths.concat([[A.top, B.left, PATH_LEFT, classes.top], [A.top, B.bottom, PATH_BOTTOM, classes.top]]);
      }
    } else {
      paths = [[A.right, B.left, PATH_LEFT, classes.right], [A.right, B.top, PATH_BOTTOM, classes.right]];

      if (!onlySide) {
        paths = paths.concat([[A.bottom, B.left, PATH_LEFT, classes.bottom], [A.bottom, B.top, PATH_TOP, classes.bottom]]);
      }
    }
  }

  var pow = Math.pow;

  var distance = function distance(a, b) {
    return Math.sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));
  };

  var _paths$sort$ = _slicedToArray(paths.sort(function (a, b) {
    return distance.apply(void 0, _toConsumableArray(a)) - distance.apply(void 0, _toConsumableArray(b));
  })[0], 4),
      SOURCE = _paths$sort$[0],
      TARGET = _paths$sort$[1],
      PATH = _paths$sort$[2],
      elementClass = _paths$sort$[3];

  var CURVE = 50;
  sourceElement.setAttribute("connected", elementClass);
  SOURCE.x *= k;
  SOURCE.y *= k;
  TARGET.x *= k;
  TARGET.y *= k;
  var middle = {
    top: (SOURCE.y + TARGET.y) / 2,
    left: (SOURCE.x + TARGET.x) / 2
  };

  var leftPath = function leftPath() {
    return "M ".concat(SOURCE.x, ",          ").concat(SOURCE.y, "\n                 C ").concat(SOURCE.x + CURVE, ",  ").concat(SOURCE.y, "\n                   ").concat(TARGET.x - CURVE, ",  ").concat(TARGET.y, "\n                   ").concat(TARGET.x, ",          ").concat(TARGET.y);
  };

  var rightPath = function rightPath() {
    return "M ".concat(SOURCE.x, ",          ").concat(SOURCE.y, "\n                 C ").concat(SOURCE.x - CURVE, ",  ").concat(SOURCE.y, "\n                   ").concat(TARGET.x + CURVE, ",  ").concat(TARGET.y, "\n                   ").concat(TARGET.x, ",          ").concat(TARGET.y);
  };

  var topPath = function topPath() {
    return "M ".concat(SOURCE.x, ",          ").concat(SOURCE.y, "\n                 Q ").concat(SOURCE.x - CURVE, ",  ").concat(SOURCE.y, "\n                   ").concat(TARGET.x, ",          ").concat(TARGET.y);
  };

  var bottomPath = function bottomPath() {
    return "M ".concat(SOURCE.x, ",          ").concat(SOURCE.y, "\n                 Q ").concat(SOURCE.x + CURVE, ", ").concat(SOURCE.y, "\n                   ").concat(TARGET.x, ",          ").concat(TARGET.y);
  };

  var d;

  switch (PATH) {
    case PATH_LEFT:
      d = leftPath();
      break;

    case PATH_RIGHT:
      d = rightPath();
      break;

    case PATH_TOP:
      middle.left -= CURVE / 2;
      d = topPath();
      break;

    case PATH_BOTTOM:
      d = bottomPath();
      break;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      position: "absolute",
      width: "100%",
      height: "100%"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("marker", {
    fill: "#94B3CB",
    id: "arrowhead",
    viewBox: "0 0 10 10",
    refX: "3",
    refY: "5",
    markerWidth: "6",
    markerHeight: "6",
    orient: "auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M 0 0 L 10 5 L 0 10 z"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("marker", {
    id: "circle",
    viewBox: "0 0 8 8",
    refX: "3",
    refY: "3",
    markerUnits: "userSpaceOnUse",
    markerWidth: "8",
    markerHeight: "8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: "4",
    cy: "4",
    r: "3",
    fill: "white",
    stroke: "#94B3CB",
    strokeWidth: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    fill: "none",
    stroke: "#94B3CB",
    strokeWidth: "2",
    markerStart: "url(#circle)",
    markerEnd: "url(#arrowhead)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: d
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Anchor));
Anchor.propTypes = {
  from: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  to: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/Block.js":
/*!**************************************************!*\
  !*** ./resources/js/containers/chatBot/Block.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var _Connect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Connect */ "./resources/js/containers/chatBot/Connect.js");
/* harmony import */ var _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../constants/BlockTypes */ "./resources/js/constants/BlockTypes.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _containers_chatBot_BlockView_BlockViewFactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBot/BlockView/BlockViewFactory */ "./resources/js/containers/chatBot/BlockView/BlockViewFactory.js");











function Block(_ref) {
  var index = _ref.index;
  var editBlock = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref2) {
    var chatbot = _ref2.chatbot;
    var edit = chatbot.getIn(["builder", "edit"]);

    if (edit && edit.get("id").toString() === index) {
      return edit;
    }

    return null;
  });
  var block = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref3) {
    var chatbot = _ref3.chatbot;
    return editBlock || chatbot.getIn(["item", "blocks", index]);
  });
  var selected = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref4) {
    var chatbot = _ref4.chatbot;
    return chatbot.getIn(["builder", "selected", index]);
  });
  var scale = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref5) {
    var chatbot = _ref5.chatbot;
    return chatbot.getIn(["builder", "scale"]);
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_4__["rendered"])(index));
  });
  var type = block.get("type");
  var isConnectable = [_constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_MESSAGE, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_QUESTION, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_SELECT, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_CAROUSEL, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_START, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_CALENDAR, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_SET_VARIABLE, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_CALL_OPERATOR, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_TRIGGER, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_NOTIFICATION, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_DEPARTMENT].includes(type);

  if (type === _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_6__["default"].TYPE_API_CONTENT) {
    isConnectable = block.getIn(["data", "buttons"], Object(immutable__WEBPACK_IMPORTED_MODULE_3__["List"])()).size === 0;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onMouseDown: function onMouseDown(e) {
      window.wasSelected = selected;

      if (!selected) {
        dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_4__["select"])(index, e.ctrlKey));
      }
    },
    scale: scale / 100,
    handle: ".header",
    bounds: "parent",
    position: block.get("position").toJS(),
    onDrag: function onDrag(e, position) {
      window.wasSelected = false;
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_4__["move"])({
        x: position.deltaX,
        y: position.deltaY
      }));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "block-".concat(index),
    style: {
      zIndex: editBlock ? 5 : 0
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("block", {
      selected: selected
    }),
    "data-id": index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onMouseUp: function onMouseUp(e) {
      if (window.wasSelected) {
        dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_4__["select"])(index, e.ctrlKey));
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Connect__WEBPACK_IMPORTED_MODULE_5__["default"], {
    isConnectable: isConnectable,
    connectable: index
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_BlockViewFactory__WEBPACK_IMPORTED_MODULE_9__["default"], {
    block: block
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Block));
Block.propTypes = {
  index: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockAttachmentPreview.js":
/*!*******************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockAttachmentPreview.js ***!
  \*******************************************************************/
/*! exports provided: TYPE_IMAGE, TYPE_FILE, TYPE_VIDEO, TYPE_EMBED_URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_IMAGE", function() { return TYPE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_FILE", function() { return TYPE_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_VIDEO", function() { return TYPE_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_EMBED_URL", function() { return TYPE_EMBED_URL; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");




var TYPE_IMAGE = 1;
var TYPE_FILE = 2;
var TYPE_VIDEO = 7;
var TYPE_EMBED_URL = 6;

function BlockAttachmentPreview(_ref) {
  var attachment = _ref.attachment;
  var type = attachment.get("type");
  var url = attachment.get("url");

  if (!url) {
    return null;
  }

  switch (type) {
    case TYPE_EMBED_URL:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("embed", {
        className: "attachment-preview",
        src: url,
        type: ""
      });

    case TYPE_FILE:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FaFile"], null);

    case TYPE_IMAGE:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "attachment-preview",
        src: url
      });

    case TYPE_VIDEO:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
        controls: true,
        className: "attachment-preview"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
        src: url
      }));
  }

  return null;
}

/* harmony default export */ __webpack_exports__["default"] = (BlockAttachmentPreview);
BlockAttachmentPreview.propTypes = {
  attachment: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockButton.js":
/*!********************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockButton.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Connect */ "./resources/js/containers/chatBot/Connect.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");







function BlockButton(_ref) {
  var button = _ref.button,
      _ref$connect = _ref.connect,
      connect = _ref$connect === void 0 ? false : _ref$connect;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["rendered"])(button.get("id"), true)); // console.log(index, (new Date()).getTime())
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-button",
    id: "block-".concat(button.get("id"))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Connect__WEBPACK_IMPORTED_MODULE_1__["default"], {
    positions: connect ? ["right", "left"] : [],
    connectable: button.get("id").toString()
  }, button.get("text")));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockButton);
BlockButton.propTypes = {
  button: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_5__["Map"]).isRequired,
  connect: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/BlockEditApi.js":
/*!*******************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/BlockEditApi.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var react_select_creatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select/creatable */ "./node_modules/react-select/creatable/dist/react-select.browser.esm.js");
/* harmony import */ var _containers_chatBot_BlockEdit_InfoLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/InfoLabel */ "./resources/js/containers/chatBot/BlockEdit/InfoLabel.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var METHODS = ["GET", "POST", "PATCH", "PUT", "OPTIONS", "DELETE", "HEAD", "JSONP"];

function BlockEditApi(_ref) {
  var block = _ref.block;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var method = block.getIn(["data", "api", "method"]);

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_InfoLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: t("chatbot.edit.method")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "value-group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_creatable__WEBPACK_IMPORTED_MODULE_7__["default"], {
    styles: {
      valueContainer: function valueContainer(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          paddingTop: 0,
          paddingBottom: 0
        });
      },
      control: function control(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          height: 29,
          minHeight: "unset"
        });
      },
      dropdownIndicator: function dropdownIndicator(provided) {
        return _objectSpread(_objectSpread({}, provided), {}, {
          padding: 0,
          paddingLeft: 8,
          paddingRight: 8
        });
      }
    },
    className: "value-group-key",
    value: {
      value: method,
      label: method
    },
    onChange: function onChange(_ref2) {
      var value = _ref2.value;
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("method", value, ["api"]));
    },
    options: METHODS.map(function (method) {
      return {
        value: method,
        label: method
      };
    })
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    className: "value-group-value",
    onChange: function onChange(e) {
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("url", e.target.value, ["api"]));
    },
    placeholder: t("chatbot.edit.api-url"),
    value: block.getIn(["data", "api", "url"])
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultiEditable, {
    name: "headers",
    block: block
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultiEditable, {
    name: "params",
    block: block
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MultiEditable, {
    name: "data",
    block: block
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockEditApi);
BlockEditApi.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]).isRequired
};

function MultiEditable(_ref3) {
  var name = _ref3.name,
      block = _ref3.block;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var values = block.getIn(["data", "api", name]);

  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])(),
      t = _useTranslation2.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var toggle = function toggle() {
    return setIsOpen(!isOpen);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "api-edit-collapse",
    onClick: toggle
  }, t("chatbot.edit.api-" + name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "toggler"
  }, isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaAngleUp"], null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaAngleDown"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Collapse"], {
    isOpen: isOpen
  }, values.map(function (param, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "value-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      className: "value-group-key",
      onChange: function onChange(e) {
        return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("key", e.target.value, ["api", name, index]));
      },
      value: param.get("key")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      className: "value-group-value",
      onChange: function onChange(e) {
        return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("value", e.target.value, ["api", name, index]));
      },
      value: param.get("value")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "value-group-remove",
      onClick: function onClick() {
        return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])(name, values["delete"](index), ["api"]));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_6__["FaTrash"], null)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "add-value-group",
    onClick: function onClick() {
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])(name, values.push(Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])({
        key: "",
        value: ""
      })), ["api"]));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_6__["FaPlus"], null))));
}

MultiEditable.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]).isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/BlockEditAttachment.js":
/*!**************************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/BlockEditAttachment.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _containers_chatBot_BlockAttachmentPreview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBot/BlockAttachmentPreview */ "./resources/js/containers/chatBot/BlockAttachmentPreview.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function BlockEditAttachment(_ref) {
  var block = _ref.block;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  var attachment = block.getIn(["data", "attachment"]) || Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])({});

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(attachment.get("type") === _containers_chatBot_BlockAttachmentPreview__WEBPACK_IMPORTED_MODULE_8__["TYPE_EMBED_URL"]),
      _useState2 = _slicedToArray(_useState, 2),
      isEmbed = _useState2[0],
      setEmbed = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(isEmbed ? attachment : Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])({
    type: _containers_chatBot_BlockAttachmentPreview__WEBPACK_IMPORTED_MODULE_8__["TYPE_EMBED_URL"]
  })),
      _useState4 = _slicedToArray(_useState3, 2),
      embedAttachment = _useState4[0],
      setEmbedAttachment = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(!isEmbed ? attachment : Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])({})),
      _useState6 = _slicedToArray(_useState5, 2),
      fileAttachment = _useState6[0],
      setFileAttachment = _useState6[1];

  var currentAttachment = isEmbed ? embedAttachment : fileAttachment;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("attachment", currentAttachment));
  }, [currentAttachment, dispatch]);
  var saveFileAttachment = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    return _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_7__["default"].call("post", "/methods/chat-bots/attachment", {}, formData).data(function (attachment) {
      var fileAttachment = Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])(attachment);
      setFileAttachment(fileAttachment);
    });
  }, []);
  var changeEmbedUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    setEmbedAttachment(function (a) {
      return a.set("url", e.target.value);
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    outline: isEmbed,
    onClick: function onClick() {
      return setEmbed(false);
    },
    color: isEmbed ? "secondary" : "primary"
  }, t("chatbot.edit.attachment-file")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    outline: !isEmbed,
    onClick: function onClick() {
      return setEmbed(true);
    },
    color: !isEmbed ? "secondary" : "primary"
  }, t("chatbot.edit.attachment-url")), isEmbed ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    onChange: changeEmbedUrl,
    value: currentAttachment.get("url", ""),
    placeholder: t("chatbot.edit.attachment-url-input")
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["CustomFileInput"], {
    onChange: saveFileAttachment,
    name: "customFile",
    label: t("chatbot.edit.attachment-file-input"),
    id: "attachment-file"
  })), attachment && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockAttachmentPreview__WEBPACK_IMPORTED_MODULE_8__["default"], {
    attachment: attachment
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockEditAttachment);
BlockEditAttachment.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/BlockEditButtons.js":
/*!***********************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/BlockEditButtons.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var _containers_chatBot_BlockEdit_InfoLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/InfoLabel */ "./resources/js/containers/chatBot/BlockEdit/InfoLabel.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");










function BlockEditButtons(_ref) {
  var block = _ref.block;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_InfoLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: t("chatbot.edit.buttons")
  }), block.getIn(["data", "buttons"], Object(immutable__WEBPACK_IMPORTED_MODULE_3__["List"])()).map(function (button, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "input-with-remove editable-block"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      key: button.get("id"),
      onChange: function onChange(e) {
        return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("text", e.target.value, ["buttons", index]));
      },
      value: button.get("text")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "remove-btn",
      onClick: function onClick() {
        dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["removeButton"])(index));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_6__["FaTrash"], null)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["addButton"])());
    }
  }, "+"));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockEditButtons);
BlockEditButtons.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/BlockEditCalendar.js":
/*!************************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/BlockEditCalendar.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_chatBot_helpers_selectLoaders_loadDepartmentSelectOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBot/helpers/selectLoaders/loadDepartmentSelectOptions */ "./resources/js/containers/chatBot/helpers/selectLoaders/loadDepartmentSelectOptions.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_select_async_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select/async/dist/react-select.esm */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var _containers_chatBot_BlockEdit_InfoLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/InfoLabel */ "./resources/js/containers/chatBot/BlockEdit/InfoLabel.js");










function BlockEditCalendar(_ref) {
  var _block$getIn;

  var block = _ref.block;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_InfoLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: t("chatbot.edit.calendar")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_async_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    cacheOptions: true,
    defaultOptions: true,
    loadOptions: _containers_chatBot_helpers_selectLoaders_loadDepartmentSelectOptions__WEBPACK_IMPORTED_MODULE_5__["default"],
    onChange: function onChange(selectedOption) {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("text", Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])(selectedOption)));
    },
    value: (_block$getIn = block.getIn(["data", "text"])) === null || _block$getIn === void 0 ? void 0 : _block$getIn.toJS(),
    isClearable: false
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockEditCalendar);
BlockEditCalendar.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/BlockEditCards.js":
/*!*********************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/BlockEditCards.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _components_form_base_ImageInput_ImageInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/form/base/ImageInput/ImageInput */ "./resources/js/components/form/base/ImageInput/ImageInput.js");
var _defaultButtonMap;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var TYPE_POSTBACK = 1;
var TYPE_URL = 2;
var defaultButtonMap = (_defaultButtonMap = {}, _defineProperty(_defaultButtonMap, TYPE_POSTBACK, {
  type: TYPE_POSTBACK,
  text: "Select",
  value: "value"
}), _defineProperty(_defaultButtonMap, TYPE_URL, {
  type: TYPE_URL,
  text: "Link",
  url: "https://example.com"
}), _defaultButtonMap);

function BlockEditCards(_ref) {
  var _buttonTypes;

  var block = _ref.block;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  var currentCardIndex = block.getIn(["data", "activeCard"], 0);
  var cards = block.getIn(["data", "cards"]);
  var currentCard = cards.get(currentCardIndex);

  var options = lodash__WEBPACK_IMPORTED_MODULE_5___default.a.range(0, cards.size).map(function (value) {
    return {
      label: "Card#".concat(value + 1),
      value: value
    };
  });

  var buttonTypes = (_buttonTypes = {}, _defineProperty(_buttonTypes, TYPE_POSTBACK, {
    value: TYPE_POSTBACK,
    label: t("chatbot.edit.card-button-postback")
  }), _defineProperty(_buttonTypes, TYPE_URL, {
    value: TYPE_URL,
    label: t("chatbot.edit.card-button-url")
  }), _buttonTypes);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    className: "mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onChange: function onChange(option) {
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("activeCard", option ? option.value : 0));
    },
    options: options,
    value: options[currentCardIndex]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "add-card",
    onClick: function onClick() {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("cards", cards.push(Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])({
        title: "New card",
        description: "",
        image_id: null,
        buttons: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["List"])([])
      }))));
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("activeCard", cards.size));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_7__["FaPlus"], null))), cards.size > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "remove-card",
    onClick: function onClick() {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("activeCard", currentCardIndex && currentCardIndex - 1));
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("cards", cards.remove(currentCardIndex)));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaTrash"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Card"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_ImageInput_ImageInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "card_image",
    name: "card_image",
    key: "image" + currentCardIndex,
    files: [currentCard.get("image_id")],
    onChange: function onChange(_ref2, _ref3) {
      var _ref4 = _slicedToArray(_ref2, 1),
          image_id = _ref4[0];

      var _ref5 = _slicedToArray(_ref3, 1),
          image = _ref5[0];

      var newCard = currentCard.set("image_id", image_id).set("image", image && Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])(image));
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])(currentCardIndex, newCard, ["cards"]));
    },
    maxFilesCount: 1,
    types: ["image/*"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    onChange: function onChange(e) {
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("title", e.target.value, ["cards", currentCardIndex]));
    },
    value: currentCard.get("title")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "textarea",
    onChange: function onChange(e) {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("description", e.target.value, ["cards", currentCardIndex]));
    },
    value: currentCard.get("description")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "mt-3"
  }, t("chatbot.edit.card-buttons")), currentCard.get("buttons").map(function (button, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      className: "card-button-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_9__["default"], {
      styles: {
        valueContainer: function valueContainer(provided) {
          return _objectSpread(_objectSpread({}, provided), {}, {
            paddingTop: 0,
            paddingBottom: 0
          });
        },
        control: function control(provided) {
          return _objectSpread(_objectSpread({}, provided), {}, {
            height: 29,
            minHeight: "unset"
          });
        },
        dropdownIndicator: function dropdownIndicator(provided) {
          return _objectSpread(_objectSpread({}, provided), {}, {
            padding: 0,
            paddingLeft: 8,
            paddingRight: 8
          });
        }
      },
      className: "card-button-group-type",
      options: Object.values(buttonTypes),
      value: buttonTypes[button.get("type")],
      onChange: function onChange(_ref6) {
        var value = _ref6.value;
        dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])(index, Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])(defaultButtonMap[value]), ["cards", currentCardIndex, "buttons"]));
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
      className: "card-button-group-text",
      value: button.get("text"),
      onChange: function onChange(e) {
        return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("text", e.target.value, ["cards", currentCardIndex, "buttons", index]));
      }
    }), button.get("type") === TYPE_POSTBACK ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
      className: "card-button-group-value",
      value: button.get("value"),
      onChange: function onChange(e) {
        return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("value", e.target.value, ["cards", currentCardIndex, "buttons", index]));
      }
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Input"], {
      className: "card-button-group-value",
      value: button.get("url"),
      onChange: function onChange(e) {
        return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("url", e.target.value, ["cards", currentCardIndex, "buttons", index]));
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      className: "card-button-group-remove",
      onClick: function onClick() {
        dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("buttons", currentCard.get("buttons").remove(index), ["cards", currentCardIndex]));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaTrash"], null)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "add-button",
    onClick: function onClick() {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("buttons", currentCard.get("buttons").push(Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])(defaultButtonMap[TYPE_URL])), ["cards", currentCardIndex]));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_7__["FaPlus"], null)))));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockEditCards);
BlockEditCards.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/BlockEditDepartment.js":
/*!**************************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/BlockEditDepartment.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _containers_chatBot_helpers_selectLoaders_loadDepartmentSelectOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBot/helpers/selectLoaders/loadDepartmentSelectOptions */ "./resources/js/containers/chatBot/helpers/selectLoaders/loadDepartmentSelectOptions.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_select_async_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-select/async/dist/react-select.esm */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var _containers_chatBot_BlockEdit_InfoLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/InfoLabel */ "./resources/js/containers/chatBot/BlockEdit/InfoLabel.js");










function BlockEditDepartment(_ref) {
  var _block$getIn;

  var block = _ref.block;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_InfoLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: t("chatbot.edit.department")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_async_dist_react_select_esm__WEBPACK_IMPORTED_MODULE_7__["default"], {
    cacheOptions: true,
    defaultOptions: true,
    loadOptions: _containers_chatBot_helpers_selectLoaders_loadDepartmentSelectOptions__WEBPACK_IMPORTED_MODULE_5__["default"],
    onChange: function onChange(selectedOption) {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("text", Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])(selectedOption)));
    },
    value: (_block$getIn = block.getIn(["data", "text"])) === null || _block$getIn === void 0 ? void 0 : _block$getIn.toJS(),
    isClearable: false
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockEditDepartment);
BlockEditDepartment.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/BlockEditFactory.js":
/*!***********************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/BlockEditFactory.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/BlockTypes */ "./resources/js/constants/BlockTypes.js");
/* harmony import */ var _containers_chatBot_BlockEdit_BlockEditVariable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/BlockEditVariable */ "./resources/js/containers/chatBot/BlockEdit/BlockEditVariable.js");
/* harmony import */ var _containers_chatBot_BlockEdit_BlockEditMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/BlockEditMessage */ "./resources/js/containers/chatBot/BlockEdit/BlockEditMessage.js");
/* harmony import */ var _containers_chatBot_BlockEdit_BlockEditButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/BlockEditButtons */ "./resources/js/containers/chatBot/BlockEdit/BlockEditButtons.js");
/* harmony import */ var _containers_chatBot_BlockEdit_BlockEditTrigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/BlockEditTrigger */ "./resources/js/containers/chatBot/BlockEdit/BlockEditTrigger.js");
/* harmony import */ var _containers_chatBot_BlockEdit_BlockEditValue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/BlockEditValue */ "./resources/js/containers/chatBot/BlockEdit/BlockEditValue.js");
/* harmony import */ var _containers_chatBot_BlockEdit_BlockEditTag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/BlockEditTag */ "./resources/js/containers/chatBot/BlockEdit/BlockEditTag.js");
/* harmony import */ var _containers_chatBot_BlockEdit_BlockEditApi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/BlockEditApi */ "./resources/js/containers/chatBot/BlockEdit/BlockEditApi.js");
/* harmony import */ var _containers_chatBot_BlockEdit_BlockEditDepartment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/BlockEditDepartment */ "./resources/js/containers/chatBot/BlockEdit/BlockEditDepartment.js");
/* harmony import */ var _containers_chatBot_BlockEdit_BlockEditAttachment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/BlockEditAttachment */ "./resources/js/containers/chatBot/BlockEdit/BlockEditAttachment.js");
/* harmony import */ var _containers_chatBot_BlockEdit_BlockEditCalendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/BlockEditCalendar */ "./resources/js/containers/chatBot/BlockEdit/BlockEditCalendar.js");
/* harmony import */ var _containers_chatBot_BlockEdit_BlockEditCards__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/BlockEditCards */ "./resources/js/containers/chatBot/BlockEdit/BlockEditCards.js");
















function BlockEditFactory(_ref) {
  var block = _ref.block;

  switch (block.get("type")) {
    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_QUESTION:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditVariable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_BUTTONS:
    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_SELECT:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditVariable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_SWITCH:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditVariable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_TRIGGER:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditTrigger__WEBPACK_IMPORTED_MODULE_7__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditVariable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_SET_VARIABLE:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditVariable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditValue__WEBPACK_IMPORTED_MODULE_8__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_TAG:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditTag__WEBPACK_IMPORTED_MODULE_9__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_DEPARTMENT:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditDepartment__WEBPACK_IMPORTED_MODULE_11__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_API_CONTENT:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditApi__WEBPACK_IMPORTED_MODULE_10__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditButtons__WEBPACK_IMPORTED_MODULE_6__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_MESSAGE:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditAttachment__WEBPACK_IMPORTED_MODULE_12__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_CALENDAR:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditCalendar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_CALL_OPERATOR:
    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_NOTIFICATION:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_CAROUSEL:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditCards__WEBPACK_IMPORTED_MODULE_14__["default"], {
        block: block
      }));

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Not implemented view for ", block.get("type"));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BlockEditFactory);
BlockEditFactory.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/BlockEditMessage.js":
/*!***********************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/BlockEditMessage.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ckeditor/ckeditor5-react */ "./node_modules/@ckeditor/ckeditor5-react/dist/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ckeditor/ckeditor5-build-classic */ "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
/* harmony import */ var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _containers_chatBot_BlockEdit_InfoLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/InfoLabel */ "./resources/js/containers/chatBot/BlockEdit/InfoLabel.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }











function BlockEditMessage(_ref) {
  var block = _ref.block;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  var variables = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(function (_ref2) {
    var chatbot = _ref2.chatbot;
    return chatbot.getIn(["item", "blocks"]).map(function (block) {
      return block.getIn(["data", "variable"], null);
    }).valueSeq().filter(function (v) {
      return v !== null;
    }).toArray().map(function (id) {
      return {
        id: "@".concat(id)
      };
    });
  });

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_InfoLabel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: t("chatbot.edit.message"),
    tooltip: t("chatbot.edit.message-help")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ckeditor_ckeditor5_react__WEBPACK_IMPORTED_MODULE_3__["CKEditor"], {
    editor: _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_4___default.a,
    data: block.getIn(["data", "text"]),
    onChange: function onChange(event, editor) {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("text", editor.getData())); // const data = editor.getData();
      //
      // this.setState({ text: data });
    },
    config: {
      toolbar: ["bold", "italic", "underline", "link", "bulletedList", "numberedList", "undo", "redo"],
      mention: {
        feeds: [{
          marker: "@",
          feed: function feed(queryString) {
            return Promise.resolve([{
              id: "@".concat(queryString)
            }].concat(_toConsumableArray(variables.filter(function (_ref3) {
              var id = _ref3.id;
              return id.toLowerCase().includes(queryString.toLowerCase());
            }))));
          }
        }]
      }
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockEditMessage);
BlockEditMessage.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/BlockEditTag.js":
/*!*******************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/BlockEditTag.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







function BlockEditTag(_ref) {
  var block = _ref.block;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupText"], null, "#")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    onChange: function onChange(e) {
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("text", e.target.value));
    },
    value: block.getIn(["data", "text"])
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockEditTag);
BlockEditTag.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/BlockEditTrigger.js":
/*!***********************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/BlockEditTrigger.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");








function BlockEditTrigger(_ref) {
  var block = _ref.block;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupText"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_6__["FcFlashOn"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    onChange: function onChange(e) {
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("text", e.target.value));
    },
    value: block.getIn(["data", "text"])
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockEditTrigger);
BlockEditTrigger.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/BlockEditValue.js":
/*!*********************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/BlockEditValue.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







function BlockEditValue(_ref) {
  var block = _ref.block;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    onChange: function onChange(e) {
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("text", e.target.value));
    },
    value: block.getIn(["data", "text"])
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockEditValue);
BlockEditValue.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/BlockEditVariable.js":
/*!************************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/BlockEditVariable.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");







function BlockEditVariable(_ref) {
  var block = _ref.block;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable-block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["InputGroupText"], null, "@")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    onChange: function onChange(e) {
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_2__["updateEdit"])("variable", e.target.value));
    },
    value: block.getIn(["data", "variable"])
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockEditVariable);
BlockEditVariable.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockEdit/InfoLabel.js":
/*!****************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockEdit/InfoLabel.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");






function InfoLabel(_ref) {
  var title = _ref.title,
      tooltip = _ref.tooltip;
  var key = "help" + Object(lodash__WEBPACK_IMPORTED_MODULE_3__["random"])(0, 99999);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, title, tooltip && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: "help-question",
    id: key
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_4__["FaRegQuestionCircle"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["UncontrolledTooltip"], {
    placement: "right",
    target: key
  }, tooltip)));
}

/* harmony default export */ __webpack_exports__["default"] = (InfoLabel);
InfoLabel.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  tooltip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockHeader.js":
/*!********************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockHeader.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/BlockTypes */ "./resources/js/constants/BlockTypes.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_BlockIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/BlockIcon */ "./resources/js/helpers/BlockIcon.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");










function BlockHeader(_ref) {
  var type = _ref.type,
      index = _ref.index;
  var value = Object(_helpers_BlockIcon__WEBPACK_IMPORTED_MODULE_4__["getValue"])(type);

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  var isEditing = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useSelector"])(function (_ref2) {
    var chatbot = _ref2.chatbot;
    return chatbot.getIn(["builder", "edit", "id"]) === index;
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: value.color
    },
    className: "header"
  }, isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_8__["FcSupport"], null) : Object(_helpers_BlockIcon__WEBPACK_IMPORTED_MODULE_4__["getIcon"])(type), " ", t(value.langKey), type !== _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_2__["default"].TYPE_START && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: function onClick() {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_6__["setEdit"])(index));
    },
    className: "context-menu position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaEdit"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (BlockHeader);
BlockHeader.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockView/ApiView.js":
/*!**************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockView/ApiView.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function ApiView(_ref) {
  var block = _ref.block;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "api"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "api-method"
  }, block.getIn(["data", "api", "method"])), block.getIn(["data", "api", "url"]));
}

/* harmony default export */ __webpack_exports__["default"] = (ApiView);
ApiView.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockView/AttachmentView.js":
/*!*********************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockView/AttachmentView.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_chatBot_BlockAttachmentPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBot/BlockAttachmentPreview */ "./resources/js/containers/chatBot/BlockAttachmentPreview.js");





function AttachmentView(_ref) {
  var block = _ref.block;
  var attachment = block.getIn(["data", "attachment"]);

  if (!attachment) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockAttachmentPreview__WEBPACK_IMPORTED_MODULE_3__["default"], {
    attachment: attachment
  });
}

/* harmony default export */ __webpack_exports__["default"] = (AttachmentView);
AttachmentView.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockView/BlockViewFactory.js":
/*!***********************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockView/BlockViewFactory.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/BlockTypes */ "./resources/js/constants/BlockTypes.js");
/* harmony import */ var _containers_chatBot_BlockView_MessageView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBot/BlockView/MessageView */ "./resources/js/containers/chatBot/BlockView/MessageView.js");
/* harmony import */ var _containers_chatBot_BlockView_VariableView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBot/BlockView/VariableView */ "./resources/js/containers/chatBot/BlockView/VariableView.js");
/* harmony import */ var _containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/chatBot/BlockHeader */ "./resources/js/containers/chatBot/BlockHeader.js");
/* harmony import */ var _containers_chatBot_BlockView_ButtonsView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/chatBot/BlockView/ButtonsView */ "./resources/js/containers/chatBot/BlockView/ButtonsView.js");
/* harmony import */ var _containers_chatBot_BlockView_TriggerView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBot/BlockView/TriggerView */ "./resources/js/containers/chatBot/BlockView/TriggerView.js");
/* harmony import */ var _containers_chatBot_BlockView_ValueView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBot/BlockView/ValueView */ "./resources/js/containers/chatBot/BlockView/ValueView.js");
/* harmony import */ var _containers_chatBot_BlockView_TagView__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/chatBot/BlockView/TagView */ "./resources/js/containers/chatBot/BlockView/TagView.js");
/* harmony import */ var _containers_chatBot_BlockView_ApiView__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/containers/chatBot/BlockView/ApiView */ "./resources/js/containers/chatBot/BlockView/ApiView.js");
/* harmony import */ var _containers_chatBot_BlockView_DepartmentView__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/containers/chatBot/BlockView/DepartmentView */ "./resources/js/containers/chatBot/BlockView/DepartmentView.js");
/* harmony import */ var _containers_chatBot_BlockView_AttachmentView__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/containers/chatBot/BlockView/AttachmentView */ "./resources/js/containers/chatBot/BlockView/AttachmentView.js");
/* harmony import */ var _containers_chatBot_BlockView_CalendarView__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/containers/chatBot/BlockView/CalendarView */ "./resources/js/containers/chatBot/BlockView/CalendarView.js");
/* harmony import */ var _containers_chatBot_BlockView_CardsView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/containers/chatBot/BlockView/CardsView */ "./resources/js/containers/chatBot/BlockView/CardsView.js");

















function BlockViewFactory(_ref) {
  var block = _ref.block;

  switch (block.get("type")) {
    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_MESSAGE:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_MessageView__WEBPACK_IMPORTED_MODULE_4__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_AttachmentView__WEBPACK_IMPORTED_MODULE_13__["default"], {
        block: block
      })));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_NOTIFICATION:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_MessageView__WEBPACK_IMPORTED_MODULE_4__["default"], {
        block: block
      })));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_START:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_QUESTION:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_MessageView__WEBPACK_IMPORTED_MODULE_4__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_VariableView__WEBPACK_IMPORTED_MODULE_5__["default"], {
        block: block
      })));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_SWITCH:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_VariableView__WEBPACK_IMPORTED_MODULE_5__["default"], {
        block: block
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_ButtonsView__WEBPACK_IMPORTED_MODULE_7__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_SELECT:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_MessageView__WEBPACK_IMPORTED_MODULE_4__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_VariableView__WEBPACK_IMPORTED_MODULE_5__["default"], {
        block: block
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_ButtonsView__WEBPACK_IMPORTED_MODULE_7__["default"], {
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_BUTTONS:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_MessageView__WEBPACK_IMPORTED_MODULE_4__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_VariableView__WEBPACK_IMPORTED_MODULE_5__["default"], {
        block: block
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_ButtonsView__WEBPACK_IMPORTED_MODULE_7__["default"], {
        connect: true,
        block: block
      }));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_TRIGGER:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_TriggerView__WEBPACK_IMPORTED_MODULE_8__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_VariableView__WEBPACK_IMPORTED_MODULE_5__["default"], {
        block: block
      })));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_TAG:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_TagView__WEBPACK_IMPORTED_MODULE_10__["default"], {
        block: block
      })));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_DEPARTMENT:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_DepartmentView__WEBPACK_IMPORTED_MODULE_12__["default"], {
        block: block
      })));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_CALENDAR:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_CalendarView__WEBPACK_IMPORTED_MODULE_14__["default"], {
        block: block
      })));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_CALL_OPERATOR:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_MessageView__WEBPACK_IMPORTED_MODULE_4__["default"], {
        block: block
      })));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_SET_VARIABLE:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_VariableView__WEBPACK_IMPORTED_MODULE_5__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_ValueView__WEBPACK_IMPORTED_MODULE_9__["default"], {
        block: block
      })));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_CAROUSEL:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_CardsView__WEBPACK_IMPORTED_MODULE_15__["default"], {
        block: block
      })));

    case _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_API_CONTENT:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
        index: block.get("id"),
        type: block.get("type")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "block-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_MessageView__WEBPACK_IMPORTED_MODULE_4__["default"], {
        block: block
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_ApiView__WEBPACK_IMPORTED_MODULE_11__["default"], {
        block: block
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockView_ButtonsView__WEBPACK_IMPORTED_MODULE_7__["default"], {
        connect: true,
        block: block
      }));

    default:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Not implemented view for ", block.get("type"));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BlockViewFactory);
BlockViewFactory.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockView/ButtonsView.js":
/*!******************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockView/ButtonsView.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _containers_chatBot_BlockButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBot/BlockButton */ "./resources/js/containers/chatBot/BlockButton.js");





function ButtonsView(_ref) {
  var block = _ref.block,
      _ref$connect = _ref.connect,
      connect = _ref$connect === void 0 ? false : _ref$connect;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, block.getIn(["data", "buttons"], Object(immutable__WEBPACK_IMPORTED_MODULE_1__["List"])()).map(function (button) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      connect: connect,
      key: button.get("id"),
      button: button
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ButtonsView);
ButtonsView.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired,
  connect: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockView/CalendarView.js":
/*!*******************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockView/CalendarView.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");





function CalendarView(_ref) {
  var block = _ref.block;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FcCalendar"], null), block.getIn(["data", "text", "label"]));
}

/* harmony default export */ __webpack_exports__["default"] = (CalendarView);
CalendarView.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockView/CardsView.js":
/*!****************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockView/CardsView.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var reactstrap_es_CardBody__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/es/CardBody */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");









function CardsView(_ref) {
  var block = _ref.block;
  var activeIndex = block.getIn(["data", "activeCard"], 0);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["useDispatch"])();
  var items = block.getIn(["data", "cards"]);
  var setActiveIndex = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (index) {
    dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_6__["updateCardIndex"])(block.get("id"), index));
  }, [dispatch, block]);

  var next = function next() {
    var nextIndex = activeIndex === items.size - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  var previous = function previous() {
    var nextIndex = activeIndex === 0 ? items.size - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  var slides = items.map(function (item, index) {
    var image = item.get("image");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselItem"], {
      key: index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Card"], null, image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardImg"], {
      top: true,
      width: "100%",
      src: image.get("url"),
      alt: "Card image cap"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_CardBody__WEBPACK_IMPORTED_MODULE_4__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardSubtitle"], {
      tag: "h6",
      className: "mb-2 text-muted"
    }, "Card#".concat(index + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardTitle"], {
      tag: "h5"
    }, item.get("title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CardText"], null, item.get("description")), item.get("buttons").map(function (button, index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "mr-1 mb-1",
        key: index
      }, button.get("text"));
    }))));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Carousel"], {
    interval: false,
    activeIndex: activeIndex,
    next: next,
    previous: previous
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null), slides, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselControl"], {
    direction: "prev",
    directionText: "Previous",
    onClickHandler: previous
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["CarouselControl"], {
    direction: "next",
    directionText: "Next",
    onClickHandler: next
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CardsView);
CardsView.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockView/DepartmentView.js":
/*!*********************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockView/DepartmentView.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





function DepartmentView(_ref) {
  var block = _ref.block;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
    color: "success"
  }, block.getIn(["data", "text", "label"]));
}

/* harmony default export */ __webpack_exports__["default"] = (DepartmentView);
DepartmentView.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockView/MessageView.js":
/*!******************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockView/MessageView.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function MessageView(_ref) {
  var block = _ref.block;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "message",
    dangerouslySetInnerHTML: {
      __html: block.getIn(["data", "text"])
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (MessageView);
MessageView.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockView/TagView.js":
/*!**************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockView/TagView.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





function ValueView(_ref) {
  var block = _ref.block;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Badge"], {
    color: "primary"
  }, block.getIn(["data", "text"]));
}

/* harmony default export */ __webpack_exports__["default"] = (ValueView);
ValueView.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockView/TriggerView.js":
/*!******************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockView/TriggerView.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");





function TriggerView(_ref) {
  var block = _ref.block;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FcFlashOn"], null), block.getIn(["data", "text"]));
}

/* harmony default export */ __webpack_exports__["default"] = (TriggerView);
TriggerView.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockView/ValueView.js":
/*!****************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockView/ValueView.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function ValueView(_ref) {
  var block = _ref.block;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, block.getIn(["data", "text"]));
}

/* harmony default export */ __webpack_exports__["default"] = (ValueView);
ValueView.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/BlockView/VariableView.js":
/*!*******************************************************************!*\
  !*** ./resources/js/containers/chatBot/BlockView/VariableView.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");





function VariableView(_ref) {
  var block = _ref.block;
  var variable = block.getIn(["data", "variable"]);

  if (!variable) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "variable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FcAddressBook"], null), " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "variable-name"
  }, "@", variable));
}

/* harmony default export */ __webpack_exports__["default"] = (VariableView);
VariableView.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_1__["Map"]).isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/ChatBotForm.js":
/*!********************************************************!*\
  !*** ./resources/js/containers/chatBot/ChatBotForm.js ***!
  \********************************************************/
/*! exports provided: FULL_RIGHT_BAR_SIZE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FULL_RIGHT_BAR_SIZE", function() { return FULL_RIGHT_BAR_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatBotForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Block */ "./resources/js/containers/chatBot/Block.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _css_chatbot_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../css/chatbot.scss */ "./resources/css/chatbot.scss");
/* harmony import */ var _css_chatbot_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_chatbot_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Anchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Anchor */ "./resources/js/containers/chatBot/Anchor.js");
/* harmony import */ var _ConnectionAnchor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConnectionAnchor */ "./resources/js/containers/chatBot/ConnectionAnchor.js");
/* harmony import */ var _Minimap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Minimap */ "./resources/js/containers/chatBot/Minimap.js");
/* harmony import */ var _Creation_Panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Creation/Panel */ "./resources/js/containers/chatBot/Creation/Panel.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var _containers_chatBot_EditBlock__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBot/EditBlock */ "./resources/js/containers/chatBot/EditBlock.js");
/* harmony import */ var _containers_chatBot_Configure__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/chatBot/Configure */ "./resources/js/containers/chatBot/Configure.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













var FIELD_SIZE = 6000;
var FULL_RIGHT_BAR_SIZE = 300;
var RIGHT_BAR_SIZE = 220;
function ChatBotForm(_ref) {
  var id = _ref.id;
  var blocks = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref2) {
    var chatbot = _ref2.chatbot;
    return chatbot.getIn(["item", "blocks"]);
  }, function (a, b) {
    return a.size === b.size;
  });
  var anchors = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref3) {
    var chatbot = _ref3.chatbot;
    return chatbot.getIn(["item", "anchors"]);
  });
  var edit = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref4) {
    var chatbot = _ref4.chatbot;
    return chatbot.getIn(["builder", "edit"]);
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    x: 0,
    y: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      scroll = _useState2[0],
      setScroll = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      ready = _useState4[0],
      setReady = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setReady(true);
  }, []);
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var scale = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref5) {
    var chatbot = _ref5.chatbot;
    return chatbot.getIn(["builder", "scale"]);
  });
  var wrapper = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  if (+id !== Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref6) {
    var chatbot = _ref6.chatbot;
    return chatbot.getIn(["item", "id"]);
  })) {
    return null;
  }

  var coef = 0.5 - scale / 200;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Creation_Panel__WEBPACK_IMPORTED_MODULE_7__["default"], {
    scroll: scroll,
    size: RIGHT_BAR_SIZE
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onScroll: function onScroll(e) {
      if (e.target.id === "wrapper") {
        setScroll({
          y: e.target.scrollTop,
          x: e.target.scrollLeft
        });
      }
    },
    id: "wrapper",
    ref: wrapper,
    style: {
      width: "calc(100% - ".concat(RIGHT_BAR_SIZE, "px)"),
      height: "100vh",
      overflow: "scroll",
      position: "relative",
      left: RIGHT_BAR_SIZE
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "builder-field",
    style: {
      position: "absolute",
      height: FIELD_SIZE,
      width: FIELD_SIZE,
      transform: "scale(".concat(scale / 100, ")"),
      marginLeft: -FIELD_SIZE * coef,
      marginTop: -FIELD_SIZE * coef
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "relative"
    }
  }, anchors.map(function (anchor, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Anchor__WEBPACK_IMPORTED_MODULE_4__["default"], {
      scroll: scroll,
      key: index,
      from: anchor.get("source"),
      to: anchor.get("target")
    });
  }).toIndexedSeq(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ConnectionAnchor__WEBPACK_IMPORTED_MODULE_5__["default"], {
    scroll: scroll
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onMouseDown: function onMouseDown() {
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_8__["select"])(false));
    },
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0
    }
  }), blocks.map(function (block, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Block__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: index,
      index: index
    });
  }).toIndexedSeq(), edit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "edit-bgdrop"
  })))), edit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_EditBlock__WEBPACK_IMPORTED_MODULE_9__["default"], {
    block: edit
  }), ready && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Minimap__WEBPACK_IMPORTED_MODULE_6__["default"], {
    size: FIELD_SIZE,
    scroll: scroll,
    wrapper: wrapper
  }), ready && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_Configure__WEBPACK_IMPORTED_MODULE_10__["default"], null));
}
ChatBotForm.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.any.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/Configure.js":
/*!******************************************************!*\
  !*** ./resources/js/containers/chatBot/Configure.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");





Configure.propTypes = {};

function Configure() {
  var name = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (_ref) {
    var chatbot = _ref.chatbot;
    return chatbot.getIn(["item", "name"]);
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "configure"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    onChange: function onChange(e) {
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_4__["setName"])(e.target.value));
    },
    value: name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_4__["saveBot"])());
    },
    color: "success"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["FaSave"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_2__["FaCogs"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Configure);

/***/ }),

/***/ "./resources/js/containers/chatBot/Connect.js":
/*!****************************************************!*\
  !*** ./resources/js/containers/chatBot/Connect.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function Connect(_ref) {
  var connectable = _ref.connectable,
      _ref$positions = _ref.positions,
      positions = _ref$positions === void 0 ? ["top", "left", "bottom", "right"] : _ref$positions,
      _ref$isConnectable = _ref.isConnectable,
      isConnectable = _ref$isConnectable === void 0 ? true : _ref$isConnectable,
      children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var moveConnection = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_3__["connection"])({
      move: new Date().getTime(),
      x: e.clientX,
      y: e.clientY
    }));
    dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_3__["rendered"])("connect-to"));
  }, [dispatch]);
  var removeConnection = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    var connectTo = document.querySelector(".block:hover");

    if (connectTo) {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_3__["createConnection"])(connectable, connectTo.dataset.id));
    }

    dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_3__["connection"])(false));
    setActive(false);
    removeEventListener("mouseup", removeConnection);
    removeEventListener("mousemove", moveConnection);
  }, [connectable, dispatch, moveConnection]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (active) {
      window.addEventListener("mouseup", removeConnection);
      window.addEventListener("mousemove", moveConnection);
    }

    return function () {
      window.removeEventListener("mouseup", removeConnection);
      window.removeEventListener("mousemove", moveConnection);
    };
  }, [active, moveConnection, removeConnection]);
  var onConnectHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (position) {
    return function (e) {
      setActive(position);
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_3__["rendered"])("connect-from"));
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_3__["connection"])({
        x: e.clientX,
        y: e.clientY
      }));
    };
  }, [dispatch]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "connectable"
  }, isConnectable && positions.map(function (pos) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: pos,
      id: active === pos ? "block-connect-from" : undefined,
      onMouseDown: onConnectHandler(pos),
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("connect connect-".concat(pos), {
        connecting: active === pos
      })
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "connect-content"
  }, children));
}

/* harmony default export */ __webpack_exports__["default"] = (Connect);
Connect.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
  connectable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  isConnectable: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  positions: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.array
};

/***/ }),

/***/ "./resources/js/containers/chatBot/ConnectionAnchor.js":
/*!*************************************************************!*\
  !*** ./resources/js/containers/chatBot/ConnectionAnchor.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Anchor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Anchor */ "./resources/js/containers/chatBot/Anchor.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ChatBotForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ChatBotForm */ "./resources/js/containers/chatBot/ChatBotForm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);






function ConnectionAnchor(_ref) {
  var scroll = _ref.scroll;
  var connection = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref2) {
    var chatbot = _ref2.chatbot;
    return chatbot.getIn(["builder", "connection"]);
  });
  var scale = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref3) {
    var chatbot = _ref3.chatbot;
    return 100 / chatbot.getIn(["builder", "scale"]);
  });

  if (!connection) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "block-connect-to",
    style: {
      position: "fixed",
      width: 2,
      height: 5,
      top: (connection.y + scroll.y) * scale,
      left: (connection.x + scroll.x - _ChatBotForm__WEBPACK_IMPORTED_MODULE_3__["FULL_RIGHT_BAR_SIZE"]) * scale,
      background: "red"
    }
  }), connection.move && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Anchor__WEBPACK_IMPORTED_MODULE_1__["default"], {
    scroll: scroll,
    from: "connect-from",
    to: "connect-to"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (ConnectionAnchor);
ConnectionAnchor.propTypes = {
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/Creation/CreateElement.js":
/*!*******************************************************************!*\
  !*** ./resources/js/containers/chatBot/Creation/CreateElement.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-draggable */ "./node_modules/react-draggable/build/cjs/cjs.js");
/* harmony import */ var react_draggable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_draggable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _ChatBotForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ChatBotForm */ "./resources/js/containers/chatBot/ChatBotForm.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/uniqueId */ "./node_modules/lodash/uniqueId.js");
/* harmony import */ var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers_BlockIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/helpers/BlockIcon */ "./resources/js/helpers/BlockIcon.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _BlockHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../BlockHeader */ "./resources/js/containers/chatBot/BlockHeader.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function CreateElement(_ref) {
  var type = _ref.type,
      scroll = _ref.scroll;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      move = _useState2[0],
      setMove = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var scale = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref2) {
    var chatbot = _ref2.chatbot;
    return chatbot.getIn(["builder", "scale"]);
  });

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_12__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      delta = _useState4[0],
      setDelta = _useState4[1];

  var value = Object(_helpers_BlockIcon__WEBPACK_IMPORTED_MODULE_8__["getValue"])(type);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_9__["Col"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "create-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "color-label",
    style: {
      backgroundColor: value.color
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, Object(_helpers_BlockIcon__WEBPACK_IMPORTED_MODULE_8__["getIcon"])(type), " ", t(value.langKey)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "float-right drag-element"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_11__["FaGripVertical"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_draggable__WEBPACK_IMPORTED_MODULE_1___default.a, {
    position: {
      x: 0,
      y: 0
    },
    onStart: function onStart(e) {
      var _e$target$getBounding = e.target.getBoundingClientRect(),
          top = _e$target$getBounding.top,
          left = _e$target$getBounding.left;

      setDelta({
        x: e.clientX - left,
        y: e.clientY - top
      });
      setMove(true);
    },
    onStop: function onStop(e) {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_3__["create"])(Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])({
        id: lodash_uniqueId__WEBPACK_IMPORTED_MODULE_6___default()("Z"),
        type: type,
        position: {
          x: (e.clientX + scroll.x - _ChatBotForm__WEBPACK_IMPORTED_MODULE_5__["FULL_RIGHT_BAR_SIZE"] - delta.x) / (scale / 100),
          y: (e.clientY + scroll.y - delta.y) / (scale / 100)
        },
        data: Object(_helpers_BlockIcon__WEBPACK_IMPORTED_MODULE_8__["getDefaultData"])(type)
      })));
      setMove(false);
    }
  }, move ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-creation",
    style: {
      position: "absolute",
      top: 0,
      zIndex: 100
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "plus-icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_11__["FaPlus"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BlockHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
    index: -1,
    type: type
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "New block"))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      cursor: "grab"
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateElement);
CreateElement.propTypes = {
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/Creation/Panel.js":
/*!***********************************************************!*\
  !*** ./resources/js/containers/chatBot/Creation/Panel.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CreateElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateElement */ "./resources/js/containers/chatBot/Creation/CreateElement.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/BlockTypes */ "./resources/js/constants/BlockTypes.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");







function Panel(_ref) {
  var size = _ref.size,
      scroll = _ref.scroll;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel",
    style: {
      width: size
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel-header"
  }, t("chatbot.drag-and-drop")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, [_constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_MESSAGE, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_QUESTION, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_SELECT, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_BUTTONS, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_API_CONTENT, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_CAROUSEL, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_CALENDAR, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_SWITCH, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_SET_VARIABLE, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_CALL_OPERATOR, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_TRIGGER, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_NOTIFICATION, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_TAG, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_DEPARTMENT].map(function (type) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateElement__WEBPACK_IMPORTED_MODULE_1__["default"], {
      type: type,
      key: type,
      scroll: scroll
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Panel);
Panel.propTypes = {
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBot/EditBlock.js":
/*!******************************************************!*\
  !*** ./resources/js/containers/chatBot/EditBlock.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _containers_chatBot_BlockEdit_BlockEditFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBot/BlockEdit/BlockEditFactory */ "./resources/js/containers/chatBot/BlockEdit/BlockEditFactory.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var _helpers_BlockIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/helpers/BlockIcon */ "./resources/js/helpers/BlockIcon.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);










function EditBlock(_ref) {
  var block = _ref.block;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  var value = Object(_helpers_BlockIcon__WEBPACK_IMPORTED_MODULE_6__["getValue"])(block.get("type"));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-edit"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: value.color
    },
    className: "header"
  }, Object(_helpers_BlockIcon__WEBPACK_IMPORTED_MODULE_6__["getIcon"])(block.get("type")), " ", t(value.langKey)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "block-edit-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_BlockEdit_BlockEditFactory__WEBPACK_IMPORTED_MODULE_2__["default"], {
    block: block
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    outline: true,
    color: "danger",
    onClick: function onClick() {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_5__["deleteEdit"])());
    }
  }, t("chatbot.actions.delete")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "float-right",
    onClick: function onClick() {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_5__["setEdit"])(null));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "info"
  }, t("chatbot.actions.cancel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    onClick: function onClick() {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_5__["saveEdit"])());
    }
  }, t("chatbot.actions.save")))));
}

EditBlock.propTypes = {
  block: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.instanceOf(immutable__WEBPACK_IMPORTED_MODULE_7__["Map"])
};
/* harmony default export */ __webpack_exports__["default"] = (EditBlock);

/***/ }),

/***/ "./resources/js/containers/chatBot/Minimap.js":
/*!****************************************************!*\
  !*** ./resources/js/containers/chatBot/Minimap.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);







function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

function Minimap() {
  var scale = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (_ref) {
    var chatbot = _ref.chatbot;
    return chatbot.getIn(["builder", "scale"]);
  });
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "minimap"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "buttons"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: scale < 30,
    color: "white",
    onClick: function onClick() {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_1__["setScale"])(scale - 5));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FaMinus"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    color: "white",
    disabled: scale > 145,
    onClick: function onClick() {
      dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_1__["setScale"])(scale + 5));
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FaPlus"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "counter"
  }, scale, "%"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: "float-right",
    color: "white",
    onClick: function onClick() {
      return toggleFullScreen();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_all__WEBPACK_IMPORTED_MODULE_3__["FaExpand"], null))));
}

Minimap.propTypes = {
  scroll: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  size: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
  wrapper: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Minimap);

/***/ }),

/***/ "./resources/js/containers/chatBot/edit.js":
/*!*************************************************!*\
  !*** ./resources/js/containers/chatBot/edit.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/ErrorMessage */ "./resources/js/components/widgets/ErrorMessage.js");
/* harmony import */ var _containers_chatBot_ChatBotForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBot/ChatBotForm */ "./resources/js/containers/chatBot/ChatBotForm.js");
/* harmony import */ var _redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionCreators */ "./resources/js/redux/reducers/chatbot/actionCreators.js");
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayoutForWithoutPaddings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayoutForWithoutPaddings */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayoutForWithoutPaddings.js");









function Edit() {
  var params = Object(react_router__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  var id = params.id;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  var error = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref) {
    var chatbot = _ref.chatbot;
    return chatbot.get("error");
  });
  var loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(function (_ref2) {
    var chatbot = _ref2.chatbot;
    return chatbot.get("loading");
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_reducers_chatbot_actionCreators__WEBPACK_IMPORTED_MODULE_6__["loadChatbot"])(id));
  }, [dispatch, id]);
  var content;

  if (loading) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Spinner"], null);
  } else if (error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_4__["default"], null);
  } else {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBot_ChatBotForm__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: id
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayoutForWithoutPaddings__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, content));
}

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./resources/js/containers/chatBot/helpers/selectLoaders/loadDepartmentSelectOptions.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/containers/chatBot/helpers/selectLoaders/loadDepartmentSelectOptions.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadDepartmentSelectOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadDepartmentSelectOptions(inputValue) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/departments/search", {
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

/***/ }),

/***/ "./resources/js/helpers/BlockIcon.js":
/*!*******************************************!*\
  !*** ./resources/js/helpers/BlockIcon.js ***!
  \*******************************************/
/*! exports provided: ICON_MAP, getIcon, getValue, getDefaultData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_MAP", function() { return ICON_MAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIcon", function() { return getIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValue", function() { return getValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultData", function() { return getDefaultData; });
/* harmony import */ var _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/constants/BlockTypes */ "./resources/js/constants/BlockTypes.js");
/* harmony import */ var react_icons_all__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/all */ "./node_modules/react-icons/all.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
var _ICON_MAP, _DATA_MAP;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var ICON_MAP = (_ICON_MAP = {}, _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_SELECT, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcTodoList"],
  color: "#D8EEFF",
  langKey: "chatbot.blocks.select"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_MESSAGE, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcSms"],
  color: "#D8EEFF",
  langKey: "chatbot.blocks.message"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_SET_VARIABLE, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcAddressBook"],
  color: "#E9E1FF",
  langKey: "chatbot.blocks.variable"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_QUESTION, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcDecision"],
  color: "#D8EEFF",
  langKey: "chatbot.blocks.question"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_CALL_OPERATOR, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcOnlineSupport"],
  color: "#E9E1FF",
  langKey: "chatbot.blocks.operator"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_TAG, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcTimeline"],
  color: "#FFEBCD",
  langKey: "chatbot.blocks.tag"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NOTIFICATION, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcAdvertising"],
  color: "#FFEBCD",
  langKey: "chatbot.blocks.notification"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_BUTTONS, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcList"],
  color: "#D8EEFF",
  langKey: "chatbot.blocks.buttons"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_SWITCH, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcParallelTasks"],
  color: "#E9E1FF",
  langKey: "chatbot.blocks.switch"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_DEPARTMENT, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcDepartment"],
  color: "#FFEBCD",
  langKey: "chatbot.blocks.department"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_CALENDAR, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcCalendar"],
  color: "#E9E1FF",
  langKey: "chatbot.blocks.calendar"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_CAROUSEL, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcStackOfPhotos"],
  color: "#E9E1FF",
  langKey: "chatbot.blocks.cards"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_TRIGGER, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcHighPriority"],
  color: "#FFEBCD",
  langKey: "chatbot.blocks.trigger"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_START, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcCheckmark"],
  color: "#D5FFD6",
  langKey: "chatbot.blocks.start"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_MAP, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcGlobe"],
  color: "#D5FFD6",
  langKey: "chatbot.blocks.map"
}), _defineProperty(_ICON_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_API_CONTENT, {
  Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FcExternal"],
  color: "#D8EEFF",
  langKey: "chatbot.blocks.api"
}), _ICON_MAP);
function getIcon(type) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var _getValue = getValue(type),
      Icon = _getValue.Icon,
      color = _getValue.color;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Icon, _extends({}, props, {
    color: color
  }));
}
function getValue(type) {
  return ICON_MAP[type] || {
    Icon: react_icons_all__WEBPACK_IMPORTED_MODULE_1__["FaBeer"],
    color: "#ff00000",
    langKey: "type"
  };
}
var DATA_MAP = (_DATA_MAP = {}, _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_MESSAGE, function () {
  return {
    text: "<p>Message</p>"
  };
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_SET_VARIABLE, function () {
  return {
    text: "value",
    variable: "variable"
  };
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_QUESTION, function () {
  return {
    text: "<p>Question?</p>",
    variable: "variable"
  };
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_CALL_OPERATOR, function () {
  return {
    text: "<p>Waiting for opeartor</p>"
  };
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_TAG, function () {
  return {
    text: "tag"
  };
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_NOTIFICATION, function () {
  return {
    text: "<p>Email text</p>"
  };
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_BUTTONS, function () {
  return {
    text: "<p>Select</p>",
    buttons: [{
      id: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["uniqueId"])("button-"),
      text: "Variant#1"
    }]
  };
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_SELECT, function () {
  return {
    text: "<p>Select</p>",
    buttons: [{
      id: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["uniqueId"])("button-"),
      text: "Variant#1"
    }]
  };
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_SWITCH, function () {
  return {
    variable: "variable",
    buttons: [{
      id: Object(lodash__WEBPACK_IMPORTED_MODULE_3__["uniqueId"])("button-"),
      text: "Variant#1"
    }]
  };
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_DEPARTMENT, function () {
  return {};
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_CALENDAR, function () {
  return {};
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_CAROUSEL, function () {
  return {
    cards: [{
      image_id: null,
      title: "Title",
      description: "Description",
      buttons: []
    }]
  };
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_TRIGGER, function () {
  return {
    variable: "",
    text: "trigger-name"
  };
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_START, function () {
  return {};
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_MAP, function () {
  return {};
}), _defineProperty(_DATA_MAP, _constants_BlockTypes__WEBPACK_IMPORTED_MODULE_0__["default"].TYPE_API_CONTENT, function () {
  return {
    api: {
      method: "GET",
      url: "https://example.com",
      headers: [{
        key: "Accept",
        value: "application/json"
      }, {
        key: "Content-Type",
        value: "application/json"
      }],
      params: [{
        key: "query",
        value: "valut"
      }],
      data: [{
        key: "key",
        value: "value"
      }]
    },
    buttons: []
  };
}), _DATA_MAP);
function getDefaultData(type) {
  return DATA_MAP[type] ? DATA_MAP[type]() : {};
}

/***/ }),

/***/ "./resources/js/helpers/filtersToString.js":
/*!*************************************************!*\
  !*** ./resources/js/helpers/filtersToString.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filtersToString; });
function filtersToString(filters) {
  var res = filters.map(function (filter) {
    return {
      column: filter.get("column"),
      operator: filter.get("operator"),
      value: filter.get("value")
    };
  }).toArray();
  return JSON.stringify(res);
}

/***/ }),

/***/ "./resources/js/helpers/sortToString.js":
/*!**********************************************!*\
  !*** ./resources/js/helpers/sortToString.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortToString; });
function sortToString(sort) {
  var res = sort.map(function (sortItem) {
    return sortItem.get("sort");
  }).toArray();
  return res.join(",");
}

/***/ }),

/***/ "./resources/js/redux/helpers/getStandardIndexActions.js":
/*!***************************************************************!*\
  !*** ./resources/js/redux/helpers/getStandardIndexActions.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getStandardIndexActions; });
function getStandardIndexActions(ACTIONS) {
  var loading = function loading() {
    return {
      type: ACTIONS.LOADING
    };
  };

  var error = function error(data) {
    return {
      type: ACTIONS.LOADING_ERROR,
      payload: data
    };
  };

  var itemsListLoaded = function itemsListLoaded(data) {
    return {
      type: ACTIONS.ITEMS_LOADED,
      payload: data
    };
  };

  return {
    loading: loading,
    error: error,
    itemsListLoaded: itemsListLoaded
  };
}

/***/ }),

/***/ "./resources/js/redux/reducers/chatbot/actionCreators.js":
/*!***************************************************************!*\
  !*** ./resources/js/redux/reducers/chatbot/actionCreators.js ***!
  \***************************************************************/
/*! exports provided: saveBot, loadChatbots, loadChatbot, move, create, select, rendered, connection, createConnection, setScale, setName, setEdit, updateEdit, updateCardIndex, saveEdit, deleteEdit, addButton, removeButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBot", function() { return saveBot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadChatbots", function() { return loadChatbots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadChatbot", function() { return loadChatbot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rendered", function() { return rendered; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connection", function() { return connection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnection", function() { return createConnection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setScale", function() { return setScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setName", function() { return setName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEdit", function() { return setEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEdit", function() { return updateEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCardIndex", function() { return updateCardIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveEdit", function() { return saveEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEdit", function() { return deleteEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addButton", function() { return addButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeButton", function() { return removeButton; });
/* harmony import */ var _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/chatbot/actionTypes */ "./resources/js/redux/reducers/chatbot/actionTypes.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _helpers_filtersToString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/filtersToString */ "./resources/js/helpers/filtersToString.js");
/* harmony import */ var _helpers_sortToString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/sortToString */ "./resources/js/helpers/sortToString.js");
/* harmony import */ var _redux_helpers_getStandardIndexActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/helpers/getStandardIndexActions */ "./resources/js/redux/helpers/getStandardIndexActions.js");






var _getStandardIndexActi = Object(_redux_helpers_getStandardIndexActions__WEBPACK_IMPORTED_MODULE_4__["default"])(_redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"]),
    loading = _getStandardIndexActi.loading,
    itemsListLoaded = _getStandardIndexActi.itemsListLoaded,
    error = _getStandardIndexActi.error;

var itemLoaded = function itemLoaded(item) {
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ITEM_LOADED,
    payload: item
  };
};

var saveBot = function saveBot() {
  return function (dispatch, getState) {
    var item = getState().chatbot.get("item");
    return _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("patch", "/methods/chat-bots/".concat(item.get("id")), {}, item.toJSON());
  };
};
var loadChatbots = function loadChatbots(page, filters, sort) {
  return function (dispatch) {
    var params = {
      page: page
    };

    if (filters.size) {
      params.filter = Object(_helpers_filtersToString__WEBPACK_IMPORTED_MODULE_2__["default"])(filters);
    }

    if (sort.size) {
      params.order = Object(_helpers_sortToString__WEBPACK_IMPORTED_MODULE_3__["default"])(sort);
    }

    dispatch(loading());
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/chat-bots", params, {}).then(function (response) {
      dispatch(itemsListLoaded({
        filters: filters,
        sort: sort,
        response: response
      }));
    })["catch"](function (response) {
      return dispatch(error(response));
    });
  };
};
var loadChatbot = function loadChatbot(id) {
  return function (dispatch) {
    dispatch(loading());
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/chat-bots/".concat(id)).data(function (data) {
      dispatch(itemLoaded(data));
    })["catch"](function (response) {
      return dispatch(error(response));
    });
  };
};
var move = function move(position) {
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].MOVE,
    payload: {
      position: position
    }
  };
};
var create = function create(data) {
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].NEW_BLOCK,
    payload: data
  };
};
var select = function select(index) {
  var add = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SELECT,
    payload: {
      index: index,
      add: add
    }
  };
};
var rendered = function rendered(id) {
  var onlySide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].RENDERED,
    payload: {
      id: id.toString(),
      onlySide: onlySide
    }
  };
};
var connection = function connection(state) {
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].START_CONNECTION,
    payload: {
      state: state
    }
  };
};
var createConnection = function createConnection(from, to) {
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CREATE_CONNECTION,
    payload: {
      from: from,
      to: to
    }
  };
};
var setScale = function setScale(scale) {
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SET_SCALE,
    payload: {
      scale: scale
    }
  };
};
var setName = function setName(name) {
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].CHANGE_NAME,
    payload: {
      name: name
    }
  };
};
var setEdit = function setEdit(index) {
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SET_EDIT,
    payload: {
      index: index && index.toString()
    }
  };
};
var updateEdit = function updateEdit(key, value) {
  var path = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_EDIT,
    payload: {
      key: key,
      value: value,
      path: path
    }
  };
};
var updateCardIndex = function updateCardIndex(key) {
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].UPDATE_CARD_INDEX_EDIT,
    payload: {
      key: key,
      index: index
    }
  };
};
var saveEdit = function saveEdit() {
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SAVE_EDIT,
    payload: {}
  };
};
var deleteEdit = function deleteEdit() {
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].DELETE_EDIT,
    payload: {}
  };
};
var addButton = function addButton() {
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ADD_BUTTON,
    payload: {}
  };
};
var removeButton = function removeButton(index) {
  return {
    type: _redux_reducers_chatbot_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].REMOVE_BUTTON,
    payload: {
      index: index
    }
  };
};

/***/ })

}]);