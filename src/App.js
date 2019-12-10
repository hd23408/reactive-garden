import React, { Component } from 'react'
import LSystem from './LSystem'
import Form from './Form'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.initialState = {
      // Sierpinski triangle
      rule: {
        angle: '120',
        step: '7',
        axiom: 'F-G-G',
        replacements: '(F = F-G+F+G-F), (G = GG)',
        loops: '6',
        startX: '10',
        startY: '600'
      }
    }
  
    this.state = this.initialState
  }

  handleSubmit = newRule => {
    this.setState({ rule: newRule });
  }

  
  render() {
    const { rule } = this.state
    
    return (
    <div>
      <div className="container">
        <Form handleSubmit={this.handleSubmit} rule={rule}/>
        <LSystem rule={rule} />
      </div>

    </div>
    )
    
  }
}
export default App
