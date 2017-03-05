import React from 'react';
import ReactDOM from 'react-dom';
import Weather from './components/Weather';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Weather />
    </Provider>,
    document.getElementById('root')
  );
});
