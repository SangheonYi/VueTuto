(function(t){function e(e){for(var c,r,s=e[0],i=e[1],l=e[2],d=0,b=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&b.push(o[r][0]),o[r]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(t[c]=i[c]);u&&u(e);while(b.length)b.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],c=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(c=!1)}c&&(a.splice(e--,1),t=r(r.s=n[0]))}return t}var c={},o={app:0},a=[];function r(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=c,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)r.d(n,c,function(e){return t[e]}.bind(null,c));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/VueTuto/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"075b":function(t,e,n){t.exports=n.p+"img/이상헌.5c7bf297.jpg"},"0cba":function(t,e,n){t.exports=n.p+"img/phone_in_talk_black_24dp.345a1ab4.svg"},"0e01":function(t,e,n){t.exports=n.p+"img/mail_outline_black_24dp.e693dd11.svg"},"149c":function(t,e,n){t.exports=n.p+"img/React-icon.05a3e30f.svg"},"158b":function(t,e,n){t.exports=n.p+"img/nestjs-icon.88c0e79f.svg"},1818:function(t,e,n){t.exports=n.p+"img/sayiocr_fb.2c72b55b.jpg"},"1acf":function(t,e,n){},2642:function(t,e,n){t.exports=n.p+"img/JavaScript.dd60b11e.svg"},"2a30":function(t,e,n){"use strict";n("9487")},"4d99":function(t,e,n){t.exports=n.p+"img/postgresql.d7c985e7.svg"},"4e3b":function(t,e,n){t.exports=n.p+"img/ISO_C++_Logo.8cc47c68.svg"},"546e":function(t,e,n){"use strict";n("8091")},"54ec":function(t,e,n){t.exports=n.p+"img/Android_robot.9178ad6e.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),o={class:"app-container"};function a(t,e,n,a,r,s){var i=Object(c["x"])("Navigation"),l=Object(c["x"])("router-view"),u=Object(c["x"])("TopButton");return Object(c["q"])(),Object(c["e"])("div",o,[Object(c["h"])(i,{class:"MaterialShadow"}),Object(c["h"])(c["b"],{appear:"",name:"slide-fade"},{default:Object(c["C"])((function(){return[Object(c["h"])(l)]})),_:1}),Object(c["h"])(u)])}var r=Object(c["D"])("data-v-6e28d6ba");Object(c["t"])("data-v-6e28d6ba");var s={class:"nav-container"},i={class:"navigation "},l=Object(c["h"])("span",{class:"under-line"},null,-1),u=Object(c["g"])(" Home. "),d=Object(c["h"])("span",{class:"under-line"},null,-1);Object(c["r"])();var b=r((function(t,e,n,o,a,b){var p=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["e"])("div",s,[Object(c["h"])("nav",i,[Object(c["h"])("ul",null,[Object(c["h"])("li",null,[Object(c["h"])("div",null,[Object(c["h"])(p,{to:a.base_url,class:"Home"},{default:r((function(){return[l,u]})),_:1},8,["to"])])]),(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(a.menus,(function(t){return Object(c["q"])(),Object(c["e"])("li",{key:t},[Object(c["h"])("div",null,[Object(c["h"])(p,{to:a.base_url+t,class:t},{default:r((function(){return[d,Object(c["g"])(" "+Object(c["z"])(t)+". ",1)]})),_:2},1032,["to","class"])])])})),128))])])])})),p=n("b047"),f=n.n(p),j="/VueTuto/",g={name:"Navigation",data:function(){return{menus:["About","Contact","Skill","Project"],base_url:j}},props:{},components:{},methods:{widenNavigationBar:function(){var t=document.querySelector(".nav-container"),e="WidenBar";window.scrollY>50?t.classList.add(e):window.scrollY<50&&t.classList.remove(e)}},mounted:function(){this.handleDebouncedScroll=f()(this.widenNavigationBar,50),window.addEventListener("scroll",this.handleDebouncedScroll)},beforeUnmount:function(){window.removeEventListener("scroll",this.handleDebouncedScroll)}};n("2a30");g.render=b,g.__scopeId="data-v-6e28d6ba";var v=g,h=Object(c["D"])("data-v-45f8b20e");Object(c["t"])("data-v-45f8b20e");var O=Object(c["g"])(" Top "),m=Object(c["h"])("div",{class:"triangle-button"},null,-1);Object(c["r"])();var _=h((function(t,e,n,o,a,r){return Object(c["q"])(),Object(c["e"])("div",{class:"TopButton MaterialCard",onClick:e[1]||(e[1]=function(){return r.goTop&&r.goTop.apply(r,arguments)}),onScrollPassive:e[2]||(e[2]=function(){return r.showTopButton&&r.showTopButton.apply(r,arguments)})},[O,m],32)})),w={name:"TopButton",methods:{goTop:function(){window.scrollTo({top:0,behavior:"smooth"})},showTopButton:function(){var t=document.querySelector(".TopButton"),e="ShowTopButton";window.scrollY>100?t.classList.add(e):window.scrollY<100&&t.classList.remove(e)}},mounted:function(){this.handleDebouncedScroll=f()(this.showTopButton,50),window.addEventListener("scroll",this.handleDebouncedScroll)},beforeUnmount:function(){window.removeEventListener("scroll",this.handleDebouncedScroll)}};n("f355");w.render=_,w.__scopeId="data-v-45f8b20e";var y=w,k={name:"App",data:function(){return{}},components:{Navigation:v,TopButton:y}};n("af00");k.render=a;var x=k,S=n("6c02"),T={class:"Home-container"},C={class:"about-contact-container"};function q(t,e,n,o,a,r){var s=Object(c["x"])("About"),i=Object(c["x"])("Contact"),l=Object(c["x"])("Skill"),u=Object(c["x"])("Project"),d=Object(c["x"])("TopButton");return Object(c["q"])(),Object(c["e"])("div",T,[Object(c["h"])("div",C,[Object(c["h"])(s,{class:"home-about"}),Object(c["h"])(i,{class:"home-contact"})]),Object(c["h"])(l),Object(c["h"])(u),Object(c["h"])(d)])}var P=n("075b"),L=n.n(P),D=Object(c["D"])("data-v-857ed320");Object(c["t"])("data-v-857ed320");var I={class:"about MaterialCard"},B=Object(c["h"])("img",{class:"about-img ",src:L.a},null,-1),M=Object(c["h"])("div",{class:"about-content"},[Object(c["h"])("div",{class:"section-title "},[Object(c["h"])("h2",null," Who am I? ")]),Object(c["h"])("div",{class:"partition"},[Object(c["h"])("span",{class:"dark-green-under-line"}),Object(c["h"])("span",{class:"green-under-line"}),Object(c["h"])("span",{class:"light-green-under-line"}),Object(c["h"])("span",{class:"semi-dark-green-under-line"})]),Object(c["h"])("div",{class:"about-text"},[Object(c["h"])("h2",null," Sangheon Yi "),Object(c["h"])("h3",null,"Software Developer"),Object(c["h"])("p",null," 수학, 컴퓨터 공학 학사 학위 취득 후 교육 프로그램 42Seoul 공통 과정을 수료했습니다. 문제해결 과정에서 발생하는 다양한 어려움을 이겨내고 느끼는 성취감을 좋아합니다. 동료들과의 끊임 없는 소통이 특기입니다. ")])],-1);Object(c["r"])();var N=D((function(t,e,n,o,a,r){return Object(c["q"])(),Object(c["e"])("div",I,[B,M])})),E={name:"About",data:function(){return{}},props:{},components:{},methods:{}};n("c6a6");E.render=N,E.__scopeId="data-v-857ed320";var A=E,V={class:"MaterialCard skill-flex"},U={class:"skill-container "},Y=Object(c["f"])('<div class="section-title "><h2> My Programming Skills? </h2></div><div class="partition"><span class="dark-orange-under-line"></span><span class="orange-under-line"></span><span class="light-orange-under-line"></span><span class="semi-dark-orange-under-line"></span></div>',2),J={class:"contents-container"},z={class:"skill-card"};function R(t,e,o,a,r,s){return Object(c["q"])(),Object(c["e"])("div",V,[Object(c["h"])("div",U,[Y,Object(c["h"])("div",null,[Object(c["h"])("ul",J,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(r.skills,(function(t){return Object(c["q"])(),Object(c["e"])("li",{key:t},[Object(c["h"])("div",z,[Object(c["h"])("img",{class:"skill-image",src:n("d978")("./".concat(t)),onMouseenter:e[1]||(e[1]=function(t){return s.showDescription(t)})},null,40,["src"])])])})),128))])])])])}var H=["C_Programming_Language.svg","ISO_C++_Logo.svg","java.svg","Kotlin_Icon.svg","JavaScript.svg","Typescript_logo_2020.svg","Android_robot.svg","React-icon.svg","Vue.js_Logo_2.svg","nestjs-icon.svg","postgresql.svg","docker.svg"],F={name:"Skill",data:function(){return{skills:H}},methods:{showDescription:function(t){console.log(t.target.style.display)}}};n("ea9f");F.render=R;var K=F,W={class:"project-container"};function G(t,e,n,o,a,r){var s=Object(c["x"])("ProjectInfo");return Object(c["q"])(),Object(c["e"])("div",W,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(a.projects,(function(t){return Object(c["q"])(),Object(c["e"])(s,{key:t,project:t},null,8,["project"])})),128))])}n("b0c0"),n("a4d3"),n("e01a");var Q={class:"project project-content MaterialCard"},X={class:"contact-container"},Z={class:"section-title "},$=Object(c["f"])('<div class="partition"><span class="yellow-under-line"></span><span class="dark-yellow-under-line"></span><span class="light-yellow-under-line"></span><span class="deep-yellow-under-line"></span><span class="semi-dark-yellow-under-line"></span></div>',1),tt={class:"project-info"},et={class:"project-description"},nt=Object(c["g"])(" : "),ct={class:"project-image-container"};function ot(t,e,o,a,r,s){return Object(c["q"])(),Object(c["e"])("div",Q,[Object(c["h"])("div",X,[Object(c["h"])("div",Z,[Object(c["h"])("h2",null,Object(c["z"])(o.project.name)+".",1)]),$,Object(c["h"])("div",tt,[Object(c["h"])("div",et,[Object(c["h"])("div",null,Object(c["z"])(o.project.description),1),Object(c["h"])("img",{src:n("b97c")("./".concat(r.gitIcon))},null,8,["src"]),nt,Object(c["h"])("a",{class:"contact-a",href:o.project.git},Object(c["z"])(o.project.git),9,["href"])]),Object(c["h"])("div",ct,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(o.project.screenshot,(function(t){return Object(c["q"])(),Object(c["e"])("img",{key:t,src:n("f06c")("./".concat(t))},null,8,["src"])})),128))])])])])}var at="github.svg",rt={name:"ProjectInfo",props:{project:JSON},data:function(){return{gitIcon:at}}};n("dd3b");rt.render=ot;var st=rt,it=[{name:"sayiOCR",screenshot:["sayiocr_home.jpg"],description:"OCR과 TTS를 사용한 대량의 이미지를 한 번에 변환하고 읽어주는 안드로이드 앱입니다.",git:"https://github.com/SangheonYi/OCRTTS-for-android"},{name:"Bye blackhole",screenshot:["Lobby.jpg"],description:"웹 기반 Pong 게임 프로젝트입니다. 실시간 관람, 채팅, 랜덤 매칭 등의 기능이 있습니다.",git:"https://github.com/SangheonYi/bye_blackhole"},{name:"Mentta",screenshot:["menttang.gif"],description:"Browserquest 기반 메타버스 환경 프로젝트입니다.",git:"https://github.com/innohack2021/mentta"}],lt={name:"Project",data:function(){return{projects:it}},components:{ProjectInfo:st}};n("546e");lt.render=G;var ut=lt,dt={class:"contact MaterialCard"},bt={class:"contact-container"},pt=Object(c["f"])('<div class="section-title "><h2> Contact me! </h2></div><div class="partition"><span class="purple-under-line"></span><span class="dark-purple-under-line"></span><span class="light-purple-under-line"></span><span class="deep-purple-under-line"></span><span class="semi-dark-purple-under-line"></span></div>',2),ft={class:"contact-info"};function jt(t,e,n,o,a,r){var s=Object(c["x"])("ContactInfo");return Object(c["q"])(),Object(c["e"])("div",dt,[Object(c["h"])("div",bt,[pt,Object(c["h"])("ul",ft,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(a.contacts,(function(t){return Object(c["q"])(),Object(c["e"])("li",{class:"contact-content",key:t},[Object(c["h"])(s,{contact:t},null,8,["contact"])])})),128))])])])}n("99af");var gt={class:"contact-info-container"};function vt(t,e,o,a,r,s){return Object(c["q"])(),Object(c["e"])("div",gt,[Object(c["h"])("img",{src:n("b97c")("./".concat(o.contact.icon)),alt:o.contact.method},null,8,["src","alt"]),Object(c["h"])("div",null,[Object(c["h"])("strong",null,Object(c["z"])(o.contact.method)+" :",1),Object(c["h"])("ul",null,[Object(c["h"])("li",null,[Object(c["h"])("a",{class:"contact-a",href:"".concat(o.contact.href_method).concat(o.contact.contact)},Object(c["z"])(o.contact.contact),9,["href"])])])])])}var ht={name:"ContactInfo",props:{contact:JSON}};n("b1cc");ht.render=vt;var Ot=ht,mt=[{method:"Email",icon:"mail_outline_black_24dp.svg",contact:"yshgnu@naver.com",href_method:"mailto:"},{method:"Phone",icon:"phone_in_talk_black_24dp.svg",contact:"010-9298-3954",href_method:"tel:"},{method:"Github",icon:"github.svg",contact:"https://github.com/SangheonYi",href_method:""}],_t={name:"Contact",data:function(){return{contacts:mt}},components:{ContactInfo:Ot}};n("cd9a");_t.render=jt;var wt=_t,yt={name:"Home",data:function(){return{}},components:{About:A,Skill:K,Project:ut,Contact:wt}};n("c7b3");yt.render=q;var kt=yt,xt=[{path:"".concat("/VueTuto/"),name:"Home",component:kt},{path:"".concat("/VueTuto/","About"),name:"About",component:A},{path:"".concat("/VueTuto/","Skill"),name:"Skill",component:K},{path:"".concat("/VueTuto/","Project"),name:"Project",component:ut},{path:"".concat("/VueTuto/","Contact"),name:"Contact",component:wt}],St=Object(S["a"])({mode:history,routes:xt,history:Object(S["b"])()}),Tt=St,Ct=Object(c["d"])(x);Ct.use(Tt),Ct.mount("#app")},"5c6c2":function(t,e,n){t.exports=n.p+"img/Lobby.8035fcdd.jpg"},6885:function(t,e,n){t.exports=n.p+"img/Pong.6bccd5d0.jpg"},"6c49":function(t,e,n){t.exports=n.p+"img/Kotlin_Icon.fe42529a.svg"},"6d4d":function(t,e,n){},7253:function(t,e,n){},8091:function(t,e,n){},"898f":function(t,e,n){t.exports=n.p+"img/Vue.js_Logo_2.9a45fc76.svg"},9487:function(t,e,n){},"980a":function(t,e,n){t.exports=n.p+"img/menttang.eba73636.gif"},a1f7:function(t,e,n){},af00:function(t,e,n){"use strict";n("e838")},b174:function(t,e,n){},b1cc:function(t,e,n){"use strict";n("7253")},b60d:function(t,e,n){t.exports=n.p+"img/sayiocr_home.70cf5758.jpg"},b97c:function(t,e,n){var c={"./github.svg":"d410","./mail_outline_black_24dp.svg":"0e01","./phone_in_talk_black_24dp.svg":"0cba"};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}o.keys=function(){return Object.keys(c)},o.resolve=a,t.exports=o,o.id="b97c"},c3b9:function(t,e,n){t.exports=n.p+"img/docker.2e0fcd7b.svg"},c6a6:function(t,e,n){"use strict";n("6d4d")},c7b3:function(t,e,n){"use strict";n("b174")},cb50:function(t,e,n){t.exports=n.p+"img/C_Programming_Language.1a9824ea.svg"},cd9a:function(t,e,n){"use strict";n("1acf")},d2cb:function(t,e,n){},d410:function(t,e,n){t.exports=n.p+"img/github.0c93e717.svg"},d567:function(t,e,n){t.exports=n.p+"img/java.13a09653.svg"},d7d9:function(t,e,n){},d978:function(t,e,n){var c={"./Android_robot.svg":"54ec","./C_Programming_Language.svg":"cb50","./ISO_C++_Logo.svg":"4e3b","./JavaScript.svg":"2642","./Kotlin_Icon.svg":"6c49","./React-icon.svg":"149c","./Typescript_logo_2020.svg":"e9af","./Vue.js_Logo_2.svg":"898f","./docker.svg":"c3b9","./java.svg":"d567","./nestjs-icon.svg":"158b","./postgresql.svg":"4d99"};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}o.keys=function(){return Object.keys(c)},o.resolve=a,t.exports=o,o.id="d978"},dd3b:function(t,e,n){"use strict";n("a1f7")},e838:function(t,e,n){},e9af:function(t,e,n){t.exports=n.p+"img/Typescript_logo_2020.d5104695.svg"},ea9f:function(t,e,n){"use strict";n("d7d9")},f06c:function(t,e,n){var c={"./Lobby.jpg":"5c6c2","./Pong.jpg":"6885","./menttang.gif":"980a","./sayiocr_fb.jpg":"1818","./sayiocr_home.jpg":"b60d"};function o(t){var e=a(t);return n(e)}function a(t){if(!n.o(c,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return c[t]}o.keys=function(){return Object.keys(c)},o.resolve=a,t.exports=o,o.id="f06c"},f355:function(t,e,n){"use strict";n("d2cb")}});
//# sourceMappingURL=app.7e901754.js.map