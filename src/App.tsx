import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import the necessary components from react-router-dom
import './App.css';
import Home from './pages/Home';
import WelcomeZelly from './pages/Welome';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome" element={<WelcomeZelly />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
