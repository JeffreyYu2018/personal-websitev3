import React from 'react'
import ContactView from '../views/ContactView'

export default (props) => (
  <ContactView>
    <brand-nav-link href="/" />
    <home-nav-link href="/" />
    <about-nav-link href="/about" />
    <contact-nav-link href="/contact" />
  </ContactView>
)
