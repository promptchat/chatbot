(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"4vsJ":function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return d}));var a=n("q1tI"),r=n.n(a),c=n("17x9"),i=n.n(c),l=n("TSYQ"),s=n.n(l),o=n("Mpt7"),u=n("9Koi");function m(e,t){return e.find((function(e){return e.get("name")===t}))}function d(e){var t=e.sort,n=e.name,a=e.changeSort,c=e.displayName,i=e.order,l=Object(u.a)().t,m=t.find((function(e){return e.get("name")===n})),d=m&&m.get("name")===m.get("sort"),g=m&&"-".concat(m.get("name"))===m.get("sort"),f=function(e){var r=t.filter((function(e){return e.get("name")!==n})).push(Object(o.b)({name:n,sort:e?n:"-".concat(n),order:i})).sort((function(e,t){return e.get("order")-t.get("order")}));a(r)},b=function(){a(t.filter((function(e){return e.get("name")!==n})))};return r.a.createElement("div",{className:"sort-switcher text-main"},c?r.a.createElement("div",{className:"color-gray mb-3"},l("tables.sort-title",{name:c})):null,r.a.createElement("button",{onClick:function(){return d?b():f(!0)},className:s()("btn btn-sort rounded-left mb-3",{active:d})},l("tables.sort-asc-text")),r.a.createElement("button",{onClick:function(){return g?b():f(!1)},className:s()("btn btn-sort rounded-right mb-3",{active:g})},l("tables.sort-desc-text")))}d.propTypes={changeSort:i.a.func.isRequired,name:i.a.string.isRequired,displayName:i.a.string,sort:i.a.object.isRequired,order:i.a.number.isRequired}},BSfR:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),c=n("17x9"),i=n.n(c),l=n("uK7N"),s=n("MwQV"),o=n("c8c+"),u=n("Qu/B"),m=n("EW+5"),d=Object(m.a)(l.a),g=d.loading,f=d.itemsListLoaded,b=d.error,p=n("jeY2"),y=n("9Koi"),E=n("4vsJ"),h=n("jQco"),v=n("2pJb"),x=n("1Y33"),S=n("eOHm"),q=n("QPV6"),j=n("Yfk4"),N=n("dbgk"),_=n("Jxq0"),O=n("Uf9I"),P=n("GmYL"),L=n("OKOT"),R=n("55Ip");function A(e){var t=e.filters,n=e.sort,a=e.data,c=e.currentPage,i=e.lastPage,l=e.changeFilters,s=e.changeSort,o=e.changePage,u=Object(y.a)().t;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,u("clientsListAutoSync.index.title")),r.a.createElement("div",{className:"text-right"},r.a.createElement(R.a,{to:"/clients-list-auto-sync/create",className:"btn btn-primary mt-2 mb-4"},u("clientsListAutoSync.index.create-btn-text"))),r.a.createElement(h.d,{filters:t,changeFilters:l}),r.a.createElement(j.a,{className:"campaigns-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,r.a.createElement(v.a,{title:u("clientsListAutoSync.index.id-column"),active:Object(E.b)(n,"client_list_auto_syncs.id")||Object(x.b)(t,"client_list_auto_syncs.id")},r.a.createElement(E.a,{sort:n,name:"client_list_auto_syncs.id",displayName:u("clientsListAutoSync.index.id-column"),changeSort:s,order:1}),r.a.createElement(O.a,{displayName:u("clientsListAutoSync.index.id-column"),filters:t,changeFilters:l,column:"client_list_auto_syncs.id"}))),r.a.createElement("th",null,r.a.createElement(v.a,{title:u("clientsListAutoSync.index.integration-column"),active:Object(E.b)(n,"clientsListAutoSync.integration")},r.a.createElement(E.a,{sort:n,name:"client_list_auto_syncs.integration_id",displayName:u("clientsListAutoSync.index.integration-column"),changeSort:s,order:1}))),r.a.createElement("th",{className:"action-items"}," "))),r.a.createElement("tbody",null,a.length?a.map((function(e){return r.a.createElement("tr",{key:e.id,id:e.id},r.a.createElement("td",null,e.id),r.a.createElement("td",null,e.integration.name),r.a.createElement(q.a,null,(function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement(P.a,{url:"/clients-list-auto-sync/".concat(e.id,"/edit")}),r.a.createElement(L.a,{url:"/methods/clients-list-auto-sync/".concat(e.id),setConfirm:t,onSuccess:function(){return o(c)}}))})))})):r.a.createElement(_.a,{colspan:3}))),r.a.createElement(S.a,{currentPage:c,lastPage:i,loadPage:o,route:"/clients-list-auto-sync"}))}A.propTypes={changeFilters:i.a.func.isRequired,changeSort:i.a.func.isRequired,changePage:i.a.func.isRequired,data:i.a.array.isRequired,currentPage:i.a.number,lastPage:i.a.number,filters:i.a.object.isRequired,sort:i.a.object.isRequired};t.default=Object(p.a)(A,(function(e){var t,n=e.clientListAutoSync;return{loading:n.get("loading"),data:null===(t=n.get("data"))||void 0===t?void 0:t.toArray(),errors:n.get("errors"),currentPage:n.get("currentPage"),lastPage:n.get("lastPage"),filters:n.get("filters"),sort:n.get("sort")}}),(function(e){return{loadPage:function(t,n,a){return e(function(e,t,n){return function(a){var r={page:e};t.size&&(r.filter=Object(o.a)(t)),n.size&&(r.order=Object(u.a)(n)),a(g()),s.a.call("get","/methods/clients-list-auto-sync",r,{}).then((function(e){a(f({filters:t,sort:n,response:e}))})).catch((function(e){return a(b(e))}))}}(t,n,a))}}}))},GmYL:function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),c=n("17x9"),i=n.n(c),l=n("ma3e"),s=n("9Koi"),o=n("5TAD");function u(e){var t=e.url,n=Object(s.a)().t;return r.a.createElement(o.a,{url:t,icon:r.a.createElement(l.G,{className:"icon-size-15 color-blue mr-2"}),text:n("common.edit-link")})}u.propTypes={url:i.a.string.isRequired},t.a=r.a.memo(u)},Jxq0:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a),c=n("17x9"),i=n.n(c),l=n("9Koi");function s(e){var t=e.colspan,n=Object(l.a)().t;return r.a.createElement("tr",null,r.a.createElement("td",{colSpan:t,className:"text-center no-data font-italic color-gray pt-4"},n("tables.no-data")))}s.propTypes={colspan:i.a.number.isRequired}}}]);