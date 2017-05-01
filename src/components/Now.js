import React from 'react';
import '../index.css'
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

export class Now extends React.Component {
  render() {
    return (
      <div className="forecast">
        <Paper zDepth={2}>
          <p>{this.props.placeCi}, {this.props.placeSt}</p>
          <Divider />
          <p> Temperature right now: {this.props.now}°</p>
          <Divider />
          <p> Feels like: {this.props.feelsNow}°</p>
          <Divider />
          <p> Chance of rain: {this.props.dayRain}%</p>
          <Divider />
      </Paper>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  placeCi: state.weatherState.city,
  placeSt: state.weatherState.place,
  now: state.weatherState.rightNow,
  feelsNow: state.weatherState.rightNowFeels,
  dayRain: state.weatherState.rain,
});

export default connect(mapStateToProps)(Now);
