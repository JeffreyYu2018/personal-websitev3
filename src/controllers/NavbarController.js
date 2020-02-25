import React from 'react'
import NavbarView from '../views/NavbarView'

const stateToggle = false

class NavbarController extends React.Component {
  render() {
    return (
      <div>
        <NavbarView>
          <brand-nav-link href="/" />
          <home-nav-link href="/" />
          <about-nav-link href="/about" />
          <contact-nav-link href="/contact" />
        </NavbarView>
        { stateToggle ? (
          <p>An error occurred.</p>
        ) : (
          <div />
        )
        }
      </div>
    )
  }
}

export default NavbarController
