import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class Clothes extends React.Component {
  render() {
    return(
      <div className="clothes">
        <p>You should wear clothes today!</p>
        {this.props.dayRecommendations}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  dayRecommendations: state.weatherState.recommendations
})

export default connect(mapStateToProps)(Clothes)
