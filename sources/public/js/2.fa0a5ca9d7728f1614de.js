(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/lodash/_baseRange.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseRange.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),

/***/ "./node_modules/lodash/_createRange.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_createRange.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(/*! ./_baseRange */ "./node_modules/lodash/_baseRange.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js"),
    toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),

/***/ "./node_modules/lodash/range.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/range.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(/*! ./_createRange */ "./node_modules/lodash/_createRange.js");

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),

/***/ "./resources/js/HOCs/withIndexPageLogic.js":
/*!*************************************************!*\
  !*** ./resources/js/HOCs/withIndexPageLogic.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withIndexPageLogic; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");
/* harmony import */ var _components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/ErrorMessage */ "./resources/js/components/widgets/ErrorMessage.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _hooks_useQuery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/hooks/useQuery */ "./resources/js/hooks/useQuery.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










function withIndexPageLogic(WrappedComponent, stateToProps, dispatchToProps) {
  function WithIndexPageLogic(_ref) {
    var loadPage = _ref.loadPage,
        loading = _ref.loading,
        data = _ref.data,
        error = _ref.error,
        filters = _ref.filters,
        sort = _ref.sort,
        currentPage = _ref.currentPage,
        lastPage = _ref.lastPage,
        additionalPageUrlParams = _ref.additionalPageUrlParams,
        selected = _ref.selected,
        otherProps = _objectWithoutProperties(_ref, ["loadPage", "loading", "data", "error", "filters", "sort", "currentPage", "lastPage", "additionalPageUrlParams", "selected"]);

    var _useQuery = Object(_hooks_useQuery__WEBPACK_IMPORTED_MODULE_8__["default"])(),
        _useQuery2 = _slicedToArray(_useQuery, 2),
        search = _useQuery2[0],
        urlSearchParams = _useQuery2[1];

    var params = Object(react_router__WEBPACK_IMPORTED_MODULE_7__["useParams"])();
    var match = Object(react_router__WEBPACK_IMPORTED_MODULE_7__["useRouteMatch"])();
    var history = Object(react_router__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      var filtersString = urlSearchParams.get("filters");
      var sortString = urlSearchParams.get("sort");
      var selectedString = urlSearchParams.get("selected");
      var parsedFilters = JSON.parse(filtersString) || [];
      var parsedSort = JSON.parse(sortString) || [];
      var parsedSelected = JSON.parse(selectedString) || {};
      loadPage(params.page || 1, Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(parsedFilters), Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(parsedSort), Object(immutable__WEBPACK_IMPORTED_MODULE_6__["fromJS"])(parsedSelected));
    }, [params, search]); //eslint-disable-line

    var generatePageUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (page, filters, sort) {
      var clearSelected = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      console.log(clearSelected);
      var path = Object(react_router__WEBPACK_IMPORTED_MODULE_7__["generatePath"])(match.path, _objectSpread({
        page: page
      }, additionalPageUrlParams));

      if (!clearSelected && selected && selected.size) {
        urlSearchParams.set("selected", JSON.stringify(selected.toJS()));
      }

      if (filters.size) {
        urlSearchParams.set("filters", JSON.stringify(filters.toJS()));
      } else {
        urlSearchParams["delete"]("filters");
      }

      if (sort.size) {
        urlSearchParams.set("sort", JSON.stringify(sort.toJS()));
      } else {
        urlSearchParams["delete"]("sort");
      }

      var searchString = urlSearchParams.toLocaleString();
      return path + (searchString ? "?".concat(decodeURIComponent(searchString)) : "");
    }, [additionalPageUrlParams, match.path, selected, urlSearchParams]);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
      window.history.replaceState({}, null, generatePageUrl(currentPage || 1, filters, sort, false));
    }, [currentPage, filters, sort, generatePageUrl]);
    var changePageUrl = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (page, filters, sort) {
      var clearSelected = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      var newUrl = generatePageUrl(page, filters, sort, clearSelected);
      history.push(newUrl);
    }, [generatePageUrl, history]);
    var changeFilters = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newFilters) {
      changePageUrl(1, newFilters, sort);
    }, [sort, changePageUrl]);
    var changeSort = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (newSort) {
      changePageUrl(1, filters, newSort, false);
    }, [filters, changePageUrl]);
    var changePage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (page) {
      changePageUrl(page, filters, sort, false);
    }, [filters, sort, changePageUrl]);
    var content;

    if (loading) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_4__["default"], null);
    } else if (data && !error) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedComponent, _extends({
        filters: filters,
        sort: sort,
        data: data,
        currentPage: currentPage,
        lastPage: lastPage,
        changeFilters: changeFilters,
        changeSort: changeSort,
        changePage: changePage,
        selected: selected
      }, otherProps));
    } else if (error) {
      content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, content);
  }

  WithIndexPageLogic.defaultProps = {
    additionalPageUrlParams: {}
  };
  WithIndexPageLogic.propTypes = {
    loadPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
    error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    additionalPageUrlParams: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
    loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
    currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    lastPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
    filters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    sort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
    selected: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
  };
  return Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(stateToProps, dispatchToProps)(WithIndexPageLogic);
}

