import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './pages/home';

import { HomeProvider } from './context/homeContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <HomeProvider>
        <Home />
      </HomeProvider>
      <footer className="App-footer">
        <p>Author: Juan Pablo Montoya</p>
        <p><a className="App-link" href="https://api.spaceflightnewsapi.net/v3/documentation#/" target="_blank" rel="noreferrer">Spaceflight News API</a></p>
      </footer>
    </div>
  );
}

export default App;
