(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"19iC":function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return s}));var n=a("rpa7"),r=a("J3gs"),c=a("YOdH"),o=a("gmZo"),i=a("q1tI");function u(){return function(e){return!e||e.is_am_pm?"hh:mm a":"HH:mm"}(Object(n.a)())}function l(){var e=Object(r.a)();return u()+" "+e}function s(){var e=Object(c.a)(),t=l();return Object(i.useCallback)((function(a){return Object(o.a)(1e3*a).tz(e).format(t)}),[t,e])}},"4vsJ":function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return d}));var n=a("q1tI"),r=a.n(n),c=a("17x9"),o=a.n(c),i=a("TSYQ"),u=a.n(i),l=a("Mpt7"),s=a("9Koi");function m(e,t){return e.find((function(e){return e.get("name")===t}))}function d(e){var t=e.sort,a=e.name,n=e.changeSort,c=e.displayName,o=e.order,i=Object(s.a)().t,m=t.find((function(e){return e.get("name")===a})),d=m&&m.get("name")===m.get("sort"),g=m&&"-".concat(m.get("name"))===m.get("sort"),f=function(e){var r=t.filter((function(e){return e.get("name")!==a})).push(Object(l.b)({name:a,sort:e?a:"-".concat(a),order:o})).sort((function(e,t){return e.get("order")-t.get("order")}));n(r)},b=function(){n(t.filter((function(e){return e.get("name")!==a})))};return r.a.createElement("div",{className:"sort-switcher text-main"},c?r.a.createElement("div",{className:"color-gray mb-3"},i("tables.sort-title",{name:c})):null,r.a.createElement("button",{onClick:function(){return d?b():f(!0)},className:u()("btn btn-sort rounded-left mb-3",{active:d})},i("tables.sort-asc-text")),r.a.createElement("button",{onClick:function(){return g?b():f(!1)},className:u()("btn btn-sort rounded-right mb-3",{active:g})},i("tables.sort-desc-text")))}d.propTypes={changeSort:o.a.func.isRequired,name:o.a.string.isRequired,displayName:o.a.string,sort:o.a.object.isRequired,order:o.a.number.isRequired}},AhUf:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("jeY2"),o=a("17x9"),i=a.n(o),u=a("4/rP"),l=a("MwQV"),s=a("c8c+"),m=a("Qu/B"),d=a("EW+5"),g=Object(d.a)(u.a),f=g.loading,b=g.itemsListLoaded,p=g.error,h=a("9Koi"),E=a("19iC"),x=a("dbgk"),v=a("55Ip"),j=a("jQco"),O=a("Yfk4"),q=a("2pJb"),y=a("4vsJ"),P=a("1Y33"),N=a("Uf9I"),C=a("QPV6"),R=a("GmYL"),w=a("OKOT"),k=a("Jxq0"),S=a("eOHm");function J(e){var t=e.filters,a=e.sort,n=e.data,c=e.currentPage,o=e.lastPage,i=e.changeFilters,u=e.changeSort,l=e.changePage,s=Object(h.a)().t,m=Object(E.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,null,s("chatBoxConfigs.index-page.title")),r.a.createElement("div",{className:"text-right"},r.a.createElement(v.a,{to:"/chat-box-configs/create",className:"btn btn-primary mt-2 mb-4"},s("chatBoxConfigs.index-page.add-chat-box-config"))),r.a.createElement(j.d,{filters:t,changeFilters:i}),r.a.createElement(O.a,null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(q.a,{title:s("chatBoxConfigs.index-page.name-column"),active:Object(y.b)(a,"name")||Object(P.b)(t,"name-column")},r.a.createElement(y.a,{sort:a,name:"name",displayName:s("chatBoxConfigs.index-page.name-column"),changeSort:u,order:1}),r.a.createElement(N.a,{displayName:s("chatBoxConfigs.index-page.name-column"),filters:t,changeFilters:i,column:"name"}))),r.a.createElement("th",null,r.a.createElement(q.a,{title:s("integrations.index-page.updated-at-column"),active:Object(y.b)(a,"updated_at")},r.a.createElement(y.a,{sort:a,name:"updated_at",displayName:s("integrations.index-page.updated-at-column"),changeSort:u,order:2}))),r.a.createElement("th",null," "))),r.a.createElement("tbody",null,n.length?n.map((function(e){return r.a.createElement("tr",{key:e.id,id:e.id},r.a.createElement("td",null,e.name),r.a.createElement("td",{className:"last-update"},m(e.updated_at)),r.a.createElement(C.a,null,(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{url:"/chat-box-configs/".concat(e.id,"/edit")}),r.a.createElement(w.a,{url:"/methods/chat-box-configs/".concat(e.id),setConfirm:t,onSuccess:function(){return l(c)}}))})))})):r.a.createElement(k.a,{colspan:5}))),r.a.createElement(S.a,{currentPage:c,lastPage:o,loadPage:l,route:"/chat-box-configs"}))}J.propTypes={changeFilters:i.a.func.isRequired,changeSort:i.a.func.isRequired,changePage:i.a.func.isRequired,data:i.a.array.isRequired,currentPage:i.a.number,lastPage:i.a.number,filters:i.a.object.isRequired,sort:i.a.object.isRequired};t.default=Object(c.a)(J,(function(e){var t,a=e.chatBoxConfigs;return{loading:a.get("loading"),data:null===(t=a.get("data"))||void 0===t?void 0:t.toArray(),errors:a.get("errors"),currentPage:a.get("currentPage"),lastPage:a.get("lastPage"),filters:a.get("filters"),sort:a.get("sort")}}),(function(e){return{loadPage:function(t,a,n){return e(function(e,t,a){return function(n){var r={page:e};t.size&&(r.filter=Object(s.a)(t)),a.size&&(r.order=Object(m.a)(a)),n(f()),l.a.call("get","/methods/chat-box-configs",r,{}).then((function(e){n(b({filters:t,sort:a,response:e}))})).catch((function(e){return n(p(e))}))}}(t,a,n))}}}))},GmYL:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("17x9"),o=a.n(c),i=a("ma3e"),u=a("9Koi"),l=a("5TAD");function s(e){var t=e.url,a=Object(u.a)().t;return r.a.createElement(l.a,{url:t,icon:r.a.createElement(i.E,{className:"icon-size-15 color-blue mr-2"}),text:a("common.edit-link")})}s.propTypes={url:o.a.string.isRequired},t.a=r.a.memo(s)},Jxq0:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a("q1tI"),r=a.n(n),c=a("17x9"),o=a.n(c),i=a("9Koi");function u(e){var t=e.colspan,a=Object(i.a)().t;return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:t,className:"text-center no-data font-italic color-gray pt-4"},a("tables.no-data")))}u.propTypes={colspan:o.a.number.isRequired}},gmZo:function(e,t,a){"use strict";a("iYuL");var n=a("f0Wu");n.locale(window.locale),t.a=n}}]);