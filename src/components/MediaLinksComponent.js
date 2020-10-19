import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithubSquare, faMedium } from '@fortawesome/free-brands-svg-icons'
import { 
  // faEnvelopeOpenText,
  // eslint-disable-next-line
  faEnvelopeSquare
} from '@fortawesome/free-solid-svg-icons'

const MediaLinksComponent = () => <nav className='media-icons'>
  {/* <a href='mailto:somebody'semail@email.com'>
    <FontAwesomeIcon icon={faEnvelopeSquare} size='2x' href='google.com'/>
  </a> */}
  <a href='https://medium.com/@placidowang' target="_blank">
    <FontAwesomeIcon icon={faMedium} size='2x'/>
  </a>
  <a href='https://linkedin.com/in/placidowang' target="_blank">
    <FontAwesomeIcon icon={faLinkedin} size='2x'/>
  </a>
  <a href='https://github.com/placidowang' target="_blank">
    <FontAwesomeIcon icon={faGithubSquare} size='2x'/>
  </a>
</nav>

export default MediaLinksComponent;