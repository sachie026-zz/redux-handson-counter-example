import React from 'react';
import {Provider} from "react-redux";
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import Reset from "./components/reset"
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
        count: state.count === 0 ? 0 : state.count - 1
      };
    default:
      return state;
  }
}


function resetReducer(state = initialState, action){
  console.log('reset reducer', state, action);

  switch(action.type) {
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }

}


const rootReducer = combineReducers({reducer, resetReducer})

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
    <Counter/><br/><br/>
    <Reset/>
  </Provider>
  );
}

export default App;
