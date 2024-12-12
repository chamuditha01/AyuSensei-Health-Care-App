import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Pages/HomePage';
import CheckUp from './Pages/CheckUp';
import BMI from './Pages/BMI';
import MapView from './Pages/MapView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/checkup" element={<CheckUp/>} />
          <Route path="/bmi" element={<BMI/>} />
          <Route path="/map" element={<MapView/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
