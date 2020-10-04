import React from 'react';
import './Home.css';
import coupDemoGif from '../assets/projects/coup-react-demo.gif';
import leagueDemoGif from '../assets/projects/league-tracker-demo.gif';
import flightDemoGif from '../assets/projects/flight-guru-demo.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

let i = 0;

setInterval(() => {
  const slides = document.querySelectorAll('.slide');
  i = (i + 1) % 3;

  for (let j = 0; j < slides.length; j++) {
    if (j === i) {
      slides[j].className += " active";
    } else {
      slides[j].className = "slide";
    }
  }
}, 5000)

const Home = () => {

  return (
    <main className='App-main home'>
      {/* <h1>Home</h1> */}
      <header className='home-header'>
        <div className='home-header-text'>
          {/* <h1>Coming soon!</h1> */}
          <h1 className='my-name'>Placido Wang</h1>
          {/* <p>Junior Software Engineer</p> */}
        </div>
      </header>
      <div className='quote'>
        <h4>"Without requirements or design, programming is the art of adding bugs to an empty text file."</h4>
        <h5>-Louis Srygley</h5>
      </div><br/>
      <div className='placeholder-text'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate lobortis felis, at tincidunt augue mollis vitae. Pellentesque lorem leo, tincidunt vitae auctor id, pretium dignissim erat. Nulla facilisi. Duis ac leo leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi vitae lacinia tellus. Nam pretium nunc orci, ac varius tortor bibendum vitae. Fusce in auctor est. Curabitur ornare iaculis orci, id consequat est suscipit id. Vivamus a odio sodales, ultricies urna ac, dapibus leo. Nam eget congue augue. Ut pretium urna eget augue suscipit volutpat. Sed non dolor velit. Morbi in dictum sapien.</p>
      </div>
      <br/>
      <a href='projects'>
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
  );
}

export default Home;