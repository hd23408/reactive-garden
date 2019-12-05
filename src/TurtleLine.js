import React, { Component } from 'react'
import Immutable from 'immutable'

class TurtleLine extends Component {  
  render() {
    const { line } = this.props
    
    const pathData = "M " + line
      .map(p => p.get('x') + ' ' + p.get('y'))
      .join(" L ");

    return <path class='path' stroke='black' d={pathData} />;
  }
}

export default TurtleLine;