import React from 'react';
import NavlinksComponent from './NavlinksComponent.js';
import MediaLinksComponent from './MediaLinksComponent.js';
import './Menu.css';

// const heightOutput = document.querySelector('#height');
// const widthOutput = document.querySelector('#width');

// function reportWindowSize() {
//   heightOutput.textContent = window.innerHeight;
//   widthOutput.textContent = window.innerWidth;
// }

window.addEventListener('resize', () => {
  console.log(window.innerHeight);
  const menu = document.querySelector('#menu');
  console.log(menu);
  menu.style.height = `${window.innerHeight}px`;
});

// window.onresize(console.log(window.height));

const Menu = ({ open, setOpen }) => <nav id='menu' className={open ? 'menu menu-open' : 'menu'}>
  <NavlinksComponent open={open} setOpen={setOpen}/>
  <div className='media-links-component-container'>
    <MediaLinksComponent />
  </div>
</nav>

export default Menu;