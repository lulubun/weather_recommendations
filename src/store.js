import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

const store = createStore(
  combineReducers({
    ...reducer,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
);

export default store
