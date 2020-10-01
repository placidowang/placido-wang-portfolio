import React from 'react';
import './Home.css';
import coupDemoGif from '../assets/projects/coup-react-demo.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const Home = () => <main className='App-main home'>
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
  <a href='projects'><h3>Check out my projects!</h3></a>
  <div className='project-slideshow'>
    <a href='projects'>
      <img className='demo' alt='coup thumb' src={coupDemoGif} />
    </a>
  </div>
  <br/>
  <a className='contact-me' href='contact'><FontAwesomeIcon icon={faEnvelopeSquare} size='2x'/><h3>Contact me!</h3></a>
  

<p>
Aenean eget tortor vitae nisi ultricies ultricies. Suspendisse laoreet fermentum mauris, at venenatis purus sodales quis. Nullam iaculis vitae lacus ac ultricies. In aliquam, ante dictum imperdiet porta, magna ipsum auctor massa, in dapibus ipsum purus ac magna. Phasellus elementum suscipit nulla eget efficitur. In hendrerit erat eu lectus facilisis euismod. Maecenas lobortis nunc urna, eget condimentum dui sollicitudin tempor. Sed sed vestibulum justo.
</p><br/>

</main>

export default Home;