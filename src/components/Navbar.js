import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons'
import { 
  // faEnvelopeOpenText,
  faEnvelopeSquare
} from '@fortawesome/free-solid-svg-icons'

const activePageLink = {
  backgroundColor: 'white',
  color: '#0f6e75',
  fontWeight: 'bold',
  underline: 'none',
  // width: '100%',
}

const Navbar = () => <div className='navbar'>
  <div className='navbar-left'>
    <a href='/'>
      <div className='navbar-name'>
          <h1>Placido Wang</h1>
          {/* <p>Junior Software Engineer</p> */}
      </div>
    </a>
  </div>
  {/* <div style={{width: '280px'}}></div> */}
  <div className='navbar-right'>
  <div className='navlink-wrapper'>
    <NavLink to='/' exact
      className='navlink'
      activeStyle={activePageLink}>
      Home
    </NavLink>
    <NavLink to='/projects' exact
      className='navlink'
      activeStyle={activePageLink}>
      Projects
    </NavLink>
    <NavLink to='/about' exact
      className='navlink'
      activeStyle={activePageLink}>
      About
    </NavLink>
    <NavLink to='/contact' exact
      className='navlink'
      activeStyle={activePageLink}>
      Contact
    </NavLink>
  </div>
  <div className='media-icons'>
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
  </div>
  </div>
</div>

export default Navbar;