(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{YVXr:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("q1tI"),a=n.n(r),i=n("17x9"),o=n.n(i),u=n("9Koi"),c=n("Ty5D"),l=n("nc57"),s=n("6Rhw"),m=n("x37D");function f(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return b(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function d(t){var e=t.initialFormData,n=t.submitData,i=Object(u.a)().t,o=f(Object(r.useState)(!1),2),b=o[0],d=o[1],y=Object(r.useCallback)((function(t,e){var r=e.setSubmitting,a=e.setErrors;n(t,{setSubmitting:r,setErrors:a,setRedirect:d})}),[n,d]);return b?a.a.createElement(c.a,{to:"/tags/1"}):a.a.createElement(l.a,{initialValues:e,handleSubmit:y,renderForm:function(t){var e=t.handleChange,n=t.handleBlur,r=t.values,o=t.errors,u=t.isSubmitting;return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{className:"limiter",id:"name",name:"name",label:i("user.create-page.name-label"),placeholder:i("tags.create-page.name-placeholder"),onChange:e,onBlur:n,value:r.name,errors:o}),a.a.createElement(m.a,{className:"pt-2 px-4 mt-3 mb-5",disabled:u},i("common.saveBtnText")))}})}d.propTypes={initialFormData:o.a.object.isRequired,submitData:o.a.func.isRequired}},dbgk:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),i=n("17x9"),o=n.n(i);function u(t){var e=t.children;return a.a.createElement("h1",{className:"title-main mb-3"},e)}u.propTypes={children:o.a.any.isRequired}},jzrg:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var r=n("q1tI"),a=n.n(r),i=n("MwQV"),o=n("YVXr"),u=n("vDqi"),c=n.n(u),l=n("Ty5D"),s=n("JUJC"),m=n("TtP3"),f=n("dbgk"),b=n("9Koi"),d=n("h4JF");function y(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=t[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!e||n.length!==e);r=!0);}catch(t){a=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return p(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function h(){var t=Object(b.a)().t,e=Object(l.j)().id,n=y(Object(r.useState)(null),2),u=n[0],p=n[1];Object(r.useEffect)((function(){var t=c.a.CancelToken.source();return i.a.call("get","/methods/tags/".concat(e),{},{},{cancelToken:t.token}).then((function(t){p(t.data?new s.a(t.data):null)})),function(){t.cancel()}}),[e,p]);var h,v=Object(r.useCallback)((function(t,n){var r=n.setSubmitting,a=n.setErrors,o=n.setRedirect,u={name:t.name};i.a.call("patch","/methods/tags/".concat(e),u).data((function(){o(!0)})).validation((function(t,e){a(e)})).finally((function(){r(!1)}))}),[e]);return h=u?a.a.createElement(o.a,{initialFormData:{name:u.name},submitData:v}):a.a.createElement(d.a,null),a.a.createElement(m.a,null,a.a.createElement(f.a,null,t("tags.edit-page.title")),h)}}}]);