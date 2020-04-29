(this.webpackJsonpmemory=this.webpackJsonpmemory||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/card.82b2042d.jpg"},27:function(e,t,a){e.exports=a(38)},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),i=a.n(c),o=a(6),s=a(7),l=a(9),d=a(8),u=a(19),p=a(11),f=a.n(p),m=a(17),h=a(25),v=a(13),b=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(v.a,{horizontal:!0,defaultActiveKey:"#easy"},r.a.createElement(v.a.Item,{action:!0,href:"#easy",onClick:function(){return e.props.onChange(8)}},"Easy"),r.a.createElement(v.a.Item,{action:!0,href:"#medium",onClick:function(){return e.props.onChange(12)}},"Medium"),r.a.createElement(v.a.Item,{action:!0,href:"#hard",onClick:function(){return e.props.onChange(16)}},"Hard"))}}]),a}(r.a.Component),y=a(26),E=a(24),j=a(23),O=a.n(j),g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"flip"},r.a.createElement("div",{className:"memory-card ".concat(this.props.card.visible?"flipped":""),onClick:function(){return e.props.onClick(e.props.card.id)},style:{pointerEvents:this.props.card.disabled?"none":"auto"}},r.a.createElement("img",{className:"face back",src:O.a,alt:""}),r.a.createElement("img",{className:"face front",src:this.props.card.url,alt:""})))}}]),a}(r.a.Component),k=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={cards:[],flippedId:void 0,boardDisabled:!1},e.Flip=function(t){if(!e.state.boardDisabled){e.setState({boardDisabled:!0});var a=Object(E.a)(e.state.cards),n=e.state.flippedId,r=a.findIndex((function(e){return e.id===t})),c=Object(y.a)({},a[r]);if(c.visible=!0,a[r]=c,n===c.matchId){var i=a.findIndex((function(e){return e.matchId===n&&!0===e.visible})),o=a[i];c.solved=!0,c.disabled=!0,o.solved=!0,o.disabled=!0,e.setState({flippedId:void 0,boardDisabled:!1})}else void 0===n?(e.setState({flippedId:c.matchId}),c.disabled=!0,e.setState({boardDisabled:!1})):(e.setState({flippedId:void 0}),a.forEach((function(e){e.disabled=!0})),setTimeout((function(){var t=a.findIndex((function(e){return e.matchId===n&&!0===e.visible})),i=a[t];c.visible=!1,i.visible=!1,a[r]=c,a[t]=i,a.forEach((function(e){e.solved||(e.disabled=!1)})),e.setState({cards:a,boardDisabled:!1})}),1e3));e.setState({cards:a})}},e}return Object(s.a)(a,[{key:"componentWillReceiveProps",value:function(e){this.setState({cards:e.cards})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"board"},this.state.cards.map((function(t){return r.a.createElement(g,{key:t.id,card:t,onClick:e.Flip})})))}}]),a}(r.a.Component),C=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={amount:8,cards:[]},e.changeDifficulty=function(){var t=Object(m.a)(f.a.mark((function t(a){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.state.cards=[],e.setState({amount:a}),t.next=4,e.getCards(a);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.reset=Object(m.a)(f.a.mark((function t(){return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.state.cards=[],t.next=3,e.getCards(e.state.amount);case 3:case"end":return t.stop()}}),t)}))),e.getCards=function(){var t=Object(m.a)(f.a.mark((function t(a){var n,r,c,i,o,s,l,d,u;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a/2,r=[],c=Math.floor(100*Math.random()),t.next=5,fetch("https://picsum.photos/v2/list?page=".concat(c,"&limit=").concat(n));case 5:return i=t.sent,t.next=8,i.json();case 8:for(o=t.sent,console.log(o),s=0,o.forEach((function(e){var t="https://picsum.photos/id/"+e.id+"/150/200";r.push({id:s,matchId:s,url:t,visible:!1,disabled:!1,solved:!1}),r.push({id:s+n,matchId:s,url:t,visible:!1,disabled:!1,solved:!1}),s++})),l=r.length-1;l>0;l--)d=Math.floor(Math.random()*(l+1)),u=[r[d],r[l]],r[l]=u[0],r[d]=u[1];e.setState({cards:r});case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getCards(this.state.amount)}},{key:"render",value:function(){return r.a.createElement("div",{className:"game"},r.a.createElement(k,{cards:this.state.cards}),r.a.createElement("div",{className:"controls"},r.a.createElement(b,{onChange:this.changeDifficulty}),r.a.createElement(h.a,{variant:"secondary",onClick:this.reset},"Reset")))}}]),a}(r.a.Component),I=(a(33),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(u.a,{bg:"dark",variant:"dark"},r.a.createElement(u.a.Brand,null,"MEMORY")),r.a.createElement(C,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.078baac9.chunk.js.map