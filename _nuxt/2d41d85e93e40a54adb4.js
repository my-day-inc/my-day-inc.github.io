(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{414:function(e,t,n){"use strict";n.r(t);n(10);var r=n(2),o=n(0),c=n(391),d=n(390),h=o.default.extend({middleware:"authenticated",components:{AppAuthContainer:c.a,AppAuthForm:d.a},data:function(){return{isLoading:!1}},methods:{signUp:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.isLoading=!0,n.next=4,t.$accessor.user.signUp(e);case 4:t.$router.push("/dashboard"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),t.$message.error(n.t0.message);case 10:return n.prev=10,t.isLoading=!1,n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))()}},head:{title:"Регистрация"}}),l=n(26),component=Object(l.a)(h,(function(){var e=this.$createElement,t=this._self._c||e;return t("h1",[this._v("Регистрация"),t("AppAuthContainer",{attrs:{image:"street"}},[t("AppAuthForm",{directives:[{name:"loading",rawName:"v-loading",value:this.isLoading,expression:"isLoading"}],attrs:{"form-type":"signUp"},on:{submit:this.signUp}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);