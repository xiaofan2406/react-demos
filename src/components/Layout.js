import React from 'react';
import injectSheet, { fontFamily, fontSize } from 'styles';
import 'styles/reset.css';
import 'styles/animation.css';
import 'styles/style.css';

import Header from './Header';

const sheet = {
  layout: {
    fontFamily,
    fontSize
  },
  main: {
    padding: '1em'
  }
};

function Layout({ sheet: { classes }, children }) {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.main}>
        {children}
      </div>
    </div>
  );
}

Layout.propTypes = {
  sheet: React.PropTypes.object.isRequired,
  children: React.PropTypes.node.isRequired
};

export default injectSheet(sheet)(Layout);
