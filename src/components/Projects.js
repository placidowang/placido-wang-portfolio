import React from 'react';
import coupReactDemoGif from '../assets/projects/coup-react-demo.gif';
import leagueTrackerDemoGif from '../assets/projects/league-tracker-demo.gif';
import flightGuruDemoGif from '../assets/projects/flight-guru-demo.gif';

const Projects = () => <div className='App-main projects'>
  <h1 className='App-main-title'>Projects</h1>
    <div className='project-card project-1' >
      <a href='https://www.youtube.com/watch?v=nPe_mdcDcUk'>
        <div className='project-thumb'>
          <img alt='coup react demo gif' src={coupReactDemoGif}/>
        </div>
      </a>
      <div className='project-description'>
        <h2>Coup React</h2>
        <p>Online version of the popular board game Coup. Play with your friends!</p>
        <p>Built with JavaScript/React and PubNub</p>
        <div className='project-github-link'><a href='https://github.com/placidowang/coup-react'><p>Github</p></a></div>
      </div>
    </div>
    <div className='project-card project-2' >
      <a href='https://www.youtube.com/watch?v=cqkF8jGe7jo'>
        <div className='project-thumb'>
          <img alt='league tracker demo gif' src={leagueTrackerDemoGif}/>
        </div>
      </a>
      <div className='project-description'>
        <h2>League Tracker</h2>
        <p>Database for the game League of Legends. Look up stats for your favorite Champions or search for your summoner profile.</p>
        <p>Built with JavaScript/React and Ruby on Rails</p>
        <div className='project-github-link'><a href='https://github.com/placidowang/league_tracker'><p>Github</p></a></div>
      </div>
    </div>
    <div className='project-card project-3' >
      <a href='https://www.youtube.com/watch?v=RzDnEccT6vk'>
        <div className='project-thumb'>
          <img alt='flight guru demo gif' src={flightGuruDemoGif}/>
        </div>
      </a>
      <div className='project-description'>
        <h2>Flight Guru</h2>
        <p>Flight tracker that searches for airport restaurants based on your flight number.</p>
        <p>Built with HTML/CSS and Ruby on Rails</p>
        <div className='project-github-link'><a href='https://github.com/timothyalton/flight-guru-app'><p>Github</p></a></div>
      </div>
    </div>
</div>

export default Projects;