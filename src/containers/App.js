import React, { useState, useEffect, useRef } from 'react';
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

  useEffect(() => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const overlay = document.querySelector('#overlay');

    if (open) {
      html.className += " noscroll";
      body.className += " noscroll";
      overlay.className += " noscroll";
    } else {
      html.className = "";
      body.className = "";
      overlay.className = "";
    }
  }, [open])

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
        


{/* <div style={{height: '600px', width: '200px', position: 'fixed', left: '0px', top: '0px', backgroundColor: 'yellow', }}> */}
        {/* <div style={{backgroundColor: 'rgba(0,255,0,0.7)', width: '160px', height: '1100%', position: 'fixed', top: '0px',}}>sup</div> */}
        {/* <div style={{backgroundColor: 'rgba(255,0,0,0.7)', width: '100%', position: 'fixed', bottom: '0px', left: '0'}}>hey</div> */}
{/* </div> */}

        <div className='burger-menu' ref={node}>
          <Burger
            open={open}
            setOpen={setOpen} />
          <Menu
            open={open}
            setOpen={setOpen} />
        </div>

        <div id='overlay' />

        <p className='footer'>
          Placido Wang - 2020
        </p><br/>
      </div>
    </Router>
  );
}

export default App;
