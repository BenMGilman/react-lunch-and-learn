import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/Shell';
import BlogPage from './components/BlogPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BlogPage}/>
  </Route>
);