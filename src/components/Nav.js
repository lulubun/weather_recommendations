import React from 'react';
import {Link} from 'react-router';
import Weather from './Weather';
import { connect } from 'react-redux';
import {pushState} from 'redux-react-router';
import '../index.css';

export class Nav extends React.Component {
  render() {
    return(
      <div>
        <div>
          <nav className="topBar">
            <ul>
              <li><Link to={'/'}>Workday Weather</Link></li>
              <li><Link to={'/recommendations'}>What Should I Wear Today?</Link></li>
            </ul>
          </nav>
        </div>
        <div>
          <Weather />
        </div>
      </div>
    );
  }
}

export default Nav
