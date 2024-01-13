// src/components/Game/GameHistory.jsx
import React, { useState, useEffect } from 'react';

const GameHistory = ({ userId }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {

    const fetchGameHistory = async () => {
      try {
        const response = await fetch(`${API_URL}/game-history/${userId}`);
        if (response.ok) {
          const data = await response.json();
          setHistory(data.history);
        } else {

        }
      } catch (error) {

      }
    };

    fetchGameHistory();
  }, [userId]);

  return (
    <div>
      <h2>Game History</h2>

      <ul>
        {history.map((game) => (
          <li key={game.id}>
            <p>Opponent: {game.opponent}</p>
            <p>Final Score: {game.finalScore}</p>
            <p>Date and Time: {game.datetime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameHistory;