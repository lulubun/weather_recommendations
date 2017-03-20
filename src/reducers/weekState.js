const initialState = {
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
        day1: action.dayFirst,
        day2: action.daySecond,
        day3: action.dayThird
      };
    case 'SET_TXT_WE':
      return {
        ...state,
        day1for: action.day1txt,
        day2for: action.day2txt,
        day3for: action.day3txt
      }

    default:
    return state
  }
}

export default WeekState
