import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class Forecast extends React.Component {

  componentDidMount() {
    this.props.decatur()
  }

  render() {
    return (
      <div className="forecast">
        <h6>Today's High:</h6> {this.props.dayHigh}
        <h6>Today's Low:</h6> {this.props.dayLow}
        <h6>Chance of Rain:</h6> {this.props.dayRain}
        <h6>Weather Alerts:</h6> {this.props.dayWarnings}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  dayHigh: state.weatherState.high,
  dayLow: state.weatherState.low,
  dayRain: state.weatherState.rain,
  dayWarnings: state.weatherState.warnings,
})

const mapDispatchToProps = (dispatch) => ({
  decatur: () => dispatch(actions.getDecatur())
})

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)
