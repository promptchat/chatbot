(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6rqU":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),r=a.n(n),i=a("17x9"),l=a.n(i),c=a("sOKU");function o(e){var t=e.fields,a=e.validate,n=e.nextStep,i=e.allowedSteps,l=e.changeStep,o=e.content;if(!i.includes(n))return null;return r.a.createElement(c.a,{className:"pt-2 px-4 my-4",type:"button",color:"primary",onClick:function(){a?a(t).then((function(){return l(n)})):l(n)}},o?o():"Next")}o.propTypes={validate:l.a.func,fields:l.a.array,allowedSteps:l.a.array.isRequired,changeStep:l.a.func.isRequired,nextStep:l.a.string.isRequired,content:l.a.func}},"76xo":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI");function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function l(){var e=r(Object(n.useState)(!1),2),t=e[0],a=e[1];return[t,function(){var e,t;e=window.integrationScriptUse,(t=document.createElement("textarea")).value=e,t.setAttribute("readonly",""),t.style.position="absolute",t.style.left="-9999px",document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),a(!0),setTimeout((function(){a(!1)}),1500)}]}},Buep:function(e,t,a){"use strict";a.d(t,"a",(function(){return S}));var n=a("q1tI"),r=a.n(n),i=a("QDav"),l=a("jrRI"),c=a("3OM0"),o=a("TSYQ"),s=a.n(o),u=a("sPdi"),d=a("17x9"),m=a.n(d),f=a("9Koi");function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(Object(a),!0).forEach((function(t){y(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var E={control:function(e){return g(g({},e),{},{"&, &:hover, &:focus":{borderColor:"#ced4da",boxShadow:"none"}})}};function S(e){var t,a,o=e.id,d=e.label,m=e.errors,p=e.loadOptions,h=e.loadValue,g=e.name,y=e.setFieldValue,S=e.setFieldLabel,w=e.value,O=e.className,j=e.placeholder,_=e.isClearable,q=e.selectOptions,R=b(Object(n.useState)(null),2),C=R[0],x=R[1],k=Object(f.a)().t;return Object(n.useEffect)((function(){w&&!C&&h(w).then((function(e){x(e)}))}),[h,C,w]),r.a.createElement(l.a,{className:s()(O)},r.a.createElement(c.a,{htmlFor:o},d),r.a.createElement(i.a,v({},q,{cacheOptions:!0,defaultOptions:!0,loadOptions:p,onChange:function(e){y(g,e?e.value:null),S&&S(e?e.label:null),x(e)},value:w?C:null,isClearable:_,className:s()({"is-invalid":!!(null===(t=m[g])||void 0===t?void 0:t.length)}),placeholder:j||k("common.default-select-placeholder"),styles:E})),(null===(a=m[g])||void 0===a?void 0:a.length)?r.a.createElement(u.a,{errors:m[g]}):null)}S.defaultProps={isClearable:!0},S.propTypes={errors:m.a.object.isRequired,id:m.a.oneOfType([m.a.string,m.a.number]),value:m.a.oneOfType([m.a.string,m.a.number]),label:m.a.any.isRequired,name:m.a.string.isRequired,setFieldValue:m.a.func.isRequired,setFieldLabel:m.a.func,loadOptions:m.a.func.isRequired,loadValue:m.a.func.isRequired,className:m.a.string,placeholder:m.a.string,isClearable:m.a.bool,selectOptions:m.a.object}},HayB:function(e,t,a){"use strict";a.d(t,"b",(function(){return w})),a.d(t,"a",(function(){return O}));var n,r=a("q1tI"),i=a.n(r),l=a("17x9"),c=a.n(l),o=a("XRgj"),s=a("ok1R"),u=a("rhny"),d=a("xbK4"),m=a("TSYQ"),f=a.n(m),v=a("6rqU"),b=a("9Koi"),p=a("BAJy"),h=a("3OM0"),g=a("ma3e");function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function S(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var w=(S(n={},o.i,(function(){return i.a.createElement(g.B,{className:"service-icon color-blue3 icon-size-40"})})),S(n,o.b,(function(){return i.a.createElement(g.y,{className:"service-icon facebook-icon icon-size-40 color-facebook"})})),S(n,o.c,(function(){return i.a.createElement("img",{className:"service-img sms-chat",src:"/img/services/sms-chat.png",alt:"sms-chat"})})),S(n,o.d,(function(){return i.a.createElement(g.ub,{className:"service-icon whatsapp-icon icon-size-40 color-whatsapp"})})),S(n,o.e,(function(){return i.a.createElement(g.gb,{className:"service-icon telegram-icon icon-size-40 color-telegram"})})),S(n,o.h,(function(){return i.a.createElement(g.tb,{className:"service-icon viber-icon icon-size-40 color-viber"})})),S(n,o.g,(function(){return i.a.createElement("span",{className:"d-flex justify-content-center position-relative service-img-wrapper"},i.a.createElement("img",{className:"service-img twilio",src:"/img/services/twilio-red.svg",alt:"twilio-whatsapp"}),i.a.createElement("div",{className:"position-absolute twilio-whatsapp rounded-circle d-flex justify-content-center align-items-center"},i.a.createElement(g.ub,{className:"icon-size-20 color-whatsapp sm-whatsapp"})))})),S(n,o.f,(function(){return i.a.createElement("img",{className:"service-img twilio",src:"/img/services/twilio-red.svg",alt:"sms-twilio"})})),S(n,o.a,(function(){return i.a.createElement("img",{className:"service-img twilio",src:"/img/services/dotgo.svg",alt:"sms-twilio"})})),n);function O(e){var t=e.validate,a=e.isEdit,n=e.handleChange,l=e.values,c=e.allowedSteps,m=e.changeStep,E=Object(b.a)().t,S=y(Object(r.useState)([{label:E("integrations.service.".concat(o.i)),value:o.i,icon:w[o.i],iconBtn:function(){return i.a.createElement(g.B,{className:"icon-size-25"})}},{label:E("integrations.service.".concat(o.b)),value:o.b,icon:w[o.b],iconBtn:function(){return i.a.createElement(g.y,{className:"icon-size-25"})}},{label:E("integrations.service.".concat(o.c)),value:o.c,icon:w[o.c],iconBtn:function(){return i.a.createElement("img",{className:"service-img sms-chat-btn",src:"/img/services/sms-chat.png",alt:"sms-chat"})}},{label:E("integrations.service.".concat(o.d)),value:o.d,icon:w[o.d],iconBtn:function(){return i.a.createElement(g.ub,{className:"icon-size-25"})}},{label:E("integrations.service.".concat(o.e)),value:o.e,icon:w[o.e],iconBtn:function(){return i.a.createElement(g.gb,{className:"icon-size-25"})}},{label:E("integrations.service.".concat(o.h)),value:o.h,icon:w[o.h],iconBtn:function(){return i.a.createElement(g.tb,{className:"icon-size-25"})}},{label:E("integrations.service.".concat(o.g)),value:o.g,icon:w[o.g],iconBtn:function(){return i.a.createElement("span",{className:"position-relative service-img-wrapper"},i.a.createElement("img",{className:"service-img twilio-btn",src:"/img/services/twilio-white.svg",alt:"twilio-whatsapp"}),i.a.createElement(g.ub,{className:"pl-2 icon-size-20 color-white"}))}},{label:E("integrations.service.".concat(o.f)),value:o.f,icon:w[o.f],iconBtn:function(){return i.a.createElement("img",{className:"service-img twilio-btn",src:"/img/services/twilio-white.svg",alt:"sms-twilio"})}},{label:E("integrations.service.".concat(o.a)),value:o.a,icon:w[o.a],iconBtn:function(){return i.a.createElement("img",{className:"service-img twilio-btn",src:"/img/services/dotgo.svg",alt:"sms-twilio"})}}]),1)[0],O=S.findIndex((function(e){return+e.value==+l.service})),j=-1===O?null:S[O];return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{className:"my-4"},S.map((function(e){var t=+e.value==+l.service;return i.a.createElement(u.a,{xl:4,md:4,sm:6,key:e.value,className:f()("my-3 px-sm-3 px-0",{active:t})},i.a.createElement("div",{className:"rounded d-flex align-items-center p-sm-3 py-3 px-2"},i.a.createElement("div",{className:"position-relative service-img-wrapper d-flex justify-content-center mr-1"},e.icon()),i.a.createElement(p.a,{className:"ml-2 ",value:e.value,onChange:a?null:n,checked:t,type:"radio",id:"service-".concat(e.value),name:"service",disabled:a}),i.a.createElement(h.a,{className:"mb-0",htmlFor:"service-".concat(e.value)},e.label)))}))),i.a.createElement(v.a,{validate:t,fields:["service"],allowedSteps:c,nextStep:d.a,changeStep:m,content:function(){return i.a.createElement(i.a.Fragment,null,E("integrations.form.next-btn.step-service",{serviceName:j.label}),i.a.createElement("span",{className:"ml-2 pl-1"},null==j?void 0:j.iconBtn()))}}))}O.propTypes={isEdit:c.a.bool,validate:c.a.func.isRequired,handleChange:c.a.func.isRequired,changeStep:c.a.func.isRequired,values:c.a.object.isRequired,allowedSteps:c.a.array.isRequired}},"K+m7":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("MwQV");function r(e){return new Promise((function(t){n.a.call("get","/methods/chat-bots/search",{q:e}).data((function(e){t(e.map((function(e){return{label:e.name,value:e.id}})))}))}))}},clgt:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("XRgj");function r(e){return[n.i,n.b,n.g,n.f,n.a].includes(+e)}},dbgk:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),r=a.n(n),i=a("17x9"),l=a.n(i);function c(e){var t=e.children;return r.a.createElement("h1",{className:"title-main mb-3"},t)}c.propTypes={children:l.a.any.isRequired}},xbK4:function(e,t,a){"use strict";a.d(t,"c",(function(){return ve})),a.d(t,"a",(function(){return be})),a.d(t,"b",(function(){return pe})),a.d(t,"d",(function(){return he})),a.d(t,"e",(function(){return ge})),a.d(t,"f",(function(){return Ee}));var n=a("q1tI"),r=a.n(n),i=a("17x9"),l=a.n(i),c=a("nc57"),o=a("TSYQ"),s=a.n(o),u=a("9Koi");function d(e){var t=e.values,a=e.validate,n=e.allowedScreens,i=e.step,l=e.showSetUpScreen,c=e.onChange,o=e.errors,d=Object(u.a)().t,m=[{label:d("integrations.form.step.".concat(ve)),value:ve,fields:["service"],dependsOn:[]},{label:d("integrations.form.step.".concat(be)),value:be,fields:["name","prefix","company_chat_bot_id","locale"],dependsOn:["service"]},{label:d("integrations.form.step.".concat(pe)),value:pe,nFields:["service","name","prefix","company_chat_bot_id","locale"],dependsOn:["service","name","prefix","company_chat_bot_id","locale"]},{label:d("integrations.form.step.".concat(he)),value:he,dependsOn:"all"},{label:d("integrations.form.step.".concat(ge)),value:ge,dependsOn:"all"}];return r.a.createElement("div",{className:"navigation-bar-wrapper"},r.a.createElement("div",{className:"navigation-bar w-100 d-flex"},m.map((function(e){if(e.value===he&&!l)return null;var u,d=n.includes(e.value),m=Object.entries(o);u=e.fields?m.filter((function(t){return e.fields.includes(t[0])&&t[1].length})).length:!!e.nFields&&m.filter((function(t){return!e.nFields.includes(t[0])&&t[1].length})).length;return r.a.createElement("button",{key:e.value,type:"button",onClick:function(){a("all"===e.dependsOn?Object.keys(t):e.dependsOn).then((function(){c(e.value)}))},className:s()("navigation-item rounded-top w-100 py-2 px-3",{active:e.value===i,error:u}),disabled:!d},e.label)}))))}d.propTypes={values:l.a.object.isRequired,validate:l.a.func.isRequired,errors:l.a.object,allowedScreens:l.a.array.isRequired,step:l.a.string,onChange:l.a.func.isRequired,showSetUpScreen:l.a.bool};var m=a("HayB"),f=a("6rqU"),v=a("6Rhw"),b=a("Buep"),p=a("K+m7"),h=a("MwQV");function g(e){return new Promise((function(t){h.a.call("get","/methods/chat-bots/".concat(e)).data((function(e){t({label:e.name,value:e.id})}))}))}var y=a("9MIN");function E(){return new Promise((function(e){h.a.call("get","/methods/language").data((function(t){e(Object(y.a)(t))}))}))}function S(e){return new Promise((function(t){h.a.call("get","/methods/language/".concat(e)).data((function(e){t(Object(y.a)([e])[0])}))}))}var w=a("ok1R"),O=a("rhny"),j=a("CXWj");function _(e){var t=e.setFieldValue,a=e.handleChange,n=e.handleBlur,i=e.values,l=e.errors,c=e.allowedSteps,o=e.changeStep,s=e.validate,d=Object(u.a)().t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null,r.a.createElement(O.a,{lg:6},r.a.createElement(v.a,{className:"limiter",name:"name",label:d("integrations.form.chatbot-screen.name-label"),placeholder:d("integrations.form.chatbot-screen.name-placeholder"),onChange:a,onBlur:n,value:i.name||"",errors:l}),r.a.createElement(v.a,{className:"limiter",name:"prefix",label:d("integrations.form.chatbot-screen.prefix-label"),placeholder:d("integrations.form.chatbot-screen.prefix-placeholder"),onChange:a,onBlur:n,value:i.prefix||"",errors:l}),r.a.createElement(v.a,{className:"limiter",name:"max_live_chat_inactivity_duration",label:d("integrations.form.chatbot-screen.max-inactivity-label"),placeholder:d("integrations.form.chatbot-screen.max-inactivity-placeholder"),value:i.max_live_chat_inactivity_duration,onChange:a,errors:l})),r.a.createElement(O.a,{lg:6},r.a.createElement(b.a,{className:"limiter",name:"company_chat_bot_id",label:d("integrations.form.chatbot-screen.chat-label"),value:i.company_chat_bot_id,setFieldValue:t,errors:l,loadOptions:p.a,loadValue:g}),r.a.createElement(b.a,{className:"limiter",name:"locale",label:d("integrations.form.chatbot-screen.language-label"),loadOptions:E,loadValue:S,value:i.locale,setFieldValue:t,errors:l}),r.a.createElement(j.a,{id:"show_messages_only_in_live_chat_mode",className:"limiter",name:"show_messages_only_in_live_chat_mode",label:d("integrations.form.chatbot-screen.show-messages-only-in-live-chat-mode-label"),value:i.show_messages_only_in_live_chat_mode,setFieldValue:t}))),r.a.createElement(f.a,{validate:s,fields:["service","name","prefix","company_chat_bot_id","locale","max_live_chat_inactivity_duration"],changeStep:o,allowedSteps:c,nextStep:pe,content:function(){return d("integrations.form.next-btn.step-chatbot")}}))}_.propTypes={allowedSteps:l.a.array.isRequired,changeStep:l.a.func.isRequired,validate:l.a.func.isRequired,errors:l.a.object.isRequired,handleBlur:l.a.func.isRequired,handleChange:l.a.func.isRequired,setFieldValue:l.a.func.isRequired,values:l.a.object.isRequired};var q=a("XRgj");function R(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function C(e,t){var a=e.service,n=R(e,["service"]);switch(+a){case q.i:return n.config_id&&!t.config_id;case q.b:return n.token&&n.app_secret&&!t.token&&!t.app_secret;case q.e:case q.c:case q.d:case q.h:return n.token&&!t.token;case q.g:case q.f:return n.token&&n.sid&&!t.token&&!t.sid;case q.a:return n.client_id&&n.client_secret&&!t.client_id&&!t.client_secret;default:return!1}}var x=a("sOKU"),k=a("aLZG");function N(e){var t=e.handleSubmit,a=e.video,n=e.values,i=e.errors,l=e.children,c=Object(u.a)().t;return r.a.createElement(r.a.Fragment,null,a?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{color:"dark",fade:!1},c("integrations.form.msg-instead-of-video"))):null,l,C(n,i)?r.a.createElement(x.a,{className:"pt-2 px-4 my-4",type:"submit",color:"primary",onClick:t},c("integrations.form.next-btn.step-configure")):null)}function B(){return new Promise((function(e){h.a.call("get","/methods/chat-box-configs/search").data((function(t){e(t.map((function(e){return{label:e.name,value:e.id}})))}))}))}function I(e){return new Promise((function(t){h.a.call("get","/methods/chat-box-configs/".concat(e)).data((function(e){t({label:e.name,value:e.id})}))}))}function P(e){var t=e.video,a=e.handleSubmitClick,n=e.setFieldValue,i=e.values,l=e.errors,c=Object(u.a)().t;return r.a.createElement(N,{video:t,handleSubmit:a(["config_id"]),values:i,errors:l},r.a.createElement(b.a,{className:"limiter",name:"config_id",label:c("integrations.form.configure-screen.config-label"),loadOptions:B,loadValue:I,value:i.config_id||"",setFieldValue:n,errors:l}))}function A(e){var t=e.video,a=e.handleSubmitClick,n=e.handleChange,i=e.handleBlur,l=e.values,c=e.errors,o=Object(u.a)().t;return r.a.createElement(N,{handleSubmit:a(["token","app_secret"]),errors:c,values:l,video:t},r.a.createElement(v.a,{className:"limiter",name:"token",label:o("integrations.form.configure-screen.token-label"),placeholder:o("integrations.form.configure-screen.token-placeholder"),onChange:n,onBlur:i,value:l.token||"",errors:c}),r.a.createElement(v.a,{className:"limiter",name:"app_secret",label:o("integrations.form.configure-screen.app-secret-label"),placeholder:o("integrations.form.configure-screen.app-secret-placeholder"),onChange:n,onBlur:i,value:l.app_secret||"",errors:c}))}function F(e){var t=e.video,a=e.handleSubmitClick,n=e.handleChange,i=e.handleBlur,l=e.values,c=e.errors,o=a(["config_id"]),s=Object(u.a)().t;return r.a.createElement(N,{video:t,values:l,errors:c,handleSubmit:o},r.a.createElement(v.a,{className:"limiter",name:"token",label:s("integrations.form.configure-screen.token-label"),placeholder:s("integrations.form.configure-screen.token-placeholder"),value:l.token||"",onChange:n,onBlur:i,errors:c}))}function T(e){var t=e.video,a=e.handleSubmitClick,n=e.handleChange,i=e.handleBlur,l=e.values,c=e.errors,o=a(["sid","token"]),s=Object(u.a)().t;return r.a.createElement(N,{handleSubmit:o,errors:c,values:l,video:t},r.a.createElement(v.a,{className:"limiter",name:"sid",label:s("integrations.form.configure-screen.sid-label"),placeholder:s("integrations.form.configure-screen.sid-placeholder"),onChange:n,onBlur:i,value:l.sid||"",errors:c}),r.a.createElement(v.a,{className:"limiter",name:"token",label:s("integrations.form.configure-screen.token-label"),placeholder:s("integrations.form.configure-screen.token-placeholder"),onChange:n,onBlur:i,value:l.token||"",errors:c}))}function V(e){var t=e.video,a=e.handleSubmitClick,n=e.handleChange,i=e.handleBlur,l=e.values,c=e.errors,o=a(["bot_id","client_id","client_secret"]),s=Object(u.a)().t;return r.a.createElement(N,{handleSubmit:o,errors:c,values:l,video:t},r.a.createElement(v.a,{className:"limiter",name:"client_id",label:s("integrations.form.configure-screen.client_id-label"),placeholder:s("integrations.form.configure-screen.client_id-placeholder"),onChange:n,onBlur:i,value:l.client_id||"",errors:c}),r.a.createElement(v.a,{className:"limiter",name:"client_secret",label:s("integrations.form.configure-screen.client_secret-label"),placeholder:s("integrations.form.configure-screen.client_secret-placeholder"),onChange:n,onBlur:i,value:l.client_secret||"",errors:c}),r.a.createElement(v.a,{className:"limiter",name:"bot_id",label:s("integrations.form.configure-screen.bot_id-label"),placeholder:s("integrations.form.configure-screen.bot_id-placeholder"),onChange:n,onBlur:i,value:l.bot_id||"",errors:c}))}function z(e){var t=e.setFieldValue,a=e.handleChange,n=e.handleBlur,i=e.values,l=e.errors,c=e.validate,o=e.handleSubmit,s=function(e){return function(t){if(t.preventDefault(),c){var a=e.concat(["service","name","prefix","company_chat_bot_id","locale","config_id"]);c(a).then((function(){o()}))}else o()}};switch(+i.service){case q.i:return r.a.createElement(P,{video:"bx79vJP4zWI",setFieldValue:t,values:i,errors:l,handleSubmitClick:s});case q.b:return r.a.createElement(A,{video:"bx79vJP4zWI",handleChange:a,handleBlur:n,values:i,errors:l,handleSubmitClick:s});case q.e:return r.a.createElement(F,{video:"b9-cHk-7N8k",handleChange:a,handleBlur:n,values:i,errors:l,handleSubmitClick:s});case q.c:return r.a.createElement(F,{video:"bx79vJP4zWI",handleChange:a,handleBlur:n,values:i,errors:l,handleSubmitClick:s});case q.d:return r.a.createElement(F,{video:"b9-cHk-7N8k",handleChange:a,handleBlur:n,values:i,errors:l,handleSubmitClick:s});case q.h:return r.a.createElement(F,{video:"bx79vJP4zWI",handleChange:a,handleBlur:n,values:i,errors:l,handleSubmitClick:s});case q.g:case q.f:return r.a.createElement(T,{video:"bx79vJP4zWI",handleChange:a,handleBlur:n,values:i,errors:l,handleSubmitClick:s});case q.a:return r.a.createElement(V,{video:"bx79vJP4zWI",handleChange:a,handleBlur:n,values:i,errors:l,handleSubmitClick:s})}}N.propTypes={children:l.a.any.isRequired,errors:l.a.object.isRequired,handleSubmit:l.a.func.isRequired,values:l.a.object.isRequired,video:l.a.string},P.propTypes={video:l.a.string,errors:l.a.object.isRequired,handleSubmitClick:l.a.func.isRequired,setFieldValue:l.a.func.isRequired,values:l.a.object.isRequired},A.propTypes={video:l.a.string,errors:l.a.object.isRequired,handleBlur:l.a.func.isRequired,handleChange:l.a.func.isRequired,handleSubmitClick:l.a.func.isRequired,values:l.a.object.isRequired},F.propTypes={video:l.a.string,errors:l.a.object.isRequired,handleBlur:l.a.func.isRequired,handleChange:l.a.func.isRequired,handleSubmitClick:l.a.func.isRequired,values:l.a.object.isRequired},T.propTypes={video:l.a.string,errors:l.a.object.isRequired,handleBlur:l.a.func.isRequired,handleChange:l.a.func.isRequired,handleSubmitClick:l.a.func.isRequired,values:l.a.object.isRequired},V.propTypes={video:l.a.string,errors:l.a.object.isRequired,handleBlur:l.a.func.isRequired,handleChange:l.a.func.isRequired,handleSubmitClick:l.a.func.isRequired,values:l.a.object.isRequired},z.propTypes={errors:l.a.object.isRequired,handleBlur:l.a.func.isRequired,handleChange:l.a.func.isRequired,setFieldValue:l.a.func.isRequired,validate:l.a.func.isRequired,handleSubmit:l.a.func.isRequired,values:l.a.object.isRequired};var U=a("h4JF");function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function J(e){var t=e.video,a=e.integrationId,i=e.renderContent,l=D(Object(n.useState)(null),2),c=l[0],o=l[1],s=Object(u.a)().t;return Object(n.useEffect)((function(){h.a.call("get","/methods/integrations/".concat(a,"/setup-data")).data((function(e){o(e)}))}),[a]),c?r.a.createElement("div",{className:"video-player-block"},t?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,{color:"dark",fade:!1},s("integrations.form.msg-instead-of-video"))):null,i(c)):r.a.createElement(U.a,null)}function K(e){var t=e.values,a=Object(u.a)().t;return r.a.createElement(J,{integrationId:t.id,video:"vlDzYIIOYmM",renderContent:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"text-main pt-4"},a("integrations.form.setup-screen.copy-html-text")),r.a.createElement("p",{className:"copy-html-text p-3 rounded"},e.script))}})}function W(e){var t=e.values,a=Object(u.a)().t;return r.a.createElement(J,{integrationId:t.id,video:"vlDzYIIOYmM",renderContent:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{className:"limiter",label:a("integrations.form.setup-screen.callback-label"),name:"callbackUrl",value:e.callbackUrl,readOnly:1}),r.a.createElement(v.a,{className:"limiter",label:a("integrations.form.setup-screen.confirmation-token-label"),name:"token",value:e.verification,readOnly:1}))}})}function Y(e){var t=e.values,a=e.video,n=Object(u.a)().t;return r.a.createElement(J,{integrationId:t.id,video:a,renderContent:function(e){return r.a.createElement(v.a,{className:"limiter",label:n("integrations.form.setup-screen.callback-label"),name:"callbackUrl",value:e.callbackUrl,readOnly:1})}})}function L(e){var t=e.values,a=e.changeStep,n=e.allowedSteps,i=Object(u.a)().t,l=null;switch(+t.service){case q.i:l=r.a.createElement(K,{values:t});break;case q.b:l=r.a.createElement(W,{values:t});break;case q.g:l=r.a.createElement(Y,{video:"5kUu97Vkwj4",values:t});break;case q.f:case q.a:l=r.a.createElement(Y,{video:"10byeZV5jcc",values:t})}return r.a.createElement(r.a.Fragment,null,l,r.a.createElement(f.a,{changeStep:a,allowedSteps:n,nextStep:ge,content:function(){return i("integrations.form.next-btn.step-setup")}}))}J.propTypes={integrationId:l.a.number.isRequired,renderContent:l.a.func.isRequired,video:l.a.string},K.propTypes={values:l.a.object.isRequired},W.propTypes={values:l.a.object.isRequired},Y.propTypes={video:l.a.string,values:l.a.object.isRequired},L.propTypes={allowedSteps:l.a.array.isRequired,changeStep:l.a.func.isRequired,values:l.a.object.isRequired};var Q=a("55Ip"),$=a("3OM0"),H=a("76xo"),X=a("jrRI"),Z=a("L3zb");function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,i=void 0;try{for(var l,c=e[Symbol.iterator]();!(n=(l=c.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,i=e}finally{try{n||null==c.return||c.return()}finally{if(r)throw i}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ee(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ee(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function te(e){var t=e.values,a=Object(u.a)().t,n=G(Object(H.a)(),2),i=n[0],l=n[1];return r.a.createElement("div",null,r.a.createElement("p",{className:"color-blue title-middle mt-4 pb-2"},a("integrations.form.success-screen.title")),r.a.createElement("p",{className:"text-main mb-5"},a("integrations.form.success-screen.text")),r.a.createElement("p",{className:"text-main mb-5"},r.a.createElement(X.a,null,r.a.createElement($.a,null,a("integrations.form.success-screen.api-token-label")),r.a.createElement(Z.a,{id:"api-token",type:"text",value:t.apiToken,readOnly:!0})),r.a.createElement("div",{className:"text-right"},i?r.a.createElement("span",null,a("integrations.form.success-screen.copied-message")):null,r.a.createElement(x.a,{onClick:l},a("integrations.form.success-screen.copy-btn")))),r.a.createElement(Q.a,{to:"/integrations",className:"pt-2 px-4 mt-3 mb-sm-4 mb-5 btn btn-success"},a("integrations.form.next-btn.step-success")))}te.propTypes={values:l.a.object.isRequired};var ae=te;function ne(e){var t=e.isEdit,a=e.handleChange,n=e.handleBlur,i=e.validate,l=e.values,c=e.errors,o=e.isSubmitting,s=e.setFieldValue,u=e.allowedScreens,d=e.changeStep,f=e.handleSubmit;switch(l.step){case ve:return r.a.createElement(m.a,{isEdit:t,handleChange:a,values:l,allowedSteps:u,changeStep:d,validate:i});case be:return r.a.createElement(_,{values:l,errors:c,setFieldValue:s,handleChange:a,handleBlur:n,allowedSteps:u,changeStep:d,validate:i});case pe:return r.a.createElement(z,{values:l,errors:c,setFieldValue:s,handleChange:a,handleBlur:n,validate:i,handleSubmit:f});case he:return r.a.createElement(L,{values:l,allowedSteps:u,changeStep:d});case ge:return r.a.createElement(ae,{handleChange:a,handleBlur:n,values:l,errors:c,isSubmitting:o,setFieldValue:s,allowedSteps:u})}}ne.propTypes={isEdit:l.a.bool,errors:l.a.object.isRequired,handleBlur:l.a.func.isRequired,handleChange:l.a.func.isRequired,isSubmitting:l.a.bool,setFieldValue:l.a.func.isRequired,validate:l.a.func.isRequired,values:l.a.object.isRequired,allowedScreens:l.a.array.isRequired,changeStep:l.a.func.isRequired,handleSubmit:l.a.func.isRequired};var re=a("clgt"),ie=a("BLzl"),le=a("afej"),ce=a("/kxI"),oe=a("PLmP");function se(e,t){var a;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"==typeof e)return ue(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return ue(e,t)}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,c=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return l=e.done,e},e:function(e){c=!0,i=e},f:function(){try{l||null==a.return||a.return()}finally{if(c)throw i}}}}function ue(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function de(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function me(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?de(Object(a),!0).forEach((function(t){fe(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):de(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function fe(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var ve="service",be="chat-bot",pe="configure",he="setup",ge="success";function ye(e){var t=me({},e);return void 0!==e.max_live_chat_inactivity_duration&&(t.max_live_chat_inactivity_duration=e.max_live_chat_inactivity_duration?Object(oe.a)(e.max_live_chat_inactivity_duration)/1e3:null),t}function Ee(e){var t=e.isEdit,a=e.step,i=e.onSubmit,l=e.defaultData,o=Object(n.useCallback)((function(e,t){e=ye(e),i(e,t)}),[i]);return r.a.createElement(c.a,{className:"integration-form",initialValues:me({step:t&&a?a:ve},l),handleSubmit:o,renderForm:function(e){var a=e.handleChange,n=e.handleBlur,i=e.values,l=e.errors,c=e.isSubmitting,o=e.setFieldValue,s=e.setErrors,u=e.handleSubmit,m=[ve],f=!!i.service;f&&m.push(be);var v=f&&function(e,t){return e.company_chat_bot_id&&e.name&&e.prefix&&e.locale&&!t.company_chat_bot_id&&!t.name&&!t.prefix&&!t.locale}(i,l);v&&m.push(pe);var b=v&&C(i,l);t&&b&&(Object(re.a)(i.service)?m.push(he):m.push(ge));var p=b&&Object(re.a)(i.service);t&&p&&m.push(ge);var g=function(e){return o("step",e)},y=function(e){return new Promise((function(t,a){var n,r={},l=se(e);try{for(l.s();!(n=l.n()).done;){var c=n.value;r[c]=i[c]}}catch(e){l.e(e)}finally{l.f()}r=ye(r),h.a.call("post","/methods/integrations/validate",{},r).then((function(){t()})).validation((function(e,t){s(t),a&&a()}))}))};return r.a.createElement(w.a,null,r.a.createElement(O.a,{xl:9},r.a.createElement(ie.a,{className:"mb-5 card-navbar shadow"},r.a.createElement(le.a,{className:"p-0"},r.a.createElement(d,{allowedScreens:m,step:i.step,onChange:g,showSetUpScreen:Object(re.a)(i.service),errors:l,validate:y,values:i})),r.a.createElement(ce.a,{className:"px-4 rounded-bottom"},r.a.createElement(ne,{handleChange:a,handleBlur:n,values:i,errors:l,isSubmitting:c,setFieldValue:o,validate:y,isEdit:t,allowedScreens:m,changeStep:g,handleSubmit:u})))))}})}Ee.propTypes={step:l.a.oneOf([ve,be,pe,he,ge]),isEdit:l.a.bool,defaultData:l.a.object.isRequired,onSubmit:l.a.func.isRequired}}}]);