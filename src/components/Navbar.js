import React from 'react';
import { NavLink } from 'react-router-dom';

const activePageLink = {
  backgroundColor: 'white',
  color: '#5bc0be',
  fontWeight: 'bold',
  underline: 'none',
  // width: '100%',
}

const Navbar = () => <div className='navbar'>
  <div className='navbar-name'>
    <h1>Placido Wang</h1>
    <p>Junior Software Engineer</p>
  </div>
  <div className='navlink-wrapper'>
    <div>
    <NavLink to='/' exact
      className='navlink'
      activeStyle={activePageLink}>
      Home
    </NavLink>
    </div>
    <div>
    <NavLink to='/projects' exact
      className='navlink'
      activeStyle={activePageLink}>
      Projects
    </NavLink>
    </div>
    <div>
    <NavLink to='/about' exact
      className='navlink'
      activeStyle={activePageLink}>
      About
    </NavLink>
    </div>
    <div>
    <NavLink to='/contact' exact
      className='navlink'
      activeStyle={activePageLink}>
      Contact
    </NavLink>
    </div>
  </div>
</div>

export default Navbar;