(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./chat-box/src/assets/fonts/Glyphter.eot":
/*!************************************************!*\
  !*** ./chat-box/src/assets/fonts/Glyphter.eot ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Glyphter.eot?03e3daf9c44fbb1eae0b9c7c19b0cf25";

/***/ }),

/***/ "./chat-box/src/assets/fonts/Glyphter.svg":
/*!************************************************!*\
  !*** ./chat-box/src/assets/fonts/Glyphter.svg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Glyphter.svg?4dbe935b650e7e705b657da9995ceb1f";

/***/ }),

/***/ "./chat-box/src/assets/fonts/Glyphter.ttf":
/*!************************************************!*\
  !*** ./chat-box/src/assets/fonts/Glyphter.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Glyphter.ttf?95271b5b46637e93b7223f4008e0988a";

/***/ }),

/***/ "./chat-box/src/assets/fonts/Glyphter.woff":
/*!*************************************************!*\
  !*** ./chat-box/src/assets/fonts/Glyphter.woff ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/fonts/Glyphter.woff?7dfad5e44cf6341f87ec2c1a4c6ce6a6";

/***/ }),

/***/ "./chat-box/src/components/app/ActionButton.js":
/*!*****************************************************!*\
  !*** ./chat-box/src/components/app/ActionButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./resources/js/preact-react.js");
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




var ActionButton = /*#__PURE__*/function (_Component) {
  _inherits(ActionButton, _Component);

  var _super = _createSuper(ActionButton);

  function ActionButton() {
    _classCallCheck(this, ActionButton);

    return _super.apply(this, arguments);
  }

  _createClass(ActionButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          icon = _this$props.icon,
          title = _this$props.title;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: 'action-btn',
        onClick: onClick,
        title: title
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: icon
      }));
    }
  }]);

  return ActionButton;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./chat-box/src/components/app/Invite.js":
/*!***********************************************!*\
  !*** ./chat-box/src/components/app/Invite.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Invite; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./resources/js/preact-react.js");
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActionButton */ "./chat-box/src/components/app/ActionButton.js");
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





var InviteBadge = /*#__PURE__*/function (_Component) {
  _inherits(InviteBadge, _Component);

  var _super = _createSuper(InviteBadge);

  function InviteBadge() {
    _classCallCheck(this, InviteBadge);

    return _super.apply(this, arguments);
  }

  _createClass(InviteBadge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          closeInvite = _this$props.closeInvite,
          onStart = _this$props.onStart,
          btnText = _this$props.btnText,
          mainText = _this$props.mainText,
          hasAttachment = _this$props.hasAttachment,
          imageUrl = _this$props.imageUrl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "invite-window"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: "icon-times-solid",
        onClick: closeInvite
      }), imageUrl ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "image",
        src: imageUrl,
        alt: ""
      })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: mainText
        }
      }), hasAttachment ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "icon-paperclip-solid icon-size-20 color-gray"
      }) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "start-btn",
        onClick: onStart
      }, btnText));
    }
  }]);

  return InviteBadge;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var Invite = /*#__PURE__*/function (_Component2) {
  _inherits(Invite, _Component2);

  var _super2 = _createSuper(Invite);

  function Invite() {
    _classCallCheck(this, Invite);

    return _super2.apply(this, arguments);
  }

  _createClass(Invite, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          invite = _this$props2.invite,
          closeInvite = _this$props2.closeInvite,
          onStart = _this$props2.onStart,
          btnText = _this$props2.btnText,
          mainText = _this$props2.mainText,
          toggleOpen = _this$props2.toggleOpen,
          icon = _this$props2.icon,
          hasAttachment = _this$props2.hasAttachment,
          imageUrl = _this$props2.imageUrl;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, invite && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InviteBadge, {
        closeInvite: closeInvite,
        onStart: onStart,
        btnText: btnText,
        mainText: mainText,
        hasAttachment: hasAttachment,
        imageUrl: imageUrl
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: toggleOpen,
        className: "speech-bubble-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "".concat(icon.namespace, " fa-").concat(icon.icon, " speech-bubble-icon")
      })));
    }
  }]);

  return Invite;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./chat-box/src/components/app/Message.js":
/*!************************************************!*\
  !*** ./chat-box/src/components/app/Message.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./resources/js/preact-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./chat-box/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./chat-box/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var preact_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! preact-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var preact_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(preact_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var CARD_WIDTH = 208;

var Message = /*#__PURE__*/function (_Component) {
  _inherits(Message, _Component);

  var _super = _createSuper(Message);

  function Message() {
    var _this;

    _classCallCheck(this, Message);

    _this = _super.apply(this, arguments);

    _defineProperty(_assertThisInitialized(_this), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleRightScrollClick", function () {
      if (_this.list) {
        var left = _this.list.getScrollLeft();

        if (_this.list.getScrollWidth() - _this.list.getScrollLeft() <= _this.list.getClientWidth() * 2) {
          console.log('end');
        }

        _this.list.scrollLeft(left += CARD_WIDTH);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleLeftScrollClick", function () {
      if (_this.list) {
        var left = _this.list.getScrollLeft();

        if (_this.list.getScrollLeft() <= CARD_WIDTH) {
          console.log('start');
        }

        _this.list.scrollLeft(left -= CARD_WIDTH);
      }
    });

    _this.close = _this.close.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Message, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.message !== nextProps.message || this.props.allowButton !== nextProps.allowButton || this.state.open !== nextState.open;
    }
  }, {
    key: "close",
    value: function close(e) {
      if (e.data === 'close') {
        if (this.state.open) {
          this.setState({
            open: false
          });
        }
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('message', this.close);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('message', this.close);
    }
  }, {
    key: "getIconByFile",
    value: function getIconByFile(url) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'file-item'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: 'icon-file-image-solid'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: 'file-name'
      }, lodash__WEBPACK_IMPORTED_MODULE_3___default.a.truncate(url, {
        length: 25
      })));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var message = this.props.message;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("message-block", {
          income: message.getIsIncome(),
          outcome: message.getIsOutcome()
        })
      }, message.getIsIncome() && this.props.showImage && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "image-block"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: 'image',
        src: this.props.image ? this.props.image : message.image,
        alt: ""
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "messages"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message-item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message"
      }, typeof message.message === "function" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'block'
        }
      }, message.message()) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          display: 'block'
        },
        dangerouslySetInnerHTML: {
          __html: message.message
        }
      }), message.images && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "message-img-wrapper"
      }, message.images.map(function (img) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "img-fluid",
          src: img.data.url,
          key: img.id,
          alt: ""
        });
      })), message.files && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, message.files.map(function (file, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: index
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          href: file.data.url,
          className: "file",
          target: "_blank"
        }, _this2.getIconByFile(file.data.url)));
      })), message.embed && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, message.embed.map(function (embed, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
          key: i,
          src: embed.data.url,
          frameborder: "0"
        });
      })), message.videos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chat-message-video-wrapper"
      }, message.videos.map(function (video, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
          key: i,
          className: "chat-message-video img-fluid",
          controls: "controls"
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
          src: video.data.url
        }));
      })), message.cards.map(function (cards, i) {
        if (cards.data.type === 'calendar') {
          var button = cards.data.elements[0].buttons[0];
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: i
          }, _this2.state.open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'message-modal'
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
            src: button.url,
            frameBorder: 0
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            className: 'btn',
            onClick: function onClick() {
              _this2.setState({
                open: true
              });
            }
          }, button.title));
        }

        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: i,
          className: 'tc'
        }, cards.data.elements.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: 'tc__right',
          onClick: _this2.handleRightScrollClick
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "icon-angle-right-solid",
          "aria-hidden": "true"
        })), cards.data.elements.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: 'tc__left',
          onClick: _this2.handleLeftScrollClick
        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: "icon-angle-left-solid",
          "aria-hidden": "true"
        })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(preact_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__["Scrollbars"], {
          ref: function ref(el) {
            return _this2.list = el;
          },
          renderThumbHorizontal: function renderThumbHorizontal(props) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
              className: "scroll-thumb-horizontal"
            }));
          },
          renderTrackHorizontal: function renderTrackHorizontal(props) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
              className: "scroll-track-horizontal"
            }));
          },
          renderView: function renderView(props) {
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
              className: "tc__cards"
            }));
          }
        }, cards.data.elements.map(function (card, cardIndex) {
          var buttons = card.buttons || [];
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: cardIndex,
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("tc__cards__card", {
              hasImg: card.image_url,
              small: cards.data.type === 'invite'
            })
          }, card.image_url && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'tc__cards__card__imgBlock'
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            className: 'tc__cards__card__imgBlock__img',
            src: card.image_url,
            alt: card.title
          })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'tc__cards__card__textBlock'
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'tc__cards__card__textBlock__title',
            dangerouslySetInnerHTML: {
              __html: card.title
            }
          }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: "tc__cards__card__textBlock__subtitle"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(preact_custom_scrollbars__WEBPACK_IMPORTED_MODULE_4__["Scrollbars"], {
            ref: function ref(el) {
              return _this2.list = el;
            },
            renderThumbVertical: function renderThumbVertical(props) {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
                className: "scroll-thumb-vertical"
              }));
            },
            renderTrackVertical: function renderTrackVertical(props) {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
                className: "scroll-track-vertical"
              }));
            },
            renderView: function renderView(props) {
              return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
                className: "scroll-view"
              }));
            }
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: card.subtitle
            }
          }))), buttons.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            className: 'tc__cards__card__textBlock__btns'
          }, buttons.map(function (button, buttonIndex) {
            switch (button.type) {
              case 'web_url':
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                  key: buttonIndex,
                  className: 'tc__cards__card__textBlock__btns__btn',
                  target: "_blank",
                  href: button.url
                }, button.title);

              case 'postback':
                return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
                  key: buttonIndex,
                  onClick: function onClick() {
                    return _this2.props.sendMessage(button.title, null, button.payload);
                  },
                  className: 'tc__cards__card__textBlock__btns__btn'
                }, button.title);
            }
          })) : ''));
        })));
      }), this.buttons && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.buttons.map(function (_ref, i) {
        var text = _ref.text;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          key: i,
          className: 'btn',
          onClick: function onClick() {
            return _this2.props.sendMessage(text);
          }
        }, text);
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "time"
      }, this.props.time))));
    }
  }, {
    key: "buttons",
    get: function get() {
      return this.props.allowButton && this.props.message.buttons;
    }
  }]);

  return Message;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./chat-box/src/components/app/widget/FileItem.js":
/*!********************************************************!*\
  !*** ./chat-box/src/components/app/widget/FileItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./resources/js/preact-react.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./chat-box/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
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





var FileItem = /*#__PURE__*/function (_Component) {
  _inherits(FileItem, _Component);

  var _super = _createSuper(FileItem);

  function FileItem() {
    _classCallCheck(this, FileItem);

    return _super.apply(this, arguments);
  }

  _createClass(FileItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          file = _this$props.file,
          deleteItem = _this$props.deleteItem;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'file-list'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'file-item'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: 'icon-file-image-solid'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: 'file-name'
      }, lodash__WEBPACK_IMPORTED_MODULE_2___default.a.truncate(file.name, {
        length: 25
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        onClick: deleteItem,
        className: 'delete-file icon-times-solid'
      })));
    }
  }]);

  return FileItem;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./chat-box/src/components/app/widget/MenuItem.js":
/*!********************************************************!*\
  !*** ./chat-box/src/components/app/widget/MenuItem.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuItem; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./resources/js/preact-react.js");
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




var MenuItem = /*#__PURE__*/function (_Component) {
  _inherits(MenuItem, _Component);

  var _super = _createSuper(MenuItem);

  function MenuItem() {
    _classCallCheck(this, MenuItem);

    return _super.apply(this, arguments);
  }

  _createClass(MenuItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      var item = this.props.item;
      var sendMessage = this.props.sendMessage;
      var Tag = item.type === 'url' ? 'a' : 'div';
      var icon = item.icon;
      var iconNamespace = icon ? icon.namespace : "fa";
      var iconName = icon ? icon.icon : "external-link-alt";
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: function onClick() {
          _this.setState({
            showMenu: false
          });

          if (item.type === 'trigger') {
            sendMessage(item.title, null, item.value, item.value);
          }
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Tag, {
        target: '_blank',
        href: item.href
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "".concat(iconNamespace, " fa-").concat(iconName)
      }), item.title));
    }
  }]);

  return MenuItem;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./chat-box/src/components/app/widget/MessagesList.js":
/*!************************************************************!*\
  !*** ./chat-box/src/components/app/widget/MessagesList.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MessagesList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./resources/js/preact-react.js");
/* harmony import */ var _Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../Message */ "./chat-box/src/components/app/Message.js");
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





var MessagesList = /*#__PURE__*/function (_Component) {
  _inherits(MessagesList, _Component);

  var _super = _createSuper(MessagesList);

  function MessagesList() {
    _classCallCheck(this, MessagesList);

    return _super.apply(this, arguments);
  }

  _createClass(MessagesList, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          messages = _this$props.messages,
          sendMessage = _this$props.sendMessage,
          getMessageImage = _this$props.getMessageImage;
      var BodyTag = preact__WEBPACK_IMPORTED_MODULE_1__["h"] ? 'base' : 'div';
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BodyTag, {
        target: "_blank"
      }, messages.map(function (message, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Message__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: message.id,
          message: message,
          allowButton: i === messages.length - 1,
          image: getMessageImage(message),
          sendMessage: sendMessage,
          showImage: true
        });
      }));
    }
  }]);

  return MessagesList;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./chat-box/src/components/app/widget/StartBtn.js":
/*!********************************************************!*\
  !*** ./chat-box/src/components/app/widget/StartBtn.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StartBtn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./resources/js/preact-react.js");
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




var StartBtn = /*#__PURE__*/function (_Component) {
  _inherits(StartBtn, _Component);

  var _super = _createSuper(StartBtn);

  function StartBtn() {
    _classCallCheck(this, StartBtn);

    return _super.apply(this, arguments);
  }

  _createClass(StartBtn, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          start_btn = _this$props.start_btn,
          sendMessage = _this$props.sendMessage;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "centered-content"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: "start-btn",
        onClick: function onClick() {
          return sendMessage('start');
        }
      }, start_btn));
    }
  }]);

  return StartBtn;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./chat-box/src/components/app/widget/UnreadMessagesBadge.js":
/*!*******************************************************************!*\
  !*** ./chat-box/src/components/app/widget/UnreadMessagesBadge.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UnreadMessagesBadge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./resources/js/preact-react.js");
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




var UnreadMessagesBadge = /*#__PURE__*/function (_Component) {
  _inherits(UnreadMessagesBadge, _Component);

  var _super = _createSuper(UnreadMessagesBadge);

  function UnreadMessagesBadge() {
    _classCallCheck(this, UnreadMessagesBadge);

    return _super.apply(this, arguments);
  }

  _createClass(UnreadMessagesBadge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          newMessagesCount = _this$props.newMessagesCount,
          onClick = _this$props.onClick;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'unread-messages',
        onClick: onClick
      }, "Unread messages (", newMessagesCount, ")");
    }
  }]);

  return UnreadMessagesBadge;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./chat-box/src/components/app/widget/Widget.js":
/*!******************************************************!*\
  !*** ./chat-box/src/components/app/widget/Widget.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Widget; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./resources/js/preact-react.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./chat-box/node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var preact_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! preact-custom-scrollbars */ "./node_modules/react-custom-scrollbars/lib/index.js");
