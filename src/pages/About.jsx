import React, { useState } from 'react';
import Banner from '../components/banner/banner';
import ImageAbout from '../assets/about_cover.png';
import Collapse from '../components/collapse/collapse';

function About() {
  // contenu qui sera affiché dans les Collapse
  const fiabilite = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
  const respect   = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  const service   = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  const securite  = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

  // Utilisation du hook useState pour gérer l'état du composant
  const [isOpen, setIsOpen] = useState(false);

  // Fonction de rappel pour gérer l'ouverture et la fermeture des Collapse
  const handleCollapse = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className="page_about"> 
      <Banner backgroundImage={ImageAbout} />
      <div className='collapse_about'>
        <div>
          {/* Utilisation du hook useState pour gérer l'état du Collapse */}
          <Collapse title="Fiabilité" content={fiabilite} isOpen={isOpen} handleCollapse={handleCollapse} />
        </div>
        <div>
          <Collapse title="Respect" content={respect} isOpen={isOpen} handleCollapse={handleCollapse} />
        </div>
        <div>
          <Collapse title="Service" content={service} isOpen={isOpen} handleCollapse={handleCollapse} />
        </div>
        <div>
          <Collapse title="Sécurité" content={securite} isOpen={isOpen} handleCollapse={handleCollapse} />
        </div>
      </div>  
    </div>
  );
}

export default About;