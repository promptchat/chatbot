(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

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
      formGroupClass = _ref.formGroupClass;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(react_datepicker__WEBPACK_IMPORTED_MODULE_3__["registerLocale"])(window.locale, date_fns_locale__WEBPACK_IMPORTED_MODULE_4__[window.locale]);
  }, []);
  var dateFormat = Object(_hooks_useGetDateFormat__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_8___default()(formGroupClass)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_datepicker__WEBPACK_IMPORTED_MODULE_3___default.a, {
    selected: value ? new Date(value * 1000) : null,
    onChange: function onChange(date) {
      return _onChange(date.getTime() / 1000);
    },
    className: "form-control",
    dateFormat: Object(_helpers_momentDateFormatToDateSelect__WEBPACK_IMPORTED_MODULE_7__["default"])(dateFormat),
    customInput: customInput,
    placeholderText: placeholder,
    locale: window.locale
  }));
}
DateInput.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  customInput: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  formGroupClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./resources/js/components/widgets/table/JsonDisplayer.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/widgets/table/JsonDisplayer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function JsonDisplayer(_ref) {
  var data = _ref.data;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var alwaysVisible = [];
  var visibleByRequirement = [];
  var c = 0;

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var item = {
        name: key,
        value: data[key]
      };

      if (c < 3) {
        alwaysVisible.push(item);
      } else {
        visibleByRequirement.push(item);
      }

      c++;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "variable-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, alwaysVisible.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "item-name font-weight-bold"
    }, item.name, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "item-value"
    }, item.value));
  })), visibleByRequirement.length && !show ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-link no-shadow p-0 color-blue text-middle text-dec-none",
    onClick: function onClick() {
      return setShow(true);
    }
  }, t("tables.json-show-more", {
    count: visibleByRequirement.length
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, visibleByRequirement.length && show ? visibleByRequirement.map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: item.name
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "item-name font-weight-bold"
    }, item.name, "\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "item-value"
    }, item.value));
  }) : null));
}

JsonDisplayer.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(JsonDisplayer));

/***/ }),

/***/ "./resources/js/components/widgets/table/NoContentMessage.js":
/*!*******************************************************************!*\
  !*** ./resources/js/components/widgets/table/NoContentMessage.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NoContentMessage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");



function NoContentMessage(_ref) {
  var colspan = _ref.colspan;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_2__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    colSpan: colspan,
    className: "text-center no-data font-italic color-gray pt-4"
  }, t("tables.no-data")));
}
NoContentMessage.propTypes = {
  colspan: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
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

/***/ "./resources/js/components/widgets/table/filters/SelectFilterSwitcher.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/widgets/table/filters/SelectFilterSwitcher.js ***!
  \*******************************************************************************/
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

  var onChange = function onChange(option) {
    setValue(option);
    handleChange(filter.set("value", option ? option.value : null).set("filterValue", option).set("displayingType", _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_6__["FILTER_DISPLAY_SELECT"]));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select_async__WEBPACK_IMPORTED_MODULE_1__["default"], {
    styles: selectStyles,
    cacheOptions: true,
    defaultOptions: true,
    loadOptions: loadOptions,
    onChange: onChange,
    value: value,
    placeholder: t("tables.filter-select-placeholder", {
      name: filter.get("display")
    }),
    isClearable: true
  });
}

SearchView.propTypes = {
  filter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  loadOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

function SelectFilterSwitcher(_ref2) {
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
    operator: _constants_FilterOperators__WEBPACK_IMPORTED_MODULE_4__["OPERATOR_EQ"],
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

SelectFilterSwitcher.propTypes = {
  loadOptions: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  changeFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  column: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  filters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SelectFilterSwitcher));

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

/***/ "./resources/js/containers/clients/helpers/loadIntegrationSelectOptions.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/containers/clients/helpers/loadIntegrationSelectOptions.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadIntegrationSelectOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadIntegrationSelectOptions(inputValue) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/integrations/search", {
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

/***/ "./resources/js/containers/clients/helpers/loadTagsSelectOptions.js":
/*!**************************************************************************!*\
  !*** ./resources/js/containers/clients/helpers/loadTagsSelectOptions.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loadTagsSelectOptions; });
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");

function loadTagsSelectOptions(inputValue) {
  return new Promise(function (resolve) {
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_0__["default"].call("get", "/methods/tags/search", {
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
      onChange: function onChange() {}
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
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_form_SearchField__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/SearchField */ "./resources/js/components/form/SearchField.js");
/* harmony import */ var _components_form_base_DateInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/form/base/DateInput */ "./resources/js/components/form/base/DateInput.js");
/* harmony import */ var _containers_clients_index_DateFromCustomInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/clients/index/DateFromCustomInput */ "./resources/js/containers/clients/index/DateFromCustomInput.js");
/* harmony import */ var _components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/CheckboxField */ "./resources/js/components/form/CheckboxField.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");







