(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{dbgk:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("q1tI"),r=t.n(n),l=t("17x9"),i=t.n(l);function c(e){var a=e.children;return r.a.createElement("h1",{className:"title-main mb-3"},a)}c.propTypes={children:i.a.any.isRequired}},kAST:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var n=t("q1tI"),r=t.n(n),l=t("TtP3"),i=t("9Koi"),c=t("Ty5D"),u=t("MwQV"),m=t("lX6T"),o=t("dbgk");function s(){var e=Object(c.j)().companyId,a=Object(i.a)().t,t=Object(c.h)(),s=Object(n.useCallback)((function(a,n){var r=n.setSubmitting,l=n.setErrors;u.a.call("post","/methods/departments",{},{name:a.name,company_id:e}).then((function(){t.goBack()})).validation((function(e,a){l(a)})),r(!1)}),[e,t]);return r.a.createElement(l.a,null,r.a.createElement(o.a,null,a("departments.create-page.title")),r.a.createElement(m.a,{handleSubmit:s,defaultData:{name:""}}))}},lX6T:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t("q1tI"),r=t.n(n),l=t("17x9"),i=t.n(l),c=t("9Koi"),u=t("nc57"),m=t("6Rhw"),o=t("x37D");function s(e){var a=e.defaultData,t=e.handleSubmit,n=Object(c.a)().t;return r.a.createElement(u.a,{className:"limiter",initialValues:a,handleSubmit:t,renderForm:function(e){var a=e.handleChange,t=e.handleBlur,l=e.values,i=e.errors,c=e.isSubmitting;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{id:"name",name:"name",label:n("departments.name-label"),placeholder:n("departments.name-placeholder"),onChange:a,onBlur:t,value:l.name,errors:i}),r.a.createElement(o.a,{className:"pt-2 px-4 mt-3 mb-5",disabled:c},n("common.saveBtnText")))}})}s.propTypes={defaultData:i.a.object.isRequired,handleSubmit:i.a.func.isRequired}}}]);