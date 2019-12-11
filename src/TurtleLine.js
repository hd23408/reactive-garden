import React, { Component } from 'react'

class TurtleLine extends Component {  
  render() {
    const { line, color } = this.props;
    
    const pathData = "M " + line
      .map(p => p.get('x') + ' ' + p.get('y'))
      .join(" L ");

    return <path className='path' stroke={color} d={pathData} />;
    
  }
}

export default TurtleLine;
