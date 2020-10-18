(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{112:function(e,t,r){},113:function(e,t,r){},163:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return o})),r.d(t,"mutations",(function(){return f})),r.d(t,"actions",(function(){return m}));r(29),r(15);var n=r(3),c=r(14),o=function(){return{items:[]}},f=Object(c.e)(o,{SET_ITEMS:function(e,t){e.items=t}}),m=Object(c.a)({state:o},{getItems:function(e){var t=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,c=t.app.context.$userbase,r.next=4,c.openDatabase({databaseName:"contacts",changeHandler:function(e){return n("SET_ITEMS",e)}});case 4:case"end":return r.stop()}}),r)})))()},addItem:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.app.context.$userbase,e.next=3,n.insertItem({databaseName:"contacts",item:t});case 3:return e.next=5,r.app.$accessor.contacts.getItems();case 5:case"end":return e.stop()}}),e)})))()},deleteItem:function(e,t){var r=this;return Object(n.a)(regeneratorRuntime.mark((function n(){var c,o,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=e.commit,o=e.state,f=r.app.context.$userbase,n.next=4,f.deleteItem({databaseName:"contacts",itemId:t});case 4:c("SET_ITEMS",o.items.filter((function(i){return i.itemId!==t})));case 5:case"end":return n.stop()}}),n)})))()},reset:function(e){(0,e.commit)("SET_ITEMS",[])}})},164:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return l})),r.d(t,"mutations",(function(){return d})),r.d(t,"actions",(function(){return v}));r(22),r(29),r(26),r(57),r(58),r(38),r(27);var n=r(8),c=(r(15),r(3)),o=r(14);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l=function(){return{isAuthenticated:!1,userInfo:{},lastUsedUsername:""}},d=Object(o.e)(l,{SET_AUTHENTICATED:function(e,t){e.isAuthenticated=t},SET_USER_INFO:function(e,t){e.userInfo=t},SET_LAST_USED_USERNAME:function(e,t){e.lastUsedUsername=t}}),v=Object(o.a)({state:l},{tryToAuth:function(e){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var n,c,o,f;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e.commit,c=t.app.context.$userbase,r.next=4,c.init();case 4:(o=r.sent).user?(n("SET_AUTHENTICATED",!0),n("SET_USER_INFO",o.user),n("SET_LAST_USED_USERNAME",o.user.username)):n("SET_LAST_USED_USERNAME",null!==(f=o.lastUsedUsername)&&void 0!==f?f:"");case 6:case"end":return r.stop()}}),r)})))()},signUp:function(e,t){var r=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c,o,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=e.commit,o=r.app.context.$userbase,n.next=4,o.signUp({username:t.email,password:t.password});case 4:f=n.sent,c("SET_AUTHENTICATED",!0),c("SET_USER_INFO",f);case 7:case"end":return n.stop()}}),n)})))()},signIn:function(e,t){var r=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c,o,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=e.commit,o=r.app.context.$userbase,n.next=4,o.signIn({username:t.email,password:t.password,rememberMe:t.isRemember?"local":"none"});case 4:f=n.sent,c("SET_AUTHENTICATED",!0),c("SET_USER_INFO",f);case 7:case"end":return n.stop()}}),n)})))()},signOut:function(){var e=this;return Object(c.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.app.context.$userbase,n=e.app.$accessor,t.next=4,r.signOut();case 4:n.user.reset(),n.contacts.reset();case 6:case"end":return t.stop()}}),t)})))()},recover:function(e,t){var r=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.app.context.$userbase,e.next=3,n.forgotPassword({username:t.email});case 3:case"end":return e.stop()}}),e)})))()},changeName:function(e,t){var r=this;return Object(c.a)(regeneratorRuntime.mark((function n(){var c,o,f,l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c=e.state,o=t.firstName,f=t.lastName,l=r.app.context.$userbase,n.next=5,l.updateUser({profile:m(m({},c.userInfo.profile),{},{firstName:o,lastName:f})});case 5:return n.next=7,r.app.$accessor.user.tryToAuth();case 7:case"end":return n.stop()}}),n)})))()},changeEmail:function(e,t){var r=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.app.context.$userbase,e.next=3,n.updateUser({email:t,username:t});case 3:return e.next=5,r.app.$accessor.user.tryToAuth();case 5:case"end":return e.stop()}}),e)})))()},changePassword:function(e,t){var r=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.newPassword,c=t.oldPassword,o=r.app.context.$userbase,e.next=4,o.updateUser({newPassword:n,currentPassword:c});case 4:case"end":return e.stop()}}),e)})))()},reset:function(e){var t=e.commit;t("SET_AUTHENTICATED",!1),t("SET_USER_INFO",{})}})},165:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return d})),r.d(t,"getters",(function(){return v})),r.d(t,"actions",(function(){return O}));r(22),r(82),r(29),r(26),r(57),r(58),r(38),r(27);var n=r(175),c=r(8),o=(r(15),r(3)),f=r(14);r(18),r(39);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d=function(){return{}},v=Object(f.d)(d,{items:function(e,t,r){var n=r.user.userInfo.profile;return(null==n?void 0:n.tasks)?JSON.parse(r.user.userInfo.profile.tasks):[]}}),O=Object(f.a)({state:d},{getItems:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.app.$accessor.user.tryToAuth();case 2:case"end":return t.stop()}}),t)})))()},addItem:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function c(){var o,f,m,d,v;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o=e.getters,f=e.rootState,m=r.app.context.$userbase,d=f.user.userInfo.profile,v={item:t,itemId:Math.random().toString(36).substring(7)},c.next=6,m.updateUser({profile:l(l({},d),{},{tasks:JSON.stringify([].concat(Object(n.a)(o.items),[v]))})});case 6:return c.next=8,r.app.$accessor.tasks.getItems();case 8:case"end":return c.stop()}}),c)})))()},deleteItem:function(e,t){var r=this;return Object(o.a)(regeneratorRuntime.mark((function c(){var o,f,m,d;return regeneratorRuntime.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return o=e.getters,f=e.rootState,m=r.app.context.$userbase,d=f.user.userInfo.profile,c.next=5,m.updateUser({profile:l(l({},d),{},{tasks:JSON.stringify(Object(n.a)(o.items.filter((function(i){return i.itemId!==t}))))})});case 5:case"end":return c.stop()}}),c)})))()}})},170:function(e,t,r){"use strict";r(15);var n=r(3);function c(){return(c=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.app.$accessor,e.next=3,r.user.tryToAuth();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t.a=function(e){return c.apply(this,arguments)}},171:function(e,t,r){"use strict";var n=r(1),c=r(252),o=r.n(c),f=(r(391),r(253)),m=r.n(f);n.default.use(o.a,{locale:m.a})},172:function(e,t,r){"use strict";var n=r(1),c=r(254);n.default.use(c.a)},173:function(e,t,r){"use strict";var n=r(1),c=r(255),o=r.n(c);n.default.use(o.a)},174:function(e,t,r){"use strict";var n=r(1),c=r(256);n.default.use(c.default)},258:function(e,t,r){"use strict";r(15);var n=r(3),c=r(1).default.extend({data:function(){return{isLoading:!1}},computed:{isAuthenticated:function(){return this.$accessor.user.isAuthenticated}},methods:{signOut:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.prev=1,t.next=4,e.$accessor.user.signOut();case 4:e.$router.push("/"),e.$message("Вы вышли из аккаунта"),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e.$message.error(t.t0.message);case 11:e.isLoading=!1;case 12:case"end":return t.stop()}}),t,null,[[1,8]])})))()}}}),o=(r(299),r(34)),f={components:{AppSidebar:Object(o.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-menu",{directives:[{name:"loading",rawName:"v-loading",value:e.isLoading,expression:"isLoading"}],attrs:{"default-active":e.$route.path,collapse:"",router:""}},[r("el-menu-item",{attrs:{index:"/"}},[r("i",{staticClass:"el-icon-s-home"}),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("Домой")])]),r("el-menu-item",{attrs:{index:"/dashboard"}},[r("i",{staticClass:"el-icon-menu"}),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("Планировщик")])]),r("el-menu-item",{attrs:{index:"/docs",disabled:""}},[r("i",{staticClass:"el-icon-s-order"}),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("Документы")])]),r("el-menu-item",{attrs:{index:"/reports",disabled:""}},[r("i",{staticClass:"el-icon-s-marketing"}),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("Отчеты")])]),r("el-menu-item",{attrs:{index:"/settings"}},[r("i",{staticClass:"el-icon-s-tools"}),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("Настройки")])]),e.isAuthenticated?r("el-menu-item",{staticClass:"no-index",on:{click:e.signOut}},[r("i",{staticClass:"el-icon-error"}),r("span",{attrs:{slot:"title"},slot:"title"},[e._v("Выйти")])]):e._e()],1)}),[],!1,null,"4fdae885",null).exports}},m=(r(300),Object(o.a)(f,(function(){var e=this.$createElement,t=this._self._c||e;return t("el-container",[t("el-aside",{attrs:{width:"calc(84px + 2rem)"}},[t("AppSidebar")],1),t("el-container",[t("el-main",[t("el-row",[t("el-col",{staticClass:"content"},[t("nuxt")],1)],1)],1)],1)],1)}),[],!1,null,"864d764e",null));t.a=m.exports},261:function(e,t,r){e.exports=r(262)},281:function(e,t,r){"use strict";r.r(t),t.default=function(e){var t=e.redirect;if(e.app.$accessor.user.isAuthenticated)return t("/me")}},282:function(e,t,r){"use strict";r.r(t),t.default=function(e){var t=e.redirect;if(!e.app.$accessor.user.isAuthenticated)return t("/auth/signin")}},298:function(e,t,r){},299:function(e,t,r){"use strict";var n=r(112);r.n(n).a},300:function(e,t,r){"use strict";var n=r(113);r.n(n).a},301:function(e,t,r){"use strict";r.r(t),r.d(t,"accessorType",(function(){return m}));var n=r(245),c=r(163),o=r(165),f=r(164),m=Object(n.a)({modules:{contacts:c,tasks:o,user:f}})},327:function(e,t){},329:function(e,t){}},[[261,11,3,12]]]);