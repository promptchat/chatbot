(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./resources/js/components/form/base/DateInput.js":
/*!********************************************************!*\
  !*** ./resources/js/components/form/base/DateInput.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DateInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-datepicker */ "./node_modules/react-datepicker/dist/react-datepicker.min.js");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale */ "./node_modules/date-fns/esm/locale/index.js");
/* harmony import */ var _hooks_useGetDateFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useGetDateFormat */ "./resources/js/hooks/useGetDateFormat.js");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-datepicker/dist/react-datepicker.css */ "./node_modules/react-datepicker/dist/react-datepicker.css");
/* harmony import */ var react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_datepicker_dist_react_datepicker_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _helpers_momentDateFormatToDateSelect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/helpers/momentDateFormatToDateSelect */ "./resources/js/helpers/momentDateFormatToDateSelect.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_8__);









function DateInput(_ref) {
  var value = _ref.value,
      _onChange = _ref.onChange,
      customInput = _ref.customInput,
      placeholder = _ref.placeholder,
      formGroupClass = _ref.formGroupClass,
      inputClass = _ref.inputClass,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(react_datepicker__WEBPACK_IMPORTED_MODULE_3__["registerLocale"])(window.locale, date_fns_locale__WEBPACK_IMPORTED_MODULE_4__[window.locale]);
  }, []);
  var dateFormat = Object(_hooks_useGetDateFormat__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var inputDateFormat = Object(_helpers_momentDateFormatToDateSelect__WEBPACK_IMPORTED_MODULE_7__["default"])(dateFormat);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(formGroupClass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    selected: value ? new Date(value * 1000) : null,
    onChange: function onChange(date) {
      return _onChange(date ? Math.ceil(date.getTime() / 1000) : null);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()("form-control", inputClass),
    dateFormat: inputDateFormat,
    customInput: customInput,
    placeholderText: placeholder,
    locale: window.locale,
    minDate: minDate,
    maxDate: maxDate
  }));
}
DateInput.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  customInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  formGroupClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  inputClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  minDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  maxDate: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

/***/ }),

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

/***/ "./resources/js/components/widgets/table/TableTag.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/widgets/table/TableTag.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TableTag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function TableTag(_ref) {
  var name = _ref.name;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "table-tag d-inline-block px-2 py-1 mr-1 mb-1"
  }, name);
}
TableTag.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

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

/***/ "./resources/js/components/widgets/table/filters/CheckboxFilterSwitcher.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/widgets/table/filters/CheckboxFilterSwitcher.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_FilterOperators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/constants/FilterOperators */ "./resources/js/constants/FilterOperators.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");
/* harmony import */ var _components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/table/filters/FilterSwitcher */ "./resources/js/components/widgets/table/filters/FilterSwitcher.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");








function FilterView(_ref) {
  var filter = _ref.filter,
      handleChange = _ref.handleChange,
      displayName = _ref.displayName;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  var onChange = function onChange(fieldName, value) {
    handleChange(filter.set("value", value ? value : null).set("filterValue", value ? t("common.yes") : t("common.no")).set("displayingType", _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_3__["FILTER_DISPLAY_TEXT"]));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_4__["default"], {
    formGroupClass: "py-3 pr-5",
    id: "live-chat-activity",
    label: displayName,
    name: "scopeHasLastActivity",
    value: filter.get("filterValue") || 0,
    setFieldValue: onChange
  });
}

FilterView.propTypes = {
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

function CheckboxFilterSwitcher(_ref2) {
  var filters = _ref2.filters,
      changeFilters = _ref2.changeFilters,
      column = _ref2.column,
      displayName = _ref2.displayName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_5__["default"], {
    filters: filters,
    changeFilters: changeFilters,
    column: column,
    displayName: displayName,
    operator: _constants_FilterOperators__WEBPACK_IMPORTED_MODULE_2__["OPERATOR_EQ"],
    renderView: function renderView(currentFilter, handleChange) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FilterView, {
        filter: currentFilter,
        handleChange: handleChange,
        displayName: displayName
      });
    }
  });
}

CheckboxFilterSwitcher.propTypes = {
  changeFilters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  column: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  filters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (CheckboxFilterSwitcher);

/***/ }),

