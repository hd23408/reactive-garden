import React, { Component } from 'react'
import TurtleLine from './TurtleLine'

class TurtleShape extends Component {  
  
  render() {
    const turtleLines = this.props.turtleLines;
    const visibility = this.props.visibility;
    
    return (
      <div>
      <svg className={visibility}>
        {turtleLines.map((line, index) => (
          <TurtleLine key={index} line={line} />
        ))}
      </svg>
      </div>
    );
    
  }
}

export default TurtleShape;
