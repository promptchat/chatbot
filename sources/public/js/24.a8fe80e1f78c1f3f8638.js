(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+Bbr":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),l=n("m7Yf"),c=n("MwQV"),s=n("c8c+"),u=n("Qu/B"),m=n("EW+5"),p=Object(m.a)(l.a),d=p.loading,f=p.itemsListLoaded,g=p.error,b=n("jeY2"),h=n("4vsJ"),y=n("ridt"),v=n("Uf9I"),O=n("QDav"),E=n("1Y33"),j=n("g2RW"),x=n("Mpt7"),S=n("jQco"),N=n("9Koi");function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach((function(t){T(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var I={container:function(e){return C(C({},e),{},{border:"1px solid #ced4da",display:"inline-block",width:"auto",borderRadius:"5px",minHeight:"35px"})},control:function(e){return C(C({},e),{},{border:"none",minHeight:"35px","&, &:hover":{border:"none",boxShadow:"none"},background:"transparent"})},singleValue:function(e){return C(C({},e),{},{margin:"0",font:"normal normal 15px/17px 'Roboto Regular', sans-serif",top:"45%"})},valueContainer:function(e){return C(C({},e),{},{padding:"2px 0 2px 8px",width:"130px"})},indicatorsContainer:function(e){return C(C({},e),{},{"& > div":{padding:"8px 4px 8px 0"},top:"-3px",paddingLeft:"6px",alignItems:"baseline"})},indicatorSeparator:function(e){return C(C({},e),{},{display:"none"})},placeholder:function(e){return C(C({},e),{},{font:"normal normal 15px/18px 'Roboto Regular', sans-serif",color:"#B0B0B0"})},option:function(e){return C(C({},e),{},{font:"normal normal 15px/17px 'Roboto Regular', sans-serif","&:hover, &:focus, &:active":{font:"normal normal 15px/17px 'Roboto Regular', sans-serif"}})}};function P(e){var t=e.filter,n=e.handleChange,o=e.loadOptions,i=Object(N.a)().t,l=R(Object(a.useState)(Object(x.e)(t.get("filterValue"))?t.get("filterValue").toJS():t.get("filterValue")),2),c=l[0],s=l[1];return r.a.createElement(O.a,{styles:I,cacheOptions:!0,defaultOptions:!0,loadOptions:o,onChange:function(e){s(e),n(t.set("value",e.length?e.map((function(e){return e.value})):null).set("filterValue",e.length?e:null).set("displayingType",S.b))},value:c,isMulti:!0,placeholder:i("tables.filter-select-placeholder",{name:t.get("display")})})}function A(e){var t=e.filters,n=e.changeFilters,a=e.column,o=e.displayName,i=e.loadOptions;return r.a.createElement(E.a,{filters:t,changeFilters:n,column:a,displayName:o,operator:j.c,renderView:function(e,t){return r.a.createElement(P,{filter:e,handleChange:t,displayName:o,loadOptions:i})}})}P.propTypes={filter:i.a.object.isRequired,loadOptions:i.a.func.isRequired,handleChange:i.a.func.isRequired,displayName:i.a.string.isRequired},A.propTypes={loadOptions:i.a.func.isRequired,changeFilters:i.a.func.isRequired,column:i.a.string.isRequired,displayName:i.a.string.isRequired,filters:i.a.any.isRequired};var V=r.a.memo(A),F=n("2pJb");function k(e){var t=e.name;return r.a.createElement("span",{className:"table-tag d-inline-block px-2 py-1 mr-1 mb-1"},t)}k.propTypes={name:i.a.string.isRequired};var L=n("T7vI"),D=n("eOHm"),M=n("QPV6"),Y=n("OKOT"),_=n("3LyB"),J=n("c0+T"),W=n("q7Gj"),B=n("re1l"),H=n("Z+s4"),Q=n("L3zb"),z=n("ma3e"),G=function(e,t){var n=e.id,a=e.value,o=e.onClick,i=e.onChange,l=e.placeholder;return r.a.createElement(W.a,{className:"date-custom-input-group"},r.a.createElement(B.a,{addonType:"prepend"},r.a.createElement(H.a,{className:"prepend-icon pl-3 pr-0"},r.a.createElement("label",{htmlFor:n,className:"icon-size-16 mb-0 d-flex"},r.a.createElement(z.H,{className:"color-gray"})))),r.a.createElement(Q.a,{className:"date-custom-input rounded-0 border-left-0 pl-2",ref:t,id:n,value:a,onClick:o,placeholder:l,onChange:i}))},U=r.a.forwardRef(G),K=n("CXWj");function $(e){var t=e.filter,n=e.handleChange,a=e.displayName,o=Object(N.a)().t;return r.a.createElement(K.a,{formGroupClass:"py-3 pr-5",id:"live-chat-activity",label:a,name:"scopeHasLastActivity",value:t.get("filterValue")||0,setFieldValue:function(e,a){n(t.set("value",a||null).set("filterValue",o(a?"common.yes":"common.no")).set("displayingType",S.c))}})}function Z(e){var t=e.filters,n=e.changeFilters,a=e.column,o=e.displayName;return r.a.createElement(E.a,{filters:t,changeFilters:n,column:a,displayName:o,operator:j.a,renderView:function(e,t){return r.a.createElement($,{filter:e,handleChange:t,displayName:o})}})}$.propTypes={filter:i.a.object.isRequired,handleChange:i.a.func.isRequired,displayName:i.a.string.isRequired},Z.propTypes={changeFilters:i.a.func.isRequired,column:i.a.string.isRequired,displayName:i.a.string.isRequired,filters:i.a.any.isRequired};var X=Z,ee=n("hBLe"),te=n("55Ip");function ne(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ae(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ae(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ae(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function re(e){var t=e.filter,n=e.handleChange,o=Object(ee.a)(),i=Object(N.a)().t,l=i("clients.search-panel.message-created"),c=Object(a.useCallback)((function(e){var t=e.from?o(e.from):null,n=e.to?o(e.to):null;return e.message&&t&&n?'"'.concat(e.message,'" ').concat(l," ").concat(t," - ").concat(n):e.message&&t?'"'.concat(e.message,'" ').concat(l," >= ").concat(t):e.message&&n?'"'.concat(e.message,'" ').concat(l," <= ").concat(n):t&&n?"".concat(l," ").concat(t," - ").concat(n):t?"".concat(l," >= ").concat(t):n?"".concat(l," <= ").concat(n):e.message?'"'.concat(e.message,'"'):void 0}),[o,l]),s=ne(Object(a.useState)(""),2),u=s[0],m=s[1],p=ne(Object(a.useState)(),2),d=p[0],f=p[1],g=ne(Object(a.useState)(),2),b=g[0],h=g[1],y=Object(x.e)(t.get("value"))?t.get("value"):Object(x.b)(t.get("value")||{});Object(a.useEffect)((function(){m(y.get("message")||""),f(y.get("from")||null),h(y.get("to")||null)}),[y]);var v=Object(a.useRef)(),O=function(e,a,r){var o={message:e,from:a,to:r};n(t.set("value",e||a||r?o:null).set("filterValue",c(o)).set("displayingType",S.c))};return r.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-baseline flex-grow-1 mr-md-4 pr-md-3"},r.a.createElement(_.a,{formGroupClass:"mr-4 py-3",id:"search",name:"search",onChange:function(e){var t=e.target.value;m(t),v.current&&clearTimeout(v.current),v.current=setTimeout((function(){return O(t,d,b)}),500)},value:u,placeholder:i("clients.search-panel.search-in-messages-placeholder")}),r.a.createElement("div",{className:"d-flex"},r.a.createElement(J.a,{formGroupClass:"date-input-form py-3",id:"date-from",onChange:function(e){f(e),v.current&&clearTimeout(v.current),v.current=setTimeout((function(){return O(u,e,b)}),0)},customInput:r.a.createElement(U,null),placeholder:i("clients.search-panel.date-from-placeholder"),value:d}),r.a.createElement(J.a,{formGroupClass:"date-input-form date-input-form-to py-3",onChange:function(e){h(e),v.current&&clearTimeout(v.current),v.current=setTimeout((function(){return O(u,d,e)}),0)},placeholder:i("clients.search-panel.date-to-placeholder"),value:b})))}function oe(e){var t=e.filters,n=e.changeFilters,a=Object(N.a)().t;return r.a.createElement("div",{className:"search-bar d-flex flex-wrap mb-2"},r.a.createElement(E.a,{filters:t,changeFilters:n,column:"scopeSearchByMessage",displayName:a("clients.search-panel.message-filter-display-name"),operator:j.a,renderView:function(e,t){return r.a.createElement(re,{filter:e,handleChange:t})}}),r.a.createElement("div",{className:"d-flex flex-wrap align-items-baseline"},r.a.createElement(X,{filters:t,changeFilters:n,column:"scopeHasLastActivity",displayName:a("clients.search-panel.live-chat-activity-label")}),r.a.createElement(te.a,{className:"btn btn-warning color-white px-4 pt-2 my-3 mr-2",to:"/clients/import-csv"},a("clients.search-panel.import-csv")),r.a.createElement(te.a,{to:"/clients/create",className:"btn btn-primary color-white px-4 pt-2 my-3"},a("clients.search-panel.add-client-btn"))))}re.propTypes={filter:i.a.object,handleChange:i.a.func.isRequired},oe.propTypes={filters:i.a.object,changeFilters:i.a.func.isRequired};var ie=n("19iC"),le=n("Yfk4"),ce=n("dbgk"),se=n("Jxq0"),ue=n("6ukn"),me=n("5TAD"),pe=n("YOqN"),de=n("6jMY"),fe=n("0ve8");function ge(e){var t=e.filters,n=e.sort,a=e.data,o=e.currentPage,i=e.lastPage,l=e.changeFilters,c=e.changeSort,s=e.changePage,u=e.selected,m=e.toggleSelectAll,p=e.toggleSelect,d=e.total,f=e.clearSelected,g=Object(N.a)().t,b=Object(ie.a)(),O=0;return(u.get("all")||u.get("list",Object(x.b)()).size)&&(O=u.get("all")?d-u.get("list",Object(x.b)()).size:u.get("list",Object(x.b)()).size),r.a.createElement(r.a.Fragment,null,r.a.createElement(ce.a,null,g("clients.title")),r.a.createElement(oe,{filters:t,changeFilters:l}),r.a.createElement(S.d,{filters:t,changeFilters:l},!!O&&r.a.createElement(fe.a,{filter:Object(x.b)({display:g("tables.selected"),filterValue:"".concat(O)}),deleteFilter:f})),r.a.createElement(le.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement("input",{checked:!!u.get("all"),onChange:m,type:"checkbox"})),r.a.createElement("th",null,r.a.createElement(F.a,{title:g("clients.integration-column"),active:Object(h.b)(n,"integrations.name")||Object(E.b)(t,"integrations.id")},r.a.createElement(h.a,{sort:n,name:"integrations.name",displayName:g("clients.integration-column"),changeSort:c,order:1}),r.a.createElement(y.a,{displayName:g("clients.integration-column"),filters:t,changeFilters:l,column:"integrations.id",loadOptions:de.a}))),r.a.createElement("th",null,r.a.createElement(F.a,{title:g("clients.client-column"),active:Object(h.b)(n,"clients.name")||Object(E.b)(t,"clients.name")},r.a.createElement(h.a,{sort:n,name:"clients.name",displayName:g("clients.client-column"),changeSort:c,order:2}),r.a.createElement(v.a,{displayName:g("clients.client-column"),filters:t,changeFilters:l,column:"clients.name"}))),r.a.createElement("th",null,r.a.createElement(F.a,{title:g("clients.tags-column"),active:Object(E.b)(t,"scopeTagsWhere")},r.a.createElement(V,{displayName:g("clients.tags-column"),filters:t,changeFilters:l,column:"scopeTagsWhere",loadOptions:ue.a}))),r.a.createElement("th",null,g("clients.last-activity-column")),r.a.createElement("th",null,r.a.createElement(F.a,{title:g("clients.full-name-column"),active:Object(h.b)(n,"scopeFullNameOrder")||Object(E.b)(t,"scopeFullNameWhere")},r.a.createElement(h.a,{sort:n,name:"scopeFullNameOrder",displayName:g("clients.full-name-column"),changeSort:c,order:3}),r.a.createElement(v.a,{displayName:g("clients.full-name-column"),filters:t,changeFilters:l,column:"scopeFullNameWhere"}))),r.a.createElement("th",null,r.a.createElement(F.a,{title:g("clients.phone-number-column"),active:Object(h.b)(n,"scopePhoneNumberOrder")||Object(E.b)(t,"scopePhoneNumberWhere")},r.a.createElement(h.a,{sort:n,name:"scopePhoneNumberOrder",displayName:g("clients.phone-number-column"),changeSort:c,order:4}),r.a.createElement(v.a,{displayName:g("clients.phone-number-column"),filters:t,changeFilters:l,column:"scopePhoneNumberWhere"}))),r.a.createElement("th",null,r.a.createElement(F.a,{title:g("clients.variables-column"),active:Object(E.b)(t,"variables")},r.a.createElement(v.a,{displayName:g("clients.variables-column"),filters:t,changeFilters:l,column:"variables"}))),r.a.createElement("th",null," "))),r.a.createElement("tbody",null,a.length?a.map((function(e){var t;return r.a.createElement("tr",{key:e.id,id:e.id},r.a.createElement("td",null,r.a.createElement("input",{onChange:function(){return p(e.id.toString())},checked:u.get("all")^u.getIn(["list",e.id.toString()]),type:"checkbox"})),r.a.createElement("td",null,null===(t=e.integration)||void 0===t?void 0:t.name),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.tags.map((function(e){return r.a.createElement(k,{key:e.id,name:e.name})}))),r.a.createElement("td",null,e.last_message_at?b(e.last_message_at):null),r.a.createElement("td",null,e.fullName),r.a.createElement("td",{className:"phone-number"},e.phoneNumber),r.a.createElement("td",null,r.a.createElement(L.a,{data:e.variables})),r.a.createElement(M.a,null,(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(me.a,{className:"align-items-center",url:pe.a.chatRoute.getLink(e.liveChatTab,e.id),icon:r.a.createElement(z.I,{className:"icon-size-15 color-blue mr-2"}),text:g("clients.live-chat-link")}),r.a.createElement(Y.a,{url:"/methods/clients/".concat(e.id),setConfirm:t,onSuccess:function(){return s(o)}}))})))})):r.a.createElement(se.a,{colspan:8}))),r.a.createElement(D.a,{currentPage:o,lastPage:i,loadPage:s,route:"/clients"}),!!O&&r.a.createElement(te.a,{className:"btn btn-primary color-white px-4 pt-2 my-3 mr-2",to:"/instant-messages/create-from-filters?filters=".concat(JSON.stringify(t.toJS()),"&selected=").concat(JSON.stringify(u.toJS()))},g("clients.create-instant-messenger")))}ge.propTypes={changeFilters:i.a.func.isRequired,changeSort:i.a.func.isRequired,changePage:i.a.func.isRequired,data:i.a.array.isRequired,currentPage:i.a.number,lastPage:i.a.number,total:i.a.number,filters:i.a.object.isRequired,sort:i.a.object.isRequired,selected:i.a.object.isRequired,toggleSelectAll:i.a.func.isRequired,toggleSelect:i.a.func.isRequired,clearSelected:i.a.func.isRequired};t.default=Object(b.a)(ge,(function(e){var t,n=e.clients;return{loading:n.get("loading"),data:null===(t=n.get("data"))||void 0===t?void 0:t.toArray(),errors:n.get("errors"),currentPage:n.get("currentPage"),lastPage:n.get("lastPage"),filters:n.get("filters"),sort:n.get("sort"),selected:n.get("selected"),total:n.get("total")}}),(function(e){return{loadPage:function(t,n,a,r){return e(function(e,t,n,a){return function(r){var o={page:e};t.size&&(o.filter=Object(s.a)(t)),n.size&&(o.order=Object(u.a)(n)),r(d()),c.a.call("get","/methods/clients",o,{}).then((function(e){r(f({filters:t,sort:n,selected:a,response:e}))})).catch((function(e){return r(g(e))}))}}(t,n,a,r))},toggleSelectAll:function(){return e({type:l.a.SELECT_ALL})},toggleSelect:function(t){return e(function(e){return{type:l.a.SELECT_TOGGLE,payload:{id:e}}}(t))},clearSelected:function(){return e({type:l.a.SELECT_CLEAR,payload:{id:t}});var t}}}))},"19iC":function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return u}));var a=n("rpa7"),r=n("J3gs"),o=n("YOdH"),i=n("gmZo"),l=n("q1tI");function c(){return function(e){return!e||e.is_am_pm?"hh:mm a":"HH:mm"}(Object(a.a)())}function s(){var e=Object(r.a)();return c()+" "+e}function u(){var e=Object(o.a)(),t=s();return Object(l.useCallback)((function(n){return Object(i.a)(1e3*n).tz(e).format(t)}),[t,e])}},"4vsJ":function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),l=n("TSYQ"),c=n.n(l),s=n("Mpt7"),u=n("9Koi");function m(e,t){return e.find((function(e){return e.get("name")===t}))}function p(e){var t=e.sort,n=e.name,a=e.changeSort,o=e.displayName,i=e.order,l=Object(u.a)().t,m=t.find((function(e){return e.get("name")===n})),p=m&&m.get("name")===m.get("sort"),d=m&&"-".concat(m.get("name"))===m.get("sort"),f=function(e){var r=t.filter((function(e){return e.get("name")!==n})).push(Object(s.b)({name:n,sort:e?n:"-".concat(n),order:i})).sort((function(e,t){return e.get("order")-t.get("order")}));a(r)},g=function(){a(t.filter((function(e){return e.get("name")!==n})))};return r.a.createElement("div",{className:"sort-switcher text-main"},o?r.a.createElement("div",{className:"color-gray mb-3"},l("tables.sort-title",{name:o})):null,r.a.createElement("button",{onClick:function(){return p?g():f(!0)},className:c()("btn btn-sort rounded-left mb-3",{active:p})},l("tables.sort-asc-text")),r.a.createElement("button",{onClick:function(){return d?g():f(!1)},className:c()("btn btn-sort rounded-right mb-3",{active:d})},l("tables.sort-desc-text")))}p.propTypes={changeSort:i.a.func.isRequired,name:i.a.string.isRequired,displayName:i.a.string,sort:i.a.object.isRequired,order:i.a.number.isRequired}},"6jMY":function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n("MwQV");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(t){return new Promise((function(n){var r={q:t};e&&(r.type=e),a.a.call("get","/methods/integrations/search",r).data((function(e){n(e.map((function(e){return{label:e.name,value:e.id,integration:e}})))}))}))}}var o=r();t.a=o},"6ukn":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("MwQV");function r(e){return new Promise((function(t){a.a.call("get","/methods/tags/search-company-tags",{q:e}).data((function(e){t(e.map((function(e){return{label:e.name,value:e.id}})))}))}))}},Jxq0:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),l=n("9Koi");function c(e){var t=e.colspan,n=Object(l.a)().t;return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:t,className:"text-center no-data font-italic color-gray pt-4"},n("tables.no-data")))}c.propTypes={colspan:i.a.number.isRequired}},QDav:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var a=n("q1tI"),r=n.n(a),o=(n("qKvR"),n("i8i4"),n("17x9"),n("q/f6")),i=n("njTy"),l=(n("iYmT"),n("FUBA"),n("1m/E"));function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={cacheOptions:!1,defaultOptions:!1,filterOption:null,isLoading:!1},u=function(e){var t,n;return n=t=function(t){var n,a;function i(e){var n;return(n=t.call(this)||this).select=void 0,n.lastRequest=void 0,n.mounted=!1,n.optionsCache={},n.handleInputChange=function(e,t){var a=n.props,r=a.cacheOptions,i=a.onInputChange,l=Object(o.k)(e,t,i);if(!l)return delete n.lastRequest,void n.setState({inputValue:"",loadedInputValue:"",loadedOptions:[],isLoading:!1,passEmptyOptions:!1});if(r&&n.optionsCache[l])n.setState({inputValue:l,loadedInputValue:l,loadedOptions:n.optionsCache[l],isLoading:!1,passEmptyOptions:!1});else{var c=n.lastRequest={};n.setState({inputValue:l,isLoading:!0,passEmptyOptions:!n.state.loadedInputValue},(function(){n.loadOptions(l,(function(e){n.mounted&&(e&&(n.optionsCache[l]=e),c===n.lastRequest&&(delete n.lastRequest,n.setState({isLoading:!1,loadedInputValue:l,loadedOptions:e||[],passEmptyOptions:!1})))}))}))}return l},n.state={defaultOptions:Array.isArray(e.defaultOptions)?e.defaultOptions:void 0,inputValue:void 0!==e.inputValue?e.inputValue:"",isLoading:!0===e.defaultOptions,loadedOptions:[],passEmptyOptions:!1},n}a=t,(n=i).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var l=i.prototype;return l.componentDidMount=function(){var e=this;this.mounted=!0;var t=this.props.defaultOptions,n=this.state.inputValue;!0===t&&this.loadOptions(n,(function(t){if(e.mounted){var n=!!e.lastRequest;e.setState({defaultOptions:t||[],isLoading:n})}}))},l.UNSAFE_componentWillReceiveProps=function(e){e.cacheOptions!==this.props.cacheOptions&&(this.optionsCache={}),e.defaultOptions!==this.props.defaultOptions&&this.setState({defaultOptions:Array.isArray(e.defaultOptions)?e.defaultOptions:void 0})},l.componentWillUnmount=function(){this.mounted=!1},l.focus=function(){this.select.focus()},l.blur=function(){this.select.blur()},l.loadOptions=function(e,t){var n=this.props.loadOptions;if(!n)return t();var a=n(e,t);a&&"function"==typeof a.then&&a.then(t,(function(){return t()}))},l.render=function(){var t=this,n=this.props,a=(n.loadOptions,n.isLoading),o=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(n,["loadOptions","isLoading"]),i=this.state,l=i.defaultOptions,s=i.inputValue,u=i.isLoading,m=i.loadedInputValue,p=i.loadedOptions,d=i.passEmptyOptions?[]:s&&m?p:l||[];return r.a.createElement(e,c({},o,{ref:function(e){t.select=e},options:d,isLoading:u||a,onInputChange:this.handleInputChange}))},i}(a.Component),t.defaultProps=s,n},m=Object(l.a)(i.a),p=u(m);t.a=p},T7vI:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),l=n("9Koi"),c=n("zEWu"),s=n("mDHu");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var d=["ip","geo","first_name","last_name","phone_number","email"];function f(e){var t=e.data,n=Object(l.a)().t,o=m(Object(a.useState)(!1),2),i=o[0],p=o[1],f=[],g=[];for(var b in t)if(t.hasOwnProperty(b)&&null!==t[b]){var h={name:b,value:t[b]};d.includes(b)?f.push(h):g.push(h)}var y=function(e){return Object(c.a)(e)?r.a.createElement(s.a,{geo:e}):Array.isArray(e)?e.join(", "):"object"===u(e)?JSON.stringify(e):e};return r.a.createElement("div",{className:"variable-items"},f.map((function(e){return y(e.value)?r.a.createElement("div",{className:"variable-item",key:e.name},r.a.createElement("span",{className:"item-name font-weight-bold"},e.name," "),r.a.createElement("span",{className:"item-value"},y(e.value))):null})),g.length&&!i?r.a.createElement("button",{type:"button",className:"btn btn-link no-shadow p-0 color-blue text-middle text-dec-none",onClick:function(){return p(!0)}},n("tables.json-show-more",{count:g.length})):null,g.length&&i?g.map((function(e){return y(e.value)?r.a.createElement("div",{className:"variable-item",key:e.name},r.a.createElement("span",{className:"item-name font-weight-bold"},e.name," "),r.a.createElement("span",{className:"item-value"},y(e.value))):null})):null)}f.propTypes={data:i.a.object.isRequired},t.a=f},"c0+T":function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),l=n("jrRI"),c=n("NRhA"),s=n.n(c),u=n("Opvh"),m=n("J3gs");n("5Buo");var p=n("TSYQ"),d=n.n(p);function f(e){var t=e.value,n=e.onChange,o=e.customInput,i=e.placeholder,p=e.formGroupClass,f=e.inputClass,g=e.minDate,b=e.maxDate;Object(a.useEffect)((function(){Object(c.registerLocale)(window.locale,u[window.locale])}),[]);var h=function(e){switch(e){case"MM/DD/YYYY":return"MM/dd/yyyy";case"DD.MM.YYYY":return"dd.MM.yyyy"}}(Object(m.a)());return r.a.createElement(l.a,{className:d()(p)},r.a.createElement(s.a,{selected:t?new Date(1e3*t):null,onChange:function(e){return n(e?Math.ceil(e.getTime()/1e3):null)},className:d()("form-control",f),dateFormat:h,customInput:o,placeholderText:i,locale:window.locale,minDate:g,maxDate:b}))}f.propTypes={onChange:i.a.func.isRequired,customInput:i.a.any,value:i.a.number,placeholder:i.a.string,formGroupClass:i.a.string,inputClass:i.a.string,minDate:i.a.object,maxDate:i.a.object}},gmZo:function(e,t,n){"use strict";n("iYuL");var a=n("f0Wu");a.locale(window.locale),t.a=a},mDHu:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o);function l(e){var t=e.geo,n=[];return t.city&&n.push(t.city),t.country&&n.push(t.country),r.a.createElement("div",{className:"d-flex align-items-center"},t.iso?r.a.createElement("img",{className:"flag mr-2",src:"/img/flags/".concat(t.iso.toLowerCase(),".gif"),alt:t.iso}):null,r.a.createElement("div",{className:"location"},n.join(", ")))}l.propTypes={geo:i.a.object.isRequired}},ridt:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("QDav"),i=n("17x9"),l=n.n(i),c=n("1Y33"),s=n("g2RW"),u=n("Mpt7"),m=n("jQco"),p=n("9Koi");function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(a=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={container:function(e){return b(b({},e),{},{border:"1px solid #ced4da",display:"inline-block",width:"auto",borderRadius:"5px",minHeight:"35px"})},control:function(e){return b(b({},e),{},{border:"none",minHeight:"35px","&, &:hover":{border:"none",boxShadow:"none"},background:"transparent"})},singleValue:function(e){return b(b({},e),{},{margin:"0",font:"normal normal 15px/17px 'Roboto Regular', sans-serif",top:"45%"})},valueContainer:function(e){return b(b({},e),{},{padding:"2px 0 2px 8px",width:"130px"})},indicatorsContainer:function(e){return b(b({},e),{},{"& > div":{padding:"8px 4px 8px 0"},top:"-3px",paddingLeft:"6px",alignItems:"baseline"})},indicatorSeparator:function(e){return b(b({},e),{},{display:"none"})},placeholder:function(e){return b(b({},e),{},{font:"normal normal 15px/18px 'Roboto Regular', sans-serif",color:"#B0B0B0"})},option:function(e){return b(b({},e),{},{font:"normal normal 15px/17px 'Roboto Regular', sans-serif","&:hover, &:focus, &:active":{font:"normal normal 15px/17px 'Roboto Regular', sans-serif"}})}};function v(e){var t=e.filter,n=e.handleChange,i=e.loadOptions,l=Object(p.a)().t,c=d(Object(a.useState)(Object(u.e)(t.get("filterValue"))?t.get("filterValue").toJS():t.get("filterValue")),2),s=c[0],f=c[1];return r.a.createElement(o.a,{styles:y,cacheOptions:!0,defaultOptions:!0,loadOptions:i,onChange:function(e){f(e),n(t.set("value",e?e.value:null).set("filterValue",e).set("displayingType",m.a))},value:s,placeholder:l("tables.filter-select-placeholder",{name:t.get("display")}),isClearable:!0})}function O(e){var t=e.filters,n=e.changeFilters,a=e.column,o=e.displayName,i=e.loadOptions;return r.a.createElement(c.a,{filters:t,changeFilters:n,column:a,displayName:o,operator:s.a,renderView:function(e,t){return r.a.createElement(v,{filter:e,handleChange:t,displayName:o,loadOptions:i})}})}v.propTypes={filter:l.a.object.isRequired,loadOptions:l.a.func.isRequired,handleChange:l.a.func.isRequired,displayName:l.a.string.isRequired},O.propTypes={loadOptions:l.a.func.isRequired,changeFilters:l.a.func.isRequired,column:l.a.string.isRequired,displayName:l.a.string.isRequired,filters:l.a.any.isRequired},t.a=r.a.memo(O)},zEWu:function(e,t,n){"use strict";function a(e){return(null==e?void 0:e.iso)||(null==e?void 0:e.city)||(null==e?void 0:e.country)}n.d(t,"a",(function(){return a}))}}]);