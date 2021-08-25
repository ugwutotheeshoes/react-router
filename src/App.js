import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className='App'>
      <Header />
    </div>
  )
}

export default App