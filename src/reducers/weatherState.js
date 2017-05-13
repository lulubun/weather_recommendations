const initialState = {
  today: 'Today',
  city: 'City',
  place: 'State',
  url: 30030,
  high: 0,
  low: 0,
  rain: 0,
  weatherAlerts: 'No alerts today',
  recommendations: '',
  season: '',
  rightNow: 0,
  rightNowFeels: 0,
  img: ''
}

const weatherState = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_CITY':
    return {
      ...state,
      city: action.newCity,
      place: action.newState
    };

    case 'SET_HIGH':
    return {
      ...state,
      high: action.newHigh
    };

    case 'SET_LOW':
    return {
      ...state,
      low: action.newLow
    }

    case 'SET_RAIN':
    return {
      ...state,
      rain: action.newRain
    };

    case 'SET_TODAY':
    return {
      ...state,
      today: action.jour
    };

    case 'SET_WARN':
    return {
      ...state,
      weatherAlerts: action.newWarn
    };

    case 'SET_IMG':
    return {
      ...state,
      img: action.icon
    }

    case 'SET_NOW':
    return {
      ...state,
      rightNow: action.now,
      rightNowFeels: action.nowFeels
    }


    default:
    return state
  }
}

export default weatherState
