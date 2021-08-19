(this["webpackJsonpreact-02-phonebook"]=this["webpackJsonpreact-02-phonebook"]||[]).push([[0],[,,function(t,e,n){t.exports={ContactForm:"ContactForm_ContactForm__2CUcA",ContactForm__input:"ContactForm_ContactForm__input__3Go3i",ContactForm__button:"ContactForm_ContactForm__button__30ZgL"}},,,,,,function(t,e,n){t.exports={ContactList:"ContactList_ContactList__39qi0",item:"ContactList_item__WCH4U"}},,function(t,e,n){t.exports={title__contacts:"Button_title__contacts__19H80",Button:"Button_Button__248iW"}},function(t,e,n){t.exports={title__contacts:"Section_title__contacts__1vSAT",Section:"Section_Section__24Hp-"}},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),i=n.n(r),o=(n(17),n(12)),s=n(3),u=n(4),l=n(6),d=n(5),m=n(22),b=n(10),h=n.n(b),j=n(0),_=function(t){var e=t.onClick,n=t.id,a=t.children;return Object(j.jsx)("button",{className:h.a.Button,onClick:function(){return e(n)},children:a})},C=n(8),f=n.n(C),p=function(t){var e=t.visibleName,n=t.onClick;return Object(j.jsx)("ul",{className:f.a.ContactList,children:e.map((function(t){var e=t.name,a=t.id,c=t.number;return Object(j.jsxs)("li",{className:f.a.item,children:[e,":",c," ",Object(j.jsx)(_,{onClick:n,id:a,children:"Delete"})," "]},a)}))})},O=function(t){var e=t.onChange;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:"Find contacts by name"}),Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:e})]})},v=n(2),x=n.n(v),N=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t}return Object(u.a)(n,[{key:"handleName",value:function(t){this.setState({name:t.currentTarget.value})}},{key:"handleNumber",value:function(t){this.setState({number:t.currentTarget.value})}},{key:"cleanInput",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var t=this,e=this.state,n=e.name,a=e.number,c=this.props.addContacts;return Object(j.jsxs)("div",{className:x.a.ContactForm,children:[Object(j.jsxs)("label",{className:x.a.ContactForm__input,children:["Name",Object(j.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:n,onChange:this.handleName.bind(this)})]}),Object(j.jsxs)("label",{className:x.a.ContactForm__input,children:["Number",Object(j.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",value:a,required:!0,onChange:this.handleNumber.bind(this)})]}),Object(j.jsx)("button",{className:x.a.ContactForm__button,type:"submit",onClick:function(){return c(n,a,t.cleanInput())},children:"Add contact"})]})}}]),n}(a.Component),k=n(11),y=n.n(k),A=function(t){return Object(j.jsx)("div",{className:y.a.Section,children:t.children})},g=(n(19),function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContacts=function(e,n){t.searchContact(e)?t.messageAlert(e):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[{name:e,id:Object(m.a)(),number:n}])}}))},t.filteredName=function(e){t.setState({filter:e.currentTarget.value})},t.deleteFriend=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"messageAlert",value:function(t){alert("".concat(t," is already in contacts"))}},{key:"searchContact",value:function(t){var e=this.state.contacts,n=t.toLowerCase();return e.find((function(t){return t.name.toLowerCase()===n}))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter.toLowerCase(),a=e.filter((function(t){return t.name.toLowerCase().includes(n)}));return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(A,{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(N,{addContacts:this.addContacts}),Object(j.jsx)("h2",{className:"title__contacts",children:"Contacts"}),Object(j.jsx)(O,{onChange:this.filteredName}),Object(j.jsx)(p,{visibleName:a,onClick:this.deleteFriend})]})})}}]),n}(a.Component));i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.87fda97e.chunk.js.map