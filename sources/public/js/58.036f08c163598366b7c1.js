(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./resources/js/containers/user/index/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/containers/user/index/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UsersPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_user_index_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/containers/user/index/page */ "./resources/js/containers/user/index/page.js");
/* harmony import */ var _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel */ "./resources/js/components/widgets/table/filtersDisplayingPanel/FiltersDisplayingPanel.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.es.js");
/* harmony import */ var _hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/hooks/useAuthUser */ "./resources/js/hooks/useAuthUser.js");






function UsersPage(_ref) {
  var match = _ref.match,
      history = _ref.history,
      location = _ref.location;
  var user = Object(_hooks_useAuthUser__WEBPACK_IMPORTED_MODULE_5__["default"])();
  var companyId = user.company_id;
  var filters = [{
    column: "company_id",
    operator: "eq",
    value: companyId,
    filterValue: companyId,
    display: "",
    displayingType: _components_widgets_table_filtersDisplayingPanel_FiltersDisplayingPanel__WEBPACK_IMPORTED_MODULE_3__["FILTER_DISPLAY_TEXT"]
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_user_index_page__WEBPACK_IMPORTED_MODULE_2__["default"], {
    defaultFilters: Object(immutable__WEBPACK_IMPORTED_MODULE_4__["fromJS"])(filters),
    match: match,
    location: location,
    history: history,
    additionalPageUrlParams: {
      companyId: companyId
    },
    paginatorRoute: "/users",
    showCreationButton: true
  });
}
UsersPage.propTypes = {
  match: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  location: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ })

}]);