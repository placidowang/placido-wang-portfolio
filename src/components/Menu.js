import React from 'react';
import NavlinksComponent from './NavlinksComponent.js';
import MediaLinksComponent from './MediaLinksComponent.js';
import './Menu.css';

const Menu = ({ open }) => <nav className={open ? 'menu open' : 'menu'}>
  {/* <a href="/">
    <span role="img" aria-label="Projects">&#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;</span>
    About us
  </a>
  <a href="/">
    <span role="img" aria-label="about">&#x1f4b8;</span>
    Pricing
    </a>
  <a href="/">
    <span role="img" aria-label="contact">&#x1f4e9;</span>
    Contact
  </a> */}
  <NavlinksComponent />
  <MediaLinksComponent />
</nav>

export default Menu;