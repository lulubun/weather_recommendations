export const SET_HIGH = 'SET_HIGH';
export const setHigh = (newHigh) => ({
  type: SET_HIGH,
  newHigh
});

export const SET_LOW = 'SET_LOW';
export const setLow = (newLow) => ({
  type: SET_LOW,
  newLow
})

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
      let num = data.hourly_forecast[0].FCTTIME.hour;
      console.log(num);
      if (num < 10) {
        let num2 = (9 - num);
        let num3 = (18 - num);
        for (var i = num2; i < num3; i++) {
          lowArr.push(data.hourly_forecast[i].temp.english)
        }
      } else if (num > 9 && num < 18) {
        for (var z = 0; z < (2^(num-9)); z++) {
          lowArr.push(data.hourly_forecast[z].temp.english)
        }
      } else if (num == 18) {
        for (var t = 15; t < 24; t++) {
          lowArr.push(data.hourly_forecast[t].temp.english)
        }
      } else if (num == 19) {
        for (var u = 14; u < 23; u++) {
          lowArr.push(data.hourly_forecast[u].temp.english)
        }
      } else if (num == 20) {
        for (var v = 13; v < 22; v++) {
          lowArr.push(data.hourly_forecast[v].temp.english)
        }
      } else if (num == 21) {
        for (var q = 12; q < 21; q++) {
          lowArr.push(data.hourly_forecast[q].temp.english)
        }
      } else if (num == 22) {
        for (var r = 11; r < 20; r++) {
          lowArr.push(data.hourly_forecast[r].temp.english)
        }
      } else if (num == 23) {
        for (var s = 10; s < 19; s++) {
          lowArr.push(data.hourly_forecast[s].temp.english)
        }
      }
      console.log(lowArr);
      for (var x = 0; x < lowArr.length; x++) {
        if (lowArr[x] < newLow) {
          newLow = lowArr[x]
        }
      }
      dispatch(setLow(newLow))
    })
    .catch(ex => console.log(ex))

    const urlSec = 'https://api.wunderground.com/api/5507ba67bf70f890/forecast/q/' + zip + '.json'
    fetch(urlSec)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      let jour = '';
      let time = new Date();
      let hour = time.getHours();
      let newRain = '';
      let newHigh = 0;
      if (hour > 18) {
        jour = data.forecast.txt_forecast.forecastday[2].title;
        newRain = data.forecast.txt_forecast.forecastday[2].pop;
        newHigh = data.forecast.simpleforecast.forecastday[1].high.fahrenheit;
      } else {
        jour = data.forecast.txt_forecast.forecastday[0].title;
        newRain = data.forecast.txt_forecast.forecastday[0].pop;
        newHigh = data.forecast.simpleforecast.forecastday[1].high.fahrenheit;
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
      dispatch(setRecommendations());
      dispatch(setHigh(newHigh));
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
