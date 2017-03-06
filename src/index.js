import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './store';
import Nav from './components/Nav';


document.addEvenListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Nav />
    </Provider>,
    document.getElementById('root')
  );
});
