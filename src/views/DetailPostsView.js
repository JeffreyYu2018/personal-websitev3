/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class DetailPostsView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/DetailPostsController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DetailPostsView

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
    const proxies = Controller !== DetailPostsView ? transformProxies(this.props.children) : {
      'home-nav-link': [],
      'about-nav-link': [],
      'blog-nav-link': [],
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
          <div>
            <div data-collapse="medium" data-animation="default" data-duration={400} className="af-class-navigation-bar w-nav">
              <div className="w-container">
                <a href="index.html" className="w-nav-brand">
                  <div className="af-class-site-name">Jeffrey Yu</div>
                </a>
                <nav role="navigation" className="af-class-navigation-menu w-nav-menu">{map(proxies['home-nav-link'], props => <a href="#" {...{...props, className: `af-class-navigation-link w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Home</React.Fragment>}</a>)}{map(proxies['about-nav-link'], props => <a href="#" {...{...props, className: `af-class-navigation-link w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>About</React.Fragment>}</a>)}{map(proxies['blog-nav-link'], props => <a href="#" {...{...props, className: `af-class-navigation-link w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Blog</React.Fragment>}</a>)}{map(proxies['contact-nav-link'], props => <a href="#" {...{...props, className: `af-class-navigation-link w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Contact</React.Fragment>}</a>)}</nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-content-wrapper">
              <div className="w-container">
                <div className="w-row">
                  <div className="w-hidden-small w-hidden-tiny w-col w-col-3">
                    <div className="af-class-white-wrapper"><img src="images/LinkedIn-Photo-Square.jpg" srcSet="images/LinkedIn-Photo-Square.jpg 500w, images/LinkedIn-Photo-Square.jpg 800w, images/LinkedIn-Photo-Square.jpg 1080w, images/LinkedIn-Photo-Square.jpg 1600w, images/LinkedIn-Photo-Square.jpg 2000w, images/LinkedIn-Photo-Square.jpg 2600w, images/LinkedIn-Photo-Square.jpg 3200w, images/LinkedIn-Photo-Square.jpg 3456w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 97.296875px, 126px" alt className="af-class-circle-profile" />
                      <p className="af-class-site-description">Hi! My name is Jeffrey, and I wanted to welcome you to my site! I'm currently a student at Yale University studying computer science. I'm a software developer, tennis enthusiast, and travel blogger, and I'm excited to give you a look into my life. This is my temporary blog that I will be using until I&nbsp;develop my full personal website. Thank you for stopping by!</p>
                      <div className="af-class-grey-rule" />
                      <div className="af-class-social-link-group"><a href="https://www.facebook.com/" className="af-class-social-icon-link w-inline-block"><img src="images/social-03.svg" width={25} alt /></a><a href="https://www.instagram.com/jeffreyyu237/" className="af-class-social-icon-link w-inline-block"><img src="images/social-07.svg" width={25} alt /></a><a href="https://github.com/JeffreyYu2018" className="af-class-social-icon-link w-inline-block"><img src="images/github.svg" width={25} alt /></a><a href="https://www.linkedin.com/in/jeffrey-yu-/" className="af-class-social-icon-link w-inline-block"><img src="images/social-09.svg" width={25} alt /></a></div>
                    </div>
                  </div>
                  <div className="af-class-content-column w-col w-col-9">
                    <div className="af-class-post-wrapper">
                      <div className="af-class-blog-page-image" />
                      <div className="af-class-posts-list">
                        <h1 />
                        <div className="af-class-details-wrapper">
                          <div className="af-class-post-info" />
                          <div className="af-class-post-info">|</div><a href="#" className="af-class-post-info af-class-when-link" /></div>
                        <div className="af-class-grey-rule" />
                        <div className="af-class-body-copy w-richtext" />
                      </div>
                    </div>
                    <div className="af-class-button-wrapper"><a href="/all-posts" className="af-class-button w-button">←&nbsp;All posts</a></div>
                    <div className="af-class-sidebar-on-mobile">
                      <div className="af-class-white-wrapper"><img src="images/LinkedIn-Photo-Square.jpg" srcSet="images/LinkedIn-Photo-Square.jpg 500w, images/LinkedIn-Photo-Square.jpg 800w, images/LinkedIn-Photo-Square.jpg 1080w, images/LinkedIn-Photo-Square.jpg 1600w, images/LinkedIn-Photo-Square.jpg 2000w, images/LinkedIn-Photo-Square.jpg 2600w, images/LinkedIn-Photo-Square.jpg 3200w, images/LinkedIn-Photo-Square.jpg 3456w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 97.296875px, 126px" alt className="af-class-circle-profile" />
                        <p className="af-class-site-description">Hi! My name is Jeffrey, and I wanted to welcome you to my site! I'm currently a student at Yale University studying computer science. I'm a software developer, tennis enthusiast, and travel blogger, and I'm excited to give you a look into my life. This is my temporary blog that I will be using until I&nbsp;develop my full personal website. Thank you for stopping by!</p>
                        <div className="af-class-grey-rule" />
                        <div className="af-class-social-link-group"><a href="https://www.facebook.com/" className="af-class-social-icon-link w-inline-block"><img src="images/social-03.svg" width={25} alt /></a><a href="https://www.instagram.com/jeffreyyu237/" className="af-class-social-icon-link w-inline-block"><img src="images/social-07.svg" width={25} alt /></a><a href="https://github.com/JeffreyYu2018" className="af-class-social-icon-link w-inline-block"><img src="images/github.svg" width={25} alt /></a><a href="https://www.linkedin.com/in/jeffrey-yu-/" className="af-class-social-icon-link w-inline-block"><img src="images/social-09.svg" width={25} alt /></a></div>
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

export default DetailPostsView

/* eslint-enable */