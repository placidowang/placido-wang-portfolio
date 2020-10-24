import React, { useState, useEffect } from 'react';
import './Home.css';
import coupDemoGif from '../assets/projects/coup-react-demo.gif';
import leagueDemoGif from '../assets/projects/league-tracker-demo.gif';
import flightDemoGif from '../assets/projects/flight-guru-demo.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [slideshowIndex, setSlideshowIndex] = useState(0);

  useEffect(() => {
    // console.log('showing slide: ' + slideshowIndex)
    const slides = document.querySelectorAll('.slide');

    const interval = setInterval(() => {
      setSlideshowIndex(((slideshowIndex + 1) % slides.length));
    }, 5000)
    
    for (let j = 0; j < slides.length; j++) {
      if (j === slideshowIndex) {
        slides[j].className += " active";
      } else {
        slides[j].className = "slide";
      }
    }

    // otherwise component will set interval for every update
    return () => clearInterval(interval);
  })

  
  return (
    <div className='home-wrapper'>
      <header className='home-header'>
        <div className='home-header-text'>
          {/* <h1>Coming soon!</h1> */}
          <h1 className='my-name'>Placido Wang</h1>
          {/* <p>Junior Software Engineer</p> */}
          <p className='scroll-indicator' >v</p>
        </div>
      </header>
      <main className='App-main home'>
        {/* <div className='quote'>
          <h4>"Without requirements or design, programming is the art of adding bugs to an empty text file."</h4>
          <h5>-Louis Srygley</h5>
        </div><br/> */}
        <div className='placeholder-text'>
          <p>Hi! Thanks for checking out my website. I'm interested in how we can work together. Stick around for a bit, look at my work, send me a message!</p>
        </div>
        <br/>
        <a href='projects' className='project-slideshow-link'>
          <div className='project-slideshow'>
            <h3 className='slideshow-title'>Check out my projects!</h3>

            <div className='slide active'>
              <img className='demo' alt='coup thumb' src={coupDemoGif} />
            </div>

            <div className='slide'>
              <img className='demo' alt='coup thumb' src={leagueDemoGif} />
            </div>

            <div className='slide'>
              <img className='demo' alt='coup thumb' src={flightDemoGif} />
            </div>
          </div>
        </a>
        <br/>
        <a className='contact-me' href='contact'><FontAwesomeIcon icon={faEnvelopeSquare} size='2x'/><h3>Contact me!</h3></a>
        
        <p className='footer'>
        Placido Wang - 2020
        </p><br/>

      </main>
    </div>
  );
}

export default Home;