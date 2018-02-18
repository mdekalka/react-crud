import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import App from '../App';

import store from './configStore';

const routes = (
  <Provider store={store} >
    <Router >
      <App />
    </Router>
  </Provider>
);

export default routes;