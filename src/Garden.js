import React, { Component } from 'react'
import Immutable from 'immutable'
import LSystem from './LSystem'
import Organisms from './Organisms'


class Garden extends Component {
  constructor(props) {
    super(props)
    
    /*
    The drawArea is 600x600, and we want to divide it into
    25 squares. Therefore, each organism should take up the following "plots":
    0-120|120, 121-240|120, 241-360|120, 361-480|120, 481-600|120
    0-120|240, 121-240|240, 241-360|240, 361-480|240, 481-600|240
    etc.
    */
  
    this.initialState = {
      organisms: Immutable.List()
      .push(Object.assign({}, Organisms.get("binaryTree").rules, {startX: '60', startY: '120'}))
      .push(Object.assign({}, Organisms.get("bush").rules, {startX: '180', startY: '120'}))
      .push(Object.assign({}, Organisms.get("dragon").rules, {startX: '300', startY: '90'}))
      .push(Object.assign({}, Organisms.get("algae").rules, {startX: '420', startY: '120'}))
      .push(Object.assign({}, Organisms.get("fractalPlant").rules, {startX: '540', startY: '120'}))
      
      .push(Object.assign({}, Organisms.get("fractalPlant").rules, {startX: '60', startY: '240'}))
      .push(Object.assign({}, Organisms.get("binaryTree").rules, {startX: '180', startY: '240'}))
      .push(Object.assign({}, Organisms.get("dragon").rules, {startX: '300', startY: '210'}))
      .push(Object.assign({}, Organisms.get("algae").rules, {startX: '420', startY: '240'}))
      .push(Object.assign({}, Organisms.get("binaryTree").rules, {startX: '540', startY: '240'}))
      
      .push(Object.assign({}, Organisms.get("binaryTree").rules, {startX: '60', startY: '360'}))
      .push(Object.assign({}, Organisms.get("fractalPlant").rules, {startX: '180', startY: '360'}))
      .push(Object.assign({}, Organisms.get("fractalPlant").rules, {startX: '300', startY: '360'}))
      .push(Object.assign({}, Organisms.get("dragon").rules, {startX: '420', startY: '330'}))
      .push(Object.assign({}, Organisms.get("algae").rules, {startX: '540', startY: '360'}))
      
      .push(Object.assign({}, Organisms.get("dragon").rules, {startX: '60', startY: '450'}))
      .push(Object.assign({}, Organisms.get("bush").rules, {startX: '180', startY: '480'}))
      .push(Object.assign({}, Organisms.get("dragon").rules, {startX: '300', startY: '450'}))
      .push(Object.assign({}, Organisms.get("fractalPlant").rules, {startX: '420', startY: '480'}))
      .push(Object.assign({}, Organisms.get("fractalPlant").rules, {startX: '540', startY: '480'}))
      
      .push(Object.assign({}, Organisms.get("dragon").rules, {startX: '60', startY: '570'}))
      .push(Object.assign({}, Organisms.get("fractalPlant").rules, {startX: '180', startY: '600'}))
      .push(Object.assign({}, Organisms.get("dragon").rules, {startX: '300', startY: '570'}))
      .push(Object.assign({}, Organisms.get("algae").rules, {startX: '420', startY: '600'}))
      .push(Object.assign({}, Organisms.get("fractalPlant").rules, {startX: '540', startY: '600'}))
      
    }
  
    this.state = this.initialState
  }
  
  render() {
    const organisms = this.state.organisms;
    
    return (
    <div>
      <div className="container">
      {organisms.map((rule, i) => (
        <LSystem rule={rule} grow="0" colorful="true"/>
      ))}
      </div>

    </div>
    )
    
  }
}
export default Garden
