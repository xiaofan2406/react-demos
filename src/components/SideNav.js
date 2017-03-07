import React from 'react';
import injectSheet, { primaryColor, headerHeight, breath } from 'styles';
import SmartLink from 'widgets/SmartLink';

import logo from './logo.svg';
import { routes } from '../router';

const sheet = {
  sideNav: {
    height: '100%'
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: headerHeight,
    backgroundColor: primaryColor
  },
  logo: {
    animation: 'spin infinite 10s linear',
    height: '96px'
  },
  title: {
    animation: 'fadeIn 2s ease',
    fontSize: '24px'
  },
  nav: {
    marginTop: breath,
    display: 'flex',
    flexDirection: 'column'
  },
  link: {
    fontSize: '16px',
    textDecoration: 'none',
    padding: '0.5em 1em',
    display: 'inline-block',
    color: 'inherit',
    '&:hover': {
      color: primaryColor
    }
  },
  linkActive: {
    color: primaryColor
  }
};

function SideNav({ classes }) {
  return (
    <div className={classes.sideNav}>
      <div className={classes.brand}>
        <img src={logo} className={classes.logo} alt="logo" />
      </div>
      <div className={classes.nav}>
        {routes.map(route => (
          <SmartLink
            className={classes.link}
            activeClassName={classes.linkActive}
            key={route.path}
            to={route.path}
          >
            {route.name}
          </SmartLink>
        ))}
      </div>
    </div>
  );
}

SideNav.propTypes = {
  classes: React.PropTypes.object.isRequired
};

export default injectSheet(sheet)(SideNav);
