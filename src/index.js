import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Nav from './components/Nav';
import Weather from './components/Weather';
import Clothes from './components/Clothes';
import weatherState from './reducers/weatherState';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const reducer = combineReducers({
  ...weatherState,
  routing: routerReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Nav}>
        <IndexRoute component={Weather} />
        <Route path="/recommendations" component={Clothes} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
