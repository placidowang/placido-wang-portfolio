import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons'

const Name = () => 
  <a href='/'>
    <div className='navbar-name'>
      <FontAwesomeIcon icon={faPlusCircle} size='lg' />
      <h1>Placido Wang</h1>
      {/* <p>Software Engineer</p> */}
    </div>
  </a>

export default Name;