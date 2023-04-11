// WeatherActionTypes.ts

// Define the action types as constants
export const FETCH_WEATHER_REQUEST = 'FETCH_WEATHER_REQUEST';
export const FETCH_WEATHER_SUCCESS = 'FETCH_WEATHER_SUCCESS';
export const FETCH_WEATHER_FAILURE = 'FETCH_WEATHER_FAILURE';

// Define the action types as a union type
export type WeatherActionTypes =
  | typeof FETCH_WEATHER_REQUEST
  | typeof FETCH_WEATHER_SUCCESS
  | typeof FETCH_WEATHER_FAILURE;