/***/ "./resources/js/components/widgets/table/filters/TagsFilterSwitcher.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/widgets/table/filters/TagsFilterSwitcher.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async */ "./node_modules/react-select/async/dist/react-select.browser.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/table/filters/FilterSwitcher */ "./resources/js/components/widgets/table/filters/FilterSwitcher.js");
/* harmony import */ var _constants_FilterOperators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants/FilterOperators */ "./resources/js/constants/FilterOperators.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
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
  container: function container(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      border: "1px solid #ced4da",
      display: "inline-block",
      width: "auto",
      borderRadius: "5px",
      minHeight: "35px"
    });
  },
  control: function control(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      border: "none",
      minHeight: "35px",
      "&, &:hover": {
        border: "none",
        boxShadow: "none"
      },
      background: "transparent"
    });
  },
  singleValue: function singleValue(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      margin: "0",
      font: "normal normal 15px/17px 'Roboto Regular', sans-serif",
      top: "45%"
    });
  },
  valueContainer: function valueContainer(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      padding: "2px 0 2px 8px",
      width: "130px"
    });
  },
  indicatorsContainer: function indicatorsContainer(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      "& > div": {
        padding: "8px 4px 8px 0"
      },
      top: "-3px",
      paddingLeft: "6px",
      alignItems: "baseline"
    });
  },
  indicatorSeparator: function indicatorSeparator(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      display: "none"
    });
  },
  placeholder: function placeholder(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      font: "normal normal 15px/18px 'Roboto Regular', sans-serif",
      color: "#B0B0B0"
    });
  },
  option: function option(styles) {
    return _objectSpread(_objectSpread({}, styles), {}, {
      font: "normal normal 15px/17px 'Roboto Regular', sans-serif",
      "&:hover, &:focus, &:active": {
        font: "normal normal 15px/17px 'Roboto Regular', sans-serif"
      }
    });
  }
};

function SearchView(_ref) {
  var filter = _ref.filter,
      handleChange = _ref.handleChange,
      loadOptions = _ref.loadOptions;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(Object(immutable__WEBPACK_IMPORTED_MODULE_5__["isImmutable"])(filter.get("filterValue")) ? filter.get("filterValue").toJS() : filter.get("filterValue")),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var onChange = function onChange(options) {
    setValue(options);
    handleChange(filter.set("value", options.length ? options.map(function (option) {
      return option.value;
    }) : null).set("filterValue", options.length ? options : null).set("displayingType", _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_6__["FILTER_DISPLAY_TAGS"]));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_1__["default"], {
    styles: selectStyles,
    cacheOptions: true,
    defaultOptions: true,
    loadOptions: loadOptions,
    onChange: onChange,
    value: value,
    isMulti: true,
    placeholder: t("tables.filter-select-placeholder", {
      name: filter.get("display")
    })
  });
}

SearchView.propTypes = {
  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  loadOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

function TagsFilterSwitcher(_ref2) {
  var filters = _ref2.filters,
      changeFilters = _ref2.changeFilters,
      column = _ref2.column,
      displayName = _ref2.displayName,
      loadOptions = _ref2.loadOptions;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_3__["default"], {
    filters: filters,
    changeFilters: changeFilters,
    column: column,
    displayName: displayName,
    operator: _constants_FilterOperators__WEBPACK_IMPORTED_MODULE_4__["OPERATOR_SCOPE"],
    renderView: function renderView(currentFilter, handleChange) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchView, {
        filter: currentFilter,
        handleChange: handleChange,
        displayName: displayName,
        loadOptions: loadOptions
      });
    }
  });
}

TagsFilterSwitcher.propTypes = {
  loadOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  changeFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  column: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  filters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TagsFilterSwitcher));

/***/ }),

/***/ "./resources/js/containers/clients/index/DateFromCustomInput.js":
/*!**********************************************************************!*\
  !*** ./resources/js/containers/clients/index/DateFromCustomInput.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");




var DateFromCustomInput = function DateFromCustomInput(_ref, ref) {
  var id = _ref.id,
      value = _ref.value,
      onClick = _ref.onClick,
      onChange = _ref.onChange,
      placeholder = _ref.placeholder;
  return (
    /*#__PURE__*/
    //eslint-disable-line
    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
      className: "date-custom-input-group"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupAddon"], {
      addonType: "prepend"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroupText"], {
      className: "prepend-icon pl-3 pr-0"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: id,
      className: "icon-size-16 mb-0 d-flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaRegCalendarAlt"], {
      className: "color-gray"
    })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      className: "date-custom-input rounded-0 border-left-0 pl-2",
      ref: ref,
      id: id,
      value: value,
      onClick: onClick,
      placeholder: placeholder,
      onChange: onChange
    }))
  );
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(DateFromCustomInput));

