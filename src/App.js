import React from 'react';
import {Provider} from "react-redux";
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import Counter from "./components/counter";
import thunk from 'redux-thunk';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  console.log('reducer', state, action);

  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
    <Counter/>
  </Provider>
  );
}

export default App;
