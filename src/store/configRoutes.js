import React from 'react';
import { Provider  } from 'mobx-react';
import { HashRouter as Router } from 'react-router-dom';

import App from '../App';

import store from './rootStore';

// Should pass stores individually?
// https://github.com/mobxjs/mobx/issues/363#issuecomment-228526272
const routes = (
  <Provider store={store} >
    <Router >
      <App />
    </Router>
  </Provider>
);

export default routes;
