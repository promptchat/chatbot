(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/react-select/async/dist/react-select.browser.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-select/async/dist/react-select.browser.esm.js ***!
  \**************************************************************************/
/*! exports provided: default, defaultProps, makeAsyncSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultProps", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeAsyncSelect", function() { return makeAsyncSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/core */ "./node_modules/@emotion/core/dist/core.browser.esm.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _dist_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dist/utils-06b0d5a4.browser.esm.js */ "./node_modules/react-select/dist/utils-06b0d5a4.browser.esm.js");
/* harmony import */ var _dist_index_4322c0ed_browser_esm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dist/index-4322c0ed.browser.esm.js */ "./node_modules/react-select/dist/index-4322c0ed.browser.esm.js");
/* harmony import */ var _dist_Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../dist/Select-9fdb8cd0.browser.esm.js */ "./node_modules/react-select/dist/Select-9fdb8cd0.browser.esm.js");
/* harmony import */ var _emotion_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @emotion/css */ "./node_modules/@emotion/css/dist/css.browser.esm.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-input-autosize */ "./node_modules/react-input-autosize/lib/AutosizeInput.js");
/* harmony import */ var react_input_autosize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_input_autosize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _dist_stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../dist/stateManager-04f734a2.browser.esm.js */ "./node_modules/react-select/dist/stateManager-04f734a2.browser.esm.js");












function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
var defaultProps = {
  cacheOptions: false,
  defaultOptions: false,
  filterOption: null,
  isLoading: false
};
var makeAsyncSelect = function makeAsyncSelect(SelectComponent) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Async, _Component);

    function Async(props) {
      var _this;

      _this = _Component.call(this) || this;
      _this.select = void 0;
      _this.lastRequest = void 0;
      _this.mounted = false;
      _this.optionsCache = {};

      _this.handleInputChange = function (newValue, actionMeta) {
        var _this$props = _this.props,
            cacheOptions = _this$props.cacheOptions,
            onInputChange = _this$props.onInputChange; // TODO

        var inputValue = Object(_dist_utils_06b0d5a4_browser_esm_js__WEBPACK_IMPORTED_MODULE_5__["k"])(newValue, actionMeta, onInputChange);

        if (!inputValue) {
          delete _this.lastRequest;

          _this.setState({
            inputValue: '',
            loadedInputValue: '',
            loadedOptions: [],
            isLoading: false,
            passEmptyOptions: false
          });

          return;
        }

        if (cacheOptions && _this.optionsCache[inputValue]) {
          _this.setState({
            inputValue: inputValue,
            loadedInputValue: inputValue,
            loadedOptions: _this.optionsCache[inputValue],
            isLoading: false,
            passEmptyOptions: false
          });
        } else {
          var request = _this.lastRequest = {};

          _this.setState({
            inputValue: inputValue,
            isLoading: true,
            passEmptyOptions: !_this.state.loadedInputValue
          }, function () {
            _this.loadOptions(inputValue, function (options) {
              if (!_this.mounted) return;

              if (options) {
                _this.optionsCache[inputValue] = options;
              }

              if (request !== _this.lastRequest) return;
              delete _this.lastRequest;

              _this.setState({
                isLoading: false,
                loadedInputValue: inputValue,
                loadedOptions: options || [],
                passEmptyOptions: false
              });
            });
          });
        }

        return inputValue;
      };

      _this.state = {
        defaultOptions: Array.isArray(props.defaultOptions) ? props.defaultOptions : undefined,
        inputValue: typeof props.inputValue !== 'undefined' ? props.inputValue : '',
        isLoading: props.defaultOptions === true,
        loadedOptions: [],
        passEmptyOptions: false
      };
      return _this;
    }

    var _proto = Async.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this2 = this;

      this.mounted = true;
      var defaultOptions = this.props.defaultOptions;
      var inputValue = this.state.inputValue;

      if (defaultOptions === true) {
        this.loadOptions(inputValue, function (options) {
          if (!_this2.mounted) return;
          var isLoading = !!_this2.lastRequest;

          _this2.setState({
            defaultOptions: options || [],
            isLoading: isLoading
          });
        });
      }
    };

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
      // if the cacheOptions prop changes, clear the cache
      if (nextProps.cacheOptions !== this.props.cacheOptions) {
        this.optionsCache = {};
      }

      if (nextProps.defaultOptions !== this.props.defaultOptions) {
        this.setState({
          defaultOptions: Array.isArray(nextProps.defaultOptions) ? nextProps.defaultOptions : undefined
        });
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.mounted = false;
    };

    _proto.focus = function focus() {
      this.select.focus();
    };

    _proto.blur = function blur() {
      this.select.blur();
    };

    _proto.loadOptions = function loadOptions(inputValue, callback) {
      var loadOptions = this.props.loadOptions;
      if (!loadOptions) return callback();
      var loader = loadOptions(inputValue, callback);

      if (loader && typeof loader.then === 'function') {
        loader.then(callback, function () {
          return callback();
        });
      }
    };

    _proto.render = function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          loadOptions = _this$props2.loadOptions,
          isLoadingProp = _this$props2.isLoading,
          props = _objectWithoutPropertiesLoose(_this$props2, ["loadOptions", "isLoading"]);

      var _this$state = this.state,
          defaultOptions = _this$state.defaultOptions,
          inputValue = _this$state.inputValue,
          isLoading = _this$state.isLoading,
          loadedInputValue = _this$state.loadedInputValue,
          loadedOptions = _this$state.loadedOptions,
          passEmptyOptions = _this$state.passEmptyOptions;
      var options = passEmptyOptions ? [] : inputValue && loadedInputValue ? loadedOptions : defaultOptions || [];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SelectComponent, _extends({}, props, {
        ref: function ref(_ref) {
          _this3.select = _ref;
        },
        options: options,
        isLoading: isLoading || isLoadingProp,
        onInputChange: this.handleInputChange
      }));
    };

    return Async;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.defaultProps = defaultProps, _temp;
};
var SelectState = Object(_dist_stateManager_04f734a2_browser_esm_js__WEBPACK_IMPORTED_MODULE_10__["m"])(_dist_Select_9fdb8cd0_browser_esm_js__WEBPACK_IMPORTED_MODULE_7__["S"]);
var Async = makeAsyncSelect(SelectState);

