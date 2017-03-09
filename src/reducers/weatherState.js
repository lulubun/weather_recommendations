import * as actions from '../actions/index';

const initialState = {
  url: '',
  high: 0,
  low: 0,
  rain: 'Rain is happeneing',
  recommendations: ''
}

const weatherState = (state=initialState, action) => {
  switch (action.type) {
    case actions.highTemp:
    return {...state, high: action.high}

    case actions.lowTemp:
    return {...state, low:action.low}

    case actions.setRain:
    return {...state, rain:action.rain}

    case actions.setRecommendations:
    return {...state, recommendations: action.recommendations}

    default:
    return state
  };
}

export default weatherState
