/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import NavbarView from './NavbarView'
import SidebarView from './SidebarView'
import SidebarView from './SidebarView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class ContactView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/ContactController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = ContactView

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
    const proxies = Controller !== ContactView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/jeff-appfairy-test.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-4">
            <NavbarView.Controller />
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
                          <h1>Get in touch</h1>
                          <p><strong>Personal email:</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;jeff.yu831@gmail.com</p>
                          <p><strong>University email:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>jeffrey.yu@gmail.com</p>
                          <p>Facebook, Instagram, GitHub and LinkedIn accounts are linked in the sidebar.</p>
                        </div>
                      </div>
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

export default ContactView

/* eslint-enable */