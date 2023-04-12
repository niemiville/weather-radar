import { Dispatch } from "react";
import { WeatherAction } from "./types/WeatherAction";
import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from "./types/WeatherActionTypes";
import { getCurrentWeather } from "../services/services";
import { Location } from "./types/Locations";

// Action creator for fetchWeather
export const fetchCurrentWeather = (loc:Location) => async (dispatch: Dispatch<WeatherAction>) => {
    dispatch({ type: FETCH_WEATHER_REQUEST });

    try {
        // Fetch weather data from API

        const res = await getCurrentWeather(loc.lat, loc.lon);

        // Dispatch success action with fetched data
        dispatch({
            type: FETCH_WEATHER_SUCCESS,
            payload: {
                temperature: res.main.temp,
                condition: res.weather[0].description,
                name: res.name,
                icon: res.weather[0].icon,
                date: res.dt,
                windspeed: res.wind.speed,
                humidity: res.main.humidity,
                precipitation: res.rain
            },
        });
    } catch (error: any) {
        // Dispatch error action with error message
        dispatch({
            type: FETCH_WEATHER_FAILURE,
            error: error.message
        });
    }
};