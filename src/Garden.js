import React, { Component } from 'react'
import Immutable from 'immutable'
import LSystem from './LSystem'
import Organisms from './Organisms'


class Garden extends Component {
  constructor(props) {
    super(props)

  
    this.initialState = {
      organisms: Immutable.List(),
    }
  
    this.state = this.initialState
  }
 
  componentDidMount() {
    this.shuffle();
  }
  
  shuffle = () => {
    const allOrgs = Organisms.toList();
    const numOrgs = allOrgs.size;
    
    var newOrganisms = Immutable.List();
        
    /*
    The drawArea is 600x600, and we want to divide it into
    25 squares. Therefore, each organism should take up the following "plots":
    0-120|120, 121-240|120, 241-360|120, 361-480|120, 481-600|120
    0-120|240, 121-240|240, 241-360|240, 361-480|240, 481-600|240
    etc.
    
    TODO: Adjust this appro0priately for things that should start 
    in the middle of their plots, like dragons
    */
    
    for (var x = 60; x <= 540; x += 120) {
      for (var y = 120; y <= 600; y += 120) {
        var randomIndex = Math.floor(Math.random() * Math.floor(numOrgs));
        var rules = allOrgs.get(randomIndex).rules;
        newOrganisms = newOrganisms.push(Object.assign({}, rules, {startX: x, startY: y, step: rules['littleStep'], loops: rules['littleLoops']}));
      }
    }
    this.setState({
      organisms: newOrganisms,
    });
    
  }
  
  
  render() {
    const organisms = this.state.organisms;
    
    return (
    <div>
      <div className="button">
        <button onClick={this.shuffle}>Shuffle</button>
      </div>
      <div className="container">
      {organisms.map((rule, i) => (
        <LSystem key={i} rule={rule} grow="0" colorful="true"/>
      ))}
      </div>
      
      

    </div>
    )
    
  }
}
export default Garden
