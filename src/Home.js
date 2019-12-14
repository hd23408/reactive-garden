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
    this.initialState = {
      rule: rules,
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
