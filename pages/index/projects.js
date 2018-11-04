import React from 'react'
import styled from 'styled-components'

import projects from './projects.json';
import Project from './project.js';

const ProjectsWrapper = styled.div`
  background-color: #374140;
  position: relative;
  z-index: 3;
  transition: 0.2s;
`

const Projects = () => {
  const projectsRef = React.createRef();
  return (
    <ProjectsWrapper ref={projectsRef}>
      {projects.map(project => <Project 
                                  {...project} 
                                  key={project.title} 
                                  projects={projectsRef} />)}
    </ProjectsWrapper>
  )
}

export default Projects;