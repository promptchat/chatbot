(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

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

/***/ "./resources/js/containers/siteConfigs/index.js":
/*!******************************************************!*\
  !*** ./resources/js/containers/siteConfigs/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/layout/PersonalAccountLayout/PersonalAccountLayout */ "./resources/js/components/layout/PersonalAccountLayout/PersonalAccountLayout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_reducers_siteConfigs_actionCreators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/redux/reducers/siteConfigs/actionCreators */ "./resources/js/redux/reducers/siteConfigs/actionCreators.js");
/* harmony import */ var _components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/widgets/ErrorMessage */ "./resources/js/components/widgets/ErrorMessage.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/widgets/SpinnerBlock */ "./resources/js/components/widgets/SpinnerBlock.js");
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/es/index.js");
/* harmony import */ var _components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/widgets/PageTitle */ "./resources/js/components/widgets/PageTitle.js");
/* harmony import */ var _models_SiteConfig__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/models/SiteConfig */ "./resources/js/models/SiteConfig.js");
/* harmony import */ var _hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/hooks/useGetDateTime */ "./resources/js/hooks/useGetDateTime.js");
/* harmony import */ var reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! reactstrap/es/Col */ "./node_modules/reactstrap/es/Col.js");
/* harmony import */ var reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! reactstrap/es/Row */ "./node_modules/reactstrap/es/Row.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
















function SettingIcon(_ref) {
  var type = _ref.type;

  switch (type) {
    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_10__["LOGO"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__["FaImage"], {
        className: "icon"
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_10__["FAVICON"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__["FaIcons"], {
        className: "icon"
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_10__["SITE_COLOR_SCHEME"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__["FaPalette"], {
        className: "icon"
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_10__["POWERED_BY_LINK_FOR_CHATBOX"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__["FaRegCopyright"], {
        className: "icon"
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_10__["SITE_TITLE"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__["FaHeading"], {
        className: "icon"
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_10__["SITE_DESCRIPTION"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__["FaKeyboard"], {
        className: "icon"
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_10__["EMAIL_CREDENTIALS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__["FaMailBulk"], {
        className: "icon"
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_10__["SET_OF_GOOGLE_FONTS"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__["FaFoursquare"], {
        className: "icon"
      });

    case _models_SiteConfig__WEBPACK_IMPORTED_MODULE_10__["LANGUAGE_LIST"]:
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_14__["FaLanguage"], {
        className: "icon"
      });

    default:
      return null;
  }
}

SettingIcon.propTypes = {
  type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired
};

function SiteConfigsIndex(_ref2) {
  var loading = _ref2.loading,
      data = _ref2.data,
      error = _ref2.error,
      dispatch = _ref2.dispatch;

  var _useTranslation = Object(react_i18next__WEBPACK_IMPORTED_MODULE_8__["useTranslation"])(),
      t = _useTranslation.t;

  var formatDateTime = Object(_hooks_useGetDateTime__WEBPACK_IMPORTED_MODULE_11__["default"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    dispatch(Object(_redux_reducers_siteConfigs_actionCreators__WEBPACK_IMPORTED_MODULE_4__["loadSiteConfigs"])());
  }, [dispatch]);
  var content;

  if (loading) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_SpinnerBlock__WEBPACK_IMPORTED_MODULE_7__["default"], null);
  } else if (data && !error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "site-configs"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Row__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: "mb-5"
    }, data.map(function (siteSetting) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap_es_Col__WEBPACK_IMPORTED_MODULE_12__["default"], {
        xl: 4,
        md: 6,
        key: siteSetting.id,
        className: "pt-2 pb-3 px-3 site-configs-card"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__["Link"], {
        className: "d-flex align-items-center color-blue site-configs-link p-3 color-white rounded",
        to: "/site-configs/".concat(siteSetting.id, "/edit")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "setting-icon d-flex justify-content-center align-items-center rounded-circle mr-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SettingIcon, {
        type: siteSetting.id
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-info"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "settings-title mb-2"
      }, siteSetting.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "text-main mb-2"
      }, siteSetting.updated_at ? t("siteConfig.last_update", {
        date: formatDateTime(siteSetting.updated_at)
      }) : null))));
    })));
  } else if (error) {
    content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], null);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_PersonalAccountLayout_PersonalAccountLayout__WEBPACK_IMPORTED_MODULE_2__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_widgets_PageTitle__WEBPACK_IMPORTED_MODULE_9__["default"], null, t("siteConfig.index-page-table-head")), content);
}

SiteConfigsIndex.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};

var stateToProps = function stateToProps(state) {
  var siteSettings = state.siteConfigs;
  return {
    loading: siteSettings.get("loading"),
    error: siteSettings.get("error"),
    data: siteSettings.get("data").toArray()
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(stateToProps)(SiteConfigsIndex));

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

/***/ "./resources/js/redux/reducers/siteConfigs/actionCreators.js":
/*!*******************************************************************!*\
  !*** ./resources/js/redux/reducers/siteConfigs/actionCreators.js ***!
  \*******************************************************************/
/*! exports provided: loadSiteConfigs, loadSiteConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSiteConfigs", function() { return loadSiteConfigs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSiteConfig", function() { return loadSiteConfig; });
/* harmony import */ var _redux_reducers_siteConfigs_actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/redux/reducers/siteConfigs/actionTypes */ "./resources/js/redux/reducers/siteConfigs/actionTypes.js");
/* harmony import */ var _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/helpers/client/ApiClient */ "./resources/js/helpers/client/ApiClient.js");
/* harmony import */ var _redux_helpers_getStandardIndexActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/helpers/getStandardIndexActions */ "./resources/js/redux/helpers/getStandardIndexActions.js");




var _getStandardIndexActi = Object(_redux_helpers_getStandardIndexActions__WEBPACK_IMPORTED_MODULE_2__["default"])(_redux_reducers_siteConfigs_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"]),
    loading = _getStandardIndexActi.loading,
    itemsListLoaded = _getStandardIndexActi.itemsListLoaded,
    error = _getStandardIndexActi.error;

var itemLoaded = function itemLoaded(data) {
  return {
    type: _redux_reducers_siteConfigs_actionTypes__WEBPACK_IMPORTED_MODULE_0__["default"].ITEM_LOADED,
    payload: data
  };
};

var loadSiteConfigs = function loadSiteConfigs() {
  return function (dispatch) {
    dispatch(loading());
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/site-configs", {}, {}).then(function (response) {
      return dispatch(itemsListLoaded(response.data));
    })["catch"](function (response) {
      return dispatch(error(response));
    });
  };
};
var loadSiteConfig = function loadSiteConfig(id) {
  return function (dispatch) {
    dispatch(loading());
    _helpers_client_ApiClient__WEBPACK_IMPORTED_MODULE_1__["default"].call("get", "/methods/site-configs/".concat(id), {}, {}).then(function (response) {
      return dispatch(itemLoaded(response.data));
    })["catch"](function (response) {
      return dispatch(error(response));
    });
  };
};

/***/ })

}]);