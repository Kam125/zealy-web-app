import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import the necessary components from react-router-dom
import './App.css';
import Home from './pages/Home';
import WelcomeQuests from './pages/WelcomeQuests';
import LeaderBoard from './pages/LeaderBoard';
import Explore from './pages/Explore';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/welcome/quests" element={<WelcomeQuests />} />
          <Route path="/welcome/leaderboard" element={<LeaderBoard />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
