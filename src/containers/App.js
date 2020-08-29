import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from '../components/Navbar.js';
import Home from '../components/Home.js';
import Projects from '../components/Projects.js';
import About from '../components/About.js';
import Contact from '../components/Contact.js';

import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home} />
      </div>
    </Router>
  );
}

export default App;
