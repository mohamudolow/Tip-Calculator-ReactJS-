(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{31:function(e,a,t){e.exports=t(49)},37:function(e,a,t){},38:function(e,a,t){},49:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(25),c=t.n(r),i=(t(37),t(16)),u=t(9),m=t(10),o=t(11),s=t(13),p=t(12),h=t(14),d=(t(38),t(55)),E=t(51),f=t(28),b=t(52),v=t(27),O=t(54),j=t(53),x=[{src:"https://cdn.pixabay.com/photo/2012/03/01/00/57/background-19861_1280.jpg",val:35,experience:"Excellent"},{src:"https://images.unsplash.com/photo-1533035336122-4327d347d2fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",val:25,experience:"Good"},{src:"https://cdn.pixabay.com/photo/2012/12/24/08/39/backdrop-72250_1280.jpg",val:15,experience:"Fair"},{src:"https://images.unsplash.com/photo-1538635546732-684a9ec39ea5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1070&q=80",val:5,experience:"Poor"}],g=function(e){function a(e){return Object(m.a)(this,a),Object(s.a)(this,Object(p.a)(a).call(this,e))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"incrementor"},l.a.createElement("i",{className:"fas fa-user-times",onClick:function(){return e.props.handleIncrement("numOfPeople",-1)}}),"\xa0\xa0",l.a.createElement("span",null,this.props.numOfPeople),"\xa0\xa0",l.a.createElement("i",{className:"fas fa-user-plus",onClick:function(){return e.props.handleIncrement("numOfPeople",1)}}))}}]),a}(l.a.Component),k=function(e){return l.a.createElement("div",{className:"bill"},l.a.createElement(d.a,null,l.a.createElement(E.a,null,l.a.createElement(f.a,null,l.a.createElement(d.a.Label,null,"Bill")),l.a.createElement(f.a,null,l.a.createElement("p",null,"Number of people"))),l.a.createElement(E.a,null,l.a.createElement(f.a,null,l.a.createElement(b.a,{className:"input1"},l.a.createElement(b.a.Prepend,null,l.a.createElement(b.a.Text,null,"$")),l.a.createElement(v.a,{"arai-label":"Amount (to the nearest two decimal places)",value:e.bill,onChange:e.handleChange}))),l.a.createElement(f.a,null,l.a.createElement(g,{numOfPeople:e.numOfPeople,handleIncrement:e.handleIncrement})))))},w=function(e){function a(e){return Object(m.a)(this,a),Object(s.a)(this,Object(p.a)(a).call(this,e))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(O.a,null,x.map(function(a){return l.a.createElement(O.a.Item,{key:a.id},l.a.createElement("img",{src:a.src,alt:"slider background image"}),l.a.createElement(O.a.Caption,null,l.a.createElement(b.a,null,l.a.createElement(b.a.Prepend,null,"\xa0\xa0",l.a.createElement(b.a.Radio,{"aria-label":"radio button for following h3 text",id:a.experience,value:a.experience,name:"experience",onClick:function(){return e.props.service("tip",a.val)}}))," \xa0\xa0",l.a.createElement("label",{for:a.experience},a.experience))))}))}}]),a}(l.a.Component),y=function(e){function a(e){return Object(m.a)(this,a),Object(s.a)(this,Object(p.a)(a).call(this,e))}return Object(h.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"incrementor"},l.a.createElement("i",{className:"fas fa-minus-square",onClick:function(){return e.props.handleIncrement("tip",-1)}}),"\xa0\xa0",l.a.createElement("span",null,this.props.tip),"\xa0\xa0",l.a.createElement("i",{className:"fas fa-plus-square",onClick:function(){return e.props.handleIncrement("tip",1)}}))}}]),a}(l.a.Component),C=function(e){var a=Math.round(e.bill/e.numOfPeople*100)/100,t=Math.round(100*(a+e.tip/100*e.bill/e.numOfPeople))/100,n=Math.round((t-a)*e.numOfPeople*100)/100,r=Math.round(n/e.numOfPeople*100)/100;return l.a.createElement("div",{id:"result"},l.a.createElement(j.a,null,l.a.createElement(E.a,null,l.a.createElement(f.a,null,"Individual total without tip:"),l.a.createElement(f.a,{className:"num"},a)),l.a.createElement(E.a,null,l.a.createElement(f.a,null,"Individual total with tip:"),l.a.createElement(f.a,{className:"num"},t)),l.a.createElement(E.a,null,l.a.createElement(f.a,null,"Total tip amount:"),l.a.createElement(f.a,{className:"num"},n))),l.a.createElement("br",null),l.a.createElement("div",{id:"tip-per-person"},l.a.createElement(j.a,null,l.a.createElement(E.a,null,l.a.createElement(f.a,{className:"tip-per-person-text"},"Tip per person:"),l.a.createElement(f.a,{className:"num"},r)))))},I=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(s.a)(this,Object(p.a)(a).call(this,e))).state={bill:112.58,tip:20,numOfPeople:2},t.handleChange=t.handleChange.bind(Object(u.a)(t)),t.handleIncrement=t.handleIncrement.bind(Object(u.a)(t)),t.service=t.service.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(o.a)(a,[{key:"handleChange",value:function(e){this.setState({bill:e.target.value})}},{key:"handleIncrement",value:function(e,a){this.setState(function(t){return t[e]>1||1===a?Object(i.a)({},e,t[e]+a):Object(i.a)({},e,20)})}},{key:"service",value:function(e,a){this.setState(Object(i.a)({},e,a))}},{key:"render",value:function(){return l.a.createElement("div",{id:"container"},l.a.createElement("div",{id:"header"},l.a.createElement(j.a,null,l.a.createElement("h1",null,"Tip Calculator"))),l.a.createElement("div",{id:"main"},l.a.createElement(j.a,null,l.a.createElement(k,{bill:this.state.bill,numOfPeople:this.state.numOfPeople,handleChange:this.handleChange,handleIncrement:this.handleIncrement}),l.a.createElement("div",{id:"service"},l.a.createElement("hr",null)),l.a.createElement("div",null,l.a.createElement(E.a,null,l.a.createElement(f.a,null,l.a.createElement(f.a,null,l.a.createElement("p",{className:"experience"},"How was your experience today?")),l.a.createElement(w,{service:this.service})),l.a.createElement(f.a,{id:"tip"},l.a.createElement(f.a,null,l.a.createElement("p",null,"Tip %")),l.a.createElement("br",null),l.a.createElement(f.a,null,l.a.createElement(y,{handleIncrement:this.handleIncrement,tip:this.state.tip}))))),l.a.createElement("hr",null)),l.a.createElement(C,{bill:this.state.bill,numOfPeople:this.state.numOfPeople,tip:this.state.tip})))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.9dd65427.chunk.js.map