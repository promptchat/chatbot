(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"19iC":function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"b",(function(){return s})),a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return m}));var n=a("rpa7"),r=a("J3gs"),i=a("YOdH"),o=a("gmZo"),l=a("q1tI");function c(){return function(e){return!e||e.is_am_pm?"hh:mm a":"HH:mm"}(Object(n.a)())}function s(){var e=Object(i.a)(),t=c();return Object(l.useCallback)((function(a){return Object(o.a)(1e3*a).tz(e).format(t)}),[t,e])}function u(){var e=Object(r.a)();return c()+" "+e}function m(){var e=Object(i.a)(),t=u();return Object(l.useCallback)((function(a){return Object(o.a)(1e3*a).tz(e).format(t)}),[t,e])}},"4K7x":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i}));var n=a("83d4");function r(e){return[{label:e("user.role.".concat(n.c)),value:n.c},{label:e("user.role.".concat(n.a)),value:n.a},{label:e("user.role.".concat(n.b)),value:n.b}]}function i(e){return function(){return new Promise((function(t){t(r(e))}))}}},"4vsJ":function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return d}));var n=a("q1tI"),r=a.n(n),i=a("17x9"),o=a.n(i),l=a("TSYQ"),c=a.n(l),s=a("Mpt7"),u=a("9Koi");function m(e,t){return e.find((function(e){return e.get("name")===t}))}function d(e){var t=e.sort,a=e.name,n=e.changeSort,i=e.displayName,o=e.order,l=Object(u.a)().t,m=t.find((function(e){return e.get("name")===a})),d=m&&m.get("name")===m.get("sort"),f=m&&"-".concat(m.get("name"))===m.get("sort"),p=function(e){var r=t.filter((function(e){return e.get("name")!==a})).push(Object(s.b)({name:a,sort:e?a:"-".concat(a),order:o})).sort((function(e,t){return e.get("order")-t.get("order")}));n(r)},b=function(){n(t.filter((function(e){return e.get("name")!==a})))};return r.a.createElement("div",{className:"sort-switcher text-main"},i?r.a.createElement("div",{className:"color-gray mb-3"},l("tables.sort-title",{name:i})):null,r.a.createElement("button",{onClick:function(){return d?b():p(!0)},className:c()("btn btn-sort rounded-left mb-3",{active:d})},l("tables.sort-asc-text")),r.a.createElement("button",{onClick:function(){return f?b():p(!1)},className:c()("btn btn-sort rounded-right mb-3",{active:f})},l("tables.sort-desc-text")))}d.propTypes={changeSort:o.a.func.isRequired,name:o.a.string.isRequired,displayName:o.a.string,sort:o.a.object.isRequired,order:o.a.number.isRequired}},"5TAD":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("17x9"),o=a.n(i),l=a("55Ip"),c=a("TSYQ"),s=a.n(c);function u(e){var t=e.url,a=e.icon,n=e.text,i=e.realLink,o=e.className,c=r.a.createElement(r.a.Fragment,null,a,n?r.a.createElement("span",{className:"text-main color-blue"},n):null);return i?r.a.createElement("a",{className:s()("p-3 d-flex action-dropdown-item edit color-black",o),href:t},c):r.a.createElement(l.a,{className:s()("p-3 d-flex action-dropdown-item edit color-black",o),to:t},c)}u.defaultProps={realLink:!1},u.propTypes={url:o.a.string.isRequired,icon:o.a.any,text:o.a.string,realLink:o.a.bool,className:o.a.string},t.a=r.a.memo(u)},E4lw:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("17x9"),o=a.n(i),l=a("jeY2"),c=a("lYjl"),s=a("MwQV"),u=a("c8c+"),m=a("Qu/B"),d=a("EW+5"),f=Object(d.a)(c.a),p=f.loading,b=f.itemsListLoaded,g=f.error,v=a("4vsJ"),y=a("2pJb"),h=a("eOHm"),O=a("9Koi"),x=a("QPV6"),E=a("OKOT"),j=a("GmYL"),N=a("ridt"),q=a("Uf9I"),w=a("1Y33"),R=a("4K7x"),S=a("jQco"),C=a("kvuc"),P=a("ma3e");function T(e){var t=e.userId,a=Object(O.a)().t;return r.a.createElement(C.a,{className:"p-3 d-flex action-dropdown-item edit color-black",tag:"a",href:"/user/impersonate/".concat(t)},r.a.createElement(P.Bb,{className:"icon-size-15 color-blue mr-2"}),r.a.createElement("span",{className:"text-main color-blue"},a("tables.action-impersonate")))}T.propTypes={userId:o.a.number.isRequired};var I=r.a.memo(T),k=a("rpa7"),A=a("Yfk4"),F=a("dbgk"),z=a("19iC"),Y=a("Jxq0"),L=a("55Ip");function M(e){var t=e.user,a=Object(O.a)().t,n=Object(z.a)();return t.isOnline?r.a.createElement("div",null,r.a.createElement("div",{className:"online-dot d-inline-block rounded-circle mr-1"}),r.a.createElement("span",null,"online")):t.last_activity?r.a.createElement("span",null,a("user.index-page.last-user-activity",{date:n(t.last_activity)})):null}function J(e){return function(){return new Promise((function(t){t([{label:e("user.index-page.status-online"),value:1},{label:e("user.index-page.status-offline"),value:0}])}))}}function K(e){var t=e.sort,a=e.filters,n=e.data,i=e.currentPage,o=e.lastPage,l=e.changeSort,c=e.changeFilters,s=e.changePage,u=e.paginatorRoute,m=e.showCreationButton,d=Object(O.a)().t,f=Object(k.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(F.a,null,d("user.index-page.title")),m?r.a.createElement("div",{className:"text-right"},r.a.createElement(L.a,{to:"/users/create",className:"btn btn-primary mt-2 mb-4"},d("user.index-page.create-btn-text"))):null,r.a.createElement(S.d,{changeFilters:c,filters:a}),r.a.createElement(A.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(y.a,{title:d("user.index-page.column-name"),active:Object(v.b)(t,"name")||Object(w.b)(a,"name")},r.a.createElement(v.a,{sort:t,name:"name",displayName:d("user.index-page.column-name"),changeSort:l,order:1}),r.a.createElement(q.a,{displayName:d("user.index-page.column-name"),filters:a,changeFilters:c,column:"name"}))),r.a.createElement("th",null,r.a.createElement(y.a,{title:d("user.index-page.column-email"),active:Object(v.b)(t,"email")||Object(w.b)(a,"email")},r.a.createElement(v.a,{sort:t,name:"email",displayName:d("user.index-page.column-email"),changeSort:l,order:2}),r.a.createElement(q.a,{displayName:d("user.index-page.column-email"),filters:a,changeFilters:c,column:"email"}))),r.a.createElement("th",null,r.a.createElement(y.a,{title:d("user.index-page.column-role"),active:Object(w.b)(a,"role")},r.a.createElement(N.a,{displayName:d("user.index-page.column-role"),filters:a,changeFilters:c,column:"role",loadOptions:Object(R.a)(d)}))),r.a.createElement("th",null,r.a.createElement(y.a,{title:d("user.index-page.column-status"),active:Object(v.b)(t,"last_activity")||Object(w.b)(a,"role")},r.a.createElement(v.a,{sort:t,name:"last_activity",displayName:d("user.index-page.column-status"),changeSort:l,order:3}),r.a.createElement(N.a,{displayName:d("user.index-page.column-status"),filters:a,changeFilters:c,column:"scopeStatus",loadOptions:J(d)}))),r.a.createElement("th",null," "))),r.a.createElement("tbody",null,n.length?n.map((function(e){return r.a.createElement("tr",{key:e.id,id:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.email),r.a.createElement("td",null,d("user.role.".concat(e.role))),r.a.createElement("td",null,r.a.createElement(M,{user:e})),r.a.createElement(x.a,null,(function(t){return r.a.createElement(r.a.Fragment,null,f.id!==e.id&&f.isSystemAdministrator?r.a.createElement(I,{userId:e.id}):null,r.a.createElement(j.a,{url:"/users/".concat(e.id,"/edit")}),f.id===e.id?null:r.a.createElement(E.a,{url:"/methods/user/".concat(e.id),setConfirm:t,onSuccess:function(){return s(i)}}))})))})):r.a.createElement(Y.a,{colspan:5}))),r.a.createElement(h.a,{currentPage:i,lastPage:o,loadPage:s,route:u}))}K.propTypes={changeFilters:o.a.func.isRequired,changeSort:o.a.func.isRequired,changePage:o.a.func.isRequired,data:o.a.array.isRequired,currentPage:o.a.number,lastPage:o.a.number,filters:o.a.object.isRequired,sort:o.a.object.isRequired,paginatorRoute:o.a.string.isRequired,showCreationButton:o.a.bool};t.a=Object(l.a)(K,(function(e){var t,a=e.users;return{loading:a.get("loading"),data:null===(t=a.get("data"))||void 0===t?void 0:t.toArray(),errors:a.get("errors"),currentPage:a.get("currentPage"),lastPage:a.get("lastPage"),filters:a.get("filters"),sort:a.get("sort")}}),(function(e,t){return{loadPage:function(a,n,r){e(function(e,t,a,n){return function(r){var i={page:e};(t.size||n.size)&&(i.filter=Object(u.a)(n?t.concat(n):t)),a.size&&(i.order=Object(m.a)(a)),r(p()),s.a.call("get","/methods/user",i,{}).then((function(e){r(b({filters:t,sort:a,response:e}))})).catch((function(e){return r(g(e))}))}}(a,n,r,t.defaultFilters))}}}))},GmYL:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("17x9"),o=a.n(i),l=a("ma3e"),c=a("9Koi"),s=a("5TAD");function u(e){var t=e.url,a=Object(c.a)().t;return r.a.createElement(s.a,{url:t,icon:r.a.createElement(l.T,{className:"icon-size-15 color-blue mr-2"}),text:a("common.edit-link")})}u.propTypes={url:o.a.string.isRequired},t.a=r.a.memo(u)},HLqC:function(e,t,a){var n=a("R5Y4"),r=a("mv/X"),i=a("ZCgT");e.exports=function(e){return function(t,a,o){return o&&"number"!=typeof o&&r(t,a,o)&&(a=o=void 0),t=i(t),void 0===a?(a=t,t=0):a=i(a),o=void 0===o?t<a?1:-1:i(o),n(t,a,o,e)}}},Jxq0:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n),i=a("17x9"),o=a.n(i),l=a("9Koi");function c(e){var t=e.colspan,a=Object(l.a)().t;return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:t,className:"text-center no-data font-italic color-gray pt-4"},a("tables.no-data")))}c.propTypes={colspan:o.a.number.isRequired}},OKOT:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("17x9"),o=a.n(i),l=a("kvuc"),c=a("9Koi"),s=a("MwQV"),u=a("ma3e");function m(e){var t=e.url,a=e.onSuccess,n=e.setConfirm,i=e.disabled,o=Object(c.a)().t;return r.a.createElement("button",{className:"btn btn-link no-shadow d-flex p-3 text-left w-100 action-dropdown-item text-dec-none",type:"button",onClick:function(){n({text:o("tables.delete-confirmation-text"),onConfirm:function(){s.a.call("delete",t).then((function(){n(null),a&&a(t)})).catch((function(){n(null)}))},onCancel:function(){n(null)}})},disabled:i},r.a.createElement(u.xb,{className:"icon-size-15 color-red mr-2"}),r.a.createElement("span",{className:"text-main color-red"},"Delete"))}function d(e){var t=e.url,a=e.onSuccess,n=e.setConfirm,i=e.disabled;return r.a.createElement(l.a,{tag:m,url:t,onSuccess:a,setConfirm:n,disabled:i})}m.propTypes={onSuccess:o.a.func,setConfirm:o.a.func.isRequired,url:o.a.string.isRequired,disabled:o.a.bool},d.propTypes={onSuccess:o.a.func,setConfirm:o.a.func.isRequired,url:o.a.string.isRequired,disabled:o.a.bool},t.a=r.a.memo(d)},QPV6:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("17x9"),o=a.n(i),l=a("oI+J"),c=a("Z7gm"),s=a("X68C"),u=a("FBLP"),m=a("ma3e");function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function p(e){var t,a=e.children,i=e.empty,o=d(Object(n.useState)(!1),2),f=o[0],p=o[1],b=d(Object(n.useState)(null),2),g=b[0],v=b[1];return t=i?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{className:"mx-auto",isOpen:f,toggle:function(){return p((function(e){return!e}))},setActiveFromChild:!0},r.a.createElement(c.a,{caret:!0,color:"transparent",className:"action-dropdown no-shadow p-0"},f?r.a.createElement(m.c,{className:"icon-size-16 color-blue"}):r.a.createElement(m.b,{className:"icon-size-16 color-blue"})),r.a.createElement(s.a,{right:!0,persist:!1,className:"p-0"},a(v))),g&&r.a.createElement(u.a,{show:!0,onCancel:g.onCancel,onConfirm:g.onConfirm,text:g.text})),r.a.createElement("td",{className:"action-items"},t)}p.defaultProps={empty:!1},p.propTypes={children:o.a.func.isRequired,empty:o.a.bool},t.a=r.a.memo(p)},R5Y4:function(e,t){var a=Math.ceil,n=Math.max;e.exports=function(e,t,r,i){for(var o=-1,l=n(a((t-e)/(r||1)),0),c=Array(l);l--;)c[i?l:++o]=e,e+=r;return c}},TKOK:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),i=a("q1tI"),o=a.n(i),l=a("17x9"),c=a.n(l),s=a("TSYQ"),u=a.n(s),m=a("33Jr"),d={active:c.a.bool,children:c.a.node,className:c.a.string,cssModule:c.a.object,disabled:c.a.bool,tag:m.q},f=function(e){var t=e.active,a=e.className,i=e.cssModule,l=e.disabled,c=e.tag,s=Object(r.a)(e,["active","className","cssModule","disabled","tag"]),d=Object(m.m)(u()(a,"page-item",{active:t,disabled:l}),i);return o.a.createElement(c,Object(n.a)({},s,{className:d}))};f.propTypes=d,f.defaultProps={tag:"li"},t.a=f},WjpJ:function(e,t,a){var n=a("HLqC")();e.exports=n},bAGh:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),i=a("q1tI"),o=a.n(i),l=a("17x9"),c=a.n(l),s=a("TSYQ"),u=a.n(s),m=a("33Jr"),d={children:c.a.node,className:c.a.string,listClassName:c.a.string,cssModule:c.a.object,size:c.a.string,tag:m.q,listTag:m.q,"aria-label":c.a.string},f=function(e){var t,a=e.className,i=e.listClassName,l=e.cssModule,c=e.size,s=e.tag,d=e.listTag,f=e["aria-label"],p=Object(r.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),b=Object(m.m)(u()(a),l),g=Object(m.m)(u()(i,"pagination",((t={})["pagination-"+c]=!!c,t)),l);return o.a.createElement(s,{className:b,"aria-label":f},o.a.createElement(d,Object(n.a)({},p,{className:g})))};f.propTypes=d,f.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},t.a=f},gmZo:function(e,t,a){"use strict";a("iYuL");var n=a("f0Wu");n.locale(window.locale),t.a=n},ridt:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("QDav"),o=a("17x9"),l=a.n(o),c=a("1Y33"),s=a("g2RW"),u=a("Mpt7"),m=a("jQco"),d=a("9Koi");function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){v(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var y={container:function(e){return g(g({},e),{},{border:"1px solid #ced4da",display:"inline-block",width:"auto",borderRadius:"5px",minHeight:"35px"})},control:function(e){return g(g({},e),{},{border:"none",minHeight:"35px","&, &:hover":{border:"none",boxShadow:"none"},background:"transparent"})},singleValue:function(e){return g(g({},e),{},{margin:"0",font:"normal normal 15px/17px 'Roboto Regular', sans-serif",top:"45%"})},valueContainer:function(e){return g(g({},e),{},{padding:"2px 0 2px 8px",width:"130px"})},indicatorsContainer:function(e){return g(g({},e),{},{"& > div":{padding:"8px 4px 8px 0"},top:"-3px",paddingLeft:"6px",alignItems:"baseline"})},indicatorSeparator:function(e){return g(g({},e),{},{display:"none"})},placeholder:function(e){return g(g({},e),{},{font:"normal normal 15px/18px 'Roboto Regular', sans-serif",color:"#B0B0B0"})},option:function(e){return g(g({},e),{},{font:"normal normal 15px/17px 'Roboto Regular', sans-serif","&:hover, &:focus, &:active":{font:"normal normal 15px/17px 'Roboto Regular', sans-serif"}})}};function h(e){var t=e.filter,a=e.handleChange,o=e.loadOptions,l=Object(d.a)().t,c=f(Object(n.useState)(Object(u.f)(t.get("filterValue"))?t.get("filterValue").toJS():t.get("filterValue")),2),s=c[0],p=c[1];return r.a.createElement(i.a,{styles:y,cacheOptions:!0,defaultOptions:!0,loadOptions:o,onChange:function(e){p(e),a(t.set("value",e?e.value:null).set("filterValue",e).set("displayingType",m.a))},value:s,placeholder:l("tables.filter-select-placeholder",{name:t.get("display")}),isClearable:!0})}function O(e){var t=e.filters,a=e.changeFilters,n=e.column,i=e.displayName,o=e.loadOptions;return r.a.createElement(c.a,{filters:t,changeFilters:a,column:n,displayName:i,operator:s.a,renderView:function(e,t){return r.a.createElement(h,{filter:e,handleChange:t,displayName:i,loadOptions:o})}})}h.propTypes={filter:l.a.object.isRequired,loadOptions:l.a.func.isRequired,handleChange:l.a.func.isRequired,displayName:l.a.string.isRequired},O.propTypes={loadOptions:l.a.func.isRequired,changeFilters:l.a.func.isRequired,column:l.a.string.isRequired,displayName:l.a.string.isRequired,filters:l.a.any.isRequired},t.a=r.a.memo(O)}}]);