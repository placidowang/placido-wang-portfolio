import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <Router>
      <div className="App">
        <Navbar
          open={open}
          setOpen={setOpen} />
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <div style={{backgroundColor: 'red', width: '100%', position: 'fixed', bottom: '0px',}}>hey</div>
      </div>
    </Router>
  );
}

export default App;
