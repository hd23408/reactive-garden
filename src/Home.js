import React, { Component } from 'react'
import LSystem from './LSystem'
import Form from './Form'

class Home extends Component {
  constructor(props) {
    super(props)
  
    this.initialState = {
      // Binary tree
      rule: {
        angle: '25',
        step: '4',
        axiom: 'F',
        replacements: '(G = GG), (F = G[+F]-F)',
        loops: '7',
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
        <Form handleSubmit={this.handleSubmit} rule={rule}/>
        <LSystem rule={rule} />
      </div>
    </div>
    )
  };
}
export default Home
