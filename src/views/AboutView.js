/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import SidebarView from './SidebarView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class AboutView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/AboutController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = AboutView

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
    const proxies = Controller !== AboutView ? transformProxies(this.props.children) : {
      'brand-nav-link': [],
      'home-nav-link': [],
      'about-nav-link': [],
      'contact-nav-link': [],
      'get-in-touch-nav-link': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/jeff-appfairy-test.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-3">
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
            <div className="af-class-content-wrapper">
              <div className="w-container">
                <div className="w-row">
                  <div className="w-hidden-small w-hidden-tiny w-col w-col-3">
                    <SidebarView.Controller />
                  </div>
                  <div className="af-class-content-column w-col w-col-9">
                    <div className="af-class-post-wrapper">
                      <div className="af-class-posts-list">
                        <div className="af-class-body-copy w-richtext">
                          <h1>About me</h1>
                          <p>This section is currently in development.&nbsp;Please come back soon!</p>
                        </div>{map(proxies['get-in-touch-nav-link'], props => <a href="#" {...{...props, className: `af-class-button w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Get in touch</React.Fragment>}</a>)}</div>
                    </div>
                    <div className="af-class-sidebar-on-mobile">
                      <SidebarView.Controller />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default AboutView

/* eslint-enable */
