import React from 'react';
import ProjectCard from '../components/ProjectCard.js';

import projectData from '../projectData.json';
import coupReactDemoGif from '../assets/projects/coup-react-demo.gif';
import leagueTrackerDemoGif from '../assets/projects/league-tracker-demo.gif';
import flightGuruDemoGif from '../assets/projects/flight-guru-demo.gif';

const demoGifs = {
  coupReact: coupReactDemoGif,
  leagueTracker: leagueTrackerDemoGif,
  flightGuru: flightGuruDemoGif
}

const Projects = () => <div className='App-main projects'>
  <h1 className='App-main-title'>Projects</h1>
    {projectData.projects.map(p => <ProjectCard
      project={p}
      demoGif={demoGifs[p.nameCamelCase]} />)}
</div>

export default Projects;