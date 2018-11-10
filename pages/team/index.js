import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout'

const TeamContainer = styled.div`

`

const Title = styled.h1`
  font-size: 30px;
`

class Team extends React.Component {
  canvas = React.createRef();

  componentDidMount() {
    const canvas = this.canvas;
    const context = canvas.current.getContext('2d');

    // context.font = '40pt Calibri';
    // context.fillStyle = 'red';
    // context.fillText('Hellow world', 150, 100);

    // context.beginPath();
    // context.moveTo(100, 150);
    // context.lineTo(450, 50);
    // context.lineWidth = 15;
    // context.strokeStyle = '#ff0000';
    // context.lineCap = 'square';
    // context.stroke();

    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = 85;
    var start_angle = 1.1 * Math.PI;
    var end_angle = 1.9 * Math.PI;
    var counterClockwise = false;

    context.beginPath();
    context.arc(x, y, radius, start_angle, end_angle, counterClockwise);
    context.lineWidth = 15;
    context.strokeStyle = 'black';
    context.stroke();

  }

  render() {
    return (
      <Layout>
        <canvas ref={this.canvas} width={600} height={300}>

        </canvas>
        <TeamContainer>
          <Title>
            Team
          </Title>
        </TeamContainer>
      </Layout>
    )
  }
}

export default Team;