import './App.css';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.js';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Home/>     
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
