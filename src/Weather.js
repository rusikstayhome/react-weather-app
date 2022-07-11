import React from 'react';
import './Weather.css'

export default function Weather(props) {
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
            <h1>Warsaw</h1>
            <ul>
                <li>Wednesday 07:00</li>
                <li>Mostly Cloudy</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/rain.png" alt="" />
                    <span className='temperature'>14</span> <span className="unit">°C</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: 79%</li>
                        <li>Humidity: 72%</li>
                        <li>Wind: 2 km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}