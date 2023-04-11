import CurrentWeatherBox from './components/CurrentWeatherBox';
import Container from '@mui/material/Container';
import ReducerTestComponent from './components/ReducerTestComponent';

function App() {

  return (
    <Container maxWidth="sm">
      <CurrentWeatherBox />
      <ReducerTestComponent />
    </Container>
  );
}

export default App;
