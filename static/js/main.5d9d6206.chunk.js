(this["webpackJsonpblog-app"]=this["webpackJsonpblog-app"]||[]).push([[0],{21:function(e,t,s){},22:function(e,t,s){},24:function(e,t,s){},25:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),r=s(15),i=s.n(r),c=s(2),o=(s(21),s(10)),d=[{id:1,title:"Why The Lions Might Just Make The Playoffs...",category:"NFL",subCategory:["NFL"],description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",authorName:"Ian Cook",authorAvatar:"/assets/images/Ian_Headshot.jpeg",createdAt:"August 20, 2022",cover:"/assets/images/Dan.jpeg"},{id:2,title:"Why The Pat Bev Trade Turns the Lakers Into Contenders",category:"NBA",subCategory:["NBA"],description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",authorName:"Ian Cook",authorAvatar:"/assets/images/Ian_Headshot.jpeg",createdAt:"August 21, 2022",cover:"/assets/images/PatBev.jpeg"},{id:3,title:"Is Matthew Stafford A Top 20 QB... Ever?",category:"NFL",subCategory:["NFL"],description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",authorName:"Ian Cook",authorAvatar:"/assets/images/Ian_Headshot.jpeg",createdAt:"August 22, 2022",cover:"/assets/images/Staff.jpeg"},{id:4,title:"Why Cade Cunningham Is My Prediction For 2022-2023 NBA MVP",category:"NBA",subCategory:["NBA"],description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",authorName:"Ian Cook",authorAvatar:"/assets/images/Ian_Headshot.jpeg",createdAt:"August 25, 2022",cover:"/assets/images/Cade.jpeg"}],m=(s(22),s(0)),u=function(e){var t=e.label;return Object(m.jsx)("p",{className:"chip",children:t})},l=(s(24),function(){return Object(m.jsx)("div",{className:"emptyList-wrap",children:Object(m.jsx)("img",{src:"/assets/images/NOPE.png",alt:"empty"})})}),h=(s(25),s(7)),p=function(){var e=Object(c.g)().id,t=Object(n.useState)(null),s=Object(o.a)(t,2),a=s[0],r=s[1];return Object(n.useEffect)((function(){var t=d.find((function(t){return t.id===parseInt(e)}));t&&r(t)}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(h.b,{className:"blog-goBack",to:"/",children:[Object(m.jsx)("span",{children:" \u2190"})," ",Object(m.jsx)("span",{children:"Go Back"})]}),a?Object(m.jsxs)("div",{className:"blog-wrap",children:[Object(m.jsxs)("header",{children:[Object(m.jsxs)("p",{className:"blog-date",children:["Published ",a.createdAt]}),Object(m.jsx)("h1",{children:a.title}),Object(m.jsx)("div",{className:"blog-subCategory",children:a.subCategory.map((function(e,t){return Object(m.jsx)("div",{children:Object(m.jsx)(u,{label:e})},t)}))})]}),Object(m.jsx)("img",{src:a.cover,alt:"cover"}),Object(m.jsx)("p",{className:"blog-desc",children:a.description})]}):Object(m.jsx)(l,{})]})},b=(s(34),function(e){var t=e.blog,s=t.description,n=t.title,a=t.createdAt,r=t.authorName,i=t.authorAvatar,c=t.cover,o=t.category,d=t.id;return Object(m.jsxs)("div",{className:"blogItem-wrap",children:[Object(m.jsx)("img",{className:"blogItem-cover",src:c,alt:"cover"}),Object(m.jsx)(u,{label:o}),Object(m.jsx)("h3",{children:n}),Object(m.jsx)("p",{className:"blogItem-desc",children:s}),Object(m.jsxs)("footer",{children:[Object(m.jsxs)("div",{className:"blogItem-author",children:[Object(m.jsx)("img",{src:i,alt:"avatar"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h6",{children:r}),Object(m.jsx)("p",{children:a})]})]}),Object(m.jsx)(h.b,{className:"blogItem-link",to:"/blog/".concat(d),children:"\u279d"})]})]})}),j=(s(35),function(e){var t=e.blogs;return Object(m.jsx)("div",{className:"blogList-wrap",children:t.map((function(e){return Object(m.jsx)(b,{blog:e})}))})}),y=(s(36),function(){return Object(m.jsxs)("header",{className:"home-header",children:[Object(m.jsx)("h2",{children:"Sports News"}),Object(m.jsx)("h1",{children:Object(m.jsx)("span",{children:"Ooka"})})]})}),g=(s(37),function(e){var t=e.formSubmit,s=e.value,n=e.handleSearchKey,a=e.clearSearch;return Object(m.jsx)("div",{className:"searchBar-wrap",children:Object(m.jsxs)("form",{onSubmit:t,children:[Object(m.jsx)("input",{type:"text",placeholder:"Search By Category",value:s,onChange:n}),s&&Object(m.jsx)("span",{onClick:a,children:"X"}),Object(m.jsx)("button",{children:"Go"})]})})}),x=function(){var e=Object(n.useState)(d.reverse()),t=Object(o.a)(e,2),s=t[0],a=t[1],r=Object(n.useState)(""),i=Object(o.a)(r,2),c=i[0],u=i[1],h=function(){var e=d.filter((function(e){return e.category.toLowerCase().includes(c.toLowerCase().trim())}));a(e)};return Object(m.jsxs)("div",{children:[Object(m.jsx)(y,{}),Object(m.jsx)(g,{value:c,clearSearch:function(){a(d[0].id<d[d.length-1].id?d.reverse():d),u("")},formSubmit:function(e){e.preventDefault(),h()},handleSearchKey:function(e){return u(e.target.value)}}),s.length?Object(m.jsx)(j,{blogs:s}):Object(m.jsx)(l,{})]})},O=function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(c.d,{children:[Object(m.jsx)(c.b,{path:"/",exact:!0,component:x}),Object(m.jsx)(c.b,{path:"/blog/:id",component:p}),Object(m.jsx)(c.a,{to:"/"})]})})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(h.a,{children:Object(m.jsx)(O,{})})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.5d9d6206.chunk.js.map