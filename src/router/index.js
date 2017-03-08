import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from 'components/Layout';
import SetState from 'components/SetState';
import PureComponent from 'components/PureComponent';
import ChildComponent from 'components/ChildComponent';
import Home from './Home';

export const routes = [
  {
    path: '/',
    name: 'Get Started',
    title: () => <span>Get Started</span>,
    exact: true,
    component: Home
  },
  {
    path: '/setstate',
    name: 'setState',
    title: () => <span>setState</span>,
    component: SetState
  },
  {
    path: '/purecomponent',
    name: 'PureComponent',
    title: () => <span>PureComponent</span>,
    component: PureComponent
  },
  {
    path: '/childcomponent',
    name: 'Component Composition',
    title: () => <span>Component Composition</span>,
    component: ChildComponent
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
