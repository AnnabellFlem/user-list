(this["webpackJsonpuser-list"]=this["webpackJsonpuser-list"]||[]).push([[0],{212:function(e,a,t){},216:function(e,a,t){},217:function(e,a,t){},218:function(e,a,t){},221:function(e,a,t){},222:function(e,a,t){},223:function(e,a,t){},224:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),i=t(19),s=t.n(i),l=(t(98),t(52)),c=t(4),u=t(89),m=t(17),o=t(85),d=t.n(o),_={id:"_"+Math.random().toString(36).substr(2,9),name:"",surname:"",email:"",phone:"",birthday:"",credit:""},E=(t(212),function(e){var a=e.children;return r.a.createElement("span",{className:"error-message"},a)}),h=t(41),p=(t(213),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/user-list",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_APIKEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/user-list",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AUTHDOMAIN,databaseURL:"https://user-list-c0863-default-rtdb.europe-west1.firebasedatabase.app/",projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/user-list",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_PID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/user-list",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_SB,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/user-list",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MSID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/user-list",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_APPID,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/user-list",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_MID});h.a.initializeApp(p);var v=h.a.database().ref("users"),f=(h.a,t(79),t(216),m.a().shape({name:m.b().max(16).required("Name is a required field"),surname:m.b().max(20).required("Surname is a required field"),email:m.b().email("Please enter your valid email").required("Please enter your email"),phone:m.b().matches(/^\+[(]\d{1,3}[)][ ]\d{3}-\d{3}-\d{2}-\d{2}$/,"Phone number is not valid, enter format +({country code}) XXX-XXX-XX-XX"),credit:m.b().test("test-number","Credit Card number is invalid",(function(e){return d.a.number(e).isValid||!(null===e||void 0===e?void 0:e.length)}))})),b=function(e){var a=e.user,t=e.isMainEditForm,n=e.handleSaveClick,i=e.handleCancelClick,s=e.handleFormMessage,l=Object(u.a)({initialValues:a||_,validationSchema:f,onSubmit:function(e,a){var r=a.resetForm;if(t){var i=!1;v.orderByChild("email").equalTo(e.email).once("value",(function(e){null!==e.val()&&(i=!0,s({text:"User with this email already exists",isSuccess:!1}))})),i||(v.push(e).then((function(){return s({text:"User added successfully",isSuccess:!0})})).catch((function(){return s({text:"Adding failed, try again",isSuccess:!1})})),r())}else v.child("".concat(e.id)).set(e).catch((function(){return s({text:"Updating failed, try again",isSuccess:!1})})),n&&n()}});return r.a.createElement("form",{className:"".concat(t?"user__form--main":""," user__form"),onSubmit:l.handleSubmit},r.a.createElement("div",{className:"user__info"},r.a.createElement("label",{className:"user__title"},"Name",r.a.createElement("input",{id:"name",name:"name",type:"text",onChange:l.handleChange,value:l.values.name,className:"user__data"})),l.errors.name&&r.a.createElement(E,null,l.errors.name)),r.a.createElement("div",{className:"user__info"},r.a.createElement("label",{className:"user__title"},"Surname",r.a.createElement("input",{id:"surname",name:"surname",type:"text",onChange:l.handleChange,value:l.values.surname,className:"user__data"})),l.errors.surname&&r.a.createElement(E,null,l.errors.surname)),r.a.createElement("div",{className:"user__info"},r.a.createElement("label",{className:"user__title"},"Email",r.a.createElement("input",{id:"email",name:"email",type:"email",onChange:l.handleChange,value:l.values.email,className:"user__data"})),l.errors.email&&r.a.createElement(E,null,l.errors.email)),r.a.createElement("div",{className:"user__info"},r.a.createElement("label",{className:"user__title"},"Phone",r.a.createElement("input",{id:"phone",name:"phone",type:"tel",inputMode:"text",onChange:l.handleChange,value:l.values.phone,className:"user__data"})),l.errors.phone&&r.a.createElement(E,null,l.errors.phone)),r.a.createElement("div",{className:"user__info"},r.a.createElement("label",{className:"user__title"},"Birthday",r.a.createElement("input",{id:"birthday",name:"birthday",type:"date",onChange:l.handleChange,value:l.values.birthday,className:"user__data",min:"1950-01-01",max:"2018-12-31"}))),r.a.createElement("div",{className:"user__info"},r.a.createElement("label",{className:"user__title"},"Credit card",r.a.createElement("input",{id:"credit",name:"credit",type:"text",inputMode:"numeric",onChange:l.handleChange,value:l.values.credit||"",className:"user__data"})),l.errors.credit&&r.a.createElement(E,null,l.errors.credit)),t?r.a.createElement("button",{type:"submit",className:"user__btn--create"},"Create"):r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"user__btn--save"},"Save"),r.a.createElement("button",{type:"button",className:"user__btn--cancel",onClick:i},"Cancel")))},S=function(e){var a=e.user,t=e.handleClick;return r.a.createElement("li",{className:"user"},r.a.createElement("div",{className:"user__info"},r.a.createElement("span",{className:"user__title"},"Name"),r.a.createElement("span",{className:"user__data"},a.name)),r.a.createElement("div",{className:"user__info"},r.a.createElement("span",{className:"user__title"},"Surname"),r.a.createElement("span",{className:"user__data"},a.surname)),r.a.createElement("div",{className:"user__info"},r.a.createElement("span",{className:"user__title"},"Email"),r.a.createElement("span",{className:"user__data"},a.email)),a.phone&&r.a.createElement("div",{className:"user__info"},r.a.createElement("span",{className:"user__title"},"Phone"),r.a.createElement("span",{className:"user__data"},a.phone)),a.birthday&&r.a.createElement("div",{className:"user__info"},r.a.createElement("span",{className:"user__title"},"Birthday"),r.a.createElement("span",{className:"user__data"},a.birthday)),a.credit&&r.a.createElement("div",{className:"user__info"},r.a.createElement("span",{className:"user__title"},"Credit card"),r.a.createElement("span",{className:"user__data"},a.credit)),r.a.createElement("button",{className:"user__btn--edit",type:"button",onClick:t},"Edit info"))},C=function(e){var a=e.user,t=e.editFormType,i=e.handleFormMessage,s=Object(n.useState)(),l=Object(c.a)(s,2),u=l[0],m=l[1],o=function(){m(!0)},d=function(){m(!1)},E=function(){m(!1)};return r.a.createElement(r.a.Fragment,null,u?r.a.createElement("li",{className:"user"},r.a.createElement(b,{user:a,handleSaveClick:d,handleCancelClick:E,handleFormMessage:i})):"main-form"===t?r.a.createElement(b,{isMainEditForm:!0,handleFormMessage:i}):r.a.createElement(S,{user:a||_,handleClick:o}))},N=[{id:"1",name:"Leanne",surname:"Bret",email:"Sincere@april.biz",phone:"+(38) 055-055-55-55",birthday:"19.11.1997",credit:"4149 4940 4940 4940"},{id:"2",name:"Ervin",surname:"Antonette",email:"Shanna@melissa.tv",phone:"+(38) 055-055-55-55",birthday:"19.11.1997",credit:"4149 4940 4940 4940"},{id:"3",name:"Clementine",surname:"Samantha",email:"Nathan@yesenia.net",phone:"+(38) 055-055-55-55",birthday:"19.11.1997",credit:"4149 4940 4940 4940"},{id:"4",name:"Patricia",surname:"Karianne",email:"Julianne.OConner@kory.org",phone:"+(38) 055-055-55-55",birthday:"19.11.1997",credit:"4149 4940 4940 4940"},{id:"5",name:"Chelsey",surname:"Kamren",email:"Lucio_Hettinger@annie.ca",phone:"+(38) 055-055-55-55",birthday:"19.11.1997",credit:"4149 4940 4940 4940"},{id:"6",name:"Dennis",surname:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info",phone:"+(38) 055-055-55-55",birthday:"19.11.1997",credit:"4149 4940 4940 4940"},{id:"7",name:"Kurtis",surname:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz",phone:"+(38) 055-055-55-55",birthday:"19.11.1997",credit:"4149 4940 4940 4940"},{id:"8",name:"Nicholas V",surname:"Maxime_Nienow",email:"Sherwood@rosamond.me",phone:"+(38) 055-055-55-55",birthday:"19.11.1997",credit:"4149 4940 4940 4940"},{id:"9",name:"Glenna",surname:"Delphine",email:"Chaim_McDermott@dana.io",phone:"+(38) 055-055-55-55",birthday:"19.11.1997",credit:"4149 4940 4940 4940"},{id:"10",name:"Clementina",surname:"Moriah.Stanton",email:"Rey.Padberg@karina.biz",phone:"+(38) 055-055-55-55",birthday:"19.11.1997",credit:"4149 4940 4940 4940"}],O=(t(217),function(e){var a=e.input,t=e.onChange;return r.a.createElement("div",{className:"filter"},r.a.createElement("input",{className:"filter__input",key:"key123",value:a,placeholder:"Search user name",onChange:function(e){return t(e.target.value)}}))}),T=t(239),y=function(e,a){var t=Object(n.useState)(1),r=Object(c.a)(t,2),i=r[0],s=r[1],l=Math.ceil(e.length/a);return{next:function(){s((function(e){return Math.min(e+1,l)}))},prev:function(){s((function(e){return Math.max(e-1,1)}))},jump:function(e){var a=Math.max(1,e);s(Math.min(a,l))},currentData:function(){var t=(i-1)*a,n=t+a;return e.slice(t,n)},currentPage:i,maxPage:l}},g=(t(218),{text:"",isSuccess:void 0}),P=function(){var e=Object(n.useState)(""),a=Object(c.a)(e,2),t=a[0],i=a[1],s=Object(n.useState)([]),u=Object(c.a)(s,2),m=u[0],o=u[1],d=Object(n.useState)([]),_=Object(c.a)(d,2),E=_[0],h=_[1],p=Object(n.useState)(1),f=Object(c.a)(p,2),b=f[0],S=f[1],P=Object(n.useState)(g),D=Object(c.a)(P,2),j=D[0],A=D[1],K=Math.ceil(E.length/6),x=y(E,6),M=function(e){var a=e.text,t=e.isSuccess;return A({text:a,isSuccess:t})};return Object(n.useEffect)((function(){v.on("value",(function(e){if(e.exists()){var a=e.val(),t=[];a&&Object.keys(a).forEach((function(e){t.push(Object(l.a)(Object(l.a)({},a[e]),{},{id:e}))})),h(t),o(t)}else h(N),o(N)}),(function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){(null===j||void 0===j?void 0:j.isSuccess)&&A(g)}),3e3);return function(){clearTimeout(e)}}),[j]),r.a.createElement("main",null,r.a.createElement(O,{input:t,onChange:function(e){var a=null===m||void 0===m?void 0:m.filter((function(a){return a.name.toLowerCase().includes(e.toLowerCase())}));i(e),h(a)}}),r.a.createElement(C,{handleFormMessage:M,editFormType:"main-form"}),(null===j||void 0===j?void 0:j.text)&&r.a.createElement("span",{className:"message ".concat(j.isSuccess?"message--success":"message--error")},j.text),r.a.createElement("ul",{className:"list"},null===x||void 0===x?void 0:x.currentData().map((function(e){return r.a.createElement(C,{key:e.id,user:e,handleFormMessage:M})}))),r.a.createElement(T.a,{count:K,size:"large",page:b,variant:"outlined",shape:"rounded",onChange:function(e,a){return S(a),null===x||void 0===x?void 0:x.jump(a)},className:"pagination"}))},D=(t(221),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h2",null,"User List"))}),j=(t(222),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("p",{className:"footer__text"},"\xa9 2021 by Anna Tsukanova"))}),A=(t(223),function(){return r.a.createElement("div",{className:"App"},r.a.createElement(D,null),r.a.createElement(P,null),r.a.createElement(j,null))});s.a.render(r.a.createElement(A,null),document.getElementById("root"))},79:function(e,a,t){},93:function(e,a,t){e.exports=t(224)},98:function(e,a,t){}},[[93,1,2]]]);
//# sourceMappingURL=main.208b2131.chunk.js.map