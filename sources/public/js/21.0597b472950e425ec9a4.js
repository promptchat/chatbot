(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"19iC":function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return c}));var n=a("rpa7"),r=a("J3gs"),l=a("YOdH"),i=a("gmZo"),s=a("q1tI");function o(){return function(e){return!e||e.is_am_pm?"hh:mm a":"HH:mm"}(Object(n.a)())}function u(){var e=Object(r.a)();return o()+" "+e}function c(){var e=Object(l.a)(),t=u();return Object(s.useCallback)((function(a){return Object(i.a)(1e3*a).tz(e).format(t)}),[t,e])}},"6jMY":function(e,t,a){"use strict";a.d(t,"b",(function(){return r}));var n=a("MwQV");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return function(t){return new Promise((function(a){var r={q:t};e&&(r.type=e),n.a.call("get","/methods/integrations/search",r).data((function(e){a(e.map((function(e){return{label:e.name,value:e.id,integration:e}})))}))}))}}var l=r();t.a=l},"6ukn":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("MwQV");function r(e){return new Promise((function(t){n.a.call("get","/methods/tags/search-company-tags",{q:e}).data((function(e){t(e.map((function(e){return{label:e.name,value:e.id}})))}))}))}},"8WGv":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("17x9"),i=a.n(l),s=a("sPdi"),o=a("jrRI"),u=a("3OM0"),c=a("Cs6D"),m=a("TSYQ"),d=a.n(m),f=a("9Koi");function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v={control:function(e){return p(p({},e),{},{"&, &:hover, &:focus":{borderColor:"#ced4da",boxShadow:"none"}})}};function h(e){var t,a,n=e.id,l=e.label,i=e.errors,m=e.name,b=e.setFieldValue,p=e.options,g=e.value,h=e.className,y=e.placeholder,O=e.isClearable,j=e.isDisabled,w=Object(f.a)().t,C=p.findIndex((function(e){return e.value===g})),E=-1===C?null:p[C];return r.a.createElement(o.a,{className:d()(h)},r.a.createElement(u.a,{htmlFor:n},l),r.a.createElement(c.a,{id:n,name:m,isDisabled:j,onChange:function(e){return b(m,e?e.value:null)},options:p,value:E,isClearable:O,className:d()("select-field",{"is-invalid":!!(null===(t=i[m])||void 0===t?void 0:t.length)}),placeholder:y||w("common.default-select-placeholder"),styles:v}),(null===(a=i[m])||void 0===a?void 0:a.length)?r.a.createElement(s.a,{errors:i[m]}):null)}h.defaultProps={isClearable:!0},h.propTypes={errors:i.a.object.isRequired,id:i.a.oneOfType([i.a.string,i.a.number]),value:i.a.oneOfType([i.a.string,i.a.number]),label:i.a.any.isRequired,name:i.a.string.isRequired,setFieldValue:i.a.func.isRequired,options:i.a.array.isRequired,className:i.a.string,placeholder:i.a.string,isClearable:i.a.bool,isDisabled:i.a.bool},t.a=r.a.memo(h)},"Bg/h":function(e,t,a){"use strict";a.d(t,"b",(function(){return p}));var n=a("q1tI"),r=a.n(n),l=a("17x9"),i=a.n(l),s=a("XRgj"),o=a("8WGv"),u=a("R5y6"),c=a("MwQV");function m(e,t){return new Promise((function(a){c.a.call("get","/methods/clients/search",{q:e,integrationId:t}).data((function(e){a(e.map((function(e){return{label:e.name,value:e.id,client:e}})))}))}))}var d=a("9Koi");function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var p=function(e,t){return e.map((function(e){var a,n,r=e.client,l=[],i=[];switch(t){case s.h:var o,u;if(r.name&&l.push(r.name),r.variables.ip&&l.push(r.variables.ip),i=[],null===(a=r.variables.geo)||void 0===a?void 0:a.city)i.push(null===(o=r.variables.geo)||void 0===o?void 0:o.city);if(null===(n=r.variables.geo)||void 0===n?void 0:n.country)i.push(null===(u=r.variables.geo)||void 0===u?void 0:u.country);return i.length&&l.push(i.join(", ")),{label:l.join(" "),value:e.value};case s.d:case s.g:case s.a:return r.variables.first_name&&l.push(r.variables.first_name),r.variables.last_name&&l.push(r.variables.last_name),{label:l.join(" "),value:e.value};case s.b:case s.c:case s.f:case s.e:default:return r.variables.phone_number&&l.push(r.variables.phone_number),r.variables.first_name&&l.push(r.variables.first_name),r.variables.last_name&&l.push(r.variables.last_name),{label:l.join(" "),value:e.value}}}))};function g(e){var t=e.values,a=e.errors,l=e.setFieldValue,i=e.className,c=t.integration,b=f(Object(n.useState)([]),2),g=b[0],v=b[1],h=null==c?void 0:c.value,y=+(null==c?void 0:c.integration.service);Object(n.useEffect)((function(){h&&m("",h).then((function(e){e=p(e,y),v(e)}))}),[h,y]);var O=Object(d.a)().t;return c?+c.integration.service===s.b?r.a.createElement(u.a,{className:i,name:"new_clients",label:O("instantMessages.form.to-label"),value:t.new_clients,setFieldValue:l,errors:a,loadOptions:function(e){return m(e,c.value)},defaultOptions:g,isMulti:!0,isClearable:!0}):r.a.createElement(u.a,{className:i,name:"clients",label:O("instantMessages.form.to-label"),value:t.clients,setFieldValue:l,errors:a,loadOptions:function(e){return m(e,c.value)},defaultOptions:g,isMulti:!0}):r.a.createElement(o.a,{className:i,label:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,O("instantMessages.form.to-label")),r.a.createElement("div",{className:"sub-label text-middle"},O("instantMessages.form.pick-channel-first"))),name:"clients",value:null,setFieldValue:l,options:[],errors:a,isClearable:!1,isDisabled:!0})}g.propTypes={values:i.a.object.isRequired,errors:i.a.object.isRequired,setFieldValue:i.a.func.isRequired,className:i.a.string};t.a=g},CEGB:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("17x9"),i=a.n(l),s=a("sPdi"),o=a("jrRI"),u=a("3OM0"),c=a("TSYQ"),m=a.n(c),d=a("c0+T");function f(e){var t,a,n=e.id,l=e.label,i=e.errors,c=e.name,f=e.className,b=e.value,p=e.setFieldValue,g=e.minDate,v=e.maxDate,h=e.customInput,y=m()({"is-invalid":i&&(null===(t=i[c])||void 0===t?void 0:t.length)});return r.a.createElement(o.a,{className:m()(f)},l?r.a.createElement(u.a,{htmlFor:n},"function"==typeof l?l():l):null,r.a.createElement(d.a,{id:n,name:c,value:b,onChange:function(e){return p(c,e)},formGroupClass:m()("py-0",y),inputClass:y,minDate:g,maxDate:v,customInput:h}),i&&(null===(a=i[c])||void 0===a?void 0:a.length)?r.a.createElement(s.a,{errors:i[c]}):null)}f.propTypes={errors:i.a.object,id:i.a.oneOfType([i.a.string,i.a.number]),label:i.a.any,name:i.a.string.isRequired,className:i.a.string,setFieldValue:i.a.func.isRequired,value:i.a.any,minDate:i.a.object,maxDate:i.a.object,customInput:i.a.any},t.a=r.a.memo(f)},FPNo:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("17x9"),i=a.n(l),s=a("nc57"),o=a("19iC"),u=a("6Rhw"),c=a("x37D"),m=a("9Koi"),d=a("ok1R"),f=a("rhny"),b=a("MwQV");function p(e){return new Promise((function(t){b.a.call("get","/methods/instant-messages/templates/search",{q:e}).data((function(e){t(e.map((function(e){return{label:e.name,value:e.id,template:e}})))}))}))}var g=a("R5y6"),v=a("bFnZ"),h=a.n(v),y=a("sPdi"),O=a("TSYQ"),j=a.n(O);function w(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return C(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function E(e){var t=e.text,a=e.disabled,l=e.onSending,i=e.onSent,s=Object(m.a)().t,o=w(Object(n.useState)(!1),2),u=o[0],c=o[1],d=w(Object(n.useState)([]),2),f=d[0],p=d[1],g=w(Object(n.useState)(""),2),v=g[0],O=g[1],C=Object(n.useCallback)((function(){l(),b.a.call("post","/methods/instant-messages/templates",{},{name:v,message:t}).validation((function(e,t){p(t.name)})).data((function(){c(!1)})).finally((function(){i()}))}),[v,i,l,t]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{show:u,title:s("instantMessages.form.template-name-label"),onConfirm:C,onCancel:function(){return c(!1)},dependencies:[u,O,f,C]},(function(e){return r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",ref:e.setAutoFocusInputRef,className:j()("form-control",{"is-invalid":!!f.length}),value:v,onKeyDown:e.onEnterKeyDownConfirm,onChange:function(e){return O(e.target.value)},placeholder:s("instantMessages.form.template-name-label")}),f.length?r.a.createElement(y.a,{errors:f}):null)})),r.a.createElement("button",{className:"pt-2 px-4 mb-3 btn btn-primary",type:"button",disabled:a||!t,onClick:function(){return c(!0)}},s("instantMessages.form.save-template-btn")))}E.propTypes={text:i.a.string,disabled:i.a.bool,onSending:i.a.func,onSent:i.a.func};var S=E,_=a("6jMY"),T=a("CEGB"),I=a("CXWj"),M=a("INJS"),D=a("Bg/h"),N=a("6ukn"),x=a("AEIT"),q=a("+z1p"),R=a.n(q);function P(e){return function(e){if(Array.isArray(e))return V(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return V(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?V(e,t):void 0}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function k(e){var t,a,l=e.handleSendInstantlyChange,i=e.handleStartChange,s=e.handleTextChange,o=e.handleClientChange,b=e.handleBlur,v=e.handleTagsChange,h=e.values,y=e.errors,O=e.isSubmitting,j=e.handleNameChange,w=e.handleTemplateChange,C=e.handleIntegrationChange,E=e.clientsCount,q=e.fromList,A=Object(m.a)().t,V=F(Object(n.useState)(!1),2),k=V[0],Y=V[1];return r.a.createElement(d.a,null,r.a.createElement(f.a,{md:6},r.a.createElement(u.a,{className:"limiter",id:"name",name:"name",label:A("instantMessages.form.name-label"),placeholder:A("instantMessages.form.name-placeholder"),onChange:j,onBlur:b,value:h.name,errors:y}),!q&&r.a.createElement(D.a,{className:"limiter",values:h,errors:y,setFieldValue:o}),r.a.createElement("div",{className:"limiter form-group"},r.a.createElement("label",null,A("instantMessages.form.text-label")),r.a.createElement(x.CKEditor,{editor:R.a,data:h.message,onChange:function(e,t){s(t.getData())},placeholder:A("instantMessages.form.text-placeholder"),config:{toolbar:["bold","italic","underline","link","bulletedList","numberedList","undo","redo"],mention:{feeds:[{marker:"@",feed:function(e){return Promise.resolve([{id:"@".concat(e)}].concat(P([{id:"@first_name"},{id:"@last_name"},{id:"@email"},{id:"@phone_number"}].filter((function(t){return t.id.toLowerCase().includes(e.toLowerCase())})))))}}]}}}))),r.a.createElement(f.a,{md:6},!q&&r.a.createElement(r.a.Fragment,null,r.a.createElement(g.a,{className:"limiter",name:"tags",label:A("instantMessages.form.tags-label"),value:h.tags,setFieldValue:v,errors:y,loadOptions:N.a,isMulti:!0,isDisabled:Boolean((null===(t=h.clients)||void 0===t?void 0:t.length)||(null===(a=h.new_clients)||void 0===a?void 0:a.length)),isClearable:!1}),r.a.createElement(g.a,{className:"limiter",id:"integration",name:"integration",label:A("instantMessages.form.channel-label"),value:h.integration,setFieldValue:C,errors:y,loadOptions:_.a})),null===E?null:r.a.createElement("div",{className:"sub-label-bottom text-middle mb-4"},A("instantMessages.form.clients-count",{count:E}))),r.a.createElement(f.a,{md:12},r.a.createElement(S,{text:h.message,disabled:!!h.template,onSending:function(){return Y(!0)},onSent:function(){return Y(!1)}})),r.a.createElement(f.a,{md:6},k?null:r.a.createElement(g.a,{className:"limiter",id:"template",name:"template",label:A("instantMessages.form.template-label"),value:h.template,setFieldValue:w,errors:y,loadOptions:p,cacheOptions:!1}),h.send_instantly?null:r.a.createElement(d.a,null,r.a.createElement(f.a,{sm:6},r.a.createElement(T.a,{id:"1",name:"start_date",label:A("instantMessages.form.start-date-label"),value:h.start_date,setFieldValue:i,errors:y,minDate:new Date,showTimeInput:!0})),r.a.createElement(f.a,{sm:6},r.a.createElement(M.a,{id:"start_time",name:"start_time",label:A("instantMessages.form.start-time-label"),value:h.start_time,setFieldValue:i,errors:y,disabled:!h.start_date,date:h.start_date,minTime:new Date}))),r.a.createElement(I.a,{id:"send_instantly",name:"send_instantly",label:A("instantMessages.form.send-instantly-label"),value:h.send_instantly,setFieldValue:l})),r.a.createElement(f.a,{sm:12},r.a.createElement(c.a,{className:"pt-2 px-4 mb-4",disabled:O},A("common.saveBtnText"))))}k.propTypes={handleTagsChange:i.a.func.isRequired,handleSendInstantlyChange:i.a.func.isRequired,handleClientChange:i.a.func.isRequired,handleTextChange:i.a.func.isRequired,handleStartChange:i.a.func.isRequired,handleIntegrationChange:i.a.func.isRequired,handleTemplateChange:i.a.func.isRequired,handleNameChange:i.a.func.isRequired,handleBlur:i.a.func.isRequired,values:i.a.object.isRequired,errors:i.a.object.isRequired,isSubmitting:i.a.bool,clientsCount:i.a.number,fromList:i.a.bool};var Y=k;function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function Q(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function L(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?L(Object(a),!0).forEach((function(t){K(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):L(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function K(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function H(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return J(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return J(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function U(e){var t=e.initialData,a=e.handleSubmit,l=e.afterSave,i=e.fromFilters,u=Object(n.useCallback)((function(e,t){var n,r,i,s;s=e.new_clients?e.new_clients:e.clients;var o=e.message||null;(null===(n=e.template)||void 0===n?void 0:n.value)&&(o=null);var u={name:e.name||null,message:o,filters:e.filters||null,selected:e.selected||null,integration_id:(null===(r=e.integration)||void 0===r?void 0:r.value)||null,message_template_id:(null===(i=e.template)||void 0===i?void 0:i.value)||null,send_instantly:~~e.send_instantly,start_date:e.start_date?Math.ceil(e.start_date):null,start_time:e.start_time?Math.ceil(e.start_time):null,tags:e.tags?e.tags.map((function(e){return e.value})):[],clients:s?s.map((function(e){return{id:e.__isNew__?null:e.value,name:e.label}})):[]};a(u).data((function(e){t.setSubmitting(!1),l(e)})).validation((function(e,a){var n={name:a.name,message:a.message,start_time:a.start_time,start_date:a.start_date,template:a.message_template_id,integration:a.integration_id,tags:a.tags,clients:a.clients,new_clients:a.clients};t.setErrors(n),t.setSubmitting(!1)})).catch((function(){t.setSubmitting(!1)}))}),[a,l]),c=Object(o.a)(),m=Object(n.useCallback)((function(e,t){var a;return(a=t||(e||null))?c(a):null}),[c]),d=Object(n.useCallback)((function(e,t,a,n){var r=[];return e&&r.push(e.label),a&&r.push(m(a,n)),t&&r.push(t.label),r.join(" ")}),[m]),f=H(Object(n.useState)(null),2),p=f[0],g=f[1],v=Object(n.useCallback)((function(e,t,a){(null==a?void 0:a.length)?g(a.length):b.a.call("get","/methods/instant-messages/clients-count/".concat(e),{tags:null==t?void 0:t.map((function(e){return e.value}))}).data((function(e){g(e.count)}))}),[]);return Object(n.useEffect)((function(){i&&b.a.call("get","/methods/instant-messages/clients-count-from-filters",{filter:JSON.stringify(t.filters),selected:t.selected}).data((function(e){g(e.count)}))}),[i,t]),r.a.createElement(s.a,{initialValues:G(G({},t),{},{isNameChanged:!1}),handleSubmit:u,renderForm:function(e){var t=e.setFieldValue,a=e.handleChange,n=e.values,l=Q(e,["setFieldValue","handleChange","values"]);return r.a.createElement(Y,B({},l,{values:n,fromList:i,handleTagsChange:function(e,a){var r;t(e,a),v(null===(r=n.integration)||void 0===r?void 0:r.value,a,n.clients||n.new_clients)},handleTextChange:function(e){t("message",e),t("template",null)},handleNameChange:function(e){a(e),t("isNameChanged",!!e.target.value)},handleTemplateChange:function(e,a){t(e,a),a?t("message",a.template.message):!a&&n.template&&t("message",""),n.isNameChanged||t("name",d(n.integration,a,n.start_date,n.start_time))},handleIntegrationChange:function(e,a){t(e,a),n.isNameChanged||t("name",d(a,n.template,n.start_date,n.start_time)),a||(t("clients",null),t("new_clients",null)),v(a?a.value:null,n.tags,n.clients||n.new_clients)},handleStartChange:function(e,a){t(e,a);var r=n.start_time;if("start_date"===e){var l=new Date(r),i=new Date(1e3*a);i.setHours(l.getHours()),i.setMinutes(l.getMinutes()),t("start_time",r=i.getTime()/1e3)}n.isNameChanged||t("name",d(n.integration,n.template,"start_date"===e?a:n.start_date,"start_time"===e?a:r))},handleSendInstantlyChange:function(e,a){t(e,a),n.isNameChanged||t("name",d(n.integration,n.template,a?null:n.start_date,a?null:n.start_time))},handleClientChange:function(e,a){var r;t(e,a),a&&a.length&&t("tags",null),v(null===(r=n.integration)||void 0===r?void 0:r.value,n.tags,a)},clientsCount:p}))}})}U.propTypes={initialData:i.a.object.isRequired,handleSubmit:i.a.func.isRequired,afterSave:i.a.func.isRequired,fromFilters:i.a.bool};t.a=U},INJS:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),l=a("17x9"),i=a.n(l),s=a("sPdi"),o=a("jrRI"),u=a("3OM0"),c=a("TSYQ"),m=a.n(c),d=a("NRhA"),f=a.n(d),b=a("Opvh"),p=(a("5Buo"),a("19iC"));function g(e){var t=e.value,a=e.onChange,l=e.customInput,i=e.placeholder,s=e.formGroupClass,u=e.inputClass,c=e.minTime,g=e.maxTime,v=e.disabled,h=e.date;Object(n.useEffect)((function(){Object(d.registerLocale)(window.locale,b[window.locale])}),[]);var y=Object(p.c)();return r.a.createElement(o.a,{className:m()(s)},r.a.createElement(f.a,{selected:t?new Date(1e3*t):null,onChange:function(e){var t=e;h&&((t=new Date(1e3*h)).setHours(e.getHours()),t.setMinutes(e.getMinutes())),a(t.getTime()/1e3)},className:m()("form-control",u),dateFormat:y,customInput:l,placeholderText:i,locale:window.locale,showTimeSelect:!0,showTimeSelectOnly:!0,timeIntervals:1,timeFormat:y,filterTime:function(e){var t;return h?((t=new Date(1e3*h)).setHours(e.getHours()),t.setMinutes(e.getMinutes())):t=new Date(e),c&&g?c.getTime()<t.getTime()&&t.getTime()<g.getTime():c?c.getTime()<t.getTime():!g||t.getTime()<g.getTime()},disabled:v}))}function v(e){var t,a,n=e.id,l=e.label,i=e.errors,c=e.name,d=e.className,f=e.value,b=e.setFieldValue,p=e.minTime,v=e.maxTime,h=e.disabled,y=e.date,O=m()({"is-invalid":i&&(null===(t=i[c])||void 0===t?void 0:t.length)});return r.a.createElement(o.a,{className:m()(d)},l?r.a.createElement(u.a,{htmlFor:n},"function"==typeof l?l():l):null,r.a.createElement(g,{id:n,name:c,value:f,onChange:function(e){return b(c,e)},formGroupClass:m()("py-0",O),inputClass:O,minTime:p,maxTime:v,disabled:h,date:y}),i&&(null===(a=i[c])||void 0===a?void 0:a.length)?r.a.createElement(s.a,{errors:i[c]}):null)}g.propTypes={onChange:i.a.func.isRequired,customInput:i.a.any,value:i.a.number,placeholder:i.a.string,formGroupClass:i.a.string,inputClass:i.a.string,minTime:i.a.object,maxTime:i.a.object,disabled:i.a.bool,date:i.a.number},v.propTypes={errors:i.a.object,id:i.a.oneOfType([i.a.string,i.a.number]),label:i.a.any,name:i.a.string.isRequired,className:i.a.string,setFieldValue:i.a.func.isRequired,value:i.a.any,minTime:i.a.object,maxTime:i.a.object,disabled:i.a.bool,date:i.a.number};t.a=r.a.memo(v)},R5y6:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a("q1tI"),r=a.n(n),l=a("QDav"),i=a("xilt"),s=a("jrRI"),o=a("3OM0"),u=a("TSYQ"),c=a.n(u),m=a("sPdi"),d=a("17x9"),f=a.n(d),b=a("9Koi");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){v(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h={control:function(e){return g(g({},e),{},{"&, &:hover, &:focus":{borderColor:"#ced4da",boxShadow:"none"}})}};function y(e){var t,a,n=e.id,u=e.label,d=e.errors,f=e.loadOptions,p=e.name,g=e.setFieldValue,v=e.handleBlur,y=e.value,O=e.className,j=e.placeholder,w=e.isClearable,C=e.cacheOptions,E=e.isMulti,S=e.isDisabled,_=e.defaultOptions,T=Object(b.a)().t,I=w?i.a:l.a;return r.a.createElement(s.a,{className:c()(O)},r.a.createElement(o.a,{htmlFor:n},u),r.a.createElement(I,{cacheOptions:C,defaultOptions:_,loadOptions:f,onChange:function(e){g(p,e)},value:y,isClearable:w,className:c()({"is-invalid":!!(null===(t=d[p])||void 0===t?void 0:t.length)}),placeholder:j||T("common.default-select-placeholder"),styles:h,isMulti:E,isDisabled:S,onBlur:v}),(null===(a=d[p])||void 0===a?void 0:a.length)?r.a.createElement(m.a,{errors:d[p]}):null)}y.defaultProps={isClearable:!0,cacheOptions:!0,defaultOptions:!0},y.propTypes={errors:f.a.object.isRequired,id:f.a.oneOfType([f.a.string,f.a.number]),value:f.a.oneOfType([f.a.shape({label:f.a.string,value:f.a.oneOfType([f.a.string,f.a.number])}),f.a.array]),label:f.a.any.isRequired,name:f.a.string.isRequired,handleBlur:f.a.func,setFieldValue:f.a.func.isRequired,loadOptions:f.a.func.isRequired,className:f.a.string,placeholder:f.a.string,isClearable:f.a.bool,isMulti:f.a.bool,isDisabled:f.a.bool,cacheOptions:f.a.bool,defaultOptions:f.a.oneOfType([f.a.bool,f.a.array])}},"SKh+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),l=a("dbgk"),i=a("TtP3"),s=a("FPNo"),o=a("MwQV"),u=a("Ty5D"),c=a("h4JF"),m=a("XRgj"),d=a("Bg/h"),f=a("9Koi"),b=a("BLzl"),p=a("/kxI");function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return v(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(f.a)().t,t=g(Object(n.useState)(null),2),a=t[0],v=t[1],h=g(Object(n.useState)(null),2),y=h[0],O=h[1],j=Object(u.j)().id;Object(n.useEffect)((function(){o.a.call("get","/methods/instant-messages/".concat(j)).data((function(e){v(e)}))}),[j]);var w,C=Object(n.useCallback)((function(e){return o.a.call("patch","/methods/instant-messages/".concat(j),{},e)}),[j]),E=Object(n.useCallback)((function(){O("/instant-messages/1")}),[]);if(null!==y)return r.a.createElement(u.a,{to:y});if(a){var S,_,T,I=null,M=null,D=a.clients.map((function(e){return{label:e.name,value:e.id,client:e}}));a.integration&&(+a.integration.service===m.b?M=Object(d.b)(D,+a.integration.service):I=Object(d.b)(D,+a.integration.service)),w=r.a.createElement(s.a,{afterSave:E,handleSubmit:C,fromFilters:!!(null===(S=a.selected)||void 0===S?void 0:S.selected),initialData:{name:a.name,message:a.message||"",integration:a.integration?{label:a.integration.name,value:a.integration.id,integration:a.integration}:null,template:a.message_template?{label:a.message_template.name,value:a.message_template.id,template:a.message_template}:null,start_date:+a.start_at,start_time:+a.start_at,tags:a.tags.map((function(e){return{label:e.name,value:e.id}})),filters:(null===(_=a.selected)||void 0===_?void 0:_.filters)||{},selected:null===(T=a.selected)||void 0===T?void 0:T.selected,clients:I,new_clients:M,integration_type:null,send_instantly:!a.start_at}})}else w=r.a.createElement(c.a,null);return r.a.createElement(i.a,null,r.a.createElement(l.a,null,e("instantMessages.edit-title")),r.a.createElement(b.a,{className:"instant-messages-view mb-4 shadow"},r.a.createElement(p.a,{className:"px-4 rounded"},w)))}},"c0+T":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("q1tI"),r=a.n(n),l=a("17x9"),i=a.n(l),s=a("jrRI"),o=a("NRhA"),u=a.n(o),c=a("Opvh"),m=a("J3gs");a("5Buo");var d=a("TSYQ"),f=a.n(d);function b(e){var t=e.value,a=e.onChange,l=e.customInput,i=e.placeholder,d=e.formGroupClass,b=e.inputClass,p=e.minDate,g=e.maxDate;Object(n.useEffect)((function(){Object(o.registerLocale)(window.locale,c[window.locale])}),[]);var v=function(e){switch(e){case"MM/DD/YYYY":return"MM/dd/yyyy";case"DD.MM.YYYY":return"dd.MM.yyyy"}}(Object(m.a)());return r.a.createElement(s.a,{className:f()(d)},r.a.createElement(u.a,{selected:t?new Date(1e3*t):null,onChange:function(e){return a(e?Math.ceil(e.getTime()/1e3):null)},className:f()("form-control",b),dateFormat:v,customInput:l,placeholderText:i,locale:window.locale,minDate:p,maxDate:g}))}b.propTypes={onChange:i.a.func.isRequired,customInput:i.a.any,value:i.a.number,placeholder:i.a.string,formGroupClass:i.a.string,inputClass:i.a.string,minDate:i.a.object,maxDate:i.a.object}},dbgk:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),l=a("17x9"),i=a.n(l);function s(e){var t=e.children;return r.a.createElement("h1",{className:"title-main mb-3"},t)}s.propTypes={children:i.a.any.isRequired}},gmZo:function(e,t,a){"use strict";a("iYuL");var n=a("f0Wu");n.locale(window.locale),t.a=n},xilt:function(e,t,a){"use strict";a("q1tI"),a("qKvR"),a("i8i4"),a("17x9");var n=a("njTy"),r=(a("iYmT"),a("FUBA"),a("1m/E")),l=a("QDav"),i=a("vwsU"),s=Object(i.b)(n.a),o=Object(r.a)(s),u=Object(l.b)(o);t.a=u}}]);