/***/ }),

/***/ "./resources/js/containers/clients/index/SearchBar.js":
/*!************************************************************!*\
  !*** ./resources/js/containers/clients/index/SearchBar.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_form_SearchField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/SearchField */ "./resources/js/components/form/SearchField.js");
/* harmony import */ var _components_form_base_DateInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/base/DateInput */ "./resources/js/components/form/base/DateInput.js");
/* harmony import */ var _containers_clients_index_DateFromCustomInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/clients/index/DateFromCustomInput */ "./resources/js/containers/clients/index/DateFromCustomInput.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _constants_FilterOperators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/constants/FilterOperators */ "./resources/js/constants/FilterOperators.js");
/* harmony import */ var _components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/widgets/table/filters/FilterSwitcher */ "./resources/js/components/widgets/table/filters/FilterSwitcher.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js");
/* harmony import */ var _components_widgets_table_filters_CheckboxFilterSwitcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/table/filters/CheckboxFilterSwitcher */ "./resources/js/components/widgets/table/filters/CheckboxFilterSwitcher.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _hooks_useGetDate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/hooks/useGetDate */ "./resources/js/hooks/useGetDate.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function MessageFilterView(_ref) {
  var filter = _ref.filter,
      handleChange = _ref.handleChange;
  var formatDate = Object(_hooks_useGetDate__WEBPACK_IMPORTED_MODULE_11__["default"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation.t;

  var wordDate = t("clients.search-panel.message-created");
  var generatePreviewText = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newValue) {
    var formattedFrom = newValue.from ? formatDate(newValue.from) : null;
    var formattedTo = newValue.to ? formatDate(newValue.to) : null;

    if (newValue.message && formattedFrom && formattedTo) {
      return "\"".concat(newValue.message, "\" ").concat(wordDate, " ").concat(formattedFrom, " - ").concat(formattedTo);
    }

    if (newValue.message && formattedFrom) {
      return "\"".concat(newValue.message, "\" ").concat(wordDate, " >= ").concat(formattedFrom);
    }

    if (newValue.message && formattedTo) {
      return "\"".concat(newValue.message, "\" ").concat(wordDate, " <= ").concat(formattedTo);
    }

    if (formattedFrom && formattedTo) {
      return "".concat(wordDate, " ").concat(formattedFrom, " - ").concat(formattedTo);
    }

    if (formattedFrom) {
      return "".concat(wordDate, " >= ").concat(formattedFrom);
    }

    if (formattedTo) {
      return "".concat(wordDate, " <= ").concat(formattedTo);
    }

    if (newValue.message) {
      return "\"".concat(newValue.message, "\"");
    }
  }, [formatDate, wordDate]);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      from = _useState4[0],
      setFrom = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      to = _useState6[0],
      setTo = _useState6[1];

  var oldValue = Object(immutable__WEBPACK_IMPORTED_MODULE_10__["isImmutable"])(filter.get("value")) ? filter.get("value") : Object(immutable__WEBPACK_IMPORTED_MODULE_10__["Map"])(filter.get("value") || {});
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setMessage(oldValue.get("message") || "");
    setFrom(oldValue.get("from") || null);
    setTo(oldValue.get("to") || null);
  }, [oldValue]);
  var timerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var setFilter = function setFilter(message, from, to) {
    var newValue = {
      message: message,
      from: from,
      to: to
    };
    handleChange(filter.set("value", message || from || to ? newValue : null).set("filterValue", generatePreviewText(newValue)).set("displayingType", _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_8__["FILTER_DISPLAY_TEXT"]));
  };

  var onSearchInMessagesChange = function onSearchInMessagesChange(e) {
    var newMsgText = e.target.value;
    setMessage(newMsgText);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(function () {
      return setFilter(newMsgText, from, to);
    }, 500);
  };

  var onDateFromChange = function onDateFromChange(date) {
    setFrom(date);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(function () {
      return setFilter(message, date, to);
    }, 0);
  };

  var onDateToChange = function onDateToChange(date) {
    setTo(date);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(function () {
      return setFilter(message, from, date);
    }, 0);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-wrap justify-content-between align-items-baseline flex-grow-1 mr-md-4 pr-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SearchField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    formGroupClass: "mr-4 py-3",
    id: "search",
    name: "search",
    onChange: onSearchInMessagesChange,
    value: message,
    placeholder: t("clients.search-panel.search-in-messages-placeholder")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_DateInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    formGroupClass: "date-input-form py-3",
    id: "date-from",
    onChange: onDateFromChange,
    customInput: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_clients_index_DateFromCustomInput__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    placeholder: t("clients.search-panel.date-from-placeholder"),
    value: from
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_DateInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    formGroupClass: "date-input-form date-input-form-to py-3",
    onChange: onDateToChange,
    placeholder: t("clients.search-panel.date-to-placeholder"),
    value: to
  })));
}

