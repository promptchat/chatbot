(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"19iC":function(e,t,n){"use strict";n.d(t,"c",(function(){return u})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return c}));var a=n("rpa7"),r=n("J3gs"),i=n("YOdH"),o=n("gmZo"),l=n("q1tI");function u(){return function(e){return!e||e.is_am_pm?"hh:mm a":"HH:mm"}(Object(a.a)())}function s(){var e=Object(r.a)();return u()+" "+e}function c(){var e=Object(i.a)(),t=s();return Object(l.useCallback)((function(n){return Object(o.a)(1e3*n).tz(e).format(t)}),[t,e])}},"4K7x":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));var a=n("83d4");function r(e){return[{label:e("user.role.".concat(a.c)),value:a.c},{label:e("user.role.".concat(a.a)),value:a.a},{label:e("user.role.".concat(a.b)),value:a.b}]}function i(e){return function(){return new Promise((function(t){t(r(e))}))}}},"4vsJ":function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),i=n("17x9"),o=n.n(i),l=n("TSYQ"),u=n.n(l),s=n("Mpt7"),c=n("9Koi");function d(e,t){return e.find((function(e){return e.get("name")===t}))}function p(e){var t=e.sort,n=e.name,a=e.changeSort,i=e.displayName,o=e.order,l=Object(c.a)().t,d=t.find((function(e){return e.get("name")===n})),p=d&&d.get("name")===d.get("sort"),m=d&&"-".concat(d.get("name"))===d.get("sort"),f=function(e){var r=t.filter((function(e){return e.get("name")!==n})).push(Object(s.b)({name:n,sort:e?n:"-".concat(n),order:o})).sort((function(e,t){return e.get("order")-t.get("order")}));a(r)},g=function(){a(t.filter((function(e){return e.get("name")!==n})))};return r.a.createElement("div",{className:"sort-switcher text-main"},i?r.a.createElement("div",{className:"color-gray mb-3"},l("tables.sort-title",{name:i})):null,r.a.createElement("button",{onClick:function(){return p?g():f(!0)},className:u()("btn btn-sort rounded-left mb-3",{active:p})},l("tables.sort-asc-text")),r.a.createElement("button",{onClick:function(){return m?g():f(!1)},className:u()("btn btn-sort rounded-right mb-3",{active:m})},l("tables.sort-desc-text")))}p.propTypes={changeSort:o.a.func.isRequired,name:o.a.string.isRequired,displayName:o.a.string,sort:o.a.object.isRequired,order:o.a.number.isRequired}},E4lw:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("17x9"),o=n.n(i),l=n("jeY2"),u=n("lYjl"),s=n("MwQV"),c=n("c8c+"),d=n("Qu/B"),p=n("EW+5"),m=Object(p.a)(u.a),f=m.loading,g=m.itemsListLoaded,b=m.error,h=n("4vsJ"),O=n("2pJb"),v=n("eOHm"),y=n("9Koi"),E=n("QPV6"),j=n("OKOT"),x=n("GmYL"),R=n("ridt"),q=n("Uf9I"),w=n("1Y33"),S=n("4K7x"),P=n("jQco"),N=n("kvuc"),C=n("ma3e");function I(e){var t=e.userId,n=Object(y.a)().t;return r.a.createElement(N.a,{className:"p-3 d-flex action-dropdown-item edit color-black",tag:"a",href:"/user/impersonate/".concat(t)},r.a.createElement(C.Z,{className:"icon-size-15 color-blue mr-2"}),r.a.createElement("span",{className:"text-main color-blue"},n("tables.action-impersonate")))}I.propTypes={userId:o.a.number.isRequired};var V=r.a.memo(I),k=n("rpa7"),L=n("Yfk4"),F=n("dbgk"),A=n("19iC"),T=n("Jxq0"),Y=n("55Ip");function _(e){var t=e.user,n=Object(y.a)().t,a=Object(A.a)();return t.isOnline?r.a.createElement("div",null,r.a.createElement("div",{className:"online-dot d-inline-block rounded-circle mr-1"}),r.a.createElement("span",null,"online")):t.last_activity?r.a.createElement("span",null,n("user.index-page.last-user-activity",{date:a(t.last_activity)})):null}function J(e){return function(){return new Promise((function(t){t([{label:e("user.index-page.status-online"),value:1},{label:e("user.index-page.status-offline"),value:0}])}))}}function K(e){var t=e.sort,n=e.filters,a=e.data,i=e.currentPage,o=e.lastPage,l=e.changeSort,u=e.changeFilters,s=e.changePage,c=e.paginatorRoute,d=e.showCreationButton,p=Object(y.a)().t,m=Object(k.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,null,p("user.index-page.title")),d?r.a.createElement("div",{className:"text-right"},r.a.createElement(Y.a,{to:"/users/create",className:"btn btn-primary mt-2 mb-4"},p("user.index-page.create-btn-text"))):null,r.a.createElement(P.d,{changeFilters:u,filters:n}),r.a.createElement(L.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(O.a,{title:p("user.index-page.column-name"),active:Object(h.b)(t,"name")||Object(w.b)(n,"name")},r.a.createElement(h.a,{sort:t,name:"name",displayName:p("user.index-page.column-name"),changeSort:l,order:1}),r.a.createElement(q.a,{displayName:p("user.index-page.column-name"),filters:n,changeFilters:u,column:"name"}))),r.a.createElement("th",null,r.a.createElement(O.a,{title:p("user.index-page.column-email"),active:Object(h.b)(t,"email")||Object(w.b)(n,"email")},r.a.createElement(h.a,{sort:t,name:"email",displayName:p("user.index-page.column-email"),changeSort:l,order:2}),r.a.createElement(q.a,{displayName:p("user.index-page.column-email"),filters:n,changeFilters:u,column:"email"}))),r.a.createElement("th",null,r.a.createElement(O.a,{title:p("user.index-page.column-role"),active:Object(w.b)(n,"role")},r.a.createElement(R.a,{displayName:p("user.index-page.column-role"),filters:n,changeFilters:u,column:"role",loadOptions:Object(S.a)(p)}))),r.a.createElement("th",null,r.a.createElement(O.a,{title:p("user.index-page.column-status"),active:Object(h.b)(t,"last_activity")||Object(w.b)(n,"role")},r.a.createElement(h.a,{sort:t,name:"last_activity",displayName:p("user.index-page.column-status"),changeSort:l,order:3}),r.a.createElement(R.a,{displayName:p("user.index-page.column-status"),filters:n,changeFilters:u,column:"scopeStatus",loadOptions:J(p)}))),r.a.createElement("th",null," "))),r.a.createElement("tbody",null,a.length?a.map((function(e){return r.a.createElement("tr",{key:e.id,id:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,p("user.role.".concat(e.role))),r.a.createElement("td",null,r.a.createElement(_,{user:e})),r.a.createElement(E.a,null,(function(t){return r.a.createElement(r.a.Fragment,null,m.id!==e.id&&m.isSystemAdministrator?r.a.createElement(V,{userId:e.id}):null,r.a.createElement(x.a,{url:"/users/".concat(e.id,"/edit")}),m.id===e.id?null:r.a.createElement(j.a,{url:"/methods/user/".concat(e.id),setConfirm:t,onSuccess:function(){return s(i)}}))})))})):r.a.createElement(T.a,{colspan:5}))),r.a.createElement(v.a,{currentPage:i,lastPage:o,loadPage:s,route:c}))}K.propTypes={changeFilters:o.a.func.isRequired,changeSort:o.a.func.isRequired,changePage:o.a.func.isRequired,data:o.a.array.isRequired,currentPage:o.a.number,lastPage:o.a.number,filters:o.a.object.isRequired,sort:o.a.object.isRequired,paginatorRoute:o.a.string.isRequired,showCreationButton:o.a.bool};t.a=Object(l.a)(K,(function(e){var t,n=e.users;return{loading:n.get("loading"),data:null===(t=n.get("data"))||void 0===t?void 0:t.toArray(),errors:n.get("errors"),currentPage:n.get("currentPage"),lastPage:n.get("lastPage"),filters:n.get("filters"),sort:n.get("sort")}}),(function(e,t){return{loadPage:function(n,a,r){e(function(e,t,n,a){return function(r){var i={page:e};(t.size||a.size)&&(i.filter=Object(c.a)(a?t.concat(a):t)),n.size&&(i.order=Object(d.a)(n)),r(f()),s.a.call("get","/methods/user",i,{}).then((function(e){r(g({filters:t,sort:n,response:e}))})).catch((function(e){return r(b(e))}))}}(n,a,r,t.defaultFilters))}}}))},GmYL:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("17x9"),o=n.n(i),l=n("ma3e"),u=n("9Koi"),s=n("5TAD");function c(e){var t=e.url,n=Object(u.a)().t;return r.a.createElement(s.a,{url:t,icon:r.a.createElement(l.F,{className:"icon-size-15 color-blue mr-2"}),text:n("common.edit-link")})}c.propTypes={url:o.a.string.isRequired},t.a=r.a.memo(c)},Jxq0:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n.n(a),i=n("17x9"),o=n.n(i),l=n("9Koi");function u(e){var t=e.colspan,n=Object(l.a)().t;return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:t,className:"text-center no-data font-italic color-gray pt-4"},n("tables.no-data")))}u.propTypes={colspan:o.a.number.isRequired}},QDav:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n("q1tI"),r=n.n(a),i=(n("qKvR"),n("i8i4"),n("17x9"),n("q/f6")),o=n("njTy"),l=(n("iYmT"),n("FUBA"),n("1m/E"));function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={cacheOptions:!1,defaultOptions:!1,filterOption:null,isLoading:!1},c=function(e){var t,n;return n=t=function(t){var n,a;function o(e){var n;return(n=t.call(this)||this).select=void 0,n.lastRequest=void 0,n.mounted=!1,n.optionsCache={},n.handleInputChange=function(e,t){var a=n.props,r=a.cacheOptions,o=a.onInputChange,l=Object(i.k)(e,t,o);if(!l)return delete n.lastRequest,void n.setState({inputValue:"",loadedInputValue:"",loadedOptions:[],isLoading:!1,passEmptyOptions:!1});if(r&&n.optionsCache[l])n.setState({inputValue:l,loadedInputValue:l,loadedOptions:n.optionsCache[l],isLoading:!1,passEmptyOptions:!1});else{var u=n.lastRequest={};n.setState({inputValue:l,isLoading:!0,passEmptyOptions:!n.state.loadedInputValue},(function(){n.loadOptions(l,(function(e){n.mounted&&(e&&(n.optionsCache[l]=e),u===n.lastRequest&&(delete n.lastRequest,n.setState({isLoading:!1,loadedInputValue:l,loadedOptions:e||[],passEmptyOptions:!1})))}))}))}return l},n.state={defaultOptions:Array.isArray(e.defaultOptions)?e.defaultOptions:void 0,inputValue:void 0!==e.inputValue?e.inputValue:"",isLoading:!0===e.defaultOptions,loadedOptions:[],passEmptyOptions:!1},n}a=t,(n=o).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var l=o.prototype;return l.componentDidMount=function(){var e=this;this.mounted=!0;var t=this.props.defaultOptions,n=this.state.inputValue;!0===t&&this.loadOptions(n,(function(t){if(e.mounted){var n=!!e.lastRequest;e.setState({defaultOptions:t||[],isLoading:n})}}))},l.UNSAFE_componentWillReceiveProps=function(e){e.cacheOptions!==this.props.cacheOptions&&(this.optionsCache={}),e.defaultOptions!==this.props.defaultOptions&&this.setState({defaultOptions:Array.isArray(e.defaultOptions)?e.defaultOptions:void 0})},l.componentWillUnmount=function(){this.mounted=!1},l.focus=function(){this.select.focus()},l.blur=function(){this.select.blur()},l.loadOptions=function(e,t){var n=this.props.loadOptions;if(!n)return t();var a=n(e,t);a&&"function"==typeof a.then&&a.then(t,(function(){return t()}))},l.render=function(){var t=this,n=this.props,a=(n.loadOptions,n.isLoading),i=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(n,["loadOptions","isLoading"]),o=this.state,l=o.defaultOptions,s=o.inputValue,c=o.isLoading,d=o.loadedInputValue,p=o.loadedOptions,m=o.passEmptyOptions?[]:s&&d?p:l||[];return r.a.createElement(e,u({},i,{ref:function(e){t.select=e},options:m,isLoading:c||a,onInputChange:this.handleInputChange}))},o}(a.Component),t.defaultProps=s,n},d=Object(l.a)(o.a),p=c(d);t.a=p},gmZo:function(e,t,n){"use strict";n("iYuL");var a=n("f0Wu");a.locale(window.locale),t.a=a},ridt:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),i=n("QDav"),o=n("17x9"),l=n.n(o),u=n("1Y33"),s=n("g2RW"),c=n("Mpt7"),d=n("jQco"),p=n("9Koi");function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var O={container:function(e){return b(b({},e),{},{border:"1px solid #ced4da",display:"inline-block",width:"auto",borderRadius:"5px",minHeight:"35px"})},control:function(e){return b(b({},e),{},{border:"none",minHeight:"35px","&, &:hover":{border:"none",boxShadow:"none"},background:"transparent"})},singleValue:function(e){return b(b({},e),{},{margin:"0",font:"normal normal 15px/17px 'Roboto Regular', sans-serif",top:"45%"})},valueContainer:function(e){return b(b({},e),{},{padding:"2px 0 2px 8px",width:"130px"})},indicatorsContainer:function(e){return b(b({},e),{},{"& > div":{padding:"8px 4px 8px 0"},top:"-3px",paddingLeft:"6px",alignItems:"baseline"})},indicatorSeparator:function(e){return b(b({},e),{},{display:"none"})},placeholder:function(e){return b(b({},e),{},{font:"normal normal 15px/18px 'Roboto Regular', sans-serif",color:"#B0B0B0"})},option:function(e){return b(b({},e),{},{font:"normal normal 15px/17px 'Roboto Regular', sans-serif","&:hover, &:focus, &:active":{font:"normal normal 15px/17px 'Roboto Regular', sans-serif"}})}};function v(e){var t=e.filter,n=e.handleChange,o=e.loadOptions,l=Object(p.a)().t,u=m(Object(a.useState)(Object(c.e)(t.get("filterValue"))?t.get("filterValue").toJS():t.get("filterValue")),2),s=u[0],f=u[1];return r.a.createElement(i.a,{styles:O,cacheOptions:!0,defaultOptions:!0,loadOptions:o,onChange:function(e){f(e),n(t.set("value",e?e.value:null).set("filterValue",e).set("displayingType",d.a))},value:s,placeholder:l("tables.filter-select-placeholder",{name:t.get("display")}),isClearable:!0})}function y(e){var t=e.filters,n=e.changeFilters,a=e.column,i=e.displayName,o=e.loadOptions;return r.a.createElement(u.a,{filters:t,changeFilters:n,column:a,displayName:i,operator:s.a,renderView:function(e,t){return r.a.createElement(v,{filter:e,handleChange:t,displayName:i,loadOptions:o})}})}v.propTypes={filter:l.a.object.isRequired,loadOptions:l.a.func.isRequired,handleChange:l.a.func.isRequired,displayName:l.a.string.isRequired},y.propTypes={loadOptions:l.a.func.isRequired,changeFilters:l.a.func.isRequired,column:l.a.string.isRequired,displayName:l.a.string.isRequired,filters:l.a.any.isRequired},t.a=r.a.memo(y)}}]);