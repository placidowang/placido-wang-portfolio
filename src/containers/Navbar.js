import React from 'react';
import Name from '../components/Name.js';
import NavlinksComponent from '../components/NavlinksComponent.js'
import MediaLinksComponent from '../components/MediaLinksComponent.js'
import Burger from '../components/Burger.js';
import Menu from '../components/Menu.js';
import './Navbar.css';

const Navbar = ({open, setOpen}) => <div className='navbar'>
  <div className='navbar-left'>
    <Name />
  </div>
  <div className='navbar-right'>
    <NavlinksComponent />
    <MediaLinksComponent />
  </div>

  <div className='burger-menu'>
    <Burger
      open={open}
      setOpen={setOpen} />
    <Menu
      open={open}
      setOpen={setOpen} />
  </div>
</div>

export default Navbar;