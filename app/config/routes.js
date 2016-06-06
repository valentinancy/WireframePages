import React from 'react';
import Main from '../components/Main';
import Home from '../components/container/Home';
import { Route,IndexRoute } from 'react-router';
import Widget from '../components/container/content/Widget';
import Email from '../components/container/content/Email';
import Social from '../components/container/content/Social';
import Calendar from '../components/container/content/Calendar';
import Login from '../components/Login';
import HomeContent from '../components/container/content/HomeContent'

export default (
  <Route path="/" component={Main}>
    <Route path="home" component={Home}>
      <IndexRoute component={HomeContent}></IndexRoute>
      <Route path="widget" component={Widget}></Route>
      <Route path="email" component={Email}></Route>
      <Route path="social" component={Social}></Route>
      <Route path="calendar" component={Calendar}></Route>
    </Route>
    <IndexRoute component={Login}></IndexRoute>
  </Route>
);
