(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

/***/ "./resources/js/containers/companies/edit/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/containers/companies/edit/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var _redux_reducers_companies_actionCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/reducers/companies/actionCreators */ "./resources/js/redux/reducers/companies/actionCreators.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/widgets/ErrorMessage */ "./resources/js/components/widgets/ErrorMessage.js");
/* harmony import */ var _containers_companies_edit_DepartmentsTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/containers/companies/edit/DepartmentsTable */ "./resources/js/containers/companies/edit/DepartmentsTable.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _containers_companies_edit_CompanyEditForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/containers/companies/edit/CompanyEditForm */ "./resources/js/containers/companies/edit/CompanyEditForm.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _models_Company__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/models/Company */ "./resources/js/models/Company.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");















function EditCompanyPage(_ref) {
  var loading = _ref.loading,
      error = _ref.error,
      company = _ref.company,
      dispatch = _ref.dispatch;
  var params = Object(react_router__WEBPACK_IMPORTED_MODULE_12__["useParams"])();
  var id = params.id;
  var redirectBack = params.back !== "0";

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_10__["useTranslation"])(),
      t = _useTranslation.t;

  var loadPage = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return dispatch(Object(_redux_reducers_companies_actionCreators__WEBPACK_IMPORTED_MODULE_4__["loadCompany"])(id));
  }, [id]); //eslint-disable-line

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadPage();
  }, [loadPage]);
  var content;

  if (loading || !company) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Spinner"], null);
  } else if (error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_6__["default"], null);
  } else {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_companies_edit_CompanyEditForm__WEBPACK_IMPORTED_MODULE_9__["default"], {
      company: company,
      redirectBack: redirectBack
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "text-sm-right"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      to: "/companies/".concat(id, "/users/1"),
      className: "btn btn-secondary ml-sm-3 mr-sm-0 mr-3 px-4 pt-2 mb-3"
    }, t("companies.edit-page.users-list-link")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["Link"], {
      to: "/companies/".concat(id, "/departments/create"),
      className: "btn btn-outline-primary ml-sm-3 mr-sm-0 mr-3 px-4 pt-2 mb-3"
    }, t("companies.edit-page.add-department-btn"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_companies_edit_DepartmentsTable__WEBPACK_IMPORTED_MODULE_7__["default"], {
      companyId: +id,
      reloadPage: loadPage,
      departments: company.departments.toArray()
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_13__["default"], null, t("companies.edit-page.title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, content));
}

var stateToProps = function stateToProps(state) {
  var companiesData = state.companies;
  return {
    loading: companiesData.get("loading"),
    error: companiesData.get("error"),
    company: companiesData.get("item")
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(stateToProps)(EditCompanyPage));
EditCompanyPage.propTypes = {
  company: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.instanceOf(_models_Company__WEBPACK_IMPORTED_MODULE_11__["default"]),
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

/***/ })

}]);