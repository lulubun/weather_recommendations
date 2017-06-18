<h1>Workday Weather</h1>
<p><a href="https://workday-weather.herokuapp.com/">Workday Weather</a> is a responsive full-stack app that provides the weather forecast during the hours of 9am - 6pm.</p>
<img src="responsiveWeather2.png">

## Getting started
### Installing
```
>   git clone https://github.com/lulubun/weather_recommendations.git
>   cd weather_recommendations
>   npm install
```
### Launching
```
>   npm start
```
This should automatically open [`localhost:3000`](http://localhost:3000) in a browser.

<h2>Introduction</h2>
<p>If you have ever used a popular website that shall remain unnamed to check your weather forecast, you might have noticed that the site is extremely slow to load and full of videos, adds, and useless information that make using this page frustrating.</p>
<p>I have a small child and especially when she was very little, I wanted to know the high and the low for the day before I got her dressed so I would know if it was likely to be extremely cold or hot all day or if it was likely to change enough that she would need layers.
I noticed that the low temperature of a weather forecast doesn't wind up being very useful since the lowest temperature is usually reached sometime during the middle of the night. I created a custom function that searches through the weather forecast returned from the wunderground API
to return the lowest temperature during the hours of 9am - 6pm so that you can dress for the day based on that data.</p>
<p>Since this app was created to make my life easier, the default city is my hometown making this app my one stop for a complete weather forecast. For the convenience of others, you can enter a zip code to check any location.</p>

<h2>Tech Stack</h2>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>React</li>
</ul>

<h3>Responsive</h3>
<ul>
  <li>The app is fully responsive and quickly adapts to all mobile, tablet, and desktop viewports.</li>
</ul>

<h3>Attribution</h3>
<p>Weather Data</p>
<ul>
  <li><a href="https://www.wunderground.com/weather/api/">Wunderground API</a></li>
</ul>  
<p>Component Styling</p>
<ul>
  <li><a href="http://www.material-ui.com/">Material UI</a></li>
</ul>  
<p>App Bootstrap</p>
<ul>
  <li><a href="https://github.com/facebookincubator/create-react-app">Create React App</a></li>
</ul>  
