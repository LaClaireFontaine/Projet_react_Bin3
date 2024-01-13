// src/components/Main/MainPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = ({ isAuthenticated, onLogout }) => {
  return (
    <div>
      <h2>Main Page</h2>
      {isAuthenticated ? (
        <>
          <Link to="/game">Play Game</Link>
          <Link to="/game-history">Game History</Link>
          <Link to="/logout" onClick={onLogout}>Logout</Link>
        </>
      ) : (
        <>
          <p>You need to login or register to access the game and game history.</p>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};

export default MainPage;