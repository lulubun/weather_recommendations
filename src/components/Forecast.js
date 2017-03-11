import React from 'react';
import {connect} from 'react-redux';

export class Forecast extends React.Component {
  render() {
    return (
      <div className="forecast">
        <h6>Today's High: {this.props.dayHigh} </h6>
        <h6>Today's Low: {this.props.dayLow} </h6>
        <h6>Chance of Rain: {this.props.dayRain} </h6>
        <h6>Weather Alerts:  {this.props.dayWarnings}</h6>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  console.log(state.high);
  //dayHigh: state.high;
  //dayLow: state.low;
  //dayRain: state.rain;
  //dayWarnings: state.warnings
};

export default connect(mapStateToProps)(Forecast);
