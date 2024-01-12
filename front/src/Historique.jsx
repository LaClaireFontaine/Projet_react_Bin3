import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Jeu from './Jeu.jsx';

const JeuHist = ({ hist }) => {
    return (
      <div>
        <h2>Historique du jeu</h2>
        <table>
          <thead>
            <tr>
              <th>ID du Match</th>
              <th>Date</th>
              <th>Heure</th>
              <th>1er Joueur</th>
              <th>2eme Joueur</th>
              <th>Gagnant</th>
            </tr>
          </thead>
          <tbody>
            {hist.map((jeu, index) => (
              <tr key={index}>
                <td>{jeu.id}</td>
                <td>{jeu.date}</td>
                <td>{jeu.time}</td>
                <td>{jeu.choixJ}</td>
                <td>{jeu.choixOrdi}</td>
                <td>{jeu.resultat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };