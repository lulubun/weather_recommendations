import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Link} from 'react-router';
import '../index.css'

export class Welcome extends React.Component {
  render() {
    return(
        <div className="Welcome">
          <h1 id="opener">Workday Weather</h1>
          <br></br>
          <p>To get the forecast for the working hours of 9am-6pm<Link to={'/weather'} className="weatherLink">click here</Link></p>
        </div>
    )
  }
}

export default Welcome
