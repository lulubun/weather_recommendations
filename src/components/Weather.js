import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Zip from './Zip';
import Forecast from './Forecast';

export class Weather extends React.Component {
  componentDidMount() {
    this.props.startingWeather()
  }

  render() {
    return(
      <div className="Weather">
        <p>Hello!</p>
        <Forecast />
        <Zip />
      </div>
    );
  }
}

const matchDispatchToProps = (dispatch) => ({
  startingWeather: () => dispatch(actions.getDecatur())
})

export default connect(null, matchDispatchToProps)(Weather)
