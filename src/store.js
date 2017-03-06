import React from 'react';
import { combineReducers, applyMiddleware, compose, devTools, createStore } from 'redux';
import { Route, reduxReactRouter, createHistory } from 'redux-react-router';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import Nav from './components/Nav';
import Weather from './components/Weather';
import Clothes from './components/Clothes';

const routes = (
  <Route path="/" component={Nav}>
    <Route path="/recommendations" component={Clothes} />
  </Route>
);

export default compose(
  applyMiddleware(thunk),
  reduxReactRouter({
    routes,
    createHistory
  }),
  devTools()
)(createStore)(reducer);
