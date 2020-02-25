import React from 'react'
import AboutView from '../views/AboutView'
import { Helmet } from 'react-helmet'

export default (props) => (
  <div>
    <Helmet>
      <title>About | Jeffrey Yu</title>
    </Helmet>
    <AboutView>
    </AboutView>
  </div>
)
