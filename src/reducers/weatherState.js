const initialState = {
  url: '',
  high: 0,
  low: 0,
  rain: 'Rain is here',
  recommendations: ''
}

const weatherState = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_TEMP':
    return {
      ...state,
      high: action.newHigh,
      low: action.newLow
    };

    case 'SET_RAIN':
    return {
      ...state,
      rain: action.freshRain}

    case 'SET_RECOMMENDATIONS':
    let freshRecs = '';
    if (state.high - state.low > 20) {
      freshRecs = 'layers, the weather is going to change'
    } else {
      freshRecs = 'Yo mama'
    }
    return {
      ...state,
      recommendations: freshRecs
    };

    default:
    return state
  }
}

export default weatherState
