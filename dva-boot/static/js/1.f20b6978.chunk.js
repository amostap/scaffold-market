webpackJsonp([1],{324:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(335),s=r(327);t.default=Object(n.a)({namespace:"userInfo",state:{info:{},pageData:s.a.create()},effects:{},reducers:{}})},326:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return c});var s=r(52),a=r.n(s),i=r(327),u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=function(){function e(){n(this,e),this.pageNum=1,this.pageSize=10,this.size=0,this.total=0,this.totalPages=0,this.list=[],this.filters={},this.sorts={},this.reasonable=!1}return u(e,[{key:"startPage",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return this.pageNum=e,this.pageSize=t,this}},{key:"jumpPage",value:function(e,t){return e&&e<=this.totalPages&&(this.pageNum=e,t&&(this.pageSize=t)),this}},{key:"filter",value:function(e,t){return a.a.isObject(e)&&(this.filters=t?Object.assign({},this.filters,e):e),this}},{key:"sortBy",value:function(e){return a.a.isObject(e)&&(this.sorts=e),this}},{key:"nextPage",value:function(e){return-1!==this.totalPages?e&&e<=this.totalPages?this.pageNum=e:this.pageNum+1<=this.totalPages&&this.pageNum++:this.pageNum=this.totalPages,this}},{key:"prevPage",value:function(){return-1!==this.totalPages?this.pageNum-1>0&&this.pageNum--:this.pageNum=1,this}},{key:"send",value:function(e,t){var r=this,n=this.pageNum,s=this.pageSize,u=this.filters,c=this.sorts,o={pageNum:n,pageSize:s,filters:u,sorts:c};return a.a.isFunction(i.a.requestFormat)&&(o=i.a.requestFormat(this)),a.a.send(e,Object.assign({data:o},t)).then(function(e){if(a.a.isFunction(i.a.responseFormat)){var t=i.a.responseFormat(e);return Object.assign(r,t)}})}}]),e}()},327:function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r.d(t,"a",function(){return o});var s,a,i=r(326),u=r(142),c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=(a=s=function(){function e(){n(this,e)}return c(e,null,[{key:"requestFormat",value:function(e){return u.a.pageHelper.requestFormat(e)}},{key:"responseFormat",value:function(e){return u.a.pageHelper.responseFormat(e)}}]),e}(),s.create=function(){return new i.a},a)},335:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){function n(s,a){try{var i=t[s](a),u=i.value}catch(e){return void r(e)}if(!i.done)return Promise.resolve(u).then(function(e){n("next",e)},function(e){n("throw",e)});e(u)}return n("next")})}}var i=r(81),u=r.n(i),c=r(52),o=r.n(c),f=r(326),l=r(142),p=function(){var e=a(u.a.mark(function e(t){var r,n,a,i;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&t.url){e.next=2;break}throw new Error("payload require contains url opt");case 2:if(r=t.url,n=t.pageInfo,a=s(t,["url","pageInfo"]),i=Object.assign({},a),!(n&&n instanceof f.a)){e.next=8;break}return e.abrupt("return",n.send(r,i));case 8:return e.abrupt("return",c.request.send(r,i));case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),h={namespace:o.a.randomStr(4),enhance:!0,state:{},effects:{},reducers:{}};t.a=function(e){var t,r=Object.assign({},h,e),a=r.namespace,i=r.state,c=r.subscriptions,f=r.effects,g=r.reducers;return r.enhance?{namespace:a,state:i,subscriptions:c,effects:Object.assign({},f,n({},"@request",u.a.mark(function e(t,r){var n,a,i,c,f,h,g,b,v=t.payload,y=t.success,m=t.error,d=r.call,k=r.put;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=[],o.a.isObject(v)?n.push(v):o.a.isArray(v)&&(n=v),a={success:{},error:{}},i=0;case 5:if(!(i<n.length)){e.next=14;break}return c=n[i],f=c.valueField,h=c.notice,g=s(c,["valueField","notice"]),e.next=9,d(p,g);case 9:b=e.sent,l.a.request.checkResponse(b)?(h&&l.a.notice.success(!0===h?"\u64cd\u4f5c\u6210\u529f":h[0],"success"),a.success[f||"_@fake_"]=b):(h&&l.a.notice.error(!0===h?"\u64cd\u4f5c\u5931\u8d25":h[1],"error"),a.error[f||"_@fake_"]=b);case 11:i++,e.next=5;break;case 14:if(0===Object.keys(a.error).length&&o.a.isFunction(y)&&y(a.success),0!==Object.keys(a.error).length&&o.a.isFunction(m)&&m(a.error),!Object.keys(a.success).length){e.next=19;break}return e.next=19,k({type:"@request_success",payload:a.success});case 19:if(!Object.keys(a.error).length){e.next=22;break}return e.next=22,k({type:"@request_error",payload:a.error});case 22:case"end":return e.stop()}},e,this)}))),reducers:Object.assign({},g,(t={},n(t,"@request_success",function(e,t){var r=t.payload;return Object.assign({},e,r)}),n(t,"@request_error",function(e,t){var r=t.payload;return Object.assign({},e,r)}),t))}:{namespace:a,state:i,subscriptions:c,effects:f,reducers:g}}}});
//# sourceMappingURL=1.f20b6978.chunk.js.map