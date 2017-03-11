//import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import weatherState from './reducers/weatherState';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

const stuff = combineReducers({
  ...weatherState,
  routing: routerReducer
});

const store = createStore(
  stuff,
  applyMiddleware(thunk)
);

export default store
