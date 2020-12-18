import 'firebase/auth';

import React from 'react';
import ReactDOM from 'react-dom';

import firebase from 'firebase/app';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import firebaseConfig from './config/firebase';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import Root from './views';

firebase.initializeApp(firebaseConfig);

const unsubscribe = firebase.auth().onAuthStateChanged(() => {
  ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Root />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
  unsubscribe();
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
