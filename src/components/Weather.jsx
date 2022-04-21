import React, { useState, useEffect } from 'react'
import '../styles/Weather.css'
import WeatherImg from '../assets/main-screen.png'
import axios from 'axios'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {WiHumidity} from 'react-icons/wi'
import {BsWind} from 'react-icons/bs'
import {FaTemperatureLow} from 'react-icons/fa'
import {FaTemperatureHigh} from 'react-icons/fa'
import {RiTempHotLine} from 'react-icons/ri'

function Weather() {

    const [weatherData, setWeatherData] = useState([])

    const [search, setSearch] = useState('')

    const [city, setCity] = useState('')

    const [mount, setMounth] = useState(['January','February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])

    const [week, setWeek] = useState(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])

    const [showCss, setShowCss] = useState(true)

    const [dataStatus, setDataStatus] = useState('')

    const [displayBlock, setDisplayBlock] = useState('')

    const SearchHandler = (e) =>{
        setSearch(e.target.value)
    }
    
    const API_KEY = "1a78b7b90aa25ff77b2ad7219be7129c"

    const handlerClick = async() =>{
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`)
        .then(respons => {
            console.log(respons)
            setDataStatus(respons.status)
            setWeatherData(respons.data)
            
        })
        .catch(error => {

            setDataStatus(error.toJSON().status)

        })


        setCity(search)
    }

  

    
    console.log(dataStatus)

    const SubmitHandler = (e) =>{
        e.preventDefault()
    }
    

    return (
        <div>
            <div className="search-center">
                <div className="search">
                    <form onSubmit={SubmitHandler}>
                        <input className="city" placeholder="City" onChange={SearchHandler} type="text" />
                        <input className="submit" onClick={handlerClick} type="submit" value="Sub" />
                    </form>
                </div>
            </div>

            
            {(dataStatus === 404 || dataStatus === 200) ? null :
            <div className="img-block">
                <img src={WeatherImg} className="main-img" width="450px" height="450px" alt="" />
            </div>
            }


            {(dataStatus === 404) ?
            <div style={{textAlign: 'center', marginTop: '100px', fontFamily: 'Rokkitt, serif'}}>
                <h1>NO RESULTS</h1>
            </div>
            : null
            }

            {(typeof weatherData.main != "undefined" && dataStatus === 200) ? (

            <div className="weather">
                <div className="main-block">
                    <div className="first-block">
                        <p className="week">{week[new Date().getDay() - 1]}</p>
                        <p className="day">{mount[new Date().getMonth()]} {new Date().getDate()}</p>
                        <p className="location"><HiOutlineLocationMarker color="white" className="location-img"/> {city}</p>
                        <p className="degree d-f"><RiTempHotLine/>{Math.floor(weatherData.main.temp - 273.15)} <span>&#8451;</span></p>
                        <p className="weather-desc">{weatherData.weather[0].description}</p>
                    </div>
                    <div className="second-block">
                        <div className="humidity-block d-f-s-b">
                            <p className="desc">HUMIDITY</p>
                            <p className="desc-props d-f"><WiHumidity/>{weatherData.main.humidity}%</p>
                        </div>
                        <div className="wind-block d-f-s-b">
                            <p className="desc">WIND</p>
                            <p className="desc-props d-f"><BsWind/>{weatherData.wind.speed} km/h</p>
                        </div>
                        <div className="pressure-block d-f-s-b">
                            <p className="desc">AIR PRESSURE</p>
                            <p className="desc-props d-f">{weatherData.main.pressure} mb</p>
                        </div>
                        <div className="max-temp-block d-f-s-b">
                            <p className="desc">MAX TEMP</p>
                            <p className="desc-props d-f"><FaTemperatureHigh/>{Math.floor(weatherData.main.temp_max - 273.15)}<span>&#8451;</span></p>
                        </div>
                        <div className="min-temp-block d-f-s-b">
                            <p className="desc">MIN TEMP</p>
                            <p className="desc-props d-f"><FaTemperatureLow/>{Math.floor(weatherData.main.temp_min - 273.15)}<span>&#8451;</span></p>
                        </div>
                    </div>
                </div>

                {/* 

                MOBILE RESPONSE 
                
                */}

                <div className="main-block-xs">
                    <div className="first-block-xs">
                        <p className="week">{week[new Date().getDay() - 1]}</p>
                        <p className="day">{mount[new Date().getMonth()]} {new Date().getDate()}</p>
                        <p className="location"><HiOutlineLocationMarker color="white" className="location-img"/> {city}</p>
                        <p className="degree d-f"><RiTempHotLine/>{Math.floor(weatherData.main.temp - 273.15)} <span>&#8451;</span></p>
                        <p className="weather-desc">{weatherData.weather[0].description}</p>
                    </div>
                    <div className="second-block-xs">
                        <div className="humidity-block d-f-s-b">
                            <p className="desc">HUMIDITY</p>
                            <p className="desc-props d-f"><WiHumidity/>{weatherData.main.humidity}%</p>
                        </div>
                        <div className="wind-block d-f-s-b">
                            <p className="desc">WIND</p>
                            <p className="desc-props d-f"><BsWind/>{weatherData.wind.speed} km/h</p>
                        </div>
                        <div className="pressure-block d-f-s-b">
                            <p className="desc">AIR PRESSURE</p>
                            <p className="desc-props d-f">{weatherData.main.pressure} mb</p>
                        </div>
                        <div className="max-temp-block d-f-s-b">
                            <p className="desc">MAX TEMP</p>
                            <p className="desc-props d-f"><FaTemperatureHigh/>{Math.floor(weatherData.main.temp_max - 273.15)}<span>&#8451;</span></p>
                        </div>
                        <div className="min-temp-block d-f-s-b">
                            <p className="desc">MIN TEMP</p>
                            <p className="desc-props d-f"><FaTemperatureLow/>{Math.floor(weatherData.main.temp_min - 273.15)}<span>&#8451;</span></p>
                        </div>
                    </div>
                </div>

            </div>
            ) : ('')}
        </div>
    )
}

export default Weather
