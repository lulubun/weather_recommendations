import React from 'react';
import {Link} from 'react-router';
import '../index.css';
import FlatButton from 'material-ui/FlatButton';

export class Welcome extends React.Component {
  render() {
    return(
      <div>
        <div className="Welcome">
          <h1 id="opener">Workday Weather</h1>
          <br></br>
          <p>To get the forecast for the working hours of 9am-6pm</p>
          <Link to={'/weather'} className="weatherLink"><FlatButton label="click here" secondary={true} /></Link>
        </div>
        <div id="umbrella">
          <img className="icon" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Keepdry.svg/300px-Keepdry.svg.png'} />
        </div>
        <div id="suitcase">
          <img className="icon" src={'https://upload.wikimedia.org/wikipedia/commons/2/22/Noun_project_401.svg'} />
        </div>
        <div id="temp">
          <img className="icon" src={'http://tdhafner.ru/wp-content/uploads/2016/12/thermometer-1_icon-icons.com_65087-150x150.png'} />
        </div>
      </div>
    )
  }
}

export default Welcome
