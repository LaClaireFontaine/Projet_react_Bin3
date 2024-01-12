import React, { useState } from 'react';

const Jeu = () => {
    const [choixJ, setChoixJ] = useState(null);
    const [choixOrdi, setChoixOrdi] = useState(null);
    const [resultat, setResult] = useState(null);

    const jouer = (choix) => {
        const choixOrdi = generChoixOrdi();
        setChoixJ(choix);
        setChoixOrdi(choixOrdi);
        setResult(deterResult(choix, choixOrdi));
    };

    const generChoixOrdi = () => {
        const choixPossibles = ['Pierre', 'Feuille', 'Ciseaux'];
        const index = Math.floor(Math.random() * choixPossibles.length);
        return choixPossibles[index];
    };

    const determinerResultat = (choixJ, choixOrdi) => {
        if (choixJ === choixOrdi) {
            return 'Égalité';
        } else if (
            (choixJ === 'Pierre' && choixOrdi === 'Ciseaux') ||
            (choixJ === 'Feuille' && choixOrdi === 'Pierre') ||
            (choixJ === 'Ciseaux' && choixOrdi === 'Feuille')
        ) {
            return 'Vous avez gagné!';
        } else {
            return 'Vous avez perdu!';
        }
    };

    return (
        <div>
            <h1>Chifoumi</h1>
            <button onClick={() => jouer('Pierre')}>Pierre</button>
            <button onClick={() => jouer('Feuille')}>Feuille</button>
            <button onClick={() => jouer('Ciseaux')}>Ciseaux</button>
            {choixJ && choixOrdi && resultat && (
                <div>
                    <p>Vous avez choisi: {choixJ}</p>
                    <p>L'ordinateur a choisi: {choixOrdi}</p>
                    <p>Résultat: {resultat}</p>
                </div>
            )}
        </div>
    );

    const [Historique, setHist] = useState([]);

    // Fonction pour ajouter un jeu à l'historique
    const addToHist = (jeuInfo) => {
        setHist([...history, jeuInfo]);
    };

    return (
        <div>
        <JeuHist history={history} />
        </div>
    );

    <div>
      {<button onClick={() => jouer('choixJ', 'choixOrdi')}>Nouvelle partie</button>}
    </div>
};

export default Jeu;


