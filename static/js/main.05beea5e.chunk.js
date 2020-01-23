(this["webpackJsonpreactive-garden"]=this["webpackJsonpreactive-garden"]||[]).push([[0],{26:function(e,t,n){e.exports=n(39)},31:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(16),o=n.n(l),s=(n(31),n(2)),i=n(3),c=n(5),u=n(4),m=n(6),g=n(14),p=n(11),h=n(12),d=n.n(h),f=n(7),b=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.line,n=e.color,a="M "+t.map((function(e){return e.get("x")+" "+e.get("y")})).join(" L ");return r.a.createElement("path",{className:"path",stroke:n,d:a})}}]),t}(a.Component),C=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.turtleLines,t=this.props.visibility;return r.a.createElement("svg",{className:t},e.map((function(e,t){return r.a.createElement(b,{key:t,line:e.get("line"),color:e.get("color")})})))}}]),t}(a.Component),w=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))},n.state={turtleInstructions:f.a.List(),turtleLines:f.a.List(),needsToGrow:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"drawLSystem",value:function(){var e=this,t=this.props.rule,n=t.axiom,a="addGrowSteps"in t&&t.addGrowSteps,r=[],l=!0,o=!1,s=void 0;try{for(var i,c=t.replacements.split(",")[Symbol.iterator]();!(l=(i=c.next()).done);l=!0){var u=i.value.split("="),m={findString:u[0].replace(/\(/,"").trim(),newString:u[1].replace(/\)/,"").trim()};r.push(m)}}catch(h){o=!0,s=h}finally{try{l||null==c.return||c.return()}finally{if(o)throw s}}for(var g=function(){var l=e.expandInstructions(n,r,p,!1);if(a||p===t.loops-1){var o=e.runTurtle(l);e.setState((function(e){return{turtleInstructions:e.turtleInstructions.push(l),turtleLines:e.turtleLines.push(o)}}))}n=l},p=0;p<t.loops;p++){g()}this.setState((function(e){return{needsToGrow:!0}}))}},{key:"expandInstructions",value:function(e,t,n,a){var r="";a&&(console.log("----------------"),console.log(" Generation "+n),console.log("Starting with: "+e));var l=!0,o=!1,s=void 0;try{for(var i,c=e[Symbol.iterator]();!(l=(i=c.next()).done);l=!0){var u=i.value,m=!1;if("!"===u)r+="!*",a&&console.log("Replacing ! with !*");else{var g=!0,p=!1,h=void 0;try{for(var d,f=t[Symbol.iterator]();!(g=(d=f.next()).done);g=!0){var b=d.value;if(b.findString===u){m=!0,r+=b.newString,a&&console.log("Replacing "+b.findString+" with "+b.newString);break}}}catch(C){p=!0,h=C}finally{try{g||null==f.return||f.return()}finally{if(p)throw h}}m||(a&&console.log("Adding "+u+" as is"),r+=u)}}}catch(C){o=!0,s=C}finally{try{l||null==c.return||c.return()}finally{if(o)throw s}}return a&&(console.log("Final expansion: "),console.log(r)),r}},{key:"toRadians",value:function(e){return e*(Math.PI/180)}},{key:"randomInteger",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"runTurtle",value:function(e){var t=e,n=this.props.rule,a=Number(n.angle),r=Number(n.step),l="RANDOM";"fColor"in n&&(l=n.fColor),l=l.toUpperCase();var o="RANDOM";"gColor"in n&&(o=n.gColor),o=o.toUpperCase();var s="RANDOM";"bangColor"in n&&(s=n.bangColor),s=s.toUpperCase();for(var i=90,c=Number(n.startX),u=Number(n.startY),m=f.a.Stack(),g={visibility:"hidden drawing",lines:f.a.List()},p="#000000",h=r,d=a,b="+",C=0;C<t.length;C++){var w=t.charAt(C).toUpperCase();if("F"===w||"G"===w||"!"===w){if("F"===w?p=l:"G"===w?p=o:"!"===w&&(p=s),"RANDOM"===p&&(p="#00"+String(this.randomInteger(6666,9999)).padStart(4,"0")),h=r,"!"!==w&&Math.random()<n.wrongStepChance&&(h=this.randomInteger(1,2*r)),"!"===w){for(var E=1;C+E<t.length&&"*"===t.charAt(C+E);)E++;C=C+E-1,h=r*E}var v=new f.a.Map({x:c,y:u});c+=h*Math.cos(this.toRadians(i)),u-=h*Math.sin(this.toRadians(i));var y=new f.a.Map({x:c,y:u});g.lines=g.lines.push(f.a.Map({line:f.a.List([v,y]),color:p}))}else if("+"===w||"-"===w)d=a,Math.random()<n.wrongAngleChance&&(d=this.randomInteger(-10,10)),b=w,Math.random()<n.wrongTurnChance&&(b="+"===b?"-":"+"),"+"===b?i+=d:i-=d;else if("["===w){var F={X:c,Y:u,A:i};m=m.push(F)}else if("]"===w){var S=m.first();m=m.pop(),c=S.X,u=S.Y,i=S.A}}return g}},{key:"grow",value:function(){var e,t;return d.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:e=this.state.turtleLines,this.setState((function(e){return{needsToGrow:!1,inGrowth:!0}})),t=0;case 3:if(!(t<e.size)){n.next=12;break}return 0!==t&&(e.get(t-1).visibility="hidden drawing"),e.get(t).visibility="drawing",this.setState((function(t){return{turtleLines:e}})),n.next=9,d.a.awrap(this.sleep(250));case 9:t++,n.next=3;break;case 12:case"end":return n.stop()}}),null,this)}},{key:"UNSAFE_componentWillMount",value:function(){this.drawLSystem()}},{key:"componentDidMount",value:function(){this.grow()}},{key:"shouldComponentUpdate",value:function(e,t){return e.rule!==this.props.rule||this.state.needsToGrow||this.state.inGrowth}},{key:"componentDidUpdate",value:function(e,t){e.rule!==this.props.rule?(this.setState((function(e){return{turtleInstructions:f.a.List(),turtleLines:f.a.List(),needsToGrow:!1,inGrowth:!1}})),this.drawLSystem()):this.state.needsToGrow&&this.grow()}},{key:"render",value:function(){var e=this.state.turtleLines;return r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement(C,{key:t,visibility:e.visibility,turtleLines:e.lines})})))}}]),t}(a.Component),E=n(22),v=f.a.OrderedMap().set("Sierpinski Triangle",{rules:{angle:"120",step:"7",axiom:"F-G-G",replacements:"(F = F-G+F+G-F), (G = GG)",loops:"6",fColor:"RANDOM",gColor:"RANDOM",bangColor:"RANDOM",startX:"150",startY:"500",gardenStep:"6",gardenLoops:"3",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"}}).set("Koch Curve",{rules:{angle:"90",step:"6",axiom:"-F",replacements:"(F = F+F-F-F+F)",loops:"4",fColor:"RANDOM",gColor:"RANDOM",bangColor:"RANDOM",startX:"50",startY:"500",gardenStep:"3",gardenLoops:"3",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"}}).set("Kolam",{rules:{angle:"15",step:"10",axiom:"GGGG",replacements:"(G = X+X+X+X+X+X+), (X = [F+F+F+F[---X-Y]+++++F++++++++F-F-F-F]), (Y = [F+F+F+F[---Y]+++++F++++++++F-F-F-F])",loops:"5",fColor:"#ff944d",gColor:"#00ace6",bangColor:"RANDOM",startX:"300",startY:"300",gardenStep:"5",gardenLoops:"2",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"}}).set("Dragon Curve",{rules:{angle:"90",step:"4",axiom:"FX",replacements:"(X = X+YG+), (Y = -FX-Y), (G = F)",loops:"12",fColor:"#ac3939",gColor:"#e60000",bangColor:"RANDOM",startX:"300",startY:"300",gardenStep:"3",gardenLoops:"6",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"}}).set("Anklets of Krishna",{rules:{angle:"90",step:"4",axiom:"F+XF+F+XF",replacements:"(X = XF-F-F+XF+F+XF-F-F+X)",loops:"5",fColor:"RANDOM",gColor:"RANDOM",bangColor:"RANDOM",startX:"400",startY:"400",gardenStep:"3",gardenLoops:"3",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"}}).set("Gosper Curve",{rules:{angle:"60",step:"9",axiom:"F",replacements:"(F = F+G++G-F--FF-G+), (G = -F+GG++G+F--F-G)",loops:"4",fColor:"#996600",gColor:"#ffaa80",bangColor:"#996600",startX:"550",startY:"250",gardenStep:"3",gardenLoops:"3",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"}}).set("Binary Tree",{rules:{angle:"25",step:"4",axiom:"F",replacements:"(G = GG), (F = G[+F]-F)",loops:"7",fColor:"#ff3399",gColor:"#336600",bangColor:"#336600",startX:"300",startY:"600",gardenStep:"2",gardenLoops:"5",wrongStepChance:"0.25",wrongTurnChance:"0.00",wrongAngleChance:"0.25"}}).set("Dandelion",{rules:{angle:"60",step:"12",axiom:"!X!!FF",replacements:"(F = F[-F][+F][F]), (X = [+G[-G[+G]][-G[+G]]!]Y[-G[+G]!]), (Y = GGG)",loops:"5",fColor:"#e6e600",gColor:"#004d00",bangColor:"#004d00",startX:"300",startY:"600",gardenStep:"3",gardenLoops:"4",wrongStepChance:"0.00",wrongTurnChance:"0.10",wrongAngleChance:"0.05"}}).set("Feather Tree",{rules:{angle:"25",step:"10",axiom:"!!FF",replacements:"(F = F[-F][+F[+F]]![+F][-F[-F]])",loops:"4",fColor:"RANDOM",gColor:"RANDOM",bangColor:"#008000",startX:"300",startY:"600",gardenStep:"3",gardenLoops:"3",wrongStepChance:"0.30",wrongTurnChance:"0.05",wrongAngleChance:"0.00"}}).set("Algae",{rules:{angle:"20",step:"15",axiom:"F",replacements:"(F = F[+F]F[-F]F)",loops:"3",fColor:"RANDOM",gColor:"RANDOM",bangColor:"RANDOM",startX:"300",startY:"600",gardenStep:"3",gardenLoops:"3",wrongStepChance:"0.00",wrongTurnChance:"0.75",wrongAngleChance:"0.00"}}).set("Berry Bush",{rules:{angle:"25",step:"4",axiom:"F",replacements:"(F = G[+F][-F]GF), (G = GG)",loops:"6",fColor:"#bf00ff",gColor:"#336600",bangColor:"#009973",startX:"300",startY:"600",gardenStep:"3",gardenLoops:"4",wrongStepChance:"0.50",wrongTurnChance:"0.00",wrongAngleChance:"0.50"}}).set("Little Bush",{rules:{angle:"23",step:"20",axiom:"X",replacements:"(X = F-[[X]+X]+F[-FX]+X)",loops:"5",fColor:"RANDOM",gColor:"RANDOM",bangColor:"RANDOM",startX:"300",startY:"600",gardenStep:"6",gardenLoops:"4",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.75"}}).set("Fractal Plant",{rules:{angle:"25",step:"7",axiom:"X",replacements:"(X = F+[[X]-X]-F[-GX]+X), (F = FF), (G = GG)",loops:"5",fColor:"#336600",gColor:"#86b300",bangColor:"#336600",startX:"300",startY:"600",gardenStep:"2",gardenLoops:"4",wrongStepChance:"0.25",wrongTurnChance:"0.00",wrongAngleChance:"0.25"}}).set("Thorny Bush",{rules:{angle:"6",step:"25",axiom:"F",replacements:"(F = ![-----F][+++++++F]+![----F][+++++++F]+![---F][+++++F]+!F)",loops:"3",fColor:"#99e6ff",gColor:"RANDOM",bangColor:"RANDOM",startX:"400",startY:"600",gardenStep:"4",gardenLoops:"3",wrongStepChance:"0.00",wrongTurnChance:"0.05",wrongAngleChance:"0.15"}}).set("Bushy Tree",{rules:{angle:"15",step:"9",axiom:"!F",replacements:"(F = FF-[-F+F+F]+[+F-G-G]), (G = F)",loops:"4",fColor:"#996600",gColor:"#ffaa80",bangColor:"#996600",startX:"300",startY:"600",gardenStep:"3",gardenLoops:"3",wrongStepChance:"0.05",wrongTurnChance:"0.00",wrongAngleChance:"0.10"}}).set("Thistle",{rules:{angle:"20",step:"8",axiom:"!!GF",replacements:"(F = GGG-[-F+F+F]+[+F-F+F])",loops:"4",fColor:"#ff3399",gColor:"#336600",bangColor:"#336600",startX:"300",startY:"600",gardenStep:"2",gardenLoops:"3",wrongStepChance:"0.10",wrongTurnChance:"0.00",wrongAngleChance:"0.10"}});function y(e){return""!==e.prevRules?r.a.createElement("span",null,r.a.createElement("br",null),r.a.createElement("input",{className:"noIndent",type:"button",value:"Revert to Previous",onClick:e.onClick}),r.a.createElement("input",{type:"text",name:"prevReplacements",size:"50",value:e.prevRules,disabled:!0})):r.a.createElement("span",null)}var F=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,r=t.name;n.setState(Object(E.a)({},r,a))},n.fillRules=function(e){n.setState(e,(function(){return n.submitForm()}))},n.submitForm=function(){n.setState({randomNumberForFormSubmittal:Math.random()},(function(){return n.props.handleSubmit(n.state,"false")}))},n.mutate=function(){var e=n.state.replacements,t=e.split(","),a=Math.floor(2*Math.random()),r=Math.floor(Math.random()*t.length),l=["+","-","!","F","G"],o="",s=!0,i=!1,c=void 0;try{for(var u,m=t[Symbol.iterator]();!(s=(u=m.next()).done);s=!0){var g=u.value.split("=")[0].replace(/\(/,"").trim().split("");l=l.concat(g)}}catch(E){i=!0,c=E}finally{try{s||null==m.return||m.return()}finally{if(i)throw c}}if(l=l.filter((function(e,t){return l.indexOf(e)===t})),0===a)for(var p=l[Math.floor(Math.random()*l.length)],h=0;h<t.length;h++)if(h===r){var d=t[h].split("="),f={findString:d[0].replace(/\(/,"").trim(),newString:d[1].replace(/\)/,"").trim()},b=Math.floor(Math.random()*(f.newString.length+1));console.log("Adding '"+p+"' at "+b+" in rule "+r),o+="("+f.findString+" = "+f.newString.substr(0,b)+p+f.newString.substr(b)+"), "}else o+=t[h]+", ";else{var C=n.deleteFromRule(t,r,l);if(!C.found)for(var w=0;w<t.length&&!(C=n.deleteFromRule(t,w,l)).found;w++);o=C.newReplacements}o=o.slice(0,-2),n.setState({prevReplacements:e,replacements:o,addGrowSteps:!1,randomNumberForFormSubmittal:Math.random()},(function(){return n.props.handleSubmit(n.state,"false")}))},n.revert=function(){var e=n.state.prevReplacements,t=n.state.replacements;n.setState({replacements:e,prevReplacements:t,addGrowSteps:!1,randomNumberForFormSubmittal:Math.random()},(function(){return n.props.handleSubmit(n.state,"false")}))},n.getLink=function(){var e=n.state,t=e.angle,a=e.step,r=e.axiom,l=e.prevReplacements,o=e.replacements,s=e.loops,i=e.startX,c=e.startY,u=e.fColor,m=e.gColor,g=e.bangColor,p=e.wrongStepChance,h=e.wrongTurnChance,d=e.wrongAngleChance,f=e.addGrowSteps,b=window.location.origin+"/reactive-garden/home?angle="+encodeURIComponent(t)+"&step="+encodeURIComponent(a)+"&axiom="+encodeURIComponent(r)+"&replacements="+encodeURIComponent(o)+"&loops="+encodeURIComponent(s)+"&startX="+encodeURIComponent(i)+"&startY="+encodeURIComponent(c)+"&fColor="+encodeURIComponent(u)+"&gColor="+encodeURIComponent(m)+"&bangColor="+encodeURIComponent(g);console.log(p),console.log(h),console.log(d),console.log(f),console.log(l),console.log(b);var C=document.createElement("textarea");C.value=b,document.body.appendChild(C),C.select(),document.execCommand("copy"),document.body.removeChild(C)},n.initialState={angle:e.rule.angle,step:e.rule.step,axiom:e.rule.axiom,prevReplacements:"",replacements:e.rule.replacements,loops:e.rule.loops,startX:e.rule.startX,startY:e.rule.startY,fColor:e.rule.fColor,gColor:e.rule.gColor,bangColor:e.rule.bangColor,wrongStepChance:e.rule.wrongStepChance,wrongTurnChance:e.rule.wrongTurnChance,wrongAngleChance:e.rule.wrongAngleChance,addGrowSteps:e.rule.addGrowSteps},n.state=n.initialState,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"deleteFromRule",value:function(e,t,n){for(var a="",r=0;r<e.length;r++)if(r===t){var l=e[r].split("="),o={findString:l[0].replace(/\(/,"").trim(),newString:l[1].replace(/\)/,"").trim()},s=Math.floor(Math.random()*(o.newString.length+1)),i=!1,c=this.deleteStartingAt(s,o,a,n,t);if(a=c.newReplacements,!(i=c.found)){var u=this.deleteStartingAt(0,o,a,n,t);a=u.newReplacements,i=u.found}i||(a+=e[r].trim()+", ")}else a+=e[r].trim()+", ";return{newReplacements:a,found:i}}},{key:"deleteStartingAt",value:function(e,t,n,a,r){for(var l=!1,o=e;o<t.newString.length;o++)if(a.indexOf(t.newString.charAt(o))>-1){console.log("Deleting '"+t.newString.charAt(o)+"' at "+o+" in rule "+r),n+="("+t.findString+" = "+t.newString.substr(0,o)+t.newString.substr(o+1)+"), ",l=!0;break}return{newReplacements:n,found:l}}},{key:"render",value:function(){var e=this.state,t=e.angle,n=e.step,a=e.axiom,l=e.prevReplacements,o=e.replacements,s=e.loops,i=e.startX,c=e.startY,u=e.fColor,m=e.gColor,g=e.bangColor,p=e.wrongStepChance,h=e.wrongTurnChance,d=e.wrongAngleChance,f=e.addGrowSteps,b=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"examples"},r.a.createElement("h3",null,"Examples"),r.a.createElement("p",null,"Click on the name to try it out! Rules will be auto-populated in the form to the right."),r.a.createElement("ul",{className:"columns"},v.toArray().map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){return b.fillRules({axiom:e[1].rules.axiom,prevReplacements:"",replacements:e[1].rules.replacements,angle:e[1].rules.angle,step:e[1].rules.step,loops:e[1].rules.loops,startX:e[1].rules.startX,startY:e[1].rules.startY,fColor:e[1].rules.fColor,gColor:e[1].rules.gColor,bangColor:e[1].rules.bangColor,wrongStepChance:"0.00",wrongAngleChance:"0.00",wrongTurnChance:"0.00",addGrowSteps:!0})}},r.a.createElement("strong",null,e[0])))})))),r.a.createElement("div",{className:"instructions"},r.a.createElement("h3",null,"L-system rules"),r.a.createElement("form",null,r.a.createElement("label",null,"Axiom (initial string)"),r.a.createElement("input",{type:"text",name:"axiom",size:"10",value:a,onChange:this.handleChange}),r.a.createElement(y,{prevRules:l,onClick:this.revert}),r.a.createElement("br",null),r.a.createElement("label",null,"Replacement Rules"),r.a.createElement("input",{type:"text",name:"replacements",size:"50",value:o,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Angle for Turns"),r.a.createElement("input",{type:"text",name:"angle",size:"5",value:t,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Step Size (length of line)"),r.a.createElement("input",{type:"text",name:"step",size:"5",value:n,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Loops (number of recursions)"),r.a.createElement("input",{type:"text",name:"loops",size:"5",value:s,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Initial X Position"),r.a.createElement("input",{type:"text",name:"startX",size:"5",value:i,onChange:this.handleChange}),r.a.createElement("label",null,"Initial Y Position"),r.a.createElement("input",{type:"text",name:"startY",size:"5",value:c,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"'F' Color"),r.a.createElement("input",{type:"text",name:"fColor",size:"8",value:u,onChange:this.handleChange}),r.a.createElement("label",null,"'G' Color"),r.a.createElement("input",{type:"text",name:"gColor",size:"8",value:m,onChange:this.handleChange}),r.a.createElement("label",null,"'!' Color"),r.a.createElement("input",{type:"text",name:"bangColor",size:"8",value:g,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Draw growth steps"),r.a.createElement("input",{type:"checkbox",name:"addGrowSteps",checked:f,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",null,"Buy the turtle a drink!"),r.a.createElement("br",null),"Enter the following probabilities in decimal (e.g. 0.25 == 25% chance)",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"wrongStepChance",size:"8",value:p,onChange:this.handleChange}),r.a.createElement("label",null,"Probability that a step will be somewhat longer or shorter"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"wrongTurnChance",size:"8",value:h,onChange:this.handleChange}),r.a.createElement("label",null,"Probability of turning in the wrong direction"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"wrongAngleChance",size:"8",value:d,onChange:this.handleChange}),r.a.createElement("label",null,"Probability that a turn angle will be somewhat narrower or wider"),r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}),r.a.createElement("input",{type:"button",value:"Mutate",onClick:this.mutate}),r.a.createElement("input",{type:"button",value:"Get Link",onClick:this.getLink}))),r.a.createElement("div",{className:"instructions"},r.a.createElement("h3",null,"Instructions"),'To run an L-system, enter the required information and press "submit". Some notes:',r.a.createElement("ul",null,r.a.createElement("li",null,'The "Replacement Rule" should consist one or more comma-separated replacement rules, of the format "( X = Y )" -- see examples, below'),r.a.createElement("li",null,"The rules use the following symbols:",r.a.createElement("ul",null,r.a.createElement("li",null,"'F' and 'G' each draw a single line segment"),r.a.createElement("li",null,"'+' and '-' rotate the turtle to the left and right respectively (by the defined angle)"),r.a.createElement("li",null,"'[' and ']' store and recall a particular XY coordinate for the turtle (i.e. allow the turtle to teleport back to a previous location)"),r.a.createElement("li",null,"'!' will draw a line segment that is larger if it's older, by a factor of how many generations old it is. In other words, a '!' that is added to the output string in the first loop will be 6 times longer than a '!' that's added to the output string in the sixth loop."),r.a.createElement("li",null,"'X', 'Y', and all other characters are no-ops and are used as placeholders in the rules for more complicated expansions (see \"Christmas Tree\" for an example)"))),r.a.createElement("li",null,"Don't use too many recursions, or the JavaScript will freak out. Limiting to 6 loops is a good rule of thumb."),r.a.createElement("li",null,'If you\'re having trouble seeing the entire resulting drawing, try reducing the "Step Size" to make it smaller'),r.a.createElement("li",null,'You can also use the "F Color", "G Color" and "\'!\' Color" fields to set colors for the various letters. If using hex colors, please include the "#" at the beginning! (Set these to the string \'random\' if you want it to just choose some random colors from the blue-green spectrum for each line.)'),r.a.createElement("li",null,"NOTE: INPUTS ARE NOT CURRENTLY BEING SANITIZED! If you get an error, probably it's a parsing issue. Check your rules in particular."))))}}]),t}(a.Component),S=n(23),k=n.n(S),A=function(e){function t(e){var n;Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){n.setState({rule:e})};var a=v.toList(),r=a.size,l={},o=k.a.parse(n.props.location.search);if("undefined"!==typeof o.axiom)l={angle:o.angle,step:o.step,axiom:o.axiom,replacements:o.replacements,loops:o.loops,startX:o.startX,startY:o.startY,fColor:o.fColor,gColor:o.gColor,bangColor:o.bangColor,addGrowSteps:!1};else{var i=Math.floor(Math.random()*Math.floor(r));l=a.get(i).rules,l=Object.assign(l,{addGrowSteps:!0})}return n.initialState={rule:Object.assign({},l,{wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"})},n.state=n.initialState,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.rule;return r.a.createElement("div",null,r.a.createElement("div",{className:"drawArea"},r.a.createElement(w,{rule:e})),r.a.createElement(F,{handleSubmit:this.handleSubmit,rule:e}))}}]),t}(a.Component),x=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))},n.triggerBreeze=function(){d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("function2"),e.next=3,d.a.awrap(n.wave(1));case 3:case"end":return e.stop()}}))},n.shuffle=function(){for(var e=f.a.List(v).slice(6),t=e.size,a=f.a.List(),r=0;r<=4;r++)for(var l=0;l<=4;l++){var o=Math.floor(Math.random()*Math.floor(t)),s=e.get(o)[1].rules,i=s.startX/600*120,c=s.startY/600*120;a=a.push(Object.assign({},s,{startX:i,startY:c,step:s.gardenStep,loops:s.gardenLoops,name:e.get(o)[0]}))}n.setState({organisms:a})},n.initialState={organisms:f.a.List()},n.state=n.initialState,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.shuffle()}},{key:"wave",value:function(e){var t,n,a,r=this;return d.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(console.log(e),this.forceUpdate(),!(e<50)){l.next=8;break}return l.next=5,d.a.awrap(this.sleep(250));case 5:for(t=f.a.List(),n=0;n<25;n++)a=this.state.organisms.get(n),t=t.push(Object.assign({},a,{wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.05",randomNumber:Math.random()}));this.setState({organisms:t},(function(){return r.wave(++e)}));case 8:case"end":return l.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.organisms;return r.a.createElement("div",null,r.a.createElement("div",{className:"drawArea"},e.map((function(e,t){return r.a.createElement("div",{key:t,className:"gardenPlot"},r.a.createElement(w,{key:t,rule:e}),r.a.createElement("div",{className:"footnote"},t+1))}))),r.a.createElement("div",{className:"instructions"},r.a.createElement("ol",{className:"columns"},e.map((function(e,t){return r.a.createElement("li",{key:t},e.name)}))),r.a.createElement("div",{className:"button"},r.a.createElement("button",{onClick:this.shuffle},"Shuffle"),r.a.createElement("button",{onClick:this.triggerBreeze},"Breeze"))))}}]),t}(a.Component),G=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).showAnswer=function(e){var t=document.getElementById("answer");o.a.findDOMNode(t).style.display="block"},n.turnPage=function(e){document.querySelectorAll("div.slide").forEach((function(e){return n.refs[e.id].className="hidden"})),n.refs[e.target.value].className="selected slide"},n.initialState={page:1},n.state=n.initialState,n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"selected slide",id:"1",ref:"1"},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:this.turnPage,ref:"page1button1",value:"1",className:"selected"},"1"),r.a.createElement("button",{onClick:this.turnPage,ref:"page1button2",value:"2"},"2"),r.a.createElement("button",{onClick:this.turnPage,ref:"page1button3",value:"3"},"3"),r.a.createElement("button",{onClick:this.turnPage,ref:"page1button4",value:"4"},"4"),r.a.createElement("button",{onClick:this.turnPage,ref:"page1button5",value:"5"},"5")),r.a.createElement("h2",null,"What is an L-system?"),r.a.createElement("p",null,"An L-system is a parallel rewriting system, and a type of formal grammar. In short, it's a way of describing ... well, all sorts of stuff.",r.a.createElement("sup",null,"1")),r.a.createElement("p",null,"According to ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/L-system",target:"_new"},"Wikipedia"),":",r.a.createElement("br",null),r.a.createElement("em",null,"\"An L-system consists of an alphabet of symbols that can be used to make strings, a collection of production rules that expand each symbol into some larger string of symbols, an initial 'axiom' string from which to begin construction, and a mechanism for translating the generated strings into geometric structures.\"")),r.a.createElement("p",null,"You can think of it kind of like a computer programming language. In particular, it does a lot of stuff with replacements and recursion."),r.a.createElement("p",null,"L-systems were developed in 1968 by Aristid Lindenmayer, a Hungarian theoretical biologist and botanist at the University of Utrecht. He used L-systems to describe the behaviour of plant cells and to model the growth processes of plant development."),r.a.createElement("p",null,"Yeah, that's right, a botanist invented a programming language so that he could describe algae."),r.a.createElement("div",{className:"footnote"},"[1] ",r.a.createElement("em",null,r.a.createElement("a",{href:"https://www.sciencedirect.com/science/article/pii/S0022519369800305",target:"_new"},"Computing ability of a developmental model for filamentous organisms"))),r.a.createElement("p",null,"\xa0")),r.a.createElement("div",{className:"slide hidden",id:"2",ref:"2"},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:this.turnPage,ref:"page2button1",value:"1"},"1"),r.a.createElement("button",{onClick:this.turnPage,ref:"page2button2",value:"2",className:"selected"},"2"),r.a.createElement("button",{onClick:this.turnPage,ref:"page2button3",value:"3"},"3"),r.a.createElement("button",{onClick:this.turnPage,ref:"page2button4",value:"4"},"4"),r.a.createElement("button",{onClick:this.turnPage,ref:"page2button5",value:"5"},"5")),r.a.createElement("h2",null,"How Does it Work?"),r.a.createElement("p",null,"Evaluating an L-system consists of two main steps:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Compute a string that contains a set of instructions"),r.a.createElement("li",null,'Use a "turtle" to draw a shape by following the instructions')),r.a.createElement("h5",null,"Example"),r.a.createElement("p",null,"Let's start with a vocabulary. L-system vocabularies can get complicated, and different implementations use different symbols, but these two symbols are pretty standard:"),r.a.createElement("ul",null,r.a.createElement("li",null,"'F' means \"Draw a line segment\""),r.a.createElement("li",null,"'+' means \"Turn\" (you get to choose the angle)")),r.a.createElement("p",null,'When we go to draw the L-system, we use a list of these symbols and interpret them as instructions for drawing. For instance, the instructions "F+F" mean "draw a line segment, turn, and draw another line segment."')),r.a.createElement("div",{className:"slide hidden",id:"3",ref:"3"},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:this.turnPage,ref:"page3button1",value:"1"},"1"),r.a.createElement("button",{onClick:this.turnPage,ref:"page3button2",value:"2"},"2"),r.a.createElement("button",{onClick:this.turnPage,ref:"page3button3",value:"3",className:"selected"},"3"),r.a.createElement("button",{onClick:this.turnPage,ref:"page3button4",value:"4"},"4"),r.a.createElement("button",{onClick:this.turnPage,ref:"page3button5",value:"5"},"5")),r.a.createElement("h2",null,"How Does it Work? (cont.)"),r.a.createElement("p",null,'Now you need a starting string ("axiom"). If you wanted you could just start with something like "F+F+F+F+" right out of the gate and call it a day. (Or call it a square, if you went with a 90 degree angle. Heh.) But that\'s boring.'),r.a.createElement("p",null,"The thing that makes L-systems interesting is their use of replacement rules. So, for instance, you could say something like this:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Axiom: F"),r.a.createElement("li",null,"Replacement rule: F = F+F"),r.a.createElement("li",null,"Number of loops: 3")),r.a.createElement("p",null,"And when you evaluate it, you get this!"),r.a.createElement("ol",{className:"zero_indexed"},r.a.createElement("li",null,"F"),r.a.createElement("li",null,"F+F"),r.a.createElement("li",null,"F+F + F+F"),r.a.createElement("li",null,"F+F + F+F  +  F+F + F+F"))),r.a.createElement("div",{className:"slide hidden",id:"4",ref:"4"},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:this.turnPage,ref:"page4button1",value:"1"},"1"),r.a.createElement("button",{onClick:this.turnPage,ref:"page4button2",value:"2"},"2"),r.a.createElement("button",{onClick:this.turnPage,ref:"page4button3",value:"3"},"3"),r.a.createElement("button",{onClick:this.turnPage,ref:"page4button4",value:"4",className:"selected"},"4"),r.a.createElement("button",{onClick:this.turnPage,ref:"page4button5",value:"5"},"5")),r.a.createElement("h2",null,"How Does it Work? (cont.)"),r.a.createElement("p",null,"We just evaluated our first L-system! We started with this:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Axiom: F"),r.a.createElement("li",null,"Replacement Rules: F=F+F")),r.a.createElement("p",null,'And after 3 loops, we ended up with "F+F+F+F+F+F+F+F". (Just think of all of the Fs you could get using more loops.)'),r.a.createElement("h5",null,"Drawing"),r.a.createElement("p",null,"Okay, so in order to draw a shape for this L-system, there are a couple additional parameters we need to specify:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Angle for turns (e.g. 45\xb0)"),r.a.createElement("li",null,"Size for each line (e.g. 30px)")),r.a.createElement("p",null,"And once you've defined those, you just need to find a compliant turtle. ",r.a.createElement("br",null),r.a.createElement("img",{src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/223/turtle_1f422.png",alt:"Turtle",width:"50"}),r.a.createElement("br",null),'Tell your turtle servant to follow the instructions in your string. Again, "F" means draw a line segment (using the length that you specified earlier), and "+" means turn (let\'s say left) by the angle you specified.')),r.a.createElement("div",{className:"slide hidden",id:"5",ref:"5"},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:this.turnPage,ref:"page5button1",value:"1"},"1"),r.a.createElement("button",{onClick:this.turnPage,ref:"page5button2",value:"2"},"2"),r.a.createElement("button",{onClick:this.turnPage,ref:"page5button3",value:"3"},"3"),r.a.createElement("button",{onClick:this.turnPage,ref:"page5button4",value:"4"},"4"),r.a.createElement("button",{onClick:this.turnPage,ref:"page5button5",value:"5",className:"selected"},"5")),r.a.createElement("h2",null,"Quiz Time!"),r.a.createElement("p",null,"Here are the rules:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Axiom: F"),r.a.createElement("li",null,"Replacement rule: F = F+F"),r.a.createElement("li",null,"Number of loops: 3"),r.a.createElement("li",null,"Step size: 30"),r.a.createElement("li",null,"Angle: 45")),r.a.createElement("p",null,"And the answer is..."),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.showAnswer},"Show Answer"),r.a.createElement("img",{className:"hidden",id:"answer",alt:"octagon",src:"octagon.png"}))))}}]),t}(a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"selected slide",id:"1",ref:"1"},r.a.createElement("h2",null,"What else?"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/File:Fractal_tree_(Plate_b_-_2).jpg",target:"_new"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/41/Fractal_tree_%28Plate_b_-_2%29.jpg",alt:"3D L-system tree from Wikipedia"}))),r.a.createElement("p",null,"There are plenty of additional things that could be done with this application, and with L-systems in general. They include (but are not limited to):"),r.a.createElement("h5",null,"3D L-systems"),r.a.createElement("p",null,"L-systems can be used for describing 3-dimensional systems and making 3D drawings. (This is the number one thing I would love to extend this application to do.) Check out the following sites for some cool examples of 3D L-systems:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://laurenslapre.nl/lapre_004.htm",target:"_new"},"Lparser"),", a software package for 3D L-systems"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://commons.wikimedia.org/wiki/File:Dragon_trees.jpg",target:"_new"},"These pictures")," from Wikipedia"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.sidefx.com/docs/houdini/nodes/sop/lsystem.html",target:"_new"},"L-systems in Houdini"))),r.a.createElement("h5",null,"Variations of L-systems"),r.a.createElement("p",null,"Lindenmayer's original description of L-systems includes a whole lot of stuff that I didn't have time to implement (including a 3D vocabulary). These include parametric L-systems (where functions and parameters can be used in addition to simple rewriting), stochastic L-systems (a more formal vocabulary for randomization), and others. These inclusions make L-system grammars Turing complete and enable description of pretty much everything. Check out the following papers:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://algorithmicbotany.org/papers/abop/abop.pdf",target:"_new"},"The Algorithmic Beauty of Plants")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://algorithmicbotany.org/papers/lsfp.pdf",target:"_new"},"Lindenmayer Systems, Fractals, and Plants"))),r.a.createElement("h5",null,"Further Reading"),r.a.createElement("p",null,"This presentation only scratched the surface of what's possible. Here are some good sites to visit to learn more:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://algorithmicbotany.org/",target:"_new"},"The University of Calgary's Algorithmic Botany Department")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.frontiersin.org/articles/10.3389/fpls.2012.00076/full",target:"_new"},"L-Py: an L-system simulation framework for modeling plant architecture development based on a dynamic language")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.reddit.com/r/proceduralgeneration/",target:"_new"},'The "Procedural Generation" subreddit')))))}}]),t}(a.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{basename:"/reactive-garden/"},r.a.createElement("p",null,"Welcome to my garden! This is a friendly place for happy L-system plants to grow and flourish. \xa0 ",r.a.createElement(g.b,{to:"/intro"},"Intro")," | ",r.a.createElement(g.b,{to:"/"},"Home")," | ",r.a.createElement(g.b,{to:"/garden"},"Garden")," | ",r.a.createElement(g.b,{to:"/outro"},"Outro")),r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/intro",component:G}),r.a.createElement(p.a,{path:"/garden",component:x}),r.a.createElement(p.a,{path:"/outro",component:O}),r.a.createElement(p.a,{path:"/",component:A}),r.a.createElement(p.a,{path:"/home",component:A})))}}]),t}(a.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.05beea5e.chunk.js.map