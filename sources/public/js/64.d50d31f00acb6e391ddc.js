(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{cB2I:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("dbgk"),c=a("TtP3"),l=a("MwQV"),i=a("Ty5D"),u=a("h4JF"),s=a("9Koi"),m=a("BLzl"),f=a("/kxI"),d=a("Mpt7"),p=a("UiJU");function b(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var c,l=e[Symbol.iterator]();!(n=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(r)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(){var e=Object(s.a)().t,t=b(Object(n.useState)(null),2),a=t[0],h=t[1],v=b(Object(n.useState)(null),2),y=v[0],g=v[1],j=Object(i.j)().id;Object(n.useEffect)((function(){l.a.call("get","/methods/campaigns/".concat(j)).data((function(e){e.messages=e.messages.map((function(e){return e.delay=function(e){var t=Math.floor(e/31536e3);e-=31536e3*t;var a=Math.floor(e/604800);e-=604800*a;var n=Math.floor(e/86400);e-=86400*n;var r=Math.floor(e/3600);e-=3600*r;var o=Math.floor(e/60);e-=60*o;var c=[];return t&&c.push("".concat(t,"y")),a&&c.push("".concat(a,"w")),n&&c.push("".concat(n,"d")),r&&c.push("".concat(r,"h")),o&&c.push("".concat(o,"m")),e&&c.push("".concat(e,"s")),c.join(" ")}(60*e.delay),e.text=e.text||"",e.trigger=e.trigger||"",e})),h(e)}))}),[j]);var w,O,S=Object(n.useCallback)((function(e){return l.a.call("patch","/methods/campaigns/".concat(j),{},e)}),[j]),E=Object(n.useCallback)((function(){g("/campaigns/1")}),[]);return null!==y?r.a.createElement(i.a,{to:y}):(w=a?r.a.createElement(p.a,{afterSave:E,handleSubmit:S,fromFilters:!!(null===(O=a.selected)||void 0===O?void 0:O.selected),initialData:{name:a.name,messages:Object(d.d)(a.messages)||Object(d.a)([]),timeZone:a.time_zone?{label:a.time_zone.name,value:a.time_zone.id}:null}}):r.a.createElement(u.a,null),r.a.createElement(c.a,null,r.a.createElement(o.a,null,e("campaigns.edit.title")),r.a.createElement(m.a,{className:"campaigns-view mb-4 shadow"},r.a.createElement(f.a,{className:"px-4 rounded"},w))))}}}]);