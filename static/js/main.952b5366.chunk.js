(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{10:function(t,e,n){t.exports={title:"Statistics_title__aO8S0",statisticsBox:"Statistics_statisticsBox__1LC4I"}},13:function(t,e,n){t.exports={notification:"Notification_notification__9wlfR"}},21:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(11),r=n.n(i),o=n(12),s=n(2),u=n(3),b=n(5),l=n(4),d=n(6),j=n.n(d),h=n(8),p=n.n(h),O=n(0),f=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.children,n=t.title;return Object(O.jsxs)("section",{className:p.a.Section,children:[Object(O.jsx)("p",{className:p.a.title,children:n}),e]})}}]),n}(a.Component);f.defaultProps={title:"Maybe here should be your advertising!"};var v=f,x=n(9),k=n.n(x),y=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.options,n=t.onLeaveFeedback;return Object(O.jsx)("div",{className:k.a.buttonContainer,children:Object.keys(e).map((function(t){return Object(O.jsx)("button",{className:k.a.feedbackButton,type:"button",onClick:function(){return n(t)},children:t},t)}))})}}]),n}(a.Component),_=n(10),m=n.n(_),g=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.good,n=t.neutral,a=t.bad,c=t.total,i=t.positivePercentage;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{className:m.a.title,children:"Statistics"}),Object(O.jsxs)("div",{className:m.a.statisticsBox,children:[Object(O.jsxs)("span",{children:["Good: ",Object(O.jsx)("b",{style:{color:"#0FDB8E"},children:e})]}),Object(O.jsxs)("span",{children:["Neutral: ",Object(O.jsx)("b",{children:n})]}),Object(O.jsxs)("span",{children:["Bad: ",Object(O.jsx)("b",{style:{color:"red"},children:a})]}),Object(O.jsxs)("span",{children:["Total: ",Object(O.jsx)("b",{children:c})]}),Object(O.jsxs)("span",{children:["Positive feedback: ",Object(O.jsx)("b",{children:i+" %"})]})]})]})}}]),n}(a.Component),F=n(13),N=n.n(F),S=function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props.text;return Object(O.jsx)("p",{className:N.a.notification,children:t})}}]),n}(a.Component);S.defaultProps={text:"404 Not found!"};var P=S,B=(n(21),function(t){Object(b.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handlerFeedbackUpdate=function(e){return t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t}return Object(u.a)(n,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(t,e){return t+e}),0)}},{key:"countPositiveFeedbackPercentage",value:function(){var t=this.state,e=t.good,n=100*e/(e+t.neutral+t.bad),a=n.toString().length>4?n.toFixed(1):n;return Number(a)}},{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad;return Object(O.jsxs)(v,{title:"Please leave feedback",children:[Object(O.jsx)(y,{options:this.state,onLeaveFeedback:this.handlerFeedbackUpdate}),this.countTotalFeedback()>0?Object(O.jsx)(g,{good:e,neutral:n,bad:a,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()}):Object(O.jsx)(P,{text:"No feedback given yet!"})]})}}]),n}(a.Component));g.propTypes={good:j.a.number.isRequired,neutral:j.a.number.isRequired,bad:j.a.number.isRequired};var C=B;r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(C,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={Section:"Section_Section__2Ac9Z",title:"Section_title__-bwvI"}},9:function(t,e,n){t.exports={buttonContainer:"FeedbackOptions_buttonContainer__2kPuB",feedbackButton:"FeedbackOptions_feedbackButton__2ahM0"}}},[[22,1,2]]]);
//# sourceMappingURL=main.952b5366.chunk.js.map