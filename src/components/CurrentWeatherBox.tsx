import { useEffect, useState } from "react"
import { getCurrentWeather } from "../services/services"
import Grid2 from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

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
                <Item>{weather.name} {weather.weather[0].description}</Item>
            </Grid2>
            <Grid2 xs={6}>
                <Item>{weather.weather[0].icon} {weather.main.temp} C</Item>
            </Grid2>
            <Grid2 xs={6}>
                <Item>{weather.dt}</Item>
            </Grid2>
            <Grid2 xs={6}>
                <Item>{weather.wind.speed} - {weather.main.humidity} - {weather.rain}</Item>
            </Grid2>
            </Grid2>
        }
      </Box>
    )
}
//{weatherData != null && <p>Temperature is {weatherData.main.temp} Kelvin</p>}
export default CurrentWeatherBox;