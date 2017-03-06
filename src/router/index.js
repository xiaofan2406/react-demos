import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SetState from 'components/SetState';
import Layout from 'components/Layout';
import Home from './Home';

export const routes = [
  {
    path: '/',
    name: 'Home',
    title: () => <div>React Demos</div>,
    exact: true,
    component: Home
  },
  {
    path: '/setstate',
    name: 'setState Demo',
    title: () => <div>setState demo</div>,
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
