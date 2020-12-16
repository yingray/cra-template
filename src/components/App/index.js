import './App.css';

import logo from '@/assets/images/logo.svg';
import Google from '../Auth/Google';

function App() {
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
