(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{YVXr:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("q1tI"),a=n.n(r),i=n("17x9"),o=n.n(i),u=n("9Koi"),l=n("Ty5D"),c=n("nc57"),s=n("6Rhw"),m=n("x37D");function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,a=!1,i=void 0;try{for(var o,u=e[Symbol.iterator]();!(r=(o=u.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(a)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(e){var t=e.initialFormData,n=e.submitData,i=Object(u.a)().t,o=f(Object(r.useState)(!1),2),b=o[0],d=o[1],p=Object(r.useCallback)((function(e,t){var r=t.setSubmitting,a=t.setErrors;n(e,{setSubmitting:r,setErrors:a,setRedirect:d})}),[n,d]);return b?a.a.createElement(l.a,{to:"/tags/1"}):a.a.createElement(c.a,{initialValues:t,handleSubmit:p,renderForm:function(e){var t=e.handleChange,n=e.handleBlur,r=e.values,o=e.errors,u=e.isSubmitting;return a.a.createElement(a.a.Fragment,null,a.a.createElement(s.a,{className:"limiter",id:"name",name:"name",label:i("user.create-page.name-label"),placeholder:i("tags.create-page.name-placeholder"),onChange:t,onBlur:n,value:r.name,errors:o}),a.a.createElement(m.a,{className:"pt-2 px-4 mt-3 mb-5",disabled:u},i("common.saveBtnText")))}})}d.propTypes={initialFormData:o.a.object.isRequired,submitData:o.a.func.isRequired}},dbgk:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("q1tI"),a=n.n(r),i=n("17x9"),o=n.n(i);function u(e){var t=e.children;return a.a.createElement("h1",{className:"title-main mb-3"},t)}u.propTypes={children:o.a.any.isRequired}},vIyF:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return s}));var r=n("q1tI"),a=n.n(r),i=n("MwQV"),o=n("YVXr"),u=n("TtP3"),l=n("dbgk"),c=n("9Koi");function s(){var e=Object(c.a)().t,t=Object(r.useCallback)((function(e,t){var n=t.setSubmitting,r=t.setErrors,a=t.setRedirect,o={name:e.name};i.a.call("post","/methods/tags",o).data((function(){a(!0)})).validation((function(e,t){r(t)})).finally((function(){n(!1)}))}),[]);return a.a.createElement(u.a,null,a.a.createElement(l.a,null,e("tags.create-page.title")),a.a.createElement(o.a,{initialFormData:{name:""},submitData:t}))}}}]);