import "./App.css";
import React, {useState} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from './About.jsx';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx'
import Contact from './Contact.jsx'

function App() {
  return (
    <div>
      <Router>
      <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
