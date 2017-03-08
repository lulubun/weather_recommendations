export const SET_WEATHER = 'SET_WEATHER';
export const setWeather = (forecast) => ({
  type: SET_WEATHER,
  forecast
});

{/*export function handleRes(data) {
  return dispatch => {
    const high = parsed_json['forecast']['simpleforecast']['forecastday']['high']['fahrenheit'];
    const low = parsed_json['forecast']['simpleforecast']['forecastday']['low']['fahrenheit'];
    const rain = parsed_json['forecast']['simpleforecast']['forecastday']['qpf_day']['in'];

  }
}*/}

export function getDecatur(decZip) {
  return dispatch => {
    const url = 'http://api.wunderground.com/api/5507ba67bf70f890/hourly/q/GA/Decatur.json'
    fetch(url)
    .then(response => response.json())
    //.then(data => dispatch(handleRes(data)))
    .catch(ex => console.log(ex))
  }
};

export function getWeather(urlEnd) {
  return dispatch => {
    const url = 'http://api.wunderground.com/api/5507ba67bf70f890/hourly/q/' + {urlEnd} + '.json'
    fetch(url)
    .then(response => response.json())
    //.then(data => dispatch(handleRes(data)))
    .catch(ex => console.log(ex))
  }
};
