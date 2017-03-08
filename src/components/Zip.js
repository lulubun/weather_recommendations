import React from 'react';
import '../index.css';
import * as actions from '../actions/index';
import {connect} from 'react-redux';


export class Zip extends React.Component {
  render() {
    return (
      <div className="zip">
        <h4>Enter your location here for your forecast</h4>
        <form onSubmit={(event) => {
          event.preventDefault();
          const zipInput = event.target.textbox.value;
          const parseState = zipInput.slice(-2);
          const zipLength = zipInput.length;
          const citylength = zipLength - 4;
          const parseCity = zipInput.slice(0, citylength);
          const urlEnd = parseState + '/' + parseCity;
          this.props.zipAct(urlEnd)
          event.target.textbox.value = '';
        }}>
          <input id="textbox" type="text" defaultValue="City, State (ex. Dallas, TX)"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  zipAct: (urlEnd) => dispatch(actions.getWeather(urlEnd))
})

export default connect(null, mapDispatchToProps)(Zip);
