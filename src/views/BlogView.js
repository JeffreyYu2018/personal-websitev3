/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.4.1.min.220afd743d.js").then(body => body.text()),
  fetch("js/webflow.js").then(body => body.text()),
]

let Controller

class BlogView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('../controllers/BlogController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = BlogView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    scripts.concat(Promise.resolve()).reduce((loaded, loading) => {
      return loaded.then((script) => {
        new Function(`
          with (this) ${
            eval(arguments[0])
          }
        `).call(window, script)

        return loading
      })
    })
  }

  render() {
    const proxies = Controller !== BlogView ? transformProxies(this.props.children) : {
      'brand-nav-link': [],
      'home-nav-link': [],
      'about-nav-link': [],
      'contact-nav-link': [],
      'sidebar': [],
      'sidebar-profile-pic': [],
      'sidebar-facebook': [],
      'sidebar-instagram': [],
      'sidebar-github': [],
      'sidebar-linkedin': [],
      'post-image': [],
      'post-title': [],
      'post-date': [],
      'post-category': [],
      'post-body': [],
      'back-to-home-nav-link': [],
    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(/css/normalize.css);
          @import url(/css/webflow.css);
          @import url(/css/jeff-appfairy-test.webflow.css);
        ` }} />
        <span className="af-view">
          <div className="af-class-body-2">
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
                    {map(proxies['sidebar'], props => <div {...{...props, className: `af-class-white-wrapper ${props.className || ''}`}}>{createScope(props.children, proxies => <React.Fragment>{map(proxies['sidebar-profile-pic'], props => <img src="images/LinkedIn-Photo-Square.jpg" srcSet="images/LinkedIn-Photo-Square-p-500.jpeg 500w, images/LinkedIn-Photo-Square-p-800.jpeg 800w, images/LinkedIn-Photo-Square-p-1080.jpeg 1080w, images/LinkedIn-Photo-Square-p-1600.jpeg 1600w, images/LinkedIn-Photo-Square-p-2000.jpeg 2000w, images/LinkedIn-Photo-Square-p-2600.jpeg 2600w, images/LinkedIn-Photo-Square-p-3200.jpeg 3200w, images/LinkedIn-Photo-Square.jpg 3456w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 97.296875px, 126px" alt {...{...props, className: `af-class-circle-profile ${props.className || ''}`}}>{props.children}</img>)}
                      <p className="af-class-site-description">Hi! My name is Jeffrey, and I wanted to welcome you to my site! I'm currently a student at Yale University studying computer science. I'm a software developer, tennis enthusiast, and travel blogger, and I'm excited to give you a look into my life. This is my temporary blog that I will be using until I&nbsp;develop my full personal website. Thank you for stopping by!</p>
                      <div className="af-class-grey-rule" />
                      <div className="af-class-social-link-group"><a href="https://www.facebook.com/jeffrey.yu.737" className="af-class-social-icon-link w-inline-block">{map(proxies['sidebar-facebook'], props => <img src="images/social-03.svg" width={20} alt {...props}>{props.children}</img>)}</a><a href="https://www.instagram.com/jeffreyyu237/" className="af-class-social-icon-link w-inline-block">{map(proxies['sidebar-instagram'], props => <img src="images/social-07.svg" width={25} alt {...props}>{props.children}</img>)}</a><a href="https://github.com/JeffreyYu2018" className="af-class-social-icon-link w-inline-block">{map(proxies['sidebar-github'], props => <img src="images/github.svg" width={25} alt {...props}>{props.children}</img>)}</a><a href="https://www.linkedin.com/in/jeffrey-yu-/" className="af-class-social-icon-link w-inline-block">{map(proxies['sidebar-linkedin'], props => <img src="images/social-09.svg" width={25} alt {...props}>{props.children}</img>)}</a></div>
                    </React.Fragment>)}</div>)}
                  </div>
                  <div className="af-class-content-column w-col w-col-9">
                    <div className="af-class-post-wrapper">{map(proxies['post-image'], props => <img src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg" alt {...{...props, className: `af-class-post-image ${props.className || ''}`}}>{props.children}</img>)}
                      <div className="af-class-posts-list">
                        {map(proxies['post-title'], props => <h1 {...props}>{props.children ? props.children : <React.Fragment>Heading</React.Fragment>}</h1>)}
                        <div className="af-class-details-wrapper">
                          {map(proxies['post-date'], props => <div {...{...props, className: `af-class-post-info ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>This is some text inside of a div block.</React.Fragment>}</div>)}
                          <div className="af-class-post-info">|</div>
                          {map(proxies['post-category'], props => <div {...{...props, className: `af-class-post-info ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Category</React.Fragment>}</div>)}
                        </div>
                        <div className="af-class-grey-rule" />
                        {map(proxies['post-body'], props => <div {...{...props, className: `af-class-body-copy w-richtext ${props.className || ''}`}}>{props.children}</div>)}
                      </div>
                    </div>
                    <div className="af-class-button-wrapper">{map(proxies['back-to-home-nav-link'], props => <a href="#" {...{...props, className: `af-class-button w-button ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>←&nbsp;Back to Home</React.Fragment>}</a>)}</div>
                    <div className="af-class-sidebar-on-mobile">
                      <div className="af-class-white-wrapper"><img src="images/LinkedIn-Photo-Square.jpg" srcSet="images/LinkedIn-Photo-Square-p-500.jpeg 500w, images/LinkedIn-Photo-Square-p-800.jpeg 800w, images/LinkedIn-Photo-Square-p-1080.jpeg 1080w, images/LinkedIn-Photo-Square-p-1600.jpeg 1600w, images/LinkedIn-Photo-Square-p-2000.jpeg 2000w, images/LinkedIn-Photo-Square-p-2600.jpeg 2600w, images/LinkedIn-Photo-Square-p-3200.jpeg 3200w, images/LinkedIn-Photo-Square.jpg 3456w" sizes="(max-width: 767px) 58vw, 100vw" alt className="af-class-circle-profile" />
                        <p className="af-class-site-description">Hi! My name is Jeffrey, and I wanted to welcome you to my site! I'm currently a student at Yale University studying computer science. I'm a software developer, tennis enthusiast, and travel blogger, and I'm excited to give you a look into my life. This is my temporary blog that I will be using until I&nbsp;develop my full personal website. Thank you for stopping by!</p>
                        <div className="af-class-grey-rule" />
                        <div className="af-class-social-link-group"><a href="https://www.facebook.com/jeffrey.yu.737" className="af-class-social-icon-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5e4ef3e0507f132c10405130/5e4ef3e01374657704c020dc_social-03.svg" width={25} alt /></a><a href="https://www.instagram.com/jeffreyyu237/" className="af-class-social-icon-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5e4ef3e0507f132c10405130/5e4ef3e01374650b35c02122_social-07.svg" width={25} alt /></a><a href="https://github.com/JeffreyYu2018" className="af-class-social-icon-link w-inline-block"><img src="images/github.svg" width={25} alt /></a><a href="https://www.linkedin.com/in/jeffrey-yu-/" className="af-class-social-icon-link w-inline-block"><img src="https://uploads-ssl.webflow.com/5e4ef3e0507f132c10405130/5e4ef3e0137465a6e5c020e9_social-09.svg" width={25} alt /></a></div>
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

export default BlogView

/* eslint-enable */
