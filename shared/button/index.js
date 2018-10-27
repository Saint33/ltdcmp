import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  height: 40px;
  background: transparent;
  color: black;
  border-radius: 15px;
  transition: 0.2s;
  border: 1px solid;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    border: 1px solid #FFD700;
    background: #FFD700;
  }
  &:active {
    outline: none;
  }
  &:focus {
    outline: none;
  }
`;

export default ({children, handler}) => (
  <Button onClick={handler}>
    {children}
  </Button>
)
