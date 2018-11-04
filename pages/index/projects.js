import React, { createRef } from 'react'
import styled, { keyframes } from 'styled-components'
import throttle from 'lodash.throttle'
import debounce from 'lodash.debounce'

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

const Project = styled.div`
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ProjectImage = styled.img`
  margin-right: 50px;
  height: 620px;
  width: auto;
`

const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  align-self: flex-start;
  padding: 80px 0;
  transition: 0.4s;
  transition-timing-function: ease-in-out;

  /* opacity: ${({ active }) => active ? 1 : 0};
  transform: ${({ active }) => active ? 'translate3d(0, 0, 0)' : 'translate3d(0, 200px, 0)'}; */
`

const ProjectTitle = styled.h4`
  color: white;
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  margin-bottom: 40px;
`

const ProjectDescription = styled.p`
  color: white;
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 0;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`

export default class Projects extends React.Component {
  state = {
    project2IsActive: false,
    project1IsActive: false
  }
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
    const projects = this.projects.current;
    const project1 = this.project1.current;
    const project2 = this.project2.current;
    const projectInfo1 = this.projectInfo1.current;
    const projectInfo2 = this.projectInfo2.current;
    const project1OffsetTop = project1.getBoundingClientRect().top;
    const project2OffsetTop = project2.getBoundingClientRect().top;
    window.requestAnimationFrame(() => {
      if (project1OffsetTop < 150) {
        projectInfo1.style.opacity = 1;
        projectInfo1.style.transform = 'translate3d(0,0,0)';
        projects.style.backgroundColor = '#374140';
      } else {
        projectInfo1.style.opacity = 0;
        projectInfo1.style.transform = 'translate3d(0,200px,0)';
        projects.style.backgroundColor = '#2A2C2B';
      }
      if (project2OffsetTop < 150) {
        projectInfo2.style.opacity = 1;
        projectInfo2.style.transform = 'translate3d(0,0,0)';
      } else {
        projectInfo2.style.opacity = 0;
        projectInfo2.style.transform = 'translate3d(0,200px,0)';
      }
    })

  }

  render() {
    return (
      <ProjectsWrapper ref={this.projects}>
        <Project ref={this.project1}>
          <ProjectImage src='/static/mobile.png' />
          <ProjectInfo ref={this.projectInfo1}>
            <ProjectTitle>
              Project 1
            </ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit odit earum enim molestias dolorum porro facere dolore alias, id modi cumque magnam quaerat perspiciatis, aliquid doloribus? Maiores, doloremque ipsam!
            </ProjectDescription>
            <ProjectDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit odit earum enim molestias dolorum porro facere dolore alias, id modi cumque magnam quaerat perspiciatis, aliquid doloribus? Maiores, doloremque ipsam!
            </ProjectDescription>
          </ProjectInfo>
        </Project>
        <Project ref={this.project2}>
          <ProjectImage src='/static/mobile2.png' />
          <ProjectInfo ref={this.projectInfo2}>
            <ProjectTitle>
              Project 1
            </ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit odit earum enim molestias dolorum porro facere dolore alias, id modi cumque magnam quaerat perspiciatis, aliquid doloribus? Maiores, doloremque ipsam!
            </ProjectDescription>
            <ProjectDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis impedit odit earum enim molestias dolorum porro facere dolore alias, id modi cumque magnam quaerat perspiciatis, aliquid doloribus? Maiores, doloremque ipsam!
            </ProjectDescription>
          </ProjectInfo>
        </Project>
      </ProjectsWrapper>
    )
  }
}