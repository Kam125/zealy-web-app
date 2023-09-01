import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import the necessary components from react-router-dom
import './App.css';
import Home from './pages/Home';
import WelcomeQuests from './pages/WelcomeQuests';
import LeaderBoard from './pages/LeaderBoard';
import Explore from './pages/Explore';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CreateCommunity from './pages/CreateCommunity';
import Changelog from './pages/Changelog';
import { useSelector } from 'react-redux';

function App() {
  const { token } = useSelector((state: any) => state.auth);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/welcome/quests" element={<WelcomeQuests />} />
        <Route path="/welcome/leaderboard" element={<LeaderBoard />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protect /create-community if token is empty */}
        {token ? (
          <Route path="/create-community" element={<CreateCommunity />} />
        ) : (
          <Route
            path="/create-community"
            element={<Navigate to="/login" replace />}
          />
        )}

        <Route path="/changelog" element={<Changelog />} />
      </Routes>
    </div>
  );
}

export default App;
