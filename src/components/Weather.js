import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Zip from './Zip';
import Forecast from './Forecast';
import '../index.css';

export class Weather extends React.Component {
  componentDidMount() {
    this.props.startingWeather(30030)
  };

  render() {
    return(
      <div className="Weather">
        <Forecast />
        <Zip />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startingWeather: () => dispatch(actions.getWeather(30030))
})

export default connect(null, mapDispatchToProps)(Weather)
