import React, { Component } from 'react'
import Organisms from './Organisms'

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
    const self = this;
    
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
        <p>Click on the name to try it out! Rules will be 
        auto-populated in the form to the right.</p>
        <ul className="columns">
        
          {Organisms.toArray().map(function(key, i) {
            return <li key={i}>
                   <button onClick={() => self.fillRules({
                      axiom: key[1]['rules']['axiom'],
                      replacements: key[1]['rules']['replacements'],
                      angle: key[1]['rules']['angle'],
                      step: key[1]['rules']['step'],
                      loops: key[1]['rules']['loops'],
                      startX: key[1]['rules']['startX'],
                      startY: key[1]['rules']['startY'],
                      fColor: key[1]['rules']['fColor'],
                      gColor: key[1]['rules']['gColor'],
                      bangColor: key[1]['rules']['bangColor'],
                    })}>
                  <strong>{key[0]}</strong>
                  </button>
                  </li>
            })} 
        </ul>
        
      </div>
    </div>
    );
  }
}

  export default Form;