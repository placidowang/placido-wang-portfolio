import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons';
import portrait from '../assets/me/my_portrait.png';

const Name = () => 
  <a href='/'>
    <div className='navbar-name'>
      {/* <FontAwesomeIcon icon={faPlusCircle} size='lg' /> */}
      <img className='navbar-portrait' src={portrait} />
      <h1>Placido Wang</h1>
      {/* <p>Software Engineer</p> */}
    </div>
  </a>

export default Name;