/* harmony import */ var preact_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(preact_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _WindowHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WindowHeader */ "./chat-box/src/components/app/widget/WindowHeader.js");
/* harmony import */ var _WindowFooter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WindowFooter */ "./chat-box/src/components/app/widget/WindowFooter.js");
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MenuItem */ "./chat-box/src/components/app/widget/MenuItem.js");
/* harmony import */ var _FileItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FileItem */ "./chat-box/src/components/app/widget/FileItem.js");
/* harmony import */ var _StartBtn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./StartBtn */ "./chat-box/src/components/app/widget/StartBtn.js");
/* harmony import */ var _MessagesList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MessagesList */ "./chat-box/src/components/app/widget/MessagesList.js");
/* harmony import */ var _UnreadMessagesBadge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UnreadMessagesBadge */ "./chat-box/src/components/app/widget/UnreadMessagesBadge.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var Widget = /*#__PURE__*/function (_Component) {
  _inherits(Widget, _Component);

  var _super = _createSuper(Widget);

  function Widget() {
    var _this;

    _classCallCheck(this, Widget);

    _this = _super.apply(this, arguments);

    _defineProperty(_assertThisInitialized(_this), "state", {
      showMenu: false,
      input: "",
      file: null
    });

    _this.collectAndSendMessage = _this.collectAndSendMessage.bind(_assertThisInitialized(_this));
    _this.deleteFile = _this.deleteFile.bind(_assertThisInitialized(_this));
    _this.toggleMenu = _this.toggleMenu.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Widget, [{
    key: "collectAndSendMessage",
    value: function collectAndSendMessage() {
      var message = this.state.input;
      var file = this.state.file;

      if (message || file) {
        this.setState({
          input: "",
          file: null
        });

        if (this.props.channel) {
          this.props.channel.whisper('typing', {
            message: ''
          });
        }

        this.props.sendMessage(message, file);
      }
    }
  }, {
    key: "deleteFile",
    value: function deleteFile() {
      this.setState({
        file: null
      });
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      this.setState(function (_ref) {
        var showMenu = _ref.showMenu;
        return {
          showMenu: !showMenu
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          isFullScreen = _this$props.isFullScreen,
          rtl = _this$props.rtl,
          messages = _this$props.messages,
          sendMessage = _this$props.sendMessage,
          start_btn = _this$props.start_btn,
          newMessages = _this$props.newMessages,
          textTypeEnabled = _this$props.textTypeEnabled,
          placeholder = _this$props.placeholder,
          menus = _this$props.menus,
          channel = _this$props.channel,
          badge = _this$props.badge;
      var hasMassages = messages.length > 0;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("window-wrapper mx-auto my-4", {
          fullscreen: isFullScreen,
          rtl: rtl
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WindowHeader__WEBPACK_IMPORTED_MODULE_4__["default"], this.props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "window-body"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'relative'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(preact_custom_scrollbars__WEBPACK_IMPORTED_MODULE_3__["Scrollbars"], {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("messages-list", {
          "has-files": this.state.file
        }),
        ref: function ref(el) {
          return _this2.list = el;
        },
        renderThumbVertical: function renderThumbVertical(props) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
            className: "scroll-thumb-vertical"
          }));
        },
        renderTrackVertical: function renderTrackVertical(props) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
            className: "scroll-track-vertical"
          }));
        },
        renderView: function renderView(props) {
          return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
            className: "scroll-view"
          }));
        }
      }, hasMassages ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MessagesList__WEBPACK_IMPORTED_MODULE_9__["default"], {
        messages: messages,
        sendMessage: sendMessage,
        getMessageImage: this.props.getMessageImage
      }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StartBtn__WEBPACK_IMPORTED_MODULE_8__["default"], {
        start_btn: start_btn,
        sendMessage: sendMessage
      })), !!newMessages && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UnreadMessagesBadge__WEBPACK_IMPORTED_MODULE_10__["default"], {
        newMessagesCount: newMessages
      })), this.state.file && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FileItem__WEBPACK_IMPORTED_MODULE_7__["default"], {
        file: this.state.file,
        deleteFile: this.deleteFile
      }), this.state.showMenu && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'context-menu'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, menus.map(function (item, i) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: i,
          item: item,
          sendMessage: sendMessage
        });
      }))), hasMassages && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("type-message", "has-load-btn", {
          disabled: !textTypeEnabled
        })
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        type: "button",
        className: 'load-btn menu-btn',
        onClick: this.toggleMenu
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: 'icon-menu'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: 'badge'
      }, badge)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
        disabled: !textTypeEnabled,
        value: this.state.input,
        onChange: function onChange() {},
        onInput: function onInput(e) {
          if (_this2.enter) return;
          var input = e.target.value;

          if (channel) {
            channel.whisper('typing', {
              message: input
            });
          }

          _this2.setState({
            input: input
          });
        },
        placeholder: placeholder,
        onKeyDown: function onKeyDown(e) {
          _this2.enter = false;

          if (e.keyCode === 13 && !e.shiftKey) {
            _this2.enter = true;
            e.stopPropagation();

            _this2.collectAndSendMessage();
          }
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: 'load-btn'
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "file"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: 'icon-paperclip-solid'
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        disabled: !textTypeEnabled,
        hidden: true,
        onChange: function onChange(e) {
          _this2.setState({
            file: e.target.files[0]
          });
        },
        name: "file",
        id: "file",
        type: "file"
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        disabled: !textTypeEnabled,
        className: 'send-btn',
        onClick: this.collectAndSendMessage
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: 'icon-telegram-plane'
      })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WindowFooter__WEBPACK_IMPORTED_MODULE_5__["default"], this.props));
    }
  }]);

  return Widget;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./chat-box/src/components/app/widget/WindowFooter.js":
/*!************************************************************!*\
  !*** ./chat-box/src/components/app/widget/WindowFooter.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowFooter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./resources/js/preact-react.js");
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




var WindowFooter = /*#__PURE__*/function (_Component) {
  _inherits(WindowFooter, _Component);

  var _super = _createSuper(WindowFooter);

  function WindowFooter() {
    _classCallCheck(this, WindowFooter);

    return _super.apply(this, arguments);
  }

  _createClass(WindowFooter, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          poweredBy = _this$props.poweredBy,
          powered_url = _this$props.powered_url,
          powered_name = _this$props.powered_name;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "window-footer"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "powered"
      }, poweredBy, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        target: "_parent",
        href: powered_url
      }, powered_name)));
    }
  }]);

  return WindowFooter;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./chat-box/src/components/app/widget/WindowHeader.js":
/*!************************************************************!*\
  !*** ./chat-box/src/components/app/widget/WindowHeader.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WindowHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./resources/js/preact-react.js");
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ActionButton */ "./chat-box/src/components/app/ActionButton.js");
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





var WindowHeader = /*#__PURE__*/function (_Component) {
  _inherits(WindowHeader, _Component);

  var _super = _createSuper(WindowHeader);

  function WindowHeader() {
    _classCallCheck(this, WindowHeader);

    return _super.apply(this, arguments);
  }

  _createClass(WindowHeader, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          soundNotifications = _this$props.soundNotifications,
          toggleNotifications = _this$props.toggleNotifications,
          toggleFullScreen = _this$props.toggleFullScreen,
          embedButton = _this$props.embedButton,
          logo = _this$props.logo,
          toggleOpen = _this$props.toggleOpen,
          closeButton = _this$props.closeButton;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "window-header"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "name"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: logo,
        className: 'logo-img'
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: 'title'
      }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "configs"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: soundNotifications ? "icon-bell-regular" : "icon-bell-slash-regular",
        onClick: toggleNotifications
      }), embedButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: "icon-window-minimize",
        onClick: toggleFullScreen
      }), closeButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActionButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        icon: "icon-times-solid",
        onClick: toggleOpen
      })));
    }
  }]);

  return WindowHeader;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./chat-box/src/data/MessageRecord.js":
/*!********************************************!*\
  !*** ./chat-box/src/data/MessageRecord.js ***!
  \********************************************/
