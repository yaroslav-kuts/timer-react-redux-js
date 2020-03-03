import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import store from "./redux/store";

import './index.css';
import TimerApp from './TimerApp';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <TimerApp />
  </Provider>,
  rootElement
);
