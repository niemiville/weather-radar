import React, { Dispatch, useEffect } from 'react';
//import { fetchWeather } from './actions'; // Import your fetchWeather action creator
import { getCurrentWeather } from '../services/services';
import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from '../redux/types/WeatherActionTypes';
import { WeatherAction } from '../redux/types/WeatherAction';
import { useAppDispatch, useAppSelector } from '../redux/hooks';

// Action creator for fetchWeather
export const fetchWeather = () => async (dispatch: Dispatch<WeatherAction>) => {
  dispatch({ type: FETCH_WEATHER_REQUEST });

  try {
    // Fetch weather data from API

    const response = await getCurrentWeather(62.203075, 23.176253);
    const temperature = response.main.temp;
    const condition = response.weather[0].description;

    // Dispatch success action with fetched data
    dispatch({
      type: FETCH_WEATHER_SUCCESS,
      payload: { temperature, condition },
    });
  } catch (error:any) {
    // Dispatch error action with error message
    dispatch({
      type: FETCH_WEATHER_FAILURE,
      error: error.message
    });
  }
};

const ReducerTestComponent: React.FC = () => {
  const temperature = useAppSelector(state => state.weather.data?.temperature); // Access temperature from Redux store
  const condition = useAppSelector(state => state.weather.data?.condition); // Access condition from Redux store
  const isLoading = useAppSelector(state => state.weather.isLoading); // Access isLoading from Redux store
  const error = useAppSelector(state => state.weather.error); // Access error from Redux store

  const dispatch = useAppDispatch(); // Get dispatch function from useAppDispatch hook

  useEffect(() => {
    // Fetch weather data on component mount
    dispatch(fetchWeather());
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Test component for reducer</h1>
      <p>Temperature: {temperature}</p>
      <p>condition: {condition}</p>
    </div>
  );
};

export default ReducerTestComponent;
