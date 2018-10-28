import styled from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 60px;
  background-color: transparent;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;
`

const HeaderLogo = styled.div`
  color: #FFD700;
  font-size: 25px;
`

const HeaderLink = styled.span`
  color: #FFD700;
  font-size: 20px;
  transition: 0.2s;
  cursor: pointer;
  margin-right: 40px;
  &:hover {
    color: #CCAC00;
  }
  &:last-child {
    margin-right: 0;
  }
`

const HeaderNavigation = styled.nav`
  display: flex;
`

const Header = () => (
  <HeaderContainer>
    <HeaderLogo>
      LTDCMP
    </HeaderLogo>
    <HeaderNavigation>
      <Link href="/">
        <HeaderLink>
          Home
        </HeaderLink>
      </Link>
      <Link href="/team">
        <HeaderLink>
          Team
        </HeaderLink>
      </Link>
      <Link href="/contacts">
        <HeaderLink>
          Contacts
        </HeaderLink>
      </Link>
    </HeaderNavigation>
  </HeaderContainer>
)

Header.propTypes = {

}

export default Header;