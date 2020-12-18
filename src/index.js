import 'firebase/auth';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import firebase from 'firebase/app';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import firebaseConfig from './config/firebase';
import reportWebVitals from './reportWebVitals';
import store from './store';
import theme from './theme';
import Root from './views';

firebase.initializeApp(firebaseConfig);

const unsubscribe = firebase.auth().onAuthStateChanged(() => {
  render(
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Root />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
  unsubscribe();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
