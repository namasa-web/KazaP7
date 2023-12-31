import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from '../components/collapse/Collapse';
import Carousel from '../components/carousel/Carousel';
import logements from '../Datas/logements.json';

const arrayStars = [1, 2, 3, 4, 5];

function Card() {
  // Utilisation du hook useParams pour récupérer l'ID de l'URL
  const { id } = useParams();

  // Utilisation du hook useNavigate pour gérer la navigation
  const navigate = useNavigate();

  // Utilisation du hook useState pour gérer l'état du composant
  const [record, setRecord] = useState(null);

  // Utilisation du hook useEffect pour effectuer une requête HTTP au chargement du composant
  useEffect(() => {
    // Cherche l'appartement dans le fichier logements.json
    const logement = logements.find(element => element.id === id);

    /// Si l'appartement n'existe pas, rediriger vers la page d'erreur
    if (!logement) {
      return navigate('/ErrorPage');
    }

    // Si l'appartement existe, définit l'état avec les données de l'appartement
    setRecord(logement);
  }, [id, navigate]);

  // Si les données de l'appartement ne sont pas encore disponibles, affiche un loader
  if (!record) {
    return <div>Chargement...</div>;
  }

  // Récupère la liste des équipements
  const equipements = record.equipments.map((element, index) => (
    <li className="description-content" key={'equip-' + index.toString()}>
      {element}
    </li>
  ));

  // Récupère le nombre d'étoiles à afficher
  const nbreEtoiles = parseInt(record.rating);

  return (
    <div className="logement">
      {/* Carousel d'images */}
      <Carousel pictures={record.pictures} />

      {/* 1 - Affiche le titre, l'emplacement et les tags */}
      <div className="ficheLogement">
        <div className="div-description">
          <h1>{record.title}</h1>
          <h4>{record.location}</h4>
          <div className="div-tags">
            {record.tags.map((element, index) => {
              return (
                <p className="tags" key={'tags-' + index}>
                  {element}
                </p>
              );
            })}
          </div>
        </div>

        {/* 2 - Affiche le nom du propriétaire et sa photo */}
        <div className="bloc-stars">
          <div className="div-etoiles">
            <p>{record.host.name}</p>
            <img src={record.host.picture} alt={record.title} />
          </div>

          {/* 3 - Met et colorie les étoiles */}
          <div className="stars">
            {arrayStars.map(element => {
              return (
                <span
                  key={'star-' + element}
                  className={element <= nbreEtoiles ? 'span1' : 'span2'}
                >
                  ★
                </span>
              );
            })}
          </div>
        </div>
      </div>

      {/* Affiche la description et les équipements */}
      <div className="collapseLogement">
        <Collapse title="Description" content={record.description} />
        <Collapse title="Equipements" content={equipements} />
      </div>
    </div>
  );
}

export default Card;