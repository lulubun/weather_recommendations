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

export const SET_WARN = 'SET_WARN';
export const setWarn = (newWarn) => ({
  type: SET_WARN,
  newWarn
})

export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';
export const setRecommendations = (newRec) => ({
  type: SET_RECOMMENDATIONS,
  newRec
});

export function getWeather(zip) {
  return dispatch => {
    console.log('started');
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
      const newRain = data.forecast[0].pop;
      dispatch(setRain(newRain));
    })
    .catch(ex => console.log(ex))

    const urlThi = 'http://api.wunderground.com/api/5507ba67bf70f890/alerts/q/' + zip + '.json'
    fetch(urlThi)
    .then(response => response.json())
    .then(data => {
      let newWarn = 'No alert today';
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
  }
};

const urlWeek = ''
