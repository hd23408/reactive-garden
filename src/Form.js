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
      startY: props.rule.startY
    }

    this.state = this.initialState
  }
  
  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
  }
  
  submitForm = () => {
    this.props.handleSubmit(this.state)
  }
  
  render() {
    const { angle,
      step,
      axiom,
      replacements,
      loops,
      startX,
      startY } = this.state;
  
    return (
      
      <div className="instructions">
      <h3>Instructions</h3>
      <p>
        To run an L-System, enter the required information and press "submit". Some notes:
        <ul>
        <li>The "Replacement Rule" should consist one or more comma-separated replacement rules, of the format "( X = Y )" -- see examples, below</li>
        <li>The rules use the following symbols:
          <ul>
          <li>'F' and 'G' each draw a single line segment</li>
          <li>'+' and '-' rotate the turtle to the left and right respectively (by the defined angle)</li>
          <li>'[' and ']' store and recall a particular XY coordinate for the turtle (i.e. allow the turtle to return to a previous location)</li>
          <li>'X' and 'Y' are no-ops and are used as placeholders in the rules</li>
          <li>All other characters are ignored</li>
          </ul>
        </li>
        <li>PLEASE don't use more than 6 recursions!</li>
        <li>If you're having trouble seeing the entire resulting drawing, try reducing the "Step Size" to make it smaller</li>
        <li>NOTE: INPUTS ARE NOT CURRENTLY BEING SANITIZED! If you get an error, probably it's a parsing issue. Check your rules in particular.</li>
        </ul>
      </p>
      
      <hr />
      
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
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
      
      <hr />
      
      <h3>Examples</h3>
      <p>
      <ul>
      <li>Sierpinski triangle:
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
      
      <li>Fractal plant:
        <ul>
          <li>Axiom: X</li>
          <li>Replacement Rules: (X = F+[[X]-X]-F[-FX]+X), (F = FF)</li>
          <li>Angle: 25</li>
          <li>Step Size: 3</li>
          <li>Loops: 6</li>
          <li>Initial X: 200</li>
          <li>Initial Y: 600</li>
        </ul>
      </li>
      
      <li>Binary tree:
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
      
      
      <li>Koch curve
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
      
      
      <li>Dragon curve
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
      </p>
      </div>
    );
  }
}

  export default Form;