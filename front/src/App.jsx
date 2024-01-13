// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/Main/MainPage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Logout from './components/Auth/Logout';
import Game from './components/Game/Game';
import GameHistory from './components/Game/GameHistory';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (user) => {
    setIsAuthenticated(true);
  };

  const handleRegister = (user) => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage isAuthenticated={isAuthenticated} onLogin={handleLogin} onRegister={handleRegister} onLogout={handleLogout} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} />} />
        <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game-history" element={<GameHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
