import React, { Component } from 'react'
import LSystem from './LSystem'

class App extends Component {
  
  render() {
    
    return (
      // Sierpinski triangle:
      // <LSystem angle="120" step="7" axiom="F-G-G" replacements="(F = F-G+F+G-F), (G = GG)" loops="6"/>
      
      // Fractal plant:
      // <LSystem angle="25" step="3" axiom="X" replacements="(X = F+[[X]-X]-F[-FX]+X), (F = FF)" loops="6"/>
      
      // Koch curve:
      // <LSystem angle="90" step="10" axiom="F" replacements="(F = F+F-F-F+F)" loops="6"/>
      
      // Dragon curve:
      <LSystem angle="90" step="4" axiom="FX" replacements="(X = X+YF+), (Y = -FX-Y)" loops="12"/>
      
    )
    

  }
}
export default App
