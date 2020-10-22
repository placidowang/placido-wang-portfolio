import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';
import Projects from './Projects.js';
import About from './About.js';
import Contact from './Contact.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
  const [open, setOpen] = useState(false);
  const [slideshowIndex, setSlideshowIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
    const slides = document.querySelectorAll('.slide');

      setSlideshowIndex(((slideshowIndex + 1) % slides.length));
      // setSlideshowIndex(1);
      // console.log(slideshowIndex);
      
    }, 5000)

    // otherwise component will set interval for every update
    return () => clearInterval(interval);
  })
  
  return (
    <Router>
      <div className="App">
        <Navbar
          open={open}
          setOpen={setOpen} />
        <Route exact path='/' render={(props) => (
          <Home {...props} slideshowIndex={slideshowIndex} />
        )} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </div>
    </Router>
  );
}

export default App;
