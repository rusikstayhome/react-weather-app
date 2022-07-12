import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
        <Weather defaultCity="London" />
        <footer>
          This project is {' '}
          <a href='https://github.com/svrmoar/weather-app-react' target='_blank' rel="noreferrer">open-sourced</a>
        </footer>
      </div>
    </div>
  );
}