/***/ }),

/***/ "./resources/js/components/form/SearchField.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/form/SearchField.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchField; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _base_Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base/Errors */ "./resources/js/components/form/base/Errors.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







function SearchField(_ref) {
  var _errors$name, _errors$name2;

  var id = _ref.id,
      label = _ref.label,
      errors = _ref.errors,
      name = _ref.name,
      formGroupClass = _ref.formGroupClass,
      fieldProps = _objectWithoutProperties(_ref, ["id", "label", "errors", "name", "formGroupClass"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["FormGroup"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("search-input-form", formGroupClass)
  }, label ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Label"], {
    htmlFor: id
  }, label) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroup"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupAddon"], {
    addonType: "prepend"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["InputGroupText"], {
    className: "prepend-icon pl-3 pr-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: id,
    className: "icon-size-14 mb-0 d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaSearch"], {
    className: "color-gray"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Input"], _extends({
    className: "search-custom-input border-left-0 pl-2",
    id: id,
    name: name
  }, fieldProps, {
    invalid: !!((_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.length)
  }))), ((_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.length) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_base_Errors__WEBPACK_IMPORTED_MODULE_2__["default"], {
    errors: errors[name]
  }) : null);
}
SearchField.defaultProps = {
  type: "text",
  errors: {}
};
SearchField.propTypes = {
  errors: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(["text", "email", "textarea"]),
  formGroupClass: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./resources/js/components/widgets/ConfirmAlert.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/widgets/ConfirmAlert.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap-sweetalert */ "./node_modules/react-bootstrap-sweetalert/dist/index.js");
/* harmony import */ var react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");




function ConfirmAlert(_ref) {
  var show = _ref.show,
      text = _ref.text,
      onConfirm = _ref.onConfirm,
      onCancel = _ref.onCancel;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_bootstrap_sweetalert__WEBPACK_IMPORTED_MODULE_2___default.a, {
    title: "",
    show: show,
    onConfirm: onConfirm,
    onCancel: onCancel,
    confirmBtnText: t("common.yes"),
    cancelBtnText: t("common.no"),
    showCancel: true,
    type: "warning"
  }, text);
}
ConfirmAlert.propTypes = {
  onConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  show: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
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

/***/ "./resources/js/components/widgets/Pagination.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/widgets/Pagination.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/range */ "./node_modules/lodash/range.js");
/* harmony import */ var lodash_range__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_range__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");









var PaginationPoints = function PaginationPoints() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["PaginationItem"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "page-link"
  }, "..."));
};

var BasePaginationPanel = function BasePaginationPanel(_ref) {
  var currentPage = _ref.currentPage,
      totalPages = _ref.totalPages,
      linksBeforeAndAfterCurrent = _ref.linksBeforeAndAfterCurrent,
      renderGoToFirstLink = _ref.renderGoToFirstLink,
      renderGoToLastLink = _ref.renderGoToLastLink,
      renderPageLink = _ref.renderPageLink;
  var linksPerPaginator = linksBeforeAndAfterCurrent * 2 + 1;
  var linksFrom;
  var linksTo;

  if (currentPage - linksBeforeAndAfterCurrent < 0) {
    linksFrom = 1;
    linksTo = linksPerPaginator + 1;
  } else if (currentPage + linksBeforeAndAfterCurrent > totalPages) {
    linksTo = totalPages + 1;
    var calcFrom = totalPages - linksPerPaginator + 1;
    linksFrom = calcFrom > 0 ? calcFrom : 1;
  } else {
    linksFrom = currentPage - linksBeforeAndAfterCurrent < 1 ? 1 : currentPage - linksBeforeAndAfterCurrent;
    linksTo = linksFrom + linksPerPaginator;
    linksTo = linksTo < totalPages ? linksTo : totalPages;
  }

  linksTo = totalPages >= linksTo ? linksTo : totalPages + 1;
  var pages = lodash_range__WEBPACK_IMPORTED_MODULE_5___default()(linksFrom, linksTo);

  var isDisabled = function isDisabled(page) {
    return page === currentPage;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Pagination"], {
    className: "pagination-wrapper text-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["PaginationItem"], {
    className: "mx-1",
    disabled: isDisabled(1)
  }, renderGoToFirstLink(isDisabled(1))), linksFrom > 1 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaginationPoints, null) : null, pages.map(function (page) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["PaginationItem"], {
      className: "mx-1",
      key: "page-".concat(page),
      active: isDisabled(page)
    }, renderPageLink(page));
  }), linksTo < totalPages ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PaginationPoints, null) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["PaginationItem"], {
    className: "mx-1",
    disabled: isDisabled(totalPages)
  }, renderGoToLastLink(isDisabled(totalPages))));
};

