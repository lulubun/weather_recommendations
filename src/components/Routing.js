import React from 'react';
import Weather from './components/Weather';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import Clothes from './components/Clothes';
import store from './store';
import Nav from '../components/Clothes';

export default class Routing extends React.Component {
  render () {
    return(
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Nav}>
            <IndexRoute component={Weather} />
            <Route path="/recommendations" component={Clothes} />
          </Route>
        </Router>
      </Provider>
    )
  }
}