/*! exports provided: TYPE_DEFAULT, TYPE_SYSTEM, TYPE_BOT, ATTACHMENT_TYPE_IMAGE, ATTACHMENT_TYPE_FILE, ATTACHMENT_TYPE_VIDEO, ATTACHMENT_TYPE_LOCATION, ATTACHMENT_TYPE_CONTACT, ATTACHMENT_TYPE_CARDS, ATTACHMENT_TYPE_EMBED, MessageRecord */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_DEFAULT", function() { return TYPE_DEFAULT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_SYSTEM", function() { return TYPE_SYSTEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_BOT", function() { return TYPE_BOT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTACHMENT_TYPE_IMAGE", function() { return ATTACHMENT_TYPE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTACHMENT_TYPE_FILE", function() { return ATTACHMENT_TYPE_FILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTACHMENT_TYPE_VIDEO", function() { return ATTACHMENT_TYPE_VIDEO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTACHMENT_TYPE_LOCATION", function() { return ATTACHMENT_TYPE_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTACHMENT_TYPE_CONTACT", function() { return ATTACHMENT_TYPE_CONTACT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTACHMENT_TYPE_CARDS", function() { return ATTACHMENT_TYPE_CARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATTACHMENT_TYPE_EMBED", function() { return ATTACHMENT_TYPE_EMBED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageRecord", function() { return MessageRecord; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./chat-box/node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./chat-box/node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
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



var TYPE_DEFAULT = 1;
var TYPE_SYSTEM = 3;
var TYPE_BOT = 4;
var ATTACHMENT_TYPE_IMAGE = 1;
var ATTACHMENT_TYPE_FILE = 2;
var ATTACHMENT_TYPE_VIDEO = 7;
var ATTACHMENT_TYPE_LOCATION = 3;
var ATTACHMENT_TYPE_CONTACT = 4;
var ATTACHMENT_TYPE_CARDS = 5;
var ATTACHMENT_TYPE_EMBED = 6;
var defaultValues = {
  id: null,
  type: 1,
  message: "",
  image: null,
  info: null,
  user: null,
  chat_message_attachments: []
};
var MessageRecord = /*#__PURE__*/function (_Record) {
  _inherits(MessageRecord, _Record);

  var _super = _createSuper(MessageRecord);

  function MessageRecord() {
    _classCallCheck(this, MessageRecord);

    return _super.apply(this, arguments);
  }

  _createClass(MessageRecord, [{
    key: "getIsIncome",
    value: function getIsIncome() {
      return this.user || this.type === TYPE_BOT || this.getIsSystem();
    }
  }, {
    key: "getIsSystem",
    value: function getIsSystem() {
      return this.type === TYPE_SYSTEM;
    }
  }, {
    key: "getIsOutcome",
    value: function getIsOutcome() {
      return !this.getIsIncome();
    }
  }, {
    key: "buttons",
    get: function get() {
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.get(this.info, ['buttons']);
    }
  }, {
    key: "images",
    get: function get() {
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(this.chat_message_attachments, {
        type: ATTACHMENT_TYPE_IMAGE
      });
    }
  }, {
    key: "files",
    get: function get() {
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(this.chat_message_attachments, {
        type: ATTACHMENT_TYPE_FILE
      });
    }
  }, {
    key: "videos",
    get: function get() {
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(this.chat_message_attachments, {
        type: ATTACHMENT_TYPE_VIDEO
      });
    }
  }, {
    key: "embed",
    get: function get() {
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(this.chat_message_attachments, {
        type: ATTACHMENT_TYPE_EMBED
      });
    }
  }, {
    key: "cards",
    get: function get() {
      return lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(this.chat_message_attachments, {
        type: ATTACHMENT_TYPE_CARDS
      });
    }
  }]);

  return MessageRecord;
}(Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Record"])(defaultValues));

/***/ }),

/***/ "./chat-box/src/styles/Style.js":
/*!**************************************!*\
  !*** ./chat-box/src/styles/Style.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Style; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./resources/js/preact-react.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./chat-box/src/styles/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
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





var Style = /*#__PURE__*/function (_Component) {
  _inherits(Style, _Component);

  var _super = _createSuper(Style);

  function Style() {
    _classCallCheck(this, Style);

    return _super.apply(this, arguments);
  }

  _createClass(Style, [{
    key: "render",
    value: function render() {
      var styles = this.props.styles.config;
      var fontSizesMap = {
        "sm": 12,
        "md": 16,
        "lg": 20
      };
      var fontSize = fontSizesMap[styles.global_font_size];
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        type: "text/css"
      }, ":root {\n                    --font-family: ".concat(styles.global_font_family, ";\n                    --font-size: ").concat(fontSize, "px;\n\n                    --bubble-size: ").concat(styles.button_size, "px;\n                    --bubble-color: ").concat(styles.button_icon_color, ";\n                    --bubble-bg-color: ").concat(styles.button_bg_color, ";\n\n                    --window-position: ").concat(styles.button_position, ";\n                    --window-width: 350px;\n                    --window-height: 600px;\n                    --window-header-height: 60px;\n                    --window-footer-height: 40px;\n                    --window-body-height: 500px;\n\n                    --header-color: ").concat(styles.window_header_color, ";\n                    --header-bg-color: ").concat(styles.window_header_bg, ";\n\n                    --file-name-color: ").concat(styles.user_input_file_name_color, ";\n                    --textarea-bg-color: ").concat(styles.user_input_bg, ";\n                    --textarea-color: ").concat(styles.user_input_text_color, ";\n                    --textarea-placeholder-color: ").concat(styles.user_input_placeholder_color, ";\n\n                    --send-btn-bg-color: ").concat(styles.user_input_send_button_bg, ";\n                    --send-btn-color: ").concat(styles.user_input_send_button_color, ";\n\n                    --menu-color: ").concat(styles.menu_item_color, ";\n                    --menu-bg-color: ").concat(styles.menu_bg, ";\n\n                    --footer-color: ").concat(styles.window_footer_color, ";\n                    --footer-bg-color: ").concat(styles.window_footer_bg, ";\n\n                    --menu-badge-color: ").concat(styles.menu_badge_bg, ";\n                    --menu-badge-text-color:  ").concat(styles.menu_badge_color, ";\n\n                    --window-body-bg-color: ").concat(styles.content_bg, ";\n\n                    --start-btn-bg: ").concat(styles.start_btn_bg, ";\n                    --start-btn-color: ").concat(styles.start_btn_color, ";\n\n                    --message-income-bg-color: ").concat(styles.bot_or_operator_msg_bg, ";\n                    --message-income-color: ").concat(styles.bot_or_operator_msg_color, ";\n                    --message-income-btn-bg-color: ").concat(styles.bot_message_button_bg, ";\n                    --message-income-btn-color: ").concat(styles.bot_message_button_color, ";\n\n                    --message-outcome-bg-color: ").concat(styles.user_message_bg, ";\n                    --message-outcome-color: ").concat(styles.user_message_color, ";\n                }\n\n                .speech-bubble-wrapper {\n                    animation: ").concat(styles.button_animation ? "play 1.5s ease infinite" : "none", ";\n                }\n                .menu-btn .badge {\n                    display: ").concat(styles.menu_show_badge ? "block" : "none", ";\n                }\n                "));
    }
  }]);

  return Style;
}(preact__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),

/***/ "./chat-box/src/styles/style.scss":
/*!****************************************!*\
  !*** ./chat-box/src/styles/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/sass-loader/dist/cjs.js??ref--6-3!./style.scss */ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./chat-box/src/styles/style.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js!./chat-box/src/styles/glyphter.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader!./chat-box/src/styles/glyphter.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Generated by Glyphter (http://www.glyphter.com) on  Fri Apr 03 2020*/\n@font-face {\n    font-family: 'Glyphter';\n    src: url(" + escape(__webpack_require__(/*! ../assets/fonts/Glyphter.eot */ "./chat-box/src/assets/fonts/Glyphter.eot")) + ");\n    src: url(" + escape(__webpack_require__(/*! ../assets/fonts/Glyphter.eot */ "./chat-box/src/assets/fonts/Glyphter.eot")) + "?#iefix) format('embedded-opentype'),\n         url(" + escape(__webpack_require__(/*! ../assets/fonts/Glyphter.woff */ "./chat-box/src/assets/fonts/Glyphter.woff")) + ") format('woff'),\n         url(" + escape(__webpack_require__(/*! ../assets/fonts/Glyphter.ttf */ "./chat-box/src/assets/fonts/Glyphter.ttf")) + ") format('truetype'),\n         url(" + escape(__webpack_require__(/*! ../assets/fonts/Glyphter.svg */ "./chat-box/src/assets/fonts/Glyphter.svg")) + "#Glyphter) format('svg');\n    font-weight: normal;\n    font-style: normal;\n}\n\n.chatbox-widget [class*='icon-'] {\n  vertical-align: middle;\n  line-height: 1;\n  display: inline-flex;\n}\n\n\n.chatbox-widget [class*='icon-']:before{\n\tdisplay: inline-block;\n   font-family: 'Glyphter';\n   font-style: normal;\n   font-weight: normal;\n   line-height: 1;\n   -webkit-font-smoothing: antialiased;\n   -moz-osx-font-smoothing: grayscale\n}\n.icon-angle-right-solid:before{content:'A';}\n.icon-bell-regular:before{content:'B';}\n.icon-bell-slash-regular:before{content:'C';}\n.icon-button:before{content:'D';}\n.icon-chevron-left-solid:before{content:'E';}\n.icon-chevron-right-solid:before{content:'F';}\n.icon-external-link:before{content:'G';}\n.icon-file-image-solid:before{content:'H';}\n.icon-map-marked-alt-solid:before{content:'I';}\n.icon-menu:before{content:'J';}\n.icon-angle-left-solid:before{content:'K';}\n.icon-paperclip-solid:before{content:'L';}\n.icon-restart:before{content:'M';}\n.icon-telegram-plane:before{content:'N';}\n.icon-times-solid:before{content:'O';}\n.icon-window-minimize:before{content:'P';}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./chat-box/src/styles/style.scss":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/postcss-loader/src??ref--6-2!./node_modules/sass-loader/dist/cjs.js??ref--6-3!./chat-box/src/styles/style.scss ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__(/*! -!../../../node_modules/css-loader!./glyphter.css */ "./node_modules/css-loader/index.js!./chat-box/src/styles/glyphter.css"), "");

// module
exports.push([module.i, ":root {\n  --bubble-color: #009ce0;\n  --bubble-bg-color: #cccccc;\n  --bubble-rgb-color: rgba(0, 0, 0, 0.2);\n  --bubble-size: 60px;\n  --window-position: right;\n  --window-width: 350px;\n  --window-width-mob: 100%;\n  --window-height: 600px;\n  --window-header-height: 60px;\n  --window-footer-height: 40px;\n  --window-body-height: 500px;\n  --header-color: white;\n  --header-bg-color: #333333;\n  --font-size: 14px;\n  --font-family: \"sans-serif\";\n  --start-btn-bg: #cecece;\n  --start-btn-color: #000000;\n  --window-body-color: white;\n  --window-body-bg-color: #393a4e;\n  --message-income-bg-color: #2e1849;\n  --message-income-color: #ffffff;\n  --message-income-btn-bg-color: #ffffff;\n  --message-income-btn-color: #000000;\n  --message-outcome-bg-color: #3195d2;\n  --message-outcome-color: #ffffff;\n  --file-name-color: #ffffffff;\n  --textarea-bg-color: #000000;\n  --textarea-color: #ffffff;\n  --textarea-placeholder-color: #ffffff;\n  --send-btn-bg-color: #ffffff;\n  --send-btn-color: #68bc00;\n  --footer-color: white;\n  --footer-bg-color: #333333;\n  --menu-color: white;\n  --menu-bg-color: #333333;\n}\n\n.relative {\n  position: relative;\n}\n\n.img-fluid {\n  max-width: 100%;\n  height: auto;\n}\n\n.invite-window {\n  background-color: var(--message-income-bg-color);\n  color: var(--message-income-color);\n  font-size: var(--font-size);\n  font-family: var(--font-family);\n  padding: 16px 12px 12px;\n  border-radius: 10px;\n  word-break: break-word;\n  position: relative;\n  margin-right: 20px;\n  width: 200px;\n}\n.invite-window .action-btn {\n  position: absolute;\n  right: 7px;\n  font-size: 10px;\n  top: 5px;\n  color: var(--message-income-color);\n  cursor: pointer;\n}\n.invite-window .start-btn {\n  border-radius: 10px;\n  padding: 7px 10px;\n  margin: 5px 5px 0 0;\n  cursor: pointer;\n  display: inline-block;\n  border: none;\n  box-shadow: none;\n  outline: none;\n  background: var(--message-income-btn-bg-color);\n  color: var(--message-income-btn-color);\n  font-size: var(--font-size);\n  font-family: var(--font-family);\n}\n\n.window-wrapper {\n  font-family: var(--font-family);\n  transition: visibility 0s, opacity 0.5s linear;\n  width: var(--window-width);\n  height: var(--window-height);\n  z-index: 2;\n}\n.window-wrapper.fullscreen {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  margin: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.window-wrapper.fullscreen .window-body {\n  height: calc(100vh - 100px);\n}\n.window-wrapper.fullscreen .window-body .messages-list {\n  height: calc(100vh - 160px) !important;\n}\n.window-wrapper.fullscreen .window-body .messages-list.has-files {\n  height: calc(100vh - 180px) !important;\n}\n.window-wrapper.fullscreen .message-modal {\n  left: 0;\n  right: 0;\n  top: 60px;\n  bottom: 40px;\n}\n\n.window-header {\n  height: var(--window-header-height);\n  background-color: var(--header-bg-color);\n  color: var(--header-color);\n  font-size: var(--font-size);\n  font-family: var(--font-family);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 5px;\n}\n.window-header .name {\n  display: flex;\n  align-items: center;\n}\n.window-header .name .logo-img {\n  width: auto;\n  height: 40px;\n}\n.window-header .name .title {\n  margin: 0 5px;\n}\n.window-header .action-btn {\n  font-size: 14px;\n  cursor: pointer;\n  margin: 6px;\n  display: inline-block;\n}\n\n.window-body {\n  font-size: 1rem;\n  height: var(--window-body-height);\n  background-color: var(--window-body-bg-color);\n  color: var(--window-body-color);\n  position: relative;\n}\n.window-body base {\n  display: block;\n}\n.window-body .centered-content {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.window-body .start-btn {\n  background-color: var(--start-btn-bg);\n  color: var(--start-btn-color);\n  border: none;\n  box-shadow: none;\n  min-width: 150px;\n  min-height: 35px;\n  font-size: 20px;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n}\n.window-body .messages-list {\n  height: 440px !important;\n  overflow: auto;\n  position: relative;\n}\n.window-body .messages-list.has-files {\n  height: 420px !important;\n}\n.window-body .unread-messages {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 5px;\n  margin: 0 auto;\n  width: 150px;\n  text-align: center;\n  background: white;\n  color: black;\n  padding: 5px;\n  border-radius: 10px;\n  animation-duration: 0.5s;\n  animation-name: fly-in;\n  cursor: pointer;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.window-body .file-list {\n  padding: 0 10px;\n  font-size: 13px;\n  height: 20px;\n  display: flex;\n}\n.window-body .file-list .file-item {\n  display: inline-flex;\n  align-items: center;\n  margin-right: 8px;\n}\n.window-body .file-list .file-item .file-name {\n  color: var(--file-name-color);\n  margin: 0 3px;\n}\n.window-body .file-list .file-item .delete-file {\n  font-size: 8px;\n  cursor: pointer;\n}\n.window-body .type-message {\n  height: 50px;\n  position: relative;\n  padding: 5px;\n}\n.window-body .type-message.disabled {\n  opacity: 0.5;\n}\n.window-body .type-message.disabled .send-btn {\n  cursor: default;\n}\n.window-body .type-message.has-load-btn textarea {\n  width: calc(100% - 135px);\n  padding: 10px 80px 10px 55px;\n}\n.window-body .type-message textarea {\n  line-height: normal;\n  box-sizing: content-box;\n  color: var(--textarea-color);\n  background-color: var(--textarea-bg-color);\n  font-size: var(--font-size);\n  font-family: var(--font-family);\n  width: calc(100% - 105px);\n  height: 30px;\n  border: none;\n  padding: 10px 50px 10px 55px;\n  position: relative;\n  outline: none;\n  overflow: hidden;\n  resize: none;\n  border-radius: 10px;\n}\n.window-body .type-message textarea::placeholder {\n  color: var(--textarea-placeholder-color);\n  font-size: var(--font-size);\n  font-family: var(--font-family);\n}\n.window-body .type-message .load-btn,\n.window-body .type-message .send-btn {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 10px;\n  width: 40px;\n  height: 40px;\n  border: none;\n}\n.window-body .type-message .load-btn, .window-body .type-message .load-btn:focus, .window-body .type-message .load-btn::-moz-focus-inner,\n.window-body .type-message .send-btn,\n.window-body .type-message .send-btn:focus,\n.window-body .type-message .send-btn::-moz-focus-inner {\n  border: none;\n  outline: none !important;\n}\n.window-body .type-message .load-btn {\n  right: 50px;\n  font-size: 18px;\n}\n.window-body .type-message .load-btn label {\n  cursor: pointer;\n  font-size: 18px;\n}\n.window-body .type-message .send-btn {\n  color: var(--send-btn-color);\n  background-color: var(--send-btn-bg-color);\n  outline: none;\n  right: 10px;\n  border-radius: 10px;\n  cursor: pointer;\n  font-size: 20px;\n}\n.window-body .type-message .menu-btn {\n  color: var(--window-body-color);\n  left: 10px;\n  z-index: 5;\n  background-color: transparent;\n  cursor: pointer;\n}\n.window-body .type-message .menu-btn .badge {\n  height: 12px;\n  min-width: 12px;\n  background-color: var(--menu-badge-color);\n  color: var(--menu-badge-text-color);\n  border-radius: 6px;\n  position: absolute;\n  padding: 0;\n  top: 5px;\n  left: 25px;\n  font-size: 0;\n  line-height: 10px;\n  white-space: nowrap;\n}\n.window-body .type-message .menu-btn:hover .badge {\n  font-size: 10px;\n  padding: 0 5px;\n}\n\n.window-footer {\n  height: var(--window-footer-height);\n  background-color: var(--footer-bg-color);\n  color: var(--footer-color);\n  font-size: var(--font-size);\n  font-family: var(--font-family);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 10px;\n}\n.window-footer a {\n  color: var(--footer-color);\n  text-decoration: none;\n}\n\n.context-menu {\n  background: var(--menu-bg-color);\n  position: absolute;\n  bottom: 55px;\n  width: 210px;\n  border-radius: 4px;\n  margin: 5px;\n}\n.context-menu ul {\n  padding: 10px;\n  margin: 0;\n}\n.context-menu ul li {\n  cursor: pointer;\n  list-style-type: none;\n}\n.context-menu ul li, .context-menu ul li a {\n  color: var(--menu-color);\n  text-decoration: none;\n}\n.context-menu ul li i {\n  margin-right: 10px;\n  margin-left: 10px;\n  font-size: 14px;\n  vertical-align: middle;\n  display: inline-block;\n}\n\n.tc {\n  max-width: calc(100vw - 125px);\n  white-space: nowrap;\n  overflow-x: hidden;\n  margin: 10px 10px 4px 10px;\n}\n.tc .tc__right,\n.tc .tc__left {\n  z-index: 99999;\n  position: absolute;\n  top: 46%;\n  color: #ffffff;\n  cursor: pointer;\n  font-size: 18px;\n}\n.tc .tc__left {\n  left: 2px;\n}\n.tc .tc__right {\n  right: 2px;\n}\n.tc .tc__cards {\n  position: relative !important;\n  padding-bottom: 6px;\n}\n.tc .tc__cards__card {\n  border-radius: 4px;\n  background: #fff;\n  overflow: hidden;\n  margin-right: 8px;\n  width: 200px;\n  height: 300px;\n  display: inline-block;\n  white-space: normal;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\n}\n.tc .tc__cards__card:first-of-type {\n  border-radius: 15px 4px 4px 15px;\n}\n.tc .tc__cards__card:last-of-type {\n  border-radius: 4px 15px 15px 4px;\n  margin-right: 0;\n}\n.tc .tc__cards__card.hasImg .tc__cards__card__textBlock {\n  height: 50%;\n}\n.tc .tc__cards__card.small {\n  height: auto;\n}\n.tc .tc__cards__card__imgBlock {\n  height: 50%;\n  width: 100%;\n}\n.tc .tc__cards__card__imgBlock__img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.tc .tc__cards__card__textBlock {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n.tc .tc__cards__card__textBlock__title {\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  margin: 10px 10px 0;\n}\n.tc .tc__cards__card__textBlock__subtitle {\n  font-size: 12px;\n  line-height: 1;\n  color: #000;\n  height: 100%;\n  overflow: auto;\n  margin: 10px;\n}\n.tc .tc__cards__card__textBlock__btns {\n  text-align: center;\n  margin: 0 10px 5px;\n}\n.tc .tc__cards__card__textBlock__btns__btn {\n  font-size: 13px;\n  color: #34a7fc;\n  font-weight: bold;\n  text-transform: uppercase;\n  cursor: pointer;\n  margin: 1px 5px;\n  display: inline-block;\n}\n\n.message-modal {\n  position: fixed;\n  left: 10px;\n  right: 10px;\n  top: 70px;\n  bottom: 50px;\n  z-index: 50;\n  background-color: white;\n}\n.message-modal iframe {\n  width: 100%;\n  height: 100%;\n}\n\n.message-block {\n  display: flex;\n  margin: 10px 0;\n}\n.message-block .image-block {\n  width: 44px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.message-block .image-block .image {\n  width: 34px;\n  height: 34px;\n  object-fit: cover;\n  border-radius: 50%;\n}\n.message-block .messages {\n  width: 100%;\n}\n.message-block .messages .message-item {\n  display: flex;\n  align-items: center;\n  animation-duration: 0.5s;\n  animation-name: fly-in;\n}\n.message-block .messages .message-item .message {\n  margin: 0 10px;\n  padding: 12px;\n  border-radius: 10px;\n  min-height: 16px;\n  min-width: 20px;\n  word-break: break-word;\n  position: relative;\n}\n.message-block .messages .message-item .message p {\n  margin: 0;\n}\n.message-block .messages .message-item .message ul,\n.message-block .messages .message-item .message ol {\n  margin: 0;\n  padding: 5px 0 5px 15px;\n}\n.message-block .messages .message-item .message table,\n.message-block .messages .message-item .message .table {\n  margin: 0;\n}\n.message-block .messages .message-item .message video {\n  width: 100%;\n  height: auto;\n}\n.message-block .messages .message-item .message iframe {\n  width: 100%;\n}\n.message-block .messages .message-item .message .file {\n  text-decoration: none;\n  color: inherit;\n}\n.message-block .messages .message-item .message .file .icon-file-image-solid {\n  font-size: 20px;\n  margin-right: 5px;\n}\n.message-block .messages .message-item .message .message-img-wrapper, .message-block .messages .message-item .message .chat-message-video-wrapper {\n  max-width: 200px;\n}\n.message-block .messages .message-item .message .btn {\n  border-radius: 10px;\n  padding: 7px 10px;\n  margin: 5px 5px 0 0;\n  cursor: pointer;\n  display: inline-block;\n  border: none;\n  box-shadow: none;\n  outline: none;\n}\n.message-block.income .image-block {\n  background: var(--message-income-bg-color);\n  border-radius: 0 50% 50% 0;\n}\n.message-block.income .message {\n  background-color: var(--message-income-bg-color);\n  color: var(--message-income-color);\n  font-size: var(--font-size);\n  font-family: var(--font-family);\n}\n.message-block.income .message .btn {\n  background: var(--message-income-btn-bg-color);\n  color: var(--message-income-btn-color);\n  font-size: var(--font-size);\n  font-family: var(--font-family);\n}\n.message-block.outcome {\n  flex-direction: row-reverse;\n}\n.message-block.outcome .message-item {\n  justify-content: flex-end;\n  margin-left: 40px;\n}\n.message-block.outcome .message-item .message {\n  background-color: var(--message-outcome-bg-color);\n  color: var(--message-outcome-color);\n  font-size: var(--font-size);\n  font-family: var(--font-family);\n}\n\n.scroll-thumb-vertical {\n  background: var(--window-body-bg-color);\n  filter: invert(1);\n  opacity: 0.5;\n}\n\n.scroll-track-vertical {\n  right: 2px;\n  bottom: 2px;\n  top: 2px;\n  border-radius: 3px;\n}\n\n.scroll-thumb-horizontal {\n  background: var(--window-body-bg-color);\n  filter: invert(1);\n  opacity: 0.5;\n}\n\n.scroll-track-horizontal {\n  position: absolute;\n  height: 6px;\n  right: 2px;\n  bottom: 2px;\n  left: 2px;\n  border-radius: 3px;\n}\n\n.rtl {\n  direction: rtl;\n}\n.rtl .scroll-view {\n  margin-right: 0 !important;\n  margin-left: -15px;\n}\n.rtl .scroll-track-vertical {\n  right: unset;\n  left: 2px;\n}\n.rtl .message-block.income .image-block {\n  border-radius: 50% 0 0 50%;\n}\n.rtl .message-block.outcome .message-item {\n  margin-left: 0;\n  margin-right: 40px;\n}\n.rtl .window-body .type-message .menu-btn {\n  right: 10px;\n}\n.rtl .window-body .type-message .send-btn {\n  right: unset;\n  left: 10px;\n}\n.rtl .tc .tc__cards {\n  overflow: auto !important;\n}\n.rtl .tc .tc__cards__card:first-of-type {\n  border-radius: 4px 15px 15px 4px;\n  margin-right: 20px;\n}\n.rtl .tc .tc__cards__card:last-of-type {\n  border-radius: 15px 4px 4px 15px;\n  margin-right: 8px;\n}\n\n.speech-bubble-wrapper {\n  width: var(--bubble-size);\n  height: var(--bubble-size);\n  border: 1px solid var(--bubble-color);\n  background: var(--bubble-bg-color);\n  border-radius: 50%;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  float: var(--window-position);\n  margin: 20px;\n  z-index: 1;\n}\n.speech-bubble-wrapper .speech-bubble-icon {\n  font-size: calc(var(--bubble-size) / 2);\n  color: var(--bubble-color);\n}\n\n.writing {\n  position: relative;\n  text-align: center;\n  margin: 0 auto;\n  width: 60px;\n}\n.writing .dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 10px;\n  background: #fff;\n}\n.writing .dot:first-of-type {\n  position: absolute;\n  top: 2px;\n  animation: dot-shuttle 2.5s infinite ease;\n}\n\n/* Animations */\n@keyframes fly-in {\n  0% {\n    transform: scale(0) translateY(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1) translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes play {\n  0% {\n    transform: scale(1);\n  }\n  15% {\n    box-shadow: 0 0 0 4px var(--bubble-rgb-color);\n  }\n  25% {\n    box-shadow: 0 0 0 4px var(--bubble-rgb-color), 0 0 0 8px var(--bubble-rgb-color);\n  }\n  30% {\n    transform: scale(1.2);\n  }\n  50% {\n    box-shadow: 0 0 0 4px var(--bubble-rgb-color), 0 0 0 8px var(--bubble-rgb-color), 0 0 0 12px var(--bubble-rgb-color);\n  }\n  80% {\n    transform: scale(1);\n  }\n}\n@keyframes dot-shuttle {\n  0%, 25%, 50%, 75%, 100% {\n    width: 15px;\n    height: 15px;\n    top: -2px;\n    left: -2px;\n  }\n  5%, 30%, 55%, 80% {\n    width: 10px;\n    height: 10px;\n    top: 2px;\n  }\n  0% {\n    transform: translateX(0);\n  }\n  25% {\n    transform: translateX(20px);\n  }\n  50% {\n    transform: translateX(40px);\n  }\n  75% {\n    transform: translateX(20px);\n  }\n  100% {\n    transform: translateX(0);\n  }\n}", ""]);

// exports


/***/ }),

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

/***/ "./resources/js/components/widgets/faIcons/FaIcon.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/widgets/faIcons/FaIcon.js ***!
  \***********************************************************/
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




function FaIcon(_ref) {
  var namespace = _ref.namespace,
      icon = _ref.icon,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("".concat(namespace, " fa-").concat(icon), className)
  });
}

