import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './Home'
import Garden from './Garden'
import Intro from './Intro'
import Outro from './Outro'

class App extends Component {
  
  render() {
    
    return (
    <Router>
    <p>Welcome to my garden! This is a friendly place for happy L-system plants to grow and flourish. 
    &nbsp; <Link to="/intro">Intro</Link> | <Link to="/">Home</Link> | <Link to="/garden">Garden</Link> | <Link to="/outro">Outro</Link></p>
    
            
        <Switch>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/garden">
            <Garden />
          </Route>
          <Route path="/outro">
            <Outro />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      
    </Router>
    );
  }
}
export default App
