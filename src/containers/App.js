import React, { useState, useRef } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';
import Burger from '../components/Burger.js';
import Menu from '../components/Menu.js';

import { useOnClickOutside } from '../hooks.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <Router>
      <div className="App">
        <Navbar
          // open={open}
          // setOpen={setOpen}
           />
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        
        {/* <div style={{backgroundColor: 'rgba(0,255,0,0.7)', width: '100%', height: '1100%', position: 'fixed', top: '40px',}}>sup</div> */}

<div style={{height: '100vh', position: 'fixed', right: '0px', top: '0px'}}>
        <div style={{backgroundColor: 'rgba(255,0,0,0.7)', width: '100%', position: 'fixed', bottom: '0px', left: '0'}}>hey</div>
</div>

        <div className='burger-menu' ref={node}>
          <Burger
            open={open}
            setOpen={setOpen} />
          <Menu
            open={open}
            setOpen={setOpen} />
        </div>
      </div>
    </Router>
  );
}

export default App;
