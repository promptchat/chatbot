(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"9Uk/":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("Ty5D");function r(){var e=Object(a.i)().search;return[e,new URLSearchParams(e)]}},oj9i:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=n("dbgk"),i=n("TtP3"),s=n("FPNo"),u=n("MwQV"),c=n("Ty5D"),o=n("9Koi"),f=n("BLzl"),m=n("/kxI"),b=n("9Uk/"),d=n("Bg/h"),y=n("h4JF");function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,l=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(e){r=!0,l=e}finally{try{a||null==s.return||s.return()}finally{if(r)throw l}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(){var e,t=Object(o.a)().t,n=g(Object(b.a)(),2)[1],p=n.get("filters"),h=n.get("selected"),v=JSON.parse(p)||[],w=g(Object(a.useState)(null),2),j=w[0],O=w[1],S=JSON.parse(h)||{},E=g(Object(a.useState)(null),2),k=E[0],A=E[1],I=Object(a.useCallback)((function(e){return u.a.call("post","/methods/instant-messages",{},e)}),[]),J=Object(a.useCallback)((function(){A("/instant-messages/1")}),[]);if(Object(a.useEffect)((function(){u.a.call("get","/methods/instant-messages/clients-from-filters",{filter:p,selected:h}).data((function(e){O(e)}))}),[p,h]),null!==k)return r.a.createElement(c.a,{to:k});if(j){var N=Object(d.b)(j.clients);e=r.a.createElement(s.a,{afterSave:J,handleSubmit:I,fromFilters:!0,initialData:{filters:v,selected:S,name:"",message:"",integration:null,sendViaIntegration:null,template:null,start_date:null,start_time:null,tags:null,clients:N,new_clients:null,integration_type:null,send_instantly:!1}})}else e=r.a.createElement(y.a,null);return r.a.createElement(i.a,null,r.a.createElement(l.a,null,t("instantMessages.create-title")),r.a.createElement(f.a,{className:"instant-messages-view mb-5 shadow"},r.a.createElement(m.a,{className:"px-4 rounded"},e)))}}}]);