function SearchBar() {
  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  var onLiveChatActivityChange = function onLiveChatActivityChange(fieldName, value) {
    console.log(fieldName, value); //eslint-disable-line
  };

  var onSearchInMessagesChange = function onSearchInMessagesChange(e) {
    console.log(e.target.value); //eslint-disable-line
  };

  var onDateFromChange = function onDateFromChange(date) {
    console.log(date); //eslint-disable-line
  };

  var onDateToChange = function onDateToChange(date) {
    console.log(date); //eslint-disable-line
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "search-bar d-flex flex-wrap mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-wrap justify-content-between align-items-baseline flex-grow-1 mr-md-4 pr-md-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SearchField__WEBPACK_IMPORTED_MODULE_2__["default"], {
    formGroupClass: "mr-4 py-3",
    id: "search",
    name: "search",
    onChange: onSearchInMessagesChange,
    placeholder: t("clients.search-panel.search-in-messages-placeholder")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_DateInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    formGroupClass: "date-input-form py-3",
    id: "date-from",
    onChange: onDateFromChange,
    customInput: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_clients_index_DateFromCustomInput__WEBPACK_IMPORTED_MODULE_4__["default"], null),
    placeholder: t("clients.search-panel.date-from-placeholder")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_base_DateInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    formGroupClass: "date-input-form date-input-form-to py-3",
    onChange: onDateToChange,
    placeholder: t("clients.search-panel.date-to-placeholder")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-wrap align-items-baseline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_CheckboxField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    formGroupClass: "py-3 pr-5",
    id: "live-chat-activity",
    label: t("clients.search-panel.live-chat-activity-label"),
    name: "live_chat_activity",
    value: false,
    setFieldValue: onLiveChatActivityChange
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    color: "primary",
    className: "color-white px-4 pt-2 my-3"
  }, t("clients.search-panel.add-client-btn"))));
}

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
/* harmony import */ var _containers_clients_helpers_loadTagsSelectOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/containers/clients/helpers/loadTagsSelectOptions */ "./resources/js/containers/clients/helpers/loadTagsSelectOptions.js");
/* harmony import */ var _containers_clients_helpers_loadIntegrationSelectOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/containers/clients/helpers/loadIntegrationSelectOptions */ "./resources/js/containers/clients/helpers/loadIntegrationSelectOptions.js");
/* harmony import */ var _components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/widgets/table/SortSwitcher */ "./resources/js/components/widgets/table/SortSwitcher.js");
/* harmony import */ var _components_widgets_table_filters_SelectFilterSwitcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/widgets/table/filters/SelectFilterSwitcher */ "./resources/js/components/widgets/table/filters/SelectFilterSwitcher.js");
/* harmony import */ var _components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/widgets/table/filters/SearchFilterSwitcher */ "./resources/js/components/widgets/table/filters/SearchFilterSwitcher.js");
/* harmony import */ var _components_widgets_table_filters_TagsFilterSwitcher__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/table/filters/TagsFilterSwitcher */ "./resources/js/components/widgets/table/filters/TagsFilterSwitcher.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js");
/* harmony import */ var _components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/widgets/table/ActiveTableHeadContent */ "./resources/js/components/widgets/table/ActiveTableHeadContent.js");
/* harmony import */ var _components_widgets_table_TableTag__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/widgets/table/TableTag */ "./resources/js/components/widgets/table/TableTag.js");
/* harmony import */ var _components_widgets_table_JsonDisplayer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/widgets/table/JsonDisplayer */ "./resources/js/components/widgets/table/JsonDisplayer.js");
/* harmony import */ var _components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/widgets/table/filters/FilterSwitcher */ "./resources/js/components/widgets/table/filters/FilterSwitcher.js");
/* harmony import */ var _components_widgets_Pagination__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/widgets/Pagination */ "./resources/js/components/widgets/Pagination.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_widgets_table_actionColumn_TableActionColumn__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/TableActionColumn */ "./resources/js/components/widgets/table/actionColumn/TableActionColumn.js");
/* harmony import */ var _components_widgets_table_actionColumn_DeleteRecordAction__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/DeleteRecordAction */ "./resources/js/components/widgets/table/actionColumn/DeleteRecordAction.js");
/* harmony import */ var _components_widgets_table_actionColumn_EditRecordAction__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/EditRecordAction */ "./resources/js/components/widgets/table/actionColumn/EditRecordAction.js");
/* harmony import */ var _containers_clients_index_SearchBar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/containers/clients/index/SearchBar */ "./resources/js/containers/clients/index/SearchBar.js");
/* harmony import */ var _hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/hooks/useGetDateTime */ "./resources/js/hooks/useGetDateTime.js");
/* harmony import */ var _components_widgets_table_Table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/components/widgets/table/Table */ "./resources/js/components/widgets/table/Table.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var _components_widgets_table_NoContentMessage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/components/widgets/table/NoContentMessage */ "./resources/js/components/widgets/table/NoContentMessage.js");


























