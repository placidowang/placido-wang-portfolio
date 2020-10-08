import React, { useRef } from 'react';
import { useOnClickOutside } from '../hooks.js';
import Name from '../components/Name.js';
import NavlinksComponent from '../components/NavlinksComponent.js'
import MediaLinksComponent from '../components/MediaLinksComponent.js'
import Burger from '../components/Burger.js';
import Menu from '../components/Menu.js';
import './Navbar.css';


const Navbar = ({open, setOpen}) => {
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

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

        <div className='burger-menu' ref={node}>
          <Burger
            open={open}
            setOpen={setOpen} />
          <Menu
            open={open}
            setOpen={setOpen} />
        </div>
      </div>
    </div>
  )
};

export default Navbar;