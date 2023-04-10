import { useEffect, useState } from "react"
import { getCurrentWeather } from "../services/services"
import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import moment from "moment";

const CurrentWeatherBox = () => {
    const[weather, setWeather] = useState<any | null>(null);

    useEffect(() => {
        getCurrentWeather(62.203075, 23.176253)
        .then(res => setWeather(res))
    }, [])

    console.log(weather);

    return ( 
        <Box sx={{ flexGrow: 1 }}>
        {weather != null &&
            <Grid2 container spacing={1}>
            <Grid2 xs={6}>
                <Box sx={{ fontSize: 19 , color: "#262626", pt: 1 }}>{weather.name}</Box>
                <Box sx={{ fontSize: 13 , color: "#70757A", pt: 0.35 }}>{weather.weather[0].description.charAt(0).toUpperCase() + weather.weather[0].description.slice(1)}</Box>
            </Grid2>
            <Grid2 xs={6}>
                <Box sx={{textAlign: "right", fontSize: 26, color: "#262626", pt: 1}}><img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="Weather icon" id="icon" /> {Math.round(weather.main.temp)} &deg;C</Box>
            </Grid2>
            <Grid2 xs={6}>
                <Box sx={{ fontSize: 15, color: "#262626", pt: 4 }}>{moment(new Date(weather.dt * 1000)).format('MMMM Do')}</Box>
                <Box sx={{ fontSize: 13, color: "#70757A", pt: 0.35 }}>{moment(new Date(weather.dt * 1000)).format('HH:MM')}</Box>
            </Grid2>
            <Grid2 xs={6}>
                <Box sx={{ textAlign: "right", fontSize: 13 , color: "#70757A", pt: 3 }}>Wind: {weather.wind.speed} m/s</Box>
                <Box sx={{ textAlign: "right", fontSize: 13 , color: "#70757A" }}>Humidity: {weather.main.humidity} %</Box>
                <Box sx={{ textAlign: "right", fontSize: 13 , color: "#70757A" }}>Precipitation: {weather.rain != null ? weather.rain : 0} mm</Box>
            </Grid2>
            </Grid2>
        }
      </Box>
    )
}
//{weatherData != null && <p>Temperature is {weatherData.main.temp} Kelvin</p>}
export default CurrentWeatherBox;
