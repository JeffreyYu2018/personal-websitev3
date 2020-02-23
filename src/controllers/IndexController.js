import React from 'react';
import IndexView from '../views/IndexView'

export default (props) => (
  <IndexView>
    <home-nav-link />
    <about-nav-link />
    <blog-nav-link
      href="/blog/blog.html"
    />
    <contact-nav-link />
  </IndexView>
)
