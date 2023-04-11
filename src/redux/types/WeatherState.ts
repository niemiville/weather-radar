// WeatherState.ts

// Define the shape of the weather state
export interface WeatherState {
    data: WeatherData | null;
    isLoading: boolean;
    error: string | null;
  }
  
  // Define the shape of the weather data
  export interface WeatherData {
    temperature: number | null;
    condition: string | null;
    // Add other properties as needed
  }
  
  