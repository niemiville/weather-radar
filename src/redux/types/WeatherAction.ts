// WeatherAction.ts

import { FETCH_WEATHER_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS } from './WeatherActionTypes';
import { WeatherData } from './WeatherState';

// Define the action interfaces
interface FetchWeatherRequestAction {
  type: typeof FETCH_WEATHER_REQUEST;
}

interface FetchWeatherSuccessAction {
  type: typeof FETCH_WEATHER_SUCCESS;
  payload: WeatherData;
}

interface FetchWeatherFailureAction {
  type: typeof FETCH_WEATHER_FAILURE;
  error: string;
}

// Define a union type for all possible weather actions
export type WeatherAction =
  | FetchWeatherRequestAction
  | FetchWeatherSuccessAction
  | FetchWeatherFailureAction;

// Define action creators
export const fetchWeatherRequest = (): WeatherAction => {
  return {
    type: FETCH_WEATHER_REQUEST,
  };
};

export const fetchWeatherSuccess = (data: WeatherData): WeatherAction => {
  return {
    type: FETCH_WEATHER_SUCCESS,
    payload: data,
  };
};

export const fetchWeatherFailure = (error: string): WeatherAction => {
  return {
    type: FETCH_WEATHER_FAILURE,
    error: error,
  };
};

