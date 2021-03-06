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

class DetailCategoriesView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/DetailCategoriesController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DetailCategoriesView

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
    const proxies = Controller !== DetailCategoriesView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/jeff-appfairy-test.webflow.css);
        ` }} />
        <span className="af-view">
          <div>
            <NavbarView.Controller />
            <div className="af-class-content-wrapper">
              <div className="w-container">
                <div className="w-row">
                  <div className="w-hidden-small w-hidden-tiny w-col w-col-3">
                    <SidebarView.Controller />
                  </div>
                  <div className="af-class-content-column w-col w-col-9">
                    <h1 className="af-class-white-bg-heading" />
                    <div className="w-dyn-list">
                      <div className="w-dyn-items">
                        <div className="w-dyn-item">
                          <div className="af-class-post-wrapper">
                            <div className="af-class-posts-list">
                              <div className="w-row">
                                <div className="w-col w-col-4"><a href="#" className="af-class-blog-image w-inline-block" /></div>
                                <div className="w-col w-col-8">
                                  <a href="#" className="af-class-blog-title-link w-inline-block">
                                    <h1 className="af-class-blog-title" />
                                  </a>
                                  <div className="af-class-details-wrapper">
                                    <div className="af-class-post-info" />
                                    <div className="af-class-post-info">|</div><a href="#" className="af-class-post-info af-class-when-link" /></div>
                                  <div className="af-class-post-summary-wrapper">
                                    <p className="af-class-post-summary" /><a href="#" className="af-class-read-more-link">Read more...</a></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-dyn-empty">
                        <p>No items found.</p>
                      </div>
                    </div>
                    <div className="af-class-button-wrapper"><a href="/all-posts" className="af-class-button w-button">←&nbsp;All posts</a></div>
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

export default DetailCategoriesView

/* eslint-enable */