BasePaginationPanel.propTypes = {
  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  totalPages: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  linksBeforeAndAfterCurrent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,
  renderPageLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  renderGoToFirstLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  renderGoToLastLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
BasePaginationPanel.defaultProps = {
  linksBeforeAndAfterCurrent: 3
};

var Pagination = function Pagination(_ref2) {
  var loadPage = _ref2.loadPage,
      currentPage = _ref2.currentPage,
      lastPage = _ref2.lastPage,
      route = _ref2.route;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var location = Object(react_router__WEBPACK_IMPORTED_MODULE_6__["useLocation"])();

  var appendQueryParams = function appendQueryParams(url) {
    return url + location.search;
  };

  if (lastPage <= 1) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BasePaginationPanel, {
    currentPage: currentPage,
    totalPages: lastPage,
    linksBeforeAndAfterCurrent: 3,
    renderGoToFirstLink: function renderGoToFirstLink() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: appendQueryParams(route),
        className: "page-link py-2 px-sm-3 px-2",
        onClick: function onClick(e) {
          e.preventDefault();
          loadPage(1);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaArrowLeft"], {
        className: "icon-size-12"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only"
      }, t("pagination.to-first")));
    },
    renderGoToLastLink: function renderGoToLastLink() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        to: appendQueryParams("".concat(route, "/").concat(lastPage)),
        className: "page-link py-2 px-sm-3 px-2",
        onClick: function onClick(e) {
          e.preventDefault();
          loadPage(lastPage);
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_7__["FaArrowRight"], {
        className: "icon-size-12"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only"
      }, t("pagination.to-last")));
    },
    renderPageLink: function renderPageLink(page) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
        onClick: function onClick(e) {
          e.preventDefault();
          loadPage(page);
        },
        to: appendQueryParams("".concat(route, "/").concat(page)),
        className: "page-link py-2 px-sm-3 px-2"
      }, page, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "sr-only"
      }, t("pagination.to-page", {
        page: page
      })));
    }
  });
};

Pagination.propTypes = {
  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  lastPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  route: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  loadPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Pagination));

/***/ }),

/***/ "./resources/js/components/widgets/table/ActiveTableHeadContent.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/widgets/table/ActiveTableHeadContent.js ***!
  \*************************************************************************/
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
/* harmony import */ var _hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useClickOutside */ "./resources/js/hooks/useClickOutside.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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







var Container = /*#__PURE__*/function (_React$Component) {
  _inherits(Container, _React$Component);

  var _super = _createSuper(Container);

  function Container() {
    var _this;

    _classCallCheck(this, Container);

    _this = _super.apply(this, arguments);
    _this.state = {
      height: 0
    };
    return _this;
  }

  _createClass(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        height: this.containerRef.clientHeight
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "sort-filter-block rounded position-absolute p-4",
        ref: function ref(_ref) {
          return _this2.containerRef = _ref;
        }
      }, this.props.children);
    }
  }]);

  return Container;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

Container.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

function ActiveTableHeadContent(_ref2) {
  var title = _ref2.title,
      children = _ref2.children,
      active = _ref2.active;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var toggle = function toggle() {
    return setOpen(function (open) {
      return !open;
    });
  };

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(_hooks_useClickOutside__WEBPACK_IMPORTED_MODULE_3__["default"])(ref, function () {
    return setOpen(false);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: ref,
    style: {
      position: "relative"
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("active-table-head-content", {
      active: !!active
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    onClick: toggle,
    className: "table-button"
  }, title, open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaAngleUp"], {
    className: "head-table-angle icon-size-16 ml-1"
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaAngleDown"], {
    className: "head-table-angle icon-size-16 ml-1"
  })), children && open ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, children) : null);
}

