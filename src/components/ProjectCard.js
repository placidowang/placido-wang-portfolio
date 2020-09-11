import React from 'react';

const ProjectCard = (props) => <div className='project-card'>
  <div className='project-thumb'>
    <a href={props.project.youtubeUrl}>
      <img alt={`${props.project.name} demo gif`} src={props.demoGif}/>
    </a>
  </div>

  <div className='project-description'>
    <h2>{props.project.name}</h2>
    <p>{props.project.description}</p>
    <p>{props.project.builtWith}</p>
    <div className='project-links'><a href={props.project.githubUrl}><p>Github</p></a><a href={props.project.youtubeUrl}><p>Video Demo</p></a></div>
  </div>

</div>

export default ProjectCard;