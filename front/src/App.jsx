// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Logout from './components/Auth/Logout';
import MainPage from './components/Main/MainPage';
import Game from './components/Game/Game';
import GameHistory from './components/Game/GameHistory';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-history" element={<GameHistory />} />

        {/* La route par défaut est la mainpage */}
        <Route path="/*" element={<Navigate to="/main" />} />
      </Routes>
    </Router>
  );
};

export default App;