ActiveTableHeadContent.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ActiveTableHeadContent));

/***/ }),

/***/ "./resources/js/components/widgets/table/Table.js":
/*!********************************************************!*\
  !*** ./resources/js/components/widgets/table/Table.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




function Table(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("site-table-wrapper", className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Table"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("site-table", className)
  }, children));
}
Table.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/***/ }),

/***/ "./resources/js/components/widgets/table/actionColumn/DeleteRecordAction.js":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/widgets/table/actionColumn/DeleteRecordAction.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");







function DeleteRecordActionContent(_ref) {
  var url = _ref.url,
      onSuccess = _ref.onSuccess,
      setConfirm = _ref.setConfirm;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  var handleDelete = function handleDelete() {
    setConfirm({
      text: t("tables.delete-confirmation-text"),
      onConfirm: function onConfirm() {
        _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_4__["default"].call("delete", url).then(function () {
          setConfirm(null);
          onSuccess && onSuccess(url);
        })["catch"](function () {
          setConfirm(null);
        });
      },
      onCancel: function onCancel() {
        setConfirm(null);
      }
    });
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link no-shadow d-flex p-3 text-left w-100 action-dropdown-item text-dec-none",
    type: "button",
    onClick: handleDelete
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaTrashAlt"], {
    className: "icon-size-15 color-red mr-2"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-main color-red"
  }, "Delete"));
}

DeleteRecordActionContent.propTypes = {
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  setConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

function DeleteRecordAction(_ref2) {
  var url = _ref2.url,
      onSuccess = _ref2.onSuccess,
      setConfirm = _ref2.setConfirm;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownItem"], {
    tag: DeleteRecordActionContent,
    url: url,
    onSuccess: onSuccess,
    setConfirm: setConfirm
  }, "delete icon");
}

DeleteRecordAction.propTypes = {
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  setConfirm: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(DeleteRecordAction));

/***/ }),

/***/ "./resources/js/components/widgets/table/actionColumn/LinkAction.js":
/*!**************************************************************************!*\
  !*** ./resources/js/components/widgets/table/actionColumn/LinkAction.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





function LinkAction(_ref) {
  var url = _ref.url,
      icon = _ref.icon,
      text = _ref.text,
      realLink = _ref.realLink,
      className = _ref.className;
  var content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, icon, text ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-main color-blue"
  }, text) : null);
  return realLink ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("p-3 d-flex action-dropdown-item edit color-black", className),
    href: url
  }, content) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("p-3 d-flex action-dropdown-item edit color-black", className),
    to: url
  }, content);
}

LinkAction.defaultProps = {
  realLink: false
};
LinkAction.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  realLink: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(LinkAction));

/***/ }),

/***/ "./resources/js/components/widgets/table/actionColumn/TableActionColumn.js":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/widgets/table/actionColumn/TableActionColumn.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_widgets_ConfirmAlert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/ConfirmAlert */ "./resources/js/components/widgets/ConfirmAlert.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







function TableActionColumn(_ref) {
  var children = _ref.children,
      empty = _ref.empty;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      dropdownOpen = _useState2[0],
      setDropdownOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      confirm = _useState4[0],
      setConfirm = _useState4[1];

  var toggle = function toggle() {
    return setDropdownOpen(function (prevState) {
      return !prevState;
    });
  };

  var content;

  if (empty) {
    content = null;
  } else {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
      className: "mx-auto",
      isOpen: dropdownOpen,
      toggle: toggle,
      setActiveFromChild: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownToggle"], {
      caret: true,
      color: "transparent",
      className: "action-dropdown no-shadow p-0"
    }, dropdownOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaAngleUp"], {
      className: "icon-size-16 color-blue"
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaAngleDown"], {
      className: "icon-size-16 color-blue"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_2__["DropdownMenu"], {
      right: true,
      persist: false,
      className: "p-0"
    }, children(setConfirm))), confirm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_ConfirmAlert__WEBPACK_IMPORTED_MODULE_3__["default"], {
      show: true,
      onCancel: confirm.onCancel,
      onConfirm: confirm.onConfirm,
      text: confirm.text
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    className: "action-items"
  }, content);
}

