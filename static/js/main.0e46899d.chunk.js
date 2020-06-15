(this["webpackJsonpdice-roller"]=this["webpackJsonpdice-roller"]||[]).push([[0],{14:function(e,t,l){e.exports=l(32)},31:function(e,t,l){},32:function(e,t,l){"use strict";l.r(t);var n=l(4),a=l(1),r=l(10),o=l(13),i=l(12),s=l(0),c=l.n(s),u=l(3),m=l.n(u);function d(e){return e.rolls.map((function(t,l){return c.a.createElement(h,{key:"roller-".concat(t.toString(),"__").concat(l),text:void 0===t.name?t.toString():t.name,onClick:function(){return e.onClick(t)}})}))}function h(e){return c.a.createElement("button",{className:"rollBtn",onClick:e.onClick},e.text)}var p=function(e){return c.a.createElement("div",{className:"input-container"},c.a.createElement(d,{rolls:e.rolls,onClick:function(t){return e.onClick(t)}}))};function f(e){return c.a.createElement("div",{className:"input-row"},c.a.createElement("label",{htmlFor:e.inputID,className:"label-".concat(e.inputID," input-label")},e.labelText),c.a.createElement("input",{id:"input-".concat(e.inputID),className:"input-text",type:"text",name:e.inputID,value:e.value,onChange:function(t){return e.handleChange(t)}}))}var v=function(e){return c.a.createElement("div",{className:"modal-content"},c.a.createElement("div",{className:"form-heading"},c.a.createElement("h3",null,"Add a custom Dice"),c.a.createElement("p",null,"Please enter custom dice size"),c.a.createElement("small",null,"(Number values only)")),c.a.createElement("div",{className:"modal-input-container"},c.a.createElement("form",{className:"custom-btn-form",onSubmit:e.handleSubmit},c.a.createElement(f,{inputID:"diceSize",labelText:"Dice Size (dX)",value:e.currentRoll.diceSize,handleChange:function(t){return e.handleFormChange(t)}}),c.a.createElement(f,{inputID:"numDice",labelText:"Number of Dice",value:e.currentRoll.numDice,handleChange:function(t){return e.handleFormChange(t)}}),c.a.createElement(f,{inputID:"postRollAdd",labelText:"Modifier to roll result",value:e.currentRoll.postRollAdd,handleChange:function(t){return e.handleFormChange(t)}}),c.a.createElement(f,{inputID:"numRolls",labelText:"How many times to perform Roll?",value:e.currentRoll.numRolls,handleChange:function(t){return e.handleFormChange(t)}}),c.a.createElement(f,{inputID:"name",labelText:"Name for your custom roll",value:e.currentRoll.name,handleChange:function(t){return e.handleFormChange(t)}}),c.a.createElement("div",{className:"input-row"},c.a.createElement("label",{htmlFor:"",className:"input-label"},"Your Custom Roll"),c.a.createElement("input",{type:"text",value:e.currentRoll.toString(),readOnly:!0})),c.a.createElement("div",{className:"input-row"},c.a.createElement("input",{id:"input-submit",className:"input-submit modal-btn",type:"submit",name:"input-submit",value:"Submit"})),c.a.createElement("div",{className:"input-row"},c.a.createElement("button",{className:"modal-close-btn modal-btn",onClick:function(){return e.closeModal()}},"Close")))))};function b(e){var t=-1,l=e.rollHistory.map((function(e){return t++,c.a.createElement("li",{key:"history-"+t},c.a.createElement(E,{result:e,contextClass:"historical-result"}))}));return c.a.createElement("div",{className:"result-history"},c.a.createElement("ul",{id:"result-history-list",className:"result-history-list"},l))}function E(e){var t=void 0===e.result.origin?"":e.result.origin.toString(),l=void 0===e.result.detail?"":e.result.printDetail();return c.a.createElement("div",{className:"result-wrapper "+e.contextClass},c.a.createElement("h4",{className:"result-header"},t),c.a.createElement("p",{className:"result-details"},l),c.a.createElement("p",{className:"result-display"},e.result.total))}function C(e){return c.a.createElement("button",{className:"addBtn",onClick:e.onClick},"Add Custom Roll")}var R=function(e){return c.a.createElement("div",{className:"display-container"},c.a.createElement(E,{result:e.currentResult,contextClass:"current-result"}),c.a.createElement("div",{className:"details-view"},c.a.createElement(b,{rollHistory:e.rollHistory}),c.a.createElement(C,{onClick:e.addButtonOnClick})))},g=l(11),y=l.n(g),N=function e(t){Object(a.a)(this,e),this.printDetail=function(){var e=this,t="";return this.detail.rolls.forEach((function(l){t+="(".concat(l).concat(0!==e.detail.add?" +"+e.detail.add:"","), ")})),t.slice(0,-2)},this.origin=t,this.total=0,this.detail={rolls:[],add:0,rollBuffer:[]}},D=function e(t,l,n,r,o){Object(a.a)(this,e),this.basicRoll=function(e){var t=Math.floor(Math.random()*Math.floor(this.diceSize)+1);return e.detail.rollBuffer.push(t),e.total+=t,e},this.fullRoll=function(e){return this.repeat_roll(this.numDice,this.basicRoll.bind(this),e),e.total+=this.postRollAdd,e.detail.rolls.push(e.detail.rollBuffer.slice(0)),e.detail.rollBuffer=[],e},this.repeat_roll=function(e,t,l){return t(l),--e>0?(this.repeat_roll(e,t,l),l):l},this.roll=function(){var e=new N(this);return this.repeat_roll(this.numRolls,this.fullRoll.bind(this),e),e.detail.add=this.postRollAdd,e},this.toString=function(){var e=1!==this.numDice,t=1!==this.numRolls,l=0!==this.postRollAdd,n="d".concat(this.diceSize);return n+=l?"+".concat(this.postRollAdd):"",e&&(n=this.numDice+n),t&&(n="".concat(this.numRolls,"[").concat(n,"]")),n};var i=parseInt(t),s=parseInt(l),c=parseInt(n),u=parseInt(r);void 0!==t&&Number.isInteger(i)?this.diceSize=parseInt(i):this.diceSize=20,void 0!==l&&Number.isInteger(s)?this.numDice=s:this.numDice=1,void 0!==n&&Number.isInteger(c)?this.postRollAdd=c:this.postRollAdd=0,void 0!==r&&Number.isInteger(u)?this.numRolls=u:this.numRolls=1,void 0!==o&&(this.name=o)},k=(l(30),l(31),function(e){Object(o.a)(l,e);var t=Object(i.a)(l);function l(e){var n;Object(a.a)(this,l);var r=(n=t.call(this,e)).createBasicDice();return n.state={currentResult:{},rolls:r,rollHistory:[],modalIsOpen:!1,nextCustomRoll:new D},n}return Object(r.a)(l,[{key:"componentDidUpdate",value:function(){this.scrollHistoryDown()}},{key:"createBasicDice",value:function(){var e=[];return[2,4,6,8,10,12,20,100].forEach((function(t){var l=new D(t);e=e.concat(l)})),e}},{key:"onClickDice",value:function(e){var t=e.roll();console.log(t);var l=this.state.rollHistory.concat(t);this.setState({currentResult:t,rollHistory:l})}},{key:"scrollHistoryDown",value:function(){var e=document.getElementById("result-history-list");e.scrollTop=e.scrollHeight}},{key:"showAddButtonModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.rolls.concat(this.state.nextCustomRoll),l=new D;this.setState({rolls:t,nextCustomRoll:l}),this.closeModal()}},{key:"handleFormChange",value:function(e){var t;if("name"===e.target.name){t=e.target.value;var l=Object.assign({},this.state.nextCustomRoll,Object(n.a)({},e.target.name,t));this.setState({nextCustomRoll:l})}else if(t=parseInt(e.target.value),Number.isInteger(t)){var a=Object.assign({},this.state.nextCustomRoll,Object(n.a)({},e.target.name,t));this.setState({nextCustomRoll:a})}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement(y.a,{isOpen:this.state.modalIsOpen,onRequestClose:function(){return e.closeModal()}},c.a.createElement(v,{closeModal:function(){return e.closeModal()},handleFormChange:function(t){return e.handleFormChange(t)},handleSubmit:function(t){return e.handleSubmit(t)},currentRoll:this.state.nextCustomRoll})),c.a.createElement(p,{onClick:function(t){return e.onClickDice(t)},rolls:this.state.rolls}),c.a.createElement(R,{currentResult:this.state.currentResult,rollHistory:this.state.rollHistory,addButtonOnClick:function(){return e.showAddButtonModal()}}))}}]),l}(c.a.Component));m.a.render(c.a.createElement(k,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0e46899d.chunk.js.map