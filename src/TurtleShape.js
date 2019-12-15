import React, { Component } from 'react'
import TurtleLine from './TurtleLine'

class TurtleShape extends Component {  
  
  render() {
    const turtleLines = this.props.turtleLines;
    const visibility = this.props.visibility;
    return (
      <svg className={visibility}>
        {turtleLines.map((lines, index) => (
          <TurtleLine key={index} line={lines.get("line")} color={lines.get("color")} />
        ))}
      </svg>
    );
    
  }
}

export default TurtleShape;
