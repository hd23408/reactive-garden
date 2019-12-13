import React, { Component } from 'react'
import LSystem from './LSystem'
import Form from './Form'

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.initialState = {
      // 'Thistle'
      rule: {
        angle: '20',
        step: '8',
        axiom: '!!GF',
        replacements: '(F=GGG-[-F+F+F]+[+F-F+F])',
        loops: '4',
        startX: '300',
        startY: '600',
        fColor: '#ff3399',
        gColor: '#336600',
        bangColor: '#336600'
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
