"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[277],{6376:function(t,n,e){e.d(n,{Hx:function(){return d},Pv:function(){return p},S1:function(){return i},gQ:function(){return f},uV:function(){return h}});var r=e(5861),a=e(4687),c=e.n(a),u=e(4569),o=e.n(u);o().defaults.baseURL="https://api.themoviedb.org/3/";var s="7618f77ef746f0154def67b21921ec43",i=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/trending/movie/week?api_key=".concat(s,"&page=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URLSearchParams({language:"en-US",page:e,include_adult:!1}),t.next=3,o().get("/search/movie?api_key=".concat(s,"&query=").concat(n,"&").concat(r));case 3:return a=t.sent,t.abrupt("return",a.data);case 5:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/movie/".concat(n,"?api_key=").concat(s));case 2:if(404!==(e=t.sent).status){t.next=5;break}throw new Error(e.status);case 5:return t.abrupt("return",e.data);case 7:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/movie/".concat(n,"/credits?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o().get("/movie/".concat(n,"/reviews?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},9329:function(t,n,e){e.r(n),e.d(n,{default:function(){return _}});var r,a,c,u,o=e(5861),s=e(885),i=e(4687),p=e.n(i),f=e(6871),h=e(2791),d=e(6376),l=e(168),v=e(1223),g=v.Z.img(r||(r=(0,l.Z)(["\n    width: 150px;\n    height: 200px;\n    padding-top: 10px;\n"]))),m=v.Z.li(a||(a=(0,l.Z)(["\n    list-style: none;\n    border-bottom: 1px solid gray;\n"]))),x=v.Z.p(c||(c=(0,l.Z)(["\n    font-weight: 600;\n"]))),w=v.Z.p(u||(u=(0,l.Z)(["\n    padding-bottom: 10px;\n    margin-bottom: 0;\n"]))),b=e(184),k=function(t){var n,e=t.actor;return n=e.profile_path?"https://image.tmdb.org/t/p/w500".concat(e.profile_path):"https://hope.be/wp-content/uploads/2015/05/no-user-image.gif",(0,b.jsxs)(m,{children:[(0,b.jsx)(g,{src:n,alt:e.name,loading:"lazy",onerror:"onerror=null;src='https://hope.be/wp-content/uploads/2015/05/no-user-image.gif'"}),(0,b.jsx)(x,{children:e.name}),(0,b.jsxs)(w,{children:["Character: ",e.character]})]})},_=function(){var t=(0,f.UO)().movieId,n=(0,h.useState)([]),e=(0,s.Z)(n,2),r=e[0],a=e[1],c=(0,h.useState)(""),u=(0,s.Z)(c,2),i=u[0],l=u[1];return(0,h.useEffect)((function(){function n(){return(n=(0,o.Z)(p().mark((function n(){var e;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.uV)(t);case 3:e=n.sent,a(e.cast),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),l(n.t0);case 10:case 11:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[t]),(0,b.jsxs)("ul",{children:[i&&(0,b.jsx)("p",{children:i.message}),r.map((function(t){return(0,b.jsx)(k,{actor:t},t.credit_id)}))]})}}}]);
//# sourceMappingURL=cast.ede5bcf1.chunk.js.map