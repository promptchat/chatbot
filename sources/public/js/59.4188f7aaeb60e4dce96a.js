(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"5TAD":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("17x9"),c=a.n(i),l=a("55Ip"),o=a("TSYQ"),s=a.n(o);function u(e){var t=e.url,a=e.icon,n=e.text,i=e.realLink,c=e.className,o=r.a.createElement(r.a.Fragment,null,a,n?r.a.createElement("span",{className:"text-main color-blue"},n):null);return i?r.a.createElement("a",{className:s()("p-3 d-flex action-dropdown-item edit color-black",c),href:t},o):r.a.createElement(l.a,{className:s()("p-3 d-flex action-dropdown-item edit color-black",c),to:t},o)}u.defaultProps={realLink:!1},u.propTypes={url:c.a.string.isRequired,icon:c.a.any,text:c.a.string,realLink:c.a.bool,className:c.a.string},t.a=r.a.memo(u)},GmYL:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("17x9"),c=a.n(i),l=a("ma3e"),o=a("9Koi"),s=a("5TAD");function u(e){var t=e.url,a=Object(o.a)().t;return r.a.createElement(s.a,{url:t,icon:r.a.createElement(l.N,{className:"icon-size-15 color-blue mr-2"}),text:a("common.edit-link")})}u.propTypes={url:c.a.string.isRequired},t.a=r.a.memo(u)},"K+m7":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("MwQV");function r(e){return new Promise((function(t){n.a.call("get","/methods/chat-bots/search",{q:e}).data((function(e){t(e.map((function(e){return{label:e.name,value:e.id}})))}))}))}},KX8a:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),i=a("17x9"),c=a.n(i),l=a("jeY2"),o=a("lFsp"),s=a("dbgk"),u=a("jQco"),m=a("9Koi"),d=a("19iC"),g=a("Yfk4"),p=a("2pJb"),b=a("1Y33"),f=a("Uf9I"),v=a("4vsJ"),E=a("QPV6"),h=a("GmYL"),x=a("OKOT"),O=a("eOHm"),y=a("ridt"),j=a("XRgj");function P(e){return function(){return new Promise((function(t){t([{label:e("integrations.service.".concat(j.i)),value:j.i},{label:e("integrations.service.".concat(j.b)),value:j.b},{label:e("integrations.service.".concat(j.c)),value:j.c},{label:e("integrations.service.".concat(j.d)),value:j.d},{label:e("integrations.service.".concat(j.e)),value:j.e},{label:e("integrations.service.".concat(j.h)),value:j.h},{label:e("integrations.service.".concat(j.g)),value:j.g},{label:e("integrations.service.".concat(j.f)),value:j.f}])}))}}var N=a("K+m7"),k=a("55Ip"),w=a("Jxq0"),q=a("ma3e"),F=a("5TAD");function _(e){var t=e.url,a=Object(m.a)().t;return r.a.createElement(F.a,{url:t,icon:r.a.createElement(q.w,{className:"icon-size-15 color-blue mr-2"}),text:a("common.preview-link"),realLink:!0})}_.propTypes={url:c.a.string.isRequired};var T=r.a.memo(_);function L(e){var t=e.filters,a=e.sort,n=e.data,i=e.currentPage,c=e.lastPage,l=e.changeFilters,o=e.changeSort,_=e.changePage,L=Object(m.a)().t,R=Object(d.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,null,L("integrations.index-page.title")),r.a.createElement("div",{className:"text-right"},r.a.createElement(k.a,{to:"/integrations/create",className:"btn btn-primary mt-2 mb-4"},L("integrations.index-page.add-integration"))),r.a.createElement(u.d,{filters:t,changeFilters:l}),r.a.createElement(g.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(p.a,{title:L("integrations.index-page.name-column"),active:Object(v.b)(a,"name")||Object(b.b)(t,"name-column")},r.a.createElement(v.a,{sort:a,name:"name",displayName:L("integrations.index-page.name-column"),changeSort:o,order:1}),r.a.createElement(f.a,{displayName:L("integrations.index-page.name-column"),filters:t,changeFilters:l,column:"name"}))),r.a.createElement("th",null,r.a.createElement(p.a,{title:L("integrations.index-page.chatbot-column"),active:Object(b.b)(t,"company_chat_bot_id")},r.a.createElement(y.a,{filters:t,changeFilters:l,displayName:L("integrations.index-page.chatbot-column"),column:"company_chat_bot_id",loadOptions:N.a}))),r.a.createElement("th",null,r.a.createElement(p.a,{title:L("integrations.index-page.service-column"),active:Object(b.b)(t,"service")},r.a.createElement(y.a,{filters:t,changeFilters:l,displayName:L("integrations.index-page.service-column"),column:"service",loadOptions:P(L)}))),r.a.createElement("th",null,r.a.createElement(p.a,{title:L("integrations.index-page.updated-at-column"),active:Object(v.b)(a,"updated_at")},r.a.createElement(v.a,{sort:a,name:"updated_at",displayName:L("integrations.index-page.updated-at-column"),changeSort:o,order:2}))),r.a.createElement("th",null," "))),r.a.createElement("tbody",null,n.length?n.map((function(e){var t;return r.a.createElement("tr",{key:e.id,id:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",null,null===(t=e.company_chat_bot)||void 0===t?void 0:t.name),r.a.createElement("td",null,L("integrations.service.".concat(e.service))),r.a.createElement("td",null,R(e.updated_at)),r.a.createElement(E.a,null,(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{url:"/integrations/".concat(e.id,"/edit")}),e.service===j.i?r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{url:"/integrations/".concat(e.id,"/preview")}),r.a.createElement(F.a,{url:"/chat-page/".concat(e.id),icon:r.a.createElement(q.p,{className:"icon-size-15 color-blue mr-2"}),text:L("integrations.page-link"),realLink:!0})):null,r.a.createElement(x.a,{url:"/methods/integrations/".concat(e.id),setConfirm:t,onSuccess:function(){return _(i)}}))})))})):r.a.createElement(w.a,{colspan:5}))),r.a.createElement(O.a,{currentPage:i,lastPage:c,loadPage:_,route:"/integrations"}))}L.propTypes={changeFilters:c.a.func.isRequired,changeSort:c.a.func.isRequired,changePage:c.a.func.isRequired,data:c.a.array.isRequired,currentPage:c.a.number,lastPage:c.a.number,filters:c.a.object.isRequired,sort:c.a.object.isRequired};t.default=Object(l.a)(L,(function(e){var t,a=e.integrations;return{loading:a.get("loading"),data:null===(t=a.get("data"))||void 0===t?void 0:t.toArray(),errors:a.get("errors"),currentPage:a.get("currentPage"),lastPage:a.get("lastPage"),filters:a.get("filters"),sort:a.get("sort")}}),(function(e){return{loadPage:function(t,a,n){return e(Object(o.b)(t,a,n))}}}))},lFsp:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return g}));var n=a("TOme"),r=a("MwQV"),i=a("c8c+"),c=a("Qu/B"),l=a("EW+5"),o=Object(l.a)(n.a),s=o.loading,u=o.itemsListLoaded,m=o.error,d=function(e,t,a){return function(n){var l={page:e};t.size&&(l.filter=Object(i.a)(t)),a.size&&(l.order=Object(c.a)(a)),n(s()),r.a.call("get","/methods/integrations",l,{}).then((function(e){n(u({filters:t,sort:a,response:e}))})).catch((function(e){return n(m(e))}))}},g=function(e){return function(t){t(s()),r.a.call("get","/methods/integrations/".concat(e)).data((function(e){var a;t((a=e,{type:n.a.ITEM_LOADED,payload:a}))})).catch((function(e){return t(m(e))}))}}}}]);