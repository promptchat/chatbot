(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{"9qca":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("17x9"),l=a.n(i),o=a("FrZM"),c=a("sOKU"),s=a("L3zb"),u=a("k/iu"),m=a("9Koi"),f=a("Mpt7"),d=a("MwQV");function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function h(e){var t=e.attachment,a=e.handleChange,i=Object(m.a)().t,l=b(Object(n.useState)(!!t&&t.get("type")===o.a),2),p=l[0],h=l[1];return r.a.createElement("div",{className:"limiter form-group 3"},r.a.createElement("div",null,r.a.createElement(c.a,{className:"mr-2 mb-4 px-sm-5 px-4",outline:p,onClick:function(){return h(!1)},color:p?"secondary":"primary"},i("chatbot.edit.attachment-file")),r.a.createElement(c.a,{className:"mr-2 mb-4 px-sm-5 px-4",outline:!p,onClick:function(){return h(!0)},color:p?"primary":"secondary"},i("chatbot.edit.attachment-url"))),r.a.createElement("div",{className:"mb-4"},p?r.a.createElement(s.a,{onChange:function(e){var t=Object(f.b)({type:o.a,url:e.target.value});a(t)},defaultValue:t?t.get("url",""):"",placeholder:i("chatbot.edit.attachment-url-input")}):r.a.createElement("div",null,r.a.createElement(u.a,{onChange:function(e){var t=new FormData;return t.append("file",e.target.files[0]),d.a.call("post","/methods/chat-bots/attachment",{},t).data((function(e){a(Object(f.b)(e))}))},name:"customFile",label:i("chatbot.edit.attachment-file-input"),id:"attachment-file"}))),r.a.createElement("div",null,t?r.a.createElement(o.b,{attachment:t}):null))}h.propTypes={attachment:l.a.instanceOf(f.b),handleChange:l.a.func.isRequired},t.a=h},FrZM:function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("q1tI"),r=a.n(n),i=a("Mpt7"),l=a("17x9"),o=a.n(l),c=a("ma3e"),s=6;function u(e){var t=e.attachment,a=t.get("type"),n=t.get("url");if(!n||n.startsWith("sticker::"))return null;switch(a){case s:return r.a.createElement("embed",{key:n,className:"attachment-preview",src:n,type:""});case 2:return r.a.createElement(c.z,null);case 1:return r.a.createElement("img",{className:"attachment-preview",src:n});case 7:return r.a.createElement("video",{controls:!0,className:"attachment-preview"},r.a.createElement("source",{src:n}))}return null}t.b=u,u.propTypes={attachment:o.a.instanceOf(i.b).isRequired}},R5y6:function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a("q1tI"),r=a.n(n),i=a("QDav"),l=a("xilt"),o=a("jrRI"),c=a("3OM0"),s=a("TSYQ"),u=a.n(s),m=a("sPdi"),f=a("17x9"),d=a.n(f),b=a("9Koi");function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){g(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var v={control:function(e){return h(h({},e),{},{"&, &:hover, &:focus":{borderColor:"#ced4da",boxShadow:"none"}})},menu:function(e){return h(h({},e),{},{zIndex:10})}};function y(e){var t,a,n=e.id,s=e.label,f=e.errors,d=e.loadOptions,p=e.name,h=e.setFieldValue,g=e.handleBlur,y=e.value,O=e.className,j=e.placeholder,E=e.isClearable,w=e.cacheOptions,S=e.isMulti,C=e.isDisabled,x=e.defaultOptions,q=Object(b.a)().t,A=E?l.a:i.a;return r.a.createElement(o.a,{className:u()(O)},r.a.createElement(c.a,{htmlFor:n},s),r.a.createElement(A,{cacheOptions:w,defaultOptions:x,loadOptions:d,onChange:function(e){h(p,e)},value:y,isClearable:E,className:u()({"is-invalid":!!(null===(t=f[p])||void 0===t?void 0:t.length)}),placeholder:j||q("common.default-select-placeholder"),styles:v,isMulti:S,isDisabled:C,onBlur:g}),(null===(a=f[p])||void 0===a?void 0:a.length)?r.a.createElement(m.a,{errors:f[p]}):null)}y.defaultProps={isClearable:!0,cacheOptions:!0,defaultOptions:!0},y.propTypes={errors:d.a.object.isRequired,id:d.a.oneOfType([d.a.string,d.a.number]),value:d.a.oneOfType([d.a.shape({label:d.a.string,value:d.a.oneOfType([d.a.string,d.a.number])}),d.a.array]),label:d.a.any.isRequired,name:d.a.string.isRequired,handleBlur:d.a.func,setFieldValue:d.a.func.isRequired,loadOptions:d.a.func.isRequired,className:d.a.string,placeholder:d.a.string,isClearable:d.a.bool,isMulti:d.a.bool,isDisabled:d.a.bool,cacheOptions:d.a.bool,defaultOptions:d.a.oneOfType([d.a.bool,d.a.array])}},cckn:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("dbgk"),l=a("TtP3"),o=a("MwQV"),c=a("Ty5D"),s=a("h4JF"),u=a("9Koi"),m=a("BLzl"),f=a("/kxI"),d=a("pVuE"),b=a("Mpt7");function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(u.a)().t,t=p(Object(n.useState)(null),2),a=t[0],h=t[1],g=p(Object(n.useState)(null),2),v=g[0],y=g[1],O=Object(c.j)().id;Object(n.useEffect)((function(){o.a.call("get","/methods/instant-messages/templates/".concat(O)).data((function(e){h(e)}))}),[O]);var j,E,w=Object(n.useCallback)((function(e){return o.a.call("patch","/methods/instant-messages/templates/".concat(O),{},e)}),[O]),S=Object(n.useCallback)((function(){y("/instant-message-templates/1")}),[]);return null!==v?r.a.createElement(c.a,{to:v}):(j=a?r.a.createElement(d.a,{afterSave:S,handleSubmit:w,fromFilters:!!(null===(E=a.selected)||void 0===E?void 0:E.selected),initialData:{name:a.name,message:a.message||"",categories:a.categories||[],attachment:Object(b.b)(a.attachment||{})}}):r.a.createElement(s.a,null),r.a.createElement(l.a,null,r.a.createElement(i.a,null,e("instantMessages.template.edit.title")),r.a.createElement(m.a,{className:"instant-messages-view mb-4 shadow"},r.a.createElement(f.a,{className:"px-4 rounded"},j))))}},dbgk:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),r=a.n(n),i=a("17x9"),l=a.n(i);function o(e){var t=e.children;return r.a.createElement("h1",{className:"title-main mb-3"},t)}o.propTypes={children:l.a.any.isRequired}},ja6N:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("MwQV");function r(e){return new Promise((function(t){n.a.call("get","/methods/instant-messages/template-categories/search",{q:e}).data((function(e){t(e.map((function(e){return{label:e.name,value:e.id,template:e}})))}))}))}},pVuE:function(e,t,a){"use strict";var n=a("o0o1"),r=a.n(n),i=a("q1tI"),l=a.n(i),o=a("17x9"),c=a.n(o),s=a("nc57"),u=a("6Rhw"),m=a("x37D"),f=a("9Koi"),d=a("ok1R"),b=a("rhny"),p=a("R5y6"),h=a("AEIT"),g=a("+z1p"),v=a.n(g),y=a("sPdi"),O=a("TSYQ"),j=a.n(O),E=a("ja6N"),w=a("9qca");function S(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return C(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function x(e){var t,a,n=e.handleTextChange,r=e.handleCategoriesChange,i=e.handleAttachmentChange,o=e.values,c=e.errors,s=e.isSubmitting,g=e.handleChange,O=e.handleBlur,C=Object(f.a)().t;return l.a.createElement(d.a,null,l.a.createElement(b.a,null,l.a.createElement(u.a,{className:"limiter",id:"name",name:"name",label:C("instantMessages.template.form.name-label"),placeholder:C("instantMessages.template.form.name-placeholder"),onChange:g,onBlur:O,value:o.name,errors:c}),l.a.createElement("div",{className:"limiter form-group"},l.a.createElement("label",null,C("instantMessages.template.form.text-label")),l.a.createElement("div",{className:j()({"is-invalid":c&&(null===(t=c.message)||void 0===t?void 0:t.length)})},l.a.createElement(h.CKEditor,{editor:v.a,data:o.message,onChange:function(e,t){n(t.getData())},placeholder:C("instantMessages.template.form.text-placeholder"),config:{toolbar:["bold","italic","underline","link","bulletedList","numberedList","undo","redo"],mention:{feeds:[{marker:"@",feed:function(e){return Promise.resolve([{id:"@".concat(e)}].concat(S([{id:"@first_name"},{id:"@last_name"},{id:"@email"},{id:"@phone_number"}].filter((function(t){return t.id.toLowerCase().includes(e.toLowerCase())})))))}}]}}})),c&&(null===(a=c.message)||void 0===a?void 0:a.length)?l.a.createElement(y.a,{errors:c.message}):null),l.a.createElement(p.a,{className:"limiter",name:"categories",label:C("instantMessages.template.form.categories-label"),value:o.categories,setFieldValue:r,errors:c,loadOptions:E.a,isMulti:!0,isClearable:!1}),l.a.createElement(w.a,{attachment:o.attachment,handleChange:i}),l.a.createElement(m.a,{className:"mt-5 pt-2 px-5 mb-4",disabled:s},C("common.saveBtnText"))))}x.propTypes={handleAttachmentChange:c.a.func.isRequired,handleChange:c.a.func.isRequired,handleTextChange:c.a.func.isRequired,handleCategoriesChange:c.a.func.isRequired,handleBlur:c.a.func.isRequired,values:c.a.object.isRequired,errors:c.a.object.isRequired,isSubmitting:c.a.bool,fromList:c.a.bool,calculation:c.a.bool};var q=x,A=a("sveX");function R(){return(R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function T(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function M(e,t,a,n,r,i,l){try{var o=e[i](l),c=o.value}catch(e){return void a(e)}o.done?t(c):Promise.resolve(c).then(n,r)}function k(e){var t=e.initialData,a=e.handleSubmit,n=e.afterSave,o=e.fromFilters,c=Object(i.useCallback)(function(){var e,t=(e=r.a.mark((function e(t,i){var l,o,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l={name:t.name||null,message:t.message||null,categories:t.categories?t.categories.map((function(e){return e.value})):[]},!(o=t.attachment?t.attachment.toJS():null)||o.id){e.next=7;break}return e.next=5,Object(A.a)(o);case 5:c=e.sent,l.attachment=c.data;case 7:l.attachment&&(l.attachment_id=l.attachment.id),a(l).data((function(e){i.setSubmitting(!1),n(e)})).validation((function(e,t){var a={name:t.name,message:t.message,categories:t.tags};i.setErrors(a),i.setSubmitting(!1)})).catch((function(){i.setSubmitting(!1)}));case 9:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function l(e){M(i,n,r,l,o,"next",e)}function o(e){M(i,n,r,l,o,"throw",e)}l(void 0)}))});return function(e,a){return t.apply(this,arguments)}}(),[a,n]);return l.a.createElement(s.a,{initialValues:t,handleSubmit:c,renderForm:function(e){var t=e.setFieldValue,a=e.values,n=T(e,["setFieldValue","values"]);return l.a.createElement(q,R({},n,{values:a,fromList:o,handleCategoriesChange:function(e,a){t(e,a)},handleTextChange:function(e){t("message",e)},handleAttachmentChange:function(e){t("attachment",e)}}))}})}k.propTypes={initialData:c.a.object.isRequired,handleSubmit:c.a.func.isRequired,afterSave:c.a.func.isRequired,fromFilters:c.a.bool};t.a=k},sveX:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("MwQV");function r(e){return n.a.call("post","/methods/chat-bots/attachment",{},e)}},xilt:function(e,t,a){"use strict";a("q1tI"),a("qKvR"),a("i8i4"),a("17x9");var n=a("njTy"),r=(a("iYmT"),a("FUBA"),a("1m/E")),i=a("QDav"),l=a("vwsU"),o=Object(l.b)(n.a),c=Object(r.a)(o),s=Object(i.b)(c);t.a=s}}]);