import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducer';

const store = createStore(
  rootReducer,
  composeWithDevTools({
    trace: process.env.NODE_ENV === 'development',
  })(),
);

export default store;
