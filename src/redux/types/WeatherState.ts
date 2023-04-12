// WeatherState.ts

// Define the shape of the weather state
export interface WeatherState {
    data: WeatherData | null;
    isLoading: boolean;
    error: string | null;
  }
  
// Define the shape of the weather data
export interface WeatherData {
  name: string | null;
  temperature: number | null;
  condition: string | null;
  icon: string | null;
  date: number | null;
  windspeed: number | null;
  humidity: number | null;
  precipitation: any | null;
  // Add other properties as needed
}
  
  