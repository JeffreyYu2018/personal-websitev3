import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './styles';
import './scripts';
import IndexController from './controllers/IndexController';
import AboutController from './controllers/AboutController';
import ContactController from './controllers/ContactController';
import BlogController from './controllers/BlogController';
import { Helmet } from 'react-helmet'

ReactDOM.render(
  <BrowserRouter>
    <Helmet>
      <title>Jeffrey Yu</title>
    </Helmet>
    <Switch>
      <Route exact path="/" component={IndexController} />
      <Route exact path="/contact" component={ContactController} />
      <Route exact path="/about" component={AboutController} />
      <Route exact path="/blog/:post_id" component={BlogController} />
    </Switch>
  </BrowserRouter>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
