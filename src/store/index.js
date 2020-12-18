import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from './epic';
import rootReducer from './reducer';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools({
    trace: process.env.NODE_ENV === 'development',
  })(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(rootEpic);

export default store;
