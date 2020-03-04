import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './redux/store';

import './index.css';
import TimerApp from './TimerApp';
import Task from './components/Task';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/timer" component={Task}>
        <TimerApp />
      </Route>
      <Route path="/tasks/:id" component={Task} />
    </Router>
  </Provider>,
  rootElement,
);
