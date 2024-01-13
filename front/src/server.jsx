// src/ server.jsx

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3001; 


app.use(express.static(path.join(__dirname, 'build')));


app.get('/game-history', (req, res) => {
  // test
  const gameHistoryData = [
    { opponentUsername: 'Player1', result: 'Win', datetime: '2022-01-15T12:00:00Z' },
  ];

  res.setHeader('Content-Type', 'application/json');
  res.json(gameHistoryData);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
