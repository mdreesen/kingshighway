(this.webpackJsonpkingshighway=this.webpackJsonpkingshighway||[]).push([[0],{47:function(e){e.exports=JSON.parse('{"links":[{"name":"Home","link":"/"},{"name":"About","sub":[{"name":"churches","link":"/churches"},{"name":"Leaders","link":"/leaders"}]},{"name":"Prayer Request","link":"/prayer"},{"name":"Give","link":"/give"}]}')},60:function(e,n,t){},62:function(e){e.exports=JSON.parse('{"leaders":[{"name":"Bishop Michael Butler & 1st Lady Rosemary Butler","about":"Something about them","image":"bishoprosemary"},{"name":"Pastor Lindsey Wright III & Lady Lateasa Wright","about":"Something about them","image":"wright"},{"name":"Evangelist Tarsha Baily","about":"Something about them","image":"bailey"},{"name":"Evangelist Danielle Henderson","about":"Something about them","image":"daniellehenderson"},{"name":"Deacon Terrence Henderson","about":"Something about them","image":"terrencehenderson"},{"name":"Evangelist & Author Michele Butler","about":"Something about them","image":"michelebutler"},{"name":"Pastor Darrell Evans & 1st Lady Beverly Evans","about":"Something about them","image":"evans","location":"Lansing Michigan"},{"name":"Pastor Saleem Masih & 1st Lady Masih","about":"Something about them","image":"masih","location":"Punjab Pakistan"}]}')},74:function(e,n,t){},75:function(e,n,t){},76:function(e,n,t){},78:function(e,n,t){},79:function(e,n,t){},84:function(e,n,t){},90:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),i=t(23),s=t.n(i),r=(t(74),t(75),t(66)),o=t(9),l=t(61),j=(t(76),t.p+"static/media/choirone.b63741d7.webm"),b=t.p+"static/media/choirImage.ec31d53b.png",d=t.p+"static/media/eventOne.3bfa6f04.webp",m=t.p+"static/media/connectOne.55281ed4.webp",h=t.p+"static/media/connectTwo.f820390b.webp",u=t.p+"static/media/connectThree.01d04570.webp",x=t.p+"static/media/connectFour.2e4df5f5.webp",O=t(1),p=[d],v=[m,h,u,x],g=function(){return Object(O.jsx)("section",{className:"hero_content",children:Object(O.jsx)("video",{muted:"muted",autoplay:"autoplay",playsinline:"playsinline",loop:"loop",children:Object(O.jsx)("source",{src:j,type:"video/mp4"})})})},f=function(){return Object(O.jsx)("section",{className:"hero_content",children:Object(O.jsx)(l.Parallax,{bgImage:b,strength:200,children:Object(O.jsx)("div",{className:"parallax-content"})})})},k=function(){return Object(O.jsx)("section",{className:"event_container",children:Object(O.jsxs)("div",{className:"text_container",children:[Object(O.jsx)("h2",{className:"section_title",children:"Upcoming Events"}),p.map((function(e,n){return Object(O.jsx)(a.Suspense,{fallback:Object(O.jsx)("div",{}),children:Object(O.jsx)("div",{className:"event_content",children:Object(O.jsx)("img",{className:"event_img",alt:"",src:e})})},"event-".concat(n,"-image"))}))]})})},w=function(){return Object(O.jsxs)("section",{className:"connect_container",children:[Object(O.jsx)("h2",{className:"section_title",children:"Get Connected"}),v.map((function(e,n){return Object(O.jsx)(a.Suspense,{fallback:Object(O.jsx)("div",{}),children:Object(O.jsx)("div",{className:"connect_image_container",children:Object(O.jsx)("img",{className:"connect_image",alt:"",src:e,loading:"lazy"})})},"connect-".concat(n,"-image"))}))]})},y=function(){var e=window.innerWidth<600||window.screen.width<600;return Object(O.jsxs)("div",{children:[!0===e?Object(O.jsx)(f,{}):Object(O.jsx)(g,{}),Object(O.jsx)(k,{}),Object(O.jsx)(w,{})]})},N=function(){return Object(O.jsx)("div",{children:"About"})},S=t(63),L=t(39),P=(t(78),t(62));function _(){var e=P.leaders;return console.log(e),Object(O.jsx)(S.a,{xs:1,md:2,lg:4,className:"g-4",children:null===e||void 0===e?void 0:e.map((function(e,n){return Object(O.jsxs)(L.a,{children:[Object(O.jsx)(L.a.Img,{variant:"top",src:"./images/".concat(e.image,".webp")}),Object(O.jsxs)(L.a.Body,{children:[Object(O.jsx)(L.a.Title,{children:e.name}),Object(O.jsx)(L.a.Text,{children:e.about})]})]})}))})}var I=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Who We Are"}),Object(O.jsx)(_,{})]})})},B=function(){return Object(O.jsx)("div",{children:"Give Page"})},T=function(){return Object(O.jsx)("div",{children:"Global Ministries"})},M=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)("div",{className:"container1",children:[Object(O.jsx)("img",{className:"PrayingMan",src:"./images/PrayingMan.webp",style:{width:"100%"},alt:"man praying"}),Object(O.jsx)("div",{className:"centered",children:"Submit a Prayer Request"})]})})},E=t(6),C=t(31),A=t(30),D=t(52),F=t(38),W=(t(59),t(79),t(60),t(47)),G=W.links;function H(){var e=Object(a.useState)(!1),n=Object(E.a)(e,2),t=n[0],c=n[1];window.addEventListener("scroll",(function(){return window.scrollY>=80?c(!0):c(!1)}));var i=function(){return Object(O.jsx)(C.a,{className:"me-auto",children:G.map((function(e,n){return e.sub?Object(O.jsx)(F.a,{className:t?"link-active":"link-stable",title:e.name,id:"collasible-nav-dropdown",children:e.sub.map((function(e,n){return Object(O.jsx)(F.a.Item,{className:t?"link-active":"link-stable",href:e.link,children:e.name},"sub-".concat(n))}))},"dropdown-".concat(n)):Object(O.jsx)(C.a.Link,{className:t?"link-active":"link-stable",href:e.link,children:e.name},"page-".concat(n))}))})};return Object(O.jsx)(A.a,{collapseOnSelect:!0,expand:"lg",bg:t?"nav-active":"navbar",variant:"dark",children:Object(O.jsxs)(D.a,{children:[Object(O.jsx)(A.a.Brand,{className:"nav_brand",children:"KHDCI"}),Object(O.jsx)(A.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsx)(A.a.Collapse,{id:"responsive-navbar-nav",children:Object(O.jsx)(C.a,{children:Object(O.jsx)(i,{})})})]})})}t(84);var J=W.links;function R(){var e=function(){return Object(O.jsx)(C.a,{className:"me-auto",children:J.map((function(e,n){return e.sub?Object(O.jsx)(F.a,{title:e.name,id:"collasible-nav-dropdown",children:e.sub.map((function(e,n){return Object(O.jsx)(F.a.Item,{href:e.link,children:e.name},"sub-".concat(n))}))},"dropdown-".concat(n)):Object(O.jsx)(C.a.Link,{href:e.link,children:e.name},"page-".concat(n))}))})};return Object(O.jsx)("div",{className:"footer position-static",expand:"lg",variant:"dark",children:Object(O.jsxs)(D.a,{children:[Object(O.jsx)(A.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(O.jsx)(A.a.Collapse,{id:"responsive-navbar-nav",children:Object(O.jsx)(C.a,{children:Object(O.jsx)(e,{})})})]})})}var q=function(){return Object(O.jsx)(r.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(H,{}),Object(O.jsxs)(o.c,{children:[Object(O.jsx)(o.a,{exact:!0,path:"/",component:y}),Object(O.jsx)(o.a,{exact:!0,path:"/churches",component:N}),Object(O.jsx)(o.a,{exact:!0,path:"/leaders",component:I}),Object(O.jsx)(o.a,{exact:!0,path:"/give",component:B}),Object(O.jsx)(o.a,{exact:!0,path:"/global-ministries",component:T}),Object(O.jsx)(o.a,{exact:!0,path:"/prayer",component:M})]}),Object(O.jsx)(R,{})]})})},z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,96)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,i=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(q,{})}),document.getElementById("root")),z()}},[[90,1,2]]]);
//# sourceMappingURL=main.74e7a0b0.chunk.js.map