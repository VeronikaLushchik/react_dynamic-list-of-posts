(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(6),r=n.n(c),s=n(3),a=n(2),o=(n(11),n(12),n(1)),u=n.n(o),i=n(4),l="https://mate.academy/students-api",d=function(){var t=Object(i.a)(u.a.mark((function t(e){var n,c,r=arguments;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},t.next=3,fetch("".concat(l,"/").concat(e),n);case 3:return c=t.sent,t.abrupt("return",c.json());case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/posts?userId=".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),b=function(){var t=Object(i.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/posts"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/posts/:".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=(n(14),n(0)),f=function(t){var e=t.selectedUserId,n=t.selectedPostId,c=t.selectPost,r=Object(a.useState)([]),o=Object(s.a)(r,2),u=o[0],i=o[1];Object(a.useEffect)((function(){0!==e?j(e).then((function(t){return i(t)})):b().then((function(t){return i(t)}))}),[e]);return Object(m.jsxs)("div",{className:"PostsList",children:[Object(m.jsx)("h2",{children:"Posts:"}),Object(m.jsx)("ul",{className:"PostsList__list",children:u.map((function(t){return Object(m.jsxs)("li",{className:"PostsList__item",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"[User #".concat(t.userId,"]: ")}),t.title]}),Object(m.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return e=t.id,void c(n===e?0:e);var e},children:n===t.id?"Close":"Open"})]},t.id)}))})]})},h=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/comments?postId=".concat(e)));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),O=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=Object(i.a)(u.a.mark((function t(e){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/comments/".concat(e),{method:"DELETE"}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=(n(16),function(t){var e=t.selectedPostId,n=t.onAdd,c=Object(a.useState)(""),r=Object(s.a)(c,2),o=r[0],u=r[1],i=Object(a.useState)(""),l=Object(s.a)(i,2),d=l[0],j=l[1],b=Object(a.useState)(""),p=Object(s.a)(b,2),f=p[0],h=p[1];return Object(m.jsxs)("form",{className:"NewCommentForm",onSubmit:function(t){t.preventDefault(),n({postId:e,name:o,email:d,body:f}),u(""),j(""),h("")},children:[Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:o,onChange:function(t){return u(t.target.value)}})}),Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:d,onChange:function(t){return j(t.target.value)}})}),Object(m.jsx)("div",{className:"form-field",children:Object(m.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:f,onChange:function(t){return h(t.target.value)}})}),Object(m.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),_=(n(17),function(t){var e=t.selectedPostId,n=Object(a.useState)(null),c=Object(s.a)(n,2),r=c[0],o=c[1],u=Object(a.useState)([]),i=Object(s.a)(u,2),l=i[0],d=i[1],j=Object(a.useState)(!0),b=Object(s.a)(j,2),f=b[0],_=b[1];Object(a.useEffect)((function(){p(e).then((function(t){o(t)})),h(e).then((function(t){return d(t)}))}),[e]);return Object(m.jsxs)("div",{className:"PostDetails",children:[Object(m.jsx)("h2",{children:"Post details:"}),Object(m.jsx)("section",{className:"PostDetails__post",children:Object(m.jsx)("p",{children:null===r||void 0===r?void 0:r.body})}),Object(m.jsxs)("section",{className:"PostDetails__comments",children:[Object(m.jsx)("button",{type:"button",className:"button",onClick:function(){_(!f)},children:f?"Hide ".concat(l.length," comments"):"Show ".concat(l.length," comments")}),Object(m.jsx)("ul",{className:"PostDetails__list",children:f&&Object(m.jsx)(m.Fragment,{children:l.map((function(t){return Object(m.jsxs)("li",{className:"PostDetails__list-item",children:[Object(m.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return n=t.id,void x(n).then((function(){return h(e)})).then((function(t){return d(t)}));var n},children:"X"}),Object(m.jsx)("p",{children:t.body})]})}))})})]}),Object(m.jsx)("section",{children:Object(m.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(m.jsx)(v,{selectedPostId:e,onAdd:function(t){O(t).then((function(){return h(e)})).then((function(t){return d(t)}))}})})})]})}),N=function(){var t=Object(i.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d("/users"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),y=function(){var t=Object(a.useState)([]),e=Object(s.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(0),o=Object(s.a)(r,2),u=o[0],i=o[1],l=Object(a.useState)(0),d=Object(s.a)(l,2),j=d[0],b=d[1];Object(a.useEffect)((function(){N().then((function(t){return c(t)}))}),[]);return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("header",{className:"App__header",children:Object(m.jsxs)("label",{children:["Select a user: \xa0",Object(m.jsxs)("select",{className:"App__user-selector",onChange:function(t){i(+t.target.value)},children:[Object(m.jsx)("option",{value:"0",children:"All users"}),n.map((function(t){return Object(m.jsx)("option",{value:t.id,children:t.name},t.id)}))]})]})}),Object(m.jsxs)("main",{className:"App__main",children:[Object(m.jsx)("div",{className:"App__sidebar",children:Object(m.jsx)(f,{selectedUserId:u,selectedPostId:j,selectPost:b})}),0!==j&&Object(m.jsx)("div",{className:"App__content",children:Object(m.jsx)(_,{selectedPostId:j})})]})]})};r.a.render(Object(m.jsx)(y,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.27ccfe76.chunk.js.map