MessageFilterView.propTypes = {
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
function SearchBar(_ref2) {
  var filters = _ref2.filters,
      changeFilters = _ref2.changeFilters;

  var _useTranslation2 = Object(react_i18next__WEBPACK_IMPORTED_MODULE_5__["useTranslation"])(),
      t = _useTranslation2.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-bar d-flex flex-wrap mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_7__["default"], {
    filters: filters,
    changeFilters: changeFilters,
    column: "scopeSearchByMessage",
    displayName: t("clients.search-panel.message-filter-display-name"),
    operator: _constants_FilterOperators__WEBPACK_IMPORTED_MODULE_6__["OPERATOR_EQ"],
    renderView: function renderView(currentFilter, handleChange) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MessageFilterView, {
        filter: currentFilter,
        handleChange: handleChange
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-wrap align-items-baseline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_CheckboxFilterSwitcher__WEBPACK_IMPORTED_MODULE_9__["default"], {
    filters: filters,
    changeFilters: changeFilters,
    column: "scopeHasLastActivity",
    displayName: t("clients.search-panel.live-chat-activity-label")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    className: "btn btn-warning color-white px-4 pt-2 my-3 mr-2",
    to: "/clients/import-csv"
  }, t("clients.search-panel.import-csv")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
    to: "/clients/create",
    className: "btn btn-primary color-white px-4 pt-2 my-3"
  }, t("clients.search-panel.add-client-btn"))));
}
SearchBar.propTypes = {
  filters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  changeFilters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

/***/ }),

/***/ "./resources/js/containers/clients/index/index.js":
/*!********************************************************!*\
  !*** ./resources/js/containers/clients/index/index.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_reducers_clients_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/clients/actionCreators */ "./resources/js/redux/reducers/clients/actionCreators.js");
/* harmony import */ var _HOCs_withIndexPageLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/HOCs/withIndexPageLogic */ "./resources/js/HOCs/withIndexPageLogic.js");
/* harmony import */ var _components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/table/SortSwitcher */ "./resources/js/components/widgets/table/SortSwitcher.js");
/* harmony import */ var _components_widgets_table_filters_SelectFilterSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/table/filters/SelectFilterSwitcher */ "./resources/js/components/widgets/table/filters/SelectFilterSwitcher.js");
/* harmony import */ var _components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/widgets/table/filters/SearchFilterSwitcher */ "./resources/js/components/widgets/table/filters/SearchFilterSwitcher.js");
/* harmony import */ var _components_widgets_table_filters_TagsFilterSwitcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/widgets/table/filters/TagsFilterSwitcher */ "./resources/js/components/widgets/table/filters/TagsFilterSwitcher.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js");
/* harmony import */ var _components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/table/ActiveTableHeadContent */ "./resources/js/components/widgets/table/ActiveTableHeadContent.js");
/* harmony import */ var _components_widgets_table_TableTag__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/widgets/table/TableTag */ "./resources/js/components/widgets/table/TableTag.js");
/* harmony import */ var _components_widgets_table_VairablesDisplayer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/widgets/table/VairablesDisplayer */ "./resources/js/components/widgets/table/VairablesDisplayer.js");
/* harmony import */ var _components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/widgets/table/filters/FilterSwitcher */ "./resources/js/components/widgets/table/filters/FilterSwitcher.js");
/* harmony import */ var _components_widgets_Pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/widgets/Pagination */ "./resources/js/components/widgets/Pagination.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_widgets_table_actionColumn_TableActionColumn__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/TableActionColumn */ "./resources/js/components/widgets/table/actionColumn/TableActionColumn.js");
/* harmony import */ var _components_widgets_table_actionColumn_DeleteRecordAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/DeleteRecordAction */ "./resources/js/components/widgets/table/actionColumn/DeleteRecordAction.js");
/* harmony import */ var _containers_clients_index_SearchBar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/containers/clients/index/SearchBar */ "./resources/js/containers/clients/index/SearchBar.js");
/* harmony import */ var _hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/hooks/useGetDateTime */ "./resources/js/hooks/useGetDateTime.js");
/* harmony import */ var _components_widgets_table_Table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/components/widgets/table/Table */ "./resources/js/components/widgets/table/Table.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var _components_widgets_table_NoContentMessage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/components/widgets/table/NoContentMessage */ "./resources/js/components/widgets/table/NoContentMessage.js");
/* harmony import */ var _helpers_selectLoaders_loadCompanyTagsSelectOptions__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/helpers/selectLoaders/loadCompanyTagsSelectOptions */ "./resources/js/helpers/selectLoaders/loadCompanyTagsSelectOptions.js");
/* harmony import */ var _components_widgets_table_actionColumn_LinkAction__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/LinkAction */ "./resources/js/components/widgets/table/actionColumn/LinkAction.js");
/* harmony import */ var _containers_liveChat_liveChatRoutesConfig__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/containers/liveChat/liveChatRoutesConfig */ "./resources/js/containers/liveChat/liveChatRoutesConfig.js");
/* harmony import */ var _helpers_selectLoaders_loadIntegrationSelectOptions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @/helpers/selectLoaders/loadIntegrationSelectOptions */ "./resources/js/helpers/selectLoaders/loadIntegrationSelectOptions.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FilterItem__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FilterItem */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FilterItem.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");






























