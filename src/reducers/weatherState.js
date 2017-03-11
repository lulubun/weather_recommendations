const initialState = {
  url: '',
  high: 0,
  low: 0,
  rain: 'Rain is happeneing',
  recommendations: ''
}

const weatherState = (state=initialState, action) => {
  switch (action.type) {
    case 'HIGH_TEMP':
    const freshHigh = action.high;
    return {
      ...state,
      high: freshHigh
    };

    case 'LOW_TEMP':
    const freshLow = action.low;
    return {
      ...state,
      low:freshLow
    };

    case 'SET_RAIN':
    const freshRain = action.rain;
    return {
      ...state,
      rain: freshRain}

    case 'SET_RECOMMENDATIONS':
    const freshRecs = action.recommendations;
    return {
      ...state,
      recommendations: freshRecs
    };

    default:
    return state
  }
}

export default weatherState
