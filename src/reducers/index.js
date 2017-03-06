import React from 'react';
import * as actions from '../actions/index';
import { Provider } from 'react-redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter, Route, IndexRoute, createHistory } from 'redux-react-router';
import thunk from 'redux-thunk';
import weatherState from './weatherState';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  weatherState
});

export default reducer
