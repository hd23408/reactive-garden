import React, { Component } from 'react'
import LSystem from './LSystem'
import Form from './Form'
import Organisms from './Organisms'
import queryString from 'query-string'

class Home extends Component {
  constructor(props) {
    super(props)
  
    const allOrgs = Organisms.toList();
    const numOrgs = allOrgs.size;
    var rules = {};
    const values = queryString.parse(this.props.location.search)
      
    if (typeof values.axiom !== 'undefined') {
      rules = {
        angle: values.angle,
        step: values.step,
        axiom: values.axiom,
        replacements: values.replacements,
        loops: values.loops,
        startX: values.startX,
        startY: values.startY,
        fColor: values.fColor,
        gColor: values.gColor,
        bangColor: values.bangColor,
        addGrowSteps: false,
      };
    } else {
      var randomIndex = Math.floor(Math.random() * Math.floor(numOrgs));
      rules = allOrgs.get(randomIndex).rules;
      rules = Object.assign(rules, {addGrowSteps: true});
    }
    
    // On the first draw, always follow the rules
    this.initialState = {
      rule: Object.assign({}, rules, {
          wrongStepChance: '0.00',
          wrongTurnChance: '0.00',
          wrongAngleChance: '0.00',}) 
    }
    this.state = this.initialState;
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
