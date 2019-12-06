import React, { Component } from 'react'
import Immutable from 'immutable'
import TurtleLine from './TurtleLine'


class LSystem extends Component {
  constructor(props) {
    /*
      The propery handed in should be an object called "rule", with
      the following keys:
        axiom: The initial string
        numloops: How many times to run the replacement algorithm
        replacements: One or more comma-separated replacement rules, of the format "X = Y" 
        step: How many pixels to draw each line
        angle: The angle to turn when turning
        startX: The X position at which to start drawing
        startY: The Y position at which to start drawing
    */
    super(props);
    
    this.state = {
      // An empty list of lines that will be filled in when drawing
      lines: new Immutable.List(),
      
      // The rules for drawing
      rule: this.props.rule,
    }

  }
  
  generateRules() {
    
    const currentRule = this.props.rule;
    
    var rules = currentRule.axiom;
    for (var i = 0; i < currentRule.loops; i++) {
      rules = this.expandRules(rules);
    }
    return rules;
  }
  
  expandRules(inputString) {
    var outputString = '';
    var replacements = [];
    const currentRule = this.props.rule;
    
    for(const replacement of currentRule.replacements.split(',')) {
      const rule = replacement.split('=');
      const subst = {findString: rule[0].replace(/\(/,"").trim(), newString: rule[1].replace(/\)/,"").trim()};
      
      replacements.push(subst);
    }
    
    for(const token of inputString) {
      var matched = false;
      for(const replacement of replacements) {
        if (replacement.findString === token) {
          matched = true;
          outputString += replacement.newString;
          break;
        }  
      }
      
      if (! matched) outputString += token;
    }
    
      
    return outputString;
  }
  
  toRadians (angle) {
    return angle * (Math.PI / 180);
  }
  
  runTurtle() {
    
    const currentRule = this.props.rule;
    
    var currentAngle = 90;
    var currentX = Number(currentRule.startX);
    var currentY = Number(currentRule.startY);
    var locations = Immutable.Stack();
    
    const angle = Number(currentRule.angle);
    const step = Number(currentRule.step);
    const rules = this.generateRules();
    
    // For each character in the string
    for(const c of rules) {
      if (c === 'F' || c === 'G') {
        // If it's an "F", add a line and move the turtle
        const point1 = new Immutable.Map({x: currentX, y: currentY,});
        currentX = currentX + step * Math.cos(this.toRadians(currentAngle));
        currentY = currentY - step * Math.sin(this.toRadians(currentAngle));
        const point2 = new Immutable.Map({x: currentX, y: currentY,});
        
        this.setState(prevState => {
          return {
            lines: prevState.lines.push(Immutable.List([point1, point2])),
          };
        });
      } else if (c === '+') {
        // If it's a turn, change the angle
        currentAngle += angle; // turn left
      } else if (c === '-') {
        currentAngle -= angle; // turn right)
      } else if (c === '[') {
        // Push current value of X,Y from locations
        const currPos = {X: currentX, Y: currentY, A: currentAngle};
        locations = locations.push(currPos);
      } else if (c === ']') {
        // Reset current value of X,Y to that popped from locations
        const oldPos = locations.first();
        locations = locations.pop();
        currentX = oldPos.X;
        currentY = oldPos.Y;
        currentAngle = oldPos.A;
        //alert("now at " + currentX)
      } else if (c === 'X' || c === 'Y') {
        // For completeness; no-op
      }
    }
  }
  
  
  componentDidMount() {
    // The first time this loads, run the
    // turtle to draw the needed lines.
    this.runTurtle();
  }
  
  componentDidUpdate(previousProps, previousState) {
    // Because componentDidUpdate will get called on
    // any update of state (including, for instance,
    // drawing a new line), only reset and redraw
    // if the state being changed is the rule.
    // (This feels really hacky; TODO: Rethink this.)
    if (previousProps.rule !== this.props.rule) {
      this.setState(prevState => {
        return {
          lines: new Immutable.List(),
        };
      });
      this.runTurtle();
    }
  }
  
  render() {
    const lines = this.state.lines;
    return (
      <svg className="drawArea">
      {lines.map((line, index) => (
        <TurtleLine key={index} line={line} />
      ))}
    </svg>
    );
  }
}

export default LSystem;
