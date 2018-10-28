import React from 'react'
import styled from 'styled-components'

import Layout from '../../components/layout'
import Top from './top'
import Projects from './projects';

const FakeBlock = styled.div`
  height: 100vh;
  padding-top: 60px;
`


class Home extends React.Component {

  render(){
    return (
      <Layout>
        <Top />
        <FakeBlock />
        <Projects />

      </Layout>
    )
  }
}

export default Home;