import React from 'react'
import styled from 'styled-components'

const ProjectsWrapper = styled.div`
  background-color: #374140;
  position: relative;
  z-index: 3;
  transition: 0.2s;
`

const Project1 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Project2 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default class Projects extends React.Component {
  projects = React.createRef();
  project1 = React.createRef();
  project2 = React.createRef();  

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = event => {
    console.log(window.pageYOffset);
    let project1OffsetTop = this.project1.current.getBoundingClientRect().top;
    if(project1OffsetTop < - this.project1.current.offsetHeight / 2){
      this.projects.current.style.backgroundColor = '#374140';
    } else {
      this.projects.current.style.backgroundColor = '#2A2C2B';
    }
  }

  render() {
    return (
      <ProjectsWrapper ref={this.projects}>
        <Project1 ref={this.project1}>
          <span>Project1</span>
        </Project1>
        <Project2 ref={this.project2}>
          <span>Project2</span>
        </Project2>
      </ProjectsWrapper>
    )
  }
}