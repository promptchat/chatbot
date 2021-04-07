(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

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

/***/ "./resources/js/components/widgets/table/actionColumn/EditRecordAction.js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/widgets/table/actionColumn/EditRecordAction.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_widgets_table_actionColumn_LinkAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/LinkAction */ "./resources/js/components/widgets/table/actionColumn/LinkAction.js");






function EditRecordAction(_ref) {
  var url = _ref.url;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_3__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_LinkAction__WEBPACK_IMPORTED_MODULE_4__["default"], {
    url: url,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPencilAlt"], {
      className: "icon-size-15 color-blue mr-2"
    }),
    text: t("common.edit-link")
  });
}

EditRecordAction.propTypes = {
  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(EditRecordAction));

/***/ }),

/***/ "./resources/js/containers/calendar/index.js":
/*!***************************************************!*\
  !*** ./resources/js/containers/calendar/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _HOCs_withIndexPageLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/HOCs/withIndexPageLogic */ "./resources/js/HOCs/withIndexPageLogic.js");
/* harmony import */ var _redux_reducers_calendars_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/reducers/calendars/actionCreators */ "./resources/js/redux/reducers/calendars/actionCreators.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/table/SortSwitcher */ "./resources/js/components/widgets/table/SortSwitcher.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js");
/* harmony import */ var _components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/widgets/table/ActiveTableHeadContent */ "./resources/js/components/widgets/table/ActiveTableHeadContent.js");
/* harmony import */ var _components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/widgets/table/filters/FilterSwitcher */ "./resources/js/components/widgets/table/filters/FilterSwitcher.js");
/* harmony import */ var _components_widgets_Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/Pagination */ "./resources/js/components/widgets/Pagination.js");
/* harmony import */ var _components_widgets_table_actionColumn_TableActionColumn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/TableActionColumn */ "./resources/js/components/widgets/table/actionColumn/TableActionColumn.js");
/* harmony import */ var _components_widgets_table_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/widgets/table/Table */ "./resources/js/components/widgets/table/Table.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var _components_widgets_table_NoContentMessage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/widgets/table/NoContentMessage */ "./resources/js/components/widgets/table/NoContentMessage.js");
/* harmony import */ var _components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/widgets/table/filters/SearchFilterSwitcher */ "./resources/js/components/widgets/table/filters/SearchFilterSwitcher.js");
/* harmony import */ var _components_widgets_table_actionColumn_EditRecordAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/EditRecordAction */ "./resources/js/components/widgets/table/actionColumn/EditRecordAction.js");
/* harmony import */ var _components_widgets_table_actionColumn_DeleteRecordAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/DeleteRecordAction */ "./resources/js/components/widgets/table/actionColumn/DeleteRecordAction.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



















