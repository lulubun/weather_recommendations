import React from 'react';
import {Link} from 'react-router';
import '../index.css';
import FlatButton from 'material-ui/FlatButton';
import Nav from './Nav'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


export class Welcome extends React.Component {
  render() {
    return(
      <div>
        <div className="Welcome">
          <h1 id="opener">Workday Weather</h1>
        <div className="intro">
          <div className="explain">
            <img className="icon"  id="umbrella" alt="umbrella" src={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Keepdry.svg/300px-Keepdry.svg.png'} />
            <p>Know what you will need for the day ahead</p>
          </div>
          <div className="explain">
            <img className="icon" alt="baby" id="baby" src={'http://iconbug.com/data/3c/256/14e322f2744d3eb3aa4b106bacd35bfe.png'} />
            <p>Know the weather during the hours your children could be outside</p>
          </div>
          <div className="explain">
            <img className="icon" id="temp" alt="temp" src={'http://tdhafner.ru/wp-content/uploads/2016/12/thermometer-1_icon-icons.com_65087-150x150.png'} />
            <p>Get a clear and simple weather forecast</p>
          </div>
        </div>
      </div>
        <Nav />

      </div>
    )
  }
}

export default Welcome
