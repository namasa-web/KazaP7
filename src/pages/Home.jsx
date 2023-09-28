import React from 'react';
import Banner from "../components/banner/banner";
import ImageBanner from "../assets/backgroundHome.jpg";
import Cards from '../components/cards/cards';  


function Home() {
  return (
    <div className="home-page"> 
      <Banner backgroundImage={ImageBanner} title="Chez vous, partout et ailleurs" />
      <Cards />
    </div>
    );
}

export default Home;