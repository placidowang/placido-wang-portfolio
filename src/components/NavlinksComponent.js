import React from 'react';
import { NavLink } from 'react-router-dom';

const activePageLink = {
  backgroundColor: 'white',
  color: '#0f6e75',
  fontWeight: 'bold',
  underline: 'none',
  // width: '100%',
}

const NavlinksComponent = () => <nav className='navlink-wrapper'>
  <NavLink to='/' exact
    className='navlink'
    activeStyle={activePageLink}>
    Home
  </NavLink>
  <NavLink to='/projects' exact
    className='navlink'
    activeStyle={activePageLink}>
    Projects
  </NavLink>
  <NavLink to='/about' exact
    className='navlink'
    activeStyle={activePageLink}>
    About
  </NavLink>
  <NavLink to='/contact' exact
    className='navlink'
    activeStyle={activePageLink}>
    Contact
  </NavLink>
</nav>

export default NavlinksComponent;