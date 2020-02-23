/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'
import PostsListView from './PostsListView'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

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
    const proxies = Controller !== IndexView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/jeff-appfairy-test.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body">
            <div data-collapse="medium" data-animation="default" data-duration={400} className="af-class-navigation-bar w-nav">
              <div className="w-container">
                <a href="index.html" className="w-nav-brand w--current">
                  <div className="af-class-site-name">Denali</div>
                </a>
                <nav role="navigation" className="af-class-navigation-menu w-nav-menu"><a href="index.html" className="af-class-navigation-link w-nav-link w--current">Home</a><a href="about.html" className="af-class-navigation-link w-nav-link">About</a><a href="blog.html" className="af-class-navigation-link w-nav-link">Blog</a><a href="contact.html" className="af-class-navigation-link w-nav-link">Contact</a></nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-content-wrapper">
              <div className="w-container">
                <div className="af-class-columns w-row">
                  <div className="w-hidden-small w-hidden-tiny w-col w-col-3">
                    <div className="af-class-white-wrapper"><img src="images/photo-1443180236447-432ea00e6ead.jpg" alt className="af-class-circle-profile" />
                      <p className="af-class-site-description">Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.</p>
                      <div className="af-class-grey-rule" />
                      <h2 className="af-class-small-heading">Featured Posts:</h2>
                      <div className="af-class-feature-posts-list w-dyn-list">
                        <div className="w-dyn-items">
                          <div className="w-dyn-item"><a href="#" className="af-class-small-post-link" /></div>
                        </div>
                        <div className="w-dyn-empty">
                          <p>No items found.</p>
                        </div>
                      </div>
                      <div className="af-class-grey-rule" />
                      <div className="af-class-social-link-group"><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-03.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-07.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-18.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-09.svg" width={25} alt /></a></div>
                      <p className="af-class-built-with-webflow">Built with <a target="_blank" href="https://webflow.com" className="af-class-webflow-link">Webflow</a></p>
                    </div>
                  </div>
                  <div className="af-class-content-column w-col w-col-9">
                    <PostsListView.Controller />
                    <div className="af-class-button-wrapper"><a href="all-posts.html" className="af-class-button w-button">More posts&nbsp;→</a></div>
                    <div className="af-class-sidebar-on-mobile">
                      <div className="af-class-white-wrapper"><img src="images/photo-1443180236447-432ea00e6ead.jpg" alt className="af-class-circle-profile" />
                        <p className="af-class-site-description">Denali is a simple responsive blog template. Easily add new posts using the Editor or change layout and design using the Designer.</p>
                        <div className="af-class-grey-rule" />
                        <h2 className="af-class-small-heading">Featured Posts:</h2>
                        <div className="af-class-feature-posts-list w-dyn-list">
                          <div className="w-dyn-items">
                            <div className="w-dyn-item"><a href="#" className="af-class-small-post-link" /></div>
                          </div>
                          <div className="w-dyn-empty">
                            <p>No items found.</p>
                          </div>
                        </div>
                        <div className="af-class-grey-rule" />
                        <div className="af-class-social-link-group"><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-03.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-07.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-18.svg" width={25} alt /></a><a href="#" className="af-class-social-icon-link w-inline-block"><img src="images/social-09.svg" width={25} alt /></a></div>
                        <p className="af-class-built-with-webflow">Built with <a target="_blank" href="https://webflow.com" className="af-class-webflow-link">Webflow</a></p>
                      </div>
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

export default IndexView

/* eslint-enable */