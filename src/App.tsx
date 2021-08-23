import React from 'react';
import logo from './assets/xteam-2.svg';
import './App.css';
import { Action, Block } from './components';

function App() {
  return (
    <Block>
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Poker online</p>
      </header>
      <main>
        <Action onClick={() => console.log('run!')}>run</Action>
      </main>
    </Block>
  );
}

export default App;
