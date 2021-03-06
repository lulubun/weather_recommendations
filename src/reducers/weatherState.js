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
  rightNowIcon: '',
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
      rightNowFeels: action.nowFeels,
      rightNowIcon: action.nowIcon,
    }

    case 'SET_RECOMMENDATIONS':
    let freshRecs = '';
    if (state.rain > 50) {
      freshRecs = 'You will need an umbrella, rain coat, galoshes, and maybe a boat'
    } else if (state.rain > 30) {
      freshRecs = 'Bring an umbrella, just in case '
    } else if (state.high - state.low > 20) {
      freshRecs = 'Wear layers, the weather is going to change'
    } else if (state.high > 90) {
      freshRecs = 'Wear as little as you can, you are going to boil alive'
    } else if (state.high > 85) {
      freshRecs = 'It will be hot but you will survive in shorts and a tanktop'
    } else if (state.high > 80) {
      freshRecs = 'It will be warm but nice, wear light clothes'
    } else if (state.high < 79 && state.low > 60) {
      freshRecs = 'It will be perfect outside so get outside as soon as you can!'
    } else if (state.low < 59 && state.high < 65) {
      freshRecs = 'It will be chilly, wear pants'
    } else if (state.low < 30) {
      freshRecs = 'It is actually freezing outside. Wear everything you own'
    } else if (state.low < 20 && state.high < 35) {
      freshRecs = 'Just take a dog sled to work'
    } else if (state.low < 40) {
      freshRecs = 'Bundle up, unless you just really like the cold'
    } else if (state.low < 50) {
      freshRecs = 'Wear a warm coat'
    } else if (state.low < 60) {
      freshRecs = 'Bring a sweater'
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
