(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{"8WGv":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("17x9"),l=a.n(r),i=a("sPdi"),c=a("jrRI"),s=a("3OM0"),u=a("Cs6D"),d=a("TSYQ"),p=a.n(d),f=a("9Koi");function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var h={control:function(e){return g(g({},e),{},{"&, &:hover, &:focus":{borderColor:"#ced4da",boxShadow:"none"}})}};function v(e){var t,a,n=e.id,r=e.label,l=e.errors,d=e.name,m=e.setFieldValue,g=e.options,b=e.value,v=e.className,y=e.placeholder,O=e.isClearable,_=e.isDisabled,j=Object(f.a)().t,E=g.findIndex((function(e){return e.value===b})),w=-1===E?null:g[E];return o.a.createElement(c.a,{className:p()(v)},o.a.createElement(s.a,{htmlFor:n},r),o.a.createElement(u.a,{id:n,name:d,isDisabled:_,onChange:function(e){return m(d,e?e.value:null)},options:g,value:w,isClearable:O,className:p()("select-field",{"is-invalid":!!(null===(t=l[d])||void 0===t?void 0:t.length)}),placeholder:y||j("common.default-select-placeholder"),styles:h}),(null===(a=l[d])||void 0===a?void 0:a.length)?o.a.createElement(i.a,{errors:l[d]}):null)}v.defaultProps={isClearable:!0},v.propTypes={errors:l.a.object.isRequired,id:l.a.oneOfType([l.a.string,l.a.number]),value:l.a.oneOfType([l.a.string,l.a.number]),label:l.a.any.isRequired,name:l.a.string.isRequired,setFieldValue:l.a.func.isRequired,options:l.a.array.isRequired,className:l.a.string,placeholder:l.a.string,isClearable:l.a.bool,isDisabled:l.a.bool},t.a=o.a.memo(v)},Buep:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n=a("q1tI"),o=a.n(n),r=a("QDav"),l=a("jrRI"),i=a("3OM0"),c=a("TSYQ"),s=a.n(c),u=a("sPdi"),d=a("17x9"),p=a.n(d),f=a("9Koi");function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,o=!1,r=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return b(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){y(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O={control:function(e){return v(v({},e),{},{"&, &:hover, &:focus":{borderColor:"#ced4da",boxShadow:"none"}})}};function _(e){var t,a,c=e.id,d=e.label,p=e.errors,b=e.loadOptions,h=e.loadValue,v=e.name,y=e.setFieldValue,_=e.setFieldLabel,j=e.value,E=e.className,w=e.placeholder,S=e.isClearable,k=e.selectOptions,C=g(Object(n.useState)(null),2),q=C[0],V=C[1],P=Object(f.a)().t;return Object(n.useEffect)((function(){j&&!q&&h(j).then((function(e){V(e)}))}),[h,q,j]),o.a.createElement(l.a,{className:s()(E)},!1===d?null:o.a.createElement(i.a,{htmlFor:c},d),o.a.createElement(r.a,m({},k,{cacheOptions:!0,defaultOptions:!0,loadOptions:b,onChange:function(e){y(v,e?e.value:null),_&&_(e?e.label:null),V(e)},value:j?q:null,isClearable:S,className:s()({"is-invalid":!!(null===(t=p[v])||void 0===t?void 0:t.length)}),placeholder:w||P("common.default-select-placeholder"),styles:O})),(null===(a=p[v])||void 0===a?void 0:a.length)?o.a.createElement(u.a,{errors:p[v]}):null)}_.defaultProps={isClearable:!0},_.propTypes={errors:p.a.object.isRequired,id:p.a.oneOfType([p.a.string,p.a.number]),value:p.a.oneOfType([p.a.string,p.a.number]),label:p.a.any.isRequired,name:p.a.string.isRequired,setFieldValue:p.a.func.isRequired,setFieldLabel:p.a.func,loadOptions:p.a.func.isRequired,loadValue:p.a.func.isRequired,className:p.a.string,placeholder:p.a.string,isClearable:p.a.bool,selectOptions:p.a.object}},Cs6D:function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("Wwog"),l=a("qKvR"),i=(a("i8i4"),a("17x9"),a("njTy")),c=(a("iYmT"),a("FUBA"),a("1m/E")),s=a("TqVZ");n.Component;var u=Object(c.a)(i.a);t.a=u},QDav:function(e,t,a){"use strict";a.d(t,"b",(function(){return u}));var n=a("q1tI"),o=a.n(n),r=(a("qKvR"),a("i8i4"),a("17x9"),a("q/f6")),l=a("njTy"),i=(a("iYmT"),a("FUBA"),a("1m/E"));function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var s={cacheOptions:!1,defaultOptions:!1,filterOption:null,isLoading:!1},u=function(e){var t,a;return a=t=function(t){var a,n;function l(e){var a;return(a=t.call(this)||this).select=void 0,a.lastRequest=void 0,a.mounted=!1,a.optionsCache={},a.handleInputChange=function(e,t){var n=a.props,o=n.cacheOptions,l=n.onInputChange,i=Object(r.k)(e,t,l);if(!i)return delete a.lastRequest,void a.setState({inputValue:"",loadedInputValue:"",loadedOptions:[],isLoading:!1,passEmptyOptions:!1});if(o&&a.optionsCache[i])a.setState({inputValue:i,loadedInputValue:i,loadedOptions:a.optionsCache[i],isLoading:!1,passEmptyOptions:!1});else{var c=a.lastRequest={};a.setState({inputValue:i,isLoading:!0,passEmptyOptions:!a.state.loadedInputValue},(function(){a.loadOptions(i,(function(e){a.mounted&&(e&&(a.optionsCache[i]=e),c===a.lastRequest&&(delete a.lastRequest,a.setState({isLoading:!1,loadedInputValue:i,loadedOptions:e||[],passEmptyOptions:!1})))}))}))}return i},a.state={defaultOptions:Array.isArray(e.defaultOptions)?e.defaultOptions:void 0,inputValue:void 0!==e.inputValue?e.inputValue:"",isLoading:!0===e.defaultOptions,loadedOptions:[],passEmptyOptions:!1},a}n=t,(a=l).prototype=Object.create(n.prototype),a.prototype.constructor=a,a.__proto__=n;var i=l.prototype;return i.componentDidMount=function(){var e=this;this.mounted=!0;var t=this.props.defaultOptions,a=this.state.inputValue;!0===t&&this.loadOptions(a,(function(t){if(e.mounted){var a=!!e.lastRequest;e.setState({defaultOptions:t||[],isLoading:a})}}))},i.UNSAFE_componentWillReceiveProps=function(e){e.cacheOptions!==this.props.cacheOptions&&(this.optionsCache={}),e.defaultOptions!==this.props.defaultOptions&&this.setState({defaultOptions:Array.isArray(e.defaultOptions)?e.defaultOptions:void 0})},i.componentWillUnmount=function(){this.mounted=!1},i.focus=function(){this.select.focus()},i.blur=function(){this.select.blur()},i.loadOptions=function(e,t){var a=this.props.loadOptions;if(!a)return t();var n=a(e,t);n&&"function"==typeof n.then&&n.then(t,(function(){return t()}))},i.render=function(){var t=this,a=this.props,n=(a.loadOptions,a.isLoading),r=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(a,["loadOptions","isLoading"]),l=this.state,i=l.defaultOptions,s=l.inputValue,u=l.isLoading,d=l.loadedInputValue,p=l.loadedOptions,f=l.passEmptyOptions?[]:s&&d?p:i||[];return o.a.createElement(e,c({},r,{ref:function(e){t.select=e},options:f,isLoading:u||n,onInputChange:this.handleInputChange}))},l}(n.Component),t.defaultProps=s,a},d=Object(i.a)(l.a),p=u(d);t.a=p},YN8i:function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a("q1tI"),o=a.n(n),r=a("17x9"),l=a.n(r),i=a("9Koi"),c=a("Ty5D"),s=a("nc57"),u=a("6Rhw"),d=a("x37D"),p=a("Buep"),f=a("MwQV");function m(e){return new Promise((function(t){f.a.call("get","/methods/google-services/company-google-accounts/".concat(e)).data((function(e){t({label:e.email,value:e.id})}))}))}function g(){return new Promise((function(e){f.a.call("get","/methods/google-services/search-company-google-accounts").data((function(t){e(t.map((function(e){return{label:e.email,value:e.id}})))}))}))}function b(e){return function(t){return new Promise((function(a){f.a.call("get","/methods/google-services/sheets/".concat(e,"/spreadsheets/").concat(t,"/")).data((function(e){a({label:e.title,value:e.id})}))}))}}var h=a("8WGv");function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,o=!1,r=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function O(e){var t,a=e.values,r=e.errors,l=e.setFieldValue,c=Object(i.a)().t,s=v(Object(n.useState)([]),2),u=s[0],d=s[1],y=a.sheet_id,O=a.company_google_account_id;return Object(n.useEffect)((function(){y&&f.a.call("get","/methods/google-services/sheets/".concat(O,"/spreadsheets/").concat(y,"/pages")).data((function(e){d(e.map((function(e){return{label:e.name,value:e.name}})))}))}),[y,O]),o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{loadValue:m,setFieldValue:function(e,t){l(e,t),l("sheet_id",null),l("page_name",null),d([])},loadOptions:g,value:a.company_google_account_id,name:"company_google_account_id",label:c("shop.catalog.create-page.google-account-id-label"),errors:r}),a.company_google_account_id?o.a.createElement(p.a,{loadValue:b(a.company_google_account_id),setFieldValue:function(e,t){l(e,t),l("page_name",null),t?(f.a.call("get","/methods/google-services/sheets/".concat(a.company_google_account_id,"/spreadsheets/").concat(t,"/pages")).data((function(e){d(e.map((function(e){return{label:e.name,value:e.name}})))})),b(a.company_google_account_id)(t).then((function(e){l("google_table_name",e.label)}))):(d([]),l("google_table_name",""))},loadOptions:(t=a.company_google_account_id,function(){return new Promise((function(e){f.a.call("get","/methods/google-services/sheets/".concat(t)).data((function(t){e(t.map((function(e){return{label:e.name,value:e.id}})))}))}))}),value:a.sheet_id,name:"sheet_id",label:c("shop.catalog.create-page.google-sheet-id-label"),errors:r}):null,a.company_google_account_id&&a.sheet_id&&u.length?o.a.createElement(h.a,{id:"page_name",key:"".concat(a.company_google_account_id,"-").concat(a.sheet_id),label:c("shop.catalog.create-page.google-sheet-page-label"),name:"page_name",value:a.page_name,setFieldValue:function(e,t){l(e,t)},options:u,errors:r}):null)}function _(e){var t=e.handleChange,a=e.handleBlur,n=e.values,r=e.errors,l=Object(i.a)().t;return o.a.createElement(u.a,{className:"limiter",id:"fb_token",name:"fb_token",label:l("shop.catalog.create-page.fb-token-label"),placeholder:l("shop.catalog.create-page.fb-token-placeholder"),onChange:t,onBlur:a,value:n.fb_token,errors:r})}function j(e){var t=e.initialFormData,a=e.submitData,r=Object(i.a)().t,l=v(Object(n.useState)(!1),2),p=l[0],f=l[1],m=Object(n.useCallback)((function(e,t){var n=t.setSubmitting,o=t.setErrors;a(e,{setSubmitting:n,setErrors:o,setRedirect:f})}),[a,f]);return p?o.a.createElement(c.a,{to:"/product-catalogs/1"}):o.a.createElement(s.a,{initialValues:t,handleSubmit:m,renderForm:function(e){var t=e.handleChange,a=e.handleBlur,n=e.values,l=e.errors,i=e.isSubmitting,c=e.setFieldValue;return o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{className:"limiter",id:"name",name:"name",label:r("shop.catalog.create-page.name-label"),placeholder:r("shop.catalog.create-page.name-placeholder"),onChange:t,onBlur:a,value:n.name,errors:l}),o.a.createElement(u.a,{className:"limiter",id:"facebook_catalog_id",name:"facebook_catalog_id",label:r("shop.catalog.create-page.facebook-catalog-id-label"),placeholder:r("shop.catalog.create-page.facebook-catalog-id-placeholder"),onChange:t,onBlur:a,value:n.facebook_catalog_id,errors:l}),o.a.createElement(u.a,{className:"limiter",id:"facebook_set_id",name:"facebook_set_id",label:r("shop.catalog.create-page.facebook-set-id-label"),placeholder:r("shop.catalog.create-page.facebook-set-id-placeholder"),onChange:t,onBlur:a,value:n.facebook_set_id,errors:l}),o.a.createElement(_,{handleChange:t,handleBlur:a,values:n,errors:l,isSubmitting:i,setFieldValue:c}),o.a.createElement(O,{handleChange:t,handleBlur:a,values:n,errors:l,isSubmitting:i,setFieldValue:c}),o.a.createElement(d.a,{className:"pt-2 px-4 mt-3 mb-5",disabled:i},r("common.saveBtnText")))}})}j.propTypes={initialFormData:l.a.object.isRequired,submitData:l.a.func.isRequired}},bhnu:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return b}));var n=a("q1tI"),o=a.n(n),r=a("MwQV"),l=a("vDqi"),i=a.n(l),c=a("Ty5D"),s=a("TtP3"),u=a("dbgk"),d=a("9Koi"),p=a("h4JF"),f=a("YN8i");function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,o=!1,r=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){o=!0,r=e}finally{try{n||null==i.return||i.return()}finally{if(o)throw r}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function b(){var e=Object(d.a)().t,t=Object(c.j)().id,a=m(Object(n.useState)(null),2),l=a[0],g=a[1];Object(n.useEffect)((function(){var e=i.a.CancelToken.source();return r.a.call("get","/methods/product-catalogs/".concat(t),{},{},{cancelToken:e.token}).then((function(e){g(e.data)})),function(){e.cancel()}}),[t,g]);var b,h=Object(n.useCallback)((function(e,a){var n=a.setSubmitting,o=a.setErrors,l=a.setRedirect,i={name:e.name,company_google_account_id:e.company_google_account_id,sheet_id:e.sheet_id,google_table_name:e.google_table_name,page_name:e.page_name,facebook_catalog_id:e.facebook_catalog_id,facebook_set_id:e.facebook_set_id,fb_token:e.fb_token};r.a.call("patch","/methods/product-catalogs/".concat(t),{},i).data((function(){l(!0)})).validation((function(e,t){o(t)})).finally((function(){n(!1)}))}),[t]);return b=l?o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{initialFormData:{name:l.name,facebook_catalog_id:l.facebook_catalog_id,facebook_set_id:l.facebook_set_id,fb_token:l.fb_token,google_table_name:l.google_table_name,company_google_account_id:l.company_google_account_id,sheet_id:l.sheet_id,page_name:l.page_name},submitData:h}),l.last_sync_error?o.a.createElement("div",{className:"mt-3"},o.a.createElement("h5",null,e("shop.catalog.edit-page.last-sync-error-title")),o.a.createElement("code",null,l.last_sync_error)):null):o.a.createElement(p.a,null),o.a.createElement(s.a,null,o.a.createElement(u.a,null,e("shop.catalog.edit-page.title")),b)}},dbgk:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),o=a.n(n),r=a("17x9"),l=a.n(r);function i(e){var t=e.children;return o.a.createElement("h1",{className:"title-main mb-3"},t)}i.propTypes={children:l.a.any.isRequired}}}]);