import React, { Component } from 'react'
import Immutable from 'immutable'
import TurtleShape from './TurtleShape'

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
    
    /*
      In this component's state, we'll keep track of the following:
        turtleInstructions: A list of the expanded instructions (one entry for
            each loop through the rewriting process)
        turtleLines: A list of structures which contain the following:
            visibility: The class names for the wrapping svg object 
            lines: A list of the actual TurtleLine components that will get rendered
        needsToGrow: For complicated React reasons, a boolean indicating whether or not
            we've gone through the "growing" render process for this particular L-System
    */
    this.state = {
      turtleInstructions: new Immutable.List(),
      turtleLines: new Immutable.List(),
      needsToGrow: false,
    }

  }
  
  /*
    The main function that will generate the turtle drawing instructions
    for each iteration, and populate this.state accordingly.
  */
  drawLSystem() {
    const currentRule = this.props.rule;  // The information about how to build the system
    var instructions = currentRule.axiom; // The starting point
    
    // Loop N times, and for each loop, expand the instructions
    // and create the relevant TurtleLines
    for (var i = 0; i < currentRule.loops; i++) {
      const turtleString = this.expandInstructions(instructions);
      const turtleLines = this.runTurtle(turtleString);
        
      // Add this loop's instructions and TurtleLines to our state
      this.setState(prevState => {
        return {
          turtleInstructions: prevState.turtleInstructions.push(turtleString),
          turtleLines: prevState.turtleLines.push(turtleLines),
        };
      }); 
      
      // Reset the instructions to the current turtle string in preparation for the next loop
      instructions = turtleString;
    }
    
    // After we're done updating state with all of the appropriate turtle lines,
    // indicate to ourselves that we need to grow. (i.e. to show the actual rendering of the lines)
    this.setState(prevState => {
        return {
          needsToGrow: true,
        };
    });
  }
  
  
  /* 
    Expansion function for a given "loop" of instruction generation
  */
  expandInstructions(inputString) {
    
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
  
  /*
    Utility function for converting to radians to make the math easier
  */
  toRadians(angle) {
    return angle * (Math.PI / 180);
  }
  
  /*
    Function to send the turtle along the path of following a particular
    instruction set and drawing out the lines necessary for it; note that
    these lines are hidden to begin with, and need to go through the "grow"
    process in order to be visible
  */
  runTurtle(item) {

    const instructions = item;
    const currentRule = this.props.rule;
    
    var currentAngle = 90;
    var currentX = Number(currentRule.startX);
    var currentY = Number(currentRule.startY);
    var locations = Immutable.Stack();
    
    // This structure is what we'll ultimately add to this.state.turtleLines;
    // note that it's hidden by default
    var turtleLines = {
      visibility: "hidden drawArea",
      lines: Immutable.List(),
    };
    
    const angle = Number(currentRule.angle);
    const step = Number(currentRule.step);
    
    // For each character in the string
    for(const c of instructions) {
      if (c === 'F' || c === 'G') {
        // If it's an "F" or a "G", add a line and move the turtle
        const point1 = new Immutable.Map({x: currentX, y: currentY,});
        currentX = currentX + step * Math.cos(this.toRadians(currentAngle));
        currentY = currentY - step * Math.sin(this.toRadians(currentAngle));
        const point2 = new Immutable.Map({x: currentX, y: currentY,});
        
        turtleLines.lines = turtleLines.lines.push(Immutable.List([point1, point2]));
        
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
      } else if (c === 'X' || c === 'Y') {
        // For completeness; no-op
      }
    }
    return turtleLines;
  }
  
  
  /*
    Utility method for sleeping (ugh javascript)
  */
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  
  /*
    Function that will gradually show each of the sets of lines (the
    svg objects) such that the system appears to "grow"
  */
  async grow(){
    const turtleLines = this.state.turtleLines;
    const currentRule = this.props.rule;
    
    this.setState(prevState => {
        return {
          needsToGrow: false,
          inGrowth: true,
        };
    });
    
    for (var i = 0; i < currentRule.loops; i++) {  
      if (i !== 0) {
        turtleLines.get(i-1).visibility = "hidden drawArea";
      }
      turtleLines.get(i).visibility = "drawArea";
      this.setState(prevState => {
        return {
          turtleLines: turtleLines,
        };
      }); 
      await this.sleep(250);
    }
    
  }
  

  // ----------- OVERRIDING COMPONENT METHODS BELOW HERE ----------------
  
  // Before it first loads, run the
  // turtle to draw the needed lines.
  componentWillMount() {
    this.drawLSystem();
  }
  
  // And, after everything is drawn and
  // loaded, "grow" the system
  componentDidMount() {
    this.grow();
  }
  
  
  // We only want to actually update the component under three conditions:
  // 1) If the rule has changed
  // 2) If we need to "grow" the system
  // 3) If we're actually in the process of growing the system
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.rule !== this.props.rule || this.state.needsToGrow || this.state.inGrowth;
  }
  
  
  // Every time an update happens, check to see if 
  // our parent has changed our rules and, if so, recreate
  // the lines
  componentDidUpdate(previousProps, previousState) {

    // Because componentDidUpdate will get called on
    // any update of state (including, for instance,
    // adding a new line), only reset and redraw
    // if the thing being changed is the rule. (Note
    // that because we've overridden shouldComponentUpdate we 
    // should never get here in the first place, but we're
    // being safe.)
    if (previousProps.rule !== this.props.rule) {
      // The rule has been changed;
      // reset our state. 
      this.setState(prevState => {
        return {
          turtleInstructions: Immutable.List(),
          turtleLines: Immutable.List(),
          needsToGrow: false,
          inGrowth: false,
        };
      }); 
      this.drawLSystem();
    } else if (this.state.needsToGrow) {
      // We need to grow! Call the "grow"
      // function.
      this.grow();
    }
  }
  

  /*
   The actual render, finally!
 */
  render() {
    const turtleLines = this.state.turtleLines;
    
    return (
      <div>
      {turtleLines.map((turtle, i) => (
        <TurtleShape visibility={turtle.visibility} turtleLines={turtle.lines} />
      ))}
    </div>
    );
  }
}

export default LSystem;
