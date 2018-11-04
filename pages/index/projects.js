import React from 'react'
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
  opacity: ${({ active }) => active ? 1 : 0};
  transform: ${({ active }) => active ? 'translate3d(0, 0, 0)' : 'translate3d(0, 200px, 0)'};
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
  projects = React.createRef();
  project1 = React.createRef();
  project2 = React.createRef();

  componentDidMount() {
    document.addEventListener('scroll', throttle(this.handleScroll, 200));
    this.handleScroll();
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', throttle(this.handleScroll, 200));
  }

  handleScroll = event => {
  
    const windowHeight = window.innerHeight;
    const project1 = this.project1.current;
    const project2 = this.project2.current;
    const project1OffsetTop = project1.getBoundingClientRect().top;
    const project2OffsetTop = project2.getBoundingClientRect().top;

    if(project1OffsetTop < 150){
      this.setState({ project1IsActive: true })
    } else {
      this.setState({ project1IsActive: false })
    }
    if (project2OffsetTop < 150) {
      this.setState({ project2IsActive: true })
      this.projects.current.style.backgroundColor = '#374140';
    } else {
      this.setState({ project2IsActive: false })
      this.projects.current.style.backgroundColor = '#2A2C2B';
    }
  }

  render() {
    return (
      <ProjectsWrapper ref={this.projects}>

        <Project ref={this.project1}>
          <ProjectImage src='/static/mobile.png' />
          <ProjectInfo active={this.state.project1IsActive}>
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
            <ProjectInfo
              active={this.state.project2IsActive}>
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