function CalendarsIndex(_ref) {
  var filters = _ref.filters,
      sort = _ref.sort,
      data = _ref.data,
      currentPage = _ref.currentPage,
      lastPage = _ref.lastPage,
      changeFilters = _ref.changeFilters,
      changeSort = _ref.changeSort,
      changePage = _ref.changePage;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__["useTranslation"])(),
      t = _useTranslation.t;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_12__["default"], null, t("calendars.index.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__["Link"], {
    to: "/calendars/create",
    className: "btn btn-primary mt-2 mb-4"
  }, t("calendars.index.create-btn-text"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    filters: filters,
    changeFilters: changeFilters
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_Table__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "calendars-table"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: t("calendars.index.name-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_5__["getCurrentSort"])(sort, "calendars.name") || Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_8__["getCurrentFilter"])(filters, "calendars.name")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sort: sort,
    name: "calendars.name",
    displayName: t("calendars.index.name-column"),
    changeSort: changeSort,
    order: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_14__["default"], {
    displayName: t("calendars.index.name-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "calendars.name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: t("calendars.index.event-name-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_5__["getCurrentSort"])(sort, "calendars.default_event_name") || Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_8__["getCurrentFilter"])(filters, "calendars.default_event_name")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sort: sort,
    name: "calendars.default_event_name",
    displayName: t("calendars.index.event-name-column"),
    changeSort: changeSort,
    order: 2
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_14__["default"], {
    displayName: t("calendars.index.event-name-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "calendars.default_event_name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: t("calendars.index.event-duration-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_5__["getCurrentSort"])(sort, "calendars.default_minutes_for_event") || Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_8__["getCurrentFilter"])(filters, "calendars.default_minutes_for_event")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sort: sort,
    name: "calendars.default_minutes_for_event",
    displayName: t("calendars.index.event-duration-column"),
    changeSort: changeSort,
    order: 3
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_14__["default"], {
    displayName: t("calendars.index.event-duration-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "calendars.default_minutes_for_event"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "action-items"
  }, "\xA0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, data.length ? data.map(function (calendarItem) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: calendarItem.id,
      id: calendarItem.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, calendarItem.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, calendarItem.default_event_name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, calendarItem.default_minutes_for_event), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_TableActionColumn__WEBPACK_IMPORTED_MODULE_10__["default"], null, function (setConfirm) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_EditRecordAction__WEBPACK_IMPORTED_MODULE_15__["default"], {
        url: "/calendars/".concat(calendarItem.id, "/edit")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_DeleteRecordAction__WEBPACK_IMPORTED_MODULE_16__["default"], {
        url: "/methods/calendars/".concat(calendarItem.id),
        setConfirm: setConfirm,
        onSuccess: function onSuccess() {
          return changePage(currentPage);
        }
      }));
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_NoContentMessage__WEBPACK_IMPORTED_MODULE_13__["default"], {
    colspan: 8
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_Pagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
    currentPage: currentPage,
    lastPage: lastPage,
    loadPage: changePage,
    route: "/calendars"
  }));
}

CalendarsIndex.propTypes = {
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
  var _data$get;

  var data = state.calendars;
  return {
    loading: data.get("loading"),
    data: (_data$get = data.get("data")) === null || _data$get === void 0 ? void 0 : _data$get.toArray(),
    error: data.get("error"),
    currentPage: data.get("currentPage"),
    lastPage: data.get("lastPage"),
    filters: data.get("filters"),
    sort: data.get("sort")
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    loadPage: function loadPage(page, filters, sort) {
      return dispatch(Object(_redux_reducers_calendars_actionCreators__WEBPACK_IMPORTED_MODULE_3__["loadCalendars"])(page, filters, sort));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOCs_withIndexPageLogic__WEBPACK_IMPORTED_MODULE_2__["default"])(CalendarsIndex, stateToProps, dispatchToProps));

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

/***/ "./resources/js/redux/reducers/calendars/actionCreators.js":
/*!*****************************************************************!*\
  !*** ./resources/js/redux/reducers/calendars/actionCreators.js ***!
  \*****************************************************************/
/*! exports provided: loadCalendars */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCalendars", function() { return loadCalendars; });
/* harmony import */ var _redux_reducers_calendars_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/calendars/actionTypes */ "./resources/js/redux/reducers/calendars/actionTypes.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _helpers_filtersToString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/filtersToString */ "./resources/js/helpers/filtersToString.js");
/* harmony import */ var _helpers_sortToString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/sortToString */ "./resources/js/helpers/sortToString.js");
/* harmony import */ var _redux_helpers_getStandardIndexActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/helpers/getStandardIndexActions */ "./resources/js/redux/helpers/getStandardIndexActions.js");






var _getStandardIndexActi = Object(_redux_helpers_getStandardIndexActions__WEBPACK_IMPORTED_MODULE_4__["default"])(_redux_reducers_calendars_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"]),
    loading = _getStandardIndexActi.loading,
    itemsListLoaded = _getStandardIndexActi.itemsListLoaded,
    error = _getStandardIndexActi.error;

var loadCalendars = function loadCalendars(page, filters, sort) {
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
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/calendars", params, {}).then(function (response) {
      dispatch(itemsListLoaded({
        filters: filters,
        sort: sort,
        response: response
      }));
    })["catch"](function (response) {
      dispatch(error(response));
    });
  };
};

/***/ })

}]);