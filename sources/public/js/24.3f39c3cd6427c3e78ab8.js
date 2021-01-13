(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

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

/***/ "./resources/js/containers/companies/index.js":
/*!****************************************************!*\
  !*** ./resources/js/containers/companies/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_reducers_companies_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/reducers/companies/actionCreators */ "./resources/js/redux/reducers/companies/actionCreators.js");
/* harmony import */ var _HOCs_withIndexPageLogic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/HOCs/withIndexPageLogic */ "./resources/js/HOCs/withIndexPageLogic.js");
/* harmony import */ var _components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/table/SortSwitcher */ "./resources/js/components/widgets/table/SortSwitcher.js");
/* harmony import */ var _components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/table/ActiveTableHeadContent */ "./resources/js/components/widgets/table/ActiveTableHeadContent.js");
/* harmony import */ var _components_widgets_Pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/widgets/Pagination */ "./resources/js/components/widgets/Pagination.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_widgets_table_actionColumn_TableActionColumn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/TableActionColumn */ "./resources/js/components/widgets/table/actionColumn/TableActionColumn.js");
/* harmony import */ var _components_widgets_table_actionColumn_DeleteRecordAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/DeleteRecordAction */ "./resources/js/components/widgets/table/actionColumn/DeleteRecordAction.js");
/* harmony import */ var _components_widgets_table_actionColumn_EditRecordAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/EditRecordAction */ "./resources/js/components/widgets/table/actionColumn/EditRecordAction.js");
/* harmony import */ var _hooks_useGetDate__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/hooks/useGetDate */ "./resources/js/hooks/useGetDate.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/widgets/table/filters/SearchFilterSwitcher */ "./resources/js/components/widgets/table/filters/SearchFilterSwitcher.js");
/* harmony import */ var _components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/widgets/table/filters/FilterSwitcher */ "./resources/js/components/widgets/table/filters/FilterSwitcher.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js");
/* harmony import */ var _components_widgets_table_Table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/widgets/table/Table */ "./resources/js/components/widgets/table/Table.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var _components_widgets_table_NoContentMessage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/widgets/table/NoContentMessage */ "./resources/js/components/widgets/table/NoContentMessage.js");




















function CompaniesIndex(_ref) {
  var sort = _ref.sort,
      filters = _ref.filters,
      data = _ref.data,
      currentPage = _ref.currentPage,
      lastPage = _ref.lastPage,
      changeFilters = _ref.changeFilters,
      changeSort = _ref.changeSort,
      changePage = _ref.changePage;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_7__["useTranslation"])(),
      t = _useTranslation.t;

  var formatDate = Object(_hooks_useGetDate__WEBPACK_IMPORTED_MODULE_11__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_17__["default"], null, t("companies.index-page.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_15__["default"], {
    filters: filters,
    changeFilters: changeFilters
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_Table__WEBPACK_IMPORTED_MODULE_16__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: t("companies.name"),
    active: Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_14__["getCurrentFilter"])(filters, "name")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_13__["default"], {
    displayName: t("companies.name"),
    filters: filters,
    changeFilters: changeFilters,
    column: "name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: t("companies.users"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_4__["getCurrentSort"])(sort, "users_count")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_4__["default"], {
    sort: sort,
    name: "users_count",
    displayName: t("companies.sort-users-count"),
    changeSort: changeSort,
    order: 1
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, t("companies.created_at")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\xA0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, data.length ? data.map(function (company) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: company.id,
      id: company.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, company.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__["Link"], {
      dangerouslySetInnerHTML: {
        __html: t("companies.users-count", {
          count: company.users_count
        })
      },
      to: "/companies/".concat(company.id, "/users/1")
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, formatDate(company.created_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_TableActionColumn__WEBPACK_IMPORTED_MODULE_8__["default"], null, function (setConfirm) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_EditRecordAction__WEBPACK_IMPORTED_MODULE_10__["default"], {
        url: "/companies/".concat(company.id, "/edit")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_DeleteRecordAction__WEBPACK_IMPORTED_MODULE_9__["default"], {
        url: "/methods/companies/".concat(company.id),
        setConfirm: setConfirm,
        onSuccess: function onSuccess() {
          return changePage(currentPage);
        }
      }));
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_NoContentMessage__WEBPACK_IMPORTED_MODULE_18__["default"], {
    colspan: 4
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_Pagination__WEBPACK_IMPORTED_MODULE_6__["default"], {
    currentPage: currentPage,
    lastPage: lastPage,
    loadPage: changePage,
    route: "/customers"
  }));
}

CompaniesIndex.propTypes = {
  changeFilters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  changeSort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  changePage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  lastPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  sort: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  filters: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

var stateToProps = function stateToProps(state) {
  var _clientsData$get;

  var clientsData = state.companies;
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
      return dispatch(Object(_redux_reducers_companies_actionCreators__WEBPACK_IMPORTED_MODULE_2__["loadCompanies"])(page, filters, sort));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOCs_withIndexPageLogic__WEBPACK_IMPORTED_MODULE_3__["default"])(CompaniesIndex, stateToProps, dispatchToProps));

/***/ }),

/***/ "./resources/js/redux/reducers/companies/actionCreators.js":
/*!*****************************************************************!*\
  !*** ./resources/js/redux/reducers/companies/actionCreators.js ***!
  \*****************************************************************/
/*! exports provided: loadCompanies, loadCompany */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCompanies", function() { return loadCompanies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCompany", function() { return loadCompany; });
/* harmony import */ var _redux_reducers_companies_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/companies/actionTypes */ "./resources/js/redux/reducers/companies/actionTypes.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _helpers_filtersToString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/filtersToString */ "./resources/js/helpers/filtersToString.js");
/* harmony import */ var _helpers_sortToString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/sortToString */ "./resources/js/helpers/sortToString.js");





var loading = function loading() {
  return {
    type: _redux_reducers_companies_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING
  };
};

var error = function error(data) {
  return {
    type: _redux_reducers_companies_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].LOADING_ERROR,
    payload: data
  };
};

var itemsListLoaded = function itemsListLoaded(data) {
  return {
    type: _redux_reducers_companies_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ITEMS_LOADED,
    payload: data
  };
};

var itemLoaded = function itemLoaded(item) {
  return {
    type: _redux_reducers_companies_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ITEM_LOADED,
    payload: item
  };
};

var loadCompanies = function loadCompanies(page, filters, sort) {
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
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/companies", params, {}).then(function (response) {
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
var loadCompany = function loadCompany(id) {
  return function (dispatch) {
    dispatch(loading());
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/companies/".concat(id)).data(function (data) {
      dispatch(itemLoaded(data));
    })["catch"](function (response) {
      return dispatch(error(response));
    });
  };
};

/***/ })

}]);