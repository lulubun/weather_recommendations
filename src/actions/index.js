export const HIGH_TEMP = 'HIGH_TEMP';
export const highTemp = (newHigh) => ({
  type: HIGH_TEMP,
  newHigh
});

export const LOW_TEMP = 'LOW_TEMP';
export const lowTemp = (newLow) => ({
  type: LOW_TEMP,
  newLow
});

export const SET_RAIN = 'SET_RAIN';
export const setRain = (newRain) => ({
  type: SET_RAIN,
  newRain
});

export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';
export const setRecommendations = (newRec) => ({
  type: SET_RECOMMENDATIONS,
  newRec
});

export function getDecatur() {
  return dispatch => {
    const url = 'api.openweathermap.org/data/2.5/forecast?id=4191124&units=imperial&APPID=6d491ba0f668b255229bc7d3201cc125'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      const newHigh = data.main.temp_max;
      newHigh => dispatch(highTemp(newHigh));
      const newLow = data.main.temp_min;
      newLow => dispatch(lowTemp(newLow));
      const newRain = data.weather.description;
      newRain => dispatch(setRain(newRain));
    })
    .catch(ex => console.log(ex))
  }
};

export function getWeather(zip) {
  return dispatch => {
    const url = 'api.openweathermap.org/data/2.5/forecast?zip=' + {zip} + '&units=imperial&APPID=6d491ba0f668b255229bc7d3201cc125'
    fetch(url)
    .then(response => response.json())
    //.then(data => dispatch(handleRes(data)))
    .catch(ex => console.log(ex))
  }
};
