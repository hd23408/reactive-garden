import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      angle: props.rule.angle,
      step: props.rule.step,
      axiom: props.rule.axiom,
      replacements: props.rule.replacements,
      loops: props.rule.loops,
      startX: props.rule.startX,
      startY: props.rule.startY,
      fColor: props.rule.fColor,
      gColor: props.rule.gColor,
      bangColor: props.rule.bangColor,
    }

    this.state = this.initialState
  }
  
  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }
  
  fillRules = newRule => {
    this.setState(newRule
    , () => this.submitForm());
    
  }
  
  submitForm = () => {
    this.props.handleSubmit(this.state);
  }
  
  render() {
    const { angle,
      step,
      axiom,
      replacements,
      loops,
      startX,
      startY,
      fColor,
      gColor,
      bangColor } = this.state;
  
    return (
      
    <div>
      <div className="instructions">
        <h3>Instructions</h3>
        To run an L-System, enter the required information and press "submit". Some notes:
        <ul>
        <li>The "Replacement Rule" should consist one or more comma-separated replacement rules, of the format "( X = Y )" -- see examples, below</li>
        <li>The rules use the following symbols:
          <ul>
          <li>'F' and 'G' each draw a single line segment</li>
          <li>'+' and '-' rotate the turtle to the left and right respectively (by the defined angle)</li>
          <li>'[' and ']' store and recall a particular XY coordinate for the turtle (i.e. allow the turtle to return to a previous location)</li>
          <li>'!' will draw a line segment that is larger if it's older, by a factor of how many generations old it is. In other words, 
            a '!' that is added to the output string in the first loop will be 6 times longer than a '!' that's added to the 
            output string in the sixth loop.</li> 
          <li>'X' and 'Y' are no-ops and are used as placeholders in the rules</li>
          <li>All other characters are ignored</li>
          </ul>
        </li>
        <li>PLEASE don't use more than 6 recursions!</li>
        <li>If you're having trouble seeing the entire resulting drawing, try reducing the "Step Size" to make it smaller</li>
        <li>You can also use the "F Color", "G Color" and "'!' Color" fields to set colors for the various letters. If using hex colors,
          please include the "#" at the beginning! (Set these to the string 'random' if you want it to just
          choose some random colors from the blue-green spectrum for each line.)</li>
        <li>NOTE: INPUTS ARE NOT CURRENTLY BEING SANITIZED! If you get an error, probably it's a parsing issue. Check your rules in particular.</li>
        </ul>
      </div>
      
      <div className="instructions">
        
        <h3>L-System rules</h3>
        <form>
          <label>Axiom (initial string)</label>
          <input
            type="text"
            name="axiom"
            size="10"
            value={axiom}
            onChange={this.handleChange} />
          
          <br />
          <label>Replacement Rules</label>
          <input
            type="text"
            name="replacements"
            size="50"
            value={replacements}
            onChange={this.handleChange} />
          
          <br />
          <label>Angle for Turns</label>
          <input
            type="text"
            name="angle"
            size="5"
            value={angle}
            onChange={this.handleChange} />
          <br />
          <label>Step Size (length of line)</label>
          <input
            type="text"
            name="step"
            size="5"
            value={step}
            onChange={this.handleChange} />
          <br />
          <label>Loops (number of recursions)</label>
          <input
            type="text"
            name="loops"
            size="5"
            value={loops}
            onChange={this.handleChange} />
          <br />
          <label>Initial X Position</label>
          <input
            type="text"
            name="startX"
            size="5"
            value={startX}
            onChange={this.handleChange} />
          <label>Initial Y Position</label>
          <input
            type="text"
            name="startY"
            size="5"
            value={startY}
            onChange={this.handleChange} />
          <br />
          <label>'F' Color</label>
          <input
            type="text"
            name="fColor"
            size="8"
            value={fColor}
            onChange={this.handleChange} />
          <label>'G' Color</label>
          <input
            type="text"
            name="gColor"
            size="8"
            value={gColor}
            onChange={this.handleChange} />
          <label>'!' Color</label>
          <input
            type="text"
            name="bangColor"
            size="8"
            value={bangColor}
            onChange={this.handleChange} />
          <br />
          <input type="button" value="Submit" onClick={this.submitForm} />
        </form>
      </div>
      
      <div className="examples">
        <h3>Examples</h3>
        <div>
        Click on the name to try it out!
        <ul className="columns">
        <li>
        <button onClick={() => this.fillRules({
          axiom: "F-G-G",
          replacements: "(F = F-G+F+G-F), (G = GG)",
          angle: "120",
          step: "7",
          loops: "6",
          startX: "10",
          startY: "600",
          fColor: "#ff3399",
          gColor: "#336600",
        })}><strong>Sierpinski triangle</strong></button>
          <ul>
            <li>Axiom: F-G-G</li>
            <li>Replacement Rules: (F = F-G+F+G-F), (G = GG)</li>
            <li>Angle: 120</li>
            <li>Step Size: 7</li>
            <li>Loops: 6</li>
            <li>Initial X: 10</li>
            <li>Initial Y: 600</li>
          </ul>
        </li>
        
        <li><button onClick={() => this.fillRules({
          axiom: "!!GF",
          replacements: "(F=GGG-[-F+F+F]+[+F-F+F])",
          angle: "20",
          step: "8",
          loops: "5",
          startX: "300",
          startY: "600",
          fColor: "#ff3399",
          gColor: "#336600",
        })}><strong>Thistle</strong></button>
          <ul>
            <li>Axiom: !!GF</li>
            <li>Replacement Rules: (F=GGG-[-F+F+F]+[+F-F+F])</li>
            <li>Angle: 20</li>
            <li>Step Size: 8</li>
            <li>Loops: 4</li>
            <li>Initial X: 300</li>
            <li>Initial Y: 600</li>
          </ul>
        </li>
        
        <li><button onClick={() => this.fillRules({
          axiom: "F",
          replacements: "(F = ![-----F][+++++++F]+![----F][+++++++F]+![---F][+++++F]+!F)",
          angle: "6",
          step: "25",
          loops: "3",
          startX: "300",
          startY: "600",
          fColor: "#ff3399",
          gColor: "#336600",
        })}><strong>Thorny bush</strong></button>
          <ul>
            <li>Axiom: F</li>
            <li>Replacement Rules: (F = ![-----F][+++++++F]+![----F][+++++++F]+![---F][+++++F]+!F)</li>
            <li>Angle: 6</li>
            <li>Step Size: 25</li>
            <li>Loops: 3</li>
            <li>Initial X: 300</li>
            <li>Initial Y: 600</li>
          </ul>
        </li>
        
        <li><button onClick={() => this.fillRules({
          axiom: "F",
          replacements: "(F = G[+F][-F]GF), (G = GG)",
          angle: "25",
          step: "4",
          loops: "6",
          startX: "300",
          startY: "600",
          fColor: "#ff3399",
          gColor: "#336600",
        })}><strong>Berry bush</strong></button>
          <ul>
            <li>Axiom: F</li>
            <li>Replacement Rules: (F = G[+F][-F]GF), (G = GG)</li>
            <li>Angle: 25</li>
            <li>Step Size: 4</li>
            <li>Loops: 6</li>
            <li>Initial X: 300</li>
            <li>Initial Y: 600</li>
          </ul>
        </li>
        
         <li><button onClick={() => this.fillRules({
          axiom: "X",
          replacements: "(X = F+[[X]-X]-F[-FX]+X), (F = FF)",
          angle: "25",
          step: "3",
          loops: "6",
          startX: "300",
          startY: "600",
          fColor: "#336600",
          gColor: "#336600",
        })}><strong>Fractal plant</strong></button>
          <ul>
            <li>Axiom: X</li>
            <li>Replacement Rules: (X = F+[[X]-X]-F[-FX]+X), (F = FF)</li>
            <li>Angle: 25</li>
            <li>Step Size: 3</li>
            <li>Loops: 6</li>
            <li>Initial X: 300</li>
            <li>Initial Y: 600</li>
          </ul>
        </li>
        
        <li><button onClick={() => this.fillRules({
          axiom: "F",
          replacements: "(G = GG), (F = G[+F]-F)",
          angle: "25",
          step: "4",
          loops: "7",
          startX: "300",
          startY: "600",
          fColor: "#ff3399",
          gColor: "#336600",
        })}><strong>Binary tree</strong></button>
          <ul>
            <li>Axiom: F</li>
            <li>Replacement Rules: (G = GG), (F = G[+F]-F)</li>
            <li>Angle: 25</li>
            <li>Step Size: 4</li>
            <li>Loops: 7</li>
            <li>Initial X: 300</li>
            <li>Initial Y: 600</li>
          </ul>
        </li>
        
        <li><button onClick={() => this.fillRules({
          axiom: "F",
          replacements: "(F = F+F-F-F+F)",
          angle: "90",
          step: "4",
          loops: "4",
          startX: "300",
          startY: "600",
          fColor: "#ff3399",
          gColor: "#336600",
        })}><strong>Koch curve</strong></button>
          <ul>
            <li>Axiom: F</li>
            <li>Replacement Rules: (F = F+F-F-F+F)</li>
            <li>Angle: 90</li>
            <li>Step Size: 4</li>
            <li>Loops: 4</li>
            <li>Initial X: 300</li>
            <li>Initial Y: 600</li>
          </ul>
        </li>
        
        <li><button onClick={() => this.fillRules({
          axiom: "FX",
          replacements: "(X = X+YF+), (Y = -FX-Y)",
          angle: "90",
          step: "4",
          loops: "12",
          startX: "300",
          startY: "200",
          fColor: "#ff3399",
          gColor: "#336600",
        })}><strong>Dragon curve</strong></button>
          <ul>
            <li>Axiom: FX</li>
            <li>Replacement Rules: (X = X+YF+), (Y = -FX-Y)</li>
            <li>Angle: 90</li>
            <li>Step Size: 4</li>
            <li>Loops: 12 <i>(Dragons get special dispensation for extra loops)</i></li>
            <li>Initial X: 300</li>
            <li>Initial Y: 200</li>
          </ul>
        </li>
        
        </ul>
        </div>
      </div>
    </div>
    );
  }
}

  export default Form;