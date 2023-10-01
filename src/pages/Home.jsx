import React from 'react'; // Import de React
import Banner from "../components/banner/banner"; // Import du composant de bannière
import ImageBanner from "../assets/backgroundHome.jpg"; // Import de l'image de fond
import Logements from "../components/logements/Logements"; // Import du composant de logements


function Home() {
  return (
    <div className="home-page"> {/* Div principale de la page d'accueil */}
  
      <Banner backgroundImage={ImageBanner} title="Chez vous, partout et ailleurs" /> {/* Composant de bannière avec image de fond et un titre */}
      <Logements /> {/* Composant de liste de logements */}
     
    </div>
  );
}

export default Home;