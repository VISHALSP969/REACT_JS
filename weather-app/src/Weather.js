import React,{useState} from 'react';
import './style.css';

function Weather(){
    const [city,setCity]=useState("");
    const [weather,setWeather]=useState(null);
    const [error, setError] = useState("");

    const API_KEY="92597dfe1e34be81f9fdf8ecd102d395";

    const fetchWeather= async (event)=>{
        event.preventDefault();

        if(city.trim()===""){
            setError("Please enter a city name");
            return;
        }

        try{
            const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            if(!response.ok){
                setError("City not found");
                setWeather(null);
            } else {
               const data=await response.json();
               setWeather(data); 
               setError("");
            }
        } catch(err) {
            setError("Failed to fetch weather data");
            setWeather(null);
        }
    } 

    return (
        <div className="weather-container">
          <h1>Weather App</h1>
          <form onSubmit={fetchWeather}>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
            />
            <button type="submit">Get Weather</button>
          </form>
    
          {error && <p className="error-message">{error}</p>}
    
          {weather && (
            <div className="weather-info">
              <h2>{weather.name}</h2>
              <p>Temperature: {weather.main.temp}°C</p>
              <p>Humidity: {weather.main.humidity}%</p>
              <p>Weather: {weather.weather[0].description}</p>
            </div>
          )}
        </div>
      );
}

export default Weather;