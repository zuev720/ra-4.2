(this["webpackJsonpra-4.2"]=this["webpackJsonpra-4.2"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(11),i=n.n(r),c=(n(16),n(17),n(10)),l=n(6),o=n(9),u=n(7),d=(n(18),n(19),n(2)),b=n.n(d),j=n(0),f=n(23);function m(e){var t=e.fitness.sort((function(e,t){return e.date>t.date?1:e.date<t.date?-1:0})),n=function(n){var s=n.target.closest(".rowTable").firstChild.textContent,a=e.fitness.findIndex((function(e){return e.date===s}));e.setEditFitnessIndex(a);var r=t.find((function(e){return e.date===s}));n.target.closest(".FitnessTracking").firstChild.date.value=r.date,n.target.closest(".FitnessTracking").firstChild.kilometers.value=r.kilometers},s=function(t){var n=t.target.closest(".rowTable").firstChild.textContent;e.setFitness(e.fitness.filter((function(e){return e.date!==n})))};return Object(j.jsxs)("table",{className:"FitnessTable",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"\u0414\u0430\u0442\u0430 (\u0434\u0434.\u043c\u043c.\u0433\u0433)"}),Object(j.jsx)("th",{children:"\u041a\u043c \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043e"}),Object(j.jsx)("th",{children:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044f"})]})}),Object(j.jsx)("tbody",{className:"TableBody",children:t.map((function(e){return Object(j.jsxs)("tr",{className:"rowTable",children:[Object(j.jsx)("th",{children:e.date}),Object(j.jsx)("th",{children:e.kilometers}),Object(j.jsxs)("th",{children:[Object(j.jsx)("button",{className:"FitnessTableButton",type:"button",onClick:n,children:"\u270e"}),Object(j.jsx)("button",{className:"FitnessTableButton",type:"button",onClick:s,children:"\u2718"})]})]},f.generate())}))})]})}m.prototypes={fitness:b.a.array.isRequired,setFitness:b.a.func.isRequired};n(32);function h(e){return Object(j.jsxs)("form",{className:"Form",onSubmit:e.formSubmit,children:[Object(j.jsxs)("label",{htmlFor:"date",className:"label",children:["\u0414\u0430\u0442\u0430 (\u0434\u0434.\u043c\u043c.\u0433\u0433)",Object(j.jsx)("input",{type:"text",className:"FormInput",id:"date",name:"date",onChange:e.onChange,pattern:"[0-9]{2}.[0-9]{2}.[0-9]{2}",required:!0})]}),Object(j.jsxs)("label",{htmlFor:"kilometers",className:"label",children:["\u041a\u043c \u043f\u0440\u043e\u0439\u0434\u0435\u043d\u043e",Object(j.jsx)("input",{type:"text",className:"FormInput",id:"kilometers",name:"kilometers",onChange:e.onChange,pattern:"^[0-9]*[.,]?[0-9]+$",required:!0})]}),Object(j.jsx)("button",{type:"submit",className:"FormButtonSubmit",children:"Ok"})]})}h.prototypes={formSubmit:b.a.func.isRequired,onChange:b.a.func.isRequired};var O={date:"",kilometers:""};function x(){var e=Object(s.useState)(O),t=Object(u.a)(e,2),n=t[0],a=t[1],r=Object(s.useState)([]),i=Object(u.a)(r,2),d=i[0],b=i[1],f=Object(s.useState)(null),x=Object(u.a)(f,2),g=x[0],p=x[1];return Object(j.jsxs)("div",{className:"FitnessTracking",children:[Object(j.jsx)(h,{onChange:function(e){a((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(l.a)({},e.target.name,e.target.value))}))},formSubmit:function(e){if(e.preventDefault(),null!==g){var t=e.target.date.value,s=e.target.kilometers.value;d[g].date=t,d[g].kilometers=s,p(null)}else{var a=n.date,r=n.kilometers;d.find((function(e){return e.date===a}))?(d.forEach((function(e){e.date===a&&(e.kilometers+=Number(r))})),b((function(e){return Object(c.a)(e)}))):b((function(e){return[].concat(Object(c.a)(e),[{date:a,kilometers:Number(r)}])}))}e.target.date.value="",e.target.kilometers.value=""}}),Object(j.jsx)(m,{fitness:d,setFitness:b,setEditFitnessIndex:p})]})}var g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(x,{})})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),s(e),a(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),p()}},[[33,1,2]]]);
//# sourceMappingURL=main.a91585f8.chunk.js.map