import styled from 'styled-components';

const Label = styled.label`
  position: absolute;
  z-index: 2;
  left: 15px;
  top: 13px;
  font-size: 16px;
  color: #23252c;
  transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
`

const Input = styled.input`
  height: 100%;
  border: none;
  border-bottom: 1px solid #4F545C;
  width: 100%;
  font-size: 16px;
  padding: 10px 15px;
  position: relative;
  z-index: 1;
  background: transparent;
  &~svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    & rect {
      transition: 0.5s ease;
      height: 100%;
      width:100%;
      fill: transparent;
      stroke-dasharray: 0 500;
      stroke-dashoffset: -480;
      stroke-width: 4px;
      stroke: ${props => props.valid ? 'green': '#FFD700'};
    }
  }
  &:focus {
    outline: none;
    border-bottom-color: transparent; 

    &~label {
      opacity: 0;
    }

    &~svg {
        & rect {
        stroke-dasharray: 760;
        stroke-dashoffset: 0;
        stroke-width: 2px;
      }
    }
  }
`

const Wrapper = styled.div`
  width: 50%;
  position: relative;
  height: 50px;
  &:first-child {
    margin-right: 20px;
  }
}
`

const InputWrapper = ({ handler, value, label, type, valid }) => (
  <Wrapper>
    <Input
      valid={valid}
      id={label}
      type={type}
      onChange={handler} 
      value={value}/>
    {value.length === 0 &&     
      <Label htmlFor={label}>
        {label}
      </Label>}
    <svg xmlns="http://www.w3.org/2000/svg">
      <rect />
    </svg>
  </Wrapper>
)

export default InputWrapper;