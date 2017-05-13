import React from 'react';
import '../index.css'
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

export class Now extends React.Component {
  render() {
    const text = {
      position: 'relative',
      paddingLeft: '10px',
      marginLeft: '10%',
      top: '10'
    }
    const iconStyle = {
      position: 'absolute',
      top: '50px',
      left: '30',
      height: '80px'
    }
    return (
      <div className="now" className="Weather">
        <div>
          <img style={iconStyle} src={this.props.icon} />
        </div>
        <Paper zDepth={2} style={text}>
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
  icon: state.weatherState.rightNowIcon
});

export default connect(mapStateToProps)(Now);
