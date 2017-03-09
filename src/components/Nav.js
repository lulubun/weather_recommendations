import React from 'react';
import {Link} from 'react-router';
import '../index.css';

export class Nav extends React.Component {
  render() {
    return(
      <div>
        <nav className="topBar">
          <ul>
            <li><Link to={'/'}>Workday Weather</Link></li>
            <li><Link to={'/recommendations'}>What Should I Wear Today?</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav
