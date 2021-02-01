(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./resources/js/containers/companies/company-users.js":
/*!************************************************************!*\
  !*** ./resources/js/containers/companies/company-users.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CompanyUsersPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js");
/* harmony import */ var _containers_user_index_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/user/index/page */ "./resources/js/containers/user/index/page.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");






function CompanyUsersPage() {
  var params = Object(react_router__WEBPACK_IMPORTED_MODULE_4__["useParams"])();
  var companyId = params.companyId;
  var filters = [{
    column: "company_id",
    operator: "eq",
    value: companyId,
    filterValue: companyId,
    display: "",
    displayingType: _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_1__["FILTER_DISPLAY_TEXT"]
  }];
  var authUser = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_5__["default"])();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_user_index_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    showCreationButton: authUser.companyId === companyId,
    defaultFilters: Object(immutable__WEBPACK_IMPORTED_MODULE_3__["fromJS"])(filters),
    additionalPageUrlParams: {
      companyId: companyId
    },
    paginatorRoute: "/companies/".concat(companyId, "/users")
  });
}

/***/ })

}]);