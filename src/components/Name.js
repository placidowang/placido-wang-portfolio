import React from 'react';
import portrait from '../assets/me/my_portrait.png';

const Name = () => 
  <a href='/'>
    <div className='navbar-name'>
      <img className='navbar-portrait' src={portrait} alt='navbar portrait'/>
      <h1>Placido Wang</h1>
      {/* <p>Software Engineer</p> */}
    </div>
  </a>

export default Name;