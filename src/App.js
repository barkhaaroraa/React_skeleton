import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Analysis from './components/UserProfile';
import Report from './components/Report';
import Input from './components/Login';
import Drawer from './components/Drawer';

// import drawer from './components/drawer';
function App() {

  return (
    <div className="App">
    <Drawer />


      <Routes>
        <Route exact path='analysis' element={<Analysis />} />
        <Route path='report' element={<Report />} /> 
        <Route path="input" element={<Input />} />

      </Routes>
  
    </div>
  );
}

export default App;