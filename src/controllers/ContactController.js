import React from 'react'
import ContactView from '../views/ContactView'
import { Helmet } from 'react-helmet'

export default (props) => (
  <div>
    <Helmet>
      <title>Contact | Jeffrey Yu</title>
    </Helmet>
    <ContactView>
      <brand-nav-link href="/" />
      <home-nav-link href="/" />
      <about-nav-link href="/about" />
      <contact-nav-link href="/contact" />
    </ContactView>
  </div>
)
