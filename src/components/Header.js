import React from 'react';
import injectSheet, { primaryColor, headerHeight, spacing } from 'styles';
import { Route } from 'react-router-dom';

import { routes } from '../router';

const sheet = {
  header: {
    backgroundColor: primaryColor,
    height: headerHeight,
    padding: spacing,
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontSize: '36px'
  }
};

function Header({ classes }) {
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.title}
          />
        ))}
      </div>
    </div>
  );
}

Header.propTypes = {
  classes: React.PropTypes.object.isRequired
};

export default injectSheet(sheet)(Header);
