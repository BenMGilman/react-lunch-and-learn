import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/layout/Shell';
import BlogPage from './components/blog/BlogPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BlogPage}/>
  </Route>
);