import React from 'react';
import '../index.css'
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import MediaQuery from 'react-responsive';

export class Forecast extends React.Component {
  render() {
    const right = {
      right: '0',
      bottom: '40px',
      position: 'absolute',
      paddingRight: '12%',
      paddingLeft: '10%'
    }
    const left = {
      maxWidth: '70%'
    }
    const big = {
      height: '150px',
      position: 'relative',
      top: '30px'
    }
    let imageURL = this.props.weatherImg;
    return (
      <div>
      <MediaQuery query='(min-device-width: 1000px)'>
        <div className="forecast" style={left}>
          <Paper zDepth={2}>
            <p>{this.props.placeCi}, {this.props.placeSt}</p>
            <Divider />
            <p>{this.props.thisDay}'s High between 9am - 6pm: {this.props.dayHigh}°F </p>
            <Divider />
            <p>{this.props.thisDay}'s Low between 9am - 6pm: {this.props.dayLow}°F </p>
            <Divider />
            <p> Chance of rain: {this.props.dayRain}%</p>
            <Divider />
            <p id="alert"> Weather Alerts:  {this.props.dayWarnings}</p>
          </Paper>
          <div className="image" style={right}>
            <img style={big} src={imageURL}/>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 999px)'>
        <div className="forecast">
          <Paper zDepth={2} style={{textAlign: 'center'}}>
            <p>{this.props.placeCi}, {this.props.placeSt}</p>
            <Divider />
            <p>{this.props.thisDay}'s High between 9am - 6pm: {this.props.dayHigh}°F </p>
            <Divider />
            <p>{this.props.thisDay}'s Low between 9am - 6pm: {this.props.dayLow}°F </p>
            <Divider />
            <p> Chance of rain: {this.props.dayRain}%</p>
            <Divider />
            <p id="alert"> Weather Alerts:  {this.props.dayWarnings}</p>
          </Paper>
        </div>
      </MediaQuery>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  placeCi: state.weatherState.city,
  placeSt: state.weatherState.place,
  thisDay: state.weatherState.today,
  dayHigh: state.weatherState.high,
  dayLow: state.weatherState.low,
  dayRain: state.weatherState.rain,
  dayWarnings: state.weatherState.weatherAlerts,
  weatherImg: state.weatherState.img
});

export default connect(mapStateToProps)(Forecast);
