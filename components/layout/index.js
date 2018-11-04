import React, { Component } from 'react'
import styled from 'styled-components'
import { inject, observer } from 'mobx-react'

import Header from '../header'
import Modal from '../modal'

const LayoutContainer = styled.div`
  background-color: white;
  min-height: 100vh;
`
@inject('store') @observer
export default class Layout extends Component {
  render(){
    const { children } = this.props;
    return (
      <LayoutContainer id="layout">
        <style global jsx>
          {`
            * {
              box-sizing: border-box;
            }
          `}
        </style>
        <Modal />
        <Header />
        {children}
      </LayoutContainer>
    )
  }
} 