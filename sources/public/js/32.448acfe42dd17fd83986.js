(window.webpackJsonp=window.webpackJsonp||[]).push([[32,10],{"/r69":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),c=n("sPdi"),l=n("jrRI"),s=n("3OM0"),u=n("TSYQ"),m=n.n(u),p=n("ma3e"),d=n("yzbm"),f=n("9Koi");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function g(e){var t,n,a=e.id,o=e.label,i=e.errors,u=e.name,g=e.className,y=e.value,h=e.setFieldValue,v=e.onRemove,O=e.disabled,j=e.types,E=void 0===j?[]:j,x=m()({"is-invalid":Boolean(i&&(null===(t=i[u])||void 0===t?void 0:t.length))}),R=Object(f.a)().t;return r.a.createElement(l.a,{className:m()(g)},r.a.createElement(s.a,{htmlFor:a,className:m()(x)},"function"==typeof o?o():o),r.a.createElement(d.a,{onDrop:function(e){h(u,e[0])},disabled:O,accept:E.length?E:null},(function(e){var t=e.getRootProps,n=e.getInputProps;return r.a.createElement("section",{className:m()("dropzone-class")},r.a.createElement("div",b({},t(),{className:"load-img d-flex justify-content-center flex-column align-items-center p-3"}),r.a.createElement("input",b({},n(),{multiple:!1})),r.a.createElement(p.d,{className:"icon-size-40 color-gray"}),r.a.createElement("div",{className:"load-img-tip mt-3 text-center"},R("common.drag-and-drop"))))})),y?r.a.createElement("div",{className:m()("position-relative file-preview mr-4",x)},y.name,r.a.createElement("button",{type:"button",className:"btn btn-link no-shadow position-absolute file-preview-close-btn py-0 px-1",onClick:function(){h(u,null),v&&v()}},r.a.createElement(p.vb,{className:"color-red position-relative"}))):null,i&&(null===(n=i[u])||void 0===n?void 0:n.length)?r.a.createElement(c.a,{errors:i[u]}):null)}g.propTypes={errors:i.a.object,id:i.a.oneOfType([i.a.string,i.a.number]),label:i.a.any,name:i.a.string.isRequired,className:i.a.string,value:i.a.object,setFieldValue:i.a.func.isRequired,onRemove:i.a.func,types:i.a.array,disabled:i.a.bool},t.a=r.a.memo(g)},"4vsJ":function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return p}));var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),c=n("TSYQ"),l=n.n(c),s=n("Mpt7"),u=n("9Koi");function m(e,t){return e.find((function(e){return e.get("name")===t}))}function p(e){var t=e.sort,n=e.name,a=e.changeSort,o=e.displayName,i=e.order,c=Object(u.a)().t,m=t.find((function(e){return e.get("name")===n})),p=m&&m.get("name")===m.get("sort"),d=m&&"-".concat(m.get("name"))===m.get("sort"),f=function(e){var r=t.filter((function(e){return e.get("name")!==n})).push(Object(s.b)({name:n,sort:e?n:"-".concat(n),order:i})).sort((function(e,t){return e.get("order")-t.get("order")}));a(r)},b=function(){a(t.filter((function(e){return e.get("name")!==n})))};return r.a.createElement("div",{className:"sort-switcher text-main"},o?r.a.createElement("div",{className:"color-gray mb-3"},c("tables.sort-title",{name:o})):null,r.a.createElement("button",{onClick:function(){return p?b():f(!0)},className:l()("btn btn-sort rounded-left mb-3",{active:p})},c("tables.sort-asc-text")),r.a.createElement("button",{onClick:function(){return d?b():f(!1)},className:l()("btn btn-sort rounded-right mb-3",{active:d})},c("tables.sort-desc-text")))}p.propTypes={changeSort:i.a.func.isRequired,name:i.a.string.isRequired,displayName:i.a.string,sort:i.a.object.isRequired,order:i.a.number.isRequired}},"5TAD":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),c=n("55Ip"),l=n("TSYQ"),s=n.n(l);function u(e){var t=e.url,n=e.icon,a=e.text,o=e.realLink,i=e.className,l=r.a.createElement(r.a.Fragment,null,n,a?r.a.createElement("span",{className:"text-main color-blue"},a):null);return o?r.a.createElement("a",{className:s()("p-3 d-flex action-dropdown-item edit color-black",i),href:t},l):r.a.createElement(c.a,{className:s()("p-3 d-flex action-dropdown-item edit color-black",i),to:t},l)}u.defaultProps={realLink:!1},u.propTypes={url:i.a.string.isRequired,icon:i.a.any,text:i.a.string,realLink:i.a.bool,className:i.a.string},t.a=r.a.memo(u)},"7J6V":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o);function c(e){var t=e.name;return r.a.createElement("span",{className:"table-tag d-inline-block px-2 py-1 mr-1 mb-1"},t)}c.propTypes={name:i.a.string.isRequired}},BK2s:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),o=n("jeY2"),i=n("17x9"),c=n.n(i),l=n("9Koi"),s=n("dbgk"),u=n("55Ip"),m=n("jQco"),p=n("Yfk4"),d=n("2pJb"),f=n("4vsJ"),b=n("1Y33"),g=n("Uf9I"),y=n("QPV6"),h=n("GmYL"),v=n("OKOT"),O=n("Jxq0"),j=n("eOHm"),E=n("R7Vh"),x=n("EW+5"),R=n("c8c+"),w=n("Qu/B"),q=n("MwQV"),C=Object(x.a)(E.a),N=C.loading,S=C.itemsListLoaded,T=C.error,I=n("7J6V"),P=n("Q6vT"),k=n("ebzC"),A=n("ma3e"),M=n("5TAD"),V=n("sOKU"),L=n("LEWT"),z=n("mNz5"),F=n.n(z),D=n("Llg8"),Q=n("W7It");function J(e){var t=e.onSuccess,n=e.onReject,a=Object(l.a)().t;return r.a.createElement(Q.a,{url:"/methods/templates/import",label:a("templates.import-modal.file-label"),confirmText:a("templates.import-modal.ok-btn"),cancelText:a("templates.import-modal.cancel-btn"),onSuccess:t,onReject:n})}J.propTypes={onSuccess:c.a.func.isRequired,onReject:c.a.func.isRequired};var U=J,_=n("rpa7"),K=n("cJ7N");function B(e){var t=e.templateId;return r.a.createElement(K.a,{apiUrl:"/methods/templates/".concat(t,"/create-chat-bot"),buildRedirectTo:function(e){var t=e.id;return"/chatbot/".concat(t,"/edit")}})}B.propTypes={templateId:c.a.number.isRequired};var Y=r.a.memo(B),W=n("83d4"),Z=n("DCcX"),H=n("CaDr"),X=n("OBzv"),$=n("6Rhw");function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ee(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function te(e){var t=e.onSuccess,n=e.onReject,o=Object(l.a)().t,i=G(Object(a.useState)(null),2),c=i[0],s=i[1],u=Object(a.useCallback)((function(){c&&q.a.call("post","/methods/templates/import-by-code",{},{code:c}).then((function(e){200===e.status?t():n()}))}),[c,t,n]),m=Object(a.useCallback)((function(e){s(e.target.value)}),[s]);return r.a.createElement(Z.a,{isOpen:!0,toggle:n,className:"confirm-modal"},r.a.createElement(H.a,null,r.a.createElement($.a,{name:"code",label:o("templates.import-modal.code-label"),value:c,onChange:m,errors:{code:[]}})),r.a.createElement(X.a,null,r.a.createElement(V.a,{color:"primary",onClick:u,disabled:!c},o("templates.import-modal.ok-btn"))," ",r.a.createElement(V.a,{color:"secondary",onClick:n},o("templates.import-modal.cancel-btn"))))}te.propTypes={onSuccess:c.a.func.isRequired,onReject:c.a.func.isRequired};var ne=te,ae=n("OZO3");function re(e){var t=e.filters,n=e.sort,o=e.data,i=e.currentPage,c=e.lastPage,E=e.changeFilters,x=e.changeSort,R=e.changePage,w=e.showImportByCodeModal,q=Object(l.a)().t,C=Object(_.a)(),N=C.role===W.c,S=Object(ae.a)((function(e,t){return r.a.createElement(U,{onSuccess:e,onReject:t})}),i,R),T=Object(a.useCallback)((function(){w().then((function(){R(i)})).catch((function(){}))}),[w,i,R]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,q("templates.index-page.title")),r.a.createElement("div",{className:"text-right"},r.a.createElement(V.a,{color:"info",onClick:S,className:"mt-2 mb-4 mr-2"},q("templates.index-page.import-btn")),N?r.a.createElement(V.a,{color:"warning",onClick:T,className:"mt-2 mb-4 mr-2"},q("templates.index-page.import-by-code-btn")):null,r.a.createElement(u.a,{to:"/templates/create",className:"btn btn-primary mt-2 mb-4"},q("templates.index-page.add-template"))),r.a.createElement(m.d,{filters:t,changeFilters:E}),r.a.createElement(p.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:51}}," "),r.a.createElement("th",null,r.a.createElement(d.a,{title:q("templates.index-page.name-column"),active:Object(f.b)(n,"templates.name")||Object(b.b)(t,"templates.column")},r.a.createElement(f.a,{sort:n,name:"templates.name",displayName:q("templates.index-page.name-column"),changeSort:x,order:1}),r.a.createElement(g.a,{displayName:q("templates.index-page.name-column"),filters:t,changeFilters:E,column:"templates.name"}))),r.a.createElement("th",null,r.a.createElement(d.a,{title:q("templates.index-page.tags-column"),active:Object(b.b)(t,"scopeTemplateTagsWhere")},r.a.createElement(P.a,{displayName:q("templates.index-page.tags-column"),filters:t,changeFilters:E,column:"scopeTemplateTagsWhere",loadOptions:k.a}))),N?r.a.createElement("th",null,q("templates.index-page.import-code-column")):null,r.a.createElement("th",null," "))),r.a.createElement("tbody",null,o.length?o.map((function(e){return r.a.createElement("tr",{key:"templates-".concat(e.id),id:e.id},r.a.createElement("td",{className:"p-1"},e.imageUrl?r.a.createElement("img",{src:e.imageUrl,alt:e.name,className:"img-fluid",style:{height:51}}):r.a.createElement("div",{style:{width:51,height:51,background:"#cecece"}})),r.a.createElement("td",{style:{verticalAlign:"middle"}},e.name),r.a.createElement("td",{className:"last-update"},e.template_tags.map((function(e){return r.a.createElement(I.a,{key:e.id,name:e.name})}))),N?r.a.createElement("td",{style:{verticalAlign:"middle"}},r.a.createElement("code",null,e.import_code)):null,r.a.createElement(y.a,null,(function(t){return r.a.createElement(r.a.Fragment,null,C.company_id?r.a.createElement(Y,{templateId:e.id}):null,C.company_id===e.company_id?r.a.createElement(h.a,{url:"/templates/".concat(e.id,"/edit")}):null,r.a.createElement(M.a,{realLink:!0,url:"/methods/templates/".concat(e.id,"/export"),icon:r.a.createElement(A.w,{className:"icon-size-15 color-blue mr-2"}),text:q("templates.index-page.export-btn")}),C.company_id===e.company_id?r.a.createElement(v.a,{url:"/methods/templates/".concat(e.id),setConfirm:t,onSuccess:function(){return R(i)}}):null)})))})):r.a.createElement(O.a,{colspan:5}))),r.a.createElement(j.a,{currentPage:i,lastPage:c,loadPage:R,route:"/templates"}))}re.propTypes={showImportByCodeModal:c.a.func.isRequired,changeFilters:c.a.func.isRequired,changeSort:c.a.func.isRequired,changePage:c.a.func.isRequired,data:c.a.array.isRequired,currentPage:c.a.number,lastPage:c.a.number,filters:c.a.object.isRequired,sort:c.a.object.isRequired};t.default=Object(o.a)(re,(function(e){var t,n=e.templates;return{loading:n.get("loading"),data:null===(t=n.get("data"))||void 0===t?void 0:t.toArray(),errors:n.get("errors"),currentPage:n.get("currentPage"),lastPage:n.get("lastPage"),filters:n.get("filters"),sort:n.get("sort")}}),(function(e){return{loadPage:function(t,n,a){return e(function(e,t,n){return function(a){var r={page:e};t.size&&(r.filter=Object(R.a)(t)),n.size&&(r.order=Object(w.a)(n)),a(N()),q.a.call("get","/methods/templates",r,{}).then((function(e){a(S({filters:t,sort:n,response:e}))})).catch((function(e){return a(T(e))}))}}(t,n,a))},showImportByCodeModal:function(){return e((function(e){return new Promise((function(t,n){var a=F()(),o=new D.a({id:a,data:{onConfirm:t,onReject:n},render:function(){return r.a.createElement(ne,{onSuccess:function(){t(),e(Object(L.b)(a))},onReject:function(){n(),e(Object(L.b)(a))}})}});e(Object(L.a)(o))}))}))}}}))},FBLP:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),c=n("bFnZ"),l=n.n(c),s=n("9Koi");function u(e){var t=e.show,n=e.text,a=e.onConfirm,o=e.onCancel,i=Object(s.a)().t;return r.a.createElement(l.a,{title:"",show:t,onConfirm:a,onCancel:o,confirmBtnText:i("common.yes"),cancelBtnText:i("common.no"),showCancel:!0,type:"warning"},n)}u.propTypes={onConfirm:i.a.func.isRequired,onCancel:i.a.func.isRequired,show:i.a.bool.isRequired,text:i.a.string.isRequired}},GmYL:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),c=n("ma3e"),l=n("9Koi"),s=n("5TAD");function u(e){var t=e.url,n=Object(l.a)().t;return r.a.createElement(s.a,{url:t,icon:r.a.createElement(c.T,{className:"icon-size-15 color-blue mr-2"}),text:n("common.edit-link")})}u.propTypes={url:i.a.string.isRequired},t.a=r.a.memo(u)},HLqC:function(e,t,n){var a=n("R5Y4"),r=n("mv/X"),o=n("ZCgT");e.exports=function(e){return function(t,n,i){return i&&"number"!=typeof i&&r(t,n,i)&&(n=i=void 0),t=o(t),void 0===n?(n=t,t=0):n=o(n),i=void 0===i?t<n?1:-1:o(i),a(t,n,i,e)}}},Jxq0:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),c=n("9Koi");function l(e){var t=e.colspan,n=Object(c.a)().t;return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:t,className:"text-center no-data font-italic color-gray pt-4"},n("tables.no-data")))}l.propTypes={colspan:i.a.number.isRequired}},LEWT:function(e,t,n){"use strict";n.d(t,"a",(function(){return y})),n.d(t,"b",(function(){return h})),n.d(t,"c",(function(){return v}));var a=n("fOp/"),r=n("Llg8"),o=n("q1tI"),i=n.n(o),c=n("17x9"),l=n.n(c),s=n("DCcX"),u=n("CaDr"),m=n("OBzv"),p=n("sOKU");function d(e){var t=e.text,n=e.onConfirm,a=e.onReject;return i.a.createElement(s.a,{isOpen:!0,toggle:a,className:"confirm-modal"},i.a.createElement(u.a,null,t),i.a.createElement(m.a,null,i.a.createElement(p.a,{color:"primary",onClick:n},"Confirm")," ",i.a.createElement(p.a,{color:"secondary",onClick:a},"Cancel")))}d.propTypes={text:l.a.string.isRequired,onConfirm:l.a.func.isRequired,onReject:l.a.func.isRequired};var f=d,b=n("mNz5"),g=n.n(b),y=function(e){return{type:a.a.ADD,payload:e}},h=function(e){return{type:a.a.REMOVE,payload:e}},v=function(e){return function(t){return new Promise((function(n,a){var o=g()(),c=new r.a({id:o,data:{text:e,onConfirm:n,onReject:a},render:function(){return i.a.createElement(f,{text:e,onConfirm:function(){n(),t(h(o))},onReject:function(){a(),t(h(o))}})}});t(y(c))}))}}},Llg8:function(e,t,n){"use strict";var a=n("Mpt7");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s(this,n)}}function s(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(s,e);var t,n,a,r=l(s);function s(){return o(this,s),r.apply(this,arguments)}return t=s,a=[{key:"instantiate",value:function(e){return new s(e)}}],(n=null)&&i(t.prototype,n),a&&i(t,a),s}(Object(a.d)({id:null,render:function(){return null}}));t.a=m},OBzv:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("17x9"),l=n.n(c),s=n("TSYQ"),u=n.n(s),m=n("33Jr"),p={tag:m.q,className:l.a.string,cssModule:l.a.object},d=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),l=Object(m.m)(u()(t,"modal-footer"),n);return i.a.createElement(o,Object(a.a)({},c,{className:l}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},OKOT:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),c=n("kvuc"),l=n("9Koi"),s=n("MwQV"),u=n("ma3e");function m(e){var t=e.url,n=e.onSuccess,a=e.setConfirm,o=e.disabled,i=Object(l.a)().t;return r.a.createElement("button",{className:"btn btn-link no-shadow d-flex p-3 text-left w-100 action-dropdown-item text-dec-none",type:"button",onClick:function(){a({text:i("tables.delete-confirmation-text"),onConfirm:function(){s.a.call("delete",t).then((function(){a(null),n&&n(t)})).catch((function(){a(null)}))},onCancel:function(){a(null)}})},disabled:o},r.a.createElement(u.xb,{className:"icon-size-15 color-red mr-2"}),r.a.createElement("span",{className:"text-main color-red"},"Delete"))}function p(e){var t=e.url,n=e.onSuccess,a=e.setConfirm,o=e.disabled;return r.a.createElement(c.a,{tag:m,url:t,onSuccess:n,setConfirm:a,disabled:o})}m.propTypes={onSuccess:i.a.func,setConfirm:i.a.func.isRequired,url:i.a.string.isRequired,disabled:i.a.bool},p.propTypes={onSuccess:i.a.func,setConfirm:i.a.func.isRequired,url:i.a.string.isRequired,disabled:i.a.bool},t.a=r.a.memo(p)},OZO3:function(e,t,n){"use strict";var a=n("q1tI"),r=n("/MKj"),o=n("mNz5"),i=n.n(o),c=n("Llg8"),l=n("LEWT");t.a=function(e,t,n){var o=Object(r.d)(),s=Object(a.useCallback)((function(){return new Promise((function(t,n){var a=i()(),r=function(){t(),o(Object(l.b)(a))},s=function(){n(),o(Object(l.b)(a))},u=new c.a({id:a,data:{onConfirm:t,onReject:n},render:function(){return e(r,s)}});o(Object(l.a)(u))}))}),[o,e]);return Object(a.useCallback)((function(){s().then((function(){n(t)})).catch((function(){}))}),[s,t,n])}},Q6vT:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("QDav"),i=n("17x9"),c=n.n(i),l=n("1Y33"),s=n("g2RW"),u=n("Mpt7"),m=n("jQco"),p=n("9Koi");function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h={container:function(e){return g(g({},e),{},{border:"1px solid #ced4da",display:"inline-block",width:"auto",borderRadius:"5px",minHeight:"35px"})},control:function(e){return g(g({},e),{},{border:"none",minHeight:"35px","&, &:hover":{border:"none",boxShadow:"none"},background:"transparent"})},singleValue:function(e){return g(g({},e),{},{margin:"0",font:"normal normal 15px/17px 'Roboto Regular', sans-serif",top:"45%"})},valueContainer:function(e){return g(g({},e),{},{padding:"2px 0 2px 8px",width:"130px"})},indicatorsContainer:function(e){return g(g({},e),{},{"& > div":{padding:"8px 4px 8px 0"},top:"-3px",paddingLeft:"6px",alignItems:"baseline"})},indicatorSeparator:function(e){return g(g({},e),{},{display:"none"})},placeholder:function(e){return g(g({},e),{},{font:"normal normal 15px/18px 'Roboto Regular', sans-serif",color:"#B0B0B0"})},option:function(e){return g(g({},e),{},{font:"normal normal 15px/17px 'Roboto Regular', sans-serif","&:hover, &:focus, &:active":{font:"normal normal 15px/17px 'Roboto Regular', sans-serif"}})}};function v(e){var t=e.filter,n=e.handleChange,i=e.loadOptions,c=Object(p.a)().t,l=d(Object(a.useState)(Object(u.f)(t.get("filterValue"))?t.get("filterValue").toJS():t.get("filterValue")),2),s=l[0],f=l[1];return r.a.createElement(o.a,{styles:h,cacheOptions:!0,defaultOptions:!0,loadOptions:i,onChange:function(e){f(e),n(t.set("value",e.length?e.map((function(e){return e.value})):null).set("filterValue",e.length?e:null).set("displayingType",m.b))},value:s,isMulti:!0,placeholder:c("tables.filter-select-placeholder",{name:t.get("display")})})}function O(e){var t=e.filters,n=e.changeFilters,a=e.column,o=e.displayName,i=e.loadOptions;return r.a.createElement(l.a,{filters:t,changeFilters:n,column:a,displayName:o,operator:s.c,renderView:function(e,t){return r.a.createElement(v,{filter:e,handleChange:t,displayName:o,loadOptions:i})}})}v.propTypes={filter:c.a.object.isRequired,loadOptions:c.a.func.isRequired,handleChange:c.a.func.isRequired,displayName:c.a.string.isRequired},O.propTypes={loadOptions:c.a.func.isRequired,changeFilters:c.a.func.isRequired,column:c.a.string.isRequired,displayName:c.a.string.isRequired,filters:c.a.any.isRequired},t.a=r.a.memo(O)},QDav:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var a=n("q1tI"),r=n.n(a),o=(n("qKvR"),n("i8i4"),n("17x9"),n("q/f6")),i=n("njTy"),c=(n("iYmT"),n("FUBA"),n("1m/E"));function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={cacheOptions:!1,defaultOptions:!1,filterOption:null,isLoading:!1},u=function(e){var t,n;return n=t=function(t){var n,a;function i(e){var n;return(n=t.call(this)||this).select=void 0,n.lastRequest=void 0,n.mounted=!1,n.optionsCache={},n.handleInputChange=function(e,t){var a=n.props,r=a.cacheOptions,i=a.onInputChange,c=Object(o.k)(e,t,i);if(!c)return delete n.lastRequest,void n.setState({inputValue:"",loadedInputValue:"",loadedOptions:[],isLoading:!1,passEmptyOptions:!1});if(r&&n.optionsCache[c])n.setState({inputValue:c,loadedInputValue:c,loadedOptions:n.optionsCache[c],isLoading:!1,passEmptyOptions:!1});else{var l=n.lastRequest={};n.setState({inputValue:c,isLoading:!0,passEmptyOptions:!n.state.loadedInputValue},(function(){n.loadOptions(c,(function(e){n.mounted&&(e&&(n.optionsCache[c]=e),l===n.lastRequest&&(delete n.lastRequest,n.setState({isLoading:!1,loadedInputValue:c,loadedOptions:e||[],passEmptyOptions:!1})))}))}))}return c},n.state={defaultOptions:Array.isArray(e.defaultOptions)?e.defaultOptions:void 0,inputValue:void 0!==e.inputValue?e.inputValue:"",isLoading:!0===e.defaultOptions,loadedOptions:[],passEmptyOptions:!1},n}a=t,(n=i).prototype=Object.create(a.prototype),n.prototype.constructor=n,n.__proto__=a;var c=i.prototype;return c.componentDidMount=function(){var e=this;this.mounted=!0;var t=this.props.defaultOptions,n=this.state.inputValue;!0===t&&this.loadOptions(n,(function(t){if(e.mounted){var n=!!e.lastRequest;e.setState({defaultOptions:t||[],isLoading:n})}}))},c.UNSAFE_componentWillReceiveProps=function(e){e.cacheOptions!==this.props.cacheOptions&&(this.optionsCache={}),e.defaultOptions!==this.props.defaultOptions&&this.setState({defaultOptions:Array.isArray(e.defaultOptions)?e.defaultOptions:void 0})},c.componentWillUnmount=function(){this.mounted=!1},c.focus=function(){this.select.focus()},c.blur=function(){this.select.blur()},c.loadOptions=function(e,t){var n=this.props.loadOptions;if(!n)return t();var a=n(e,t);a&&"function"==typeof a.then&&a.then(t,(function(){return t()}))},c.render=function(){var t=this,n=this.props,a=(n.loadOptions,n.isLoading),o=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(n,["loadOptions","isLoading"]),i=this.state,c=i.defaultOptions,s=i.inputValue,u=i.isLoading,m=i.loadedInputValue,p=i.loadedOptions,d=i.passEmptyOptions?[]:s&&m?p:c||[];return r.a.createElement(e,l({},o,{ref:function(e){t.select=e},options:d,isLoading:u||a,onInputChange:this.handleInputChange}))},i}(a.Component),t.defaultProps=s,n},m=Object(c.a)(i.a),p=u(m);t.a=p},QPV6:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),c=n("oI+J"),l=n("Z7gm"),s=n("X68C"),u=n("FBLP"),m=n("ma3e");function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e){var t,n=e.children,o=e.empty,i=p(Object(a.useState)(!1),2),d=i[0],f=i[1],b=p(Object(a.useState)(null),2),g=b[0],y=b[1];return t=o?null:r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{className:"mx-auto",isOpen:d,toggle:function(){return f((function(e){return!e}))},setActiveFromChild:!0},r.a.createElement(l.a,{caret:!0,color:"transparent",className:"action-dropdown no-shadow p-0"},d?r.a.createElement(m.c,{className:"icon-size-16 color-blue"}):r.a.createElement(m.b,{className:"icon-size-16 color-blue"})),r.a.createElement(s.a,{right:!0,persist:!1,className:"p-0"},n(y))),g&&r.a.createElement(u.a,{show:!0,onCancel:g.onCancel,onConfirm:g.onConfirm,text:g.text})),r.a.createElement("td",{className:"action-items"},t)}f.defaultProps={empty:!1},f.propTypes={children:i.a.func.isRequired,empty:i.a.bool},t.a=r.a.memo(f)},R5Y4:function(e,t){var n=Math.ceil,a=Math.max;e.exports=function(e,t,r,o){for(var i=-1,c=a(n((t-e)/(r||1)),0),l=Array(c);c--;)l[o?c:++i]=e,e+=r;return l}},TKOK:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("17x9"),l=n.n(c),s=n("TSYQ"),u=n.n(s),m=n("33Jr"),p={active:l.a.bool,children:l.a.node,className:l.a.string,cssModule:l.a.object,disabled:l.a.bool,tag:m.q},d=function(e){var t=e.active,n=e.className,o=e.cssModule,c=e.disabled,l=e.tag,s=Object(r.a)(e,["active","className","cssModule","disabled","tag"]),p=Object(m.m)(u()(n,"page-item",{active:t,disabled:c}),o);return i.a.createElement(l,Object(a.a)({},s,{className:p}))};d.propTypes=p,d.defaultProps={tag:"li"},t.a=d},W7It:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),c=n("DCcX"),l=n("CaDr"),s=n("OBzv"),u=n("sOKU"),m=n("/r69"),p=n("MwQV");function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function b(e){var t=e.url,n=e.label,o=e.confirmText,i=e.cancelText,f=e.onSuccess,b=e.onReject,g=function(e,t,n){var r=d(Object(a.useState)(null),2),o=r[0],i=r[1],c=Object(a.useCallback)((function(e,t){i(t)}),[i]),l=Object(a.useCallback)((function(){if(o){var a=new FormData;a.append("file",o),p.a.call("post",e,{},a).then((function(e){200===e.status?t():n()}))}}),[e,o,t,n]);return{file:o,setFile:i,handleFileChange:c,handleConfirmSend:l}}(t,f,b),y=g.file,h=g.handleFileChange,v=g.handleConfirmSend;return r.a.createElement(c.a,{isOpen:!0,toggle:b,className:"confirm-modal"},r.a.createElement(l.a,null,r.a.createElement(m.a,{id:"template-file",name:"templateFile",label:n,value:y,setFieldValue:h,errors:{templateFile:[]},types:["application/zip","application/octet-stream","application/x-zip-compressed","multipart/x-zip"]})),r.a.createElement(s.a,null,r.a.createElement(u.a,{color:"primary",onClick:v,disabled:!y},o)," ",r.a.createElement(u.a,{color:"secondary",onClick:b},i)))}b.propTypes={url:i.a.string.isRequired,label:i.a.string,confirmText:i.a.string,cancelText:i.a.string,onSuccess:i.a.func.isRequired,onReject:i.a.func.isRequired};t.a=b},WjpJ:function(e,t,n){var a=n("HLqC")();e.exports=a},"Z+s4":function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("17x9"),l=n.n(c),s=n("TSYQ"),u=n.n(s),m=n("33Jr"),p={tag:m.q,className:l.a.string,cssModule:l.a.object},d=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=Object(r.a)(e,["className","cssModule","tag"]),l=Object(m.m)(u()(t,"input-group-text"),n);return i.a.createElement(o,Object(a.a)({},c,{className:l}))};d.propTypes=p,d.defaultProps={tag:"span"},t.a=d},bAGh:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("17x9"),l=n.n(c),s=n("TSYQ"),u=n.n(s),m=n("33Jr"),p={children:l.a.node,className:l.a.string,listClassName:l.a.string,cssModule:l.a.object,size:l.a.string,tag:m.q,listTag:m.q,"aria-label":l.a.string},d=function(e){var t,n=e.className,o=e.listClassName,c=e.cssModule,l=e.size,s=e.tag,p=e.listTag,d=e["aria-label"],f=Object(r.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),b=Object(m.m)(u()(n),c),g=Object(m.m)(u()(o,"pagination",((t={})["pagination-"+l]=!!l,t)),c);return i.a.createElement(s,{className:b,"aria-label":d},i.a.createElement(p,Object(a.a)({},f,{className:g})))};d.propTypes=p,d.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},t.a=d},cJ7N:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),o=n("17x9"),i=n.n(o),c=n("kvuc"),l=n("9Koi"),s=n("MwQV"),u=n("ma3e"),m=n("Ty5D");function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(a=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function f(e){var t=e.apiUrl,n=e.buildRedirectTo,o=Object(l.a)().t,i=p(Object(a.useState)(null),2),c=i[0],d=i[1],f=Object(a.useCallback)((function(){s.a.call("post",t).data((function(e){d(n(e))}))}),[t,n]);return c?r.a.createElement(m.a,{to:c}):r.a.createElement("button",{className:"btn btn-link no-shadow d-flex p-3 text-left w-100 action-dropdown-item text-dec-none",type:"button",onClick:f},r.a.createElement(u.Ab,{className:"icon-size-15 color-blue mr-2"}),r.a.createElement("span",{className:"text-main"},o("common.menu.create-from-template")))}function b(e){var t=e.apiUrl,n=e.buildRedirectTo;return r.a.createElement(c.a,{tag:f,apiUrl:t,buildRedirectTo:n})}f.propTypes={apiUrl:i.a.string.isRequired,buildRedirectTo:i.a.func.isRequired},b.propTypes={apiUrl:i.a.string.isRequired,buildRedirectTo:i.a.func.isRequired},t.a=r.a.memo(b)},ebzC:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("MwQV");function r(e){return new Promise((function(t){a.a.call("get","/methods/templates/search-template-tags",{q:e}).data((function(e){t(e.map((function(e){return{label:e.name,value:e.id}})))}))}))}},q7Gj:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("17x9"),l=n.n(c),s=n("TSYQ"),u=n.n(s),m=n("33Jr"),p={tag:m.q,size:l.a.string,className:l.a.string,cssModule:l.a.object},d=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=e.size,l=Object(r.a)(e,["className","cssModule","tag","size"]),s=Object(m.m)(u()(t,"input-group",c?"input-group-"+c:null),n);return i.a.createElement(o,Object(a.a)({},l,{className:s}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},re1l:function(e,t,n){"use strict";var a=n("wx14"),r=n("zLVn"),o=n("q1tI"),i=n.n(o),c=n("17x9"),l=n.n(c),s=n("TSYQ"),u=n.n(s),m=n("33Jr"),p=n("Z+s4"),d={tag:m.q,addonType:l.a.oneOf(["prepend","append"]).isRequired,children:l.a.node,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,n=e.cssModule,o=e.tag,c=e.addonType,l=e.children,s=Object(r.a)(e,["className","cssModule","tag","addonType","children"]),d=Object(m.m)(u()(t,"input-group-"+c),n);return"string"==typeof l?i.a.createElement(o,Object(a.a)({},s,{className:d}),i.a.createElement(p.a,{children:l})):i.a.createElement(o,Object(a.a)({},s,{className:d,children:l}))};f.propTypes=d,f.defaultProps={tag:"div"},t.a=f}}]);