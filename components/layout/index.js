import styled from 'styled-components'

import Header from '../header'

const LayoutContainer = styled.div`
  background-color: #282a36;
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    {children}
  </LayoutContainer>
)

export default Layout