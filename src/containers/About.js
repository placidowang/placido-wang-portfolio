import React from 'react';
import './About.css';
import portrait from '../assets/me/my_portrait.png';
import resume from '../assets/me/resume.pdf'

const About = () => <div className="App-main about">
  {/* <h1 className='App-main-title'>About</h1> */}

  <div className='about-hero' >
    <img className='about-portrait' src={portrait} />
    <div className='about-hero-text'>
      <h1>Hi.</h1>
      <h2>I'm Placido Wang</h2>
    </div>
    {/* <h3>And I'm an engineer.</h3> */}
  </div>
  <p>I'm a Full Stack Web Developer experienced in JavaScript/React and Ruby on Rails and a background troubleshooting computer software and hardware issues.</p>
  <p>With my creative and analytical skills, I love building elegant, efficient solutions to everyday problems.</p>
  <p>I possess strong skills in problem-solving, critical thinking, adaptability, attention to detail, and teamwork that help software companies achieve their technology development goals.</p>
  {/* <p>My dad told me when I was four years old, I touched a computer mouse for the first time and started drawing in MS Paint.</p>
  <p>He saw how quickly I started using something I'd never used before, and I was using it to express myself through a technological tool.</p>
  <p>He saw how quickly I understood how to use this technological tool for my own expression.</p>
  <p>He saw curiosity, creativity, and intuition.</p>
  <p>From this point, he knew I would become an engineer.</p>
  <br/>
  <p>I later learned how to build my own computers to fuel my video game <span style={{textDecoration: 'line-through'}}>obsession</span> hobby.</p> */}
  <h3 className='section'>SKILLS</h3>
  <p className='skills'>JavaScript, React.js, Hooks, Redux.js, Node.js, HTML5, Cascading Style Sheets (CSS), jQuery, RESTful Webservices, API, JSON, Ruby on Rails, MVC, ActiveRecord, CRUD, Object Oriented Programming (OOP), SQL database, PostgresSQL, GitHub, Bash/Terminal, CLI</p>

  <h3 className='section'>EXPERIENCE</h3>
  <p className='place'>Smith & Associates</p>
  <p className='place'>Quality Control Specialist</p>
  <p className='date'>07/2014 - 11/2019</p>
  

  <h3 className='section'>EDUCATION</h3>
  <p className='place'>The Flatiron School - Software Engineering full immersive</p>
  <p className='date'>01/2020 - 05/2020</p>
  <br/>
  <p className='place'>The University of Texas at Dallas</p>
  <p className='date'>08/2009 - 12/2011</p>

  <h3 className='section'></h3>

  <a className='resume-download-link' href={resume} download='Placido_Wang_Software_Engineer_Resume.pdf'><p>Click here to download my resume!</p></a>
</div>

export default About;