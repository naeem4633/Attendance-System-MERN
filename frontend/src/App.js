import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeviceManagement from './pages/DeviceManagement';
import LiveAttendance from './pages/LiveAttendance';
import DeviceSimulator from './pages/DeviceSimulator';
import DeviceDetails from './pages/DeviceDetails';

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/device-management" element={<DeviceManagement />} />
            <Route path="/live-attendance" element={<LiveAttendance />} />
            <Route path="/device-simulator" element={<DeviceSimulator />} />
            <Route path="/device-details" element={<DeviceDetails />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
