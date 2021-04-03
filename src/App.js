import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import './Alarm-Clock-Background-Images.jpeg';

function App() {
  return (
    <div className="App">
      <div className="home-page">
        <p className="welcome">Hello and Welcome!</p>
        <Clock />
      </div>
    </div>
  );
}

export default App;
