(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{18:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),o=n.n(s),i=n(8),r=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))},l=n(23),u=n(2),d=(n(18),n(0));var j=function(){return Object(d.jsxs)("div",{id:"loading",children:[Object(d.jsx)("div",{id:"loading_1",className:"loading"}),Object(d.jsx)("div",{id:"loading_2",className:"loading"}),Object(d.jsx)("div",{id:"loading_3",className:"loading"}),Object(d.jsx)("div",{id:"loading_4",className:"loading"}),Object(d.jsx)("div",{id:"loading_5",className:"loading"}),Object(d.jsx)("div",{id:"loading_6",className:"loading"}),Object(d.jsx)("div",{id:"loading_7",className:"loading"}),Object(d.jsx)("div",{id:"loading_8",className:"loading"})]})},p=n(3),b=n.p+"static/media/logo.bbe2a6ea.svg";var m=function(e){var t=e.userAuth,n=e.onLogout,c=Object(a.useState)(!1),s=Object(u.a)(c,2),o=s[0],r=s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(p.b,{exact:!0,path:"/",children:Object(d.jsxs)("div",{className:"header__profile-top".concat(o?" header__profile-top_opened":""),children:[Object(d.jsx)("p",{className:"header__email",children:t.email}),Object(d.jsx)(i.b,{to:"/sign-in",className:"header__link header__link_color_grey",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})}),Object(d.jsxs)("header",{className:"header page__header",children:[Object(d.jsx)("img",{src:b,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto",className:"header__logo"}),Object(d.jsx)("nav",{className:"header__nav",children:Object(d.jsxs)(p.d,{children:[Object(d.jsx)(p.b,{path:"/sign-up",children:Object(d.jsx)(i.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(p.b,{path:"/sign-in",children:Object(d.jsx)(i.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsxs)(p.b,{exact:!0,path:"/",children:[Object(d.jsx)("div",{className:"header__burger-menu-button".concat(o?" header__burger-menu-button_icon_close":""),onClick:function(){r(!o)}}),Object(d.jsxs)("div",{className:"header__profile-right",children:[Object(d.jsx)("p",{className:"header__email",children:t.email}),Object(d.jsx)(i.b,{to:"/sign-in",className:"header__link header__link_color_grey",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]})]})]})})]})]})},h=c.a.createContext();var _=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,s=e.onCardDelete,o=c.a.useContext(h),i=t.owner===o._id,r="element__icon-delete".concat(i?"":" element__icon-delete_hidden"),l=t.likes.some((function(e){return e===o._id})),u="element__icon-like".concat(l?" element__icon-like_active":"");return Object(d.jsxs)("li",{className:"element",children:[Object(d.jsx)("div",{className:"element__overlay-img",onClick:function(){n(t)}}),Object(d.jsx)("img",{className:"element__img",src:t.link,alt:t.name}),Object(d.jsxs)("div",{className:"element__name-overlay",children:[Object(d.jsx)("h2",{className:"element__title",children:t.name}),Object(d.jsxs)("div",{className:"element__like-overlay",children:[Object(d.jsx)("button",{type:"button",className:u,"aria-label":"\u041d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f",onClick:function(){a(t)}}),Object(d.jsx)("span",{className:"element__like-quantity",children:t.likes.length})]})]}),Object(d.jsx)("button",{type:"button",className:r,"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){s(t)}})]})};var O=function(e){var t=e.onEditAvatar,n=e.onEditProfile,s=e.onAddPlace,o=e.onCardClick,i=e.cards,r=e.onCardLike,l=e.onCardDelete,j=c.a.useContext(h),p=Object(a.useState)([]),b=Object(u.a)(p,2),m=b[0],O=b[1];return Object(a.useEffect)((function(){var e=i.sort((function(e,t){var n=new Date(e.createdAt);return new Date(t.createdAt)-n}));O(e)}),[i]),Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__author",children:[Object(d.jsx)("img",{className:"profile__avatar",src:j.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 ".concat(j.name)}),Object(d.jsx)("div",{className:"profile__overlay-avatar",onClick:t}),Object(d.jsxs)("div",{className:"profile__text",children:[Object(d.jsxs)("div",{className:"profile__title-overlay",children:[Object(d.jsx)("h1",{className:"profile__title",children:j.name}),Object(d.jsx)("button",{type:"button",className:"profile__edit-button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:n})]}),Object(d.jsx)("p",{className:"profile__subtitle",children:j.about})]})]}),Object(d.jsx)("button",{type:"button",className:"profile__add-button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:s})]}),Object(d.jsx)("section",{className:"elements",children:Object(d.jsx)("ul",{className:"elements__list",children:m.map((function(e){return Object(d.jsx)(_,{card:e,onCardClick:o,onCardLike:r,onCardDelete:l},e._id)}))})})]})};var f=function(e){var t=e.footerText;return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__text",children:t})})};var x=function(e){var t=e.card,n=e.onClose;return Object(d.jsx)("div",{className:"popup popup_type_image".concat(Object.keys(t).length?" popup_opened":""),onClick:n,children:Object(d.jsx)("div",{className:"popup__image-container",children:Object(d.jsxs)("div",{className:"popup__image-overlay",children:[Object(d.jsx)("img",{src:t.link,className:"popup__image",alt:t.name}),Object(d.jsx)("button",{type:"button",className:"popup__icon-close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:n}),Object(d.jsx)("p",{className:"popup__image-signature",children:t.name})]})})})},g=n(13),v=n(14),N="https://api.domainname.michelle.nomoredomains.monster",C=new(function(){function e(t){Object(g.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(v.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{method:"GET",credentials:"include",headers:this._headers}).then(this._handleResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",credentials:"include",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"getProfile",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",credentials:"include",headers:this._headers}).then(this._handleResponse)}},{key:"addProfile",value:function(e){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",credentials:"include",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",credentials:"include",headers:this._headers}).then(this._handleResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"".concat(t?"DELETE":"PUT"),credentials:"include",headers:this._headers}).then(this._handleResponse)}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",credentials:"include",headers:this._headers,body:JSON.stringify(e)}).then(this._handleResponse)}}]),e}())({baseUrl:N,headers:{"Content-Type":"application/json"}});var k=function(e){var t=e.title,n=e.name,a=e.children,c=e.isOpen,s=e.onClose,o=e.buttonText,i=e.onSubmit;return Object(d.jsx)("div",{className:"popup popup_type_".concat(n).concat(c?" popup_opened":""),onClick:s,children:Object(d.jsxs)("form",{method:"POST",className:"popup__container",name:n,onSubmit:i,children:[Object(d.jsx)("button",{type:"reset",className:"popup__icon-close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:s}),Object(d.jsx)("h3",{className:"popup__heading",children:t}),a,Object(d.jsx)("button",{type:"submit",className:"popup__submit-button",children:o})]})})};var y=function(e){var t=e.isOpen,n=e.onClose,s=e.onUpdateUser,o=c.a.useContext(h),i=Object(a.useState)(o.name),r=Object(u.a)(i,2),l=r[0],j=r[1],p=Object(a.useState)(o.about),b=Object(u.a)(p,2),m=b[0],_=b[1];return c.a.useEffect((function(){j(o.name),_(o.about)}),[o,t]),Object(d.jsxs)(k,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:l,about:m})},children:[Object(d.jsx)("input",{placeholder:"\u0418\u043c\u044f",type:"text",className:"popup__input popup__input_type_name",name:"name",required:!0,minLength:"2",maxLength:"40",id:"name-input",value:l||"",onChange:function(e){j(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error name-input-error"}),Object(d.jsx)("input",{placeholder:"\u041e \u0441\u0435\u0431\u0435",type:"text",className:"popup__input popup__input_type_job",name:"about",required:!0,minLength:"2",maxLength:"200",id:"job-input",value:m||"",onChange:function(e){_(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error job-input-error"})]})};var S=function(e){var t=e.isOpen,n=e.onClose,a=e.onUpdateAvatar,s=c.a.useRef();return Object(d.jsxs)(k,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a({avatar:s.current.value})},children:[Object(d.jsx)("input",{ref:s,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e",type:"url",className:"popup__input popup__input_type_link",name:"avatar",required:!0,id:"avatar-input"}),Object(d.jsx)("span",{className:"popup__error avatar-input-error"})]})};var E=function(e){var t=e.isOpen,n=e.onClose,s=e.onAddPlace,o=c.a.useState(""),i=Object(u.a)(o,2),r=i[0],l=i[1],j=c.a.useState(""),p=Object(u.a)(j,2),b=p[0],m=p[1];return Object(a.useEffect)((function(){l(""),m("")}),[t]),Object(d.jsxs)(k,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),s({name:r,link:b})},children:[Object(d.jsx)("input",{placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",type:"text",className:"popup__input popup__input_type_title",name:"name",required:!0,id:"title-input",minLength:"2",maxLength:"30",value:r,onChange:function(e){l(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error title-input-error"}),Object(d.jsx)("input",{placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",type:"url",className:"popup__input popup__input_type_link",name:"link",required:!0,id:"link-input",value:b,onChange:function(e){m(e.target.value)}}),Object(d.jsx)("span",{className:"popup__error link-input-error"})]})};var P=function(e){var t=e.isOpen,n=e.onClose,a=e.onConfirm;return Object(d.jsx)(k,{name:"confirm",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430",isOpen:t,onClose:n,onSubmit:function(e){e.preventDefault(),a()}})};var T=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(u.a)(n,2),s=c[0],o=c[1],i=Object(a.useState)(""),r=Object(u.a)(i,2),l=r[0],j=r[1],p=Object(a.useState)(!1),b=Object(u.a)(p,2),m=b[0],h=b[1];return Object(d.jsxs)("form",{method:"POST",className:"form",name:"login",onSubmit:function(e){e.preventDefault(),t({password:l,email:s})},children:[Object(d.jsx)("h3",{className:"form__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)("input",{placeholder:"Email",type:"email",className:"form__input",name:"email",required:!0,minLength:"2",maxLength:"40",value:s||"",onChange:function(e){o(e.target.value)}}),Object(d.jsx)("span",{className:"form__error email-input-error"}),Object(d.jsxs)("div",{className:"form__password-overlay",children:[Object(d.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:m?"text":"password",className:"form__input",name:"password",required:!0,minLength:"8",maxLength:"200",value:l||"",onChange:function(e){j(e.target.value)}}),Object(d.jsx)("span",{className:"form__password-control".concat(m?" visible":""),onClick:function(){h(!m)}})]}),Object(d.jsx)("span",{className:"form__error password-input-error"}),Object(d.jsx)("button",{type:"submit",className:"form__submit-button",children:"\u0412\u043e\u0439\u0442\u0438"})]})};var L=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(u.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(""),l=Object(u.a)(r,2),j=l[0],p=l[1],b=Object(a.useState)(""),m=Object(u.a)(b,2),h=m[0],_=m[1],O=Object(a.useState)(!1),f=Object(u.a)(O,2),x=f[0],g=f[1],v=Object(a.useState)(""),N=Object(u.a)(v,2),C=N[0],k=N[1],y=Object(a.useState)(!1),S=Object(u.a)(y,2),E=S[0],P=S[1];return Object(a.useEffect)((function(){P(h===j),console.log(!!h)}),[h,j]),Object(a.useEffect)((function(){k(E?"":"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442")}),[E]),Object(d.jsxs)("form",{method:"POST",className:"form",name:"register",onSubmit:function(e){e.preventDefault(),E?t({password:j,email:s}):k("\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442")},children:[Object(d.jsx)("h3",{className:"form__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)("input",{placeholder:"Email",type:"email",className:"form__input",name:"email",required:!0,minLength:"2",maxLength:"40",value:s||"",onChange:function(e){o(e.target.value)}}),Object(d.jsx)("span",{className:"form__error email-input-error"}),Object(d.jsxs)("div",{className:"form__password-overlay",children:[Object(d.jsx)("input",{placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:x?"text":"password",className:"form__input",name:"password",required:!0,minLength:"8",maxLength:"200",value:j||"",onChange:function(e){p(e.target.value)}}),Object(d.jsx)("span",{className:"form__password-control".concat(x?" visible":""),onClick:function(){g(!x)}})]}),Object(d.jsx)("span",{className:"form__error password-input-error"}),!x&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",{placeholder:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",className:"form__input",name:"repeat-password",required:!0,value:h||"",onChange:function(e){_(e.target.value)}}),Object(d.jsx)("span",{className:"form__error repeat-password-input-error",children:h?C:""})]}),Object(d.jsx)("button",{type:"submit",className:"form__submit-button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsxs)("p",{className:"form__text",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"," ",Object(d.jsx)(i.b,{to:"/sign-in",className:"form__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var w=function(e){var t=e.message,n=e.isError,a=e.onClose;return Object(d.jsx)("div",{className:"popup popup_type_info".concat(""!==t?" popup_opened":""),onClick:a,children:Object(d.jsxs)("div",{className:"popup__container".concat(n?" popup__container_image_error":" popup__container_image_complete"),children:[Object(d.jsx)("button",{type:"button",className:"popup__icon-close","aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",onClick:a}),Object(d.jsx)("h3",{className:"popup__heading popup__heading_type_message",children:t})]})})},U=new(function(){function e(t){var n=t.baseUrl;Object(g.a)(this,e),this._baseUrl=n}return Object(v.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")}},{key:"register",value:function(e){return fetch("".concat(this._baseUrl,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():400===e.status?Promise.reject("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c Email \u0443\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d!"):Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")}))}},{key:"login",value:function(e){return fetch("".concat(this._baseUrl,"/signin"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():401===e.status?Promise.reject("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u0438\u043c Email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0451\u043d \u043d\u0435 \u0432\u0435\u0440\u043d\u043e!"):Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")}))}},{key:"logout",value:function(){return fetch("".concat(this._baseUrl,"/logout"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.")}))}},{key:"checkToken",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():401===e.status?Promise.reject("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u0432\u0430\u043b\u0438\u0434\u0435\u043d"):Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437. \u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status))}))}}]),e}())({baseUrl:N}),A=n(24),D=n(25),q=["component","loading"],R=function(e){var t=e.component,n=e.loading,a=Object(D.a)(e,q);return Object(d.jsx)(p.b,{children:function(){return a.loggedIn?a.isLoading?Object(d.jsx)(n,{}):Object(d.jsx)(t,Object(A.a)({},a)):Object(d.jsx)(p.a,{to:"./sign-in"})}})};var J=function(){var e=Object(p.g)(),t=Object(a.useState)(!0),n=Object(u.a)(t,2),c=n[0],s=n[1],o=Object(a.useState)({}),i=Object(u.a)(o,2),r=i[0],b=i[1],_=Object(a.useState)([]),g=Object(u.a)(_,2),v=g[0],N=g[1],k=Object(a.useState)({}),A=Object(u.a)(k,2),D=A[0],q=A[1],J=Object(a.useState)(""),F=Object(u.a)(J,2),G=F[0],I=F[1],M=Object(a.useState)(!1),B=Object(u.a)(M,2),H=B[0],z=B[1],K=Object(a.useState)(!1),Q=Object(u.a)(K,2),V=Q[0],W=Q[1];Object(a.useEffect)((function(){V&&Promise.all([C.getProfile(),C.getCards()]).then((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];b(n.data),N(a.data)})).catch((function(e){V&&(z(!0),I("\u0414\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u044f \u0438\u043b\u0438 \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a \u043d\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u043b\u0438\u0441\u044c. ".concat(e)))})).finally((function(){return s(!1)}))}),[V]);var X=Object(a.useState)({}),Y=Object(u.a)(X,2),Z=Y[0],$=Y[1],ee=Object(a.useState)(!1),te=Object(u.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(!1),se=Object(u.a)(ce,2),oe=se[0],ie=se[1],re=Object(a.useState)(!1),le=Object(u.a)(re,2),ue=le[0],de=le[1],je=Object(a.useState)(!1),pe=Object(u.a)(je,2),be=pe[0],me=pe[1],he=Object(a.useState)({}),_e=Object(u.a)(he,2),Oe=_e[0],fe=_e[1];function xe(){de(!1),ae(!1),ie(!1),me(!1),$({}),I("")}function ge(e){e.target===e.currentTarget&&xe()}function ve(){U.checkToken().then((function(e){var t,n;t=e.data._id,n=e.data.email,W(!0),q({id:t,email:n})})).catch((function(e){console.log(e)}))}return Object(a.useEffect)((function(){var e=function(e){"Escape"===e.key&&xe()};return Z.link|ne|oe|ue|be&&document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[Z,ne,oe,ue,be]),Object(a.useEffect)((function(){V?e.push("/"):e.push("/sign-in")}),[V]),Object(a.useEffect)((function(){document.cookie.includes("jwt=")&&ve()}),[]),Object(d.jsx)("div",{className:"page",children:Object(d.jsxs)(h.Provider,{value:r,children:[Object(d.jsx)(m,{userAuth:D,onLogout:function(){U.logout().then((function(e){W(!1),q({})})).catch((function(e){console.log(e)}))}}),Object(d.jsx)(w,{isError:H,message:G,onClose:ge}),Object(d.jsxs)(p.d,{children:[Object(d.jsx)(p.b,{path:"/sign-up",children:Object(d.jsx)(L,{onSubmit:function(t){var n=t.password,a=t.email;U.register({password:n,email:a}).then((function(t){z(!1),I("\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"),e.push("/sign-in")})).catch((function(e){z(!0),I(e)}))}})}),Object(d.jsx)(p.b,{path:"/sign-in",children:Object(d.jsx)(T,{onSubmit:function(e){var t=e.password,n=e.email;U.login({password:t,email:n}).then((function(e){"\u0412\u0445\u043e\u0434 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d \u0443\u0441\u043f\u0435\u0448\u043d\u043e"===e.message&&ve()})).catch((function(e){z(!0),I(e)}))}})}),Object(d.jsx)(R,{exact:!0,path:"/",component:O,loggedIn:V,isLoading:c,loading:j,onEditAvatar:function(){de(!0)},onEditProfile:function(){ae(!0)},onAddPlace:function(){ie(!0)},onCardClick:function(e){$(e)},cards:v,onCardLike:function(e){var t=e.likes.some((function(e){return e===r._id}));C.changeLikeCardStatus(e._id,t).then((function(t){N((function(n){return n.map((function(n){return n._id===e._id?t.data:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){me(!0),fe(e)}})]}),V&&Object(d.jsx)(f,{footerText:"\xa9 2021 Mesto Russia"}),Object(d.jsx)(y,{isOpen:ne,onClose:ge,onUpdateUser:function(e){C.addProfile(e).then((function(e){b(e.data),xe()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(E,{isOpen:oe,onClose:ge,onAddPlace:function(e){C.addCard(e).then((function(e){N([e.data].concat(Object(l.a)(v))),xe()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(S,{isOpen:ue,onClose:ge,onUpdateAvatar:function(e){C.updateAvatar(e).then((function(e){b(e.data),xe()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(x,{card:Z,onClose:ge}),Object(d.jsx)(P,{isOpen:be,onClose:ge,onConfirm:function(){C.deleteCard(Oe._id).then((function(e){N((function(e){return e.filter((function(e){return e._id!==Oe._id}))})),xe()})).catch((function(e){return console.log(e)}))}})]})})};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(J,{})})}),document.getElementById("root")),r()}},[[36,1,2]]]);
//# sourceMappingURL=main.76b1a3f9.chunk.js.map