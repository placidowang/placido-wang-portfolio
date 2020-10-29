import React, { useRef } from 'react';
import Name from '../components/Name.js';
import NavlinksComponent from '../components/NavlinksComponent.js'
import MediaLinksComponent from '../components/MediaLinksComponent.js'

import './Navbar.css';


const Navbar = () => {


  return (
    <div className='navbar-wrapper'>
      <div className='navbar'>
        <div className='navbar-left'>
          <Name />
        </div>
        <div className='navbar-right'>
          <NavlinksComponent />
          <MediaLinksComponent />
        </div>


      </div>
    </div>
  )
};

export default Navbar;