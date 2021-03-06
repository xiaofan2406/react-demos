import React from 'react';
import ReactDOM from 'react-dom';

import Router from './router';

const rootElement = document.getElementById('root');

if (process.env.NODE_ENV === 'development') { // react-hot-loader setup
  const AppContainer = require('react-hot-loader').AppContainer; // eslint-disable-line global-require

  ReactDOM.render(
    <AppContainer>
      <Router />
    </AppContainer>,
    rootElement
  );

  if (module.hot) {
    module.hot.accept('./router', () => {
      const NextRouter = require('./router').default; // eslint-disable-line global-require
      ReactDOM.render(
        <AppContainer>
          <NextRouter />
        </AppContainer>,
        rootElement
      );
    });
  }
} else {
  ReactDOM.render(
    <Router />,
    rootElement
  );
}