TableActionColumn.defaultProps = {
  empty: false
};
TableActionColumn.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  empty: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TableActionColumn));

/***/ }),

/***/ "./resources/js/components/widgets/table/filters/FilterSwitcher.js":
/*!*************************************************************************!*\
  !*** ./resources/js/components/widgets/table/filters/FilterSwitcher.js ***!
  \*************************************************************************/
/*! exports provided: getCurrentFilter, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentFilter", function() { return getCurrentFilter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js");




function getCurrentFilter(filters, column) {
  return filters.find(function (filter) {
    return filter.get("column") === column;
  });
}

function FilterSwitcher(_ref) {
  var filters = _ref.filters,
      changeFilters = _ref.changeFilters,
      column = _ref.column,
      displayName = _ref.displayName,
      operator = _ref.operator,
      renderView = _ref.renderView;
  var currentFilter = getCurrentFilter(filters, column);

  if (!currentFilter) {
    currentFilter = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Map"])({
      column: column,
      operator: operator,
      value: null,
      filterValue: null,
      display: displayName,
      displayingType: _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_3__["FILTER_DISPLAY_TEXT"]
    });
  }

  var handleChange = function handleChange(newFilter) {
    var index = filters.findIndex(function (filter) {
      return filter.get("column") === column;
    });
    var value = newFilter.get("value");

    if (value !== null) {
      var newFilters = index === -1 ? filters.push(newFilter) : filters.set(index, newFilter);
      changeFilters(newFilters);
    } else {
      changeFilters(filters.filter(function (filter) {
        return filter.get("column") !== column;
      }));
    }
  };

  return renderView(currentFilter, handleChange);
}

FilterSwitcher.propTypes = {
  filters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  changeFilters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  column: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  operator: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  renderView: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FilterSwitcher));

/***/ }),

/***/ "./resources/js/components/widgets/table/filters/SearchFilterSwitcher.js":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/widgets/table/filters/SearchFilterSwitcher.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/table/filters/FilterSwitcher */ "./resources/js/components/widgets/table/filters/FilterSwitcher.js");
/* harmony import */ var _constants_FilterOperators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/constants/FilterOperators */ "./resources/js/constants/FilterOperators.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_form_SearchField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/form/SearchField */ "./resources/js/components/form/SearchField.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








function SearchView(_ref) {
  var filter = _ref.filter,
      handleChange = _ref.handleChange,
      displayName = _ref.displayName;
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(filter.get("filterValue")),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var onChange = function onChange(e) {
    var val = e.target.value;
    setValue(val);
    clearTimeout(ref.current);
    ref.current = setTimeout(function () {
      var valueToSet = val ? val : null;
      handleChange(filter.set("value", valueToSet).set("filterValue", valueToSet));
    }, 500);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_form_SearchField__WEBPACK_IMPORTED_MODULE_5__["default"], {
    id: "text",
    name: "text",
    placeholder: t("tables.search-input-placeholder", {
      name: displayName
    }),
    type: "text",
    onChange: onChange,
    value: value || "",
    errors: {}
  });
}

SearchView.propTypes = {
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

function SearchFilterSwitcher(_ref2) {
  var filters = _ref2.filters,
      changeFilters = _ref2.changeFilters,
      column = _ref2.column,
      displayName = _ref2.displayName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_2__["default"], {
    filters: filters,
    changeFilters: changeFilters,
    column: column,
    displayName: displayName,
    operator: _constants_FilterOperators__WEBPACK_IMPORTED_MODULE_3__["OPERATOR_LIKE"],
    renderView: function renderView(currentFilter, handleChange) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchView, {
        filter: currentFilter,
        handleChange: handleChange,
        displayName: displayName
      });
    }
  });
}

SearchFilterSwitcher.propTypes = {
  changeFilters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  column: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  displayName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  filters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SearchFilterSwitcher));

/***/ }),

/***/ "./resources/js/components/widgets/table/filtersDisplayingPanel/FilterItem.js":
/*!************************************************************************************!*\
  !*** ./resources/js/components/widgets/table/filtersDisplayingPanel/FilterItem.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FilterItemView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FilterItemView */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FilterItemView.js");




