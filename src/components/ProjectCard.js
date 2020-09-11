import React from 'react';

const ProjectCard = (props) => <div className='project-card'>
  <a href={props.project.youtubeUrl}>
    <div className='project-thumb'>
      <img alt={`${props.project.name} demo gif`} src={props.project.demoGif}/>
    </div>
  </a>

  <div className='project-description'>
    <h2>{props.project.name}</h2>
    <p>Online version of the popular board game Coup. Play with your friends!</p>
    <p>Built with JavaScript/React and PubNub</p>
    <div className='project-github-link'><a href='https://github.com/placidowang/coup-react'><p>Github</p></a></div>
  </div>

</div>

export default ProjectCard;