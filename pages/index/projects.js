import React, { createRef } from 'react'
import styled, { keyframes } from 'styled-components'
import throttle from 'lodash.throttle'

import projects from './projects.json';
import Project from './project.js';

const fadein = keyframes`
  from {opacity: 0; transform: scale(.7,.7)}
  to {opacity: 1;}
`

const ProjectsWrapper = styled.div`
  background-color: #374140;
  position: relative;
  z-index: 3;
  transition: 0.2s;
`

export default class Projects extends React.Component {

  projects = createRef();
  project1 = createRef();
  project2 = createRef();
  projectInfo1 = createRef();
  projectInfo2 = createRef();
  throttledScrollHandler = throttle(this.handleScroll, 100).bind(this);


  componentDidMount() {
    document.addEventListener('scroll', this.throttledScrollHandler, false)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.throttledScrollHandler, false);
  }

  handleScroll() {
    // const projects = this.projects.current;
    // const project1 = this.project1.current;
    // const project2 = this.project2.current;
    // const projectInfo1 = this.projectInfo1.current;
    // const projectInfo2 = this.projectInfo2.current;
    // const project1OffsetTop = project1.getBoundingClientRect().top;
    // const project2OffsetTop = project2.getBoundingClientRect().top;
    // window.requestAnimationFrame(() => {
    //   if (project1OffsetTop < 150) {
    //     projectInfo1.style.opacity = 1;
    //     projectInfo1.style.transform = 'translate3d(0,0,0)';
    //     projects.style.backgroundColor = '#374140';
    //   } else {

    //     projects.style.backgroundColor = '#2A2C2B';
    //   }
    //   if (project2OffsetTop < 150) {
    //     projectInfo2.style.opacity = 1;
    //     projectInfo2.style.transform = 'translate3d(0,0,0)';
    //   } else {
    //     projectInfo2.style.opacity = 0;
    //     projectInfo2.style.transform = 'translate3d(0,200px,0)';
    //   }
    // })

  }

  render() {
    return (
      <ProjectsWrapper ref={this.projects}>
        {projects.map(project => <Project {...project} projects={this.projects} key={project.title}/> )}
      </ProjectsWrapper>
    )
  }
}