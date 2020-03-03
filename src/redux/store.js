import { createStore, combineReducers } from "redux";

const defaultState = {
    isStarted: false,
    counter: 0,
};

const timer = (state = defaultState, action) => {
    switch (action.type) {
        case 'START': {
            return {
                ...state,
                isStarted: true,
                startTime: Date.now()
            }
        }

        case 'STOP': {
            return {
                ...state,
                isStarted: false,
                startTime: 0,
            };
        }

        default:
            return state;
    }
}

const rootReducer = combineReducers({ timer });

export default createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
