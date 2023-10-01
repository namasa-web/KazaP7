import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ErrorPage from '../pages/NotFound';
import Collapse from '../components/collapse/collapse';
import Carousel from '../components/carousel/carousel';
import logements from '../Datas/logements.json';

const arrayStars = [1, 2, 3, 4, 5];

function Card() {
  // Utilisation du hook useLocation pour récupérer l'ID de l'URL
  const location = useLocation();
  const idLogement = new URLSearchParams(location.search).get('_id');

  // Utilisation du hook useState pour gérer l'état du composant
  const [record, setRecord] = useState(null);

  // Utilisation du hook useEffect pour effectuer une requête HTTP au chargement du composant
  useEffect(() => {
    // Cherche l'appartement dans le fichier logements.json
    const logement = logements.find(element => element.id === idLogement);

    // Si l'appartement n'existe pas, redirection vers la page d'erreur
    if (!logement) {
      return <ErrorPage />;
    }

    // Si l'appartement existe, définit l'état avec les données de l'appartement
    setRecord(logement);
  }, [idLogement]);

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