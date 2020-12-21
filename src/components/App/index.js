import './App.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import logo from '@/assets/images/logo.svg';
import { fetchData } from '@/slices/data';
import Google from '../Auth/Google';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <Google />
      </header>
    </div>
  );
}

export default App;
