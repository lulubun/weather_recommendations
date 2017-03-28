import React from 'react';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

let zipInput = ''
let starter = 'ex 30030'

export class Zip extends React.Component {
  render() {
    return (
      <div className="zip">
        <p>Enter your zip code here for your forecast</p>
        <form >
          <TextField id="text" hintText={starter} name="textbox" onChange={(event, newValue) => {
            zipInput = newValue
          }}/>
          <RaisedButton label="Go!" secondary={true} style={style} onTouchTap={(event) => {
            this.props.zipAct(zipInput);
            document.getElementById('text').value = '';
          }} />
        </form>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  zipAct: (zipInput) => dispatch(actions.getWeather(zipInput))
})

export default connect(null, mapDispatchToProps)(Zip);