function FilterItem(_ref) {
  var filter = _ref.filter,
      deleteFilter = _ref.deleteFilter;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filtersDisplayingPanel_FilterItemView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "".concat(filter.get("display"), ":"),
    value: filter.get("filterValue"),
    onClick: function onClick() {
      return deleteFilter(filter.get("column"));
    }
  });
}

FilterItem.propTypes = {
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  deleteFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FilterItem));

/***/ }),

/***/ "./resources/js/components/widgets/table/filtersDisplayingPanel/FilterItemView.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/widgets/table/filtersDisplayingPanel/FilterItemView.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");




function FilterItemView(_ref) {
  var display = _ref.display,
      value = _ref.value,
      onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filter-item-view d-flex align-items-baseline px-3 py-2 mr-3 mb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, display), "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link no-shadow btn-filter-item px-1 py-0 text-dec-none",
    type: "button",
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaTimes"], {
    className: "icon-size-12 color-blue3 position-relative"
  })));
}

FilterItemView.propTypes = {
  display: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(FilterItemView));

/***/ }),

/***/ "./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js ***!
  \************************************************************************************************/
/*! exports provided: FILTER_DISPLAY_SELECT, FILTER_DISPLAY_TEXT, FILTER_DISPLAY_TAGS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_DISPLAY_SELECT", function() { return FILTER_DISPLAY_SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_DISPLAY_TEXT", function() { return FILTER_DISPLAY_TEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FILTER_DISPLAY_TAGS", function() { return FILTER_DISPLAY_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FiltersDisplayingPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_SelectFilterItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/SelectFilterItem */ "./resources/js/components/widgets/table/filtersDisplayingPanel/SelectFilterItem.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_TagsFilterItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/TagsFilterItem */ "./resources/js/components/widgets/table/filtersDisplayingPanel/TagsFilterItem.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FilterItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FilterItem */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FilterItem.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");







var FILTER_DISPLAY_SELECT = "select";
var FILTER_DISPLAY_TEXT = "text";
var FILTER_DISPLAY_TAGS = "tags";
function FiltersDisplayingPanel(_ref) {
  var filters = _ref.filters,
      changeFilters = _ref.changeFilters,
      children = _ref.children;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_6__["useTranslation"])(),
      t = _useTranslation.t;

  var deleteFilter = function deleteFilter(name) {
    changeFilters(filters.filter(function (item) {
      return item.get("column") !== name;
    }));
  };

  var changeFilter = function changeFilter(filter) {
    var index = filters.indexOf(function (item) {
      return item.get("column") === filter.get("column");
    });
    changeFilters(filters.set(index, filter));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "filters-panel d-flex flex-wrap align-items-baseline"
  }, children, filters.map(function (filter) {
    if (filter.get("displayingType") === FILTER_DISPLAY_SELECT) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filtersDisplayingPanel_SelectFilterItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: filter.get("column"),
        filter: filter,
        deleteFilter: deleteFilter
      });
    }

    if (filter.get("displayingType") === FILTER_DISPLAY_TAGS) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filtersDisplayingPanel_TagsFilterItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: filter.get("column"),
        filter: filter,
        changeFilter: changeFilter,
        deleteFilter: deleteFilter
      });
    }

    if (filter.get("displayingType") === FILTER_DISPLAY_TEXT) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filtersDisplayingPanel_FilterItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        key: filter.get("column"),
        filter: filter,
        deleteFilter: deleteFilter
      });
    }

    return null;
  }), filters.size ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-link no-shadow text-dec-none color-blue3 text-main",
    onClick: function onClick() {
      return changeFilters(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["List"])([]));
    }
  }, t("tables.clear-all-filters")) : null);
}
FiltersDisplayingPanel.propTypes = {
  filters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  changeFilters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};

/***/ }),

/***/ "./resources/js/components/widgets/table/filtersDisplayingPanel/SelectFilterItem.js":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/widgets/table/filtersDisplayingPanel/SelectFilterItem.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FilterItemView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FilterItemView */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FilterItemView.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");





function SelectFilterItem(_ref) {
  var filter = _ref.filter,
      deleteFilter = _ref.deleteFilter;
  var filterValue = Object(immutable__WEBPACK_IMPORTED_MODULE_3__["isImmutable"])(filter.get("filterValue")) ? filter.get("filterValue").toJS() : filter.get("filterValue");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filtersDisplayingPanel_FilterItemView__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "".concat(filter.get("display"), ":"),
    value: filterValue.label,
    onClick: function onClick() {
      return deleteFilter(filter.get("column"));
    }
  });
}

