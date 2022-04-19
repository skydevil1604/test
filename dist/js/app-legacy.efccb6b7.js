(function(){"use strict";var t={5993:function(t,r,e){e(6992),e(8674),e(9601),e(7727);var n=e(9567),o=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",{attrs:{id:"app"}},[t.errored?e("section",[e("p",[t._v("We're sorry, we're not able to retrieve this information at the moment, please try back later")])]):e("section",[t.loading?e("div",[t._v("Loading...")]):e("div",[e("OrdersTable",{attrs:{orders:t.orders,couriers:t.couriers}})],1)])])},u=[],i=(e(1539),e(6166)),s=e.n(i),c=function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("div",[e("h1",[t._v("ORDERS")]),e("table",[e("thead",[e("tr",t._l(t.columns,(function(r){return e("th",{key:r.name,class:r===t.sort.column&&["sorted-by","sorted-"+(t.sort.reverse?"desc":"asc")],on:{click:function(e){return t.sortBy(r)}}},[t._v(t._s(r.title))])})),0)]),e("tbody",t._l(t.sortedItems,(function(r){return e("tr",{key:r.id},[e("td",[t._v(t._s(r.id))]),e("td",[t._v(t._s(r.user))]),e("td",[t._v(t._s(t._f("moment")(r.order_time,"hh:mm DD.MM.YYYY")))]),e("td",[t._v(t._s(r.amount))]),e("td",[t._v(t._s(r.courier_id))]),e("td",[t._v(t._s(r.status))]),e("td",[t._v(" ... ")])])})),0)]),e("ul",t._l(t.couriers,(function(r){return e("li",{key:r.id},[t._v(" "+t._s(r.id)+" "+t._s(r.name)+" ")])})),0)])},a=[],l=e(4479),f=(e(2707),e(8309),e(9826),e(2664)),d=e.n(f),m={name:"OrdersTable",props:{orders:{type:Array,default:function(){return[]}},couriers:{type:Array,default:function(){return[]}}},data:function(){return{columns:[{name:"id",title:"ID",type:"number"},{name:"user",title:"User",type:"string"},{name:"time",title:"Time",type:"time"},{name:"amount",title:"Amount",type:"number"},{name:"courier_id",title:"Courier ID",type:"number"},{name:"status",title:"Status",type:"string"}],sort:{column:null,reverse:!1},sortFuncs:{number:function(t,r){return t-r},string:function(t,r){return t.toLowerCase().localeCompare(r.toLowerCase())},time:function(t,r){return d()(r,"hh:mm DD.MM.YYYY")-d()(t,"hh:mm DD.MM.YYYY")}}}},computed:{sortedItems:function(){var t=this.orders,r=this.sort,e=r.column,n=r.reverse,o=e.name,u=this.sortFuncs[e.type];return u?(0,l.Z)(t).sort((function(t,r){return u(t[o],r[o])*(n?-1:1)})):t},courierName:function(){var t=this;return this.orders.find((function(r){return r.courier_id==t.couriers.id}))}},methods:{sortBy:function(t){var r=this.sort;this.sort={column:t,reverse:r.column===t^r.reverse}}},created:function(){this.sortBy(this.columns[0])}},v=m,p=e(1001),h=(0,p.Z)(v,c,a,!1,null,"724b3e00",null),_=h.exports,y={name:"App",components:{OrdersTable:_},data:function(){return{orders:null,couriers:null,loading:!0,errored:!1}},mounted:function(){var t=this;s().get("http://134.209.119.20:8123/orders").then((function(r){return t.orders=r.data.orders})).catch((function(r){console.log(r),t.errored=!0})).finally((function(){return t.loading=!1})),s().get("http://134.209.119.20:8123/couriers").then((function(r){return t.couriers=r.data.couriers}))}},b=y,g=(0,p.Z)(b,o,u,!1,null,null,null),O=g.exports;n.Z.config.productionTip=!1,n.Z.use(e(2664)),new n.Z({render:function(t){return t(O)}}).$mount("#app")}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var u=r[n]={exports:{}};return t[n].call(u.exports,u,u.exports,e),u.exports}e.m=t,function(){var t=[];e.O=function(r,n,o,u){if(!n){var i=1/0;for(l=0;l<t.length;l++){n=t[l][0],o=t[l][1],u=t[l][2];for(var s=!0,c=0;c<n.length;c++)(!1&u||i>=u)&&Object.keys(e.O).every((function(t){return e.O[t](n[c])}))?n.splice(c--,1):(s=!1,u<i&&(i=u));if(s){t.splice(l--,1);var a=o();void 0!==a&&(r=a)}}return r}u=u||0;for(var l=t.length;l>0&&t[l-1][2]>u;l--)t[l]=t[l-1];t[l]=[n,o,u]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,n){var o,u,i=n[0],s=n[1],c=n[2],a=0;if(i.some((function(r){return 0!==t[r]}))){for(o in s)e.o(s,o)&&(e.m[o]=s[o]);if(c)var l=c(e)}for(r&&r(n);a<i.length;a++)u=i[a],e.o(t,u)&&t[u]&&t[u][0](),t[u]=0;return e.O(l)},n=self["webpackChunkvue_test_task"]=self["webpackChunkvue_test_task"]||[];n.forEach(r.bind(null,0)),n.push=r.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(5993)}));n=e.O(n)})();
//# sourceMappingURL=app-legacy.efccb6b7.js.map