import { createStore, combineReducers } from 'redux';
import { v4 } from 'uuid';

import { loadState, saveState } from './localStorage';

import { generateTasks } from '../utils';

const defaultState = {
  timer: {
    isStarted: false,
    startTime: 0,
    tasks: [],
  },
};

const initialState = loadState() || defaultState;

const timer = (state = initialState.timer, action) => {
  switch (action.type) {
    case 'START': {
      return {
        ...state,
        isStarted: true,
        startTime: Date.now(),
      };
    }

    case 'STOP': {
      return {
        isStarted: false,
        startTime: 0,
        tasks: [
          ...state.tasks,
          {
            id: v4(),
            title: action.title,
            startTime: state.startTime,
            endTime: Date.now(),
          },
        ],
      };
    }

    case 'DELETE': {
      return {
        ...state,
        tasks: state.tasks.filter(({ id }) => id !== action.id),
      };
    }

    case 'GENERATE': {
      return {
        ...state,
        tasks: generateTasks(),
      };
    }

    default:
      return state;
  }
};

const rootReducer = combineReducers({ timer });

const store = createStore(
  rootReducer,
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(() => saveState(store.getState()));

export default store;
