import styled from 'styled-components'
import Link from 'next/link'
import PropTypes from 'prop-types'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 60px;
`

const HeaderLogo = styled.div`
  color: white;
  font-size: 25px;
`

const HeaderLink = styled.span`
  color: white;
  font-size: 20px;
  transition: 0.2s;
  cursor: pointer;
  margin-right: 40px;
  &:hover {
    color: blue;
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