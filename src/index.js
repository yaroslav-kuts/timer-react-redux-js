import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import TimerApp from './TimerApp';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <TimerApp test="test" />
    </Router>
  </Provider>,
  rootElement,
);
