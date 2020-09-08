import React from 'react';
import coupReactDemoGif from '../assets/projects/coup-react-demo.gif';
import leagueTrackerDemoGif from '../assets/projects/league-tracker-demo.gif';
import flightGuruDemoGif from '../assets/projects/flight-guru-demo.gif';

const Projects = () => <div className='App-main projects'>
  <h1 className='App-main-title'>Projects</h1>
    <div className='project-card project-1' >
      <div className='project-thumb'>
        <img src={coupReactDemoGif}/>
      </div>
      <div className='project-description'>
        <h2>Coup React</h2>
        <p>Online version of the popular board game Coup. </p>
        <p>built with JavaScript/React and HTML/CSS</p>
        <button>Github</button>
        <button>Demo</button>
      </div>
    </div>
    <div className='project-card project-2' >
      <div className='project-thumb'>
        <img src={leagueTrackerDemoGif}/>
      </div>
      <div className='project-description'>
        <h2>League Tracker</h2>
        <p>Database for the game League of Legends. Look up stats for your favorite Champions or search for your summoner profile.</p>
        <p>built with whatever</p>
        <button>Github</button>
        <button>Demo</button>
      </div>
    </div>
    <div className='project-card project-3' >
      <div className='project-thumb'>
        <img src={flightGuruDemoGif}/>
      </div>
      <div className='project-description'>
        <h2>Flight Guru</h2>
        <p>Flight tracker</p>
        <p>restaurants too</p>
        <button>Github</button>
        <button>Demo</button>
      </div>
    </div>
</div>

export default Projects;