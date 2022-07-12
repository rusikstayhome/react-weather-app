import React, { useState } from 'react';
import axios from 'axios';
import './Weather.css'

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            iconUrl: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
            date: 'Wednesday 7:00'
        });
    }


    if (weatherData.ready) {
        return (
            <div className='Weather'>

                <form >
                    <div className="row">
                        <div className="col-8">
                            <input type="search" placeholder='Type a city..' autoFocus="on" className='form-control' />
                        </div>
                        <div className="col-4">
                            <input type="submit" value='Search' className='btn btn-primary w-100' />
                        </div>
                    </div>
                </form>
                <h1>{weatherData.city}</h1>
                <ul>
                    <li>{weatherData.date}</li>
                    <li className='text-capitalize'>{weatherData.description}</li>
                </ul>
                <div className="row mt-3">
                    <div className="col-6">
                        <img src={weatherData.iconUrl} alt={weatherData.description} />
                        <span className='temperature'>{Math.round(weatherData.temperature)}</span> <span className="unit">°C</span>
                    </div>
                    <div className="col-6">
                        <ul>
                            <li>Humidity: {weatherData.humidity}%</li>
                            <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        const apiKey = 'b4e5671cab86d3aadb0d688766b69716';
        let city = 'London';
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);

        return 'Loading...'
    }



}