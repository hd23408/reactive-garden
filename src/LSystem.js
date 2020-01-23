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
        fColor,
        gColor,
        bangColor: The color codes to use for F, G, and ! lines respectively (defaults to "random")
        currentRule: Boolean saying whether to draw the growing process or jump straight to the final design
    */
    super(props);
    
    /*
      In this component's state, we'll keep track of the following:
        turtleInstructions: A list of the expanded instructions (one entry for
            each loop through the rewriting process)
        turtleLines: A list of structures which contain the following:
            visibility: The class names for the wrapping svg object 
            lines: A list of the actual TurtleLine components that will get rendered --
                  these are (somewhat confusingly) a Map with keys "line" (X/Y coordinates as a List)
                  and "color" (a color for that particular line)
        needsToGrow: For complicated React reasons, a boolean indicating whether or not
            we've gone through the "growing" render process for this particular L-system
    */
    
    this.state = {
      turtleInstructions: Immutable.List(),
      turtleLines: Immutable.List(),
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
    var addGrowSteps = ('addGrowSteps' in currentRule && 
      currentRule.addGrowSteps); // Whether or not to add all of the "steps" to show "growth"
    var replacements = []; // The actual replacement rules to perform (a list of objects  
                           // with "findString" and "newString" keys)
      
    const debug = false; // Will output to console.log with replacement string information
    
    // Parse the replacement instructions
    for (const replacement of currentRule.replacements.split(',')) {
      const rule = replacement.split('=');
      const subst = {findString: rule[0].replace(/\(/,"").trim(), newString: rule[1].replace(/\)/,"").trim()};
      replacements.push(subst);
    }
    
    // Loop N times, and for each loop, expand the instructions
    // and create the relevant TurtleLines
    for (var i = 0; i < currentRule.loops; i++) {
      const turtleString = this.expandInstructions(instructions, replacements, i, debug);
      
      // If we're supposed to add each of the growth "steps"
      // (or if this is the last step), add it to the state
      var add = (addGrowSteps || i === currentRule.loops - 1);
      if (add) {
        const turtleLines = this.runTurtle(turtleString);
        // Add this loop's instructions and TurtleLines to our state
        this.setState(prevState => {
          return {
            turtleInstructions: prevState.turtleInstructions.push(turtleString),
            turtleLines: prevState.turtleLines.push(turtleLines),
          };
        });
      }; 
      
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
  expandInstructions(inputString, replacements, generation, debug) {
    
    var outputString = '';
    
    if (debug) {
      console.log("----------------");
      console.log(" Generation " + generation);
      console.log("Starting with: " + inputString);
    }
    
    for(const token of inputString) {
      var matched = false;
      
      if (token === '!') {
        // If an exclamation point is in the input string, it needs
        // to get "older" -- its age is tracked by having a bunch of
        // '*' symbols after it (one '|' for each generation older than one)
        outputString += "!*";
        // any other "*"s after it will just be passed through as normal
        if (debug) console.log("Replacing ! with !*");
        
      } else {
        
        for(const replacement of replacements) {
          if (replacement.findString === token) {
            matched = true;
            outputString += replacement.newString;
            if (debug) console.log("Replacing " + replacement.findString + " with " + replacement.newString);
            break;
          }  
        }
        if (! matched) {
          if (debug) console.log("Adding " + token + " as is")
          outputString += token; 
        }
      }
    }
    
    if (debug) {
      console.log("Final expansion: ");
      console.log(outputString);
    }
    
    return outputString;
  }
  
  
  /*
    Utility functions to make the math easier
  */
  toRadians(angle) {
    return angle * (Math.PI / 180);
  }
  randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  /*
    Function to send the turtle along the path of following a particular
    instruction set and drawing out the lines necessary for it; note that
    these lines are hidden to begin with, and need to go through the "grow"
    process in order to be visible
  */
  runTurtle(item) {
    // Get the base, constant information about this rule
    const instructions = item;
    const currentRule = this.props.rule;
    const ruleAngle = Number(currentRule.angle);
    const ruleStep = Number(currentRule.step);
    
    // Set our initial colors
    var fColor = "RANDOM";
    if ('fColor' in currentRule) fColor = currentRule.fColor;
    fColor = fColor.toUpperCase();
    var gColor = "RANDOM";
    if ('gColor' in currentRule) gColor = currentRule.gColor;
    gColor = gColor.toUpperCase();
    var bangColor = "RANDOM";
    if ('bangColor' in currentRule) bangColor = currentRule.bangColor;
    bangColor = bangColor.toUpperCase();
    
    // Set our initial angle and X/Y coordinates
    var currentAngle = 90;
    var currentX = Number(currentRule.startX);
    var currentY = Number(currentRule.startY);
    var locations = Immutable.Stack();
    
    // This structure is what we'll ultimately add to this.state.turtleLines;
    // Note that it's hidden by default in the CSS (the "grow" function shows it)
    var turtleLines = {
      visibility: "hidden drawing",
      lines: Immutable.List(),
    };
    
    // Initial values for variables that we'll use in the loop
    var stepColor = "#000000";
    var stepSize = ruleStep;
    var turnAngle = ruleAngle;
    var turnDirection = '+';
    
    // Okay, now loop over each character in the string
    for (var i = 0; i < instructions.length; i++) {
      const c = instructions.charAt(i).toUpperCase();
      
      // F and G mean "draw the turtle one interval"
      if (c === 'F' || c === 'G' || c === '!') {
        
        // Set the color
        if (c === 'F') {
          stepColor = fColor;
        } else if (c === 'G') {
          stepColor = gColor;
        } else if (c ==='!') {
          stepColor = bangColor;
        }
        if (stepColor === 'RANDOM') {
          stepColor = "#00" + String(this.randomInteger(6666, 9999)).padStart(4, '0');
        }
        
        // Set the length; start with what the rule says
        stepSize = ruleStep;
        
        // Assuming it's not a "!" (we handle !s differently, below),
        // Set the step size based on what the "wrongStepChance"
        // is set to. (If the step size is supposed to be "wrong",
        // the set it to a random size between 1 and twice the current step.)
        if (c !== '!' && Math.random() < currentRule.wrongStepChance) {
          stepSize = this.randomInteger(1, (2 * ruleStep));
        }
        
        // If it's an exclamation point, we need to find out how big it's
        // supposed to be depending on how many "*"s come after it
        if (c === '!') {
          var n = 1;
          while (i + n < instructions.length && instructions.charAt(i + n) === '*') n++;
          // Skootch forward to the end of the "*"s (less one, because the
          // loop will add one to us regardless).
          i = i + n - 1;
          
          // Okay, now we've moved our "cursor" through the instructions 
          // to the appropriate place, and 'n' contains the number of "step sizes" 
          // to move; multiply the original "rule" step size by n for this line.
          stepSize = ruleStep * n;
        }  
        
        // FINALLY! Add a line and move the turtle
        const point1 = new Immutable.Map({x: currentX, y: currentY,});
        currentX = currentX + stepSize * Math.cos(this.toRadians(currentAngle));
        currentY = currentY - stepSize * Math.sin(this.toRadians(currentAngle));
        const point2 = new Immutable.Map({x: currentX, y: currentY,});
        
        turtleLines.lines = turtleLines.lines.push(Immutable.Map({
          line: Immutable.List([point1, point2]), 
          color: stepColor,
        }));
        
      } else if (c === '+' || c === '-') {
        
        // Adjust the angle based on the rule's "wrongAngleChance")
        turnAngle = ruleAngle;
        if (Math.random() < currentRule.wrongAngleChance) {
          // Add between -10 and 10 degrees so as not to mess 
          // with it TOO much
          turnAngle = this.randomInteger(-10, 10);
        }
        
        // Start with the prescribed turn direction
        // ('+' is 'left'; '-' is 'right')
        turnDirection = c;
        // Then, the direction should be reversed some of the time
        if (Math.random() < currentRule.wrongTurnChance) {
          if (turnDirection === '+') turnDirection = '-';
          else turnDirection = '+';
        }
        
        if (turnDirection === '+') {
          currentAngle += turnAngle;
        } else {
          currentAngle -= turnAngle;
        }
        
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
  async grow() {
    const turtleLines = this.state.turtleLines;
    
    this.setState(prevState => {
        return {
          needsToGrow: false,
          inGrowth: true,
        };
    });
    
    for (var i = 0; i < turtleLines.size; i++) {  
      
      if (i !== 0) {
        turtleLines.get(i-1).visibility = "hidden drawing";
      }
      turtleLines.get(i).visibility = "drawing";
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
  // (This method is deprecated, but it's what we need -- 
  // sorry, React developers)
  UNSAFE_componentWillMount() {
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
        <TurtleShape key={i} visibility={turtle.visibility} turtleLines={turtle.lines} />
      ))}
    </div>
    );
  }
}

export default LSystem;
