(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(14),n(1)),s=n(2),u=n(4),l=n(3),h=n(5),d=(n(15),function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).colorSquares=function(){var e=t.props.current;console.log(e);var n=t.canvas.getContext("2d");n.lineWidth="0",n.clearRect(0,0,350,560),n.beginPath(),n.fillStyle="orange";for(var a=0;a<16;a++)for(var o=0;o<10;o++)n.rect(36*a,36*o,35,35);n.fill(),n.closePath()},t.canvas=null,t}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidUpdate",value:function(){this.colorSquares()}},{key:"componentDidMount",value:function(){this.colorSquares()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:"board"},o.a.createElement("canvas",{width:"350",height:"560",ref:function(e){return t.canvas=e}}))}}]),e}(a.Component)),v=function t(){Object(i.a)(this,t),this.shape=[[1,1],[1,1]],this.topLeft={row:0,col:4}},f=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(u.a)(this,Object(l.a)(e).call(this))).test=function(){var e=t.state.board;e[0][0]=1,t.setState({board:e})},t.state={board:[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]],currentTetro:new v},t}return Object(h.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=new v;this.setState({currentTetro:t})}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,{board:this.state.board,current:this.state.currentTetro}),o.a.createElement("button",{onClick:this.test},"Test"))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.9cd96ce2.chunk.js.map