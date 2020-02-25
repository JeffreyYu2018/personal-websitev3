import React from 'react'
import NavbarView from '../views/NavbarView'

export default (props) => (
  <NavbarView>
    <brand-nav-link href="/" />
    <home-nav-link href="/" />
    <about-nav-link href="/about" />
    <contact-nav-link href="/contact" />
  </NavbarView>
)
