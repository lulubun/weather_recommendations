import React from 'react';
import {Link} from 'react-router';
import {Tab, Tabs} from 'material-ui/Tabs';
import Welcome from '../components/Welcome';
import Weather from '../components/Weather';
import Clothes from '../components/Clothes';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const AllTabs = () => (
  <Tabs>
    <Tab
      label="Welcome"
      data-route="/"
    >
    <Welcome />
    </Tab>
    <Tab
      label="Weather"
      data-route="/weather"
    >
      <div>
      <Weather />
    </div>
    </Tab>
    <Tab label="What should I wear today?" >
      <div>
        <Clothes />
      </div>
    </Tab>
  </Tabs>
)

export class Nav extends React.Component {
  render() {
    return(
        <div>
          <AllTabs />
        </div>
    );
  }
}

export default Nav
