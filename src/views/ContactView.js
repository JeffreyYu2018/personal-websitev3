/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

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
      'brand-nav-link': [],
      'home-nav-link': [],
      'about-nav-link': [],
      'contact-nav-link': [],
      'sidebar-profile-pic': [],
      'sidebar-facebook': [],
      'sidebar-instagram': [],
      'sidebar-github': [],
      'sidebar-linkedin': [],
      'sidebar-profile-pic': [],
      'sidebar-facebook': [],
      'sidebar-instagram': [],
      'sidebar-github': [],
      'sidebar-linkedin': [],
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
            <div data-collapse="medium" data-animation="default" data-duration={400} className="af-class-navigation-bar w-nav">
              <div className="w-container">
                {map(proxies['brand-nav-link'], props => <a href="#" {...{...props, className: `w-nav-brand ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>
                  <div className="af-class-site-name">Jeffrey Yu</div>
                </React.Fragment>}</a>)}
                <nav role="navigation" className="af-class-navigation-menu w-nav-menu">{map(proxies['home-nav-link'], props => <a href="index.html" {...{...props, className: `af-class-navigation-link w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Home</React.Fragment>}</a>)}{map(proxies['about-nav-link'], props => <a href="about.html" {...{...props, className: `af-class-navigation-link w-nav-link ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>About</React.Fragment>}</a>)}{map(proxies['contact-nav-link'], props => <a href="contact.html" {...{...props, className: `af-class-navigation-link w-nav-link w--current ${props.className || ''}`}}>{props.children ? props.children : <React.Fragment>Contact</React.Fragment>}</a>)}</nav>
                <div className="af-class-menu-button w-nav-button">
                  <div className="w-icon-nav-menu" />
                </div>
              </div>
            </div>
            <div className="af-class-content-wrapper">
              <div className="w-container">
                <div className="w-row">
                  <div className="w-hidden-small w-hidden-tiny w-col w-col-3">
                    <div className="af-class-white-wrapper">{map(proxies['sidebar-profile-pic'], props => <img src="images/LinkedIn-Photo-Square.jpg" srcSet="images/LinkedIn-Photo-Square-p-500.jpeg 500w, images/LinkedIn-Photo-Square-p-800.jpeg 800w, images/LinkedIn-Photo-Square-p-1080.jpeg 1080w, images/LinkedIn-Photo-Square-p-1600.jpeg 1600w, images/LinkedIn-Photo-Square-p-2000.jpeg 2000w, images/LinkedIn-Photo-Square-p-2600.jpeg 2600w, images/LinkedIn-Photo-Square-p-3200.jpeg 3200w, images/LinkedIn-Photo-Square.jpg 3456w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 97.296875px, 126px" alt {...{...props, className: `af-class-circle-profile ${props.className || ''}`}}>{props.children}</img>)}
                      <p className="af-class-site-description">Hi! My name is Jeffrey, and I wanted to welcome you to my site! I'm currently a student at Yale University studying computer science. I'm a software developer, tennis enthusiast, and travel blogger, and I'm excited to give you a look into my life. This is my temporary blog that I will be using until I&nbsp;develop my full personal website. Thank you for stopping by!</p>
                      <div className="af-class-grey-rule" />
                      <div className="af-class-social-link-group"><a href="https://www.facebook.com/jeffrey.yu.737" className="af-class-social-icon-link w-inline-block">{map(proxies['sidebar-facebook'], props => <img src="images/social-03.svg" width={20} alt {...props}>{props.children}</img>)}</a><a href="https://www.instagram.com/jeffreyyu237/" className="af-class-social-icon-link w-inline-block">{map(proxies['sidebar-instagram'], props => <img src="images/social-07.svg" width={25} alt {...props}>{props.children}</img>)}</a><a href="https://github.com/JeffreyYu2018" className="af-class-social-icon-link w-inline-block">{map(proxies['sidebar-github'], props => <img src="images/github.svg" width={25} alt {...props}>{props.children}</img>)}</a><a href="https://www.linkedin.com/in/jeffrey-yu-/" className="af-class-social-icon-link w-inline-block">{map(proxies['sidebar-linkedin'], props => <img src="images/social-09.svg" width={25} alt {...props}>{props.children}</img>)}</a></div>
                    </div>
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
                      <div className="af-class-white-wrapper">{map(proxies['sidebar-profile-pic'], props => <img src="images/LinkedIn-Photo-Square.jpg" srcSet="images/LinkedIn-Photo-Square-p-500.jpeg 500w, images/LinkedIn-Photo-Square-p-800.jpeg 800w, images/LinkedIn-Photo-Square-p-1080.jpeg 1080w, images/LinkedIn-Photo-Square-p-1600.jpeg 1600w, images/LinkedIn-Photo-Square-p-2000.jpeg 2000w, images/LinkedIn-Photo-Square-p-2600.jpeg 2600w, images/LinkedIn-Photo-Square-p-3200.jpeg 3200w, images/LinkedIn-Photo-Square.jpg 3456w" sizes="(max-width: 767px) 100vw, (max-width: 991px) 97.296875px, 126px" alt {...{...props, className: `af-class-circle-profile ${props.className || ''}`}}>{props.children}</img>)}
                        <p className="af-class-site-description">Hi! My name is Jeffrey, and I wanted to welcome you to my site! I'm currently a student at Yale University studying computer science. I'm a software developer, tennis enthusiast, and travel blogger, and I'm excited to give you a look into my life. This is my temporary blog that I will be using until I&nbsp;develop my full personal website. Thank you for stopping by!</p>
                        <div className="af-class-grey-rule" />
                        <div className="af-class-social-link-group"><a href="https://www.facebook.com/jeffrey.yu.737" className="af-class-social-icon-link w-inline-block">{map(proxies['sidebar-facebook'], props => <img src="images/social-03.svg" width={20} alt {...props}>{props.children}</img>)}</a><a href="https://www.instagram.com/jeffreyyu237/" className="af-class-social-icon-link w-inline-block">{map(proxies['sidebar-instagram'], props => <img src="images/social-07.svg" width={25} alt {...props}>{props.children}</img>)}</a><a href="https://github.com/JeffreyYu2018" className="af-class-social-icon-link w-inline-block">{map(proxies['sidebar-github'], props => <img src="images/github.svg" width={25} alt {...props}>{props.children}</img>)}</a><a href="https://www.linkedin.com/in/jeffrey-yu-/" className="af-class-social-icon-link w-inline-block">{map(proxies['sidebar-linkedin'], props => <img src="images/social-09.svg" width={25} alt {...props}>{props.children}</img>)}</a></div>
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

export default ContactView

/* eslint-enable */