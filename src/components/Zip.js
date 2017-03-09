import React from 'react';
import '../index.css';
import * as actions from '../actions/index';
import {connect} from 'react-redux';


export class Zip extends React.Component {
  render() {
    return (
      <div className="zip">
        <h4>Enter your zip code here for your forecast</h4>
        <form onSubmit={(event) => {
          event.preventDefault();
          const zipInput = event.target.textbox.value;
          this.props.zipAct(zipInput)
          event.target.textbox.value = '';
        }}>
          <input id="textbox" type="text" defaultValue="(ex. 30030)"/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  zipAct: (zip) => dispatch(actions.getWeather(zip))
})

export default connect(null, mapDispatchToProps)(Zip);
