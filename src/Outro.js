import React, { Component } from 'react'

class Outro extends Component {
  
  render() {
    return (
    <div>
      <div className="selected slide" id="1" ref="1">
        
        <h2>What else?</h2>
        <p>
        There are plenty of additional things that could be done with this application,
        and with L-systems in general. They include (but are not limited to):
        </p>
        
        <h5>3D L-systems</h5>
        <p>
        L-systems can be used for describing 3-dimensional systems and making 3D
        drawings. (This is the number one thing I would love to extend this application to do.)
        Check out the following sites for some cool examples of 3D L-systems:
        </p>
        <ul>
        <li><a href="http://laurenslapre.nl/lapre_004.htm" target="_new">Lparser</a>, a software package for 3D L-systems</li>
        <li><a href="https://commons.wikimedia.org/wiki/File:Dragon_trees.jpg" target="_new">These pictures</a> from Wikipedia</li>
        </ul>
        
        <h5>Variations of L-systems</h5>
        <p>
        Lindenmayer's original description of L-systems includes a whole lot of stuff that I didn't have time to
        implement (including a 3D vocabulary). These include parametric L-systems (where functions and parameters can be used 
        in addition to simple rewriting), stochastic L-systems (a more formal vocabulary for randomization), and others.
        These inclusions make L-system grammars Turing complete and enable description of pretty much everything. Check
        out the following papers:
        </p> 
        <ul>
        <li><a href="http://algorithmicbotany.org/papers/abop/abop.pdf" target="_new">The Algorithmic Beauty of Plants</a></li>
        <li><a href="http://algorithmicbotany.org/papers/lsfp.pdf" target="_new">Lindenmayer Systems, Fractals, and Plants</a></li>
        </ul>
        
        
        <h5>Further Reading</h5>
        <p>
        This presentation only scratched the surface of what's possible. Here are some good sites to visit to learn more:
        </p> 
        <ul>
        <li><a href="http://algorithmicbotany.org/" target="_new">The University of Calgary's Algorithmic Botany Department</a></li>
        <li><a href="https://www.frontiersin.org/articles/10.3389/fpls.2012.00076/full" target="_new">L-Py: an L-system simulation framework for modeling plant architecture development based on a dynamic language</a></li>
        <li><a href="https://www.sidefx.com/docs/houdini/nodes/sop/lsystem.html" target="_new">L-systems in Houdini</a></li>
        
        </ul>
        
        
      </div>
      
    </div>
    )
  };
}
export default Outro
