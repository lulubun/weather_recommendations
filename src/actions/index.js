export const SET_TEMP = 'SET_TEMP';
export const setTemp = (newHigh, newLow) => ({
  type: SET_TEMP,
  newHigh,
  newLow
});

export const SET_RAIN = 'SET_RAIN';
export const setRain = (newRain) => ({
  type: SET_RAIN,
  newRain
});

export const SET_TODAY ='SET_TODAY';
export const setToday = (jour) => ({
  type: SET_TODAY,
  jour
});

export const SET_WARN = 'SET_WARN';
export const setWarn = (newWarn) => ({
  type: SET_WARN,
  newWarn
})

export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';
export const setRecommendations = () => ({
  type: SET_RECOMMENDATIONS
});

export const SET_SEA = 'SET_SEA';
export const setSea = () => ({
  type: SET_SEA
});

export const SET_DAY = 'SET_DAY';
export const setDay = (dayFirst, daySecond, dayThird) => ({
  type: SET_DAY,
  dayFirst,
  daySecond,
  dayThird
});

export const SET_TXT_WE = 'SET_TXT_WE';
export const setWeekTxt = (day1txt, day2txt, day3txt) => ({
  type: SET_TXT_WE,
  day1txt,
  day2txt,
  day3txt
})

export function getWeather(zip) {
  return dispatch => {
    const url = 'https://api.wunderground.com/api/5507ba67bf70f890/hourly/q/' + zip + '.json'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let newLow = 100;
      let lowArr = [];
      if (data.hourly_forecast[0].FCTTIME.hour === '0') {
        for (var i = 8; i < 18; i++) {
          lowArr.push(data.hourly_forecast[i].temp.english)
        }
      } else if (data.hourly_forecast[0].FCTTIME.hour === '1') {
        for (var j = 9; j < 19; j++) {
          lowArr.push(data.hourly_forecast[j].temp.english)
        }
      } else if (data.hourly_forecast[0].FCTTIME.hour === '2') {
        for (var k = 10; k < 20; k++) {
          lowArr.push(data.hourly_forecast[k].temp.english)
        }
      } else if (data.hourly_forecast[0].FCTTIME.hour === '3') {
        for (var l = 11; l < 21; l++) {
          lowArr.push(data.hourly_forecast[l].temp.english)
        }
      } else if (data.hourly_forecast[0].FCTTIME.hour === '4') {
        for (var m = 12; m < 22; m++) {
          lowArr.push(data.hourly_forecast[m].temp.english)
        }
      } else if (data.hourly_forecast[0].FCTTIME.hour === '5') {
        for (var n = 13; n < 23; n++) {
          lowArr.push(data.hourly_forecast[n].temp.english)
        }
      }
      for (var x = 0; x < lowArr.length; x++) {
        if (lowArr[x] < newLow) {
          newLow = lowArr[x]
        }
      }
      dispatch(setTemp(newLow))
    })
    .catch(ex => console.log(ex))

    const urlSec = 'https://api.wunderground.com/api/5507ba67bf70f890/forecast/q/' + zip + '.json'
    fetch(urlSec)
    .then(response => response.json())
    .then(data => {
      let jour = '';
      let time = new Date();
      let hour = time.getHours();
      let newRain = '';
      let newHigh = 0;
      if (0 <= hour <= 18) {
        jour = data.forecast.txt_forecast.forecastday[0].title;
        newRain = data.forecast.txt_forecast.forecastday[0].pop;
        newHigh = data.forecast.simpleforecast.forecastday[1].high.fahrenheit;
      } else {
        jour = data.forecast.txt_forecast.forecastday[2].title;
        newRain = data.forecast.txt_forecast.forecastday[2].pop;
        newHigh = data.forecast.simpleforecast.forecastday[2].high.fahrenheit;
      }
      const dayFirst = data.forecast.txt_forecast.forecastday[2].title;
      const day1txt = data.forecast.txt_forecast.forecastday[2].fcttext;
      const daySecond = data.forecast.txt_forecast.forecastday[4].title;
      const day2txt = data.forecast.txt_forecast.forecastday[4].fcttext;
      const dayThird = data.forecast.txt_forecast.forecastday[6].title;
      const day3txt = data.forecast.txt_forecast.forecastday[6].fcttext;
      dispatch(setDay(dayFirst, daySecond, dayThird));
      dispatch(setWeekTxt(day1txt, day2txt, day3txt));
      dispatch(setRain(newRain));
      dispatch(setToday(jour));
      dispatch(setRecommendations())
      dispatch(setTemp(newHigh))
    })
    .catch(ex => console.log(ex))

    const urlThi = 'https://api.wunderground.com/api/5507ba67bf70f890/alerts/q/' + zip + '.json';
    fetch(urlThi)
    .then(response => response.json())
    .then(data => {
      let newWarn = 'No alerts for today';
      if (data.alerts[0]) {
      newWarn = data.alerts[0].message;
      if(data.alerts[1]) {
        newWarn += data.alerts[1]
      }
      if (data.alerts[2]) {
        newWarn += data.alerts[2]
      }}
      dispatch(setWarn(newWarn));
    })

    const urlWeek = 'https://api.wunderground.com/api/5507ba67bf70f890/forecast/q/' + zip + '.json';
    fetch(urlWeek)
    .then(response => response.json())
    .then(data => {

    })

  }
};
