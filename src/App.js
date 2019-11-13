import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';
import Counter from "./components/counter";

function reducer(state, action) {
  console.log('reducer', state, action);
  return state;
}

const store = createStore(reducer);

function App() {
  return (
    <div className="App">      
      <Counter/>
    </div>
  );
}

export default App;
