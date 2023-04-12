import React, { Dispatch, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchCurrentWeather } from '../redux/actions';
import { KIHNIÖ } from '../redux/types/Locations';
import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import moment from "moment";

const CurrentWeatherBox: React.FC = () => {
  const temperature = useAppSelector(state => state.weather.data?.temperature); // Access temperature from Redux store
  const condition = useAppSelector(state => state.weather.data?.condition); // Access condition from Redux store
  const name = useAppSelector(state => state.weather.data?.name);
  const icon = useAppSelector(state => state.weather.data?.icon);
  const date = useAppSelector(state => state.weather.data?.date);
  const windspeed = useAppSelector(state => state.weather.data?.windspeed);
  const humidity = useAppSelector(state => state.weather.data?.humidity);
  const precipitation = useAppSelector(state => state.weather.data?.precipitation);
  const isLoading = useAppSelector(state => state.weather.isLoading); // Access isLoading from Redux store
  const error = useAppSelector(state => state.weather.error); // Access error from Redux store

  const dispatch = useAppDispatch(); // Get dispatch function from useAppDispatch hook

  useEffect(() => {
    // Fetch weather data on component mount
    dispatch(fetchCurrentWeather(KIHNIÖ));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={1}>
        <Grid2 xs={6}>
          <Box sx={{ fontSize: 19, color: "#262626", pt: 1 }}>{name}</Box>
          <Box sx={{ fontSize: 13, color: "#70757A", pt: 0.35 }}>{condition != null && condition.charAt(0).toUpperCase() + condition.slice(1)}</Box>
        </Grid2>
        <Grid2 xs={6}>
          <Box sx={{ textAlign: "right", fontSize: 26, color: "#262626", pt: 1 }}><img src={`http://openweathermap.org/img/w/${icon}.png`} alt="Weather icon" id="icon" /> {temperature != null && Math.round(temperature)} &deg;C</Box>
        </Grid2>
        <Grid2 xs={6}>
          <Box sx={{ fontSize: 15, color: "#262626", pt: 4 }}>{date != null && moment(new Date(date * 1000)).format('MMMM Do')}</Box>
          <Box sx={{ fontSize: 13, color: "#70757A", pt: 0.35 }}>{date != null && moment(new Date(date * 1000)).format('HH:MM')}</Box>
        </Grid2>
        <Grid2 xs={6}>
          <Box sx={{ textAlign: "right", fontSize: 13, color: "#70757A", pt: 3 }}>Wind: {windspeed} m/s</Box>
          <Box sx={{ textAlign: "right", fontSize: 13, color: "#70757A" }}>Humidity: {humidity} %</Box>
          <Box sx={{ textAlign: "right", fontSize: 13, color: "#70757A" }}>Precipitation: {precipitation != null ? precipitation : 0} mm</Box>
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default CurrentWeatherBox;
