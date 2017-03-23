import React from 'react';
import '../index.css'
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

export class Forecast extends React.Component {
  render() {
    return (
      <div className="forecast">
        <Paper zDepth={2}>
          <p>{this.props.thisDay}'s High between 9am - 6pm: {this.props.dayHigh}°F </p>
          <Divider />
          <p>{this.props.thisDay}'s Low between 9am - 6pm: {this.props.dayLow}°F </p>
          <Divider />
          <p> Chance of rain: {this.props.dayRain}%</p>
          <Divider />
          <p id="alert"> Weather Alerts:  {this.props.dayWarnings}</p>
      </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  thisDay: state.weatherState.today,
  dayHigh: state.weatherState.high,
  dayLow: state.weatherState.low,
  dayRain: state.weatherState.rain,
  dayWarnings: state.weatherState.weatherAlerts
});

export default connect(mapStateToProps)(Forecast);
