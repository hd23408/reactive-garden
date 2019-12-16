import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Intro extends Component {
  constructor(props) {
    super(props)
    
    // On the first draw, always follow the rules
    this.initialState = {
      page: 1,
    }
    
    this.state = this.initialState;
  }

  // I don't even care about how you're supposed
  // to do it anymore. React is making me crazy.
  showAnswer = (event) => {
    var element = document.getElementById('answer');
    ReactDOM.findDOMNode(element).style.display = 'block';
  }
  
  turnPage = (event) => {
    var otherPages = document.querySelectorAll('div.slide');
    otherPages.forEach(item => this.refs[item.id].className = 'hidden' );  
    var selectedPage = this.refs[event.target.value];
    selectedPage.className='selected slide';
  }
  
  render() {
    return (
    <div>
      <div className="selected slide" id="1" ref="1">
        <div className="pagination">
          <button onClick={this.turnPage} ref="page1button1" value="1" className="selected">1</button>
          <button onClick={this.turnPage} ref="page1button2" value="2">2</button>
          <button onClick={this.turnPage} ref="page1button3" value="3">3</button>
          <button onClick={this.turnPage} ref="page1button4" value="4">4</button>
          <button onClick={this.turnPage} ref="page1button5" value="5">5</button>
        </div>

        <h2>What is an L-system?</h2>
        
        <p>
        An L-system is a parallel rewriting system, and a type of formal grammar.
        In short, it's a way of describing ... well, all sorts of stuff.<sup>1</sup>
        </p>
        <p>
        According to <a href="https://en.wikipedia.org/wiki/L-system" target="_new">Wikipedia</a>:
        <br />
        <em>"An L-system consists of an alphabet of symbols that can be used to make strings, 
        a collection of production rules that expand each symbol into some larger string of symbols, 
        an initial 'axiom' string from which to begin construction, 
        and a mechanism for translating the generated strings into geometric structures."</em>
        </p>
        <p> 
        You can think of it kind of like a computer programming language. In particular, it does a
        lot of stuff with replacements and recursion.
        </p>
        <p>
        L-systems were developed in 1968 by Aristid Lindenmayer, 
        a Hungarian theoretical biologist and botanist at the University of Utrecht.
        He used L-systems to describe the behaviour of plant cells and to 
        model the growth processes of plant development. 
        </p>
        <p>
        Yeah, that's right, a botanist invented a programming language
        so that he could describe algae.
        </p>
        
        <div className="footnote">
        [1] <em><a href="https://www.sciencedirect.com/science/article/pii/S0022519369800305" target="_new">Computing ability of a developmental model for filamentous organisms</a></em> 
        </div>
        <p>
        &nbsp;
        </p>
      </div>
      
      <div className="slide hidden" id="2" ref="2">
        <div className="pagination">
          <button onClick={this.turnPage} ref="page2button1" value="1">1</button>
          <button onClick={this.turnPage} ref="page2button2" value="2" className="selected">2</button>
          <button onClick={this.turnPage} ref="page2button3" value="3">3</button>
          <button onClick={this.turnPage} ref="page2button4" value="4">4</button>
          <button onClick={this.turnPage} ref="page2button5" value="5">5</button>
        </div>

        <h2>How Does it Work?</h2>
        <p>
        Evaluating an L-system consists of two main steps:
        </p>
        <ol>
          <li>Compute a string that contains a set of instructions</li>
          <li>Use a "turtle" to draw a shape by following the instructions</li>
        </ol>
        <h5>Example</h5>
        <p>
        Let's start with a vocabulary. L-system vocabularies can get
        complicated, and different implementations use different symbols,
        but these two symbols are pretty standard:
        </p>
          <ul>
            <li>'F' means "Draw a line segment"</li>
            <li>'+' means "Turn" (you get to choose the angle)</li> 
          </ul>        
        
        <p>
        When we go to draw the L-system, we use a list of these symbols
        and interpret them as instructions for drawing. For instance, the instructions 
        "F+F" mean "draw a line segment, turn, and draw another line segment." 
        </p>
      </div>
      
      <div className="slide hidden" id="3" ref="3">
        <div className="pagination">
          <button onClick={this.turnPage} ref="page3button1" value="1">1</button>
          <button onClick={this.turnPage} ref="page3button2" value="2">2</button>
          <button onClick={this.turnPage} ref="page3button3" value="3" className="selected">3</button>
          <button onClick={this.turnPage} ref="page3button4" value="4">4</button>
          <button onClick={this.turnPage} ref="page3button5" value="5">5</button>
        </div>
        <h2>How Does it Work? (cont.)</h2>
        <p>
        Now you need a starting string ("axiom"). If you wanted you could just start with something
        like "F+F+F+F+" right out of the gate and call it a day. (Or call it a square, if
        you went with a 90 degree angle. Heh.) But that's boring.
        </p>
        <p>
        The thing that makes L-systems interesting is their use of replacement rules. 
        So, for instance, you could say something like this:
        </p>
          <ul>
            <li>Axiom: F</li>
            <li>Replacement rule: F = F+F</li>
            <li>Number of loops: 3</li>
          </ul>
        <p> 
        And when you evaluate it, you get this!
        </p>
          <ol class="zero_indexed">
            <li>F</li>
            <li>F+F</li>
            <li>F+F + F+F</li>
            <li>F+F + F+F  +  F+F + F+F</li>
          </ol>
        
      </div>
      
      <div className="slide hidden" id="4" ref="4">
        <div className="pagination">
          <button onClick={this.turnPage} ref="page4button1" value="1">1</button>
          <button onClick={this.turnPage} ref="page4button2" value="2">2</button>
          <button onClick={this.turnPage} ref="page4button3" value="3">3</button>
          <button onClick={this.turnPage} ref="page4button4" value="4" className="selected">4</button>
          <button onClick={this.turnPage} ref="page4button5" value="5">5</button>
        </div>

        <h2>How Does it Work? (cont.)</h2>
        <p>
        We just evaluated our first L-system! We started with this:
        </p>
          <ul>
            <li>Axiom: F</li>
            <li>Replacement Rules: F=F+F</li>
          </ul>
        <p>
        And after 3 loops, we ended up with "F+F+F+F+F+F+F+F". (Just
        think of all of the Fs you could get using more loops.)
        </p>
        
        <h5>Drawing</h5>
        <p>
        Okay, so in order to draw a shape for this L-system, there are a 
        couple additional parameters we need to specify:
        </p>
          <ul>
            <li>Angle for turns (e.g. 45°)</li>
            <li>Size for each line (e.g. 30px)</li> 
          </ul>        
        
        <p>
        And once you've defined those, you just need to find a compliant turtle. <br /> 
        <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/223/turtle_1f422.png"
        alt="Turtle" width="50" /><br />
        Tell your turtle servant to follow the instructions in your string. Again, "F" means draw a line segment (using
        the length that you specified earlier), and "+" means turn (let's say left) by the angle
        you specified.
        </p>
      </div>
      
      <div className="slide hidden" id="5" ref="5">
        <div className="pagination">
          <button onClick={this.turnPage} ref="page5button1" value="1">1</button>
          <button onClick={this.turnPage} ref="page5button2" value="2">2</button>
          <button onClick={this.turnPage} ref="page5button3" value="3">3</button>
          <button onClick={this.turnPage} ref="page5button4" value="4">4</button>
          <button onClick={this.turnPage} ref="page5button5" value="5" className="selected">5</button>
        </div>

        <h2>Quiz Time!</h2>
        <p>
        Here are the rules:
        </p>
          <ul>
            <li>Axiom: F</li>
            <li>Replacement rule: F = F+F</li>
            <li>Number of loops: 3</li>
            <li>Step size: 30</li>
            <li>Angle: 45</li>
          </ul>
        
        <p>
        And the answer is...
        </p>
        <div>
          <button onClick={this.showAnswer}>Show Answer</button>
          <img className="hidden" id="answer" alt="octagon" src="octagon.png" />  
        </div>
      </div>
      
    </div>
    )
  };
}
export default Intro