FaIcon.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  namespace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FaIcon));

/***/ }),

/***/ "./resources/js/components/widgets/faIcons/allFaIcons.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/widgets/faIcons/allFaIcons.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var allFaIcons = {
  fas: ["ad", "address-book", "address-card", "adjust", "air-freshener", "align-center", "align-justify", "align-left", "align-right", "allergies", "ambulance", "american-sign-language-interpreting", "anchor", "angle-double-down", "angle-double-left", "angle-double-right", "angle-double-up", "angle-down", "angle-left", "angle-right", "angle-up", "angry", "ankh", "apple-alt", "archive", "archway", "arrow-alt-circle-down", "arrow-alt-circle-left", "arrow-alt-circle-right", "arrow-alt-circle-up", "arrow-circle-down", "arrow-circle-left", "arrow-circle-right", "arrow-circle-up", "arrow-down", "arrow-left", "arrow-right", "arrow-up", "arrows-alt", "arrows-alt-h", "arrows-alt-v", "assistive-listening-systems", "asterisk", "at", "atlas", "atom", "audio-description", "award", "baby", "baby-carriage", "backspace", "backward", "bacon", "bacteria", "bacterium", "bahai", "balance-scale", "balance-scale-left", "balance-scale-right", "ban", "band-aid", "barcode", "bars", "baseball-ball", "basketball-ball", "bath", "battery-empty", "battery-full", "battery-half", "battery-quarter", "battery-three-quarters", "bed", "beer", "bell", "bell-slash", "bezier-curve", "bible", "bicycle", "biking", "binoculars", "biohazard", "birthday-cake", "blender", "blender-phone", "blind", "blog", "bold", "bolt", "bomb", "bone", "bong", "book", "book-dead", "book-medical", "book-open", "book-reader", "bookmark", "border-all", "border-none", "border-style", "bowling-ball", "box", "box-open", "box-tissue", "boxes", "braille", "brain", "bread-slice", "briefcase", "briefcase-medical", "broadcast-tower", "broom", "brush", "bug", "building", "bullhorn", "bullseye", "burn", "bus", "bus-alt", "business-time", "calculator", "calendar", "calendar-alt", "calendar-check", "calendar-day", "calendar-minus", "calendar-plus", "calendar-times", "calendar-week", "camera", "camera-retro", "campground", "candy-cane", "cannabis", "capsules", "car", "car-alt", "car-battery", "car-crash", "car-side", "caravan", "caret-down", "caret-left", "caret-right", "caret-square-down", "caret-square-left", "caret-square-right", "caret-square-up", "caret-up", "carrot", "cart-arrow-down", "cart-plus", "cash-register", "cat", "certificate", "chair", "chalkboard", "chalkboard-teacher", "charging-station", "chart-area", "chart-bar", "chart-line", "chart-pie", "check", "check-circle", "check-double", "check-square", "cheese", "chess", "chess-bishop", "chess-board", "chess-king", "chess-knight", "chess-pawn", "chess-queen", "chess-rook", "chevron-circle-down", "chevron-circle-left", "chevron-circle-right", "chevron-circle-up", "chevron-down", "chevron-left", "chevron-right", "chevron-up", "child", "church", "circle", "circle-notch", "city", "clinic-medical", "clipboard", "clipboard-check", "clipboard-list", "clock", "clone", "closed-captioning", "cloud", "cloud-download-alt", "cloud-meatball", "cloud-moon", "cloud-moon-rain", "cloud-rain", "cloud-showers-heavy", "cloud-sun", "cloud-sun-rain", "cloud-upload-alt", "cocktail", "code", "code-branch", "coffee", "cog", "cogs", "coins", "columns", "comment", "comment-alt", "comment-dollar", "comment-dots", "comment-medical", "comment-slash", "comments", "comments-dollar", "compact-disc", "compass", "compress", "compress-alt", "compress-arrows-alt", "concierge-bell", "cookie", "cookie-bite", "copy", "copyright", "couch", "credit-card", "crop", "crop-alt", "cross", "crosshairs", "crow", "crown", "crutch", "cube", "cubes", "cut", "database", "deaf", "democrat", "desktop", "dharmachakra", "diagnoses", "dice", "dice-d20", "dice-d6", "dice-five", "dice-four", "dice-one", "dice-six", "dice-three", "dice-two", "digital-tachograph", "directions", "disease", "divide", "dizzy", "dna", "dog", "dollar-sign", "dolly", "dolly-flatbed", "donate", "door-closed", "door-open", "dot-circle", "dove", "download", "drafting-compass", "dragon", "draw-polygon", "drum", "drum-steelpan", "drumstick-bite", "dumbbell", "dumpster", "dumpster-fire", "dungeon", "edit", "egg", "eject", "ellipsis-h", "ellipsis-v", "envelope", "envelope-open", "envelope-open-text", "envelope-square", "equals", "eraser", "ethernet", "euro-sign", "exchange-alt", "exclamation", "exclamation-circle", "exclamation-triangle", "expand", "expand-alt", "expand-arrows-alt", "external-link-alt", "external-link-square-alt", "eye", "eye-dropper", "eye-slash", "fan", "fast-backward", "fast-forward", "faucet", "fax", "feather", "feather-alt", "female", "fighter-jet", "file", "file-alt", "file-archive", "file-audio", "file-code", "file-contract", "file-csv", "file-download", "file-excel", "file-export", "file-image", "file-import", "file-invoice", "file-invoice-dollar", "file-medical", "file-medical-alt", "file-pdf", "file-powerpoint", "file-prescription", "file-signature", "file-upload", "file-video", "file-word", "fill", "fill-drip", "film", "filter", "fingerprint", "fire", "fire-alt", "fire-extinguisher", "first-aid", "fish", "fist-raised", "flag", "flag-checkered", "flag-usa", "flask", "flushed", "folder", "folder-minus", "folder-open", "folder-plus", "font", "football-ball", "forward", "frog", "frown", "frown-open", "funnel-dollar", "futbol", "gamepad", "gas-pump", "gavel", "gem", "genderless", "ghost", "gift", "gifts", "glass-cheers", "glass-martini", "glass-martini-alt", "glass-whiskey", "glasses", "globe", "globe-africa", "globe-americas", "globe-asia", "globe-europe", "golf-ball", "gopuram", "graduation-cap", "greater-than", "greater-than-equal", "grimace", "grin", "grin-alt", "grin-beam", "grin-beam-sweat", "grin-hearts", "grin-squint", "grin-squint-tears", "grin-stars", "grin-tears", "grin-tongue", "grin-tongue-squint", "grin-tongue-wink", "grin-wink", "grip-horizontal", "grip-lines", "grip-lines-vertical", "grip-vertical", "guitar", "h-square", "hamburger", "hammer", "hamsa", "hand-holding", "hand-holding-heart", "hand-holding-medical", "hand-holding-usd", "hand-holding-water", "hand-lizard", "hand-middle-finger", "hand-paper", "hand-peace", "hand-point-down", "hand-point-left", "hand-point-right", "hand-point-up", "hand-pointer", "hand-rock", "hand-scissors", "hand-sparkles", "hand-spock", "hands", "hands-helping", "hands-wash", "handshake", "handshake-alt-slash", "handshake-slash", "hanukiah", "hard-hat", "hashtag", "hat-cowboy", "hat-cowboy-side", "hat-wizard", "hdd", "head-side-cough", "head-side-cough-slash", "head-side-mask", "head-side-virus", "heading", "headphones", "headphones-alt", "headset", "heart", "heart-broken", "heartbeat", "helicopter", "highlighter", "hiking", "hippo", "history", "hockey-puck", "holly-berry", "home", "horse", "horse-head", "hospital", "hospital-alt", "hospital-symbol", "hospital-user", "hot-tub", "hotdog", "hotel", "hourglass", "hourglass-end", "hourglass-half", "hourglass-start", "house-damage", "house-user", "hryvnia", "i-cursor", "ice-cream", "icicles", "icons", "id-badge", "id-card", "id-card-alt", "igloo", "image", "images", "inbox", "indent", "industry", "infinity", "info", "info-circle", "italic", "jedi", "joint", "journal-whills", "kaaba", "key", "keyboard", "khanda", "kiss", "kiss-beam", "kiss-wink-heart", "kiwi-bird", "landmark", "language", "laptop", "laptop-code", "laptop-house", "laptop-medical", "laugh", "laugh-beam", "laugh-squint", "laugh-wink", "layer-group", "leaf", "lemon", "less-than", "less-than-equal", "level-down-alt", "level-up-alt", "life-ring", "lightbulb", "link", "lira-sign", "list", "list-alt", "list-ol", "list-ul", "location-arrow", "lock", "lock-open", "long-arrow-alt-down", "long-arrow-alt-left", "long-arrow-alt-right", "long-arrow-alt-up", "low-vision", "luggage-cart", "lungs", "lungs-virus", "magic", "magnet", "mail-bulk", "male", "map", "map-marked", "map-marked-alt", "map-marker", "map-marker-alt", "map-pin", "map-signs", "marker", "mars", "mars-double", "mars-stroke", "mars-stroke-h", "mars-stroke-v", "mask", "medal", "medkit", "meh", "meh-blank", "meh-rolling-eyes", "memory", "menorah", "mercury", "meteor", "microchip", "microphone", "microphone-alt", "microphone-alt-slash", "microphone-slash", "microscope", "minus", "minus-circle", "minus-square", "mitten", "mobile", "mobile-alt", "money-bill", "money-bill-alt", "money-bill-wave", "money-bill-wave-alt", "money-check", "money-check-alt", "monument", "moon", "mortar-pestle", "mosque", "motorcycle", "mountain", "mouse", "mouse-pointer", "mug-hot", "music", "network-wired", "neuter", "newspaper", "not-equal", "notes-medical", "object-group", "object-ungroup", "oil-can", "om", "otter", "outdent", "pager", "paint-brush", "paint-roller", "palette", "pallet", "paper-plane", "paperclip", "parachute-box", "paragraph", "parking", "passport", "pastafarianism", "paste", "pause", "pause-circle", "paw", "peace", "pen", "pen-alt", "pen-fancy", "pen-nib", "pen-square", "pencil-alt", "pencil-ruler", "people-arrows", "people-carry", "pepper-hot", "percent", "percentage", "person-booth", "phone", "phone-alt", "phone-slash", "phone-square", "phone-square-alt", "phone-volume", "photo-video", "piggy-bank", "pills", "pizza-slice", "place-of-worship", "plane", "plane-arrival", "plane-departure", "plane-slash", "play", "play-circle", "plug", "plus", "plus-circle", "plus-square", "podcast", "poll", "poll-h", "poo", "poo-storm", "poop", "portrait", "pound-sign", "power-off", "pray", "praying-hands", "prescription", "prescription-bottle", "prescription-bottle-alt", "print", "procedures", "project-diagram", "pump-medical", "pump-soap", "puzzle-piece", "qrcode", "question", "question-circle", "quidditch", "quote-left", "quote-right", "quran", "radiation", "radiation-alt", "rainbow", "random", "receipt", "record-vinyl", "recycle", "redo", "redo-alt", "registered", "remove-format", "reply", "reply-all", "republican", "restroom", "retweet", "ribbon", "ring", "road", "robot", "rocket", "route", "rss", "rss-square", "ruble-sign", "ruler", "ruler-combined", "ruler-horizontal", "ruler-vertical", "running", "rupee-sign", "sad-cry", "sad-tear", "satellite", "satellite-dish", "save", "school", "screwdriver", "scroll", "sd-card", "search", "search-dollar", "search-location", "search-minus", "search-plus", "seedling", "server", "shapes", "share", "share-alt", "share-alt-square", "share-square", "shekel-sign", "shield-alt", "shield-virus", "ship", "shipping-fast", "shoe-prints", "shopping-bag", "shopping-basket", "shopping-cart", "shower", "shuttle-van", "sign", "sign-in-alt", "sign-language", "sign-out-alt", "signal", "signature", "sim-card", "sink", "sitemap", "skating", "skiing", "skiing-nordic", "skull", "skull-crossbones", "slash", "sleigh", "sliders-h", "smile", "smile-beam", "smile-wink", "smog", "smoking", "smoking-ban", "sms", "snowboarding", "snowflake", "snowman", "snowplow", "soap", "socks", "solar-panel", "sort", "sort-alpha-down", "sort-alpha-down-alt", "sort-alpha-up", "sort-alpha-up-alt", "sort-amount-down", "sort-amount-down-alt", "sort-amount-up", "sort-amount-up-alt", "sort-down", "sort-numeric-down", "sort-numeric-down-alt", "sort-numeric-up", "sort-numeric-up-alt", "sort-up", "spa", "space-shuttle", "spell-check", "spider", "spinner", "splotch", "spray-can", "square", "square-full", "square-root-alt", "stamp", "star", "star-and-crescent", "star-half", "star-half-alt", "star-of-david", "star-of-life", "step-backward", "step-forward", "stethoscope", "sticky-note", "stop", "stop-circle", "stopwatch", "stopwatch-20", "store", "store-alt", "store-alt-slash", "store-slash", "stream", "street-view", "strikethrough", "stroopwafel", "subscript", "subway", "suitcase", "suitcase-rolling", "sun", "superscript", "surprise", "swatchbook", "swimmer", "swimming-pool", "synagogue", "sync", "sync-alt", "syringe", "table", "table-tennis", "tablet", "tablet-alt", "tablets", "tachometer-alt", "tag", "tags", "tape", "tasks", "taxi", "teeth", "teeth-open", "temperature-high", "temperature-low", "tenge", "terminal", "text-height", "text-width", "th", "th-large", "th-list", "theater-masks", "thermometer", "thermometer-empty", "thermometer-full", "thermometer-half", "thermometer-quarter", "thermometer-three-quarters", "thumbs-down", "thumbs-up", "thumbtack", "ticket-alt", "times", "times-circle", "tint", "tint-slash", "tired", "toggle-off", "toggle-on", "toilet", "toilet-paper", "toilet-paper-slash", "toolbox", "tools", "tooth", "torah", "torii-gate", "tractor", "trademark", "traffic-light", "trailer", "train", "tram", "transgender", "transgender-alt", "trash", "trash-alt", "trash-restore", "trash-restore-alt", "tree", "trophy", "truck", "truck-loading", "truck-monster", "truck-moving", "truck-pickup", "tshirt", "tty", "tv", "umbrella", "umbrella-beach", "underline", "undo", "undo-alt", "universal-access", "university", "unlink", "unlock", "unlock-alt", "upload", "user", "user-alt", "user-alt-slash", "user-astronaut", "user-check", "user-circle", "user-clock", "user-cog", "user-edit", "user-friends", "user-graduate", "user-injured", "user-lock", "user-md", "user-minus", "user-ninja", "user-nurse", "user-plus", "user-secret", "user-shield", "user-slash", "user-tag", "user-tie", "user-times", "users", "users-cog", "users-slash", "utensil-spoon", "utensils", "vector-square", "venus", "venus-double", "venus-mars", "vest", "vest-patches", "vial", "vials", "video", "video-slash", "vihara", "virus", "virus-slash", "viruses", "voicemail", "volleyball-ball", "volume-down", "volume-mute", "volume-off", "volume-up", "vote-yea", "vr-cardboard", "walking", "wallet", "warehouse", "water", "wave-square", "weight", "weight-hanging", "wheelchair", "wifi", "wind", "window-close", "window-maximize", "window-minimize", "window-restore", "wine-bottle", "wine-glass", "wine-glass-alt", "won-sign", "wrench", "x-ray", "yen-sign", "yin-yang"],
  far: ["address-book", "address-card", "angry", "arrow-alt-circle-down", "arrow-alt-circle-left", "arrow-alt-circle-right", "arrow-alt-circle-up", "bell", "bell-slash", "bookmark", "building", "calendar", "calendar-alt", "calendar-check", "calendar-minus", "calendar-plus", "calendar-times", "caret-square-down", "caret-square-left", "caret-square-right", "caret-square-up", "chart-bar", "check-circle", "check-square", "circle", "clipboard", "clock", "clone", "closed-captioning", "comment", "comment-alt", "comment-dots", "comments", "compass", "copy", "copyright", "credit-card", "dizzy", "dot-circle", "edit", "envelope", "envelope-open", "eye", "eye-slash", "file", "file-alt", "file-archive", "file-audio", "file-code", "file-excel", "file-image", "file-pdf", "file-powerpoint", "file-video", "file-word", "flag", "flushed", "folder", "folder-open", "frown", "frown-open", "futbol", "gem", "grimace", "grin", "grin-alt", "grin-beam", "grin-beam-sweat", "grin-hearts", "grin-squint", "grin-squint-tears", "grin-stars", "grin-tears", "grin-tongue", "grin-tongue-squint", "grin-tongue-wink", "grin-wink", "hand-lizard", "hand-paper", "hand-peace", "hand-point-down", "hand-point-left", "hand-point-right", "hand-point-up", "hand-pointer", "hand-rock", "hand-scissors", "hand-spock", "handshake", "hdd", "heart", "hospital", "hourglass", "id-badge", "id-card", "image", "images", "keyboard", "kiss", "kiss-beam", "kiss-wink-heart", "laugh", "laugh-beam", "laugh-squint", "laugh-wink", "lemon", "life-ring", "lightbulb", "list-alt", "map", "meh", "meh-blank", "meh-rolling-eyes", "minus-square", "money-bill-alt", "moon", "newspaper", "object-group", "object-ungroup", "paper-plane", "pause-circle", "play-circle", "plus-square", "question-circle", "registered", "sad-cry", "sad-tear", "save", "share-square", "smile", "smile-beam", "smile-wink", "snowflake", "square", "star", "star-half", "sticky-note", "stop-circle", "sun", "surprise", "thumbs-down", "thumbs-up", "times-circle", "tired", "trash-alt", "user", "user-circle", "window-close", "window-maximize", "window-minimize", "window-restore"],
  fab: ["500px", "accessible-icon", "accusoft", "acquisitions-incorporated", "adn", "adversal", "affiliatetheme", "airbnb", "algolia", "alipay", "amazon", "amazon-pay", "amilia", "android", "angellist", "angrycreative", "angular", "app-store", "app-store-ios", "apper", "apple", "apple-pay", "artstation", "asymmetrik", "atlassian", "audible", "autoprefixer", "avianex", "aviato", "aws", "bandcamp", "battle-net", "behance", "behance-square", "bimobject", "bitbucket", "bitcoin", "bity", "black-tie", "blackberry", "blogger", "blogger-b", "bluetooth", "bluetooth-b", "bootstrap", "btc", "buffer", "buromobelexperte", "buy-n-large", "buysellads", "canadian-maple-leaf", "cc-amazon-pay", "cc-amex", "cc-apple-pay", "cc-diners-club", "cc-discover", "cc-jcb", "cc-mastercard", "cc-paypal", "cc-stripe", "cc-visa", "centercode", "centos", "chrome", "chromecast", "cloudflare", "cloudscale", "cloudsmith", "cloudversify", "codepen", "codiepie", "confluence", "connectdevelop", "contao", "cotton-bureau", "cpanel", "creative-commons", "creative-commons-by", "creative-commons-nc", "creative-commons-nc-eu", "creative-commons-nc-jp", "creative-commons-nd", "creative-commons-pd", "creative-commons-pd-alt", "creative-commons-remix", "creative-commons-sa", "creative-commons-sampling", "creative-commons-sampling-plus", "creative-commons-share", "creative-commons-zero", "critical-role", "css3", "css3-alt", "cuttlefish", "d-and-d", "d-and-d-beyond", "dailymotion", "dashcube", "deezer", "delicious", "deploydog", "deskpro", "dev", "deviantart", "dhl", "diaspora", "digg", "digital-ocean", "discord", "discourse", "dochub", "docker", "draft2digital", "dribbble", "dribbble-square", "dropbox", "drupal", "dyalog", "earlybirds", "ebay", "edge", "edge-legacy", "elementor", "ello", "ember", "empire", "envira", "erlang", "ethereum", "etsy", "evernote", "expeditedssl", "facebook", "facebook-f", "facebook-messenger", "facebook-square", "fantasy-flight-games", "fedex", "fedora", "figma", "firefox", "firefox-browser", "first-order", "first-order-alt", "firstdraft", "flickr", "flipboard", "fly", "font-awesome", "font-awesome-alt", "font-awesome-flag", "fonticons", "fonticons-fi", "fort-awesome", "fort-awesome-alt", "forumbee", "foursquare", "free-code-camp", "freebsd", "fulcrum", "galactic-republic", "galactic-senate", "get-pocket", "gg", "gg-circle", "git", "git-alt", "git-square", "github", "github-alt", "github-square", "gitkraken", "gitlab", "gitter", "glide", "glide-g", "gofore", "goodreads", "goodreads-g", "google", "google-drive", "google-pay", "google-play", "google-plus", "google-plus-g", "google-plus-square", "google-wallet", "gratipay", "grav", "gripfire", "grunt", "guilded", "gulp", "hacker-news", "hacker-news-square", "hackerrank", "hips", "hire-a-helper", "hive", "hooli", "hornbill", "hotjar", "houzz", "html5", "hubspot", "ideal", "imdb", "innosoft", "instagram", "instagram-square", "instalod", "intercom", "internet-explorer", "invision", "ioxhost", "itch-io", "itunes", "itunes-note", "java", "jedi-order", "jenkins", "jira", "joget", "joomla", "js", "js-square", "jsfiddle", "kaggle", "keybase", "keycdn", "kickstarter", "kickstarter-k", "korvue", "laravel", "lastfm", "lastfm-square", "leanpub", "less", "line", "linkedin", "linkedin-in", "linode", "linux", "lyft", "magento", "mailchimp", "mandalorian", "markdown", "mastodon", "maxcdn", "mdb", "medapps", "medium", "medium-m", "medrt", "meetup", "megaport", "mendeley", "microblog", "microsoft", "mix", "mixcloud", "mixer", "mizuni", "modx", "monero", "napster", "neos", "nimblr", "node", "node-js", "npm", "ns8", "nutritionix", "octopus-deploy", "odnoklassniki", "odnoklassniki-square", "old-republic", "opencart", "openid", "opera", "optin-monster", "orcid", "osi", "page4", "pagelines", "palfed", "patreon", "paypal", "penny-arcade", "perbyte", "periscope", "phabricator", "phoenix-framework", "phoenix-squadron", "php", "pied-piper", "pied-piper-alt", "pied-piper-hat", "pied-piper-pp", "pied-piper-square", "pinterest", "pinterest-p", "pinterest-square", "playstation", "product-hunt", "pushed", "python", "qq", "quinscape", "quora", "r-project", "raspberry-pi", "ravelry", "react", "reacteurope", "readme", "rebel", "red-river", "reddit", "reddit-alien", "reddit-square", "redhat", "renren", "replyd", "researchgate", "resolving", "rev", "rocketchat", "rockrms", "rust", "safari", "salesforce", "sass", "schlix", "scribd", "searchengin", "sellcast", "sellsy", "servicestack", "shirtsinbulk", "shopify", "shopware", "simplybuilt", "sistrix", "sith", "sketch", "skyatlas", "skype", "slack", "slack-hash", "slideshare", "snapchat", "snapchat-ghost", "snapchat-square", "soundcloud", "sourcetree", "speakap", "speaker-deck", "spotify", "squarespace", "stack-exchange", "stack-overflow", "stackpath", "staylinked", "steam", "steam-square", "steam-symbol", "sticker-mule", "strava", "stripe", "stripe-s", "studiovinari", "stumbleupon", "stumbleupon-circle", "superpowers", "supple", "suse", "swift", "symfony", "teamspeak", "telegram", "telegram-plane", "tencent-weibo", "the-red-yeti", "themeco", "themeisle", "think-peaks", "tiktok", "trade-federation", "trello", "tripadvisor", "tumblr", "tumblr-square", "twitch", "twitter", "twitter-square", "typo3", "uber", "ubuntu", "uikit", "umbraco", "uncharted", "uniregistry", "unity", "unsplash", "untappd", "ups", "usb", "usps", "ussunnah", "vaadin", "viacoin", "viadeo", "viadeo-square", "viber", "vimeo", "vimeo-square", "vimeo-v", "vine", "vk", "vnv", "vuejs", "watchman-monitoring", "waze", "weebly", "weibo", "weixin", "whatsapp", "whatsapp-square", "whmcs", "wikipedia-w", "windows", "wix", "wizards-of-the-coast", "wodu", "wolf-pack-battalion", "wordpress", "wordpress-simple", "wpbeginner", "wpexplorer", "wpforms", "wpressr", "xbox", "xing", "xing-square", "y-combinator", "yahoo", "yammer", "yandex", "yandex-international", "yarn", "yelp", "yoast", "youtube", "youtube-square", "zhihu"]
};
/* harmony default export */ __webpack_exports__["default"] = (allFaIcons);

