import React from 'react';
import injectSheet, { fontFamily, fontSize } from 'styles';
import 'styles/reset.css';
import 'styles/animation.css';
import 'styles/style.css';

import SideNav from './SideNav';
import Header from './Header';

const sheet = {
  layout: {
    fontFamily,
    fontSize,
    display: 'flex',
    minHeight: '100vh',
    color: 'rgba(0,0,0,.8)'
  },
  main: {
    width: '100%'
  },
  content: {
    width: '760px',
    minWidth: '560px',
    padding: '1em',
    margin: 'auto'
  },
  side: {
    width: '220px',
    minWidth: '220px',
    boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
    zIndex: 10
  }
};

function Layout({ sheet: { classes }, children }) {
  return (
    <div className={classes.layout}>
      <div className={classes.side}>
        <SideNav />
      </div>
      <div className={classes.main}>
        <Header />
        <div className={classes.content}>
          {children}
        </div>
      </div>
    </div>
  );
}

Layout.propTypes = {
  sheet: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired
};

export default injectSheet(sheet)(Layout);
