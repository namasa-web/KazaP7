import React from 'react';
import Banner from "../components/banner/banner";
import ImageBanner from "../assets/backgroundHome.jpg";

function Home() {
  return (
    <div className="home-page">
      <Banner backgroundImage={ImageBanner} title="Chez vous, partout et ailleurs" />
    </div>
  );
}

export default Home;