/***/ }),

/***/ "./resources/js/components/widgets/faIcons/picker/IconsList.js":
/*!*********************************************************************!*\
  !*** ./resources/js/components/widgets/faIcons/picker/IconsList.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_widgets_faIcons_allFaIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/faIcons/allFaIcons */ "./resources/js/components/widgets/faIcons/allFaIcons.js");
/* harmony import */ var _components_widgets_faIcons_FaIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/faIcons/FaIcon */ "./resources/js/components/widgets/faIcons/FaIcon.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");






function IconsList(_ref) {
  var namespace = _ref.namespace,
      search = _ref.search,
      _onClick = _ref.onClick,
      icons = _ref.icons;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _components_widgets_faIcons_allFaIcons__WEBPACK_IMPORTED_MODULE_2__["default"][namespace].map(function (icon) {
    if (icons && !icons.includes(icon)) {
      return null;
    }

    if (search && !icon.toLowerCase().includes(search)) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-outline-secondary py-1 px-2 m-1",
      type: "button",
      key: "".concat(namespace, "-").concat(icon),
      onClick: function onClick() {
        return _onClick(Object(immutable__WEBPACK_IMPORTED_MODULE_4__["Map"])({
          namespace: namespace,
          icon: icon
        }));
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_faIcons_FaIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "icon-size-25 align-middle",
      namespace: namespace,
      icon: icon
    }));
  }));
}

IconsList.propTypes = {
  namespace: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  search: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  icons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(IconsList));

/***/ }),

/***/ "./resources/js/constants/chatboxSettingsMenuItemTypes.js":
/*!****************************************************************!*\
  !*** ./resources/js/constants/chatboxSettingsMenuItemTypes.js ***!
  \****************************************************************/
/*! exports provided: TYPE_TRIGGER, TYPE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_TRIGGER", function() { return TYPE_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TYPE_URL", function() { return TYPE_URL; });
var TYPE_TRIGGER = "trigger";
var TYPE_URL = "url";

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js":
/*!***************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js ***!
  \***************************************************************************/
/*! exports provided: TAB_BUTTON_BUBBLE_SETTINGS, TAB_HEADER_SETTINGS, TAB_CONTENT_SETTINGS, TAB_CONTENT_MAIN_SETTINGS, TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS, TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS, TAB_CONTENT_USER_MESSAGE_SETTINGS, TAB_CONTENT_USER_INPUT_SETTINGS, TAB_CONTENT_USER_SEND_BUTTON_SETTINGS, TAB_FOOTER_SETTINGS, TAB_MENU_SETTINGS, TAB_GLOBAL_SETTINGS, COLORS_LIST, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_BUTTON_BUBBLE_SETTINGS", function() { return TAB_BUTTON_BUBBLE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_HEADER_SETTINGS", function() { return TAB_HEADER_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_SETTINGS", function() { return TAB_CONTENT_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_MAIN_SETTINGS", function() { return TAB_CONTENT_MAIN_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS", function() { return TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS", function() { return TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_USER_MESSAGE_SETTINGS", function() { return TAB_CONTENT_USER_MESSAGE_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_USER_INPUT_SETTINGS", function() { return TAB_CONTENT_USER_INPUT_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_CONTENT_USER_SEND_BUTTON_SETTINGS", function() { return TAB_CONTENT_USER_SEND_BUTTON_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_FOOTER_SETTINGS", function() { return TAB_FOOTER_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_MENU_SETTINGS", function() { return TAB_MENU_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB_GLOBAL_SETTINGS", function() { return TAB_GLOBAL_SETTINGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS_LIST", function() { return COLORS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChatBoxConfigsForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_form_Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/Form */ "./resources/js/components/form/Form.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_BubbleButtonSettings_BubbleButtonSettingsContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/BubbleButtonSettings/BubbleButtonSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/BubbleButtonSettings/BubbleButtonSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_MainSettingsContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_MainSettingsTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsTab */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsTab.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_HeaderSettings_HeaderSettingsContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/HeaderSettings/HeaderSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/HeaderSettings/HeaderSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_FooterSettings_FooterSettingsContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/FooterSettings/FooterSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/FooterSettings/FooterSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MenuSettings_MenuSettingsContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_GlobalSettings_GlobalSettingsContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/GlobalSettings/GlobalSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/GlobalSettings/GlobalSettingsContent.js");
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap/es/Button */ "./node_modules/reactstrap/es/Button.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/BaseNavLink */ "./resources/js/containers/chatBoxConfigs/form/widgets/BaseNavLink.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















var TAB_BUTTON_BUBBLE_SETTINGS = "button-bubble-settings";
var TAB_HEADER_SETTINGS = "header-settings";
var TAB_CONTENT_SETTINGS = "content-settings";
var TAB_CONTENT_MAIN_SETTINGS = "content-main-settings";
var TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS = "content-chat-bot-oro-operator-settings";
var TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS = "content-bot-message-button-settings";
var TAB_CONTENT_USER_MESSAGE_SETTINGS = "content-user-message-settings";
var TAB_CONTENT_USER_INPUT_SETTINGS = "content-user-input-settings";
var TAB_CONTENT_USER_SEND_BUTTON_SETTINGS = "content-user-send-button-settings";
var TAB_FOOTER_SETTINGS = "footer-settings";
var TAB_MENU_SETTINGS = "menu-settings";
var TAB_GLOBAL_SETTINGS = "global-settings";
var COLORS_LIST = [];
function ChatBoxConfigsForm(_ref) {
  var onSubmit = _ref.onSubmit,
      initialData = _ref.initialData,
      defaultData = _ref.defaultData;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(TAB_BUTTON_BUBBLE_SETTINGS),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      activeSubTab = _useState4[0],
      setActiveSubTab = _useState4[1];

  var toggle = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (tab) {
    return setActiveTab(tab);
  }, [setActiveTab]);
  var toggleSubTab = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (tab) {
    return setActiveSubTab(tab);
  }, [setActiveSubTab]);

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_14__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_Form__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "integration-form",
    initialValues: _objectSpread({}, initialData),
    handleSubmit: onSubmit,
    renderForm: function renderForm(_ref2) {
      var handleChange = _ref2.handleChange,
          handleBlur = _ref2.handleBlur,
          values = _ref2.values,
          errors = _ref2.errors,
          isSubmitting = _ref2.isSubmitting,
          setFieldValue = _ref2.setFieldValue;
      var tabContent;

      switch (activeTab) {
        case TAB_BUTTON_BUBBLE_SETTINGS:
          tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_BubbleButtonSettings_BubbleButtonSettingsContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
            setFieldValue: setFieldValue,
            handleChange: handleChange,
            handleBlur: handleBlur,
            values: values,
            defaultValues: defaultData,
            errors: errors
          });
          break;

        case TAB_HEADER_SETTINGS:
          tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_HeaderSettings_HeaderSettingsContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            setFieldValue: setFieldValue,
            values: values,
            defaultValues: defaultData,
            errors: errors
          });
          break;

        case TAB_CONTENT_SETTINGS:
          tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_MainSettingsContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
            activeSubTab: activeSubTab,
            setFieldValue: setFieldValue,
            values: values,
            defaultValues: defaultData,
            errors: errors
          });
          break;

        case TAB_FOOTER_SETTINGS:
          tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_FooterSettings_FooterSettingsContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
            setFieldValue: setFieldValue,
            values: values,
            defaultValues: defaultData,
            errors: errors
          });
          break;

        case TAB_MENU_SETTINGS:
          tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MenuSettings_MenuSettingsContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
            setFieldValue: setFieldValue,
            values: values,
            defaultValues: defaultData,
            errors: errors
          });
          break;

        case TAB_GLOBAL_SETTINGS:
          tabContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_GlobalSettings_GlobalSettingsContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
            setFieldValue: setFieldValue,
            values: values,
            defaultValues: defaultData,
            errors: errors
          });
          break;

        default:
          tabContent = null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
        className: "limiter",
        id: "name",
        label: t("chatBoxConfigs.form.name-label"),
        placeholder: t("chatBoxConfigs.form.name-placeholder"),
        name: "name",
        value: values.name || "",
        onChange: handleChange,
        onBlur: handleBlur,
        errors: errors
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Card"], {
        className: "mt-3 mb-5 shadow"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["CardBody"], {
        className: "d-flex flex-wrap"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chatbox-config-tabs py-3 pl-2 mr-md-3 mb-4"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "py-2 px-3 rounded-left",
        type: TAB_BUTTON_BUBBLE_SETTINGS,
        activeTab: activeTab,
        toggle: toggle
      }, t("chatBoxConfigs.form.tab.bubble-button")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "py-2 px-3 rounded-left",
        type: TAB_HEADER_SETTINGS,
        activeTab: activeTab,
        toggle: toggle
      }, t("chatBoxConfigs.form.tab.header")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_MainSettingsTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
        toggle: toggle,
        activeTab: activeTab,
        toggleSubTab: toggleSubTab,
        activeSubTab: activeSubTab
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "py-2 px-3 rounded-left",
        type: TAB_FOOTER_SETTINGS,
        activeTab: activeTab,
        toggle: toggle
      }, t("chatBoxConfigs.form.tab.footer")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "py-2 px-3 rounded-left",
        type: TAB_MENU_SETTINGS,
        activeTab: activeTab,
        toggle: toggle
      }, t("chatBoxConfigs.form.tab.menu")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_13__["default"], {
        className: "py-2 px-3 rounded-left",
        type: TAB_GLOBAL_SETTINGS,
        activeTab: activeTab,
        toggle: toggle
      }, t("chatBoxConfigs.form.tab.global-settings"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "chatbox-config-tabs-content pl-md-3"
      }, tabContent)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
        sm: 12,
        className: "text-right"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: "pt-2 px-5 mb-5",
        color: "primary",
        disabled: isSubmitting
      }, t("common.saveBtnText"))));
    }
  });
}
ChatBoxConfigsForm.propTypes = {
  initialData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  defaultData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/helpers/loadConfigFontsOptions.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/helpers/loadConfigFontsOptions.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadConfigFontsOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadConfigFontsOptions() {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/chat-box-configs/available-fonts").data(function (data) {
      resolve(data.map(function (item) {
        return {
          label: item,
          value: item
        };
      }));
    });
  });
}

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/helpers/prepareDataToSubmit.js":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/helpers/prepareDataToSubmit.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prepareDataToSubmit; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function prepareDataToSubmit(values) {
  var name = values.name,
      default_chat_bot_image_id = values.default_chat_bot_image_id,
      chat_logo_id = values.chat_logo_id,
      data = _objectWithoutProperties(values, ["name", "default_chat_bot_image_id", "chat_logo_id"]);

  return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
    name: name,
    default_chat_bot_image_id: default_chat_bot_image_id && default_chat_bot_image_id.length ? default_chat_bot_image_id[0] : null,
    chat_logo_id: chat_logo_id && chat_logo_id.length ? chat_logo_id[0] : null,
    data: data
  }).toJS();
}

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/helpers/prepareDefaultValue.js":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/helpers/prepareDefaultValue.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return prepareDefaultValue; });
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


