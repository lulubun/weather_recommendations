import React from 'react';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

let zipInput = ''

export class Zip extends React.Component {
  render() {
    return (
      <div className="zip">
        <p>Enter your zip code here for your forecast</p>
        <form>
          <TextField hintText="ex 30030" name="textbox" onChange={(event, newValue) => zipInput= newValue} />
          <RaisedButton label="Go!" secondary={true} style={style} onTouchTap={this.props.zipAct(zipInput)}	/>
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  zipAct: (zipInput) => dispatch(actions.getWeather(zipInput))
})

export default connect(null, mapDispatchToProps)(Zip);
