(this["webpackJsonpplanetary-nasa-project"]=this["webpackJsonpplanetary-nasa-project"]||[]).push([[0],{123:function(e,t,a){e.exports=a(215)},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},215:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),o=(a(128),a(129),a(116)),i=a(12),s=a(14);a(130);var u=function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(s.a)(l,2),i=o[0],u=o[1];return Object(n.useEffect)((function(){u({show:a?"show":""})}),[a]),r.a.createElement("nav",{className:"navbar navbar-expand-md bg-dark navbar-dark"},r.a.createElement("a",{className:"navbar-brand",href:"/"},"Nasa Planetory"),r.a.createElement("button",{className:"navbar-toggler",type:"button",onClick:function(){c({menu:!a})}},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse navbarCustomize "+i},r.a.createElement("div",{className:"navbar-nav"},r.a.createElement("a",{className:"nav-item nav-link ",href:"/favoritePictures"},"Favorite Pictures"))))},m=a(40),d=a.n(m),E=a(75),f=a(37),v=a(19),p=a(52),b=a.n(p),O=a(110),h=a.n(O),g=(a(133),a(43)),S=a.n(g),P=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_NASA_API_KEY,_=function(e){return S.a.get("https://api.nasa.gov/planetary/apod?api_key=".concat(P,"&date=").concat(e,"&hd=true")).then((function(e){return console.log(e),Promise.resolve(e)})).catch((function(e){console.log(e)}))},j=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_NASA_API_KEY,y=function(e){return S.a.get("https://api.nasa.gov/planetary/apod?api_key=".concat(j,"&date=").concat(e,"&hd=true")).then((function(e){return console.log(e),e.data})).catch((function(e){return console.log(e),Promise.reject("Date must be between Jun 16, 1995 and Jun 25, 2020.",e)}))},T=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_NASA_API_KEY,D=function(e){return S.a.get("https://api.nasa.gov/planetary/apod?api_key=".concat(T,"&date=").concat(e,"&hd=true")).then((function(e){return console.log(e),Promise.resolve(e.data)})).catch((function(e){return console.log(e),Promise.reject("Date must be between Jun 16, 1995 and Jun 25, 2020.",e)}))},C=a(109),N=a.n(C),w=a(237),x=a(107),A=a(118),Y=a(35),I=a(30),k=a.n(I);var R=function(e){var t=Object(Y.c)((function(e){return e.astronomy.favoritePictures})),a=Object(n.useState)([]),c=Object(s.a)(a,2),l=(c[0],c[1]),o=Object(n.useState)(!1),i=Object(s.a)(o,2),u=i[0],m=i[1],d=Object(Y.b)();return Object(n.useEffect)((function(){}),[]),r.a.createElement(A.a,{overlay:r.a.createElement(x.a,{id:"tooltip-left"},r.a.createElement("strong",null,"Click here to save Picture"),".")},r.a.createElement(w.a,{onClick:function(){var a=JSON.parse(localStorage.getItem("favoritePictures")||"[]");m(function(e){console.log("picture",e);var a=t.includes(e);return console.log("index",a),a}(e)),!1===u?(a.push(e),l(e),localStorage.setItem("favoritePictures",JSON.stringify(a)),d({type:"SAVE_PICTURE",pictureData:e}),k.a.fire("this images was saving in favorite pictures")):(k.a.fire("this images existe in favorite pictures"),console.log("this images existe in favorite pictures"))}},r.a.createElement(N.a,{style:{color:"#ff0000"}})))};var B=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),i=o[0],u=o[1],m=Object(n.useState)([]),p=Object(s.a)(m,2),O=p[0],g=p[1],S=Object(n.useState)(new Date),P=Object(s.a)(S,2),j=P[0],T=(P[1],Object(n.useState)(new Date)),C=Object(s.a)(T,2),N=C[0],w=C[1],x=Object(n.useState)(!1),A=Object(s.a)(x,2),Y=A[0],I=A[1],k=Object(n.useState)(!1),B=Object(s.a)(k,2);function L(e){return U.apply(this,arguments)}function U(){return(U=Object(E.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:a=e.sent,console.log(a.data),c(a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return J.apply(this,arguments)}function J(){return(J=Object(E.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=b()(t).subtract(1,"days").format("YYYY-MM-DD"),e.next=3,y(a);case 3:n=e.sent,u(n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(e){return M.apply(this,arguments)}function M(){return(M=Object(E.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=b()(t).add(1,"days").format("YYYY-MM-DD"),e.next=4,D(a);case 4:if("undefined"!==typeof e.sent){e.next=10;break}g([]),I(!1),e.next=15;break;case 10:return e.next=12,D(a);case 12:n=e.sent,g(n),I(!0);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.warn(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}return B[0],B[1],Object(n.useEffect)((function(){var e=b()(j).format("YYYY-MM-DD");L(e),W(e),K(e)}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row title",style:{marginBottom:"20px"}},r.a.createElement("div",{className:"container mb-2 mt-4 text-center"},r.a.createElement("h2",null,"Astronomy Picture of the Day")),r.a.createElement("div",{className:"container mb-4"},r.a.createElement(v.a,null,r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Text,null,"Select date and display Astronomy Picture of the Day"),r.a.createElement(h.a,{selected:N,onChange:function(e){return function(e){console.log("handleDatepickerChange"+e),console.log(b()(e).format("YYYY-MM-DD"));var t=b()(e).format("YYYY-MM-DD");e>j&&console.log("no puedes ingresar fechas despues del"+j),w(e),L(t),K(t),W(t)}(e)},maxDate:j,minTime:new Date("Jun 16, 1995")})))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(f.a,null,r.a.createElement(f.a.Item,null,r.a.createElement("img",{className:"rounded mx-auto d-block w-100",src:i.url,alt:"First slide"}),r.a.createElement(f.a.Caption,null,r.a.createElement("h3",null,i.title),r.a.createElement("p",null,r.a.createElement("small",null,i.explanation)),r.a.createElement("p",null,r.a.createElement("small",null,i.date)),r.a.createElement(R,i))),r.a.createElement(f.a.Item,null,r.a.createElement("img",{className:"rounded mx-auto d-block w-100",src:a.hdurl,alt:"Second slide"}),r.a.createElement(f.a.Caption,null,r.a.createElement("h3",null,a.title),r.a.createElement("p",null,r.a.createElement("small",null,a.explanation)),r.a.createElement("p",null,r.a.createElement("small",null,a.date)),r.a.createElement(R,a))),Y&&r.a.createElement(f.a.Item,null,r.a.createElement("img",{className:"rounded mx-auto d-block w-100",src:O.url,alt:"Third slide"}),r.a.createElement(f.a.Caption,null,r.a.createElement("h3",null,O.title),r.a.createElement("p",null,r.a.createElement("small",null,O.explanation)),r.a.createElement("p",null,r.a.createElement("small",null,O.date)),r.a.createElement(R,O))))))))},L=a(114),U=a(115),W=a.n(U),J=a(113);var K=function(){var e=Object(Y.b)(),t=Object(Y.c)((function(e){return e.astronomy.favoritePictures})),a=Object(n.useState)(!1),c=Object(s.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){var t=JSON.parse(localStorage.getItem("favoritePictures")||"[]");t.length>0?o(!0):o(!1),e({type:"SAVE_LIST_FAVORITE_PICTURES",favoritePicturesList:t})}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row title",style:{marginBottom:"20px"}},r.a.createElement("div",{className:"container mb-2 mt-4 text-center"},r.a.createElement("h2",null,"Favorite Astronomy Pictures")),r.a.createElement("div",{className:"container mb-4"},r.a.createElement(v.a,null,r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Text,null,"Would you like to delete all your favorite pituctures?"),r.a.createElement(J.a,{variant:"danger",onClick:function(){!0===l?k.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(t){t.value&&(localStorage.setItem("favoritePictures",JSON.stringify([])),e({type:"DELETE_ALL_PICTURES"}),o(!1),k.a.fire("Deleted!","Your file has been deleted.","success"))})):k.a.fire("You don not have favorite pictures to delete")}},"Delete")))),r.a.createElement("div",{className:"container-fluid"},r.a.createElement(L.a,null,t.map((function(a,n){return r.a.createElement("div",{key:n},r.a.createElement(v.a,{style:{width:"18rem"}},r.a.createElement(v.a.Img,{className:"img-thumbnail",variant:"top",src:a.hdurl}),r.a.createElement(v.a.Body,null,r.a.createElement(v.a.Title,null,a.title),r.a.createElement(v.a.Footer,null,r.a.createElement("small",{className:"text-muted"},r.a.createElement(w.a,{onClick:function(){return n=a,void k.a.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then((function(a){if(a.value){var r=t.indexOf(n);r>-1&&t.splice(r,1),e({type:"DELETE_PICTURE",data:n}),localStorage.setItem("favoritePictures",JSON.stringify(t)),k.a.fire("Deleted!","Your file has been deleted.","success")}}));var n}},r.a.createElement(W.a,null)))))))})))),r.a.createElement("div",{className:"container-fluid"}))))};var M=function(){return r.a.createElement(o.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(u,null)),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:B}),r.a.createElement(i.a,{exact:!0,path:"/favoritePictures",component:K}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(214);var V=a(32),F=a(117),H=a(119),z=a(59),$={favoritePictures:[]},q=Object(V.combineReducers)({astronomy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_LIST_FAVORITE_PICTURES":var a=t.favoritePicturesList;return Object(z.a)({},e,{favoritePictures:e.favoritePictures.concat(a)});case"SAVE_PICTURE":var n=t.pictureData;return Object(z.a)({},e,{favoritePictures:e.favoritePictures.concat(n)});case"DELETE_PICTURE":var r=t.data,c=Object.values(e.favoritePictures),l=Object(H.a)(c),o=l.findIndex((function(e){return r===e})),i=l.filter((function(e,t){return t!==o}));return Object(z.a)({},e,{favoritePictures:i});case"DELETE_ALL_PICTURES":return Object(z.a)({},e,{favoritePictures:[]});default:return e}}}),G=Object(V.createStore)(q,Object(F.composeWithDevTools)(Object(V.applyMiddleware)()));l.a.render(r.a.createElement(Y.a,{store:G},r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[123,1,2]]]);
//# sourceMappingURL=main.019c79d5.chunk.js.map