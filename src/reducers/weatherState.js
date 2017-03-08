import * as actions from '../actions/index';

const initialState = {
  url: 'GA/Decatur',
  high: 0,
  low: 0,
  rain: 0,
  warnings: '',
  recommendations: ''
}

const weatherState = (state=initialState, action) => {
  switch (action.type) {
    case actions.SET_WEATHER:
    return {...state, high: action.high, low: action.low, rain: action.rain, warnings: action.warnings, recommendations: action.recommendations}

    default:
    return state
  };
}

export default weatherState
