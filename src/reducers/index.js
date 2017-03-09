import React from 'react';
import weatherState from './weatherState';
import { combineReducers } from 'redux';

const reducer = combineReducers({
  weatherState
});

export default reducer
