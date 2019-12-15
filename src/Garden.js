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
 
 
  // Before everything loads, grab 25
  // random plants.
  // (This method is deprecated, but it's what we need -- 
  // sorry, React developers)
  UNSAFE_componentWillMount() {
    this.shuffle(); 
  }
  
  /*
    Utility method for sleeping (ugh javascript)
  */
  sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
  
  /*
    Kick off some "waving" in the breeze...
  */
  triggerBreeze = () => {
    (async () => {
        console.log('function2');
        await this.wave(1);
    })();
  }

  async wave(iteration) {
    console.log(iteration);
    this.forceUpdate();
    if (iteration < 20) {
      await this.sleep(10);
      
      var newOrganisms = Immutable.List();
      for (var i=0; i < 25; i++) {
        var org = this.state.organisms.get(i);
        newOrganisms = newOrganisms.push(Object.assign({}, org, {
              wrongStepChance: '0.00',
              wrongTurnChance: '0.00',
              wrongAngleChance: '0.05',
              randomNumber: Math.random(),
          }));
      }
      this.setState({
        organisms: newOrganisms,
      }, () => this.wave(++iteration));
    }
    
  }
  
  shuffle = () => {
    // The first 6 ""organisms" are too non-plantlike to use in a garden
    const allOrgs = Immutable.List(Organisms).slice(6); 
    const numOrgs = allOrgs.size;
    
    var newOrganisms = Immutable.List();
        
    /*
    The drawArea is 600x600, and we're dividing it into
    25 squares.
    */
    
    for (var x = 0; x <= 4; x++) {
      for (var y = 0; y <= 4; y++) {
        var randomIndex = Math.floor(Math.random() * Math.floor(numOrgs));
        
        var rules = allOrgs.get(randomIndex)[1].rules;
        
        // Each organism has its own starting point that
        // will center it a garden bit; this is relative to
        // a 600x600 grid for the main screen, so we need to
        // scale it down for this smaller "garden plot"
        var startX = (rules['startX'] / 600) * 120;
        var startY = (rules['startY'] / 600) * 120;
        
        newOrganisms = newOrganisms.push(Object.assign({}, rules, {
            startX: startX, 
            startY: startY,
            step: rules['gardenStep'], 
            loops: rules['gardenLoops'],
            name: allOrgs.get(randomIndex)[0],
        }));
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
      <div className="drawArea">
      {organisms.map((rule, i) => (
        <div key={i} className="gardenPlot">
          <LSystem key={i} rule={rule} />
          <div className="footnote">{i+1}</div>
        </div>
      ))}
      </div>
      
      <div className="instructions">
      <ol className="columns">
      {organisms.map((rule, i) => (
        <li key={i}>{rule.name}</li>
      ))}
      </ol>
      <div className="button">
        <button onClick={this.shuffle}>Shuffle</button>
        <button onClick={this.triggerBreeze}>Breeze</button>
      </div>
      
      </div>
      
    </div>
    )
    
  }
}
export default Garden
