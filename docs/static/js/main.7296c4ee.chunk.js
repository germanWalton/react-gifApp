(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{15:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),s=(n(15),n(2)),i=n(9),u=n(0),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],o=c[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(i.a)(e))})),o(""))},children:[Object(u.jsxs)("div",{className:"d-flex justify-content-center mt-5",children:[Object(u.jsx)("input",{className:"form-control w-50 p-3",type:"text",value:r,placeholder:"Ingrese un nombre",onChange:function(e){o(e.target.value)}}),Object(u.jsx)("button",{className:"btn btn-lg btn-secondary p-3",type:"submit",children:"Buscar"}),Object(u.jsx)("button",{className:"btn btn-lg btn-dark ms-3 p-3",type:"reset",onClick:function(){t([""])},children:"Borrar busqueda"})]}),Object(u.jsx)("br",{})]})},j=n(10),l=n(6),d=n.n(l),b=n(8),m=function(){var e=Object(b.a)(d.a.mark((function e(t){var n,a,c,r,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=20&api_key=rbFRdyeMSGSEPCB5KlWS1oaMmjxfwK8E"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,s=r.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=m,f=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(e).then((function(e){r({data:e,loading:!1})}))}),[e]),c},h=function(e){var t=e.title,n=e.url;return Object(u.jsxs)("div",{className:"card animate__animated animate__zoomIn",children:[Object(u.jsx)("img",{className:"",src:n,alt:t}),Object(u.jsx)("p",{className:"p-3",children:t})]})},x=function(e){var t=e.category,n=f(t),a=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("hr",{className:"mt-5"}),Object(u.jsx)("h3",{className:"animate__animated animate__zoomIn mt-5 text-center p-3",children:t}),c&&Object(u.jsx)("p",{className:"animate__animated animate__flash",children:"loading..."}),Object(u.jsx)("div",{className:"card-grid ",children:a.map((function(e){return Object(u.jsx)(h,Object(j.a)({},e),e.id)}))})]})},O=function(){var e=Object(a.useState)(["Beavis and Butthead"]),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{className:"p-5 text-center",children:"GifApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("ol",{children:n.map((function(e){return Object(u.jsx)(x,{category:e},e)}))})]})})};r.a.render(Object(u.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.7296c4ee.chunk.js.map