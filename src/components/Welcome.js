import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Link} from 'react-router';
import './welcome.css';

export class Welcome extends React.Component {
  render() {
    return(
      <MuiThemeProvider>
        <div className="Welcome">
          <h5>Welcome to my weather app!</h5>
          <p><Link to={'/weather'} className="weatherLink">Workday Weather</Link></p>

          <p>You might be wondering what is the point of yet another weather app? Personally, I spend a lot of time outside everyday. I have a young daughter and at the time of writing this, I work as a private nanny for two VERY active boys who need as much time running around outside as possible. I usually check the weather every day to plan what I need to wear, what I need to dress my child in, and if it’s going to rain, I probably need to figure out somewhere to go that is both indoors and is safe for kids to get some exercise in. If you have ever visited a certain well known weather forecast page, you will know this is possibly the worst webpage available on the internet.  There are other options out there but I really need only a few bits of info and waste a lot of time hunting them down. I designed this app specifically for me but can be used by moms, nannies, and pretty much anyone who spends a lot of their day outdoors. Use this app to find the important data first: high and low during the hours of 9am - 6pm, if it will rain, and any important weather alerts you will need to know for the day</p>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Welcome
