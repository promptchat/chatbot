(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./resources/js/containers/calendar/create.js":
/*!****************************************************!*\
  !*** ./resources/js/containers/calendar/create.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _containers_calendar_form_CalendarForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/calendar/form/CalendarForm */ "./resources/js/containers/calendar/form/CalendarForm.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var lodash_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash/util */ "./node_modules/lodash/util.js");
/* harmony import */ var lodash_util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _containers_calendar_form_formDataToSubmit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/containers/calendar/form/formDataToSubmit */ "./resources/js/containers/calendar/form/formDataToSubmit.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var workingHours = [{
  day_of_week: 0,
  day: null,
  work_from: "00:00",
  work_to: "00:00",
  dinner_from: "00:00",
  dinner_to: "00:00",
  working: 0
}, {
  day_of_week: 1,
  day: null,
  work_from: "09:00",
  work_to: "18:00",
  dinner_from: "13:00",
  dinner_to: "14:00",
  working: 1
}, {
  day_of_week: 2,
  day: null,
  work_from: "09:00",
  work_to: "18:00",
  dinner_from: "13:00",
  dinner_to: "14:00",
  working: 1
}, {
  day_of_week: 3,
  day: null,
  work_from: "09:00",
  work_to: "18:00",
  dinner_from: "13:00",
  dinner_to: "14:00",
  working: 1
}, {
  day_of_week: 4,
  day: null,
  work_from: "09:00",
  work_to: "18:00",
  dinner_from: "13:00",
  dinner_to: "14:00",
  working: 1
}, {
  day_of_week: 5,
  day: null,
  work_from: "09:00",
  work_to: "18:00",
  dinner_from: "13:00",
  dinner_to: "14:00",
  working: 1
}, {
  day_of_week: 6,
  day: null,
  work_from: "09:00",
  work_to: "14:00",
  dinner_from: null,
  dinner_to: null,
  working: 0
}];

function CreateCalendarPage() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      redirect = _useState2[0],
      setRedirect = _useState2[1];

  var onSubmit = function onSubmit(values, _ref) {
    var setErrors = _ref.setErrors,
        setSubmitting = _ref.setSubmitting;
    var formattedData = Object(_containers_calendar_form_formDataToSubmit__WEBPACK_IMPORTED_MODULE_8__["default"])(values);
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_7__["default"].call("post", "/methods/calendars", {}, formattedData).validation(function (msg, errors) {
      setErrors(errors);
      setSubmitting(false);
    }).data(function () {
      setSubmitting(false);
      setRedirect(true);
    })["catch"](function () {
      setSubmitting(false);
    });
  };

  var initialValues = {
    name: "",
    default_event_name: "",
    default_minutes_for_event: "",
    emails: [],
    working_hours: Object(immutable__WEBPACK_IMPORTED_MODULE_5__["List"])(workingHours.map(function (data) {
      return Object(immutable__WEBPACK_IMPORTED_MODULE_5__["Map"])(_objectSpread({
        id: Object(lodash_util__WEBPACK_IMPORTED_MODULE_6__["uniqueId"])()
      }, data));
    })),
    events: Object(immutable__WEBPACK_IMPORTED_MODULE_5__["List"])([])
  };

  if (redirect) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_9__["Redirect"], {
      to: "/calendars/1"
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"], null, t("calendars.create-page.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_calendar_form_CalendarForm__WEBPACK_IMPORTED_MODULE_4__["default"], {
    handleSubmit: onSubmit,
    initialValues: initialValues
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (CreateCalendarPage);

/***/ })

}]);