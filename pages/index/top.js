import styled from 'styled-components';

const TopContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  z-index: 1;
`

const Slogan = styled.div`
    height: 100vh;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Title = styled.div`
  font-size: 70px;
  font-family: 'Bangers', cursive;
  color: #4c4cda;
  text-transform: uppercase;
`

export default function Top(){
  return (
    <TopContainer>
      <Slogan>
        <Title>
          Company
        </Title>
      </Slogan>
    </TopContainer>
  )
}