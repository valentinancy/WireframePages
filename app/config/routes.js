import React from 'react';
import Main from '../components/Main';
import Home from '../components/container/Home';
import { Route,IndexRoute } from 'react-router';
import Widget from '../components/container/content/Widget';
import Email from '../components/container/content/Email';
import Social from '../components/container/content/Social';
import Calendar from '../components/container/content/Calendar';

export default (
  <Route path="/" component={Main}>
    <Route path="widget" component={Widget} />
    <Route path="email" component={Email} />
    <Route path="social" component={Social} />
    <Route path="calendar" component={Calendar} />
    <IndexRoute component={Home} />
  </Route>
);
