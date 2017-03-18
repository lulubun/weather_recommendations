import React from 'react';
import {connect} from 'react-redux';

export class Forecast extends React.Component {
  render() {
    return (
      <div className="forecast">
        <h5>Today's High between 9am - 6pm: {this.props.dayHigh}°F </h5>
        <h5>Today's Low between 9am - 6pm: {this.props.dayLow}°F </h5>
        <h5>Chance of rain: {this.props.dayRain}%</h5>
        <h6>Weather Alerts:  {this.props.dayWarnings}</h6>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  dayHigh: state.weatherState.high,
  dayLow: state.weatherState.low,
  dayRain: state.weatherState.rain,
  dayWarnings: state.weatherState.weatherAlerts
});

export default connect(mapStateToProps)(Forecast);