function ClientsIndex(_ref) {
  var filters = _ref.filters,
      sort = _ref.sort,
      data = _ref.data,
      currentPage = _ref.currentPage,
      lastPage = _ref.lastPage,
      changeFilters = _ref.changeFilters,
      changeSort = _ref.changeSort,
      changePage = _ref.changePage,
      selected = _ref.selected,
      toggleSelectAll = _ref.toggleSelectAll,
      toggleSelect = _ref.toggleSelect,
      total = _ref.total;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_14__["useTranslation"])(),
      t = _useTranslation.t;

  var formatDate = Object(_hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_18__["default"])();
  var selectedCount = 0;

  if (selected.get("all") || selected.get("list", Object(immutable__WEBPACK_IMPORTED_MODULE_28__["Map"])()).size) {
    if (selected.get("all")) {
      selectedCount = total - selected.get("list", Object(immutable__WEBPACK_IMPORTED_MODULE_28__["Map"])()).size;
    } else {
      selectedCount = selected.get("list", Object(immutable__WEBPACK_IMPORTED_MODULE_28__["Map"])()).size;
    }
  }

  console.log(selected.get("all"), selected.get("list", Object(immutable__WEBPACK_IMPORTED_MODULE_28__["Map"])()), selected.get("list", Object(immutable__WEBPACK_IMPORTED_MODULE_28__["Map"])()).size);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_20__["default"], null, t("clients.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_clients_index_SearchBar__WEBPACK_IMPORTED_MODULE_17__["default"], {
    filters: filters,
    changeFilters: changeFilters
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    filters: filters,
    changeFilters: changeFilters
  }, !!selectedCount && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filtersDisplayingPanel_FilterItem__WEBPACK_IMPORTED_MODULE_27__["default"], {
    filter: Object(immutable__WEBPACK_IMPORTED_MODULE_28__["Map"])({
      display: "Selected",
      filterValue: "".concat(selectedCount)
    }),
    deleteFilter: function deleteFilter() {}
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_Table__WEBPACK_IMPORTED_MODULE_19__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    checked: !!selected.get("all"),
    onChange: toggleSelectAll,
    type: "checkbox"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: t("clients.integration-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_4__["getCurrentSort"])(sort, "integrations.name") || Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_12__["getCurrentFilter"])(filters, "integrations.id")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sort: sort,
    name: "integrations.name",
    displayName: t("clients.integration-column"),
    changeSort: changeSort,
    order: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SelectFilterSwitcher__WEBPACK_IMPORTED_MODULE_5__["default"], {
    displayName: t("clients.integration-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "integrations.id",
    loadOptions: _helpers_selectLoaders_loadIntegrationSelectOptions__WEBPACK_IMPORTED_MODULE_25__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: t("clients.client-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_4__["getCurrentSort"])(sort, "clients.name") || Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_12__["getCurrentFilter"])(filters, "clients.name")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sort: sort,
    name: "clients.name",
    displayName: t("clients.client-column"),
    changeSort: changeSort,
    order: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_6__["default"], {
    displayName: t("clients.client-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "clients.name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: t("clients.tags-column"),
    active: Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_12__["getCurrentFilter"])(filters, "scopeTagsWhere")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_TagsFilterSwitcher__WEBPACK_IMPORTED_MODULE_7__["default"], {
    displayName: t("clients.tags-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "scopeTagsWhere",
    loadOptions: _helpers_selectLoaders_loadCompanyTagsSelectOptions__WEBPACK_IMPORTED_MODULE_22__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, t("clients.last-activity-column")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: t("clients.full-name-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_4__["getCurrentSort"])(sort, "scopeFullNameOrder") || Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_12__["getCurrentFilter"])(filters, "scopeFullNameWhere")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sort: sort,
    name: "scopeFullNameOrder",
    displayName: t("clients.full-name-column"),
    changeSort: changeSort,
    order: 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_6__["default"], {
    displayName: t("clients.full-name-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "scopeFullNameWhere"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: t("clients.phone-number-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_4__["getCurrentSort"])(sort, "scopePhoneNumberOrder") || Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_12__["getCurrentFilter"])(filters, "scopePhoneNumberWhere")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sort: sort,
    name: "scopePhoneNumberOrder",
    displayName: t("clients.phone-number-column"),
    changeSort: changeSort,
    order: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_6__["default"], {
    displayName: t("clients.phone-number-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "scopePhoneNumberWhere"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
    title: t("clients.variables-column"),
    active: Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_12__["getCurrentFilter"])(filters, "variables")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_6__["default"], {
    displayName: t("clients.variables-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "variables"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\xA0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, data.length ? data.map(function (client) {
    var _client$integration;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: client.id,
      id: client.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: function onChange() {
        return toggleSelect(client.id.toString());
      },
      checked: selected.get("all") ^ selected.getIn(["list", client.id.toString()]),
      type: "checkbox"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, (_client$integration = client.integration) === null || _client$integration === void 0 ? void 0 : _client$integration.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, client.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, client.tags.map(function (tag) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_TableTag__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: tag.id,
        name: tag.name
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, client.last_message_at ? formatDate(client.last_message_at) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, client.fullName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "phone-number"
    }, client.phoneNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_VairablesDisplayer__WEBPACK_IMPORTED_MODULE_11__["default"], {
      data: client.variables
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_TableActionColumn__WEBPACK_IMPORTED_MODULE_15__["default"], null, function (setConfirm) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_LinkAction__WEBPACK_IMPORTED_MODULE_23__["default"], {
        className: "align-items-center",
        url: _containers_liveChat_liveChatRoutesConfig__WEBPACK_IMPORTED_MODULE_24__["default"].chatRoute.getLink(client.liveChatTab, client.id),
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_26__["FaRegCommentAlt"], {
          className: "icon-size-15 color-blue mr-2"
        }),
        text: t("clients.live-chat-link")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_DeleteRecordAction__WEBPACK_IMPORTED_MODULE_16__["default"], {
        url: "/methods/clients/".concat(client.id),
        setConfirm: setConfirm,
        onSuccess: function onSuccess() {
          return changePage(currentPage);
        }
      }));
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_NoContentMessage__WEBPACK_IMPORTED_MODULE_21__["default"], {
    colspan: 8
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_Pagination__WEBPACK_IMPORTED_MODULE_13__["default"], {
    currentPage: currentPage,
    lastPage: lastPage,
    loadPage: changePage,
    route: "/clients"
  }));
}

ClientsIndex.propTypes = {
  changeFilters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  changeSort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  changePage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  lastPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  total: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  filters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  sort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  toggleSelectAll: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  toggleSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};

var stateToProps = function stateToProps(state) {
  var _clientsData$get;

  var clientsData = state.clients;
  return {
    loading: clientsData.get("loading"),
    data: (_clientsData$get = clientsData.get("data")) === null || _clientsData$get === void 0 ? void 0 : _clientsData$get.toArray(),
    errors: clientsData.get("errors"),
    currentPage: clientsData.get("currentPage"),
    lastPage: clientsData.get("lastPage"),
    filters: clientsData.get("filters"),
    sort: clientsData.get("sort"),
    selected: clientsData.get("selected"),
    total: clientsData.get("total")
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    loadPage: function loadPage(page, filters, sort, selected) {
      return dispatch(Object(_redux_reducers_clients_actionCreators__WEBPACK_IMPORTED_MODULE_2__["loadClients"])(page, filters, sort, selected));
    },
    toggleSelectAll: function toggleSelectAll() {
      return dispatch(Object(_redux_reducers_clients_actionCreators__WEBPACK_IMPORTED_MODULE_2__["selectAll"])());
    },
    toggleSelect: function toggleSelect(id) {
      return dispatch(Object(_redux_reducers_clients_actionCreators__WEBPACK_IMPORTED_MODULE_2__["selectToggle"])(id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOCs_withIndexPageLogic__WEBPACK_IMPORTED_MODULE_3__["default"])(ClientsIndex, stateToProps, dispatchToProps));

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

/***/ "./resources/js/helpers/momentDateFormatToDateSelect.js":
/*!**************************************************************!*\
  !*** ./resources/js/helpers/momentDateFormatToDateSelect.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return momentDateFormatToDateSelect; });
function momentDateFormatToDateSelect(date) {
  switch (date) {
    case "MM/DD/YYYY":
      return "MM/dd/yyyy";

    case "DD.MM.YYYY":
      return "dd.MM.yyyy";
  }
}

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

/***/ "./resources/js/helpers/selectLoaders/loadIntegrationSelectOptions.js":
/*!****************************************************************************!*\
  !*** ./resources/js/helpers/selectLoaders/loadIntegrationSelectOptions.js ***!
  \****************************************************************************/
/*! exports provided: getLoadIntegrationSelectOptions, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLoadIntegrationSelectOptions", function() { return getLoadIntegrationSelectOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function getLoadIntegrationSelectOptions() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return function loadIntegrationSelectOptions(inputValue) {
    return new Promise(function (resolve) {
      var params = {
        q: inputValue
      };

      if (type) {
        params.type = type;
      }

      _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/integrations/search", params).data(function (data) {
        resolve(data.map(function (integration) {
          return {
            label: integration.name,
            value: integration.id,
            integration: integration
          };
        }));
      });
    });
  };
}
var loadIntegrationSelectOptions = getLoadIntegrationSelectOptions();
/* harmony default export */ __webpack_exports__["default"] = (loadIntegrationSelectOptions);

/***/ }),

/***/ "./resources/js/redux/reducers/clients/actionCreators.js":
/*!***************************************************************!*\
  !*** ./resources/js/redux/reducers/clients/actionCreators.js ***!
  \***************************************************************/
/*! exports provided: selectAll, selectToggle, loadClients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectToggle", function() { return selectToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadClients", function() { return loadClients; });
/* harmony import */ var _redux_reducers_clients_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/clients/actionTypes */ "./resources/js/redux/reducers/clients/actionTypes.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _helpers_filtersToString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/filtersToString */ "./resources/js/helpers/filtersToString.js");
/* harmony import */ var _helpers_sortToString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/sortToString */ "./resources/js/helpers/sortToString.js");
/* harmony import */ var _redux_helpers_getStandardIndexActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/helpers/getStandardIndexActions */ "./resources/js/redux/helpers/getStandardIndexActions.js");






var _getStandardIndexActi = Object(_redux_helpers_getStandardIndexActions__WEBPACK_IMPORTED_MODULE_4__["default"])(_redux_reducers_clients_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"]),
    loading = _getStandardIndexActi.loading,
    itemsListLoaded = _getStandardIndexActi.itemsListLoaded,
    error = _getStandardIndexActi.error;

var selectAll = function selectAll() {
  return {
    type: _redux_reducers_clients_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SELECT_ALL
  };
};
var selectToggle = function selectToggle(id) {
  return {
    type: _redux_reducers_clients_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].SELECT_TOGGLE,
    payload: {
      id: id
    }
  };
};
var loadClients = function loadClients(page, filters, sort, selected) {
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
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/clients", params, {}).then(function (response) {
      dispatch(itemsListLoaded({
        filters: filters,
        sort: sort,
        selected: selected,
        response: response
      }));
    })["catch"](function (response) {
      return dispatch(error(response));
    });
  };
};

/***/ })

}]);