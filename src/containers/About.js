import React from 'react';
import './About.css';

const About = () => <div className="App-main about">
  <h1 className='App-main-title'>About</h1>
  <div className='about-hero'>
    <h1>Hi</h1>
    <h2>I'm Placido Wang</h2>
    {/* <h3>And I'm an engineer.</h3> */}
  </div>
  <p>I'm a guy that likes things and I did this in my past and then I decided I wanted a change so I changed and tried a thing and liked it so now I'm here, now I want a job and a career or something.</p>
  {/* <p>My dad told me when I was four years old, I touched a computer mouse for the first time and started drawing in MS Paint.</p>
  <p>He saw how quickly I started using something I'd never used before, and I was using it to express myself through a technological tool.</p>
  <p>He saw how quickly I understood how to use this technological tool for my own expression.</p>
  <p>He saw curiosity, creativity, and intuition.</p>
  <p>From this point, he knew I would become an engineer.</p>
  <br/>
  <p>I later learned how to build my own computers to fuel my video game <span style={{textDecoration: 'line-through'}}>obsession</span> hobby.</p> */}
  <h3 className='section'>SKILLS</h3>
  <p>JavaScript, React.js, Hooks, Redux.js, Node.js, HTML5, Cascading Style Sheets (CSS), jQuery, RESTful Webservices, API, JSON, Ruby on Rails, MVC, ActiveRecord, CRUD, Object Oriented Programming (OOP), SQL database, PostgresSQL, GitHub, Bash/Terminal, CLI</p>

  <h3 className='section'>EXPERIENCE</h3>
  <p>Smith n Associates, 07/2014 - 11/2019</p>

  <h3 className='section'>EDUCATION</h3>
  <p>the flattest of irons</p>
  <p>UTD</p>

  <h3 className='section'></h3>

  <a><p>Click here for my resume!</p></a>
</div>

export default About;