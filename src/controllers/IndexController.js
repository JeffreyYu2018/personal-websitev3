import React from 'react';
import IndexView from '../views/IndexView'

export default (props) => (
  <IndexView>
    <brand-nav-link href="/" />
    <home-nav-link href="/" />
    <about-nav-link href="/about" />
    <contact-nav-link href="/contact" />
  </IndexView>
)
