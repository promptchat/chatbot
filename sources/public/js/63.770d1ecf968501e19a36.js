(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"1QrW":function(e,t,r){"use strict";var a=r("q1tI"),n=r.n(a),i=r("17x9"),o=r.n(i),l=r("sPdi"),s=r("jrRI"),u=r("3OM0"),c=r("L3zb"),m=r("TSYQ"),d=r.n(m);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function b(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function f(e){var t,r,a=e.id,i=e.label,o=e.errors,m=e.name,f=e.onChange,v=e.className,h=e.phone,g=void 0!==h&&h,y=b(e,["id","label","errors","name","onChange","className","phone"]);return n.a.createElement(s.a,{className:d()(v)},n.a.createElement(u.a,{htmlFor:a},i),n.a.createElement(c.a,p({id:a,name:m,type:"text",onChange:function(e){g&&e.target.value&&"+"!==e.target.value[0]&&(e.target.value="+"+e.target.value);var t=e.target.value;(g?/^\+[0-9]*$/:/^[0-9]*$/).test(t)&&f(e)}},y,{invalid:!!(null===(t=o[m])||void 0===t?void 0:t.length)})),(null===(r=o[m])||void 0===r?void 0:r.length)?n.a.createElement(l.a,{errors:o[m]}):null)}f.propTypes={onChange:o.a.func.isRequired,errors:o.a.object.isRequired,id:o.a.oneOfType([o.a.string,o.a.number]),label:o.a.any.isRequired,name:o.a.string.isRequired,className:o.a.string,phone:o.a.bool},t.a=n.a.memo(f)},R75g:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return c}));var a=r("q1tI"),n=r.n(a),i=r("MwQV"),o=r("TtP3"),l=r("dbgk"),s=r("9Koi"),u=r("ojGq");function c(){var e=Object(s.a)().t,t=Object(a.useCallback)((function(e,t){var r=t.setSubmitting,a=t.setErrors,n=t.setRedirect,o={name:e.name,order:e.order,is_active:e.is_active};i.a.call("post","/methods/order-statuses",{},o).data((function(){n(!0)})).validation((function(e,t){a(t)})).finally((function(){r(!1)}))}),[]);return n.a.createElement(o.a,null,n.a.createElement(l.a,null,e("shop.order-status.create-page.title")),n.a.createElement(u.a,{initialFormData:{name:"",order:"0",is_active:1,type:null},submitData:t}))}},dbgk:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var a=r("q1tI"),n=r.n(a),i=r("17x9"),o=r.n(i);function l(e){var t=e.children;return n.a.createElement("h1",{className:"title-main mb-3"},t)}l.propTypes={children:o.a.any.isRequired}},ojGq:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var a=r("q1tI"),n=r.n(a),i=r("17x9"),o=r.n(i),l=r("9Koi"),s=r("Ty5D"),u=r("nc57"),c=r("6Rhw"),m=r("x37D"),d=r("8WGv"),p=r("1QrW");function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],a=!0,n=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);a=!0);}catch(e){n=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(n)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function v(e){var t=e.initialFormData,r=e.submitData,i=Object(l.a)().t,o=b(Object(a.useState)(!1),2),f=o[0],v=o[1],h=Object(a.useCallback)((function(e,t){var a=t.setSubmitting,n=t.setErrors;r(e,{setSubmitting:a,setErrors:n,setRedirect:v})}),[r,v]);return f?n.a.createElement(s.a,{to:"/order-statuses/1"}):n.a.createElement(u.a,{initialValues:t,handleSubmit:h,renderForm:function(e){var t=e.handleChange,r=e.handleBlur,a=e.values,o=e.errors,l=e.isSubmitting,s=e.setFieldValue;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,{className:"limiter",id:"name",name:"name",label:i("shop.order-status.create-page.name-label"),placeholder:i("shop.order-status.create-page.name-placeholder"),onChange:t,onBlur:r,value:a.name,errors:o}),n.a.createElement(p.a,{className:"limiter",id:"order",name:"order",label:i("shop.order-status.create-page.order-label"),placeholder:i("shop.order-status.create-page.order-placeholder"),onChange:t,onBlur:r,value:a.order,errors:o}),a.type?null:n.a.createElement(d.a,{id:"is_active",label:i("shop.order-status.create-page.is-active-label"),name:"is_active",value:a.is_active,setFieldValue:s,errors:o,options:[{label:i("shop.order-status.attributes.is_active.1"),value:1},{label:i("shop.order-status.attributes.is_active.0"),value:0}]}),n.a.createElement(m.a,{className:"pt-2 px-4 mt-3 mb-5",disabled:l},i("common.saveBtnText")))}})}v.propTypes={initialFormData:o.a.object.isRequired,submitData:o.a.func.isRequired}}}]);