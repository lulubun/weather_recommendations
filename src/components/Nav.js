import React from 'react';
import {Tab, Tabs} from 'material-ui/Tabs';
import Weather from '../components/Weather';
import Week from '../components/Week';
import Now from '../components/Now';



const AllTabs = () => (
  <Tabs>
    <Tab
      label="Weather"
      data-route="/weather"
    >
      <div>
      <Weather />
    </div>
    </Tab>
    <Tab label="Week Ahead" >
      <div>
        <Week />
      </div>
    </Tab>
    <Tab label="Right Now" >
      <div>
        <Now />
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
