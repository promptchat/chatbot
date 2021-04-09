(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

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

/***/ "./resources/js/containers/chatBoxConfigs/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/containers/chatBoxConfigs/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HOCs_withIndexPageLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/HOCs/withIndexPageLogic */ "./resources/js/HOCs/withIndexPageLogic.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_reducers_chatBoxConfigs_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/reducers/chatBoxConfigs/actionCreators */ "./resources/js/redux/reducers/chatBoxConfigs/actionCreators.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useGetDateTime */ "./resources/js/hooks/useGetDateTime.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js");
/* harmony import */ var _components_widgets_table_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/table/Table */ "./resources/js/components/widgets/table/Table.js");
/* harmony import */ var _components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/widgets/table/ActiveTableHeadContent */ "./resources/js/components/widgets/table/ActiveTableHeadContent.js");
/* harmony import */ var _components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/widgets/table/SortSwitcher */ "./resources/js/components/widgets/table/SortSwitcher.js");
/* harmony import */ var _components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/widgets/table/filters/FilterSwitcher */ "./resources/js/components/widgets/table/filters/FilterSwitcher.js");
/* harmony import */ var _components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/widgets/table/filters/SearchFilterSwitcher */ "./resources/js/components/widgets/table/filters/SearchFilterSwitcher.js");
/* harmony import */ var _components_widgets_table_actionColumn_TableActionColumn__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/TableActionColumn */ "./resources/js/components/widgets/table/actionColumn/TableActionColumn.js");
/* harmony import */ var _components_widgets_table_actionColumn_EditRecordAction__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/EditRecordAction */ "./resources/js/components/widgets/table/actionColumn/EditRecordAction.js");
/* harmony import */ var _components_widgets_table_actionColumn_DeleteRecordAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/widgets/table/actionColumn/DeleteRecordAction */ "./resources/js/components/widgets/table/actionColumn/DeleteRecordAction.js");
/* harmony import */ var _components_widgets_table_NoContentMessage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/widgets/table/NoContentMessage */ "./resources/js/components/widgets/table/NoContentMessage.js");
/* harmony import */ var _components_widgets_Pagination__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/widgets/Pagination */ "./resources/js/components/widgets/Pagination.js");




















function ChatBoxConfigIndexPage(_ref) {
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

  var formatDate = Object(_hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_6__["default"], null, t("chatBoxConfigs.index-page.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-right"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    to: "/chat-box-configs/create",
    className: "btn btn-primary mt-2 mb-4"
  }, t("chatBoxConfigs.index-page.add-chat-box-config"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    filters: filters,
    changeFilters: changeFilters
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_Table__WEBPACK_IMPORTED_MODULE_9__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: t("chatBoxConfigs.index-page.name-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_11__["getCurrentSort"])(sort, "name") || Object(_components_widgets_table_filters_FilterSwitcher__WEBPACK_IMPORTED_MODULE_12__["getCurrentFilter"])(filters, "name-column")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sort: sort,
    name: "name",
    displayName: t("chatBoxConfigs.index-page.name-column"),
    changeSort: changeSort,
    order: 1
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_filters_SearchFilterSwitcher__WEBPACK_IMPORTED_MODULE_13__["default"], {
    displayName: t("chatBoxConfigs.index-page.name-column"),
    filters: filters,
    changeFilters: changeFilters,
    column: "name"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_ActiveTableHeadContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: t("integrations.index-page.updated-at-column"),
    active: Object(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_11__["getCurrentSort"])(sort, "updated_at")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_SortSwitcher__WEBPACK_IMPORTED_MODULE_11__["default"], {
    sort: sort,
    name: "updated_at",
    displayName: t("integrations.index-page.updated-at-column"),
    changeSort: changeSort,
    order: 2
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", null, "\xA0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", null, data.length ? data.map(function (chatBoxConfig) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      key: chatBoxConfig.id,
      id: chatBoxConfig.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", null, chatBoxConfig.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      className: "last-update"
    }, formatDate(chatBoxConfig.updated_at)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_TableActionColumn__WEBPACK_IMPORTED_MODULE_14__["default"], null, function (setConfirm) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_EditRecordAction__WEBPACK_IMPORTED_MODULE_15__["default"], {
        url: "/chat-box-configs/".concat(chatBoxConfig.id, "/edit")
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_actionColumn_DeleteRecordAction__WEBPACK_IMPORTED_MODULE_16__["default"], {
        url: "/methods/chat-box-configs/".concat(chatBoxConfig.id),
        setConfirm: setConfirm,
        onSuccess: function onSuccess() {
          return changePage(currentPage);
        }
      }));
    }));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_table_NoContentMessage__WEBPACK_IMPORTED_MODULE_17__["default"], {
    colspan: 5
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_Pagination__WEBPACK_IMPORTED_MODULE_18__["default"], {
    currentPage: currentPage,
    lastPage: lastPage,
    loadPage: changePage,
    route: "/chat-box-configs"
  }));
}

