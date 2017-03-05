export const SET_WEATHER = 'SET_WEATHER';
export const setWeather = (forecast) => ({
  type: SET_WEATHER,
  forecast
});

export function getDecatur(decZip) {
  return dispatch => {
    const url = 'http://api.wunderground.com/api/5507ba67bf70f890/conditions/q/GA/Decatur.json'
    fetch(url)
    .then(response => response.json())
    .then(data => dispatch(setWeather(data)))
    .catch(ex => console.log(ex))
  }
};

export function getWeather(zip) {
  {/*return dispatch => {
    const url = 'http://api.wunderground.com/api/5507ba67bf70f890/conditions/q/' + {state} + '/' + {city} + '.json'
    .then(response = response.json())
    .then(data => dispatch(setWeather(data), recommend(data)))
    .catch(ex => console.log(ex))
  }*/}
};
