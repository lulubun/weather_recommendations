import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import { syncHistoryWithStore } from 'react-router-redux';
import { Route, Router, browserHistory } from 'react-router';
import Nav from './components/Nav';
import Weather from './components/Weather';
import Clothes from './components/Clothes';

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Nav}>
        <Route path="/recommendations" component={Clothes} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
