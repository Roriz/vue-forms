(function(e){function t(t){for(var r,o,u=t[0],s=t[1],c=t[2],l=0,f=[];l<u.length;l++)o=u[l],i[o]&&f.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},i={app:0},a=[];function u(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"bce3b6f5"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"b8c995de"}[e]+".css",i=s.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var c=a[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===i))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===r||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,delete o[e],p.parentNode.removeChild(p),n(a)},p.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=a);var c,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=u(e),c=function(t){f.onerror=f.onload=null,clearTimeout(p);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,n[1](a)}i[e]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:f})},12e4);f.onerror=f.onload=c,l.appendChild(f)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var p=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("vf-menu"),n("vf-header"),n("v-content",[n("v-container",{attrs:{fluid:""}},[n("router-view",{key:e.viewCid})],1)],1),n("vf-notify")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,value:e.menuVisible,fixed:"",app:""},on:{input:e.handleMenu}},[n("v-list",{attrs:{dense:""}},[n("v-list-tile",{attrs:{to:"/"}},[n("v-list-tile-action",[n("v-icon",[e._v("home")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Home")])],1)],1)],1),n("v-list",{attrs:{dense:""}},[n("v-list-tile",{attrs:{to:"/forms"}},[n("v-list-tile-action",[n("v-icon",[e._v("dns")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Froms")])],1)],1)],1)],1)},u=[],s={methods:{handleMenu:function(e){this.$store.commit("SET_MENU",e)}},computed:{menuVisible:function(){return this.$store.state.visibleMenu}}},c=s,l=n("2877"),f=Object(l["a"])(c,a,u,!1,null,null,null);f.options.__file="menu.vue";var p=f.exports,d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-toolbar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,color:"blue darken-3",dark:"",app:"",fixed:""}},[n("v-toolbar-title",{staticClass:"ml-0 pl-3",staticStyle:{width:"300px"}},[n("v-toolbar-side-icon",{on:{click:function(t){return t.stopPropagation(),e.toggleMenu(t)}}}),n("span",{staticClass:"hidden-sm-and-down"},[e._v("Vue Forms")])],1),n("v-spacer"),n("v-btn",{attrs:{icon:"",large:""}},[n("v-avatar",{attrs:{size:"32px",tile:""}},[n("img",{attrs:{src:"https://vuejs.org/images/logo.png",alt:"Vue"}})])],1)],1)},m=[],v={methods:{toggleMenu:function(){this.$store.commit("SET_MENU",!this.$store.state.visibleMenu)}}},h=v,b=Object(l["a"])(h,d,m,!1,null,null,null);b.options.__file="header.vue";var g=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-snackbar",{attrs:{color:e.color,timeout:e.timeout,top:""},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[e._v("\n  "+e._s(e.text)+"\n")])},y=[],x=(n("c5f6"),n("61da")),_={name:"vf-notify",props:{timeout:{type:Number,default:6e4}},data:function(){return{visible:!1,color:"",text:""}},mounted:function(){x["a"].$on("vf-notify",this.open)},methods:{open:function(e){var t=e.text,n=e.color;this.visible=!0,this.text=t,this.color=n}}},k=_,j=Object(l["a"])(k,w,y,!1,null,null,null);j.options.__file="notify.vue";var O=j.exports,E={components:{VfMenu:p,VfHeader:g,VfNotify:O},data:function(){return{viewCid:(new Date).getTime()}},mounted:function(){x["a"].$on("reloadPage",this.updateViewCid)},methods:{updateViewCid:function(){this.viewCid=(new Date).getTime()}}},T=E,M=Object(l["a"])(T,o,i,!1,null,null,null);M.options.__file="app.vue";var S=M.exports,R=n("8c4f");r["default"].use(R["a"]);var C=new R["a"]({routes:[{path:"/",name:"home",component:function(){return n.e("about").then(n.bind(null,"6511"))}},{path:"/forms",name:"formsList",component:function(){return n.e("about").then(n.bind(null,"cc7e"))}},{path:"/forms/create",name:"formsCreate",component:function(){return n.e("about").then(n.bind(null,"5f28"))}},{path:"/forms/edit/:id",name:"formsEdit",component:function(){return n.e("about").then(n.bind(null,"5f28"))}}]}),N=n("2f62"),$=(n("ac6a"),n("5df3"),n("96cf"),n("1da1")),P=n("be94"),A=n("bc3a"),D=n.n(A),V="http://private-anon-b0b60a164f-cargox.apiary-mock.com",F=function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=i.length>2&&void 0!==i[2]?i[2]:{},e.next=3,D()({method:t,url:n,params:r});case 3:return o=e.sent,e.abrupt("return",o.data);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),B={forms:{list:function(){return F("get","".concat(V,"/forms"))},get:function(e){return F("get","".concat(V,"/forms/").concat(e))},create:function(e){return F("post","".concat(V,"/forms"),e)},update:function(e,t){return F("patch","".concat(V,"/forms/").concat(e),t)},destroy:function(e){return F("delete","".concat(V,"/forms/").concat(e))}}},U=B,q={namespaced:!0,state:{list:[]},mutations:{ADD:function(e,t){e.list.push(t)},EDIT:function(e,t){var n=t.id,r=t.form;e.list=e.list.map(function(e){return e.id===n?Object(P["a"])({},e,r):e})},DESTROY:function(e,t){e.list=e.list.filter(function(e){return e.id!==t})}},actions:{persistForm:function(e,t){var n=e.state,r=e.commit,o=Object(P["a"])({id:n.list.length+1},t);return r("ADD",o),o},fetchBy:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(t){var n,r,o,i,a=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.dispatch,r=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,U.forms.list(r);case 4:return o=e.sent,e.next=7,Promise.all(o.map(function(e){return n("persistForm",e)}));case 7:return i=e.sent,e.abrupt("return",i);case 9:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),fetchOne:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,e.next=3,U.forms.get(n);case 3:return o=e.sent,e.next=6,r("persistForm",o);case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}(),create:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.dispatch,e.next=3,U.forms.create(n);case 3:return o=e.sent,e.next=6,r("persistForm",o);case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}(),edit:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,U.forms.update(n.id,n);case 3:return o=e.sent,i=r("EDIT",{id:n.id,response:o}),e.abrupt("return",i);case 6:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}(),destroy:function(){var e=Object($["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,e.next=3,U.forms.destroy(n);case 3:r("DESTROY",n);case 4:case"end":return e.stop()}},e,this)}));function t(t,n){return e.apply(this,arguments)}return t}()}};r["default"].use(N["a"]);var L=new N["a"].Store({modules:{forms:q},state:{visibleMenu:!0},mutations:{SET_MENU:function(e,t){e.visibleMenu=t}}}),H=n("ce5b"),I=n.n(H);n("bf40");r["default"].use(I.a);var J=n("9483");Object(J["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["default"].config.productionTip=!1,new r["default"]({router:C,store:L,render:function(e){return e(S)}}).$mount("#app")},"61da":function(e,t,n){"use strict";var r=n("2b0e");t["a"]=new r["default"]}});
//# sourceMappingURL=app.9c6c56cb.js.map