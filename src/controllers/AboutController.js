import React from 'react'
import AboutView from '../views/AboutView'
import { Helmet } from 'react-helmet'

export default (props) => (
  <div>
    <Helmet>
      <title>About | Jeffrey Yu</title>
    </Helmet>
    <AboutView>
      <brand-nav-link href="/" />
      <home-nav-link href="/" />
      <about-nav-link href="/about" />
      <contact-nav-link href="/contact" />
      <get-in-touch-nav-link href="/contact" />
    </AboutView>
  </div>
)
