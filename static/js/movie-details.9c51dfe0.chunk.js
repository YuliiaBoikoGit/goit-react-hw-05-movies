"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[321],{6376:function(e,t,n){n.d(t,{Hx:function(){return v},Pv:function(){return p},S1:function(){return o},gQ:function(){return f},uV:function(){return h}});var r=n(5861),a=n(4687),c=n.n(a),s=n(4569),u=n.n(s);u().defaults.baseURL="https://api.themoviedb.org/3/";var i="7618f77ef746f0154def67b21921ec43",o=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/trending/movie/week?api_key=".concat(i,"&page=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=new URLSearchParams({language:"en-US",page:n,include_adult:!1}),e.next=3,u().get("/search/movie?api_key=".concat(i,"&query=").concat(t,"&").concat(r));case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8875:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(5861),a=n(885),c=n(4687),s=n.n(c),u=n(6871),i=n(2791),o=n(6376),p=n(3504),f=n(7577),h=n(184),v=function(e){var t,n=e.movie,r="No date",a=0,c=[];return t=n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):"https://bflix.biz/no-poster.png",n.release_date&&""!==n.release_date&&(r=n.release_date.slice(0,4)),n.vote_average&&(a=(10*n.vote_average).toFixed(1)+"%"),n.genres&&0!==n.genres.length&&(c=n.genres),(0,h.jsxs)("main",{children:[(0,h.jsx)("button",{type:"button",children:"Go back"}),(0,h.jsx)("img",{src:t,alt:n.title}),(0,h.jsxs)("h2",{children:[n.title," (",r,")"]}),(0,h.jsxs)("p",{children:["User score: ",a]}),(0,h.jsx)("h3",{children:"Overview"}),(0,h.jsx)("p",{children:n.overview}),(0,h.jsx)("h3",{children:"Genres"}),(0,h.jsx)("p",{children:c.map((function(e){return e.name})).join(", ")}),(0,h.jsx)("hr",{}),(0,h.jsxs)("ul",{children:[(0,h.jsx)("li",{children:(0,h.jsx)(p.rU,{to:"cast",children:"Cast"})}),(0,h.jsx)("li",{children:(0,h.jsx)(p.rU,{to:"reviews",children:"Reviews"})})]}),(0,h.jsx)(i.Suspense,{fallback:(0,h.jsx)(f.w,{}),children:(0,h.jsx)(u.j3,{})})]})},d=function(){var e=(0,u.UO)().movieId,t=(0,i.useState)(""),n=(0,a.Z)(t,2),c=n[0],p=n[1];return(0,i.useEffect)((function(){function t(){return t=(0,r.Z)(s().mark((function t(){var n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,o.gQ)(e);case 2:n=t.sent,p(n);case 4:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),(0,h.jsx)("main",{children:(0,h.jsx)(v,{movie:c})})}}}]);
//# sourceMappingURL=movie-details.9c51dfe0.chunk.js.map