function ClientsIndex(_ref) {
  var filters = _ref.filters,
      sort = _ref.sort,
      data = _ref.data,
      currentPage = _ref.currentPage,
      lastPage = _ref.lastPage,
      changeFilters = _ref.changeFilters,
      changeSort = _ref.changeSort,
      changePage = _ref.changePage;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_16__["useTranslation"])(),
      t = _useTranslation.t;

  var formatDate = Object(_hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_21__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_23__["default"], null, t("clients.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_clients_index_SearchBar__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    filters: filters,
    changeFilters: changeFilters
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_Table__WEBPACK_IMPORTED_MODULE_22__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: t("clients.integration-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_6__["getCurrentSort"])(sort, "integrations.name") || Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_14__["getCurrentFilter"])(filters, "integrations.id")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sort: sort,
    name: "integrations.name",
    displayName: t("clients.integration-column"),
    changeSort: changeSort,
    order: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SelectFilterSwitcher__WEBPACK_IMPORTED_MODULE_7__["default"], {
    displayName: t("clients.integration-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "integrations.id",
    loadOptions: _containers_clients_helpers_loadIntegrationSelectOptions__WEBPACK_IMPORTED_MODULE_5__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: t("clients.client-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_6__["getCurrentSort"])(sort, "clients.name") || Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_14__["getCurrentFilter"])(filters, "clients.name")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sort: sort,
    name: "clients.name",
    displayName: t("clients.client-column"),
    changeSort: changeSort,
    order: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_8__["default"], {
    displayName: t("clients.client-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "clients.name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: t("clients.tags-column"),
    active: Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_14__["getCurrentFilter"])(filters, "scopeTagsWhere")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_TagsFilterSwitcher__WEBPACK_IMPORTED_MODULE_9__["default"], {
    displayName: t("clients.tags-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "scopeTagsWhere",
    loadOptions: _containers_clients_helpers_loadTagsSelectOptions__WEBPACK_IMPORTED_MODULE_4__["default"]
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, t("clients.last-activity-column")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: t("clients.full-name-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_6__["getCurrentSort"])(sort, "scopeFullNameOrder") || Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_14__["getCurrentFilter"])(filters, "scopeFullNameWhere")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sort: sort,
    name: "scopeFullNameOrder",
    displayName: t("clients.full-name-column"),
    changeSort: changeSort,
    order: 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_8__["default"], {
    displayName: t("clients.full-name-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "scopeFullNameWhere"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: t("clients.phone-number-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_6__["getCurrentSort"])(sort, "scopePhoneNumberOrder") || Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_14__["getCurrentFilter"])(filters, "scopePhoneNumberWhere")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sort: sort,
    name: "scopePhoneNumberOrder",
    displayName: t("clients.phone-number-column"),
    changeSort: changeSort,
    order: 4
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_8__["default"], {
    displayName: t("clients.phone-number-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "scopePhoneNumberWhere"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
    title: t("clients.variables-column"),
    active: Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_14__["getCurrentFilter"])(filters, "variables")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_8__["default"], {
    displayName: t("clients.variables-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "variables"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\xA0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, data.length ? data.map(function (client) {
    var _client$integration;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: client.id,
      id: client.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, (_client$integration = client.integration) === null || _client$integration === void 0 ? void 0 : _client$integration.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, client.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, client.tags.map(function (tag) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_TableTag__WEBPACK_IMPORTED_MODULE_12__["default"], {
        key: tag.id,
        name: tag.name
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, formatDate(1605182295)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, client.fullName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "phone-number"
    }, client.phoneNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "variable-items"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_JsonDisplayer__WEBPACK_IMPORTED_MODULE_13__["default"], {
      data: client.variables
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_TableActionColumn__WEBPACK_IMPORTED_MODULE_17__["default"], null, function (setConfirm) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_EditRecordAction__WEBPACK_IMPORTED_MODULE_19__["default"], {
        url: "/clients/".concat(client.id, "/edit")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_DeleteRecordAction__WEBPACK_IMPORTED_MODULE_18__["default"], {
        url: "/methods/clients/".concat(client.id),
        setConfirm: setConfirm,
        onSuccess: function onSuccess() {
          return changePage(currentPage);
        }
      }));
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_NoContentMessage__WEBPACK_IMPORTED_MODULE_24__["default"], {
    colspan: 8
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_Pagination__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
  filters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  sort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
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
    sort: clientsData.get("sort")
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    loadPage: function loadPage(page, filters, sort) {
      return dispatch(Object(_redux_reducers_clients_actionCreators__WEBPACK_IMPORTED_MODULE_2__["loadClients"])(page, filters, sort));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOCs_withIndexPageLogic__WEBPACK_IMPORTED_MODULE_3__["default"])(ClientsIndex, stateToProps, dispatchToProps));

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

/***/ "./resources/js/hooks/useGetDateTime.js":
/*!**********************************************!*\
  !*** ./resources/js/hooks/useGetDateTime.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useGetDateTime; });
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");
/* harmony import */ var _hooks_useGetDateFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useGetDateFormat */ "./resources/js/hooks/useGetDateFormat.js");
/* harmony import */ var _hooks_useGetTimezone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useGetTimezone */ "./resources/js/hooks/useGetTimezone.js");




var moment = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");

function useGetDateTime() {
  var user = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var dateFormat = Object(_hooks_useGetDateFormat__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var timezone = Object(_hooks_useGetTimezone__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var isAmPm = user ? user.is_am_pm : true;
  var fullFormat = (isAmPm ? "hh:mm a" : "HH:mm") + " " + dateFormat;
  return function (date) {
    return moment(date * 1000).tz(timezone).format(fullFormat);
  };
}

/***/ }),

/***/ "./resources/js/redux/reducers/clients/actionCreators.js":
/*!***************************************************************!*\
  !*** ./resources/js/redux/reducers/clients/actionCreators.js ***!
  \***************************************************************/
/*! exports provided: loadClients */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadClients", function() { return loadClients; });
/* harmony import */ var _redux_reducers_clients_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/clients/actionTypes */ "./resources/js/redux/reducers/clients/actionTypes.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _helpers_filtersToString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/filtersToString */ "./resources/js/helpers/filtersToString.js");
/* harmony import */ var _helpers_sortToString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/sortToString */ "./resources/js/helpers/sortToString.js");





var loading = function loading() {
  return {
    type: _redux_reducers_clients_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING
  };
};

var error = function error(data) {
  return {
    type: _redux_reducers_clients_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING_ERROR,
    payload: data
  };
};

var itemsListLoaded = function itemsListLoaded(data) {
  return {
    type: _redux_reducers_clients_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ITEMS_LOADED,
    payload: data
  };
};

var loadClients = function loadClients(page, filters, sort) {
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
        response: response
      }));
    })["catch"](function (response) {
      return dispatch(error(response));
    });
  };
};

/***/ })

}]);