import React from 'react';
import { NavLink } from 'react-router-dom';

const activePageLink = {
  backgroundColor: 'white',
  color: 'purple',
  // fontWeight: 'bold',
  underline: 'none'
}

const Navbar = () => <div className='navbar'>
  <div className='navbar-name'>
    <h1>Placido Wang</h1>
  </div>
  <div className='navlink-wrapper'>
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
  </div>
</div>

export default Navbar;