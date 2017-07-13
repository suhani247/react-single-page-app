import React, { Component } from 'react';
import ReactDOM from 'react-dom'; 
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './src/App'
import Home from './src/Home.js'
import AboutUs from './src/AboutUs.js'
import ContactUs from './src/ContactUs.js'
 
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="about" component={AboutUs} />
     <Route path="contact" component={ContactUs} />
    </Route>
  </Router>,
  document.getElementById('root')
);