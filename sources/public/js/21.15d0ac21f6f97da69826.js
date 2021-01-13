(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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

/***/ "./resources/js/containers/integrations/edit.js":
/*!******************************************************!*\
  !*** ./resources/js/containers/integrations/edit.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_integrations_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/reducers/integrations/actionCreators */ "./resources/js/redux/reducers/integrations/actionCreators.js");
/* harmony import */ var _models_Integration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/Integration */ "./resources/js/models/Integration.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/containers/integrations/form/IntegrationForm */ "./resources/js/containers/integrations/form/IntegrationForm.js");
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");
/* harmony import */ var _components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/widgets/ErrorMessage */ "./resources/js/components/widgets/ErrorMessage.js");
/* harmony import */ var _containers_integrations_form_helpers_isSetupNeeded__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/containers/integrations/form/helpers/isSetupNeeded */ "./resources/js/containers/integrations/form/helpers/isSetupNeeded.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















function EditIntegrationPage(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      item = _ref.item,
      dispatch = _ref.dispatch;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  var params = Object(react_router__WEBPACK_IMPORTED_MODULE_6__["useParams"])();
  var id = params.id;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_reducers_integrations_actionCreators__WEBPACK_IMPORTED_MODULE_3__["loadIntegration"])(id));
  }, [dispatch, id]);
  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (values, _ref2) {
    var setSubmitting = _ref2.setSubmitting,
        setErrors = _ref2.setErrors,
        setFieldValue = _ref2.setFieldValue;
    var nextStep = Object(_containers_integrations_form_helpers_isSetupNeeded__WEBPACK_IMPORTED_MODULE_13__["default"])(values.service) ? _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_10__["STEP_SETUP"] : _containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_10__["STEP_SUCCESS"];
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_5__["default"].call("patch", "/methods/integrations/".concat(id), {}, values).data(function () {
      setFieldValue("step", nextStep);
    }).validation(function (msg, errors) {
      setErrors(errors);
      setSubmitting(false);
    });
  }, [id]);
  var content;

  if (loading || !item) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_11__["default"], null);
  } else if (error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_12__["default"], null);
  } else {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_integrations_form_IntegrationForm__WEBPACK_IMPORTED_MODULE_10__["default"], {
      step: params.step,
      isEdit: true,
      onSubmit: handleSubmit,
      defaultData: _objectSpread(_objectSpread({
        id: item.id
      }, item.configuration), {}, {
        service: item.service,
        name: item.name,
        prefix: item.prefix,
        company_chat_bot_id: item.company_chat_bot_id,
        locale: item.locale
      })
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_8__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_9__["default"], null, t("integrations.edit-page.title")), content);
}

var stateToProps = function stateToProps(state) {
  var integrationsData = state.integrations;
  return {
    loading: integrationsData.get("loading"),
    error: integrationsData.get("error"),
    item: integrationsData.get("item")
  };
};

EditIntegrationPage.propTypes = {
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_Integration__WEBPACK_IMPORTED_MODULE_4__["default"]),
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps)(EditIntegrationPage));

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

/***/ "./resources/js/redux/reducers/integrations/actionCreators.js":
/*!********************************************************************!*\
  !*** ./resources/js/redux/reducers/integrations/actionCreators.js ***!
  \********************************************************************/
/*! exports provided: loadIntegrations, loadIntegration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadIntegrations", function() { return loadIntegrations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadIntegration", function() { return loadIntegration; });
/* harmony import */ var _redux_reducers_integrations_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/integrations/actionTypes */ "./resources/js/redux/reducers/integrations/actionTypes.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _helpers_filtersToString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/filtersToString */ "./resources/js/helpers/filtersToString.js");
/* harmony import */ var _helpers_sortToString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/sortToString */ "./resources/js/helpers/sortToString.js");





var loading = function loading() {
  return {
    type: _redux_reducers_integrations_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING
  };
};

var error = function error(data) {
  return {
    type: _redux_reducers_integrations_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING_ERROR,
    payload: data
  };
};

var itemLoaded = function itemLoaded(item) {
  return {
    type: _redux_reducers_integrations_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ITEM_LOADED,
    payload: item
  };
};

var itemsListLoaded = function itemsListLoaded(data) {
  return {
    type: _redux_reducers_integrations_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ITEMS_LOADED,
    payload: data
  };
};

var loadIntegrations = function loadIntegrations(page, filters, sort) {
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
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/integrations", params, {}).then(function (response) {
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
var loadIntegration = function loadIntegration(id) {
  return function (dispatch) {
    dispatch(loading());
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/integrations/".concat(id)).data(function (data) {
      dispatch(itemLoaded(data));
    })["catch"](function (response) {
      return dispatch(error(response));
    });
  };
};

/***/ })

}]);