import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { 
  // faEnvelopeOpenText,
  faEnvelopeSquare
} from '@fortawesome/free-solid-svg-icons'

const MediaLinksComponent = () => <nav className='media-icons'>
  <a href='contact'>
    <FontAwesomeIcon icon={faEnvelopeSquare} size='2x' href='google.com'/>
  </a>
  <a href='https://medium.com/@placidowang'>
    <FontAwesomeIcon icon={faMedium} size='2x'/>
  </a>
  <a href='https://linkedin.com/in/placidowang'>
    <FontAwesomeIcon icon={faLinkedin} size='2x'/>
  </a>
  <a href='https://github.com/placidowang'>
    <FontAwesomeIcon icon={faGithub} size='2x'/>
  </a>
</nav>

export default MediaLinksComponent;