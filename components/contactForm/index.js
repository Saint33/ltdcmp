import React from 'react'
import styled from 'styled-components'

const FormWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FormTitle = styled.h1`
  font-size: 30px;
`

const Form = styled.form`
  width: 600px;
  display: flex;
  flex-wrap: wrap;
`

const FormRow = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  margin-bottom: 20px;
  &:first-child {
    padding-top: 50px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`

const Label = styled.label`
  position: absolute;
  left: 0;
  top: 5px;
  font-size: 16px;
  color: #23252c;
  transition: all 500ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
`

const Input = styled.input`
  height: 38px;
  border: none;
  border-bottom: 1px solid grey;
  width: 100%;
  font-size: 16px;
  padding: 10px 0;
  &:focus {
    outline: none;
    &+label {
      transform: translate(0, -30px);
    }
  }
`

const InputWrapper = styled.div`
  width: 50%;
  position: relative;
  &:first-child {
    padding-right: 20px;
  }
`

const FormTextArea = styled.textarea`
  padding-top: 20px;
  width: 100%;
  resize: none;
  border: none;
  border-bottom: 1px solid grey;
  display: block;
  line-height: 1.2;
  overflow:hidden;
  font-size: 16px;
  &:focus {
    outline: none;
  }
`

class ContactForm extends React.Component {

  state = {

  }

  textarea = React.createRef();

  componentDidMount (){
    console.log(this.textarea);
    this.textarea.current.addEventListener('keydown', this.autosize)
  }

  componentWillUnmount() {
    this.textarea.current.removeEventListener('keydown', this.autosize)
  }
  
  autosize = () => {
    const textarea = this.textarea.current;
    textarea.style.cssText = 'height:auto; padding:0';
    textarea.style.cssText = 'height:' + textarea.scrollHeight + 'px';
  }

  render() {
    return (
      <FormWrapper>
        <FormTitle>
          Got a project idea?
        </FormTitle>
        <Form>
          <FormRow>
            <InputWrapper>
              <Input
                type="text"
                id="name" />
              <Label htmlFor="name">
                Your name
              </Label>
            </InputWrapper>
            <InputWrapper>
              <Input
                type="text"
                id="name" />
              <Label htmlFor="name">
                Your name
              </Label>
            </InputWrapper>
          </FormRow>
          <FormRow>
            <Label>
              Message or question
            </Label>
            <FormTextArea ref={this.textarea}/>
          </FormRow>
        </Form>
      </FormWrapper>
    )
  }
}

export default ContactForm;