SelectFilterItem.propTypes = {
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  deleteFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SelectFilterItem));

/***/ }),

/***/ "./resources/js/components/widgets/table/filtersDisplayingPanel/TagsFilterItem.js":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/widgets/table/filtersDisplayingPanel/TagsFilterItem.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FilterItemView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FilterItemView */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FilterItemView.js");





function TagsFilterItem(_ref) {
  var filter = _ref.filter,
      changeFilter = _ref.changeFilter,
      deleteFilter = _ref.deleteFilter;
  var filterValues = Object(immutable__WEBPACK_IMPORTED_MODULE_2__["isImmutable"])(filter.get("filterValue")) ? filter.get("filterValue").toJS() : filter.get("filterValue");

  var removeTag = function removeTag(value) {
    var newFilterValue = filterValues.filter(function (option) {
      return option.value !== value;
    });
    var newValue = newFilterValue.map(function (option) {
      return option.value;
    });
    var newFilter = filter.set("filterValue", newFilterValue).set("value", newValue);

    if (newFilterValue.length) {
      changeFilter(newFilter);
    } else {
      deleteFilter(newFilter.get("column"));
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, filterValues.map(function (tag) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filtersDisplayingPanel_FilterItemView__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: tag.value,
      display: "".concat(filter.get("display"), ":"),
      onClick: function onClick() {
        return removeTag(tag.value);
      },
      value: tag.label
    });
  }));
}

TagsFilterItem.propTypes = {
  filter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  changeFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  deleteFilter: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(TagsFilterItem));

/***/ }),

/***/ "./resources/js/constants/FilterOperators.js":
/*!***************************************************!*\
  !*** ./resources/js/constants/FilterOperators.js ***!
  \***************************************************/
/*! exports provided: OPERATOR_EQ, OPERATOR_NEQ, OPERATOR_LT, OPERATOR_GT, OPERATOR_LTE, OPERATOR_GTE, OPERATOR_BETWEEN, OPERATOR_IN, OPERATOR_SCOPE, OPERATOR_NIN, OPERATOR_LIKE, OPERATOR_NLIKE, OPERATOR_FLAG, OPERATOR_NFLAG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_EQ", function() { return OPERATOR_EQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_NEQ", function() { return OPERATOR_NEQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_LT", function() { return OPERATOR_LT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_GT", function() { return OPERATOR_GT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_LTE", function() { return OPERATOR_LTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_GTE", function() { return OPERATOR_GTE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_BETWEEN", function() { return OPERATOR_BETWEEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_IN", function() { return OPERATOR_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_SCOPE", function() { return OPERATOR_SCOPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_NIN", function() { return OPERATOR_NIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_LIKE", function() { return OPERATOR_LIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_NLIKE", function() { return OPERATOR_NLIKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_FLAG", function() { return OPERATOR_FLAG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATOR_NFLAG", function() { return OPERATOR_NFLAG; });
var OPERATOR_EQ = "eq";
var OPERATOR_NEQ = "neq";
var OPERATOR_LT = "lt";
var OPERATOR_GT = "gt";
var OPERATOR_LTE = "lte";
var OPERATOR_GTE = "gte";
var OPERATOR_BETWEEN = "between";
var OPERATOR_IN = "in";
var OPERATOR_SCOPE = "scope";
var OPERATOR_NIN = "nin";
var OPERATOR_LIKE = "like";
var OPERATOR_NLIKE = "nlike";
var OPERATOR_FLAG = "flag";
var OPERATOR_NFLAG = "nflag";

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

/***/ "./resources/js/hooks/useClickOutside.js":
/*!***********************************************!*\
  !*** ./resources/js/hooks/useClickOutside.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useOnClickOutside; });
var _require = __webpack_require__(/*! react */ "./node_modules/react/index.js"),
    useEffect = _require.useEffect;

function useOnClickOutside(ref, handler) {
  useEffect(function () {
    var listener = function listener(event) {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return function () {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

/***/ }),

/***/ "./resources/js/hooks/useQuery.js":
/*!****************************************!*\
  !*** ./resources/js/hooks/useQuery.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useQuery; });
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");

function useQuery() {
  var search = Object(react_router__WEBPACK_IMPORTED_MODULE_0__["useLocation"])().search;
  return [search, new URLSearchParams(search)];
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

/***/ })

}]);