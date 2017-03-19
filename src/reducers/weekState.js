const initialState = {
  url: '',
  day1: 'day 1',
  day2: '',
  day3: '',
  day1for: 'The sun will rise',
  day2for: '',
  day3for: ''
}

const WeekState = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_DAY':
      return {
        ...state,
        day1: action.dayOne,
        day2: action.dayTwo,
        day3: action.dayThree
      };
    case 'SET_TXT_WE':
      return {
        ...state,
        day1for: action.dayOneFor,
        day2for: action.dayTwoFor,
        day3for: action.dayThreeFor
      }

      break;

    default:
    return state
  }
}

export default WeekState
