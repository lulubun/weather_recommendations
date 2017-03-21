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
    const url = 'http://api.openweathermap.org/data/2.5/forecast?zip=' + zip + '&units=imperial&APPID=6d491ba0f668b255229bc7d3201cc125'
    fetch(url)
    .then(response => response.json())
    .then(data => {
      let newHigh = 0;
      let newLow = 100;
      let highArr = [];
      let lowArr = [];
      for (var l = 0; l < data.list.length; l++) {
       highArr.push(data.list[l].main.temp_max);
       lowArr.push(data.list[l].main.temp_min)
      }

      if (data.list[0].dt_txt.slice(11) === '00:00:00') {
        highArr = highArr.slice(3, 7);
        lowArr = lowArr.slice(3, 7);
      } else if (data.list[0].dt_txt.slice(11) === '03:00:00') {
        highArr = highArr.slice(2, 6);
        lowArr = lowArr.slice(2, 6);
      } else if (data.list[0].dt_txt.slice(11) === '06:00:00') {
        highArr = highArr.slice(1, 5);
        lowArr = lowArr.slice(1, 5);
      } else if (data.list[0].dt_txt.slice(11) === '09:00:00') {
        highArr = highArr.slice(0, 4);
        lowArr = lowArr.slice(0, 4);
      } else if (data.list[0].dt_txt.slice(11) === '12:00:00') {
        highArr = highArr.slice(0, 3);
        lowArr = lowArr.slice(0, 3);
      } else if (data.list[0].dt_txt.slice(11) === '15:00:00') {
        highArr = highArr.slice(0, 2);
        lowArr = lowArr.slice(0, 2);
      } else if (data.list[0].dt_txt.slice(11) === '18:00:00') {
        highArr = highArr.slice(0, 1);
        lowArr = lowArr.slice(0, 1);
      } else if (data.list[0].dt_txt.slice(11) === '21:00:00') {
        highArr = highArr.slice(4, 8);
        lowArr = lowArr.slice(4, 8);
      }
      for (var m = 0; m < highArr.length; m++) {
        if (highArr[m] > newHigh) {
          newHigh = highArr[m];
        }
      }
      for (var n = 0; n < lowArr.length; n++) {
        if (lowArr[n] < newLow) {
          newLow = lowArr[n];
        }
      }
      dispatch(setTemp(newHigh, newLow));
    })
    .catch(ex => console.log(ex))

    const urlSec = 'http://api.wunderground.com/api/5507ba67bf70f890/forecast/q/' + zip + '.json'
    fetch(urlSec)
    .then(response => response.json())
    .then(data => {
      let jour = '';
      let time = new Date();
      let hour = time.getHours();
      let newRain = '';
      if (0 <= hour <= 18) {
        jour = data.forecast.txt_forecast.forecastday[0].title;
        newRain = data.forecast.txt_forecast.forecastday[0].pop;
      } else {
        jour = data.forecast.txt_forecast.forecastday[2].title;
        newRain = data.forecast.txt_forecast.forecastday[2].pop;
      }
      dispatch(setRain(newRain));
      dispatch(setToday(jour));
      dispatch(setRecommendations())
    })
    .catch(ex => console.log(ex))

    const urlThi = 'http://api.wunderground.com/api/5507ba67bf70f890/alerts/q/' + zip + '.json';
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

    const urlWeek = 'http://api.wunderground.com/api/5507ba67bf70f890/forecast/q/' + zip + '.json';
    fetch(urlWeek)
    .then(response => response.json())
    .then(data => {
      const dayFirst = data.forecast.txt_forecast.forecastday[2].title;
      const day1txt = data.forecast.txt_forecast.forecastday[2].fcttext;
      const daySecond = data.forecast.txt_forecast.forecastday[4].title;
      const day2txt = data.forecast.txt_forecast.forecastday[4].fcttext;
      const dayThird = data.forecast.txt_forecast.forecastday[6].title;
      const day3txt = data.forecast.txt_forecast.forecastday[6].fcttext;
      dispatch(setDay(dayFirst, daySecond, dayThird));
      dispatch(setWeekTxt(day1txt, day2txt, day3txt));
    })

  }
};
