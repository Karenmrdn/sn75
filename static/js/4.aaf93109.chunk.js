(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{292:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__3n5C0",dialogsItems:"Dialogs_dialogsItems__1BFJw",active:"Dialogs_active__3k5UB",messages:"Dialogs_messages__Qw1gh",message:"Dialogs_message__1aN1g"}},297:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),i=t(129),l=t(292),m=t.n(l),c=t(12),r=function(e){return s.a.createElement("div",{className:m.a.dialog+" "+m.a.active},s.a.createElement(c.b,{to:"/dialogs/"+e.id},e.name))},o=function(e){return s.a.createElement("div",{className:m.a.message},e.message)},d=t(88),g=t(130),u=t(64),E=t(95),b=Object(u.a)(50),f=Object(E.a)("textarea"),v=Object(g.a)({form:"dialogsForm"})((function(e){return s.a.createElement("form",{onSubmit:e.handleSubmit},s.a.createElement("div",null,s.a.createElement(d.a,{name:"newMessageText",component:f,validate:[u.b,b],placeholder:"Enter your message"})),s.a.createElement("div",null,s.a.createElement("button",null,"Add message")))})),_=function(e){var a=e.dialogsPage.dialogs.map((function(e){return s.a.createElement(r,{key:e.id,name:e.name,id:e.id})})),t=e.dialogsPage.messages.map((function(e){return s.a.createElement(o,{key:e.id,message:e.message})}));return s.a.createElement("div",{className:m.a.dialogs},s.a.createElement("div",{className:m.a.dialogsItems},a),s.a.createElement("div",{className:m.a.messages},s.a.createElement("div",null,t),s.a.createElement("div",null,s.a.createElement(v,{onSubmit:function(a){e.addMessage(a.newMessageText)}}))))},p=t(15),h=t(9),j=function(e){return{isAuthed:e.auth.isAuthed}},w=function(e){return Object(p.b)(j)((function(a){return a.isAuthed?s.a.createElement(e,a):s.a.createElement(h.a,{to:"/login"})}))},N=t(8);a.default=Object(N.d)(Object(p.b)((function(e){return{dialogsPage:e.dialogsPage}}),{addMessage:i.a}),w)(_)}}]);
//# sourceMappingURL=4.aaf93109.chunk.js.map