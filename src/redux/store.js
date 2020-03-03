import { createStore, combineReducers } from 'redux';

import { loadState, saveState } from './localStorage';

const defaultState = {
  timer: {
    isStarted: false,
    startTime: 0,
  },
  tasks: [],
};

const initialState = loadState() || defaultState;

const timer = (state = initialState.timer, action) => {
  switch (action.type) {
    case 'START': {
      return {
        isStarted: true,
        startTime: Date.now(),
      };
    }

    case 'STOP': {
      return {
        isStarted: false,
        startTime: 0,
      };
    }

    default:
      return state;
  }
};

const tasks = (state = initialState.tasks, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({ timer, tasks });

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => saveState(store.getState()));

export default store;
