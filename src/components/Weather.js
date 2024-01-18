import React from 'react';
import '/Users/cathalcoulter/Documents/weather_app/src/App.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';


const date = () => {
  return (
    moment().format('LL LT')
  )
}


const refresh = () => {
  window.location.reload();
}

const CardExampleCard = ({weatherData}) => (
  <div className="main">
          <div className="top">

      <p className="header">{weatherData.name}</p>
      <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
</div>

      <div className="flex">
        <p className="day">Day: {moment().format('dddd')}</p>
        <p className="day">{date()}</p>
        <p className="description">{weatherData.weather[0].main}</p>

      </div>

      <div className="flex">
        <p className="temp">Temprature: {((weatherData.main.temp)-273.15).toFixed(1)} &deg;C</p>
        <p className="temp">Humidity: {weatherData.main.humidity} %</p>
      </div>

      <div className="flex">
        <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN', {hour: 'numeric', minute: 'numeric', hour12: false})}</p>
        <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN', {hour: 'numeric', minute: 'numeric', hour12: false})}</p>
      </div>
      
      
  </div>
)

export default CardExampleCard;