function prepareDefaultValue(data) {
  var default_chat_bot_image_id = data.default_chat_bot_image_id,
      chat_logo_id = data.chat_logo_id,
      button_start_chat_text = data.button_start_chat_text,
      see_chat_btn_text = data.see_chat_btn_text,
      bubble_button_icon = data.bubble_button_icon,
      window_title = data.window_title,
      start_btn_text = data.start_btn_text,
      user_input_placeholder_text = data.user_input_placeholder_text,
      menu_badge_text = data.menu_badge_text,
      menu_items = data.menu_items,
      normalData = _objectWithoutProperties(data, ["default_chat_bot_image_id", "chat_logo_id", "button_start_chat_text", "see_chat_btn_text", "bubble_button_icon", "window_title", "start_btn_text", "user_input_placeholder_text", "menu_badge_text", "menu_items"]);

  return _objectSpread(_objectSpread({}, normalData), {}, {
    button_start_chat_text: button_start_chat_text ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(button_start_chat_text) : null,
    see_chat_btn_text: see_chat_btn_text ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(see_chat_btn_text) : null,
    bubble_button_icon: bubble_button_icon ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(bubble_button_icon) : null,
    window_title: window_title ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(window_title) : null,
    start_btn_text: start_btn_text ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(start_btn_text) : null,
    user_input_placeholder_text: user_input_placeholder_text ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(user_input_placeholder_text) : null,
    menu_badge_text: menu_badge_text ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(menu_badge_text) : null,
    menu_items: menu_items ? Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])(menu_items) : null,
    default_chat_bot_image_id: default_chat_bot_image_id ? [default_chat_bot_image_id] : null,
    chat_logo_id: chat_logo_id ? [chat_logo_id] : null
  });
}

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/BubbleButtonSettings/BubbleButtonSettingsContent.js":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/BubbleButtonSettings/BubbleButtonSettingsContent.js ***!
  \**************************************************************************************************************/
/*! exports provided: BUTTON_POSITION_LEFT, BUTTON_POSITION_RIGHT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_POSITION_LEFT", function() { return BUTTON_POSITION_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_POSITION_RIGHT", function() { return BUTTON_POSITION_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BubbleButtonSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/TranslatableTextField */ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js");
/* harmony import */ var _components_form_SelectField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/SelectField */ "./resources/js/components/form/SelectField.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_FaChatIconField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/FaChatIconField */ "./resources/js/containers/chatBoxConfigs/form/widgets/FaChatIconField.js");
/* harmony import */ var _components_form_NumberField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/form/NumberField */ "./resources/js/components/form/NumberField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_BubbleButtonPreview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/BubbleButtonPreview */ "./resources/js/containers/chatBoxConfigs/form/widgets/BubbleButtonPreview.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















var BUTTON_POSITION_LEFT = "left";
var BUTTON_POSITION_RIGHT = "right";
var fas = ["sms", "comments", "comment-dots", "comment-alt", "comment", "headset", "phone-alt", "phone"];
var far = ["comments", "comment-dots", "comment-alt", "comment"];
var fab = ["rocketchat"];
var onlyIcons = {
  far: far,
  fab: fab,
  fas: fas
};
function BubbleButtonSettingsContent(_ref) {
  var handleChange = _ref.handleChange,
      handleBlur = _ref.handleBlur,
      setFieldValue = _ref.setFieldValue,
      values = _ref.values,
      defaultValues = _ref.defaultValues,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_12__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    label: t("chatBoxConfigs.button-position.".concat(BUTTON_POSITION_LEFT)),
    value: BUTTON_POSITION_LEFT
  }, {
    label: t("chatBoxConfigs.button-position.".concat(BUTTON_POSITION_RIGHT)),
    value: BUTTON_POSITION_RIGHT
  }]),
      _useState2 = _slicedToArray(_useState, 1),
      positionOptions = _useState2[0];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_BUTTON_BUBBLE_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BubbleButtonPreview__WEBPACK_IMPORTED_MODULE_13__["default"], {
        formData: values,
        defaultData: defaultValues
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_NumberField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "limiter",
    id: "button_size",
    label: t("chatBoxConfigs.form.screen-bubble-button.button-size-label"),
    placeholder: t("chatBoxConfigs.form.screen-bubble-button.button-size-placeholder"),
    name: "button_size",
    value: values.button_size,
    onChange: handleChange,
    onBlur: handleBlur,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_NumberField__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "limiter",
    id: "auto_open_time",
    label: t("chatBoxConfigs.form.screen-bubble-button.auto-open-time-label"),
    placeholder: t("chatBoxConfigs.form.screen-bubble-button.auto-open-time-placeholder"),
    name: "auto_open_time",
    value: values.auto_open_time,
    onChange: handleChange,
    onBlur: handleBlur,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SelectField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "limiter",
    label: t("chatBoxConfigs.form.screen-bubble-button.button-position-label"),
    name: "button_position",
    value: values.button_position,
    setFieldValue: setFieldValue,
    options: positionOptions,
    errors: errors,
    isClearable: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    id: "button_animation",
    name: "button_animation",
    label: t("chatBoxConfigs.form.screen-bubble-button.button-animation-label"),
    value: values.button_animation,
    setFieldValue: setFieldValue,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "button_start_chat_text",
    name: "button_start_chat_text",
    label: t("chatBoxConfigs.form.screen-bubble-button.button-start-chat-text-label"),
    placeholder: t("chatBoxConfigs.form.screen-bubble-button.button-start-chat-text-label"),
    value: values.button_start_chat_text,
    setFieldValue: setFieldValue,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "see_chat_btn_text",
    name: "see_chat_btn_text",
    label: t("chatBoxConfigs.form.screen-bubble-button.button-see-chat-text-label"),
    placeholder: t("chatBoxConfigs.form.screen-bubble-button.button-see-chat-text-label"),
    value: values.see_chat_btn_text,
    setFieldValue: setFieldValue,
    errors: errors
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_FaChatIconField__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "bubble_button_icon",
    name: "bubble_button_icon",
    label: t("chatBoxConfigs.form.screen-bubble-button.bubble-button-icon-label"),
    value: values.bubble_button_icon,
    setFieldValue: setFieldValue,
    errors: errors,
    onlyIcons: onlyIcons
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "button_icon_color",
    label: t("chatBoxConfigs.form.screen-bubble-button.button-icon-color-label"),
    value: values.button_icon_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_9__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    name: "button_bg_color",
    label: t("chatBoxConfigs.form.screen-bubble-button.button-bg-color-label"),
    value: values.button_bg_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  }))));
}
BubbleButtonSettingsContent.propTypes = {
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  handleBlur: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  defaultValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/FooterSettings/FooterSettingsContent.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/FooterSettings/FooterSettingsContent.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_OpenChatBoxWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/OpenChatBoxWindow */ "./resources/js/containers/chatBoxConfigs/form/widgets/OpenChatBoxWindow.js");









function FooterSettingsContent(_ref) {
  var setFieldValue = _ref.setFieldValue,
      values = _ref.values,
      defaultValues = _ref.defaultValues,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_FOOTER_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_OpenChatBoxWindow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        formData: values,
        showMessages: true,
        defaultData: defaultValues
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "window_footer_color",
    label: t("chatBoxConfigs.form.screen-footer.window-footer-color-label"),
    value: values.window_footer_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "window_footer_bg",
    label: t("chatBoxConfigs.form.screen-footer.window-footer-bg-label"),
    value: values.window_footer_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  }))));
}
FooterSettingsContent.propTypes = {
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  defaultValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/GlobalSettings/GlobalSettingsContent.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/GlobalSettings/GlobalSettingsContent.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GlobalSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_SelectField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/SelectField */ "./resources/js/components/form/SelectField.js");
/* harmony import */ var _components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/AsyncSelectField */ "./resources/js/components/form/AsyncSelectField.js");
/* harmony import */ var _containers_integrations_helpers_loadConfigFontsValue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/integrations/helpers/loadConfigFontsValue */ "./resources/js/containers/integrations/helpers/loadConfigFontsValue.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_chatBoxConfigs_form_helpers_loadConfigFontsOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/helpers/loadConfigFontsOptions */ "./resources/js/containers/chatBoxConfigs/form/helpers/loadConfigFontsOptions.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_OpenChatBoxWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/OpenChatBoxWindow */ "./resources/js/containers/chatBoxConfigs/form/widgets/OpenChatBoxWindow.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var FONT_SIZE_SMALL = "sm";
var FONT_SIZE_MIDDLE = "md";
var FONT_SIZE_LARGE = "lg";
function GlobalSettingsContent(_ref) {
  var setFieldValue = _ref.setFieldValue,
      values = _ref.values,
      defaultValues = _ref.defaultValues,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    label: t("chatBoxConfigs.font-sizes.".concat(FONT_SIZE_SMALL)),
    value: FONT_SIZE_SMALL
  }, {
    label: t("chatBoxConfigs.font-sizes.".concat(FONT_SIZE_MIDDLE)),
    value: FONT_SIZE_MIDDLE
  }, {
    label: t("chatBoxConfigs.font-sizes.".concat(FONT_SIZE_LARGE)),
    value: FONT_SIZE_LARGE
  }]),
      _useState2 = _slicedToArray(_useState, 1),
      fontSizeOptions = _useState2[0];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_GLOBAL_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_OpenChatBoxWindow__WEBPACK_IMPORTED_MODULE_9__["default"], {
        formData: values,
        showMessages: true,
        defaultData: defaultValues
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SelectField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "limiter",
    label: t("chatBoxConfigs.form.screen-global.global-font-size-label"),
    name: "global_font_size",
    value: values.global_font_size,
    setFieldValue: setFieldValue,
    options: fontSizeOptions,
    errors: errors,
    isClearable: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_AsyncSelectField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "limiter",
    label: t("chatBoxConfigs.form.screen-global.global-font-family-label"),
    name: "global_font_family",
    value: values.global_font_family,
    setFieldValue: setFieldValue,
    loadOptions: _containers_chatBoxConfigs_form_helpers_loadConfigFontsOptions__WEBPACK_IMPORTED_MODULE_8__["default"],
    loadValue: _containers_integrations_helpers_loadConfigFontsValue__WEBPACK_IMPORTED_MODULE_6__["default"],
    errors: errors,
    isClearable: false
  }));
}
GlobalSettingsContent.propTypes = {
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  defaultValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/HeaderSettings/HeaderSettingsContent.js":
/*!**************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/HeaderSettings/HeaderSettingsContent.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var _components_form_ImageField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/ImageField */ "./resources/js/components/form/ImageField.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/TranslatableTextField */ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_OpenChatBoxWindow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/OpenChatBoxWindow */ "./resources/js/containers/chatBoxConfigs/form/widgets/OpenChatBoxWindow.js");











function HeaderSettingsContent(_ref) {
  var setFieldValue = _ref.setFieldValue,
      values = _ref.values,
      defaultValues = _ref.defaultValues,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_HEADER_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_OpenChatBoxWindow__WEBPACK_IMPORTED_MODULE_10__["default"], {
        formData: values,
        defaultData: defaultValues,
        showMessages: true
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "window_header_color",
    label: t("chatBoxConfigs.form.screen-header.window-header-color-label"),
    value: values.window_header_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "window_header_bg",
    label: t("chatBoxConfigs.form.screen-header.window-header-bg-label"),
    value: values.window_header_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ImageField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "chat_logo_id",
    name: "chat_logo_id",
    label: t("chatBoxConfigs.form.screen-header.chat-logo-label"),
    setFieldValue: setFieldValue,
    value: values.chat_logo_id,
    errors: errors,
    maxFilesCount: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    id: "window_title",
    name: "window_title",
    label: t("chatBoxConfigs.form.screen-header.window-title-label"),
    placeholder: t("chatBoxConfigs.form.screen-header.window-title-placeholder"),
    value: values.window_title,
    setFieldValue: setFieldValue,
    errors: errors
  }))));
}
HeaderSettingsContent.propTypes = {
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  defaultValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsContent.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsContent.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabMainSettingsContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabMainSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabMainSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabBotOrOperatorMessageSettingsContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotOrOperatorMessageSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotOrOperatorMessageSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabBotMessageButtonsSettingsContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotMessageButtonsSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotMessageButtonsSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabUserMessageSettingsContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserMessageSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserMessageSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabUserInputSettingsContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserInputSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserInputSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabUserSendButtonSettingsContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserSendButtonSettingsContent */ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserSendButtonSettingsContent.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_OpenChatBoxWindow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/OpenChatBoxWindow */ "./resources/js/containers/chatBoxConfigs/form/widgets/OpenChatBoxWindow.js");










function MainSettingsContent(_ref) {
  var activeSubTab = _ref.activeSubTab,
      values = _ref.values,
      defaultValues = _ref.defaultValues,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var renderPreview = function renderPreview() {
    var showMessages = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_OpenChatBoxWindow__WEBPACK_IMPORTED_MODULE_9__["default"], {
      formData: values,
      defaultData: defaultValues,
      showMessages: showMessages
    });
  };

  switch (activeSubTab) {
    case _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_MAIN_SETTINGS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabMainSettingsContent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        values: values,
        renderPreview: renderPreview,
        setFieldValue: setFieldValue,
        errors: errors
      });

    case _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabBotOrOperatorMessageSettingsContent__WEBPACK_IMPORTED_MODULE_4__["default"], {
        values: values,
        renderPreview: renderPreview,
        setFieldValue: setFieldValue,
        errors: errors
      });

    case _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabBotMessageButtonsSettingsContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
        values: values,
        renderPreview: renderPreview,
        setFieldValue: setFieldValue,
        errors: errors
      });

    case _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_USER_MESSAGE_SETTINGS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabUserMessageSettingsContent__WEBPACK_IMPORTED_MODULE_6__["default"], {
        values: values,
        renderPreview: renderPreview,
        setFieldValue: setFieldValue,
        errors: errors
      });

    case _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_USER_INPUT_SETTINGS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabUserInputSettingsContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
        values: values,
        renderPreview: renderPreview,
        setFieldValue: setFieldValue,
        errors: errors
      });

    case _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_USER_SEND_BUTTON_SETTINGS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MainSettings_subTabs_SubTabUserSendButtonSettingsContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
        values: values,
        renderPreview: renderPreview,
        setFieldValue: setFieldValue,
        errors: errors
      });

    default:
      return null;
  }
}
MainSettingsContent.propTypes = {
  activeSubTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  defaultValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsTab.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/MainSettingsTab.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MainSettingsTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/BaseNavLink */ "./resources/js/containers/chatBoxConfigs/form/widgets/BaseNavLink.js");
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





