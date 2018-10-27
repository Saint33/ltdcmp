import styled from 'styled-components'

import Layout from '../components/layout'
import ContactForm from '../components/contactForm'

const ContactsContainer = styled.div`

`
const Contacts = () => (
  <Layout>
    <ContactsContainer>
      <h1>Contacts</h1>

      <ContactForm />
    </ContactsContainer>
  </Layout>
)

export default Contacts;