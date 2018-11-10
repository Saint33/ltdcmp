import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import throttle from 'lodash.throttle'

const Container = styled.div`
  padding: 150px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  margin-right: 50px;
  height: 620px;
  width: auto;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  align-self: flex-start;
  padding: 80px 0;
  transition: 0.4s;
  transition-timing-function: ease-in-out;
`

const Title = styled.h4`
  color: white;
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  margin-bottom: 40px;
`

const Description = styled.p`
  color: white;
  font-size: 24px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin-top: 0;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
`

class Project extends Component {
  project = createRef();
  info = createRef();
  throttledScrollHandler = throttle(this.handleScroll, 100).bind(this);

  componentDidMount() {
    this.handleScroll();
    document.addEventListener('scroll', this.throttledScrollHandler, false)
  }



  componentWillUnmount() {
    document.removeEventListener('scroll', this.throttledScrollHandler, false);
  }

  handleScroll() {
    const project = this.project.current;
    const projectInfo = this.info.current;
    const projectOffsetTop = project.getBoundingClientRect().top;
    const projects = this.props.projects.current;
    window.requestAnimationFrame(() => {
      if (projectOffsetTop < 150) {
        projectInfo.style.opacity = 1;
        projectInfo.style.transform = 'translate3d(0,0,0)';
        if(!(project.getBoundingClientRect().bottom < 150)){
          projects.style.backgroundColor = this.props.color;
        }

      } else {
        projectInfo.style.opacity = 0;
        projectInfo.style.transform = 'translate3d(0,200px,0)';
      }
    })
  }

  render(){
    const { image, title, description } = this.props;
    return (
      <Container ref={this.project}>

        <Image src={image} />
        <Info ref={this.info}>
        <Title>
         {title}
        </Title>
        <Description>
          {description}
        </Description>
        <Description>
        {description}
        </Description>
      </Info>
      </Container>
    )
  }
}

export default Project;