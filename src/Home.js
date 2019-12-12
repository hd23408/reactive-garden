import React, { Component } from 'react'
import LSystem from './LSystem'
import Form from './Form'

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.initialState = {
      // 'Thorny bush'
      rule: {
        angle: '6',
        step: '25',
        axiom: 'F',
        replacements: '(F = ![-----F][+++++++F]+![----F][+++++++F]+![---F][+++++F]+!F)',
        loops: '3',
        startX: '300',
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
        <Form handleSubmit={this.handleSubmit} rule={rule} />
        <LSystem rule={rule} colorful="true"/>
      </div>
    </div>
    )
  };
}
export default Home
