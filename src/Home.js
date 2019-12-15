import React, { Component } from 'react'
import LSystem from './LSystem'
import Form from './Form'
import Organisms from './Organisms'

class Home extends Component {
  constructor(props) {
    super(props)
  
    const allOrgs = Organisms.toList();
    const numOrgs = allOrgs.size;
    var randomIndex = Math.floor(Math.random() * Math.floor(numOrgs));
    var rules = allOrgs.get(randomIndex).rules;
    
    // On the first draw, always follow the rules
    this.initialState = {
      rule: Object.assign({}, rules, {addGrowSteps: true,
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',}) 
    }
    
    this.state = this.initialState
  }

  handleSubmit = (newRule) => {
    this.setState({ rule: newRule });
  }

  
  render() {
    const { rule } = this.state;
    
    return (
    <div>
      <div className="drawArea">
        <LSystem rule={rule} />
      </div>
      <Form handleSubmit={this.handleSubmit} rule={rule} />
    </div>
    )
  };
}
export default Home
