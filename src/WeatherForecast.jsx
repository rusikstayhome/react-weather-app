import React, { useState } from 'react';

import './WeatherForecast.css';
import axios from 'axios';
import Weather from './Weather';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className='WeatherForecast mt-3'>
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col-2">
                  <WeatherForecastDay data={forecast[index + 1]} />
                </div>
              )
            }
          })}

        </div>
      </div >
    )
  } else {

    let apiKey = '8630f47d4a0a4c592e1aa1b9ccf18bd2';
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = ` https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;


    axios.get(apiUrl).then(handleResponse);

    return 'Loading';
  }


}