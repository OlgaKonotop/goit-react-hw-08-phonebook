"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[727],{450:function(n,e,r){r.r(e),r.d(e,{default:function(){return D}});var t,o,a,i,d,s,l,c,u,p,x=r(168),f=r(444),m=f.ZP.div(t||(t=(0,x.Z)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n\n  border: 1px solid #0926a6;\n  border-radius: 10px;\n  padding: 5px;\n  background-color: #abd2f1;\n\n  margin-bottom: 15px;\n"]))),b=f.ZP.p(o||(o=(0,x.Z)(["\n  margin-left: 30px;\n"]))),g=f.ZP.button(a||(a=(0,x.Z)(["\n  background-color: #abd2f1;\n  border: 1px solid #0926a6;\n  border-radius: 10px;\n  color: #0926a6;\n  padding: 5px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer;\n  margin-left: auto;\n  margin-right: 30px;\n\n  &:hover,\n  &:focus {\n    border: 1px solid #0926a6;\n    font-weight: 700;\n    background-color: #7aace8;\n  }\n"]))),h=r(434),v=r(64),j=r(329),Z=function(n){var e=n.name,r=n.number,t=n.id,o=(0,h.I0)();return(0,j.jsxs)(m,{children:[(0,j.jsxs)(b,{children:[e,": ",r]}),(0,j.jsx)(g,{type:"button",onClick:function(){return o((0,v.GK)(t))},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]})},k=function(n){return n.contacts.loading},y=function(n){return n.filter},w=function(n){return n.contacts.items},P=function(){var n=(0,h.v9)(w),e=(0,h.v9)(y).toLowerCase().trim();console.log(n);var r=n.filter((function(n){return n.name.toLowerCase().includes(e)}));return console.log(r),(0,j.jsxs)("ul",{children:[r.map((function(n){var e=n.id,r=n.name,t=n.number;return(0,j.jsx)("li",{children:(0,j.jsx)(Z,{name:r,number:t,id:e})},e)})),0===r.length&&""===e&&(0,j.jsx)("p",{children:"\u0442\u0435\u043b\u0435\u0444\u043e\u043d\u043d\u0430 \u043a\u043d\u0438\u0433\u0430 \u043f\u043e\u0440\u043e\u0436\u043d\u044f, \u0431\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0434\u043e\u0434\u0430\u0439\u0442\u0435 \u043d\u043e\u0432\u0438\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"}),0===r.length&&""!==e&&(0,j.jsx)("p",{children:"\u043d\u0435\u043c\u0430\u0454 \u0441\u043f\u0456\u0432\u043f\u0430\u0434\u0456\u043d\u044c"})]})},C=f.ZP.label(i||(i=(0,x.Z)(["\n  color: #0926a6;\n  font-size: 16px;\n"]))),z=f.ZP.input(d||(d=(0,x.Z)(["\n  border: 1px solid #0926a6;\n  border-radius: 10px;\n  background-color: #d6e9ff;\n  padding: 5px;\n  margin-left: 15px;\n  margin-bottom: 15px;\n"]))),A=r(808),_=function(){var n=(0,h.I0)();return(0,j.jsxs)(C,{children:["\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0456\u043c'\u044f",(0,j.jsx)(z,{type:"text",name:"name",onChange:function(e){var r=e.target.value;console.log(r),n((0,A.p)(r))}})]})},I=function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",r=crypto.getRandomValues(new Uint8Array(n));n--;){var t=63&r[n];e+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return e},F=f.ZP.form(s||(s=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-right: auto;\n  margin-left: auto;\n  margin-bottom: 15px;\n\n  border: 1px solid #0926a6;\n  border-radius: 10px;\n  padding: 25px;\n  width: 400px;\n"]))),S=f.ZP.button(l||(l=(0,x.Z)(["\n  background-color: #abd2f1;\n  border: 1px solid #0926a6;\n  border-radius: 10px;\n  color: #0926a6;\n  padding: 5px 15px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    border: 1px solid #fff;\n    font-weight: 700;\n    background-color: #7aace8;\n  }\n"]))),q=f.ZP.label(c||(c=(0,x.Z)(["\n  color: #0926a6;\n  font-size: 20px;\n  margin-bottom: 5px;\n"]))),K=f.ZP.input(u||(u=(0,x.Z)(["\n  border: 1px solid #0926a6;\n  border-radius: 10px;\n  background-color: #d6e9ff;\n  padding: 5px;\n  margin-left: 25px;\n  width: 200px;\n"]))),L=f.ZP.input(p||(p=(0,x.Z)(["\n  border: 1px solid #0926a6;\n  border-radius: 10px;\n  background-color: #d6e9ff;\n  padding: 5px;\n  margin-left: 70px;\n  width: 200px;\n"]))),U=function(){var n=(0,h.I0)();return(0,j.jsxs)(F,{onSubmit:function(e){e.preventDefault();var r=e.target,t={name:r.name.value,number:r.number.value,id:I()};n((0,v.uK)(t)),r.reset()},children:[(0,j.jsxs)(q,{children:["\u0406\u043c'\u044f",(0,j.jsx)(L,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,placeholder:"\u041c\u0438\u0445\u0430\u0439\u043b\u043e\u0432\u0430 \u041c\u0430\u0440\u0433\u0430\u0440\u0438\u0442\u0430"})]}),(0,j.jsxs)(q,{children:["\u0422\u0435\u043b\u0435\u0444\u043e\u043d",(0,j.jsx)(K,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,placeholder:"+38(0\u0445\u0445)-\u0445\u0445\u0445-\u0445\u0445-\u0445\u0445"})]}),(0,j.jsx)(S,{type:"submit",children:"\u0414\u043e\u0434\u0430\u0442\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442"})]})},B=r(791),D=function(){var n=(0,h.I0)(),e=(0,h.v9)(k);return(0,B.useEffect)((function(){n((0,v.yF)())}),[n]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(U,{}),(0,j.jsx)(_,{}),(0,j.jsx)("div",{children:e&&"\u0412\u0438\u043a\u043e\u043d\u0443\u0454\u0442\u044c\u0441\u044f \u0437\u0430\u043f\u0438\u0442..."}),(0,j.jsx)(P,{})]})}}}]);
//# sourceMappingURL=727.b2026c59.chunk.js.map