import React from 'react';
import {Link} from 'react-router';
import '../index.css';
import FlatButton from 'material-ui/FlatButton';

export class Welcome extends React.Component {
  render() {
    return(
        <div className="Welcome">
          <h1 id="opener">Workday Weather</h1>
          <br></br>
          <p>To get the forecast for the working hours of 9am-6pm</p>
          <Link to={'/weather'} className="weatherLink"><FlatButton label="click here" secondary={true} /></Link>
          <div className="flex-container">
            <div className="flex-item">Do you spend a lot of time outside? Possibly with small energetic children who might even need your help dressing for the day? I do. And if it’s not nice enough out to play outside, I’m immediately planning an indoor activity for my kids to burn off excess energy.</div>
            <div className="flex-item">I found I spend an inordinate amount of time checking the weather each day and searching through all the irrelevant information available I don’t really need. I don’t really need the wind speed or sunset hour. The low temperature that will hit at 3am is nice but I need to know what the coldest temperature will be when we’re out and about so I can bring appropriate layers.</div>
            <div className="flex-item">I’ve created this app to focus only on the hours you might find yourself outside with kids to help you plan for your day. The default weather report is set for Decatur, GA, my hometown, for my own convenience, but you can easily check any area you’re interested in by entering the zip. Get outside and enjoy!</div>
          </div>
        </div>
    )
  }
}

export default Welcome
