import { useEffect, useState } from "react"
import { getCurrentWeather } from "../services/services"


const CurrentWeatherBox = () => {
    const[weatherData, setWeatherData] = useState<any | null>(null);

    useEffect(() => {
        getCurrentWeather(10.99, 44.34)
        .then(res => setWeatherData(res))
    })

    return (
        <>
            {weatherData != null && <p>Temperature is {weatherData.main.temp} Kelvin</p>}
        </>
    )
}

export default CurrentWeatherBox;