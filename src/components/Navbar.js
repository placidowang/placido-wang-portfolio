import React from 'react';
import { NavLink } from 'react-router-dom';

const activePageLink = {
  backgroundColor: 'white',
  color: 'purple',
  fontWeight: 'bold',
  underline: 'none'
}

const Navbar = () => <div>
  <div>
    <h1>Navbar</h1>
  </div>
  <div>
    <NavLink to='/' exact
      activeStyle={activePageLink}>
      Home
    </NavLink>
    <NavLink to='/projects' exact
      activeStyle={activePageLink}>
      Projects
    </NavLink>
    <NavLink to='/about' exact
      activeStyle={activePageLink}>
      About
    </NavLink>
  </div>
</div>

export default Navbar;