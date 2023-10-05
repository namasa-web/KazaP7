import React from 'react'; 
import Banner from "../components/banner/Banner"; 
import ImageBanner from "../assets/backgroundHome.jpg"; 
import Logements from "../components/logements/Logements"; 


function Home() {
  return (
    <div className="home-page"> {/* Div principale de la page d'accueil */}
      <Banner backgroundImage={ImageBanner} title="Chez vous, partout et ailleurs" /> {/* Composant de bannière avec image de fond et le titre */}
      <Logements /> {/* Composant de liste des logements */}
     </div>
  );
}

export default Home;