function MainSettingsTab(_ref) {
  var activeTab = _ref.activeTab,
      toggle = _ref.toggle,
      activeSubTab = _ref.activeSubTab,
      toggleSubTab = _ref.toggleSubTab;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  var onClick = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    toggle(_containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_SETTINGS"]);
    toggleSubTab(_containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_MAIN_SETTINGS"]);
  }, [toggle, toggleSubTab]);
  var isActive = _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_SETTINGS"] === activeTab;

  if (isActive) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "active chatbox-config-subtabs rounded-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chatbox-config-subtab-title py-2 px-3"
    }, t("chatBoxConfigs.form.tab.content")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "chatbox-config-subtabs-container pl-2 py-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "chatbox-subtab rounded-left",
      activeTab: activeSubTab,
      toggle: toggleSubTab,
      type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_MAIN_SETTINGS"]
    }, t("chatBoxConfigs.form.tab.content-main")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "chatbox-subtab rounded-left",
      activeTab: activeSubTab,
      toggle: toggleSubTab,
      type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS"]
    }, t("chatBoxConfigs.form.tab.content-bot-or-operator-message")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "chatbox-subtab rounded-left",
      activeTab: activeSubTab,
      toggle: toggleSubTab,
      type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS"]
    }, t("chatBoxConfigs.form.tab.content-bot-message-button")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "chatbox-subtab rounded-left",
      activeTab: activeSubTab,
      toggle: toggleSubTab,
      type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_USER_MESSAGE_SETTINGS"]
    }, t("chatBoxConfigs.form.tab.content-user-message")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "chatbox-subtab rounded-left",
      activeTab: activeSubTab,
      toggle: toggleSubTab,
      type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_USER_INPUT_SETTINGS"]
    }, t("chatBoxConfigs.form.tab.content-user-input")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "chatbox-subtab rounded-left",
      activeTab: activeSubTab,
      toggle: toggleSubTab,
      type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_USER_SEND_BUTTON_SETTINGS"]
    }, t("chatBoxConfigs.form.tab.content-user-send-button"))));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_BaseNavLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "py-2 px-3 rounded-left",
    activeTab: activeTab,
    toggle: onClick,
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_3__["TAB_CONTENT_USER_SEND_BUTTON_SETTINGS"]
  }, t("chatBoxConfigs.form.tab.content"));
}
MainSettingsTab.propTypes = {
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  activeSubTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toggleSubTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotMessageButtonsSettingsContent.js":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotMessageButtonsSettingsContent.js ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubTabBotMessageButtonsSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








function SubTabBotMessageButtonsSettingsContent(_ref) {
  var values = _ref.values,
      renderPreview = _ref.renderPreview,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_BOT_MESSAGE_BUTTON_SETTINGS"],
    renderPreview: renderPreview
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "bot_message_button_bg",
    label: t("chatBoxConfigs.form.screen-content.bot-message-button.bot-message-button-bg-label"),
    value: values.bot_message_button_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "bot_message_button_color",
    label: t("chatBoxConfigs.form.screen-content.bot-message-button.bot-message-button-color-label"),
    value: values.bot_message_button_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  }))));
}
SubTabBotMessageButtonsSettingsContent.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  renderPreview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotOrOperatorMessageSettingsContent.js":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabBotOrOperatorMessageSettingsContent.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubTabBotMessageButtonsSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var _components_form_ImageField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/ImageField */ "./resources/js/components/form/ImageField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");









function SubTabBotMessageButtonsSettingsContent(_ref) {
  var values = _ref.values,
      renderPreview = _ref.renderPreview,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_CHAT_BOT_OR_OPERATOR_SETTINGS"],
    renderPreview: renderPreview
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ImageField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "default_chat_bot_image_id",
    name: "default_chat_bot_image_id",
    label: t("chatBoxConfigs.form.screen-content.chatbot-or-operator.default-chatbot-image-label"),
    setFieldValue: setFieldValue,
    value: values.default_chat_bot_image_id,
    errors: errors,
    maxFilesCount: 1,
    types: ["image/*"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "bot_or_operator_msg_bg",
    label: t("chatBoxConfigs.form.screen-content.chatbot-or-operator.bot-or-operator-message-bg-label"),
    value: values.bot_or_operator_msg_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "bot_or_operator_msg_color",
    label: t("chatBoxConfigs.form.screen-content.chatbot-or-operator.bot-or-operator-message-color-label"),
    value: values.bot_or_operator_msg_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  }))));
}
SubTabBotMessageButtonsSettingsContent.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  renderPreview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabMainSettingsContent.js":
/*!************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabMainSettingsContent.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubTabMainSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/TranslatableTextField */ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");









function SubTabMainSettingsContent(_ref) {
  var values = _ref.values,
      _renderPreview = _ref.renderPreview,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_MAIN_SETTINGS"],
    renderPreview: function renderPreview() {
      return _renderPreview(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "content_bg",
    label: t("chatBoxConfigs.form.screen-content.main.content-bg-label"),
    value: values.content_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "start_btn_bg",
    label: t("chatBoxConfigs.form.screen-content.main.start-btn-bg-label"),
    value: values.start_btn_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "start_btn_color",
    label: t("chatBoxConfigs.form.screen-content.main.start-btn-color-label"),
    value: values.start_btn_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "start_btn_text",
    name: "start_btn_text",
    label: t("chatBoxConfigs.form.screen-content.main.start-btn-text-label"),
    placeholder: t("chatBoxConfigs.form.screen-content.main.start-btn-text-placeholder"),
    value: values.start_btn_text,
    setFieldValue: setFieldValue,
    errors: errors
  }))));
}
SubTabMainSettingsContent.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  renderPreview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserInputSettingsContent.js":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserInputSettingsContent.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubTabUserInputSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/TranslatableTextField */ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");









function SubTabUserInputSettingsContent(_ref) {
  var values = _ref.values,
      renderPreview = _ref.renderPreview,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_USER_INPUT_SETTINGS"],
    renderPreview: renderPreview
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "user_input_text_color",
    label: t("chatBoxConfigs.form.screen-content.user-input.user-input-text-color-label"),
    value: values.user_input_text_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "user_input_placeholder_color",
    label: t("chatBoxConfigs.form.screen-content.user-input.user-input-placeholder-text-color-label"),
    value: values.user_input_placeholder_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "user_input_bg",
    label: t("chatBoxConfigs.form.screen-content.user-input.user-input-bg-label"),
    value: values.user_input_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "user_input_file_name_color",
    label: t("chatBoxConfigs.form.screen-content.user-input.user-input-file-name-color-label"),
    value: values.user_input_file_name_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "user_input_placeholder_text",
    name: "user_input_placeholder_text",
    label: t("chatBoxConfigs.form.screen-content.user-input.user-input-placeholder-text-label"),
    placeholder: t("chatBoxConfigs.form.screen-content.user-input.user-input-placeholder-text-placeholder"),
    value: values.user_input_placeholder_text,
    setFieldValue: setFieldValue,
    errors: errors
  }))));
}
SubTabUserInputSettingsContent.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  renderPreview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserMessageSettingsContent.js":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserMessageSettingsContent.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubTabUserMessageSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








function SubTabUserMessageSettingsContent(_ref) {
  var values = _ref.values,
      renderPreview = _ref.renderPreview,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_USER_MESSAGE_SETTINGS"],
    renderPreview: renderPreview
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "user_message_bg",
    label: t("chatBoxConfigs.form.screen-content.user-message.user-message-bg-label"),
    value: values.user_message_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "user_message_color",
    label: t("chatBoxConfigs.form.screen-content.user-message.user-message-color-label"),
    value: values.user_message_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  }))));
}
SubTabUserMessageSettingsContent.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  renderPreview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserSendButtonSettingsContent.js":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MainSettings/subTabs/SubTabUserSendButtonSettingsContent.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubTabUserSendButtonSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








function SubTabUserSendButtonSettingsContent(_ref) {
  var values = _ref.values,
      renderPreview = _ref.renderPreview,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_CONTENT_USER_SEND_BUTTON_SETTINGS"],
    renderPreview: renderPreview
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "user_input_send_button_bg",
    label: t("chatBoxConfigs.form.screen-content.user-send-button.user-input-send-button-bg-label"),
    value: values.user_input_send_button_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "user_input_send_button_color",
    label: t("chatBoxConfigs.form.screen-content.user-send-button.user-input-send-button-color-label"),
    value: values.user_input_send_button_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  }))));
}
SubTabUserSendButtonSettingsContent.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  renderPreview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItem.js":
/*!***********************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItem.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_es_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/es/Card */ "./node_modules/reactstrap/es/Card.js");
/* harmony import */ var reactstrap_es_CardBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/es/CardBody */ "./node_modules/reactstrap/es/CardBody.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/TranslatableTextField */ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js");
/* harmony import */ var _components_form_SelectField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/SelectField */ "./resources/js/components/form/SelectField.js");
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_FaChatIconField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/FaChatIconField */ "./resources/js/containers/chatBoxConfigs/form/widgets/FaChatIconField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");












function MenuItem(_ref) {
  var name = _ref.name,
      index = _ref.index,
      value = _ref.value,
      _setFieldValue = _ref.setFieldValue,
      onRemove = _ref.onRemove,
      typeOptions = _ref.typeOptions,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_CardBody__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sm: 9
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "".concat(name, ".").concat(index, ".text"),
    label: t("chatBoxConfigs.form.screen-menu.menu-item-text-label"),
    placeholder: t("chatBoxConfigs.form.screen-menu.menu-item-text-placeholder"),
    value: value.get("text"),
    setFieldValue: function setFieldValue(inputName, val) {
      _setFieldValue(value.set("text", val));
    },
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sm: 3
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_FaChatIconField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "".concat(name, ".").concat(index, ".icon"),
    label: t("chatBoxConfigs.form.screen-menu.menu-item-icon-label"),
    value: value.get("icon"),
    setFieldValue: function setFieldValue(inputName, val) {
      _setFieldValue(value.set("icon", val));
    },
    errors: errors
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SelectField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    name: "".concat(name, ".").concat(index, ".type"),
    label: t("chatBoxConfigs.form.screen-menu.menu-item-type-label"),
    value: value.get("type"),
    options: typeOptions,
    setFieldValue: function setFieldValue(inputName, val) {
      _setFieldValue(value.set("type", val));
    },
    errors: errors,
    isClearable: false
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_8__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_6__["default"], {
    name: "".concat(name, ".").concat(index, ".value"),
    label: t("chatBoxConfigs.form.screen-menu.menu-item-value-label"),
    placeholder: t("chatBoxConfigs.form.screen-menu.menu-item-value-placeholder"),
    value: value.get("value"),
    onChange: function onChange(e) {
      _setFieldValue(value.set("value", e.target.value));
    },
    errors: errors
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-minus mt-2",
    disabled: !onRemove,
    type: "button",
    onClick: onRemove
  }, "-")));
}

MenuItem.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  index: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onRemove: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  typeOptions: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MenuItem));

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItemsField.js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItemsField.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MenuSettings_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItem */ "./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItem.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _constants_chatboxSettingsMenuItemTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/chatboxSettingsMenuItemTypes */ "./resources/js/constants/chatboxSettingsMenuItemTypes.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var initialItem = Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])({
  text: {
    en: ""
  },
  type: _constants_chatboxSettingsMenuItemTypes__WEBPACK_IMPORTED_MODULE_4__["TYPE_TRIGGER"],
  value: "",
  icon: null
});

function MenuItemsField(_ref) {
  var name = _ref.name,
      values = _ref.values,
      errors = _ref.errors,
      _setFieldValue = _ref.setFieldValue;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    label: t("chatBoxConfigs.menu-item-type.".concat(_constants_chatboxSettingsMenuItemTypes__WEBPACK_IMPORTED_MODULE_4__["TYPE_TRIGGER"])),
    value: _constants_chatboxSettingsMenuItemTypes__WEBPACK_IMPORTED_MODULE_4__["TYPE_TRIGGER"]
  }, {
    label: t("chatBoxConfigs.menu-item-type.".concat(_constants_chatboxSettingsMenuItemTypes__WEBPACK_IMPORTED_MODULE_4__["TYPE_URL"])),
    value: _constants_chatboxSettingsMenuItemTypes__WEBPACK_IMPORTED_MODULE_4__["TYPE_URL"]
  }]),
      _useState2 = _slicedToArray(_useState, 1),
      typeOptions = _useState2[0];

  var canRemove = values.size > 1;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, values.map(function (item, index) {
    var onRemove = function onRemove() {
      _setFieldValue(name, values.remove(index));
    };

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MenuSettings_MenuItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: index,
      index: index,
      name: name,
      value: values.get(index),
      isDisabled: values.size <= 1,
      setFieldValue: function setFieldValue(value) {
        _setFieldValue(name, values.set(index, value));
      },
      onRemove: canRemove ? onRemove : null,
      typeOptions: typeOptions,
      errors: errors
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-add mt-2",
    type: "button",
    onClick: function onClick() {
      _setFieldValue(name, values.set(values.size, initialItem));
    }
  }, "+"));
}

MenuItemsField.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MenuItemsField));

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuSettingsContent.js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuSettingsContent.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuSettingsContent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/ChatBoxConfigsForm */ "./resources/js/containers/chatBoxConfigs/form/ChatBoxConfigsForm.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/ContentPanel */ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js");
/* harmony import */ var _components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/ColorField */ "./resources/js/components/form/ColorField.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/TranslatableTextField */ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js");
/* harmony import */ var _containers_chatBoxConfigs_form_tabs_MenuSettings_MenuItemsField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItemsField */ "./resources/js/containers/chatBoxConfigs/form/tabs/MenuSettings/MenuItemsField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_OpenChatBoxWindow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/OpenChatBoxWindow */ "./resources/js/containers/chatBoxConfigs/form/widgets/OpenChatBoxWindow.js");












function MenuSettingsContent(_ref) {
  var setFieldValue = _ref.setFieldValue,
      defaultValues = _ref.defaultValues,
      values = _ref.values,
      errors = _ref.errors;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_ContentPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["TAB_MENU_SETTINGS"],
    renderPreview: function renderPreview() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_OpenChatBoxWindow__WEBPACK_IMPORTED_MODULE_11__["default"], {
        formData: values,
        showMessages: true,
        defaultData: defaultValues
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_7__["default"], {
    id: "menu_show_badge",
    name: "menu_show_badge",
    label: t("chatBoxConfigs.form.screen-menu.menu-show-badge-label"),
    value: values.menu_show_badge,
    setFieldValue: setFieldValue,
    errors: errors
  })), values.menu_show_badge ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "menu_badge_bg",
    label: t("chatBoxConfigs.form.screen-menu.menu-badge-bg-label"),
    value: values.menu_badge_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "menu_badge_color",
    label: t("chatBoxConfigs.form.screen-menu.menu-badge-color-label"),
    value: values.menu_badge_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_widgets_TranslatableTextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
    name: "menu_badge_text",
    label: t("chatBoxConfigs.form.screen-menu.menu-badge-text-label"),
    placeholder: t("chatBoxConfigs.form.screen-menu.menu-badge-text-placeholder"),
    value: values.menu_badge_text,
    setFieldValue: setFieldValue,
    errors: errors
  }))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "menu_bg",
    label: t("chatBoxConfigs.form.screen-menu.menu-bg-label"),
    value: values.menu_bg,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 6
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_ColorField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    name: "menu_item_color",
    label: t("chatBoxConfigs.form.screen-menu.menu-item-color-label"),
    value: values.menu_item_color,
    setFieldValue: setFieldValue,
    errors: errors,
    colors: _containers_chatBoxConfigs_form_ChatBoxConfigsForm__WEBPACK_IMPORTED_MODULE_2__["COLORS_LIST"],
    insideButton: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sm: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_chatBoxConfigs_form_tabs_MenuSettings_MenuItemsField__WEBPACK_IMPORTED_MODULE_9__["default"], {
    name: "menu_items",
    values: values.menu_items,
    errors: errors,
    setFieldValue: setFieldValue
  }))));
}
MenuSettingsContent.propTypes = {
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  values: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  defaultValues: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/widgets/BaseNavLink.js":
/*!****************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/widgets/BaseNavLink.js ***!
  \****************************************************************************/
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




function BaseNavLink(_ref) {
  var activeTab = _ref.activeTab,
      type = _ref.type,
      toggle = _ref.toggle,
      children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("chatbox-tab rounded-left d-block text-left", className, {
      active: activeTab === type
    }),
    onClick: function onClick() {
      toggle(type);
    }
  }, children);
}

