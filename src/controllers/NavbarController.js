import React from 'react'
import NavbarView from '../views/NavbarView'

const stateToggle = true

// Note: the nav-overlay capability was not transferred over with appfairy, so I had to hardcode it
class NavbarController extends React.Component {
  render() {
    return (
      <NavbarView>
        <brand-nav-link href="/" />
        <home-nav-link href="/" />
        <about-nav-link href="/about" />
        <contact-nav-link href="/contact" />
        <nav-overlay class="w-nav-overlay" data-wf-ignore="" style={{display:"block"}}>
          <nav role="navigation" class="af-class-navigation-menu w-nav-menu" style={{transform:"translateY(0px) translateX(0px)",transition:"transform 400ms ease 0s"}} data-nav-menu-open="">
            <a href="/" class="af-class-navigation-link w-nav-link w--current w--nav-link-open">Home</a>
            <a href="/about" class="af-class-navigation-link w-nav-link w--nav-link-open">About</a>
            <a href="/contact" class="af-class-navigation-link w-nav-link w--nav-link-open">Contact</a>
          </nav>
        </nav-overlay>
      </NavbarView>
    )
  }
}

export default NavbarController
