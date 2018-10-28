import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'

const TeamContainer = styled.div`

`

const Title = styled.h1`
  font-size: 30px;
`

class Team extends React.Component {
  render() {
    return (
      <Layout>
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