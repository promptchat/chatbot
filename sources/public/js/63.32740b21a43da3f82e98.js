(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

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
      onConfirm = _ref.onConfirm,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "success" : _ref$type;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "",
    show: show,
    onConfirm: onConfirm,
    type: type
  }, text);
}
SuccessAlert.propTypes = {
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./resources/js/containers/clients/create-client/form/CreateClientFormView.js":
/*!************************************************************************************!*\
  !*** ./resources/js/containers/clients/create-client/form/CreateClientFormView.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/vitalii/php-projects/laravel/promptchat.base2/resources/js/containers/clients/create-client/form/CreateClientFormView.js: Expected corresponding JSX closing tag for <> (115:8)\n\n\u001b[0m \u001b[90m 113 | \u001b[39m                {t(\u001b[32m\"common.createAndNew\"\u001b[39m)}\u001b[0m\n\u001b[0m \u001b[90m 114 | \u001b[39m            \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mSubmitButton\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 115 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mCol\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m        \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 116 | \u001b[39m    )\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 117 | \u001b[39m}\u001b[0m\n\u001b[0m \u001b[90m 118 | \u001b[39m\u001b[0m\n    at Object._raise (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:766:17)\n    at Object.raiseWithData (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:759:17)\n    at Object.raise (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:753:17)\n    at Object.jsxParseElementAt (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:4675:14)\n    at Object.jsxParseElement (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:4706:17)\n    at Object.parseExprAtom (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:4713:19)\n    at Object.parseExprSubscripts (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9844:23)\n    at Object.parseUpdate (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9824:21)\n    at Object.parseMaybeUnary (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9813:17)\n    at Object.parseExprOps (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9683:23)\n    at Object.parseMaybeConditional (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9657:23)\n    at Object.parseMaybeAssign (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9620:21)\n    at allowInAnd (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9586:39)\n    at Object.allowInAnd (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:11303:12)\n    at Object.parseMaybeAssignAllowIn (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9586:17)\n    at Object.parseParenAndDistinguishExpression (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:10473:28)\n    at Object.parseExprAtom (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:10177:21)\n    at Object.parseExprAtom (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:4718:20)\n    at Object.parseExprSubscripts (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9844:23)\n    at Object.parseUpdate (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9824:21)\n    at Object.parseMaybeUnary (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9813:17)\n    at Object.parseExprOps (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9683:23)\n    at Object.parseMaybeConditional (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9657:23)\n    at Object.parseMaybeAssign (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9620:21)\n    at Object.parseExpressionBase (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9564:23)\n    at allowInAnd (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9558:39)\n    at Object.allowInAnd (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:11297:16)\n    at Object.parseExpression (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:9558:17)\n    at Object.parseReturnStatement (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:11800:28)\n    at Object.parseStatementContent (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:11479:21)\n    at Object.parseStatement (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:11431:17)\n    at Object.parseBlockOrModuleBlockBody (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:12013:25)\n    at Object.parseBlockBody (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:11999:10)\n    at Object.parseBlock (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:11983:10)\n    at Object.parseFunctionBody (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:10963:24)\n    at Object.parseFunctionBodyAndFinish (/home/vitalii/php-projects/laravel/promptchat.base2/node_modules/@babel/parser/lib/index.js:10946:10)");

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












var SAVE = 1;
var CREATE_NEW = 2;

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
        setErrors = _ref.setErrors,
        setFieldValue = _ref.setFieldValue;
    var formattedData = {
      integration_id: values.integration_id,
      phone_number: values.phone_number,
      variables: values.variables.toJS()
    };
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("post", "/methods/clients", {}, formattedData).data(function () {
      setSuccess(values.createNew ? CREATE_NEW : SAVE);
      setSubmitting(false);
      setFieldValue("createNew", false);
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
      createNew: false,
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
    show: !!success,
    text: t("clients.create-page.client-created-message"),
    onConfirm: function onConfirm() {
      setSuccess(false);

      if (success === SAVE) {
        setRedirect(true);
      }
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateClientPage);

/***/ })

}]);