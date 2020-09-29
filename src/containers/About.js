import React from 'react';
import './About.css';

const About = () => <div className="App-main about">
  <h1 className='App-main-title'>About</h1>
  <div className='about-hero'>
    <h1>Hi</h1>
    <h2>I'm Placido Wang</h2>
    <h3>And I'm an engineer.</h3>
  </div>
  <p>My dad told me when I was four years old, I touched a computer mouse for the first time and started drawing in MS Paint.</p>
  <p>He saw how quickly I started using something I'd never used before, and I was using it to express myself through a technological tool.</p>
  <p>He saw how quickly I understood how to use this technological tool for my own expression.</p>
  <p>He saw curiosity, creativity, and intuition.</p>
  <p>From this point, he knew I would become an engineer.</p>
  <br/>
  <p>I later learned how to build my own computers to fuel my video game <span style={{textDecoration: 'line-through'}}>obsession</span> hobby.</p>
</div>

export default About;