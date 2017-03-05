import React from 'react';
import {connect} from 'react-redux';
import * as actions from '..actions/index';

export class Weather extends React.Component {
  render() {
    return(
      <div className="Weather">
        <p>Hello!</p>
        <Zip />
        <Forecast />
        <Clothes />
      </div>
    );
  }
}
