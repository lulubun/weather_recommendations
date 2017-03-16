import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import '../index.css'

export class Clothes extends React.Component {
  componentDidMount() {
    this.props.recommendStuff()
  };

  render() {
    return(
      <div className="clothes">
        <p>Here are recommendations for what you should wear or bring to prepare for the day</p>
        <p id="sidebar"> Please bear in mind this is all from a southerner who has never seen more than maybe a foot of snow ever in real life so if you live somewhere colder, just giggle at my need for a snowsuit in weather above 0°F</p>
        <h3>{this.props.dayRecommendations}</h3>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  dayRecommendations: state.weatherState.recommendations
})

const mapDispatchToProps = (dispatch) => ({
  recommendStuff: () => dispatch(actions.setRecommendations())
})

export default connect(mapStateToProps, mapDispatchToProps)(Clothes)
