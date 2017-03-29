import React from 'react';
import {connect} from 'react-redux';
import '../index.css';

export class Clothes extends React.Component {

  render() {
    return(
      <div className="clothes">
        <h1>{this.props.dayRecommendations}</h1>
        <p id="sidebar">Here's a recommendation to help you prepare for the day. Please bear in mind this is all from a southerner who has never seen more than maybe a foot of snow ever in real life so if you live somewhere colder, just giggle at my need for a snowsuit in any temp below 35°F...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  dayRecommendations: state.weatherState.recommendations
})

export default connect(mapStateToProps)(Clothes)