/* harmony default export */ __webpack_exports__["default"] = (Async);



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

/***/ "./resources/js/components/widgets/table/SortSwitcher.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/widgets/table/SortSwitcher.js ***!
  \***************************************************************/
/*! exports provided: getCurrentSort, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentSort", function() { return getCurrentSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SortSwitcher; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");





function getCurrentSort(sort, name) {
  return sort.find(function (item) {
    return item.get("name") === name;
  });
}
function SortSwitcher(_ref) {
  var sort = _ref.sort,
      name = _ref.name,
      changeSort = _ref.changeSort,
      displayName = _ref.displayName,
      order = _ref.order;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  var currentSort = sort.find(function (item) {
    return item.get("name") === name;
  });
  var currentSortAsc = currentSort && currentSort.get("name") === currentSort.get("sort");
  var currentSortDesc = currentSort && "-".concat(currentSort.get("name")) === currentSort.get("sort");

  var setNewSort = function setNewSort(isAsc) {
    var newSort = sort.filter(function (item) {
      return item.get("name") !== name;
    }).push(Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])({
      name: name,
      sort: isAsc ? name : "-".concat(name),
      order: order
    })).sort(function (a, b) {
      return a.get("order") - b.get("order");
    });
    changeSort(newSort);
  };

  var removeSort = function removeSort() {
    changeSort(sort.filter(function (item) {
      return item.get("name") !== name;
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sort-switcher text-main"
  }, displayName ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "color-gray mb-3"
  }, t("tables.sort-title", {
    name: displayName
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return currentSortAsc ? removeSort() : setNewSort(true);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("btn btn-sort rounded-left mb-3", {
      active: currentSortAsc
    })
  }, t("tables.sort-asc-text")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return currentSortDesc ? removeSort() : setNewSort(false);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("btn btn-sort rounded-right mb-3", {
      active: currentSortDesc
    })
  }, t("tables.sort-desc-text")));
}
SortSwitcher.propTypes = {
  changeSort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  sort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  order: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
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

/***/ })

}]);