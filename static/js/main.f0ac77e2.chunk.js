(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(2),c=a.n(r),o=(a(12),a(3)),u=a(4),i=a(6),s=a(5);function d(e){var t=e.change1,a=e.change2,n=e.change3;return l.a.createElement("div",null,l.a.createElement("button",{onClick:t},"good"),l.a.createElement("button",{onClick:a},"neutral"),l.a.createElement("button",{onClick:n},"bad"))}function h(e){var t=e.good,a=e.neutral,n=e.bad,r=e.totalFeed,c=e.positive;return l.a.createElement("div",null,l.a.createElement("p",null,"good: ",t),l.a.createElement("p",null,"neutral: ",a),l.a.createElement("p",null,"bad: ",n),l.a.createElement("p",null,"total: ",r),l.a.createElement("p",null,"positive feedback: ",c," %"))}function g(e){var t=e.message;return l.a.createElement("p",null,t)}var b=function(e){Object(i.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={good:0,neutral:0,bad:0},e.handleChange1=function(t){e.setState({good:e.state.good+1})},e.handleChange2=function(t){e.setState({neutral:e.state.neutral+1})},e.handleChange3=function(t){e.setState({bad:e.state.bad+1})},e}return Object(u.a)(a,[{key:"render",value:function(){for(var e=0,t=0,a=Object.values(this.state);t<a.length;t++){e+=a[t]}var n=e,r=100*this.state.good/n;return l.a.createElement("div",null,l.a.createElement(d,{change1:this.handleChange1,change2:this.handleChange2,change3:this.handleChange3}),e>0?l.a.createElement(h,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,totalFeed:n,positive:r}):l.a.createElement(g,{message:"No feedback given"}))}}]),a}(l.a.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root"))},7:function(e,t,a){e.exports=a(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.f0ac77e2.chunk.js.map