BaseNavLink.propTypes = {
  activeTab: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  toggle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(BaseNavLink));

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/widgets/BubbleButtonPreview.js":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/widgets/BubbleButtonPreview.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BubbleButtonPreview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_chatBoxConfigs_form_helpers_prepareDataToSubmit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/helpers/prepareDataToSubmit */ "./resources/js/containers/chatBoxConfigs/form/helpers/prepareDataToSubmit.js");
/* harmony import */ var _chat_box_src_components_app_Invite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chat-box/src/components/app/Invite */ "./chat-box/src/components/app/Invite.js");
/* harmony import */ var _chat_box_src_styles_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../chat-box/src/styles/Style */ "./chat-box/src/styles/Style.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function BubbleButtonPreview(_ref) {
  var formData = _ref.formData,
      defaultData = _ref.defaultData;
  var locale = "en";

  var _prepareDataToSubmit = Object(_containers_chatBoxConfigs_form_helpers_prepareDataToSubmit__WEBPACK_IMPORTED_MODULE_2__["default"])(formData),
      data = _prepareDataToSubmit.data,
      other = _objectWithoutProperties(_prepareDataToSubmit, ["data"]);

  var config = _objectSpread(_objectSpread({}, data), other);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chatbox-widget text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chat_box_src_styles_Style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    styles: {
      config: config
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chat_box_src_components_app_Invite__WEBPACK_IMPORTED_MODULE_3__["default"], {
    invite: true,
    welcome_invite: config.button_start_chat_text[locale] || defaultData.button_start_chat_text[locale],
    closeInvite: function closeInvite() {},
    onStart: function onStart() {},
    toggleOpen: function toggleOpen() {},
    start_btn: config.start_btn_text[locale] || defaultData.start_btn_text[locale],
    icon: config.bubble_button_icon
  }));
}
BubbleButtonPreview.propTypes = {
  formData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  defaultData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/widgets/ContentPanel.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");





function ContentPanel(_ref) {
  var type = _ref.type,
      children = _ref.children,
      renderPreview = _ref.renderPreview;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: type
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xl: renderPreview ? 6 : 12,
    className: "order-xl-0 order-1"
  }, children), renderPreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_3__["default"], {
    xl: 6,
    sm: 12
  }, renderPreview()) : null));
}

ContentPanel.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  renderPreview: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ContentPanel));

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/widgets/FaChatIconField.js":
/*!********************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/widgets/FaChatIconField.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap/es/Label */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var _components_form_base_Errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var _components_widgets_faIcons_picker_IconsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/faIcons/picker/IconsList */ "./resources/js/components/widgets/faIcons/picker/IconsList.js");
/* harmony import */ var _components_widgets_faIcons_FaIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/faIcons/FaIcon */ "./resources/js/components/widgets/faIcons/FaIcon.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap_es_Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap/es/Modal */ "./node_modules/reactstrap/es/Modal.js");
/* harmony import */ var reactstrap_es_ModalBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap/es/ModalBody */ "./node_modules/reactstrap/es/ModalBody.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_10__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function Picker(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      onlyIcons = _ref.onlyIcons;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      search = _useState2[0],
      setSearch = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      open = _useState4[0],
      setOpen = _useState4[1];

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_9__["useTranslation"])(),
      t = _useTranslation.t;

  var toggle = function toggle() {
    if (open) {
      setOpen(false);
      setSearch("");
    } else {
      setOpen(true);
    }
  };

  var handleChange = function handleChange(val) {
    onChange(val);
    setOpen(false);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_6___default()("picker-dropdown", {
      open: open
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-outline-secondary py-1 px-2",
    type: "button",
    onClick: toggle
  }, value ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_faIcons_FaIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "icon-size-30 align-middle",
    icon: value.get("icon"),
    namespace: value.get("namespace")
  }) : t("chatBoxConfigs.form.select-icon")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Modal__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isOpen: open,
    toggle: toggle,
    className: "my-cool-modal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_ModalBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "py-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "mx-1 form-control limiter mb-3",
    type: "text",
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_faIcons_picker_IconsList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    namespace: "fas",
    search: search,
    onClick: handleChange,
    icons: onlyIcons ? onlyIcons["fas"] : null
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_faIcons_picker_IconsList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    namespace: "far",
    search: search,
    onClick: handleChange,
    icons: onlyIcons ? onlyIcons["far"] : null
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_faIcons_picker_IconsList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    namespace: "fab",
    search: search,
    onClick: handleChange,
    icons: onlyIcons ? onlyIcons["fab"] : null
  })))));
}

Picker.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onlyIcons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

function FaChatIconField(_ref2) {
  var _errors$name;

  var id = _ref2.id,
      name = _ref2.name,
      label = _ref2.label,
      value = _ref2.value,
      setFieldValue = _ref2.setFieldValue,
      errors = _ref2.errors,
      onlyIcons = _ref2.onlyIcons;
  var onChange = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (value) {
    return setFieldValue(name, value);
  }, [name, setFieldValue]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-3",
    id: id
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_2__["default"], null, label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Picker, {
    value: value,
    onChange: onChange,
    onlyIcons: onlyIcons
  }), errors && ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_Errors__WEBPACK_IMPORTED_MODULE_3__["default"], {
    errors: errors[name]
  }) : null);
}

FaChatIconField.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  onlyIcons: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FaChatIconField));

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/widgets/OpenChatBoxWindow.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/widgets/OpenChatBoxWindow.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OpenChatBoxWindow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _chat_box_src_components_app_widget_Widget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../chat-box/src/components/app/widget/Widget */ "./chat-box/src/components/app/widget/Widget.js");
/* harmony import */ var _chat_box_src_styles_Style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../chat-box/src/styles/Style */ "./chat-box/src/styles/Style.js");
/* harmony import */ var _containers_chatBoxConfigs_form_helpers_prepareDataToSubmit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/helpers/prepareDataToSubmit */ "./resources/js/containers/chatBoxConfigs/form/helpers/prepareDataToSubmit.js");
/* harmony import */ var _hooks_usePrevious__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/hooks/usePrevious */ "./resources/js/hooks/usePrevious.js");
/* harmony import */ var _containers_chatBoxConfigs_form_widgets_messageTemplate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/chatBoxConfigs/form/widgets/messageTemplate */ "./resources/js/containers/chatBoxConfigs/form/widgets/messageTemplate.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










var loadImage = function loadImage(id) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_2__["default"].call("get", "/methods/image/".concat(id)).data(function (data) {
      resolve(data);
    });
  });
};

function OpenChatBoxWindow(_ref) {
  var formData = _ref.formData,
      defaultData = _ref.defaultData,
      showMessages = _ref.showMessages;
  var locale = "en";

  var _prepareDataToSubmit = Object(_containers_chatBoxConfigs_form_helpers_prepareDataToSubmit__WEBPACK_IMPORTED_MODULE_5__["default"])(formData),
      data = _prepareDataToSubmit.data,
      other = _objectWithoutProperties(_prepareDataToSubmit, ["data"]);

  var config = _objectSpread(_objectSpread({}, data), other);

  var chatBotImageId = config.default_chat_bot_image_id;
  var prevChatBotImageId = Object(_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_6__["default"])(chatBotImageId);
  var chatLogoId = config.chat_logo_id;
  var prevLogoId = Object(_hooks_usePrevious__WEBPACK_IMPORTED_MODULE_6__["default"])(chatLogoId);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      logoPath = _useState2[0],
      setLogoPath = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      botPath = _useState4[0],
      setBotPath = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (chatBotImageId !== prevChatBotImageId) {
      setLoading(true);

      if (chatBotImageId) {
        loadImage(chatBotImageId).then(function (path) {
          setBotPath(path);
          setLoading(false);
        });
      } else {
        setBotPath("");
        setTimeout(function () {
          return setLoading(false);
        }, 10);
      }
    }
  }, [chatBotImageId, prevChatBotImageId, setBotPath]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (chatLogoId !== prevLogoId) {
      setLoading(true);

      if (chatLogoId) {
        loadImage(chatLogoId).then(function (path) {
          setLogoPath(path);
          setLoading(false);
        });
      } else {
        setLogoPath("");
        setTimeout(function () {
          return setLoading(false);
        }, 0);
      }
    }
  }, [chatLogoId, prevLogoId, setLogoPath]);

  if (loading) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "chatbox-widget text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chat_box_src_styles_Style__WEBPACK_IMPORTED_MODULE_4__["default"], {
    styles: {
      config: config
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_chat_box_src_components_app_widget_Widget__WEBPACK_IMPORTED_MODULE_3__["default"], {
    logo: logoPath ? logoPath : "/img/default_chat_logo.svg",
    botImage: botPath ? botPath : "/img/default_chatbot_img.svg",
    title: config.window_title[locale] || defaultData.window_title[locale],
    messages: showMessages ? _containers_chatBoxConfigs_form_widgets_messageTemplate__WEBPACK_IMPORTED_MODULE_7__["default"] : [],
    isFullScreen: false,
    rtl: false,
    soundNotifications: false,
    toggleNotifications: function toggleNotifications() {},
    toggleFullScreen: function toggleFullScreen() {},
    embedButton: false,
    toggleOpen: function toggleOpen() {},
    closeButton: false,
    sendMessage: function sendMessage() {},
    start_btn: config.start_btn_text[locale] || defaultData.start_btn_text[locale],
    newMessages: false,
    textTypeEnabled: true,
    collectAndSendMessage: false,
    placeholder: config.user_input_placeholder_text[locale] || defaultData.user_input_placeholder_text[locale],
    badge: config.menu_badge_text[locale] || defaultData.menu_badge_text[locale],
    poweredBy: false,
    powered_url: "#",
    powered_name: "Powered by",
    menus: config.menu_items.map(function (item) {
      return {
        type: item.type,
        href: item.value,
        title: item.text[locale],
        icon: item.icon
      };
    }),
    getMessageImage: function getMessageImage(message) {
      if (message.user) {
        return message.user.image ? "".concat(message.user.image.path) : "/img/default_operator_img.svg";
      }

      return botPath || "/img/default_chatbot_img.svg";
    }
  }));
}
OpenChatBoxWindow.propTypes = {
  formData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  defaultData: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  showMessages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/widgets/TranslatableTextField.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_TextField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/TextField */ "./resources/js/components/form/TextField.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_commonData_actionCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/reducers/commonData/actionCreators */ "./resources/js/redux/reducers/commonData/actionCreators.js");
/* harmony import */ var reactstrap_es_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap/es/Spinner */ "./node_modules/reactstrap/es/Spinner.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactstrap/es/Label */ "./node_modules/reactstrap/es/Label.js");
/* harmony import */ var _components_form_base_Errors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/form/base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function TranslatableTextField(_ref) {
  var _errors$name;

  var id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      label = _ref.label,
      value = _ref.value,
      setFieldValue = _ref.setFieldValue,
      errors = _ref.errors;

  if (value) {
    value = Object(immutable__WEBPACK_IMPORTED_MODULE_10__["isImmutable"])(value) ? value : Object(immutable__WEBPACK_IMPORTED_MODULE_10__["Map"])(value);
  }

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  var locales = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    var _state$commonData$get;

    return (_state$commonData$get = state.commonData.get("availableLocales")) === null || _state$commonData$get === void 0 ? void 0 : _state$commonData$get.toJS();
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_reducers_commonData_actionCreators__WEBPACK_IMPORTED_MODULE_4__["loadAvailableLocales"])()).then(function (data) {
      var _data$;

      if ((_data$ = data[0]) === null || _data$ === void 0 ? void 0 : _data$.locale) {
        var _data$2;

        setActiveTab((_data$2 = data[0]) === null || _data$2 === void 0 ? void 0 : _data$2.locale);
      }
    });
  }, [dispatch]);

  var toggle = function toggle(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  };

  if (!locales) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "py-3",
    id: id
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Label__WEBPACK_IMPORTED_MODULE_8__["default"], null, label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-panel-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["Nav"], {
    className: "nav-panel px-3",
    tabs: true
  }, locales.map(function (localeItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
      className: "nav-panel-item",
      key: localeItem.locale
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["NavLink"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
        active: activeTab === localeItem.locale
      }),
      onClick: function onClick() {
        toggle(localeItem.locale);
      }
    }, localeItem.name));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabContent"], {
    activeTab: activeTab
  }, locales.map(function (localeItem) {
    var fieldValue = value && value.get(localeItem.locale) ? value.get(localeItem.locale) : null;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_6__["TabPane"], {
      key: localeItem.locale,
      tabId: localeItem.locale
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_TextField__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "limiter mt-2 pb-0",
      name: "".concat(name, "[").concat(localeItem.locale, "]"),
      value: fieldValue || "",
      placeholder: placeholder,
      onChange: function onChange(e) {
        var newValue = value;

        if (newValue) {
          newValue = Object(immutable__WEBPACK_IMPORTED_MODULE_10__["isImmutable"])(newValue) ? newValue : Object(immutable__WEBPACK_IMPORTED_MODULE_10__["Map"])(newValue);
        } else {
          newValue = Object(immutable__WEBPACK_IMPORTED_MODULE_10__["Map"])({});
        }

        newValue = newValue.set(localeItem.locale, e.target.value);
        setFieldValue(name, newValue);
      }
    }));
  })), errors && ((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_Errors__WEBPACK_IMPORTED_MODULE_9__["default"], {
    errors: errors[name]
  }) : null);
}

TranslatableTextField.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  setFieldValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TranslatableTextField));

/***/ }),

/***/ "./resources/js/containers/chatBoxConfigs/form/widgets/messageTemplate.js":
/*!********************************************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/form/widgets/messageTemplate.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chat_box_src_data_MessageRecord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../chat-box/src/data/MessageRecord */ "./chat-box/src/data/MessageRecord.js");

var MESSAGES_TEMPLATE = [{
  id: 1,
  message: "start",
  type: 1,
  attachments: []
}, {
  id: 2,
  message: "<p>Message 1</p>",
  type: 4,
  info: [],
  user: null,
  attachments: [{
    id: 1,
    type: 1,
    data: {
      url: "https://via.placeholder.com/100"
    }
  }]
}, {
  id: 3,
  message: "<p>Message 2</p>",
  type: 4
}, {
  id: 4,
  message: "Answer 1",
  type: 1
}, {
  id: 5,
  message: "<p>Message 3</p>",
  type: 4,
  info: {
    buttons: [{
      name: "Button 1",
      text: "Button 1",
      type: "button",
      value: 1,
      image_url: null,
      additional: []
    }, {
      name: "Button 2",
      text: "Button 2",
      type: "button",
      value: 2,
      image_url: null,
      additional: []
    }, {
      name: "Button 3",
      text: "Button 3",
      type: "button",
      value: 3,
      image_url: null,
      additional: []
    }]
  },
  user: null,
  attachments: []
}].map(function (message) {
  return new _chat_box_src_data_MessageRecord__WEBPACK_IMPORTED_MODULE_0__["MessageRecord"](message);
});
/* harmony default export */ __webpack_exports__["default"] = (MESSAGES_TEMPLATE);

/***/ }),

/***/ "./resources/js/containers/integrations/helpers/loadConfigFontsValue.js":
/*!******************************************************************************!*\
  !*** ./resources/js/containers/integrations/helpers/loadConfigFontsValue.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadConfigFontsValue; });
function loadConfigFontsValue(font) {
  return new Promise(function (resolve) {
    resolve({
      label: font,
      value: font
    });
  });
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

/***/ "./resources/js/preact-react.js":
/*!**************************************!*\
  !*** ./resources/js/preact-react.js ***!
  \**************************************/
/*! exports provided: Component, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return react__WEBPACK_IMPORTED_MODULE_0__["Component"]; });


var h = false;

/***/ }),

/***/ "./resources/js/redux/reducers/commonData/actionCreators.js":
/*!******************************************************************!*\
  !*** ./resources/js/redux/reducers/commonData/actionCreators.js ***!
  \******************************************************************/
/*! exports provided: loadAvailableLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadAvailableLocales", function() { return loadAvailableLocales; });
/* harmony import */ var _redux_reducers_commonData_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/commonData/actionTypes */ "./resources/js/redux/reducers/commonData/actionTypes.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");



var availableLocalesLoaded = function availableLocalesLoaded(item) {
  return {
    type: _redux_reducers_commonData_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].AVAILABLE_LOCALES_LOADED,
    payload: item
  };
};

var loadAvailableLocales = function loadAvailableLocales() {
  return function (dispatch, getState) {
    return new Promise(function (resolve) {
      var availableLocales = getState().commonData.get("availableLocales");

      if (!availableLocales) {
        _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", window.availableLanguagesListUrl).data(function (data) {
          dispatch(availableLocalesLoaded(data));
          resolve(data);
        });
      } else {
        resolve(availableLocales.toJS());
      }
    });
  };
};

/***/ })

}]);