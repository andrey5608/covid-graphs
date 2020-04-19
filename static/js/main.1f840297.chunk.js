(this["webpackJsonpcovid-graphs"]=this["webpackJsonpcovid-graphs"]||[]).push([[0],{25:function(e,t,n){e.exports=n(51)},30:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),s=(n(30),n(1)),i=n.n(s),u=n(4),l=n(14),h=n(15),d=n(3),p=n(21),v=n(22),f=n(16),m=n.n(f),y=n(5),b=n.n(y),k=n(8),w=n.n(k),E=n(19),C=n(20),g=n.n(C),D=(n(50),function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).refreshDataForCountry=e.refreshDataForCountry.bind(Object(d.a)(e)),e.state={dates:void 0,cases:void 0,deaths:void 0,recovered:void 0,country:"Russia",countries:void 0},e.handlePickUp=e.handlePickUp.bind(Object(d.a)(e)),e.componentDidMount=e.componentDidMount.bind(Object(d.a)(e)),e}return Object(h.a)(n,[{key:"refreshDataForCountry",value:function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r,o,c,s,u;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://andrey5608.github.io/covid19/timeseries.json").then((function(e){if(200!==e.status)throw new Error('Bad response: "'.concat(e,'"'));return e}));case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,r=[],o=[],c=[],s=[],u=[];try{Object.keys(a).forEach((function(e){return r.push({label:e,value:e})})),this.setState({countries:r}),a[t].forEach((function(e){o.push(w()(e.date,"YYYY-M-DD").format("DD.MM.YYYY")),c.push(e.confirmed),s.push(e.deaths),u.push(e.recovered)}))}catch(i){console.error("The country '".concat(t,"' was unexpected. ").concat(i)),alert("The country '".concat(t,"' was unexpected"))}this.setState({dates:o,cases:c,deaths:s,recovered:u});case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(u.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.refreshDataForCountry(this.state.country);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handlePickUp",value:function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,this.refreshDataForCountry(t);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.interval=null}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(g.a,null),r.a.createElement("header",{className:"App-header"},"COVID-19 statistics provided by",r.a.createElement("a",{href:"https://github.com/CSSEGISandData/COVID-19"},"Johns Hopkins CSSE")),r.a.createElement("div",{className:"App-main"},r.a.createElement("div",{style:{width:900}},r.a.createElement("div",null,r.a.createElement(m.a,{labels:this.state.dates,type:"line",backgroundColor:"white"},r.a.createElement(b.a,{title:"Deaths",values:this.state.deaths,backgroundColor:"red",borderColor:"red"}),r.a.createElement(b.a,{title:"Total cases",values:this.state.cases,backgroundColor:"whitesmoke",borderColor:"whitesmoke"}),r.a.createElement(b.a,{title:"Recovered",values:this.state.recovered,backgroundColor:"green",borderColor:"green"}))),r.a.createElement("div",null,r.a.createElement(E.Dropdown,{style:{width:150},value:this.state.country,options:this.state.countries,onChange:function(t){e.setState({country:t.value}),e.handlePickUp(t.value)},placeholder:"Select a country"})))))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.1f840297.chunk.js.map