(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{6376:function(n,t,e){"use strict";e.d(t,{Hx:function(){return d},Pv:function(){return s},S1:function(){return p},gQ:function(){return f},uV:function(){return x}});var r=e(5861),o=e(4687),i=e.n(o),a=e(4569),c=e.n(a);c().defaults.baseURL="https://api.themoviedb.org/3/";var u="7618f77ef746f0154def67b21921ec43",p=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/trending/movie/week?api_key=".concat(u,"&page=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(t,e){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=new URLSearchParams({language:"en-US",page:e,include_adult:!1}),n.next=3,c().get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&").concat(r));case 3:return o=n.sent,n.abrupt("return",o.data);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c().get("/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4866:function(n,t,e){"use strict";e.d(t,{s:function(){return c}});var r,o=e(168),i=e(1223).Z.button(r||(r=(0,o.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  :hover,\n  :focus {\n  background-color: #303f9f;\n  }\n"]))),a=e(184),c=function(n){var t=n.onClick;return(0,a.jsx)(i,{type:"button",onClick:t,children:"Load more"})}},3580:function(n,t,e){"use strict";e.d(t,{a:function(){return w}});var r,o,i,a,c,u=e(2007),p=e.n(u),s=e(168),f=e(1223),x=f.Z.ul(r||(r=(0,s.Z)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  padding: 20px 0;\n  list-style: none;\n  margin-top: 0;\n  margin-bottom: 10px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),d=e(6871),l=e(501),h=f.Z.li(o||(o=(0,s.Z)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n\n  :hover {\n    transform: scale(1.03);\n  }\n"]))),g=f.Z.img(i||(i=(0,s.Z)(["\n  width: 100%;\n  height: 440px;\n  object-fit: contain;\n"]))),m=f.Z.p(a||(a=(0,s.Z)(["\n  margin: 0;\n  padding: 35px 0;\n  text-align: center;\n  font-size: 20px;\n  font-weight: 600;\n  height: 24px;\n"]))),b=(0,f.Z)(l.rU)(c||(c=(0,s.Z)(["\n  text-decoration: none;\n  color: #000;\n"]))),v=e(184),y=function(n){var t,e=n.movie,r=(0,d.TH)();return t=e.poster_path?"https://image.tmdb.org/t/p/w500".concat(e.poster_path):"https://bflix.biz/no-poster.png",(0,v.jsx)(h,{children:(0,v.jsxs)(b,{to:"/movies/".concat(e.id),state:{from:r},children:[(0,v.jsx)(m,{children:e.title}),(0,v.jsx)(g,{src:t,alt:e.title})]})})},w=function(n){var t=n.movies;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(x,{children:t.map((function(n){return(0,v.jsx)(y,{movie:n},n.id)}))})})};x.propTypes={movies:p().arrayOf(p().shape({id:p().number.isRequired}))}},2991:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return T}});var r,o,i,a,c,u,p=e(2982),s=e(885),f=e(2791),x=e(501),d=e(7596),l=(e(5462),e(6376)),h=e(168),g=e(1223),m=g.Z.div(r||(r=(0,h.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #fff;\n"]))),b=g.Z.form(o||(o=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),v=g.Z.button(i||(i=(0,h.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://www.svgrepo.com/show/14071/search.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  :hover {\n  opacity: 1;\n}\n"]))),y=g.Z.span(a||(a=(0,h.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),w=g.Z.input(c||(c=(0,h.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  ::placeholder {\n  font: inherit;\n  font-size: 18px;\n}\n"]))),Z=g.Z.p(u||(u=(0,h.Z)(["\n  margin-right: auto;\n  margin-left: auto;\n  font-size: 24px;\n  color: gray;\n"]))),k=e(184),_=function(n){var t=n.onSubmit,e=(0,f.useState)(""),r=(0,s.Z)(e,2),o=r[0],i=r[1];return(0,k.jsx)(m,{children:(0,k.jsxs)(b,{onSubmit:function(n){n.preventDefault(),""!==o.trim()?(t(o),i("")):d.Am.warn("Enter your query")},children:[(0,k.jsx)(v,{type:"submit",children:(0,k.jsx)(y,{children:"Search"})}),(0,k.jsx)(w,{type:"text",name:"query",autocomplete:"off",autoFocus:!0,placeholder:"Search movies",value:o,onChange:function(n){i(n.currentTarget.value.toLowerCase())}})]})})},j=e(3580),S=e(4866),T=function(){var n=(0,x.lr)(),t=(0,s.Z)(n,2),e=t[0],r=t[1],o=(0,f.useState)(1),i=(0,s.Z)(o,2),a=i[0],c=i[1],u=(0,f.useState)([]),h=(0,s.Z)(u,2),g=h[0],m=h[1],b=(0,f.useState)(e.get("query")||""),v=(0,s.Z)(b,2),y=v[0],w=v[1],T=(0,f.useState)(""),z=(0,s.Z)(T,2),C=z[0],O=z[1];(0,f.useEffect)((function(){y&&(0,l.Pv)(y,a).then((function(n){if(0===n.total_results)throw new Error("Sorry, there are no movies matching your search query. Please try again.");if(0===n.results.length)return w(""),d.Am.error("We're sorry, but you've reached the end of search results.");r({query:y}),m((function(t){return[].concat((0,p.Z)(t),(0,p.Z)(n.results))}))})).catch((function(n){return O(n)}))}),[y,a,r]);return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(_,{onSubmit:function(n){w(n),c(1),m([]),O("")}}),C&&(0,k.jsx)(Z,{children:C.message}),(0,k.jsx)(j.a,{movies:g}),g.length>=20&&y&&(0,k.jsx)(S.s,{onClick:function(){c((function(n){return n+1}))}}),(0,k.jsx)(d.Ix,{position:"top-center"})]})}},888:function(n,t,e){"use strict";var r=e(9047);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,t,e,o,i,a){if(a!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return n}n.isRequired=n;var e={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:t,element:n,elementType:n,instanceOf:t,node:n,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return e.PropTypes=e,e}},2007:function(n,t,e){n.exports=e(888)()},9047:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=movies.361acc56.chunk.js.map