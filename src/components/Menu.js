import React from 'react';
import NavlinksComponent from './NavlinksComponent.js';
import MediaLinksComponent from './MediaLinksComponent.js';
import './Menu.css';

// let vh = window.innerHeight * 0.01;

// document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
  // console.log(window.innerHeight);
  // const menu = document.querySelector('#menu');
  // console.log(menu);
  // menu.style.height = `${window.innerHeight}px`;
  // let vh = window.innerHeight * 0.01;

  // document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

// window.onresize(console.log(window.height));

const Menu = ({ open, setOpen }) => <nav id='menu' className='menu'>
  <div className={open ? 'navlinks-container menu-open' : 'navlinks-container'}>
    <NavlinksComponent open={open} setOpen={setOpen}/>
  </div>
  <div className={open ? 'media-links-component-container menu-open' : 'media-links-component-container'}>
    <MediaLinksComponent />
  </div>
</nav>

export default Menu;