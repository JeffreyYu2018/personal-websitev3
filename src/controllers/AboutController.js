import React from 'react'
import AboutView from '../views/AboutView'

export default (props) => (
  <AboutView>
    <brand-nav-link href="/" />
    <home-nav-link href="/" />
    <about-nav-link href="/about" />
    <contact-nav-link href="/contact" />
    <get-in-touch-nav-link href="/contact" />
  </AboutView>
)
