import React from 'react';
import IndexView from '../views/IndexView'
import { withRouter } from 'react-router-dom'

class IndexController extends React.Component {
  render() {
    return (
      <IndexView>
        <brand-nav-link href="/" />
        <home-nav-link href="/" />
        <about-nav-link href="/about" />
        <contact-nav-link href="/contact" />
      </IndexView>
    )
  }
}

export default withRouter(IndexController);
