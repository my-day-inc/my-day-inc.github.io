(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{409:function(t,e,n){"use strict";n.r(e);n(10);var r=n(2),c=n(0),o=n(392),h=c.default.extend({middleware:"notAuthenticated",components:{AppDashboardContainer:o.a},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$accessor.contacts.getItems();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),t.$message.error(e.t0.message);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},data:function(){return{title:"Планировщик"}},computed:{contacts:function(){return this.$accessor.contacts.items},tasks:function(){return this.$accessor.tasks.items}},head:function(){return{title:this.title}}}),l=n(26),component=Object(l.a)(h,(function(){var t=this.$createElement;return(this._self._c||t)("AppDashboardContainer",{attrs:{title:this.title,contacts:this.contacts,tasks:this.tasks,pending:this.$fetchState.pending}})}),[],!1,null,null,null);e.default=component.exports}}]);