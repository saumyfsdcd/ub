import "./App.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About.jsx';
import Home from './Home.jsx';


function App() {
  return (
    <div>
      <Router>
      <Link className="anchor" to='/'>Home</Link>      
      <Link className="anchor" to='/about'>About</Link>
        <Switch>
          <Route exact path='/' >
            <Home />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
