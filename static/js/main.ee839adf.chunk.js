(this["webpackJsonpdice-roller"]=this["webpackJsonpdice-roller"]||[]).push([[0],[,,,,,,,function(e,t,r){e.exports=r(15)},,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(1),l=r(2),a=r(4),c=r(3),s=r(0),o=r.n(s),i=r(6),u=r.n(i);function m(e){return e.dice.map((function(t){return o.a.createElement(d,{key:"die-".concat(t),size:t,onClick:function(){return e.onClick(t)}})}))}function d(e){return o.a.createElement("button",{className:"diceBtn",onClick:e.onClick},"d",e.size)}var f=function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(l.a)(r,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"input-container"},o.a.createElement(m,{dice:this.props.basicDice,onClick:function(t){return e.props.onClick(t)}}))}}]),r}(o.a.Component);function h(e){var t=-1,r=e.rollHistory.map((function(e){return t++,o.a.createElement("li",{key:"history-"+t},o.a.createElement(y,{result:e,contextClass:"historical-result"}))}));return o.a.createElement("div",{className:"result-history"},o.a.createElement("ul",{id:"result-history-list",className:"result-history-list"},r))}function y(e){return o.a.createElement("div",{className:"result-wrapper "+e.contextClass},o.a.createElement("h4",{className:"result-details"},e.result.roll),o.a.createElement("p",{className:"result-display"},e.result.result))}var p=function(e){return o.a.createElement("div",{className:"display-container"},o.a.createElement(h,{rollHistory:e.rollHistory}),o.a.createElement(y,{result:e.currentResult,contextClass:"current-result"}))},v=(r(12),r(13),r(14),function(e){Object(a.a)(r,e);var t=Object(c.a)(r);function r(e){var l;return Object(n.a)(this,r),(l=t.call(this,e)).roll=function(e){return Math.floor(Math.random()*Math.floor(e)+1)},l.state={currentResult:{roll:"",result:0},rollHistory:[]},l}return Object(l.a)(r,[{key:"componentDidUpdate",value:function(){this.scrollHistoryDown()}},{key:"onClickDice",value:function(e){var t={roll:"1d".concat(e),result:this.roll(e)},r=this.state.rollHistory.concat(t);this.setState({currentResult:t,rollHistory:r})}},{key:"scrollHistoryDown",value:function(){var e=document.getElementById("result-history-list");e.scrollTop=e.scrollHeight}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container"},o.a.createElement(f,{onClick:function(t){return e.onClickDice(t)},basicDice:[2,4,6,8,10,12,20,100]}),o.a.createElement(p,{currentResult:this.state.currentResult,rollHistory:this.state.rollHistory}))}}]),r}(o.a.Component));u.a.render(o.a.createElement(v,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.ee839adf.chunk.js.map