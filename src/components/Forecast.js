import React from 'react';
import '../index.css'
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import MediaQuery from 'react-responsive';
import * as actions from '../actions/index';

export class Forecast extends React.Component {
  componentDidUpdate() {
    this.props.recommendStuff()
  };

  render() {
    const right = {
      width: '37%',
      right: 0,
      top: 0,
      // bottom: '40px',
      position: 'absolute',
      // // paddingLeft: '20%'
      // maxWidth: '40%',
      // float: 'right',
      paddingTop: '10%',
      paddingRight: '5%'
    }
    const left = {
      width: '60%'
    }
    const big = {
      height: '130px',
      paddingLeft: '40%'
    }

    const recStyle = {
      // color: 'black',
      marginLeft: '8%',
      // paddingTop: '25px',
      // bottom: 0,
      textAlign: 'center'
    }

    const shrink = {
      fontSize: '0.75em'
    }

    let imageURL = this.props.weatherImg;
    console.log(this.props.dayRecommendations);
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
            <p style={recStyle}>{this.props.dayRecommendations}</p>
          </div>
        </div>
      </MediaQuery>
      <MediaQuery query='(max-device-width: 999px)'>
        <div className="forecast">
          <Paper zDepth={2} style={{paddingLeft: '15px', paddingRight: '15px', textIndent: '0.2em'}}>
            <p>{this.props.placeCi}, {this.props.placeSt}</p>
            <Divider />
            <p>{this.props.thisDay}'s High between 9am - 6pm: {this.props.dayHigh}°F </p>
            <Divider />
            <p>{this.props.thisDay}'s Low between 9am - 6pm: {this.props.dayLow}°F </p>
            <Divider />
            <p> Chance of rain: {this.props.dayRain}%</p>
            <Divider />
            <p id="alert"> Weather Alerts:  {this.props.dayWarnings}</p>
            <Divider />
            <p style={shrink}>{this.props.dayRecommendations}</p>
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
  weatherImg: state.weatherState.img,
  dayRecommendations: state.weatherState.recommendations
});

const mapDispatchToProps = (dispatch) => ({
  recommendStuff: () => dispatch(actions.setRecommendations())
})

export default connect(mapStateToProps, mapDispatchToProps)(Forecast);
