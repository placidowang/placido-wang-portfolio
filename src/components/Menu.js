import React from 'react';
import NavlinksComponent from './NavlinksComponent.js';
import MediaLinksComponent from './MediaLinksComponent.js';
import './Menu.css';

const Menu = ({ open, setOpen }) => <nav className={open ? 'menu menu-open' : 'menu'}>
  <NavlinksComponent open={open} setOpen={setOpen}/>
  <div className='media-links-component-container'>
    <MediaLinksComponent />
  </div>
</nav>

export default Menu;