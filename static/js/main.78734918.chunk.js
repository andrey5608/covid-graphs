(this["webpackJsonpcovid-graphs"]=this["webpackJsonpcovid-graphs"]||[]).push([[0],{21:function(e,t,n){e.exports=n(39)},26:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),c=n.n(o),s=(n(26),n(1)),i=n.n(s),u=n(3),h=n(12),l=n(13),d=n(2),p=n(17),v=n(18),m=n(14),f=n.n(m),y=n(4),b=n.n(y),C=n(6),w=n.n(C),g=(n(38),function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).refreshDataForCountry=e.refreshDataForCountry.bind(Object(d.a)(e)),e.state={dates:void 0,cases:void 0,deaths:void 0,recovered:void 0,country:"Russia"},e.handleChange=e.handleChange.bind(Object(d.a)(e)),e.componentDidMount=e.componentDidMount.bind(Object(d.a)(e)),e}return Object(l.a)(n,[{key:"refreshDataForCountry",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r,o,c,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://andrey5608.github.io/covid19/timeseries.json").then((function(e){if(200!==e.status)throw new Error('Bad response: "'.concat(e,'"'));return e}));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r=[],o=[],c=[],s=[];try{a[t].forEach((function(e){r.push(w()(e.date,"YYYY-M-DD").format("DD.MM.YYYY")),o.push(e.confirmed),c.push(e.deaths),s.push(e.recovered)}))}catch(i){console.error("The country '".concat(t,"' was unexpected. ").concat(i)),alert("The country '".concat(t,"' was unexpected"))}this.setState({dates:r,cases:o,deaths:c,recovered:s});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshDataForCountry(this.state.country);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshDataForCountry(t.target.value);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.interval=null}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"COVID-19 statistics provided by",r.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19"},"Johns Hopkins CSSE")),r.a.createElement("div",{className:"App-main"},r.a.createElement("div",{style:{width:900}},r.a.createElement("div",null,r.a.createElement(f.a,{labels:this.state.dates,type:"line"},r.a.createElement(b.a,{title:"Deaths",values:this.state.deaths,backgroundColor:"red",borderColor:"red"}),r.a.createElement(b.a,{title:"Total cases",values:this.state.cases,backgroundColor:"whitesmoke",borderColor:"whitesmoke"}),r.a.createElement(b.a,{title:"Recovered",values:this.state.recovered,backgroundColor:"green",borderColor:"green"}))),r.a.createElement("div",{onChange:function(t){return e.handleChange(t)}},r.a.createElement("input",{type:"radio",value:"Russia",name:"country",defaultChecked:"checked"}),"Russia",r.a.createElement("input",{type:"radio",value:"US",name:"country"})," United States"))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.78734918.chunk.js.map