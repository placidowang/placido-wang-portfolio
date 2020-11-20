import React from 'react';
import './About.css';
import portrait from '../assets/me/my_portrait.png';
import resume from '../assets/me/resume.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'


const About = () => <div className="App-main about">
  {/* <h1 className='App-main-title'>About</h1> */}

  <div className='about-hero' >
    <img className='about-portrait' src={portrait} alt='portrait'/>
    <div className='about-hero-text'>
      <h1>Hi</h1>
      <h2>I'm Placido Wang</h2>
    </div>
    {/* <h3>And I'm an engineer.</h3> */}
  </div>

  <div className='summary'>
    <p>I'm a techie that loves making useful and cool things.</p>
    <p>I build clean, intuitive websites primarily with JavaScript React and Ruby on Rails.</p>
    <p>I'm currently looking for a Front-End Software Engineer role, although I'm also open to Full-Stack and Back-End Development.</p>

    {/* <p>I'm a Full Stack Web Developer experienced in JavaScript/React and Ruby on Rails and a background troubleshooting computer software and hardware issues.</p> */}
    {/* <p>With my creative and analytical skills, I love building elegant, efficient solutions to everyday problems.</p> */}
    {/* <p>I possess strong skills in problem-solving, critical thinking, adaptability, attention to detail, and teamwork that help software companies achieve their technology development goals.</p> */}
  </div>

  <div className='section'>
    <h3>SKILLS</h3>
    <p className='skills'>JavaScript, React.js, Hooks, Redux.js, Node.js, HTML5, Cascading Style Sheets (CSS), jQuery, RESTful Webservices, API, JSON, Ruby on Rails, MVC, ActiveRecord, CRUD, Object Oriented Programming (OOP), SQL database, PostgresSQL, GitHub, Bash/Terminal, CLI, ZSH</p>
  </div>

  <div className='section'>
    <h3>EXPERIENCE</h3>
    <a href='https://www.smithweb.com/' target="_blank" rel="noopener noreferrer"><p className='place link'>Smith & Associates</p></a>
    <p className='place'>Quality Control Specialist</p>
    <p className='date'>07/2014 - 11/2019</p>
  </div>

  <div className='section'>
    <h3>EDUCATION</h3>
    <a href='https://flatironschool.com/' target="_blank" rel="noopener noreferrer"><p className='place link'>The Flatiron School</p></a>
    <p className='place'>Software Engineering Full Immersive Program</p>
    <p className='date'>01/2020 - 05/2020</p>
    <br/>
    <a href='https://www.utdallas.edu/' target="_blank" rel="noopener noreferrer"><p className='place link'>The University of Texas at Dallas</p></a>
    <p className='place'>Completed coursework toward a B.S. in Computer Engineering</p>
    <p className='date'>08/2009 - 12/2011</p>
  </div>

  <div className='section' />

  <a className='resume-download-link link' href={resume} download='Placido_Wang_Software_Engineer_Resume.pdf'><FontAwesomeIcon icon={faFileAlt} size='2x' /><span> </span><p>Download my resume!</p></a>
</div>

export default About;