ChatBoxConfigIndexPage.propTypes = {
  changeFilters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  changeSort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  changePage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array.isRequired,
  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  lastPage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  filters: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  sort: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired
};

var stateToProps = function stateToProps(state) {
  var _chatBoxConfigsData$g;

  var chatBoxConfigsData = state.chatBoxConfigs;
  return {
    loading: chatBoxConfigsData.get("loading"),
    data: (_chatBoxConfigsData$g = chatBoxConfigsData.get("data")) === null || _chatBoxConfigsData$g === void 0 ? void 0 : _chatBoxConfigsData$g.toArray(),
    errors: chatBoxConfigsData.get("errors"),
    currentPage: chatBoxConfigsData.get("currentPage"),
    lastPage: chatBoxConfigsData.get("lastPage"),
    filters: chatBoxConfigsData.get("filters"),
    sort: chatBoxConfigsData.get("sort")
  };
};

var dispatchToProps = function dispatchToProps(dispatch) {
  return {
    loadPage: function loadPage(page, filters, sort) {
      return dispatch(Object(_redux_reducers_chatBoxConfigs_actionCreators__WEBPACK_IMPORTED_MODULE_3__["loadChatBoxConfigs"])(page, filters, sort));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_HOCs_withIndexPageLogic__WEBPACK_IMPORTED_MODULE_1__["default"])(ChatBoxConfigIndexPage, stateToProps, dispatchToProps));

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

/***/ }),

/***/ "./resources/js/redux/reducers/chatBoxConfigs/actionCreators.js":
/*!**********************************************************************!*\
  !*** ./resources/js/redux/reducers/chatBoxConfigs/actionCreators.js ***!
  \**********************************************************************/
/*! exports provided: loadChatBoxConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadChatBoxConfigs", function() { return loadChatBoxConfigs; });
/* harmony import */ var _redux_reducers_chatBoxConfigs_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/chatBoxConfigs/actionTypes */ "./resources/js/redux/reducers/chatBoxConfigs/actionTypes.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _helpers_filtersToString__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/helpers/filtersToString */ "./resources/js/helpers/filtersToString.js");
/* harmony import */ var _helpers_sortToString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/helpers/sortToString */ "./resources/js/helpers/sortToString.js");
/* harmony import */ var _redux_helpers_getStandardIndexActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/helpers/getStandardIndexActions */ "./resources/js/redux/helpers/getStandardIndexActions.js");






var _getStandardIndexActi = Object(_redux_helpers_getStandardIndexActions__WEBPACK_IMPORTED_MODULE_4__["default"])(_redux_reducers_chatBoxConfigs_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"]),
    loading = _getStandardIndexActi.loading,
    itemsListLoaded = _getStandardIndexActi.itemsListLoaded,
    error = _getStandardIndexActi.error;

var loadChatBoxConfigs = function loadChatBoxConfigs(page, filters, sort) {
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
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/chat-box-configs", params, {}).then(function (response) {
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