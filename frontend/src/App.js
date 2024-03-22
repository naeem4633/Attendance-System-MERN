import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DeviceManagement from './pages/DeviceManagement';
import LiveAttendance from './pages/LiveAttendance';
import DeviceSimulator from './pages/DeviceSimulator';
import DeviceDetails from './pages/DeviceDetails';
import PersonActionsPage from './pages/PersonActionsPage';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [deviceList, setDeviceList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/devices');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDeviceList(data);
      } catch (error) {
        console.error('Error fetching device list:', error);
      }
    };
  
    fetchData();
  }, []); 
  
  // useEffect(() => {
  //   console.log("device list: " + JSON.stringify(deviceList));
  // }, [deviceList]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="App-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/device-management" element={<DeviceManagement deviceList={deviceList}/>} />
            <Route path="/live-attendance" element={<LiveAttendance />} />
            <Route path="/device-simulator" element={<DeviceSimulator />} />
            <Route path="/device-details/:device_id" element={<DeviceDetails />} />
            <Route path="/person-actions-page/:person_id/:device_id" element={<PersonActionsPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

