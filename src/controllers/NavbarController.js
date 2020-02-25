import React from 'react'
import NavbarView from '../views/NavbarView'

const stateToggle = true

class NavbarController extends React.Component {
  render() {
    return (
      <div>
        <NavbarView>
          <nav-menu>
            <brand-nav-link href="/" />
            <home-nav-link href="/" />
            <about-nav-link href="/about" />
            <contact-nav-link href="/contact" />
          </nav-menu>
        </NavbarView>
        { stateToggle ? (
          <div class="w-nav-overlay" data-wf-ignore="" style={{height:"1124.23px",display:"block"}}>
            <nav role="navigation" class="af-class-navigation-menu w-nav-menu" style={{transform:"translateY(0px) translateX(0px)",transition:"transform 400ms ease 0s"}} data-nav-menu-open="">
              <a href="index.html" class="af-class-navigation-link w-nav-link w--current w--nav-link-open" style={{}}>Home</a>
              <a href="about.html" class="af-class-navigation-link w-nav-link w--nav-link-open" style={{}}>About</a>
              <a href="contact.html" class="af-class-navigation-link w-nav-link w--nav-link-open" style={{}}>Contact</a>
            </nav>
          </div>
        ) : (
          <p>Nothing here.</p>
        )
        }
      </div>
    )
  }
}

export default NavbarController
