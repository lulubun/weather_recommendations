import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/Weather';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <p>Test</p>
      <Weather />
    </Provider>,
    document.getElementById('root')
  );
});
