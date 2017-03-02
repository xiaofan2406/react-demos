import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SetState from 'components/SetState';
import Layout from 'components/Layout';
import Home from './Home';
import About from './About';

export const routes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/setstate',
    name: 'setState Demo',
    component: SetState
  }
];

function Router() {
  return (
    <BrowserRouter>
      <Layout>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Layout>
    </BrowserRouter>
  );
}

export default Router;
