import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';

export class Clothes extends React.Component {
  componentDidMount() {
    this.props.recommendStuff()
  };

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

const mapDispatchToProps = (dispatch) => ({
  recommendStuff: () => dispatch(actions.setRecommendations())
})

export default connect(mapStateToProps, mapDispatchToProps)(Clothes)
