import axios from 'axios';
//require('dotenv').config()

axios.defaults.baseURL = 'https://api.openweathermap.org/data/2.5';
const appid = process.env.REACT_APP_WEATHER_API_KEY;

export const getCurrentWeather = (lat: number, lon: number) => {
    return axios.get('/weather', { params: { lat, lon, appid } })
    .then(res => res.data)
    .catch(err => console.log(err.response.data))
}