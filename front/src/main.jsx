import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import Connexion from './Connexion.jsx'
import './index.css'
import Jeu from '/Jeu.jsx';
import Historique from '/Historique.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Connexion />
  </React.StrictMode>,
)
