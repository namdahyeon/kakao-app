(this["webpackJsonpkakao-app"]=this["webpackJsonpkakao-app"]||[]).push([[0],{152:function(e,s,c){},33:function(e,s,c){},463:function(e,s,c){},468:function(e,s,c){},469:function(e,s,c){},470:function(e,s,c){},471:function(e,s,c){},472:function(e,s,c){},473:function(e,s,c){},474:function(e,s,c){"use strict";c.r(s);var j=c(0),a=c(2),i=c(23),t=c.n(i),n=(c(152),c(20)),l=c(4),r=c(38),d=c.n(r),b=c(61),h=c(40),x=(c(153),c(39)),O=c.n(x);function f(e){var s=e.id,c=e.name,a=e.comment,i=e.img;return Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:Object(j.jsx)("img",{src:i,alt:s})}),Object(j.jsx)("h3",{children:c}),Object(j.jsx)("p",{children:a})]})}var m=c.p+"static/media/profile.e6a716ce.jpg",o=c.p+"static/media/user_profile.02b7df68.jpg",p=c(62);c(463),c(33);var u=function(){var e=Object(a.useState)([]),s=Object(h.a)(e,2),c=s[0],i=s[1],t=Object(a.useState)([]),l=Object(h.a)(t,2),r=l[0],x=l[1],u=function(){var e=Object(b.a)(d.a.mark((function e(){var s,c,j,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:return s=e.sent,c=s.data,e.next=6,O.a.get("https://jsonplaceholder.typicode.com/comments");case 6:j=e.sent,a=j.data,i(c),x(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){u()}),[]),0===r.length?null:Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{className:"top_header_1",children:[Object(j.jsxs)("div",{className:"header_T",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-fighter-jet"})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-wifi"})})]}),Object(j.jsx)("span",{children:"17:33"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"far fa-moon"})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fab fa-bluetooth-b"})}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"100%"}),Object(j.jsx)("i",{className:"fas fa-battery-full"})]})]})]}),Object(j.jsxs)("div",{className:"header_B",children:[Object(j.jsx)("span",{children:"Manage"}),Object(j.jsxs)("span",{children:["Friends",Object(j.jsx)("strong",{children:"1"})]}),Object(j.jsx)("i",{className:"fas fa-cog"})]})]}),Object(j.jsxs)("main",{className:"friends",children:[Object(j.jsxs)("div",{className:"search-bar",children:[Object(j.jsx)("i",{className:"fas fa-search"}),Object(j.jsx)("input",{type:"search",placeholder:"Find friends, chats, Plus Friends"})]}),Object(j.jsxs)("section",{children:[Object(j.jsx)("header",{children:Object(j.jsx)("h6",{children:"My Profile"})}),Object(j.jsx)("div",{className:"my_list",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)(n.b,{to:"/Profile",children:[Object(j.jsx)("img",{src:m,alt:"my profile photo"}),Object(j.jsx)("span",{children:"My Name"})]})}),Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:o,alt:"friends profile photo"}),Object(j.jsx)("span",{children:"Friends' Names Display"})]})]})})]}),Object(j.jsxs)("section",{children:[Object(j.jsx)("header",{children:Object(j.jsx)("h6",{children:"Friends"})}),Object(j.jsx)("div",{className:"list",children:Object(j.jsx)("ul",{children:c.map((function(e,s){return Object(j.jsx)(f,{id:e.id,name:e.name,comment:r[s].name,img:p[s].img})}))})})]})]})]})};c(468);var N=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{className:"top_header_5",children:[Object(j.jsxs)("div",{className:"header_T",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-fighter-jet"})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-wifi"})})]}),Object(j.jsx)("span",{children:"17:33"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"far fa-moon"})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fab fa-bluetooth-b"})}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"100%"}),Object(j.jsx)("i",{className:"fas fa-battery-full"})]})]})]}),Object(j.jsxs)("div",{className:"header_B",children:[Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"index.html",children:Object(j.jsx)("i",{className:"fas fa-times"})})}),Object(j.jsx)("span",{}),Object(j.jsx)("i",{className:"fas fa-user"})]})]}),Object(j.jsxs)("main",{className:"profile",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("p",{children:Object(j.jsx)("img",{src:m,alt:"profile"})}),Object(j.jsx)("h3",{children:"My Name"})]}),Object(j.jsxs)("section",{children:[Object(j.jsx)("input",{type:"text",placeholder:"Userld@gmail.com"}),Object(j.jsxs)("dl",{children:[Object(j.jsx)("dt",{className:"blind",children:"menu"}),Object(j.jsxs)("dd",{children:[Object(j.jsx)("i",{className:"fas fa-comment"}),Object(j.jsx)("span",{children:"My Chatroom"})]}),Object(j.jsxs)("dd",{children:[Object(j.jsx)("i",{className:"fas fa-pencil-alt"}),Object(j.jsx)("span",{children:"Edit Profile"})]})]})]})]})]})};c(469);function g(e){var s=e.id,c=e.name,a=e.comment,i=e.img;return Object(j.jsx)("li",{children:Object(j.jsxs)(n.b,{to:"/Chat",children:[Object(j.jsx)("span",{children:Object(j.jsx)("img",{src:i,alt:s})}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"friend_chat",children:[Object(j.jsx)("h3",{children:c}),Object(j.jsx)("p",{children:a})]}),Object(j.jsxs)("em",{children:[Object(j.jsx)("span",{children:"17"}),":",Object(j.jsx)("span",{children:"33"})]})]})]})})}var v=function(){var e=Object(a.useState)([]),s=Object(h.a)(e,2),c=s[0],i=s[1],t=Object(a.useState)([]),n=Object(h.a)(t,2),l=n[0],r=n[1],x=function(){var e=Object(b.a)(d.a.mark((function e(){var s,c,j,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://jsonplaceholder.typicode.com/users");case 2:return s=e.sent,c=s.data,e.next=6,O.a.get("https://jsonplaceholder.typicode.com/comments");case 6:j=e.sent,a=j.data,i(c),r(a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){x()}),[]),0===l.length?null:Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{className:"top_header_2",children:[Object(j.jsxs)("div",{className:"header_T",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-fighter-jet"})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-wifi"})})]}),Object(j.jsx)("span",{children:"17:33"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"far fa-moon"})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fab fa-bluetooth-b"})}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"100%"}),Object(j.jsx)("i",{className:"fas fa-battery-full"})]})]})]}),Object(j.jsxs)("div",{className:"header_B",children:[Object(j.jsx)("span",{children:"Edit"}),Object(j.jsxs)("span",{children:["Chats",Object(j.jsx)("i",{className:"fas fa-sort-down"})]}),Object(j.jsx)("i",{})]})]}),Object(j.jsxs)("main",{className:"chats",children:[Object(j.jsxs)("div",{className:"search-bar",children:[Object(j.jsx)("i",{className:"fas fa-search"}),Object(j.jsx)("input",{type:"search",placeholder:"Find friends, chats, Plus Friends"})]}),Object(j.jsx)("section",{children:Object(j.jsx)("ul",{children:c.map((function(e,s){return Object(j.jsx)(g,{id:e.id,name:e.name,comment:l[s].name,img:p[s].img})}))})})]})]})};c(470);var _=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{className:"top_header_6",children:[Object(j.jsxs)("div",{className:"header_T",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-fighter-jet"})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-wifi"})})]}),Object(j.jsx)("span",{children:"17:33"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"far fa-moon"})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fab fa-bluetooth-b"})}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"100%"}),Object(j.jsx)("i",{className:"fas fa-battery-full"})]})]})]}),Object(j.jsxs)("div",{className:"header_B",children:[Object(j.jsx)("span",{children:Object(j.jsx)("a",{href:"chats.html",children:Object(j.jsx)("i",{className:"fas fa-chevron-left"})})}),Object(j.jsx)("span",{children:"Friend Name"}),Object(j.jsxs)("span",{children:[Object(j.jsx)("i",{className:"fas fa-search"}),Object(j.jsx)("i",{className:"fas fa-bars"})]})]})]}),Object(j.jsxs)("main",{className:"chat",children:[Object(j.jsx)("p",{children:"Wednesday, April 12, 2018"}),Object(j.jsxs)("div",{className:"my_chat",children:[Object(j.jsx)("em",{children:"17:33"}),Object(j.jsxs)("div",{className:"m_chat",children:[Object(j.jsx)("p",{children:"Hello!"}),Object(j.jsxs)("p",{children:["Hello! This is a test message.",Object(j.jsx)("br",{}),"Hello!"]}),Object(j.jsx)("p",{children:"This is a test message."})]})]}),Object(j.jsxs)("div",{className:"user_chat",children:[Object(j.jsx)("img",{src:o,alt:"user_profile"}),Object(j.jsxs)("div",{className:"u_chat",children:[Object(j.jsx)("h3",{children:"Friend Name"}),Object(j.jsx)("p",{children:"And this is an answer"}),Object(j.jsx)("p",{children:"And this is an answer And this is an answer"}),Object(j.jsx)("p",{children:"And this is an answer"})]}),Object(j.jsx)("em",{children:"20:37"})]})]}),Object(j.jsxs)("section",{className:"chat_s",children:[Object(j.jsx)("i",{class:"fas fa-plus"}),Object(j.jsxs)("div",{className:"keybord",children:[Object(j.jsx)("input",{type:"text",placeholder:""}),Object(j.jsx)("i",{className:"far fa-smile"}),Object(j.jsx)("i",{className:"fas fa-microphone"})]})]})]})};c(471);var y=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{className:"top_header_3",children:[Object(j.jsxs)("div",{className:"header_T",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-fighter-jet"})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-wifi"})})]}),Object(j.jsx)("span",{children:"17:33"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"far fa-moon"})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fab fa-bluetooth-b"})}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"100%"}),Object(j.jsx)("i",{className:"fas fa-battery-full"})]})]})]}),Object(j.jsxs)("div",{className:"header_B",children:[Object(j.jsx)("span",{children:"Edit"}),Object(j.jsx)("span",{children:"Find"}),Object(j.jsx)("i",{})]})]}),Object(j.jsxs)("main",{className:"find",children:[Object(j.jsx)("section",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-address-book"}),Object(j.jsx)("span",{children:"Find"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-qrcode"}),Object(j.jsx)("span",{children:"QR Code"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-mobile-alt"}),Object(j.jsx)("span",{children:"Shake"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"far fa-envelope"}),Object(j.jsx)("span",{children:"Invite via SMS"})]})})]})}),Object(j.jsxs)("section",{children:[Object(j.jsx)("header",{children:Object(j.jsx)("h6",{children:"Recommended Friends"})}),Object(j.jsx)("div",{className:"Recommended",children:Object(j.jsx)("p",{children:"You have no recommended friends."})})]})]})]})},k=(c(472),c.p+"static/media/kakaostory.572f3ce5.png"),w=c.p+"static/media/path.7d00edf7.png",F=c.p+"static/media/kakaofriends.84375bb9.png";var M=function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("header",{className:"top_header_4",children:[Object(j.jsxs)("div",{className:"header_T",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-fighter-jet"})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fas fa-wifi"})})]}),Object(j.jsx)("span",{children:"17:33"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"far fa-moon"})}),Object(j.jsx)("li",{children:Object(j.jsx)("i",{className:"fab fa-bluetooth-b"})}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{children:"100%"}),Object(j.jsx)("i",{className:"fas fa-battery-full"})]})]})]}),Object(j.jsxs)("div",{className:"header_B",children:[Object(j.jsx)("span",{}),Object(j.jsx)("span",{children:"More"}),Object(j.jsx)("i",{className:"fas fa-cog"})]})]}),Object(j.jsxs)("main",{className:"more",children:[Object(j.jsxs)("header",{children:[Object(j.jsxs)("div",{className:"profile",children:[Object(j.jsx)("img",{src:m,alt:"profile"}),Object(j.jsxs)("dl",{children:[Object(j.jsx)("dt",{children:"My Name"}),Object(j.jsx)("dd",{children:"UserId@gmail.com"})]})]}),Object(j.jsx)("i",{className:"far fa-comment"})]}),Object(j.jsx)("section",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-smile"}),Object(j.jsx)("span",{children:"Emoticons"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-paint-brush"}),Object(j.jsx)("span",{children:"Themes"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-user-plus"}),Object(j.jsx)("span",{children:"Plus Friend"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-user-circle"}),Object(j.jsx)("span",{children:"Account"})]})})]})}),Object(j.jsxs)("section",{children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("h2",{children:"Plus Friends"}),Object(j.jsxs)("span",{children:[Object(j.jsx)("i",{class:"fas fa-info-circle"}),"Learn More"]})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-utensils"}),Object(j.jsx)("span",{children:"Order"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-home"}),Object(j.jsx)("span",{children:"Store"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-tv"}),Object(j.jsx)("span",{children:"TV Channel/Radio"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-pencil-alt"}),Object(j.jsx)("span",{children:"Creation"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-graduation-cap"}),Object(j.jsx)("span",{children:"Education"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-landmark"}),Object(j.jsx)("span",{children:"Politics/Society"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-won-sign"}),Object(j.jsx)("span",{children:"Finance"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)("a",{href:"#",children:[Object(j.jsx)("i",{className:"fas fa-video"}),Object(j.jsx)("span",{children:"Movies/Music"})]})})]})]}),Object(j.jsx)("section",{children:Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:k,alt:"kakaostory"}),Object(j.jsx)("span",{children:"Kakao Story"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:w,alt:"path"}),Object(j.jsx)("span",{children:"Path"})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("img",{src:F,alt:"kakaofriends"}),Object(j.jsx)("span",{children:"kakao friends"})]})]})})]})]})};c(473);var C=function(){return Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsxs)(n.c,{to:"/",exact:!0,activeClassName:"active",children:[Object(j.jsx)("i",{className:"fas fa-user-alt"}),Object(j.jsx)("span",{children:"Friends"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(n.c,{to:"/Chats",activeClassName:"active",children:[Object(j.jsx)("i",{className:"fas fa-comment"}),Object(j.jsx)("span",{children:"Chats"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(n.c,{to:"/Find",activeClassName:"active",children:[Object(j.jsx)("i",{className:"fas fa-search"}),Object(j.jsx)("span",{children:"Find"})]})}),Object(j.jsx)("li",{children:Object(j.jsxs)(n.c,{to:"/More",activeClassName:"active",children:[Object(j.jsx)("i",{className:"fas fa-ellipsis-h"}),Object(j.jsx)("span",{children:"More"})]})})]})})};var S=function(){return Object(j.jsxs)(n.a,{children:[Object(j.jsx)(C,{}),Object(j.jsx)(l.a,{path:"/",exact:!0,component:u},1),Object(j.jsx)(l.a,{path:"/profile",component:N}),Object(j.jsx)(l.a,{path:"/chats",component:v}),Object(j.jsx)(l.a,{path:"/chat",component:_}),Object(j.jsx)(l.a,{path:"/find",component:y}),Object(j.jsx)(l.a,{path:"/more",component:M})]})};t.a.render(Object(j.jsx)(S,{}),document.getElementById("root"))},62:function(e){e.exports=JSON.parse('[{"id":"1","img":"https://i.pinimg.com/564x/b4/bf/56/b4bf56818e31233e479f578d80c5ba85.jpg"},{"id":"2","img":"https://i.pinimg.com/564x/b5/34/2d/b5342d1e34613492c323bb23d3a36728.jpg"},{"id":"3","img":"https://i.pinimg.com/564x/7a/08/72/7a087263205d3d3d6916a551c9f67a00.jpg"},{"id":"4","img":"https://i.pinimg.com/564x/80/ce/33/80ce33d0f52db070d231bf7c23282759.jpg"},{"id":"5","img":"https://i.pinimg.com/564x/56/7c/28/567c2866515f37f05ad490e198020916.jpg"},{"id":"6","img":"https://i.pinimg.com/564x/09/af/4a/09af4ae7e2712fe818d81bf5fede6f89.jpg"},{"id":"7","img":"https://i.pinimg.com/564x/b4/bf/56/b4bf56818e31233e479f578d80c5ba85.jpg"},{"id":"8","img":"https://i.pinimg.com/564x/b5/34/2d/b5342d1e34613492c323bb23d3a36728.jpg"},{"id":"9","img":"https://i.pinimg.com/564x/7a/08/72/7a087263205d3d3d6916a551c9f67a00.jpg"},{"id":"10","img":"https://i.pinimg.com/564x/80/ce/33/80ce33d0f52db070d231bf7c23282759.jpg"},{"id":"11","img":"https://i.pinimg.com/564x/56/7c/28/567c2866515f37f05ad490e198020916.jpg"},{"id":"12","img":"https://i.pinimg.com/564x/09/af/4a/09af4ae7e2712fe818d81bf5fede6f89.jpg"},{"id":"13","img":"https://i.pinimg.com/564x/b4/bf/56/b4bf56818e31233e479f578d80c5ba85.jpg"},{"id":"14","img":"https://i.pinimg.com/564x/b5/34/2d/b5342d1e34613492c323bb23d3a36728.jpg"},{"id":"15","img":"https://i.pinimg.com/564x/7a/08/72/7a087263205d3d3d6916a551c9f67a00.jpg"},{"id":"16","img":"https://i.pinimg.com/564x/80/ce/33/80ce33d0f52db070d231bf7c23282759.jpg"},{"id":"17","img":"https://i.pinimg.com/564x/56/7c/28/567c2866515f37f05ad490e198020916.jpg"}]')}},[[474,1,2]]]);
//# sourceMappingURL=main.752e51ab.chunk.js.map