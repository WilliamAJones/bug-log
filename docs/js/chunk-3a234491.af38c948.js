(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a234491"],{"18cc":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"ticketdetails container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12",attrs:{id:"nav"}},[s("router-link",{attrs:{to:"/home"}},[t._v("||"),s("i",{staticClass:"fas fa-home fa-spin"}),t._v("Home ||")])],1)]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-10"},[t.ticket.creator?s("div",{staticClass:"row"},[s("div",{staticClass:"col-10 offset-2 activeticket"},[s("h1",[t._v(t._s(t.ticket.title)+" "),t.ticket.closed?t._e():s("button",{staticClass:"btn btn-danger",on:{click:t.closeTicket}},[t._v("Close Ticket")])]),s("br"),s("h4",[s("i",[t._v("Opened By: "+t._s(t.ticket.user)+" || On Behalf Of: "+t._s(t.ticket.creator))])]),s("hr"),s("h6",[t._v("Status: "+t._s(t.tstatus)+" || Created On: "+t._s(t.ticket.updatedAt.split("T")[0])+" @\n                  "+t._s(t.ticket.updatedAt.split("T")[1].split(".")[0])+" ")]),s("hr"),s("br"),s("p",[t._v(t._s(t.ticket.description))])]),s("div",{staticClass:"col-8 offset-2 activeticket"},[t.seen?s("form",{staticClass:"row",on:{submit:function(e){return e.preventDefault(),t.CreateComment(e)}}},[s("div",{staticClass:"col-6 lefty"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newComment.creator,expression:"newComment.creator"}],attrs:{type:"text",name:"creator",placeholder:"Requester:",required:""},domProps:{value:t.newComment.creator},on:{input:function(e){e.target.composing||t.$set(t.newComment,"creator",e.target.value)}}})]),s("div",{staticClass:"col-6 righty"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newComment.content,expression:"newComment.content"}],staticClass:"mt-2",staticStyle:{overflow:"show",resize:"true"},attrs:{name:"newComment.content",rows:"",cols:"20",wrap:"soft",maxlength:"",placeholder:"Message.."},domProps:{value:t.newComment.content},on:{input:function(e){e.target.composing||t.$set(t.newComment,"content",e.target.value)}}}),s("input",{staticClass:"btn btn-info",attrs:{type:"submit",value:"Post Note"}})])]):t._e()]),s("div",{staticClass:"col-2 activeticket"},[t.ticket.closed?t._e():s("button",{staticClass:"btn btn-info",on:{click:function(e){t.seen=!t.seen}}},[t._v("Add Note")])])]):t._e(),s("notes",{attrs:{ticketClosed:t.ticket.closed}})],1)])])},o=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"notes row"},t._l(t.comments,function(e){return s("div",{staticClass:"col-10 offset-2 plain-card"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("h2",[t._v(t._s(e.content))])]),s("div",{staticClass:"col-4"},[s("p",[s("i",[t._v("Requested on Behalf of : "+t._s(e.creator))])]),s("p",[s("i",[t._v("Requested by : "+t._s(e.user))])])]),s("div",{staticClass:"col-2"},[t.ticketClosed?t._e():s("button",{on:{click:function(s){return t.deleteComment(e._id)}}},[t._v("Remove")])])])])}),0)},a=[],c={name:"notes",props:["ticketClosed"],data(){return{}},mounted(){this.$store.dispatch("getNotes",this.$route.params.id)},computed:{comments(){return this.$store.state.comments}},methods:{deleteComment(t){this.$store.dispatch("deleteComment",{note:t,bug:this.$route.params.id})}},components:{}},r=c,l=(s("fa3f"),s("2877")),d=Object(l["a"])(r,n,a,!1,null,null,null),m=d.exports,u={name:"ticketDetails",props:[],data(){return{seen:!1,newComment:{creator:"",bug:this.$route.params.id,content:""}}},mounted(){0==this.$store.state.tickets.length&&this.$store.dispatch("initialize"),0==this.$store.state.comments.length&&this.$store.dispatch("initialize")},computed:{ticket(){return this.$store.state.tickets.find(t=>t._id==this.$route.params.id)||{}},tstatus(){return this.ticket.closed?"Closed":"Open"}},methods:{CreateComment(){this.$store.dispatch("createComment",this.newComment)},closeTicket(){this.$store.dispatch("closeTicket",this.ticket._id)}},components:{Notes:m}},p=u,v=(s("8644"),Object(l["a"])(p,i,o,!1,null,"c2d8af0e",null));e["default"]=v.exports},"30c6":function(t,e,s){},"5daf":function(t,e,s){},8644:function(t,e,s){"use strict";var i=s("30c6"),o=s.n(i);o.a},fa3f:function(t,e,s){"use strict";var i=s("5daf"),o=s.n(i);o.a}}]);
//# sourceMappingURL=chunk-3a234491.af38c948.js.map