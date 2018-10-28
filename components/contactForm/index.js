import React from 'react'
import styled from 'styled-components'

import Input from './input'
import Button from '../../shared/button'

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
  justify-content: center;
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
    name: '',
    email: ''
  }

  textarea = React.createRef();

  handleNameChange = e => {
    this.setState({ name: e.target.value })
  }

  handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }

  autosize = () => {
    const textarea = this.textarea.current;
    textarea.style.cssText = 'height:auto; padding:0';
    textarea.style.cssText = 'height:' + (textarea.scrollHeight + 20) + 'px';
  }

  submitForm = e => {
    e.preventDefault();
  }

  render() {
    let { name, email } = this.state;
    return (
      <FormWrapper>
        <FormTitle>
          Got a project idea?
        </FormTitle>
        <Form>
          <FormRow>
            <Input
              type="text"
              label="Name" 
              handler={this.handleNameChange}
              valid={name.length > 1} 
              value={name} />
            <Input
              type="email"
              label="Email" 
              handler={this.handleEmailChange}
              valid={email.length > 5} 
              value={email}/>
          </FormRow>
          <FormRow>
            <Input
              type="tel"
              label="Phone number (optional)" 
              handler={this.handleNameChange}
              valid={this.state.name.length > 1} 
              value={this.state.name} />
            <Input
              type="tel"
              label="Budget (optional)" 
              handler={this.handleEmailChange}
              valid={this.state.email.length > 5} 
              value={this.state.email}/>
          </FormRow>
          <FormRow>
            <FormTextArea 
              ref={this.textarea} 
              onKeyDown={this.autosize}/>
          </FormRow>
          <Button handler={this.submitForm}>
            Send
          </Button>
        </Form>
      </FormWrapper>
    )
  }
}

export default ContactForm;