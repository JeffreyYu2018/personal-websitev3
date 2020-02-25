import React from 'react';
import IndexView from '../views/IndexView'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

class IndexController extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Home | Jeffrey Yu</title>
        </Helmet>
        <IndexView>
          <brand-nav-link href="/" />
          <home-nav-link href="/" />
          <about-nav-link href="/about" />
          <contact-nav-link href="/contact" />
        </IndexView>
      </div>
    )
  }
}

export default withRouter(IndexController);
