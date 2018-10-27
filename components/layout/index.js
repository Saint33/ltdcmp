import styled from 'styled-components'

import Header from '../header'

const LayoutContainer = styled.div`
  background-color: white;
  min-height: 100vh;
`

const Layout = ({ children }) => (
  <LayoutContainer>
    <style global jsx>
      {`
        * {
          box-sizing: border-box;
        }
      `}
    </style>
    <Header />
    {children}
  </LayoutContainer>
)

export default Layout