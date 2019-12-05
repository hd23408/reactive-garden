(this["webpackJsonpreactive-garden"]=this["webpackJsonpreactive-garden"]||[]).push([[0],{14:function(t,e,r){},15:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),i=r(8),o=r.n(i),s=(r(14),r(1)),l=r(2),u=r(4),c=r(3),p=r(5),f=r(6),h=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t="M "+this.props.line.map((function(t){return t.get("x")+" "+t.get("y")})).join(" L ");return a.a.createElement("path",{class:"path",stroke:"black",d:t})}}]),e}(n.Component),v=function(t){function e(t){var r;return Object(s.a)(this,e),(r=Object(u.a)(this,Object(c.a)(e).call(this,t))).state={lines:new f.a.List},r}return Object(p.a)(e,t),Object(l.a)(e,[{key:"generateRules",value:function(){for(var t=this.props.axiom,e=0;e<this.props.loops;e++)t=this.expandRules(t);return t}},{key:"expandRules",value:function(t){var e="",r=[],n=!0,a=!1,i=void 0;try{for(var o,s=this.props.replacements.split(",")[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var l=o.value.split("="),u={findString:l[0].replace(/\(/,"").trim(),newString:l[1].replace(/\)/,"").trim()};r.push(u)}}catch(w){a=!0,i=w}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}var c=!0,p=!1,f=void 0;try{for(var h,v=t[Symbol.iterator]();!(c=(h=v.next()).done);c=!0){var y=h.value,b=!1,m=!0,d=!1,j=void 0;try{for(var k,O=r[Symbol.iterator]();!(m=(k=O.next()).done);m=!0){var g=k.value;if(g.findString===y){b=!0,e+=g.newString;break}}}catch(w){d=!0,j=w}finally{try{m||null==O.return||O.return()}finally{if(d)throw j}}b||(e+=y)}}catch(w){p=!0,f=w}finally{try{c||null==v.return||v.return()}finally{if(p)throw f}}return e}},{key:"toRadians",value:function(t){return t*(Math.PI/180)}},{key:"runTurtle",value:function(){var t=this,e=90,r=Number(this.props.startX),n=Number(this.props.startY),a=f.a.Stack(),i=Number(this.props.angle),o=Number(this.props.step),s=this.generateRules(),l=!0,u=!1,c=void 0;try{for(var p,h=s[Symbol.iterator]();!(l=(p=h.next()).done);l=!0){var v=p.value;if("F"===v||"G"===v)!function(){var a=new f.a.Map({x:r,y:n});r+=o*Math.cos(t.toRadians(e)),n-=o*Math.sin(t.toRadians(e));var i=new f.a.Map({x:r,y:n});t.setState((function(t){return{lines:t.lines.push(f.a.List([a,i]))}}))}();else if("+"===v)e+=i;else if("-"===v)e-=i;else if("["===v){var y={X:r,Y:n,A:e};a=a.push(y)}else if("]"===v){var b=a.first();a=a.pop(),r=b.X,n=b.Y,e=b.A}}}catch(m){u=!0,c=m}finally{try{l||null==h.return||h.return()}finally{if(u)throw c}}}},{key:"componentDidMount",value:function(){this.runTurtle()}},{key:"render",value:function(){var t=this.state.lines;return a.a.createElement("svg",{class:"drawArea"},t.map((function(t,e){return a.a.createElement(h,{key:e,line:t})})))}}]),e}(n.Component),y=function(t){function e(){return Object(s.a)(this,e),Object(u.a)(this,Object(c.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement(v,{angle:"90",step:"4",axiom:"FX",replacements:"(X = X+YF+), (Y = -FX-Y)",loops:"12",startX:"300",startY:"200"})}}]),e}(n.Component);o.a.render(a.a.createElement(y,null),document.getElementById("root"))},9:function(t,e,r){t.exports=r(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.6cb28580.chunk.js.map