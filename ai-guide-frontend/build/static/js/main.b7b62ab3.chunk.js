(this["webpackJsonpai-guide-frontend"]=this["webpackJsonpai-guide-frontend"]||[]).push([[0],{17:function(e,t,a){},18:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),o=a(7),s=a.n(o),r=(a(17),a(25));a(18);var l=function(){const[e,t]=Object(n.useState)(""),[a,o]=Object(n.useState)([]),s=async()=>{if(!e.trim())return;const n=await r.a.post("/chat",{message:e});o([...a,{role:"You",content:e},{role:"AI",content:n.data.message}]),t("")};return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"chat-box"},c.a.createElement("div",{className:"history"},a.map((e,t)=>c.a.createElement("div",{key:t,className:"message ".concat(e.role.toLowerCase())},c.a.createElement("div",{className:"content"},e.content)))),c.a.createElement("div",{className:"message-input"},c.a.createElement("input",{type:"text",value:e,onChange:e=>t(e.target.value),onKeyDown:e=>{"Enter"===e.key&&s()},placeholder:"Type your message here..."}),c.a.createElement("button",{onClick:s},"Send"))))};var i=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,26)).then(t=>{let{getCLS:a,getFID:n,getFCP:c,getLCP:o,getTTFB:s}=t;a(e),n(e),c(e),o(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(l,null))),i()},8:function(e,t,a){e.exports=a(23)}},[[8,1,2]]]);
//# sourceMappingURL=main.b7b62ab3.chunk.js.map