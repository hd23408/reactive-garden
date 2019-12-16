(this["webpackJsonpreactive-garden"]=this["webpackJsonpreactive-garden"]||[]).push([[0],{25:function(e,t,a){e.exports=a(37)},30:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),s=(a(30),a(2)),i=a(3),u=a(5),c=a(4),m=a(6),h=a(14),g=a(11),p=a(12),d=a.n(p),f=a(7),b=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.line,a=e.color,n="M "+t.map((function(e){return e.get("x")+" "+e.get("y")})).join(" L ");return r.a.createElement("path",{className:"path",stroke:a,d:n})}}]),t}(n.Component),E=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.turtleLines,t=this.props.visibility;return r.a.createElement("svg",{className:t},e.map((function(e,t){return r.a.createElement(b,{key:t,line:e.get("line"),color:e.get("color")})})))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))},a.state={turtleInstructions:f.a.List(),turtleLines:f.a.List(),needsToGrow:!1},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"drawLSystem",value:function(){var e=this,t=this.props.rule,a=t.axiom,n="addGrowSteps"in t&&t.addGrowSteps,r=[],l=!0,o=!1,s=void 0;try{for(var i,u=t.replacements.split(",")[Symbol.iterator]();!(l=(i=u.next()).done);l=!0){var c=i.value.split("="),m={findString:c[0].replace(/\(/,"").trim(),newString:c[1].replace(/\)/,"").trim()};r.push(m)}}catch(p){o=!0,s=p}finally{try{l||null==u.return||u.return()}finally{if(o)throw s}}for(var h=function(){var l=e.expandInstructions(a,r,g,!1);if(n||g===t.loops-1){var o=e.runTurtle(l);e.setState((function(e){return{turtleInstructions:e.turtleInstructions.push(l),turtleLines:e.turtleLines.push(o)}}))}a=l},g=0;g<t.loops;g++){h()}this.setState((function(e){return{needsToGrow:!0}}))}},{key:"expandInstructions",value:function(e,t,a,n){var r="";n&&(console.log("----------------"),console.log(" Generation "+a),console.log("Starting with: "+e));var l=!0,o=!1,s=void 0;try{for(var i,u=e[Symbol.iterator]();!(l=(i=u.next()).done);l=!0){var c=i.value,m=!1;if("!"===c)r+="!*",n&&console.log("Replacing ! with !*");else{var h=!0,g=!1,p=void 0;try{for(var d,f=t[Symbol.iterator]();!(h=(d=f.next()).done);h=!0){var b=d.value;if(b.findString===c){m=!0,r+=b.newString,n&&console.log("Replacing "+b.findString+" with "+b.newString);break}}}catch(E){g=!0,p=E}finally{try{h||null==f.return||f.return()}finally{if(g)throw p}}m||(n&&console.log("Adding "+c+" as is"),r+=c)}}}catch(E){o=!0,s=E}finally{try{l||null==u.return||u.return()}finally{if(o)throw s}}return n&&(console.log("Final expansion: "),console.log(r)),r}},{key:"toRadians",value:function(e){return e*(Math.PI/180)}},{key:"randomInteger",value:function(e,t){return Math.floor(Math.random()*(t-e+1))+e}},{key:"runTurtle",value:function(e){var t=e,a=this.props.rule,n=Number(a.angle),r=Number(a.step),l="RANDOM";"fColor"in a&&(l=a.fColor),l=l.toUpperCase();var o="RANDOM";"gColor"in a&&(o=a.gColor),o=o.toUpperCase();var s="RANDOM";"bangColor"in a&&(s=a.bangColor),s=s.toUpperCase();for(var i=90,u=Number(a.startX),c=Number(a.startY),m=f.a.Stack(),h={visibility:"hidden drawing",lines:f.a.List()},g="#000000",p=r,d=n,b="+",E=0;E<t.length;E++){var w=t.charAt(E).toUpperCase();if("F"===w||"G"===w||"!"===w){if("F"===w?g=l:"G"===w?g=o:"!"===w&&(g=s),"RANDOM"===g&&(g="#00"+String(this.randomInteger(0,9999)).padStart(4,"0")),p=r,"!"!==w&&Math.random()<a.wrongStepChance&&(p=this.randomInteger(1,2*r)),"!"===w){for(var C=1;E+C<t.length&&"*"===t.charAt(E+C);)C++;E=E+C-1,p=r*C}var F=new f.a.Map({x:u,y:c});u+=p*Math.cos(this.toRadians(i)),c-=p*Math.sin(this.toRadians(i));var y=new f.a.Map({x:u,y:c});h.lines=h.lines.push(f.a.Map({line:f.a.List([F,y]),color:g}))}else if("+"===w||"-"===w)d=n,Math.random()<a.wrongAngleChance&&(d=this.randomInteger(-10,10)),b=w,Math.random()<a.wrongTurnChance&&(b="+"===b?"-":"+"),"+"===b?i+=d:i-=d;else if("["===w){var v={X:u,Y:c,A:i};m=m.push(v)}else if("]"===w){var S=m.first();m=m.pop(),u=S.X,c=S.Y,i=S.A}}return h}},{key:"grow",value:function(){var e,t;return d.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:e=this.state.turtleLines,this.setState((function(e){return{needsToGrow:!1,inGrowth:!0}})),t=0;case 3:if(!(t<e.size)){a.next=12;break}return 0!==t&&(e.get(t-1).visibility="hidden drawing"),e.get(t).visibility="drawing",this.setState((function(t){return{turtleLines:e}})),a.next=9,d.a.awrap(this.sleep(250));case 9:t++,a.next=3;break;case 12:case"end":return a.stop()}}),null,this)}},{key:"UNSAFE_componentWillMount",value:function(){this.drawLSystem()}},{key:"componentDidMount",value:function(){this.grow()}},{key:"shouldComponentUpdate",value:function(e,t){return e.rule!==this.props.rule||this.state.needsToGrow||this.state.inGrowth}},{key:"componentDidUpdate",value:function(e,t){e.rule!==this.props.rule?(this.setState((function(e){return{turtleInstructions:f.a.List(),turtleLines:f.a.List(),needsToGrow:!1,inGrowth:!1}})),this.drawLSystem()):this.state.needsToGrow&&this.grow()}},{key:"render",value:function(){var e=this.state.turtleLines;return r.a.createElement("div",null,e.map((function(e,t){return r.a.createElement(E,{key:t,visibility:e.visibility,turtleLines:e.lines})})))}}]),t}(n.Component),C=a(22),F=f.a.OrderedMap().set("Sierpinski Triangle",{rules:{angle:"120",step:"7",axiom:"F-G-G",replacements:"(F = F-G+F+G-F), (G = GG)",loops:"6",fColor:"RANDOM",gColor:"RANDOM",bangColor:"RANDOM",startX:"150",startY:"500",gardenStep:"6",gardenLoops:"3",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"}}).set("Koch Curve",{rules:{angle:"90",step:"6",axiom:"-F",replacements:"(F = F+F-F-F+F)",loops:"4",fColor:"RANDOM",gColor:"RANDOM",bangColor:"RANDOM",startX:"50",startY:"500",gardenStep:"3",gardenLoops:"3",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"}}).set("Kolam",{rules:{angle:"15",step:"10",axiom:"GGGG",replacements:"(G = X+X+X+X+X+X+), (X = [F+F+F+F[---X-Y]+++++F++++++++F-F-F-F]), (Y = [F+F+F+F[---Y]+++++F++++++++F-F-F-F])",loops:"5",fColor:"#ff944d",gColor:"#00ace6",bangColor:"RANDOM",startX:"300",startY:"300",gardenStep:"5",gardenLoops:"2",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"}}).set("Dragon Curve",{rules:{angle:"90",step:"4",axiom:"FX",replacements:"(X = X+YG+), (Y = -FX-Y), (G = F)",loops:"12",fColor:"#ac3939",gColor:"#e60000",bangColor:"RANDOM",startX:"300",startY:"300",gardenStep:"3",gardenLoops:"6",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"}}).set("Anklets of Krishna",{rules:{angle:"90",step:"4",axiom:"F+XF+F+XF",replacements:"(X = XF-F-F+XF+F+XF-F-F+X)",loops:"5",fColor:"RANDOM",gColor:"RANDOM",bangColor:"RANDOM",startX:"400",startY:"400",gardenStep:"3",gardenLoops:"3",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"}}).set("Gosper Curve",{rules:{angle:"60",step:"9",axiom:"F",replacements:"(F=F+G++G-F--FF-G+), (G=-F+GG++G+F--F-G)",loops:"4",fColor:"#996600",gColor:"#ffaa80",bangColor:"#996600",startX:"550",startY:"250",gardenStep:"3",gardenLoops:"3",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"}}).set("Binary Tree",{rules:{angle:"25",step:"4",axiom:"F",replacements:"(G = GG), (F = G[+F]-F)",loops:"7",fColor:"#ff3399",gColor:"#336600",bangColor:"#336600",startX:"300",startY:"600",gardenStep:"2",gardenLoops:"5",wrongStepChance:"0.25",wrongTurnChance:"0.00",wrongAngleChance:"0.25"}}).set("Dandelion",{rules:{angle:"60",step:"12",axiom:"!X!!FF",replacements:"(F=F[-F][+F][F]), (X=[+G[-G[+G]][-G[+G]]!]Y[-G[+G]!]), (Y=GGG)",loops:"5",fColor:"#e6e600",gColor:"#004d00",bangColor:"#004d00",startX:"300",startY:"600",gardenStep:"3",gardenLoops:"4",wrongStepChance:"0.00",wrongTurnChance:"0.10",wrongAngleChance:"0.05"}}).set("Feather Tree",{rules:{angle:"25",step:"10",axiom:"!!FF",replacements:"(F=F[-F][+F[+F]]![+F][-F[-F]])",loops:"4",fColor:"RANDOM",gColor:"RANDOM",bangColor:"#008000",startX:"300",startY:"600",gardenStep:"3",gardenLoops:"3",wrongStepChance:"0.30",wrongTurnChance:"0.05",wrongAngleChance:"0.00"}}).set("Algae",{rules:{angle:"20",step:"15",axiom:"F",replacements:"(F = F[+F]F[-F]F)",loops:"3",fColor:"RANDOM",gColor:"RANDOM",bangColor:"RANDOM",startX:"300",startY:"600",gardenStep:"3",gardenLoops:"3",wrongStepChance:"0.00",wrongTurnChance:"0.75",wrongAngleChance:"0.00"}}).set("Berry Bush",{rules:{angle:"25",step:"4",axiom:"F",replacements:"(F = G[+F][-F]GF), (G = GG)",loops:"6",fColor:"#bf00ff",gColor:"#336600",bangColor:"#009973",startX:"300",startY:"600",gardenStep:"3",gardenLoops:"4",wrongStepChance:"0.50",wrongTurnChance:"0.00",wrongAngleChance:"0.50"}}).set("Little Bush",{rules:{angle:"23",step:"20",axiom:"X",replacements:"(X = F-[[X]+X]+F[-FX]+X)",loops:"5",fColor:"RANDOM",gColor:"RANDOM",bangColor:"RANDOM",startX:"300",startY:"600",gardenStep:"6",gardenLoops:"4",wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.75"}}).set("Fractal Plant",{rules:{angle:"25",step:"7",axiom:"X",replacements:"(X = F+[[X]-X]-F[-GX]+X), (F = FF), (G = GG)",loops:"5",fColor:"#336600",gColor:"#86b300",bangColor:"#336600",startX:"300",startY:"600",gardenStep:"2",gardenLoops:"4",wrongStepChance:"0.25",wrongTurnChance:"0.00",wrongAngleChance:"0.25"}}).set("Thorny Bush",{rules:{angle:"6",step:"25",axiom:"F",replacements:"(F = ![-----F][+++++++F]+![----F][+++++++F]+![---F][+++++F]+!F)",loops:"3",fColor:"#99e6ff",gColor:"RANDOM",bangColor:"RANDOM",startX:"400",startY:"600",gardenStep:"4",gardenLoops:"3",wrongStepChance:"0.00",wrongTurnChance:"0.05",wrongAngleChance:"0.15"}}).set("Bushy Tree",{rules:{angle:"15",step:"9",axiom:"!F",replacements:"(F=FF-[-F+F+F]+[+F-G-G]), (G=F)",loops:"4",fColor:"#996600",gColor:"#ffaa80",bangColor:"#996600",startX:"300",startY:"600",gardenStep:"3",gardenLoops:"3",wrongStepChance:"0.05",wrongTurnChance:"0.00",wrongAngleChance:"0.10"}}).set("Thistle",{rules:{angle:"20",step:"8",axiom:"!!GF",replacements:"(F=GGG-[-F+F+F]+[+F-F+F])",loops:"4",fColor:"#ff3399",gColor:"#336600",bangColor:"#336600",startX:"300",startY:"600",gardenStep:"2",gardenLoops:"3",wrongStepChance:"0.10",wrongTurnChance:"0.00",wrongAngleChance:"0.10"}}).set("Christmas Tree",{rules:{angle:"18",step:"11",axiom:"LSLFFF",replacements:"(S=[+++G][---G]TS),(G=+H[-G]L),(H=-G[+H]L), (T=TL), (L=[-F[+F]F][+F[-F]F]F)",loops:"10",fColor:"#004d00",gColor:"RANDOM",bangColor:"RANDOM",startX:"300",startY:"600",gardenStep:"5",gardenLoops:"5",wrongStepChance:"0.50",wrongTurnChance:"0.00",wrongAngleChance:"0.05"}}),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;a.setState(Object(C.a)({},r,n))},a.fillRules=function(e){a.setState(e,(function(){return a.submitForm()}))},a.submitForm=function(){a.setState({randomNumberForFormSubmittal:Math.random()},(function(){return a.props.handleSubmit(a.state,"false")}))},a.initialState={angle:e.rule.angle,step:e.rule.step,axiom:e.rule.axiom,replacements:e.rule.replacements,loops:e.rule.loops,startX:e.rule.startX,startY:e.rule.startY,fColor:e.rule.fColor,gColor:e.rule.gColor,bangColor:e.rule.bangColor,wrongStepChance:e.rule.wrongStepChance,wrongTurnChance:e.rule.wrongTurnChance,wrongAngleChance:e.rule.wrongAngleChance,addGrowSteps:e.rule.addGrowSteps},a.state=a.initialState,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.angle,a=e.step,n=e.axiom,l=e.replacements,o=e.loops,s=e.startX,i=e.startY,u=e.fColor,c=e.gColor,m=e.bangColor,h=e.wrongStepChance,g=e.wrongTurnChance,p=e.wrongAngleChance,d=e.addGrowSteps,f=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"examples"},r.a.createElement("h3",null,"Examples"),r.a.createElement("p",null,"Click on the name to try it out! Rules will be auto-populated in the form to the right."),r.a.createElement("ul",{className:"columns"},F.toArray().map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){return f.fillRules({axiom:e[1].rules.axiom,replacements:e[1].rules.replacements,angle:e[1].rules.angle,step:e[1].rules.step,loops:e[1].rules.loops,startX:e[1].rules.startX,startY:e[1].rules.startY,fColor:e[1].rules.fColor,gColor:e[1].rules.gColor,bangColor:e[1].rules.bangColor,wrongStepChance:"0.00",wrongAngleChance:"0.00",wrongTurnChance:"0.00",addGrowSteps:!0})}},r.a.createElement("strong",null,e[0])))})))),r.a.createElement("div",{className:"instructions"},r.a.createElement("h3",null,"L-system rules"),r.a.createElement("form",null,r.a.createElement("label",null,"Axiom (initial string)"),r.a.createElement("input",{type:"text",name:"axiom",size:"10",value:n,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Replacement Rules"),r.a.createElement("input",{type:"text",name:"replacements",size:"50",value:l,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Angle for Turns"),r.a.createElement("input",{type:"text",name:"angle",size:"5",value:t,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Step Size (length of line)"),r.a.createElement("input",{type:"text",name:"step",size:"5",value:a,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Loops (number of recursions)"),r.a.createElement("input",{type:"text",name:"loops",size:"5",value:o,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Initial X Position"),r.a.createElement("input",{type:"text",name:"startX",size:"5",value:s,onChange:this.handleChange}),r.a.createElement("label",null,"Initial Y Position"),r.a.createElement("input",{type:"text",name:"startY",size:"5",value:i,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"'F' Color"),r.a.createElement("input",{type:"text",name:"fColor",size:"8",value:u,onChange:this.handleChange}),r.a.createElement("label",null,"'G' Color"),r.a.createElement("input",{type:"text",name:"gColor",size:"8",value:c,onChange:this.handleChange}),r.a.createElement("label",null,"'!' Color"),r.a.createElement("input",{type:"text",name:"bangColor",size:"8",value:m,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",null,"Draw growth steps"),r.a.createElement("input",{type:"checkbox",name:"addGrowSteps",checked:d,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("strong",null,"Buy the turtle a drink!"),r.a.createElement("br",null),"Enter the following probabilities in decimal (e.g. 0.25 == 25% chance)",r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"wrongStepChance",size:"8",value:h,onChange:this.handleChange}),r.a.createElement("label",null,"Probability that a step will be somewhat longer or shorter"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"wrongTurnChance",size:"8",value:g,onChange:this.handleChange}),r.a.createElement("label",null,"Probability of turning in the wrong direction"),r.a.createElement("br",null),r.a.createElement("input",{type:"text",name:"wrongAngleChance",size:"8",value:p,onChange:this.handleChange}),r.a.createElement("label",null,"Probability that a turn angle will be somewhat narrower or wider"),r.a.createElement("br",null),r.a.createElement("input",{type:"button",value:"Submit",onClick:this.submitForm}))),r.a.createElement("div",{className:"instructions"},r.a.createElement("h3",null,"Instructions"),'To run an L-system, enter the required information and press "submit". Some notes:',r.a.createElement("ul",null,r.a.createElement("li",null,'The "Replacement Rule" should consist one or more comma-separated replacement rules, of the format "( X = Y )" -- see examples, below'),r.a.createElement("li",null,"The rules use the following symbols:",r.a.createElement("ul",null,r.a.createElement("li",null,"'F' and 'G' each draw a single line segment"),r.a.createElement("li",null,"'+' and '-' rotate the turtle to the left and right respectively (by the defined angle)"),r.a.createElement("li",null,"'[' and ']' store and recall a particular XY coordinate for the turtle (i.e. allow the turtle to teleport back to a previous location)"),r.a.createElement("li",null,"'!' will draw a line segment that is larger if it's older, by a factor of how many generations old it is. In other words, a '!' that is added to the output string in the first loop will be 6 times longer than a '!' that's added to the output string in the sixth loop."),r.a.createElement("li",null,"'X', 'Y', and all other characters are no-ops and are used as placeholders in the rules for more complicated expansions (see \"Christmas Tree\" for an example)"))),r.a.createElement("li",null,"Don't use too many recursions, or the JavaScript will freak out. Limiting to 6 loops is a good rule of thumb."),r.a.createElement("li",null,'If you\'re having trouble seeing the entire resulting drawing, try reducing the "Step Size" to make it smaller'),r.a.createElement("li",null,'You can also use the "F Color", "G Color" and "\'!\' Color" fields to set colors for the various letters. If using hex colors, please include the "#" at the beginning! (Set these to the string \'random\' if you want it to just choose some random colors from the blue-green spectrum for each line.)'),r.a.createElement("li",null,"NOTE: INPUTS ARE NOT CURRENTLY BEING SANITIZED! If you get an error, probably it's a parsing issue. Check your rules in particular."))))}}]),t}(n.Component),v=function(e){function t(e){var a;Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).handleSubmit=function(e){a.setState({rule:e})};var n=F.toList(),r=n.size,l=Math.floor(Math.random()*Math.floor(r)),o=n.get(l).rules;return a.initialState={rule:Object.assign({},o,{addGrowSteps:!0,wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.00"})},a.state=a.initialState,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.rule;return r.a.createElement("div",null,r.a.createElement("div",{className:"drawArea"},r.a.createElement(w,{rule:e})),r.a.createElement(y,{handleSubmit:this.handleSubmit,rule:e}))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).sleep=function(e){return new Promise((function(t){return setTimeout(t,e)}))},a.triggerBreeze=function(){d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("function2"),e.next=3,d.a.awrap(a.wave(1));case 3:case"end":return e.stop()}}))},a.shuffle=function(){for(var e=f.a.List(F).slice(6),t=e.size,n=f.a.List(),r=0;r<=4;r++)for(var l=0;l<=4;l++){var o=Math.floor(Math.random()*Math.floor(t)),s=e.get(o)[1].rules,i=s.startX/600*120,u=s.startY/600*120;n=n.push(Object.assign({},s,{startX:i,startY:u,step:s.gardenStep,loops:s.gardenLoops,name:e.get(o)[0]}))}a.setState({organisms:n})},a.initialState={organisms:f.a.List()},a.state=a.initialState,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){this.shuffle()}},{key:"wave",value:function(e){var t,a,n,r=this;return d.a.async((function(l){for(;;)switch(l.prev=l.next){case 0:if(console.log(e),this.forceUpdate(),!(e<20)){l.next=8;break}return l.next=5,d.a.awrap(this.sleep(10));case 5:for(t=f.a.List(),a=0;a<25;a++)n=this.state.organisms.get(a),t=t.push(Object.assign({},n,{wrongStepChance:"0.00",wrongTurnChance:"0.00",wrongAngleChance:"0.05",randomNumber:Math.random()}));this.setState({organisms:t},(function(){return r.wave(++e)}));case 8:case"end":return l.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.organisms;return r.a.createElement("div",null,r.a.createElement("div",{className:"drawArea"},e.map((function(e,t){return r.a.createElement("div",{key:t,className:"gardenPlot"},r.a.createElement(w,{key:t,rule:e}),r.a.createElement("div",{className:"footnote"},t+1))}))),r.a.createElement("div",{className:"instructions"},r.a.createElement("ol",{className:"columns"},e.map((function(e,t){return r.a.createElement("li",{key:t},e.name)}))),r.a.createElement("div",{className:"button"},r.a.createElement("button",{onClick:this.shuffle},"Shuffle"),r.a.createElement("button",{onClick:this.triggerBreeze},"Breeze"))))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(c.a)(t).call(this,e))).showAnswer=function(e){var t=document.getElementById("answer");o.a.findDOMNode(t).style.display="block"},a.turnPage=function(e){document.querySelectorAll("div.slide").forEach((function(e){return a.refs[e.id].className="hidden"})),a.refs[e.target.value].className="selected slide"},a.initialState={page:1},a.state=a.initialState,a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"selected slide",id:"1",ref:"1"},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:this.turnPage,ref:"page1button1",value:"1",className:"selected"},"1"),r.a.createElement("button",{onClick:this.turnPage,ref:"page1button2",value:"2"},"2"),r.a.createElement("button",{onClick:this.turnPage,ref:"page1button3",value:"3"},"3"),r.a.createElement("button",{onClick:this.turnPage,ref:"page1button4",value:"4"},"4"),r.a.createElement("button",{onClick:this.turnPage,ref:"page1button5",value:"5"},"5")),r.a.createElement("h2",null,"What is an L-system?"),r.a.createElement("p",null,"An L-system is a parallel rewriting system, and a type of formal grammar. In short, it's a way of describing ... well, all sorts of stuff.",r.a.createElement("sup",null,"1")),r.a.createElement("p",null,"According to ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/L-system",target:"_new"},"Wikipedia"),":",r.a.createElement("br",null),r.a.createElement("em",null,"\"An L-system consists of an alphabet of symbols that can be used to make strings, a collection of production rules that expand each symbol into some larger string of symbols, an initial 'axiom' string from which to begin construction, and a mechanism for translating the generated strings into geometric structures.\"")),r.a.createElement("p",null,"You can think of it kind of like a computer programming language. In particular, it does a lot of stuff with replacements and recursion."),r.a.createElement("p",null,"L-systems were developed in 1968 by Aristid Lindenmayer, a Hungarian theoretical biologist and botanist at the University of Utrecht. He used L-systems to describe the behaviour of plant cells and to model the growth processes of plant development."),r.a.createElement("p",null,"Yeah, that's right, a botanist invented a programming language so that he could describe algae."),r.a.createElement("div",{className:"footnote"},"[1] ",r.a.createElement("em",null,r.a.createElement("a",{href:"https://www.sciencedirect.com/science/article/pii/S0022519369800305",target:"_new"},"Computing ability of a developmental model for filamentous organisms"))),r.a.createElement("p",null,"\xa0")),r.a.createElement("div",{className:"slide hidden",id:"2",ref:"2"},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:this.turnPage,ref:"page2button1",value:"1"},"1"),r.a.createElement("button",{onClick:this.turnPage,ref:"page2button2",value:"2",className:"selected"},"2"),r.a.createElement("button",{onClick:this.turnPage,ref:"page2button3",value:"3"},"3"),r.a.createElement("button",{onClick:this.turnPage,ref:"page2button4",value:"4"},"4"),r.a.createElement("button",{onClick:this.turnPage,ref:"page2button5",value:"5"},"5")),r.a.createElement("h2",null,"How Does it Work?"),r.a.createElement("p",null,"Evaluating an L-system consists of two main steps:"),r.a.createElement("ol",null,r.a.createElement("li",null,"Compute a string that contains a set of instructions"),r.a.createElement("li",null,'Use a "turtle" to draw a shape by following the instructions')),r.a.createElement("h5",null,"Example"),r.a.createElement("p",null,"Let's start with a vocabulary. L-system vocabularies can get complicated, and different implementations use different symbols, but these two symbols are pretty standard:"),r.a.createElement("ul",null,r.a.createElement("li",null,"'F' means \"Draw a line segment\""),r.a.createElement("li",null,"'+' means \"Turn\" (you get to choose the angle)")),r.a.createElement("p",null,'When we go to draw the L-system, we use a list of these symbols and interpret them as instructions for drawing. For instance, the instructions "F+F" mean "draw a line segment, turn, and draw another line segment."')),r.a.createElement("div",{className:"slide hidden",id:"3",ref:"3"},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:this.turnPage,ref:"page3button1",value:"1"},"1"),r.a.createElement("button",{onClick:this.turnPage,ref:"page3button2",value:"2"},"2"),r.a.createElement("button",{onClick:this.turnPage,ref:"page3button3",value:"3",className:"selected"},"3"),r.a.createElement("button",{onClick:this.turnPage,ref:"page3button4",value:"4"},"4"),r.a.createElement("button",{onClick:this.turnPage,ref:"page3button5",value:"5"},"5")),r.a.createElement("h2",null,"How Does it Work? (cont.)"),r.a.createElement("p",null,'Now you need a starting string ("axiom"). If you wanted you could just start with something like "F+F+F+F+" right out of the gate and call it a day. (Or call it a square, if you went with a 90 degree angle. Heh.) But that\'s boring.'),r.a.createElement("p",null,"The thing that makes L-systems interesting is their use of replacement rules. So, for instance, you could say something like this:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Axiom: F"),r.a.createElement("li",null,"Replacement rule: F = F+F"),r.a.createElement("li",null,"Number of loops: 3")),r.a.createElement("p",null,"And when you evaluate it, you get this!"),r.a.createElement("ol",{class:"zero_indexed"},r.a.createElement("li",null,"F"),r.a.createElement("li",null,"F+F"),r.a.createElement("li",null,"F+F + F+F"),r.a.createElement("li",null,"F+F + F+F  +  F+F + F+F"))),r.a.createElement("div",{className:"slide hidden",id:"4",ref:"4"},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:this.turnPage,ref:"page4button1",value:"1"},"1"),r.a.createElement("button",{onClick:this.turnPage,ref:"page4button2",value:"2"},"2"),r.a.createElement("button",{onClick:this.turnPage,ref:"page4button3",value:"3"},"3"),r.a.createElement("button",{onClick:this.turnPage,ref:"page4button4",value:"4",className:"selected"},"4"),r.a.createElement("button",{onClick:this.turnPage,ref:"page4button5",value:"5"},"5")),r.a.createElement("h2",null,"How Does it Work? (cont.)"),r.a.createElement("p",null,"We just evaluated our first L-system! We started with this:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Axiom: F"),r.a.createElement("li",null,"Replacement Rules: F=F+F")),r.a.createElement("p",null,'And after 3 loops, we ended up with "F+F+F+F+F+F+F+F". (Just think of all of the Fs you could get using more loops.)'),r.a.createElement("h5",null,"Drawing"),r.a.createElement("p",null,"Okay, so in order to draw a shape for this L-system, there are a couple additional parameters we need to specify:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Angle for turns (e.g. 45\xb0)"),r.a.createElement("li",null,"Size for each line (e.g. 30px)")),r.a.createElement("p",null,"And once you've defined those, you just need to find a compliant turtle. ",r.a.createElement("br",null),r.a.createElement("img",{src:"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/223/turtle_1f422.png",alt:"Turtle",width:"50"}),r.a.createElement("br",null),'Tell your turtle servant to follow the instructions in your string. Again, "F" means draw a line segment (using the length that you specified earlier), and "+" means turn (let\'s say left) by the angle you specified.')),r.a.createElement("div",{className:"slide hidden",id:"5",ref:"5"},r.a.createElement("div",{className:"pagination"},r.a.createElement("button",{onClick:this.turnPage,ref:"page5button1",value:"1"},"1"),r.a.createElement("button",{onClick:this.turnPage,ref:"page5button2",value:"2"},"2"),r.a.createElement("button",{onClick:this.turnPage,ref:"page5button3",value:"3"},"3"),r.a.createElement("button",{onClick:this.turnPage,ref:"page5button4",value:"4"},"4"),r.a.createElement("button",{onClick:this.turnPage,ref:"page5button5",value:"5",className:"selected"},"5")),r.a.createElement("h2",null,"Quiz Time!"),r.a.createElement("p",null,"Here are the rules:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Axiom: F"),r.a.createElement("li",null,"Replacement rule: F = F+F"),r.a.createElement("li",null,"Number of loops: 3"),r.a.createElement("li",null,"Step size: 30"),r.a.createElement("li",null,"Angle: 45")),r.a.createElement("p",null,"And the answer is..."),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.showAnswer},"Show Answer"),r.a.createElement("img",{className:"hidden",id:"answer",alt:"octagon",src:"octagon.png"}))))}}]),t}(n.Component),A=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"selected slide",id:"1",ref:"1"},r.a.createElement("h2",null,"What else?"),r.a.createElement("p",null,r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/File:Fractal_tree_(Plate_b_-_2).jpg",target:"_new"},r.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/4/41/Fractal_tree_%28Plate_b_-_2%29.jpg",alt:"3D L-system tree from Wikipedia"}))),r.a.createElement("p",null,"There are plenty of additional things that could be done with this application, and with L-systems in general. They include (but are not limited to):"),r.a.createElement("h5",null,"3D L-systems"),r.a.createElement("p",null,"L-systems can be used for describing 3-dimensional systems and making 3D drawings. (This is the number one thing I would love to extend this application to do.) Check out the following sites for some cool examples of 3D L-systems:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://laurenslapre.nl/lapre_004.htm",target:"_new"},"Lparser"),", a software package for 3D L-systems"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://commons.wikimedia.org/wiki/File:Dragon_trees.jpg",target:"_new"},"These pictures")," from Wikipedia"),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.sidefx.com/docs/houdini/nodes/sop/lsystem.html",target:"_new"},"L-systems in Houdini"))),r.a.createElement("h5",null,"Variations of L-systems"),r.a.createElement("p",null,"Lindenmayer's original description of L-systems includes a whole lot of stuff that I didn't have time to implement (including a 3D vocabulary). These include parametric L-systems (where functions and parameters can be used in addition to simple rewriting), stochastic L-systems (a more formal vocabulary for randomization), and others. These inclusions make L-system grammars Turing complete and enable description of pretty much everything. Check out the following papers:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://algorithmicbotany.org/papers/abop/abop.pdf",target:"_new"},"The Algorithmic Beauty of Plants")),r.a.createElement("li",null,r.a.createElement("a",{href:"http://algorithmicbotany.org/papers/lsfp.pdf",target:"_new"},"Lindenmayer Systems, Fractals, and Plants"))),r.a.createElement("h5",null,"Further Reading"),r.a.createElement("p",null,"This presentation only scratched the surface of what's possible. Here are some good sites to visit to learn more:"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"http://algorithmicbotany.org/",target:"_new"},"The University of Calgary's Algorithmic Botany Department")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.frontiersin.org/articles/10.3389/fpls.2012.00076/full",target:"_new"},"L-Py: an L-system simulation framework for modeling plant architecture development based on a dynamic language")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.reddit.com/r/proceduralgeneration/",target:"_new"},'The "Procedural Generation" subreddit')))))}}]),t}(n.Component),L=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("p",null,"Welcome to my garden! This is a friendly place for happy L-system plants to grow and flourish. \xa0 ",r.a.createElement(h.b,{to:"/intro"},"Intro")," | ",r.a.createElement(h.b,{to:"/"},"Home")," | ",r.a.createElement(h.b,{to:"/garden"},"Garden")," | ",r.a.createElement(h.b,{to:"/outro"},"Outro")),r.a.createElement(g.c,null,r.a.createElement(g.a,{path:"/intro"},r.a.createElement(k,null)),r.a.createElement(g.a,{path:"/garden"},r.a.createElement(S,null)),r.a.createElement(g.a,{path:"/outro"},r.a.createElement(A,null)),r.a.createElement(g.a,{path:"/"},r.a.createElement(v,null))))}}]),t}(n.Component);o.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.4ab02517.chunk.js.map