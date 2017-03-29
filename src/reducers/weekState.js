const initialState = {
  day1: 'day 1',
  day2: '',
  day3: '',
  day4: '',
  day5: '',
  day6: '',
  day7: '',
  day1for: 'The sun will rise',
  day2for: '',
  day3for: '',
  day4for: '',
  day5for: '',
  day6for: '',
  day7for: ''
}

const WeekState = (state=initialState, action) => {
  switch (action.type) {
    case 'SET_DAY':
      return {
        ...state,
        day1: action.dayFirst,
        day2: action.daySecond,
        day3: action.dayThird,
        day4: action.dayFourth,
        day5: action.dayFifth,
        day6: action.daySixth,
        day7: action.daySeventh
      };
    case 'SET_TXT_WE':
      return {
        ...state,
        day1for: action.day1txt,
        day2for: action.day2txt,
        day3for: action.day3txt,
        day4for: action.day4txt,
        day5for: action.day5txt,
        day6for: action.day6txt,
        day7for: action.day7txt
      }

    default:
    return state
  }
}

export default WeekState
