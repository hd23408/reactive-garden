import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './Home'
import Garden from './Garden'

class App extends Component {
  
  render() {
    
    return (
    <Router>
    <p>Welcome to my garden! This is a safe space for L-System plants to grow and flourish. 
    &nbsp; <Link to="/">Home</Link> | <Link to="/garden">Garden</Link></p>
    
            
        <Switch>
          <Route path="/garden">
            <Garden />
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
