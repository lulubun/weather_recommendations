import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Weather from './components/Weather';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import Clothes from './components/Clothes';
import store from './store';
import Nav from './components/Nav';

const routing = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={Weather} />
        <Route path="/recommendations" component={Clothes} />
      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(
  routing,
  document.getElementById('root')
);
