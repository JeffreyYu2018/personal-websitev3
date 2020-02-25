/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [

]

let Controller

class NavbarView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/NavbarController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = NavbarView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== NavbarView ? transformProxies(this.props.children) : {
      'brand-nav-link': [],
      'home-nav-link': [],
      'about-nav-link': [],
      'contact-nav-link': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/jeff-appfairy-test.webflow.css);
        ` }} />
        <span className="af-view">
          <div data-collapse="medium" data-animation="default" data-duration={400} className="af-class-navigation-bar w-nav">
            <div className="w-container">
              {map(proxies['brand-nav-link'], props => <a href="#" {...{...props, className: `w-nav-brand ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                <div className="af-class-site-name">Jeffrey Yu</div>
              </React.Fragment>}</a>)}
              <nav role="navigation" className="af-class-navigation-menu w-nav-menu">{map(proxies['home-nav-link'], props => <a href="#" {...{...props, className: `af-class-navigation-link w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Home</React.Fragment>}</a>)}{map(proxies['about-nav-link'], props => <a href="#" {...{...props, className: `af-class-navigation-link w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>About</React.Fragment>}</a>)}{map(proxies['contact-nav-link'], props => <a href="#" {...{...props, className: `af-class-navigation-link w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Contact</React.Fragment>}</a>)}</nav>
              <div className="af-class-menu-button w-nav-button">
                <div className="w-icon-nav-menu" />
              </div>
            </div>
          </div>
        </span>
      </span>
    )
  }
}

export default NavbarView

/* eslint-enable */