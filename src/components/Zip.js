import React from 'react';
import * as actions from '../actions/index';
import {connect} from 'react-redux';


export class Zip extends React.Component {
  render() {
    return (
      <div className="zip">
        <p>Enter your zip code here for your forecast</p>
        <form onSubmit={(event) => {
          event.preventDefault();
          const zipInput = event.target.textbox.value;
          this.props.zipAct(zipInput)
          this.props.storeZip(zipInput)
          event.target.textbox.value = '';
        }}>
          <input name="textbox" id="textbox" type="text" placeholder="(ex 30030)"/>
          <input id="go" type="submit" value="Go!"/>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  zipAct: (zip) => dispatch(actions.getWeather(zip)),

  storeZip: (zipInput) => dispatch(actions.setUrl(zipInput))
})

export default connect(null, mapDispatchToProps)(Zip);
