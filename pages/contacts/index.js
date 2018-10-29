import styled from 'styled-components'

import Layout from '../../components/layout'
import ContactForm from '../../components/contactForm'

const ContactsContainer = styled.div`
  padding-top: 60px;
`
const ContactsTitle = styled.h1`
  font-size: 24px;
  text-align: center;
`

const Contacts = () => (
  <Layout>
    <ContactsContainer>
      <ContactsTitle>Contacts</ContactsTitle>

      <ContactForm />
    </ContactsContainer>
  </Layout>
)

export default Contacts;