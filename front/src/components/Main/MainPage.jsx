// src/components/Main/MainPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h2>Main Page</h2>
      <p>Welcome to the main page!</p>
      
      <Link to="/game">Play Game</Link>
      <br />
      <Link to="/game-history">Game History</Link>
      <br />
      <Link to="/logout">Logout</Link>
    </div>
  );
};

export default MainPage;
