import React from 'react';
import Main from '../components/Main';
import Home from '../components/container/Home';
import { Router,browserHistory,Route,IndexRoute } from 'react-router';
import Widget from '../components/container/content/Widget';
import Email from '../components/container/content/Email';
import Social from '../components/container/content/Social';
import Calendar from '../components/container/content/Calendar';
import Login from '../components/Login';
import HomeContent from '../components/container/content/HomeContent'

export default (
  <Route path="/" component={Main}>
    <Route path="home/:username" component={Home}>
      <IndexRoute component={HomeContent}></IndexRoute>
      <Route path="widget/:second" component={Widget}></Route>
      <Route path="email/:second" component={Email}></Route>
      <Route path="social/:second" component={Social}></Route>
      <Route path="calendar/:second" component={Calendar}></Route>
    </Route>
    <IndexRoute component={Login}></IndexRoute>
  </Route>
);

{/*<Router history={browserHistory}>
  <Route path="/" component={Main}>
    <Route path="home/:username" component={Home}>
      <IndexRoute component={HomeContent}></IndexRoute>
      <Route path="widget/:second" component={Widget}></Route>
      <Route path="email/:second" component={Email}></Route>
      <Route path="social/:second" component={Social}></Route>
      <Route path="calendar/:second" component={Calendar}></Route>
    </Route>
    <IndexRoute component={Login}></IndexRoute>
  </Route>
</Router>*/}
