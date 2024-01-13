// src/components/Game/Game.jsx
import React, { useState, useEffect } from 'react';

const Game = () => {
  const [opponent, setOpponent] = useState(null);
  const [userChoice, setUserChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [rounds, setRounds] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {

    const fetchOpponentUsername = async () => {
      try {
        const response = await fetch('http://fauques.freeboxos.fr:3000/get-opponent-username', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          const opponentUsername = data.opponentUsername; // Adjust the property based on your server response
          setOpponent(opponentUsername);
        } else {

          console.error('Failed to fetch opponent username.');
        }
      } catch (error) {

        console.error('Error fetching opponent username:', error);
      }
    };


    fetchOpponentUsername();


    if (opponent && userChoice) {
      startGame();
    }
  }, [opponent, userChoice]);

  const startGame = async () => {

    try {
      const response = await fetch('http://fauques.freeboxos.fr:3000/get-opponent-move', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        const opponentMove = data.opponentMove; 
        setOpponentChoice(opponentMove);


        const roundWinner = determineWinner(userChoice, opponentMove);
        setWinner(roundWinner);


        setRounds((prevRounds) => prevRounds + 1);
      } else {

        console.error('Failed to fetch opponent move.');
      }
    } catch (error) {

      console.error('Error fetching opponent move:', error);
    }
  };

  const determineWinner = (playerChoice, opponentChoice) => {

  };

  return (
    <div>
      <h2>Game</h2>
      <p>Opponent: {opponent}</p>
      <p>Your Choice: {userChoice}</p>
      <p>Opponent's Choice: {opponentChoice}</p>
      <p>Round Winner: {winner}</p>
      <p>Number of Rounds: {rounds}</p>
    </div>
  );
};

export default Game;
