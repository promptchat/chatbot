(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{FaXE:function(t,e,n){"use strict";n.r(e);var a=n("q1tI"),r=n.n(a),l=n("dbgk"),i=n("TtP3"),u=n("FPNo"),o=n("MwQV"),s=n("Ty5D"),c=n("9Koi"),m=n("BLzl"),f=n("/kxI");function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var i,u=t[Symbol.iterator]();!(a=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);a=!0);}catch(t){r=!0,l=t}finally{try{a||null==u.return||u.return()}finally{if(r)throw l}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}e.default=function(){var t=Object(c.a)().t,e=b(Object(a.useState)(null),2),n=e[0],d=e[1],y=Object(a.useCallback)((function(t){return o.a.call("post","/methods/instant-messages",{},t)}),[]),p=Object(a.useCallback)((function(){d("/instant-messages/1")}),[]);return null!==n?r.a.createElement(s.a,{to:n}):r.a.createElement(i.a,null,r.a.createElement(l.a,null,t("instantMessages.create-title")),r.a.createElement(m.a,{className:"instant-messages-view mb-5 shadow"},r.a.createElement(f.a,{className:"px-4 rounded"},r.a.createElement(u.a,{afterSave:p,handleSubmit:y,initialData:{name:"",message:"",integration:null,sendViaIntegration:null,template:null,start_date:null,start_time:null,tags:null,clients:null,new_clients:null,integration_type:null,send_instantly:!1,attachment:null}}))))}}}]);