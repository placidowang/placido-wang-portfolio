import React from 'react';
import NavlinksComponent from './NavlinksComponent.js';
import MediaLinksComponent from './MediaLinksComponent.js';
import './Menu.css';

const Menu = ({ open, setOpen }) => <nav className={open ? 'menu menu-open' : 'menu'}>
  <NavlinksComponent open={open} setOpen={setOpen}/>
  <MediaLinksComponent />
</nav>

export default Menu;