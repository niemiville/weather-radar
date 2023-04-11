import { WeatherAction } from './types/WeatherAction';
import { WeatherState } from './types/WeatherState';
import { FETCH_WEATHER_REQUEST, FETCH_WEATHER_FAILURE, FETCH_WEATHER_SUCCESS } from './types/WeatherActionTypes';

const initialState: WeatherState = {
  data: null,
  isLoading: false,
  error: null,
};

const weatherReducer = (state: WeatherState = initialState, action: WeatherAction): WeatherState => {
  switch (action.type) {
    case FETCH_WEATHER_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        data: { temperature: action.payload.temperature, condition: action.payload.condition },
        isLoading: false,
        error: null,
      };
    case FETCH_WEATHER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default weatherReducer;
