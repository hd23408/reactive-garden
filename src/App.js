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
    <Router basename='/reactive-garden/'>
    <p>Welcome to my garden! This is a friendly place for happy L-system plants to grow and flourish. 
    &nbsp; <Link to="/intro">Intro</Link> | <Link to="/">Home</Link> | <Link to="/garden">Garden</Link> | <Link to="/outro">Outro</Link></p>
    
            
        <Switch>
          <Route path="/intro" component={Intro} />
          <Route path="/garden" component={Garden} />
          <Route path="/outro" component={Outro} />
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />

        </Switch>
      
    </Router>
    );
  }
}
export default App
